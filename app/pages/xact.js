import hg from 'mercury';
import _ from 'underscore';
import render from './xact.render';

import dbq from '../querydb';
import toReadyObserv from '../lib/observ-ready';

// TODO: module?
let epoch = +new Date(2015, 8, 12, 0, 0, 0);
// TODO: hybrid serial + random?
let genId = () => Math.floor((Date.now() - epoch) / 1000);

export default {
  init(params, opts)
  {
    let { state: oldState } = opts;
    
    let doc = params.id != null
      ? dbq.keyValue('xact-' + params.id, opts)
      : null;
    
    let state = this.XactForm(doc);
    
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
  XactForm(doc)
  {
    doc = doc || hg.value({ });
    let title = hg.computed([doc], d => `Transactions > ${(d && d._id) || 'New'}`);
    // TODO: extract a local copy to be bound to form?
    return hg.state({
      title,
      doc, // dereferencing doc is going to get old... observ interesting subkeys?
           // grr... but the blacklisted "name" key
      ready: toReadyObserv(doc.ready),
      channels: {
        save(s, form) {
          // TODO: form cycle events
          let postDate = Date.now();
          let createDate = postDate;
          let doc = s.doc();
          appdb.put({
            _id: doc._id || 'xact-' + postDate,
            _rev: doc._rev,
            createDate,
            status: 'verified',
            offsets: [
              { acct: _.findWhere(s.accts(), { name: d.from })._id,
                sub: 100 * d.amt },
              { acct: _.findWhere(s.accts(), { name: d.to })._id,
                add: 100 * d.amt }
            ]
          }).then(res =>
          {
            if (!doc._id)
            {
              // TODO: send message to navigate to /xacts/{res.id}
              // replace option
            }
          }); // TODO: error handling
        }
      }
    });
  }
};