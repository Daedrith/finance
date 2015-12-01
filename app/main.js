import hg from 'mercury';
import Router from 'mercury-router';
import _ from 'underscore';
import co from 'co';

import obsobs from './lib/observ-observ';
import {log} from './lib/utils';

import appdb from './appdb';
import dbq from './querydb';

import renderMain from './main.render';

import { router, getPage } from './approuter';

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

let channels = {
  docDel(s, d) {
    appdb.remove(d).catch(log);
  },
  toggleFullDump(s, d) {
    s.showDesignDocs.set(d['full-dump']);
  },
  toggleSidedrawer(s) {
    s.sidebarVisible.set(!s.sidebarVisible());
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

let { obs: pageState, obsobs: pageObs } = obsobs({ title: 'Loading...' });

let navState = hg.struct({
  // TODO: is a change in URL enough to assume page changes, or should I use an immutable surrogate?
  url: hg.value(null),
  pageObs,
  activeRequest: hg.value(null)
});

let isNavigating = false;

let currentUrl = Router();
currentUrl(href =>
{
  if (isNavigating) return;

  navigate(href, { async: false, history: 'noop' });
});

pageState(s =>
{
  if (isNavigating) return;

  window.history.replaceState(s, s.title);
});

let createCancellationToken = () =>
{
  let resolve, reject;
  let ct = new Promise((res, rej) =>
  {
    resolve = res;
    reject = rej;
  });

  // HACK: es6.promise is polyfilling the native Promise;
  // we need to make the internal prop it uses non-enumerable for serialization
  if ('_d' in ct) {
    Object.defineProperty(ct, "_d", {
      enumerable: false
    });
  }

  let cancelled = null;
  Object.defineProperties(ct, {
    cancelled: { get: () => cancelled, enumerable: true },
    cancel: { value: () => resolve(cancelled = true) },
    dispose: { value: () => resolve(cancelled = false) }
  });

  return ct;
};

// TODO: maybe use the async transform instead?
// this is kinda imparative rather than reactive; is there a better pattern?
let navigate = co.wrap(function*(url, opts)
{
  let route = router(url);
  // TODO: avoid throwing an error?
  if (!route) throw new Error('Could not resolve ' + url.href);

  let prevRequest = navState.activeRequest();
  if (prevRequest) prevRequest.cancel();

  let ct = createCancellationToken();

  navState.activeRequest.set(ct);

  opts = Object.assign({ async: true, ct }, opts);
  let { async } = opts;

  let page = route.fn;
  let state = page.init(route.params, opts);

  if (async && state.ready && !state.ready.yet)
  {
    yield state.ready;

    if (ct.cancelled)
    {
      page.dispose(state);
      // TODO: avoid throwing an error?
      throw new Error('Navigation cancelled');
    }
  }

  // dispose of the old state
  let oldUrl = navState.url();
  if (oldUrl) getPage(oldUrl).dispose(navState.pageObs());

  isNavigating = true;

  // grr... not atomic
  // this will also trigger a new value on pageState, but since we're in the
  // isNavigating guard, the only thing which should act on it is rendering,
  // and since that gets deferred to RAF, we shouldn't get mixed up with the
  // wrong state rendered by the wrong page
  navState.set({
    url,
    pageObs: state,
    activeRequest: null
  });

  if (opts.history !== 'noop')
  {
    let stateVal = state();
    let historyAction = opts.history === 'replace' ? history.replaceState : history.pushState;
    historyAction.call(history, stateVal, stateVal.title, url);
  }

  isNavigating = false;

  ct.dispose();
});

// TODO: loading screen?
navigate(document.location.href, { async: false, history: 'noop' });

hg.Delegator().addGlobalEventListener('click', handleClick);
function handleClick(e)
{
  if (e.ctrlKey || e.shiftKey || e.button !== 0) return;

  let a = e.target;
  if (a.tagName.toLowerCase() !== 'a' || !a.href) return; // TODO: other exceptions?

  e.preventDefault();

  // TODO: navigating to the same href as current url?
  navigate(a.href);
}

let appState = hg.state({
  dumpState: dbq.keyArray(),
  showDesignDocs: hg.value(false),
  accts,
  ledger,
  listenerCount: dbq.listenerCountObs,

  // not sure about putting something here that isn't serializable...
  // not to mention, mutable props; custom thunks?
  navState,
  pageState,
  sidebarVisible: hg.value(true),

  channels
});

window.appState = appState;

let stop = hg.app(
  document.body,
  appState,
  renderMain);

}); // end index creation promise

export let __hotreload = true;
