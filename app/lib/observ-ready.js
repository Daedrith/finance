import hg from 'mercury'; // TODO: import just observ

export default function toReadyObserv(ready)
{
  if (!ready)
  {
    ready = Promise.resolve(true);
    ready.yet = true;
  }
  
  let obs = hg.value(ready.yet);
  obs.then = ready.then.bind(ready);
  obs.yet = ready.yet;
  if (!ready.yet) ready.then(() =>
  {
    obs.set(obs.yet = true);
    return true;
  });
  
  return obs;
};