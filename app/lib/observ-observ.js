import observ from 'observ';

export default function(nestedObs)
{
  if (typeof nestedObs !== 'function' || typeof nestedObs.set !== 'function')
  {
    nestedObs = observ(nestedObs);
  }

  let obs = observ();
  let obsobs = observ();

  let dispose;
  let setObs = obsobs.set.bind(obsobs);
  obsobs.set = function(o)
  {
    if (dispose) dispose();

    setObs(o);
    obs.set(o());
    dispose = o(v => obs.set(v));
  };

  obsobs.set(nestedObs);

  return { obs, obsobs };
};
