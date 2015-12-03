import hg from 'mercury'; // TODO: import just observ

export default function toReadyObserv(...readys)
{
  let allReady = readys.every(r => !r || r.yet);
  if (allReady)
  {
    let p = Promise.resolve(true);
    let ret = hg.value(true);
    ret.then = p.then.bind(p);
    ret.yet = true;
    return ret;
  }

  let ready = Promise.all(readys);

  let obs = hg.value(ready.yet);
  obs.then = ready.then.bind(ready);
  obs.yet = false;
  ready.then(() =>
  {
    obs.set(obs.yet = true);
    return true;
  });

  return obs;
};
