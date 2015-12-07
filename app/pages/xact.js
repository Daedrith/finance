import hg from 'mercury';
import _ from 'underscore';
import render from './xact.render';
import Accts from '../data/accts';

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

    let accts = Accts.getIdHash();

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
    // TODO: extract a local copy to be bound to form?
    doc = doc || hg.value({ status: 'verified', offsets: [{}] });

    let blankOffset = {
      acct: Accts.finder()
    };

    let offsets = hg.array(
      doc().offsets.map(o => hg.struct({
        acct: Accts.finder(o.acct),
        add: hg.value(o.add),
        sub: hg.value(o.sub),
      }))
      .concat([hg.struct(blankOffset)]));

    let title = hg.computed([doc], d => `Transactions > ${(d && d._id) || 'New'}`);
    return hg.state({
      title,
      doc,
      accts,
      offsets,
      ready: toReadyObserv(doc.ready, accts.ready),
      channels: {
        updateOffset(s, o)
        {
          let offset = s.offsets.get(o.index);
          if (offset.acct.name() !== o.acct) offset.acct.name.set(o.acct);
          if (offset.add() !== o.add) offset.add.set(o.add);
          if (offset.sub() !== o.sub) offset.sub.set(o.sub);
        },
        save(s, form)
        {
          // TODO: form cycle events
          let postDate = form.createDate
            ? localStringToDate(form.createDate)
            : new Date();
          let createDate = postDate;
          let doc = s.doc();
          appdb.put({
            _id: doc._id || 'xact-' + postDate.toISOString(),
            _rev: doc._rev,
            createDate: createDate.toISOString(),
            status: form.status,
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
        },
      }
    });
  }
};
