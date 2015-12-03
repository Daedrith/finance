import hg from 'mercury';
import _ from 'underscore';
import render from './xact.render';
import getAccts from '../data/accts';

import dbq from '../querydb';
import toReadyObserv from '../lib/observ-ready';

// TODO: module?
let epoch = +new Date(2015, 8, 12, 0, 0, 0);
// TODO: hybrid serial + random?
let genId = () => Math.floor((Date.now() - epoch) / 1000);

let db = dbq.db;

export default {
  init(params, opts)
  {
    let { state: oldState } = opts;

    let doc = params.id != null
      ? dbq.keyValue('xact-' + params.id, opts)
      : null;

    let accts = getAccts();

    let state = this.XactForm(doc, accts);

    if (oldState)
    {
      state.set(oldState);
    }

    return state;
  },
  render: render,
  dispose(state)
  {
    for (let disposable of [state.doc, state.accts])
    {
      if (disposable && disposable.dispose) disposable.dispose();
    }
  },
  XactForm(doc, accts)
  {
    doc = doc || hg.value({ });
    let title = hg.computed([doc], d => `Transactions > ${(d && d._id) || 'New'}`);
    // TODO: extract a local copy to be bound to form?
    return hg.state({
      title,
      doc,
      accts,
      ready: toReadyObserv(doc.ready, accts.ready),
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
              { acct: _.findWhere(s.accts(), { name: form.from })._id,
                sub: 100 * form.amt },
              { acct: _.findWhere(s.accts(), { name: form.to })._id,
                add: 100 * form.amt }
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
