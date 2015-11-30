import hg from 'mercury';
let { value: ObservValue } = hg;

export default function(obj, name, initialVal, obsFunc)
{
  obsFunc = obsFunc || ObservValue;
  let obs = obsFunc(initialVal);
  Object.defineProperty(obj, name, {
    get() { return obs(); },
    set(val) { obs.set(val); },
    enumerable: true,
    configurable: true
  });

  return obs;
};
