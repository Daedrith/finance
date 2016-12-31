import hg from 'mercury';
import render from './accounts.render';

import readyToObserv from '../lib/observ-ready';

import { KeyArray } from 'observ-pouchdb';
import { navigate } from 'mercury-navigator';

function AccountList(opts, disposeSignal)
{
  let { state: oldState } = opts;

  // TODO: secondary indexing
  let accts = KeyArray(disposeSignal, { prefix: 'acct-' });
  let xacts = KeyArray(disposeSignal, { prefix: 'xact-' });
  let balances = hg.computed([xacts], function(xs)
  {
    let ret = {};
    for (let x of xs)
    {
      for (let acct in x.offsets)
      {
        let o = x.offsets[acct];
        ret[acct] = (ret[acct] || (ret[acct] = 0)) + (o.add || -o.sub); 
      }
    }

    return ret;
  });

  let state = hg.state({
    title: "Account List",
    accts,
    balances,
    ready: accts.ready,
    loaded: readyToObserv(accts.ready), // TODO: also wait for xacts?
    channels: {
      toAcct(s, {id}) {
        navigate(`#/accounts/${id}`);
      }
    }
  });

  if (oldState)
  {
    oldState.channels = state.channels();
    state.set(oldState);
  }

  return state;
}

AccountList.render = render;

export default AccountList;