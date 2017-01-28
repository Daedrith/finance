System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ],
    "blacklist": [
      "es6.forOf",
      "es6.spread"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "bundles/mercury.js": [
      "npm:mercury@14.0.0",
      "npm:mercury@14.0.0/index",
      "npm:geval@2.1.1/single",
      "npm:geval@2.1.1/multiple",
      "npm:xtend@4.0.1",
      "npm:main-loop@3.2.0",
      "npm:dom-delegator@13.1.0",
      "npm:observ-array@3.2.1",
      "npm:observ-struct@5.0.1",
      "npm:observ-varhash@1.0.6",
      "npm:observ@0.2.0",
      "npm:vdom-thunk@3.0.0",
      "npm:observ@0.2.0/computed",
      "npm:observ@0.2.0/watch",
      "npm:value-event@5.1.0/base-event",
      "npm:value-event@5.1.0/event",
      "npm:value-event@5.1.0/value",
      "npm:value-event@5.1.0/submit",
      "npm:value-event@5.1.0/key",
      "npm:value-event@5.1.0/change",
      "npm:value-event@5.1.0/click",
      "npm:virtual-dom@1.3.0/vdom/patch",
      "npm:virtual-dom@1.3.0/vtree/diff",
      "npm:virtual-dom@1.3.0/vdom/create-element",
      "npm:virtual-dom@1.3.0/virtual-hyperscript",
      "npm:geval@2.1.1/event",
      "npm:xtend@4.0.1/immutable",
      "npm:main-loop@3.2.0/index",
      "npm:dom-delegator@13.1.0/index",
      "npm:observ-array@3.2.1/index",
      "npm:observ-struct@5.0.1/index",
      "npm:observ-varhash@1.0.6/index",
      "npm:observ@0.2.0/index",
      "npm:vdom-thunk@3.0.0/index",
      "npm:xtend@2.2.0",
      "npm:form-data-set@2.0.0/element",
      "npm:x-is-array@0.1.0",
      "npm:global@4.3.0/document",
      "npm:virtual-dom@1.3.0/vdom/dom-index",
      "npm:virtual-dom@1.3.0/vdom/patch-op",
      "npm:virtual-dom@1.3.0/vnode/vpatch",
      "npm:virtual-dom@1.3.0/vnode/is-vnode",
      "npm:virtual-dom@1.3.0/vnode/is-widget",
      "npm:virtual-dom@1.3.0/vnode/is-vtext",
      "npm:virtual-dom@1.3.0/vnode/is-thunk",
      "npm:virtual-dom@1.3.0/vnode/handle-thunk",
      "npm:virtual-dom@1.3.0/vtree/diff-props",
      "npm:virtual-dom@1.3.0/vdom/apply-properties",
      "npm:virtual-dom@1.3.0/virtual-hyperscript/index",
      "npm:raf@2.0.4",
      "npm:individual@2.0.0",
      "npm:error@4.4.0/typed",
      "npm:cuid@1.3.8",
      "npm:dom-delegator@13.1.0/dom-delegator",
      "npm:observ-array@3.2.1/put",
      "npm:observ-array@3.2.1/set",
      "npm:observ-array@3.2.1/transaction",
      "npm:observ-array@3.2.1/add-listener",
      "npm:observ-array@3.2.1/array-methods",
      "npm:xtend@3.0.0",
      "github:jspm/nodelibs-process@0.1.2",
      "npm:vdom-thunk@3.0.0/partial",
      "npm:dom-walk@0.1.1",
      "npm:xtend@2.2.0/index",
      "npm:form-data-set@2.0.0/index",
      "npm:x-is-array@0.1.0/index",
      "npm:virtual-dom@1.3.0/vnode/version",
      "npm:virtual-dom@1.3.0/vdom/update-widget",
      "npm:is-object@1.0.1",
      "npm:virtual-dom@1.3.0/vnode/is-vhook",
      "npm:virtual-dom@1.3.0/vnode/vtext",
      "npm:virtual-dom@1.3.0/vnode/vnode",
      "npm:virtual-dom@1.3.0/virtual-hyperscript/parse-tag",
      "npm:virtual-dom@1.3.0/virtual-hyperscript/hooks/soft-set-hook",
      "npm:virtual-dom@1.3.0/virtual-hyperscript/hooks/ev-hook",
      "npm:observ-array@3.2.1/splice",
      "npm:raf@2.0.4/index",
      "npm:individual@2.0.0/index",
      "npm:camelize@1.0.0",
      "npm:string-template@0.2.1",
      "npm:cuid@1.3.8/dist/browser-cuid",
      "npm:ev-store@7.0.0",
      "npm:xtend@4.0.1/mutable",
      "npm:weakmap-shim@1.1.0/create-store",
      "npm:dom-delegator@13.1.0/add-event",
      "npm:dom-delegator@13.1.0/proxy-event",
      "npm:dom-delegator@13.1.0/remove-event",
      "npm:observ-array@3.2.1/lib/set-non-enumerable",
      "npm:adiff@0.2.13",
      "npm:observ-array@3.2.1/apply-patch",
      "npm:observ-array@3.2.1/array-reverse",
      "npm:observ-array@3.2.1/array-sort",
      "npm:xtend@3.0.0/index",
      "github:jspm/nodelibs-process@0.1.2/index",
      "npm:vdom-thunk@3.0.0/immutable-thunk",
      "npm:vdom-thunk@3.0.0/shallow-eq",
      "npm:dom-walk@0.1.1/index",
      "npm:xtend@2.2.0/has-keys",
      "npm:is-object@1.0.1/index",
      "npm:browser-split@0.0.1",
      "npm:camelize@1.0.0/index",
      "npm:string-template@0.2.1/index",
      "npm:ev-store@7.0.0/index",
      "npm:inherits@2.0.1",
      "npm:weakmap-shim@1.1.0/hidden-store",
      "npm:adiff@0.2.13/index",
      "npm:process@0.11.2",
      "npm:performance-now@0.1.4",
      "npm:browser-split@0.0.1/index",
      "npm:process@0.11.2/browser",
      "npm:inherits@2.0.1/inherits_browser",
      "npm:individual@3.0.0/one-version",
      "npm:performance-now@0.1.4/lib/performance-now",
      "npm:individual@3.0.0/index"
    ],
    "bundles/core-js.js": [
      "npm:core-js@1.2.6/library",
      "npm:core-js@1.2.6/library/index",
      "npm:core-js@1.2.6/library/modules/core.get-iterator-method",
      "npm:core-js@1.2.6/library/modules/core.is-iterable",
      "npm:core-js@1.2.6/library/modules/core.delay",
      "npm:core-js@1.2.6/library/modules/core.function.part",
      "npm:core-js@1.2.6/library/modules/core.get-iterator",
      "npm:core-js@1.2.6/library/modules/core.object.classof",
      "npm:core-js@1.2.6/library/modules/core.object.define",
      "npm:core-js@1.2.6/library/modules/core.object.make",
      "npm:core-js@1.2.6/library/modules/core.object.is-object",
      "npm:core-js@1.2.6/library/modules/core.string.escape-html",
      "npm:core-js@1.2.6/library/modules/core.number.iterator",
      "npm:core-js@1.2.6/library/modules/core.string.unescape-html",
      "npm:core-js@1.2.6/library/modules/$.core",
      "npm:core-js@1.2.6/library/modules/$.classof",
      "npm:core-js@1.2.6/library/modules/$.wks",
      "npm:core-js@1.2.6/library/modules/$.iterators",
      "npm:core-js@1.2.6/library/modules/$.global",
      "npm:core-js@1.2.6/library/modules/$.export",
      "npm:core-js@1.2.6/library/modules/$.partial",
      "npm:core-js@1.2.6/library/modules/$.path",
      "npm:core-js@1.2.6/library/modules/$.an-object",
      "npm:core-js@1.2.6/library/modules/$.object-define",
      "npm:core-js@1.2.6/library/modules/$",
      "npm:core-js@1.2.6/library/modules/$.is-object",
      "npm:core-js@1.2.6/library/modules/$.replacer",
      "npm:core-js@1.2.6/library/modules/$.iter-define",
      "npm:core-js@1.2.6/library/modules/$.cof",
      "npm:core-js@1.2.6/library/modules/$.shared",
      "npm:core-js@1.2.6/library/modules/$.uid",
      "npm:core-js@1.2.6/library/modules/$.ctx",
      "npm:core-js@1.2.6/library/modules/$.invoke",
      "npm:core-js@1.2.6/library/modules/$.a-function",
      "npm:core-js@1.2.6/library/modules/core.dict",
      "npm:core-js@1.2.6/library/modules/core.log",
      "npm:core-js@1.2.6/library/modules/$.to-iobject",
      "npm:core-js@1.2.6/library/shim",
      "npm:core-js@1.2.6/library/modules/$.own-keys",
      "npm:core-js@1.2.6/library/modules/$.library",
      "npm:core-js@1.2.6/library/modules/$.hide",
      "npm:core-js@1.2.6/library/modules/$.redefine",
      "npm:core-js@1.2.6/library/modules/$.has",
      "npm:core-js@1.2.6/library/modules/$.iter-create",
      "npm:core-js@1.2.6/library/modules/$.set-to-string-tag",
      "npm:core-js@1.2.6/library/modules/$.property-desc",
      "npm:core-js@1.2.6/library/modules/$.object-assign",
      "npm:core-js@1.2.6/library/modules/$.keyof",
      "npm:core-js@1.2.6/library/modules/$.for-of",
      "npm:core-js@1.2.6/library/modules/$.iter-step",
      "npm:core-js@1.2.6/library/modules/$.descriptors",
      "npm:core-js@1.2.6/library/modules/$.iobject",
      "npm:core-js@1.2.6/library/modules/$.defined",
      "npm:core-js@1.2.6/library/modules/es6.object.assign",
      "npm:core-js@1.2.6/library/modules/es6.symbol",
      "npm:core-js@1.2.6/library/modules/es6.object.to-string",
      "npm:core-js@1.2.6/library/modules/es6.object.freeze",
      "npm:core-js@1.2.6/library/modules/es6.object.is",
      "npm:core-js@1.2.6/library/modules/es6.object.set-prototype-of",
      "npm:core-js@1.2.6/library/modules/es6.object.seal",
      "npm:core-js@1.2.6/library/modules/es6.object.prevent-extensions",
      "npm:core-js@1.2.6/library/modules/es6.object.is-frozen",
      "npm:core-js@1.2.6/library/modules/es6.object.is-sealed",
      "npm:core-js@1.2.6/library/modules/es6.object.get-own-property-descriptor",
      "npm:core-js@1.2.6/library/modules/es6.object.keys",
      "npm:core-js@1.2.6/library/modules/es6.object.get-prototype-of",
      "npm:core-js@1.2.6/library/modules/es6.object.is-extensible",
      "npm:core-js@1.2.6/library/modules/es6.object.get-own-property-names",
      "npm:core-js@1.2.6/library/modules/es6.function.has-instance",
      "npm:core-js@1.2.6/library/modules/es6.number.constructor",
      "npm:core-js@1.2.6/library/modules/es6.number.epsilon",
      "npm:core-js@1.2.6/library/modules/es6.number.is-finite",
      "npm:core-js@1.2.6/library/modules/es6.number.is-integer",
      "npm:core-js@1.2.6/library/modules/es6.number.is-nan",
      "npm:core-js@1.2.6/library/modules/es6.number.is-safe-integer",
      "npm:core-js@1.2.6/library/modules/es5",
      "npm:core-js@1.2.6/library/modules/es6.number.max-safe-integer",
      "npm:core-js@1.2.6/library/modules/es6.number.min-safe-integer",
      "npm:core-js@1.2.6/library/modules/es6.function.name",
      "npm:core-js@1.2.6/library/modules/es6.math.asinh",
      "npm:core-js@1.2.6/library/modules/es6.math.atanh",
      "npm:core-js@1.2.6/library/modules/es6.math.clz32",
      "npm:core-js@1.2.6/library/modules/es6.math.cbrt",
      "npm:core-js@1.2.6/library/modules/es6.math.cosh",
      "npm:core-js@1.2.6/library/modules/es6.math.expm1",
      "npm:core-js@1.2.6/library/modules/es6.number.parse-int",
      "npm:core-js@1.2.6/library/modules/es6.math.acosh",
      "npm:core-js@1.2.6/library/modules/es6.math.imul",
      "npm:core-js@1.2.6/library/modules/es6.math.fround",
      "npm:core-js@1.2.6/library/modules/es6.math.hypot",
      "npm:core-js@1.2.6/library/modules/es6.math.log1p",
      "npm:core-js@1.2.6/library/modules/es6.math.log10",
      "npm:core-js@1.2.6/library/modules/es6.math.sign",
      "npm:core-js@1.2.6/library/modules/es6.number.parse-float",
      "npm:core-js@1.2.6/library/modules/es6.math.log2",
      "npm:core-js@1.2.6/library/modules/es6.math.tanh",
      "npm:core-js@1.2.6/library/modules/es6.math.sinh",
      "npm:core-js@1.2.6/library/modules/es6.string.raw",
      "npm:core-js@1.2.6/library/modules/es6.string.iterator",
      "npm:core-js@1.2.6/library/modules/es6.string.trim",
      "npm:core-js@1.2.6/library/modules/es6.string.code-point-at",
      "npm:core-js@1.2.6/library/modules/es6.math.trunc",
      "npm:core-js@1.2.6/library/modules/es6.string.ends-with",
      "npm:core-js@1.2.6/library/modules/es6.string.repeat",
      "npm:core-js@1.2.6/library/modules/es6.string.starts-with",
      "npm:core-js@1.2.6/library/modules/es6.string.from-code-point",
      "npm:core-js@1.2.6/library/modules/es6.array.iterator",
      "npm:core-js@1.2.6/library/modules/es6.array.species",
      "npm:core-js@1.2.6/library/modules/es6.array.of",
      "npm:core-js@1.2.6/library/modules/es6.array.fill",
      "npm:core-js@1.2.6/library/modules/es6.array.find",
      "npm:core-js@1.2.6/library/modules/es6.array.copy-within",
      "npm:core-js@1.2.6/library/modules/es6.array.find-index",
      "npm:core-js@1.2.6/library/modules/es6.regexp.flags",
      "npm:core-js@1.2.6/library/modules/es6.regexp.match",
      "npm:core-js@1.2.6/library/modules/es6.regexp.replace",
      "npm:core-js@1.2.6/library/modules/es6.string.includes",
      "npm:core-js@1.2.6/library/modules/es6.regexp.search",
      "npm:core-js@1.2.6/library/modules/es6.promise",
      "npm:core-js@1.2.6/library/modules/es6.regexp.split",
      "npm:core-js@1.2.6/library/modules/es6.regexp.constructor",
      "npm:core-js@1.2.6/library/modules/es6.array.from",
      "npm:core-js@1.2.6/library/modules/es6.weak-set",
      "npm:core-js@1.2.6/library/modules/es6.reflect.apply",
      "npm:core-js@1.2.6/library/modules/es6.set",
      "npm:core-js@1.2.6/library/modules/es6.map",
      "npm:core-js@1.2.6/library/modules/es6.reflect.define-property",
      "npm:core-js@1.2.6/library/modules/es6.reflect.delete-property",
      "npm:core-js@1.2.6/library/modules/es6.reflect.get",
      "npm:core-js@1.2.6/library/modules/es6.reflect.get-own-property-descriptor",
      "npm:core-js@1.2.6/library/modules/es6.reflect.construct",
      "npm:core-js@1.2.6/library/modules/es6.reflect.get-prototype-of",
      "npm:core-js@1.2.6/library/modules/es6.reflect.enumerate",
      "npm:core-js@1.2.6/library/modules/es6.reflect.own-keys",
      "npm:core-js@1.2.6/library/modules/es6.reflect.is-extensible",
      "npm:core-js@1.2.6/library/modules/es6.reflect.prevent-extensions",
      "npm:core-js@1.2.6/library/modules/es6.weak-map",
      "npm:core-js@1.2.6/library/modules/es6.reflect.set",
      "npm:core-js@1.2.6/library/modules/es6.reflect.has",
      "npm:core-js@1.2.6/library/modules/es7.string.pad-left",
      "npm:core-js@1.2.6/library/modules/es7.string.pad-right",
      "npm:core-js@1.2.6/library/modules/es6.reflect.set-prototype-of",
      "npm:core-js@1.2.6/library/modules/es7.string.at",
      "npm:core-js@1.2.6/library/modules/es7.string.trim-right",
      "npm:core-js@1.2.6/library/modules/es7.regexp.escape",
      "npm:core-js@1.2.6/library/modules/es7.string.trim-left",
      "npm:core-js@1.2.6/library/modules/es7.object.entries",
      "npm:core-js@1.2.6/library/modules/es7.object.get-own-property-descriptors",
      "npm:core-js@1.2.6/library/modules/es7.array.includes",
      "npm:core-js@1.2.6/library/modules/es7.object.values",
      "npm:core-js@1.2.6/library/modules/web.timers",
      "npm:core-js@1.2.6/library/modules/js.array.statics",
      "npm:core-js@1.2.6/library/modules/web.dom.iterable",
      "npm:core-js@1.2.6/library/modules/es7.map.to-json",
      "npm:core-js@1.2.6/library/modules/es7.set.to-json",
      "npm:core-js@1.2.6/library/modules/web.immediate",
      "npm:core-js@1.2.6/library/modules/$.to-object",
      "npm:core-js@1.2.6/library/modules/$.fails",
      "npm:core-js@1.2.6/library/modules/$.iter-call",
      "npm:core-js@1.2.6/library/modules/$.is-array-iter",
      "npm:core-js@1.2.6/library/modules/$.to-length",
      "npm:core-js@1.2.6/library/modules/$.enum-keys",
      "npm:core-js@1.2.6/library/modules/$.get-names",
      "npm:core-js@1.2.6/library/modules/$.is-array",
      "npm:core-js@1.2.6/library/modules/$.object-sap",
      "npm:core-js@1.2.6/library/modules/$.same-value",
      "npm:core-js@1.2.6/library/modules/$.set-proto",
      "npm:core-js@1.2.6/library/modules/$.is-integer",
      "npm:core-js@1.2.6/library/modules/$.dom-create",
      "npm:core-js@1.2.6/library/modules/$.html",
      "npm:core-js@1.2.6/library/modules/$.to-integer",
      "npm:core-js@1.2.6/library/modules/$.to-index",
      "npm:core-js@1.2.6/library/modules/$.math-sign",
      "npm:core-js@1.2.6/library/modules/$.array-methods",
      "npm:core-js@1.2.6/library/modules/$.math-expm1",
      "npm:core-js@1.2.6/library/modules/$.math-log1p",
      "npm:core-js@1.2.6/library/modules/$.array-includes",
      "npm:core-js@1.2.6/library/modules/$.string-at",
      "npm:core-js@1.2.6/library/modules/$.string-trim",
      "npm:core-js@1.2.6/library/modules/$.string-context",
      "npm:core-js@1.2.6/library/modules/$.string-repeat",
      "npm:core-js@1.2.6/library/modules/$.fails-is-regexp",
      "npm:core-js@1.2.6/library/modules/$.add-to-unscopables",
      "npm:core-js@1.2.6/library/modules/$.set-species",
      "npm:core-js@1.2.6/library/modules/$.array-fill",
      "npm:core-js@1.2.6/library/modules/$.array-copy-within",
      "github:jspm/nodelibs-process@0.1.2",
      "npm:core-js@1.2.6/library/modules/$.strict-new",
      "npm:core-js@1.2.6/library/modules/$.species-constructor",
      "npm:core-js@1.2.6/library/modules/$.microtask",
      "npm:core-js@1.2.6/library/modules/$.redefine-all",
      "npm:core-js@1.2.6/library/modules/$.iter-detect",
      "npm:core-js@1.2.6/library/modules/$.collection-strong",
      "npm:core-js@1.2.6/library/modules/$.collection",
      "npm:core-js@1.2.6/library/modules/$.collection-weak",
      "npm:core-js@1.2.6/library/modules/$.object-to-array",
      "npm:core-js@1.2.6/library/modules/$.string-pad",
      "npm:core-js@1.2.6/library/modules/$.collection-to-json",
      "npm:core-js@1.2.6/library/modules/$.task",
      "npm:core-js@1.2.6/library/modules/$.array-species-create",
      "github:jspm/nodelibs-process@0.1.2/index",
      "npm:core-js@1.2.6/library/modules/$.is-regexp",
      "npm:process@0.11.2",
      "npm:process@0.11.2/browser"
    ]
  },

  meta: {
    "//cdnjs.cloudflare.com/ajax/libs/pouchdb/6.1.1/pouchdb.js": {
      "integrity": "sha256-fwoSZOa9MMgqftlgLRNKBLfai4KoMsMZTG2W3UaR41I="
    }
  },

  map: {
    "Daedrith/mercury-navigator": "github:Daedrith/mercury-navigator@dev",
    "Daedrith/observ-pouchdb": "github:Daedrith/observ-pouchdb@dev",
    "babel": "npm:babel-core@5.8.35",
    "babel-runtime": "npm:babel-runtime@5.8.35",
    "co": "npm:co@4.6.0",
    "core-js": "npm:core-js@1.2.6",
    "hyperscript-helpers": "npm:hyperscript-helpers@3.0.1",
    "lodash": "npm:lodash@4.5.1",
    "mercury": "npm:mercury@14.1.0",
    "mercury-navigator": "github:Daedrith/mercury-navigator@dev",
    "mercury-router": "npm:mercury-router@1.1.0",
    "observ": "npm:observ@0.2.0",
    "observ-pouchdb": "github:Daedrith/observ-pouchdb@dev",
    "observ-struct-a": "github:Daedrith/observ-struct-a@0.1.0",
    "pouchdb": "//cdnjs.cloudflare.com/ajax/libs/pouchdb/6.1.1/pouchdb.js",
    "route-map": "npm:route-map@0.1.0",
    "underscore": "npm:underscore@1.8.3",
    "github:Daedrith/mercury-navigator@dev": {
      "observ": "npm:observ@0.2.0",
      "observ-meta": "github:Daedrith/observ-meta@0.1.0",
      "observ-struct-a": "github:Daedrith/observ-struct-a@0.1.0"
    },
    "github:Daedrith/observ-meta@0.1.0": {
      "observ": "npm:observ@0.2.0"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-console@0.1.0": {
      "console-browserify": "npm:console-browserify@1.1.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.2"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.35": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:body@0.1.0": {
      "content-types": "npm:content-types@0.1.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:console-browserify@1.1.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "date-now": "npm:date-now@0.1.4",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:content-types@0.1.0": {
      "iterators": "npm:iterators@0.1.0"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:cuid@1.3.8": {
      "browser-fingerprint": "npm:browser-fingerprint@0.0.1",
      "core-js": "npm:core-js@1.2.6",
      "node-fingerprint": "npm:node-fingerprint@0.0.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:dom-delegator@13.1.0": {
      "cuid": "npm:cuid@1.3.8",
      "ev-store": "npm:ev-store@7.0.0",
      "global": "npm:global@4.3.0",
      "individual": "npm:individual@2.0.0",
      "inherits": "npm:inherits@2.0.1",
      "weakmap-shim": "npm:weakmap-shim@1.1.0",
      "xtend": "npm:xtend@2.2.0"
    },
    "npm:error@4.4.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "camelize": "npm:camelize@1.0.0",
      "string-template": "npm:string-template@0.2.1",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:error@5.2.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "camelize": "npm:camelize@1.0.0",
      "is-error": "npm:is-error@2.2.0",
      "string-template": "npm:string-template@0.2.1",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:ev-store@7.0.0": {
      "individual": "npm:individual@3.0.0"
    },
    "npm:form-data-set@2.0.0": {
      "console": "github:jspm/nodelibs-console@0.1.0",
      "dom-walk": "npm:dom-walk@0.1.1"
    },
    "npm:global@4.3.0": {
      "process": "npm:process@0.5.2"
    },
    "npm:http-hash-router@1.1.0": {
      "error": "npm:error@5.2.0",
      "http-hash": "npm:http-hash@1.1.1",
      "http-methods": "npm:http-methods@1.0.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:http-methods@1.0.0": {
      "body": "npm:body@0.1.0",
      "content-types": "npm:content-types@0.1.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:iterators@0.1.0": {
      "ap": "npm:ap@0.1.0"
    },
    "npm:lodash@4.5.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:main-loop@3.2.0": {
      "error": "npm:error@4.4.0",
      "raf": "npm:raf@2.0.4"
    },
    "npm:mercury-router@1.1.0": {
      "geval": "npm:geval@2.1.1",
      "global": "npm:global@4.3.0",
      "observ": "npm:observ@0.2.0",
      "route-map": "npm:route-map@0.1.0",
      "virtual-dom": "npm:virtual-dom@1.3.0"
    },
    "npm:mercury@14.1.0": {
      "console": "github:jspm/nodelibs-console@0.1.0",
      "dom-delegator": "npm:dom-delegator@13.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "geval": "npm:geval@2.1.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "http-hash-router": "npm:http-hash-router@1.1.0",
      "main-loop": "npm:main-loop@3.2.0",
      "observ": "npm:observ@0.2.0",
      "observ-array": "npm:observ-array@3.2.1",
      "observ-struct": "npm:observ-struct@5.0.1",
      "observ-varhash": "npm:observ-varhash@1.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "value-event": "npm:value-event@5.1.0",
      "vdom-thunk": "npm:vdom-thunk@3.0.0",
      "virtual-dom": "npm:virtual-dom@2.1.1",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:next-tick@0.2.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:node-fingerprint@0.0.2": {
      "os": "github:jspm/nodelibs-os@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:observ-array@3.2.1": {
      "adiff": "npm:adiff@0.2.13",
      "observ": "npm:observ@0.2.0",
      "xtend": "npm:xtend@3.0.0"
    },
    "npm:observ-struct@5.0.1": {
      "observ": "npm:observ@0.2.0",
      "xtend": "npm:xtend@3.0.0"
    },
    "npm:observ-varhash@1.0.8": {
      "observ": "npm:observ@0.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "xtend": "npm:xtend@3.0.0"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:performance-now@0.1.4": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:raf@2.0.4": {
      "performance-now": "npm:performance-now@0.1.4"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:route-map@0.1.0": {
      "path-to-regexp": "npm:path-to-regexp@0.0.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:timers-browserify@1.4.2": {
      "process": "npm:process@0.11.2"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:value-event@5.1.0": {
      "dom-delegator": "npm:dom-delegator@13.1.0",
      "dom-walk": "npm:dom-walk@0.1.1",
      "form-data-set": "npm:form-data-set@2.0.0",
      "global": "npm:global@4.3.0",
      "xtend": "npm:xtend@2.2.0"
    },
    "npm:virtual-dom@1.3.0": {
      "browser-split": "npm:browser-split@0.0.1",
      "error": "npm:error@4.4.0",
      "ev-store": "npm:ev-store@7.0.0",
      "global": "npm:global@4.3.0",
      "is-object": "npm:is-object@1.0.1",
      "next-tick": "npm:next-tick@0.2.2",
      "x-is-array": "npm:x-is-array@0.1.0",
      "x-is-string": "npm:x-is-string@0.1.0"
    },
    "npm:virtual-dom@2.1.1": {
      "browser-split": "npm:browser-split@0.0.1",
      "error": "npm:error@4.4.0",
      "ev-store": "npm:ev-store@7.0.0",
      "global": "npm:global@4.3.0",
      "is-object": "npm:is-object@1.0.1",
      "next-tick": "npm:next-tick@0.2.2",
      "x-is-array": "npm:x-is-array@0.1.0",
      "x-is-string": "npm:x-is-string@0.1.0"
    }
  }
});
