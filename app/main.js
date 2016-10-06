import hg from 'mercury';
import Router from 'mercury-router';
import _ from 'underscore';
import co from 'co';
import PouchDB from 'pouchdb';

import DbManager from './lib/db-manager';
import obsobs from './lib/observ-observ';
import {log} from './lib/utils';

import renderMain from './main.render';

import { router, getPage } from './approuter';

let {h} = hg;
let {anchor} = Router;

//export const __hotReload = true;

// PouchDB.debug.enable('*');
let appDb = new PouchDB('finance');
appDb.on('error', (e) => { console.log(e); });

let dbManager = new DbManager(appDb);

// the mercury Component pattern seems to advocate emitting events, like a decoupled RPC mechanism;
// for now, I'll go for something simple
let services = {
  appDb,
  dbManager,
};

Object.assign(window, services);

// channels
let channels = {
  toggleSidedrawer(s) {
    s.sidebarVisible.set(!s.sidebarVisible());
  },
  // debug
  docDel(s, d) {
    appDb.remove(d).catch(log);
  },
  toggleFullDump(s, d) {
    s.showDesignDocs.set(d['full-dump']);
  },
};

//let ledger = dbManager.queryObject('ledger', {
//  //startkey: ['acct-32104241']
//  //include_docs: false,
//  reduce: false,
//  //group: true,
//  //group_level: 1,
//});
//let ledger = dbManager.queryValue('ledger', {
//  //startkey: ['acct-32104241']
//  //include_docs: false,
//  reduce: true,
//  group: true,
//  group_level: 1,
//});
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

// TODO: debounce?
pageState(s =>
{
  if (isNavigating) return;

  // save pageState value in history stack
  window.history.replaceState(s, s.title);
});

// TODO: module?
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
  let state = page.init(route.params, opts, services);

  if (async && state.ready && !state.ready.yet)
  {
    yield state.ready;

    if (ct.cancelled)
    {
      if (page.dispose) page.dispose(state); // TODO: remove?
      // TODO: avoid throwing an error?
      throw new Error('Navigation cancelled');
    }
  }

  // dispose of the old state (TODO: remove?)
  let oldUrl = navState.url();
  if (oldUrl)
  {
    let oldPage = getPage(oldUrl);
    if (oldPage.dispose) oldPage.dispose(navState.pageObs());
  }

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

let notifications = hg.array([

]);

let appState = hg.state({
  dumpState: dbManager.keyArray(),
  showDesignDocs: hg.value(false),
  //ledger,
  listenerCount: dbManager.listenerCountObs,

  // not sure about putting something here that isn't serializable...
  // not to mention, mutable props; custom thunks?
  navState,
  pageState,
  sidebarVisible: hg.value(true),
  notifications,

  channels,
});

window.appState = appState;

dbManager.appState = appState;

let stop = hg.app(
  document.body,
  appState,
  renderMain);

export let __hotreload = true;
