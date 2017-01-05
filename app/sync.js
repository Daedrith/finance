import PouchDB from 'pouchdb';
import struct from 'observ-struct-a';

import { appDb } from './appdb';
import * as observPouchdb from 'observ-pouchdb';

export let syncState = struct({
  online: false, // TODO: debounce
  remoteUrl: null,
  lastError: null,
})

let syncHandler;

export async function startSync()
{
  let config = await appDb.get('_local/sync_config');

  if (!config.remoteUrl || !config.enabled) return;

  stopSync();

  let remoteUrl = config.remoteUrl;
  syncHandler = appDb.sync(remoteUrl, { sync: true, retry: true })
    .on('active', () => syncState.online.set(true))
    .on('paused', () => syncState.online.set(false))
    .on('error', err =>
    {
      console.log(err);
      syncState.lastError.set(err.message);
    });
    // TODO: monitor changes?

  syncState.set({ remoteUrl });
}

export function stopSync()
{
  if (!syncHandler) return;

  syncHandler.cancel();
  syncState.online.set(false);
}