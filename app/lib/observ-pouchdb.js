'use strict';

import _ from 'underscore';
import hg from 'mercury';
import {log} from './utils'

export let dbArray = (localDb, opts) =>
{
  opts = opts || {};

  // TODO: avoid mutating opts?
  // TODO: use custom observable to remove change query
  // - also possibly consolidate to one change feed and subscribe (borrow a pubsub impl. from somewhere?)
  let arr = hg.array([]);
  
  if (opts.startkey != null && opts.endkey == null)
  {
    let c = String.fromCharCode(
      opts.startkey.slice(-1).charCodeAt(0) + 1);
    opts.endkey = opts.startkey.slice(0, -1) + c;
    opts.inclusive_end = false;
  }
  
  // TODO: do we use struct or value?
  let initQuery = Object.assign({ include_docs: true }, opts);
  localDb
    .allDocs(initQuery)
    .catch(log)
    .then(res => arr.set(res.rows.map(d => hg.value(d.doc))));
  
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
  
  localDb
    .changes(changeQuery)
    .on('change', c =>
    {
      let ind;
      arr.some((d, i) =>
      {
        if (d()._id === c.id) ind = i;
      });
      
      if (c.deleted) arr.splice(ind, 1);
      else if (ind != null) arr.put(ind, hg.value(c.doc));
      // insert in order?
      else arr.push(hg.value(c.doc));
    });
  
  return arr;
}

export let dbObject = (localDb, opts, valueConstructor) =>
{
  opts = opts || {};

  // TODO: avoid mutating opts?
  // TODO: use custom observable to remove change query
  // - also possibly consolidate to one change feed and subscribe (borrow a pubsub impl. from somewhere?)
  let obj = hg.varhash({}, valueConstructor || hg.value);
  
  if (opts.startkey != null && opts.endkey == null)
  {
    let c = String.fromCharCode(
      opts.startkey.slice(-1).charCodeAt(0) + 1);
    opts.endkey = opts.startkey.slice(0, -1) + c;
    opts.inclusive_end = false;
  }
  
  // TODO: do we use struct or value?
  let initQuery = Object.assign({ include_docs: true }, opts);
  localDb
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
  
  localDb
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
export let dbQuery = (localDb, view, opts) =>
{
  opts = opts || {};
  
  let hash = hg.varhash({}, hg.value);
  
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
    localDb
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
  localDb
    .changes(changeQuery)
    .on('change', c => refresh());
  
  return hash;
};

export let dbValue = (localDb, view, opts) =>
{
  opts = opts || {};
  
  let val = hg.value(null);
  
  // TODO: serialize?
  let refresh = () =>
  {
    localDb
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
  localDb
    .changes(changeQuery)
    .on('change', refresh);
  
  return val;
};
