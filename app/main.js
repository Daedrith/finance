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

let navState = hg.struct({
  // TODO: is a change in URL enough to assume page changes, or should I use an immutable surrogate?
  url: Router(),
  state: obsobs({ title: 'Loading...' }),
  activeRequest: hg.value(null)
});

let isNavigating = false;

// handle navState changes
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

    // TODO: get rid of these ugly null checks
    let newState = navState.state.observ;
    let newStateVal;
    if (newState)
    {
      newStateVal = newState();

      if (newStateVal !== oldStateVal)
      {
        // relies on Router executing pushState first
        window.history.replaceState(newStateVal, document.title);
      }
    }

    oldUrl = s.url;
    oldState = newState;
    oldStateVal = newStateVal;
  });
}

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

  // TODO: how do we support a replaceState option?
  // - perhaps we need to model the History API more accurately:
  //   a stack of {url, title, state} entries, so that we can
  //   push/replace/popstate with normal state manipulation,
  //   as well as capture that happening externally (e.g. we can
  //   choose to dispose a state only once it is popped off)
  isNavigating = true;
  navState.state.observ = state;
  navState.set({ // FIXME: grr... not atomic
    url,
    state: state(),
    activeRequest: null
  });
  isNavigating = false;

  ct.dispose();
});

// TODO: loading screen?
//setTimeout(() =>
  navigate(document.location.href, { async: false })
//  , 0);

hg.Delegator().addGlobalEventListener('click', handleClick);
function handleClick(e)
{
  if (e.ctrlKey || e.shiftKey || e.button !== 0) return;

  let a = e.target;
  if (a.tagName.toLowerCase() !== 'a' || !a.href) return; // TODO: other exceptions?

  e.preventDefault();

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
