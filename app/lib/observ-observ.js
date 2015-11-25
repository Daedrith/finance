import observ from 'observ';

let nestedObs = Symbol('nestedObs');
let disposeNestedListener = Symbol('disposeNestedListener');

export default function(nestedObs)
{
  let obs = observ();
  
  let _set = obs.set;
  obs.set = function(v)
  {
    if (typeof v !== 'function') _set(v);
    else this.observ = v;
  };
  
  Object.defineProperty(obs, 'observ', {
    get: function() { return this[nestedObs]; },
    set: function(o)
    {
      if (this[disposeNestedListener]) this[disposeNestedListener]();
      
      this[nestedObs] = o;
      if (o)
      {
        this[disposeNestedListener] = o(v => this.set(v));
        this.set(o());
      }
    }
  });
  
  obs.observ = nestedObs;
  
  return obs;
};