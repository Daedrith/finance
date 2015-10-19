'use strict';

import _ from 'underscore';
import hg from 'mercury'; // TOOD: import individual modules
//import observArray from 'mercury/observ-array';
//import observVarhash from 'mercury/observ-varhash';
//import observValue from 'observ';

import Observ2 from '../lib/observ2';
import {log} from './utils';

let { array: observArray, varhash: observVarhash, value: observValue } = hg;

export default class
{
  constructor(db)
  {
    this.db = db;
    
    this._changes = db.changes({ live: true, include_docs: true, since: 'now' });
  }
  
  keyArray(opts)
  {
    opts = opts || {};

    // TODO: avoid mutating opts?
    // TODO: use custom observable to remove change query
    // - also possibly consolidate to one change feed and subscribe (borrow a pubsub impl. from somewhere?)
    let arr = [];
    let observ = Observ2(arr);
    
    if (opts.startkey != null && opts.endkey == null)
    {
      let c = String.fromCharCode(
        opts.startkey.slice(-1).charCodeAt(0) + 1);
      opts.endkey = opts.startkey.slice(0, -1) + c;
      opts.inclusive_end = false;
    }
    
    let initQuery = Object.assign({ include_docs: true }, opts);
    this.db
      .allDocs(initQuery)
      .catch(log)
      .then(res => observ.set(arr = res.rows.map(d => observValue(d.doc))));
    
    let publish = _.debounce(() =>
    {
      observ.set(arr);
      arr = arr.slice(0); // TODO: make lazy (copy before mutation), track when copy isn't needed e.g. element mutation
    }, 1); // maybe a setImmediate version, or zero?
    
    let processChange = c =>
    {
      // TODO: account for inclusive_end
      if (opts.startkey != null
        && !(c => opts.startkey <= c.id && c.id < opts.endkey))
      {
        return;
      }
      
      let ind;
      arr.some((d, i) =>
      {
        if (d()._id === c.id)
        {
          ind = i;
          return true;
        }
      });
      
      if (c.deleted) arr.splice(ind, 1);
      else if (ind != null) arr[ind].set(c.doc);
      // insert in order?
      else arr.push(observValue(c.doc));
      
      publish();
    };
    
    observ[Observ2.listeners].on('add', (l, ls) =>
    {
      if (ls.length === 1) this._changes.on('change', processChange);
    });
    observ[Observ2.listeners].on('remove', (l, ls) =>
    {
      if (ls.length === 0) this._changes.removeListener('change', processChange);
    });
    
    return observ;
  }

  keyObject(opts, valueConstructor)
  {
    opts = opts || {};

    // TODO: avoid mutating opts?
    // TODO: use custom observable to remove change query
    // - also possibly consolidate to one change feed and subscribe (borrow a pubsub impl. from somewhere?)
    let obj = observVarhash({}, valueConstructor || observValue);
    
    if (opts.startkey != null && opts.endkey == null)
    {
      let c = String.fromCharCode(
        opts.startkey.slice(-1).charCodeAt(0) + 1);
      opts.endkey = opts.startkey.slice(0, -1) + c;
      opts.inclusive_end = false;
    }
    
    // TODO: do we use struct or value?
    let initQuery = Object.assign({ include_docs: true }, opts);
    this.db
      .allDocs(initQuery)
      .catch(log)
      .then(res =>
      {
        for (let d of res.rows) obj.put(d.id, d.doc);
      });
    
    if (opts.startkey != null)
    {
      // TODO: account for inclusive_end
      opts.filter = d => opts.startkey <= d._id < opts.endkey;
    }
    
    let changeQuery = Object.assign({
      live: true,
      include_docs: true,
      since: 'now'
    }, opts);
    
    this.db
      .changes(changeQuery)
      .on('change', c =>
      {
        if (c.deleted) obj.del(c.id);
        else obj.put(c.id, c.doc);
      });
    
    return obj;
  }

  // TODO: array varient
  // TODO: custom hg.partial comparator based on _rev
  queryObject(view, opts)
  {
    opts = opts || {};
    
    let hash = observVarhash({}, observValue);
    
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

  queryValue(view, opts)
  {
    opts = opts || {};
    
    let val = observValue(null);
    
    // TODO: serialize?
    let refresh = () =>
    {
      this.db
        .query(view, opts)
        .catch(log)
        .then(res => val.set(res.rows[0].value));
    };
    
    refresh();
    
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
}