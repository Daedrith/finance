import dbq from '../querydb.js';

let refCount = 0;
let decAndDispose = dispose => () =>
{
  if (dispose == null) throw new Error("Already disposed");

  refCount--;
  if (refCount < 0) throw new Error("Negative ref count");

  if (refCount === 0)
  {
    console.trace('disposed');
    dispose();
    dispose = null;
  }
};
let accts;

export default function()
{
  if (refCount === 0)
  {
    console.trace('created');
    accts = dbq.keyObject({
      startkey: 'acct-'
    });

    // HACK: dispose is set after ready
    accts.ready.then(() => accts.dispose = decAndDispose(accts.dispose));
  }

  refCount++;
  return accts;
};
