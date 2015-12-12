import ObservStruct2 from '../lib/observ-struct2';
import _ from 'underscore';

export default { // TODO: use individual exports
  getIdHash(dbManager)
  {
    return dbManager.keyObject({
      startkey: 'acct-'
    });
  },
  finder(acct, accts)
  {
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
