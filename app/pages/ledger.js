import hg from 'mercury';
import render from './ledger.render';

import { KeyArray, DocHash } from 'observ-pouchdb';
import { navigate } from 'mercury-navigator';

import readyToObserv from '../lib/observ-ready';

function GeneralLedger(opts, disposeSignal)
{
  let { state: oldState } = opts;

  let accts = DocHash(disposeSignal, { prefix: 'acct-' });
  let xacts = KeyArray(disposeSignal, { prefix: 'xact-' });
  
  let state = hg.state({
    title: "General Ledger",
    accts,
    xacts,
    ready: Promise.all([accts.ready, xacts.ready]),
    loaded: readyToObserv(accts.ready, xacts.ready),
    channels: {
      toXact(s, {id}) {
        navigate(`#/xacts/${id}`);
      }
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

GeneralLedger.render = render;

export default GeneralLedger;