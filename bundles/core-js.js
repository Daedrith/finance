System.registerDynamic("npm:core-js@1.2.6/library/modules/core.log", ["npm:core-js@1.2.6/library/modules/$", "npm:core-js@1.2.6/library/modules/$.global", "npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.object-assign"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$'),
      global = $__require('npm:core-js@1.2.6/library/modules/$.global'),
      $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      log = {},
      enabled = true;
  $.each.call(('assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,' + 'info,isIndependentlyComposed,log,markTimeline,profile,profileEnd,table,' + 'time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn').split(','), function(key) {
    log[key] = function() {
      var $console = global.console;
      if (enabled && $console && $console[key]) {
        return Function.apply.call($console[key], $console, arguments);
      }
    };
  });
  $export($export.G + $export.F, {log: $__require('npm:core-js@1.2.6/library/modules/$.object-assign')(log.log, log, {
      enable: function() {
        enabled = true;
      },
      disable: function() {
        enabled = false;
      }
    })});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/core.string.unescape-html", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.replacer"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export');
  var $re = $__require('npm:core-js@1.2.6/library/modules/$.replacer')(/&(?:amp|lt|gt|quot|apos);/g, {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&apos;': "'"
  });
  $export($export.P + $export.F, 'String', {unescapeHTML: function unescapeHTML() {
      return $re(this);
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/core.string.escape-html", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.replacer"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export');
  var $re = $__require('npm:core-js@1.2.6/library/modules/$.replacer')(/[&<>"']/g, {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  });
  $export($export.P + $export.F, 'String', {escapeHTML: function escapeHTML() {
      return $re(this);
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/core.number.iterator", ["npm:core-js@1.2.6/library/modules/$.iter-define"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  $__require('npm:core-js@1.2.6/library/modules/$.iter-define')(Number, 'Number', function(iterated) {
    this._l = +iterated;
    this._i = 0;
  }, function() {
    var i = this._i++,
        done = !(i < this._l);
    return {
      done: done,
      value: done ? undefined : i
    };
  });
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/core.object.make", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.object-define", "npm:core-js@1.2.6/library/modules/$"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      define = $__require('npm:core-js@1.2.6/library/modules/$.object-define'),
      create = $__require('npm:core-js@1.2.6/library/modules/$').create;
  $export($export.S + $export.F, 'Object', {make: function(proto, mixin) {
      return define(create(proto), mixin);
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.object-define", ["npm:core-js@1.2.6/library/modules/$", "npm:core-js@1.2.6/library/modules/$.own-keys", "npm:core-js@1.2.6/library/modules/$.to-iobject"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$'),
      ownKeys = $__require('npm:core-js@1.2.6/library/modules/$.own-keys'),
      toIObject = $__require('npm:core-js@1.2.6/library/modules/$.to-iobject');
  module.exports = function define(target, mixin) {
    var keys = ownKeys(toIObject(mixin)),
        length = keys.length,
        i = 0,
        key;
    while (length > i)
      $.setDesc(target, key = keys[i++], $.getDesc(mixin, key));
    return target;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/core.object.define", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.object-define"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      define = $__require('npm:core-js@1.2.6/library/modules/$.object-define');
  $export($export.S + $export.F, 'Object', {define: define});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/core.object.classof", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.classof"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export');
  $export($export.S + $export.F, 'Object', {classof: $__require('npm:core-js@1.2.6/library/modules/$.classof')});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/core.object.is-object", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.is-object"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export');
  $export($export.S + $export.F, 'Object', {isObject: $__require('npm:core-js@1.2.6/library/modules/$.is-object')});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/core.function.part", ["npm:core-js@1.2.6/library/modules/$.path", "npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.core", "npm:core-js@1.2.6/library/modules/$.partial"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var path = $__require('npm:core-js@1.2.6/library/modules/$.path'),
      $export = $__require('npm:core-js@1.2.6/library/modules/$.export');
  $__require('npm:core-js@1.2.6/library/modules/$.core')._ = path._ = path._ || {};
  $export($export.P + $export.F, 'Function', {part: $__require('npm:core-js@1.2.6/library/modules/$.partial')});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/core.delay", ["npm:core-js@1.2.6/library/modules/$.global", "npm:core-js@1.2.6/library/modules/$.core", "npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.partial"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var global = $__require('npm:core-js@1.2.6/library/modules/$.global'),
      core = $__require('npm:core-js@1.2.6/library/modules/$.core'),
      $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      partial = $__require('npm:core-js@1.2.6/library/modules/$.partial');
  $export($export.G + $export.F, {delay: function delay(time) {
      return new (core.Promise || global.Promise)(function(resolve) {
        setTimeout(partial.call(resolve, true), time);
      });
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/core.get-iterator", ["npm:core-js@1.2.6/library/modules/$.an-object", "npm:core-js@1.2.6/library/modules/core.get-iterator-method", "npm:core-js@1.2.6/library/modules/$.core"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var anObject = $__require('npm:core-js@1.2.6/library/modules/$.an-object'),
      get = $__require('npm:core-js@1.2.6/library/modules/core.get-iterator-method');
  module.exports = $__require('npm:core-js@1.2.6/library/modules/$.core').getIterator = function(it) {
    var iterFn = get(it);
    if (typeof iterFn != 'function')
      throw TypeError(it + ' is not iterable!');
    return anObject(iterFn.call(it));
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/core.is-iterable", ["npm:core-js@1.2.6/library/modules/$.classof", "npm:core-js@1.2.6/library/modules/$.wks", "npm:core-js@1.2.6/library/modules/$.iterators", "npm:core-js@1.2.6/library/modules/$.core"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var classof = $__require('npm:core-js@1.2.6/library/modules/$.classof'),
      ITERATOR = $__require('npm:core-js@1.2.6/library/modules/$.wks')('iterator'),
      Iterators = $__require('npm:core-js@1.2.6/library/modules/$.iterators');
  module.exports = $__require('npm:core-js@1.2.6/library/modules/$.core').isIterable = function(it) {
    var O = Object(it);
    return O[ITERATOR] !== undefined || '@@iterator' in O || Iterators.hasOwnProperty(classof(O));
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/core.dict", ["npm:core-js@1.2.6/library/modules/$", "npm:core-js@1.2.6/library/modules/$.ctx", "npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.property-desc", "npm:core-js@1.2.6/library/modules/$.object-assign", "npm:core-js@1.2.6/library/modules/$.keyof", "npm:core-js@1.2.6/library/modules/$.a-function", "npm:core-js@1.2.6/library/modules/$.for-of", "npm:core-js@1.2.6/library/modules/core.is-iterable", "npm:core-js@1.2.6/library/modules/$.iter-create", "npm:core-js@1.2.6/library/modules/$.iter-step", "npm:core-js@1.2.6/library/modules/$.is-object", "npm:core-js@1.2.6/library/modules/$.to-iobject", "npm:core-js@1.2.6/library/modules/$.descriptors", "npm:core-js@1.2.6/library/modules/$.has"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$'),
      ctx = $__require('npm:core-js@1.2.6/library/modules/$.ctx'),
      $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      createDesc = $__require('npm:core-js@1.2.6/library/modules/$.property-desc'),
      assign = $__require('npm:core-js@1.2.6/library/modules/$.object-assign'),
      keyOf = $__require('npm:core-js@1.2.6/library/modules/$.keyof'),
      aFunction = $__require('npm:core-js@1.2.6/library/modules/$.a-function'),
      forOf = $__require('npm:core-js@1.2.6/library/modules/$.for-of'),
      isIterable = $__require('npm:core-js@1.2.6/library/modules/core.is-iterable'),
      $iterCreate = $__require('npm:core-js@1.2.6/library/modules/$.iter-create'),
      step = $__require('npm:core-js@1.2.6/library/modules/$.iter-step'),
      isObject = $__require('npm:core-js@1.2.6/library/modules/$.is-object'),
      toIObject = $__require('npm:core-js@1.2.6/library/modules/$.to-iobject'),
      DESCRIPTORS = $__require('npm:core-js@1.2.6/library/modules/$.descriptors'),
      has = $__require('npm:core-js@1.2.6/library/modules/$.has'),
      getKeys = $.getKeys;
  var createDictMethod = function(TYPE) {
    var IS_MAP = TYPE == 1,
        IS_EVERY = TYPE == 4;
    return function(object, callbackfn, that) {
      var f = ctx(callbackfn, that, 3),
          O = toIObject(object),
          result = IS_MAP || TYPE == 7 || TYPE == 2 ? new (typeof this == 'function' ? this : Dict) : undefined,
          key,
          val,
          res;
      for (key in O)
        if (has(O, key)) {
          val = O[key];
          res = f(val, key, object);
          if (TYPE) {
            if (IS_MAP)
              result[key] = res;
            else if (res)
              switch (TYPE) {
                case 2:
                  result[key] = val;
                  break;
                case 3:
                  return true;
                case 5:
                  return val;
                case 6:
                  return key;
                case 7:
                  result[res[0]] = res[1];
              }
            else if (IS_EVERY)
              return false;
          }
        }
      return TYPE == 3 || IS_EVERY ? IS_EVERY : result;
    };
  };
  var findKey = createDictMethod(6);
  var createDictIter = function(kind) {
    return function(it) {
      return new DictIterator(it, kind);
    };
  };
  var DictIterator = function(iterated, kind) {
    this._t = toIObject(iterated);
    this._a = getKeys(iterated);
    this._i = 0;
    this._k = kind;
  };
  $iterCreate(DictIterator, 'Dict', function() {
    var that = this,
        O = that._t,
        keys = that._a,
        kind = that._k,
        key;
    do {
      if (that._i >= keys.length) {
        that._t = undefined;
        return step(1);
      }
    } while (!has(O, key = keys[that._i++]));
    if (kind == 'keys')
      return step(0, key);
    if (kind == 'values')
      return step(0, O[key]);
    return step(0, [key, O[key]]);
  });
  function Dict(iterable) {
    var dict = $.create(null);
    if (iterable != undefined) {
      if (isIterable(iterable)) {
        forOf(iterable, true, function(key, value) {
          dict[key] = value;
        });
      } else
        assign(dict, iterable);
    }
    return dict;
  }
  Dict.prototype = null;
  function reduce(object, mapfn, init) {
    aFunction(mapfn);
    var O = toIObject(object),
        keys = getKeys(O),
        length = keys.length,
        i = 0,
        memo,
        key;
    if (arguments.length < 3) {
      if (!length)
        throw TypeError('Reduce of empty object with no initial value');
      memo = O[keys[i++]];
    } else
      memo = Object(init);
    while (length > i)
      if (has(O, key = keys[i++])) {
        memo = mapfn(memo, O[key], key, object);
      }
    return memo;
  }
  function includes(object, el) {
    return (el == el ? keyOf(object, el) : findKey(object, function(it) {
      return it != it;
    })) !== undefined;
  }
  function get(object, key) {
    if (has(object, key))
      return object[key];
  }
  function set(object, key, value) {
    if (DESCRIPTORS && key in Object)
      $.setDesc(object, key, createDesc(0, value));
    else
      object[key] = value;
    return object;
  }
  function isDict(it) {
    return isObject(it) && $.getProto(it) === Dict.prototype;
  }
  $export($export.G + $export.F, {Dict: Dict});
  $export($export.S, 'Dict', {
    keys: createDictIter('keys'),
    values: createDictIter('values'),
    entries: createDictIter('entries'),
    forEach: createDictMethod(0),
    map: createDictMethod(1),
    filter: createDictMethod(2),
    some: createDictMethod(3),
    every: createDictMethod(4),
    find: createDictMethod(5),
    findKey: findKey,
    mapPairs: createDictMethod(7),
    reduce: reduce,
    keyOf: keyOf,
    includes: includes,
    has: has,
    get: get,
    set: set,
    isDict: isDict
  });
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/web.dom.iterable", ["npm:core-js@1.2.6/library/modules/es6.array.iterator", "npm:core-js@1.2.6/library/modules/$.iterators"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  $__require('npm:core-js@1.2.6/library/modules/es6.array.iterator');
  var Iterators = $__require('npm:core-js@1.2.6/library/modules/$.iterators');
  Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/web.immediate", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.task"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      $task = $__require('npm:core-js@1.2.6/library/modules/$.task');
  $export($export.G + $export.B, {
    setImmediate: $task.set,
    clearImmediate: $task.clear
  });
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.path", ["npm:core-js@1.2.6/library/modules/$.core"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('npm:core-js@1.2.6/library/modules/$.core');
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.partial", ["npm:core-js@1.2.6/library/modules/$.path", "npm:core-js@1.2.6/library/modules/$.invoke", "npm:core-js@1.2.6/library/modules/$.a-function"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var path = $__require('npm:core-js@1.2.6/library/modules/$.path'),
      invoke = $__require('npm:core-js@1.2.6/library/modules/$.invoke'),
      aFunction = $__require('npm:core-js@1.2.6/library/modules/$.a-function');
  module.exports = function() {
    var fn = aFunction(this),
        length = arguments.length,
        pargs = Array(length),
        i = 0,
        _ = path._,
        holder = false;
    while (length > i)
      if ((pargs[i] = arguments[i++]) === _)
        holder = true;
    return function() {
      var that = this,
          $$ = arguments,
          $$len = $$.length,
          j = 0,
          k = 0,
          args;
      if (!holder && !$$len)
        return invoke(fn, pargs, that);
      args = pargs.slice();
      if (holder)
        for (; length > j; j++)
          if (args[j] === _)
            args[j] = $$[k++];
      while ($$len > k)
        args.push($$[k++]);
      return invoke(fn, args, that);
    };
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/web.timers", ["npm:core-js@1.2.6/library/modules/$.global", "npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.invoke", "npm:core-js@1.2.6/library/modules/$.partial"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var global = $__require('npm:core-js@1.2.6/library/modules/$.global'),
      $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      invoke = $__require('npm:core-js@1.2.6/library/modules/$.invoke'),
      partial = $__require('npm:core-js@1.2.6/library/modules/$.partial'),
      navigator = global.navigator,
      MSIE = !!navigator && /MSIE .\./.test(navigator.userAgent);
  var wrap = function(set) {
    return MSIE ? function(fn, time) {
      return set(invoke(partial, [].slice.call(arguments, 2), typeof fn == 'function' ? fn : Function(fn)), time);
    } : set;
  };
  $export($export.G + $export.B + $export.F * MSIE, {
    setTimeout: wrap(global.setTimeout),
    setInterval: wrap(global.setInterval)
  });
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/js.array.statics", ["npm:core-js@1.2.6/library/modules/$", "npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.ctx", "npm:core-js@1.2.6/library/modules/$.core"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$'),
      $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      $ctx = $__require('npm:core-js@1.2.6/library/modules/$.ctx'),
      $Array = $__require('npm:core-js@1.2.6/library/modules/$.core').Array || Array,
      statics = {};
  var setStatics = function(keys, length) {
    $.each.call(keys.split(','), function(key) {
      if (length == undefined && key in $Array)
        statics[key] = $Array[key];
      else if (key in [])
        statics[key] = $ctx(Function.call, [][key], length);
    });
  };
  setStatics('pop,reverse,shift,keys,values,entries', 1);
  setStatics('indexOf,every,some,forEach,map,filter,find,findIndex,includes', 3);
  setStatics('join,slice,concat,push,splice,unshift,sort,lastIndexOf,' + 'reduce,reduceRight,copyWithin,fill');
  $export($export.S, 'Array', statics);
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es7.set.to-json", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.collection-to-json"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export');
  $export($export.P, 'Set', {toJSON: $__require('npm:core-js@1.2.6/library/modules/$.collection-to-json')('Set')});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.collection-to-json", ["npm:core-js@1.2.6/library/modules/$.for-of", "npm:core-js@1.2.6/library/modules/$.classof"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var forOf = $__require('npm:core-js@1.2.6/library/modules/$.for-of'),
      classof = $__require('npm:core-js@1.2.6/library/modules/$.classof');
  module.exports = function(NAME) {
    return function toJSON() {
      if (classof(this) != NAME)
        throw TypeError(NAME + "#toJSON isn't generic");
      var arr = [];
      forOf(this, false, arr.push, arr);
      return arr;
    };
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es7.map.to-json", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.collection-to-json"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export');
  $export($export.P, 'Map', {toJSON: $__require('npm:core-js@1.2.6/library/modules/$.collection-to-json')('Map')});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es7.object.entries", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.object-to-array"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      $entries = $__require('npm:core-js@1.2.6/library/modules/$.object-to-array')(true);
  $export($export.S, 'Object', {entries: function entries(it) {
      return $entries(it);
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.object-to-array", ["npm:core-js@1.2.6/library/modules/$", "npm:core-js@1.2.6/library/modules/$.to-iobject"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$'),
      toIObject = $__require('npm:core-js@1.2.6/library/modules/$.to-iobject'),
      isEnum = $.isEnum;
  module.exports = function(isEntries) {
    return function(it) {
      var O = toIObject(it),
          keys = $.getKeys(O),
          length = keys.length,
          i = 0,
          result = [],
          key;
      while (length > i)
        if (isEnum.call(O, key = keys[i++])) {
          result.push(isEntries ? [key, O[key]] : O[key]);
        }
      return result;
    };
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es7.object.values", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.object-to-array"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      $values = $__require('npm:core-js@1.2.6/library/modules/$.object-to-array')(false);
  $export($export.S, 'Object', {values: function values(it) {
      return $values(it);
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es7.object.get-own-property-descriptors", ["npm:core-js@1.2.6/library/modules/$", "npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.own-keys", "npm:core-js@1.2.6/library/modules/$.to-iobject", "npm:core-js@1.2.6/library/modules/$.property-desc"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$'),
      $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      ownKeys = $__require('npm:core-js@1.2.6/library/modules/$.own-keys'),
      toIObject = $__require('npm:core-js@1.2.6/library/modules/$.to-iobject'),
      createDesc = $__require('npm:core-js@1.2.6/library/modules/$.property-desc');
  $export($export.S, 'Object', {getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
      var O = toIObject(object),
          setDesc = $.setDesc,
          getDesc = $.getDesc,
          keys = ownKeys(O),
          result = {},
          i = 0,
          key,
          D;
      while (keys.length > i) {
        D = getDesc(O, key = keys[i++]);
        if (key in result)
          setDesc(result, key, createDesc(0, D));
        else
          result[key] = D;
      }
      return result;
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.replacer", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(regExp, replace) {
    var replacer = replace === Object(replace) ? function(part) {
      return replace[part];
    } : replace;
    return function(it) {
      return String(it).replace(regExp, replacer);
    };
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es7.regexp.escape", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.replacer"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      $re = $__require('npm:core-js@1.2.6/library/modules/$.replacer')(/[\\^$*+?.()|[\]{}]/g, '\\$&');
  $export($export.S, 'RegExp', {escape: function escape(it) {
      return $re(it);
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es7.string.trim-right", ["npm:core-js@1.2.6/library/modules/$.string-trim"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  $__require('npm:core-js@1.2.6/library/modules/$.string-trim')('trimRight', function($trim) {
    return function trimRight() {
      return $trim(this, 2);
    };
  });
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es7.string.trim-left", ["npm:core-js@1.2.6/library/modules/$.string-trim"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  $__require('npm:core-js@1.2.6/library/modules/$.string-trim')('trimLeft', function($trim) {
    return function trimLeft() {
      return $trim(this, 1);
    };
  });
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es7.string.pad-right", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.string-pad"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      $pad = $__require('npm:core-js@1.2.6/library/modules/$.string-pad');
  $export($export.P, 'String', {padRight: function padRight(maxLength) {
      return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.string-pad", ["npm:core-js@1.2.6/library/modules/$.to-length", "npm:core-js@1.2.6/library/modules/$.string-repeat", "npm:core-js@1.2.6/library/modules/$.defined"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toLength = $__require('npm:core-js@1.2.6/library/modules/$.to-length'),
      repeat = $__require('npm:core-js@1.2.6/library/modules/$.string-repeat'),
      defined = $__require('npm:core-js@1.2.6/library/modules/$.defined');
  module.exports = function(that, maxLength, fillString, left) {
    var S = String(defined(that)),
        stringLength = S.length,
        fillStr = fillString === undefined ? ' ' : String(fillString),
        intMaxLength = toLength(maxLength);
    if (intMaxLength <= stringLength)
      return S;
    if (fillStr == '')
      fillStr = ' ';
    var fillLen = intMaxLength - stringLength,
        stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
    if (stringFiller.length > fillLen)
      stringFiller = stringFiller.slice(0, fillLen);
    return left ? stringFiller + S : S + stringFiller;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es7.string.pad-left", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.string-pad"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      $pad = $__require('npm:core-js@1.2.6/library/modules/$.string-pad');
  $export($export.P, 'String', {padLeft: function padLeft(maxLength) {
      return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es7.string.at", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.string-at"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      $at = $__require('npm:core-js@1.2.6/library/modules/$.string-at')(true);
  $export($export.P, 'String', {at: function at(pos) {
      return $at(this, pos);
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es7.array.includes", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.array-includes", "npm:core-js@1.2.6/library/modules/$.add-to-unscopables"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      $includes = $__require('npm:core-js@1.2.6/library/modules/$.array-includes')(true);
  $export($export.P, 'Array', {includes: function includes(el) {
      return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }});
  $__require('npm:core-js@1.2.6/library/modules/$.add-to-unscopables')('includes');
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.reflect.set-prototype-of", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.set-proto"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      setProto = $__require('npm:core-js@1.2.6/library/modules/$.set-proto');
  if (setProto)
    $export($export.S, 'Reflect', {setPrototypeOf: function setPrototypeOf(target, proto) {
        setProto.check(target, proto);
        try {
          setProto.set(target, proto);
          return true;
        } catch (e) {
          return false;
        }
      }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.reflect.set", ["npm:core-js@1.2.6/library/modules/$", "npm:core-js@1.2.6/library/modules/$.has", "npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.property-desc", "npm:core-js@1.2.6/library/modules/$.an-object", "npm:core-js@1.2.6/library/modules/$.is-object"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$'),
      has = $__require('npm:core-js@1.2.6/library/modules/$.has'),
      $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      createDesc = $__require('npm:core-js@1.2.6/library/modules/$.property-desc'),
      anObject = $__require('npm:core-js@1.2.6/library/modules/$.an-object'),
      isObject = $__require('npm:core-js@1.2.6/library/modules/$.is-object');
  function set(target, propertyKey, V) {
    var receiver = arguments.length < 4 ? target : arguments[3],
        ownDesc = $.getDesc(anObject(target), propertyKey),
        existingDescriptor,
        proto;
    if (!ownDesc) {
      if (isObject(proto = $.getProto(target))) {
        return set(proto, propertyKey, V, receiver);
      }
      ownDesc = createDesc(0);
    }
    if (has(ownDesc, 'value')) {
      if (ownDesc.writable === false || !isObject(receiver))
        return false;
      existingDescriptor = $.getDesc(receiver, propertyKey) || createDesc(0);
      existingDescriptor.value = V;
      $.setDesc(receiver, propertyKey, existingDescriptor);
      return true;
    }
    return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
  }
  $export($export.S, 'Reflect', {set: set});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.reflect.prevent-extensions", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.an-object"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      anObject = $__require('npm:core-js@1.2.6/library/modules/$.an-object'),
      $preventExtensions = Object.preventExtensions;
  $export($export.S, 'Reflect', {preventExtensions: function preventExtensions(target) {
      anObject(target);
      try {
        if ($preventExtensions)
          $preventExtensions(target);
        return true;
      } catch (e) {
        return false;
      }
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.own-keys", ["npm:core-js@1.2.6/library/modules/$", "npm:core-js@1.2.6/library/modules/$.an-object", "npm:core-js@1.2.6/library/modules/$.global"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$'),
      anObject = $__require('npm:core-js@1.2.6/library/modules/$.an-object'),
      Reflect = $__require('npm:core-js@1.2.6/library/modules/$.global').Reflect;
  module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
    var keys = $.getNames(anObject(it)),
        getSymbols = $.getSymbols;
    return getSymbols ? keys.concat(getSymbols(it)) : keys;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.reflect.own-keys", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.own-keys"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export');
  $export($export.S, 'Reflect', {ownKeys: $__require('npm:core-js@1.2.6/library/modules/$.own-keys')});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.reflect.is-extensible", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.an-object"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      anObject = $__require('npm:core-js@1.2.6/library/modules/$.an-object'),
      $isExtensible = Object.isExtensible;
  $export($export.S, 'Reflect', {isExtensible: function isExtensible(target) {
      anObject(target);
      return $isExtensible ? $isExtensible(target) : true;
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.reflect.has", ["npm:core-js@1.2.6/library/modules/$.export"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export');
  $export($export.S, 'Reflect', {has: function has(target, propertyKey) {
      return propertyKey in target;
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.reflect.get-prototype-of", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$", "npm:core-js@1.2.6/library/modules/$.an-object"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      getProto = $__require('npm:core-js@1.2.6/library/modules/$').getProto,
      anObject = $__require('npm:core-js@1.2.6/library/modules/$.an-object');
  $export($export.S, 'Reflect', {getPrototypeOf: function getPrototypeOf(target) {
      return getProto(anObject(target));
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.reflect.get-own-property-descriptor", ["npm:core-js@1.2.6/library/modules/$", "npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.an-object"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$'),
      $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      anObject = $__require('npm:core-js@1.2.6/library/modules/$.an-object');
  $export($export.S, 'Reflect', {getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
      return $.getDesc(anObject(target), propertyKey);
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.reflect.get", ["npm:core-js@1.2.6/library/modules/$", "npm:core-js@1.2.6/library/modules/$.has", "npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.is-object", "npm:core-js@1.2.6/library/modules/$.an-object"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$'),
      has = $__require('npm:core-js@1.2.6/library/modules/$.has'),
      $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      isObject = $__require('npm:core-js@1.2.6/library/modules/$.is-object'),
      anObject = $__require('npm:core-js@1.2.6/library/modules/$.an-object');
  function get(target, propertyKey) {
    var receiver = arguments.length < 3 ? target : arguments[2],
        desc,
        proto;
    if (anObject(target) === receiver)
      return target[propertyKey];
    if (desc = $.getDesc(target, propertyKey))
      return has(desc, 'value') ? desc.value : desc.get !== undefined ? desc.get.call(receiver) : undefined;
    if (isObject(proto = $.getProto(target)))
      return get(proto, propertyKey, receiver);
  }
  $export($export.S, 'Reflect', {get: get});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.reflect.enumerate", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.an-object", "npm:core-js@1.2.6/library/modules/$.iter-create"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      anObject = $__require('npm:core-js@1.2.6/library/modules/$.an-object');
  var Enumerate = function(iterated) {
    this._t = anObject(iterated);
    this._i = 0;
    var keys = this._k = [],
        key;
    for (key in iterated)
      keys.push(key);
  };
  $__require('npm:core-js@1.2.6/library/modules/$.iter-create')(Enumerate, 'Object', function() {
    var that = this,
        keys = that._k,
        key;
    do {
      if (that._i >= keys.length)
        return {
          value: undefined,
          done: true
        };
    } while (!((key = keys[that._i++]) in that._t));
    return {
      value: key,
      done: false
    };
  });
  $export($export.S, 'Reflect', {enumerate: function enumerate(target) {
      return new Enumerate(target);
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.reflect.delete-property", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$", "npm:core-js@1.2.6/library/modules/$.an-object"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      getDesc = $__require('npm:core-js@1.2.6/library/modules/$').getDesc,
      anObject = $__require('npm:core-js@1.2.6/library/modules/$.an-object');
  $export($export.S, 'Reflect', {deleteProperty: function deleteProperty(target, propertyKey) {
      var desc = getDesc(anObject(target), propertyKey);
      return desc && !desc.configurable ? false : delete target[propertyKey];
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.reflect.define-property", ["npm:core-js@1.2.6/library/modules/$", "npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.an-object", "npm:core-js@1.2.6/library/modules/$.fails"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$'),
      $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      anObject = $__require('npm:core-js@1.2.6/library/modules/$.an-object');
  $export($export.S + $export.F * $__require('npm:core-js@1.2.6/library/modules/$.fails')(function() {
    Reflect.defineProperty($.setDesc({}, 1, {value: 1}), 1, {value: 2});
  }), 'Reflect', {defineProperty: function defineProperty(target, propertyKey, attributes) {
      anObject(target);
      try {
        $.setDesc(target, propertyKey, attributes);
        return true;
      } catch (e) {
        return false;
      }
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.reflect.construct", ["npm:core-js@1.2.6/library/modules/$", "npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.a-function", "npm:core-js@1.2.6/library/modules/$.an-object", "npm:core-js@1.2.6/library/modules/$.is-object", "npm:core-js@1.2.6/library/modules/$.core", "npm:core-js@1.2.6/library/modules/$.fails"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$'),
      $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      aFunction = $__require('npm:core-js@1.2.6/library/modules/$.a-function'),
      anObject = $__require('npm:core-js@1.2.6/library/modules/$.an-object'),
      isObject = $__require('npm:core-js@1.2.6/library/modules/$.is-object'),
      bind = Function.bind || $__require('npm:core-js@1.2.6/library/modules/$.core').Function.prototype.bind;
  $export($export.S + $export.F * $__require('npm:core-js@1.2.6/library/modules/$.fails')(function() {
    function F() {}
    return !(Reflect.construct(function() {}, [], F) instanceof F);
  }), 'Reflect', {construct: function construct(Target, args) {
      aFunction(Target);
      var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
      if (Target == newTarget) {
        if (args != undefined)
          switch (anObject(args).length) {
            case 0:
              return new Target;
            case 1:
              return new Target(args[0]);
            case 2:
              return new Target(args[0], args[1]);
            case 3:
              return new Target(args[0], args[1], args[2]);
            case 4:
              return new Target(args[0], args[1], args[2], args[3]);
          }
        var $args = [null];
        $args.push.apply($args, args);
        return new (bind.apply(Target, $args));
      }
      var proto = newTarget.prototype,
          instance = $.create(isObject(proto) ? proto : Object.prototype),
          result = Function.apply.call(Target, instance, args);
      return isObject(result) ? result : instance;
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.reflect.apply", ["npm:core-js@1.2.6/library/modules/$.export"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      _apply = Function.apply;
  $export($export.S, 'Reflect', {apply: function apply(target, thisArgument, argumentsList) {
      return _apply.call(target, thisArgument, argumentsList);
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.weak-set", ["npm:core-js@1.2.6/library/modules/$.collection-weak", "npm:core-js@1.2.6/library/modules/$.collection"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var weak = $__require('npm:core-js@1.2.6/library/modules/$.collection-weak');
  $__require('npm:core-js@1.2.6/library/modules/$.collection')('WeakSet', function(get) {
    return function WeakSet() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  }, {add: function add(value) {
      return weak.def(this, value, true);
    }}, weak, false, true);
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.collection-weak", ["npm:core-js@1.2.6/library/modules/$.hide", "npm:core-js@1.2.6/library/modules/$.redefine-all", "npm:core-js@1.2.6/library/modules/$.an-object", "npm:core-js@1.2.6/library/modules/$.is-object", "npm:core-js@1.2.6/library/modules/$.strict-new", "npm:core-js@1.2.6/library/modules/$.for-of", "npm:core-js@1.2.6/library/modules/$.array-methods", "npm:core-js@1.2.6/library/modules/$.has", "npm:core-js@1.2.6/library/modules/$.uid"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var hide = $__require('npm:core-js@1.2.6/library/modules/$.hide'),
      redefineAll = $__require('npm:core-js@1.2.6/library/modules/$.redefine-all'),
      anObject = $__require('npm:core-js@1.2.6/library/modules/$.an-object'),
      isObject = $__require('npm:core-js@1.2.6/library/modules/$.is-object'),
      strictNew = $__require('npm:core-js@1.2.6/library/modules/$.strict-new'),
      forOf = $__require('npm:core-js@1.2.6/library/modules/$.for-of'),
      createArrayMethod = $__require('npm:core-js@1.2.6/library/modules/$.array-methods'),
      $has = $__require('npm:core-js@1.2.6/library/modules/$.has'),
      WEAK = $__require('npm:core-js@1.2.6/library/modules/$.uid')('weak'),
      isExtensible = Object.isExtensible || isObject,
      arrayFind = createArrayMethod(5),
      arrayFindIndex = createArrayMethod(6),
      id = 0;
  var frozenStore = function(that) {
    return that._l || (that._l = new FrozenStore);
  };
  var FrozenStore = function() {
    this.a = [];
  };
  var findFrozen = function(store, key) {
    return arrayFind(store.a, function(it) {
      return it[0] === key;
    });
  };
  FrozenStore.prototype = {
    get: function(key) {
      var entry = findFrozen(this, key);
      if (entry)
        return entry[1];
    },
    has: function(key) {
      return !!findFrozen(this, key);
    },
    set: function(key, value) {
      var entry = findFrozen(this, key);
      if (entry)
        entry[1] = value;
      else
        this.a.push([key, value]);
    },
    'delete': function(key) {
      var index = arrayFindIndex(this.a, function(it) {
        return it[0] === key;
      });
      if (~index)
        this.a.splice(index, 1);
      return !!~index;
    }
  };
  module.exports = {
    getConstructor: function(wrapper, NAME, IS_MAP, ADDER) {
      var C = wrapper(function(that, iterable) {
        strictNew(that, C, NAME);
        that._i = id++;
        that._l = undefined;
        if (iterable != undefined)
          forOf(iterable, IS_MAP, that[ADDER], that);
      });
      redefineAll(C.prototype, {
        'delete': function(key) {
          if (!isObject(key))
            return false;
          if (!isExtensible(key))
            return frozenStore(this)['delete'](key);
          return $has(key, WEAK) && $has(key[WEAK], this._i) && delete key[WEAK][this._i];
        },
        has: function has(key) {
          if (!isObject(key))
            return false;
          if (!isExtensible(key))
            return frozenStore(this).has(key);
          return $has(key, WEAK) && $has(key[WEAK], this._i);
        }
      });
      return C;
    },
    def: function(that, key, value) {
      if (!isExtensible(anObject(key))) {
        frozenStore(that).set(key, value);
      } else {
        $has(key, WEAK) || hide(key, WEAK, {});
        key[WEAK][that._i] = value;
      }
      return that;
    },
    frozenStore: frozenStore,
    WEAK: WEAK
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.weak-map", ["npm:core-js@1.2.6/library/modules/$", "npm:core-js@1.2.6/library/modules/$.redefine", "npm:core-js@1.2.6/library/modules/$.collection-weak", "npm:core-js@1.2.6/library/modules/$.is-object", "npm:core-js@1.2.6/library/modules/$.has", "npm:core-js@1.2.6/library/modules/$.collection"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$'),
      redefine = $__require('npm:core-js@1.2.6/library/modules/$.redefine'),
      weak = $__require('npm:core-js@1.2.6/library/modules/$.collection-weak'),
      isObject = $__require('npm:core-js@1.2.6/library/modules/$.is-object'),
      has = $__require('npm:core-js@1.2.6/library/modules/$.has'),
      frozenStore = weak.frozenStore,
      WEAK = weak.WEAK,
      isExtensible = Object.isExtensible || isObject,
      tmp = {};
  var $WeakMap = $__require('npm:core-js@1.2.6/library/modules/$.collection')('WeakMap', function(get) {
    return function WeakMap() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  }, {
    get: function get(key) {
      if (isObject(key)) {
        if (!isExtensible(key))
          return frozenStore(this).get(key);
        if (has(key, WEAK))
          return key[WEAK][this._i];
      }
    },
    set: function set(key, value) {
      return weak.def(this, key, value);
    }
  }, weak, true, true);
  if (new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7) {
    $.each.call(['delete', 'has', 'get', 'set'], function(key) {
      var proto = $WeakMap.prototype,
          method = proto[key];
      redefine(proto, key, function(a, b) {
        if (isObject(a) && !isExtensible(a)) {
          var result = frozenStore(this)[key](a, b);
          return key == 'set' ? this : result;
        }
        return method.call(this, a, b);
      });
    });
  }
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.set", ["npm:core-js@1.2.6/library/modules/$.collection-strong", "npm:core-js@1.2.6/library/modules/$.collection"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var strong = $__require('npm:core-js@1.2.6/library/modules/$.collection-strong');
  $__require('npm:core-js@1.2.6/library/modules/$.collection')('Set', function(get) {
    return function Set() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  }, {add: function add(value) {
      return strong.def(this, value = value === 0 ? 0 : value, value);
    }}, strong);
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.collection", ["npm:core-js@1.2.6/library/modules/$", "npm:core-js@1.2.6/library/modules/$.global", "npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.fails", "npm:core-js@1.2.6/library/modules/$.hide", "npm:core-js@1.2.6/library/modules/$.redefine-all", "npm:core-js@1.2.6/library/modules/$.for-of", "npm:core-js@1.2.6/library/modules/$.strict-new", "npm:core-js@1.2.6/library/modules/$.is-object", "npm:core-js@1.2.6/library/modules/$.set-to-string-tag", "npm:core-js@1.2.6/library/modules/$.descriptors"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$'),
      global = $__require('npm:core-js@1.2.6/library/modules/$.global'),
      $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      fails = $__require('npm:core-js@1.2.6/library/modules/$.fails'),
      hide = $__require('npm:core-js@1.2.6/library/modules/$.hide'),
      redefineAll = $__require('npm:core-js@1.2.6/library/modules/$.redefine-all'),
      forOf = $__require('npm:core-js@1.2.6/library/modules/$.for-of'),
      strictNew = $__require('npm:core-js@1.2.6/library/modules/$.strict-new'),
      isObject = $__require('npm:core-js@1.2.6/library/modules/$.is-object'),
      setToStringTag = $__require('npm:core-js@1.2.6/library/modules/$.set-to-string-tag'),
      DESCRIPTORS = $__require('npm:core-js@1.2.6/library/modules/$.descriptors');
  module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
    var Base = global[NAME],
        C = Base,
        ADDER = IS_MAP ? 'set' : 'add',
        proto = C && C.prototype,
        O = {};
    if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function() {
      new C().entries().next();
    }))) {
      C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
      redefineAll(C.prototype, methods);
    } else {
      C = wrapper(function(target, iterable) {
        strictNew(target, C, NAME);
        target._c = new Base;
        if (iterable != undefined)
          forOf(iterable, IS_MAP, target[ADDER], target);
      });
      $.each.call('add,clear,delete,forEach,get,has,set,keys,values,entries'.split(','), function(KEY) {
        var IS_ADDER = KEY == 'add' || KEY == 'set';
        if (KEY in proto && !(IS_WEAK && KEY == 'clear'))
          hide(C.prototype, KEY, function(a, b) {
            if (!IS_ADDER && IS_WEAK && !isObject(a))
              return KEY == 'get' ? undefined : false;
            var result = this._c[KEY](a === 0 ? 0 : a, b);
            return IS_ADDER ? this : result;
          });
      });
      if ('size' in proto)
        $.setDesc(C.prototype, 'size', {get: function() {
            return this._c.size;
          }});
    }
    setToStringTag(C, NAME);
    O[NAME] = C;
    $export($export.G + $export.W + $export.F, O);
    if (!IS_WEAK)
      common.setStrong(C, NAME, IS_MAP);
    return C;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.collection-strong", ["npm:core-js@1.2.6/library/modules/$", "npm:core-js@1.2.6/library/modules/$.hide", "npm:core-js@1.2.6/library/modules/$.redefine-all", "npm:core-js@1.2.6/library/modules/$.ctx", "npm:core-js@1.2.6/library/modules/$.strict-new", "npm:core-js@1.2.6/library/modules/$.defined", "npm:core-js@1.2.6/library/modules/$.for-of", "npm:core-js@1.2.6/library/modules/$.iter-define", "npm:core-js@1.2.6/library/modules/$.iter-step", "npm:core-js@1.2.6/library/modules/$.uid", "npm:core-js@1.2.6/library/modules/$.has", "npm:core-js@1.2.6/library/modules/$.is-object", "npm:core-js@1.2.6/library/modules/$.set-species", "npm:core-js@1.2.6/library/modules/$.descriptors"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$'),
      hide = $__require('npm:core-js@1.2.6/library/modules/$.hide'),
      redefineAll = $__require('npm:core-js@1.2.6/library/modules/$.redefine-all'),
      ctx = $__require('npm:core-js@1.2.6/library/modules/$.ctx'),
      strictNew = $__require('npm:core-js@1.2.6/library/modules/$.strict-new'),
      defined = $__require('npm:core-js@1.2.6/library/modules/$.defined'),
      forOf = $__require('npm:core-js@1.2.6/library/modules/$.for-of'),
      $iterDefine = $__require('npm:core-js@1.2.6/library/modules/$.iter-define'),
      step = $__require('npm:core-js@1.2.6/library/modules/$.iter-step'),
      ID = $__require('npm:core-js@1.2.6/library/modules/$.uid')('id'),
      $has = $__require('npm:core-js@1.2.6/library/modules/$.has'),
      isObject = $__require('npm:core-js@1.2.6/library/modules/$.is-object'),
      setSpecies = $__require('npm:core-js@1.2.6/library/modules/$.set-species'),
      DESCRIPTORS = $__require('npm:core-js@1.2.6/library/modules/$.descriptors'),
      isExtensible = Object.isExtensible || isObject,
      SIZE = DESCRIPTORS ? '_s' : 'size',
      id = 0;
  var fastKey = function(it, create) {
    if (!isObject(it))
      return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!$has(it, ID)) {
      if (!isExtensible(it))
        return 'F';
      if (!create)
        return 'E';
      hide(it, ID, ++id);
    }
    return 'O' + it[ID];
  };
  var getEntry = function(that, key) {
    var index = fastKey(key),
        entry;
    if (index !== 'F')
      return that._i[index];
    for (entry = that._f; entry; entry = entry.n) {
      if (entry.k == key)
        return entry;
    }
  };
  module.exports = {
    getConstructor: function(wrapper, NAME, IS_MAP, ADDER) {
      var C = wrapper(function(that, iterable) {
        strictNew(that, C, NAME);
        that._i = $.create(null);
        that._f = undefined;
        that._l = undefined;
        that[SIZE] = 0;
        if (iterable != undefined)
          forOf(iterable, IS_MAP, that[ADDER], that);
      });
      redefineAll(C.prototype, {
        clear: function clear() {
          for (var that = this,
              data = that._i,
              entry = that._f; entry; entry = entry.n) {
            entry.r = true;
            if (entry.p)
              entry.p = entry.p.n = undefined;
            delete data[entry.i];
          }
          that._f = that._l = undefined;
          that[SIZE] = 0;
        },
        'delete': function(key) {
          var that = this,
              entry = getEntry(that, key);
          if (entry) {
            var next = entry.n,
                prev = entry.p;
            delete that._i[entry.i];
            entry.r = true;
            if (prev)
              prev.n = next;
            if (next)
              next.p = prev;
            if (that._f == entry)
              that._f = next;
            if (that._l == entry)
              that._l = prev;
            that[SIZE]--;
          }
          return !!entry;
        },
        forEach: function forEach(callbackfn) {
          var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3),
              entry;
          while (entry = entry ? entry.n : this._f) {
            f(entry.v, entry.k, this);
            while (entry && entry.r)
              entry = entry.p;
          }
        },
        has: function has(key) {
          return !!getEntry(this, key);
        }
      });
      if (DESCRIPTORS)
        $.setDesc(C.prototype, 'size', {get: function() {
            return defined(this[SIZE]);
          }});
      return C;
    },
    def: function(that, key, value) {
      var entry = getEntry(that, key),
          prev,
          index;
      if (entry) {
        entry.v = value;
      } else {
        that._l = entry = {
          i: index = fastKey(key, true),
          k: key,
          v: value,
          p: prev = that._l,
          n: undefined,
          r: false
        };
        if (!that._f)
          that._f = entry;
        if (prev)
          prev.n = entry;
        that[SIZE]++;
        if (index !== 'F')
          that._i[index] = entry;
      }
      return that;
    },
    getEntry: getEntry,
    setStrong: function(C, NAME, IS_MAP) {
      $iterDefine(C, NAME, function(iterated, kind) {
        this._t = iterated;
        this._k = kind;
        this._l = undefined;
      }, function() {
        var that = this,
            kind = that._k,
            entry = that._l;
        while (entry && entry.r)
          entry = entry.p;
        if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
          that._t = undefined;
          return step(1);
        }
        if (kind == 'keys')
          return step(0, entry.k);
        if (kind == 'values')
          return step(0, entry.v);
        return step(0, [entry.k, entry.v]);
      }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);
      setSpecies(NAME);
    }
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.map", ["npm:core-js@1.2.6/library/modules/$.collection-strong", "npm:core-js@1.2.6/library/modules/$.collection"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var strong = $__require('npm:core-js@1.2.6/library/modules/$.collection-strong');
  $__require('npm:core-js@1.2.6/library/modules/$.collection')('Map', function(get) {
    return function Map() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  }, {
    get: function get(key) {
      var entry = strong.getEntry(this, key);
      return entry && entry.v;
    },
    set: function set(key, value) {
      return strong.def(this, key === 0 ? 0 : key, value);
    }
  }, strong, true);
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.redefine-all", ["npm:core-js@1.2.6/library/modules/$.redefine"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var redefine = $__require('npm:core-js@1.2.6/library/modules/$.redefine');
  module.exports = function(target, src) {
    for (var key in src)
      redefine(target, key, src[key]);
    return target;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:process@0.11.2/browser", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var process = module.exports = {};
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;
  function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
      queue = currentQueue.concat(queue);
    } else {
      queueIndex = -1;
    }
    if (queue.length) {
      drainQueue();
    }
  }
  function drainQueue() {
    if (draining) {
      return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex].run();
        }
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
  }
  process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
      setTimeout(drainQueue, 0);
    }
  };
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  Item.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = '';
  process.versions = {};
  function noop() {}
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.binding = function(name) {
    throw new Error('process.binding is not supported');
  };
  process.cwd = function() {
    return '/';
  };
  process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
  };
  process.umask = function() {
    return 0;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:process@0.11.2", ["npm:process@0.11.2/browser"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('npm:process@0.11.2/browser');
  global.define = __define;
  return module.exports;
});

System.registerDynamic("github:jspm/nodelibs-process@0.1.2/index", ["npm:process@0.11.2"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = System._nodeRequire ? process : $__require('npm:process@0.11.2');
  global.define = __define;
  return module.exports;
});

System.registerDynamic("github:jspm/nodelibs-process@0.1.2", ["github:jspm/nodelibs-process@0.1.2/index"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('github:jspm/nodelibs-process@0.1.2/index');
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.task", ["npm:core-js@1.2.6/library/modules/$.ctx", "npm:core-js@1.2.6/library/modules/$.invoke", "npm:core-js@1.2.6/library/modules/$.html", "npm:core-js@1.2.6/library/modules/$.dom-create", "npm:core-js@1.2.6/library/modules/$.global", "npm:core-js@1.2.6/library/modules/$.cof", "github:jspm/nodelibs-process@0.1.2"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    var ctx = $__require('npm:core-js@1.2.6/library/modules/$.ctx'),
        invoke = $__require('npm:core-js@1.2.6/library/modules/$.invoke'),
        html = $__require('npm:core-js@1.2.6/library/modules/$.html'),
        cel = $__require('npm:core-js@1.2.6/library/modules/$.dom-create'),
        global = $__require('npm:core-js@1.2.6/library/modules/$.global'),
        process = global.process,
        setTask = global.setImmediate,
        clearTask = global.clearImmediate,
        MessageChannel = global.MessageChannel,
        counter = 0,
        queue = {},
        ONREADYSTATECHANGE = 'onreadystatechange',
        defer,
        channel,
        port;
    var run = function() {
      var id = +this;
      if (queue.hasOwnProperty(id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
      }
    };
    var listner = function(event) {
      run.call(event.data);
    };
    if (!setTask || !clearTask) {
      setTask = function setImmediate(fn) {
        var args = [],
            i = 1;
        while (arguments.length > i)
          args.push(arguments[i++]);
        queue[++counter] = function() {
          invoke(typeof fn == 'function' ? fn : Function(fn), args);
        };
        defer(counter);
        return counter;
      };
      clearTask = function clearImmediate(id) {
        delete queue[id];
      };
      if ($__require('npm:core-js@1.2.6/library/modules/$.cof')(process) == 'process') {
        defer = function(id) {
          process.nextTick(ctx(run, id, 1));
        };
      } else if (MessageChannel) {
        channel = new MessageChannel;
        port = channel.port2;
        channel.port1.onmessage = listner;
        defer = ctx(port.postMessage, port, 1);
      } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
        defer = function(id) {
          global.postMessage(id + '', '*');
        };
        global.addEventListener('message', listner, false);
      } else if (ONREADYSTATECHANGE in cel('script')) {
        defer = function(id) {
          html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run.call(id);
          };
        };
      } else {
        defer = function(id) {
          setTimeout(ctx(run, id, 1), 0);
        };
      }
    }
    module.exports = {
      set: setTask,
      clear: clearTask
    };
  })($__require('github:jspm/nodelibs-process@0.1.2'));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.microtask", ["npm:core-js@1.2.6/library/modules/$.global", "npm:core-js@1.2.6/library/modules/$.task", "npm:core-js@1.2.6/library/modules/$.cof", "github:jspm/nodelibs-process@0.1.2"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    var global = $__require('npm:core-js@1.2.6/library/modules/$.global'),
        macrotask = $__require('npm:core-js@1.2.6/library/modules/$.task').set,
        Observer = global.MutationObserver || global.WebKitMutationObserver,
        process = global.process,
        Promise = global.Promise,
        isNode = $__require('npm:core-js@1.2.6/library/modules/$.cof')(process) == 'process',
        head,
        last,
        notify;
    var flush = function() {
      var parent,
          domain,
          fn;
      if (isNode && (parent = process.domain)) {
        process.domain = null;
        parent.exit();
      }
      while (head) {
        domain = head.domain;
        fn = head.fn;
        if (domain)
          domain.enter();
        fn();
        if (domain)
          domain.exit();
        head = head.next;
      }
      last = undefined;
      if (parent)
        parent.enter();
    };
    if (isNode) {
      notify = function() {
        process.nextTick(flush);
      };
    } else if (Observer) {
      var toggle = 1,
          node = document.createTextNode('');
      new Observer(flush).observe(node, {characterData: true});
      notify = function() {
        node.data = toggle = -toggle;
      };
    } else if (Promise && Promise.resolve) {
      notify = function() {
        Promise.resolve().then(flush);
      };
    } else {
      notify = function() {
        macrotask.call(global, flush);
      };
    }
    module.exports = function asap(fn) {
      var task = {
        fn: fn,
        next: undefined,
        domain: isNode && process.domain
      };
      if (last)
        last.next = task;
      if (!head) {
        head = task;
        notify();
      }
      last = task;
    };
  })($__require('github:jspm/nodelibs-process@0.1.2'));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.species-constructor", ["npm:core-js@1.2.6/library/modules/$.an-object", "npm:core-js@1.2.6/library/modules/$.a-function", "npm:core-js@1.2.6/library/modules/$.wks"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var anObject = $__require('npm:core-js@1.2.6/library/modules/$.an-object'),
      aFunction = $__require('npm:core-js@1.2.6/library/modules/$.a-function'),
      SPECIES = $__require('npm:core-js@1.2.6/library/modules/$.wks')('species');
  module.exports = function(O, D) {
    var C = anObject(O).constructor,
        S;
    return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.for-of", ["npm:core-js@1.2.6/library/modules/$.ctx", "npm:core-js@1.2.6/library/modules/$.iter-call", "npm:core-js@1.2.6/library/modules/$.is-array-iter", "npm:core-js@1.2.6/library/modules/$.an-object", "npm:core-js@1.2.6/library/modules/$.to-length", "npm:core-js@1.2.6/library/modules/core.get-iterator-method"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var ctx = $__require('npm:core-js@1.2.6/library/modules/$.ctx'),
      call = $__require('npm:core-js@1.2.6/library/modules/$.iter-call'),
      isArrayIter = $__require('npm:core-js@1.2.6/library/modules/$.is-array-iter'),
      anObject = $__require('npm:core-js@1.2.6/library/modules/$.an-object'),
      toLength = $__require('npm:core-js@1.2.6/library/modules/$.to-length'),
      getIterFn = $__require('npm:core-js@1.2.6/library/modules/core.get-iterator-method');
  module.exports = function(iterable, entries, fn, that) {
    var iterFn = getIterFn(iterable),
        f = ctx(fn, that, entries ? 2 : 1),
        index = 0,
        length,
        step,
        iterator;
    if (typeof iterFn != 'function')
      throw TypeError(iterable + ' is not iterable!');
    if (isArrayIter(iterFn))
      for (length = toLength(iterable.length); length > index; index++) {
        entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
      }
    else
      for (iterator = iterFn.call(iterable); !(step = iterator.next()).done; ) {
        call(iterator, f, step.value, entries);
      }
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.strict-new", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(it, Constructor, name) {
    if (!(it instanceof Constructor))
      throw TypeError(name + ": use the 'new' operator!");
    return it;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.promise", ["npm:core-js@1.2.6/library/modules/$", "npm:core-js@1.2.6/library/modules/$.library", "npm:core-js@1.2.6/library/modules/$.global", "npm:core-js@1.2.6/library/modules/$.ctx", "npm:core-js@1.2.6/library/modules/$.classof", "npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.is-object", "npm:core-js@1.2.6/library/modules/$.an-object", "npm:core-js@1.2.6/library/modules/$.a-function", "npm:core-js@1.2.6/library/modules/$.strict-new", "npm:core-js@1.2.6/library/modules/$.for-of", "npm:core-js@1.2.6/library/modules/$.set-proto", "npm:core-js@1.2.6/library/modules/$.same-value", "npm:core-js@1.2.6/library/modules/$.wks", "npm:core-js@1.2.6/library/modules/$.species-constructor", "npm:core-js@1.2.6/library/modules/$.microtask", "npm:core-js@1.2.6/library/modules/$.descriptors", "npm:core-js@1.2.6/library/modules/$.redefine-all", "npm:core-js@1.2.6/library/modules/$.set-to-string-tag", "npm:core-js@1.2.6/library/modules/$.set-species", "npm:core-js@1.2.6/library/modules/$.core", "npm:core-js@1.2.6/library/modules/$.iter-detect", "github:jspm/nodelibs-process@0.1.2"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var $ = $__require('npm:core-js@1.2.6/library/modules/$'),
        LIBRARY = $__require('npm:core-js@1.2.6/library/modules/$.library'),
        global = $__require('npm:core-js@1.2.6/library/modules/$.global'),
        ctx = $__require('npm:core-js@1.2.6/library/modules/$.ctx'),
        classof = $__require('npm:core-js@1.2.6/library/modules/$.classof'),
        $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
        isObject = $__require('npm:core-js@1.2.6/library/modules/$.is-object'),
        anObject = $__require('npm:core-js@1.2.6/library/modules/$.an-object'),
        aFunction = $__require('npm:core-js@1.2.6/library/modules/$.a-function'),
        strictNew = $__require('npm:core-js@1.2.6/library/modules/$.strict-new'),
        forOf = $__require('npm:core-js@1.2.6/library/modules/$.for-of'),
        setProto = $__require('npm:core-js@1.2.6/library/modules/$.set-proto').set,
        same = $__require('npm:core-js@1.2.6/library/modules/$.same-value'),
        SPECIES = $__require('npm:core-js@1.2.6/library/modules/$.wks')('species'),
        speciesConstructor = $__require('npm:core-js@1.2.6/library/modules/$.species-constructor'),
        asap = $__require('npm:core-js@1.2.6/library/modules/$.microtask'),
        PROMISE = 'Promise',
        process = global.process,
        isNode = classof(process) == 'process',
        P = global[PROMISE],
        Wrapper;
    var testResolve = function(sub) {
      var test = new P(function() {});
      if (sub)
        test.constructor = Object;
      return P.resolve(test) === test;
    };
    var USE_NATIVE = function() {
      var works = false;
      function P2(x) {
        var self = new P(x);
        setProto(self, P2.prototype);
        return self;
      }
      try {
        works = P && P.resolve && testResolve();
        setProto(P2, P);
        P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
        if (!(P2.resolve(5).then(function() {}) instanceof P2)) {
          works = false;
        }
        if (works && $__require('npm:core-js@1.2.6/library/modules/$.descriptors')) {
          var thenableThenGotten = false;
          P.resolve($.setDesc({}, 'then', {get: function() {
              thenableThenGotten = true;
            }}));
          works = thenableThenGotten;
        }
      } catch (e) {
        works = false;
      }
      return works;
    }();
    var sameConstructor = function(a, b) {
      if (LIBRARY && a === P && b === Wrapper)
        return true;
      return same(a, b);
    };
    var getConstructor = function(C) {
      var S = anObject(C)[SPECIES];
      return S != undefined ? S : C;
    };
    var isThenable = function(it) {
      var then;
      return isObject(it) && typeof(then = it.then) == 'function' ? then : false;
    };
    var PromiseCapability = function(C) {
      var resolve,
          reject;
      this.promise = new C(function($$resolve, $$reject) {
        if (resolve !== undefined || reject !== undefined)
          throw TypeError('Bad Promise constructor');
        resolve = $$resolve;
        reject = $$reject;
      });
      this.resolve = aFunction(resolve), this.reject = aFunction(reject);
    };
    var perform = function(exec) {
      try {
        exec();
      } catch (e) {
        return {error: e};
      }
    };
    var notify = function(record, isReject) {
      if (record.n)
        return;
      record.n = true;
      var chain = record.c;
      asap(function() {
        var value = record.v,
            ok = record.s == 1,
            i = 0;
        var run = function(reaction) {
          var handler = ok ? reaction.ok : reaction.fail,
              resolve = reaction.resolve,
              reject = reaction.reject,
              result,
              then;
          try {
            if (handler) {
              if (!ok)
                record.h = true;
              result = handler === true ? value : handler(value);
              if (result === reaction.promise) {
                reject(TypeError('Promise-chain cycle'));
              } else if (then = isThenable(result)) {
                then.call(result, resolve, reject);
              } else
                resolve(result);
            } else
              reject(value);
          } catch (e) {
            reject(e);
          }
        };
        while (chain.length > i)
          run(chain[i++]);
        chain.length = 0;
        record.n = false;
        if (isReject)
          setTimeout(function() {
            var promise = record.p,
                handler,
                console;
            if (isUnhandled(promise)) {
              if (isNode) {
                process.emit('unhandledRejection', value, promise);
              } else if (handler = global.onunhandledrejection) {
                handler({
                  promise: promise,
                  reason: value
                });
              } else if ((console = global.console) && console.error) {
                console.error('Unhandled promise rejection', value);
              }
            }
            record.a = undefined;
          }, 1);
      });
    };
    var isUnhandled = function(promise) {
      var record = promise._d,
          chain = record.a || record.c,
          i = 0,
          reaction;
      if (record.h)
        return false;
      while (chain.length > i) {
        reaction = chain[i++];
        if (reaction.fail || !isUnhandled(reaction.promise))
          return false;
      }
      return true;
    };
    var $reject = function(value) {
      var record = this;
      if (record.d)
        return;
      record.d = true;
      record = record.r || record;
      record.v = value;
      record.s = 2;
      record.a = record.c.slice();
      notify(record, true);
    };
    var $resolve = function(value) {
      var record = this,
          then;
      if (record.d)
        return;
      record.d = true;
      record = record.r || record;
      try {
        if (record.p === value)
          throw TypeError("Promise can't be resolved itself");
        if (then = isThenable(value)) {
          asap(function() {
            var wrapper = {
              r: record,
              d: false
            };
            try {
              then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
            } catch (e) {
              $reject.call(wrapper, e);
            }
          });
        } else {
          record.v = value;
          record.s = 1;
          notify(record, false);
        }
      } catch (e) {
        $reject.call({
          r: record,
          d: false
        }, e);
      }
    };
    if (!USE_NATIVE) {
      P = function Promise(executor) {
        aFunction(executor);
        var record = this._d = {
          p: strictNew(this, P, PROMISE),
          c: [],
          a: undefined,
          s: 0,
          d: false,
          v: undefined,
          h: false,
          n: false
        };
        try {
          executor(ctx($resolve, record, 1), ctx($reject, record, 1));
        } catch (err) {
          $reject.call(record, err);
        }
      };
      $__require('npm:core-js@1.2.6/library/modules/$.redefine-all')(P.prototype, {
        then: function then(onFulfilled, onRejected) {
          var reaction = new PromiseCapability(speciesConstructor(this, P)),
              promise = reaction.promise,
              record = this._d;
          reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
          reaction.fail = typeof onRejected == 'function' && onRejected;
          record.c.push(reaction);
          if (record.a)
            record.a.push(reaction);
          if (record.s)
            notify(record, false);
          return promise;
        },
        'catch': function(onRejected) {
          return this.then(undefined, onRejected);
        }
      });
    }
    $export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
    $__require('npm:core-js@1.2.6/library/modules/$.set-to-string-tag')(P, PROMISE);
    $__require('npm:core-js@1.2.6/library/modules/$.set-species')(PROMISE);
    Wrapper = $__require('npm:core-js@1.2.6/library/modules/$.core')[PROMISE];
    $export($export.S + $export.F * !USE_NATIVE, PROMISE, {reject: function reject(r) {
        var capability = new PromiseCapability(this),
            $$reject = capability.reject;
        $$reject(r);
        return capability.promise;
      }});
    $export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {resolve: function resolve(x) {
        if (x instanceof P && sameConstructor(x.constructor, this))
          return x;
        var capability = new PromiseCapability(this),
            $$resolve = capability.resolve;
        $$resolve(x);
        return capability.promise;
      }});
    $export($export.S + $export.F * !(USE_NATIVE && $__require('npm:core-js@1.2.6/library/modules/$.iter-detect')(function(iter) {
      P.all(iter)['catch'](function() {});
    })), PROMISE, {
      all: function all(iterable) {
        var C = getConstructor(this),
            capability = new PromiseCapability(C),
            resolve = capability.resolve,
            reject = capability.reject,
            values = [];
        var abrupt = perform(function() {
          forOf(iterable, false, values.push, values);
          var remaining = values.length,
              results = Array(remaining);
          if (remaining)
            $.each.call(values, function(promise, index) {
              var alreadyCalled = false;
              C.resolve(promise).then(function(value) {
                if (alreadyCalled)
                  return;
                alreadyCalled = true;
                results[index] = value;
                --remaining || resolve(results);
              }, reject);
            });
          else
            resolve(results);
        });
        if (abrupt)
          reject(abrupt.error);
        return capability.promise;
      },
      race: function race(iterable) {
        var C = getConstructor(this),
            capability = new PromiseCapability(C),
            reject = capability.reject;
        var abrupt = perform(function() {
          forOf(iterable, false, function(promise) {
            C.resolve(promise).then(capability.resolve, reject);
          });
        });
        if (abrupt)
          reject(abrupt.error);
        return capability.promise;
      }
    });
  })($__require('github:jspm/nodelibs-process@0.1.2'));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.regexp.split", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.regexp.search", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.regexp.replace", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.regexp.match", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.regexp.flags", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.regexp.constructor", ["npm:core-js@1.2.6/library/modules/$.set-species"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  $__require('npm:core-js@1.2.6/library/modules/$.set-species')('RegExp');
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.array.find-index", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.array-methods", "npm:core-js@1.2.6/library/modules/$.add-to-unscopables"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      $find = $__require('npm:core-js@1.2.6/library/modules/$.array-methods')(6),
      KEY = 'findIndex',
      forced = true;
  if (KEY in [])
    Array(1)[KEY](function() {
      forced = false;
    });
  $export($export.P + $export.F * forced, 'Array', {findIndex: function findIndex(callbackfn) {
      return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }});
  $__require('npm:core-js@1.2.6/library/modules/$.add-to-unscopables')(KEY);
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.array.find", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.array-methods", "npm:core-js@1.2.6/library/modules/$.add-to-unscopables"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      $find = $__require('npm:core-js@1.2.6/library/modules/$.array-methods')(5),
      KEY = 'find',
      forced = true;
  if (KEY in [])
    Array(1)[KEY](function() {
      forced = false;
    });
  $export($export.P + $export.F * forced, 'Array', {find: function find(callbackfn) {
      return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }});
  $__require('npm:core-js@1.2.6/library/modules/$.add-to-unscopables')(KEY);
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.array-fill", ["npm:core-js@1.2.6/library/modules/$.to-object", "npm:core-js@1.2.6/library/modules/$.to-index", "npm:core-js@1.2.6/library/modules/$.to-length"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toObject = $__require('npm:core-js@1.2.6/library/modules/$.to-object'),
      toIndex = $__require('npm:core-js@1.2.6/library/modules/$.to-index'),
      toLength = $__require('npm:core-js@1.2.6/library/modules/$.to-length');
  module.exports = [].fill || function fill(value) {
    var O = toObject(this),
        length = toLength(O.length),
        $$ = arguments,
        $$len = $$.length,
        index = toIndex($$len > 1 ? $$[1] : undefined, length),
        end = $$len > 2 ? $$[2] : undefined,
        endPos = end === undefined ? length : toIndex(end, length);
    while (endPos > index)
      O[index++] = value;
    return O;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.array.fill", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.array-fill", "npm:core-js@1.2.6/library/modules/$.add-to-unscopables"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export');
  $export($export.P, 'Array', {fill: $__require('npm:core-js@1.2.6/library/modules/$.array-fill')});
  $__require('npm:core-js@1.2.6/library/modules/$.add-to-unscopables')('fill');
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.array-copy-within", ["npm:core-js@1.2.6/library/modules/$.to-object", "npm:core-js@1.2.6/library/modules/$.to-index", "npm:core-js@1.2.6/library/modules/$.to-length"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toObject = $__require('npm:core-js@1.2.6/library/modules/$.to-object'),
      toIndex = $__require('npm:core-js@1.2.6/library/modules/$.to-index'),
      toLength = $__require('npm:core-js@1.2.6/library/modules/$.to-length');
  module.exports = [].copyWithin || function copyWithin(target, start) {
    var O = toObject(this),
        len = toLength(O.length),
        to = toIndex(target, len),
        from = toIndex(start, len),
        $$ = arguments,
        end = $$.length > 2 ? $$[2] : undefined,
        count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to),
        inc = 1;
    if (from < to && to < from + count) {
      inc = -1;
      from += count - 1;
      to += count - 1;
    }
    while (count-- > 0) {
      if (from in O)
        O[to] = O[from];
      else
        delete O[to];
      to += inc;
      from += inc;
    }
    return O;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.array.copy-within", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.array-copy-within", "npm:core-js@1.2.6/library/modules/$.add-to-unscopables"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export');
  $export($export.P, 'Array', {copyWithin: $__require('npm:core-js@1.2.6/library/modules/$.array-copy-within')});
  $__require('npm:core-js@1.2.6/library/modules/$.add-to-unscopables')('copyWithin');
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.set-species", ["npm:core-js@1.2.6/library/modules/$.core", "npm:core-js@1.2.6/library/modules/$", "npm:core-js@1.2.6/library/modules/$.descriptors", "npm:core-js@1.2.6/library/modules/$.wks"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var core = $__require('npm:core-js@1.2.6/library/modules/$.core'),
      $ = $__require('npm:core-js@1.2.6/library/modules/$'),
      DESCRIPTORS = $__require('npm:core-js@1.2.6/library/modules/$.descriptors'),
      SPECIES = $__require('npm:core-js@1.2.6/library/modules/$.wks')('species');
  module.exports = function(KEY) {
    var C = core[KEY];
    if (DESCRIPTORS && C && !C[SPECIES])
      $.setDesc(C, SPECIES, {
        configurable: true,
        get: function() {
          return this;
        }
      });
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.array.species", ["npm:core-js@1.2.6/library/modules/$.set-species"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  $__require('npm:core-js@1.2.6/library/modules/$.set-species')('Array');
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.iter-step", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(done, value) {
    return {
      value: value,
      done: !!done
    };
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.add-to-unscopables", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function() {};
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.array.iterator", ["npm:core-js@1.2.6/library/modules/$.add-to-unscopables", "npm:core-js@1.2.6/library/modules/$.iter-step", "npm:core-js@1.2.6/library/modules/$.iterators", "npm:core-js@1.2.6/library/modules/$.to-iobject", "npm:core-js@1.2.6/library/modules/$.iter-define"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var addToUnscopables = $__require('npm:core-js@1.2.6/library/modules/$.add-to-unscopables'),
      step = $__require('npm:core-js@1.2.6/library/modules/$.iter-step'),
      Iterators = $__require('npm:core-js@1.2.6/library/modules/$.iterators'),
      toIObject = $__require('npm:core-js@1.2.6/library/modules/$.to-iobject');
  module.exports = $__require('npm:core-js@1.2.6/library/modules/$.iter-define')(Array, 'Array', function(iterated, kind) {
    this._t = toIObject(iterated);
    this._i = 0;
    this._k = kind;
  }, function() {
    var O = this._t,
        kind = this._k,
        index = this._i++;
    if (!O || index >= O.length) {
      this._t = undefined;
      return step(1);
    }
    if (kind == 'keys')
      return step(0, index);
    if (kind == 'values')
      return step(0, O[index]);
    return step(0, [index, O[index]]);
  }, 'values');
  Iterators.Arguments = Iterators.Array;
  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.array.of", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.fails"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export');
  $export($export.S + $export.F * $__require('npm:core-js@1.2.6/library/modules/$.fails')(function() {
    function F() {}
    return !(Array.of.call(F) instanceof F);
  }), 'Array', {of: function of() {
      var index = 0,
          $$ = arguments,
          $$len = $$.length,
          result = new (typeof this == 'function' ? this : Array)($$len);
      while ($$len > index)
        result[index] = $$[index++];
      result.length = $$len;
      return result;
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.iter-detect", ["npm:core-js@1.2.6/library/modules/$.wks"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var ITERATOR = $__require('npm:core-js@1.2.6/library/modules/$.wks')('iterator'),
      SAFE_CLOSING = false;
  try {
    var riter = [7][ITERATOR]();
    riter['return'] = function() {
      SAFE_CLOSING = true;
    };
    Array.from(riter, function() {
      throw 2;
    });
  } catch (e) {}
  module.exports = function(exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING)
      return false;
    var safe = false;
    try {
      var arr = [7],
          iter = arr[ITERATOR]();
      iter.next = function() {
        safe = true;
      };
      arr[ITERATOR] = function() {
        return iter;
      };
      exec(arr);
    } catch (e) {}
    return safe;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.classof", ["npm:core-js@1.2.6/library/modules/$.cof", "npm:core-js@1.2.6/library/modules/$.wks"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var cof = $__require('npm:core-js@1.2.6/library/modules/$.cof'),
      TAG = $__require('npm:core-js@1.2.6/library/modules/$.wks')('toStringTag'),
      ARG = cof(function() {
        return arguments;
      }()) == 'Arguments';
  module.exports = function(it) {
    var O,
        T,
        B;
    return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof(T = (O = Object(it))[TAG]) == 'string' ? T : ARG ? cof(O) : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/core.get-iterator-method", ["npm:core-js@1.2.6/library/modules/$.classof", "npm:core-js@1.2.6/library/modules/$.wks", "npm:core-js@1.2.6/library/modules/$.iterators", "npm:core-js@1.2.6/library/modules/$.core"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var classof = $__require('npm:core-js@1.2.6/library/modules/$.classof'),
      ITERATOR = $__require('npm:core-js@1.2.6/library/modules/$.wks')('iterator'),
      Iterators = $__require('npm:core-js@1.2.6/library/modules/$.iterators');
  module.exports = $__require('npm:core-js@1.2.6/library/modules/$.core').getIteratorMethod = function(it) {
    if (it != undefined)
      return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.is-array-iter", ["npm:core-js@1.2.6/library/modules/$.iterators", "npm:core-js@1.2.6/library/modules/$.wks"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Iterators = $__require('npm:core-js@1.2.6/library/modules/$.iterators'),
      ITERATOR = $__require('npm:core-js@1.2.6/library/modules/$.wks')('iterator'),
      ArrayProto = Array.prototype;
  module.exports = function(it) {
    return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.iter-call", ["npm:core-js@1.2.6/library/modules/$.an-object"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var anObject = $__require('npm:core-js@1.2.6/library/modules/$.an-object');
  module.exports = function(iterator, fn, value, entries) {
    try {
      return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined)
        anObject(ret.call(iterator));
      throw e;
    }
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.array.from", ["npm:core-js@1.2.6/library/modules/$.ctx", "npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.to-object", "npm:core-js@1.2.6/library/modules/$.iter-call", "npm:core-js@1.2.6/library/modules/$.is-array-iter", "npm:core-js@1.2.6/library/modules/$.to-length", "npm:core-js@1.2.6/library/modules/core.get-iterator-method", "npm:core-js@1.2.6/library/modules/$.iter-detect"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var ctx = $__require('npm:core-js@1.2.6/library/modules/$.ctx'),
      $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      toObject = $__require('npm:core-js@1.2.6/library/modules/$.to-object'),
      call = $__require('npm:core-js@1.2.6/library/modules/$.iter-call'),
      isArrayIter = $__require('npm:core-js@1.2.6/library/modules/$.is-array-iter'),
      toLength = $__require('npm:core-js@1.2.6/library/modules/$.to-length'),
      getIterFn = $__require('npm:core-js@1.2.6/library/modules/core.get-iterator-method');
  $export($export.S + $export.F * !$__require('npm:core-js@1.2.6/library/modules/$.iter-detect')(function(iter) {
    Array.from(iter);
  }), 'Array', {from: function from(arrayLike) {
      var O = toObject(arrayLike),
          C = typeof this == 'function' ? this : Array,
          $$ = arguments,
          $$len = $$.length,
          mapfn = $$len > 1 ? $$[1] : undefined,
          mapping = mapfn !== undefined,
          index = 0,
          iterFn = getIterFn(O),
          length,
          result,
          step,
          iterator;
      if (mapping)
        mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
      if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
        for (iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++) {
          result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
        }
      } else {
        length = toLength(O.length);
        for (result = new C(length); length > index; index++) {
          result[index] = mapping ? mapfn(O[index], index) : O[index];
        }
      }
      result.length = index;
      return result;
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.string.starts-with", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.to-length", "npm:core-js@1.2.6/library/modules/$.string-context", "npm:core-js@1.2.6/library/modules/$.fails-is-regexp"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      toLength = $__require('npm:core-js@1.2.6/library/modules/$.to-length'),
      context = $__require('npm:core-js@1.2.6/library/modules/$.string-context'),
      STARTS_WITH = 'startsWith',
      $startsWith = ''[STARTS_WITH];
  $export($export.P + $export.F * $__require('npm:core-js@1.2.6/library/modules/$.fails-is-regexp')(STARTS_WITH), 'String', {startsWith: function startsWith(searchString) {
      var that = context(this, searchString, STARTS_WITH),
          $$ = arguments,
          index = toLength(Math.min($$.length > 1 ? $$[1] : undefined, that.length)),
          search = String(searchString);
      return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.string-repeat", ["npm:core-js@1.2.6/library/modules/$.to-integer", "npm:core-js@1.2.6/library/modules/$.defined"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toInteger = $__require('npm:core-js@1.2.6/library/modules/$.to-integer'),
      defined = $__require('npm:core-js@1.2.6/library/modules/$.defined');
  module.exports = function repeat(count) {
    var str = String(defined(this)),
        res = '',
        n = toInteger(count);
    if (n < 0 || n == Infinity)
      throw RangeError("Count can't be negative");
    for (; n > 0; (n >>>= 1) && (str += str))
      if (n & 1)
        res += str;
    return res;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.string.repeat", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.string-repeat"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export');
  $export($export.P, 'String', {repeat: $__require('npm:core-js@1.2.6/library/modules/$.string-repeat')});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.string.includes", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.string-context", "npm:core-js@1.2.6/library/modules/$.fails-is-regexp"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      context = $__require('npm:core-js@1.2.6/library/modules/$.string-context'),
      INCLUDES = 'includes';
  $export($export.P + $export.F * $__require('npm:core-js@1.2.6/library/modules/$.fails-is-regexp')(INCLUDES), 'String', {includes: function includes(searchString) {
      return !!~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.fails-is-regexp", ["npm:core-js@1.2.6/library/modules/$.wks"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var MATCH = $__require('npm:core-js@1.2.6/library/modules/$.wks')('match');
  module.exports = function(KEY) {
    var re = /./;
    try {
      '/./'[KEY](re);
    } catch (e) {
      try {
        re[MATCH] = false;
        return !'/./'[KEY](re);
      } catch (f) {}
    }
    return true;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.is-regexp", ["npm:core-js@1.2.6/library/modules/$.is-object", "npm:core-js@1.2.6/library/modules/$.cof", "npm:core-js@1.2.6/library/modules/$.wks"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isObject = $__require('npm:core-js@1.2.6/library/modules/$.is-object'),
      cof = $__require('npm:core-js@1.2.6/library/modules/$.cof'),
      MATCH = $__require('npm:core-js@1.2.6/library/modules/$.wks')('match');
  module.exports = function(it) {
    var isRegExp;
    return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.string-context", ["npm:core-js@1.2.6/library/modules/$.is-regexp", "npm:core-js@1.2.6/library/modules/$.defined"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isRegExp = $__require('npm:core-js@1.2.6/library/modules/$.is-regexp'),
      defined = $__require('npm:core-js@1.2.6/library/modules/$.defined');
  module.exports = function(that, searchString, NAME) {
    if (isRegExp(searchString))
      throw TypeError('String#' + NAME + " doesn't accept regex!");
    return String(defined(that));
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.string.ends-with", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.to-length", "npm:core-js@1.2.6/library/modules/$.string-context", "npm:core-js@1.2.6/library/modules/$.fails-is-regexp"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      toLength = $__require('npm:core-js@1.2.6/library/modules/$.to-length'),
      context = $__require('npm:core-js@1.2.6/library/modules/$.string-context'),
      ENDS_WITH = 'endsWith',
      $endsWith = ''[ENDS_WITH];
  $export($export.P + $export.F * $__require('npm:core-js@1.2.6/library/modules/$.fails-is-regexp')(ENDS_WITH), 'String', {endsWith: function endsWith(searchString) {
      var that = context(this, searchString, ENDS_WITH),
          $$ = arguments,
          endPosition = $$.length > 1 ? $$[1] : undefined,
          len = toLength(that.length),
          end = endPosition === undefined ? len : Math.min(toLength(endPosition), len),
          search = String(searchString);
      return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.string.code-point-at", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.string-at"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      $at = $__require('npm:core-js@1.2.6/library/modules/$.string-at')(false);
  $export($export.P, 'String', {codePointAt: function codePointAt(pos) {
      return $at(this, pos);
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.iter-create", ["npm:core-js@1.2.6/library/modules/$", "npm:core-js@1.2.6/library/modules/$.property-desc", "npm:core-js@1.2.6/library/modules/$.set-to-string-tag", "npm:core-js@1.2.6/library/modules/$.hide", "npm:core-js@1.2.6/library/modules/$.wks"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$'),
      descriptor = $__require('npm:core-js@1.2.6/library/modules/$.property-desc'),
      setToStringTag = $__require('npm:core-js@1.2.6/library/modules/$.set-to-string-tag'),
      IteratorPrototype = {};
  $__require('npm:core-js@1.2.6/library/modules/$.hide')(IteratorPrototype, $__require('npm:core-js@1.2.6/library/modules/$.wks')('iterator'), function() {
    return this;
  });
  module.exports = function(Constructor, NAME, next) {
    Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
    setToStringTag(Constructor, NAME + ' Iterator');
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.iterators", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {};
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.iter-define", ["npm:core-js@1.2.6/library/modules/$.library", "npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.redefine", "npm:core-js@1.2.6/library/modules/$.hide", "npm:core-js@1.2.6/library/modules/$.has", "npm:core-js@1.2.6/library/modules/$.iterators", "npm:core-js@1.2.6/library/modules/$.iter-create", "npm:core-js@1.2.6/library/modules/$.set-to-string-tag", "npm:core-js@1.2.6/library/modules/$", "npm:core-js@1.2.6/library/modules/$.wks"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var LIBRARY = $__require('npm:core-js@1.2.6/library/modules/$.library'),
      $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      redefine = $__require('npm:core-js@1.2.6/library/modules/$.redefine'),
      hide = $__require('npm:core-js@1.2.6/library/modules/$.hide'),
      has = $__require('npm:core-js@1.2.6/library/modules/$.has'),
      Iterators = $__require('npm:core-js@1.2.6/library/modules/$.iterators'),
      $iterCreate = $__require('npm:core-js@1.2.6/library/modules/$.iter-create'),
      setToStringTag = $__require('npm:core-js@1.2.6/library/modules/$.set-to-string-tag'),
      getProto = $__require('npm:core-js@1.2.6/library/modules/$').getProto,
      ITERATOR = $__require('npm:core-js@1.2.6/library/modules/$.wks')('iterator'),
      BUGGY = !([].keys && 'next' in [].keys()),
      FF_ITERATOR = '@@iterator',
      KEYS = 'keys',
      VALUES = 'values';
  var returnThis = function() {
    return this;
  };
  module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    $iterCreate(Constructor, NAME, next);
    var getMethod = function(kind) {
      if (!BUGGY && kind in proto)
        return proto[kind];
      switch (kind) {
        case KEYS:
          return function keys() {
            return new Constructor(this, kind);
          };
        case VALUES:
          return function values() {
            return new Constructor(this, kind);
          };
      }
      return function entries() {
        return new Constructor(this, kind);
      };
    };
    var TAG = NAME + ' Iterator',
        DEF_VALUES = DEFAULT == VALUES,
        VALUES_BUG = false,
        proto = Base.prototype,
        $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
        $default = $native || getMethod(DEFAULT),
        methods,
        key;
    if ($native) {
      var IteratorPrototype = getProto($default.call(new Base));
      setToStringTag(IteratorPrototype, TAG, true);
      if (!LIBRARY && has(proto, FF_ITERATOR))
        hide(IteratorPrototype, ITERATOR, returnThis);
      if (DEF_VALUES && $native.name !== VALUES) {
        VALUES_BUG = true;
        $default = function values() {
          return $native.call(this);
        };
      }
    }
    if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      hide(proto, ITERATOR, $default);
    }
    Iterators[NAME] = $default;
    Iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: !DEF_VALUES ? $default : getMethod('entries')
      };
      if (FORCED)
        for (key in methods) {
          if (!(key in proto))
            redefine(proto, key, methods[key]);
        }
      else
        $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.string-at", ["npm:core-js@1.2.6/library/modules/$.to-integer", "npm:core-js@1.2.6/library/modules/$.defined"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toInteger = $__require('npm:core-js@1.2.6/library/modules/$.to-integer'),
      defined = $__require('npm:core-js@1.2.6/library/modules/$.defined');
  module.exports = function(TO_STRING) {
    return function(that, pos) {
      var s = String(defined(that)),
          i = toInteger(pos),
          l = s.length,
          a,
          b;
      if (i < 0 || i >= l)
        return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.string.iterator", ["npm:core-js@1.2.6/library/modules/$.string-at", "npm:core-js@1.2.6/library/modules/$.iter-define"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $at = $__require('npm:core-js@1.2.6/library/modules/$.string-at')(true);
  $__require('npm:core-js@1.2.6/library/modules/$.iter-define')(String, 'String', function(iterated) {
    this._t = String(iterated);
    this._i = 0;
  }, function() {
    var O = this._t,
        index = this._i,
        point;
    if (index >= O.length)
      return {
        value: undefined,
        done: true
      };
    point = $at(O, index);
    this._i += point.length;
    return {
      value: point,
      done: false
    };
  });
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.string-trim", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.defined", "npm:core-js@1.2.6/library/modules/$.fails"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      defined = $__require('npm:core-js@1.2.6/library/modules/$.defined'),
      fails = $__require('npm:core-js@1.2.6/library/modules/$.fails'),
      spaces = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF',
      space = '[' + spaces + ']',
      non = '\u200b\u0085',
      ltrim = RegExp('^' + space + space + '*'),
      rtrim = RegExp(space + space + '*$');
  var exporter = function(KEY, exec) {
    var exp = {};
    exp[KEY] = exec(trim);
    $export($export.P + $export.F * fails(function() {
      return !!spaces[KEY]() || non[KEY]() != non;
    }), 'String', exp);
  };
  var trim = exporter.trim = function(string, TYPE) {
    string = String(defined(string));
    if (TYPE & 1)
      string = string.replace(ltrim, '');
    if (TYPE & 2)
      string = string.replace(rtrim, '');
    return string;
  };
  module.exports = exporter;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.string.trim", ["npm:core-js@1.2.6/library/modules/$.string-trim"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  $__require('npm:core-js@1.2.6/library/modules/$.string-trim')('trim', function($trim) {
    return function trim() {
      return $trim(this, 3);
    };
  });
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.string.raw", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.to-iobject", "npm:core-js@1.2.6/library/modules/$.to-length"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      toIObject = $__require('npm:core-js@1.2.6/library/modules/$.to-iobject'),
      toLength = $__require('npm:core-js@1.2.6/library/modules/$.to-length');
  $export($export.S, 'String', {raw: function raw(callSite) {
      var tpl = toIObject(callSite.raw),
          len = toLength(tpl.length),
          $$ = arguments,
          $$len = $$.length,
          res = [],
          i = 0;
      while (len > i) {
        res.push(String(tpl[i++]));
        if (i < $$len)
          res.push(String($$[i]));
      }
      return res.join('');
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.string.from-code-point", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.to-index"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      toIndex = $__require('npm:core-js@1.2.6/library/modules/$.to-index'),
      fromCharCode = String.fromCharCode,
      $fromCodePoint = String.fromCodePoint;
  $export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {fromCodePoint: function fromCodePoint(x) {
      var res = [],
          $$ = arguments,
          $$len = $$.length,
          i = 0,
          code;
      while ($$len > i) {
        code = +$$[i++];
        if (toIndex(code, 0x10ffff) !== code)
          throw RangeError(code + ' is not a valid code point');
        res.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00));
      }
      return res.join('');
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.math.trunc", ["npm:core-js@1.2.6/library/modules/$.export"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export');
  $export($export.S, 'Math', {trunc: function trunc(it) {
      return (it > 0 ? Math.floor : Math.ceil)(it);
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.math.tanh", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.math-expm1"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      expm1 = $__require('npm:core-js@1.2.6/library/modules/$.math-expm1'),
      exp = Math.exp;
  $export($export.S, 'Math', {tanh: function tanh(x) {
      var a = expm1(x = +x),
          b = expm1(-x);
      return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.math.sinh", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.math-expm1", "npm:core-js@1.2.6/library/modules/$.fails"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      expm1 = $__require('npm:core-js@1.2.6/library/modules/$.math-expm1'),
      exp = Math.exp;
  $export($export.S + $export.F * $__require('npm:core-js@1.2.6/library/modules/$.fails')(function() {
    return !Math.sinh(-2e-17) != -2e-17;
  }), 'Math', {sinh: function sinh(x) {
      return Math.abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.math.sign", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.math-sign"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export');
  $export($export.S, 'Math', {sign: $__require('npm:core-js@1.2.6/library/modules/$.math-sign')});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.math.log2", ["npm:core-js@1.2.6/library/modules/$.export"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export');
  $export($export.S, 'Math', {log2: function log2(x) {
      return Math.log(x) / Math.LN2;
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.math.log1p", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.math-log1p"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export');
  $export($export.S, 'Math', {log1p: $__require('npm:core-js@1.2.6/library/modules/$.math-log1p')});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.math.log10", ["npm:core-js@1.2.6/library/modules/$.export"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export');
  $export($export.S, 'Math', {log10: function log10(x) {
      return Math.log(x) / Math.LN10;
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.math.imul", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.fails"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      $imul = Math.imul;
  $export($export.S + $export.F * $__require('npm:core-js@1.2.6/library/modules/$.fails')(function() {
    return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
  }), 'Math', {imul: function imul(x, y) {
      var UINT16 = 0xffff,
          xn = +x,
          yn = +y,
          xl = UINT16 & xn,
          yl = UINT16 & yn;
      return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.math.hypot", ["npm:core-js@1.2.6/library/modules/$.export"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      abs = Math.abs;
  $export($export.S, 'Math', {hypot: function hypot(value1, value2) {
      var sum = 0,
          i = 0,
          $$ = arguments,
          $$len = $$.length,
          larg = 0,
          arg,
          div;
      while (i < $$len) {
        arg = abs($$[i++]);
        if (larg < arg) {
          div = larg / arg;
          sum = sum * div * div + 1;
          larg = arg;
        } else if (arg > 0) {
          div = arg / larg;
          sum += div * div;
        } else
          sum += arg;
      }
      return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.math.fround", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.math-sign"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      sign = $__require('npm:core-js@1.2.6/library/modules/$.math-sign'),
      pow = Math.pow,
      EPSILON = pow(2, -52),
      EPSILON32 = pow(2, -23),
      MAX32 = pow(2, 127) * (2 - EPSILON32),
      MIN32 = pow(2, -126);
  var roundTiesToEven = function(n) {
    return n + 1 / EPSILON - 1 / EPSILON;
  };
  $export($export.S, 'Math', {fround: function fround(x) {
      var $abs = Math.abs(x),
          $sign = sign(x),
          a,
          result;
      if ($abs < MIN32)
        return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
      a = (1 + EPSILON32 / EPSILON) * $abs;
      result = a - (a - $abs);
      if (result > MAX32 || result != result)
        return $sign * Infinity;
      return $sign * result;
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.math-expm1", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = Math.expm1 || function expm1(x) {
    return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.math.expm1", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.math-expm1"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export');
  $export($export.S, 'Math', {expm1: $__require('npm:core-js@1.2.6/library/modules/$.math-expm1')});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.math.cosh", ["npm:core-js@1.2.6/library/modules/$.export"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      exp = Math.exp;
  $export($export.S, 'Math', {cosh: function cosh(x) {
      return (exp(x = +x) + exp(-x)) / 2;
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.math.clz32", ["npm:core-js@1.2.6/library/modules/$.export"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export');
  $export($export.S, 'Math', {clz32: function clz32(x) {
      return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.math-sign", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = Math.sign || function sign(x) {
    return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.math.cbrt", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.math-sign"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      sign = $__require('npm:core-js@1.2.6/library/modules/$.math-sign');
  $export($export.S, 'Math', {cbrt: function cbrt(x) {
      return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.math.atanh", ["npm:core-js@1.2.6/library/modules/$.export"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export');
  $export($export.S, 'Math', {atanh: function atanh(x) {
      return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.math.asinh", ["npm:core-js@1.2.6/library/modules/$.export"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export');
  function asinh(x) {
    return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
  }
  $export($export.S, 'Math', {asinh: asinh});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.math-log1p", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = Math.log1p || function log1p(x) {
    return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.math.acosh", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.math-log1p"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      log1p = $__require('npm:core-js@1.2.6/library/modules/$.math-log1p'),
      sqrt = Math.sqrt,
      $acosh = Math.acosh;
  $export($export.S + $export.F * !($acosh && Math.floor($acosh(Number.MAX_VALUE)) == 710), 'Math', {acosh: function acosh(x) {
      return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? Math.log(x) + Math.LN2 : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.number.parse-int", ["npm:core-js@1.2.6/library/modules/$.export"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export');
  $export($export.S, 'Number', {parseInt: parseInt});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.number.parse-float", ["npm:core-js@1.2.6/library/modules/$.export"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export');
  $export($export.S, 'Number', {parseFloat: parseFloat});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.number.min-safe-integer", ["npm:core-js@1.2.6/library/modules/$.export"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export');
  $export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.number.max-safe-integer", ["npm:core-js@1.2.6/library/modules/$.export"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export');
  $export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.number.is-safe-integer", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.is-integer"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      isInteger = $__require('npm:core-js@1.2.6/library/modules/$.is-integer'),
      abs = Math.abs;
  $export($export.S, 'Number', {isSafeInteger: function isSafeInteger(number) {
      return isInteger(number) && abs(number) <= 0x1fffffffffffff;
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.number.is-nan", ["npm:core-js@1.2.6/library/modules/$.export"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export');
  $export($export.S, 'Number', {isNaN: function isNaN(number) {
      return number != number;
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.is-integer", ["npm:core-js@1.2.6/library/modules/$.is-object"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isObject = $__require('npm:core-js@1.2.6/library/modules/$.is-object'),
      floor = Math.floor;
  module.exports = function isInteger(it) {
    return !isObject(it) && isFinite(it) && floor(it) === it;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.number.is-integer", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.is-integer"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export');
  $export($export.S, 'Number', {isInteger: $__require('npm:core-js@1.2.6/library/modules/$.is-integer')});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.number.is-finite", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.global"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      _isFinite = $__require('npm:core-js@1.2.6/library/modules/$.global').isFinite;
  $export($export.S, 'Number', {isFinite: function isFinite(it) {
      return typeof it == 'number' && _isFinite(it);
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.number.epsilon", ["npm:core-js@1.2.6/library/modules/$.export"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export');
  $export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.number.constructor", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.function.has-instance", ["npm:core-js@1.2.6/library/modules/$", "npm:core-js@1.2.6/library/modules/$.is-object", "npm:core-js@1.2.6/library/modules/$.wks"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$'),
      isObject = $__require('npm:core-js@1.2.6/library/modules/$.is-object'),
      HAS_INSTANCE = $__require('npm:core-js@1.2.6/library/modules/$.wks')('hasInstance'),
      FunctionProto = Function.prototype;
  if (!(HAS_INSTANCE in FunctionProto))
    $.setDesc(FunctionProto, HAS_INSTANCE, {value: function(O) {
        if (typeof this != 'function' || !isObject(O))
          return false;
        if (!isObject(this.prototype))
          return O instanceof this;
        while (O = $.getProto(O))
          if (this.prototype === O)
            return true;
        return false;
      }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.function.name", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.object.get-own-property-names", ["npm:core-js@1.2.6/library/modules/$.object-sap", "npm:core-js@1.2.6/library/modules/$.get-names"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  $__require('npm:core-js@1.2.6/library/modules/$.object-sap')('getOwnPropertyNames', function() {
    return $__require('npm:core-js@1.2.6/library/modules/$.get-names').get;
  });
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.object.keys", ["npm:core-js@1.2.6/library/modules/$.to-object", "npm:core-js@1.2.6/library/modules/$.object-sap"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toObject = $__require('npm:core-js@1.2.6/library/modules/$.to-object');
  $__require('npm:core-js@1.2.6/library/modules/$.object-sap')('keys', function($keys) {
    return function keys(it) {
      return $keys(toObject(it));
    };
  });
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.object.get-prototype-of", ["npm:core-js@1.2.6/library/modules/$.to-object", "npm:core-js@1.2.6/library/modules/$.object-sap"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toObject = $__require('npm:core-js@1.2.6/library/modules/$.to-object');
  $__require('npm:core-js@1.2.6/library/modules/$.object-sap')('getPrototypeOf', function($getPrototypeOf) {
    return function getPrototypeOf(it) {
      return $getPrototypeOf(toObject(it));
    };
  });
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.object.get-own-property-descriptor", ["npm:core-js@1.2.6/library/modules/$.to-iobject", "npm:core-js@1.2.6/library/modules/$.object-sap"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toIObject = $__require('npm:core-js@1.2.6/library/modules/$.to-iobject');
  $__require('npm:core-js@1.2.6/library/modules/$.object-sap')('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor) {
    return function getOwnPropertyDescriptor(it, key) {
      return $getOwnPropertyDescriptor(toIObject(it), key);
    };
  });
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.object.is-extensible", ["npm:core-js@1.2.6/library/modules/$.is-object", "npm:core-js@1.2.6/library/modules/$.object-sap"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isObject = $__require('npm:core-js@1.2.6/library/modules/$.is-object');
  $__require('npm:core-js@1.2.6/library/modules/$.object-sap')('isExtensible', function($isExtensible) {
    return function isExtensible(it) {
      return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
    };
  });
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.object.is-sealed", ["npm:core-js@1.2.6/library/modules/$.is-object", "npm:core-js@1.2.6/library/modules/$.object-sap"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isObject = $__require('npm:core-js@1.2.6/library/modules/$.is-object');
  $__require('npm:core-js@1.2.6/library/modules/$.object-sap')('isSealed', function($isSealed) {
    return function isSealed(it) {
      return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
    };
  });
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.object.is-frozen", ["npm:core-js@1.2.6/library/modules/$.is-object", "npm:core-js@1.2.6/library/modules/$.object-sap"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isObject = $__require('npm:core-js@1.2.6/library/modules/$.is-object');
  $__require('npm:core-js@1.2.6/library/modules/$.object-sap')('isFrozen', function($isFrozen) {
    return function isFrozen(it) {
      return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
    };
  });
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.object.prevent-extensions", ["npm:core-js@1.2.6/library/modules/$.is-object", "npm:core-js@1.2.6/library/modules/$.object-sap"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isObject = $__require('npm:core-js@1.2.6/library/modules/$.is-object');
  $__require('npm:core-js@1.2.6/library/modules/$.object-sap')('preventExtensions', function($preventExtensions) {
    return function preventExtensions(it) {
      return $preventExtensions && isObject(it) ? $preventExtensions(it) : it;
    };
  });
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.object.seal", ["npm:core-js@1.2.6/library/modules/$.is-object", "npm:core-js@1.2.6/library/modules/$.object-sap"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isObject = $__require('npm:core-js@1.2.6/library/modules/$.is-object');
  $__require('npm:core-js@1.2.6/library/modules/$.object-sap')('seal', function($seal) {
    return function seal(it) {
      return $seal && isObject(it) ? $seal(it) : it;
    };
  });
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.object-sap", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.core", "npm:core-js@1.2.6/library/modules/$.fails"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      core = $__require('npm:core-js@1.2.6/library/modules/$.core'),
      fails = $__require('npm:core-js@1.2.6/library/modules/$.fails');
  module.exports = function(KEY, exec) {
    var fn = (core.Object || {})[KEY] || Object[KEY],
        exp = {};
    exp[KEY] = exec(fn);
    $export($export.S + $export.F * fails(function() {
      fn(1);
    }), 'Object', exp);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.object.freeze", ["npm:core-js@1.2.6/library/modules/$.is-object", "npm:core-js@1.2.6/library/modules/$.object-sap"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isObject = $__require('npm:core-js@1.2.6/library/modules/$.is-object');
  $__require('npm:core-js@1.2.6/library/modules/$.object-sap')('freeze', function($freeze) {
    return function freeze(it) {
      return $freeze && isObject(it) ? $freeze(it) : it;
    };
  });
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.object.to-string", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.set-proto", ["npm:core-js@1.2.6/library/modules/$", "npm:core-js@1.2.6/library/modules/$.is-object", "npm:core-js@1.2.6/library/modules/$.an-object", "npm:core-js@1.2.6/library/modules/$.ctx"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var getDesc = $__require('npm:core-js@1.2.6/library/modules/$').getDesc,
      isObject = $__require('npm:core-js@1.2.6/library/modules/$.is-object'),
      anObject = $__require('npm:core-js@1.2.6/library/modules/$.an-object');
  var check = function(O, proto) {
    anObject(O);
    if (!isObject(proto) && proto !== null)
      throw TypeError(proto + ": can't set as prototype!");
  };
  module.exports = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? function(test, buggy, set) {
      try {
        set = $__require('npm:core-js@1.2.6/library/modules/$.ctx')(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) {
        buggy = true;
      }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy)
          O.__proto__ = proto;
        else
          set(O, proto);
        return O;
      };
    }({}, false) : undefined),
    check: check
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.object.set-prototype-of", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.set-proto"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export');
  $export($export.S, 'Object', {setPrototypeOf: $__require('npm:core-js@1.2.6/library/modules/$.set-proto').set});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.same-value", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = Object.is || function is(x, y) {
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.object.is", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.same-value"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export');
  $export($export.S, 'Object', {is: $__require('npm:core-js@1.2.6/library/modules/$.same-value')});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.object-assign", ["npm:core-js@1.2.6/library/modules/$", "npm:core-js@1.2.6/library/modules/$.to-object", "npm:core-js@1.2.6/library/modules/$.iobject", "npm:core-js@1.2.6/library/modules/$.fails"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$'),
      toObject = $__require('npm:core-js@1.2.6/library/modules/$.to-object'),
      IObject = $__require('npm:core-js@1.2.6/library/modules/$.iobject');
  module.exports = $__require('npm:core-js@1.2.6/library/modules/$.fails')(function() {
    var a = Object.assign,
        A = {},
        B = {},
        S = Symbol(),
        K = 'abcdefghijklmnopqrst';
    A[S] = 7;
    K.split('').forEach(function(k) {
      B[k] = k;
    });
    return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
  }) ? function assign(target, source) {
    var T = toObject(target),
        $$ = arguments,
        $$len = $$.length,
        index = 1,
        getKeys = $.getKeys,
        getSymbols = $.getSymbols,
        isEnum = $.isEnum;
    while ($$len > index) {
      var S = IObject($$[index++]),
          keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S),
          length = keys.length,
          j = 0,
          key;
      while (length > j)
        if (isEnum.call(S, key = keys[j++]))
          T[key] = S[key];
    }
    return T;
  } : Object.assign;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.object.assign", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.object-assign"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export');
  $export($export.S + $export.F, 'Object', {assign: $__require('npm:core-js@1.2.6/library/modules/$.object-assign')});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.library", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = true;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.enum-keys", ["npm:core-js@1.2.6/library/modules/$"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$');
  module.exports = function(it) {
    var keys = $.getKeys(it),
        getSymbols = $.getSymbols;
    if (getSymbols) {
      var symbols = getSymbols(it),
          isEnum = $.isEnum,
          i = 0,
          key;
      while (symbols.length > i)
        if (isEnum.call(it, key = symbols[i++]))
          keys.push(key);
    }
    return keys;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.get-names", ["npm:core-js@1.2.6/library/modules/$.to-iobject", "npm:core-js@1.2.6/library/modules/$"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toIObject = $__require('npm:core-js@1.2.6/library/modules/$.to-iobject'),
      getNames = $__require('npm:core-js@1.2.6/library/modules/$').getNames,
      toString = {}.toString;
  var windowNames = typeof window == 'object' && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
  var getWindowNames = function(it) {
    try {
      return getNames(it);
    } catch (e) {
      return windowNames.slice();
    }
  };
  module.exports.get = function getOwnPropertyNames(it) {
    if (windowNames && toString.call(it) == '[object Window]')
      return getWindowNames(it);
    return getNames(toIObject(it));
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.keyof", ["npm:core-js@1.2.6/library/modules/$", "npm:core-js@1.2.6/library/modules/$.to-iobject"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$'),
      toIObject = $__require('npm:core-js@1.2.6/library/modules/$.to-iobject');
  module.exports = function(object, el) {
    var O = toIObject(object),
        keys = $.getKeys(O),
        length = keys.length,
        index = 0,
        key;
    while (length > index)
      if (O[key = keys[index++]] === el)
        return key;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.set-to-string-tag", ["npm:core-js@1.2.6/library/modules/$", "npm:core-js@1.2.6/library/modules/$.has", "npm:core-js@1.2.6/library/modules/$.wks"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var def = $__require('npm:core-js@1.2.6/library/modules/$').setDesc,
      has = $__require('npm:core-js@1.2.6/library/modules/$.has'),
      TAG = $__require('npm:core-js@1.2.6/library/modules/$.wks')('toStringTag');
  module.exports = function(it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG))
      def(it, TAG, {
        configurable: true,
        value: tag
      });
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.hide", ["npm:core-js@1.2.6/library/modules/$", "npm:core-js@1.2.6/library/modules/$.property-desc", "npm:core-js@1.2.6/library/modules/$.descriptors"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$'),
      createDesc = $__require('npm:core-js@1.2.6/library/modules/$.property-desc');
  module.exports = $__require('npm:core-js@1.2.6/library/modules/$.descriptors') ? function(object, key, value) {
    return $.setDesc(object, key, createDesc(1, value));
  } : function(object, key, value) {
    object[key] = value;
    return object;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.redefine", ["npm:core-js@1.2.6/library/modules/$.hide"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('npm:core-js@1.2.6/library/modules/$.hide');
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.symbol", ["npm:core-js@1.2.6/library/modules/$", "npm:core-js@1.2.6/library/modules/$.global", "npm:core-js@1.2.6/library/modules/$.has", "npm:core-js@1.2.6/library/modules/$.descriptors", "npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.redefine", "npm:core-js@1.2.6/library/modules/$.fails", "npm:core-js@1.2.6/library/modules/$.shared", "npm:core-js@1.2.6/library/modules/$.set-to-string-tag", "npm:core-js@1.2.6/library/modules/$.uid", "npm:core-js@1.2.6/library/modules/$.wks", "npm:core-js@1.2.6/library/modules/$.keyof", "npm:core-js@1.2.6/library/modules/$.get-names", "npm:core-js@1.2.6/library/modules/$.enum-keys", "npm:core-js@1.2.6/library/modules/$.is-array", "npm:core-js@1.2.6/library/modules/$.an-object", "npm:core-js@1.2.6/library/modules/$.to-iobject", "npm:core-js@1.2.6/library/modules/$.property-desc", "npm:core-js@1.2.6/library/modules/$.library"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$'),
      global = $__require('npm:core-js@1.2.6/library/modules/$.global'),
      has = $__require('npm:core-js@1.2.6/library/modules/$.has'),
      DESCRIPTORS = $__require('npm:core-js@1.2.6/library/modules/$.descriptors'),
      $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      redefine = $__require('npm:core-js@1.2.6/library/modules/$.redefine'),
      $fails = $__require('npm:core-js@1.2.6/library/modules/$.fails'),
      shared = $__require('npm:core-js@1.2.6/library/modules/$.shared'),
      setToStringTag = $__require('npm:core-js@1.2.6/library/modules/$.set-to-string-tag'),
      uid = $__require('npm:core-js@1.2.6/library/modules/$.uid'),
      wks = $__require('npm:core-js@1.2.6/library/modules/$.wks'),
      keyOf = $__require('npm:core-js@1.2.6/library/modules/$.keyof'),
      $names = $__require('npm:core-js@1.2.6/library/modules/$.get-names'),
      enumKeys = $__require('npm:core-js@1.2.6/library/modules/$.enum-keys'),
      isArray = $__require('npm:core-js@1.2.6/library/modules/$.is-array'),
      anObject = $__require('npm:core-js@1.2.6/library/modules/$.an-object'),
      toIObject = $__require('npm:core-js@1.2.6/library/modules/$.to-iobject'),
      createDesc = $__require('npm:core-js@1.2.6/library/modules/$.property-desc'),
      getDesc = $.getDesc,
      setDesc = $.setDesc,
      _create = $.create,
      getNames = $names.get,
      $Symbol = global.Symbol,
      $JSON = global.JSON,
      _stringify = $JSON && $JSON.stringify,
      setter = false,
      HIDDEN = wks('_hidden'),
      isEnum = $.isEnum,
      SymbolRegistry = shared('symbol-registry'),
      AllSymbols = shared('symbols'),
      useNative = typeof $Symbol == 'function',
      ObjectProto = Object.prototype;
  var setSymbolDesc = DESCRIPTORS && $fails(function() {
    return _create(setDesc({}, 'a', {get: function() {
        return setDesc(this, 'a', {value: 7}).a;
      }})).a != 7;
  }) ? function(it, key, D) {
    var protoDesc = getDesc(ObjectProto, key);
    if (protoDesc)
      delete ObjectProto[key];
    setDesc(it, key, D);
    if (protoDesc && it !== ObjectProto)
      setDesc(ObjectProto, key, protoDesc);
  } : setDesc;
  var wrap = function(tag) {
    var sym = AllSymbols[tag] = _create($Symbol.prototype);
    sym._k = tag;
    DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
      configurable: true,
      set: function(value) {
        if (has(this, HIDDEN) && has(this[HIDDEN], tag))
          this[HIDDEN][tag] = false;
        setSymbolDesc(this, tag, createDesc(1, value));
      }
    });
    return sym;
  };
  var isSymbol = function(it) {
    return typeof it == 'symbol';
  };
  var $defineProperty = function defineProperty(it, key, D) {
    if (D && has(AllSymbols, key)) {
      if (!D.enumerable) {
        if (!has(it, HIDDEN))
          setDesc(it, HIDDEN, createDesc(1, {}));
        it[HIDDEN][key] = true;
      } else {
        if (has(it, HIDDEN) && it[HIDDEN][key])
          it[HIDDEN][key] = false;
        D = _create(D, {enumerable: createDesc(0, false)});
      }
      return setSymbolDesc(it, key, D);
    }
    return setDesc(it, key, D);
  };
  var $defineProperties = function defineProperties(it, P) {
    anObject(it);
    var keys = enumKeys(P = toIObject(P)),
        i = 0,
        l = keys.length,
        key;
    while (l > i)
      $defineProperty(it, key = keys[i++], P[key]);
    return it;
  };
  var $create = function create(it, P) {
    return P === undefined ? _create(it) : $defineProperties(_create(it), P);
  };
  var $propertyIsEnumerable = function propertyIsEnumerable(key) {
    var E = isEnum.call(this, key);
    return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
  };
  var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
    var D = getDesc(it = toIObject(it), key);
    if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))
      D.enumerable = true;
    return D;
  };
  var $getOwnPropertyNames = function getOwnPropertyNames(it) {
    var names = getNames(toIObject(it)),
        result = [],
        i = 0,
        key;
    while (names.length > i)
      if (!has(AllSymbols, key = names[i++]) && key != HIDDEN)
        result.push(key);
    return result;
  };
  var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
    var names = getNames(toIObject(it)),
        result = [],
        i = 0,
        key;
    while (names.length > i)
      if (has(AllSymbols, key = names[i++]))
        result.push(AllSymbols[key]);
    return result;
  };
  var $stringify = function stringify(it) {
    if (it === undefined || isSymbol(it))
      return;
    var args = [it],
        i = 1,
        $$ = arguments,
        replacer,
        $replacer;
    while ($$.length > i)
      args.push($$[i++]);
    replacer = args[1];
    if (typeof replacer == 'function')
      $replacer = replacer;
    if ($replacer || !isArray(replacer))
      replacer = function(key, value) {
        if ($replacer)
          value = $replacer.call(this, key, value);
        if (!isSymbol(value))
          return value;
      };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  };
  var buggyJSON = $fails(function() {
    var S = $Symbol();
    return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
  });
  if (!useNative) {
    $Symbol = function Symbol() {
      if (isSymbol(this))
        throw TypeError('Symbol is not a constructor');
      return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
    };
    redefine($Symbol.prototype, 'toString', function toString() {
      return this._k;
    });
    isSymbol = function(it) {
      return it instanceof $Symbol;
    };
    $.create = $create;
    $.isEnum = $propertyIsEnumerable;
    $.getDesc = $getOwnPropertyDescriptor;
    $.setDesc = $defineProperty;
    $.setDescs = $defineProperties;
    $.getNames = $names.get = $getOwnPropertyNames;
    $.getSymbols = $getOwnPropertySymbols;
    if (DESCRIPTORS && !$__require('npm:core-js@1.2.6/library/modules/$.library')) {
      redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
    }
  }
  var symbolStatics = {
    'for': function(key) {
      return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
    },
    keyFor: function keyFor(key) {
      return keyOf(SymbolRegistry, key);
    },
    useSetter: function() {
      setter = true;
    },
    useSimple: function() {
      setter = false;
    }
  };
  $.each.call(('hasInstance,isConcatSpreadable,iterator,match,replace,search,' + 'species,split,toPrimitive,toStringTag,unscopables').split(','), function(it) {
    var sym = wks(it);
    symbolStatics[it] = useNative ? sym : wrap(sym);
  });
  setter = true;
  $export($export.G + $export.W, {Symbol: $Symbol});
  $export($export.S, 'Symbol', symbolStatics);
  $export($export.S + $export.F * !useNative, 'Object', {
    create: $create,
    defineProperty: $defineProperty,
    defineProperties: $defineProperties,
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
    getOwnPropertyNames: $getOwnPropertyNames,
    getOwnPropertySymbols: $getOwnPropertySymbols
  });
  $JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});
  setToStringTag($Symbol, 'Symbol');
  setToStringTag(Math, 'Math', true);
  setToStringTag(global.JSON, 'JSON', true);
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.array-includes", ["npm:core-js@1.2.6/library/modules/$.to-iobject", "npm:core-js@1.2.6/library/modules/$.to-length", "npm:core-js@1.2.6/library/modules/$.to-index"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toIObject = $__require('npm:core-js@1.2.6/library/modules/$.to-iobject'),
      toLength = $__require('npm:core-js@1.2.6/library/modules/$.to-length'),
      toIndex = $__require('npm:core-js@1.2.6/library/modules/$.to-index');
  module.exports = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
      var O = toIObject($this),
          length = toLength(O.length),
          index = toIndex(fromIndex, length),
          value;
      if (IS_INCLUDES && el != el)
        while (length > index) {
          value = O[index++];
          if (value != value)
            return true;
        }
      else
        for (; length > index; index++)
          if (IS_INCLUDES || index in O) {
            if (O[index] === el)
              return IS_INCLUDES || index;
          }
      return !IS_INCLUDES && -1;
    };
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.shared", ["npm:core-js@1.2.6/library/modules/$.global"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var global = $__require('npm:core-js@1.2.6/library/modules/$.global'),
      SHARED = '__core-js_shared__',
      store = global[SHARED] || (global[SHARED] = {});
  module.exports = function(key) {
    return store[key] || (store[key] = {});
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.wks", ["npm:core-js@1.2.6/library/modules/$.shared", "npm:core-js@1.2.6/library/modules/$.uid", "npm:core-js@1.2.6/library/modules/$.global"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var store = $__require('npm:core-js@1.2.6/library/modules/$.shared')('wks'),
      uid = $__require('npm:core-js@1.2.6/library/modules/$.uid'),
      Symbol = $__require('npm:core-js@1.2.6/library/modules/$.global').Symbol;
  module.exports = function(name) {
    return store[name] || (store[name] = Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.is-array", ["npm:core-js@1.2.6/library/modules/$.cof"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var cof = $__require('npm:core-js@1.2.6/library/modules/$.cof');
  module.exports = Array.isArray || function(arg) {
    return cof(arg) == 'Array';
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.array-species-create", ["npm:core-js@1.2.6/library/modules/$.is-object", "npm:core-js@1.2.6/library/modules/$.is-array", "npm:core-js@1.2.6/library/modules/$.wks"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isObject = $__require('npm:core-js@1.2.6/library/modules/$.is-object'),
      isArray = $__require('npm:core-js@1.2.6/library/modules/$.is-array'),
      SPECIES = $__require('npm:core-js@1.2.6/library/modules/$.wks')('species');
  module.exports = function(original, length) {
    var C;
    if (isArray(original)) {
      C = original.constructor;
      if (typeof C == 'function' && (C === Array || isArray(C.prototype)))
        C = undefined;
      if (isObject(C)) {
        C = C[SPECIES];
        if (C === null)
          C = undefined;
      }
    }
    return new (C === undefined ? Array : C)(length);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.array-methods", ["npm:core-js@1.2.6/library/modules/$.ctx", "npm:core-js@1.2.6/library/modules/$.iobject", "npm:core-js@1.2.6/library/modules/$.to-object", "npm:core-js@1.2.6/library/modules/$.to-length", "npm:core-js@1.2.6/library/modules/$.array-species-create"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var ctx = $__require('npm:core-js@1.2.6/library/modules/$.ctx'),
      IObject = $__require('npm:core-js@1.2.6/library/modules/$.iobject'),
      toObject = $__require('npm:core-js@1.2.6/library/modules/$.to-object'),
      toLength = $__require('npm:core-js@1.2.6/library/modules/$.to-length'),
      asc = $__require('npm:core-js@1.2.6/library/modules/$.array-species-create');
  module.exports = function(TYPE) {
    var IS_MAP = TYPE == 1,
        IS_FILTER = TYPE == 2,
        IS_SOME = TYPE == 3,
        IS_EVERY = TYPE == 4,
        IS_FIND_INDEX = TYPE == 6,
        NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    return function($this, callbackfn, that) {
      var O = toObject($this),
          self = IObject(O),
          f = ctx(callbackfn, that, 3),
          length = toLength(self.length),
          index = 0,
          result = IS_MAP ? asc($this, length) : IS_FILTER ? asc($this, 0) : undefined,
          val,
          res;
      for (; length > index; index++)
        if (NO_HOLES || index in self) {
          val = self[index];
          res = f(val, index, O);
          if (TYPE) {
            if (IS_MAP)
              result[index] = res;
            else if (res)
              switch (TYPE) {
                case 3:
                  return true;
                case 5:
                  return val;
                case 6:
                  return index;
                case 2:
                  result.push(val);
              }
            else if (IS_EVERY)
              return false;
          }
        }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
    };
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.uid", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var id = 0,
      px = Math.random();
  module.exports = function(key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.to-length", ["npm:core-js@1.2.6/library/modules/$.to-integer"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toInteger = $__require('npm:core-js@1.2.6/library/modules/$.to-integer'),
      min = Math.min;
  module.exports = function(it) {
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.to-index", ["npm:core-js@1.2.6/library/modules/$.to-integer"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toInteger = $__require('npm:core-js@1.2.6/library/modules/$.to-integer'),
      max = Math.max,
      min = Math.min;
  module.exports = function(index, length) {
    index = toInteger(index);
    return index < 0 ? max(index + length, 0) : min(index, length);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.to-integer", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var ceil = Math.ceil,
      floor = Math.floor;
  module.exports = function(it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.iobject", ["npm:core-js@1.2.6/library/modules/$.cof"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var cof = $__require('npm:core-js@1.2.6/library/modules/$.cof');
  module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.to-iobject", ["npm:core-js@1.2.6/library/modules/$.iobject", "npm:core-js@1.2.6/library/modules/$.defined"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var IObject = $__require('npm:core-js@1.2.6/library/modules/$.iobject'),
      defined = $__require('npm:core-js@1.2.6/library/modules/$.defined');
  module.exports = function(it) {
    return IObject(defined(it));
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.defined", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(it) {
    if (it == undefined)
      throw TypeError("Can't call method on  " + it);
    return it;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.to-object", ["npm:core-js@1.2.6/library/modules/$.defined"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var defined = $__require('npm:core-js@1.2.6/library/modules/$.defined');
  module.exports = function(it) {
    return Object(defined(it));
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.an-object", ["npm:core-js@1.2.6/library/modules/$.is-object"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isObject = $__require('npm:core-js@1.2.6/library/modules/$.is-object');
  module.exports = function(it) {
    if (!isObject(it))
      throw TypeError(it + ' is not an object!');
    return it;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.invoke", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(fn, args, that) {
    var un = that === undefined;
    switch (args.length) {
      case 0:
        return un ? fn() : fn.call(that);
      case 1:
        return un ? fn(args[0]) : fn.call(that, args[0]);
      case 2:
        return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
      case 3:
        return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
      case 4:
        return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
    }
    return fn.apply(that, args);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.cof", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toString = {}.toString;
  module.exports = function(it) {
    return toString.call(it).slice(8, -1);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.has", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var hasOwnProperty = {}.hasOwnProperty;
  module.exports = function(it, key) {
    return hasOwnProperty.call(it, key);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.is-object", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.dom-create", ["npm:core-js@1.2.6/library/modules/$.is-object", "npm:core-js@1.2.6/library/modules/$.global"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isObject = $__require('npm:core-js@1.2.6/library/modules/$.is-object'),
      document = $__require('npm:core-js@1.2.6/library/modules/$.global').document,
      is = isObject(document) && isObject(document.createElement);
  module.exports = function(it) {
    return is ? document.createElement(it) : {};
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.html", ["npm:core-js@1.2.6/library/modules/$.global"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('npm:core-js@1.2.6/library/modules/$.global').document && document.documentElement;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.property-desc", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.fails", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.descriptors", ["npm:core-js@1.2.6/library/modules/$.fails"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = !$__require('npm:core-js@1.2.6/library/modules/$.fails')(function() {
    return Object.defineProperty({}, 'a', {get: function() {
        return 7;
      }}).a != 7;
  });
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.a-function", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(it) {
    if (typeof it != 'function')
      throw TypeError(it + ' is not a function!');
    return it;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.ctx", ["npm:core-js@1.2.6/library/modules/$.a-function"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var aFunction = $__require('npm:core-js@1.2.6/library/modules/$.a-function');
  module.exports = function(fn, that, length) {
    aFunction(fn);
    if (that === undefined)
      return fn;
    switch (length) {
      case 1:
        return function(a) {
          return fn.call(that, a);
        };
      case 2:
        return function(a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function(a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function() {
      return fn.apply(that, arguments);
    };
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.core", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var core = module.exports = {version: '1.2.6'};
  if (typeof __e == 'number')
    __e = core;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.global", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number')
    __g = global;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.export", ["npm:core-js@1.2.6/library/modules/$.global", "npm:core-js@1.2.6/library/modules/$.core", "npm:core-js@1.2.6/library/modules/$.ctx"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var global = $__require('npm:core-js@1.2.6/library/modules/$.global'),
      core = $__require('npm:core-js@1.2.6/library/modules/$.core'),
      ctx = $__require('npm:core-js@1.2.6/library/modules/$.ctx'),
      PROTOTYPE = 'prototype';
  var $export = function(type, name, source) {
    var IS_FORCED = type & $export.F,
        IS_GLOBAL = type & $export.G,
        IS_STATIC = type & $export.S,
        IS_PROTO = type & $export.P,
        IS_BIND = type & $export.B,
        IS_WRAP = type & $export.W,
        exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
        target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
        key,
        own,
        out;
    if (IS_GLOBAL)
      source = name;
    for (key in source) {
      own = !IS_FORCED && target && key in target;
      if (own && key in exports)
        continue;
      out = own ? target[key] : source[key];
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? (function(C) {
        var F = function(param) {
          return this instanceof C ? new C(param) : C(param);
        };
        F[PROTOTYPE] = C[PROTOTYPE];
        return F;
      })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      if (IS_PROTO)
        (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
    }
  };
  $export.F = 1;
  $export.G = 2;
  $export.S = 4;
  $export.P = 8;
  $export.B = 16;
  $export.W = 32;
  module.exports = $export;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $Object = Object;
  module.exports = {
    create: $Object.create,
    getProto: $Object.getPrototypeOf,
    isEnum: {}.propertyIsEnumerable,
    getDesc: $Object.getOwnPropertyDescriptor,
    setDesc: $Object.defineProperty,
    setDescs: $Object.defineProperties,
    getKeys: $Object.keys,
    getNames: $Object.getOwnPropertyNames,
    getSymbols: $Object.getOwnPropertySymbols,
    each: [].forEach
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es5", ["npm:core-js@1.2.6/library/modules/$", "npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.descriptors", "npm:core-js@1.2.6/library/modules/$.property-desc", "npm:core-js@1.2.6/library/modules/$.html", "npm:core-js@1.2.6/library/modules/$.dom-create", "npm:core-js@1.2.6/library/modules/$.has", "npm:core-js@1.2.6/library/modules/$.cof", "npm:core-js@1.2.6/library/modules/$.invoke", "npm:core-js@1.2.6/library/modules/$.fails", "npm:core-js@1.2.6/library/modules/$.an-object", "npm:core-js@1.2.6/library/modules/$.a-function", "npm:core-js@1.2.6/library/modules/$.is-object", "npm:core-js@1.2.6/library/modules/$.to-object", "npm:core-js@1.2.6/library/modules/$.to-iobject", "npm:core-js@1.2.6/library/modules/$.to-integer", "npm:core-js@1.2.6/library/modules/$.to-index", "npm:core-js@1.2.6/library/modules/$.to-length", "npm:core-js@1.2.6/library/modules/$.iobject", "npm:core-js@1.2.6/library/modules/$.uid", "npm:core-js@1.2.6/library/modules/$.array-methods", "npm:core-js@1.2.6/library/modules/$.array-includes", "npm:core-js@1.2.6/library/modules/$.is-array"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$'),
      $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      DESCRIPTORS = $__require('npm:core-js@1.2.6/library/modules/$.descriptors'),
      createDesc = $__require('npm:core-js@1.2.6/library/modules/$.property-desc'),
      html = $__require('npm:core-js@1.2.6/library/modules/$.html'),
      cel = $__require('npm:core-js@1.2.6/library/modules/$.dom-create'),
      has = $__require('npm:core-js@1.2.6/library/modules/$.has'),
      cof = $__require('npm:core-js@1.2.6/library/modules/$.cof'),
      invoke = $__require('npm:core-js@1.2.6/library/modules/$.invoke'),
      fails = $__require('npm:core-js@1.2.6/library/modules/$.fails'),
      anObject = $__require('npm:core-js@1.2.6/library/modules/$.an-object'),
      aFunction = $__require('npm:core-js@1.2.6/library/modules/$.a-function'),
      isObject = $__require('npm:core-js@1.2.6/library/modules/$.is-object'),
      toObject = $__require('npm:core-js@1.2.6/library/modules/$.to-object'),
      toIObject = $__require('npm:core-js@1.2.6/library/modules/$.to-iobject'),
      toInteger = $__require('npm:core-js@1.2.6/library/modules/$.to-integer'),
      toIndex = $__require('npm:core-js@1.2.6/library/modules/$.to-index'),
      toLength = $__require('npm:core-js@1.2.6/library/modules/$.to-length'),
      IObject = $__require('npm:core-js@1.2.6/library/modules/$.iobject'),
      IE_PROTO = $__require('npm:core-js@1.2.6/library/modules/$.uid')('__proto__'),
      createArrayMethod = $__require('npm:core-js@1.2.6/library/modules/$.array-methods'),
      arrayIndexOf = $__require('npm:core-js@1.2.6/library/modules/$.array-includes')(false),
      ObjectProto = Object.prototype,
      ArrayProto = Array.prototype,
      arraySlice = ArrayProto.slice,
      arrayJoin = ArrayProto.join,
      defineProperty = $.setDesc,
      getOwnDescriptor = $.getDesc,
      defineProperties = $.setDescs,
      factories = {},
      IE8_DOM_DEFINE;
  if (!DESCRIPTORS) {
    IE8_DOM_DEFINE = !fails(function() {
      return defineProperty(cel('div'), 'a', {get: function() {
          return 7;
        }}).a != 7;
    });
    $.setDesc = function(O, P, Attributes) {
      if (IE8_DOM_DEFINE)
        try {
          return defineProperty(O, P, Attributes);
        } catch (e) {}
      if ('get' in Attributes || 'set' in Attributes)
        throw TypeError('Accessors not supported!');
      if ('value' in Attributes)
        anObject(O)[P] = Attributes.value;
      return O;
    };
    $.getDesc = function(O, P) {
      if (IE8_DOM_DEFINE)
        try {
          return getOwnDescriptor(O, P);
        } catch (e) {}
      if (has(O, P))
        return createDesc(!ObjectProto.propertyIsEnumerable.call(O, P), O[P]);
    };
    $.setDescs = defineProperties = function(O, Properties) {
      anObject(O);
      var keys = $.getKeys(Properties),
          length = keys.length,
          i = 0,
          P;
      while (length > i)
        $.setDesc(O, P = keys[i++], Properties[P]);
      return O;
    };
  }
  $export($export.S + $export.F * !DESCRIPTORS, 'Object', {
    getOwnPropertyDescriptor: $.getDesc,
    defineProperty: $.setDesc,
    defineProperties: defineProperties
  });
  var keys1 = ('constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,' + 'toLocaleString,toString,valueOf').split(','),
      keys2 = keys1.concat('length', 'prototype'),
      keysLen1 = keys1.length;
  var createDict = function() {
    var iframe = cel('iframe'),
        i = keysLen1,
        gt = '>',
        iframeDocument;
    iframe.style.display = 'none';
    html.appendChild(iframe);
    iframe.src = 'javascript:';
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write('<script>document.F=Object</script' + gt);
    iframeDocument.close();
    createDict = iframeDocument.F;
    while (i--)
      delete createDict.prototype[keys1[i]];
    return createDict();
  };
  var createGetKeys = function(names, length) {
    return function(object) {
      var O = toIObject(object),
          i = 0,
          result = [],
          key;
      for (key in O)
        if (key != IE_PROTO)
          has(O, key) && result.push(key);
      while (length > i)
        if (has(O, key = names[i++])) {
          ~arrayIndexOf(result, key) || result.push(key);
        }
      return result;
    };
  };
  var Empty = function() {};
  $export($export.S, 'Object', {
    getPrototypeOf: $.getProto = $.getProto || function(O) {
      O = toObject(O);
      if (has(O, IE_PROTO))
        return O[IE_PROTO];
      if (typeof O.constructor == 'function' && O instanceof O.constructor) {
        return O.constructor.prototype;
      }
      return O instanceof Object ? ObjectProto : null;
    },
    getOwnPropertyNames: $.getNames = $.getNames || createGetKeys(keys2, keys2.length, true),
    create: $.create = $.create || function(O, Properties) {
      var result;
      if (O !== null) {
        Empty.prototype = anObject(O);
        result = new Empty();
        Empty.prototype = null;
        result[IE_PROTO] = O;
      } else
        result = createDict();
      return Properties === undefined ? result : defineProperties(result, Properties);
    },
    keys: $.getKeys = $.getKeys || createGetKeys(keys1, keysLen1, false)
  });
  var construct = function(F, len, args) {
    if (!(len in factories)) {
      for (var n = [],
          i = 0; i < len; i++)
        n[i] = 'a[' + i + ']';
      factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
    }
    return factories[len](F, args);
  };
  $export($export.P, 'Function', {bind: function bind(that) {
      var fn = aFunction(this),
          partArgs = arraySlice.call(arguments, 1);
      var bound = function() {
        var args = partArgs.concat(arraySlice.call(arguments));
        return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
      };
      if (isObject(fn.prototype))
        bound.prototype = fn.prototype;
      return bound;
    }});
  $export($export.P + $export.F * fails(function() {
    if (html)
      arraySlice.call(html);
  }), 'Array', {slice: function(begin, end) {
      var len = toLength(this.length),
          klass = cof(this);
      end = end === undefined ? len : end;
      if (klass == 'Array')
        return arraySlice.call(this, begin, end);
      var start = toIndex(begin, len),
          upTo = toIndex(end, len),
          size = toLength(upTo - start),
          cloned = Array(size),
          i = 0;
      for (; i < size; i++)
        cloned[i] = klass == 'String' ? this.charAt(start + i) : this[start + i];
      return cloned;
    }});
  $export($export.P + $export.F * (IObject != Object), 'Array', {join: function join(separator) {
      return arrayJoin.call(IObject(this), separator === undefined ? ',' : separator);
    }});
  $export($export.S, 'Array', {isArray: $__require('npm:core-js@1.2.6/library/modules/$.is-array')});
  var createArrayReduce = function(isRight) {
    return function(callbackfn, memo) {
      aFunction(callbackfn);
      var O = IObject(this),
          length = toLength(O.length),
          index = isRight ? length - 1 : 0,
          i = isRight ? -1 : 1;
      if (arguments.length < 2)
        for (; ; ) {
          if (index in O) {
            memo = O[index];
            index += i;
            break;
          }
          index += i;
          if (isRight ? index < 0 : length <= index) {
            throw TypeError('Reduce of empty array with no initial value');
          }
        }
      for (; isRight ? index >= 0 : length > index; index += i)
        if (index in O) {
          memo = callbackfn(memo, O[index], index, this);
        }
      return memo;
    };
  };
  var methodize = function($fn) {
    return function(arg1) {
      return $fn(this, arg1, arguments[1]);
    };
  };
  $export($export.P, 'Array', {
    forEach: $.each = $.each || methodize(createArrayMethod(0)),
    map: methodize(createArrayMethod(1)),
    filter: methodize(createArrayMethod(2)),
    some: methodize(createArrayMethod(3)),
    every: methodize(createArrayMethod(4)),
    reduce: createArrayReduce(false),
    reduceRight: createArrayReduce(true),
    indexOf: methodize(arrayIndexOf),
    lastIndexOf: function(el, fromIndex) {
      var O = toIObject(this),
          length = toLength(O.length),
          index = length - 1;
      if (arguments.length > 1)
        index = Math.min(index, toInteger(fromIndex));
      if (index < 0)
        index = toLength(length + index);
      for (; index >= 0; index--)
        if (index in O)
          if (O[index] === el)
            return index;
      return -1;
    }
  });
  $export($export.S, 'Date', {now: function() {
      return +new Date;
    }});
  var lz = function(num) {
    return num > 9 ? num : '0' + num;
  };
  $export($export.P + $export.F * (fails(function() {
    return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
  }) || !fails(function() {
    new Date(NaN).toISOString();
  })), 'Date', {toISOString: function toISOString() {
      if (!isFinite(this))
        throw RangeError('Invalid time value');
      var d = this,
          y = d.getUTCFullYear(),
          m = d.getUTCMilliseconds(),
          s = y < 0 ? '-' : y > 9999 ? '+' : '';
      return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) + '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) + 'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) + ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/shim", ["npm:core-js@1.2.6/library/modules/es5", "npm:core-js@1.2.6/library/modules/es6.symbol", "npm:core-js@1.2.6/library/modules/es6.object.assign", "npm:core-js@1.2.6/library/modules/es6.object.is", "npm:core-js@1.2.6/library/modules/es6.object.set-prototype-of", "npm:core-js@1.2.6/library/modules/es6.object.to-string", "npm:core-js@1.2.6/library/modules/es6.object.freeze", "npm:core-js@1.2.6/library/modules/es6.object.seal", "npm:core-js@1.2.6/library/modules/es6.object.prevent-extensions", "npm:core-js@1.2.6/library/modules/es6.object.is-frozen", "npm:core-js@1.2.6/library/modules/es6.object.is-sealed", "npm:core-js@1.2.6/library/modules/es6.object.is-extensible", "npm:core-js@1.2.6/library/modules/es6.object.get-own-property-descriptor", "npm:core-js@1.2.6/library/modules/es6.object.get-prototype-of", "npm:core-js@1.2.6/library/modules/es6.object.keys", "npm:core-js@1.2.6/library/modules/es6.object.get-own-property-names", "npm:core-js@1.2.6/library/modules/es6.function.name", "npm:core-js@1.2.6/library/modules/es6.function.has-instance", "npm:core-js@1.2.6/library/modules/es6.number.constructor", "npm:core-js@1.2.6/library/modules/es6.number.epsilon", "npm:core-js@1.2.6/library/modules/es6.number.is-finite", "npm:core-js@1.2.6/library/modules/es6.number.is-integer", "npm:core-js@1.2.6/library/modules/es6.number.is-nan", "npm:core-js@1.2.6/library/modules/es6.number.is-safe-integer", "npm:core-js@1.2.6/library/modules/es6.number.max-safe-integer", "npm:core-js@1.2.6/library/modules/es6.number.min-safe-integer", "npm:core-js@1.2.6/library/modules/es6.number.parse-float", "npm:core-js@1.2.6/library/modules/es6.number.parse-int", "npm:core-js@1.2.6/library/modules/es6.math.acosh", "npm:core-js@1.2.6/library/modules/es6.math.asinh", "npm:core-js@1.2.6/library/modules/es6.math.atanh", "npm:core-js@1.2.6/library/modules/es6.math.cbrt", "npm:core-js@1.2.6/library/modules/es6.math.clz32", "npm:core-js@1.2.6/library/modules/es6.math.cosh", "npm:core-js@1.2.6/library/modules/es6.math.expm1", "npm:core-js@1.2.6/library/modules/es6.math.fround", "npm:core-js@1.2.6/library/modules/es6.math.hypot", "npm:core-js@1.2.6/library/modules/es6.math.imul", "npm:core-js@1.2.6/library/modules/es6.math.log10", "npm:core-js@1.2.6/library/modules/es6.math.log1p", "npm:core-js@1.2.6/library/modules/es6.math.log2", "npm:core-js@1.2.6/library/modules/es6.math.sign", "npm:core-js@1.2.6/library/modules/es6.math.sinh", "npm:core-js@1.2.6/library/modules/es6.math.tanh", "npm:core-js@1.2.6/library/modules/es6.math.trunc", "npm:core-js@1.2.6/library/modules/es6.string.from-code-point", "npm:core-js@1.2.6/library/modules/es6.string.raw", "npm:core-js@1.2.6/library/modules/es6.string.trim", "npm:core-js@1.2.6/library/modules/es6.string.iterator", "npm:core-js@1.2.6/library/modules/es6.string.code-point-at", "npm:core-js@1.2.6/library/modules/es6.string.ends-with", "npm:core-js@1.2.6/library/modules/es6.string.includes", "npm:core-js@1.2.6/library/modules/es6.string.repeat", "npm:core-js@1.2.6/library/modules/es6.string.starts-with", "npm:core-js@1.2.6/library/modules/es6.array.from", "npm:core-js@1.2.6/library/modules/es6.array.of", "npm:core-js@1.2.6/library/modules/es6.array.iterator", "npm:core-js@1.2.6/library/modules/es6.array.species", "npm:core-js@1.2.6/library/modules/es6.array.copy-within", "npm:core-js@1.2.6/library/modules/es6.array.fill", "npm:core-js@1.2.6/library/modules/es6.array.find", "npm:core-js@1.2.6/library/modules/es6.array.find-index", "npm:core-js@1.2.6/library/modules/es6.regexp.constructor", "npm:core-js@1.2.6/library/modules/es6.regexp.flags", "npm:core-js@1.2.6/library/modules/es6.regexp.match", "npm:core-js@1.2.6/library/modules/es6.regexp.replace", "npm:core-js@1.2.6/library/modules/es6.regexp.search", "npm:core-js@1.2.6/library/modules/es6.regexp.split", "npm:core-js@1.2.6/library/modules/es6.promise", "npm:core-js@1.2.6/library/modules/es6.map", "npm:core-js@1.2.6/library/modules/es6.set", "npm:core-js@1.2.6/library/modules/es6.weak-map", "npm:core-js@1.2.6/library/modules/es6.weak-set", "npm:core-js@1.2.6/library/modules/es6.reflect.apply", "npm:core-js@1.2.6/library/modules/es6.reflect.construct", "npm:core-js@1.2.6/library/modules/es6.reflect.define-property", "npm:core-js@1.2.6/library/modules/es6.reflect.delete-property", "npm:core-js@1.2.6/library/modules/es6.reflect.enumerate", "npm:core-js@1.2.6/library/modules/es6.reflect.get", "npm:core-js@1.2.6/library/modules/es6.reflect.get-own-property-descriptor", "npm:core-js@1.2.6/library/modules/es6.reflect.get-prototype-of", "npm:core-js@1.2.6/library/modules/es6.reflect.has", "npm:core-js@1.2.6/library/modules/es6.reflect.is-extensible", "npm:core-js@1.2.6/library/modules/es6.reflect.own-keys", "npm:core-js@1.2.6/library/modules/es6.reflect.prevent-extensions", "npm:core-js@1.2.6/library/modules/es6.reflect.set", "npm:core-js@1.2.6/library/modules/es6.reflect.set-prototype-of", "npm:core-js@1.2.6/library/modules/es7.array.includes", "npm:core-js@1.2.6/library/modules/es7.string.at", "npm:core-js@1.2.6/library/modules/es7.string.pad-left", "npm:core-js@1.2.6/library/modules/es7.string.pad-right", "npm:core-js@1.2.6/library/modules/es7.string.trim-left", "npm:core-js@1.2.6/library/modules/es7.string.trim-right", "npm:core-js@1.2.6/library/modules/es7.regexp.escape", "npm:core-js@1.2.6/library/modules/es7.object.get-own-property-descriptors", "npm:core-js@1.2.6/library/modules/es7.object.values", "npm:core-js@1.2.6/library/modules/es7.object.entries", "npm:core-js@1.2.6/library/modules/es7.map.to-json", "npm:core-js@1.2.6/library/modules/es7.set.to-json", "npm:core-js@1.2.6/library/modules/js.array.statics", "npm:core-js@1.2.6/library/modules/web.timers", "npm:core-js@1.2.6/library/modules/web.immediate", "npm:core-js@1.2.6/library/modules/web.dom.iterable", "npm:core-js@1.2.6/library/modules/$.core"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  $__require('npm:core-js@1.2.6/library/modules/es5');
  $__require('npm:core-js@1.2.6/library/modules/es6.symbol');
  $__require('npm:core-js@1.2.6/library/modules/es6.object.assign');
  $__require('npm:core-js@1.2.6/library/modules/es6.object.is');
  $__require('npm:core-js@1.2.6/library/modules/es6.object.set-prototype-of');
  $__require('npm:core-js@1.2.6/library/modules/es6.object.to-string');
  $__require('npm:core-js@1.2.6/library/modules/es6.object.freeze');
  $__require('npm:core-js@1.2.6/library/modules/es6.object.seal');
  $__require('npm:core-js@1.2.6/library/modules/es6.object.prevent-extensions');
  $__require('npm:core-js@1.2.6/library/modules/es6.object.is-frozen');
  $__require('npm:core-js@1.2.6/library/modules/es6.object.is-sealed');
  $__require('npm:core-js@1.2.6/library/modules/es6.object.is-extensible');
  $__require('npm:core-js@1.2.6/library/modules/es6.object.get-own-property-descriptor');
  $__require('npm:core-js@1.2.6/library/modules/es6.object.get-prototype-of');
  $__require('npm:core-js@1.2.6/library/modules/es6.object.keys');
  $__require('npm:core-js@1.2.6/library/modules/es6.object.get-own-property-names');
  $__require('npm:core-js@1.2.6/library/modules/es6.function.name');
  $__require('npm:core-js@1.2.6/library/modules/es6.function.has-instance');
  $__require('npm:core-js@1.2.6/library/modules/es6.number.constructor');
  $__require('npm:core-js@1.2.6/library/modules/es6.number.epsilon');
  $__require('npm:core-js@1.2.6/library/modules/es6.number.is-finite');
  $__require('npm:core-js@1.2.6/library/modules/es6.number.is-integer');
  $__require('npm:core-js@1.2.6/library/modules/es6.number.is-nan');
  $__require('npm:core-js@1.2.6/library/modules/es6.number.is-safe-integer');
  $__require('npm:core-js@1.2.6/library/modules/es6.number.max-safe-integer');
  $__require('npm:core-js@1.2.6/library/modules/es6.number.min-safe-integer');
  $__require('npm:core-js@1.2.6/library/modules/es6.number.parse-float');
  $__require('npm:core-js@1.2.6/library/modules/es6.number.parse-int');
  $__require('npm:core-js@1.2.6/library/modules/es6.math.acosh');
  $__require('npm:core-js@1.2.6/library/modules/es6.math.asinh');
  $__require('npm:core-js@1.2.6/library/modules/es6.math.atanh');
  $__require('npm:core-js@1.2.6/library/modules/es6.math.cbrt');
  $__require('npm:core-js@1.2.6/library/modules/es6.math.clz32');
  $__require('npm:core-js@1.2.6/library/modules/es6.math.cosh');
  $__require('npm:core-js@1.2.6/library/modules/es6.math.expm1');
  $__require('npm:core-js@1.2.6/library/modules/es6.math.fround');
  $__require('npm:core-js@1.2.6/library/modules/es6.math.hypot');
  $__require('npm:core-js@1.2.6/library/modules/es6.math.imul');
  $__require('npm:core-js@1.2.6/library/modules/es6.math.log10');
  $__require('npm:core-js@1.2.6/library/modules/es6.math.log1p');
  $__require('npm:core-js@1.2.6/library/modules/es6.math.log2');
  $__require('npm:core-js@1.2.6/library/modules/es6.math.sign');
  $__require('npm:core-js@1.2.6/library/modules/es6.math.sinh');
  $__require('npm:core-js@1.2.6/library/modules/es6.math.tanh');
  $__require('npm:core-js@1.2.6/library/modules/es6.math.trunc');
  $__require('npm:core-js@1.2.6/library/modules/es6.string.from-code-point');
  $__require('npm:core-js@1.2.6/library/modules/es6.string.raw');
  $__require('npm:core-js@1.2.6/library/modules/es6.string.trim');
  $__require('npm:core-js@1.2.6/library/modules/es6.string.iterator');
  $__require('npm:core-js@1.2.6/library/modules/es6.string.code-point-at');
  $__require('npm:core-js@1.2.6/library/modules/es6.string.ends-with');
  $__require('npm:core-js@1.2.6/library/modules/es6.string.includes');
  $__require('npm:core-js@1.2.6/library/modules/es6.string.repeat');
  $__require('npm:core-js@1.2.6/library/modules/es6.string.starts-with');
  $__require('npm:core-js@1.2.6/library/modules/es6.array.from');
  $__require('npm:core-js@1.2.6/library/modules/es6.array.of');
  $__require('npm:core-js@1.2.6/library/modules/es6.array.iterator');
  $__require('npm:core-js@1.2.6/library/modules/es6.array.species');
  $__require('npm:core-js@1.2.6/library/modules/es6.array.copy-within');
  $__require('npm:core-js@1.2.6/library/modules/es6.array.fill');
  $__require('npm:core-js@1.2.6/library/modules/es6.array.find');
  $__require('npm:core-js@1.2.6/library/modules/es6.array.find-index');
  $__require('npm:core-js@1.2.6/library/modules/es6.regexp.constructor');
  $__require('npm:core-js@1.2.6/library/modules/es6.regexp.flags');
  $__require('npm:core-js@1.2.6/library/modules/es6.regexp.match');
  $__require('npm:core-js@1.2.6/library/modules/es6.regexp.replace');
  $__require('npm:core-js@1.2.6/library/modules/es6.regexp.search');
  $__require('npm:core-js@1.2.6/library/modules/es6.regexp.split');
  $__require('npm:core-js@1.2.6/library/modules/es6.promise');
  $__require('npm:core-js@1.2.6/library/modules/es6.map');
  $__require('npm:core-js@1.2.6/library/modules/es6.set');
  $__require('npm:core-js@1.2.6/library/modules/es6.weak-map');
  $__require('npm:core-js@1.2.6/library/modules/es6.weak-set');
  $__require('npm:core-js@1.2.6/library/modules/es6.reflect.apply');
  $__require('npm:core-js@1.2.6/library/modules/es6.reflect.construct');
  $__require('npm:core-js@1.2.6/library/modules/es6.reflect.define-property');
  $__require('npm:core-js@1.2.6/library/modules/es6.reflect.delete-property');
  $__require('npm:core-js@1.2.6/library/modules/es6.reflect.enumerate');
  $__require('npm:core-js@1.2.6/library/modules/es6.reflect.get');
  $__require('npm:core-js@1.2.6/library/modules/es6.reflect.get-own-property-descriptor');
  $__require('npm:core-js@1.2.6/library/modules/es6.reflect.get-prototype-of');
  $__require('npm:core-js@1.2.6/library/modules/es6.reflect.has');
  $__require('npm:core-js@1.2.6/library/modules/es6.reflect.is-extensible');
  $__require('npm:core-js@1.2.6/library/modules/es6.reflect.own-keys');
  $__require('npm:core-js@1.2.6/library/modules/es6.reflect.prevent-extensions');
  $__require('npm:core-js@1.2.6/library/modules/es6.reflect.set');
  $__require('npm:core-js@1.2.6/library/modules/es6.reflect.set-prototype-of');
  $__require('npm:core-js@1.2.6/library/modules/es7.array.includes');
  $__require('npm:core-js@1.2.6/library/modules/es7.string.at');
  $__require('npm:core-js@1.2.6/library/modules/es7.string.pad-left');
  $__require('npm:core-js@1.2.6/library/modules/es7.string.pad-right');
  $__require('npm:core-js@1.2.6/library/modules/es7.string.trim-left');
  $__require('npm:core-js@1.2.6/library/modules/es7.string.trim-right');
  $__require('npm:core-js@1.2.6/library/modules/es7.regexp.escape');
  $__require('npm:core-js@1.2.6/library/modules/es7.object.get-own-property-descriptors');
  $__require('npm:core-js@1.2.6/library/modules/es7.object.values');
  $__require('npm:core-js@1.2.6/library/modules/es7.object.entries');
  $__require('npm:core-js@1.2.6/library/modules/es7.map.to-json');
  $__require('npm:core-js@1.2.6/library/modules/es7.set.to-json');
  $__require('npm:core-js@1.2.6/library/modules/js.array.statics');
  $__require('npm:core-js@1.2.6/library/modules/web.timers');
  $__require('npm:core-js@1.2.6/library/modules/web.immediate');
  $__require('npm:core-js@1.2.6/library/modules/web.dom.iterable');
  module.exports = $__require('npm:core-js@1.2.6/library/modules/$.core');
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/index", ["npm:core-js@1.2.6/library/shim", "npm:core-js@1.2.6/library/modules/core.dict", "npm:core-js@1.2.6/library/modules/core.get-iterator-method", "npm:core-js@1.2.6/library/modules/core.get-iterator", "npm:core-js@1.2.6/library/modules/core.is-iterable", "npm:core-js@1.2.6/library/modules/core.delay", "npm:core-js@1.2.6/library/modules/core.function.part", "npm:core-js@1.2.6/library/modules/core.object.is-object", "npm:core-js@1.2.6/library/modules/core.object.classof", "npm:core-js@1.2.6/library/modules/core.object.define", "npm:core-js@1.2.6/library/modules/core.object.make", "npm:core-js@1.2.6/library/modules/core.number.iterator", "npm:core-js@1.2.6/library/modules/core.string.escape-html", "npm:core-js@1.2.6/library/modules/core.string.unescape-html", "npm:core-js@1.2.6/library/modules/core.log", "npm:core-js@1.2.6/library/modules/$.core"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  $__require('npm:core-js@1.2.6/library/shim');
  $__require('npm:core-js@1.2.6/library/modules/core.dict');
  $__require('npm:core-js@1.2.6/library/modules/core.get-iterator-method');
  $__require('npm:core-js@1.2.6/library/modules/core.get-iterator');
  $__require('npm:core-js@1.2.6/library/modules/core.is-iterable');
  $__require('npm:core-js@1.2.6/library/modules/core.delay');
  $__require('npm:core-js@1.2.6/library/modules/core.function.part');
  $__require('npm:core-js@1.2.6/library/modules/core.object.is-object');
  $__require('npm:core-js@1.2.6/library/modules/core.object.classof');
  $__require('npm:core-js@1.2.6/library/modules/core.object.define');
  $__require('npm:core-js@1.2.6/library/modules/core.object.make');
  $__require('npm:core-js@1.2.6/library/modules/core.number.iterator');
  $__require('npm:core-js@1.2.6/library/modules/core.string.escape-html');
  $__require('npm:core-js@1.2.6/library/modules/core.string.unescape-html');
  $__require('npm:core-js@1.2.6/library/modules/core.log');
  module.exports = $__require('npm:core-js@1.2.6/library/modules/$.core');
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library", ["npm:core-js@1.2.6/library/index"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('npm:core-js@1.2.6/library/index');
  global.define = __define;
  return module.exports;
});

//# sourceMappingURL=core-js.js.map