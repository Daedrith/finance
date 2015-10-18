'use strict';

class SubscriptionManager
{
  constructor()
  {
    this.listeners = [];
    this.events = {};
  }
  on(ev, f)
  {
    let fs = this.events[ev] || (this.events[ev] = []);
    fs.push(f);
  };
  off(ev, f)
  {
    let fs = this.events[ev];
    if (!fs || fs.indexOf(f) === -1) return;
    fs.splice(fs.indexOf(f), 1);
  }
  trigger(ev, ...args)
  {
    let fs = this.events[ev];
    if (!fs) return;
    for (let f of fs) f(...args);
  }
}

function Observable(value) {
    var subs = new SubscriptionManager();
    value = value === undefined ? null : value
    
    // TODO: should make writable: false
    observable[Observable.listeners] = subs;
    
    observable.set = function (v) {
        value = v
        subs.listeners.forEach(function (f) {
            f(v)
        })
    }

    return observable

    function observable(listener) {
        if (!listener) {
            return value
        }

        subs.listeners.push(listener)
        subs.trigger('add', listener);

        return function remove() {
            subs.listeners.splice(subs.listeners.indexOf(listener), 1)
            subs.trigger('remove', listener);
        }
    }
}

export let listenersSymbol = Symbol("listeners");
Observable.listeners = listenersSymbol;

export default Observable;
export var __useDefault = true;
