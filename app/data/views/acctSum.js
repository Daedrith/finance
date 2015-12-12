export default
{
  map(d)
  {
    if (d._id < 'xact-' || 'xact.' <= d._id) return;

    if (d._deleted)
    {
      emit(null, d);
      return;
    }

    let postDate = Number(d._id.slice(5));
    for (let x of d.offsets)
    {
      emit([x.acct, postDate], x.add != null ? x.add : -x.sub);
    }
  }
};
