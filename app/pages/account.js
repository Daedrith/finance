import hg from 'mercury';
import render from './account.render';

import dbq from '../querydb';

// TODO: module?
let genId = () => Math.floor((Date.now() - epoch) / 1000);

export default {
  init(params)
  {
    return params.id
      ? dbq.keyValue(params.id).then(AccountForm)
      : Promise.resolve(AccountForm());
  },
  restore(params, state)
  {
    return this.init(state.doc._id).then(s => s.set(state));
  },
  render: render,
  dispose(state)
  {
    if (state.doc.dispose) state.doc.dispose();
  },
  AccountForm(doc)
  {
    doc = doc || hg.value({name: ''});
    // TODO: extract a local copy to be bound to form?
    let state = hg.state({
      doc, // dereferencing doc is going to get old... observ interesting subkeys?
           // grr... but the blacklisted "name" key
      channels: {
        save(s, d) {
          // TODO: form cycle events
          let doc = s.doc();
          appdb.put({
            _id: doc._id || `acct-${genId()}`,
            _rev: doc._rev,
            name: d.name
          });
          // TODO: can we async mutate state
          // - well, nvm; we should just mutate the route if we want to edit
          // - (hmm.. but then the history stack would get messed up; unless there's a replace, or we kinda hack around)
        }
      }
    });
    
    return state;
  }
};