let postPatchTaskQueue = [];

let useInnerPatch = false;
let wrapPatch = patch => (elem, patches, opts) =>
{
  if (useInnerPatch)
  {
    return patch(elem, patches, { ...opts, patch: null });
  }
  
  useInnerPatch = true;
  let ret = patch(elem, patches, { ...opts, patch: null });

  let task;
  while ((task = postPatchTaskQueue.shift())) { task(); }

  useInnerPatch = false;
  return ret;
};

export { postPatchTaskQueue, wrapPatch };
