import hg from 'mercury';
import Router from 'mercury-router';
import _ from 'underscore';
import co from 'co';
import routeMap from 'route-map';

import {log} from './lib/utils';

import appdb from './appdb';
import dbq from './querydb';

import index from './pages/index';

let {h} = hg;
let {anchor} = Router;

//export const __hotReload = true;

// TODO: export to modules
let queries = {
  ledger(d)
  {
    if (d._id < 'xact-' || 'xact.' <= d._id) return;
    
    if (d._deleted)
    {
      emit(null, d);
      return;
    }
    
    let postDate = Number(d._id.slice(5));
    for (let x of d.offsets)
    {
      emit([x.acct, postDate]);
    }
  },
  acctSum(d)
  {
    if (d._id < 'xact-' || 'xact.' <= d._id) return;
    
    if (d._deleted)
    {
      emit(null, d);
      return;
    }
    
    let postDate = Number(d._id.slice(5));
    for (let x of d.offsets)
    {
      emit([x.acct, postDate], x.add != null ? x.add : -x.sub);
    }
  }
}

// initialize in QueryManager
let indexPromises = [
  appdb.createIndex('ledger', queries.ledger),
  appdb.createIndex('acct-sum', queries.acctSum, '_sum')
];

Promise.all(indexPromises).then(() =>
{
// channels

let epoch = +new Date(2015, 8, 12, 0, 0, 0);
let genId = () => Math.floor((Date.now() - epoch) / 1000);

let channels = {
  acctAdd(s, d) {
    appdb.put({
      _id: d._id || `acct-${genId()}`,
      _rev: d._rev,
      name: d.name
    });
  },
  xactAdd(s, d) {
    let postDate = createDate = Date.now();
    let createDate = postDate;
    appdb.put({
      _id: 'xact-' + postDate,
      _rev: d._rev,
      createDate,
      status: 'verified',
      offsets: [
        { acct: _.findWhere(s.accts(), { name: d.from })._id,
          sub: 100 * d.amt },
        { acct: _.findWhere(s.accts(), { name: d.to })._id,
          add: 100 * d.amt }
      ]
    });
  },
  docDel(s, d) {
    appdb.remove(d).catch(log);
  },
  toggleFullDump(s, d) {
    s.showDesignDocs.set(d['full-dump']);
  }
};

let accts = dbq.keyObject({
  startkey: 'acct-'
});
let ledger = dbq.queryObject('ledger', {
  startkey: ['acct-2884365']
  // TODO: reduction for running total; probably do a custom one client-side
});
//let bal = queryValue('acct-sum', {
//  startkey: ['acct-2884365']
//});
let bal = hg.value(42);

let navState = hg.struct({
  // TODO: is a change in URL enough to assume page changes, or should I use an immutable surrogate?
  url: Router(),
  state: hg.array([null]), // TODO: custom observ to listen to inner observ but let us retrieve the observ itself
  activeRequest: hg.value(null)
});

let isNavigating = false;

{
  let oldUrl = null
  let oldState = null;
  let oldStateVal = null;
  navState(s =>
  {
    if (oldState && oldUrl !== s.url)
    {
      getPage(oldUrl).dispose(oldState);
      
      if (!isNavigating)
      {
        // user clicked back or entered a URL or something;
        // navigate didn't change URL
        setTimeout(
          () => navigate(s.url, { async: false }),
          0);
      }
    }
    
    let newState = navState.state.get(0);
    let newStateVal = newState();
    
    if (newStateVal !== oldStateVal)
    {
      // relies on Router executing pushState first
      window.history.replaceState(newStateVal, document.title);
    }
    
    oldUrl = s.url;
    oldState = newState;
    oldStateVal = newStateVal;
  });
}

let appState = hg.state({
  dumpState: dbq.keyArray(),
  showDesignDocs: hg.value(false),
  accts,
  ledger,
  
  // not sure about putting something here that isn't serializable...
  // not to mention, mutable props; custom thunks?
  navState,
  
  channels
});

let router = routeMap(index);

let getPage = url =>
{
  url = url || navState.url();
  if (!url instanceof URL) url = new URL(url);
  
  url = url.hash[0] === '/'
    // TODO: look for fragment in hash
    ? new URL(url.origin + url.hash.slice(1))
    : url;
      
  return router(url.href).fn;
};

let navigate = co.wrap((url, opts) =>
{
  let route = router(url);
  // TODO: avoid throwing an error?
  if (!route) throw new Error('Could not resolve ' + url.href);
  
  let ct = new Promise((resolve, reject) =>
  {
    ct.cancelled = null;
    ct.cancel = () => resolve(ct.cancelled = true);
    ct.dispose = () => resolve(ct.cancelled = false);
  });
  
  opts = Object.assign({ async: true, ct }, opts);
  let { async } = opts;
  
  let prevRequest = navState.activeRequest();
  if (prevRequest) prevRequest.cancel();
  
  navState.activeRequest.set(ct);
  
  let page = route.fn;
  let state = page.init(route.params, opts)
  if (async) state = yield state;

  if (ct.cancelled)
  {
    page.dispose(state);
    // TODO: avoid throwing an error?
    throw new Error('Navigation cancelled');
  }
  
  isNavigating = true;
  navState.set({
    url,
    [state], // FIXME: we need that custom observable after all
    activeRequest: null
  });
  isNavigating = false;
  
  ct.dispose();
});

// rendering

hg.Delegator().addGlobalEventListener('click', handleClick);
function handleClick(e)
{
  if (e.ctrlKey || e.shiftKey || e.button !== 0) return;
  
  let a = e.target;
  if (a.tagName.toLowerCase() !== 'a') return; // TODO: other exceptions?
  
  e.preventDefault();
  
  // TODO: use URL constructor to clone?
  let url = a;
  
  let segments = url.pathname.split('/');
  segments.shift(); // path always starts with /
  // compatibility: use hash (refreshing becomes a pain otherwise, until we have server rendering)
  [].push.apply(segments, url.hash.split('/'));
  
  navigate(url.href);
}

let a = (text, href, opts) =>
{
  opts = opts ? Object.assign(opts, { href }) : { href };
  return h('a', opts, text);
};

function renderNav()
{
  return h('nav',
    h('ul', [
      h('li', a('form1', '#/acct')),
      h('li', a('form1', '#/xact'))
    ])
  );
}

function renderPage(navState)
{
  return getPage(navState.url).render(navState.pageState);
}

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

let stop = hg.app(
  document.body,
  appState,
  (s) =>
  {
    let chs = s.channels;
    
    return h('div', [
      hg.partial(renderNav),
      h('.flex-container', [
        hg.partial(renderPage, s.navState),
        hg.partial(renderForm1, chs),
        hg.partial(renderForm2, chs),
        h('form', [
          h('datalist#accts',
            _.map(s.accts, a => h('option', { value: a.name }))
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
        h('pre', JSON.stringify(s.navState, null, 2))
      ])
    ]);
  });
  
});
