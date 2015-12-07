import ObservProp from './observ-prop.js';

export default function ObservStruct2(defaults)
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

  // Create properties on obs that hold the observable for each property in the struct
  let val = {}; // mutated by each ObservProp
  let keys = Object.keys(defaults);
  for (let key of keys)
  {
    let prop = obs[key] = ObservProp(val, key);
    prop(v =>
    {
      // when a property's value changes, schedule a publish to listeners of the struct
      publishedVal = null;
      schedulePublish();
    });
  }

  let timeoutId;
  let schedulePublish = () =>
  {
    // TODO: immediate option?, or transaction mechanism to delay publish?
    if (!timeoutId) timeoutId = setTimeout(() =>
    {
      timeoutId = null;
      if (!publishedVal) publishedVal = Object.assign({}, val);

      for (let l of listeners) l(publishedVal);
    }, 0);
  };

  obs.set = v =>
  {
    if (!v) return;

    // when setting the whole value, only mutate the props that change existing ones
    for (let key of keys)
    {
      if (Object.prototype.hasOwnProperty.call(v, key)) obs[key].set(v[key]);
    }
  };

  obs.set(defaults);

  return obs;
};
