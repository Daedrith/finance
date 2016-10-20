import hg from 'mercury';
import render from './accounts.render';

import readyToObserv from '../lib/observ-ready';

// TODO: module?
let epoch = +new Date(2015, 8, 12, 0, 0, 0);
// TODO: hybrid serial + random?
let genId = () => Math.floor((Date.now() - epoch) / 1000);

export default {
  init(params, opts, services)
  {
    let { state: oldState } = opts;

    let db = services.dbManager;
    let accts = db.keyArray({ startkey: 'acct-' });
    let xacts = db.keyArray({ startkey: 'xact-' });
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

    let state = this.AccountList(accts, balances, services.navigate);

    if (oldState)
    {
      state.set(oldState);
    }

    return state;
  },
  render: render,
  dispose(state)
  {
  },
  AccountList(accts, balances, navigate)
  {
    return hg.state({
      title: "Account List",
      accts,
      balances,
      ready: readyToObserv(accts.ready),
      channels: {
        toAcct(s, {id}) {
          navigate(`#/accounts/${id}`);
        }
      }
    });
  }
};
