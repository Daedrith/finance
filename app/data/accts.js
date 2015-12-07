import ObservStruct2 from '../lib/observ-struct2';
import _ from 'underscore';

import dbq from '../querydb.js';

let refCount = 0;
let decAndDispose = dispose => () =>
{
  if (dispose == null) throw new Error("Already disposed");

  refCount--;
  if (refCount < 0) throw new Error("Negative ref count");

  if (refCount === 0)
  {
    dispose();
    dispose = null
  }
};

let accts;

export default { // TODO: use individual exports
  getIdHash()
  {
    if (refCount === 0)
    {
      accts = dbq.keyObject({
        startkey: 'acct-'
      });

      // HACK: dispose is set after ready
      accts.ready.then(() => accts.dispose = decAndDispose(accts.dispose));
    }

    refCount++;
    return accts;
  },
  finder(acct, accts)
  {
    accts = accts || this.getIdHash();
    // return an observable shere setting the .name or ._id subkeys, sets the whole object to the corresponding object in accts
    let obs = ObservStruct2({
      _id: null,
      _rev: null,
      name: '',
    });

    let setterRunning = false;
    let setter = fun => arg =>
    {
      if (setterRunning) return;

      setterRunning = true;
      obs.set(fun(arg));
      setterRunning = false;
    };

    obs._id(setter(v => accts()[v]));
    obs.name(setter(name => _.findWhere(accts(), { name }) || { _id: null, _rev: null }));

    if (acct) obs.set(acct);

    return obs;
  },
};
