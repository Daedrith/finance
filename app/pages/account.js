import hg from 'mercury';
import render from './account.render';

import dbq from '../querydb';

// TODO: module?
let genId = () => Math.floor((Date.now() - epoch) / 1000);

export default {
  init(params, opts)
  {
    let { async, state: oldState } = opts;
    
    let doc = params.id != null
      ? dbq.keyValue('acct-' + params.id, Object.assign({ defaultValue: this._defaultDoc }, opts))
      : null;
    
    let state = async
      ? (doc ? doc.then(this.AccountForm) : Promise.resolve(this.AccountForm(doc)))
      : this.AccountForm(doc);
    
    if (oldState)
    {
      if (async)
      {
        state = state.then(s =>
        {
          s.set(oldState);
          return s;
        });
      }
      else
      {
        state.set(oldState);
      }
    }
    
    return state;
  },
  render: render,
  dispose(state)
  {
    if (state.doc && state.doc.dispose) state.doc.dispose();
  },
  _defaultDoc: {name: ''},
  AccountForm(doc)
  {
    doc = doc || hg.value(this._defaultDoc);
    // TODO: extract a local copy to be bound to form?
    return hg.state({
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
  }
};