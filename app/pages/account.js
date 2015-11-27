import hg from 'mercury';
import render from './account.render';

import dbq from '../querydb';

// TODO: module?
let epoch = +new Date(2015, 8, 12, 0, 0, 0);
// TODO: hybrid serial + random?
let genId = () => Math.floor((Date.now() - epoch) / 1000);

// TODO: module
let toReadyObserv = ready =>
{
  if (!ready)
  {
    ready = Promise.resolve(true);
    ready.yet = true;
  }
  
  let obs = hg.value(ready.yet);
  obs.then = ready.then.bind(ready);
  obs.yet = ready.yet;
  if (!ready.yet) ready.then(() =>
  {
    obs.set(obs.yet = true);
    return true;
  });
  
  return obs;
};

export default {
  init(params, opts)
  {
    let { state: oldState } = opts;
    
    let doc = params.id != null
      ? dbq.keyValue('acct-' + params.id, opts)
      : null;
    
    let state = this.AccountForm(doc);
    
    if (oldState)
    {
      state.set(oldState);
    }
    
    return state;
  },
  render: render,
  dispose(state)
  {
    if (state.doc && state.doc.dispose) state.doc.dispose();
  },
  AccountForm(doc)
  {
    doc = doc || hg.value({ name: '' });
    let title = hg.computed([doc], d => `Accounts > ${(d && d.name) || 'New'}`);
    // TODO: extract a local copy to be bound to form?
    return hg.state({
      title,
      doc, // dereferencing doc is going to get old... observ interesting subkeys?
           // grr... but the blacklisted "name" key
      ready: toReadyObserv(doc.ready),
      channels: {
        save(s, form) {
          // TODO: form cycle events
          let doc = s.doc();
          appdb.put({
            _id: doc._id || `acct-${genId()}`,
            _rev: doc._rev,
            name: form.name
          }).then(res =>
          {
            if (!doc._id)
            {
              // TODO: send message to navigate to /accts/{res.id}
              // replace option
            }
          }); // TODO: error handling
        }
      }
    });
  }
};