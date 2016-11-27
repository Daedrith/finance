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

import { setRouter, registerAnchorEvents, navigate, navState } from 'mercury-navigator';

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

setRouter((href, context, opts) =>
{
  let route = router(href);
  if (!route) return null;

  let page = route.fn;
  if (page.init) // compatibility code. TODO: remove
  {
    let ret = (opts, disposeSignal) =>
    {
      let state = page.init(opts, opts, services);
      disposeSignal(() => page.dispose(state));
      return state;
    };
    ret.render = page.render;
    return ret;
  }
  else
  {
    return page;
  }
});

navigate(document.location.href, { history: 'pushState' });

registerAnchorEvents(hg.Delegator());

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

let notifications = hg.array([

]);

let appState = hg.state({
  dumpState: dbManager.keyArray(),
  showDesignDocs: hg.value(false),
  //ledger,
  listenerCount: dbManager.listenerCountObs,

  navState,
  sidebarVisible: hg.value(true),
  notifications,

  channels: {
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
  },
});

window.appState = appState;

dbManager.appState = appState;

let stop = hg.app(
  document.body,
  appState,
  renderMain);

export let __hotreload = true;
