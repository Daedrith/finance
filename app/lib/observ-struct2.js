import ObservProp from './observ-prop.js';

let transaction = Symbol('startTransaction');

function ObservStruct2(defaults)
{
  let publishedVal;
  let listeners = [];
  let obs = l =>
  {
    if (!l)
    {
      return publishedVal || (publishedVal = Object.assign({}, val));
    }

    listeners.push(l);
    return () => listeners.splice(listeners.indexOf(l), 1);
  };

  Object.defineProperty(obs, 'name', { writable: true });
  Object.defineProperty(obs, 'length', { writable: true });

  let inTransaction = false;

  let publish = () =>
  {
    if (inTransaction) return;

    // maybe check for a clone method?
    if (!publishedVal && listeners.length) publishedVal = Object.assign({}, val);

    for (let l of listeners) l(publishedVal);
  };

  // TODO: counter or exception for nested transactions; auto-close timeout
  obs.transaction = () =>
  {
    inTransaction = true;
    return () =>
    {
      inTransaction = false;
      publish();
    };
  };
  obs[transaction] = obs.transaction; // in case user needs this key name

  // Create properties on obs that hold the observable for each property in the struct
  let val = Object.assign({}, defaults); // mutated by each ObservProp
  let keys = Object.keys(defaults);
  for (let key of keys)
  {
    // TODO: if defaults[key] is an observable, chain observProp to it
    let prop = obs[key] = ObservProp(val, key);
    prop(v =>
    {
      // when a property's value changes, schedule a publish to listeners of the struct
      publishedVal = null;
      publish();
    });
  }

  obs.set = v =>
  {
    if (!v) return;

    // when setting the whole value, only mutate the props that change existing ones
    let end = obs.transaction();
    for (let key of keys)
    {
      if (Object.prototype.hasOwnProperty.call(v, key)) obs[key].set(v[key]);
    }

    end();
  };

  return obs;
};

ObservStruct2.transaction = transaction;

export default ObservStruct2;
