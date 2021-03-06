import hg from 'mercury';
import _ from 'lodash';
import render from './ledger.render';

import { KeyArray, DocHash } from 'observ-pouchdb';
import { navigate } from 'mercury-navigator';

import readyToObserv from '../lib/observ-ready';

function GeneralLedger(opts, disposeSignal)
{
  let { state: oldState } = opts;

  let accts = DocHash(disposeSignal, { prefix: 'acct-' });
  let xacts = KeyArray(disposeSignal, { prefix: 'xact-' }); // TODO: use descending option
  let xactsSorted = hg.computed([xacts], function(xs)
  {
    return _.orderBy(xs, ['_id'], ['desc']);
  });
  
  let state = hg.state({
    title: "General Ledger",
    accts,
    xacts: xactsSorted,
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