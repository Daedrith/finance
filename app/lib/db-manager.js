import _ from 'underscore';
import hg from 'mercury'; // TOOD: import individual modules
//import ObservArray from 'mercury/observ-array';
//import ObservVarhash from 'mercury/observ-varhash';
//import ObservValue from 'observ';

import createObservProp from './es5-observ';
import utils from './utils';
import MetaObserv from './observ-observ';
let { isMetaObserv } = MetaObserv;

let {log, trace} = utils;

let { array: ObservArray, varhash: ObservVarhash, value: ObservValue } = hg;

let onChange = Symbol();

class DbManager
{
  constructor(db, opts = {})
  {
    this.db = db;

    this.viewDefs = {};
    this.viewResolver = opts.viewResolver || (n => System.import(`app/data/views${name}`));

    // TODO: also take in state atom root; on change recursively walk it to find
    // change handlers (private symbol attached to a state atom)
    this._changes = db.changes({ live: true, include_docs: true, since: 'now' });
    this.listenerCountObs = createObservProp(this, 'listenerCount', 0);

    this.addChangeListener(c => this.broadcast(c, this.appState));
  }

  addChangeListener(listener)
  {
    this._changes.on('change', listener);
    this.listenerCount++;
    return this._removeChangeListener.bind(this, listener);
  }
  _removeChangeListener(listener)
  {
    this._changes.removeListener('change', listener);
    this.listenerCount--;
  }

  broadcast(c, root)
  {
    if (!root) return;

    let type = root._type;
    if (root[isMetaObserv])
    {
      this.broadcast(c, root());
    }
    else if (type === 'observ-array' || Array.isArray(root))
    {
      // TODO: define a local function and bind this once?
      root.forEach(this.broadcast.bind(this, c));
    }
    else if (type === 'observ-struct')
    {
      let keys = _.without(Object.keys(root), ['set', '_diff', '_type', '_version']);
      for (let key of keys) this.broadcast(c, root[key]);
    }
    else if (root.put && root.delete)
    {
      // varhash has to be duck-typed
      let keys = Object.keys(root());
      for (let key of keys) this.broadcast(c, root.get(key));
    }
    // TODO: ObservStruct2
    // TODO: do we wakl normal objects/arrays?

    for (let sym of Object.getOwnPropertySymbols(root))
    {
      // TODO: also walk down symbol props?
      if (sym === onChange && typeof root[onChange] === 'function') root[onChange](c);
    }
  }

  createIndex(name, map, reduce)
  {
    map = map.toString();
    reduce = reduce && reduce.toString();
    return this.db.put({
      _id: "_design/" + name,
      views: {
        [name]: { map, reduce }
      }
    }).catch(e =>
    {
      if (e.status !== 409) log(e); // TODO: rethrow?
    });
  }

  loadIndex(name)
  {
    if (this.viewDefs[name]) return Promise.resolve(this.viewDefs[name]);

    let view;
    return this.viewResolver(name).then(v =>
    {
      this.viewDefs[name] = v;
      return this.createIndex(name, v.map, v.reduce)
        .then(() => v);
    });
  }

  keyArray(opts)
  {
    opts = opts || {};

    let observ = ObservArray([]);

    // TODO: avoid mutating opts?
    if (opts.startkey != null && opts.endkey == null)
    {
      let c = String.fromCharCode(
        opts.startkey.slice(-1).charCodeAt(0) + 1);
      opts.endkey = opts.startkey.slice(0, -1) + c;
      opts.inclusive_end = false;
    }

    let initQuery = Object.assign({ include_docs: true }, opts);
    observ.ready = this.db
      .allDocs(initQuery)
      .catch(log)
      .then(res =>
      {
        observ.set(res.rows.map(d => ObservValue(d.doc)));

        let processChange = c =>
        {
          // TODO: account for inclusive_end
          if (opts.startkey != null
            && !(c => opts.startkey <= c.id && c.id < opts.endkey))
          {
            return;
          }

          let ind;
          observ.some((d, i) =>
          {
            if (d()._id === c.id)
            {
              ind = i;
              return true;
            }
          });

          if (c.deleted) observ.splice(ind, 1);
          else if (ind != null) observ.get(ind).set(c.doc);
          // insert in order?
          else observ.push(ObservValue(c.doc));
        };

        observ.ready.yet = true;
        observ[onChange] = processChange;
        //observ.dispose = this.addChangeListener(processChange);
        return observ;
      });

    return observ;
  }

