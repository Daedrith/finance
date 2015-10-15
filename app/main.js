'use strict';

import PouchDB from 'pouchdb';
import hg from 'mercury';
import {dbArray, dbQuery, dbValue} from './lib/observ-pouchdb';
import {log} from './lib/utils';

let h = hg.h;

// PouchDB.debug.enable('*');
let localDb = new PouchDB('finance');
localDb.on('error', () => { debugger; });

let createIndex = (name, map, reduce) =>
{
  map = map.toString();
  reduce = reduce && reduce.toString();
  return localDb.put({
    _id: "_design/" + name,
    views: {
      [name]: { map, reduce }
    }
  }).catch(e =>
  {
    if (e.status !== 409) log(e);
  });
};

let indexPromises = [
  createIndex('ledger', d =>
  {
    if (d._id < 'xact-' || 'xact.' <= d._id) return;
    
    if (d._deleted)
    {
      emit(null, d);
      return;
    }
    
    let postDate = Number(d._id.slice(5));
    for (let x of it.offsets)
    {
      emit([x,acct, postDate]);
    }
  }),
  createIndex('acct-sum', d =>
  {
    if (d._id < 'xact-' || 'xact.' <= d._id) return;
    
    if (d._deleted)
    {
      emit(null, d);
      return;
    }
    
    let postDate = Number(d._id.slice(5));
    for (let x of it.offsets)
    {
      emit([x,acct, postDate], x.add != null ? x.add : -x.sub);
    }
  }, '_sum')
];

Promise.all(indexPromises).then(() =>
{

// TODO: obj-based PK query
let accts = dbQuery(localDb, 'accts');
let ledger = dbQuery(localDb, 'ledger', {
  startkey: ['acct-49496']
  // TODO: reduction for running total; probably do a custom one client-side
});
//let bal = dbValue(localDb, 'acct-sum', {
//  startkey: ['acct-49496']
//});
let bal = hg.value(42);

// channels

let epoch = +new Date(2015, 8, 12, 0, 0, 0);
let genId = () => Math.floor((Date.now() - epoch) / 1000);

let channels = {
  acctAdd(s, d) {
    localDb.put({
      _id: d._id || `acct-${getId()}`,
      _rev: d._rev,
      name: d.name
    });
  },
  xactAdd(s, d) {
    let postDate = createDate = Date.now();
    let createDate = postDate;
    localDb.put({
      _id: 'xact-' + postDate,
      _rev: d._rev,
      createDate,
      status: 'verified',
      offsets: [
      // TODO: use s instead of accts
      { acct: accts()[d.from]._id,
        sub: 100 * d.amt },
      { acct: accts()[d.to]._id,
        add: 100 * d.amt }
      ]
    });
  },
  docDel(s, d) {
    localDb.remove(d).catch(log);
  },
  toggleFullDump(s, d) {
    s.showDesignDocs.set(d['full-dump']);
  }
};

let appState = hg.state({
  dumpState: dbArray(localDb),
  showDesignDocs: hg.value(false),
  accts,
  ledger: bal,
  channels
});

// rendering

let lbl = (n, c, a) => h('label', [n, h(c, a)]);

const required = true;

function renderForm1(chs)
{
  return h('form', { 'ev-submit': hg.sendSubmit(chs.acctAdd) },
    h('fieldset', [
      h('legend', 'Create Account'),
      lbl('Name', 'input', { name: 'name', required }),
      h('button', 'Create')
    ]));
}
function renderForm2(chs)
{
  return h('form', { 'ev-submit': hg.sendSubmit(chs.xactAdd) },
    h('fieldset', [
      h('legend', 'Create transaction'),
      lbl('From', 'input', { name: 'from', required, attributes: { list: 'accts' } }),
      lbl('To', 'input', { name: 'to', required, attributes: { list: 'accts' } }),
      lbl('Amount', 'input', { name: 'amt', type: 'number', step: 0.01, required }),
      h('button', 'Create')
    ]));
}

hg.app(
  document.body,
  appState,
  (s) =>
  {
    let chs = s.channels;
    
    return h('div', [
      h('.flex-container', [
        hg.partial(renderForm1, chs),
        hg.partial(renderForm2, chs),
        h('form', [
          h('datalist#accts',
            Object.keys(s.accts).map(a =>
              h('option', { value: a }))
          )
        ])
      ]),
      h('.flex-container', [
        h('pre#dbdump', [
          lbl('Show full dump', 'input', { name: 'full-dump', type: 'checkbox', 'ev-change': hg.sendChange(chs.toggleFullDump) }),
          s.dumpState
            .filter(d => s.showDesignDocs || d._id[0] !== '_')
            .map(d =>
              h('div', [
                JSON.stringify(d, null, 2).replace(/\\n/g, '\n'),
                h('span.del', { 'ev-click': hg.send(chs.docDel, d) })
              ]))
        ]),
        h('pre', JSON.stringify(s.ledger, null, 2))
      ])
    ]);
  });
  
});
