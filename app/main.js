﻿import hg from 'mercury';
import Router from 'mercury-router';
import co from 'co';

import struct from 'observ-struct-a';
import * as observPouchdb from 'observ-pouchdb';

import obsobs from './lib/observ-observ';
import {log} from './lib/utils';

import renderMain from './main.render';

import { router, getPage } from './approuter';
import { appDb } from './appdb';
import { wrapPatch, postPatchTaskQueue } from './lib/post-patch-queue';

import { setRouter, setPostRenderRunner, registerAnchorEvents, navigate, navState } from 'mercury-navigator';

let {h} = hg;
let {anchor} = Router;

//export const __hotReload = true;

Object.assign(observPouchdb.defaults, {
  db: appDb,
  ObservArray: hg.array,
  ObservValue: hg.value,
  ObservVarhash: hg.varhash,
  errorHandler: e => console.error(e),
});

setRouter((href, opts) =>
{
  let route = router(href);
  if (!route) return null;

  let page = route.fn;
  opts.params = route.params;
  return page;
});
setPostRenderRunner([].push.bind(postPatchTaskQueue));

navigate(document.location.href, { history: 'replaceState' });

registerAnchorEvents(hg.Delegator());

let notifications = hg.array([

]);

let appState = hg.state({
  navState,
  sidebarVisible: hg.value(true),
  notifications,

  showDebug: hg.value(false),

  channels: {
    toggleSidedrawer(s) {
      s.sidebarVisible.set(!s.sidebarVisible());
    },
    toggleDebug(s, d)
    {
      s.showDebug.set(!s.showDebug());
    },
  },
});

window.appState = appState;

let stop = hg.app(
  document.body,
  appState,
  renderMain,
  { patch: wrapPatch(hg.patch) });

export let __hotreload = true;
