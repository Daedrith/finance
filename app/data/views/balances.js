export default {
  map(d)
  {
    if (d._id < 'xact-' || 'xact.' <= d._id) return;
    console.log([].slice.call(arguments));

    if (d._deleted)
    {
      emit(null, d);
      return;
    }

    let postDate = d._id.slice(5);
    for (let acct in d.offsets)
    {
      let o = d.offsets[acct];
      emit([acct, postDate], o.add || -o.sub);
    }
  },
  reduce: '_sum',
  //reduce(keys, values, rereduce)
  //{
  //  console.log([].slice.call(arguments));
  //  let sums = {};
  //  if (rereduce)
  //  {
  //    for (let subSums of values)
  //    {
  //      for (let acct of subSums)
  //      {
  //        if (sums[acct]) sums[acct] += subSums[acct];
  //        else sums[acct] = subSums[acct];
  //      }
  //    }
  //  }
  //  else
  //  {
  //    for (let i = 0; i < keys.length; i++)
  //    {
  //      let acct = keys[i][0][0];
  //      if (!(acct in sums)) sums[acct] = 0;
//
  //      let o = values[i].offsets[acct];
  //      sums[acct] += o.add || -o.sub;
  //    }
  //  }
//
  //  return sums;
  //}
};
