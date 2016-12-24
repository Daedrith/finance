import hg from 'mercury';
import _ from 'lodash';
import render from './xact.render';
import Accts from '../data/accts';
import { localStringToDate } from '../lib/date-utils';

import struct from 'observ-struct-a';
import toReadyObserv from '../lib/observ-ready';

import { KeyValue, DocHash } from 'observ-pouchdb';

import { appDb as db } from '../appdb';

function XactForm(opts, disposeSignal)
{
  let { state: oldState } = opts;

  let doc = opts.params.id != null
    ? KeyValue('xact-' + opts.params.id, disposeSignal)
    : null;

  let accts = DocHash(disposeSignal, { prefix: 'acct-' });

  // TODO: module; and perhaps consider holding value as well?
  let fieldState = () => struct({ error: '', disabled: false });

  let offsetKey = 0;
  let createOffset = (o, acct) => struct({
    key: offsetKey++,
    acct: Accts.finder(acct && { _id: acct }, accts),
    add: hg.value(o && (o.add / 100)),
    sub: hg.value(o && (o.sub / 100)),
    acctField: fieldState(),
    addField: fieldState(),
    subField: fieldState(),
  });

  // TODO: extract a local copy to be bound to form?
  if (!doc)
  {
    doc = hg.value({ status: 'verified', offsets: [], description: '' });
    doc.ready = Promise.resolve(doc);
  }

  let postDate = hg.computed([doc], d =>
  {
    if (!d || !d._id) return Math.round(Date.now() / 60000) * 60000;
    
    var ts = +d._id.slice(5) * 60000;
    return ts - new Date(ts).getTimezoneOffset() * 60000;
  });

  let offsets = hg.array([]);

  accts.ready.then(() => doc.ready.then(obs =>
  {
    offsets.set(
      _(obs().offsets)
        .map(createOffset)
        .concat(createOffset())
        .value());
  }));

  let ready = Promise.all([doc.ready, accts.ready]);

  let title = hg.computed([doc], d => `Transactions > ${(d && d._id) || 'New'}`);
  let state = hg.state({
    title,
    doc,
    postDate,
    accts,
    offsets,
    saving: hg.value(false),
    ready: ready,
    loaded: toReadyObserv(ready),
    channels: {
      updateOffset(s, form)
      {
        let offset = s.offsets.get(form.index);
        if (offset.acct.name() !== form.acct) offset.acct.name.set(form.acct);
        if (+offset.add() !== +form.add) offset.add.set(+form.add);
        if (+offset.sub() !== +form.sub) offset.sub.set(+form.sub);

        // TODO: validation based on computed funcs
        if (offset.add() && offset.sub())
        {
          offset.addField.set({ error: 'Cannot have both add and sub', disabled: false });
          offset.subField.set({ error: 'Cannot have both add and sub', disabled: false });
        }
        else if (offset.add() || offset.sub())
        {
          let isAdd = !!offset.add();
          offset.addField.set({ error: '', disabled: !isAdd });
          offset.subField.set({ error: '', disabled: isAdd });
        }
        else
        {
          offset.addField.set({ error: '', disabled: false });
          offset.subField.set({ error: '', disabled: false });
        }

        // add new record if last isn't blank
        let lastOffset = s.offsets.get(s.offsets.getLength() - 1);
        if (lastOffset().acct._id)
        {
          let bal = s.offsets.reduce((bal, o) => bal + (o.add() || -o.sub()), 0);
          if (bal > 0) lastOffset.sub.set(bal);
          else if (bal < 0) lastOffset.add.set(-bal);

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
        let bal = s.offsets.reduce((bal, o) => bal + (o.add() || -o.sub()), 0);
        if (bal !== 0)
        {
          s.offsets.forEach(o =>
          {
            if (o.add()) o.addField.error.set('Offsets must be balanced');
            else if (o.sub()) o.subField.error.set('Offsets must be balanced');
          });
          return;
        }

        s.saving.set(true);

        let postDate = form.postDate
          ? localStringToDate(form.postDate)
          : new Date();
        let doc = s.doc();
        db.put({
          _id: doc._id || 'xact-' + Math.round(postDate.getTime() / 60000),
          _rev: doc._rev,
          description: form.description,
          createDate: Date.now(),
          status: form.status,
          offsets: _(offsets()).filter('acct._id').reduce((s, o) =>
          {
            let ao = { };
            if (o.add) ao.add = o.add * 100;
            else ao.sub = o.sub * 100;

            s[o.acct._id] = ao;
            return s;
          }, {}),
        }).then(res =>
        {
          //if (!doc._id)
          //{
          //  navigate(`#/xacts/${res.id}`, { history: 'replace' });
          //}

          // TODO: add notification, track sync status
          history.back();
        }); // TODO: error handling
      },
    }
  });
  
  if (oldState)
  {
    // TODO: find better workaround
    oldState.channels = state.channels();
    state.set(oldState);
  }

  return state;
}

XactForm.render = render;

export default XactForm;
