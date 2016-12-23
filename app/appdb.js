import PouchDB from 'pouchdb';

// PouchDB.debug.enable('*');
export let appDb = new PouchDB('finance');
appDb.on('error', (e) => { console.log(e); });
