import hg from 'mercury';
import _ from 'underscore';
import render from './xact.render';
import Accts from '../data/accts';

import ObservStruct2 from '../lib/observ-struct2';
import toReadyObserv from '../lib/observ-ready';

// TODO: module?
let epoch = +new Date(2015, 8, 12, 0, 0, 0);
// TODO: hybrid serial + random?
let genId = () => Math.floor((Date.now() - epoch) / 1000);

export default {
  init(params, opts, services)
  {
    let { state: oldState } = opts;

    let doc = params.id != null
      ? services.dbManager.keyValue('xact-' + params.id, opts)
      : null;

    let accts = Accts.getIdHash(services.dbManager);

    let state = this.XactForm(doc, accts, services.appDb);

    if (oldState)
    {
      state.set(oldState);
    }

    return state;
  },
  render: render,
  XactForm(doc, accts, db)
  {
    // TODO: module; and perhaps consider holding value as well?
    let fieldState = () => ObservStruct2({ error: '', disabled: false });

    let offsetKey = 0;
    let createOffset = (o) => hg.struct({
      key: offsetKey++,
      acct: Accts.finder(o && o.acct, accts),
      add: hg.value(o && o.add),
      sub: hg.value(o && o.sub),
      acctField: fieldState(),
      addField: fieldState(),
      subField: fieldState(),
    });

    // TODO: extract a local copy to be bound to form?
    doc = doc || hg.value({ status: 'verified', offsets: [null] });

    // TODO: defer until doc.ready
    let offsets = hg.array(
      doc().offsets.map(createOffset).concat([createOffset()]));

    let title = hg.computed([doc], d => `Transactions > ${(d && d._id) || 'New'}`);
    return hg.state({
      title,
      doc,
      accts,
      offsets,
      ready: toReadyObserv(doc.ready, accts.ready),
      channels: {
        updateOffset(s, form)
        {
          let offset = s.offsets.get(form.index);
          if (offset.acct.name() !== form.acct) offset.acct.name.set(form.acct);
          if (+offset.add() !== +form.add) offset.add.set(+form.add);
          if (+offset.sub() !== +form.sub) offset.sub.set(+form.sub);

          // shouldn't happen, but just in case
          if (offset.add() && offset.sub())
          {
            offset.addField.set({ error: 'Cannot have both add and sub', disabled: false });
            offset.subField.set({ error: 'Cannot have both add and sub', disabled: false });
          }
          else if (offset.add() || offset.sub())
          {
            (offset.add() ? offset.subField : offset.addField).disabled.set(true);
          }
          else
          {
            offset.addField.disabled.set(false);
            offset.subField.disabled.set(false);
          }

          // TODO: disable add/sub if the other is populated?
          // TODO: if other offset doesn't have add/sub, mirror this one in the other?

          // add new record if last isn't blank
          let lastOffset = s.offsets.get(s.offsets.getLength() - 1);
          if (lastOffset().acct._id)
          {
            s.offsets.push(createOffset());
          }

          if (s.offsets.getLength() < 3) return;

          let lastIndex = s.offsets.getLength() - 1;

          // remove excess (completely) blank records
          // TODO: animate; generate a unique ID on offset and render as key
          let newArr = s.offsets.filter((o, i) => o.acct.name() || o.add() || o.sub() || i === lastIndex);

          if (s.offsets.getLength() != newArr.getLength())
          {
            s.offsets.set(newArr._list); // arrgh.. HACK!
          }
        },
        save(s, form)
        {
          // TODO: validation
          // TODO: form cycle events
          let postDate = form.createDate
            ? localStringToDate(form.createDate)
            : new Date();
          let createDate = postDate;
          let doc = s.doc();
          db.put({
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