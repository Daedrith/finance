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

let currentUrl = hg.computed([Router()], href => new URL(href));

// TODO: on cold load, currentUrl will be out of sync with actual location, because we need to display a loading page; maybe a special flag?
// TODO: should these props be hg.value()s?
let navState = hg.struct({
  // document.location
  currentUrl, // TODO: no enumerable properties? might be better to just have the href...
  // observable returned by page component
  // there's an observer that listens and passes the value to replaceState
  currentPage: null,
  activeRequest: null
});



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

let moduleCache = new Map();
let loadModule = (...path) =>
{
  let id = path.map(s => s.replace(/^\/|\/$/g, '')).join('/');
  let ret = moduleCache.get(id);
  if (!ret)
  {
    ret = System.import(id).catch(e => Promise.reolve(null));
    moduleCache.put(id, ret);
  }
  
  return ret;
};

let router = routeMap(index);

let pageModuleBase = 'pages';
let resolvePage = (fun, url, ...args) =>
{
  if (!url instanceof URL) url = new URL(url);
  
  args.unshift(
    url.hash[0] === '/'
      // TODO: look for fragment in hash
      ? new URL(url.origin + url.hash.slice(1))
      : url);
  return fun.apply(null, args);
}.bind(null, co.wrap(function* (url, pageState, throwIfCancelled)
{
  throwIfCancelled = throwIfCancelled || () => {};
  let segments = url.pathname.split('/');
  
  while (segments.length > 0)
  {
    let seg = segments.shift();
    let module = yield loadModule(pageModuleBase, seg, 'index');
    throwIfCancelled();
    module = module || yield loadModule(pageModuleBase, seg);
    throwIfCancelled();
    if (module && module.router)
    {
      let ret = module.router(url, pageState);
      if (ret.then) ret = yield ret;
      if (ret) return ret;
    }
  }
  
  throw new Error('Could not resolve  ' + url.href);
}));

// would be better if a url can always resolve to a renderer, rather than rely on the state of this map
let rendererMap = new Map();
  
let navigate = (url, pageState) =>
{
  let pagePromise;
  let throwIfCancelled = () =>
  {
    if (navState.activeRequest !== pagePromise)
    {
      throw new Error("Navigation cancelled");
    }
  };
  
  pagePromise = resolvePage(url, pageState, throwIfCancelled);
  navState.activeRequest = pagePromise;
  
  return pagePromise.then(page =>
  {
    if (navState.activeRequest !== pagePromise)
    {
      if (page.dispose) page.dispose();
      
      return;
    }
    
    let currentPage = navState.currentPage;
    
    // save this page's state, in case user closes and reopens tab
    // TODO: this should be a listener to the page state (debounced?) then I leave this in; handle disposal separately?
    window.history.replaceState(
      currentPage(),
      currentPage.title || '', // observable?
      navState.currentUrl.href);
    
    if (currentPage.dispose) currentPage.dispose();
    
    window.history.pushState(
      page(),
      page.title || '', // observable?
      url.href);
    
    rendererMap.set(url.href, page.render);
    
    navState.currentPage.set(page);
    
    return page;
  });
};
  
// rendering

// TODO: make this a global handler
function handleClick(e)
{
  if (e.ctrlKey || e.shiftKey) return;
  
  e.preventDefault();
  
  // TODO: use URL constructor to clone?
  let url = e.target;
  
  let segments = url.pathname.split('/');
  segments.shift(); // path always starts with /
  // compatibility: use hash (refreshing becomes a pain otherwise, until we have server rendering)
  [].push.apply(segments, url.hash.split('/'));
  
  // TODO: load module to handle routing
  // make this function async?
  //let resource = segments[0];
  //let pm = appState.pageModules.get(resource)
  //if (!pm)
  //{
  //  resource = await System.import('pages/' + resource);
  //}
  
  
  appState.route.set(url.href);
}

let a = (text, href, opts) =>
{
  opts = opts || {};
  return h('a', Object.assign(opts, {
    href,
    'ev-click': handleClick
  }), text);
};

function renderNav()
{
  return h('nav',
    h('ul', [
      h('li', a('form1', '#acct')),
      h('li', a('form1', '#xact'))
    ])
  );
}

function renderRoute(route, navState)
{
  rendererMap
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
