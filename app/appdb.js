import PouchDB from 'pouchdb';

// PouchDB.debug.enable('*');
let appdb = new PouchDB('finance');
window.appdb = appdb;
appdb.on('error', () => { debugger; });

// TODO: error tracking library
let log = console.log.bind(console);

appdb.createIndex = (name, map, reduce) =>
{
  map = map.toString();
  reduce = reduce && reduce.toString();
  return appdb.put({
    _id: "_design/" + name,
    views: {
      [name]: { map, reduce }
    }
  }).catch(e =>
  {
    if (e.status !== 409) log(e);
  });
}

export default appdb;