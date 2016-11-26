import hg from 'mercury';
import render from './ledger.render';

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
    let accts = db.keyObject({ startkey: 'acct-' });
    let xacts = db.keyArray({ startkey: 'xact-' });
    
    let state = this.GeneralLedger(xacts, accts, services.navigate);

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
  GeneralLedger(xacts, accts, navigate)
  {
    return hg.state({
      title: "General Ledger",
      accts,
      xacts,
      ready: readyToObserv(xacts.ready),
      channels: {
        toXact(s, {id}) {
          navigate(`#/xacts/${id}`);
        }
      }
    });
  }
};