  keyObject(opts, valueConstructor)
  {
    opts = Object.assign({ include_docs: true }, opts);

    // TODO: avoid mutating opts?
    if (opts.startkey != null && opts.endkey == null)
    {
      let c = String.fromCharCode(
        opts.startkey.slice(-1).charCodeAt(0) + 1);
      opts.endkey = opts.startkey.slice(0, -1) + c;
      opts.inclusive_end = false;
    }

    let obj = ObservVarhash({}, valueConstructor || ObservValue);

    // TODO: do we use struct or value?
    obj.ready = this.db
      .allDocs(opts)
      .catch(log)
      .then(res =>
      {
        for (let d of res.rows) obj.put(d.id, d.doc);

        let processChange = c =>
        {
          // TODO: account for inclusive_end
          if (opts.startkey != null
            && !(c => opts.startkey <= c.id && c.id < opts.endkey))
          {
            return;
          }

          if (c.deleted) obj.delete(c.id);
          else obj.put(c.id, c.doc);
        };

        obj.ready.yet = true;
        obj[onChange] = processChange;
        // FIXME: if we try to call dispose be this continuation runs
        //obj.dispose = this.addChangeListener(processChange);
        return obj;
      });

    return obj;
  }

  // TODO: array varient
  // TODO: custom hg.partial comparator based on _rev
  queryObject(view, opts)
  {
    // TODO: loadIndex
    opts = opts || {};

    let hash = ObservVarhash({}, ObservValue);

    if (opts.startkey != null && opts.endkey == null)
    {
      // could better be written recursively...
      let genEndKey = k =>
      {
        let c = String.fromCharCode(
          k.slice(-1).charCodeAt(0) + 1);
        return k.slice(0, -1) + c;
      }
      opts.endkey = Array.isArray(opts.startkey)
        ? [genEndKey(opts.startkey[0])]
        : genEndKey(opts.startkey);

      opts.inclusive_end = false;
    }

    let viewQuery = Object.assign({ include_docs: true }, opts);

    let refresh = () =>
    {
      this.db
        .query(view, viewQuery)
        .catch(log)
        .then(res =>
        {
          let old = hash();
          let oldkeys = Object.keys(old);
          let n = _.indexBy(res.rows, r => r.key);
          let newkeys = Object.keys(n);
          // TODO: better way compute these three sets?
          // if my output was array-based, I could do a "merge join"-like strategy
          for (let k of _.difference(newkeys, oldkeys))
          {
            hash.put(k, n[k].doc);
          }
          for (let k of _.difference(oldkeys, newkeys))
          {
            hash.delete(k);
          }
          for (k of _.intersection(oldkeys, newkeys))
          {
            if (old[k]._rev !== n[k].doc._rev)
            {
              hash.put(k, n[k].doc);
            }
          }
        });
    };

    // TODO: use [onChange]; will need to know view definition...
    let changeQuery = Object.assign(
      {
        live: true,
        since: 'now',
        filter: '_view',
        view
      },
      opts);
    this.db
      .changes(changeQuery)
      .on('change', c => refresh());

    refresh();

    return hash;
  }

  keyValue(id, opts)
  {
    let { defaultValue } = opts;

    let val = ObservValue(defaultValue);

    val.ready = this.db
      .get(id, opts)
      .catch(log)
      .then(doc =>
      {
        val.set(doc);

        let processChange = c =>
        {
          if (c.id !== id) return;

          // hmm... dispose ourselves in case of delete?
          val.set(c.deleted ? null : c.doc);
        };

        val[onChange] = processChange;
        //val.dispose = this.addChangeListener(processChange);
        val.ready.yet = true;
        return val;
      });

    return val;
  }

  queryValue(view, opts)
  {
    // TODO: loadIndex
    opts = opts || {};

    let val = ObservValue(null);

    // TODO: serialize?
    let refresh = () =>
    {
      this.db
        .query(view, opts)
        .catch(log)
        .then(res => val.set(res.rows[0].value));
    };

    refresh();

    // TODO: use [onChange]; need to know view definition
    changeQuery = {
      live: true,
      since: 'now',
      filter: '_view',
      view
    };
    this.db
      .changes(changeQuery)
      .on('change', refresh);

    return val;
  }
};

DbManager.prototype.onChange = onChange;

export default DbManager;
