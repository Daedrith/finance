import hg from 'mercury';
import render from './account.render';

import readyToObserv from '../lib/observ-ready';

import { appDb } from '../appdb';
import { KeyValue } from 'observ-pouchdb';

// TODO: module?
let epoch = +new Date(2015, 8, 12, 0, 0, 0);
// TODO: hybrid serial + random?
let genId = () => Math.floor((Date.now() - epoch) / 1000);

function AccountForm(opts, disposeSignal)
{
  let { state: oldState } = opts;

  let doc = opts.params.id != null
    ? KeyValue('acct-' + opts.params.id, disposeSignal)
    : null;

  doc = doc || hg.value({ name: '' });
  let title = hg.computed([doc], d => `Accounts > ${(d && d.name) || 'New'}`);
  // TODO: extract a local copy to be bound to form?
  
  let state = hg.state({
    title,
    doc,
    ready: doc.ready,
    loaded: readyToObserv(doc.ready),
    channels: {
      save(s, form) {
        // TODO: form cycle events
        let doc = s.doc();
        appDb.put({
          _id: doc._id || `acct-${genId()}`,
          _rev: doc._rev,
          name: form.name,
          type: form.type,
          tags: form.tags.split(' ').filter(x => x),
        }).then(res =>
        {
          // TODO: add notification, track sync status
          history.back();
        }); // TODO: error handling
      }
    }
  });

  if (oldState)
  {
    oldState.channels = state.channels();
    state.set(oldState);
  }

  return state;
};

// TODO: this pattern not hot-reload friendly?
AccountForm.render = render;

export default AccountForm;