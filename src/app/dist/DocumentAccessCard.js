this.DocumentAccessCard = this.DocumentAccessCard || {};
this.DocumentAccessCard.js = (function(React2, react) {
  "use strict";
  const isRunningInWorker = () => typeof self !== "undefined" && self.__HUBSPOT_EXTENSION_WORKER__ === true;
  const fakeWorkerGlobals = {
    logger: {
      debug: (data) => {
        console.log(data);
      },
      info: (data) => {
        console.info(data);
      },
      warn: (data) => {
        console.warn(data);
      },
      error: (data) => {
        console.error(data);
      }
    },
    extend_V2: () => {
    },
    // @ts-expect-error we are not using the worker endpoint in tests env.
    __useExtensionContext: () => {
    }
  };
  const getWorkerGlobals = () => {
    return isRunningInWorker() ? self : fakeWorkerGlobals;
  };
  const extend_V2 = getWorkerGlobals().extend_V2;
  function serverless(name, options) {
    return self.serverless(name, options);
  }
  function fetch(url, options) {
    return self.hsFetch(url, options);
  }
  const hubspot = {
    extend: extend_V2,
    serverless,
    fetch
  };
  var jsxRuntime = { exports: {} };
  var reactJsxRuntime_development = {};
  var hasRequiredReactJsxRuntime_development;
  function requireReactJsxRuntime_development() {
    if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
    hasRequiredReactJsxRuntime_development = 1;
    /**
     * @license React
     * react-jsx-runtime.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    {
      (function() {
        var React$1 = React2;
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactSharedInternals = React$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format2) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format2, args);
            }
          }
        }
        function printWarning(level, format2, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format2 += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format2);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var assign = Object.assign;
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray2(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self2) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && self2) ;
          }
        }
        function defineKeyPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingKey = function() {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
        }
        function defineRefPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingRef = function() {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
        }
        var ReactElement = function(type, key, ref, self2, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self2
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function jsxDEV(type, config, maybeKey, source, self2) {
          {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            if (maybeKey !== void 0) {
              {
                checkKeyStringCoercion(maybeKey);
              }
              key = "" + maybeKey;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            if (hasValidRef(config)) {
              ref = config.ref;
              warnIfStringRefCannotBeAutoConverted(config, self2);
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(type, key, ref, self2, source, ReactCurrentOwner.current, props);
          }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function isValidElement(object) {
          {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            return "";
          }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
        }
        function validateExplicitKey(element, parentType) {
          {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          {
            if (typeof node !== "object") {
              return;
            }
            if (isArray2(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys2 = Object.keys(fragment.props);
            for (var i = 0; i < keys2.length; i++) {
              var key = keys2[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        var didWarnAboutKeySpread = {};
        function jsxWithValidation(type, props, key, isStaticChildren, source, self2) {
          {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum();
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray2(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
            var element = jsxDEV(type, props, key, source, self2);
            if (element == null) {
              return element;
            }
            if (validType) {
              var children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (isArray2(children)) {
                    for (var i = 0; i < children.length; i++) {
                      validateChildKeys(children[i], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            {
              if (hasOwnProperty.call(props, "key")) {
                var componentName = getComponentNameFromType(type);
                var keys2 = Object.keys(props).filter(function(k) {
                  return k !== "key";
                });
                var beforeExample = keys2.length > 0 ? "{key: someKey, " + keys2.join(": ..., ") + ": ...}" : "{key: someKey}";
                if (!didWarnAboutKeySpread[componentName + beforeExample]) {
                  var afterExample = keys2.length > 0 ? "{" + keys2.join(": ..., ") + ": ...}" : "{}";
                  error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);
                  didWarnAboutKeySpread[componentName + beforeExample] = true;
                }
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        }
        function jsxWithValidationStatic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, true);
          }
        }
        function jsxWithValidationDynamic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, false);
          }
        }
        var jsx = jsxWithValidationDynamic;
        var jsxs = jsxWithValidationStatic;
        reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
        reactJsxRuntime_development.jsx = jsx;
        reactJsxRuntime_development.jsxs = jsxs;
      })();
    }
    return reactJsxRuntime_development;
  }
  var hasRequiredJsxRuntime;
  function requireJsxRuntime() {
    if (hasRequiredJsxRuntime) return jsxRuntime.exports;
    hasRequiredJsxRuntime = 1;
    {
      jsxRuntime.exports = requireReactJsxRuntime_development();
    }
    return jsxRuntime.exports;
  }
  var jsxRuntimeExports = requireJsxRuntime();
  const createRemoteComponentRegistry = () => {
    const componentMetadataLookup = /* @__PURE__ */ new Map();
    const componentNameByComponentMap = /* @__PURE__ */ new Map();
    const registerComponent = (component, componentName, fragmentProps) => {
      componentNameByComponentMap.set(component, componentName);
      componentMetadataLookup.set(componentName, {
        fragmentPropsSet: new Set(fragmentProps),
        fragmentPropsArray: fragmentProps
      });
      return component;
    };
    return {
      getComponentName: (component) => {
        const componentName = componentNameByComponentMap.get(component);
        if (!componentName) {
          return null;
        }
        return componentName;
      },
      isAllowedComponentName: (componentName) => {
        return componentMetadataLookup.has(componentName);
      },
      isComponentFragmentProp: (componentName, propName) => {
        const componentMetadata = componentMetadataLookup.get(componentName);
        if (!componentMetadata) {
          return false;
        }
        return componentMetadata.fragmentPropsSet.has(propName);
      },
      getComponentFragmentPropNames: (componentName) => {
        const componentMetadata = componentMetadataLookup.get(componentName);
        if (!componentMetadata) {
          return [];
        }
        const { fragmentPropsArray } = componentMetadata;
        return fragmentPropsArray;
      },
      createAndRegisterRemoteReactComponent: (componentName, options = {}) => {
        const { fragmentProps = [] } = options;
        const remoteReactComponent = react.createRemoteReactComponent(componentName, {
          fragmentProps
        });
        return registerComponent(remoteReactComponent, componentName, fragmentProps);
      },
      createAndRegisterRemoteCompoundReactComponent: (componentName, options) => {
        const { fragmentProps = [] } = options;
        const RemoteComponentType = react.createRemoteReactComponent(componentName, {
          fragmentProps
        });
        const CompoundFunctionComponentType = typeof RemoteComponentType === "function" ? RemoteComponentType : (props) => jsxRuntimeExports.jsx(RemoteComponentType, { ...props });
        Object.assign(CompoundFunctionComponentType, options.compoundComponentProperties);
        return registerComponent(CompoundFunctionComponentType, componentName, fragmentProps);
      }
    };
  };
  const __hubSpotComponentRegistry = createRemoteComponentRegistry();
  const { createAndRegisterRemoteReactComponent, createAndRegisterRemoteCompoundReactComponent } = __hubSpotComponentRegistry;
  const Alert = createAndRegisterRemoteReactComponent("Alert");
  createAndRegisterRemoteReactComponent("Button", {
    fragmentProps: ["overlay"]
  });
  createAndRegisterRemoteReactComponent("ButtonRow");
  const Card = createAndRegisterRemoteReactComponent("Card");
  createAndRegisterRemoteReactComponent("DescriptionList");
  createAndRegisterRemoteReactComponent("DescriptionListItem");
  createAndRegisterRemoteReactComponent("Divider");
  createAndRegisterRemoteReactComponent("EmptyState");
  createAndRegisterRemoteReactComponent("ErrorState");
  createAndRegisterRemoteReactComponent("Form");
  const Heading = createAndRegisterRemoteReactComponent("Heading");
  createAndRegisterRemoteReactComponent("Image", {
    fragmentProps: ["overlay"]
  });
  createAndRegisterRemoteReactComponent("Input");
  createAndRegisterRemoteReactComponent("Link", {
    fragmentProps: ["overlay"]
  });
  createAndRegisterRemoteReactComponent("TextArea");
  createAndRegisterRemoteReactComponent("Textarea");
  const LoadingSpinner = createAndRegisterRemoteReactComponent("LoadingSpinner");
  createAndRegisterRemoteReactComponent("ProgressBar");
  createAndRegisterRemoteReactComponent("Select");
  createAndRegisterRemoteReactComponent("Tag", {
    fragmentProps: ["overlay"]
  });
  const Text = createAndRegisterRemoteReactComponent("Text");
  createAndRegisterRemoteReactComponent("Tile");
  createAndRegisterRemoteReactComponent("Stack");
  createAndRegisterRemoteReactComponent("ToggleGroup");
  createAndRegisterRemoteReactComponent("StatisticsItem");
  createAndRegisterRemoteReactComponent("Statistics");
  createAndRegisterRemoteReactComponent("StatisticsTrend");
  createAndRegisterRemoteReactComponent("Table");
  createAndRegisterRemoteReactComponent("TableFooter");
  createAndRegisterRemoteReactComponent("TableCell");
  createAndRegisterRemoteReactComponent("TableRow");
  createAndRegisterRemoteReactComponent("TableBody");
  createAndRegisterRemoteReactComponent("TableHeader");
  createAndRegisterRemoteReactComponent("TableHead");
  createAndRegisterRemoteReactComponent("NumberInput");
  createAndRegisterRemoteReactComponent("Box");
  createAndRegisterRemoteReactComponent("StepIndicator");
  createAndRegisterRemoteReactComponent("Accordion");
  createAndRegisterRemoteReactComponent("MultiSelect");
  const Flex = createAndRegisterRemoteReactComponent("Flex");
  createAndRegisterRemoteReactComponent("DateInput");
  createAndRegisterRemoteReactComponent("Checkbox");
  createAndRegisterRemoteReactComponent("RadioButton");
  createAndRegisterRemoteReactComponent("List");
  createAndRegisterRemoteReactComponent("Toggle");
  createAndRegisterRemoteCompoundReactComponent("Dropdown", {
    compoundComponentProperties: {
      /**
       * The `Dropdown.ButtonItem` component represents a single option within a `Dropdown` menu. Use this component as a child of the `Dropdown` component.
       *
       * **Links:**
       *
       * - {@link https://developers.hubspot.com/docs/reference/ui-components/standard-components/dropdown Docs}
       */
      ButtonItem: createAndRegisterRemoteReactComponent("DropdownButtonItem", {
        fragmentProps: ["overlay"]
      })
    }
  });
  createAndRegisterRemoteReactComponent("Panel");
  createAndRegisterRemoteReactComponent("PanelFooter");
  createAndRegisterRemoteReactComponent("PanelBody");
  createAndRegisterRemoteReactComponent("PanelSection");
  createAndRegisterRemoteReactComponent("StepperInput");
  createAndRegisterRemoteReactComponent("Modal");
  createAndRegisterRemoteReactComponent("ModalBody");
  createAndRegisterRemoteReactComponent("ModalFooter");
  createAndRegisterRemoteReactComponent("Icon");
  createAndRegisterRemoteReactComponent("StatusTag");
  createAndRegisterRemoteReactComponent("LoadingButton", {
    fragmentProps: ["overlay"]
  });
  createAndRegisterRemoteReactComponent("BarChart");
  createAndRegisterRemoteReactComponent("LineChart");
  createAndRegisterRemoteReactComponent("Tabs");
  createAndRegisterRemoteReactComponent("Tab");
  createAndRegisterRemoteReactComponent("Illustration");
  createAndRegisterRemoteReactComponent("Tooltip");
  createAndRegisterRemoteReactComponent("SearchInput");
  createAndRegisterRemoteReactComponent("TimeInput");
  createAndRegisterRemoteReactComponent("CurrencyInput");
  createAndRegisterRemoteReactComponent("Inline");
  createAndRegisterRemoteReactComponent("AutoGrid");
  createAndRegisterRemoteReactComponent("CrmPropertyList");
  createAndRegisterRemoteReactComponent("CrmAssociationTable");
  createAndRegisterRemoteReactComponent("CrmDataHighlight");
  createAndRegisterRemoteReactComponent("CrmReport");
  createAndRegisterRemoteReactComponent("CrmAssociationPivot");
  createAndRegisterRemoteReactComponent("CrmAssociationPropertyList");
  createAndRegisterRemoteReactComponent("CrmAssociationStageTracker");
  createAndRegisterRemoteReactComponent("CrmSimpleDeadline");
  createAndRegisterRemoteReactComponent("CrmStageTracker");
  createAndRegisterRemoteReactComponent("CrmStatistics");
  createAndRegisterRemoteReactComponent("CrmActionButton");
  createAndRegisterRemoteReactComponent("CrmActionLink");
  createAndRegisterRemoteReactComponent("CrmCardActions");
  createAndRegisterRemoteReactComponent("HeaderActions");
  createAndRegisterRemoteReactComponent("PrimaryHeaderActionButton", {
    fragmentProps: ["overlay"]
  });
  createAndRegisterRemoteReactComponent("SecondaryHeaderActionButton", {
    fragmentProps: ["overlay"]
  });
  createAndRegisterRemoteReactComponent("Iframe");
  createAndRegisterRemoteReactComponent("MediaObject", {
    fragmentProps: ["itemRight", "itemLeft"]
  });
  createAndRegisterRemoteReactComponent("Stack2");
  createAndRegisterRemoteReactComponent("Center");
  createAndRegisterRemoteReactComponent("Grid");
  createAndRegisterRemoteReactComponent("GridItem");
  createAndRegisterRemoteReactComponent("SettingsView");
  createAndRegisterRemoteReactComponent("ExpandableText");
  createAndRegisterRemoteReactComponent("Popover");
  createAndRegisterRemoteReactComponent("FileInput");
  const MocksContext = React2.createContext(null);
  MocksContext.Provider;
  //! moment.js
  //! version : 2.30.1
  //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
  //! license : MIT
  //! momentjs.com
  var hookCallback;
  function hooks() {
    return hookCallback.apply(null, arguments);
  }
  function setHookCallback(callback) {
    hookCallback = callback;
  }
  function isArray(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === "[object Array]";
  }
  function isObject(input) {
    return input != null && Object.prototype.toString.call(input) === "[object Object]";
  }
  function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }
  function isObjectEmpty(obj) {
    if (Object.getOwnPropertyNames) {
      return Object.getOwnPropertyNames(obj).length === 0;
    } else {
      var k;
      for (k in obj) {
        if (hasOwnProp(obj, k)) {
          return false;
        }
      }
      return true;
    }
  }
  function isUndefined(input) {
    return input === void 0;
  }
  function isNumber(input) {
    return typeof input === "number" || Object.prototype.toString.call(input) === "[object Number]";
  }
  function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === "[object Date]";
  }
  function map(arr, fn) {
    var res = [], i, arrLen = arr.length;
    for (i = 0; i < arrLen; ++i) {
      res.push(fn(arr[i], i));
    }
    return res;
  }
  function extend(a, b) {
    for (var i in b) {
      if (hasOwnProp(b, i)) {
        a[i] = b[i];
      }
    }
    if (hasOwnProp(b, "toString")) {
      a.toString = b.toString;
    }
    if (hasOwnProp(b, "valueOf")) {
      a.valueOf = b.valueOf;
    }
    return a;
  }
  function createUTC(input, format2, locale2, strict) {
    return createLocalOrUTC(input, format2, locale2, strict, true).utc();
  }
  function defaultParsingFlags() {
    return {
      empty: false,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: false,
      invalidEra: null,
      invalidMonth: null,
      invalidFormat: false,
      userInvalidated: false,
      iso: false,
      parsedDateParts: [],
      era: null,
      meridiem: null,
      rfc2822: false,
      weekdayMismatch: false
    };
  }
  function getParsingFlags(m) {
    if (m._pf == null) {
      m._pf = defaultParsingFlags();
    }
    return m._pf;
  }
  var some;
  if (Array.prototype.some) {
    some = Array.prototype.some;
  } else {
    some = function(fun) {
      var t = Object(this), len = t.length >>> 0, i;
      for (i = 0; i < len; i++) {
        if (i in t && fun.call(this, t[i], i, t)) {
          return true;
        }
      }
      return false;
    };
  }
  function isValid(m) {
    var flags = null, parsedParts = false, isNowValid = m._d && !isNaN(m._d.getTime());
    if (isNowValid) {
      flags = getParsingFlags(m);
      parsedParts = some.call(flags.parsedDateParts, function(i) {
        return i != null;
      });
      isNowValid = flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
      if (m._strict) {
        isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === void 0;
      }
    }
    if (Object.isFrozen == null || !Object.isFrozen(m)) {
      m._isValid = isNowValid;
    } else {
      return isNowValid;
    }
    return m._isValid;
  }
  function createInvalid(flags) {
    var m = createUTC(NaN);
    if (flags != null) {
      extend(getParsingFlags(m), flags);
    } else {
      getParsingFlags(m).userInvalidated = true;
    }
    return m;
  }
  var momentProperties = hooks.momentProperties = [], updateInProgress = false;
  function copyConfig(to2, from2) {
    var i, prop, val, momentPropertiesLen = momentProperties.length;
    if (!isUndefined(from2._isAMomentObject)) {
      to2._isAMomentObject = from2._isAMomentObject;
    }
    if (!isUndefined(from2._i)) {
      to2._i = from2._i;
    }
    if (!isUndefined(from2._f)) {
      to2._f = from2._f;
    }
    if (!isUndefined(from2._l)) {
      to2._l = from2._l;
    }
    if (!isUndefined(from2._strict)) {
      to2._strict = from2._strict;
    }
    if (!isUndefined(from2._tzm)) {
      to2._tzm = from2._tzm;
    }
    if (!isUndefined(from2._isUTC)) {
      to2._isUTC = from2._isUTC;
    }
    if (!isUndefined(from2._offset)) {
      to2._offset = from2._offset;
    }
    if (!isUndefined(from2._pf)) {
      to2._pf = getParsingFlags(from2);
    }
    if (!isUndefined(from2._locale)) {
      to2._locale = from2._locale;
    }
    if (momentPropertiesLen > 0) {
      for (i = 0; i < momentPropertiesLen; i++) {
        prop = momentProperties[i];
        val = from2[prop];
        if (!isUndefined(val)) {
          to2[prop] = val;
        }
      }
    }
    return to2;
  }
  function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (!this.isValid()) {
      this._d = /* @__PURE__ */ new Date(NaN);
    }
    if (updateInProgress === false) {
      updateInProgress = true;
      hooks.updateOffset(this);
      updateInProgress = false;
    }
  }
  function isMoment(obj) {
    return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
  }
  function warn(msg) {
    if (hooks.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
      console.warn("Deprecation warning: " + msg);
    }
  }
  function deprecate(msg, fn) {
    var firstTime = true;
    return extend(function() {
      if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(null, msg);
      }
      if (firstTime) {
        var args = [], arg, i, key, argLen = arguments.length;
        for (i = 0; i < argLen; i++) {
          arg = "";
          if (typeof arguments[i] === "object") {
            arg += "\n[" + i + "] ";
            for (key in arguments[0]) {
              if (hasOwnProp(arguments[0], key)) {
                arg += key + ": " + arguments[0][key] + ", ";
              }
            }
            arg = arg.slice(0, -2);
          } else {
            arg = arguments[i];
          }
          args.push(arg);
        }
        warn(
          msg + "\nArguments: " + Array.prototype.slice.call(args).join("") + "\n" + new Error().stack
        );
        firstTime = false;
      }
      return fn.apply(this, arguments);
    }, fn);
  }
  var deprecations = {};
  function deprecateSimple(name, msg) {
    if (hooks.deprecationHandler != null) {
      hooks.deprecationHandler(name, msg);
    }
    if (!deprecations[name]) {
      warn(msg);
      deprecations[name] = true;
    }
  }
  hooks.suppressDeprecationWarnings = false;
  hooks.deprecationHandler = null;
  function isFunction(input) {
    return typeof Function !== "undefined" && input instanceof Function || Object.prototype.toString.call(input) === "[object Function]";
  }
  function set(config) {
    var prop, i;
    for (i in config) {
      if (hasOwnProp(config, i)) {
        prop = config[i];
        if (isFunction(prop)) {
          this[i] = prop;
        } else {
          this["_" + i] = prop;
        }
      }
    }
    this._config = config;
    this._dayOfMonthOrdinalParseLenient = new RegExp(
      (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
    );
  }
  function mergeConfigs(parentConfig, childConfig) {
    var res = extend({}, parentConfig), prop;
    for (prop in childConfig) {
      if (hasOwnProp(childConfig, prop)) {
        if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
          res[prop] = {};
          extend(res[prop], parentConfig[prop]);
          extend(res[prop], childConfig[prop]);
        } else if (childConfig[prop] != null) {
          res[prop] = childConfig[prop];
        } else {
          delete res[prop];
        }
      }
    }
    for (prop in parentConfig) {
      if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
        res[prop] = extend({}, res[prop]);
      }
    }
    return res;
  }
  function Locale(config) {
    if (config != null) {
      this.set(config);
    }
  }
  var keys;
  if (Object.keys) {
    keys = Object.keys;
  } else {
    keys = function(obj) {
      var i, res = [];
      for (i in obj) {
        if (hasOwnProp(obj, i)) {
          res.push(i);
        }
      }
      return res;
    };
  }
  var defaultCalendar = {
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    nextWeek: "dddd [at] LT",
    lastDay: "[Yesterday at] LT",
    lastWeek: "[Last] dddd [at] LT",
    sameElse: "L"
  };
  function calendar(key, mom, now2) {
    var output = this._calendar[key] || this._calendar["sameElse"];
    return isFunction(output) ? output.call(mom, now2) : output;
  }
  function zeroFill(number, targetLength, forceSign) {
    var absNumber = "" + Math.abs(number), zerosToFill = targetLength - absNumber.length, sign2 = number >= 0;
    return (sign2 ? forceSign ? "+" : "" : "-") + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
  }
  var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, formatFunctions = {}, formatTokenFunctions = {};
  function addFormatToken(token2, padded, ordinal2, callback) {
    var func = callback;
    if (typeof callback === "string") {
      func = function() {
        return this[callback]();
      };
    }
    if (token2) {
      formatTokenFunctions[token2] = func;
    }
    if (padded) {
      formatTokenFunctions[padded[0]] = function() {
        return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
      };
    }
    if (ordinal2) {
      formatTokenFunctions[ordinal2] = function() {
        return this.localeData().ordinal(
          func.apply(this, arguments),
          token2
        );
      };
    }
  }
  function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
      return input.replace(/^\[|\]$/g, "");
    }
    return input.replace(/\\/g, "");
  }
  function makeFormatFunction(format2) {
    var array = format2.match(formattingTokens), i, length;
    for (i = 0, length = array.length; i < length; i++) {
      if (formatTokenFunctions[array[i]]) {
        array[i] = formatTokenFunctions[array[i]];
      } else {
        array[i] = removeFormattingTokens(array[i]);
      }
    }
    return function(mom) {
      var output = "", i2;
      for (i2 = 0; i2 < length; i2++) {
        output += isFunction(array[i2]) ? array[i2].call(mom, format2) : array[i2];
      }
      return output;
    };
  }
  function formatMoment(m, format2) {
    if (!m.isValid()) {
      return m.localeData().invalidDate();
    }
    format2 = expandFormat(format2, m.localeData());
    formatFunctions[format2] = formatFunctions[format2] || makeFormatFunction(format2);
    return formatFunctions[format2](m);
  }
  function expandFormat(format2, locale2) {
    var i = 5;
    function replaceLongDateFormatTokens(input) {
      return locale2.longDateFormat(input) || input;
    }
    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format2)) {
      format2 = format2.replace(
        localFormattingTokens,
        replaceLongDateFormatTokens
      );
      localFormattingTokens.lastIndex = 0;
      i -= 1;
    }
    return format2;
  }
  var defaultLongDateFormat = {
    LTS: "h:mm:ss A",
    LT: "h:mm A",
    L: "MM/DD/YYYY",
    LL: "MMMM D, YYYY",
    LLL: "MMMM D, YYYY h:mm A",
    LLLL: "dddd, MMMM D, YYYY h:mm A"
  };
  function longDateFormat(key) {
    var format2 = this._longDateFormat[key], formatUpper = this._longDateFormat[key.toUpperCase()];
    if (format2 || !formatUpper) {
      return format2;
    }
    this._longDateFormat[key] = formatUpper.match(formattingTokens).map(function(tok) {
      if (tok === "MMMM" || tok === "MM" || tok === "DD" || tok === "dddd") {
        return tok.slice(1);
      }
      return tok;
    }).join("");
    return this._longDateFormat[key];
  }
  var defaultInvalidDate = "Invalid date";
  function invalidDate() {
    return this._invalidDate;
  }
  var defaultOrdinal = "%d", defaultDayOfMonthOrdinalParse = /\d{1,2}/;
  function ordinal(number) {
    return this._ordinal.replace("%d", number);
  }
  var defaultRelativeTime = {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    ss: "%d seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    w: "a week",
    ww: "%d weeks",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years"
  };
  function relativeTime(number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
  }
  function pastFuture(diff2, output) {
    var format2 = this._relativeTime[diff2 > 0 ? "future" : "past"];
    return isFunction(format2) ? format2(output) : format2.replace(/%s/i, output);
  }
  var aliases = {
    D: "date",
    dates: "date",
    date: "date",
    d: "day",
    days: "day",
    day: "day",
    e: "weekday",
    weekdays: "weekday",
    weekday: "weekday",
    E: "isoWeekday",
    isoweekdays: "isoWeekday",
    isoweekday: "isoWeekday",
    DDD: "dayOfYear",
    dayofyears: "dayOfYear",
    dayofyear: "dayOfYear",
    h: "hour",
    hours: "hour",
    hour: "hour",
    ms: "millisecond",
    milliseconds: "millisecond",
    millisecond: "millisecond",
    m: "minute",
    minutes: "minute",
    minute: "minute",
    M: "month",
    months: "month",
    month: "month",
    Q: "quarter",
    quarters: "quarter",
    quarter: "quarter",
    s: "second",
    seconds: "second",
    second: "second",
    gg: "weekYear",
    weekyears: "weekYear",
    weekyear: "weekYear",
    GG: "isoWeekYear",
    isoweekyears: "isoWeekYear",
    isoweekyear: "isoWeekYear",
    w: "week",
    weeks: "week",
    week: "week",
    W: "isoWeek",
    isoweeks: "isoWeek",
    isoweek: "isoWeek",
    y: "year",
    years: "year",
    year: "year"
  };
  function normalizeUnits(units) {
    return typeof units === "string" ? aliases[units] || aliases[units.toLowerCase()] : void 0;
  }
  function normalizeObjectUnits(inputObject) {
    var normalizedInput = {}, normalizedProp, prop;
    for (prop in inputObject) {
      if (hasOwnProp(inputObject, prop)) {
        normalizedProp = normalizeUnits(prop);
        if (normalizedProp) {
          normalizedInput[normalizedProp] = inputObject[prop];
        }
      }
    }
    return normalizedInput;
  }
  var priorities = {
    date: 9,
    day: 11,
    weekday: 11,
    isoWeekday: 11,
    dayOfYear: 4,
    hour: 13,
    millisecond: 16,
    minute: 14,
    month: 8,
    quarter: 7,
    second: 15,
    weekYear: 1,
    isoWeekYear: 1,
    week: 5,
    isoWeek: 5,
    year: 1
  };
  function getPrioritizedUnits(unitsObj) {
    var units = [], u;
    for (u in unitsObj) {
      if (hasOwnProp(unitsObj, u)) {
        units.push({ unit: u, priority: priorities[u] });
      }
    }
    units.sort(function(a, b) {
      return a.priority - b.priority;
    });
    return units;
  }
  var match1 = /\d/, match2 = /\d\d/, match3 = /\d{3}/, match4 = /\d{4}/, match6 = /[+-]?\d{6}/, match1to2 = /\d\d?/, match3to4 = /\d\d\d\d?/, match5to6 = /\d\d\d\d\d\d?/, match1to3 = /\d{1,3}/, match1to4 = /\d{1,4}/, match1to6 = /[+-]?\d{1,6}/, matchUnsigned = /\d+/, matchSigned = /[+-]?\d+/, matchOffset = /Z|[+-]\d\d:?\d\d/gi, matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, match1to2NoLeadingZero = /^[1-9]\d?/, match1to2HasZero = /^([1-9]\d|\d)/, regexes;
  regexes = {};
  function addRegexToken(token2, regex, strictRegex) {
    regexes[token2] = isFunction(regex) ? regex : function(isStrict, localeData2) {
      return isStrict && strictRegex ? strictRegex : regex;
    };
  }
  function getParseRegexForToken(token2, config) {
    if (!hasOwnProp(regexes, token2)) {
      return new RegExp(unescapeFormat(token2));
    }
    return regexes[token2](config._strict, config._locale);
  }
  function unescapeFormat(s) {
    return regexEscape(
      s.replace("\\", "").replace(
        /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
        function(matched, p1, p2, p3, p4) {
          return p1 || p2 || p3 || p4;
        }
      )
    );
  }
  function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }
  function absFloor(number) {
    if (number < 0) {
      return Math.ceil(number) || 0;
    } else {
      return Math.floor(number);
    }
  }
  function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion, value = 0;
    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
      value = absFloor(coercedNumber);
    }
    return value;
  }
  var tokens = {};
  function addParseToken(token2, callback) {
    var i, func = callback, tokenLen;
    if (typeof token2 === "string") {
      token2 = [token2];
    }
    if (isNumber(callback)) {
      func = function(input, array) {
        array[callback] = toInt(input);
      };
    }
    tokenLen = token2.length;
    for (i = 0; i < tokenLen; i++) {
      tokens[token2[i]] = func;
    }
  }
  function addWeekParseToken(token2, callback) {
    addParseToken(token2, function(input, array, config, token3) {
      config._w = config._w || {};
      callback(input, config._w, config, token3);
    });
  }
  function addTimeToArrayFromToken(token2, input, config) {
    if (input != null && hasOwnProp(tokens, token2)) {
      tokens[token2](input, config._a, config, token2);
    }
  }
  function isLeapYear(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
  }
  var YEAR = 0, MONTH = 1, DATE = 2, HOUR = 3, MINUTE = 4, SECOND = 5, MILLISECOND = 6, WEEK = 7, WEEKDAY = 8;
  addFormatToken("Y", 0, 0, function() {
    var y = this.year();
    return y <= 9999 ? zeroFill(y, 4) : "+" + y;
  });
  addFormatToken(0, ["YY", 2], 0, function() {
    return this.year() % 100;
  });
  addFormatToken(0, ["YYYY", 4], 0, "year");
  addFormatToken(0, ["YYYYY", 5], 0, "year");
  addFormatToken(0, ["YYYYYY", 6, true], 0, "year");
  addRegexToken("Y", matchSigned);
  addRegexToken("YY", match1to2, match2);
  addRegexToken("YYYY", match1to4, match4);
  addRegexToken("YYYYY", match1to6, match6);
  addRegexToken("YYYYYY", match1to6, match6);
  addParseToken(["YYYYY", "YYYYYY"], YEAR);
  addParseToken("YYYY", function(input, array) {
    array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
  });
  addParseToken("YY", function(input, array) {
    array[YEAR] = hooks.parseTwoDigitYear(input);
  });
  addParseToken("Y", function(input, array) {
    array[YEAR] = parseInt(input, 10);
  });
  function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
  }
  hooks.parseTwoDigitYear = function(input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2e3);
  };
  var getSetYear = makeGetSet("FullYear", true);
  function getIsLeapYear() {
    return isLeapYear(this.year());
  }
  function makeGetSet(unit, keepTime) {
    return function(value) {
      if (value != null) {
        set$1(this, unit, value);
        hooks.updateOffset(this, keepTime);
        return this;
      } else {
        return get(this, unit);
      }
    };
  }
  function get(mom, unit) {
    if (!mom.isValid()) {
      return NaN;
    }
    var d = mom._d, isUTC = mom._isUTC;
    switch (unit) {
      case "Milliseconds":
        return isUTC ? d.getUTCMilliseconds() : d.getMilliseconds();
      case "Seconds":
        return isUTC ? d.getUTCSeconds() : d.getSeconds();
      case "Minutes":
        return isUTC ? d.getUTCMinutes() : d.getMinutes();
      case "Hours":
        return isUTC ? d.getUTCHours() : d.getHours();
      case "Date":
        return isUTC ? d.getUTCDate() : d.getDate();
      case "Day":
        return isUTC ? d.getUTCDay() : d.getDay();
      case "Month":
        return isUTC ? d.getUTCMonth() : d.getMonth();
      case "FullYear":
        return isUTC ? d.getUTCFullYear() : d.getFullYear();
      default:
        return NaN;
    }
  }
  function set$1(mom, unit, value) {
    var d, isUTC, year, month, date;
    if (!mom.isValid() || isNaN(value)) {
      return;
    }
    d = mom._d;
    isUTC = mom._isUTC;
    switch (unit) {
      case "Milliseconds":
        return void (isUTC ? d.setUTCMilliseconds(value) : d.setMilliseconds(value));
      case "Seconds":
        return void (isUTC ? d.setUTCSeconds(value) : d.setSeconds(value));
      case "Minutes":
        return void (isUTC ? d.setUTCMinutes(value) : d.setMinutes(value));
      case "Hours":
        return void (isUTC ? d.setUTCHours(value) : d.setHours(value));
      case "Date":
        return void (isUTC ? d.setUTCDate(value) : d.setDate(value));
      // case 'Day': // Not real
      //    return void (isUTC ? d.setUTCDay(value) : d.setDay(value));
      // case 'Month': // Not used because we need to pass two variables
      //     return void (isUTC ? d.setUTCMonth(value) : d.setMonth(value));
      case "FullYear":
        break;
      // See below ...
      default:
        return;
    }
    year = value;
    month = mom.month();
    date = mom.date();
    date = date === 29 && month === 1 && !isLeapYear(year) ? 28 : date;
    void (isUTC ? d.setUTCFullYear(year, month, date) : d.setFullYear(year, month, date));
  }
  function stringGet(units) {
    units = normalizeUnits(units);
    if (isFunction(this[units])) {
      return this[units]();
    }
    return this;
  }
  function stringSet(units, value) {
    if (typeof units === "object") {
      units = normalizeObjectUnits(units);
      var prioritized = getPrioritizedUnits(units), i, prioritizedLen = prioritized.length;
      for (i = 0; i < prioritizedLen; i++) {
        this[prioritized[i].unit](units[prioritized[i].unit]);
      }
    } else {
      units = normalizeUnits(units);
      if (isFunction(this[units])) {
        return this[units](value);
      }
    }
    return this;
  }
  function mod(n, x) {
    return (n % x + x) % x;
  }
  var indexOf;
  if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
  } else {
    indexOf = function(o) {
      var i;
      for (i = 0; i < this.length; ++i) {
        if (this[i] === o) {
          return i;
        }
      }
      return -1;
    };
  }
  function daysInMonth(year, month) {
    if (isNaN(year) || isNaN(month)) {
      return NaN;
    }
    var modMonth = mod(month, 12);
    year += (month - modMonth) / 12;
    return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
  }
  addFormatToken("M", ["MM", 2], "Mo", function() {
    return this.month() + 1;
  });
  addFormatToken("MMM", 0, 0, function(format2) {
    return this.localeData().monthsShort(this, format2);
  });
  addFormatToken("MMMM", 0, 0, function(format2) {
    return this.localeData().months(this, format2);
  });
  addRegexToken("M", match1to2, match1to2NoLeadingZero);
  addRegexToken("MM", match1to2, match2);
  addRegexToken("MMM", function(isStrict, locale2) {
    return locale2.monthsShortRegex(isStrict);
  });
  addRegexToken("MMMM", function(isStrict, locale2) {
    return locale2.monthsRegex(isStrict);
  });
  addParseToken(["M", "MM"], function(input, array) {
    array[MONTH] = toInt(input) - 1;
  });
  addParseToken(["MMM", "MMMM"], function(input, array, config, token2) {
    var month = config._locale.monthsParse(input, token2, config._strict);
    if (month != null) {
      array[MONTH] = month;
    } else {
      getParsingFlags(config).invalidMonth = input;
    }
  });
  var defaultLocaleMonths = "January_February_March_April_May_June_July_August_September_October_November_December".split(
    "_"
  ), defaultLocaleMonthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, defaultMonthsShortRegex = matchWord, defaultMonthsRegex = matchWord;
  function localeMonths(m, format2) {
    if (!m) {
      return isArray(this._months) ? this._months : this._months["standalone"];
    }
    return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format2) ? "format" : "standalone"][m.month()];
  }
  function localeMonthsShort(m, format2) {
    if (!m) {
      return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort["standalone"];
    }
    return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format2) ? "format" : "standalone"][m.month()];
  }
  function handleStrictParse(monthName, format2, strict) {
    var i, ii, mom, llc = monthName.toLocaleLowerCase();
    if (!this._monthsParse) {
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
      for (i = 0; i < 12; ++i) {
        mom = createUTC([2e3, i]);
        this._shortMonthsParse[i] = this.monthsShort(
          mom,
          ""
        ).toLocaleLowerCase();
        this._longMonthsParse[i] = this.months(mom, "").toLocaleLowerCase();
      }
    }
    if (strict) {
      if (format2 === "MMM") {
        ii = indexOf.call(this._shortMonthsParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._longMonthsParse, llc);
        return ii !== -1 ? ii : null;
      }
    } else {
      if (format2 === "MMM") {
        ii = indexOf.call(this._shortMonthsParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._longMonthsParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._longMonthsParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._shortMonthsParse, llc);
        return ii !== -1 ? ii : null;
      }
    }
  }
  function localeMonthsParse(monthName, format2, strict) {
    var i, mom, regex;
    if (this._monthsParseExact) {
      return handleStrictParse.call(this, monthName, format2, strict);
    }
    if (!this._monthsParse) {
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
    }
    for (i = 0; i < 12; i++) {
      mom = createUTC([2e3, i]);
      if (strict && !this._longMonthsParse[i]) {
        this._longMonthsParse[i] = new RegExp(
          "^" + this.months(mom, "").replace(".", "") + "$",
          "i"
        );
        this._shortMonthsParse[i] = new RegExp(
          "^" + this.monthsShort(mom, "").replace(".", "") + "$",
          "i"
        );
      }
      if (!strict && !this._monthsParse[i]) {
        regex = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, "");
        this._monthsParse[i] = new RegExp(regex.replace(".", ""), "i");
      }
      if (strict && format2 === "MMMM" && this._longMonthsParse[i].test(monthName)) {
        return i;
      } else if (strict && format2 === "MMM" && this._shortMonthsParse[i].test(monthName)) {
        return i;
      } else if (!strict && this._monthsParse[i].test(monthName)) {
        return i;
      }
    }
  }
  function setMonth(mom, value) {
    if (!mom.isValid()) {
      return mom;
    }
    if (typeof value === "string") {
      if (/^\d+$/.test(value)) {
        value = toInt(value);
      } else {
        value = mom.localeData().monthsParse(value);
        if (!isNumber(value)) {
          return mom;
        }
      }
    }
    var month = value, date = mom.date();
    date = date < 29 ? date : Math.min(date, daysInMonth(mom.year(), month));
    void (mom._isUTC ? mom._d.setUTCMonth(month, date) : mom._d.setMonth(month, date));
    return mom;
  }
  function getSetMonth(value) {
    if (value != null) {
      setMonth(this, value);
      hooks.updateOffset(this, true);
      return this;
    } else {
      return get(this, "Month");
    }
  }
  function getDaysInMonth() {
    return daysInMonth(this.year(), this.month());
  }
  function monthsShortRegex(isStrict) {
    if (this._monthsParseExact) {
      if (!hasOwnProp(this, "_monthsRegex")) {
        computeMonthsParse.call(this);
      }
      if (isStrict) {
        return this._monthsShortStrictRegex;
      } else {
        return this._monthsShortRegex;
      }
    } else {
      if (!hasOwnProp(this, "_monthsShortRegex")) {
        this._monthsShortRegex = defaultMonthsShortRegex;
      }
      return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
    }
  }
  function monthsRegex(isStrict) {
    if (this._monthsParseExact) {
      if (!hasOwnProp(this, "_monthsRegex")) {
        computeMonthsParse.call(this);
      }
      if (isStrict) {
        return this._monthsStrictRegex;
      } else {
        return this._monthsRegex;
      }
    } else {
      if (!hasOwnProp(this, "_monthsRegex")) {
        this._monthsRegex = defaultMonthsRegex;
      }
      return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
    }
  }
  function computeMonthsParse() {
    function cmpLenRev(a, b) {
      return b.length - a.length;
    }
    var shortPieces = [], longPieces = [], mixedPieces = [], i, mom, shortP, longP;
    for (i = 0; i < 12; i++) {
      mom = createUTC([2e3, i]);
      shortP = regexEscape(this.monthsShort(mom, ""));
      longP = regexEscape(this.months(mom, ""));
      shortPieces.push(shortP);
      longPieces.push(longP);
      mixedPieces.push(longP);
      mixedPieces.push(shortP);
    }
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    this._monthsRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp(
      "^(" + longPieces.join("|") + ")",
      "i"
    );
    this._monthsShortStrictRegex = new RegExp(
      "^(" + shortPieces.join("|") + ")",
      "i"
    );
  }
  function createDate(y, m, d, h, M, s, ms) {
    var date;
    if (y < 100 && y >= 0) {
      date = new Date(y + 400, m, d, h, M, s, ms);
      if (isFinite(date.getFullYear())) {
        date.setFullYear(y);
      }
    } else {
      date = new Date(y, m, d, h, M, s, ms);
    }
    return date;
  }
  function createUTCDate(y) {
    var date, args;
    if (y < 100 && y >= 0) {
      args = Array.prototype.slice.call(arguments);
      args[0] = y + 400;
      date = new Date(Date.UTC.apply(null, args));
      if (isFinite(date.getUTCFullYear())) {
        date.setUTCFullYear(y);
      }
    } else {
      date = new Date(Date.UTC.apply(null, arguments));
    }
    return date;
  }
  function firstWeekOffset(year, dow, doy) {
    var fwd = 7 + dow - doy, fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
    return -fwdlw + fwd - 1;
  }
  function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7, weekOffset = firstWeekOffset(year, dow, doy), dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset, resYear, resDayOfYear;
    if (dayOfYear <= 0) {
      resYear = year - 1;
      resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year)) {
      resYear = year + 1;
      resDayOfYear = dayOfYear - daysInYear(year);
    } else {
      resYear = year;
      resDayOfYear = dayOfYear;
    }
    return {
      year: resYear,
      dayOfYear: resDayOfYear
    };
  }
  function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy), week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1, resWeek, resYear;
    if (week < 1) {
      resYear = mom.year() - 1;
      resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
      resWeek = week - weeksInYear(mom.year(), dow, doy);
      resYear = mom.year() + 1;
    } else {
      resYear = mom.year();
      resWeek = week;
    }
    return {
      week: resWeek,
      year: resYear
    };
  }
  function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy), weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
  }
  addFormatToken("w", ["ww", 2], "wo", "week");
  addFormatToken("W", ["WW", 2], "Wo", "isoWeek");
  addRegexToken("w", match1to2, match1to2NoLeadingZero);
  addRegexToken("ww", match1to2, match2);
  addRegexToken("W", match1to2, match1to2NoLeadingZero);
  addRegexToken("WW", match1to2, match2);
  addWeekParseToken(
    ["w", "ww", "W", "WW"],
    function(input, week, config, token2) {
      week[token2.substr(0, 1)] = toInt(input);
    }
  );
  function localeWeek(mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
  }
  var defaultLocaleWeek = {
    dow: 0,
    // Sunday is the first day of the week.
    doy: 6
    // The week that contains Jan 6th is the first week of the year.
  };
  function localeFirstDayOfWeek() {
    return this._week.dow;
  }
  function localeFirstDayOfYear() {
    return this._week.doy;
  }
  function getSetWeek(input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, "d");
  }
  function getSetISOWeek(input) {
    var week = weekOfYear(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, "d");
  }
  addFormatToken("d", 0, "do", "day");
  addFormatToken("dd", 0, 0, function(format2) {
    return this.localeData().weekdaysMin(this, format2);
  });
  addFormatToken("ddd", 0, 0, function(format2) {
    return this.localeData().weekdaysShort(this, format2);
  });
  addFormatToken("dddd", 0, 0, function(format2) {
    return this.localeData().weekdays(this, format2);
  });
  addFormatToken("e", 0, 0, "weekday");
  addFormatToken("E", 0, 0, "isoWeekday");
  addRegexToken("d", match1to2);
  addRegexToken("e", match1to2);
  addRegexToken("E", match1to2);
  addRegexToken("dd", function(isStrict, locale2) {
    return locale2.weekdaysMinRegex(isStrict);
  });
  addRegexToken("ddd", function(isStrict, locale2) {
    return locale2.weekdaysShortRegex(isStrict);
  });
  addRegexToken("dddd", function(isStrict, locale2) {
    return locale2.weekdaysRegex(isStrict);
  });
  addWeekParseToken(["dd", "ddd", "dddd"], function(input, week, config, token2) {
    var weekday = config._locale.weekdaysParse(input, token2, config._strict);
    if (weekday != null) {
      week.d = weekday;
    } else {
      getParsingFlags(config).invalidWeekday = input;
    }
  });
  addWeekParseToken(["d", "e", "E"], function(input, week, config, token2) {
    week[token2] = toInt(input);
  });
  function parseWeekday(input, locale2) {
    if (typeof input !== "string") {
      return input;
    }
    if (!isNaN(input)) {
      return parseInt(input, 10);
    }
    input = locale2.weekdaysParse(input);
    if (typeof input === "number") {
      return input;
    }
    return null;
  }
  function parseIsoWeekday(input, locale2) {
    if (typeof input === "string") {
      return locale2.weekdaysParse(input) % 7 || 7;
    }
    return isNaN(input) ? null : input;
  }
  function shiftWeekdays(ws, n) {
    return ws.slice(n, 7).concat(ws.slice(0, n));
  }
  var defaultLocaleWeekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), defaultWeekdaysRegex = matchWord, defaultWeekdaysShortRegex = matchWord, defaultWeekdaysMinRegex = matchWord;
  function localeWeekdays(m, format2) {
    var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m && m !== true && this._weekdays.isFormat.test(format2) ? "format" : "standalone"];
    return m === true ? shiftWeekdays(weekdays, this._week.dow) : m ? weekdays[m.day()] : weekdays;
  }
  function localeWeekdaysShort(m) {
    return m === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
  }
  function localeWeekdaysMin(m) {
    return m === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
  }
  function handleStrictParse$1(weekdayName, format2, strict) {
    var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._minWeekdaysParse = [];
      for (i = 0; i < 7; ++i) {
        mom = createUTC([2e3, 1]).day(i);
        this._minWeekdaysParse[i] = this.weekdaysMin(
          mom,
          ""
        ).toLocaleLowerCase();
        this._shortWeekdaysParse[i] = this.weekdaysShort(
          mom,
          ""
        ).toLocaleLowerCase();
        this._weekdaysParse[i] = this.weekdays(mom, "").toLocaleLowerCase();
      }
    }
    if (strict) {
      if (format2 === "dddd") {
        ii = indexOf.call(this._weekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else if (format2 === "ddd") {
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      }
    } else {
      if (format2 === "dddd") {
        ii = indexOf.call(this._weekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else if (format2 === "ddd") {
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._weekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._minWeekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._weekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      }
    }
  }
  function localeWeekdaysParse(weekdayName, format2, strict) {
    var i, mom, regex;
    if (this._weekdaysParseExact) {
      return handleStrictParse$1.call(this, weekdayName, format2, strict);
    }
    if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._minWeekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._fullWeekdaysParse = [];
    }
    for (i = 0; i < 7; i++) {
      mom = createUTC([2e3, 1]).day(i);
      if (strict && !this._fullWeekdaysParse[i]) {
        this._fullWeekdaysParse[i] = new RegExp(
          "^" + this.weekdays(mom, "").replace(".", "\\.?") + "$",
          "i"
        );
        this._shortWeekdaysParse[i] = new RegExp(
          "^" + this.weekdaysShort(mom, "").replace(".", "\\.?") + "$",
          "i"
        );
        this._minWeekdaysParse[i] = new RegExp(
          "^" + this.weekdaysMin(mom, "").replace(".", "\\.?") + "$",
          "i"
        );
      }
      if (!this._weekdaysParse[i]) {
        regex = "^" + this.weekdays(mom, "") + "|^" + this.weekdaysShort(mom, "") + "|^" + this.weekdaysMin(mom, "");
        this._weekdaysParse[i] = new RegExp(regex.replace(".", ""), "i");
      }
      if (strict && format2 === "dddd" && this._fullWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (strict && format2 === "ddd" && this._shortWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (strict && format2 === "dd" && this._minWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
        return i;
      }
    }
  }
  function getSetDayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    var day = get(this, "Day");
    if (input != null) {
      input = parseWeekday(input, this.localeData());
      return this.add(input - day, "d");
    } else {
      return day;
    }
  }
  function getSetLocaleDayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, "d");
  }
  function getSetISODayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    if (input != null) {
      var weekday = parseIsoWeekday(input, this.localeData());
      return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
      return this.day() || 7;
    }
  }
  function weekdaysRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, "_weekdaysRegex")) {
        computeWeekdaysParse.call(this);
      }
      if (isStrict) {
        return this._weekdaysStrictRegex;
      } else {
        return this._weekdaysRegex;
      }
    } else {
      if (!hasOwnProp(this, "_weekdaysRegex")) {
        this._weekdaysRegex = defaultWeekdaysRegex;
      }
      return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
    }
  }
  function weekdaysShortRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, "_weekdaysRegex")) {
        computeWeekdaysParse.call(this);
      }
      if (isStrict) {
        return this._weekdaysShortStrictRegex;
      } else {
        return this._weekdaysShortRegex;
      }
    } else {
      if (!hasOwnProp(this, "_weekdaysShortRegex")) {
        this._weekdaysShortRegex = defaultWeekdaysShortRegex;
      }
      return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
    }
  }
  function weekdaysMinRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, "_weekdaysRegex")) {
        computeWeekdaysParse.call(this);
      }
      if (isStrict) {
        return this._weekdaysMinStrictRegex;
      } else {
        return this._weekdaysMinRegex;
      }
    } else {
      if (!hasOwnProp(this, "_weekdaysMinRegex")) {
        this._weekdaysMinRegex = defaultWeekdaysMinRegex;
      }
      return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
    }
  }
  function computeWeekdaysParse() {
    function cmpLenRev(a, b) {
      return b.length - a.length;
    }
    var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [], i, mom, minp, shortp, longp;
    for (i = 0; i < 7; i++) {
      mom = createUTC([2e3, 1]).day(i);
      minp = regexEscape(this.weekdaysMin(mom, ""));
      shortp = regexEscape(this.weekdaysShort(mom, ""));
      longp = regexEscape(this.weekdays(mom, ""));
      minPieces.push(minp);
      shortPieces.push(shortp);
      longPieces.push(longp);
      mixedPieces.push(minp);
      mixedPieces.push(shortp);
      mixedPieces.push(longp);
    }
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    this._weekdaysRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;
    this._weekdaysStrictRegex = new RegExp(
      "^(" + longPieces.join("|") + ")",
      "i"
    );
    this._weekdaysShortStrictRegex = new RegExp(
      "^(" + shortPieces.join("|") + ")",
      "i"
    );
    this._weekdaysMinStrictRegex = new RegExp(
      "^(" + minPieces.join("|") + ")",
      "i"
    );
  }
  function hFormat() {
    return this.hours() % 12 || 12;
  }
  function kFormat() {
    return this.hours() || 24;
  }
  addFormatToken("H", ["HH", 2], 0, "hour");
  addFormatToken("h", ["hh", 2], 0, hFormat);
  addFormatToken("k", ["kk", 2], 0, kFormat);
  addFormatToken("hmm", 0, 0, function() {
    return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2);
  });
  addFormatToken("hmmss", 0, 0, function() {
    return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
  });
  addFormatToken("Hmm", 0, 0, function() {
    return "" + this.hours() + zeroFill(this.minutes(), 2);
  });
  addFormatToken("Hmmss", 0, 0, function() {
    return "" + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
  });
  function meridiem(token2, lowercase) {
    addFormatToken(token2, 0, 0, function() {
      return this.localeData().meridiem(
        this.hours(),
        this.minutes(),
        lowercase
      );
    });
  }
  meridiem("a", true);
  meridiem("A", false);
  function matchMeridiem(isStrict, locale2) {
    return locale2._meridiemParse;
  }
  addRegexToken("a", matchMeridiem);
  addRegexToken("A", matchMeridiem);
  addRegexToken("H", match1to2, match1to2HasZero);
  addRegexToken("h", match1to2, match1to2NoLeadingZero);
  addRegexToken("k", match1to2, match1to2NoLeadingZero);
  addRegexToken("HH", match1to2, match2);
  addRegexToken("hh", match1to2, match2);
  addRegexToken("kk", match1to2, match2);
  addRegexToken("hmm", match3to4);
  addRegexToken("hmmss", match5to6);
  addRegexToken("Hmm", match3to4);
  addRegexToken("Hmmss", match5to6);
  addParseToken(["H", "HH"], HOUR);
  addParseToken(["k", "kk"], function(input, array, config) {
    var kInput = toInt(input);
    array[HOUR] = kInput === 24 ? 0 : kInput;
  });
  addParseToken(["a", "A"], function(input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
  });
  addParseToken(["h", "hh"], function(input, array, config) {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
  });
  addParseToken("hmm", function(input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
  });
  addParseToken("hmmss", function(input, array, config) {
    var pos1 = input.length - 4, pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
  });
  addParseToken("Hmm", function(input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
  });
  addParseToken("Hmmss", function(input, array, config) {
    var pos1 = input.length - 4, pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
  });
  function localeIsPM(input) {
    return (input + "").toLowerCase().charAt(0) === "p";
  }
  var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i, getSetHour = makeGetSet("Hours", true);
  function localeMeridiem(hours2, minutes2, isLower) {
    if (hours2 > 11) {
      return isLower ? "pm" : "PM";
    } else {
      return isLower ? "am" : "AM";
    }
  }
  var baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
    relativeTime: defaultRelativeTime,
    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,
    week: defaultLocaleWeek,
    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,
    meridiemParse: defaultLocaleMeridiemParse
  };
  var locales = {}, localeFamilies = {}, globalLocale;
  function commonPrefix(arr1, arr2) {
    var i, minl = Math.min(arr1.length, arr2.length);
    for (i = 0; i < minl; i += 1) {
      if (arr1[i] !== arr2[i]) {
        return i;
      }
    }
    return minl;
  }
  function normalizeLocale(key) {
    return key ? key.toLowerCase().replace("_", "-") : key;
  }
  function chooseLocale(names) {
    var i = 0, j, next, locale2, split;
    while (i < names.length) {
      split = normalizeLocale(names[i]).split("-");
      j = split.length;
      next = normalizeLocale(names[i + 1]);
      next = next ? next.split("-") : null;
      while (j > 0) {
        locale2 = loadLocale(split.slice(0, j).join("-"));
        if (locale2) {
          return locale2;
        }
        if (next && next.length >= j && commonPrefix(split, next) >= j - 1) {
          break;
        }
        j--;
      }
      i++;
    }
    return globalLocale;
  }
  function isLocaleNameSane(name) {
    return !!(name && name.match("^[^/\\\\]*$"));
  }
  function loadLocale(name) {
    var oldLocale = null, aliasedRequire;
    if (locales[name] === void 0 && typeof module !== "undefined" && module && module.exports && isLocaleNameSane(name)) {
      try {
        oldLocale = globalLocale._abbr;
        aliasedRequire = require;
        aliasedRequire("./locale/" + name);
        getSetGlobalLocale(oldLocale);
      } catch (e) {
        locales[name] = null;
      }
    }
    return locales[name];
  }
  function getSetGlobalLocale(key, values) {
    var data;
    if (key) {
      if (isUndefined(values)) {
        data = getLocale(key);
      } else {
        data = defineLocale(key, values);
      }
      if (data) {
        globalLocale = data;
      } else {
        if (typeof console !== "undefined" && console.warn) {
          console.warn(
            "Locale " + key + " not found. Did you forget to load it?"
          );
        }
      }
    }
    return globalLocale._abbr;
  }
  function defineLocale(name, config) {
    if (config !== null) {
      var locale2, parentConfig = baseConfig;
      config.abbr = name;
      if (locales[name] != null) {
        deprecateSimple(
          "defineLocaleOverride",
          "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
        );
        parentConfig = locales[name]._config;
      } else if (config.parentLocale != null) {
        if (locales[config.parentLocale] != null) {
          parentConfig = locales[config.parentLocale]._config;
        } else {
          locale2 = loadLocale(config.parentLocale);
          if (locale2 != null) {
            parentConfig = locale2._config;
          } else {
            if (!localeFamilies[config.parentLocale]) {
              localeFamilies[config.parentLocale] = [];
            }
            localeFamilies[config.parentLocale].push({
              name,
              config
            });
            return null;
          }
        }
      }
      locales[name] = new Locale(mergeConfigs(parentConfig, config));
      if (localeFamilies[name]) {
        localeFamilies[name].forEach(function(x) {
          defineLocale(x.name, x.config);
        });
      }
      getSetGlobalLocale(name);
      return locales[name];
    } else {
      delete locales[name];
      return null;
    }
  }
  function updateLocale(name, config) {
    if (config != null) {
      var locale2, tmpLocale, parentConfig = baseConfig;
      if (locales[name] != null && locales[name].parentLocale != null) {
        locales[name].set(mergeConfigs(locales[name]._config, config));
      } else {
        tmpLocale = loadLocale(name);
        if (tmpLocale != null) {
          parentConfig = tmpLocale._config;
        }
        config = mergeConfigs(parentConfig, config);
        if (tmpLocale == null) {
          config.abbr = name;
        }
        locale2 = new Locale(config);
        locale2.parentLocale = locales[name];
        locales[name] = locale2;
      }
      getSetGlobalLocale(name);
    } else {
      if (locales[name] != null) {
        if (locales[name].parentLocale != null) {
          locales[name] = locales[name].parentLocale;
          if (name === getSetGlobalLocale()) {
            getSetGlobalLocale(name);
          }
        } else if (locales[name] != null) {
          delete locales[name];
        }
      }
    }
    return locales[name];
  }
  function getLocale(key) {
    var locale2;
    if (key && key._locale && key._locale._abbr) {
      key = key._locale._abbr;
    }
    if (!key) {
      return globalLocale;
    }
    if (!isArray(key)) {
      locale2 = loadLocale(key);
      if (locale2) {
        return locale2;
      }
      key = [key];
    }
    return chooseLocale(key);
  }
  function listLocales() {
    return keys(locales);
  }
  function checkOverflow(m) {
    var overflow, a = m._a;
    if (a && getParsingFlags(m).overflow === -2) {
      overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
      if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
        overflow = DATE;
      }
      if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
        overflow = WEEK;
      }
      if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
        overflow = WEEKDAY;
      }
      getParsingFlags(m).overflow = overflow;
    }
    return m;
  }
  var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tzRegex = /Z|[+-]\d\d(?::?\d\d)?/, isoDates = [
    ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
    ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
    ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
    ["GGGG-[W]WW", /\d{4}-W\d\d/, false],
    ["YYYY-DDD", /\d{4}-\d{3}/],
    ["YYYY-MM", /\d{4}-\d\d/, false],
    ["YYYYYYMMDD", /[+-]\d{10}/],
    ["YYYYMMDD", /\d{8}/],
    ["GGGG[W]WWE", /\d{4}W\d{3}/],
    ["GGGG[W]WW", /\d{4}W\d{2}/, false],
    ["YYYYDDD", /\d{7}/],
    ["YYYYMM", /\d{6}/, false],
    ["YYYY", /\d{4}/, false]
  ], isoTimes = [
    ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
    ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
    ["HH:mm:ss", /\d\d:\d\d:\d\d/],
    ["HH:mm", /\d\d:\d\d/],
    ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
    ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
    ["HHmmss", /\d\d\d\d\d\d/],
    ["HHmm", /\d\d\d\d/],
    ["HH", /\d\d/]
  ], aspNetJsonRegex = /^\/?Date\((-?\d+)/i, rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, obsOffsets = {
    UT: 0,
    GMT: 0,
    EDT: -4 * 60,
    EST: -5 * 60,
    CDT: -5 * 60,
    CST: -6 * 60,
    MDT: -6 * 60,
    MST: -7 * 60,
    PDT: -7 * 60,
    PST: -8 * 60
  };
  function configFromISO(config) {
    var i, l, string = config._i, match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string), allowTime, dateFormat, timeFormat, tzFormat, isoDatesLen = isoDates.length, isoTimesLen = isoTimes.length;
    if (match) {
      getParsingFlags(config).iso = true;
      for (i = 0, l = isoDatesLen; i < l; i++) {
        if (isoDates[i][1].exec(match[1])) {
          dateFormat = isoDates[i][0];
          allowTime = isoDates[i][2] !== false;
          break;
        }
      }
      if (dateFormat == null) {
        config._isValid = false;
        return;
      }
      if (match[3]) {
        for (i = 0, l = isoTimesLen; i < l; i++) {
          if (isoTimes[i][1].exec(match[3])) {
            timeFormat = (match[2] || " ") + isoTimes[i][0];
            break;
          }
        }
        if (timeFormat == null) {
          config._isValid = false;
          return;
        }
      }
      if (!allowTime && timeFormat != null) {
        config._isValid = false;
        return;
      }
      if (match[4]) {
        if (tzRegex.exec(match[4])) {
          tzFormat = "Z";
        } else {
          config._isValid = false;
          return;
        }
      }
      config._f = dateFormat + (timeFormat || "") + (tzFormat || "");
      configFromStringAndFormat(config);
    } else {
      config._isValid = false;
    }
  }
  function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
    var result = [
      untruncateYear(yearStr),
      defaultLocaleMonthsShort.indexOf(monthStr),
      parseInt(dayStr, 10),
      parseInt(hourStr, 10),
      parseInt(minuteStr, 10)
    ];
    if (secondStr) {
      result.push(parseInt(secondStr, 10));
    }
    return result;
  }
  function untruncateYear(yearStr) {
    var year = parseInt(yearStr, 10);
    if (year <= 49) {
      return 2e3 + year;
    } else if (year <= 999) {
      return 1900 + year;
    }
    return year;
  }
  function preprocessRFC2822(s) {
    return s.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
  }
  function checkWeekday(weekdayStr, parsedInput, config) {
    if (weekdayStr) {
      var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr), weekdayActual = new Date(
        parsedInput[0],
        parsedInput[1],
        parsedInput[2]
      ).getDay();
      if (weekdayProvided !== weekdayActual) {
        getParsingFlags(config).weekdayMismatch = true;
        config._isValid = false;
        return false;
      }
    }
    return true;
  }
  function calculateOffset(obsOffset, militaryOffset, numOffset) {
    if (obsOffset) {
      return obsOffsets[obsOffset];
    } else if (militaryOffset) {
      return 0;
    } else {
      var hm = parseInt(numOffset, 10), m = hm % 100, h = (hm - m) / 100;
      return h * 60 + m;
    }
  }
  function configFromRFC2822(config) {
    var match = rfc2822.exec(preprocessRFC2822(config._i)), parsedArray;
    if (match) {
      parsedArray = extractFromRFC2822Strings(
        match[4],
        match[3],
        match[2],
        match[5],
        match[6],
        match[7]
      );
      if (!checkWeekday(match[1], parsedArray, config)) {
        return;
      }
      config._a = parsedArray;
      config._tzm = calculateOffset(match[8], match[9], match[10]);
      config._d = createUTCDate.apply(null, config._a);
      config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
      getParsingFlags(config).rfc2822 = true;
    } else {
      config._isValid = false;
    }
  }
  function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);
    if (matched !== null) {
      config._d = /* @__PURE__ */ new Date(+matched[1]);
      return;
    }
    configFromISO(config);
    if (config._isValid === false) {
      delete config._isValid;
    } else {
      return;
    }
    configFromRFC2822(config);
    if (config._isValid === false) {
      delete config._isValid;
    } else {
      return;
    }
    if (config._strict) {
      config._isValid = false;
    } else {
      hooks.createFromInputFallback(config);
    }
  }
  hooks.createFromInputFallback = deprecate(
    "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
    function(config) {
      config._d = /* @__PURE__ */ new Date(config._i + (config._useUTC ? " UTC" : ""));
    }
  );
  function defaults(a, b, c) {
    if (a != null) {
      return a;
    }
    if (b != null) {
      return b;
    }
    return c;
  }
  function currentDateArray(config) {
    var nowValue = new Date(hooks.now());
    if (config._useUTC) {
      return [
        nowValue.getUTCFullYear(),
        nowValue.getUTCMonth(),
        nowValue.getUTCDate()
      ];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
  }
  function configFromArray(config) {
    var i, date, input = [], currentDate, expectedWeekday, yearToUse;
    if (config._d) {
      return;
    }
    currentDate = currentDateArray(config);
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
      dayOfYearFromWeekInfo(config);
    }
    if (config._dayOfYear != null) {
      yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
      if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
        getParsingFlags(config)._overflowDayOfYear = true;
      }
      date = createUTCDate(yearToUse, 0, config._dayOfYear);
      config._a[MONTH] = date.getUTCMonth();
      config._a[DATE] = date.getUTCDate();
    }
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
      config._a[i] = input[i] = currentDate[i];
    }
    for (; i < 7; i++) {
      config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
    }
    if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
      config._nextDay = true;
      config._a[HOUR] = 0;
    }
    config._d = (config._useUTC ? createUTCDate : createDate).apply(
      null,
      input
    );
    expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
    if (config._tzm != null) {
      config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }
    if (config._nextDay) {
      config._a[HOUR] = 24;
    }
    if (config._w && typeof config._w.d !== "undefined" && config._w.d !== expectedWeekday) {
      getParsingFlags(config).weekdayMismatch = true;
    }
  }
  function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
      dow = 1;
      doy = 4;
      weekYear = defaults(
        w.GG,
        config._a[YEAR],
        weekOfYear(createLocal(), 1, 4).year
      );
      week = defaults(w.W, 1);
      weekday = defaults(w.E, 1);
      if (weekday < 1 || weekday > 7) {
        weekdayOverflow = true;
      }
    } else {
      dow = config._locale._week.dow;
      doy = config._locale._week.doy;
      curWeek = weekOfYear(createLocal(), dow, doy);
      weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);
      week = defaults(w.w, curWeek.week);
      if (w.d != null) {
        weekday = w.d;
        if (weekday < 0 || weekday > 6) {
          weekdayOverflow = true;
        }
      } else if (w.e != null) {
        weekday = w.e + dow;
        if (w.e < 0 || w.e > 6) {
          weekdayOverflow = true;
        }
      } else {
        weekday = dow;
      }
    }
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
      getParsingFlags(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
      getParsingFlags(config)._overflowWeekday = true;
    } else {
      temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
      config._a[YEAR] = temp.year;
      config._dayOfYear = temp.dayOfYear;
    }
  }
  hooks.ISO_8601 = function() {
  };
  hooks.RFC_2822 = function() {
  };
  function configFromStringAndFormat(config) {
    if (config._f === hooks.ISO_8601) {
      configFromISO(config);
      return;
    }
    if (config._f === hooks.RFC_2822) {
      configFromRFC2822(config);
      return;
    }
    config._a = [];
    getParsingFlags(config).empty = true;
    var string = "" + config._i, i, parsedInput, tokens2, token2, skipped, stringLength = string.length, totalParsedInputLength = 0, era, tokenLen;
    tokens2 = expandFormat(config._f, config._locale).match(formattingTokens) || [];
    tokenLen = tokens2.length;
    for (i = 0; i < tokenLen; i++) {
      token2 = tokens2[i];
      parsedInput = (string.match(getParseRegexForToken(token2, config)) || [])[0];
      if (parsedInput) {
        skipped = string.substr(0, string.indexOf(parsedInput));
        if (skipped.length > 0) {
          getParsingFlags(config).unusedInput.push(skipped);
        }
        string = string.slice(
          string.indexOf(parsedInput) + parsedInput.length
        );
        totalParsedInputLength += parsedInput.length;
      }
      if (formatTokenFunctions[token2]) {
        if (parsedInput) {
          getParsingFlags(config).empty = false;
        } else {
          getParsingFlags(config).unusedTokens.push(token2);
        }
        addTimeToArrayFromToken(token2, parsedInput, config);
      } else if (config._strict && !parsedInput) {
        getParsingFlags(config).unusedTokens.push(token2);
      }
    }
    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
    if (string.length > 0) {
      getParsingFlags(config).unusedInput.push(string);
    }
    if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
      getParsingFlags(config).bigHour = void 0;
    }
    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem;
    config._a[HOUR] = meridiemFixWrap(
      config._locale,
      config._a[HOUR],
      config._meridiem
    );
    era = getParsingFlags(config).era;
    if (era !== null) {
      config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
    }
    configFromArray(config);
    checkOverflow(config);
  }
  function meridiemFixWrap(locale2, hour, meridiem2) {
    var isPm;
    if (meridiem2 == null) {
      return hour;
    }
    if (locale2.meridiemHour != null) {
      return locale2.meridiemHour(hour, meridiem2);
    } else if (locale2.isPM != null) {
      isPm = locale2.isPM(meridiem2);
      if (isPm && hour < 12) {
        hour += 12;
      }
      if (!isPm && hour === 12) {
        hour = 0;
      }
      return hour;
    } else {
      return hour;
    }
  }
  function configFromStringAndArray(config) {
    var tempConfig, bestMoment, scoreToBeat, i, currentScore, validFormatFound, bestFormatIsValid = false, configfLen = config._f.length;
    if (configfLen === 0) {
      getParsingFlags(config).invalidFormat = true;
      config._d = /* @__PURE__ */ new Date(NaN);
      return;
    }
    for (i = 0; i < configfLen; i++) {
      currentScore = 0;
      validFormatFound = false;
      tempConfig = copyConfig({}, config);
      if (config._useUTC != null) {
        tempConfig._useUTC = config._useUTC;
      }
      tempConfig._f = config._f[i];
      configFromStringAndFormat(tempConfig);
      if (isValid(tempConfig)) {
        validFormatFound = true;
      }
      currentScore += getParsingFlags(tempConfig).charsLeftOver;
      currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
      getParsingFlags(tempConfig).score = currentScore;
      if (!bestFormatIsValid) {
        if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
          scoreToBeat = currentScore;
          bestMoment = tempConfig;
          if (validFormatFound) {
            bestFormatIsValid = true;
          }
        }
      } else {
        if (currentScore < scoreToBeat) {
          scoreToBeat = currentScore;
          bestMoment = tempConfig;
        }
      }
    }
    extend(config, bestMoment || tempConfig);
  }
  function configFromObject(config) {
    if (config._d) {
      return;
    }
    var i = normalizeObjectUnits(config._i), dayOrDate = i.day === void 0 ? i.date : i.day;
    config._a = map(
      [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
      function(obj) {
        return obj && parseInt(obj, 10);
      }
    );
    configFromArray(config);
  }
  function createFromConfig(config) {
    var res = new Moment(checkOverflow(prepareConfig(config)));
    if (res._nextDay) {
      res.add(1, "d");
      res._nextDay = void 0;
    }
    return res;
  }
  function prepareConfig(config) {
    var input = config._i, format2 = config._f;
    config._locale = config._locale || getLocale(config._l);
    if (input === null || format2 === void 0 && input === "") {
      return createInvalid({ nullInput: true });
    }
    if (typeof input === "string") {
      config._i = input = config._locale.preparse(input);
    }
    if (isMoment(input)) {
      return new Moment(checkOverflow(input));
    } else if (isDate(input)) {
      config._d = input;
    } else if (isArray(format2)) {
      configFromStringAndArray(config);
    } else if (format2) {
      configFromStringAndFormat(config);
    } else {
      configFromInput(config);
    }
    if (!isValid(config)) {
      config._d = null;
    }
    return config;
  }
  function configFromInput(config) {
    var input = config._i;
    if (isUndefined(input)) {
      config._d = new Date(hooks.now());
    } else if (isDate(input)) {
      config._d = new Date(input.valueOf());
    } else if (typeof input === "string") {
      configFromString(config);
    } else if (isArray(input)) {
      config._a = map(input.slice(0), function(obj) {
        return parseInt(obj, 10);
      });
      configFromArray(config);
    } else if (isObject(input)) {
      configFromObject(config);
    } else if (isNumber(input)) {
      config._d = new Date(input);
    } else {
      hooks.createFromInputFallback(config);
    }
  }
  function createLocalOrUTC(input, format2, locale2, strict, isUTC) {
    var c = {};
    if (format2 === true || format2 === false) {
      strict = format2;
      format2 = void 0;
    }
    if (locale2 === true || locale2 === false) {
      strict = locale2;
      locale2 = void 0;
    }
    if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
      input = void 0;
    }
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale2;
    c._i = input;
    c._f = format2;
    c._strict = strict;
    return createFromConfig(c);
  }
  function createLocal(input, format2, locale2, strict) {
    return createLocalOrUTC(input, format2, locale2, strict, false);
  }
  var prototypeMin = deprecate(
    "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
    function() {
      var other = createLocal.apply(null, arguments);
      if (this.isValid() && other.isValid()) {
        return other < this ? this : other;
      } else {
        return createInvalid();
      }
    }
  ), prototypeMax = deprecate(
    "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
    function() {
      var other = createLocal.apply(null, arguments);
      if (this.isValid() && other.isValid()) {
        return other > this ? this : other;
      } else {
        return createInvalid();
      }
    }
  );
  function pickBy(fn, moments) {
    var res, i;
    if (moments.length === 1 && isArray(moments[0])) {
      moments = moments[0];
    }
    if (!moments.length) {
      return createLocal();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
      if (!moments[i].isValid() || moments[i][fn](res)) {
        res = moments[i];
      }
    }
    return res;
  }
  function min() {
    var args = [].slice.call(arguments, 0);
    return pickBy("isBefore", args);
  }
  function max() {
    var args = [].slice.call(arguments, 0);
    return pickBy("isAfter", args);
  }
  var now = function() {
    return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
  };
  var ordering = [
    "year",
    "quarter",
    "month",
    "week",
    "day",
    "hour",
    "minute",
    "second",
    "millisecond"
  ];
  function isDurationValid(m) {
    var key, unitHasDecimal = false, i, orderLen = ordering.length;
    for (key in m) {
      if (hasOwnProp(m, key) && !(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
        return false;
      }
    }
    for (i = 0; i < orderLen; ++i) {
      if (m[ordering[i]]) {
        if (unitHasDecimal) {
          return false;
        }
        if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
          unitHasDecimal = true;
        }
      }
    }
    return true;
  }
  function isValid$1() {
    return this._isValid;
  }
  function createInvalid$1() {
    return createDuration(NaN);
  }
  function Duration(duration) {
    var normalizedInput = normalizeObjectUnits(duration), years2 = normalizedInput.year || 0, quarters = normalizedInput.quarter || 0, months2 = normalizedInput.month || 0, weeks2 = normalizedInput.week || normalizedInput.isoWeek || 0, days2 = normalizedInput.day || 0, hours2 = normalizedInput.hour || 0, minutes2 = normalizedInput.minute || 0, seconds2 = normalizedInput.second || 0, milliseconds2 = normalizedInput.millisecond || 0;
    this._isValid = isDurationValid(normalizedInput);
    this._milliseconds = +milliseconds2 + seconds2 * 1e3 + // 1000
    minutes2 * 6e4 + // 1000 * 60
    hours2 * 1e3 * 60 * 60;
    this._days = +days2 + weeks2 * 7;
    this._months = +months2 + quarters * 3 + years2 * 12;
    this._data = {};
    this._locale = getLocale();
    this._bubble();
  }
  function isDuration(obj) {
    return obj instanceof Duration;
  }
  function absRound(number) {
    if (number < 0) {
      return Math.round(-1 * number) * -1;
    } else {
      return Math.round(number);
    }
  }
  function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length), lengthDiff = Math.abs(array1.length - array2.length), diffs = 0, i;
    for (i = 0; i < len; i++) {
      if (toInt(array1[i]) !== toInt(array2[i])) {
        diffs++;
      }
    }
    return diffs + lengthDiff;
  }
  function offset(token2, separator) {
    addFormatToken(token2, 0, 0, function() {
      var offset2 = this.utcOffset(), sign2 = "+";
      if (offset2 < 0) {
        offset2 = -offset2;
        sign2 = "-";
      }
      return sign2 + zeroFill(~~(offset2 / 60), 2) + separator + zeroFill(~~offset2 % 60, 2);
    });
  }
  offset("Z", ":");
  offset("ZZ", "");
  addRegexToken("Z", matchShortOffset);
  addRegexToken("ZZ", matchShortOffset);
  addParseToken(["Z", "ZZ"], function(input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input);
  });
  var chunkOffset = /([\+\-]|\d\d)/gi;
  function offsetFromString(matcher, string) {
    var matches = (string || "").match(matcher), chunk, parts, minutes2;
    if (matches === null) {
      return null;
    }
    chunk = matches[matches.length - 1] || [];
    parts = (chunk + "").match(chunkOffset) || ["-", 0, 0];
    minutes2 = +(parts[1] * 60) + toInt(parts[2]);
    return minutes2 === 0 ? 0 : parts[0] === "+" ? minutes2 : -minutes2;
  }
  function cloneWithOffset(input, model) {
    var res, diff2;
    if (model._isUTC) {
      res = model.clone();
      diff2 = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
      res._d.setTime(res._d.valueOf() + diff2);
      hooks.updateOffset(res, false);
      return res;
    } else {
      return createLocal(input).local();
    }
  }
  function getDateOffset(m) {
    return -Math.round(m._d.getTimezoneOffset());
  }
  hooks.updateOffset = function() {
  };
  function getSetOffset(input, keepLocalTime, keepMinutes) {
    var offset2 = this._offset || 0, localAdjust;
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    if (input != null) {
      if (typeof input === "string") {
        input = offsetFromString(matchShortOffset, input);
        if (input === null) {
          return this;
        }
      } else if (Math.abs(input) < 16 && !keepMinutes) {
        input = input * 60;
      }
      if (!this._isUTC && keepLocalTime) {
        localAdjust = getDateOffset(this);
      }
      this._offset = input;
      this._isUTC = true;
      if (localAdjust != null) {
        this.add(localAdjust, "m");
      }
      if (offset2 !== input) {
        if (!keepLocalTime || this._changeInProgress) {
          addSubtract(
            this,
            createDuration(input - offset2, "m"),
            1,
            false
          );
        } else if (!this._changeInProgress) {
          this._changeInProgress = true;
          hooks.updateOffset(this, true);
          this._changeInProgress = null;
        }
      }
      return this;
    } else {
      return this._isUTC ? offset2 : getDateOffset(this);
    }
  }
  function getSetZone(input, keepLocalTime) {
    if (input != null) {
      if (typeof input !== "string") {
        input = -input;
      }
      this.utcOffset(input, keepLocalTime);
      return this;
    } else {
      return -this.utcOffset();
    }
  }
  function setOffsetToUTC(keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
  }
  function setOffsetToLocal(keepLocalTime) {
    if (this._isUTC) {
      this.utcOffset(0, keepLocalTime);
      this._isUTC = false;
      if (keepLocalTime) {
        this.subtract(getDateOffset(this), "m");
      }
    }
    return this;
  }
  function setOffsetToParsedOffset() {
    if (this._tzm != null) {
      this.utcOffset(this._tzm, false, true);
    } else if (typeof this._i === "string") {
      var tZone = offsetFromString(matchOffset, this._i);
      if (tZone != null) {
        this.utcOffset(tZone);
      } else {
        this.utcOffset(0, true);
      }
    }
    return this;
  }
  function hasAlignedHourOffset(input) {
    if (!this.isValid()) {
      return false;
    }
    input = input ? createLocal(input).utcOffset() : 0;
    return (this.utcOffset() - input) % 60 === 0;
  }
  function isDaylightSavingTime() {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
  }
  function isDaylightSavingTimeShifted() {
    if (!isUndefined(this._isDSTShifted)) {
      return this._isDSTShifted;
    }
    var c = {}, other;
    copyConfig(c, this);
    c = prepareConfig(c);
    if (c._a) {
      other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
      this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
    } else {
      this._isDSTShifted = false;
    }
    return this._isDSTShifted;
  }
  function isLocal() {
    return this.isValid() ? !this._isUTC : false;
  }
  function isUtcOffset() {
    return this.isValid() ? this._isUTC : false;
  }
  function isUtc() {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
  }
  var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
  function createDuration(input, key) {
    var duration = input, match = null, sign2, ret, diffRes;
    if (isDuration(input)) {
      duration = {
        ms: input._milliseconds,
        d: input._days,
        M: input._months
      };
    } else if (isNumber(input) || !isNaN(+input)) {
      duration = {};
      if (key) {
        duration[key] = +input;
      } else {
        duration.milliseconds = +input;
      }
    } else if (match = aspNetRegex.exec(input)) {
      sign2 = match[1] === "-" ? -1 : 1;
      duration = {
        y: 0,
        d: toInt(match[DATE]) * sign2,
        h: toInt(match[HOUR]) * sign2,
        m: toInt(match[MINUTE]) * sign2,
        s: toInt(match[SECOND]) * sign2,
        ms: toInt(absRound(match[MILLISECOND] * 1e3)) * sign2
        // the millisecond decimal point is included in the match
      };
    } else if (match = isoRegex.exec(input)) {
      sign2 = match[1] === "-" ? -1 : 1;
      duration = {
        y: parseIso(match[2], sign2),
        M: parseIso(match[3], sign2),
        w: parseIso(match[4], sign2),
        d: parseIso(match[5], sign2),
        h: parseIso(match[6], sign2),
        m: parseIso(match[7], sign2),
        s: parseIso(match[8], sign2)
      };
    } else if (duration == null) {
      duration = {};
    } else if (typeof duration === "object" && ("from" in duration || "to" in duration)) {
      diffRes = momentsDifference(
        createLocal(duration.from),
        createLocal(duration.to)
      );
      duration = {};
      duration.ms = diffRes.milliseconds;
      duration.M = diffRes.months;
    }
    ret = new Duration(duration);
    if (isDuration(input) && hasOwnProp(input, "_locale")) {
      ret._locale = input._locale;
    }
    if (isDuration(input) && hasOwnProp(input, "_isValid")) {
      ret._isValid = input._isValid;
    }
    return ret;
  }
  createDuration.fn = Duration.prototype;
  createDuration.invalid = createInvalid$1;
  function parseIso(inp, sign2) {
    var res = inp && parseFloat(inp.replace(",", "."));
    return (isNaN(res) ? 0 : res) * sign2;
  }
  function positiveMomentsDifference(base, other) {
    var res = {};
    res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, "M").isAfter(other)) {
      --res.months;
    }
    res.milliseconds = +other - +base.clone().add(res.months, "M");
    return res;
  }
  function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
      return { milliseconds: 0, months: 0 };
    }
    other = cloneWithOffset(other, base);
    if (base.isBefore(other)) {
      res = positiveMomentsDifference(base, other);
    } else {
      res = positiveMomentsDifference(other, base);
      res.milliseconds = -res.milliseconds;
      res.months = -res.months;
    }
    return res;
  }
  function createAdder(direction, name) {
    return function(val, period) {
      var dur, tmp;
      if (period !== null && !isNaN(+period)) {
        deprecateSimple(
          name,
          "moment()." + name + "(period, number) is deprecated. Please use moment()." + name + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
        );
        tmp = val;
        val = period;
        period = tmp;
      }
      dur = createDuration(val, period);
      addSubtract(this, dur, direction);
      return this;
    };
  }
  function addSubtract(mom, duration, isAdding, updateOffset) {
    var milliseconds2 = duration._milliseconds, days2 = absRound(duration._days), months2 = absRound(duration._months);
    if (!mom.isValid()) {
      return;
    }
    updateOffset = updateOffset == null ? true : updateOffset;
    if (months2) {
      setMonth(mom, get(mom, "Month") + months2 * isAdding);
    }
    if (days2) {
      set$1(mom, "Date", get(mom, "Date") + days2 * isAdding);
    }
    if (milliseconds2) {
      mom._d.setTime(mom._d.valueOf() + milliseconds2 * isAdding);
    }
    if (updateOffset) {
      hooks.updateOffset(mom, days2 || months2);
    }
  }
  var add = createAdder(1, "add"), subtract = createAdder(-1, "subtract");
  function isString(input) {
    return typeof input === "string" || input instanceof String;
  }
  function isMomentInput(input) {
    return isMoment(input) || isDate(input) || isString(input) || isNumber(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === void 0;
  }
  function isMomentInputObject(input) {
    var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
      "years",
      "year",
      "y",
      "months",
      "month",
      "M",
      "days",
      "day",
      "d",
      "dates",
      "date",
      "D",
      "hours",
      "hour",
      "h",
      "minutes",
      "minute",
      "m",
      "seconds",
      "second",
      "s",
      "milliseconds",
      "millisecond",
      "ms"
    ], i, property, propertyLen = properties.length;
    for (i = 0; i < propertyLen; i += 1) {
      property = properties[i];
      propertyTest = propertyTest || hasOwnProp(input, property);
    }
    return objectTest && propertyTest;
  }
  function isNumberOrStringArray(input) {
    var arrayTest = isArray(input), dataTypeTest = false;
    if (arrayTest) {
      dataTypeTest = input.filter(function(item) {
        return !isNumber(item) && isString(input);
      }).length === 0;
    }
    return arrayTest && dataTypeTest;
  }
  function isCalendarSpec(input) {
    var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
      "sameDay",
      "nextDay",
      "lastDay",
      "nextWeek",
      "lastWeek",
      "sameElse"
    ], i, property;
    for (i = 0; i < properties.length; i += 1) {
      property = properties[i];
      propertyTest = propertyTest || hasOwnProp(input, property);
    }
    return objectTest && propertyTest;
  }
  function getCalendarFormat(myMoment, now2) {
    var diff2 = myMoment.diff(now2, "days", true);
    return diff2 < -6 ? "sameElse" : diff2 < -1 ? "lastWeek" : diff2 < 0 ? "lastDay" : diff2 < 1 ? "sameDay" : diff2 < 2 ? "nextDay" : diff2 < 7 ? "nextWeek" : "sameElse";
  }
  function calendar$1(time, formats) {
    if (arguments.length === 1) {
      if (!arguments[0]) {
        time = void 0;
        formats = void 0;
      } else if (isMomentInput(arguments[0])) {
        time = arguments[0];
        formats = void 0;
      } else if (isCalendarSpec(arguments[0])) {
        formats = arguments[0];
        time = void 0;
      }
    }
    var now2 = time || createLocal(), sod = cloneWithOffset(now2, this).startOf("day"), format2 = hooks.calendarFormat(this, sod) || "sameElse", output = formats && (isFunction(formats[format2]) ? formats[format2].call(this, now2) : formats[format2]);
    return this.format(
      output || this.localeData().calendar(format2, this, createLocal(now2))
    );
  }
  function clone() {
    return new Moment(this);
  }
  function isAfter(input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(units) || "millisecond";
    if (units === "millisecond") {
      return this.valueOf() > localInput.valueOf();
    } else {
      return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
  }
  function isBefore(input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(units) || "millisecond";
    if (units === "millisecond") {
      return this.valueOf() < localInput.valueOf();
    } else {
      return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
  }
  function isBetween(from2, to2, units, inclusivity) {
    var localFrom = isMoment(from2) ? from2 : createLocal(from2), localTo = isMoment(to2) ? to2 : createLocal(to2);
    if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
      return false;
    }
    inclusivity = inclusivity || "()";
    return (inclusivity[0] === "(" ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ")" ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
  }
  function isSame(input, units) {
    var localInput = isMoment(input) ? input : createLocal(input), inputMs;
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(units) || "millisecond";
    if (units === "millisecond") {
      return this.valueOf() === localInput.valueOf();
    } else {
      inputMs = localInput.valueOf();
      return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
    }
  }
  function isSameOrAfter(input, units) {
    return this.isSame(input, units) || this.isAfter(input, units);
  }
  function isSameOrBefore(input, units) {
    return this.isSame(input, units) || this.isBefore(input, units);
  }
  function diff(input, units, asFloat) {
    var that, zoneDelta, output;
    if (!this.isValid()) {
      return NaN;
    }
    that = cloneWithOffset(input, this);
    if (!that.isValid()) {
      return NaN;
    }
    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
    units = normalizeUnits(units);
    switch (units) {
      case "year":
        output = monthDiff(this, that) / 12;
        break;
      case "month":
        output = monthDiff(this, that);
        break;
      case "quarter":
        output = monthDiff(this, that) / 3;
        break;
      case "second":
        output = (this - that) / 1e3;
        break;
      // 1000
      case "minute":
        output = (this - that) / 6e4;
        break;
      // 1000 * 60
      case "hour":
        output = (this - that) / 36e5;
        break;
      // 1000 * 60 * 60
      case "day":
        output = (this - that - zoneDelta) / 864e5;
        break;
      // 1000 * 60 * 60 * 24, negate dst
      case "week":
        output = (this - that - zoneDelta) / 6048e5;
        break;
      // 1000 * 60 * 60 * 24 * 7, negate dst
      default:
        output = this - that;
    }
    return asFloat ? output : absFloor(output);
  }
  function monthDiff(a, b) {
    if (a.date() < b.date()) {
      return -monthDiff(b, a);
    }
    var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()), anchor = a.clone().add(wholeMonthDiff, "months"), anchor2, adjust;
    if (b - anchor < 0) {
      anchor2 = a.clone().add(wholeMonthDiff - 1, "months");
      adjust = (b - anchor) / (anchor - anchor2);
    } else {
      anchor2 = a.clone().add(wholeMonthDiff + 1, "months");
      adjust = (b - anchor) / (anchor2 - anchor);
    }
    return -(wholeMonthDiff + adjust) || 0;
  }
  hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
  hooks.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
  function toString() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
  }
  function toISOString(keepOffset) {
    if (!this.isValid()) {
      return null;
    }
    var utc = keepOffset !== true, m = utc ? this.clone().utc() : this;
    if (m.year() < 0 || m.year() > 9999) {
      return formatMoment(
        m,
        utc ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
      );
    }
    if (isFunction(Date.prototype.toISOString)) {
      if (utc) {
        return this.toDate().toISOString();
      } else {
        return new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", formatMoment(m, "Z"));
      }
    }
    return formatMoment(
      m,
      utc ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
    );
  }
  function inspect() {
    if (!this.isValid()) {
      return "moment.invalid(/* " + this._i + " */)";
    }
    var func = "moment", zone = "", prefix, year, datetime, suffix;
    if (!this.isLocal()) {
      func = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
      zone = "Z";
    }
    prefix = "[" + func + '("]';
    year = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
    datetime = "-MM-DD[T]HH:mm:ss.SSS";
    suffix = zone + '[")]';
    return this.format(prefix + year + datetime + suffix);
  }
  function format(inputString) {
    if (!inputString) {
      inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
    }
    var output = formatMoment(this, inputString);
    return this.localeData().postformat(output);
  }
  function from(time, withoutSuffix) {
    if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
      return createDuration({ to: this, from: time }).locale(this.locale()).humanize(!withoutSuffix);
    } else {
      return this.localeData().invalidDate();
    }
  }
  function fromNow(withoutSuffix) {
    return this.from(createLocal(), withoutSuffix);
  }
  function to(time, withoutSuffix) {
    if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
      return createDuration({ from: this, to: time }).locale(this.locale()).humanize(!withoutSuffix);
    } else {
      return this.localeData().invalidDate();
    }
  }
  function toNow(withoutSuffix) {
    return this.to(createLocal(), withoutSuffix);
  }
  function locale(key) {
    var newLocaleData;
    if (key === void 0) {
      return this._locale._abbr;
    } else {
      newLocaleData = getLocale(key);
      if (newLocaleData != null) {
        this._locale = newLocaleData;
      }
      return this;
    }
  }
  var lang = deprecate(
    "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
    function(key) {
      if (key === void 0) {
        return this.localeData();
      } else {
        return this.locale(key);
      }
    }
  );
  function localeData() {
    return this._locale;
  }
  var MS_PER_SECOND = 1e3, MS_PER_MINUTE = 60 * MS_PER_SECOND, MS_PER_HOUR = 60 * MS_PER_MINUTE, MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;
  function mod$1(dividend, divisor) {
    return (dividend % divisor + divisor) % divisor;
  }
  function localStartOfDate(y, m, d) {
    if (y < 100 && y >= 0) {
      return new Date(y + 400, m, d) - MS_PER_400_YEARS;
    } else {
      return new Date(y, m, d).valueOf();
    }
  }
  function utcStartOfDate(y, m, d) {
    if (y < 100 && y >= 0) {
      return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
    } else {
      return Date.UTC(y, m, d);
    }
  }
  function startOf(units) {
    var time, startOfDate;
    units = normalizeUnits(units);
    if (units === void 0 || units === "millisecond" || !this.isValid()) {
      return this;
    }
    startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
    switch (units) {
      case "year":
        time = startOfDate(this.year(), 0, 1);
        break;
      case "quarter":
        time = startOfDate(
          this.year(),
          this.month() - this.month() % 3,
          1
        );
        break;
      case "month":
        time = startOfDate(this.year(), this.month(), 1);
        break;
      case "week":
        time = startOfDate(
          this.year(),
          this.month(),
          this.date() - this.weekday()
        );
        break;
      case "isoWeek":
        time = startOfDate(
          this.year(),
          this.month(),
          this.date() - (this.isoWeekday() - 1)
        );
        break;
      case "day":
      case "date":
        time = startOfDate(this.year(), this.month(), this.date());
        break;
      case "hour":
        time = this._d.valueOf();
        time -= mod$1(
          time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
          MS_PER_HOUR
        );
        break;
      case "minute":
        time = this._d.valueOf();
        time -= mod$1(time, MS_PER_MINUTE);
        break;
      case "second":
        time = this._d.valueOf();
        time -= mod$1(time, MS_PER_SECOND);
        break;
    }
    this._d.setTime(time);
    hooks.updateOffset(this, true);
    return this;
  }
  function endOf(units) {
    var time, startOfDate;
    units = normalizeUnits(units);
    if (units === void 0 || units === "millisecond" || !this.isValid()) {
      return this;
    }
    startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
    switch (units) {
      case "year":
        time = startOfDate(this.year() + 1, 0, 1) - 1;
        break;
      case "quarter":
        time = startOfDate(
          this.year(),
          this.month() - this.month() % 3 + 3,
          1
        ) - 1;
        break;
      case "month":
        time = startOfDate(this.year(), this.month() + 1, 1) - 1;
        break;
      case "week":
        time = startOfDate(
          this.year(),
          this.month(),
          this.date() - this.weekday() + 7
        ) - 1;
        break;
      case "isoWeek":
        time = startOfDate(
          this.year(),
          this.month(),
          this.date() - (this.isoWeekday() - 1) + 7
        ) - 1;
        break;
      case "day":
      case "date":
        time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
        break;
      case "hour":
        time = this._d.valueOf();
        time += MS_PER_HOUR - mod$1(
          time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
          MS_PER_HOUR
        ) - 1;
        break;
      case "minute":
        time = this._d.valueOf();
        time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
        break;
      case "second":
        time = this._d.valueOf();
        time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
        break;
    }
    this._d.setTime(time);
    hooks.updateOffset(this, true);
    return this;
  }
  function valueOf() {
    return this._d.valueOf() - (this._offset || 0) * 6e4;
  }
  function unix() {
    return Math.floor(this.valueOf() / 1e3);
  }
  function toDate() {
    return new Date(this.valueOf());
  }
  function toArray() {
    var m = this;
    return [
      m.year(),
      m.month(),
      m.date(),
      m.hour(),
      m.minute(),
      m.second(),
      m.millisecond()
    ];
  }
  function toObject() {
    var m = this;
    return {
      years: m.year(),
      months: m.month(),
      date: m.date(),
      hours: m.hours(),
      minutes: m.minutes(),
      seconds: m.seconds(),
      milliseconds: m.milliseconds()
    };
  }
  function toJSON() {
    return this.isValid() ? this.toISOString() : null;
  }
  function isValid$2() {
    return isValid(this);
  }
  function parsingFlags() {
    return extend({}, getParsingFlags(this));
  }
  function invalidAt() {
    return getParsingFlags(this).overflow;
  }
  function creationData() {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict
    };
  }
  addFormatToken("N", 0, 0, "eraAbbr");
  addFormatToken("NN", 0, 0, "eraAbbr");
  addFormatToken("NNN", 0, 0, "eraAbbr");
  addFormatToken("NNNN", 0, 0, "eraName");
  addFormatToken("NNNNN", 0, 0, "eraNarrow");
  addFormatToken("y", ["y", 1], "yo", "eraYear");
  addFormatToken("y", ["yy", 2], 0, "eraYear");
  addFormatToken("y", ["yyy", 3], 0, "eraYear");
  addFormatToken("y", ["yyyy", 4], 0, "eraYear");
  addRegexToken("N", matchEraAbbr);
  addRegexToken("NN", matchEraAbbr);
  addRegexToken("NNN", matchEraAbbr);
  addRegexToken("NNNN", matchEraName);
  addRegexToken("NNNNN", matchEraNarrow);
  addParseToken(
    ["N", "NN", "NNN", "NNNN", "NNNNN"],
    function(input, array, config, token2) {
      var era = config._locale.erasParse(input, token2, config._strict);
      if (era) {
        getParsingFlags(config).era = era;
      } else {
        getParsingFlags(config).invalidEra = input;
      }
    }
  );
  addRegexToken("y", matchUnsigned);
  addRegexToken("yy", matchUnsigned);
  addRegexToken("yyy", matchUnsigned);
  addRegexToken("yyyy", matchUnsigned);
  addRegexToken("yo", matchEraYearOrdinal);
  addParseToken(["y", "yy", "yyy", "yyyy"], YEAR);
  addParseToken(["yo"], function(input, array, config, token2) {
    var match;
    if (config._locale._eraYearOrdinalRegex) {
      match = input.match(config._locale._eraYearOrdinalRegex);
    }
    if (config._locale.eraYearOrdinalParse) {
      array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
    } else {
      array[YEAR] = parseInt(input, 10);
    }
  });
  function localeEras(m, format2) {
    var i, l, date, eras = this._eras || getLocale("en")._eras;
    for (i = 0, l = eras.length; i < l; ++i) {
      switch (typeof eras[i].since) {
        case "string":
          date = hooks(eras[i].since).startOf("day");
          eras[i].since = date.valueOf();
          break;
      }
      switch (typeof eras[i].until) {
        case "undefined":
          eras[i].until = Infinity;
          break;
        case "string":
          date = hooks(eras[i].until).startOf("day").valueOf();
          eras[i].until = date.valueOf();
          break;
      }
    }
    return eras;
  }
  function localeErasParse(eraName, format2, strict) {
    var i, l, eras = this.eras(), name, abbr, narrow;
    eraName = eraName.toUpperCase();
    for (i = 0, l = eras.length; i < l; ++i) {
      name = eras[i].name.toUpperCase();
      abbr = eras[i].abbr.toUpperCase();
      narrow = eras[i].narrow.toUpperCase();
      if (strict) {
        switch (format2) {
          case "N":
          case "NN":
          case "NNN":
            if (abbr === eraName) {
              return eras[i];
            }
            break;
          case "NNNN":
            if (name === eraName) {
              return eras[i];
            }
            break;
          case "NNNNN":
            if (narrow === eraName) {
              return eras[i];
            }
            break;
        }
      } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
        return eras[i];
      }
    }
  }
  function localeErasConvertYear(era, year) {
    var dir = era.since <= era.until ? 1 : -1;
    if (year === void 0) {
      return hooks(era.since).year();
    } else {
      return hooks(era.since).year() + (year - era.offset) * dir;
    }
  }
  function getEraName() {
    var i, l, val, eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      val = this.clone().startOf("day").valueOf();
      if (eras[i].since <= val && val <= eras[i].until) {
        return eras[i].name;
      }
      if (eras[i].until <= val && val <= eras[i].since) {
        return eras[i].name;
      }
    }
    return "";
  }
  function getEraNarrow() {
    var i, l, val, eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      val = this.clone().startOf("day").valueOf();
      if (eras[i].since <= val && val <= eras[i].until) {
        return eras[i].narrow;
      }
      if (eras[i].until <= val && val <= eras[i].since) {
        return eras[i].narrow;
      }
    }
    return "";
  }
  function getEraAbbr() {
    var i, l, val, eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      val = this.clone().startOf("day").valueOf();
      if (eras[i].since <= val && val <= eras[i].until) {
        return eras[i].abbr;
      }
      if (eras[i].until <= val && val <= eras[i].since) {
        return eras[i].abbr;
      }
    }
    return "";
  }
  function getEraYear() {
    var i, l, dir, val, eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      dir = eras[i].since <= eras[i].until ? 1 : -1;
      val = this.clone().startOf("day").valueOf();
      if (eras[i].since <= val && val <= eras[i].until || eras[i].until <= val && val <= eras[i].since) {
        return (this.year() - hooks(eras[i].since).year()) * dir + eras[i].offset;
      }
    }
    return this.year();
  }
  function erasNameRegex(isStrict) {
    if (!hasOwnProp(this, "_erasNameRegex")) {
      computeErasParse.call(this);
    }
    return isStrict ? this._erasNameRegex : this._erasRegex;
  }
  function erasAbbrRegex(isStrict) {
    if (!hasOwnProp(this, "_erasAbbrRegex")) {
      computeErasParse.call(this);
    }
    return isStrict ? this._erasAbbrRegex : this._erasRegex;
  }
  function erasNarrowRegex(isStrict) {
    if (!hasOwnProp(this, "_erasNarrowRegex")) {
      computeErasParse.call(this);
    }
    return isStrict ? this._erasNarrowRegex : this._erasRegex;
  }
  function matchEraAbbr(isStrict, locale2) {
    return locale2.erasAbbrRegex(isStrict);
  }
  function matchEraName(isStrict, locale2) {
    return locale2.erasNameRegex(isStrict);
  }
  function matchEraNarrow(isStrict, locale2) {
    return locale2.erasNarrowRegex(isStrict);
  }
  function matchEraYearOrdinal(isStrict, locale2) {
    return locale2._eraYearOrdinalRegex || matchUnsigned;
  }
  function computeErasParse() {
    var abbrPieces = [], namePieces = [], narrowPieces = [], mixedPieces = [], i, l, erasName, erasAbbr, erasNarrow, eras = this.eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      erasName = regexEscape(eras[i].name);
      erasAbbr = regexEscape(eras[i].abbr);
      erasNarrow = regexEscape(eras[i].narrow);
      namePieces.push(erasName);
      abbrPieces.push(erasAbbr);
      narrowPieces.push(erasNarrow);
      mixedPieces.push(erasName);
      mixedPieces.push(erasAbbr);
      mixedPieces.push(erasNarrow);
    }
    this._erasRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
    this._erasNameRegex = new RegExp("^(" + namePieces.join("|") + ")", "i");
    this._erasAbbrRegex = new RegExp("^(" + abbrPieces.join("|") + ")", "i");
    this._erasNarrowRegex = new RegExp(
      "^(" + narrowPieces.join("|") + ")",
      "i"
    );
  }
  addFormatToken(0, ["gg", 2], 0, function() {
    return this.weekYear() % 100;
  });
  addFormatToken(0, ["GG", 2], 0, function() {
    return this.isoWeekYear() % 100;
  });
  function addWeekYearFormatToken(token2, getter) {
    addFormatToken(0, [token2, token2.length], 0, getter);
  }
  addWeekYearFormatToken("gggg", "weekYear");
  addWeekYearFormatToken("ggggg", "weekYear");
  addWeekYearFormatToken("GGGG", "isoWeekYear");
  addWeekYearFormatToken("GGGGG", "isoWeekYear");
  addRegexToken("G", matchSigned);
  addRegexToken("g", matchSigned);
  addRegexToken("GG", match1to2, match2);
  addRegexToken("gg", match1to2, match2);
  addRegexToken("GGGG", match1to4, match4);
  addRegexToken("gggg", match1to4, match4);
  addRegexToken("GGGGG", match1to6, match6);
  addRegexToken("ggggg", match1to6, match6);
  addWeekParseToken(
    ["gggg", "ggggg", "GGGG", "GGGGG"],
    function(input, week, config, token2) {
      week[token2.substr(0, 2)] = toInt(input);
    }
  );
  addWeekParseToken(["gg", "GG"], function(input, week, config, token2) {
    week[token2] = hooks.parseTwoDigitYear(input);
  });
  function getSetWeekYear(input) {
    return getSetWeekYearHelper.call(
      this,
      input,
      this.week(),
      this.weekday() + this.localeData()._week.dow,
      this.localeData()._week.dow,
      this.localeData()._week.doy
    );
  }
  function getSetISOWeekYear(input) {
    return getSetWeekYearHelper.call(
      this,
      input,
      this.isoWeek(),
      this.isoWeekday(),
      1,
      4
    );
  }
  function getISOWeeksInYear() {
    return weeksInYear(this.year(), 1, 4);
  }
  function getISOWeeksInISOWeekYear() {
    return weeksInYear(this.isoWeekYear(), 1, 4);
  }
  function getWeeksInYear() {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
  }
  function getWeeksInWeekYear() {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
  }
  function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;
    if (input == null) {
      return weekOfYear(this, dow, doy).year;
    } else {
      weeksTarget = weeksInYear(input, dow, doy);
      if (week > weeksTarget) {
        week = weeksTarget;
      }
      return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
  }
  function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy), date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
  }
  addFormatToken("Q", 0, "Qo", "quarter");
  addRegexToken("Q", match1);
  addParseToken("Q", function(input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
  });
  function getSetQuarter(input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
  }
  addFormatToken("D", ["DD", 2], "Do", "date");
  addRegexToken("D", match1to2, match1to2NoLeadingZero);
  addRegexToken("DD", match1to2, match2);
  addRegexToken("Do", function(isStrict, locale2) {
    return isStrict ? locale2._dayOfMonthOrdinalParse || locale2._ordinalParse : locale2._dayOfMonthOrdinalParseLenient;
  });
  addParseToken(["D", "DD"], DATE);
  addParseToken("Do", function(input, array) {
    array[DATE] = toInt(input.match(match1to2)[0]);
  });
  var getSetDayOfMonth = makeGetSet("Date", true);
  addFormatToken("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
  addRegexToken("DDD", match1to3);
  addRegexToken("DDDD", match3);
  addParseToken(["DDD", "DDDD"], function(input, array, config) {
    config._dayOfYear = toInt(input);
  });
  function getSetDayOfYear(input) {
    var dayOfYear = Math.round(
      (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
    ) + 1;
    return input == null ? dayOfYear : this.add(input - dayOfYear, "d");
  }
  addFormatToken("m", ["mm", 2], 0, "minute");
  addRegexToken("m", match1to2, match1to2HasZero);
  addRegexToken("mm", match1to2, match2);
  addParseToken(["m", "mm"], MINUTE);
  var getSetMinute = makeGetSet("Minutes", false);
  addFormatToken("s", ["ss", 2], 0, "second");
  addRegexToken("s", match1to2, match1to2HasZero);
  addRegexToken("ss", match1to2, match2);
  addParseToken(["s", "ss"], SECOND);
  var getSetSecond = makeGetSet("Seconds", false);
  addFormatToken("S", 0, 0, function() {
    return ~~(this.millisecond() / 100);
  });
  addFormatToken(0, ["SS", 2], 0, function() {
    return ~~(this.millisecond() / 10);
  });
  addFormatToken(0, ["SSS", 3], 0, "millisecond");
  addFormatToken(0, ["SSSS", 4], 0, function() {
    return this.millisecond() * 10;
  });
  addFormatToken(0, ["SSSSS", 5], 0, function() {
    return this.millisecond() * 100;
  });
  addFormatToken(0, ["SSSSSS", 6], 0, function() {
    return this.millisecond() * 1e3;
  });
  addFormatToken(0, ["SSSSSSS", 7], 0, function() {
    return this.millisecond() * 1e4;
  });
  addFormatToken(0, ["SSSSSSSS", 8], 0, function() {
    return this.millisecond() * 1e5;
  });
  addFormatToken(0, ["SSSSSSSSS", 9], 0, function() {
    return this.millisecond() * 1e6;
  });
  addRegexToken("S", match1to3, match1);
  addRegexToken("SS", match1to3, match2);
  addRegexToken("SSS", match1to3, match3);
  var token, getSetMillisecond;
  for (token = "SSSS"; token.length <= 9; token += "S") {
    addRegexToken(token, matchUnsigned);
  }
  function parseMs(input, array) {
    array[MILLISECOND] = toInt(("0." + input) * 1e3);
  }
  for (token = "S"; token.length <= 9; token += "S") {
    addParseToken(token, parseMs);
  }
  getSetMillisecond = makeGetSet("Milliseconds", false);
  addFormatToken("z", 0, 0, "zoneAbbr");
  addFormatToken("zz", 0, 0, "zoneName");
  function getZoneAbbr() {
    return this._isUTC ? "UTC" : "";
  }
  function getZoneName() {
    return this._isUTC ? "Coordinated Universal Time" : "";
  }
  var proto = Moment.prototype;
  proto.add = add;
  proto.calendar = calendar$1;
  proto.clone = clone;
  proto.diff = diff;
  proto.endOf = endOf;
  proto.format = format;
  proto.from = from;
  proto.fromNow = fromNow;
  proto.to = to;
  proto.toNow = toNow;
  proto.get = stringGet;
  proto.invalidAt = invalidAt;
  proto.isAfter = isAfter;
  proto.isBefore = isBefore;
  proto.isBetween = isBetween;
  proto.isSame = isSame;
  proto.isSameOrAfter = isSameOrAfter;
  proto.isSameOrBefore = isSameOrBefore;
  proto.isValid = isValid$2;
  proto.lang = lang;
  proto.locale = locale;
  proto.localeData = localeData;
  proto.max = prototypeMax;
  proto.min = prototypeMin;
  proto.parsingFlags = parsingFlags;
  proto.set = stringSet;
  proto.startOf = startOf;
  proto.subtract = subtract;
  proto.toArray = toArray;
  proto.toObject = toObject;
  proto.toDate = toDate;
  proto.toISOString = toISOString;
  proto.inspect = inspect;
  if (typeof Symbol !== "undefined" && Symbol.for != null) {
    proto[Symbol.for("nodejs.util.inspect.custom")] = function() {
      return "Moment<" + this.format() + ">";
    };
  }
  proto.toJSON = toJSON;
  proto.toString = toString;
  proto.unix = unix;
  proto.valueOf = valueOf;
  proto.creationData = creationData;
  proto.eraName = getEraName;
  proto.eraNarrow = getEraNarrow;
  proto.eraAbbr = getEraAbbr;
  proto.eraYear = getEraYear;
  proto.year = getSetYear;
  proto.isLeapYear = getIsLeapYear;
  proto.weekYear = getSetWeekYear;
  proto.isoWeekYear = getSetISOWeekYear;
  proto.quarter = proto.quarters = getSetQuarter;
  proto.month = getSetMonth;
  proto.daysInMonth = getDaysInMonth;
  proto.week = proto.weeks = getSetWeek;
  proto.isoWeek = proto.isoWeeks = getSetISOWeek;
  proto.weeksInYear = getWeeksInYear;
  proto.weeksInWeekYear = getWeeksInWeekYear;
  proto.isoWeeksInYear = getISOWeeksInYear;
  proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
  proto.date = getSetDayOfMonth;
  proto.day = proto.days = getSetDayOfWeek;
  proto.weekday = getSetLocaleDayOfWeek;
  proto.isoWeekday = getSetISODayOfWeek;
  proto.dayOfYear = getSetDayOfYear;
  proto.hour = proto.hours = getSetHour;
  proto.minute = proto.minutes = getSetMinute;
  proto.second = proto.seconds = getSetSecond;
  proto.millisecond = proto.milliseconds = getSetMillisecond;
  proto.utcOffset = getSetOffset;
  proto.utc = setOffsetToUTC;
  proto.local = setOffsetToLocal;
  proto.parseZone = setOffsetToParsedOffset;
  proto.hasAlignedHourOffset = hasAlignedHourOffset;
  proto.isDST = isDaylightSavingTime;
  proto.isLocal = isLocal;
  proto.isUtcOffset = isUtcOffset;
  proto.isUtc = isUtc;
  proto.isUTC = isUtc;
  proto.zoneAbbr = getZoneAbbr;
  proto.zoneName = getZoneName;
  proto.dates = deprecate(
    "dates accessor is deprecated. Use date instead.",
    getSetDayOfMonth
  );
  proto.months = deprecate(
    "months accessor is deprecated. Use month instead",
    getSetMonth
  );
  proto.years = deprecate(
    "years accessor is deprecated. Use year instead",
    getSetYear
  );
  proto.zone = deprecate(
    "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
    getSetZone
  );
  proto.isDSTShifted = deprecate(
    "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
    isDaylightSavingTimeShifted
  );
  function createUnix(input) {
    return createLocal(input * 1e3);
  }
  function createInZone() {
    return createLocal.apply(null, arguments).parseZone();
  }
  function preParsePostFormat(string) {
    return string;
  }
  var proto$1 = Locale.prototype;
  proto$1.calendar = calendar;
  proto$1.longDateFormat = longDateFormat;
  proto$1.invalidDate = invalidDate;
  proto$1.ordinal = ordinal;
  proto$1.preparse = preParsePostFormat;
  proto$1.postformat = preParsePostFormat;
  proto$1.relativeTime = relativeTime;
  proto$1.pastFuture = pastFuture;
  proto$1.set = set;
  proto$1.eras = localeEras;
  proto$1.erasParse = localeErasParse;
  proto$1.erasConvertYear = localeErasConvertYear;
  proto$1.erasAbbrRegex = erasAbbrRegex;
  proto$1.erasNameRegex = erasNameRegex;
  proto$1.erasNarrowRegex = erasNarrowRegex;
  proto$1.months = localeMonths;
  proto$1.monthsShort = localeMonthsShort;
  proto$1.monthsParse = localeMonthsParse;
  proto$1.monthsRegex = monthsRegex;
  proto$1.monthsShortRegex = monthsShortRegex;
  proto$1.week = localeWeek;
  proto$1.firstDayOfYear = localeFirstDayOfYear;
  proto$1.firstDayOfWeek = localeFirstDayOfWeek;
  proto$1.weekdays = localeWeekdays;
  proto$1.weekdaysMin = localeWeekdaysMin;
  proto$1.weekdaysShort = localeWeekdaysShort;
  proto$1.weekdaysParse = localeWeekdaysParse;
  proto$1.weekdaysRegex = weekdaysRegex;
  proto$1.weekdaysShortRegex = weekdaysShortRegex;
  proto$1.weekdaysMinRegex = weekdaysMinRegex;
  proto$1.isPM = localeIsPM;
  proto$1.meridiem = localeMeridiem;
  function get$1(format2, index, field, setter) {
    var locale2 = getLocale(), utc = createUTC().set(setter, index);
    return locale2[field](utc, format2);
  }
  function listMonthsImpl(format2, index, field) {
    if (isNumber(format2)) {
      index = format2;
      format2 = void 0;
    }
    format2 = format2 || "";
    if (index != null) {
      return get$1(format2, index, field, "month");
    }
    var i, out = [];
    for (i = 0; i < 12; i++) {
      out[i] = get$1(format2, i, field, "month");
    }
    return out;
  }
  function listWeekdaysImpl(localeSorted, format2, index, field) {
    if (typeof localeSorted === "boolean") {
      if (isNumber(format2)) {
        index = format2;
        format2 = void 0;
      }
      format2 = format2 || "";
    } else {
      format2 = localeSorted;
      index = format2;
      localeSorted = false;
      if (isNumber(format2)) {
        index = format2;
        format2 = void 0;
      }
      format2 = format2 || "";
    }
    var locale2 = getLocale(), shift = localeSorted ? locale2._week.dow : 0, i, out = [];
    if (index != null) {
      return get$1(format2, (index + shift) % 7, field, "day");
    }
    for (i = 0; i < 7; i++) {
      out[i] = get$1(format2, (i + shift) % 7, field, "day");
    }
    return out;
  }
  function listMonths(format2, index) {
    return listMonthsImpl(format2, index, "months");
  }
  function listMonthsShort(format2, index) {
    return listMonthsImpl(format2, index, "monthsShort");
  }
  function listWeekdays(localeSorted, format2, index) {
    return listWeekdaysImpl(localeSorted, format2, index, "weekdays");
  }
  function listWeekdaysShort(localeSorted, format2, index) {
    return listWeekdaysImpl(localeSorted, format2, index, "weekdaysShort");
  }
  function listWeekdaysMin(localeSorted, format2, index) {
    return listWeekdaysImpl(localeSorted, format2, index, "weekdaysMin");
  }
  getSetGlobalLocale("en", {
    eras: [
      {
        since: "0001-01-01",
        until: Infinity,
        offset: 1,
        name: "Anno Domini",
        narrow: "AD",
        abbr: "AD"
      },
      {
        since: "0000-12-31",
        until: -Infinity,
        offset: 1,
        name: "Before Christ",
        narrow: "BC",
        abbr: "BC"
      }
    ],
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function(number) {
      var b = number % 10, output = toInt(number % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
      return number + output;
    }
  });
  hooks.lang = deprecate(
    "moment.lang is deprecated. Use moment.locale instead.",
    getSetGlobalLocale
  );
  hooks.langData = deprecate(
    "moment.langData is deprecated. Use moment.localeData instead.",
    getLocale
  );
  var mathAbs = Math.abs;
  function abs() {
    var data = this._data;
    this._milliseconds = mathAbs(this._milliseconds);
    this._days = mathAbs(this._days);
    this._months = mathAbs(this._months);
    data.milliseconds = mathAbs(data.milliseconds);
    data.seconds = mathAbs(data.seconds);
    data.minutes = mathAbs(data.minutes);
    data.hours = mathAbs(data.hours);
    data.months = mathAbs(data.months);
    data.years = mathAbs(data.years);
    return this;
  }
  function addSubtract$1(duration, input, value, direction) {
    var other = createDuration(input, value);
    duration._milliseconds += direction * other._milliseconds;
    duration._days += direction * other._days;
    duration._months += direction * other._months;
    return duration._bubble();
  }
  function add$1(input, value) {
    return addSubtract$1(this, input, value, 1);
  }
  function subtract$1(input, value) {
    return addSubtract$1(this, input, value, -1);
  }
  function absCeil(number) {
    if (number < 0) {
      return Math.floor(number);
    } else {
      return Math.ceil(number);
    }
  }
  function bubble() {
    var milliseconds2 = this._milliseconds, days2 = this._days, months2 = this._months, data = this._data, seconds2, minutes2, hours2, years2, monthsFromDays;
    if (!(milliseconds2 >= 0 && days2 >= 0 && months2 >= 0 || milliseconds2 <= 0 && days2 <= 0 && months2 <= 0)) {
      milliseconds2 += absCeil(monthsToDays(months2) + days2) * 864e5;
      days2 = 0;
      months2 = 0;
    }
    data.milliseconds = milliseconds2 % 1e3;
    seconds2 = absFloor(milliseconds2 / 1e3);
    data.seconds = seconds2 % 60;
    minutes2 = absFloor(seconds2 / 60);
    data.minutes = minutes2 % 60;
    hours2 = absFloor(minutes2 / 60);
    data.hours = hours2 % 24;
    days2 += absFloor(hours2 / 24);
    monthsFromDays = absFloor(daysToMonths(days2));
    months2 += monthsFromDays;
    days2 -= absCeil(monthsToDays(monthsFromDays));
    years2 = absFloor(months2 / 12);
    months2 %= 12;
    data.days = days2;
    data.months = months2;
    data.years = years2;
    return this;
  }
  function daysToMonths(days2) {
    return days2 * 4800 / 146097;
  }
  function monthsToDays(months2) {
    return months2 * 146097 / 4800;
  }
  function as(units) {
    if (!this.isValid()) {
      return NaN;
    }
    var days2, months2, milliseconds2 = this._milliseconds;
    units = normalizeUnits(units);
    if (units === "month" || units === "quarter" || units === "year") {
      days2 = this._days + milliseconds2 / 864e5;
      months2 = this._months + daysToMonths(days2);
      switch (units) {
        case "month":
          return months2;
        case "quarter":
          return months2 / 3;
        case "year":
          return months2 / 12;
      }
    } else {
      days2 = this._days + Math.round(monthsToDays(this._months));
      switch (units) {
        case "week":
          return days2 / 7 + milliseconds2 / 6048e5;
        case "day":
          return days2 + milliseconds2 / 864e5;
        case "hour":
          return days2 * 24 + milliseconds2 / 36e5;
        case "minute":
          return days2 * 1440 + milliseconds2 / 6e4;
        case "second":
          return days2 * 86400 + milliseconds2 / 1e3;
        // Math.floor prevents floating point math errors here
        case "millisecond":
          return Math.floor(days2 * 864e5) + milliseconds2;
        default:
          throw new Error("Unknown unit " + units);
      }
    }
  }
  function makeAs(alias) {
    return function() {
      return this.as(alias);
    };
  }
  var asMilliseconds = makeAs("ms"), asSeconds = makeAs("s"), asMinutes = makeAs("m"), asHours = makeAs("h"), asDays = makeAs("d"), asWeeks = makeAs("w"), asMonths = makeAs("M"), asQuarters = makeAs("Q"), asYears = makeAs("y"), valueOf$1 = asMilliseconds;
  function clone$1() {
    return createDuration(this);
  }
  function get$2(units) {
    units = normalizeUnits(units);
    return this.isValid() ? this[units + "s"]() : NaN;
  }
  function makeGetter(name) {
    return function() {
      return this.isValid() ? this._data[name] : NaN;
    };
  }
  var milliseconds = makeGetter("milliseconds"), seconds = makeGetter("seconds"), minutes = makeGetter("minutes"), hours = makeGetter("hours"), days = makeGetter("days"), months = makeGetter("months"), years = makeGetter("years");
  function weeks() {
    return absFloor(this.days() / 7);
  }
  var round = Math.round, thresholds = {
    ss: 44,
    // a few seconds to seconds
    s: 45,
    // seconds to minute
    m: 45,
    // minutes to hour
    h: 22,
    // hours to day
    d: 26,
    // days to month/week
    w: null,
    // weeks to month
    M: 11
    // months to year
  };
  function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale2) {
    return locale2.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
  }
  function relativeTime$1(posNegDuration, withoutSuffix, thresholds2, locale2) {
    var duration = createDuration(posNegDuration).abs(), seconds2 = round(duration.as("s")), minutes2 = round(duration.as("m")), hours2 = round(duration.as("h")), days2 = round(duration.as("d")), months2 = round(duration.as("M")), weeks2 = round(duration.as("w")), years2 = round(duration.as("y")), a = seconds2 <= thresholds2.ss && ["s", seconds2] || seconds2 < thresholds2.s && ["ss", seconds2] || minutes2 <= 1 && ["m"] || minutes2 < thresholds2.m && ["mm", minutes2] || hours2 <= 1 && ["h"] || hours2 < thresholds2.h && ["hh", hours2] || days2 <= 1 && ["d"] || days2 < thresholds2.d && ["dd", days2];
    if (thresholds2.w != null) {
      a = a || weeks2 <= 1 && ["w"] || weeks2 < thresholds2.w && ["ww", weeks2];
    }
    a = a || months2 <= 1 && ["M"] || months2 < thresholds2.M && ["MM", months2] || years2 <= 1 && ["y"] || ["yy", years2];
    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale2;
    return substituteTimeAgo.apply(null, a);
  }
  function getSetRelativeTimeRounding(roundingFunction) {
    if (roundingFunction === void 0) {
      return round;
    }
    if (typeof roundingFunction === "function") {
      round = roundingFunction;
      return true;
    }
    return false;
  }
  function getSetRelativeTimeThreshold(threshold, limit) {
    if (thresholds[threshold] === void 0) {
      return false;
    }
    if (limit === void 0) {
      return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    if (threshold === "s") {
      thresholds.ss = limit - 1;
    }
    return true;
  }
  function humanize(argWithSuffix, argThresholds) {
    if (!this.isValid()) {
      return this.localeData().invalidDate();
    }
    var withSuffix = false, th = thresholds, locale2, output;
    if (typeof argWithSuffix === "object") {
      argThresholds = argWithSuffix;
      argWithSuffix = false;
    }
    if (typeof argWithSuffix === "boolean") {
      withSuffix = argWithSuffix;
    }
    if (typeof argThresholds === "object") {
      th = Object.assign({}, thresholds, argThresholds);
      if (argThresholds.s != null && argThresholds.ss == null) {
        th.ss = argThresholds.s - 1;
      }
    }
    locale2 = this.localeData();
    output = relativeTime$1(this, !withSuffix, th, locale2);
    if (withSuffix) {
      output = locale2.pastFuture(+this, output);
    }
    return locale2.postformat(output);
  }
  var abs$1 = Math.abs;
  function sign(x) {
    return (x > 0) - (x < 0) || +x;
  }
  function toISOString$1() {
    if (!this.isValid()) {
      return this.localeData().invalidDate();
    }
    var seconds2 = abs$1(this._milliseconds) / 1e3, days2 = abs$1(this._days), months2 = abs$1(this._months), minutes2, hours2, years2, s, total = this.asSeconds(), totalSign, ymSign, daysSign, hmsSign;
    if (!total) {
      return "P0D";
    }
    minutes2 = absFloor(seconds2 / 60);
    hours2 = absFloor(minutes2 / 60);
    seconds2 %= 60;
    minutes2 %= 60;
    years2 = absFloor(months2 / 12);
    months2 %= 12;
    s = seconds2 ? seconds2.toFixed(3).replace(/\.?0+$/, "") : "";
    totalSign = total < 0 ? "-" : "";
    ymSign = sign(this._months) !== sign(total) ? "-" : "";
    daysSign = sign(this._days) !== sign(total) ? "-" : "";
    hmsSign = sign(this._milliseconds) !== sign(total) ? "-" : "";
    return totalSign + "P" + (years2 ? ymSign + years2 + "Y" : "") + (months2 ? ymSign + months2 + "M" : "") + (days2 ? daysSign + days2 + "D" : "") + (hours2 || minutes2 || seconds2 ? "T" : "") + (hours2 ? hmsSign + hours2 + "H" : "") + (minutes2 ? hmsSign + minutes2 + "M" : "") + (seconds2 ? hmsSign + s + "S" : "");
  }
  var proto$2 = Duration.prototype;
  proto$2.isValid = isValid$1;
  proto$2.abs = abs;
  proto$2.add = add$1;
  proto$2.subtract = subtract$1;
  proto$2.as = as;
  proto$2.asMilliseconds = asMilliseconds;
  proto$2.asSeconds = asSeconds;
  proto$2.asMinutes = asMinutes;
  proto$2.asHours = asHours;
  proto$2.asDays = asDays;
  proto$2.asWeeks = asWeeks;
  proto$2.asMonths = asMonths;
  proto$2.asQuarters = asQuarters;
  proto$2.asYears = asYears;
  proto$2.valueOf = valueOf$1;
  proto$2._bubble = bubble;
  proto$2.clone = clone$1;
  proto$2.get = get$2;
  proto$2.milliseconds = milliseconds;
  proto$2.seconds = seconds;
  proto$2.minutes = minutes;
  proto$2.hours = hours;
  proto$2.days = days;
  proto$2.weeks = weeks;
  proto$2.months = months;
  proto$2.years = years;
  proto$2.humanize = humanize;
  proto$2.toISOString = toISOString$1;
  proto$2.toString = toISOString$1;
  proto$2.toJSON = toISOString$1;
  proto$2.locale = locale;
  proto$2.localeData = localeData;
  proto$2.toIsoString = deprecate(
    "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
    toISOString$1
  );
  proto$2.lang = lang;
  addFormatToken("X", 0, 0, "unix");
  addFormatToken("x", 0, 0, "valueOf");
  addRegexToken("x", matchSigned);
  addRegexToken("X", matchTimestamp);
  addParseToken("X", function(input, array, config) {
    config._d = new Date(parseFloat(input) * 1e3);
  });
  addParseToken("x", function(input, array, config) {
    config._d = new Date(toInt(input));
  });
  //! moment.js
  hooks.version = "2.30.1";
  setHookCallback(createLocal);
  hooks.fn = proto;
  hooks.min = min;
  hooks.max = max;
  hooks.now = now;
  hooks.utc = createUTC;
  hooks.unix = createUnix;
  hooks.months = listMonths;
  hooks.isDate = isDate;
  hooks.locale = getSetGlobalLocale;
  hooks.invalid = createInvalid;
  hooks.duration = createDuration;
  hooks.isMoment = isMoment;
  hooks.weekdays = listWeekdays;
  hooks.parseZone = createInZone;
  hooks.localeData = getLocale;
  hooks.isDuration = isDuration;
  hooks.monthsShort = listMonthsShort;
  hooks.weekdaysMin = listWeekdaysMin;
  hooks.defineLocale = defineLocale;
  hooks.updateLocale = updateLocale;
  hooks.locales = listLocales;
  hooks.weekdaysShort = listWeekdaysShort;
  hooks.normalizeUnits = normalizeUnits;
  hooks.relativeTimeRounding = getSetRelativeTimeRounding;
  hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
  hooks.calendarFormat = getCalendarFormat;
  hooks.prototype = proto;
  hooks.HTML5_FMT = {
    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
    // <input type="datetime-local" />
    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
    // <input type="datetime-local" step="1" />
    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
    // <input type="datetime-local" step="0.001" />
    DATE: "YYYY-MM-DD",
    // <input type="date" />
    TIME: "HH:mm",
    // <input type="time" />
    TIME_SECONDS: "HH:mm:ss",
    // <input type="time" step="1" />
    TIME_MS: "HH:mm:ss.SSS",
    // <input type="time" step="0.001" />
    WEEK: "GGGG-[W]WW",
    // <input type="week" />
    MONTH: "YYYY-MM"
    // <input type="month" />
  };
  const API_BASE_URL = "https://051892e58926.ngrok-free.app";
  class AccessShieldAPI {
    constructor(hubspotFetch = null, context = null) {
      this.baseURL = API_BASE_URL;
      this.fetch = hubspotFetch;
      this.context = context;
      console.log("🔧 AccessShieldAPI initialized with baseURL:", this.baseURL);
      console.log("🌐 Fetch function type:", typeof hubspotFetch);
      console.log("👤 Context available:", !!context);
    }
    // Set the hubspot fetch method
    setFetch(hubspotFetch) {
      this.fetch = hubspotFetch;
    }
    // Upload document to AccessShield backend
    async uploadDocument(file, objectId, objectType, metadata = {}) {
      console.log("📤 API: uploadDocument called", { fileName: file == null ? void 0 : file.name, objectId, objectType, metadata });
      if (!this.fetch) {
        console.error("❌ API: HubSpot fetch not initialized for upload");
        throw new Error("HubSpot fetch not initialized");
      }
      const formData = new FormData();
      formData.append("document", file);
      formData.append("objectId", objectId);
      formData.append("objectType", objectType);
      formData.append("metadata", JSON.stringify(metadata));
      const url = `${this.baseURL}/api/upload-document`;
      console.log("📤 API: Making upload request to:", url);
      try {
        const response = await this.fetch(url, {
          method: "POST",
          body: formData,
          headers: {
            "Accept": "application/json"
          }
        });
        console.log("📤 API: Upload response status:", response.status);
        console.log("📤 API: Upload response ok:", response.ok);
        if (!response.ok) {
          const errorText = await response.text();
          console.error("❌ API: Upload error response:", errorText);
          let errorData;
          try {
            errorData = JSON.parse(errorText);
          } catch {
            errorData = { error: errorText };
          }
          throw new Error(errorData.error || "Upload failed");
        }
        const result = await response.json();
        console.log("📤 API: Upload success:", result);
        return result;
      } catch (error) {
        console.error("❌ API: uploadDocument error:", error);
        throw error;
      }
    }
    // Get documents for a HubSpot record (multi-tenant)
    async getDocuments(objectType, objectId) {
      var _a, _b;
      console.log("📄 API: getDocuments called", { objectType, objectId });
      if (!this.fetch) {
        console.error("❌ API: HubSpot fetch not initialized");
        throw new Error("HubSpot fetch not initialized");
      }
      const portalId = (_b = (_a = this.context) == null ? void 0 : _a.portal) == null ? void 0 : _b.id;
      if (!portalId) {
        throw new Error("Portal ID not available");
      }
      const url = `${this.baseURL}/api/documents/${portalId}/${objectType}/${objectId}`;
      console.log("📄 API: Making request to:", url);
      try {
        const response = await this.fetch(url, {
          method: "GET"
        });
        console.log("📄 API: Response status:", response.status);
        console.log("📄 API: Response ok:", response.ok);
        if (!response.ok) {
          const errorText = await response.text();
          console.error("❌ API: Error response:", errorText);
          let errorData;
          try {
            errorData = JSON.parse(errorText);
          } catch {
            errorData = { error: errorText };
          }
          throw new Error(errorData.error || "Failed to fetch documents");
        }
        const data = await response.json();
        console.log("📄 API: Documents data:", data);
        return data;
      } catch (error) {
        console.error("❌ API: getDocuments error:", error);
        throw error;
      }
    }
    // Get access logs for documents (multi-tenant)
    async getAccessLogs(documentId = null) {
      var _a, _b;
      console.log("📜 API: getAccessLogs called", { documentId });
      if (!this.fetch) {
        console.error("❌ API: HubSpot fetch not initialized for access logs");
        throw new Error("HubSpot fetch not initialized");
      }
      const portalId = (_b = (_a = this.context) == null ? void 0 : _a.portal) == null ? void 0 : _b.id;
      const teamId = "default";
      if (!portalId) {
        throw new Error("Portal ID not available");
      }
      let url = `${this.baseURL}/api/documents/${teamId}/${portalId}/access-logs`;
      if (documentId) {
        url += `?document_id=${documentId}`;
      }
      console.log("📜 API: Making access logs request to:", url);
      try {
        const response = await this.fetch(url, {
          method: "GET"
        });
        console.log("📜 API: Access logs response status:", response.status);
        console.log("📜 API: Access logs response ok:", response.ok);
        if (!response.ok) {
          const errorText = await response.text();
          console.error("❌ API: Access logs error response:", errorText);
          let errorData;
          try {
            errorData = JSON.parse(errorText);
          } catch {
            errorData = { error: errorText };
          }
          throw new Error(errorData.error || "Failed to fetch access logs");
        }
        const result = await response.json();
        console.log("📜 API: Access logs data:", result);
        return result;
      } catch (error) {
        console.error("❌ API: getAccessLogs error:", error);
        throw error;
      }
    }
    // Log document access
    async logAccess(documentId, userId, action, metadata = {}) {
      console.log("📝 API: logAccess called", { documentId, userId, action, metadata });
      if (!this.fetch) {
        console.error("❌ API: HubSpot fetch not initialized for log access");
        throw new Error("HubSpot fetch not initialized");
      }
      const url = `${this.baseURL}/api/log-access`;
      const payload = { documentId, userId, action, metadata };
      console.log("📝 API: Making log access request to:", url, "with payload:", payload);
      try {
        const response = await this.fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        });
        console.log("📝 API: Log access response status:", response.status);
        console.log("📝 API: Log access response ok:", response.ok);
        if (!response.ok) {
          const errorText = await response.text();
          console.error("❌ API: Log access error response:", errorText);
          let errorData;
          try {
            errorData = JSON.parse(errorText);
          } catch {
            errorData = { error: errorText };
          }
          throw new Error(errorData.error || "Failed to log access");
        }
        const result = await response.json();
        console.log("📝 API: Log access success:", result);
        return result;
      } catch (error) {
        console.error("❌ API: logAccess error:", error);
        throw error;
      }
    }
    // Get compliance statistics (multi-tenant)
    async getComplianceStats(objectType, objectId) {
      var _a, _b;
      console.log("📊 API: getComplianceStats called", { objectType, objectId });
      if (!this.fetch) {
        console.error("❌ API: HubSpot fetch not initialized for compliance stats");
        throw new Error("HubSpot fetch not initialized");
      }
      const portalId = (_b = (_a = this.context) == null ? void 0 : _a.portal) == null ? void 0 : _b.id;
      const teamId = "default";
      if (!portalId) {
        throw new Error("Portal ID not available");
      }
      const url = `${this.baseURL}/api/documents/${teamId}/${portalId}/compliance-stats`;
      console.log("📊 API: Making compliance stats request to:", url);
      try {
        const response = await this.fetch(url, {
          method: "GET"
        });
        console.log("📊 API: Compliance stats response status:", response.status);
        console.log("📊 API: Compliance stats response ok:", response.ok);
        if (!response.ok) {
          const errorText = await response.text();
          console.error("❌ API: Compliance stats error response:", errorText);
          let errorData;
          try {
            errorData = JSON.parse(errorText);
          } catch {
            errorData = { error: errorText };
          }
          throw new Error(errorData.error || "Failed to fetch compliance stats");
        }
        const result = await response.json();
        console.log("📊 API: Compliance stats data:", result);
        return result;
      } catch (error) {
        console.error("❌ API: getComplianceStats error:", error);
        throw error;
      }
    }
    // Health check
    async healthCheck() {
      console.log("🏥 API: healthCheck called");
      if (!this.fetch) {
        console.error("❌ API: HubSpot fetch not initialized for health check");
        return { status: "unavailable", error: "HubSpot fetch not initialized" };
      }
      const url = `${this.baseURL}/api/health`;
      console.log("🏥 API: Making health check request to:", url);
      try {
        const response = await this.fetch(url);
        console.log("🏥 API: Health check response status:", response.status);
        console.log("🏥 API: Health check response ok:", response.ok);
        const result = await response.json();
        console.log("🏥 API: Health check result:", result);
        return result;
      } catch (error) {
        console.error("❌ API: healthCheck error:", error);
        return { status: "unavailable", error: error.message };
      }
    }
  }
  hubspot.extend((extensionProps) => {
    console.log("🔧 Extension props received:", extensionProps);
    console.log("🔧 Extension context:", extensionProps.context);
    console.log("🔧 Extension actions:", extensionProps.actions);
    console.log("🔧 Extension fetch:", extensionProps.fetch);
    console.log("🔧 All extension keys:", Object.keys(extensionProps));
    console.log("🔧 hubspot.fetch directly:", hubspot.fetch);
    console.log("🔧 hubspot object:", hubspot);
    console.log("🔧 typeof hubspot.fetch:", typeof hubspot.fetch);
    const { context, actions, runServerlessFunction } = extensionProps;
    return /* @__PURE__ */ React2.createElement(
      DocumentAccessCard,
      {
        context,
        actions,
        runServerlessFunction
      }
    );
  });
  const DocumentAccessCard = ({ context, actions, runServerlessFunction }) => {
    var _a, _b, _c, _d, _e;
    console.log("🚀 DocumentAccessCard initialized");
    console.log("📋 Context received:", context);
    console.log("🔧 Actions available:", Object.keys(actions || {}));
    console.log("🔧 Actions details:", actions);
    console.log("🔧 runServerlessFunction available:", typeof runServerlessFunction);
    console.log("🔧 User info:", context.user);
    console.log("🔧 Portal info:", context.portal);
    console.log("🔧 fetchCrmObjectProperties:", actions.fetchCrmObjectProperties);
    console.log("🔧 refreshObjectProperties:", actions.refreshObjectProperties);
    const [documents, setDocuments] = React2.useState([]);
    const [accessLogs, setAccessLogs] = React2.useState([]);
    const [loading, setLoading] = React2.useState(true);
    const [uploading, setUploading] = React2.useState(false);
    const [searchTerm, setSearchTerm] = React2.useState("");
    const [selectedSession, setSelectedSession] = React2.useState(null);
    const [showSessionCard, setShowSessionCard] = React2.useState(false);
    const [error, setError] = React2.useState(null);
    const [apiService, setApiService] = React2.useState(null);
    const objectId = (_a = context.crm) == null ? void 0 : _a.objectId;
    const objectType = (_b = context.crm) == null ? void 0 : _b.objectTypeId;
    console.log("📊 Object details:", { objectId, objectType, fullObjectType: (_c = context.crm) == null ? void 0 : _c.objectType });
    React2.useEffect(() => {
      console.log("🔧 Setting up hubspot.fetch API service...");
      if (typeof hubspot.fetch === "function") {
        console.log("✅ hubspot.fetch is available, creating API service");
        const api = new AccessShieldAPI(hubspot.fetch, context);
        setApiService(api);
      } else {
        console.error("❌ hubspot.fetch not available");
        setError("HubSpot fetch API not available");
      }
    }, [objectId, context.user]);
    React2.useEffect(() => {
      console.log("📡 Checking if ready to load data:", { objectId, hasApiService: !!apiService });
      if (objectId && apiService) {
        console.log("▶️ Starting data load...");
        loadData();
      } else {
        console.log("⏳ Waiting for objectId and apiService...", { objectId, hasApiService: !!apiService });
      }
    }, [objectId, apiService]);
    const loadData = async () => {
      console.log("📥 loadData called");
      setLoading(true);
      setError(null);
      try {
        console.log("📞 Making API calls...");
        console.log("🎯 API endpoints will be called with:", { objectType, objectId });
        const [documentsResponse, logsResponse] = await Promise.all([
          apiService.getDocuments(objectType, objectId),
          apiService.getAccessLogs(objectId)
        ]);
        console.log("📄 Documents response:", documentsResponse);
        console.log("📜 Logs response:", logsResponse);
        setDocuments(documentsResponse.documents || []);
        setAccessLogs(logsResponse.logs || []);
        console.log("✅ Data loaded successfully");
      } catch (err) {
        console.error("❌ Error loading data:", err);
        console.error("❌ Error details:", {
          message: err.message,
          stack: err.stack,
          name: err.name
        });
        setError("Failed to load documents and access logs: " + err.message);
      } finally {
        console.log("🏁 Setting loading to false");
        setLoading(false);
      }
    };
    accessLogs.filter(
      (log) => {
        var _a2, _b2, _c2;
        return ((_a2 = log.fileName) == null ? void 0 : _a2.toLowerCase().includes(searchTerm.toLowerCase())) || ((_b2 = log.userName) == null ? void 0 : _b2.toLowerCase().includes(searchTerm.toLowerCase())) || ((_c2 = log.accessType) == null ? void 0 : _c2.toLowerCase().includes(searchTerm.toLowerCase()));
      }
    );
    if (loading) {
      console.log("🔄 Rendering loading state");
      return /* @__PURE__ */ React2.createElement(Card, null, /* @__PURE__ */ React2.createElement(Flex, { direction: "column", gap: "medium", justify: "center", align: "center" }, /* @__PURE__ */ React2.createElement(LoadingSpinner, null), /* @__PURE__ */ React2.createElement(Text, null, "Loading AccessShield...")));
    }
    console.log("🎨 Rendering main component with data:", {
      documentsCount: documents.length,
      logsCount: accessLogs.length,
      hasError: !!error
    });
    return /* @__PURE__ */ React2.createElement(Card, null, /* @__PURE__ */ React2.createElement(Flex, { direction: "column", gap: "medium" }, /* @__PURE__ */ React2.createElement(Heading, null, "AccessShield by KRNL"), error && /* @__PURE__ */ React2.createElement(Alert, { variant: "error", title: "Error" }, error), /* @__PURE__ */ React2.createElement(Text, { variant: "microcopy" }, "Secure document management with blockchain verification and identity-bound watermarking."), documents.length > 0 ? /* @__PURE__ */ React2.createElement(Card, null, /* @__PURE__ */ React2.createElement(Flex, { direction: "column", gap: "small" }, /* @__PURE__ */ React2.createElement(Text, { weight: "bold" }, "Latest Document"), /* @__PURE__ */ React2.createElement(Text, { variant: "microcopy" }, (_d = documents[0]) == null ? void 0 : _d.fileName, " - ", (_e = documents[0]) == null ? void 0 : _e.blockchainStatus), /* @__PURE__ */ React2.createElement(Text, { variant: "microcopy" }, "Go to the Dashboard tab for full document management."))) : /* @__PURE__ */ React2.createElement(Card, null, /* @__PURE__ */ React2.createElement(Flex, { direction: "column", gap: "small" }, /* @__PURE__ */ React2.createElement(Text, { weight: "bold" }, "No Documents Yet"), /* @__PURE__ */ React2.createElement(Text, { variant: "microcopy" }, "Go to the Dashboard tab to upload and manage documents.")))));
  };
  return DocumentAccessCard;
})(React, RemoteUI);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdW1lbnRBY2Nlc3NDYXJkLmpzIiwic291cmNlcyI6WyIuLi9jYXJkcy9ub2RlX21vZHVsZXMvQGh1YnNwb3QvdWktZXh0ZW5zaW9ucy9kaXN0L2ludGVybmFsL2dsb2JhbC11dGlscy5qcyIsIi4uL2NhcmRzL25vZGVfbW9kdWxlcy9AaHVic3BvdC91aS1leHRlbnNpb25zL2Rpc3QvaHVic3BvdC5qcyIsIi4uL2NhcmRzL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QtanN4LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMiLCIuLi9jYXJkcy9ub2RlX21vZHVsZXMvcmVhY3QvanN4LXJ1bnRpbWUuanMiLCIuLi9jYXJkcy9ub2RlX21vZHVsZXMvQGh1YnNwb3QvdWktZXh0ZW5zaW9ucy9kaXN0L3NoYXJlZC91dGlscy9yZW1vdGUtY29tcG9uZW50LXJlZ2lzdHJ5LmpzIiwiLi4vY2FyZHMvbm9kZV9tb2R1bGVzL0BodWJzcG90L3VpLWV4dGVuc2lvbnMvZGlzdC9zaGFyZWQvcmVtb3RlQ29tcG9uZW50cy5qcyIsIi4uL2NhcmRzL25vZGVfbW9kdWxlcy9AaHVic3BvdC91aS1leHRlbnNpb25zL2Rpc3QvaW50ZXJuYWwvaG9vay11dGlscy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvZGlzdC9tb21lbnQuanMiLCIuLi9jYXJkcy9hcGlTZXJ2aWNlLmpzIiwiLi4vY2FyZHMvRG9jdW1lbnRBY2Nlc3NDYXJkLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENoZWNrcyBpZiB0aGUgY3VycmVudCBlbnZpcm9ubWVudCBpcyBhIEh1YlNwb3QgZXh0ZW5zaW9uIHdvcmtlci5cbiAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGN1cnJlbnQgZW52aXJvbm1lbnQgaXMgYSBIdWJTcG90IGV4dGVuc2lvbiB3b3JrZXIuXG4gKi9cbmNvbnN0IGlzUnVubmluZ0luV29ya2VyID0gKCkgPT4gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmXG4gICAgc2VsZi5fX0hVQlNQT1RfRVhURU5TSU9OX1dPUktFUl9fID09PSB0cnVlO1xuLyoqXG4gKiBBIGZha2Ugd29ya2VyIGdsb2JhbHMgb2JqZWN0IGZvciB1c2UgaW4gdGVzdCBlbnZpcm9ubWVudHMuXG4gKi9cbmNvbnN0IGZha2VXb3JrZXJHbG9iYWxzID0ge1xuICAgIGxvZ2dlcjoge1xuICAgICAgICBkZWJ1ZzogKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICBpbmZvOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKGRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICB3YXJuOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZGF0YSk7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBleHRlbmRfVjI6ICgpID0+IHtcbiAgICAgICAgLy8gTm8tb3AgaW4gdGVzdCBlbnZpcm9ubWVudFxuICAgIH0sXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciB3ZSBhcmUgbm90IHVzaW5nIHRoZSB3b3JrZXIgZW5kcG9pbnQgaW4gdGVzdHMgZW52LlxuICAgIF9fdXNlRXh0ZW5zaW9uQ29udGV4dDogKCkgPT4ge1xuICAgICAgICAvLyBOby1vcCBpbiB0ZXN0IGVudmlyb25tZW50XG4gICAgfSxcbn07XG4vKipcbiAqIEdldHMgdGhlIHdvcmtlciBnbG9iYWxzIG9iamVjdCBmb3IgdGhlIGN1cnJlbnQgZW52aXJvbm1lbnQuXG4gKiBAcmV0dXJucyBUaGUgd29ya2VyIGdsb2JhbHMgb2JqZWN0LlxuICovXG5leHBvcnQgY29uc3QgZ2V0V29ya2VyR2xvYmFscyA9ICgpID0+IHtcbiAgICByZXR1cm4gaXNSdW5uaW5nSW5Xb3JrZXIoKVxuICAgICAgICA/IHNlbGZcbiAgICAgICAgOiBmYWtlV29ya2VyR2xvYmFscztcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBodWJzcG90LWRldi9uby1jb25mdXNpbmctYnJvd3Nlci1nbG9iYWxzICovXG5pbXBvcnQgeyBnZXRXb3JrZXJHbG9iYWxzIH0gZnJvbSBcIi4vaW50ZXJuYWwvZ2xvYmFsLXV0aWxzLmpzXCI7XG5jb25zdCBleHRlbmRfVjIgPSBnZXRXb3JrZXJHbG9iYWxzKCkuZXh0ZW5kX1YyO1xuZXhwb3J0IGZ1bmN0aW9uIHNlcnZlcmxlc3MobmFtZSwgb3B0aW9ucykge1xuICAgIHJldHVybiBzZWxmLnNlcnZlcmxlc3MobmFtZSwgb3B0aW9ucyk7XG59XG5leHBvcnQgZnVuY3Rpb24gZmV0Y2godXJsLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHNlbGYuaHNGZXRjaCh1cmwsIG9wdGlvbnMpO1xufVxuZXhwb3J0IGNvbnN0IGh1YnNwb3QgPSB7XG4gICAgZXh0ZW5kOiBleHRlbmRfVjIsXG4gICAgc2VydmVybGVzcyxcbiAgICBmZXRjaCxcbn07XG4iLCIvKipcbiAqIEBsaWNlbnNlIFJlYWN0XG4gKiByZWFjdC1qc3gtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpO1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJyk7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJyk7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QubGF6eScpO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuXG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IFJlYWN0Ll9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xuXG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9zYWZlLXN0cmluZy1jb2VyY2lvblxuXG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIFN0cmluZyhpdGVtKTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG52YXIgZW5hYmxlQ2FjaGVFbGVtZW50ID0gZmFsc2U7XG52YXIgZW5hYmxlVHJhbnNpdGlvblRyYWNpbmcgPSBmYWxzZTsgLy8gTm8ga25vd24gYnVncywgYnV0IG5lZWRzIHBlcmZvcm1hbmNlIHRlc3RpbmdcblxudmFyIGVuYWJsZUxlZ2FjeUhpZGRlbiA9IGZhbHNlOyAvLyBFbmFibGVzIHVuc3RhYmxlX2F2b2lkVGhpc0ZhbGxiYWNrIGZlYXR1cmUgaW4gRmliZXJcbi8vIHN0dWZmLiBJbnRlbmRlZCB0byBlbmFibGUgUmVhY3QgY29yZSBtZW1iZXJzIHRvIG1vcmUgZWFzaWx5IGRlYnVnIHNjaGVkdWxpbmdcbi8vIGlzc3VlcyBpbiBERVYgYnVpbGRzLlxuXG52YXIgZW5hYmxlRGVidWdUcmFjaW5nID0gZmFsc2U7IC8vIFRyYWNrIHdoaWNoIEZpYmVyKHMpIHNjaGVkdWxlIHJlbmRlciB3b3JrLlxuXG52YXIgUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRTtcblxue1xuICBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFID0gU3ltYm9sLmZvcigncmVhY3QubW9kdWxlLnJlZmVyZW5jZScpO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgZW5hYmxlRGVidWdUcmFjaW5nICB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IGVuYWJsZUxlZ2FjeUhpZGRlbiAgfHwgdHlwZSA9PT0gUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgIHx8IGVuYWJsZUNhY2hlRWxlbWVudCAgfHwgZW5hYmxlVHJhbnNpdGlvblRyYWNpbmcgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIFRoaXMgbmVlZHMgdG8gaW5jbHVkZSBhbGwgcG9zc2libGUgbW9kdWxlIHJlZmVyZW5jZSBvYmplY3RcbiAgICAvLyB0eXBlcyBzdXBwb3J0ZWQgYnkgYW55IEZsaWdodCBjb25maWd1cmF0aW9uIGFueXdoZXJlIHNpbmNlXG4gICAgLy8gd2UgZG9uJ3Qga25vdyB3aGljaCBGbGlnaHQgYnVpbGQgdGhpcyB3aWxsIGVuZCB1cCBiZWluZyB1c2VkXG4gICAgLy8gd2l0aC5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFIHx8IHR5cGUuZ2V0TW9kdWxlSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGRpc3BsYXlOYW1lID0gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lO1xuXG4gIGlmIChkaXNwbGF5TmFtZSkge1xuICAgIHJldHVybiBkaXNwbGF5TmFtZTtcbiAgfVxuXG4gIHZhciBmdW5jdGlvbk5hbWUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgJyc7XG4gIHJldHVybiBmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWU7XG59IC8vIEtlZXAgaW4gc3luYyB3aXRoIHJlYWN0LXJlY29uY2lsZXIvZ2V0Q29tcG9uZW50TmFtZUZyb21GaWJlclxuXG5cbmZ1bmN0aW9uIGdldENvbnRleHROYW1lKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgJ0NvbnRleHQnO1xufSAvLyBOb3RlIHRoYXQgdGhlIHJlY29uY2lsZXIgcGFja2FnZSBzaG91bGQgZ2VuZXJhbGx5IHByZWZlciB0byB1c2UgZ2V0Q29tcG9uZW50TmFtZUZyb21GaWJlcigpIGluc3RlYWQuXG5cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIC8vIEhvc3Qgcm9vdCwgdGV4dCBub2RlIG9yIGp1c3QgaW52YWxpZCB0eXBlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAge1xuICAgIGlmICh0eXBlb2YgdHlwZS50YWcgPT09ICdudW1iZXInKSB7XG4gICAgICBlcnJvcignUmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBvYmplY3QgaW4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG5cbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xuXG4gICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgcmV0dXJuICdQcm9maWxlcic7XG5cbiAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2VMaXN0JztcblxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgIHZhciBjb250ZXh0ID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKGNvbnRleHQpICsgJy5Db25zdW1lcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKHByb3ZpZGVyLl9jb250ZXh0KSArICcuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHZhciBvdXRlck5hbWUgPSB0eXBlLmRpc3BsYXlOYW1lIHx8IG51bGw7XG5cbiAgICAgICAgaWYgKG91dGVyTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBvdXRlck5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUudHlwZSkgfHwgJ01lbW8nO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoaW5pdChwYXlsb2FkKSk7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1mYWxsdGhyb3VnaFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgYXNzaWduID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gSGVscGVycyB0byBwYXRjaCBjb25zb2xlLmxvZ3MgdG8gYXZvaWQgbG9nZ2luZyBkdXJpbmcgc2lkZS1lZmZlY3QgZnJlZVxuLy8gcmVwbGF5aW5nIG9uIHJlbmRlciBmdW5jdGlvbi4gVGhpcyBjdXJyZW50bHkgb25seSBwYXRjaGVzIHRoZSBvYmplY3Rcbi8vIGxhemlseSB3aGljaCB3b24ndCBjb3ZlciBpZiB0aGUgbG9nIGZ1bmN0aW9uIHdhcyBleHRyYWN0ZWQgZWFnZXJseS5cbi8vIFdlIGNvdWxkIGFsc28gZWFnZXJseSBwYXRjaCB0aGUgbWV0aG9kLlxudmFyIGRpc2FibGVkRGVwdGggPSAwO1xudmFyIHByZXZMb2c7XG52YXIgcHJldkluZm87XG52YXIgcHJldldhcm47XG52YXIgcHJldkVycm9yO1xudmFyIHByZXZHcm91cDtcbnZhciBwcmV2R3JvdXBDb2xsYXBzZWQ7XG52YXIgcHJldkdyb3VwRW5kO1xuXG5mdW5jdGlvbiBkaXNhYmxlZExvZygpIHt9XG5cbmRpc2FibGVkTG9nLl9fcmVhY3REaXNhYmxlZExvZyA9IHRydWU7XG5mdW5jdGlvbiBkaXNhYmxlTG9ncygpIHtcbiAge1xuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHByZXZMb2cgPSBjb25zb2xlLmxvZztcbiAgICAgIHByZXZJbmZvID0gY29uc29sZS5pbmZvO1xuICAgICAgcHJldldhcm4gPSBjb25zb2xlLndhcm47XG4gICAgICBwcmV2RXJyb3IgPSBjb25zb2xlLmVycm9yO1xuICAgICAgcHJldkdyb3VwID0gY29uc29sZS5ncm91cDtcbiAgICAgIHByZXZHcm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQ7XG4gICAgICBwcmV2R3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE5MDk5XG5cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZGlzYWJsZWRMb2csXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGluZm86IHByb3BzLFxuICAgICAgICBsb2c6IHByb3BzLFxuICAgICAgICB3YXJuOiBwcm9wcyxcbiAgICAgICAgZXJyb3I6IHByb3BzLFxuICAgICAgICBncm91cDogcHJvcHMsXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBFbmQ6IHByb3BzXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgZGlzYWJsZWREZXB0aCsrO1xuICB9XG59XG5mdW5jdGlvbiByZWVuYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBkaXNhYmxlZERlcHRoLS07XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgbG9nOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZMb2dcbiAgICAgICAgfSksXG4gICAgICAgIGluZm86IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkluZm9cbiAgICAgICAgfSksXG4gICAgICAgIHdhcm46IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldldhcm5cbiAgICAgICAgfSksXG4gICAgICAgIGVycm9yOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZFcnJvclxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXA6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cENvbGxhcHNlZDogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBDb2xsYXBzZWRcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwRW5kOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cEVuZFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZERlcHRoIDwgMCkge1xuICAgICAgZXJyb3IoJ2Rpc2FibGVkRGVwdGggZmVsbCBiZWxvdyB6ZXJvLiAnICsgJ1RoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXI7XG52YXIgcHJlZml4O1xuZnVuY3Rpb24gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICBpZiAocHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEV4dHJhY3QgdGhlIFZNIHNwZWNpZmljIHByZWZpeCB1c2VkIGJ5IGVhY2ggbGluZS5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHguc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7XG4gICAgICAgIHByZWZpeCA9IG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xuICAgICAgfVxuICAgIH0gLy8gV2UgdXNlIHRoZSBwcmVmaXggdG8gZW5zdXJlIG91ciBzdGFja3MgbGluZSB1cCB3aXRoIG5hdGl2ZSBzdGFjayBmcmFtZXMuXG5cblxuICAgIHJldHVybiAnXFxuJyArIHByZWZpeCArIG5hbWU7XG4gIH1cbn1cbnZhciByZWVudHJ5ID0gZmFsc2U7XG52YXIgY29tcG9uZW50RnJhbWVDYWNoZTtcblxue1xuICB2YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwO1xuICBjb21wb25lbnRGcmFtZUNhY2hlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBjb25zdHJ1Y3QpIHtcbiAgLy8gSWYgc29tZXRoaW5nIGFza2VkIGZvciBhIHN0YWNrIGluc2lkZSBhIGZha2UgcmVuZGVyLCBpdCBzaG91bGQgZ2V0IGlnbm9yZWQuXG4gIGlmICggIWZuIHx8IHJlZW50cnkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB7XG4gICAgdmFyIGZyYW1lID0gY29tcG9uZW50RnJhbWVDYWNoZS5nZXQoZm4pO1xuXG4gICAgaWYgKGZyYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udHJvbDtcbiAgcmVlbnRyeSA9IHRydWU7XG4gIHZhciBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlID0gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7IC8vICRGbG93Rml4TWUgSXQgZG9lcyBhY2NlcHQgdW5kZWZpbmVkLlxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gdW5kZWZpbmVkO1xuICB2YXIgcHJldmlvdXNEaXNwYXRjaGVyO1xuXG4gIHtcbiAgICBwcmV2aW91c0Rpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IG51bGw7XG4gICAgZGlzYWJsZUxvZ3MoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBzaG91bGQgdGhyb3cuXG4gICAgaWYgKGNvbnN0cnVjdCkge1xuICAgICAgLy8gU29tZXRoaW5nIHNob3VsZCBiZSBzZXR0aW5nIHRoZSBwcm9wcyBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICB2YXIgRmFrZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH07IC8vICRGbG93Rml4TWVcblxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFrZS5wcm90b3R5cGUsICdwcm9wcycsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gV2UgdXNlIGEgdGhyb3dpbmcgc2V0dGVyIGluc3RlYWQgb2YgZnJvemVuIG9yIG5vbi13cml0YWJsZSBwcm9wc1xuICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCB3b24ndCB0aHJvdyBpbiBhIG5vbi1zdHJpY3QgbW9kZSBmdW5jdGlvbi5cbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmNvbnN0cnVjdCkge1xuICAgICAgICAvLyBXZSBjb25zdHJ1Y3QgYSBkaWZmZXJlbnQgY29udHJvbCBmb3IgdGhpcyBjYXNlIHRvIGluY2x1ZGUgYW55IGV4dHJhXG4gICAgICAgIC8vIGZyYW1lcyBhZGRlZCBieSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoRmFrZSwgW10pO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChmbiwgW10sIEZha2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBGYWtlLmNhbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZm4uY2FsbChGYWtlLnByb3RvdHlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgfVxuXG4gICAgICBmbigpO1xuICAgIH1cbiAgfSBjYXRjaCAoc2FtcGxlKSB7XG4gICAgLy8gVGhpcyBpcyBpbmxpbmVkIG1hbnVhbGx5IGJlY2F1c2UgY2xvc3VyZSBkb2Vzbid0IGRvIGl0IGZvciB1cy5cbiAgICBpZiAoc2FtcGxlICYmIGNvbnRyb2wgJiYgdHlwZW9mIHNhbXBsZS5zdGFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFRoaXMgZXh0cmFjdHMgdGhlIGZpcnN0IGZyYW1lIGZyb20gdGhlIHNhbXBsZSB0aGF0IGlzbid0IGFsc28gaW4gdGhlIGNvbnRyb2wuXG4gICAgICAvLyBTa2lwcGluZyBvbmUgZnJhbWUgdGhhdCB3ZSBhc3N1bWUgaXMgdGhlIGZyYW1lIHRoYXQgY2FsbHMgdGhlIHR3by5cbiAgICAgIHZhciBzYW1wbGVMaW5lcyA9IHNhbXBsZS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgY29udHJvbExpbmVzID0gY29udHJvbC5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgcyA9IHNhbXBsZUxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgYyA9IGNvbnRyb2xMaW5lcy5sZW5ndGggLSAxO1xuXG4gICAgICB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCAmJiBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgIC8vIFdlIGV4cGVjdCBhdCBsZWFzdCBvbmUgc3RhY2sgZnJhbWUgdG8gYmUgc2hhcmVkLlxuICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyB3aWxsIGJlIHRoZSByb290IG1vc3Qgb25lLiBIb3dldmVyLCBzdGFjayBmcmFtZXMgbWF5IGJlXG4gICAgICAgIC8vIGN1dCBvZmYgZHVlIHRvIG1heGltdW0gc3RhY2sgbGltaXRzLiBJbiB0aGlzIGNhc2UsIG9uZSBtYXliZSBjdXQgb2ZmXG4gICAgICAgIC8vIGVhcmxpZXIgdGhhbiB0aGUgb3RoZXIuIFdlIGFzc3VtZSB0aGF0IHRoZSBzYW1wbGUgaXMgbG9uZ2VyIG9yIHRoZSBzYW1lXG4gICAgICAgIC8vIGFuZCB0aGVyZSBmb3IgY3V0IG9mZiBlYXJsaWVyLiBTbyB3ZSBzaG91bGQgZmluZCB0aGUgcm9vdCBtb3N0IGZyYW1lIGluXG4gICAgICAgIC8vIHRoZSBzYW1wbGUgc29tZXdoZXJlIGluIHRoZSBjb250cm9sLlxuICAgICAgICBjLS07XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBzID49IDEgJiYgYyA+PSAwOyBzLS0sIGMtLSkge1xuICAgICAgICAvLyBOZXh0IHdlIGZpbmQgdGhlIGZpcnN0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHdoaWNoIHNob3VsZCBiZSB0aGVcbiAgICAgICAgLy8gZnJhbWUgdGhhdCBjYWxsZWQgb3VyIHNhbXBsZSBmdW5jdGlvbiBhbmQgdGhlIGNvbnRyb2wuXG4gICAgICAgIGlmIChzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgLy8gSW4gVjgsIHRoZSBmaXJzdCBsaW5lIGlzIGRlc2NyaWJpbmcgdGhlIG1lc3NhZ2UgYnV0IG90aGVyIFZNcyBkb24ndC5cbiAgICAgICAgICAvLyBJZiB3ZSdyZSBhYm91dCB0byByZXR1cm4gdGhlIGZpcnN0IGxpbmUsIGFuZCB0aGUgY29udHJvbCBpcyBhbHNvIG9uIHRoZSBzYW1lXG4gICAgICAgICAgLy8gbGluZSwgdGhhdCdzIGEgcHJldHR5IGdvb2QgaW5kaWNhdG9yIHRoYXQgb3VyIHNhbXBsZSB0aHJldyBhdCBzYW1lIGxpbmUgYXNcbiAgICAgICAgICAvLyB0aGUgY29udHJvbC4gSS5lLiBiZWZvcmUgd2UgZW50ZXJlZCB0aGUgc2FtcGxlIGZyYW1lLiBTbyB3ZSBpZ25vcmUgdGhpcyByZXN1bHQuXG4gICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBwYXNzZWQgYSBjbGFzcyB0byBmdW5jdGlvbiBjb21wb25lbnQsIG9yIG5vbi1mdW5jdGlvbi5cbiAgICAgICAgICBpZiAocyAhPT0gMSB8fCBjICE9PSAxKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIHMtLTtcbiAgICAgICAgICAgICAgYy0tOyAvLyBXZSBtYXkgc3RpbGwgaGF2ZSBzaW1pbGFyIGludGVybWVkaWF0ZSBmcmFtZXMgZnJvbSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgICAgICAgIC8vIFRoZSBuZXh0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHNob3VsZCBiZSBvdXIgbWF0Y2ggdGhvdWdoLlxuXG4gICAgICAgICAgICAgIGlmIChjIDwgMCB8fCBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgICAgICAgLy8gVjggYWRkcyBhIFwibmV3XCIgcHJlZml4IGZvciBuYXRpdmUgY2xhc3Nlcy4gTGV0J3MgcmVtb3ZlIGl0IHRvIG1ha2UgaXQgcHJldHRpZXIuXG4gICAgICAgICAgICAgICAgdmFyIF9mcmFtZSA9ICdcXG4nICsgc2FtcGxlTGluZXNbc10ucmVwbGFjZSgnIGF0IG5ldyAnLCAnIGF0ICcpOyAvLyBJZiBvdXIgY29tcG9uZW50IGZyYW1lIGlzIGxhYmVsZWQgXCI8YW5vbnltb3VzPlwiXG4gICAgICAgICAgICAgICAgLy8gYnV0IHdlIGhhdmUgYSB1c2VyLXByb3ZpZGVkIFwiZGlzcGxheU5hbWVcIlxuICAgICAgICAgICAgICAgIC8vIHNwbGljZSBpdCBpbiB0byBtYWtlIHRoZSBzdGFjayBtb3JlIHJlYWRhYmxlLlxuXG5cbiAgICAgICAgICAgICAgICBpZiAoZm4uZGlzcGxheU5hbWUgJiYgX2ZyYW1lLmluY2x1ZGVzKCc8YW5vbnltb3VzPicpKSB7XG4gICAgICAgICAgICAgICAgICBfZnJhbWUgPSBfZnJhbWUucmVwbGFjZSgnPGFub255bW91cz4nLCBmbi5kaXNwbGF5TmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgX2ZyYW1lKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIFJldHVybiB0aGUgbGluZSB3ZSBmb3VuZC5cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mcmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgcmVlbnRyeSA9IGZhbHNlO1xuXG4gICAge1xuICAgICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gcHJldmlvdXNEaXNwYXRjaGVyO1xuICAgICAgcmVlbmFibGVMb2dzKCk7XG4gICAgfVxuXG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlO1xuICB9IC8vIEZhbGxiYWNrIHRvIGp1c3QgdXNpbmcgdGhlIG5hbWUgaWYgd2UgY291bGRuJ3QgbWFrZSBpdCB0aHJvdy5cblxuXG4gIHZhciBuYW1lID0gZm4gPyBmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lIDogJyc7XG4gIHZhciBzeW50aGV0aWNGcmFtZSA9IG5hbWUgPyBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lKSA6ICcnO1xuXG4gIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgc3ludGhldGljRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzeW50aGV0aWNGcmFtZTtcbn1cbmZ1bmN0aW9uIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZShmbiwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4gIHJldHVybiAhIShwcm90b3R5cGUgJiYgcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZSwgc291cmNlLCBvd25lckZuKSB7XG5cbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHtcbiAgICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKHR5cGUsIHNob3VsZENvbnN0cnVjdCh0eXBlKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSh0eXBlKTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2UnKTtcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZUxpc3QnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLnJlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAvLyBNZW1vIG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUudHlwZSwgc291cmNlLCBvd25lckZuKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBMYXp5IG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihpbml0KHBheWxvYWQpLCBzb3VyY2UsIG93bmVyRm4pO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZWxlbWVudCkge1xuICB7XG4gICAgLy8gJEZsb3dGaXhNZSBUaGlzIGlzIG9rYXkgYnV0IEZsb3cgZG9lc24ndCBrbm93IGl0LlxuICAgIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoaGFzT3duUHJvcGVydHkpO1xuXG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yJDEgPSB2b2lkIDA7IC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9wcm9kLWVycm9yLWNvZGVzXG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIGlzQXJyYXlJbXBsID0gQXJyYXkuaXNBcnJheTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlZGVjbGFyZVxuXG5mdW5jdGlvbiBpc0FycmF5KGEpIHtcbiAgcmV0dXJuIGlzQXJyYXlJbXBsKGEpO1xufVxuXG4vKlxuICogVGhlIGAnJyArIHZhbHVlYCBwYXR0ZXJuICh1c2VkIGluIGluIHBlcmYtc2Vuc2l0aXZlIGNvZGUpIHRocm93cyBmb3IgU3ltYm9sXG4gKiBhbmQgVGVtcG9yYWwuKiB0eXBlcy4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9wdWxsLzIyMDY0LlxuICpcbiAqIFRoZSBmdW5jdGlvbnMgaW4gdGhpcyBtb2R1bGUgd2lsbCB0aHJvdyBhbiBlYXNpZXItdG8tdW5kZXJzdGFuZCxcbiAqIGVhc2llci10by1kZWJ1ZyBleGNlcHRpb24gd2l0aCBhIGNsZWFyIGVycm9ycyBtZXNzYWdlIG1lc3NhZ2UgZXhwbGFpbmluZyB0aGVcbiAqIHByb2JsZW0uIChJbnN0ZWFkIG9mIGEgY29uZnVzaW5nIGV4Y2VwdGlvbiB0aHJvd24gaW5zaWRlIHRoZSBpbXBsZW1lbnRhdGlvblxuICogb2YgdGhlIGB2YWx1ZWAgb2JqZWN0KS5cbiAqL1xuLy8gJEZsb3dGaXhNZSBvbmx5IGNhbGxlZCBpbiBERVYsIHNvIHZvaWQgcmV0dXJuIGlzIG5vdCBwb3NzaWJsZS5cbmZ1bmN0aW9uIHR5cGVOYW1lKHZhbHVlKSB7XG4gIHtcbiAgICAvLyB0b1N0cmluZ1RhZyBpcyBuZWVkZWQgZm9yIG5hbWVzcGFjZWQgdHlwZXMgbGlrZSBUZW1wb3JhbC5JbnN0YW50XG4gICAgdmFyIGhhc1RvU3RyaW5nVGFnID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wudG9TdHJpbmdUYWc7XG4gICAgdmFyIHR5cGUgPSBoYXNUb1N0cmluZ1RhZyAmJiB2YWx1ZVtTeW1ib2wudG9TdHJpbmdUYWddIHx8IHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgfHwgJ09iamVjdCc7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cbn0gLy8gJEZsb3dGaXhNZSBvbmx5IGNhbGxlZCBpbiBERVYsIHNvIHZvaWQgcmV0dXJuIGlzIG5vdCBwb3NzaWJsZS5cblxuXG5mdW5jdGlvbiB3aWxsQ29lcmNpb25UaHJvdyh2YWx1ZSkge1xuICB7XG4gICAgdHJ5IHtcbiAgICAgIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSkge1xuICAvLyBJZiB5b3UgZW5kZWQgdXAgaGVyZSBieSBmb2xsb3dpbmcgYW4gZXhjZXB0aW9uIGNhbGwgc3RhY2ssIGhlcmUncyB3aGF0J3NcbiAgLy8gaGFwcGVuZWQ6IHlvdSBzdXBwbGllZCBhbiBvYmplY3Qgb3Igc3ltYm9sIHZhbHVlIHRvIFJlYWN0IChhcyBhIHByb3AsIGtleSxcbiAgLy8gRE9NIGF0dHJpYnV0ZSwgQ1NTIHByb3BlcnR5LCBzdHJpbmcgcmVmLCBldGMuKSBhbmQgd2hlbiBSZWFjdCB0cmllZCB0b1xuICAvLyBjb2VyY2UgaXQgdG8gYSBzdHJpbmcgdXNpbmcgYCcnICsgdmFsdWVgLCBhbiBleGNlcHRpb24gd2FzIHRocm93bi5cbiAgLy9cbiAgLy8gVGhlIG1vc3QgY29tbW9uIHR5cGVzIHRoYXQgd2lsbCBjYXVzZSB0aGlzIGV4Y2VwdGlvbiBhcmUgYFN5bWJvbGAgaW5zdGFuY2VzXG4gIC8vIGFuZCBUZW1wb3JhbCBvYmplY3RzIGxpa2UgYFRlbXBvcmFsLkluc3RhbnRgLiBCdXQgYW55IG9iamVjdCB0aGF0IGhhcyBhXG4gIC8vIGB2YWx1ZU9mYCBvciBgW1N5bWJvbC50b1ByaW1pdGl2ZV1gIG1ldGhvZCB0aGF0IHRocm93cyB3aWxsIGFsc28gY2F1c2UgdGhpc1xuICAvLyBleGNlcHRpb24uIChMaWJyYXJ5IGF1dGhvcnMgZG8gdGhpcyB0byBwcmV2ZW50IHVzZXJzIGZyb20gdXNpbmcgYnVpbHQtaW5cbiAgLy8gbnVtZXJpYyBvcGVyYXRvcnMgbGlrZSBgK2Agb3IgY29tcGFyaXNvbiBvcGVyYXRvcnMgbGlrZSBgPj1gIGJlY2F1c2UgY3VzdG9tXG4gIC8vIG1ldGhvZHMgYXJlIG5lZWRlZCB0byBwZXJmb3JtIGFjY3VyYXRlIGFyaXRobWV0aWMgb3IgY29tcGFyaXNvbi4pXG4gIC8vXG4gIC8vIFRvIGZpeCB0aGUgcHJvYmxlbSwgY29lcmNlIHRoaXMgb2JqZWN0IG9yIHN5bWJvbCB2YWx1ZSB0byBhIHN0cmluZyBiZWZvcmVcbiAgLy8gcGFzc2luZyBpdCB0byBSZWFjdC4gVGhlIG1vc3QgcmVsaWFibGUgd2F5IGlzIHVzdWFsbHkgYFN0cmluZyh2YWx1ZSlgLlxuICAvL1xuICAvLyBUbyBmaW5kIHdoaWNoIHZhbHVlIGlzIHRocm93aW5nLCBjaGVjayB0aGUgYnJvd3NlciBvciBkZWJ1Z2dlciBjb25zb2xlLlxuICAvLyBCZWZvcmUgdGhpcyBleGNlcHRpb24gd2FzIHRocm93biwgdGhlcmUgc2hvdWxkIGJlIGBjb25zb2xlLmVycm9yYCBvdXRwdXRcbiAgLy8gdGhhdCBzaG93cyB0aGUgdHlwZSAoU3ltYm9sLCBUZW1wb3JhbC5QbGFpbkRhdGUsIGV0Yy4pIHRoYXQgY2F1c2VkIHRoZVxuICAvLyBwcm9ibGVtIGFuZCBob3cgdGhhdCB0eXBlIHdhcyB1c2VkOiBrZXksIGF0cnJpYnV0ZSwgaW5wdXQgdmFsdWUgcHJvcCwgZXRjLlxuICAvLyBJbiBtb3N0IGNhc2VzLCB0aGlzIGNvbnNvbGUgb3V0cHV0IGFsc28gc2hvd3MgdGhlIGNvbXBvbmVudCBhbmQgaXRzXG4gIC8vIGFuY2VzdG9yIGNvbXBvbmVudHMgd2hlcmUgdGhlIGV4Y2VwdGlvbiBoYXBwZW5lZC5cbiAgLy9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG4gIHJldHVybiAnJyArIHZhbHVlO1xufVxuZnVuY3Rpb24gY2hlY2tLZXlTdHJpbmdDb2VyY2lvbih2YWx1ZSkge1xuICB7XG4gICAgaWYgKHdpbGxDb2VyY2lvblRocm93KHZhbHVlKSkge1xuICAgICAgZXJyb3IoJ1RoZSBwcm92aWRlZCBrZXkgaXMgYW4gdW5zdXBwb3J0ZWQgdHlwZSAlcy4nICsgJyBUaGlzIHZhbHVlIG11c3QgYmUgY29lcmNlZCB0byBhIHN0cmluZyBiZWZvcmUgYmVmb3JlIHVzaW5nIGl0IGhlcmUuJywgdHlwZU5hbWUodmFsdWUpKTtcblxuICAgICAgcmV0dXJuIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSk7IC8vIHRocm93ICh0byBoZWxwIGNhbGxlcnMgZmluZCB0cm91Ymxlc2hvb3RpbmcgY29tbWVudHMpXG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bjtcbnZhciBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bjtcbnZhciBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzO1xuXG57XG4gIGRpZFdhcm5BYm91dFN0cmluZ1JlZnMgPSB7fTtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZikge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIHNlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IHNlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3N0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKSwgY29uZmlnLnJlZik7XG5cbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTsgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuLyoqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZmNzL3B1bGwvMTA3XG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICovXG5cbmZ1bmN0aW9uIGpzeERFVih0eXBlLCBjb25maWcsIG1heWJlS2V5LCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciBwcm9wTmFtZTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gICAgdmFyIHByb3BzID0ge307XG4gICAgdmFyIGtleSA9IG51bGw7XG4gICAgdmFyIHJlZiA9IG51bGw7IC8vIEN1cnJlbnRseSwga2V5IGNhbiBiZSBzcHJlYWQgaW4gYXMgYSBwcm9wLiBUaGlzIGNhdXNlcyBhIHBvdGVudGlhbFxuICAgIC8vIGlzc3VlIGlmIGtleSBpcyBhbHNvIGV4cGxpY2l0bHkgZGVjbGFyZWQgKGllLiA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPlxuICAgIC8vIG9yIDxkaXYga2V5PVwiSGlcIiB7Li4ucHJvcHN9IC8+ICkuIFdlIHdhbnQgdG8gZGVwcmVjYXRlIGtleSBzcHJlYWQsXG4gICAgLy8gYnV0IGFzIGFuIGludGVybWVkaWFyeSBzdGVwLCB3ZSB3aWxsIHVzZSBqc3hERVYgZm9yIGV2ZXJ5dGhpbmcgZXhjZXB0XG4gICAgLy8gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz4sIGJlY2F1c2Ugd2UgYXJlbid0IGN1cnJlbnRseSBhYmxlIHRvIHRlbGwgaWZcbiAgICAvLyBrZXkgaXMgZXhwbGljaXRseSBkZWNsYXJlZCB0byBiZSB1bmRlZmluZWQgb3Igbm90LlxuXG4gICAgaWYgKG1heWJlS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHtcbiAgICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihtYXliZUtleSk7XG4gICAgICB9XG5cbiAgICAgIGtleSA9ICcnICsgbWF5YmVLZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIHtcbiAgICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihjb25maWcua2V5KTtcbiAgICAgIH1cblxuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZik7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG5cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcblxuXG4gICAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcblxuICAgICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bjtcblxue1xuICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IGZhbHNlO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XG4gIHtcbiAgICBpZiAoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKSB7XG4gIHtcbiAgICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAge1xuICAgIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgICBpZiAoIWluZm8pIHtcbiAgICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuXG4gICAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZm87XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcblxuICAgIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlOyAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAgIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG5cbiAgICB2YXIgY2hpbGRPd25lciA9ICcnO1xuXG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpO1xuXG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay93YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheShub2RlKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG5cbiAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobm9kZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wVHlwZXM7XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cbiAgICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wVHlwZXMpIHtcbiAgICAgIC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUuUHJvcFR5cGVzICE9PSB1bmRlZmluZWQgJiYgIXByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duKSB7XG4gICAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7IC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG5cbiAgICAgIHZhciBfbmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKTtcblxuICAgICAgZXJyb3IoJ0NvbXBvbmVudCAlcyBkZWNsYXJlZCBgUHJvcFR5cGVzYCBpbnN0ZWFkIG9mIGBwcm9wVHlwZXNgLiBEaWQgeW91IG1pc3NwZWxsIHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50PycsIF9uYW1lIHx8ICdVbmtub3duJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJyAmJiAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQpIHtcbiAgICAgIGVycm9yKCdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJyk7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGEgZnJhZ21lbnQsIHZhbGlkYXRlIHRoYXQgaXQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgd2l0aCBmcmFnbWVudCBwcm9wc1xuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGZyYWdtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKGtleSAhPT0gJ2NoaWxkcmVuJyAmJiBrZXkgIT09ICdrZXknKSB7XG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICAgIGVycm9yKCdJbnZhbGlkIHByb3AgYCVzYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLiAnICsgJ1JlYWN0LkZyYWdtZW50IGNhbiBvbmx5IGhhdmUgYGtleWAgYW5kIGBjaGlsZHJlbmAgcHJvcHMuJywga2V5KTtcblxuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhZ21lbnQucmVmICE9PSBudWxsKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgZXJyb3IoJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG5cbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBkaWRXYXJuQWJvdXRLZXlTcHJlYWQgPSB7fTtcbmZ1bmN0aW9uIGpzeFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBrZXksIGlzU3RhdGljQ2hpbGRyZW4sIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuXG4gICAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgICB9XG5cbiAgICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKTtcblxuICAgICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgICB9IGVsc2UgaWYgKGlzQXJyYXkodHlwZSkpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xuICAgICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgICB9XG5cbiAgICAgIGVycm9yKCdSZWFjdC5qc3g6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnQgPSBqc3hERVYodHlwZSwgcHJvcHMsIGtleSwgc291cmNlLCBzZWxmKTsgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gICAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAgIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAgIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcblxuXG4gICAgaWYgKHZhbGlkVHlwZSkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG5cbiAgICAgIGlmIChjaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChpc1N0YXRpY0NoaWxkcmVuKSB7XG4gICAgICAgICAgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuW2ldLCB0eXBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZHJlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yKCdSZWFjdC5qc3g6IFN0YXRpYyBjaGlsZHJlbiBzaG91bGQgYWx3YXlzIGJlIGFuIGFycmF5LiAnICsgJ1lvdSBhcmUgbGlrZWx5IGV4cGxpY2l0bHkgY2FsbGluZyBSZWFjdC5qc3hzIG9yIFJlYWN0LmpzeERFVi4gJyArICdVc2UgdGhlIEJhYmVsIHRyYW5zZm9ybSBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbiwgdHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChwcm9wcywgJ2tleScpKSB7XG4gICAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHByb3BzKS5maWx0ZXIoZnVuY3Rpb24gKGspIHtcbiAgICAgICAgICByZXR1cm4gayAhPT0gJ2tleSc7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgYmVmb3JlRXhhbXBsZSA9IGtleXMubGVuZ3RoID4gMCA/ICd7a2V5OiBzb21lS2V5LCAnICsga2V5cy5qb2luKCc6IC4uLiwgJykgKyAnOiAuLi59JyA6ICd7a2V5OiBzb21lS2V5fSc7XG5cbiAgICAgICAgaWYgKCFkaWRXYXJuQWJvdXRLZXlTcHJlYWRbY29tcG9uZW50TmFtZSArIGJlZm9yZUV4YW1wbGVdKSB7XG4gICAgICAgICAgdmFyIGFmdGVyRXhhbXBsZSA9IGtleXMubGVuZ3RoID4gMCA/ICd7JyArIGtleXMuam9pbignOiAuLi4sICcpICsgJzogLi4ufScgOiAne30nO1xuXG4gICAgICAgICAgZXJyb3IoJ0EgcHJvcHMgb2JqZWN0IGNvbnRhaW5pbmcgYSBcImtleVwiIHByb3AgaXMgYmVpbmcgc3ByZWFkIGludG8gSlNYOlxcbicgKyAnICBsZXQgcHJvcHMgPSAlcztcXG4nICsgJyAgPCVzIHsuLi5wcm9wc30gLz5cXG4nICsgJ1JlYWN0IGtleXMgbXVzdCBiZSBwYXNzZWQgZGlyZWN0bHkgdG8gSlNYIHdpdGhvdXQgdXNpbmcgc3ByZWFkOlxcbicgKyAnICBsZXQgcHJvcHMgPSAlcztcXG4nICsgJyAgPCVzIGtleT17c29tZUtleX0gey4uLnByb3BzfSAvPicsIGJlZm9yZUV4YW1wbGUsIGNvbXBvbmVudE5hbWUsIGFmdGVyRXhhbXBsZSwgY29tcG9uZW50TmFtZSk7XG5cbiAgICAgICAgICBkaWRXYXJuQWJvdXRLZXlTcHJlYWRbY29tcG9uZW50TmFtZSArIGJlZm9yZUV4YW1wbGVdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFKSB7XG4gICAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59IC8vIFRoZXNlIHR3byBmdW5jdGlvbnMgZXhpc3QgdG8gc3RpbGwgZ2V0IGNoaWxkIHdhcm5pbmdzIGluIGRldlxuLy8gZXZlbiB3aXRoIHRoZSBwcm9kIHRyYW5zZm9ybS4gVGhpcyBtZWFucyB0aGF0IGpzeERFViBpcyBwdXJlbHlcbi8vIG9wdC1pbiBiZWhhdmlvciBmb3IgYmV0dGVyIG1lc3NhZ2VzIGJ1dCB0aGF0IHdlIHdvbid0IHN0b3Bcbi8vIGdpdmluZyB5b3Ugd2FybmluZ3MgaWYgeW91IHVzZSBwcm9kdWN0aW9uIGFwaXMuXG5cbmZ1bmN0aW9uIGpzeFdpdGhWYWxpZGF0aW9uU3RhdGljKHR5cGUsIHByb3BzLCBrZXkpIHtcbiAge1xuICAgIHJldHVybiBqc3hXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywga2V5LCB0cnVlKTtcbiAgfVxufVxuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb25EeW5hbWljKHR5cGUsIHByb3BzLCBrZXkpIHtcbiAge1xuICAgIHJldHVybiBqc3hXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywga2V5LCBmYWxzZSk7XG4gIH1cbn1cblxudmFyIGpzeCA9ICBqc3hXaXRoVmFsaWRhdGlvbkR5bmFtaWMgOyAvLyB3ZSBtYXkgd2FudCB0byBzcGVjaWFsIGNhc2UganN4cyBpbnRlcm5hbGx5IHRvIHRha2UgYWR2YW50YWdlIG9mIHN0YXRpYyBjaGlsZHJlbi5cbi8vIGZvciBub3cgd2UgY2FuIHNoaXAgaWRlbnRpY2FsIHByb2QgZnVuY3Rpb25zXG5cbnZhciBqc3hzID0gIGpzeFdpdGhWYWxpZGF0aW9uU3RhdGljIDtcblxuZXhwb3J0cy5GcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG5leHBvcnRzLmpzeCA9IGpzeDtcbmV4cG9ydHMuanN4cyA9IGpzeHM7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LXJ1bnRpbWUucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCB9IGZyb20gJ0ByZW1vdGUtdWkvcmVhY3QnO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVJlbW90ZUNvbXBvbmVudFJlZ2lzdHJ5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbXBvbmVudE1ldGFkYXRhTG9va3VwID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IGNvbXBvbmVudE5hbWVCeUNvbXBvbmVudE1hcCA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCByZWdpc3RlckNvbXBvbmVudCA9IChjb21wb25lbnQsIGNvbXBvbmVudE5hbWUsIGZyYWdtZW50UHJvcHMpID0+IHtcbiAgICAgICAgY29tcG9uZW50TmFtZUJ5Q29tcG9uZW50TWFwLnNldChjb21wb25lbnQsIGNvbXBvbmVudE5hbWUpO1xuICAgICAgICBjb21wb25lbnRNZXRhZGF0YUxvb2t1cC5zZXQoY29tcG9uZW50TmFtZSwge1xuICAgICAgICAgICAgZnJhZ21lbnRQcm9wc1NldDogbmV3IFNldChmcmFnbWVudFByb3BzKSxcbiAgICAgICAgICAgIGZyYWdtZW50UHJvcHNBcnJheTogZnJhZ21lbnRQcm9wcyxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRDb21wb25lbnROYW1lOiAoY29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZUJ5Q29tcG9uZW50TWFwLmdldChjb21wb25lbnQpO1xuICAgICAgICAgICAgaWYgKCFjb21wb25lbnROYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29tcG9uZW50TmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgaXNBbGxvd2VkQ29tcG9uZW50TmFtZTogKGNvbXBvbmVudE5hbWUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnRNZXRhZGF0YUxvb2t1cC5oYXMoY29tcG9uZW50TmFtZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGlzQ29tcG9uZW50RnJhZ21lbnRQcm9wOiAoY29tcG9uZW50TmFtZSwgcHJvcE5hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudE1ldGFkYXRhID0gY29tcG9uZW50TWV0YWRhdGFMb29rdXAuZ2V0KGNvbXBvbmVudE5hbWUpO1xuICAgICAgICAgICAgaWYgKCFjb21wb25lbnRNZXRhZGF0YSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnRNZXRhZGF0YS5mcmFnbWVudFByb3BzU2V0Lmhhcyhwcm9wTmFtZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldENvbXBvbmVudEZyYWdtZW50UHJvcE5hbWVzOiAoY29tcG9uZW50TmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50TWV0YWRhdGEgPSBjb21wb25lbnRNZXRhZGF0YUxvb2t1cC5nZXQoY29tcG9uZW50TmFtZSk7XG4gICAgICAgICAgICBpZiAoIWNvbXBvbmVudE1ldGFkYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyBmcmFnbWVudFByb3BzQXJyYXkgfSA9IGNvbXBvbmVudE1ldGFkYXRhO1xuICAgICAgICAgICAgcmV0dXJuIGZyYWdtZW50UHJvcHNBcnJheTtcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudDogKGNvbXBvbmVudE5hbWUsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBmcmFnbWVudFByb3BzID0gW10gfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBjb25zdCByZW1vdGVSZWFjdENvbXBvbmVudCA9IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50KGNvbXBvbmVudE5hbWUsIHtcbiAgICAgICAgICAgICAgICBmcmFnbWVudFByb3BzOiBmcmFnbWVudFByb3BzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVnaXN0ZXJDb21wb25lbnQocmVtb3RlUmVhY3RDb21wb25lbnQsIGNvbXBvbmVudE5hbWUsIGZyYWdtZW50UHJvcHMpO1xuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZUNvbXBvdW5kUmVhY3RDb21wb25lbnQ6IChjb21wb25lbnROYW1lLCBvcHRpb25zKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGZyYWdtZW50UHJvcHMgPSBbXSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGNvbnN0IFJlbW90ZUNvbXBvbmVudFR5cGUgPSBjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudChjb21wb25lbnROYW1lLCB7XG4gICAgICAgICAgICAgICAgZnJhZ21lbnRQcm9wcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gV2UgY2FuIG9ubHkgYXR0YWNoIHByb3BlcnRpZXMgdG8gYSBmdW5jdGlvbiBjb21wb25lbnQgdHlwZSwgc28gd2UgbmVlZCB0byBjaGVjayBpZiB0aGUgcmVtb3RlIGNvbXBvbmVudCB0eXBlIGlzIGEgZnVuY3Rpb24uXG4gICAgICAgICAgICAvLyBJZiB0aGUgcmVtb3RlIGNvbXBvbmVudCB0eXBlIGlzIG5vdCBhIGZ1bmN0aW9uLCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSBmdW5jdGlvbiBjb21wb25lbnQuXG4gICAgICAgICAgICBjb25zdCBDb21wb3VuZEZ1bmN0aW9uQ29tcG9uZW50VHlwZSA9IHR5cGVvZiBSZW1vdGVDb21wb25lbnRUeXBlID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgPyBSZW1vdGVDb21wb25lbnRUeXBlXG4gICAgICAgICAgICAgICAgOiAocHJvcHMpID0+IChfanN4KFJlbW90ZUNvbXBvbmVudFR5cGUsIHsgLi4ucHJvcHMgfSkpO1xuICAgICAgICAgICAgLy8gQXR0YWNoIHRoZSBjb21wb3VuZCBjb21wb25lbnQgcHJvcGVydGllcyB0byB0aGUgZnVuY3Rpb24gY29tcG9uZW50IHRoYXQgd2Ugd2lsbCBiZSByZXR1cm5pbmcuXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKENvbXBvdW5kRnVuY3Rpb25Db21wb25lbnRUeXBlLCBvcHRpb25zLmNvbXBvdW5kQ29tcG9uZW50UHJvcGVydGllcyk7XG4gICAgICAgICAgICAvLyBSZWdpc3RlciB0aGUgY29tcG91bmQgZnVuY3Rpb24gY29tcG9uZW50IHdpdGggdGhlIHJlZ2lzdHJ5IGFuZCByZXR1cm4gaXQuXG4gICAgICAgICAgICByZXR1cm4gcmVnaXN0ZXJDb21wb25lbnQoQ29tcG91bmRGdW5jdGlvbkNvbXBvbmVudFR5cGUsIGNvbXBvbmVudE5hbWUsIGZyYWdtZW50UHJvcHMpO1xuICAgICAgICB9LFxuICAgIH07XG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlUmVtb3RlQ29tcG9uZW50UmVnaXN0cnkgfSBmcm9tIFwiLi91dGlscy9yZW1vdGUtY29tcG9uZW50LXJlZ2lzdHJ5LmpzXCI7XG4vKipcbiAqIFJlcHJlc2VudHMgYSByZWdpc3RyeSBvZiBIdWJTcG90LXByb3ZpZGVkIFJlYWN0IGNvbXBvbmVudHMgdGhhdCBzaG91bGQgb25seSBiZSB1c2VkICoqaW50ZXJuYWxseSoqIGJ5IHRoZSBVSSBleHRlbnNpb24gU0RLLlxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgY29uc3QgX19odWJTcG90Q29tcG9uZW50UmVnaXN0cnkgPSBjcmVhdGVSZW1vdGVDb21wb25lbnRSZWdpc3RyeSgpO1xuY29uc3QgeyBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50LCBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZUNvbXBvdW5kUmVhY3RDb21wb25lbnQsIH0gPSBfX2h1YlNwb3RDb21wb25lbnRSZWdpc3RyeTtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gU1RBTkRBUkQgQ09NUE9ORU5UU1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vKipcbiAqIFRoZSBgQWxlcnRgIGNvbXBvbmVudCByZW5kZXJzIGFuIGFsZXJ0IHdpdGhpbiBhIGNhcmQuIFVzZSB0aGlzIGNvbXBvbmVudCB0byBnaXZlIHVzYWdlIGd1aWRhbmNlLCBub3RpZnkgdXNlcnMgb2YgYWN0aW9uIHJlc3VsdHMsIG9yIHdhcm4gdGhlbSBhYm91dCBwb3RlbnRpYWwgaXNzdWVzIG9yIGZhaWx1cmVzLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2FsZXJ0IERvY3N9XG4gKiAtIHtAbGluayBodHRwczovL2FwcC5odWJzcG90LmNvbS9kb2NzLzQ4MDA4OTE2L3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvYWxlcnQjdmFyaWFudHMgVmFyaWFudHN9XG4gKi9cbmV4cG9ydCBjb25zdCBBbGVydCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0FsZXJ0Jyk7XG4vKipcbiAqIFRoZSBgQnV0dG9uYCBjb21wb25lbnQgcmVuZGVycyBhIHNpbmdsZSBidXR0b24uIFVzZSB0aGlzIGNvbXBvbmVudCB0byBlbmFibGUgdXNlcnMgdG8gcGVyZm9ybSBhY3Rpb25zLCBzdWNoIGFzIHN1Ym1pdHRpbmcgYSBmb3JtLCBzZW5kaW5nIGRhdGEgdG8gYW4gZXh0ZXJuYWwgc3lzdGVtLCBvciBkZWxldGluZyBkYXRhLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2J1dHRvbiBEb2NzfVxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9idXR0b24jdXNhZ2UtZXhhbXBsZXMgRXhhbXBsZXN9XG4gKiAtIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vSHViU3BvdC91aS1leHRlbnNpb25zLWV4YW1wbGVzL3RyZWUvbWFpbi9kZXNpZ24tcGF0dGVybnMjYnV0dG9uIERlc2lnbiBQYXR0ZXJuIEV4YW1wbGVzfVxuICovXG5leHBvcnQgY29uc3QgQnV0dG9uID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQnV0dG9uJywge1xuICAgIGZyYWdtZW50UHJvcHM6IFsnb3ZlcmxheSddLFxufSk7XG4vKipcbiAqIFRoZSBgQnV0dG9uUm93YCBjb21wb25lbnQgcmVuZGVycyBhIHJvdyBvZiBzcGVjaWZpZWQgYEJ1dHRvbmAgY29tcG9uZW50cy4gVXNlIHRoaXMgY29tcG9uZW50IHdoZW4geW91IHdhbnQgdG8gaW5jbHVkZSBtdWx0aXBsZSBidXR0b25zIGluIGEgcm93LlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2J1dHRvbi1yb3cgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IEJ1dHRvblJvdyA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0J1dHRvblJvdycpO1xuZXhwb3J0IGNvbnN0IENhcmQgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdDYXJkJyk7XG4vKipcbiAqIFRoZSBgRGVzY3JpcHRpb25MaXN0YCBjb21wb25lbnQgcmVuZGVycyBwYWlycyBvZiBsYWJlbHMgYW5kIHZhbHVlcy4gVXNlIHRoaXMgY29tcG9uZW50IHRvIGRpc3BsYXkgcGFpcnMgb2YgbGFiZWxzIGFuZCB2YWx1ZXMgaW4gYSB3YXkgdGhhdCdzIGVhc3kgdG8gcmVhZCBhdCBhIGdsYW5jZS5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9kZXNjcmlwdGlvbi1saXN0IERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbkxpc3QgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdEZXNjcmlwdGlvbkxpc3QnKTtcbi8qKlxuICogVGhlIGBEZXNjcmlwdGlvbkxpc3RJdGVtYCBjb21wb25lbnQgcmVuZGVycyBhIHNpbmdsZSBzZXQgb2YgYSBsYWJlbCBhbmQgdmFsdWUuIFVzZSB0aGlzIGNvbXBvbmVudCB3aXRoaW4gYSBgRGVzY3JpcHRpb25MaXN0YCBjb21wb25lbnQuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvZGVzY3JpcHRpb24tbGlzdCBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgRGVzY3JpcHRpb25MaXN0SXRlbSA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0Rlc2NyaXB0aW9uTGlzdEl0ZW0nKTtcbi8qKlxuICogVGhlIGBEaXZpZGVyYCBjb21wb25lbnQgcmVuZGVycyBhIGdyZXksIGhvcml6b250YWwgbGluZSBmb3Igc3BhY2luZyBvdXQgY29tcG9uZW50cyB2ZXJ0aWNhbGx5IG9yIGNyZWF0aW5nIHNlY3Rpb25zIGluIGFuIGV4dGVuc2lvbi4gVXNlIHRoaXMgY29tcG9uZW50IHRvIHNwYWNlIG91dCBvdGhlciBjb21wb25lbnRzIHdoZW4gdGhlIGNvbnRlbnQgbmVlZHMgbW9yZSBzZXBhcmF0aW9uIHRoYW4gd2hpdGUgc3BhY2UuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvZGl2aWRlciBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgRGl2aWRlciA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0RpdmlkZXInKTtcbi8qKlxuICogVGhlIGBFbXB0eVN0YXRlYCBjb21wb25lbnQgc2V0cyB0aGUgY29udGVudCB0aGF0IGFwcGVhcnMgd2hlbiB0aGUgZXh0ZW5zaW9uIGlzIGluIGFuIGVtcHR5IHN0YXRlLiBVc2UgdGhpcyBjb21wb25lbnQgd2hlbiB0aGVyZSdzIG5vIGNvbnRlbnQgb3IgZGF0YSB0byBoZWxwIGd1aWRlIHVzZXJzLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2VtcHR5LXN0YXRlIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBFbXB0eVN0YXRlID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnRW1wdHlTdGF0ZScpO1xuLyoqXG4gKiBUaGUgYEVycm9yU3RhdGVgIGNvbXBvbmVudCBzZXRzIHRoZSBjb250ZW50IG9mIGFuIGVycm9yaW5nIGV4dGVuc2lvbi4gVXNlIHRoaXMgY29tcG9uZW50IHRvIGd1aWRlIHVzZXJzIHRocm91Z2ggcmVzb2x2aW5nIGVycm9ycyB0aGF0IHlvdXIgZXh0ZW5zaW9uIG1pZ2h0IGVuY291bnRlci5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9lcnJvci1zdGF0ZSBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgRXJyb3JTdGF0ZSA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0Vycm9yU3RhdGUnKTtcbi8qKlxuICogVGhlIGBGb3JtYCBjb21wb25lbnQgcmVuZGVycyBhIGZvcm0gdGhhdCBjYW4gY29udGFpbiBvdGhlciBzdWJjb21wb25lbnRzLCBzdWNoIGFzIGBJbnB1dGAsIGBTZWxlY3RgLCBhbmQgYEJ1dHRvbmAuIFVzZSB0aGlzIGNvbXBvbmVudCB0byBlbmFibGUgdXNlcnMgdG8gc3VibWl0IGRhdGEgdG8gSHViU3BvdCBvciBhbiBleHRlcm5hbCBzeXN0ZW0uXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvZm9ybSBEb2NzfVxuICogLSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL0h1YlNwb3QvdWktZXh0ZW5zaW9ucy1leGFtcGxlcy90cmVlL21haW4vZGVzaWduLXBhdHRlcm5zI2Zvcm0gRGVzaWduIFBhdHRlcm4gRXhhbXBsZXN9XG4gKi9cbmV4cG9ydCBjb25zdCBGb3JtID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnRm9ybScpO1xuLyoqXG4gKiBUaGUgYEhlYWRpbmdgIGNvbXBvbmVudCByZW5kZXJzIGxhcmdlIGhlYWRpbmcgdGV4dC4gVXNlIHRoaXMgY29tcG9uZW50IHRvIGludHJvZHVjZSBvciBkaWZmZXJlbnRpYXRlIHNlY3Rpb25zIG9mIHlvdXIgY29tcG9uZW50LlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2hlYWRpbmcgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IEhlYWRpbmcgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdIZWFkaW5nJyk7XG4vKipcbiAqIFRoZSBgSW1hZ2VgIGNvbXBvbmVudCByZW5kZXJzIGFuIGltYWdlLiBVc2UgdGhpcyBjb21wb25lbnQgdG8gYWRkIGEgbG9nbyBvciBvdGhlciB2aXN1YWwgYnJhbmQgaWRlbnRpdHkgYXNzZXQsIG9yIHRvIGFjY2VudHVhdGUgb3RoZXIgY29udGVudCBpbiB0aGUgZXh0ZW5zaW9uLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2ltYWdlIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBJbWFnZSA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0ltYWdlJywge1xuICAgIGZyYWdtZW50UHJvcHM6IFsnb3ZlcmxheSddLFxufSk7XG4vKipcbiAqIFRoZSBgSW5wdXRgIGNvbXBvbmVudCByZW5kZXJzIGEgdGV4dCBpbnB1dCBmaWVsZCB3aGVyZSBhIHVzZXIgY2FuIGVudGVyIGEgY3VzdG9tIHRleHQgdmFsdWUuIExpa2Ugb3RoZXIgaW5wdXRzLCB0aGlzIGNvbXBvbmVudCBzaG91bGQgYmUgdXNlZCB3aXRoaW4gYSBgRm9ybWAgdGhhdCBoYXMgYSBzdWJtaXQgYnV0dG9uLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2lucHV0IERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBJbnB1dCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0lucHV0Jyk7XG4vKipcbiAqIFRoZSBgTGlua2AgY29tcG9uZW50IHJlbmRlcnMgYSBjbGlja2FibGUgaHlwZXJsaW5rLiBVc2UgbGlua3MgdG8gZGlyZWN0IHVzZXJzIHRvIGFuIGV4dGVybmFsIHdlYiBwYWdlIG9yIGFub3RoZXIgcGFydCBvZiB0aGUgSHViU3BvdCBhcHAuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvbGluayBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgTGluayA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0xpbmsnLCB7XG4gICAgZnJhZ21lbnRQcm9wczogWydvdmVybGF5J10sXG59KTtcbi8qKlxuICogVGhlIGBUZXh0QXJlYWAgY29tcG9uZW50IHJlbmRlcnMgYSBmaWxsYWJsZSB0ZXh0IGZpZWxkLiBMaWtlIG90aGVyIGlucHV0cywgdGhpcyBjb21wb25lbnQgc2hvdWxkIGJlIHVzZWQgd2l0aGluIGEgYEZvcm1gIHRoYXQgaGFzIGEgc3VibWl0IGJ1dHRvbi5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy90ZXh0LWFyZWEgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IFRleHRBcmVhID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnVGV4dEFyZWEnKTtcbi8vIFRleHRhcmVhIHdhcyBjaGFuZ2VkIHRvIFRleHRBcmVhXG4vLyBFeHBvcnRpbmcgYm90aCBmb3IgYmFja3dhcmRzIGNvbXBhdFxuLyoqIEBkZXByZWNhdGVkIHVzZSBUZXh0QXJlYSBpbnN0ZWFkLiBXaXRoIGEgY2FwaXRhbCBBLiovXG5leHBvcnQgY29uc3QgVGV4dGFyZWEgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdUZXh0YXJlYScpO1xuLyoqXG4gKiBUaGUgYExvYWRpbmdTcGlubmVyYCBjb21wb25lbnQgcmVuZGVycyBhIHZpc3VhbCBpbmRpY2F0b3IgZm9yIHdoZW4gYW4gZXh0ZW5zaW9uIGlzIGxvYWRpbmcgb3IgcHJvY2Vzc2luZyBkYXRhLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2xvYWRpbmctc3Bpbm5lciBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgTG9hZGluZ1NwaW5uZXIgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdMb2FkaW5nU3Bpbm5lcicpO1xuLyoqXG4gKiBUaGUgYFByb2dyZXNzQmFyYCBjb21wb25lbnQgcmVuZGVycyBhIHZpc3VhbCBpbmRpY2F0b3Igc2hvd2luZyBhIG51bWVyaWMgYW5kL29yIHBlcmNlbnRhZ2UtYmFzZWQgcmVwcmVzZW50YXRpb24gb2YgcHJvZ3Jlc3MuIFRoZSBwZXJjZW50YWdlIGlzIGNhbGN1bGF0ZWQgYmFzZWQgb24gdGhlIG1heGltdW0gcG9zc2libGUgdmFsdWUgc3BlY2lmaWVkIGluIHRoZSBjb21wb25lbnQuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvcHJvZ3Jlc3MtYmFyIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBQcm9ncmVzc0JhciA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1Byb2dyZXNzQmFyJyk7XG4vKipcbiAqIFRoZSBgU2VsZWN0YCBjb21wb25lbnQgcmVuZGVycyBhIGRyb3Bkb3duIG1lbnUgc2VsZWN0IGZpZWxkIHdoZXJlIGEgdXNlciBjYW4gc2VsZWN0IGEgc2luZ2xlIHZhbHVlLiBBIHNlYXJjaCBiYXIgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGluY2x1ZGVkIHdoZW4gdGhlcmUgYXJlIG1vcmUgdGhhbiBzZXZlbiBvcHRpb25zLiBMaWtlIG90aGVyIGlucHV0cywgdGhpcyBjb21wb25lbnQgc2hvdWxkIGJlIHVzZWQgd2l0aGluIGEgYEZvcm1gIHRoYXQgaGFzIGEgc3VibWl0IGJ1dHRvbi5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9zZWxlY3QgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IFNlbGVjdCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1NlbGVjdCcpO1xuLyoqXG4gKiBUaGUgYFRhZ2AgY29tcG9uZW50IHJlbmRlcnMgYSB0YWcgdG8gbGFiZWwgb3IgY2F0ZWdvcml6ZSBpbmZvcm1hdGlvbiBvciBvdGhlciBjb21wb25lbnRzLiBUYWdzIGNhbiBiZSBzdGF0aWMgb3IgY2xpY2thYmxlIGZvciBpbnZva2luZyBmdW5jdGlvbnMuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvdGFnIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBUYWcgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdUYWcnLCB7XG4gICAgZnJhZ21lbnRQcm9wczogWydvdmVybGF5J10sXG59KTtcbi8qKlxuICogVGhlIGBUZXh0YCBjb21wb25lbnQgcmVuZGVycyB0ZXh0IHdpdGggZm9ybWF0dGluZyBvcHRpb25zLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3RleHQgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IFRleHQgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdUZXh0Jyk7XG4vKipcbiAqIFRoZSBgVGlsZWAgY29tcG9uZW50IHJlbmRlcnMgYSBzcXVhcmUgdGlsZSB0aGF0IGNhbiBjb250YWluIG90aGVyIGNvbXBvbmVudHMuIFVzZSB0aGlzIGNvbXBvbmVudCB0byBjcmVhdGUgZ3JvdXBzIG9mIHJlbGF0ZWQgY29tcG9uZW50cy5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy90aWxlIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBUaWxlID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnVGlsZScpO1xuLyoqIEBkZXByZWNhdGVkIHVzZSBGbGV4IGluc3RlYWQuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCByZWxlYXNlLiAqL1xuZXhwb3J0IGNvbnN0IFN0YWNrID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnU3RhY2snKTtcbi8qKlxuICogVGhlIGBUb2dnbGVHcm91cGAgY29tcG9uZW50IHJlbmRlcnMgYSBsaXN0IG9mIHNlbGVjdGFibGUgb3B0aW9ucywgZWl0aGVyIGluIHJhZGlvIGJ1dHRvbiBvciBjaGVja2JveCBmb3JtLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3RvZ2dsZS1ncm91cCBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgVG9nZ2xlR3JvdXAgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdUb2dnbGVHcm91cCcpO1xuLyoqXG4gKiBUaGUgYFN0YXRpc3RpY3NJdGVtYCBjb21wb25lbnQgcmVuZGVycyBhIHNpbmdsZSBkYXRhIHBvaW50IHdpdGhpbiBhIGBTdGF0aXN0aWNzYCBjb21wb25lbnQuIFVzZSB0aGlzIGNvbXBvbmVudCB0byBkaXNwbGF5IGEgc2luZ2xlIGRhdGEgcG9pbnQsIHN1Y2ggYXMgYSBudW1iZXIgb3IgcGVyY2VudGFnZS5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9zdGF0aXN0aWNzIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBTdGF0aXN0aWNzSXRlbSA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1N0YXRpc3RpY3NJdGVtJyk7XG4vKipcbiAqIFRoZSBgU3RhdGlzdGljc2AgY29tcG9uZW50IHJlbmRlcnMgYSB2aXN1YWwgc3BvdGxpZ2h0IG9mIG9uZSBvciBtb3JlIGRhdGEgcG9pbnRzLiBJbmNsdWRlcyB0aGUgYFN0YXRpc3RpY3NJdGVtYCBhbmQgYFN0YXRpc3RpY3NUcmVuZGAgc3ViY29tcG9uZW50cy5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9zdGF0aXN0aWNzIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBTdGF0aXN0aWNzID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnU3RhdGlzdGljcycpO1xuLyoqXG4gKiBUaGUgYFN0YXRpc3RpY3NUcmVuZGAgY29tcG9uZW50IHJlbmRlcnMgYSBwZXJjZW50YWdlIHRyZW5kIHZhbHVlIGFuZCBkaXJlY3Rpb24gYWxvbnNpZGUgYSBgU3RhdGlzdGljc0l0ZW1gIGNvbXBvbmVudC4gVXNlIHRoaXMgY29tcG9uZW50IHdpdGhpbiB0aGUgYFN0YXRpc3RpY3NJdGVtYCBjb21wb25lbnQuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvc3RhdGlzdGljcyBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgU3RhdGlzdGljc1RyZW5kID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnU3RhdGlzdGljc1RyZW5kJyk7XG4vKipcbiAqIFRoZSBgVGFibGVgIGNvbXBvbmVudCByZW5kZXJzIGEgdGFibGUuIFRvIGZvcm1hdCB0aGUgdGFibGUsIHVzZSB0aGUgc3ViY29tcG9uZW50cyBgVGFibGVIZWFkYCwgYFRhYmxlUm93YCwgYFRhYmxlSGVhZGVyYCwgYFRhYmxlQm9keWAsIGBUYWJsZUNlbGxgYW5kIGBUYWJsZUZvb3RlcmAuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvdGFibGUgRG9jc31cbiAqIC0ge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9IdWJTcG90L3VpLWV4dGVuc2lvbnMtZXhhbXBsZXMvdHJlZS9tYWluL2Rlc2lnbi1wYXR0ZXJucyN0YWJsZSBEZXNpZ24gUGF0dGVybiBFeGFtcGxlfVxuICovXG5leHBvcnQgY29uc3QgVGFibGUgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdUYWJsZScpO1xuLyoqXG4gKiBUaGUgYFRhYmxlRm9vdGVyYCBjb21wb25lbnQgcmVuZGVycyBhIGZvb3RlciB3aXRoaW4gYSBgVGFibGVgIGNvbXBvbmVudC4gVXNlIHRoaXMgY29tcG9uZW50IHRvIGRpc3BsYXkgdG90YWxzIG9yIG90aGVyIHN1bW1hcnkgaW5mb3JtYXRpb24uXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvdGFibGUgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IFRhYmxlRm9vdGVyID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnVGFibGVGb290ZXInKTtcbi8qKlxuICogVGhlIGBUYWJsZUNlbGxgIGNvbXBvbmVudCByZW5kZXJzIGluZGl2aWR1YWwgY2VsbHMgd2l0aGluIHRoZSBgVGFibGVCb2R5YCBjb21wb25lbnQuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvdGFibGUgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IFRhYmxlQ2VsbCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1RhYmxlQ2VsbCcpO1xuLyoqXG4gKiBUaGUgYFRhYmxlUm93YCBjb21wb25lbnQgcmVuZGVycyBhIHJvdyB3aXRoaW4gdGhlIGBUYWJsZUJvZHlgIG9yIGBUYWJsZUhlYWRgIGNvbXBvbmVudC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy90YWJsZSBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgVGFibGVSb3cgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdUYWJsZVJvdycpO1xuLyoqXG4gKiBUaGUgYFRhYmxlQm9keWAgY29tcG9uZW50IHJlbmRlcnMgdGhlIGJvZHkgKHJvd3MgYW5kIGNlbGxzKSBvZiBhIHRhYmxlIHdpdGhpbiB0aGUgYFRhYmxlYCBjb21wb25lbnQuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvdGFibGUgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IFRhYmxlQm9keSA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1RhYmxlQm9keScpO1xuLyoqXG4gKiBUaGUgYFRhYmxlSGVhZGVyYCBjb21wb25lbnQgcmVuZGVycyBpbmRpdmlkdWFsIGNlbGxzIGNvbnRhaW5pbmcgYm9sZGVkIGNvbHVtbiBsYWJlbHMsIHdpdGhpbiBgVGFibGVIZWFkYC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy90YWJsZSBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgVGFibGVIZWFkZXIgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdUYWJsZUhlYWRlcicpO1xuLyoqXG4gKiBUaGUgYFRhYmxlSGVhZGAgY29tcG9uZW50IHJlbmRlcnMgdGhlIGhlYWRlciBzZWN0aW9uIG9mIHRoZSBgVGFibGVgIGNvbXBvbmVudCwgY29udGFpbmluZyBjb2x1bW4gbGFiZWxzLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3RhYmxlIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBUYWJsZUhlYWQgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdUYWJsZUhlYWQnKTtcbi8qKlxuICogVGhlIGBOdW1iZXJJbnB1dGAgY29tcG9uZW50IHJlbmRlcnMgYSBudW1iZXIgaW5wdXQgZmllbGQuIExpa2Ugb3RoZXIgaW5wdXRzLCB0aGlzIGNvbXBvbmVudCBzaG91bGQgYmUgdXNlZCB3aXRoaW4gYSBgRm9ybWAgdGhhdCBoYXMgYSBzdWJtaXQgYnV0dG9uLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL251bWJlci1pbnB1dCBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgTnVtYmVySW5wdXQgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdOdW1iZXJJbnB1dCcpO1xuLyoqXG4gKiBUaGUgYEJveGAgY29tcG9uZW50IHJlbmRlcnMgYW4gZW1wdHkgZGl2IGNvbnRhaW5lciBmb3IgZmluZSB0dW5pbmcgdGhlIHNwYWNpbmcgb2YgY29tcG9uZW50cy4gQ29tbW9ubHkgdXNlZCB3aXRoIHRoZSBgRmxleGAgY29tcG9uZW50LlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2JveCBEb2NzfVxuICogLSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL0h1YlNwb3QvdWktZXh0ZW5zaW9ucy1leGFtcGxlcy90cmVlL21haW4vZmxleC1hbmQtYm94IEZsZXggYW5kIEJveCBFeGFtcGxlfVxuICovXG5leHBvcnQgY29uc3QgQm94ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQm94Jyk7XG4vKipcbiAqIFRoZSBgU3RlcEluZGljYXRvcmAgY29tcG9uZW50IHJlbmRlcnMgYW4gaW5kaWNhdG9yIHRvIHNob3cgdGhlIGN1cnJlbnQgc3RlcCBvZiBhIG11bHRpLXN0ZXAgcHJvY2Vzcy5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9zdGVwLWluZGljYXRvciBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgU3RlcEluZGljYXRvciA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1N0ZXBJbmRpY2F0b3InKTtcbi8qKlxuICogVGhlIGBBY2NvcmRpb25gIGNvbXBvbmVudCByZW5kZXJzIGFuIGV4cGFuZGFibGUgYW5kIGNvbGxhcHNhYmxlIHNlY3Rpb24gdGhhdCBjYW4gY29udGFpbiBvdGhlciBjb21wb25lbnRzLiBUaGlzIGNvbXBvbmVudCBjYW4gYmUgaGVscGZ1bCBmb3Igc2F2aW5nIHNwYWNlIGFuZCBicmVha2luZyB1cCBleHRlbnNpb24gY29udGVudC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9hY2NvcmRpb24gRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IEFjY29yZGlvbiA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0FjY29yZGlvbicpO1xuLyoqXG4gKiBUaGUgTXVsdGlTZWxlY3QgY29tcG9uZW50IHJlbmRlcnMgYSBkcm9wZG93biBtZW51IHNlbGVjdCBmaWVsZCB3aGVyZSBhIHVzZXIgY2FuIHNlbGVjdCBtdWx0aXBsZSB2YWx1ZXMuIENvbW1vbmx5IHVzZWQgd2l0aGluIHRoZSBgRm9ybWAgY29tcG9uZW50LlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL211bHRpLXNlbGVjdCBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgTXVsdGlTZWxlY3QgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdNdWx0aVNlbGVjdCcpO1xuLyoqXG4gKiBUaGUgYEZsZXhgIGNvbXBvbmVudCByZW5kZXJzIGEgZmxleCBjb250YWluZXIgdGhhdCBjYW4gY29udGFpbiBvdGhlciBjb21wb25lbnRzLCBhbmQgYXJyYW5nZSB0aGVtIHdpdGggcHJvcHMuIFVzZSB0aGlzIGNvbXBvbmVudCB0byBjcmVhdGUgYSBmbGV4aWJsZSBhbmQgcmVzcG9uc2l2ZSBsYXlvdXQuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvZmxleCBEb2NzfVxuICogLSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL0h1YlNwb3QvdWktZXh0ZW5zaW9ucy1leGFtcGxlcy90cmVlL21haW4vZmxleC1hbmQtYm94IEZsZXggYW5kIEJveCBFeGFtcGxlfVxuICovXG5leHBvcnQgY29uc3QgRmxleCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0ZsZXgnKTtcbi8qKlxuICogVGhlIGBEYXRlSW5wdXRgIGNvbXBvbmVudCByZW5kZXJzIGFuIGlucHV0IGZpZWxkIHdoZXJlIGEgdXNlciBjYW4gc2VsZWN0IGEgZGF0ZS4gQ29tbW9ubHkgdXNlZCB3aXRoaW4gdGhlIGBGb3JtYCBjb21wb25lbnQuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvZGF0ZS1pbnB1dCBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgRGF0ZUlucHV0ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnRGF0ZUlucHV0Jyk7XG4vKipcbiAqIFRoZSBgQ2hlY2tib3hgIGNvbXBvbmVudCByZW5kZXJzIGEgc2luZ2xlIGNoZWNrYm94IGlucHV0LiBDb21tb25seSB1c2VkIHdpdGhpbiB0aGUgYEZvcm1gIGNvbXBvbmVudC4gSWYgeW91IHdhbnQgdG8gZGlzcGxheSBtdWx0aXBsZSBjaGVja2JveGVzLCB5b3Ugc2hvdWxkIHVzZSBgVG9nZ2xlR3JvdXBgIGluc3RlYWQsIGFzIGl0IGNvbWVzIHdpdGggZXh0cmEgbG9naWMgZm9yIGhhbmRsaW5nIG11bHRpcGxlIGNoZWNrYm94ZXMuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvY2hlY2tib3ggRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IENoZWNrYm94ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQ2hlY2tib3gnKTtcbi8qKlxuICogVGhlIGBSYWRpb0J1dHRvbmAgY29tcG9uZW50IHJlbmRlcnMgYSBzaW5nbGUgcmFkaW8gaW5wdXQuIENvbW1vbmx5IHVzZWQgd2l0aGluIHRoZSBgRm9ybWAgY29tcG9uZW50LiBJZiB5b3Ugd2FudCB0byBkaXNwbGF5IG11bHRpcGxlIHJhZGlvIGlucHV0cywgeW91IHNob3VsZCB1c2UgYFRvZ2dsZUdyb3VwYCBpbnN0ZWFkLCBhcyBpdCBjb21lcyB3aXRoIGV4dHJhIGxvZ2ljIGZvciBoYW5kbGluZyBtdWx0aXBsZSBpbnB1dHMuXG4gKi9cbmV4cG9ydCBjb25zdCBSYWRpb0J1dHRvbiA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1JhZGlvQnV0dG9uJyk7XG4vKipcbiAqIFRoZSBgTGlzdGAgY29tcG9uZW50IHJlbmRlcnMgYSBsaXN0IG9mIGl0ZW1zLiBVc2UgdGhpcyBjb21wb25lbnQgdG8gZGlzcGxheSBhIGxpc3Qgb2YgaXRlbXMsIHN1Y2ggYXMgYSBsaXN0IG9mIGNvbnRhY3RzLCB0YXNrcywgb3Igb3RoZXIgZGF0YS4gQSBsaXN0IGNhbiBiZSBzdHlsZWQgYXMgYSBidWxsZXRlZCBsaXN0IG9yIGEgbnVtYmVyZWQgbGlzdC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9saXN0IERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBMaXN0ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnTGlzdCcpO1xuLyoqXG4gKiBUaGUgYFRvZ2dsZWAgY29tcG9uZW50IHJlbmRlcnMgYSBib29sZWFuIHRvZ2dsZSBzd2l0Y2ggdGhhdCBjYW4gYmUgY29uZmlndXJlZCB3aXRoIHNpemluZywgbGFiZWwgcG9zaXRpb24sIHJlYWQtb25seSwgYW5kIG1vcmUuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvdG9nZ2xlIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBUb2dnbGUgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdUb2dnbGUnKTtcbi8qKlxuICogVGhlIGBEcm9wZG93bmAgY29tcG9uZW50IHJlbmRlcnMgYSBkcm9wZG93biBtZW51IHRoYXQgY2FuIGFwcGVhciBhcyBhIGJ1dHRvbiBvciBoeXBlcmxpbmsuIFVzZSB0aGlzIGNvbXBvbmVudCB0byBlbmFibGUgdXNlcnMgdG8gc2VsZWN0IGZyb20gbXVsdGlwbGUgb3B0aW9ucyBpbiBhIGNvbXBhY3QgbGlzdC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9kcm9wZG93biBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgRHJvcGRvd24gPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZUNvbXBvdW5kUmVhY3RDb21wb25lbnQoJ0Ryb3Bkb3duJywge1xuICAgIGNvbXBvdW5kQ29tcG9uZW50UHJvcGVydGllczoge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGBEcm9wZG93bi5CdXR0b25JdGVtYCBjb21wb25lbnQgcmVwcmVzZW50cyBhIHNpbmdsZSBvcHRpb24gd2l0aGluIGEgYERyb3Bkb3duYCBtZW51LiBVc2UgdGhpcyBjb21wb25lbnQgYXMgYSBjaGlsZCBvZiB0aGUgYERyb3Bkb3duYCBjb21wb25lbnQuXG4gICAgICAgICAqXG4gICAgICAgICAqICoqTGlua3M6KipcbiAgICAgICAgICpcbiAgICAgICAgICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9kcm9wZG93biBEb2NzfVxuICAgICAgICAgKi9cbiAgICAgICAgQnV0dG9uSXRlbTogY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnRHJvcGRvd25CdXR0b25JdGVtJywge1xuICAgICAgICAgICAgZnJhZ21lbnRQcm9wczogWydvdmVybGF5J10sXG4gICAgICAgIH0pLFxuICAgIH0sXG59KTtcbi8qKlxuICogVGhlIFBhbmVsIGNvbXBvbmVudCByZW5kZXJzIGEgcGFuZWwgb3ZlcmxheSBvbiB0aGUgcmlnaHQgc2lkZSBvZiB0aGUgcGFnZSBhbmQgY29udGFpbnMgb3RoZXIgY29tcG9uZW50cy5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9wYW5lbCBEb2NzfVxuICogLSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL0h1YlNwb3QvdWktZXh0ZW5zaW9ucy1leGFtcGxlcy90cmVlL21haW4vb3ZlcmxheS1leGFtcGxlIE92ZXJsYXkgRXhhbXBsZX1cbiAqIC0ge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9IdWJTcG90L3VpLWV4dGVuc2lvbnMtZXhhbXBsZXMvdHJlZS9tYWluL2Rlc2lnbi1wYXR0ZXJucyNwYW5lbCBEZXNpZ24gUGF0dGVybiBFeGFtcGxlc31cbiAqL1xuZXhwb3J0IGNvbnN0IFBhbmVsID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnUGFuZWwnKTtcbi8qKlxuICogVGhlIGBQYW5lbEZvb3RlcmAgaXMgYSBzdGlja3kgZm9vdGVyIGNvbXBvbmVudCBkaXNwbGF5ZWQgYXQgdGhlIGJvdHRvbSBvZiBhIGBQYW5lbGAgY29tcG9uZW50LiBVc2UgdGhpcyBjb21wb25lbnQgdG8gZGlzcGxheSBhY3Rpb25zIG9yIG90aGVyIGNvbnRlbnQgdGhhdCBzaG91bGQgYmUgdmlzaWJsZSBhdCBhbGwgdGltZXMuIEluY2x1ZGUgb25seSBvbmUgYFBhbmVsRm9vdGVyYCBjb21wb25lbnQgcGVyIGBQYW5lbGAuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvcGFuZWwtZm9vdGVyIERvY3N9XG4gKiAtIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vSHViU3BvdC91aS1leHRlbnNpb25zLWV4YW1wbGVzL3RyZWUvbWFpbi9vdmVybGF5LWV4YW1wbGUgT3ZlcmxheSBFeGFtcGxlfVxuICovXG5leHBvcnQgY29uc3QgUGFuZWxGb290ZXIgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdQYW5lbEZvb3RlcicpO1xuLyoqXG4gKiBUaGUgYFBhbmVsQm9keWAgY29tcG9uZW50IGlzIGEgY29udGFpbmVyIHRoYXQgd3JhcHMgdGhlIHBhbmVsJ3MgY29udGVudCBhbmQgbWFrZXMgaXQgc2Nyb2xsYWJsZS4gSW5jbHVkZSBvbmx5IG9uZSBgUGFuZWxCb2R5YCBjb21wb25lbnQgcGVyIGBQYW5lbGAuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvcGFuZWwtZm9vdGVyIERvY3N9XG4gKiAtIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vSHViU3BvdC91aS1leHRlbnNpb25zLWV4YW1wbGVzL3RyZWUvbWFpbi9vdmVybGF5LWV4YW1wbGUgT3ZlcmxheSBFeGFtcGxlfVxuICovXG5leHBvcnQgY29uc3QgUGFuZWxCb2R5ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnUGFuZWxCb2R5Jyk7XG4vKipcbiAqIFRoZSBgUGFuZWxTZWN0aW9uYCBjb21wb25lbnQgaXMgYSBjb250YWluZXIgdGhhdCBhZGRzIHBhZGRpbmcgYW5kIGJvdHRvbSBtYXJnaW4gdG8gcHJvdmlkZSBzcGFjaW5nIGJldHdlZW4gY29udGVudC4gVXNlIHRoZSBgUGFuZWxTZWN0aW9uYCBjb21wb25lbnQgdG8gc2VwYXJhdGUgY29udGVudCB3aXRoaW4gYSBgUGFuZWxCb2R5YC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9wYW5lbC1mb290ZXIgRG9jc31cbiAqIC0ge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9IdWJTcG90L3VpLWV4dGVuc2lvbnMtZXhhbXBsZXMvdHJlZS9tYWluL292ZXJsYXktZXhhbXBsZSBPdmVybGF5IEV4YW1wbGV9XG4gKi9cbmV4cG9ydCBjb25zdCBQYW5lbFNlY3Rpb24gPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdQYW5lbFNlY3Rpb24nKTtcbi8qKlxuICogVGhlIGBTdGVwcGVySW5wdXRgIGNvbXBvbmVudCByZW5kZXJzIGEgbnVtYmVyIGlucHV0IGZpZWxkIHRoYXQgY2FuIGJlIGluY3JlYXNlZCBvciBkZWNyZWFzZWQgYnkgYSBzZXQgbnVtYmVyLiBDb21tb25seSB1c2VkIHdpdGhpbiB0aGUgYEZvcm1gIGNvbXBvbmVudC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9zdGVwcGVyLWlucHV0IERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBTdGVwcGVySW5wdXQgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdTdGVwcGVySW5wdXQnKTtcbi8qKlxuICogVGhlIE1vZGFsIGNvbXBvbmVudCByZW5kZXJzIGEgcG9wLXVwIG92ZXJsYXkgdGhhdCBjYW4gY29udGFpbiBvdGhlciBjb21wb25lbnRzLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL21vZGFsIERvY3N9XG4gKiAtIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vSHViU3BvdC91aS1leHRlbnNpb25zLWV4YW1wbGVzL3RyZWUvbWFpbi9vdmVybGF5LWV4YW1wbGUgT3ZlcmxheSBFeGFtcGxlfVxuICogLSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL0h1YlNwb3QvdWktZXh0ZW5zaW9ucy1leGFtcGxlcy90cmVlL21haW4vZGVzaWduLXBhdHRlcm5zI21vZGFsIERlc2lnbiBQYXR0ZXJuIEV4YW1wbGVzfVxuICovXG5leHBvcnQgY29uc3QgTW9kYWwgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdNb2RhbCcpO1xuLyoqXG4gKiBUaGUgYE1vZGFsQm9keWAgY29tcG9uZW50IGNvbnRhaW5zIHRoZSBtYWluIGNvbnRlbnQgb2YgdGhlIG1vZGFsLiBPbmUgYE1vZGFsQm9keWAgaXMgcmVxdWlyZWQgcGVyIGBNb2RhbGAuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvbW9kYWwgRG9jc31cbiAqIC0ge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9IdWJTcG90L3VpLWV4dGVuc2lvbnMtZXhhbXBsZXMvdHJlZS9tYWluL292ZXJsYXktZXhhbXBsZSBPdmVybGF5IEV4YW1wbGV9XG4gKi9cbmV4cG9ydCBjb25zdCBNb2RhbEJvZHkgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdNb2RhbEJvZHknKTtcbi8qKlxuICogVGhlIGBNb2RhbEZvb3RlcmAgY29tcG9uZW50IGlzIGFuIG9wdGlvbmFsIGNvbXBvbmVudCB0byBmb3JtYXQgdGhlIGZvb3RlciBzZWN0aW9uIG9mIHRoZSBtb2RhbC4gVXNlIG9uZSBgTW9kYWxGb290ZXJgIHBlciBgTW9kYWxgLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL21vZGFsIERvY3N9XG4gKiAtIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vSHViU3BvdC91aS1leHRlbnNpb25zLWV4YW1wbGVzL3RyZWUvbWFpbi9vdmVybGF5LWV4YW1wbGUgT3ZlcmxheSBFeGFtcGxlfVxuICovXG5leHBvcnQgY29uc3QgTW9kYWxGb290ZXIgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdNb2RhbEZvb3RlcicpO1xuLyoqXG4gKiBVc2UgdGhlIGBJY29uYCBjb21wb25lbnQgdG8gcmVuZGVyIGEgdmlzdWFsIGljb24gd2l0aGluIG90aGVyIGNvbXBvbmVudHMuIEl0IGNhbiBnZW5lcmFsbHkgYmUgdXNlZCBpbnNpZGUgbW9zdCBjb21wb25lbnRzLCBleGNsdWRpbmcgb25lcyB0aGF0IGRvbid0IHN1cHBvcnQgY2hpbGQgY29tcG9uZW50cy5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9pY29uIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBJY29uID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnSWNvbicpO1xuLyoqXG4gKiBUaGUgYFN0YXR1c1RhZ2AgY29tcG9uZW50IHJlbmRlcnMgYSB2aXN1YWwgaW5kaWNhdG9yIHRvIGRpc3BsYXkgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIGFuIGl0ZW0uIFN0YXR1cyB0YWdzIGNhbiBiZSBzdGF0aWMgb3IgY2xpY2thYmxlLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3N0YXR1cy10YWcgRG9jc31cbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvc3RhdHVzLXRhZyN2YXJpYW50cyBWYXJpYW50c31cbiAqL1xuZXhwb3J0IGNvbnN0IFN0YXR1c1RhZyA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1N0YXR1c1RhZycpO1xuLyoqXG4gKiBUaGUgYExvYWRpbmdCdXR0b25gIGNvbXBvbmVudCByZW5kZXJzIGEgYnV0dG9uIHdpdGggbG9hZGluZyBzdGF0ZSBvcHRpb25zLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2xvYWRpbmctYnV0dG9uIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBMb2FkaW5nQnV0dG9uID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnTG9hZGluZ0J1dHRvbicsIHtcbiAgICBmcmFnbWVudFByb3BzOiBbJ292ZXJsYXknXSxcbn0pO1xuLyoqXG4gKiBUaGUgYEJhckNoYXJ0YCBjb21wb25lbnQgcmVuZGVycyBhIGJhciBjaGFydCBmb3IgdmlzdWFsaXppbmcgZGF0YS4gVGhpcyB0eXBlIG9mIGNoYXJ0IGlzIGJlc3Qgc3VpdGVkIGZvciBjb21wYXJpbmcgY2F0ZWdvcmljYWwgZGF0YS5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9iYXItY2hhcnQgQmFyQ2hhcnQgRG9jc31cbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvY2hhcnRzIENoYXJ0cyBEb2NzfVxuICogLSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL0h1YlNwb3QvdWktZXh0ZW5zaW9ucy1leGFtcGxlcy90cmVlL21haW4vY2hhcnRzLWV4YW1wbGUgQ2hhcnRzIEV4YW1wbGV9XG4gKi9cbmV4cG9ydCBjb25zdCBCYXJDaGFydCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0JhckNoYXJ0Jyk7XG4vKipcbiAqIFRoZSBgTGluZUNoYXJ0YCBjb21wb25lbnQgcmVuZGVycyBhIGxpbmUgY2hhcnQgZm9yIHZpc3VhbGl6aW5nIGRhdGEuIFRoaXMgdHlwZSBvZiBjaGFydCBpcyBiZXN0IHN1aXRlZCBmb3IgdGltZSBzZXJpZXMgcGxvdHMgb3IgdHJlbmQgZGF0YS5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9saW5lLWNoYXJ0IExpbmVDaGFydCBEb2NzfVxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9jaGFydHMgQ2hhcnRzIERvY3N9XG4gKiAtIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vSHViU3BvdC91aS1leHRlbnNpb25zLWV4YW1wbGVzL3RyZWUvbWFpbi9jaGFydHMtZXhhbXBsZSBDaGFydHMgRXhhbXBsZX1cbiAqL1xuZXhwb3J0IGNvbnN0IExpbmVDaGFydCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0xpbmVDaGFydCcpO1xuLyoqXG4gKiBgVGFic2AgYWxsb3cgeW91IHRvIGdyb3VwIHJlbGF0ZWQgY29udGVudCBpbiBhIGNvbXBhY3Qgc3BhY2UsIGFsbG93aW5nIHVzZXJzIHRvIHN3aXRjaCBiZXR3ZWVuIHZpZXdzIHdpdGhvdXQgbGVhdmluZyB0aGUgcGFnZS5cbiAqIEBleGFtcGxlXG4gKiBgYGB0c3hcbiAqIDxUYWJzIGRlZmF1bHRTZWxlY3RlZD1cIjFcIj5cbiAqICAgPFRhYiB0YWJJZD1cIjFcIj5GaXJzdCB0YWIgY29udGVudDwvVGFiPlxuICogICA8VGFiIHRhYklkPVwiMlwiPlNlY29uZCB0YWIgY29udGVudDwvVGFiPlxuICogPC9UYWJzPlxuICogYGBgXG4gKlxuICogKipMaW5rczoqKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy90YWJzIERvY3VtZW50YXRpb259XG4gKiAtIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vaHVic3BvdGRldi91aWUtdGFiYmVkLXByb2R1Y3QtY2Fyb3VzZWwgVGFicyBFeGFtcGxlfVxuICovXG5leHBvcnQgY29uc3QgVGFicyA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1RhYnMnKTtcbi8qKlxuICogRWFjaCBgVGFiYCByZXByZXNlbnRzIGEgc2luZ2xlIHRhYiAob3IgXCJ2aWV3XCIpIHdpdGhpbiB0aGUgcGFyZW50IGBUYWJzYCBjb21wb25lbnQuXG4gKiBAZXhhbXBsZVxuICogYGBgdHN4XG4gKiA8VGFicyBkZWZhdWx0U2VsZWN0ZWQ9XCIxXCI+XG4gKiAgIDxUYWIgdGFiSWQ9XCIxXCI+Rmlyc3QgdGFiIGNvbnRlbnQ8L1RhYj5cbiAqICAgPFRhYiB0YWJJZD1cIjJcIj5TZWNvbmQgdGFiIGNvbnRlbnQ8L1RhYj5cbiAqIDwvVGFicz5cbiAqIGBgYFxuICpcbiAqICoqTGlua3M6KipcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvdGFicyBEb2N1bWVudGF0aW9ufVxuICogLSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2h1YnNwb3RkZXYvdWllLXRhYmJlZC1wcm9kdWN0LWNhcm91c2VsIFRhYnMgRXhhbXBsZX1cbiAqL1xuZXhwb3J0IGNvbnN0IFRhYiA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1RhYicpO1xuLyoqXG4gKiBUaGUgYElsbHVzdHJhdGlvbmAgY29tcG9uZW50IHJlbmRlcnMgYW4gaWxsdXN0cmF0aW9uLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2lsbHVzdHJhdGlvbiBJbGx1c3RyYXRpb24gRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IElsbHVzdHJhdGlvbiA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0lsbHVzdHJhdGlvbicpO1xuLyoqXG4gKiBUaGUgYFRvb2x0aXBgIGNvbXBvbmVudCByZW5kZXJzIGEgdG9vbHRpcCBmb3IgYSBjb21wb25lbnQuXG4gKlxuICogKipMaW5rczoqKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy90b29sdGlwIERvY3VtZW50YXRpb259XG4gKi9cbmV4cG9ydCBjb25zdCBUb29sdGlwID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnVG9vbHRpcCcpO1xuLyoqXG4gKiBUaGUgYFNlYXJjaElucHV0YCBjb21wb25lbnQgcmVuZGVycyBhIHNlYXJjaCBpbnB1dCBmaWVsZC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9zZWFyY2gtaW5wdXQgU2VhcmNoSW5wdXQgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IFNlYXJjaElucHV0ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnU2VhcmNoSW5wdXQnKTtcbi8qKlxuICogVGhlIGBUaW1lSW5wdXRgIGNvbXBvbmVudCByZW5kZXJzIGFuIGlucHV0IGZpZWxkIHdoZXJlIGEgdXNlciBjYW4gc2VsZWN0IGEgdGltZS4gQ29tbW9ubHkgdXNlZCB3aXRoaW4gdGhlIGBGb3JtYCBjb21wb25lbnQuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvdGltZS1pbnB1dCBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgVGltZUlucHV0ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnVGltZUlucHV0Jyk7XG4vKipcbiAqIFRoZSBgQ3VycmVuY3lJbnB1dGAgY29tcG9uZW50IHJlbmRlcnMgYSBjdXJyZW5jeSBpbnB1dCBmaWVsZCB3aXRoIHByb3BlciBmb3JtYXR0aW5nLFxuICogY3VycmVuY3kgc3ltYm9scywgYW5kIGxvY2FsZS1zcGVjaWZpYyBkaXNwbGF5IHBhdHRlcm5zLiBDb21tb25seSB1c2VkIHdpdGhpbiB0aGUgYEZvcm1gIGNvbXBvbmVudC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9jdXJyZW5jeS1pbnB1dCBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgQ3VycmVuY3lJbnB1dCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0N1cnJlbmN5SW5wdXQnKTtcbi8qKlxuICogVGhlIGBJbmxpbmVgIGNvbXBvbmVudCBzcHJlYWRzIGFsaWducyBpdHMgY2hpbGRyZW4gaG9yaXpvbnRhbGx5IChhbG9uZyB0aGUgeC1heGlzKS5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9pbmxpbmUgRG9jc31cbiAqLyBleHBvcnQgY29uc3QgSW5saW5lID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnSW5saW5lJyk7XG4vKipcbiAqIFRoZSBgQXV0b0dyaWRgIGNvbXBvbmVudCByZW5kZXJzIGEgcmVzcG9uc2l2ZSBncmlkIGxheW91dCB0aGF0IGF1dG9tYXRpY2FsbHkgYWRqdXN0cyB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgYmFzZWQgb24gYXZhaWxhYmxlIHNwYWNlLiBVc2UgdGhpcyBjb21wb25lbnQgdG8gY3JlYXRlIGZsZXhpYmxlIGdyaWQgbGF5b3V0cyBmb3IgY2FyZHMsIHRpbGVzLCBvciBvdGhlciBjb250ZW50LlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3NpbXBsZS1ncmlkIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBBdXRvR3JpZCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0F1dG9HcmlkJyk7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gQ1JNIENPTVBPTkVOVFNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5leHBvcnQgY29uc3QgQ3JtUHJvcGVydHlMaXN0ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQ3JtUHJvcGVydHlMaXN0Jyk7XG5leHBvcnQgY29uc3QgQ3JtQXNzb2NpYXRpb25UYWJsZSA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0NybUFzc29jaWF0aW9uVGFibGUnKTtcbmV4cG9ydCBjb25zdCBDcm1EYXRhSGlnaGxpZ2h0ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQ3JtRGF0YUhpZ2hsaWdodCcpO1xuZXhwb3J0IGNvbnN0IENybVJlcG9ydCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0NybVJlcG9ydCcpO1xuZXhwb3J0IGNvbnN0IENybUFzc29jaWF0aW9uUGl2b3QgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdDcm1Bc3NvY2lhdGlvblBpdm90Jyk7XG5leHBvcnQgY29uc3QgQ3JtQXNzb2NpYXRpb25Qcm9wZXJ0eUxpc3QgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdDcm1Bc3NvY2lhdGlvblByb3BlcnR5TGlzdCcpO1xuZXhwb3J0IGNvbnN0IENybUFzc29jaWF0aW9uU3RhZ2VUcmFja2VyID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQ3JtQXNzb2NpYXRpb25TdGFnZVRyYWNrZXInKTtcbmV4cG9ydCBjb25zdCBDcm1TaW1wbGVEZWFkbGluZSA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0NybVNpbXBsZURlYWRsaW5lJyk7XG5leHBvcnQgY29uc3QgQ3JtU3RhZ2VUcmFja2VyID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQ3JtU3RhZ2VUcmFja2VyJyk7XG5leHBvcnQgY29uc3QgQ3JtU3RhdGlzdGljcyA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0NybVN0YXRpc3RpY3MnKTtcbmV4cG9ydCBjb25zdCBDcm1BY3Rpb25CdXR0b24gPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdDcm1BY3Rpb25CdXR0b24nKTtcbmV4cG9ydCBjb25zdCBDcm1BY3Rpb25MaW5rID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQ3JtQWN0aW9uTGluaycpO1xuZXhwb3J0IGNvbnN0IENybUNhcmRBY3Rpb25zID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQ3JtQ2FyZEFjdGlvbnMnKTtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBBUFAgSE9NRSBDT01QT05FTlRTXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLyoqXG4gKiBUaGUgYEhlYWRlckFjdGlvbnNgIGNvbXBvbmVudCByZW5kZXJzIGEgY29udGFpbmVyIGZvciBhY3Rpb24gYnV0dG9ucyBpbiB0aGUgYXBwIGhvbWUgaGVhZGVyLiBJdCBhY2NlcHRzIGBQcmltYXJ5SGVhZGVyQWN0aW9uQnV0dG9uYCBhbmQgYFNlY29uZGFyeUhlYWRlckFjdGlvbkJ1dHRvbmAgYXMgY2hpbGRyZW4uXG4gKlxuICovXG5leHBvcnQgY29uc3QgSGVhZGVyQWN0aW9ucyA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0hlYWRlckFjdGlvbnMnKTtcbi8qKlxuICogVGhlIGBQcmltYXJ5SGVhZGVyQWN0aW9uQnV0dG9uYCBjb21wb25lbnQgcmVuZGVycyBhIHByaW1hcnkgYWN0aW9uIGJ1dHRvbiBpbiB0aGUgYXBwIGhvbWUgaGVhZGVyLiBUaGlzIGJ1dHRvbiBpcyBzdHlsZWQgYXMgdGhlIG1haW4gY2FsbC10by1hY3Rpb24gYW5kIG9ubHkgb25lIHNob3VsZCBiZSB1c2VkIHBlciBgSGVhZGVyQWN0aW9uc2AgY29udGFpbmVyLlxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IFByaW1hcnlIZWFkZXJBY3Rpb25CdXR0b24gPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdQcmltYXJ5SGVhZGVyQWN0aW9uQnV0dG9uJywge1xuICAgIGZyYWdtZW50UHJvcHM6IFsnb3ZlcmxheSddLFxufSk7XG4vKipcbiAqIFRoZSBgU2Vjb25kYXJ5SGVhZGVyQWN0aW9uQnV0dG9uYCBjb21wb25lbnQgcmVuZGVycyBhIHNlY29uZGFyeSBhY3Rpb24gYnV0dG9uIGluIHRoZSBhcHAgaG9tZSBoZWFkZXIuIE11bHRpcGxlIHNlY29uZGFyeSBhY3Rpb25zIGNhbiBiZSB1c2VkIGFuZCB0aGV5IHdpbGwgYmUgZ3JvdXBlZCBhcHByb3ByaWF0ZWx5IGluIHRoZSBoZWFkZXIuXG4gKlxuICovXG5leHBvcnQgY29uc3QgU2Vjb25kYXJ5SGVhZGVyQWN0aW9uQnV0dG9uID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnU2Vjb25kYXJ5SGVhZGVyQWN0aW9uQnV0dG9uJywge1xuICAgIGZyYWdtZW50UHJvcHM6IFsnb3ZlcmxheSddLFxufSk7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gRVhQRVJJTUVOVEFMIENPTVBPTkVOVFNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vKipcbiAqIEBleHBlcmltZW50YWwgVGhpcyBjb21wb25lbnQgaXMgZXhwZXJpbWVudGFsLiBBdm9pZCB1c2luZyBpdCBpbiBwcm9kdWN0aW9uIGR1ZSB0byBwb3RlbnRpYWwgYnJlYWtpbmcgY2hhbmdlcy4gWW91ciBmZWVkYmFjayBpcyB2YWx1YWJsZSBmb3IgaW1wcm92ZW1lbnRzLiBTdGF5IHR1bmVkIGZvciB1cGRhdGVzLlxuICovXG5leHBvcnQgY29uc3QgSWZyYW1lID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnSWZyYW1lJyk7XG4vKipcbiAqIEBleHBlcmltZW50YWwgVGhpcyBjb21wb25lbnQgaXMgZXhwZXJpbWVudGFsLiBBdm9pZCB1c2luZyBpdCBpbiBwcm9kdWN0aW9uIGR1ZSB0byBwb3RlbnRpYWwgYnJlYWtpbmcgY2hhbmdlcy4gWW91ciBmZWVkYmFjayBpcyB2YWx1YWJsZSBmb3IgaW1wcm92ZW1lbnRzLiBTdGF5IHR1bmVkIGZvciB1cGRhdGVzLlxuICovXG5leHBvcnQgY29uc3QgTWVkaWFPYmplY3QgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdNZWRpYU9iamVjdCcsIHtcbiAgICBmcmFnbWVudFByb3BzOiBbJ2l0ZW1SaWdodCcsICdpdGVtTGVmdCddLFxufSk7XG4vKipcbiAqIEBleHBlcmltZW50YWwgVGhpcyBjb21wb25lbnQgaXMgZXhwZXJpbWVudGFsLiBBdm9pZCB1c2luZyBpdCBpbiBwcm9kdWN0aW9uIGR1ZSB0byBwb3RlbnRpYWwgYnJlYWtpbmcgY2hhbmdlcy4gWW91ciBmZWVkYmFjayBpcyB2YWx1YWJsZSBmb3IgaW1wcm92ZW1lbnRzLiBTdGF5IHR1bmVkIGZvciB1cGRhdGVzLlxuICovXG5leHBvcnQgY29uc3QgU3RhY2syID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnU3RhY2syJyk7XG4vKipcbiAqIEBleHBlcmltZW50YWwgVGhpcyBjb21wb25lbnQgaXMgZXhwZXJpbWVudGFsLiBBdm9pZCB1c2luZyBpdCBpbiBwcm9kdWN0aW9uIGR1ZSB0byBwb3RlbnRpYWwgYnJlYWtpbmcgY2hhbmdlcy4gWW91ciBmZWVkYmFjayBpcyB2YWx1YWJsZSBmb3IgaW1wcm92ZW1lbnRzLiBTdGF5IHR1bmVkIGZvciB1cGRhdGVzLlxuICovXG5leHBvcnQgY29uc3QgQ2VudGVyID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQ2VudGVyJyk7XG4vKipcbiAqIEBleHBlcmltZW50YWwgVGhpcyBjb21wb25lbnQgaXMgZXhwZXJpbWVudGFsLiBBdm9pZCB1c2luZyBpdCBpbiBwcm9kdWN0aW9uIGR1ZSB0byBwb3RlbnRpYWwgYnJlYWtpbmcgY2hhbmdlcy4gWW91ciBmZWVkYmFjayBpcyB2YWx1YWJsZSBmb3IgaW1wcm92ZW1lbnRzLiBTdGF5IHR1bmVkIGZvciB1cGRhdGVzLlxuICovXG5leHBvcnQgY29uc3QgR3JpZCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0dyaWQnKTtcbi8qKlxuICogQGV4cGVyaW1lbnRhbCBUaGlzIGNvbXBvbmVudCBpcyBleHBlcmltZW50YWwuIEF2b2lkIHVzaW5nIGl0IGluIHByb2R1Y3Rpb24gZHVlIHRvIHBvdGVudGlhbCBicmVha2luZyBjaGFuZ2VzLiBZb3VyIGZlZWRiYWNrIGlzIHZhbHVhYmxlIGZvciBpbXByb3ZlbWVudHMuIFN0YXkgdHVuZWQgZm9yIHVwZGF0ZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBHcmlkSXRlbSA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0dyaWRJdGVtJyk7XG4vKipcbiAqIEBleHBlcmltZW50YWwgVGhpcyBjb21wb25lbnQgaXMgZXhwZXJpbWVudGFsLiBBdm9pZCB1c2luZyBpdCBpbiBwcm9kdWN0aW9uIGR1ZSB0byBwb3RlbnRpYWwgYnJlYWtpbmcgY2hhbmdlcy4gWW91ciBmZWVkYmFjayBpcyB2YWx1YWJsZSBmb3IgaW1wcm92ZW1lbnRzLiBTdGF5IHR1bmVkIGZvciB1cGRhdGVzLlxuICovXG5leHBvcnQgY29uc3QgU2V0dGluZ3NWaWV3ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnU2V0dGluZ3NWaWV3Jyk7XG4vKipcbiAqIFRoZSBgRXhwYW5kYWJsZVRleHRgIGNvbXBvbmVudCByZW5kZXJzIGEgdGV4dCB0aGF0IGNhbiBiZSBleHBhbmRlZCBvciBjb2xsYXBzZWQgYmFzZWQgb24gYSBtYXhpbXVtIGhlaWdodC5cbiAqXG4gKiBAZXhwZXJpbWVudGFsIFRoaXMgY29tcG9uZW50IGlzIGV4cGVyaW1lbnRhbC4gQXZvaWQgdXNpbmcgaXQgaW4gcHJvZHVjdGlvbiBkdWUgdG8gcG90ZW50aWFsIGJyZWFraW5nIGNoYW5nZXMuIFlvdXIgZmVlZGJhY2sgaXMgdmFsdWFibGUgZm9yIGltcHJvdmVtZW50cy4gU3RheSB0dW5lZCBmb3IgdXBkYXRlcy5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9leHBhbmRhYmxlLXRleHQgRXhwYW5kYWJsZVRleHQgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IEV4cGFuZGFibGVUZXh0ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnRXhwYW5kYWJsZVRleHQnKTtcbi8qKlxuICogVGhlIGBQb3BvdmVyYCBjb21wb25lbnQgcmVuZGVycyBhIHBvcG92ZXIgb3ZlcmxheSB0aGF0IGNhbiBjb250YWluIG90aGVyIGNvbXBvbmVudHMuXG4gKlxuICogQGV4cGVyaW1lbnRhbCBUaGlzIGNvbXBvbmVudCBpcyBleHBlcmltZW50YWwuIEF2b2lkIHVzaW5nIGl0IGluIHByb2R1Y3Rpb24gZHVlIHRvIHBvdGVudGlhbCBicmVha2luZyBjaGFuZ2VzLiBZb3VyIGZlZWRiYWNrIGlzIHZhbHVhYmxlIGZvciBpbXByb3ZlbWVudHMuIFN0YXkgdHVuZWQgZm9yIHVwZGF0ZXMuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvcG9wb3ZlciBQb3BvdmVyIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBQb3BvdmVyID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnUG9wb3ZlcicpO1xuLyoqXG4gKiBAZXhwZXJpbWVudGFsIFRoaXMgY29tcG9uZW50IGlzIGV4cGVyaW1lbnRhbC4gQXZvaWQgdXNpbmcgaXQgaW4gcHJvZHVjdGlvbiBkdWUgdG8gcG90ZW50aWFsIGJyZWFraW5nIGNoYW5nZXMuIFlvdXIgZmVlZGJhY2sgaXMgdmFsdWFibGUgZm9yIGltcHJvdmVtZW50cy4gU3RheSB0dW5lZCBmb3IgdXBkYXRlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IEZpbGVJbnB1dCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0ZpbGVJbnB1dCcpO1xuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmNvbnN0IE1vY2tzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XG4vKipcbiAqIENyZWF0ZXMgYSBtb2NrLWF3YXJlIGhvb2sgZnVuY3Rpb24gdGhhdCBjYW4gYmUgdXNlZCB0byBtb2NrIHRoZSBvcmlnaW5hbCBob29rIGZ1bmN0aW9uLlxuICogVGhlIG1vY2stYXdhcmUgaG9vayBmdW5jdGlvbiB3aWxsIHJldHVybiB0aGUgbW9ja2VkIGhvb2sgZnVuY3Rpb24gaWYgYSBtb2NrIGlzIGZvdW5kLCBvdGhlcndpc2UgaXQgd2lsbCByZXR1cm4gdGhlIG9yaWdpbmFsIGhvb2sgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIGhvb2tOYW1lIFRoZSBuYW1lIG9mIHRoZSBob29rIHRvIG1vY2sgdGhhdCBjb3JyZXNwb25kcyB0byB0aGUga2V5IGluIHRoZSBNb2NrcyBpbnRlcmZhY2VcbiAqIEBwYXJhbSBvcmlnaW5hbEhvb2tGdW5jdGlvbiBUaGUgb3JpZ2luYWwgaG9vayBmdW5jdGlvbiB0byBjYWxsIGlmIG5vIG1vY2sgaXMgZm91bmRcbiAqIEByZXR1cm5zIFRoZSBtb2NrZWQgaG9vayBmdW5jdGlvbiBvciB0aGUgb3JpZ2luYWwgaG9vayBmdW5jdGlvbiBpZiBubyBtb2NrIGlzIGZvdW5kXG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVNb2NrQXdhcmVIb29rID0gKGhvb2tOYW1lLCBvcmlnaW5hbEhvb2tGdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHVzZVdyYXBwZXIgPSAoLi4uYXJncykgPT4ge1xuICAgICAgICBjb25zdCBtb2NrcyA9IHVzZU1vY2tzQ29udGV4dCgpO1xuICAgICAgICBpZiAoIW1vY2tzKSB7XG4gICAgICAgICAgICAvLyBJZiBubyBtb2NrcyBhcmUgcHJvdmlkZWQsIGNhbGwgdGhlIG9yaWdpbmFsIGhvb2sgZnVuY3Rpb25cbiAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbEhvb2tGdW5jdGlvbiguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBXaGVuIGEgbW9jayBpcyBwcm92aWRlZCBieSB0aGUgdGVzdGluZyB1dGlsaXRpZXMgKHZpYSA8TW9ja3NDb250ZXh0UHJvdmlkZXI+KSwgcmV0dXJuIHRoZSBtb2NrZWQgaG9vayBmdW5jdGlvblxuICAgICAgICBjb25zdCBtb2NrSG9vayA9IG1vY2tzW2hvb2tOYW1lXTtcbiAgICAgICAgaWYgKCFtb2NrSG9vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbGxlZ2FsIFN0YXRlOiBNb2NrIGZvciBob29rICR7aG9va05hbWV9IG5vdCBmb3VuZC5gKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDYWxsIHRoZSBtb2NrZWQgaG9vayBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIGFyZ3VtZW50cyBhcyB0aGUgb3JpZ2luYWwgaG9vayBmdW5jdGlvbiBhbmQgcmV0dXJuIHRoZSByZXN1bHRcbiAgICAgICAgcmV0dXJuIG1vY2tIb29rKC4uLmFyZ3MpO1xuICAgIH07XG4gICAgcmV0dXJuIHVzZVdyYXBwZXI7XG59O1xuLyoqXG4gKiBBIGhvb2sgdGhhdCBwcm92aWRlcyBhY2Nlc3MgdG8gdGhlIE1vY2tzIGNvbnRleHQuXG4gKiBSZXR1cm5zIHRoZSBtb2NrcyBvYmplY3QgaWYgaW5zaWRlIGEgTW9ja3NDb250ZXh0UHJvdmlkZXIsIG90aGVyd2lzZSByZXR1cm5zIG51bGwuXG4gKlxuICogQHJldHVybnMgVGhlIG1vY2tzIG9iamVjdCBvciBudWxsIGlmIG5vdCBpbiBhIHRlc3QgZW52aXJvbm1lbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNb2Nrc0NvbnRleHQoKSB7XG4gICAgcmV0dXJuIHVzZUNvbnRleHQoTW9ja3NDb250ZXh0KTtcbn1cbi8qKlxuICogQSBSZWFjdCBjb21wb25lbnQgdGhhdCBwcm92aWRlcyB0aGUgTW9ja3MgY29udGV4dCB0aGF0IGNhbiBiZSB1c2VkIHRvIHByb3ZpZGUgbW9ja3MgdG8gdGhlIG1vY2stYXdhcmUgaG9vayBmdW5jdGlvbnMuXG4gKlxuICogQHBhcmFtIGNoaWxkcmVuIFRoZSBjaGlsZHJlbiB0byByZW5kZXIuXG4gKiBAcmV0dXJucyBUaGUgY2hpbGRyZW4gd3JhcHBlZCBpbiB0aGUgTW9ja3MgY29udGV4dCBwcm92aWRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IE1vY2tzQ29udGV4dFByb3ZpZGVyID0gTW9ja3NDb250ZXh0LlByb3ZpZGVyO1xuIiwiLy8hIG1vbWVudC5qc1xuLy8hIHZlcnNpb24gOiAyLjMwLjFcbi8vISBhdXRob3JzIDogVGltIFdvb2QsIElza3JlbiBDaGVybmV2LCBNb21lbnQuanMgY29udHJpYnV0b3JzXG4vLyEgbGljZW5zZSA6IE1JVFxuLy8hIG1vbWVudGpzLmNvbVxuXG52YXIgaG9va0NhbGxiYWNrO1xuXG5mdW5jdGlvbiBob29rcygpIHtcbiAgICByZXR1cm4gaG9va0NhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG59XG5cbi8vIFRoaXMgaXMgZG9uZSB0byByZWdpc3RlciB0aGUgbWV0aG9kIGNhbGxlZCB3aXRoIG1vbWVudCgpXG4vLyB3aXRob3V0IGNyZWF0aW5nIGNpcmN1bGFyIGRlcGVuZGVuY2llcy5cbmZ1bmN0aW9uIHNldEhvb2tDYWxsYmFjayhjYWxsYmFjaykge1xuICAgIGhvb2tDYWxsYmFjayA9IGNhbGxiYWNrO1xufVxuXG5mdW5jdGlvbiBpc0FycmF5KGlucHV0KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgaW5wdXQgaW5zdGFuY2VvZiBBcnJheSB8fFxuICAgICAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5wdXQpID09PSAnW29iamVjdCBBcnJheV0nXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QoaW5wdXQpIHtcbiAgICAvLyBJRTggd2lsbCB0cmVhdCB1bmRlZmluZWQgYW5kIG51bGwgYXMgb2JqZWN0IGlmIGl0IHdhc24ndCBmb3JcbiAgICAvLyBpbnB1dCAhPSBudWxsXG4gICAgcmV0dXJuIChcbiAgICAgICAgaW5wdXQgIT0gbnVsbCAmJlxuICAgICAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5wdXQpID09PSAnW29iamVjdCBPYmplY3RdJ1xuICAgICk7XG59XG5cbmZ1bmN0aW9uIGhhc093blByb3AoYSwgYikge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYSwgYik7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0RW1wdHkob2JqKSB7XG4gICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopLmxlbmd0aCA9PT0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgaztcbiAgICAgICAgZm9yIChrIGluIG9iaikge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3Aob2JqLCBrKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0ID09PSB2b2lkIDA7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGlucHV0KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgdHlwZW9mIGlucHV0ID09PSAnbnVtYmVyJyB8fFxuICAgICAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5wdXQpID09PSAnW29iamVjdCBOdW1iZXJdJ1xuICAgICk7XG59XG5cbmZ1bmN0aW9uIGlzRGF0ZShpbnB1dCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIGlucHV0IGluc3RhbmNlb2YgRGF0ZSB8fFxuICAgICAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5wdXQpID09PSAnW29iamVjdCBEYXRlXSdcbiAgICApO1xufVxuXG5mdW5jdGlvbiBtYXAoYXJyLCBmbikge1xuICAgIHZhciByZXMgPSBbXSxcbiAgICAgICAgaSxcbiAgICAgICAgYXJyTGVuID0gYXJyLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgYXJyTGVuOyArK2kpIHtcbiAgICAgICAgcmVzLnB1c2goZm4oYXJyW2ldLCBpKSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cbmZ1bmN0aW9uIGV4dGVuZChhLCBiKSB7XG4gICAgZm9yICh2YXIgaSBpbiBiKSB7XG4gICAgICAgIGlmIChoYXNPd25Qcm9wKGIsIGkpKSB7XG4gICAgICAgICAgICBhW2ldID0gYltpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNPd25Qcm9wKGIsICd0b1N0cmluZycpKSB7XG4gICAgICAgIGEudG9TdHJpbmcgPSBiLnRvU3RyaW5nO1xuICAgIH1cblxuICAgIGlmIChoYXNPd25Qcm9wKGIsICd2YWx1ZU9mJykpIHtcbiAgICAgICAgYS52YWx1ZU9mID0gYi52YWx1ZU9mO1xuICAgIH1cblxuICAgIHJldHVybiBhO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVVVEMoaW5wdXQsIGZvcm1hdCwgbG9jYWxlLCBzdHJpY3QpIHtcbiAgICByZXR1cm4gY3JlYXRlTG9jYWxPclVUQyhpbnB1dCwgZm9ybWF0LCBsb2NhbGUsIHN0cmljdCwgdHJ1ZSkudXRjKCk7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRQYXJzaW5nRmxhZ3MoKSB7XG4gICAgLy8gV2UgbmVlZCB0byBkZWVwIGNsb25lIHRoaXMgb2JqZWN0LlxuICAgIHJldHVybiB7XG4gICAgICAgIGVtcHR5OiBmYWxzZSxcbiAgICAgICAgdW51c2VkVG9rZW5zOiBbXSxcbiAgICAgICAgdW51c2VkSW5wdXQ6IFtdLFxuICAgICAgICBvdmVyZmxvdzogLTIsXG4gICAgICAgIGNoYXJzTGVmdE92ZXI6IDAsXG4gICAgICAgIG51bGxJbnB1dDogZmFsc2UsXG4gICAgICAgIGludmFsaWRFcmE6IG51bGwsXG4gICAgICAgIGludmFsaWRNb250aDogbnVsbCxcbiAgICAgICAgaW52YWxpZEZvcm1hdDogZmFsc2UsXG4gICAgICAgIHVzZXJJbnZhbGlkYXRlZDogZmFsc2UsXG4gICAgICAgIGlzbzogZmFsc2UsXG4gICAgICAgIHBhcnNlZERhdGVQYXJ0czogW10sXG4gICAgICAgIGVyYTogbnVsbCxcbiAgICAgICAgbWVyaWRpZW06IG51bGwsXG4gICAgICAgIHJmYzI4MjI6IGZhbHNlLFxuICAgICAgICB3ZWVrZGF5TWlzbWF0Y2g6IGZhbHNlLFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGdldFBhcnNpbmdGbGFncyhtKSB7XG4gICAgaWYgKG0uX3BmID09IG51bGwpIHtcbiAgICAgICAgbS5fcGYgPSBkZWZhdWx0UGFyc2luZ0ZsYWdzKCk7XG4gICAgfVxuICAgIHJldHVybiBtLl9wZjtcbn1cblxudmFyIHNvbWU7XG5pZiAoQXJyYXkucHJvdG90eXBlLnNvbWUpIHtcbiAgICBzb21lID0gQXJyYXkucHJvdG90eXBlLnNvbWU7XG59IGVsc2Uge1xuICAgIHNvbWUgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgICAgIHZhciB0ID0gT2JqZWN0KHRoaXMpLFxuICAgICAgICAgICAgbGVuID0gdC5sZW5ndGggPj4+IDAsXG4gICAgICAgICAgICBpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgaW4gdCAmJiBmdW4uY2FsbCh0aGlzLCB0W2ldLCBpLCB0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWQobSkge1xuICAgIHZhciBmbGFncyA9IG51bGwsXG4gICAgICAgIHBhcnNlZFBhcnRzID0gZmFsc2UsXG4gICAgICAgIGlzTm93VmFsaWQgPSBtLl9kICYmICFpc05hTihtLl9kLmdldFRpbWUoKSk7XG4gICAgaWYgKGlzTm93VmFsaWQpIHtcbiAgICAgICAgZmxhZ3MgPSBnZXRQYXJzaW5nRmxhZ3MobSk7XG4gICAgICAgIHBhcnNlZFBhcnRzID0gc29tZS5jYWxsKGZsYWdzLnBhcnNlZERhdGVQYXJ0cywgZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIHJldHVybiBpICE9IG51bGw7XG4gICAgICAgIH0pO1xuICAgICAgICBpc05vd1ZhbGlkID1cbiAgICAgICAgICAgIGZsYWdzLm92ZXJmbG93IDwgMCAmJlxuICAgICAgICAgICAgIWZsYWdzLmVtcHR5ICYmXG4gICAgICAgICAgICAhZmxhZ3MuaW52YWxpZEVyYSAmJlxuICAgICAgICAgICAgIWZsYWdzLmludmFsaWRNb250aCAmJlxuICAgICAgICAgICAgIWZsYWdzLmludmFsaWRXZWVrZGF5ICYmXG4gICAgICAgICAgICAhZmxhZ3Mud2Vla2RheU1pc21hdGNoICYmXG4gICAgICAgICAgICAhZmxhZ3MubnVsbElucHV0ICYmXG4gICAgICAgICAgICAhZmxhZ3MuaW52YWxpZEZvcm1hdCAmJlxuICAgICAgICAgICAgIWZsYWdzLnVzZXJJbnZhbGlkYXRlZCAmJlxuICAgICAgICAgICAgKCFmbGFncy5tZXJpZGllbSB8fCAoZmxhZ3MubWVyaWRpZW0gJiYgcGFyc2VkUGFydHMpKTtcbiAgICAgICAgaWYgKG0uX3N0cmljdCkge1xuICAgICAgICAgICAgaXNOb3dWYWxpZCA9XG4gICAgICAgICAgICAgICAgaXNOb3dWYWxpZCAmJlxuICAgICAgICAgICAgICAgIGZsYWdzLmNoYXJzTGVmdE92ZXIgPT09IDAgJiZcbiAgICAgICAgICAgICAgICBmbGFncy51bnVzZWRUb2tlbnMubGVuZ3RoID09PSAwICYmXG4gICAgICAgICAgICAgICAgZmxhZ3MuYmlnSG91ciA9PT0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChPYmplY3QuaXNGcm96ZW4gPT0gbnVsbCB8fCAhT2JqZWN0LmlzRnJvemVuKG0pKSB7XG4gICAgICAgIG0uX2lzVmFsaWQgPSBpc05vd1ZhbGlkO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpc05vd1ZhbGlkO1xuICAgIH1cbiAgICByZXR1cm4gbS5faXNWYWxpZDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW52YWxpZChmbGFncykge1xuICAgIHZhciBtID0gY3JlYXRlVVRDKE5hTik7XG4gICAgaWYgKGZsYWdzICE9IG51bGwpIHtcbiAgICAgICAgZXh0ZW5kKGdldFBhcnNpbmdGbGFncyhtKSwgZmxhZ3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhtKS51c2VySW52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBtO1xufVxuXG4vLyBQbHVnaW5zIHRoYXQgYWRkIHByb3BlcnRpZXMgc2hvdWxkIGFsc28gYWRkIHRoZSBrZXkgaGVyZSAobnVsbCB2YWx1ZSksXG4vLyBzbyB3ZSBjYW4gcHJvcGVybHkgY2xvbmUgb3Vyc2VsdmVzLlxudmFyIG1vbWVudFByb3BlcnRpZXMgPSAoaG9va3MubW9tZW50UHJvcGVydGllcyA9IFtdKSxcbiAgICB1cGRhdGVJblByb2dyZXNzID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGNvcHlDb25maWcodG8sIGZyb20pIHtcbiAgICB2YXIgaSxcbiAgICAgICAgcHJvcCxcbiAgICAgICAgdmFsLFxuICAgICAgICBtb21lbnRQcm9wZXJ0aWVzTGVuID0gbW9tZW50UHJvcGVydGllcy5sZW5ndGg7XG5cbiAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX2lzQU1vbWVudE9iamVjdCkpIHtcbiAgICAgICAgdG8uX2lzQU1vbWVudE9iamVjdCA9IGZyb20uX2lzQU1vbWVudE9iamVjdDtcbiAgICB9XG4gICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl9pKSkge1xuICAgICAgICB0by5faSA9IGZyb20uX2k7XG4gICAgfVxuICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5fZikpIHtcbiAgICAgICAgdG8uX2YgPSBmcm9tLl9mO1xuICAgIH1cbiAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX2wpKSB7XG4gICAgICAgIHRvLl9sID0gZnJvbS5fbDtcbiAgICB9XG4gICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl9zdHJpY3QpKSB7XG4gICAgICAgIHRvLl9zdHJpY3QgPSBmcm9tLl9zdHJpY3Q7XG4gICAgfVxuICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5fdHptKSkge1xuICAgICAgICB0by5fdHptID0gZnJvbS5fdHptO1xuICAgIH1cbiAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX2lzVVRDKSkge1xuICAgICAgICB0by5faXNVVEMgPSBmcm9tLl9pc1VUQztcbiAgICB9XG4gICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl9vZmZzZXQpKSB7XG4gICAgICAgIHRvLl9vZmZzZXQgPSBmcm9tLl9vZmZzZXQ7XG4gICAgfVxuICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5fcGYpKSB7XG4gICAgICAgIHRvLl9wZiA9IGdldFBhcnNpbmdGbGFncyhmcm9tKTtcbiAgICB9XG4gICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl9sb2NhbGUpKSB7XG4gICAgICAgIHRvLl9sb2NhbGUgPSBmcm9tLl9sb2NhbGU7XG4gICAgfVxuXG4gICAgaWYgKG1vbWVudFByb3BlcnRpZXNMZW4gPiAwKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBtb21lbnRQcm9wZXJ0aWVzTGVuOyBpKyspIHtcbiAgICAgICAgICAgIHByb3AgPSBtb21lbnRQcm9wZXJ0aWVzW2ldO1xuICAgICAgICAgICAgdmFsID0gZnJvbVtwcm9wXTtcbiAgICAgICAgICAgIGlmICghaXNVbmRlZmluZWQodmFsKSkge1xuICAgICAgICAgICAgICAgIHRvW3Byb3BdID0gdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvO1xufVxuXG4vLyBNb21lbnQgcHJvdG90eXBlIG9iamVjdFxuZnVuY3Rpb24gTW9tZW50KGNvbmZpZykge1xuICAgIGNvcHlDb25maWcodGhpcywgY29uZmlnKTtcbiAgICB0aGlzLl9kID0gbmV3IERhdGUoY29uZmlnLl9kICE9IG51bGwgPyBjb25maWcuX2QuZ2V0VGltZSgpIDogTmFOKTtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgIHRoaXMuX2QgPSBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgICAvLyBQcmV2ZW50IGluZmluaXRlIGxvb3AgaW4gY2FzZSB1cGRhdGVPZmZzZXQgY3JlYXRlcyBuZXcgbW9tZW50XG4gICAgLy8gb2JqZWN0cy5cbiAgICBpZiAodXBkYXRlSW5Qcm9ncmVzcyA9PT0gZmFsc2UpIHtcbiAgICAgICAgdXBkYXRlSW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgICAgIGhvb2tzLnVwZGF0ZU9mZnNldCh0aGlzKTtcbiAgICAgICAgdXBkYXRlSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaXNNb21lbnQob2JqKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgb2JqIGluc3RhbmNlb2YgTW9tZW50IHx8IChvYmogIT0gbnVsbCAmJiBvYmouX2lzQU1vbWVudE9iamVjdCAhPSBudWxsKVxuICAgICk7XG59XG5cbmZ1bmN0aW9uIHdhcm4obXNnKSB7XG4gICAgaWYgKFxuICAgICAgICBob29rcy5zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZ3MgPT09IGZhbHNlICYmXG4gICAgICAgIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBjb25zb2xlLndhcm5cbiAgICApIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdEZXByZWNhdGlvbiB3YXJuaW5nOiAnICsgbXNnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRlcHJlY2F0ZShtc2csIGZuKSB7XG4gICAgdmFyIGZpcnN0VGltZSA9IHRydWU7XG5cbiAgICByZXR1cm4gZXh0ZW5kKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGhvb2tzLmRlcHJlY2F0aW9uSGFuZGxlciAhPSBudWxsKSB7XG4gICAgICAgICAgICBob29rcy5kZXByZWNhdGlvbkhhbmRsZXIobnVsbCwgbXNnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmlyc3RUaW1lKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdLFxuICAgICAgICAgICAgICAgIGFyZyxcbiAgICAgICAgICAgICAgICBpLFxuICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICBhcmdMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGFyZ0xlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJnID0gJyc7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbaV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZyArPSAnXFxuWycgKyBpICsgJ10gJztcbiAgICAgICAgICAgICAgICAgICAgZm9yIChrZXkgaW4gYXJndW1lbnRzWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFzT3duUHJvcChhcmd1bWVudHNbMF0sIGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmcgKz0ga2V5ICsgJzogJyArIGFyZ3VtZW50c1swXVtrZXldICsgJywgJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhcmcgPSBhcmcuc2xpY2UoMCwgLTIpOyAvLyBSZW1vdmUgdHJhaWxpbmcgY29tbWEgYW5kIHNwYWNlXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYXJnID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhcmdzLnB1c2goYXJnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICAgICAgbXNnICtcbiAgICAgICAgICAgICAgICAgICAgJ1xcbkFyZ3VtZW50czogJyArXG4gICAgICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3MpLmpvaW4oJycpICtcbiAgICAgICAgICAgICAgICAgICAgJ1xcbicgK1xuICAgICAgICAgICAgICAgICAgICBuZXcgRXJyb3IoKS5zdGFja1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGZpcnN0VGltZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH0sIGZuKTtcbn1cblxudmFyIGRlcHJlY2F0aW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBkZXByZWNhdGVTaW1wbGUobmFtZSwgbXNnKSB7XG4gICAgaWYgKGhvb2tzLmRlcHJlY2F0aW9uSGFuZGxlciAhPSBudWxsKSB7XG4gICAgICAgIGhvb2tzLmRlcHJlY2F0aW9uSGFuZGxlcihuYW1lLCBtc2cpO1xuICAgIH1cbiAgICBpZiAoIWRlcHJlY2F0aW9uc1tuYW1lXSkge1xuICAgICAgICB3YXJuKG1zZyk7XG4gICAgICAgIGRlcHJlY2F0aW9uc1tuYW1lXSA9IHRydWU7XG4gICAgfVxufVxuXG5ob29rcy5zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZ3MgPSBmYWxzZTtcbmhvb2tzLmRlcHJlY2F0aW9uSGFuZGxlciA9IG51bGw7XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oaW5wdXQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICAodHlwZW9mIEZ1bmN0aW9uICE9PSAndW5kZWZpbmVkJyAmJiBpbnB1dCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB8fFxuICAgICAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5wdXQpID09PSAnW29iamVjdCBGdW5jdGlvbl0nXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gc2V0KGNvbmZpZykge1xuICAgIHZhciBwcm9wLCBpO1xuICAgIGZvciAoaSBpbiBjb25maWcpIHtcbiAgICAgICAgaWYgKGhhc093blByb3AoY29uZmlnLCBpKSkge1xuICAgICAgICAgICAgcHJvcCA9IGNvbmZpZ1tpXTtcbiAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKHByb3ApKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tpXSA9IHByb3A7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXNbJ18nICsgaV0gPSBwcm9wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICAvLyBMZW5pZW50IG9yZGluYWwgcGFyc2luZyBhY2NlcHRzIGp1c3QgYSBudW1iZXIgaW4gYWRkaXRpb24gdG9cbiAgICAvLyBudW1iZXIgKyAocG9zc2libHkpIHN0dWZmIGNvbWluZyBmcm9tIF9kYXlPZk1vbnRoT3JkaW5hbFBhcnNlLlxuICAgIC8vIFRPRE86IFJlbW92ZSBcIm9yZGluYWxQYXJzZVwiIGZhbGxiYWNrIGluIG5leHQgbWFqb3IgcmVsZWFzZS5cbiAgICB0aGlzLl9kYXlPZk1vbnRoT3JkaW5hbFBhcnNlTGVuaWVudCA9IG5ldyBSZWdFeHAoXG4gICAgICAgICh0aGlzLl9kYXlPZk1vbnRoT3JkaW5hbFBhcnNlLnNvdXJjZSB8fCB0aGlzLl9vcmRpbmFsUGFyc2Uuc291cmNlKSArXG4gICAgICAgICAgICAnfCcgK1xuICAgICAgICAgICAgL1xcZHsxLDJ9Ly5zb3VyY2VcbiAgICApO1xufVxuXG5mdW5jdGlvbiBtZXJnZUNvbmZpZ3MocGFyZW50Q29uZmlnLCBjaGlsZENvbmZpZykge1xuICAgIHZhciByZXMgPSBleHRlbmQoe30sIHBhcmVudENvbmZpZyksXG4gICAgICAgIHByb3A7XG4gICAgZm9yIChwcm9wIGluIGNoaWxkQ29uZmlnKSB7XG4gICAgICAgIGlmIChoYXNPd25Qcm9wKGNoaWxkQ29uZmlnLCBwcm9wKSkge1xuICAgICAgICAgICAgaWYgKGlzT2JqZWN0KHBhcmVudENvbmZpZ1twcm9wXSkgJiYgaXNPYmplY3QoY2hpbGRDb25maWdbcHJvcF0pKSB7XG4gICAgICAgICAgICAgICAgcmVzW3Byb3BdID0ge307XG4gICAgICAgICAgICAgICAgZXh0ZW5kKHJlc1twcm9wXSwgcGFyZW50Q29uZmlnW3Byb3BdKTtcbiAgICAgICAgICAgICAgICBleHRlbmQocmVzW3Byb3BdLCBjaGlsZENvbmZpZ1twcm9wXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkQ29uZmlnW3Byb3BdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXNbcHJvcF0gPSBjaGlsZENvbmZpZ1twcm9wXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHJlc1twcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHByb3AgaW4gcGFyZW50Q29uZmlnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGhhc093blByb3AocGFyZW50Q29uZmlnLCBwcm9wKSAmJlxuICAgICAgICAgICAgIWhhc093blByb3AoY2hpbGRDb25maWcsIHByb3ApICYmXG4gICAgICAgICAgICBpc09iamVjdChwYXJlbnRDb25maWdbcHJvcF0pXG4gICAgICAgICkge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIGNoYW5nZXMgdG8gcHJvcGVydGllcyBkb24ndCBtb2RpZnkgcGFyZW50IGNvbmZpZ1xuICAgICAgICAgICAgcmVzW3Byb3BdID0gZXh0ZW5kKHt9LCByZXNbcHJvcF0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cbmZ1bmN0aW9uIExvY2FsZShjb25maWcpIHtcbiAgICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5zZXQoY29uZmlnKTtcbiAgICB9XG59XG5cbnZhciBrZXlzO1xuXG5pZiAoT2JqZWN0LmtleXMpIHtcbiAgICBrZXlzID0gT2JqZWN0LmtleXM7XG59IGVsc2Uge1xuICAgIGtleXMgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHZhciBpLFxuICAgICAgICAgICAgcmVzID0gW107XG4gICAgICAgIGZvciAoaSBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wKG9iaiwgaSkpIHtcbiAgICAgICAgICAgICAgICByZXMucHVzaChpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH07XG59XG5cbnZhciBkZWZhdWx0Q2FsZW5kYXIgPSB7XG4gICAgc2FtZURheTogJ1tUb2RheSBhdF0gTFQnLFxuICAgIG5leHREYXk6ICdbVG9tb3Jyb3cgYXRdIExUJyxcbiAgICBuZXh0V2VlazogJ2RkZGQgW2F0XSBMVCcsXG4gICAgbGFzdERheTogJ1tZZXN0ZXJkYXkgYXRdIExUJyxcbiAgICBsYXN0V2VlazogJ1tMYXN0XSBkZGRkIFthdF0gTFQnLFxuICAgIHNhbWVFbHNlOiAnTCcsXG59O1xuXG5mdW5jdGlvbiBjYWxlbmRhcihrZXksIG1vbSwgbm93KSB7XG4gICAgdmFyIG91dHB1dCA9IHRoaXMuX2NhbGVuZGFyW2tleV0gfHwgdGhpcy5fY2FsZW5kYXJbJ3NhbWVFbHNlJ107XG4gICAgcmV0dXJuIGlzRnVuY3Rpb24ob3V0cHV0KSA/IG91dHB1dC5jYWxsKG1vbSwgbm93KSA6IG91dHB1dDtcbn1cblxuZnVuY3Rpb24gemVyb0ZpbGwobnVtYmVyLCB0YXJnZXRMZW5ndGgsIGZvcmNlU2lnbikge1xuICAgIHZhciBhYnNOdW1iZXIgPSAnJyArIE1hdGguYWJzKG51bWJlciksXG4gICAgICAgIHplcm9zVG9GaWxsID0gdGFyZ2V0TGVuZ3RoIC0gYWJzTnVtYmVyLmxlbmd0aCxcbiAgICAgICAgc2lnbiA9IG51bWJlciA+PSAwO1xuICAgIHJldHVybiAoXG4gICAgICAgIChzaWduID8gKGZvcmNlU2lnbiA/ICcrJyA6ICcnKSA6ICctJykgK1xuICAgICAgICBNYXRoLnBvdygxMCwgTWF0aC5tYXgoMCwgemVyb3NUb0ZpbGwpKS50b1N0cmluZygpLnN1YnN0cigxKSArXG4gICAgICAgIGFic051bWJlclxuICAgICk7XG59XG5cbnZhciBmb3JtYXR0aW5nVG9rZW5zID1cbiAgICAgICAgLyhcXFtbXlxcW10qXFxdKXwoXFxcXCk/KFtIaF1tbShzcyk/fE1vfE1NP00/TT98RG98REREb3xERD9EP0Q/fGRkZD9kP3xkbz98d1tvfHddP3xXW298V10/fFFvP3xOezEsNX18WVlZWVlZfFlZWVlZfFlZWVl8WVl8eXsyLDR9fHlvP3xnZyhnZ2c/KT98R0coR0dHPyk/fGV8RXxhfEF8aGg/fEhIP3xraz98bW0/fHNzP3xTezEsOX18eHxYfHp6P3xaWj98LikvZyxcbiAgICBsb2NhbEZvcm1hdHRpbmdUb2tlbnMgPSAvKFxcW1teXFxbXSpcXF0pfChcXFxcKT8oTFRTfExUfExMP0w/TD98bHsxLDR9KS9nLFxuICAgIGZvcm1hdEZ1bmN0aW9ucyA9IHt9LFxuICAgIGZvcm1hdFRva2VuRnVuY3Rpb25zID0ge307XG5cbi8vIHRva2VuOiAgICAnTSdcbi8vIHBhZGRlZDogICBbJ01NJywgMl1cbi8vIG9yZGluYWw6ICAnTW8nXG4vLyBjYWxsYmFjazogZnVuY3Rpb24gKCkgeyB0aGlzLm1vbnRoKCkgKyAxIH1cbmZ1bmN0aW9uIGFkZEZvcm1hdFRva2VuKHRva2VuLCBwYWRkZWQsIG9yZGluYWwsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGZ1bmMgPSBjYWxsYmFjaztcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnc3RyaW5nJykge1xuICAgICAgICBmdW5jID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNbY2FsbGJhY2tdKCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmICh0b2tlbikge1xuICAgICAgICBmb3JtYXRUb2tlbkZ1bmN0aW9uc1t0b2tlbl0gPSBmdW5jO1xuICAgIH1cbiAgICBpZiAocGFkZGVkKSB7XG4gICAgICAgIGZvcm1hdFRva2VuRnVuY3Rpb25zW3BhZGRlZFswXV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gemVyb0ZpbGwoZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpLCBwYWRkZWRbMV0sIHBhZGRlZFsyXSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmIChvcmRpbmFsKSB7XG4gICAgICAgIGZvcm1hdFRva2VuRnVuY3Rpb25zW29yZGluYWxdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLm9yZGluYWwoXG4gICAgICAgICAgICAgICAgZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpLFxuICAgICAgICAgICAgICAgIHRva2VuXG4gICAgICAgICAgICApO1xuICAgICAgICB9O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlRm9ybWF0dGluZ1Rva2VucyhpbnB1dCkge1xuICAgIGlmIChpbnB1dC5tYXRjaCgvXFxbW1xcc1xcU10vKSkge1xuICAgICAgICByZXR1cm4gaW5wdXQucmVwbGFjZSgvXlxcW3xcXF0kL2csICcnKTtcbiAgICB9XG4gICAgcmV0dXJuIGlucHV0LnJlcGxhY2UoL1xcXFwvZywgJycpO1xufVxuXG5mdW5jdGlvbiBtYWtlRm9ybWF0RnVuY3Rpb24oZm9ybWF0KSB7XG4gICAgdmFyIGFycmF5ID0gZm9ybWF0Lm1hdGNoKGZvcm1hdHRpbmdUb2tlbnMpLFxuICAgICAgICBpLFxuICAgICAgICBsZW5ndGg7XG5cbiAgICBmb3IgKGkgPSAwLCBsZW5ndGggPSBhcnJheS5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZm9ybWF0VG9rZW5GdW5jdGlvbnNbYXJyYXlbaV1dKSB7XG4gICAgICAgICAgICBhcnJheVtpXSA9IGZvcm1hdFRva2VuRnVuY3Rpb25zW2FycmF5W2ldXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFycmF5W2ldID0gcmVtb3ZlRm9ybWF0dGluZ1Rva2VucyhhcnJheVtpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKG1vbSkge1xuICAgICAgICB2YXIgb3V0cHV0ID0gJycsXG4gICAgICAgICAgICBpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG91dHB1dCArPSBpc0Z1bmN0aW9uKGFycmF5W2ldKVxuICAgICAgICAgICAgICAgID8gYXJyYXlbaV0uY2FsbChtb20sIGZvcm1hdClcbiAgICAgICAgICAgICAgICA6IGFycmF5W2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfTtcbn1cblxuLy8gZm9ybWF0IGRhdGUgdXNpbmcgbmF0aXZlIGRhdGUgb2JqZWN0XG5mdW5jdGlvbiBmb3JtYXRNb21lbnQobSwgZm9ybWF0KSB7XG4gICAgaWYgKCFtLmlzVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4gbS5sb2NhbGVEYXRhKCkuaW52YWxpZERhdGUoKTtcbiAgICB9XG5cbiAgICBmb3JtYXQgPSBleHBhbmRGb3JtYXQoZm9ybWF0LCBtLmxvY2FsZURhdGEoKSk7XG4gICAgZm9ybWF0RnVuY3Rpb25zW2Zvcm1hdF0gPVxuICAgICAgICBmb3JtYXRGdW5jdGlvbnNbZm9ybWF0XSB8fCBtYWtlRm9ybWF0RnVuY3Rpb24oZm9ybWF0KTtcblxuICAgIHJldHVybiBmb3JtYXRGdW5jdGlvbnNbZm9ybWF0XShtKTtcbn1cblxuZnVuY3Rpb24gZXhwYW5kRm9ybWF0KGZvcm1hdCwgbG9jYWxlKSB7XG4gICAgdmFyIGkgPSA1O1xuXG4gICAgZnVuY3Rpb24gcmVwbGFjZUxvbmdEYXRlRm9ybWF0VG9rZW5zKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUubG9uZ0RhdGVGb3JtYXQoaW5wdXQpIHx8IGlucHV0O1xuICAgIH1cblxuICAgIGxvY2FsRm9ybWF0dGluZ1Rva2Vucy5sYXN0SW5kZXggPSAwO1xuICAgIHdoaWxlIChpID49IDAgJiYgbG9jYWxGb3JtYXR0aW5nVG9rZW5zLnRlc3QoZm9ybWF0KSkge1xuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZShcbiAgICAgICAgICAgIGxvY2FsRm9ybWF0dGluZ1Rva2VucyxcbiAgICAgICAgICAgIHJlcGxhY2VMb25nRGF0ZUZvcm1hdFRva2Vuc1xuICAgICAgICApO1xuICAgICAgICBsb2NhbEZvcm1hdHRpbmdUb2tlbnMubGFzdEluZGV4ID0gMDtcbiAgICAgICAgaSAtPSAxO1xuICAgIH1cblxuICAgIHJldHVybiBmb3JtYXQ7XG59XG5cbnZhciBkZWZhdWx0TG9uZ0RhdGVGb3JtYXQgPSB7XG4gICAgTFRTOiAnaDptbTpzcyBBJyxcbiAgICBMVDogJ2g6bW0gQScsXG4gICAgTDogJ01NL0REL1lZWVknLFxuICAgIExMOiAnTU1NTSBELCBZWVlZJyxcbiAgICBMTEw6ICdNTU1NIEQsIFlZWVkgaDptbSBBJyxcbiAgICBMTExMOiAnZGRkZCwgTU1NTSBELCBZWVlZIGg6bW0gQScsXG59O1xuXG5mdW5jdGlvbiBsb25nRGF0ZUZvcm1hdChrZXkpIHtcbiAgICB2YXIgZm9ybWF0ID0gdGhpcy5fbG9uZ0RhdGVGb3JtYXRba2V5XSxcbiAgICAgICAgZm9ybWF0VXBwZXIgPSB0aGlzLl9sb25nRGF0ZUZvcm1hdFtrZXkudG9VcHBlckNhc2UoKV07XG5cbiAgICBpZiAoZm9ybWF0IHx8ICFmb3JtYXRVcHBlcikge1xuICAgICAgICByZXR1cm4gZm9ybWF0O1xuICAgIH1cblxuICAgIHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleV0gPSBmb3JtYXRVcHBlclxuICAgICAgICAubWF0Y2goZm9ybWF0dGluZ1Rva2VucylcbiAgICAgICAgLm1hcChmdW5jdGlvbiAodG9rKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdG9rID09PSAnTU1NTScgfHxcbiAgICAgICAgICAgICAgICB0b2sgPT09ICdNTScgfHxcbiAgICAgICAgICAgICAgICB0b2sgPT09ICdERCcgfHxcbiAgICAgICAgICAgICAgICB0b2sgPT09ICdkZGRkJ1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvay5zbGljZSgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0b2s7XG4gICAgICAgIH0pXG4gICAgICAgIC5qb2luKCcnKTtcblxuICAgIHJldHVybiB0aGlzLl9sb25nRGF0ZUZvcm1hdFtrZXldO1xufVxuXG52YXIgZGVmYXVsdEludmFsaWREYXRlID0gJ0ludmFsaWQgZGF0ZSc7XG5cbmZ1bmN0aW9uIGludmFsaWREYXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9pbnZhbGlkRGF0ZTtcbn1cblxudmFyIGRlZmF1bHRPcmRpbmFsID0gJyVkJyxcbiAgICBkZWZhdWx0RGF5T2ZNb250aE9yZGluYWxQYXJzZSA9IC9cXGR7MSwyfS87XG5cbmZ1bmN0aW9uIG9yZGluYWwobnVtYmVyKSB7XG4gICAgcmV0dXJuIHRoaXMuX29yZGluYWwucmVwbGFjZSgnJWQnLCBudW1iZXIpO1xufVxuXG52YXIgZGVmYXVsdFJlbGF0aXZlVGltZSA9IHtcbiAgICBmdXR1cmU6ICdpbiAlcycsXG4gICAgcGFzdDogJyVzIGFnbycsXG4gICAgczogJ2EgZmV3IHNlY29uZHMnLFxuICAgIHNzOiAnJWQgc2Vjb25kcycsXG4gICAgbTogJ2EgbWludXRlJyxcbiAgICBtbTogJyVkIG1pbnV0ZXMnLFxuICAgIGg6ICdhbiBob3VyJyxcbiAgICBoaDogJyVkIGhvdXJzJyxcbiAgICBkOiAnYSBkYXknLFxuICAgIGRkOiAnJWQgZGF5cycsXG4gICAgdzogJ2Egd2VlaycsXG4gICAgd3c6ICclZCB3ZWVrcycsXG4gICAgTTogJ2EgbW9udGgnLFxuICAgIE1NOiAnJWQgbW9udGhzJyxcbiAgICB5OiAnYSB5ZWFyJyxcbiAgICB5eTogJyVkIHllYXJzJyxcbn07XG5cbmZ1bmN0aW9uIHJlbGF0aXZlVGltZShudW1iZXIsIHdpdGhvdXRTdWZmaXgsIHN0cmluZywgaXNGdXR1cmUpIHtcbiAgICB2YXIgb3V0cHV0ID0gdGhpcy5fcmVsYXRpdmVUaW1lW3N0cmluZ107XG4gICAgcmV0dXJuIGlzRnVuY3Rpb24ob3V0cHV0KVxuICAgICAgICA/IG91dHB1dChudW1iZXIsIHdpdGhvdXRTdWZmaXgsIHN0cmluZywgaXNGdXR1cmUpXG4gICAgICAgIDogb3V0cHV0LnJlcGxhY2UoLyVkL2ksIG51bWJlcik7XG59XG5cbmZ1bmN0aW9uIHBhc3RGdXR1cmUoZGlmZiwgb3V0cHV0KSB7XG4gICAgdmFyIGZvcm1hdCA9IHRoaXMuX3JlbGF0aXZlVGltZVtkaWZmID4gMCA/ICdmdXR1cmUnIDogJ3Bhc3QnXTtcbiAgICByZXR1cm4gaXNGdW5jdGlvbihmb3JtYXQpID8gZm9ybWF0KG91dHB1dCkgOiBmb3JtYXQucmVwbGFjZSgvJXMvaSwgb3V0cHV0KTtcbn1cblxudmFyIGFsaWFzZXMgPSB7XG4gICAgRDogJ2RhdGUnLFxuICAgIGRhdGVzOiAnZGF0ZScsXG4gICAgZGF0ZTogJ2RhdGUnLFxuICAgIGQ6ICdkYXknLFxuICAgIGRheXM6ICdkYXknLFxuICAgIGRheTogJ2RheScsXG4gICAgZTogJ3dlZWtkYXknLFxuICAgIHdlZWtkYXlzOiAnd2Vla2RheScsXG4gICAgd2Vla2RheTogJ3dlZWtkYXknLFxuICAgIEU6ICdpc29XZWVrZGF5JyxcbiAgICBpc293ZWVrZGF5czogJ2lzb1dlZWtkYXknLFxuICAgIGlzb3dlZWtkYXk6ICdpc29XZWVrZGF5JyxcbiAgICBEREQ6ICdkYXlPZlllYXInLFxuICAgIGRheW9meWVhcnM6ICdkYXlPZlllYXInLFxuICAgIGRheW9meWVhcjogJ2RheU9mWWVhcicsXG4gICAgaDogJ2hvdXInLFxuICAgIGhvdXJzOiAnaG91cicsXG4gICAgaG91cjogJ2hvdXInLFxuICAgIG1zOiAnbWlsbGlzZWNvbmQnLFxuICAgIG1pbGxpc2Vjb25kczogJ21pbGxpc2Vjb25kJyxcbiAgICBtaWxsaXNlY29uZDogJ21pbGxpc2Vjb25kJyxcbiAgICBtOiAnbWludXRlJyxcbiAgICBtaW51dGVzOiAnbWludXRlJyxcbiAgICBtaW51dGU6ICdtaW51dGUnLFxuICAgIE06ICdtb250aCcsXG4gICAgbW9udGhzOiAnbW9udGgnLFxuICAgIG1vbnRoOiAnbW9udGgnLFxuICAgIFE6ICdxdWFydGVyJyxcbiAgICBxdWFydGVyczogJ3F1YXJ0ZXInLFxuICAgIHF1YXJ0ZXI6ICdxdWFydGVyJyxcbiAgICBzOiAnc2Vjb25kJyxcbiAgICBzZWNvbmRzOiAnc2Vjb25kJyxcbiAgICBzZWNvbmQ6ICdzZWNvbmQnLFxuICAgIGdnOiAnd2Vla1llYXInLFxuICAgIHdlZWt5ZWFyczogJ3dlZWtZZWFyJyxcbiAgICB3ZWVreWVhcjogJ3dlZWtZZWFyJyxcbiAgICBHRzogJ2lzb1dlZWtZZWFyJyxcbiAgICBpc293ZWVreWVhcnM6ICdpc29XZWVrWWVhcicsXG4gICAgaXNvd2Vla3llYXI6ICdpc29XZWVrWWVhcicsXG4gICAgdzogJ3dlZWsnLFxuICAgIHdlZWtzOiAnd2VlaycsXG4gICAgd2VlazogJ3dlZWsnLFxuICAgIFc6ICdpc29XZWVrJyxcbiAgICBpc293ZWVrczogJ2lzb1dlZWsnLFxuICAgIGlzb3dlZWs6ICdpc29XZWVrJyxcbiAgICB5OiAneWVhcicsXG4gICAgeWVhcnM6ICd5ZWFyJyxcbiAgICB5ZWFyOiAneWVhcicsXG59O1xuXG5mdW5jdGlvbiBub3JtYWxpemVVbml0cyh1bml0cykge1xuICAgIHJldHVybiB0eXBlb2YgdW5pdHMgPT09ICdzdHJpbmcnXG4gICAgICAgID8gYWxpYXNlc1t1bml0c10gfHwgYWxpYXNlc1t1bml0cy50b0xvd2VyQ2FzZSgpXVxuICAgICAgICA6IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplT2JqZWN0VW5pdHMoaW5wdXRPYmplY3QpIHtcbiAgICB2YXIgbm9ybWFsaXplZElucHV0ID0ge30sXG4gICAgICAgIG5vcm1hbGl6ZWRQcm9wLFxuICAgICAgICBwcm9wO1xuXG4gICAgZm9yIChwcm9wIGluIGlucHV0T2JqZWN0KSB7XG4gICAgICAgIGlmIChoYXNPd25Qcm9wKGlucHV0T2JqZWN0LCBwcm9wKSkge1xuICAgICAgICAgICAgbm9ybWFsaXplZFByb3AgPSBub3JtYWxpemVVbml0cyhwcm9wKTtcbiAgICAgICAgICAgIGlmIChub3JtYWxpemVkUHJvcCkge1xuICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWRJbnB1dFtub3JtYWxpemVkUHJvcF0gPSBpbnB1dE9iamVjdFtwcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub3JtYWxpemVkSW5wdXQ7XG59XG5cbnZhciBwcmlvcml0aWVzID0ge1xuICAgIGRhdGU6IDksXG4gICAgZGF5OiAxMSxcbiAgICB3ZWVrZGF5OiAxMSxcbiAgICBpc29XZWVrZGF5OiAxMSxcbiAgICBkYXlPZlllYXI6IDQsXG4gICAgaG91cjogMTMsXG4gICAgbWlsbGlzZWNvbmQ6IDE2LFxuICAgIG1pbnV0ZTogMTQsXG4gICAgbW9udGg6IDgsXG4gICAgcXVhcnRlcjogNyxcbiAgICBzZWNvbmQ6IDE1LFxuICAgIHdlZWtZZWFyOiAxLFxuICAgIGlzb1dlZWtZZWFyOiAxLFxuICAgIHdlZWs6IDUsXG4gICAgaXNvV2VlazogNSxcbiAgICB5ZWFyOiAxLFxufTtcblxuZnVuY3Rpb24gZ2V0UHJpb3JpdGl6ZWRVbml0cyh1bml0c09iaikge1xuICAgIHZhciB1bml0cyA9IFtdLFxuICAgICAgICB1O1xuICAgIGZvciAodSBpbiB1bml0c09iaikge1xuICAgICAgICBpZiAoaGFzT3duUHJvcCh1bml0c09iaiwgdSkpIHtcbiAgICAgICAgICAgIHVuaXRzLnB1c2goeyB1bml0OiB1LCBwcmlvcml0eTogcHJpb3JpdGllc1t1XSB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1bml0cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBhLnByaW9yaXR5IC0gYi5wcmlvcml0eTtcbiAgICB9KTtcbiAgICByZXR1cm4gdW5pdHM7XG59XG5cbnZhciBtYXRjaDEgPSAvXFxkLywgLy8gICAgICAgMCAtIDlcbiAgICBtYXRjaDIgPSAvXFxkXFxkLywgLy8gICAgICAwMCAtIDk5XG4gICAgbWF0Y2gzID0gL1xcZHszfS8sIC8vICAgICAwMDAgLSA5OTlcbiAgICBtYXRjaDQgPSAvXFxkezR9LywgLy8gICAgMDAwMCAtIDk5OTlcbiAgICBtYXRjaDYgPSAvWystXT9cXGR7Nn0vLCAvLyAtOTk5OTk5IC0gOTk5OTk5XG4gICAgbWF0Y2gxdG8yID0gL1xcZFxcZD8vLCAvLyAgICAgICAwIC0gOTlcbiAgICBtYXRjaDN0bzQgPSAvXFxkXFxkXFxkXFxkPy8sIC8vICAgICA5OTkgLSA5OTk5XG4gICAgbWF0Y2g1dG82ID0gL1xcZFxcZFxcZFxcZFxcZFxcZD8vLCAvLyAgIDk5OTk5IC0gOTk5OTk5XG4gICAgbWF0Y2gxdG8zID0gL1xcZHsxLDN9LywgLy8gICAgICAgMCAtIDk5OVxuICAgIG1hdGNoMXRvNCA9IC9cXGR7MSw0fS8sIC8vICAgICAgIDAgLSA5OTk5XG4gICAgbWF0Y2gxdG82ID0gL1srLV0/XFxkezEsNn0vLCAvLyAtOTk5OTk5IC0gOTk5OTk5XG4gICAgbWF0Y2hVbnNpZ25lZCA9IC9cXGQrLywgLy8gICAgICAgMCAtIGluZlxuICAgIG1hdGNoU2lnbmVkID0gL1srLV0/XFxkKy8sIC8vICAgIC1pbmYgLSBpbmZcbiAgICBtYXRjaE9mZnNldCA9IC9afFsrLV1cXGRcXGQ6P1xcZFxcZC9naSwgLy8gKzAwOjAwIC0wMDowMCArMDAwMCAtMDAwMCBvciBaXG4gICAgbWF0Y2hTaG9ydE9mZnNldCA9IC9afFsrLV1cXGRcXGQoPzo6P1xcZFxcZCk/L2dpLCAvLyArMDAgLTAwICswMDowMCAtMDA6MDAgKzAwMDAgLTAwMDAgb3IgWlxuICAgIG1hdGNoVGltZXN0YW1wID0gL1srLV0/XFxkKyhcXC5cXGR7MSwzfSk/LywgLy8gMTIzNDU2Nzg5IDEyMzQ1Njc4OS4xMjNcbiAgICAvLyBhbnkgd29yZCAob3IgdHdvKSBjaGFyYWN0ZXJzIG9yIG51bWJlcnMgaW5jbHVkaW5nIHR3by90aHJlZSB3b3JkIG1vbnRoIGluIGFyYWJpYy5cbiAgICAvLyBpbmNsdWRlcyBzY290dGlzaCBnYWVsaWMgdHdvIHdvcmQgYW5kIGh5cGhlbmF0ZWQgbW9udGhzXG4gICAgbWF0Y2hXb3JkID1cbiAgICAgICAgL1swLTldezAsMjU2fVsnYS16XFx1MDBBMC1cXHUwNUZGXFx1MDcwMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRjA3XFx1RkYxMC1cXHVGRkVGXXsxLDI1Nn18W1xcdTA2MDAtXFx1MDZGRlxcL117MSwyNTZ9KFxccyo/W1xcdTA2MDAtXFx1MDZGRl17MSwyNTZ9KXsxLDJ9L2ksXG4gICAgbWF0Y2gxdG8yTm9MZWFkaW5nWmVybyA9IC9eWzEtOV1cXGQ/LywgLy8gICAgICAgICAxLTk5XG4gICAgbWF0Y2gxdG8ySGFzWmVybyA9IC9eKFsxLTldXFxkfFxcZCkvLCAvLyAgICAgICAgICAgMC05OVxuICAgIHJlZ2V4ZXM7XG5cbnJlZ2V4ZXMgPSB7fTtcblxuZnVuY3Rpb24gYWRkUmVnZXhUb2tlbih0b2tlbiwgcmVnZXgsIHN0cmljdFJlZ2V4KSB7XG4gICAgcmVnZXhlc1t0b2tlbl0gPSBpc0Z1bmN0aW9uKHJlZ2V4KVxuICAgICAgICA/IHJlZ2V4XG4gICAgICAgIDogZnVuY3Rpb24gKGlzU3RyaWN0LCBsb2NhbGVEYXRhKSB7XG4gICAgICAgICAgICAgIHJldHVybiBpc1N0cmljdCAmJiBzdHJpY3RSZWdleCA/IHN0cmljdFJlZ2V4IDogcmVnZXg7XG4gICAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0UGFyc2VSZWdleEZvclRva2VuKHRva2VuLCBjb25maWcpIHtcbiAgICBpZiAoIWhhc093blByb3AocmVnZXhlcywgdG9rZW4pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVnRXhwKHVuZXNjYXBlRm9ybWF0KHRva2VuKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZ2V4ZXNbdG9rZW5dKGNvbmZpZy5fc3RyaWN0LCBjb25maWcuX2xvY2FsZSk7XG59XG5cbi8vIENvZGUgZnJvbSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM1NjE0OTMvaXMtdGhlcmUtYS1yZWdleHAtZXNjYXBlLWZ1bmN0aW9uLWluLWphdmFzY3JpcHRcbmZ1bmN0aW9uIHVuZXNjYXBlRm9ybWF0KHMpIHtcbiAgICByZXR1cm4gcmVnZXhFc2NhcGUoXG4gICAgICAgIHNcbiAgICAgICAgICAgIC5yZXBsYWNlKCdcXFxcJywgJycpXG4gICAgICAgICAgICAucmVwbGFjZShcbiAgICAgICAgICAgICAgICAvXFxcXChcXFspfFxcXFwoXFxdKXxcXFsoW15cXF1cXFtdKilcXF18XFxcXCguKS9nLFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChtYXRjaGVkLCBwMSwgcDIsIHAzLCBwNCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcDEgfHwgcDIgfHwgcDMgfHwgcDQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICk7XG59XG5cbmZ1bmN0aW9uIHJlZ2V4RXNjYXBlKHMpIHtcbiAgICByZXR1cm4gcy5yZXBsYWNlKC9bLVxcL1xcXFxeJCorPy4oKXxbXFxde31dL2csICdcXFxcJCYnKTtcbn1cblxuZnVuY3Rpb24gYWJzRmxvb3IobnVtYmVyKSB7XG4gICAgaWYgKG51bWJlciA8IDApIHtcbiAgICAgICAgLy8gLTAgLT4gMFxuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKG51bWJlcikgfHwgMDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihudW1iZXIpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdG9JbnQoYXJndW1lbnRGb3JDb2VyY2lvbikge1xuICAgIHZhciBjb2VyY2VkTnVtYmVyID0gK2FyZ3VtZW50Rm9yQ29lcmNpb24sXG4gICAgICAgIHZhbHVlID0gMDtcblxuICAgIGlmIChjb2VyY2VkTnVtYmVyICE9PSAwICYmIGlzRmluaXRlKGNvZXJjZWROdW1iZXIpKSB7XG4gICAgICAgIHZhbHVlID0gYWJzRmxvb3IoY29lcmNlZE51bWJlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG52YXIgdG9rZW5zID0ge307XG5cbmZ1bmN0aW9uIGFkZFBhcnNlVG9rZW4odG9rZW4sIGNhbGxiYWNrKSB7XG4gICAgdmFyIGksXG4gICAgICAgIGZ1bmMgPSBjYWxsYmFjayxcbiAgICAgICAgdG9rZW5MZW47XG4gICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdG9rZW4gPSBbdG9rZW5dO1xuICAgIH1cbiAgICBpZiAoaXNOdW1iZXIoY2FsbGJhY2spKSB7XG4gICAgICAgIGZ1bmMgPSBmdW5jdGlvbiAoaW5wdXQsIGFycmF5KSB7XG4gICAgICAgICAgICBhcnJheVtjYWxsYmFja10gPSB0b0ludChpbnB1dCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHRva2VuTGVuID0gdG9rZW4ubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCB0b2tlbkxlbjsgaSsrKSB7XG4gICAgICAgIHRva2Vuc1t0b2tlbltpXV0gPSBmdW5jO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRkV2Vla1BhcnNlVG9rZW4odG9rZW4sIGNhbGxiYWNrKSB7XG4gICAgYWRkUGFyc2VUb2tlbih0b2tlbiwgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnLCB0b2tlbikge1xuICAgICAgICBjb25maWcuX3cgPSBjb25maWcuX3cgfHwge307XG4gICAgICAgIGNhbGxiYWNrKGlucHV0LCBjb25maWcuX3csIGNvbmZpZywgdG9rZW4pO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRUaW1lVG9BcnJheUZyb21Ub2tlbih0b2tlbiwgaW5wdXQsIGNvbmZpZykge1xuICAgIGlmIChpbnB1dCAhPSBudWxsICYmIGhhc093blByb3AodG9rZW5zLCB0b2tlbikpIHtcbiAgICAgICAgdG9rZW5zW3Rva2VuXShpbnB1dCwgY29uZmlnLl9hLCBjb25maWcsIHRva2VuKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzTGVhcFllYXIoeWVhcikge1xuICAgIHJldHVybiAoeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMCkgfHwgeWVhciAlIDQwMCA9PT0gMDtcbn1cblxudmFyIFlFQVIgPSAwLFxuICAgIE1PTlRIID0gMSxcbiAgICBEQVRFID0gMixcbiAgICBIT1VSID0gMyxcbiAgICBNSU5VVEUgPSA0LFxuICAgIFNFQ09ORCA9IDUsXG4gICAgTUlMTElTRUNPTkQgPSA2LFxuICAgIFdFRUsgPSA3LFxuICAgIFdFRUtEQVkgPSA4O1xuXG4vLyBGT1JNQVRUSU5HXG5cbmFkZEZvcm1hdFRva2VuKCdZJywgMCwgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB5ID0gdGhpcy55ZWFyKCk7XG4gICAgcmV0dXJuIHkgPD0gOTk5OSA/IHplcm9GaWxsKHksIDQpIDogJysnICsgeTtcbn0pO1xuXG5hZGRGb3JtYXRUb2tlbigwLCBbJ1lZJywgMl0sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy55ZWFyKCkgJSAxMDA7XG59KTtcblxuYWRkRm9ybWF0VG9rZW4oMCwgWydZWVlZJywgNF0sIDAsICd5ZWFyJyk7XG5hZGRGb3JtYXRUb2tlbigwLCBbJ1lZWVlZJywgNV0sIDAsICd5ZWFyJyk7XG5hZGRGb3JtYXRUb2tlbigwLCBbJ1lZWVlZWScsIDYsIHRydWVdLCAwLCAneWVhcicpO1xuXG4vLyBQQVJTSU5HXG5cbmFkZFJlZ2V4VG9rZW4oJ1knLCBtYXRjaFNpZ25lZCk7XG5hZGRSZWdleFRva2VuKCdZWScsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbmFkZFJlZ2V4VG9rZW4oJ1lZWVknLCBtYXRjaDF0bzQsIG1hdGNoNCk7XG5hZGRSZWdleFRva2VuKCdZWVlZWScsIG1hdGNoMXRvNiwgbWF0Y2g2KTtcbmFkZFJlZ2V4VG9rZW4oJ1lZWVlZWScsIG1hdGNoMXRvNiwgbWF0Y2g2KTtcblxuYWRkUGFyc2VUb2tlbihbJ1lZWVlZJywgJ1lZWVlZWSddLCBZRUFSKTtcbmFkZFBhcnNlVG9rZW4oJ1lZWVknLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5KSB7XG4gICAgYXJyYXlbWUVBUl0gPVxuICAgICAgICBpbnB1dC5sZW5ndGggPT09IDIgPyBob29rcy5wYXJzZVR3b0RpZ2l0WWVhcihpbnB1dCkgOiB0b0ludChpbnB1dCk7XG59KTtcbmFkZFBhcnNlVG9rZW4oJ1lZJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSkge1xuICAgIGFycmF5W1lFQVJdID0gaG9va3MucGFyc2VUd29EaWdpdFllYXIoaW5wdXQpO1xufSk7XG5hZGRQYXJzZVRva2VuKCdZJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSkge1xuICAgIGFycmF5W1lFQVJdID0gcGFyc2VJbnQoaW5wdXQsIDEwKTtcbn0pO1xuXG4vLyBIRUxQRVJTXG5cbmZ1bmN0aW9uIGRheXNJblllYXIoeWVhcikge1xuICAgIHJldHVybiBpc0xlYXBZZWFyKHllYXIpID8gMzY2IDogMzY1O1xufVxuXG4vLyBIT09LU1xuXG5ob29rcy5wYXJzZVR3b0RpZ2l0WWVhciA9IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIHJldHVybiB0b0ludChpbnB1dCkgKyAodG9JbnQoaW5wdXQpID4gNjggPyAxOTAwIDogMjAwMCk7XG59O1xuXG4vLyBNT01FTlRTXG5cbnZhciBnZXRTZXRZZWFyID0gbWFrZUdldFNldCgnRnVsbFllYXInLCB0cnVlKTtcblxuZnVuY3Rpb24gZ2V0SXNMZWFwWWVhcigpIHtcbiAgICByZXR1cm4gaXNMZWFwWWVhcih0aGlzLnllYXIoKSk7XG59XG5cbmZ1bmN0aW9uIG1ha2VHZXRTZXQodW5pdCwga2VlcFRpbWUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBzZXQkMSh0aGlzLCB1bml0LCB2YWx1ZSk7XG4gICAgICAgICAgICBob29rcy51cGRhdGVPZmZzZXQodGhpcywga2VlcFRpbWUpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0KHRoaXMsIHVuaXQpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0KG1vbSwgdW5pdCkge1xuICAgIGlmICghbW9tLmlzVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4gTmFOO1xuICAgIH1cblxuICAgIHZhciBkID0gbW9tLl9kLFxuICAgICAgICBpc1VUQyA9IG1vbS5faXNVVEM7XG5cbiAgICBzd2l0Y2ggKHVuaXQpIHtcbiAgICAgICAgY2FzZSAnTWlsbGlzZWNvbmRzJzpcbiAgICAgICAgICAgIHJldHVybiBpc1VUQyA/IGQuZ2V0VVRDTWlsbGlzZWNvbmRzKCkgOiBkLmdldE1pbGxpc2Vjb25kcygpO1xuICAgICAgICBjYXNlICdTZWNvbmRzJzpcbiAgICAgICAgICAgIHJldHVybiBpc1VUQyA/IGQuZ2V0VVRDU2Vjb25kcygpIDogZC5nZXRTZWNvbmRzKCk7XG4gICAgICAgIGNhc2UgJ01pbnV0ZXMnOlxuICAgICAgICAgICAgcmV0dXJuIGlzVVRDID8gZC5nZXRVVENNaW51dGVzKCkgOiBkLmdldE1pbnV0ZXMoKTtcbiAgICAgICAgY2FzZSAnSG91cnMnOlxuICAgICAgICAgICAgcmV0dXJuIGlzVVRDID8gZC5nZXRVVENIb3VycygpIDogZC5nZXRIb3VycygpO1xuICAgICAgICBjYXNlICdEYXRlJzpcbiAgICAgICAgICAgIHJldHVybiBpc1VUQyA/IGQuZ2V0VVRDRGF0ZSgpIDogZC5nZXREYXRlKCk7XG4gICAgICAgIGNhc2UgJ0RheSc6XG4gICAgICAgICAgICByZXR1cm4gaXNVVEMgPyBkLmdldFVUQ0RheSgpIDogZC5nZXREYXkoKTtcbiAgICAgICAgY2FzZSAnTW9udGgnOlxuICAgICAgICAgICAgcmV0dXJuIGlzVVRDID8gZC5nZXRVVENNb250aCgpIDogZC5nZXRNb250aCgpO1xuICAgICAgICBjYXNlICdGdWxsWWVhcic6XG4gICAgICAgICAgICByZXR1cm4gaXNVVEMgPyBkLmdldFVUQ0Z1bGxZZWFyKCkgOiBkLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gTmFOOyAvLyBKdXN0IGluIGNhc2VcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNldCQxKG1vbSwgdW5pdCwgdmFsdWUpIHtcbiAgICB2YXIgZCwgaXNVVEMsIHllYXIsIG1vbnRoLCBkYXRlO1xuXG4gICAgaWYgKCFtb20uaXNWYWxpZCgpIHx8IGlzTmFOKHZhbHVlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZCA9IG1vbS5fZDtcbiAgICBpc1VUQyA9IG1vbS5faXNVVEM7XG5cbiAgICBzd2l0Y2ggKHVuaXQpIHtcbiAgICAgICAgY2FzZSAnTWlsbGlzZWNvbmRzJzpcbiAgICAgICAgICAgIHJldHVybiB2b2lkIChpc1VUQ1xuICAgICAgICAgICAgICAgID8gZC5zZXRVVENNaWxsaXNlY29uZHModmFsdWUpXG4gICAgICAgICAgICAgICAgOiBkLnNldE1pbGxpc2Vjb25kcyh2YWx1ZSkpO1xuICAgICAgICBjYXNlICdTZWNvbmRzJzpcbiAgICAgICAgICAgIHJldHVybiB2b2lkIChpc1VUQyA/IGQuc2V0VVRDU2Vjb25kcyh2YWx1ZSkgOiBkLnNldFNlY29uZHModmFsdWUpKTtcbiAgICAgICAgY2FzZSAnTWludXRlcyc6XG4gICAgICAgICAgICByZXR1cm4gdm9pZCAoaXNVVEMgPyBkLnNldFVUQ01pbnV0ZXModmFsdWUpIDogZC5zZXRNaW51dGVzKHZhbHVlKSk7XG4gICAgICAgIGNhc2UgJ0hvdXJzJzpcbiAgICAgICAgICAgIHJldHVybiB2b2lkIChpc1VUQyA/IGQuc2V0VVRDSG91cnModmFsdWUpIDogZC5zZXRIb3Vycyh2YWx1ZSkpO1xuICAgICAgICBjYXNlICdEYXRlJzpcbiAgICAgICAgICAgIHJldHVybiB2b2lkIChpc1VUQyA/IGQuc2V0VVRDRGF0ZSh2YWx1ZSkgOiBkLnNldERhdGUodmFsdWUpKTtcbiAgICAgICAgLy8gY2FzZSAnRGF5JzogLy8gTm90IHJlYWxcbiAgICAgICAgLy8gICAgcmV0dXJuIHZvaWQgKGlzVVRDID8gZC5zZXRVVENEYXkodmFsdWUpIDogZC5zZXREYXkodmFsdWUpKTtcbiAgICAgICAgLy8gY2FzZSAnTW9udGgnOiAvLyBOb3QgdXNlZCBiZWNhdXNlIHdlIG5lZWQgdG8gcGFzcyB0d28gdmFyaWFibGVzXG4gICAgICAgIC8vICAgICByZXR1cm4gdm9pZCAoaXNVVEMgPyBkLnNldFVUQ01vbnRoKHZhbHVlKSA6IGQuc2V0TW9udGgodmFsdWUpKTtcbiAgICAgICAgY2FzZSAnRnVsbFllYXInOlxuICAgICAgICAgICAgYnJlYWs7IC8vIFNlZSBiZWxvdyAuLi5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybjsgLy8gSnVzdCBpbiBjYXNlXG4gICAgfVxuXG4gICAgeWVhciA9IHZhbHVlO1xuICAgIG1vbnRoID0gbW9tLm1vbnRoKCk7XG4gICAgZGF0ZSA9IG1vbS5kYXRlKCk7XG4gICAgZGF0ZSA9IGRhdGUgPT09IDI5ICYmIG1vbnRoID09PSAxICYmICFpc0xlYXBZZWFyKHllYXIpID8gMjggOiBkYXRlO1xuICAgIHZvaWQgKGlzVVRDXG4gICAgICAgID8gZC5zZXRVVENGdWxsWWVhcih5ZWFyLCBtb250aCwgZGF0ZSlcbiAgICAgICAgOiBkLnNldEZ1bGxZZWFyKHllYXIsIG1vbnRoLCBkYXRlKSk7XG59XG5cbi8vIE1PTUVOVFNcblxuZnVuY3Rpb24gc3RyaW5nR2V0KHVuaXRzKSB7XG4gICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cyk7XG4gICAgaWYgKGlzRnVuY3Rpb24odGhpc1t1bml0c10pKSB7XG4gICAgICAgIHJldHVybiB0aGlzW3VuaXRzXSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gc3RyaW5nU2V0KHVuaXRzLCB2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdW5pdHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHVuaXRzID0gbm9ybWFsaXplT2JqZWN0VW5pdHModW5pdHMpO1xuICAgICAgICB2YXIgcHJpb3JpdGl6ZWQgPSBnZXRQcmlvcml0aXplZFVuaXRzKHVuaXRzKSxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBwcmlvcml0aXplZExlbiA9IHByaW9yaXRpemVkLmxlbmd0aDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHByaW9yaXRpemVkTGVuOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXNbcHJpb3JpdGl6ZWRbaV0udW5pdF0odW5pdHNbcHJpb3JpdGl6ZWRbaV0udW5pdF0pO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cyk7XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKHRoaXNbdW5pdHNdKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNbdW5pdHNdKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gbW9kKG4sIHgpIHtcbiAgICByZXR1cm4gKChuICUgeCkgKyB4KSAlIHg7XG59XG5cbnZhciBpbmRleE9mO1xuXG5pZiAoQXJyYXkucHJvdG90eXBlLmluZGV4T2YpIHtcbiAgICBpbmRleE9mID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2Y7XG59IGVsc2Uge1xuICAgIGluZGV4T2YgPSBmdW5jdGlvbiAobykge1xuICAgICAgICAvLyBJIGtub3dcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAodGhpc1tpXSA9PT0gbykge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBkYXlzSW5Nb250aCh5ZWFyLCBtb250aCkge1xuICAgIGlmIChpc05hTih5ZWFyKSB8fCBpc05hTihtb250aCkpIHtcbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG4gICAgdmFyIG1vZE1vbnRoID0gbW9kKG1vbnRoLCAxMik7XG4gICAgeWVhciArPSAobW9udGggLSBtb2RNb250aCkgLyAxMjtcbiAgICByZXR1cm4gbW9kTW9udGggPT09IDFcbiAgICAgICAgPyBpc0xlYXBZZWFyKHllYXIpXG4gICAgICAgICAgICA/IDI5XG4gICAgICAgICAgICA6IDI4XG4gICAgICAgIDogMzEgLSAoKG1vZE1vbnRoICUgNykgJSAyKTtcbn1cblxuLy8gRk9STUFUVElOR1xuXG5hZGRGb3JtYXRUb2tlbignTScsIFsnTU0nLCAyXSwgJ01vJywgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLm1vbnRoKCkgKyAxO1xufSk7XG5cbmFkZEZvcm1hdFRva2VuKCdNTU0nLCAwLCAwLCBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLm1vbnRoc1Nob3J0KHRoaXMsIGZvcm1hdCk7XG59KTtcblxuYWRkRm9ybWF0VG9rZW4oJ01NTU0nLCAwLCAwLCBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLm1vbnRocyh0aGlzLCBmb3JtYXQpO1xufSk7XG5cbi8vIFBBUlNJTkdcblxuYWRkUmVnZXhUb2tlbignTScsIG1hdGNoMXRvMiwgbWF0Y2gxdG8yTm9MZWFkaW5nWmVybyk7XG5hZGRSZWdleFRva2VuKCdNTScsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbmFkZFJlZ2V4VG9rZW4oJ01NTScsIGZ1bmN0aW9uIChpc1N0cmljdCwgbG9jYWxlKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5tb250aHNTaG9ydFJlZ2V4KGlzU3RyaWN0KTtcbn0pO1xuYWRkUmVnZXhUb2tlbignTU1NTScsIGZ1bmN0aW9uIChpc1N0cmljdCwgbG9jYWxlKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5tb250aHNSZWdleChpc1N0cmljdCk7XG59KTtcblxuYWRkUGFyc2VUb2tlbihbJ00nLCAnTU0nXSwgZnVuY3Rpb24gKGlucHV0LCBhcnJheSkge1xuICAgIGFycmF5W01PTlRIXSA9IHRvSW50KGlucHV0KSAtIDE7XG59KTtcblxuYWRkUGFyc2VUb2tlbihbJ01NTScsICdNTU1NJ10sIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZywgdG9rZW4pIHtcbiAgICB2YXIgbW9udGggPSBjb25maWcuX2xvY2FsZS5tb250aHNQYXJzZShpbnB1dCwgdG9rZW4sIGNvbmZpZy5fc3RyaWN0KTtcbiAgICAvLyBpZiB3ZSBkaWRuJ3QgZmluZCBhIG1vbnRoIG5hbWUsIG1hcmsgdGhlIGRhdGUgYXMgaW52YWxpZC5cbiAgICBpZiAobW9udGggIT0gbnVsbCkge1xuICAgICAgICBhcnJheVtNT05USF0gPSBtb250aDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5pbnZhbGlkTW9udGggPSBpbnB1dDtcbiAgICB9XG59KTtcblxuLy8gTE9DQUxFU1xuXG52YXIgZGVmYXVsdExvY2FsZU1vbnRocyA9XG4gICAgICAgICdKYW51YXJ5X0ZlYnJ1YXJ5X01hcmNoX0FwcmlsX01heV9KdW5lX0p1bHlfQXVndXN0X1NlcHRlbWJlcl9PY3RvYmVyX05vdmVtYmVyX0RlY2VtYmVyJy5zcGxpdChcbiAgICAgICAgICAgICdfJ1xuICAgICAgICApLFxuICAgIGRlZmF1bHRMb2NhbGVNb250aHNTaG9ydCA9XG4gICAgICAgICdKYW5fRmViX01hcl9BcHJfTWF5X0p1bl9KdWxfQXVnX1NlcF9PY3RfTm92X0RlYycuc3BsaXQoJ18nKSxcbiAgICBNT05USFNfSU5fRk9STUFUID0gL0Rbb0RdPyhcXFtbXlxcW1xcXV0qXFxdfFxccykrTU1NTT8vLFxuICAgIGRlZmF1bHRNb250aHNTaG9ydFJlZ2V4ID0gbWF0Y2hXb3JkLFxuICAgIGRlZmF1bHRNb250aHNSZWdleCA9IG1hdGNoV29yZDtcblxuZnVuY3Rpb24gbG9jYWxlTW9udGhzKG0sIGZvcm1hdCkge1xuICAgIGlmICghbSkge1xuICAgICAgICByZXR1cm4gaXNBcnJheSh0aGlzLl9tb250aHMpXG4gICAgICAgICAgICA/IHRoaXMuX21vbnRoc1xuICAgICAgICAgICAgOiB0aGlzLl9tb250aHNbJ3N0YW5kYWxvbmUnXTtcbiAgICB9XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5fbW9udGhzKVxuICAgICAgICA/IHRoaXMuX21vbnRoc1ttLm1vbnRoKCldXG4gICAgICAgIDogdGhpcy5fbW9udGhzW1xuICAgICAgICAgICAgICAodGhpcy5fbW9udGhzLmlzRm9ybWF0IHx8IE1PTlRIU19JTl9GT1JNQVQpLnRlc3QoZm9ybWF0KVxuICAgICAgICAgICAgICAgICAgPyAnZm9ybWF0J1xuICAgICAgICAgICAgICAgICAgOiAnc3RhbmRhbG9uZSdcbiAgICAgICAgICBdW20ubW9udGgoKV07XG59XG5cbmZ1bmN0aW9uIGxvY2FsZU1vbnRoc1Nob3J0KG0sIGZvcm1hdCkge1xuICAgIGlmICghbSkge1xuICAgICAgICByZXR1cm4gaXNBcnJheSh0aGlzLl9tb250aHNTaG9ydClcbiAgICAgICAgICAgID8gdGhpcy5fbW9udGhzU2hvcnRcbiAgICAgICAgICAgIDogdGhpcy5fbW9udGhzU2hvcnRbJ3N0YW5kYWxvbmUnXTtcbiAgICB9XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5fbW9udGhzU2hvcnQpXG4gICAgICAgID8gdGhpcy5fbW9udGhzU2hvcnRbbS5tb250aCgpXVxuICAgICAgICA6IHRoaXMuX21vbnRoc1Nob3J0W1xuICAgICAgICAgICAgICBNT05USFNfSU5fRk9STUFULnRlc3QoZm9ybWF0KSA/ICdmb3JtYXQnIDogJ3N0YW5kYWxvbmUnXG4gICAgICAgICAgXVttLm1vbnRoKCldO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVTdHJpY3RQYXJzZShtb250aE5hbWUsIGZvcm1hdCwgc3RyaWN0KSB7XG4gICAgdmFyIGksXG4gICAgICAgIGlpLFxuICAgICAgICBtb20sXG4gICAgICAgIGxsYyA9IG1vbnRoTmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgIGlmICghdGhpcy5fbW9udGhzUGFyc2UpIHtcbiAgICAgICAgLy8gdGhpcyBpcyBub3QgdXNlZFxuICAgICAgICB0aGlzLl9tb250aHNQYXJzZSA9IFtdO1xuICAgICAgICB0aGlzLl9sb25nTW9udGhzUGFyc2UgPSBbXTtcbiAgICAgICAgdGhpcy5fc2hvcnRNb250aHNQYXJzZSA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgMTI7ICsraSkge1xuICAgICAgICAgICAgbW9tID0gY3JlYXRlVVRDKFsyMDAwLCBpXSk7XG4gICAgICAgICAgICB0aGlzLl9zaG9ydE1vbnRoc1BhcnNlW2ldID0gdGhpcy5tb250aHNTaG9ydChcbiAgICAgICAgICAgICAgICBtb20sXG4gICAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICkudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgICAgIHRoaXMuX2xvbmdNb250aHNQYXJzZVtpXSA9IHRoaXMubW9udGhzKG1vbSwgJycpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RyaWN0KSB7XG4gICAgICAgIGlmIChmb3JtYXQgPT09ICdNTU0nKSB7XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9zaG9ydE1vbnRoc1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX2xvbmdNb250aHNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZm9ybWF0ID09PSAnTU1NJykge1xuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fc2hvcnRNb250aHNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9sb25nTW9udGhzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fbG9uZ01vbnRoc1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3Nob3J0TW9udGhzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsb2NhbGVNb250aHNQYXJzZShtb250aE5hbWUsIGZvcm1hdCwgc3RyaWN0KSB7XG4gICAgdmFyIGksIG1vbSwgcmVnZXg7XG5cbiAgICBpZiAodGhpcy5fbW9udGhzUGFyc2VFeGFjdCkge1xuICAgICAgICByZXR1cm4gaGFuZGxlU3RyaWN0UGFyc2UuY2FsbCh0aGlzLCBtb250aE5hbWUsIGZvcm1hdCwgc3RyaWN0KTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX21vbnRoc1BhcnNlKSB7XG4gICAgICAgIHRoaXMuX21vbnRoc1BhcnNlID0gW107XG4gICAgICAgIHRoaXMuX2xvbmdNb250aHNQYXJzZSA9IFtdO1xuICAgICAgICB0aGlzLl9zaG9ydE1vbnRoc1BhcnNlID0gW107XG4gICAgfVxuXG4gICAgLy8gVE9ETzogYWRkIHNvcnRpbmdcbiAgICAvLyBTb3J0aW5nIG1ha2VzIHN1cmUgaWYgb25lIG1vbnRoIChvciBhYmJyKSBpcyBhIHByZWZpeCBvZiBhbm90aGVyXG4gICAgLy8gc2VlIHNvcnRpbmcgaW4gY29tcHV0ZU1vbnRoc1BhcnNlXG4gICAgZm9yIChpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgICAgLy8gbWFrZSB0aGUgcmVnZXggaWYgd2UgZG9uJ3QgaGF2ZSBpdCBhbHJlYWR5XG4gICAgICAgIG1vbSA9IGNyZWF0ZVVUQyhbMjAwMCwgaV0pO1xuICAgICAgICBpZiAoc3RyaWN0ICYmICF0aGlzLl9sb25nTW9udGhzUGFyc2VbaV0pIHtcbiAgICAgICAgICAgIHRoaXMuX2xvbmdNb250aHNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoXG4gICAgICAgICAgICAgICAgJ14nICsgdGhpcy5tb250aHMobW9tLCAnJykucmVwbGFjZSgnLicsICcnKSArICckJyxcbiAgICAgICAgICAgICAgICAnaSdcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLl9zaG9ydE1vbnRoc1BhcnNlW2ldID0gbmV3IFJlZ0V4cChcbiAgICAgICAgICAgICAgICAnXicgKyB0aGlzLm1vbnRoc1Nob3J0KG1vbSwgJycpLnJlcGxhY2UoJy4nLCAnJykgKyAnJCcsXG4gICAgICAgICAgICAgICAgJ2knXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc3RyaWN0ICYmICF0aGlzLl9tb250aHNQYXJzZVtpXSkge1xuICAgICAgICAgICAgcmVnZXggPVxuICAgICAgICAgICAgICAgICdeJyArIHRoaXMubW9udGhzKG1vbSwgJycpICsgJ3xeJyArIHRoaXMubW9udGhzU2hvcnQobW9tLCAnJyk7XG4gICAgICAgICAgICB0aGlzLl9tb250aHNQYXJzZVtpXSA9IG5ldyBSZWdFeHAocmVnZXgucmVwbGFjZSgnLicsICcnKSwgJ2knKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB0ZXN0IHRoZSByZWdleFxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBzdHJpY3QgJiZcbiAgICAgICAgICAgIGZvcm1hdCA9PT0gJ01NTU0nICYmXG4gICAgICAgICAgICB0aGlzLl9sb25nTW9udGhzUGFyc2VbaV0udGVzdChtb250aE5hbWUpXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICBzdHJpY3QgJiZcbiAgICAgICAgICAgIGZvcm1hdCA9PT0gJ01NTScgJiZcbiAgICAgICAgICAgIHRoaXMuX3Nob3J0TW9udGhzUGFyc2VbaV0udGVzdChtb250aE5hbWUpXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXN0cmljdCAmJiB0aGlzLl9tb250aHNQYXJzZVtpXS50ZXN0KG1vbnRoTmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBNT01FTlRTXG5cbmZ1bmN0aW9uIHNldE1vbnRoKG1vbSwgdmFsdWUpIHtcbiAgICBpZiAoIW1vbS5pc1ZhbGlkKCkpIHtcbiAgICAgICAgLy8gTm8gb3BcbiAgICAgICAgcmV0dXJuIG1vbTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAoL15cXGQrJC8udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdG9JbnQodmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUgPSBtb20ubG9jYWxlRGF0YSgpLm1vbnRoc1BhcnNlKHZhbHVlKTtcbiAgICAgICAgICAgIC8vIFRPRE86IEFub3RoZXIgc2lsZW50IGZhaWx1cmU/XG4gICAgICAgICAgICBpZiAoIWlzTnVtYmVyKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtb207XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbW9udGggPSB2YWx1ZSxcbiAgICAgICAgZGF0ZSA9IG1vbS5kYXRlKCk7XG5cbiAgICBkYXRlID0gZGF0ZSA8IDI5ID8gZGF0ZSA6IE1hdGgubWluKGRhdGUsIGRheXNJbk1vbnRoKG1vbS55ZWFyKCksIG1vbnRoKSk7XG4gICAgdm9pZCAobW9tLl9pc1VUQ1xuICAgICAgICA/IG1vbS5fZC5zZXRVVENNb250aChtb250aCwgZGF0ZSlcbiAgICAgICAgOiBtb20uX2Quc2V0TW9udGgobW9udGgsIGRhdGUpKTtcbiAgICByZXR1cm4gbW9tO1xufVxuXG5mdW5jdGlvbiBnZXRTZXRNb250aCh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIHNldE1vbnRoKHRoaXMsIHZhbHVlKTtcbiAgICAgICAgaG9va3MudXBkYXRlT2Zmc2V0KHRoaXMsIHRydWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZ2V0KHRoaXMsICdNb250aCcpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGF5c0luTW9udGgoKSB7XG4gICAgcmV0dXJuIGRheXNJbk1vbnRoKHRoaXMueWVhcigpLCB0aGlzLm1vbnRoKCkpO1xufVxuXG5mdW5jdGlvbiBtb250aHNTaG9ydFJlZ2V4KGlzU3RyaWN0KSB7XG4gICAgaWYgKHRoaXMuX21vbnRoc1BhcnNlRXhhY3QpIHtcbiAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfbW9udGhzUmVnZXgnKSkge1xuICAgICAgICAgICAgY29tcHV0ZU1vbnRoc1BhcnNlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzU3RyaWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbW9udGhzU2hvcnRTdHJpY3RSZWdleDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb250aHNTaG9ydFJlZ2V4O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfbW9udGhzU2hvcnRSZWdleCcpKSB7XG4gICAgICAgICAgICB0aGlzLl9tb250aHNTaG9ydFJlZ2V4ID0gZGVmYXVsdE1vbnRoc1Nob3J0UmVnZXg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1Nob3J0U3RyaWN0UmVnZXggJiYgaXNTdHJpY3RcbiAgICAgICAgICAgID8gdGhpcy5fbW9udGhzU2hvcnRTdHJpY3RSZWdleFxuICAgICAgICAgICAgOiB0aGlzLl9tb250aHNTaG9ydFJlZ2V4O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbW9udGhzUmVnZXgoaXNTdHJpY3QpIHtcbiAgICBpZiAodGhpcy5fbW9udGhzUGFyc2VFeGFjdCkge1xuICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ19tb250aHNSZWdleCcpKSB7XG4gICAgICAgICAgICBjb21wdXRlTW9udGhzUGFyc2UuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNTdHJpY3QpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb250aHNTdHJpY3RSZWdleDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb250aHNSZWdleDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX21vbnRoc1JlZ2V4JykpIHtcbiAgICAgICAgICAgIHRoaXMuX21vbnRoc1JlZ2V4ID0gZGVmYXVsdE1vbnRoc1JlZ2V4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9tb250aHNTdHJpY3RSZWdleCAmJiBpc1N0cmljdFxuICAgICAgICAgICAgPyB0aGlzLl9tb250aHNTdHJpY3RSZWdleFxuICAgICAgICAgICAgOiB0aGlzLl9tb250aHNSZWdleDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVNb250aHNQYXJzZSgpIHtcbiAgICBmdW5jdGlvbiBjbXBMZW5SZXYoYSwgYikge1xuICAgICAgICByZXR1cm4gYi5sZW5ndGggLSBhLmxlbmd0aDtcbiAgICB9XG5cbiAgICB2YXIgc2hvcnRQaWVjZXMgPSBbXSxcbiAgICAgICAgbG9uZ1BpZWNlcyA9IFtdLFxuICAgICAgICBtaXhlZFBpZWNlcyA9IFtdLFxuICAgICAgICBpLFxuICAgICAgICBtb20sXG4gICAgICAgIHNob3J0UCxcbiAgICAgICAgbG9uZ1A7XG4gICAgZm9yIChpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgICAgLy8gbWFrZSB0aGUgcmVnZXggaWYgd2UgZG9uJ3QgaGF2ZSBpdCBhbHJlYWR5XG4gICAgICAgIG1vbSA9IGNyZWF0ZVVUQyhbMjAwMCwgaV0pO1xuICAgICAgICBzaG9ydFAgPSByZWdleEVzY2FwZSh0aGlzLm1vbnRoc1Nob3J0KG1vbSwgJycpKTtcbiAgICAgICAgbG9uZ1AgPSByZWdleEVzY2FwZSh0aGlzLm1vbnRocyhtb20sICcnKSk7XG4gICAgICAgIHNob3J0UGllY2VzLnB1c2goc2hvcnRQKTtcbiAgICAgICAgbG9uZ1BpZWNlcy5wdXNoKGxvbmdQKTtcbiAgICAgICAgbWl4ZWRQaWVjZXMucHVzaChsb25nUCk7XG4gICAgICAgIG1peGVkUGllY2VzLnB1c2goc2hvcnRQKTtcbiAgICB9XG4gICAgLy8gU29ydGluZyBtYWtlcyBzdXJlIGlmIG9uZSBtb250aCAob3IgYWJicikgaXMgYSBwcmVmaXggb2YgYW5vdGhlciBpdFxuICAgIC8vIHdpbGwgbWF0Y2ggdGhlIGxvbmdlciBwaWVjZS5cbiAgICBzaG9ydFBpZWNlcy5zb3J0KGNtcExlblJldik7XG4gICAgbG9uZ1BpZWNlcy5zb3J0KGNtcExlblJldik7XG4gICAgbWl4ZWRQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xuXG4gICAgdGhpcy5fbW9udGhzUmVnZXggPSBuZXcgUmVnRXhwKCdeKCcgKyBtaXhlZFBpZWNlcy5qb2luKCd8JykgKyAnKScsICdpJyk7XG4gICAgdGhpcy5fbW9udGhzU2hvcnRSZWdleCA9IHRoaXMuX21vbnRoc1JlZ2V4O1xuICAgIHRoaXMuX21vbnRoc1N0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cChcbiAgICAgICAgJ14oJyArIGxvbmdQaWVjZXMuam9pbignfCcpICsgJyknLFxuICAgICAgICAnaSdcbiAgICApO1xuICAgIHRoaXMuX21vbnRoc1Nob3J0U3RyaWN0UmVnZXggPSBuZXcgUmVnRXhwKFxuICAgICAgICAnXignICsgc2hvcnRQaWVjZXMuam9pbignfCcpICsgJyknLFxuICAgICAgICAnaSdcbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEYXRlKHksIG0sIGQsIGgsIE0sIHMsIG1zKSB7XG4gICAgLy8gY2FuJ3QganVzdCBhcHBseSgpIHRvIGNyZWF0ZSBhIGRhdGU6XG4gICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzE4MTM0OFxuICAgIHZhciBkYXRlO1xuICAgIC8vIHRoZSBkYXRlIGNvbnN0cnVjdG9yIHJlbWFwcyB5ZWFycyAwLTk5IHRvIDE5MDAtMTk5OVxuICAgIGlmICh5IDwgMTAwICYmIHkgPj0gMCkge1xuICAgICAgICAvLyBwcmVzZXJ2ZSBsZWFwIHllYXJzIHVzaW5nIGEgZnVsbCA0MDAgeWVhciBjeWNsZSwgdGhlbiByZXNldFxuICAgICAgICBkYXRlID0gbmV3IERhdGUoeSArIDQwMCwgbSwgZCwgaCwgTSwgcywgbXMpO1xuICAgICAgICBpZiAoaXNGaW5pdGUoZGF0ZS5nZXRGdWxsWWVhcigpKSkge1xuICAgICAgICAgICAgZGF0ZS5zZXRGdWxsWWVhcih5KTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZSh5LCBtLCBkLCBoLCBNLCBzLCBtcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVVUQ0RhdGUoeSkge1xuICAgIHZhciBkYXRlLCBhcmdzO1xuICAgIC8vIHRoZSBEYXRlLlVUQyBmdW5jdGlvbiByZW1hcHMgeWVhcnMgMC05OSB0byAxOTAwLTE5OTlcbiAgICBpZiAoeSA8IDEwMCAmJiB5ID49IDApIHtcbiAgICAgICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgIC8vIHByZXNlcnZlIGxlYXAgeWVhcnMgdXNpbmcgYSBmdWxsIDQwMCB5ZWFyIGN5Y2xlLCB0aGVuIHJlc2V0XG4gICAgICAgIGFyZ3NbMF0gPSB5ICsgNDAwO1xuICAgICAgICBkYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMuYXBwbHkobnVsbCwgYXJncykpO1xuICAgICAgICBpZiAoaXNGaW5pdGUoZGF0ZS5nZXRVVENGdWxsWWVhcigpKSkge1xuICAgICAgICAgICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5KTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQy5hcHBseShudWxsLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0ZTtcbn1cblxuLy8gc3RhcnQtb2YtZmlyc3Qtd2VlayAtIHN0YXJ0LW9mLXllYXJcbmZ1bmN0aW9uIGZpcnN0V2Vla09mZnNldCh5ZWFyLCBkb3csIGRveSkge1xuICAgIHZhciAvLyBmaXJzdC13ZWVrIGRheSAtLSB3aGljaCBqYW51YXJ5IGlzIGFsd2F5cyBpbiB0aGUgZmlyc3Qgd2VlayAoNCBmb3IgaXNvLCAxIGZvciBvdGhlcilcbiAgICAgICAgZndkID0gNyArIGRvdyAtIGRveSxcbiAgICAgICAgLy8gZmlyc3Qtd2VlayBkYXkgbG9jYWwgd2Vla2RheSAtLSB3aGljaCBsb2NhbCB3ZWVrZGF5IGlzIGZ3ZFxuICAgICAgICBmd2RsdyA9ICg3ICsgY3JlYXRlVVRDRGF0ZSh5ZWFyLCAwLCBmd2QpLmdldFVUQ0RheSgpIC0gZG93KSAlIDc7XG5cbiAgICByZXR1cm4gLWZ3ZGx3ICsgZndkIC0gMTtcbn1cblxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZSNDYWxjdWxhdGluZ19hX2RhdGVfZ2l2ZW5fdGhlX3llYXIuMkNfd2Vla19udW1iZXJfYW5kX3dlZWtkYXlcbmZ1bmN0aW9uIGRheU9mWWVhckZyb21XZWVrcyh5ZWFyLCB3ZWVrLCB3ZWVrZGF5LCBkb3csIGRveSkge1xuICAgIHZhciBsb2NhbFdlZWtkYXkgPSAoNyArIHdlZWtkYXkgLSBkb3cpICUgNyxcbiAgICAgICAgd2Vla09mZnNldCA9IGZpcnN0V2Vla09mZnNldCh5ZWFyLCBkb3csIGRveSksXG4gICAgICAgIGRheU9mWWVhciA9IDEgKyA3ICogKHdlZWsgLSAxKSArIGxvY2FsV2Vla2RheSArIHdlZWtPZmZzZXQsXG4gICAgICAgIHJlc1llYXIsXG4gICAgICAgIHJlc0RheU9mWWVhcjtcblxuICAgIGlmIChkYXlPZlllYXIgPD0gMCkge1xuICAgICAgICByZXNZZWFyID0geWVhciAtIDE7XG4gICAgICAgIHJlc0RheU9mWWVhciA9IGRheXNJblllYXIocmVzWWVhcikgKyBkYXlPZlllYXI7XG4gICAgfSBlbHNlIGlmIChkYXlPZlllYXIgPiBkYXlzSW5ZZWFyKHllYXIpKSB7XG4gICAgICAgIHJlc1llYXIgPSB5ZWFyICsgMTtcbiAgICAgICAgcmVzRGF5T2ZZZWFyID0gZGF5T2ZZZWFyIC0gZGF5c0luWWVhcih5ZWFyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXNZZWFyID0geWVhcjtcbiAgICAgICAgcmVzRGF5T2ZZZWFyID0gZGF5T2ZZZWFyO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHllYXI6IHJlc1llYXIsXG4gICAgICAgIGRheU9mWWVhcjogcmVzRGF5T2ZZZWFyLFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIHdlZWtPZlllYXIobW9tLCBkb3csIGRveSkge1xuICAgIHZhciB3ZWVrT2Zmc2V0ID0gZmlyc3RXZWVrT2Zmc2V0KG1vbS55ZWFyKCksIGRvdywgZG95KSxcbiAgICAgICAgd2VlayA9IE1hdGguZmxvb3IoKG1vbS5kYXlPZlllYXIoKSAtIHdlZWtPZmZzZXQgLSAxKSAvIDcpICsgMSxcbiAgICAgICAgcmVzV2VlayxcbiAgICAgICAgcmVzWWVhcjtcblxuICAgIGlmICh3ZWVrIDwgMSkge1xuICAgICAgICByZXNZZWFyID0gbW9tLnllYXIoKSAtIDE7XG4gICAgICAgIHJlc1dlZWsgPSB3ZWVrICsgd2Vla3NJblllYXIocmVzWWVhciwgZG93LCBkb3kpO1xuICAgIH0gZWxzZSBpZiAod2VlayA+IHdlZWtzSW5ZZWFyKG1vbS55ZWFyKCksIGRvdywgZG95KSkge1xuICAgICAgICByZXNXZWVrID0gd2VlayAtIHdlZWtzSW5ZZWFyKG1vbS55ZWFyKCksIGRvdywgZG95KTtcbiAgICAgICAgcmVzWWVhciA9IG1vbS55ZWFyKCkgKyAxO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc1llYXIgPSBtb20ueWVhcigpO1xuICAgICAgICByZXNXZWVrID0gd2VlaztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB3ZWVrOiByZXNXZWVrLFxuICAgICAgICB5ZWFyOiByZXNZZWFyLFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIHdlZWtzSW5ZZWFyKHllYXIsIGRvdywgZG95KSB7XG4gICAgdmFyIHdlZWtPZmZzZXQgPSBmaXJzdFdlZWtPZmZzZXQoeWVhciwgZG93LCBkb3kpLFxuICAgICAgICB3ZWVrT2Zmc2V0TmV4dCA9IGZpcnN0V2Vla09mZnNldCh5ZWFyICsgMSwgZG93LCBkb3kpO1xuICAgIHJldHVybiAoZGF5c0luWWVhcih5ZWFyKSAtIHdlZWtPZmZzZXQgKyB3ZWVrT2Zmc2V0TmV4dCkgLyA3O1xufVxuXG4vLyBGT1JNQVRUSU5HXG5cbmFkZEZvcm1hdFRva2VuKCd3JywgWyd3dycsIDJdLCAnd28nLCAnd2VlaycpO1xuYWRkRm9ybWF0VG9rZW4oJ1cnLCBbJ1dXJywgMl0sICdXbycsICdpc29XZWVrJyk7XG5cbi8vIFBBUlNJTkdcblxuYWRkUmVnZXhUb2tlbigndycsIG1hdGNoMXRvMiwgbWF0Y2gxdG8yTm9MZWFkaW5nWmVybyk7XG5hZGRSZWdleFRva2VuKCd3dycsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbmFkZFJlZ2V4VG9rZW4oJ1cnLCBtYXRjaDF0bzIsIG1hdGNoMXRvMk5vTGVhZGluZ1plcm8pO1xuYWRkUmVnZXhUb2tlbignV1cnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG5cbmFkZFdlZWtQYXJzZVRva2VuKFxuICAgIFsndycsICd3dycsICdXJywgJ1dXJ10sXG4gICAgZnVuY3Rpb24gKGlucHV0LCB3ZWVrLCBjb25maWcsIHRva2VuKSB7XG4gICAgICAgIHdlZWtbdG9rZW4uc3Vic3RyKDAsIDEpXSA9IHRvSW50KGlucHV0KTtcbiAgICB9XG4pO1xuXG4vLyBIRUxQRVJTXG5cbi8vIExPQ0FMRVNcblxuZnVuY3Rpb24gbG9jYWxlV2Vlayhtb20pIHtcbiAgICByZXR1cm4gd2Vla09mWWVhcihtb20sIHRoaXMuX3dlZWsuZG93LCB0aGlzLl93ZWVrLmRveSkud2Vlaztcbn1cblxudmFyIGRlZmF1bHRMb2NhbGVXZWVrID0ge1xuICAgIGRvdzogMCwgLy8gU3VuZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiA2LCAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA2dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG59O1xuXG5mdW5jdGlvbiBsb2NhbGVGaXJzdERheU9mV2VlaygpIHtcbiAgICByZXR1cm4gdGhpcy5fd2Vlay5kb3c7XG59XG5cbmZ1bmN0aW9uIGxvY2FsZUZpcnN0RGF5T2ZZZWFyKCkge1xuICAgIHJldHVybiB0aGlzLl93ZWVrLmRveTtcbn1cblxuLy8gTU9NRU5UU1xuXG5mdW5jdGlvbiBnZXRTZXRXZWVrKGlucHV0KSB7XG4gICAgdmFyIHdlZWsgPSB0aGlzLmxvY2FsZURhdGEoKS53ZWVrKHRoaXMpO1xuICAgIHJldHVybiBpbnB1dCA9PSBudWxsID8gd2VlayA6IHRoaXMuYWRkKChpbnB1dCAtIHdlZWspICogNywgJ2QnKTtcbn1cblxuZnVuY3Rpb24gZ2V0U2V0SVNPV2VlayhpbnB1dCkge1xuICAgIHZhciB3ZWVrID0gd2Vla09mWWVhcih0aGlzLCAxLCA0KS53ZWVrO1xuICAgIHJldHVybiBpbnB1dCA9PSBudWxsID8gd2VlayA6IHRoaXMuYWRkKChpbnB1dCAtIHdlZWspICogNywgJ2QnKTtcbn1cblxuLy8gRk9STUFUVElOR1xuXG5hZGRGb3JtYXRUb2tlbignZCcsIDAsICdkbycsICdkYXknKTtcblxuYWRkRm9ybWF0VG9rZW4oJ2RkJywgMCwgMCwgZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS53ZWVrZGF5c01pbih0aGlzLCBmb3JtYXQpO1xufSk7XG5cbmFkZEZvcm1hdFRva2VuKCdkZGQnLCAwLCAwLCBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLndlZWtkYXlzU2hvcnQodGhpcywgZm9ybWF0KTtcbn0pO1xuXG5hZGRGb3JtYXRUb2tlbignZGRkZCcsIDAsIDAsIGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkud2Vla2RheXModGhpcywgZm9ybWF0KTtcbn0pO1xuXG5hZGRGb3JtYXRUb2tlbignZScsIDAsIDAsICd3ZWVrZGF5Jyk7XG5hZGRGb3JtYXRUb2tlbignRScsIDAsIDAsICdpc29XZWVrZGF5Jyk7XG5cbi8vIFBBUlNJTkdcblxuYWRkUmVnZXhUb2tlbignZCcsIG1hdGNoMXRvMik7XG5hZGRSZWdleFRva2VuKCdlJywgbWF0Y2gxdG8yKTtcbmFkZFJlZ2V4VG9rZW4oJ0UnLCBtYXRjaDF0bzIpO1xuYWRkUmVnZXhUb2tlbignZGQnLCBmdW5jdGlvbiAoaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgIHJldHVybiBsb2NhbGUud2Vla2RheXNNaW5SZWdleChpc1N0cmljdCk7XG59KTtcbmFkZFJlZ2V4VG9rZW4oJ2RkZCcsIGZ1bmN0aW9uIChpc1N0cmljdCwgbG9jYWxlKSB7XG4gICAgcmV0dXJuIGxvY2FsZS53ZWVrZGF5c1Nob3J0UmVnZXgoaXNTdHJpY3QpO1xufSk7XG5hZGRSZWdleFRva2VuKCdkZGRkJywgZnVuY3Rpb24gKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICByZXR1cm4gbG9jYWxlLndlZWtkYXlzUmVnZXgoaXNTdHJpY3QpO1xufSk7XG5cbmFkZFdlZWtQYXJzZVRva2VuKFsnZGQnLCAnZGRkJywgJ2RkZGQnXSwgZnVuY3Rpb24gKGlucHV0LCB3ZWVrLCBjb25maWcsIHRva2VuKSB7XG4gICAgdmFyIHdlZWtkYXkgPSBjb25maWcuX2xvY2FsZS53ZWVrZGF5c1BhcnNlKGlucHV0LCB0b2tlbiwgY29uZmlnLl9zdHJpY3QpO1xuICAgIC8vIGlmIHdlIGRpZG4ndCBnZXQgYSB3ZWVrZGF5IG5hbWUsIG1hcmsgdGhlIGRhdGUgYXMgaW52YWxpZFxuICAgIGlmICh3ZWVrZGF5ICE9IG51bGwpIHtcbiAgICAgICAgd2Vlay5kID0gd2Vla2RheTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5pbnZhbGlkV2Vla2RheSA9IGlucHV0O1xuICAgIH1cbn0pO1xuXG5hZGRXZWVrUGFyc2VUb2tlbihbJ2QnLCAnZScsICdFJ10sIGZ1bmN0aW9uIChpbnB1dCwgd2VlaywgY29uZmlnLCB0b2tlbikge1xuICAgIHdlZWtbdG9rZW5dID0gdG9JbnQoaW5wdXQpO1xufSk7XG5cbi8vIEhFTFBFUlNcblxuZnVuY3Rpb24gcGFyc2VXZWVrZGF5KGlucHV0LCBsb2NhbGUpIHtcbiAgICBpZiAodHlwZW9mIGlucHV0ICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxuXG4gICAgaWYgKCFpc05hTihpbnB1dCkpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KGlucHV0LCAxMCk7XG4gICAgfVxuXG4gICAgaW5wdXQgPSBsb2NhbGUud2Vla2RheXNQYXJzZShpbnB1dCk7XG4gICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBwYXJzZUlzb1dlZWtkYXkoaW5wdXQsIGxvY2FsZSkge1xuICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUud2Vla2RheXNQYXJzZShpbnB1dCkgJSA3IHx8IDc7XG4gICAgfVxuICAgIHJldHVybiBpc05hTihpbnB1dCkgPyBudWxsIDogaW5wdXQ7XG59XG5cbi8vIExPQ0FMRVNcbmZ1bmN0aW9uIHNoaWZ0V2Vla2RheXMod3MsIG4pIHtcbiAgICByZXR1cm4gd3Muc2xpY2UobiwgNykuY29uY2F0KHdzLnNsaWNlKDAsIG4pKTtcbn1cblxudmFyIGRlZmF1bHRMb2NhbGVXZWVrZGF5cyA9XG4gICAgICAgICdTdW5kYXlfTW9uZGF5X1R1ZXNkYXlfV2VkbmVzZGF5X1RodXJzZGF5X0ZyaWRheV9TYXR1cmRheScuc3BsaXQoJ18nKSxcbiAgICBkZWZhdWx0TG9jYWxlV2Vla2RheXNTaG9ydCA9ICdTdW5fTW9uX1R1ZV9XZWRfVGh1X0ZyaV9TYXQnLnNwbGl0KCdfJyksXG4gICAgZGVmYXVsdExvY2FsZVdlZWtkYXlzTWluID0gJ1N1X01vX1R1X1dlX1RoX0ZyX1NhJy5zcGxpdCgnXycpLFxuICAgIGRlZmF1bHRXZWVrZGF5c1JlZ2V4ID0gbWF0Y2hXb3JkLFxuICAgIGRlZmF1bHRXZWVrZGF5c1Nob3J0UmVnZXggPSBtYXRjaFdvcmQsXG4gICAgZGVmYXVsdFdlZWtkYXlzTWluUmVnZXggPSBtYXRjaFdvcmQ7XG5cbmZ1bmN0aW9uIGxvY2FsZVdlZWtkYXlzKG0sIGZvcm1hdCkge1xuICAgIHZhciB3ZWVrZGF5cyA9IGlzQXJyYXkodGhpcy5fd2Vla2RheXMpXG4gICAgICAgID8gdGhpcy5fd2Vla2RheXNcbiAgICAgICAgOiB0aGlzLl93ZWVrZGF5c1tcbiAgICAgICAgICAgICAgbSAmJiBtICE9PSB0cnVlICYmIHRoaXMuX3dlZWtkYXlzLmlzRm9ybWF0LnRlc3QoZm9ybWF0KVxuICAgICAgICAgICAgICAgICAgPyAnZm9ybWF0J1xuICAgICAgICAgICAgICAgICAgOiAnc3RhbmRhbG9uZSdcbiAgICAgICAgICBdO1xuICAgIHJldHVybiBtID09PSB0cnVlXG4gICAgICAgID8gc2hpZnRXZWVrZGF5cyh3ZWVrZGF5cywgdGhpcy5fd2Vlay5kb3cpXG4gICAgICAgIDogbVxuICAgICAgICAgID8gd2Vla2RheXNbbS5kYXkoKV1cbiAgICAgICAgICA6IHdlZWtkYXlzO1xufVxuXG5mdW5jdGlvbiBsb2NhbGVXZWVrZGF5c1Nob3J0KG0pIHtcbiAgICByZXR1cm4gbSA9PT0gdHJ1ZVxuICAgICAgICA/IHNoaWZ0V2Vla2RheXModGhpcy5fd2Vla2RheXNTaG9ydCwgdGhpcy5fd2Vlay5kb3cpXG4gICAgICAgIDogbVxuICAgICAgICAgID8gdGhpcy5fd2Vla2RheXNTaG9ydFttLmRheSgpXVxuICAgICAgICAgIDogdGhpcy5fd2Vla2RheXNTaG9ydDtcbn1cblxuZnVuY3Rpb24gbG9jYWxlV2Vla2RheXNNaW4obSkge1xuICAgIHJldHVybiBtID09PSB0cnVlXG4gICAgICAgID8gc2hpZnRXZWVrZGF5cyh0aGlzLl93ZWVrZGF5c01pbiwgdGhpcy5fd2Vlay5kb3cpXG4gICAgICAgIDogbVxuICAgICAgICAgID8gdGhpcy5fd2Vla2RheXNNaW5bbS5kYXkoKV1cbiAgICAgICAgICA6IHRoaXMuX3dlZWtkYXlzTWluO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVTdHJpY3RQYXJzZSQxKHdlZWtkYXlOYW1lLCBmb3JtYXQsIHN0cmljdCkge1xuICAgIHZhciBpLFxuICAgICAgICBpaSxcbiAgICAgICAgbW9tLFxuICAgICAgICBsbGMgPSB3ZWVrZGF5TmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgIGlmICghdGhpcy5fd2Vla2RheXNQYXJzZSkge1xuICAgICAgICB0aGlzLl93ZWVrZGF5c1BhcnNlID0gW107XG4gICAgICAgIHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZSA9IFtdO1xuICAgICAgICB0aGlzLl9taW5XZWVrZGF5c1BhcnNlID0gW107XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDc7ICsraSkge1xuICAgICAgICAgICAgbW9tID0gY3JlYXRlVVRDKFsyMDAwLCAxXSkuZGF5KGkpO1xuICAgICAgICAgICAgdGhpcy5fbWluV2Vla2RheXNQYXJzZVtpXSA9IHRoaXMud2Vla2RheXNNaW4oXG4gICAgICAgICAgICAgICAgbW9tLFxuICAgICAgICAgICAgICAgICcnXG4gICAgICAgICAgICApLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2VbaV0gPSB0aGlzLndlZWtkYXlzU2hvcnQoXG4gICAgICAgICAgICAgICAgbW9tLFxuICAgICAgICAgICAgICAgICcnXG4gICAgICAgICAgICApLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICB0aGlzLl93ZWVrZGF5c1BhcnNlW2ldID0gdGhpcy53ZWVrZGF5cyhtb20sICcnKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0cmljdCkge1xuICAgICAgICBpZiAoZm9ybWF0ID09PSAnZGRkZCcpIHtcbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3dlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKGZvcm1hdCA9PT0gJ2RkZCcpIHtcbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9taW5XZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmb3JtYXQgPT09ICdkZGRkJykge1xuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fd2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fbWluV2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAoZm9ybWF0ID09PSAnZGRkJykge1xuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3dlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fbWluV2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9taW5XZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3dlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbG9jYWxlV2Vla2RheXNQYXJzZSh3ZWVrZGF5TmFtZSwgZm9ybWF0LCBzdHJpY3QpIHtcbiAgICB2YXIgaSwgbW9tLCByZWdleDtcblxuICAgIGlmICh0aGlzLl93ZWVrZGF5c1BhcnNlRXhhY3QpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZVN0cmljdFBhcnNlJDEuY2FsbCh0aGlzLCB3ZWVrZGF5TmFtZSwgZm9ybWF0LCBzdHJpY3QpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fd2Vla2RheXNQYXJzZSkge1xuICAgICAgICB0aGlzLl93ZWVrZGF5c1BhcnNlID0gW107XG4gICAgICAgIHRoaXMuX21pbldlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICAgICAgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlID0gW107XG4gICAgICAgIHRoaXMuX2Z1bGxXZWVrZGF5c1BhcnNlID0gW107XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICAvLyBtYWtlIHRoZSByZWdleCBpZiB3ZSBkb24ndCBoYXZlIGl0IGFscmVhZHlcblxuICAgICAgICBtb20gPSBjcmVhdGVVVEMoWzIwMDAsIDFdKS5kYXkoaSk7XG4gICAgICAgIGlmIChzdHJpY3QgJiYgIXRoaXMuX2Z1bGxXZWVrZGF5c1BhcnNlW2ldKSB7XG4gICAgICAgICAgICB0aGlzLl9mdWxsV2Vla2RheXNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoXG4gICAgICAgICAgICAgICAgJ14nICsgdGhpcy53ZWVrZGF5cyhtb20sICcnKS5yZXBsYWNlKCcuJywgJ1xcXFwuPycpICsgJyQnLFxuICAgICAgICAgICAgICAgICdpJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoXG4gICAgICAgICAgICAgICAgJ14nICsgdGhpcy53ZWVrZGF5c1Nob3J0KG1vbSwgJycpLnJlcGxhY2UoJy4nLCAnXFxcXC4/JykgKyAnJCcsXG4gICAgICAgICAgICAgICAgJ2knXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5fbWluV2Vla2RheXNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoXG4gICAgICAgICAgICAgICAgJ14nICsgdGhpcy53ZWVrZGF5c01pbihtb20sICcnKS5yZXBsYWNlKCcuJywgJ1xcXFwuPycpICsgJyQnLFxuICAgICAgICAgICAgICAgICdpJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX3dlZWtkYXlzUGFyc2VbaV0pIHtcbiAgICAgICAgICAgIHJlZ2V4ID1cbiAgICAgICAgICAgICAgICAnXicgK1xuICAgICAgICAgICAgICAgIHRoaXMud2Vla2RheXMobW9tLCAnJykgK1xuICAgICAgICAgICAgICAgICd8XicgK1xuICAgICAgICAgICAgICAgIHRoaXMud2Vla2RheXNTaG9ydChtb20sICcnKSArXG4gICAgICAgICAgICAgICAgJ3xeJyArXG4gICAgICAgICAgICAgICAgdGhpcy53ZWVrZGF5c01pbihtb20sICcnKTtcbiAgICAgICAgICAgIHRoaXMuX3dlZWtkYXlzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKHJlZ2V4LnJlcGxhY2UoJy4nLCAnJyksICdpJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGVzdCB0aGUgcmVnZXhcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgc3RyaWN0ICYmXG4gICAgICAgICAgICBmb3JtYXQgPT09ICdkZGRkJyAmJlxuICAgICAgICAgICAgdGhpcy5fZnVsbFdlZWtkYXlzUGFyc2VbaV0udGVzdCh3ZWVrZGF5TmFtZSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIHN0cmljdCAmJlxuICAgICAgICAgICAgZm9ybWF0ID09PSAnZGRkJyAmJlxuICAgICAgICAgICAgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlW2ldLnRlc3Qod2Vla2RheU5hbWUpXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICBzdHJpY3QgJiZcbiAgICAgICAgICAgIGZvcm1hdCA9PT0gJ2RkJyAmJlxuICAgICAgICAgICAgdGhpcy5fbWluV2Vla2RheXNQYXJzZVtpXS50ZXN0KHdlZWtkYXlOYW1lKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9IGVsc2UgaWYgKCFzdHJpY3QgJiYgdGhpcy5fd2Vla2RheXNQYXJzZVtpXS50ZXN0KHdlZWtkYXlOYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIE1PTUVOVFNcblxuZnVuY3Rpb24gZ2V0U2V0RGF5T2ZXZWVrKGlucHV0KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4gaW5wdXQgIT0gbnVsbCA/IHRoaXMgOiBOYU47XG4gICAgfVxuXG4gICAgdmFyIGRheSA9IGdldCh0aGlzLCAnRGF5Jyk7XG4gICAgaWYgKGlucHV0ICE9IG51bGwpIHtcbiAgICAgICAgaW5wdXQgPSBwYXJzZVdlZWtkYXkoaW5wdXQsIHRoaXMubG9jYWxlRGF0YSgpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkKGlucHV0IC0gZGF5LCAnZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBkYXk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRTZXRMb2NhbGVEYXlPZldlZWsoaW5wdXQpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiBpbnB1dCAhPSBudWxsID8gdGhpcyA6IE5hTjtcbiAgICB9XG4gICAgdmFyIHdlZWtkYXkgPSAodGhpcy5kYXkoKSArIDcgLSB0aGlzLmxvY2FsZURhdGEoKS5fd2Vlay5kb3cpICUgNztcbiAgICByZXR1cm4gaW5wdXQgPT0gbnVsbCA/IHdlZWtkYXkgOiB0aGlzLmFkZChpbnB1dCAtIHdlZWtkYXksICdkJyk7XG59XG5cbmZ1bmN0aW9uIGdldFNldElTT0RheU9mV2VlayhpbnB1dCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0ICE9IG51bGwgPyB0aGlzIDogTmFOO1xuICAgIH1cblxuICAgIC8vIGJlaGF2ZXMgdGhlIHNhbWUgYXMgbW9tZW50I2RheSBleGNlcHRcbiAgICAvLyBhcyBhIGdldHRlciwgcmV0dXJucyA3IGluc3RlYWQgb2YgMCAoMS03IHJhbmdlIGluc3RlYWQgb2YgMC02KVxuICAgIC8vIGFzIGEgc2V0dGVyLCBzdW5kYXkgc2hvdWxkIGJlbG9uZyB0byB0aGUgcHJldmlvdXMgd2Vlay5cblxuICAgIGlmIChpbnB1dCAhPSBudWxsKSB7XG4gICAgICAgIHZhciB3ZWVrZGF5ID0gcGFyc2VJc29XZWVrZGF5KGlucHV0LCB0aGlzLmxvY2FsZURhdGEoKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmRheSh0aGlzLmRheSgpICUgNyA/IHdlZWtkYXkgOiB3ZWVrZGF5IC0gNyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF5KCkgfHwgNztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHdlZWtkYXlzUmVnZXgoaXNTdHJpY3QpIHtcbiAgICBpZiAodGhpcy5fd2Vla2RheXNQYXJzZUV4YWN0KSB7XG4gICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzUmVnZXgnKSkge1xuICAgICAgICAgICAgY29tcHV0ZVdlZWtkYXlzUGFyc2UuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNTdHJpY3QpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1N0cmljdFJlZ2V4O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzUmVnZXg7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c1JlZ2V4JykpIHtcbiAgICAgICAgICAgIHRoaXMuX3dlZWtkYXlzUmVnZXggPSBkZWZhdWx0V2Vla2RheXNSZWdleDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNTdHJpY3RSZWdleCAmJiBpc1N0cmljdFxuICAgICAgICAgICAgPyB0aGlzLl93ZWVrZGF5c1N0cmljdFJlZ2V4XG4gICAgICAgICAgICA6IHRoaXMuX3dlZWtkYXlzUmVnZXg7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB3ZWVrZGF5c1Nob3J0UmVnZXgoaXNTdHJpY3QpIHtcbiAgICBpZiAodGhpcy5fd2Vla2RheXNQYXJzZUV4YWN0KSB7XG4gICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzUmVnZXgnKSkge1xuICAgICAgICAgICAgY29tcHV0ZVdlZWtkYXlzUGFyc2UuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNTdHJpY3QpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1Nob3J0U3RyaWN0UmVnZXg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNTaG9ydFJlZ2V4O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNTaG9ydFJlZ2V4JykpIHtcbiAgICAgICAgICAgIHRoaXMuX3dlZWtkYXlzU2hvcnRSZWdleCA9IGRlZmF1bHRXZWVrZGF5c1Nob3J0UmVnZXg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU2hvcnRTdHJpY3RSZWdleCAmJiBpc1N0cmljdFxuICAgICAgICAgICAgPyB0aGlzLl93ZWVrZGF5c1Nob3J0U3RyaWN0UmVnZXhcbiAgICAgICAgICAgIDogdGhpcy5fd2Vla2RheXNTaG9ydFJlZ2V4O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gd2Vla2RheXNNaW5SZWdleChpc1N0cmljdCkge1xuICAgIGlmICh0aGlzLl93ZWVrZGF5c1BhcnNlRXhhY3QpIHtcbiAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNSZWdleCcpKSB7XG4gICAgICAgICAgICBjb21wdXRlV2Vla2RheXNQYXJzZS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1N0cmljdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzTWluU3RyaWN0UmVnZXg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNNaW5SZWdleDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzTWluUmVnZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNNaW5SZWdleCA9IGRlZmF1bHRXZWVrZGF5c01pblJlZ2V4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c01pblN0cmljdFJlZ2V4ICYmIGlzU3RyaWN0XG4gICAgICAgICAgICA/IHRoaXMuX3dlZWtkYXlzTWluU3RyaWN0UmVnZXhcbiAgICAgICAgICAgIDogdGhpcy5fd2Vla2RheXNNaW5SZWdleDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVXZWVrZGF5c1BhcnNlKCkge1xuICAgIGZ1bmN0aW9uIGNtcExlblJldihhLCBiKSB7XG4gICAgICAgIHJldHVybiBiLmxlbmd0aCAtIGEubGVuZ3RoO1xuICAgIH1cblxuICAgIHZhciBtaW5QaWVjZXMgPSBbXSxcbiAgICAgICAgc2hvcnRQaWVjZXMgPSBbXSxcbiAgICAgICAgbG9uZ1BpZWNlcyA9IFtdLFxuICAgICAgICBtaXhlZFBpZWNlcyA9IFtdLFxuICAgICAgICBpLFxuICAgICAgICBtb20sXG4gICAgICAgIG1pbnAsXG4gICAgICAgIHNob3J0cCxcbiAgICAgICAgbG9uZ3A7XG4gICAgZm9yIChpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICAvLyBtYWtlIHRoZSByZWdleCBpZiB3ZSBkb24ndCBoYXZlIGl0IGFscmVhZHlcbiAgICAgICAgbW9tID0gY3JlYXRlVVRDKFsyMDAwLCAxXSkuZGF5KGkpO1xuICAgICAgICBtaW5wID0gcmVnZXhFc2NhcGUodGhpcy53ZWVrZGF5c01pbihtb20sICcnKSk7XG4gICAgICAgIHNob3J0cCA9IHJlZ2V4RXNjYXBlKHRoaXMud2Vla2RheXNTaG9ydChtb20sICcnKSk7XG4gICAgICAgIGxvbmdwID0gcmVnZXhFc2NhcGUodGhpcy53ZWVrZGF5cyhtb20sICcnKSk7XG4gICAgICAgIG1pblBpZWNlcy5wdXNoKG1pbnApO1xuICAgICAgICBzaG9ydFBpZWNlcy5wdXNoKHNob3J0cCk7XG4gICAgICAgIGxvbmdQaWVjZXMucHVzaChsb25ncCk7XG4gICAgICAgIG1peGVkUGllY2VzLnB1c2gobWlucCk7XG4gICAgICAgIG1peGVkUGllY2VzLnB1c2goc2hvcnRwKTtcbiAgICAgICAgbWl4ZWRQaWVjZXMucHVzaChsb25ncCk7XG4gICAgfVxuICAgIC8vIFNvcnRpbmcgbWFrZXMgc3VyZSBpZiBvbmUgd2Vla2RheSAob3IgYWJicikgaXMgYSBwcmVmaXggb2YgYW5vdGhlciBpdFxuICAgIC8vIHdpbGwgbWF0Y2ggdGhlIGxvbmdlciBwaWVjZS5cbiAgICBtaW5QaWVjZXMuc29ydChjbXBMZW5SZXYpO1xuICAgIHNob3J0UGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICBsb25nUGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICBtaXhlZFBpZWNlcy5zb3J0KGNtcExlblJldik7XG5cbiAgICB0aGlzLl93ZWVrZGF5c1JlZ2V4ID0gbmV3IFJlZ0V4cCgnXignICsgbWl4ZWRQaWVjZXMuam9pbignfCcpICsgJyknLCAnaScpO1xuICAgIHRoaXMuX3dlZWtkYXlzU2hvcnRSZWdleCA9IHRoaXMuX3dlZWtkYXlzUmVnZXg7XG4gICAgdGhpcy5fd2Vla2RheXNNaW5SZWdleCA9IHRoaXMuX3dlZWtkYXlzUmVnZXg7XG5cbiAgICB0aGlzLl93ZWVrZGF5c1N0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cChcbiAgICAgICAgJ14oJyArIGxvbmdQaWVjZXMuam9pbignfCcpICsgJyknLFxuICAgICAgICAnaSdcbiAgICApO1xuICAgIHRoaXMuX3dlZWtkYXlzU2hvcnRTdHJpY3RSZWdleCA9IG5ldyBSZWdFeHAoXG4gICAgICAgICdeKCcgKyBzaG9ydFBpZWNlcy5qb2luKCd8JykgKyAnKScsXG4gICAgICAgICdpJ1xuICAgICk7XG4gICAgdGhpcy5fd2Vla2RheXNNaW5TdHJpY3RSZWdleCA9IG5ldyBSZWdFeHAoXG4gICAgICAgICdeKCcgKyBtaW5QaWVjZXMuam9pbignfCcpICsgJyknLFxuICAgICAgICAnaSdcbiAgICApO1xufVxuXG4vLyBGT1JNQVRUSU5HXG5cbmZ1bmN0aW9uIGhGb3JtYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaG91cnMoKSAlIDEyIHx8IDEyO1xufVxuXG5mdW5jdGlvbiBrRm9ybWF0KCkge1xuICAgIHJldHVybiB0aGlzLmhvdXJzKCkgfHwgMjQ7XG59XG5cbmFkZEZvcm1hdFRva2VuKCdIJywgWydISCcsIDJdLCAwLCAnaG91cicpO1xuYWRkRm9ybWF0VG9rZW4oJ2gnLCBbJ2hoJywgMl0sIDAsIGhGb3JtYXQpO1xuYWRkRm9ybWF0VG9rZW4oJ2snLCBbJ2trJywgMl0sIDAsIGtGb3JtYXQpO1xuXG5hZGRGb3JtYXRUb2tlbignaG1tJywgMCwgMCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnJyArIGhGb3JtYXQuYXBwbHkodGhpcykgKyB6ZXJvRmlsbCh0aGlzLm1pbnV0ZXMoKSwgMik7XG59KTtcblxuYWRkRm9ybWF0VG9rZW4oJ2htbXNzJywgMCwgMCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgICcnICtcbiAgICAgICAgaEZvcm1hdC5hcHBseSh0aGlzKSArXG4gICAgICAgIHplcm9GaWxsKHRoaXMubWludXRlcygpLCAyKSArXG4gICAgICAgIHplcm9GaWxsKHRoaXMuc2Vjb25kcygpLCAyKVxuICAgICk7XG59KTtcblxuYWRkRm9ybWF0VG9rZW4oJ0htbScsIDAsIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJycgKyB0aGlzLmhvdXJzKCkgKyB6ZXJvRmlsbCh0aGlzLm1pbnV0ZXMoKSwgMik7XG59KTtcblxuYWRkRm9ybWF0VG9rZW4oJ0htbXNzJywgMCwgMCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgICcnICtcbiAgICAgICAgdGhpcy5ob3VycygpICtcbiAgICAgICAgemVyb0ZpbGwodGhpcy5taW51dGVzKCksIDIpICtcbiAgICAgICAgemVyb0ZpbGwodGhpcy5zZWNvbmRzKCksIDIpXG4gICAgKTtcbn0pO1xuXG5mdW5jdGlvbiBtZXJpZGllbSh0b2tlbiwgbG93ZXJjYXNlKSB7XG4gICAgYWRkRm9ybWF0VG9rZW4odG9rZW4sIDAsIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLm1lcmlkaWVtKFxuICAgICAgICAgICAgdGhpcy5ob3VycygpLFxuICAgICAgICAgICAgdGhpcy5taW51dGVzKCksXG4gICAgICAgICAgICBsb3dlcmNhc2VcbiAgICAgICAgKTtcbiAgICB9KTtcbn1cblxubWVyaWRpZW0oJ2EnLCB0cnVlKTtcbm1lcmlkaWVtKCdBJywgZmFsc2UpO1xuXG4vLyBQQVJTSU5HXG5cbmZ1bmN0aW9uIG1hdGNoTWVyaWRpZW0oaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgIHJldHVybiBsb2NhbGUuX21lcmlkaWVtUGFyc2U7XG59XG5cbmFkZFJlZ2V4VG9rZW4oJ2EnLCBtYXRjaE1lcmlkaWVtKTtcbmFkZFJlZ2V4VG9rZW4oJ0EnLCBtYXRjaE1lcmlkaWVtKTtcbmFkZFJlZ2V4VG9rZW4oJ0gnLCBtYXRjaDF0bzIsIG1hdGNoMXRvMkhhc1plcm8pO1xuYWRkUmVnZXhUb2tlbignaCcsIG1hdGNoMXRvMiwgbWF0Y2gxdG8yTm9MZWFkaW5nWmVybyk7XG5hZGRSZWdleFRva2VuKCdrJywgbWF0Y2gxdG8yLCBtYXRjaDF0bzJOb0xlYWRpbmdaZXJvKTtcbmFkZFJlZ2V4VG9rZW4oJ0hIJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuYWRkUmVnZXhUb2tlbignaGgnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG5hZGRSZWdleFRva2VuKCdraycsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcblxuYWRkUmVnZXhUb2tlbignaG1tJywgbWF0Y2gzdG80KTtcbmFkZFJlZ2V4VG9rZW4oJ2htbXNzJywgbWF0Y2g1dG82KTtcbmFkZFJlZ2V4VG9rZW4oJ0htbScsIG1hdGNoM3RvNCk7XG5hZGRSZWdleFRva2VuKCdIbW1zcycsIG1hdGNoNXRvNik7XG5cbmFkZFBhcnNlVG9rZW4oWydIJywgJ0hIJ10sIEhPVVIpO1xuYWRkUGFyc2VUb2tlbihbJ2snLCAna2snXSwgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgdmFyIGtJbnB1dCA9IHRvSW50KGlucHV0KTtcbiAgICBhcnJheVtIT1VSXSA9IGtJbnB1dCA9PT0gMjQgPyAwIDoga0lucHV0O1xufSk7XG5hZGRQYXJzZVRva2VuKFsnYScsICdBJ10sIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgIGNvbmZpZy5faXNQbSA9IGNvbmZpZy5fbG9jYWxlLmlzUE0oaW5wdXQpO1xuICAgIGNvbmZpZy5fbWVyaWRpZW0gPSBpbnB1dDtcbn0pO1xuYWRkUGFyc2VUb2tlbihbJ2gnLCAnaGgnXSwgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgYXJyYXlbSE9VUl0gPSB0b0ludChpbnB1dCk7XG4gICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuYmlnSG91ciA9IHRydWU7XG59KTtcbmFkZFBhcnNlVG9rZW4oJ2htbScsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgIHZhciBwb3MgPSBpbnB1dC5sZW5ndGggLSAyO1xuICAgIGFycmF5W0hPVVJdID0gdG9JbnQoaW5wdXQuc3Vic3RyKDAsIHBvcykpO1xuICAgIGFycmF5W01JTlVURV0gPSB0b0ludChpbnB1dC5zdWJzdHIocG9zKSk7XG4gICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuYmlnSG91ciA9IHRydWU7XG59KTtcbmFkZFBhcnNlVG9rZW4oJ2htbXNzJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgdmFyIHBvczEgPSBpbnB1dC5sZW5ndGggLSA0LFxuICAgICAgICBwb3MyID0gaW5wdXQubGVuZ3RoIC0gMjtcbiAgICBhcnJheVtIT1VSXSA9IHRvSW50KGlucHV0LnN1YnN0cigwLCBwb3MxKSk7XG4gICAgYXJyYXlbTUlOVVRFXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MxLCAyKSk7XG4gICAgYXJyYXlbU0VDT05EXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MyKSk7XG4gICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuYmlnSG91ciA9IHRydWU7XG59KTtcbmFkZFBhcnNlVG9rZW4oJ0htbScsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgIHZhciBwb3MgPSBpbnB1dC5sZW5ndGggLSAyO1xuICAgIGFycmF5W0hPVVJdID0gdG9JbnQoaW5wdXQuc3Vic3RyKDAsIHBvcykpO1xuICAgIGFycmF5W01JTlVURV0gPSB0b0ludChpbnB1dC5zdWJzdHIocG9zKSk7XG59KTtcbmFkZFBhcnNlVG9rZW4oJ0htbXNzJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgdmFyIHBvczEgPSBpbnB1dC5sZW5ndGggLSA0LFxuICAgICAgICBwb3MyID0gaW5wdXQubGVuZ3RoIC0gMjtcbiAgICBhcnJheVtIT1VSXSA9IHRvSW50KGlucHV0LnN1YnN0cigwLCBwb3MxKSk7XG4gICAgYXJyYXlbTUlOVVRFXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MxLCAyKSk7XG4gICAgYXJyYXlbU0VDT05EXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MyKSk7XG59KTtcblxuLy8gTE9DQUxFU1xuXG5mdW5jdGlvbiBsb2NhbGVJc1BNKGlucHV0KSB7XG4gICAgLy8gSUU4IFF1aXJrcyBNb2RlICYgSUU3IFN0YW5kYXJkcyBNb2RlIGRvIG5vdCBhbGxvdyBhY2Nlc3Npbmcgc3RyaW5ncyBsaWtlIGFycmF5c1xuICAgIC8vIFVzaW5nIGNoYXJBdCBzaG91bGQgYmUgbW9yZSBjb21wYXRpYmxlLlxuICAgIHJldHVybiAoaW5wdXQgKyAnJykudG9Mb3dlckNhc2UoKS5jaGFyQXQoMCkgPT09ICdwJztcbn1cblxudmFyIGRlZmF1bHRMb2NhbGVNZXJpZGllbVBhcnNlID0gL1thcF1cXC4/bT9cXC4/L2ksXG4gICAgLy8gU2V0dGluZyB0aGUgaG91ciBzaG91bGQga2VlcCB0aGUgdGltZSwgYmVjYXVzZSB0aGUgdXNlciBleHBsaWNpdGx5XG4gICAgLy8gc3BlY2lmaWVkIHdoaWNoIGhvdXIgdGhleSB3YW50LiBTbyB0cnlpbmcgdG8gbWFpbnRhaW4gdGhlIHNhbWUgaG91ciAoaW5cbiAgICAvLyBhIG5ldyB0aW1lem9uZSkgbWFrZXMgc2Vuc2UuIEFkZGluZy9zdWJ0cmFjdGluZyBob3VycyBkb2VzIG5vdCBmb2xsb3dcbiAgICAvLyB0aGlzIHJ1bGUuXG4gICAgZ2V0U2V0SG91ciA9IG1ha2VHZXRTZXQoJ0hvdXJzJywgdHJ1ZSk7XG5cbmZ1bmN0aW9uIGxvY2FsZU1lcmlkaWVtKGhvdXJzLCBtaW51dGVzLCBpc0xvd2VyKSB7XG4gICAgaWYgKGhvdXJzID4gMTEpIHtcbiAgICAgICAgcmV0dXJuIGlzTG93ZXIgPyAncG0nIDogJ1BNJztcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gaXNMb3dlciA/ICdhbScgOiAnQU0nO1xuICAgIH1cbn1cblxudmFyIGJhc2VDb25maWcgPSB7XG4gICAgY2FsZW5kYXI6IGRlZmF1bHRDYWxlbmRhcixcbiAgICBsb25nRGF0ZUZvcm1hdDogZGVmYXVsdExvbmdEYXRlRm9ybWF0LFxuICAgIGludmFsaWREYXRlOiBkZWZhdWx0SW52YWxpZERhdGUsXG4gICAgb3JkaW5hbDogZGVmYXVsdE9yZGluYWwsXG4gICAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogZGVmYXVsdERheU9mTW9udGhPcmRpbmFsUGFyc2UsXG4gICAgcmVsYXRpdmVUaW1lOiBkZWZhdWx0UmVsYXRpdmVUaW1lLFxuXG4gICAgbW9udGhzOiBkZWZhdWx0TG9jYWxlTW9udGhzLFxuICAgIG1vbnRoc1Nob3J0OiBkZWZhdWx0TG9jYWxlTW9udGhzU2hvcnQsXG5cbiAgICB3ZWVrOiBkZWZhdWx0TG9jYWxlV2VlayxcblxuICAgIHdlZWtkYXlzOiBkZWZhdWx0TG9jYWxlV2Vla2RheXMsXG4gICAgd2Vla2RheXNNaW46IGRlZmF1bHRMb2NhbGVXZWVrZGF5c01pbixcbiAgICB3ZWVrZGF5c1Nob3J0OiBkZWZhdWx0TG9jYWxlV2Vla2RheXNTaG9ydCxcblxuICAgIG1lcmlkaWVtUGFyc2U6IGRlZmF1bHRMb2NhbGVNZXJpZGllbVBhcnNlLFxufTtcblxuLy8gaW50ZXJuYWwgc3RvcmFnZSBmb3IgbG9jYWxlIGNvbmZpZyBmaWxlc1xudmFyIGxvY2FsZXMgPSB7fSxcbiAgICBsb2NhbGVGYW1pbGllcyA9IHt9LFxuICAgIGdsb2JhbExvY2FsZTtcblxuZnVuY3Rpb24gY29tbW9uUHJlZml4KGFycjEsIGFycjIpIHtcbiAgICB2YXIgaSxcbiAgICAgICAgbWlubCA9IE1hdGgubWluKGFycjEubGVuZ3RoLCBhcnIyLmxlbmd0aCk7XG4gICAgZm9yIChpID0gMDsgaSA8IG1pbmw7IGkgKz0gMSkge1xuICAgICAgICBpZiAoYXJyMVtpXSAhPT0gYXJyMltpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1pbmw7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZShrZXkpIHtcbiAgICByZXR1cm4ga2V5ID8ga2V5LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgnXycsICctJykgOiBrZXk7XG59XG5cbi8vIHBpY2sgdGhlIGxvY2FsZSBmcm9tIHRoZSBhcnJheVxuLy8gdHJ5IFsnZW4tYXUnLCAnZW4tZ2InXSBhcyAnZW4tYXUnLCAnZW4tZ2InLCAnZW4nLCBhcyBpbiBtb3ZlIHRocm91Z2ggdGhlIGxpc3QgdHJ5aW5nIGVhY2hcbi8vIHN1YnN0cmluZyBmcm9tIG1vc3Qgc3BlY2lmaWMgdG8gbGVhc3QsIGJ1dCBtb3ZlIHRvIHRoZSBuZXh0IGFycmF5IGl0ZW0gaWYgaXQncyBhIG1vcmUgc3BlY2lmaWMgdmFyaWFudCB0aGFuIHRoZSBjdXJyZW50IHJvb3RcbmZ1bmN0aW9uIGNob29zZUxvY2FsZShuYW1lcykge1xuICAgIHZhciBpID0gMCxcbiAgICAgICAgaixcbiAgICAgICAgbmV4dCxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBzcGxpdDtcblxuICAgIHdoaWxlIChpIDwgbmFtZXMubGVuZ3RoKSB7XG4gICAgICAgIHNwbGl0ID0gbm9ybWFsaXplTG9jYWxlKG5hbWVzW2ldKS5zcGxpdCgnLScpO1xuICAgICAgICBqID0gc3BsaXQubGVuZ3RoO1xuICAgICAgICBuZXh0ID0gbm9ybWFsaXplTG9jYWxlKG5hbWVzW2kgKyAxXSk7XG4gICAgICAgIG5leHQgPSBuZXh0ID8gbmV4dC5zcGxpdCgnLScpIDogbnVsbDtcbiAgICAgICAgd2hpbGUgKGogPiAwKSB7XG4gICAgICAgICAgICBsb2NhbGUgPSBsb2FkTG9jYWxlKHNwbGl0LnNsaWNlKDAsIGopLmpvaW4oJy0nKSk7XG4gICAgICAgICAgICBpZiAobG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvY2FsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBuZXh0ICYmXG4gICAgICAgICAgICAgICAgbmV4dC5sZW5ndGggPj0gaiAmJlxuICAgICAgICAgICAgICAgIGNvbW1vblByZWZpeChzcGxpdCwgbmV4dCkgPj0gaiAtIDFcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIC8vdGhlIG5leHQgYXJyYXkgaXRlbSBpcyBiZXR0ZXIgdGhhbiBhIHNoYWxsb3dlciBzdWJzdHJpbmcgb2YgdGhpcyBvbmVcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGotLTtcbiAgICAgICAgfVxuICAgICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiBnbG9iYWxMb2NhbGU7XG59XG5cbmZ1bmN0aW9uIGlzTG9jYWxlTmFtZVNhbmUobmFtZSkge1xuICAgIC8vIFByZXZlbnQgbmFtZXMgdGhhdCBsb29rIGxpa2UgZmlsZXN5c3RlbSBwYXRocywgaS5lIGNvbnRhaW4gJy8nIG9yICdcXCdcbiAgICAvLyBFbnN1cmUgbmFtZSBpcyBhdmFpbGFibGUgYW5kIGZ1bmN0aW9uIHJldHVybnMgYm9vbGVhblxuICAgIHJldHVybiAhIShuYW1lICYmIG5hbWUubWF0Y2goJ15bXi9cXFxcXFxcXF0qJCcpKTtcbn1cblxuZnVuY3Rpb24gbG9hZExvY2FsZShuYW1lKSB7XG4gICAgdmFyIG9sZExvY2FsZSA9IG51bGwsXG4gICAgICAgIGFsaWFzZWRSZXF1aXJlO1xuICAgIC8vIFRPRE86IEZpbmQgYSBiZXR0ZXIgd2F5IHRvIHJlZ2lzdGVyIGFuZCBsb2FkIGFsbCB0aGUgbG9jYWxlcyBpbiBOb2RlXG4gICAgaWYgKFxuICAgICAgICBsb2NhbGVzW25hbWVdID09PSB1bmRlZmluZWQgJiZcbiAgICAgICAgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgbW9kdWxlICYmXG4gICAgICAgIG1vZHVsZS5leHBvcnRzICYmXG4gICAgICAgIGlzTG9jYWxlTmFtZVNhbmUobmFtZSlcbiAgICApIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG9sZExvY2FsZSA9IGdsb2JhbExvY2FsZS5fYWJicjtcbiAgICAgICAgICAgIGFsaWFzZWRSZXF1aXJlID0gcmVxdWlyZTtcbiAgICAgICAgICAgIGFsaWFzZWRSZXF1aXJlKCcuL2xvY2FsZS8nICsgbmFtZSk7XG4gICAgICAgICAgICBnZXRTZXRHbG9iYWxMb2NhbGUob2xkTG9jYWxlKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gbWFyayBhcyBub3QgZm91bmQgdG8gYXZvaWQgcmVwZWF0aW5nIGV4cGVuc2l2ZSBmaWxlIHJlcXVpcmUgY2FsbCBjYXVzaW5nIGhpZ2ggQ1BVXG4gICAgICAgICAgICAvLyB3aGVuIHRyeWluZyB0byBmaW5kIGVuLVVTLCBlbl9VUywgZW4tdXMgZm9yIGV2ZXJ5IGZvcm1hdCBjYWxsXG4gICAgICAgICAgICBsb2NhbGVzW25hbWVdID0gbnVsbDsgLy8gbnVsbCBtZWFucyBub3QgZm91bmRcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbG9jYWxlc1tuYW1lXTtcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGxvYWQgbG9jYWxlIGFuZCB0aGVuIHNldCB0aGUgZ2xvYmFsIGxvY2FsZS4gIElmXG4vLyBubyBhcmd1bWVudHMgYXJlIHBhc3NlZCBpbiwgaXQgd2lsbCBzaW1wbHkgcmV0dXJuIHRoZSBjdXJyZW50IGdsb2JhbFxuLy8gbG9jYWxlIGtleS5cbmZ1bmN0aW9uIGdldFNldEdsb2JhbExvY2FsZShrZXksIHZhbHVlcykge1xuICAgIHZhciBkYXRhO1xuICAgIGlmIChrZXkpIHtcbiAgICAgICAgaWYgKGlzVW5kZWZpbmVkKHZhbHVlcykpIHtcbiAgICAgICAgICAgIGRhdGEgPSBnZXRMb2NhbGUoa2V5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRhdGEgPSBkZWZpbmVMb2NhbGUoa2V5LCB2YWx1ZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIC8vIG1vbWVudC5kdXJhdGlvbi5fbG9jYWxlID0gbW9tZW50Ll9sb2NhbGUgPSBkYXRhO1xuICAgICAgICAgICAgZ2xvYmFsTG9jYWxlID0gZGF0YTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgY29uc29sZS53YXJuKSB7XG4gICAgICAgICAgICAgICAgLy93YXJuIHVzZXIgaWYgYXJndW1lbnRzIGFyZSBwYXNzZWQgYnV0IHRoZSBsb2NhbGUgY291bGQgbm90IGJlIHNldFxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICAgICAgJ0xvY2FsZSAnICsga2V5ICsgJyBub3QgZm91bmQuIERpZCB5b3UgZm9yZ2V0IHRvIGxvYWQgaXQ/J1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZ2xvYmFsTG9jYWxlLl9hYmJyO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVMb2NhbGUobmFtZSwgY29uZmlnKSB7XG4gICAgaWYgKGNvbmZpZyAhPT0gbnVsbCkge1xuICAgICAgICB2YXIgbG9jYWxlLFxuICAgICAgICAgICAgcGFyZW50Q29uZmlnID0gYmFzZUNvbmZpZztcbiAgICAgICAgY29uZmlnLmFiYnIgPSBuYW1lO1xuICAgICAgICBpZiAobG9jYWxlc1tuYW1lXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBkZXByZWNhdGVTaW1wbGUoXG4gICAgICAgICAgICAgICAgJ2RlZmluZUxvY2FsZU92ZXJyaWRlJyxcbiAgICAgICAgICAgICAgICAndXNlIG1vbWVudC51cGRhdGVMb2NhbGUobG9jYWxlTmFtZSwgY29uZmlnKSB0byBjaGFuZ2UgJyArXG4gICAgICAgICAgICAgICAgICAgICdhbiBleGlzdGluZyBsb2NhbGUuIG1vbWVudC5kZWZpbmVMb2NhbGUobG9jYWxlTmFtZSwgJyArXG4gICAgICAgICAgICAgICAgICAgICdjb25maWcpIHNob3VsZCBvbmx5IGJlIHVzZWQgZm9yIGNyZWF0aW5nIGEgbmV3IGxvY2FsZSAnICtcbiAgICAgICAgICAgICAgICAgICAgJ1NlZSBodHRwOi8vbW9tZW50anMuY29tL2d1aWRlcy8jL3dhcm5pbmdzL2RlZmluZS1sb2NhbGUvIGZvciBtb3JlIGluZm8uJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHBhcmVudENvbmZpZyA9IGxvY2FsZXNbbmFtZV0uX2NvbmZpZztcbiAgICAgICAgfSBlbHNlIGlmIChjb25maWcucGFyZW50TG9jYWxlICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChsb2NhbGVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRDb25maWcgPSBsb2NhbGVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdLl9jb25maWc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvY2FsZSA9IGxvYWRMb2NhbGUoY29uZmlnLnBhcmVudExvY2FsZSk7XG4gICAgICAgICAgICAgICAgaWYgKGxvY2FsZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudENvbmZpZyA9IGxvY2FsZS5fY29uZmlnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbG9jYWxlRmFtaWxpZXNbY29uZmlnLnBhcmVudExvY2FsZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZUZhbWlsaWVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdID0gW107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlRmFtaWxpZXNbY29uZmlnLnBhcmVudExvY2FsZV0ucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbG9jYWxlc1tuYW1lXSA9IG5ldyBMb2NhbGUobWVyZ2VDb25maWdzKHBhcmVudENvbmZpZywgY29uZmlnKSk7XG5cbiAgICAgICAgaWYgKGxvY2FsZUZhbWlsaWVzW25hbWVdKSB7XG4gICAgICAgICAgICBsb2NhbGVGYW1pbGllc1tuYW1lXS5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgZGVmaW5lTG9jYWxlKHgubmFtZSwgeC5jb25maWcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBiYWNrd2FyZHMgY29tcGF0IGZvciBub3c6IGFsc28gc2V0IHRoZSBsb2NhbGVcbiAgICAgICAgLy8gbWFrZSBzdXJlIHdlIHNldCB0aGUgbG9jYWxlIEFGVEVSIGFsbCBjaGlsZCBsb2NhbGVzIGhhdmUgYmVlblxuICAgICAgICAvLyBjcmVhdGVkLCBzbyB3ZSB3b24ndCBlbmQgdXAgd2l0aCB0aGUgY2hpbGQgbG9jYWxlIHNldC5cbiAgICAgICAgZ2V0U2V0R2xvYmFsTG9jYWxlKG5hbWUpO1xuXG4gICAgICAgIHJldHVybiBsb2NhbGVzW25hbWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHVzZWZ1bCBmb3IgdGVzdGluZ1xuICAgICAgICBkZWxldGUgbG9jYWxlc1tuYW1lXTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMb2NhbGUobmFtZSwgY29uZmlnKSB7XG4gICAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgICAgIHZhciBsb2NhbGUsXG4gICAgICAgICAgICB0bXBMb2NhbGUsXG4gICAgICAgICAgICBwYXJlbnRDb25maWcgPSBiYXNlQ29uZmlnO1xuXG4gICAgICAgIGlmIChsb2NhbGVzW25hbWVdICE9IG51bGwgJiYgbG9jYWxlc1tuYW1lXS5wYXJlbnRMb2NhbGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gVXBkYXRlIGV4aXN0aW5nIGNoaWxkIGxvY2FsZSBpbi1wbGFjZSB0byBhdm9pZCBtZW1vcnktbGVha3NcbiAgICAgICAgICAgIGxvY2FsZXNbbmFtZV0uc2V0KG1lcmdlQ29uZmlncyhsb2NhbGVzW25hbWVdLl9jb25maWcsIGNvbmZpZykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gTUVSR0VcbiAgICAgICAgICAgIHRtcExvY2FsZSA9IGxvYWRMb2NhbGUobmFtZSk7XG4gICAgICAgICAgICBpZiAodG1wTG9jYWxlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRDb25maWcgPSB0bXBMb2NhbGUuX2NvbmZpZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbmZpZyA9IG1lcmdlQ29uZmlncyhwYXJlbnRDb25maWcsIGNvbmZpZyk7XG4gICAgICAgICAgICBpZiAodG1wTG9jYWxlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyB1cGRhdGVMb2NhbGUgaXMgY2FsbGVkIGZvciBjcmVhdGluZyBhIG5ldyBsb2NhbGVcbiAgICAgICAgICAgICAgICAvLyBTZXQgYWJiciBzbyBpdCB3aWxsIGhhdmUgYSBuYW1lIChnZXR0ZXJzIHJldHVyblxuICAgICAgICAgICAgICAgIC8vIHVuZGVmaW5lZCBvdGhlcndpc2UpLlxuICAgICAgICAgICAgICAgIGNvbmZpZy5hYmJyID0gbmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvY2FsZSA9IG5ldyBMb2NhbGUoY29uZmlnKTtcbiAgICAgICAgICAgIGxvY2FsZS5wYXJlbnRMb2NhbGUgPSBsb2NhbGVzW25hbWVdO1xuICAgICAgICAgICAgbG9jYWxlc1tuYW1lXSA9IGxvY2FsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGJhY2t3YXJkcyBjb21wYXQgZm9yIG5vdzogYWxzbyBzZXQgdGhlIGxvY2FsZVxuICAgICAgICBnZXRTZXRHbG9iYWxMb2NhbGUobmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcGFzcyBudWxsIGZvciBjb25maWcgdG8gdW51cGRhdGUsIHVzZWZ1bCBmb3IgdGVzdHNcbiAgICAgICAgaWYgKGxvY2FsZXNbbmFtZV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGxvY2FsZXNbbmFtZV0ucGFyZW50TG9jYWxlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbGVzW25hbWVdID0gbG9jYWxlc1tuYW1lXS5wYXJlbnRMb2NhbGU7XG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09IGdldFNldEdsb2JhbExvY2FsZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGdldFNldEdsb2JhbExvY2FsZShuYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxvY2FsZXNbbmFtZV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBsb2NhbGVzW25hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBsb2NhbGVzW25hbWVdO1xufVxuXG4vLyByZXR1cm5zIGxvY2FsZSBkYXRhXG5mdW5jdGlvbiBnZXRMb2NhbGUoa2V5KSB7XG4gICAgdmFyIGxvY2FsZTtcblxuICAgIGlmIChrZXkgJiYga2V5Ll9sb2NhbGUgJiYga2V5Ll9sb2NhbGUuX2FiYnIpIHtcbiAgICAgICAga2V5ID0ga2V5Ll9sb2NhbGUuX2FiYnI7XG4gICAgfVxuXG4gICAgaWYgKCFrZXkpIHtcbiAgICAgICAgcmV0dXJuIGdsb2JhbExvY2FsZTtcbiAgICB9XG5cbiAgICBpZiAoIWlzQXJyYXkoa2V5KSkge1xuICAgICAgICAvL3Nob3J0LWNpcmN1aXQgZXZlcnl0aGluZyBlbHNlXG4gICAgICAgIGxvY2FsZSA9IGxvYWRMb2NhbGUoa2V5KTtcbiAgICAgICAgaWYgKGxvY2FsZSkge1xuICAgICAgICAgICAgcmV0dXJuIGxvY2FsZTtcbiAgICAgICAgfVxuICAgICAgICBrZXkgPSBba2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hvb3NlTG9jYWxlKGtleSk7XG59XG5cbmZ1bmN0aW9uIGxpc3RMb2NhbGVzKCkge1xuICAgIHJldHVybiBrZXlzKGxvY2FsZXMpO1xufVxuXG5mdW5jdGlvbiBjaGVja092ZXJmbG93KG0pIHtcbiAgICB2YXIgb3ZlcmZsb3csXG4gICAgICAgIGEgPSBtLl9hO1xuXG4gICAgaWYgKGEgJiYgZ2V0UGFyc2luZ0ZsYWdzKG0pLm92ZXJmbG93ID09PSAtMikge1xuICAgICAgICBvdmVyZmxvdyA9XG4gICAgICAgICAgICBhW01PTlRIXSA8IDAgfHwgYVtNT05USF0gPiAxMVxuICAgICAgICAgICAgICAgID8gTU9OVEhcbiAgICAgICAgICAgICAgICA6IGFbREFURV0gPCAxIHx8IGFbREFURV0gPiBkYXlzSW5Nb250aChhW1lFQVJdLCBhW01PTlRIXSlcbiAgICAgICAgICAgICAgICAgID8gREFURVxuICAgICAgICAgICAgICAgICAgOiBhW0hPVVJdIDwgMCB8fFxuICAgICAgICAgICAgICAgICAgICAgIGFbSE9VUl0gPiAyNCB8fFxuICAgICAgICAgICAgICAgICAgICAgIChhW0hPVVJdID09PSAyNCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAoYVtNSU5VVEVdICE9PSAwIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhW1NFQ09ORF0gIT09IDAgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFbTUlMTElTRUNPTkRdICE9PSAwKSlcbiAgICAgICAgICAgICAgICAgICAgPyBIT1VSXG4gICAgICAgICAgICAgICAgICAgIDogYVtNSU5VVEVdIDwgMCB8fCBhW01JTlVURV0gPiA1OVxuICAgICAgICAgICAgICAgICAgICAgID8gTUlOVVRFXG4gICAgICAgICAgICAgICAgICAgICAgOiBhW1NFQ09ORF0gPCAwIHx8IGFbU0VDT05EXSA+IDU5XG4gICAgICAgICAgICAgICAgICAgICAgICA/IFNFQ09ORFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBhW01JTExJU0VDT05EXSA8IDAgfHwgYVtNSUxMSVNFQ09ORF0gPiA5OTlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBNSUxMSVNFQ09ORFxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IC0xO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhtKS5fb3ZlcmZsb3dEYXlPZlllYXIgJiZcbiAgICAgICAgICAgIChvdmVyZmxvdyA8IFlFQVIgfHwgb3ZlcmZsb3cgPiBEQVRFKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIG92ZXJmbG93ID0gREFURTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2V0UGFyc2luZ0ZsYWdzKG0pLl9vdmVyZmxvd1dlZWtzICYmIG92ZXJmbG93ID09PSAtMSkge1xuICAgICAgICAgICAgb3ZlcmZsb3cgPSBXRUVLO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnZXRQYXJzaW5nRmxhZ3MobSkuX292ZXJmbG93V2Vla2RheSAmJiBvdmVyZmxvdyA9PT0gLTEpIHtcbiAgICAgICAgICAgIG92ZXJmbG93ID0gV0VFS0RBWTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhtKS5vdmVyZmxvdyA9IG92ZXJmbG93O1xuICAgIH1cblxuICAgIHJldHVybiBtO1xufVxuXG4vLyBpc28gODYwMSByZWdleFxuLy8gMDAwMC0wMC0wMCAwMDAwLVcwMCBvciAwMDAwLVcwMC0wICsgVCArIDAwIG9yIDAwOjAwIG9yIDAwOjAwOjAwIG9yIDAwOjAwOjAwLjAwMCArICswMDowMCBvciArMDAwMCBvciArMDApXG52YXIgZXh0ZW5kZWRJc29SZWdleCA9XG4gICAgICAgIC9eXFxzKigoPzpbKy1dXFxkezZ9fFxcZHs0fSktKD86XFxkXFxkLVxcZFxcZHxXXFxkXFxkLVxcZHxXXFxkXFxkfFxcZFxcZFxcZHxcXGRcXGQpKSg/OihUfCApKFxcZFxcZCg/OjpcXGRcXGQoPzo6XFxkXFxkKD86Wy4sXVxcZCspPyk/KT8pKFsrLV1cXGRcXGQoPzo6P1xcZFxcZCk/fFxccypaKT8pPyQvLFxuICAgIGJhc2ljSXNvUmVnZXggPVxuICAgICAgICAvXlxccyooKD86WystXVxcZHs2fXxcXGR7NH0pKD86XFxkXFxkXFxkXFxkfFdcXGRcXGRcXGR8V1xcZFxcZHxcXGRcXGRcXGR8XFxkXFxkfCkpKD86KFR8ICkoXFxkXFxkKD86XFxkXFxkKD86XFxkXFxkKD86Wy4sXVxcZCspPyk/KT8pKFsrLV1cXGRcXGQoPzo6P1xcZFxcZCk/fFxccypaKT8pPyQvLFxuICAgIHR6UmVnZXggPSAvWnxbKy1dXFxkXFxkKD86Oj9cXGRcXGQpPy8sXG4gICAgaXNvRGF0ZXMgPSBbXG4gICAgICAgIFsnWVlZWVlZLU1NLUREJywgL1srLV1cXGR7Nn0tXFxkXFxkLVxcZFxcZC9dLFxuICAgICAgICBbJ1lZWVktTU0tREQnLCAvXFxkezR9LVxcZFxcZC1cXGRcXGQvXSxcbiAgICAgICAgWydHR0dHLVtXXVdXLUUnLCAvXFxkezR9LVdcXGRcXGQtXFxkL10sXG4gICAgICAgIFsnR0dHRy1bV11XVycsIC9cXGR7NH0tV1xcZFxcZC8sIGZhbHNlXSxcbiAgICAgICAgWydZWVlZLURERCcsIC9cXGR7NH0tXFxkezN9L10sXG4gICAgICAgIFsnWVlZWS1NTScsIC9cXGR7NH0tXFxkXFxkLywgZmFsc2VdLFxuICAgICAgICBbJ1lZWVlZWU1NREQnLCAvWystXVxcZHsxMH0vXSxcbiAgICAgICAgWydZWVlZTU1ERCcsIC9cXGR7OH0vXSxcbiAgICAgICAgWydHR0dHW1ddV1dFJywgL1xcZHs0fVdcXGR7M30vXSxcbiAgICAgICAgWydHR0dHW1ddV1cnLCAvXFxkezR9V1xcZHsyfS8sIGZhbHNlXSxcbiAgICAgICAgWydZWVlZREREJywgL1xcZHs3fS9dLFxuICAgICAgICBbJ1lZWVlNTScsIC9cXGR7Nn0vLCBmYWxzZV0sXG4gICAgICAgIFsnWVlZWScsIC9cXGR7NH0vLCBmYWxzZV0sXG4gICAgXSxcbiAgICAvLyBpc28gdGltZSBmb3JtYXRzIGFuZCByZWdleGVzXG4gICAgaXNvVGltZXMgPSBbXG4gICAgICAgIFsnSEg6bW06c3MuU1NTUycsIC9cXGRcXGQ6XFxkXFxkOlxcZFxcZFxcLlxcZCsvXSxcbiAgICAgICAgWydISDptbTpzcyxTU1NTJywgL1xcZFxcZDpcXGRcXGQ6XFxkXFxkLFxcZCsvXSxcbiAgICAgICAgWydISDptbTpzcycsIC9cXGRcXGQ6XFxkXFxkOlxcZFxcZC9dLFxuICAgICAgICBbJ0hIOm1tJywgL1xcZFxcZDpcXGRcXGQvXSxcbiAgICAgICAgWydISG1tc3MuU1NTUycsIC9cXGRcXGRcXGRcXGRcXGRcXGRcXC5cXGQrL10sXG4gICAgICAgIFsnSEhtbXNzLFNTU1MnLCAvXFxkXFxkXFxkXFxkXFxkXFxkLFxcZCsvXSxcbiAgICAgICAgWydISG1tc3MnLCAvXFxkXFxkXFxkXFxkXFxkXFxkL10sXG4gICAgICAgIFsnSEhtbScsIC9cXGRcXGRcXGRcXGQvXSxcbiAgICAgICAgWydISCcsIC9cXGRcXGQvXSxcbiAgICBdLFxuICAgIGFzcE5ldEpzb25SZWdleCA9IC9eXFwvP0RhdGVcXCgoLT9cXGQrKS9pLFxuICAgIC8vIFJGQyAyODIyIHJlZ2V4OiBGb3IgZGV0YWlscyBzZWUgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzI4MjIjc2VjdGlvbi0zLjNcbiAgICByZmMyODIyID1cbiAgICAgICAgL14oPzooTW9ufFR1ZXxXZWR8VGh1fEZyaXxTYXR8U3VuKSw/XFxzKT8oXFxkezEsMn0pXFxzKEphbnxGZWJ8TWFyfEFwcnxNYXl8SnVufEp1bHxBdWd8U2VwfE9jdHxOb3Z8RGVjKVxccyhcXGR7Miw0fSlcXHMoXFxkXFxkKTooXFxkXFxkKSg/OjooXFxkXFxkKSk/XFxzKD86KFVUfEdNVHxbRUNNUF1bU0RdVCl8KFtael0pfChbKy1dXFxkezR9KSkkLyxcbiAgICBvYnNPZmZzZXRzID0ge1xuICAgICAgICBVVDogMCxcbiAgICAgICAgR01UOiAwLFxuICAgICAgICBFRFQ6IC00ICogNjAsXG4gICAgICAgIEVTVDogLTUgKiA2MCxcbiAgICAgICAgQ0RUOiAtNSAqIDYwLFxuICAgICAgICBDU1Q6IC02ICogNjAsXG4gICAgICAgIE1EVDogLTYgKiA2MCxcbiAgICAgICAgTVNUOiAtNyAqIDYwLFxuICAgICAgICBQRFQ6IC03ICogNjAsXG4gICAgICAgIFBTVDogLTggKiA2MCxcbiAgICB9O1xuXG4vLyBkYXRlIGZyb20gaXNvIGZvcm1hdFxuZnVuY3Rpb24gY29uZmlnRnJvbUlTTyhjb25maWcpIHtcbiAgICB2YXIgaSxcbiAgICAgICAgbCxcbiAgICAgICAgc3RyaW5nID0gY29uZmlnLl9pLFxuICAgICAgICBtYXRjaCA9IGV4dGVuZGVkSXNvUmVnZXguZXhlYyhzdHJpbmcpIHx8IGJhc2ljSXNvUmVnZXguZXhlYyhzdHJpbmcpLFxuICAgICAgICBhbGxvd1RpbWUsXG4gICAgICAgIGRhdGVGb3JtYXQsXG4gICAgICAgIHRpbWVGb3JtYXQsXG4gICAgICAgIHR6Rm9ybWF0LFxuICAgICAgICBpc29EYXRlc0xlbiA9IGlzb0RhdGVzLmxlbmd0aCxcbiAgICAgICAgaXNvVGltZXNMZW4gPSBpc29UaW1lcy5sZW5ndGg7XG5cbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuaXNvID0gdHJ1ZTtcbiAgICAgICAgZm9yIChpID0gMCwgbCA9IGlzb0RhdGVzTGVuOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaXNvRGF0ZXNbaV1bMV0uZXhlYyhtYXRjaFsxXSkpIHtcbiAgICAgICAgICAgICAgICBkYXRlRm9ybWF0ID0gaXNvRGF0ZXNbaV1bMF07XG4gICAgICAgICAgICAgICAgYWxsb3dUaW1lID0gaXNvRGF0ZXNbaV1bMl0gIT09IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRlRm9ybWF0ID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtYXRjaFszXSkge1xuICAgICAgICAgICAgZm9yIChpID0gMCwgbCA9IGlzb1RpbWVzTGVuOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzb1RpbWVzW2ldWzFdLmV4ZWMobWF0Y2hbM10pKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG1hdGNoWzJdIHNob3VsZCBiZSAnVCcgb3Igc3BhY2VcbiAgICAgICAgICAgICAgICAgICAgdGltZUZvcm1hdCA9IChtYXRjaFsyXSB8fCAnICcpICsgaXNvVGltZXNbaV1bMF07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aW1lRm9ybWF0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhbGxvd1RpbWUgJiYgdGltZUZvcm1hdCAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2hbNF0pIHtcbiAgICAgICAgICAgIGlmICh0elJlZ2V4LmV4ZWMobWF0Y2hbNF0pKSB7XG4gICAgICAgICAgICAgICAgdHpGb3JtYXQgPSAnWic7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25maWcuX2YgPSBkYXRlRm9ybWF0ICsgKHRpbWVGb3JtYXQgfHwgJycpICsgKHR6Rm9ybWF0IHx8ICcnKTtcbiAgICAgICAgY29uZmlnRnJvbVN0cmluZ0FuZEZvcm1hdChjb25maWcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZXh0cmFjdEZyb21SRkMyODIyU3RyaW5ncyhcbiAgICB5ZWFyU3RyLFxuICAgIG1vbnRoU3RyLFxuICAgIGRheVN0cixcbiAgICBob3VyU3RyLFxuICAgIG1pbnV0ZVN0cixcbiAgICBzZWNvbmRTdHJcbikge1xuICAgIHZhciByZXN1bHQgPSBbXG4gICAgICAgIHVudHJ1bmNhdGVZZWFyKHllYXJTdHIpLFxuICAgICAgICBkZWZhdWx0TG9jYWxlTW9udGhzU2hvcnQuaW5kZXhPZihtb250aFN0ciksXG4gICAgICAgIHBhcnNlSW50KGRheVN0ciwgMTApLFxuICAgICAgICBwYXJzZUludChob3VyU3RyLCAxMCksXG4gICAgICAgIHBhcnNlSW50KG1pbnV0ZVN0ciwgMTApLFxuICAgIF07XG5cbiAgICBpZiAoc2Vjb25kU3RyKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHBhcnNlSW50KHNlY29uZFN0ciwgMTApKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiB1bnRydW5jYXRlWWVhcih5ZWFyU3RyKSB7XG4gICAgdmFyIHllYXIgPSBwYXJzZUludCh5ZWFyU3RyLCAxMCk7XG4gICAgaWYgKHllYXIgPD0gNDkpIHtcbiAgICAgICAgcmV0dXJuIDIwMDAgKyB5ZWFyO1xuICAgIH0gZWxzZSBpZiAoeWVhciA8PSA5OTkpIHtcbiAgICAgICAgcmV0dXJuIDE5MDAgKyB5ZWFyO1xuICAgIH1cbiAgICByZXR1cm4geWVhcjtcbn1cblxuZnVuY3Rpb24gcHJlcHJvY2Vzc1JGQzI4MjIocykge1xuICAgIC8vIFJlbW92ZSBjb21tZW50cyBhbmQgZm9sZGluZyB3aGl0ZXNwYWNlIGFuZCByZXBsYWNlIG11bHRpcGxlLXNwYWNlcyB3aXRoIGEgc2luZ2xlIHNwYWNlXG4gICAgcmV0dXJuIHNcbiAgICAgICAgLnJlcGxhY2UoL1xcKFteKCldKlxcKXxbXFxuXFx0XS9nLCAnICcpXG4gICAgICAgIC5yZXBsYWNlKC8oXFxzXFxzKykvZywgJyAnKVxuICAgICAgICAucmVwbGFjZSgvXlxcc1xccyovLCAnJylcbiAgICAgICAgLnJlcGxhY2UoL1xcc1xccyokLywgJycpO1xufVxuXG5mdW5jdGlvbiBjaGVja1dlZWtkYXkod2Vla2RheVN0ciwgcGFyc2VkSW5wdXQsIGNvbmZpZykge1xuICAgIGlmICh3ZWVrZGF5U3RyKSB7XG4gICAgICAgIC8vIFRPRE86IFJlcGxhY2UgdGhlIHZhbmlsbGEgSlMgRGF0ZSBvYmplY3Qgd2l0aCBhbiBpbmRlcGVuZGVudCBkYXktb2Ytd2VlayBjaGVjay5cbiAgICAgICAgdmFyIHdlZWtkYXlQcm92aWRlZCA9IGRlZmF1bHRMb2NhbGVXZWVrZGF5c1Nob3J0LmluZGV4T2Yod2Vla2RheVN0ciksXG4gICAgICAgICAgICB3ZWVrZGF5QWN0dWFsID0gbmV3IERhdGUoXG4gICAgICAgICAgICAgICAgcGFyc2VkSW5wdXRbMF0sXG4gICAgICAgICAgICAgICAgcGFyc2VkSW5wdXRbMV0sXG4gICAgICAgICAgICAgICAgcGFyc2VkSW5wdXRbMl1cbiAgICAgICAgICAgICkuZ2V0RGF5KCk7XG4gICAgICAgIGlmICh3ZWVrZGF5UHJvdmlkZWQgIT09IHdlZWtkYXlBY3R1YWwpIHtcbiAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLndlZWtkYXlNaXNtYXRjaCA9IHRydWU7XG4gICAgICAgICAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlT2Zmc2V0KG9ic09mZnNldCwgbWlsaXRhcnlPZmZzZXQsIG51bU9mZnNldCkge1xuICAgIGlmIChvYnNPZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIG9ic09mZnNldHNbb2JzT2Zmc2V0XTtcbiAgICB9IGVsc2UgaWYgKG1pbGl0YXJ5T2Zmc2V0KSB7XG4gICAgICAgIC8vIHRoZSBvbmx5IGFsbG93ZWQgbWlsaXRhcnkgdHogaXMgWlxuICAgICAgICByZXR1cm4gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgaG0gPSBwYXJzZUludChudW1PZmZzZXQsIDEwKSxcbiAgICAgICAgICAgIG0gPSBobSAlIDEwMCxcbiAgICAgICAgICAgIGggPSAoaG0gLSBtKSAvIDEwMDtcbiAgICAgICAgcmV0dXJuIGggKiA2MCArIG07XG4gICAgfVxufVxuXG4vLyBkYXRlIGFuZCB0aW1lIGZyb20gcmVmIDI4MjIgZm9ybWF0XG5mdW5jdGlvbiBjb25maWdGcm9tUkZDMjgyMihjb25maWcpIHtcbiAgICB2YXIgbWF0Y2ggPSByZmMyODIyLmV4ZWMocHJlcHJvY2Vzc1JGQzI4MjIoY29uZmlnLl9pKSksXG4gICAgICAgIHBhcnNlZEFycmF5O1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgICBwYXJzZWRBcnJheSA9IGV4dHJhY3RGcm9tUkZDMjgyMlN0cmluZ3MoXG4gICAgICAgICAgICBtYXRjaFs0XSxcbiAgICAgICAgICAgIG1hdGNoWzNdLFxuICAgICAgICAgICAgbWF0Y2hbMl0sXG4gICAgICAgICAgICBtYXRjaFs1XSxcbiAgICAgICAgICAgIG1hdGNoWzZdLFxuICAgICAgICAgICAgbWF0Y2hbN11cbiAgICAgICAgKTtcbiAgICAgICAgaWYgKCFjaGVja1dlZWtkYXkobWF0Y2hbMV0sIHBhcnNlZEFycmF5LCBjb25maWcpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25maWcuX2EgPSBwYXJzZWRBcnJheTtcbiAgICAgICAgY29uZmlnLl90em0gPSBjYWxjdWxhdGVPZmZzZXQobWF0Y2hbOF0sIG1hdGNoWzldLCBtYXRjaFsxMF0pO1xuXG4gICAgICAgIGNvbmZpZy5fZCA9IGNyZWF0ZVVUQ0RhdGUuYXBwbHkobnVsbCwgY29uZmlnLl9hKTtcbiAgICAgICAgY29uZmlnLl9kLnNldFVUQ01pbnV0ZXMoY29uZmlnLl9kLmdldFVUQ01pbnV0ZXMoKSAtIGNvbmZpZy5fdHptKTtcblxuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5yZmMyODIyID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcbiAgICB9XG59XG5cbi8vIGRhdGUgZnJvbSAxKSBBU1AuTkVULCAyKSBJU08sIDMpIFJGQyAyODIyIGZvcm1hdHMsIG9yIDQpIG9wdGlvbmFsIGZhbGxiYWNrIGlmIHBhcnNpbmcgaXNuJ3Qgc3RyaWN0XG5mdW5jdGlvbiBjb25maWdGcm9tU3RyaW5nKGNvbmZpZykge1xuICAgIHZhciBtYXRjaGVkID0gYXNwTmV0SnNvblJlZ2V4LmV4ZWMoY29uZmlnLl9pKTtcbiAgICBpZiAobWF0Y2hlZCAhPT0gbnVsbCkge1xuICAgICAgICBjb25maWcuX2QgPSBuZXcgRGF0ZSgrbWF0Y2hlZFsxXSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25maWdGcm9tSVNPKGNvbmZpZyk7XG4gICAgaWYgKGNvbmZpZy5faXNWYWxpZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgZGVsZXRlIGNvbmZpZy5faXNWYWxpZDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uZmlnRnJvbVJGQzI4MjIoY29uZmlnKTtcbiAgICBpZiAoY29uZmlnLl9pc1ZhbGlkID09PSBmYWxzZSkge1xuICAgICAgICBkZWxldGUgY29uZmlnLl9pc1ZhbGlkO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLl9zdHJpY3QpIHtcbiAgICAgICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRmluYWwgYXR0ZW1wdCwgdXNlIElucHV0IEZhbGxiYWNrXG4gICAgICAgIGhvb2tzLmNyZWF0ZUZyb21JbnB1dEZhbGxiYWNrKGNvbmZpZyk7XG4gICAgfVxufVxuXG5ob29rcy5jcmVhdGVGcm9tSW5wdXRGYWxsYmFjayA9IGRlcHJlY2F0ZShcbiAgICAndmFsdWUgcHJvdmlkZWQgaXMgbm90IGluIGEgcmVjb2duaXplZCBSRkMyODIyIG9yIElTTyBmb3JtYXQuIG1vbWVudCBjb25zdHJ1Y3Rpb24gZmFsbHMgYmFjayB0byBqcyBEYXRlKCksICcgK1xuICAgICAgICAnd2hpY2ggaXMgbm90IHJlbGlhYmxlIGFjcm9zcyBhbGwgYnJvd3NlcnMgYW5kIHZlcnNpb25zLiBOb24gUkZDMjgyMi9JU08gZGF0ZSBmb3JtYXRzIGFyZSAnICtcbiAgICAgICAgJ2Rpc2NvdXJhZ2VkLiBQbGVhc2UgcmVmZXIgdG8gaHR0cDovL21vbWVudGpzLmNvbS9ndWlkZXMvIy93YXJuaW5ncy9qcy1kYXRlLyBmb3IgbW9yZSBpbmZvLicsXG4gICAgZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICBjb25maWcuX2QgPSBuZXcgRGF0ZShjb25maWcuX2kgKyAoY29uZmlnLl91c2VVVEMgPyAnIFVUQycgOiAnJykpO1xuICAgIH1cbik7XG5cbi8vIFBpY2sgdGhlIGZpcnN0IGRlZmluZWQgb2YgdHdvIG9yIHRocmVlIGFyZ3VtZW50cy5cbmZ1bmN0aW9uIGRlZmF1bHRzKGEsIGIsIGMpIHtcbiAgICBpZiAoYSAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiBhO1xuICAgIH1cbiAgICBpZiAoYiAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiBiO1xuICAgIH1cbiAgICByZXR1cm4gYztcbn1cblxuZnVuY3Rpb24gY3VycmVudERhdGVBcnJheShjb25maWcpIHtcbiAgICAvLyBob29rcyBpcyBhY3R1YWxseSB0aGUgZXhwb3J0ZWQgbW9tZW50IG9iamVjdFxuICAgIHZhciBub3dWYWx1ZSA9IG5ldyBEYXRlKGhvb2tzLm5vdygpKTtcbiAgICBpZiAoY29uZmlnLl91c2VVVEMpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIG5vd1ZhbHVlLmdldFVUQ0Z1bGxZZWFyKCksXG4gICAgICAgICAgICBub3dWYWx1ZS5nZXRVVENNb250aCgpLFxuICAgICAgICAgICAgbm93VmFsdWUuZ2V0VVRDRGF0ZSgpLFxuICAgICAgICBdO1xuICAgIH1cbiAgICByZXR1cm4gW25vd1ZhbHVlLmdldEZ1bGxZZWFyKCksIG5vd1ZhbHVlLmdldE1vbnRoKCksIG5vd1ZhbHVlLmdldERhdGUoKV07XG59XG5cbi8vIGNvbnZlcnQgYW4gYXJyYXkgdG8gYSBkYXRlLlxuLy8gdGhlIGFycmF5IHNob3VsZCBtaXJyb3IgdGhlIHBhcmFtZXRlcnMgYmVsb3dcbi8vIG5vdGU6IGFsbCB2YWx1ZXMgcGFzdCB0aGUgeWVhciBhcmUgb3B0aW9uYWwgYW5kIHdpbGwgZGVmYXVsdCB0byB0aGUgbG93ZXN0IHBvc3NpYmxlIHZhbHVlLlxuLy8gW3llYXIsIG1vbnRoLCBkYXkgLCBob3VyLCBtaW51dGUsIHNlY29uZCwgbWlsbGlzZWNvbmRdXG5mdW5jdGlvbiBjb25maWdGcm9tQXJyYXkoY29uZmlnKSB7XG4gICAgdmFyIGksXG4gICAgICAgIGRhdGUsXG4gICAgICAgIGlucHV0ID0gW10sXG4gICAgICAgIGN1cnJlbnREYXRlLFxuICAgICAgICBleHBlY3RlZFdlZWtkYXksXG4gICAgICAgIHllYXJUb1VzZTtcblxuICAgIGlmIChjb25maWcuX2QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGN1cnJlbnREYXRlID0gY3VycmVudERhdGVBcnJheShjb25maWcpO1xuXG4gICAgLy9jb21wdXRlIGRheSBvZiB0aGUgeWVhciBmcm9tIHdlZWtzIGFuZCB3ZWVrZGF5c1xuICAgIGlmIChjb25maWcuX3cgJiYgY29uZmlnLl9hW0RBVEVdID09IG51bGwgJiYgY29uZmlnLl9hW01PTlRIXSA9PSBudWxsKSB7XG4gICAgICAgIGRheU9mWWVhckZyb21XZWVrSW5mbyhjb25maWcpO1xuICAgIH1cblxuICAgIC8vaWYgdGhlIGRheSBvZiB0aGUgeWVhciBpcyBzZXQsIGZpZ3VyZSBvdXQgd2hhdCBpdCBpc1xuICAgIGlmIChjb25maWcuX2RheU9mWWVhciAhPSBudWxsKSB7XG4gICAgICAgIHllYXJUb1VzZSA9IGRlZmF1bHRzKGNvbmZpZy5fYVtZRUFSXSwgY3VycmVudERhdGVbWUVBUl0pO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGNvbmZpZy5fZGF5T2ZZZWFyID4gZGF5c0luWWVhcih5ZWFyVG9Vc2UpIHx8XG4gICAgICAgICAgICBjb25maWcuX2RheU9mWWVhciA9PT0gMFxuICAgICAgICApIHtcbiAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLl9vdmVyZmxvd0RheU9mWWVhciA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRlID0gY3JlYXRlVVRDRGF0ZSh5ZWFyVG9Vc2UsIDAsIGNvbmZpZy5fZGF5T2ZZZWFyKTtcbiAgICAgICAgY29uZmlnLl9hW01PTlRIXSA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICAgICAgY29uZmlnLl9hW0RBVEVdID0gZGF0ZS5nZXRVVENEYXRlKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCB0byBjdXJyZW50IGRhdGUuXG4gICAgLy8gKiBpZiBubyB5ZWFyLCBtb250aCwgZGF5IG9mIG1vbnRoIGFyZSBnaXZlbiwgZGVmYXVsdCB0byB0b2RheVxuICAgIC8vICogaWYgZGF5IG9mIG1vbnRoIGlzIGdpdmVuLCBkZWZhdWx0IG1vbnRoIGFuZCB5ZWFyXG4gICAgLy8gKiBpZiBtb250aCBpcyBnaXZlbiwgZGVmYXVsdCBvbmx5IHllYXJcbiAgICAvLyAqIGlmIHllYXIgaXMgZ2l2ZW4sIGRvbid0IGRlZmF1bHQgYW55dGhpbmdcbiAgICBmb3IgKGkgPSAwOyBpIDwgMyAmJiBjb25maWcuX2FbaV0gPT0gbnVsbDsgKytpKSB7XG4gICAgICAgIGNvbmZpZy5fYVtpXSA9IGlucHV0W2ldID0gY3VycmVudERhdGVbaV07XG4gICAgfVxuXG4gICAgLy8gWmVybyBvdXQgd2hhdGV2ZXIgd2FzIG5vdCBkZWZhdWx0ZWQsIGluY2x1ZGluZyB0aW1lXG4gICAgZm9yICg7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgY29uZmlnLl9hW2ldID0gaW5wdXRbaV0gPVxuICAgICAgICAgICAgY29uZmlnLl9hW2ldID09IG51bGwgPyAoaSA9PT0gMiA/IDEgOiAwKSA6IGNvbmZpZy5fYVtpXTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgMjQ6MDA6MDAuMDAwXG4gICAgaWYgKFxuICAgICAgICBjb25maWcuX2FbSE9VUl0gPT09IDI0ICYmXG4gICAgICAgIGNvbmZpZy5fYVtNSU5VVEVdID09PSAwICYmXG4gICAgICAgIGNvbmZpZy5fYVtTRUNPTkRdID09PSAwICYmXG4gICAgICAgIGNvbmZpZy5fYVtNSUxMSVNFQ09ORF0gPT09IDBcbiAgICApIHtcbiAgICAgICAgY29uZmlnLl9uZXh0RGF5ID0gdHJ1ZTtcbiAgICAgICAgY29uZmlnLl9hW0hPVVJdID0gMDtcbiAgICB9XG5cbiAgICBjb25maWcuX2QgPSAoY29uZmlnLl91c2VVVEMgPyBjcmVhdGVVVENEYXRlIDogY3JlYXRlRGF0ZSkuYXBwbHkoXG4gICAgICAgIG51bGwsXG4gICAgICAgIGlucHV0XG4gICAgKTtcbiAgICBleHBlY3RlZFdlZWtkYXkgPSBjb25maWcuX3VzZVVUQ1xuICAgICAgICA/IGNvbmZpZy5fZC5nZXRVVENEYXkoKVxuICAgICAgICA6IGNvbmZpZy5fZC5nZXREYXkoKTtcblxuICAgIC8vIEFwcGx5IHRpbWV6b25lIG9mZnNldCBmcm9tIGlucHV0LiBUaGUgYWN0dWFsIHV0Y09mZnNldCBjYW4gYmUgY2hhbmdlZFxuICAgIC8vIHdpdGggcGFyc2Vab25lLlxuICAgIGlmIChjb25maWcuX3R6bSAhPSBudWxsKSB7XG4gICAgICAgIGNvbmZpZy5fZC5zZXRVVENNaW51dGVzKGNvbmZpZy5fZC5nZXRVVENNaW51dGVzKCkgLSBjb25maWcuX3R6bSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5fbmV4dERheSkge1xuICAgICAgICBjb25maWcuX2FbSE9VUl0gPSAyNDtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBmb3IgbWlzbWF0Y2hpbmcgZGF5IG9mIHdlZWtcbiAgICBpZiAoXG4gICAgICAgIGNvbmZpZy5fdyAmJlxuICAgICAgICB0eXBlb2YgY29uZmlnLl93LmQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIGNvbmZpZy5fdy5kICE9PSBleHBlY3RlZFdlZWtkYXlcbiAgICApIHtcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykud2Vla2RheU1pc21hdGNoID0gdHJ1ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRheU9mWWVhckZyb21XZWVrSW5mbyhjb25maWcpIHtcbiAgICB2YXIgdywgd2Vla1llYXIsIHdlZWssIHdlZWtkYXksIGRvdywgZG95LCB0ZW1wLCB3ZWVrZGF5T3ZlcmZsb3csIGN1cldlZWs7XG5cbiAgICB3ID0gY29uZmlnLl93O1xuICAgIGlmICh3LkdHICE9IG51bGwgfHwgdy5XICE9IG51bGwgfHwgdy5FICE9IG51bGwpIHtcbiAgICAgICAgZG93ID0gMTtcbiAgICAgICAgZG95ID0gNDtcblxuICAgICAgICAvLyBUT0RPOiBXZSBuZWVkIHRvIHRha2UgdGhlIGN1cnJlbnQgaXNvV2Vla1llYXIsIGJ1dCB0aGF0IGRlcGVuZHMgb25cbiAgICAgICAgLy8gaG93IHdlIGludGVycHJldCBub3cgKGxvY2FsLCB1dGMsIGZpeGVkIG9mZnNldCkuIFNvIGNyZWF0ZVxuICAgICAgICAvLyBhIG5vdyB2ZXJzaW9uIG9mIGN1cnJlbnQgY29uZmlnICh0YWtlIGxvY2FsL3V0Yy9vZmZzZXQgZmxhZ3MsIGFuZFxuICAgICAgICAvLyBjcmVhdGUgbm93KS5cbiAgICAgICAgd2Vla1llYXIgPSBkZWZhdWx0cyhcbiAgICAgICAgICAgIHcuR0csXG4gICAgICAgICAgICBjb25maWcuX2FbWUVBUl0sXG4gICAgICAgICAgICB3ZWVrT2ZZZWFyKGNyZWF0ZUxvY2FsKCksIDEsIDQpLnllYXJcbiAgICAgICAgKTtcbiAgICAgICAgd2VlayA9IGRlZmF1bHRzKHcuVywgMSk7XG4gICAgICAgIHdlZWtkYXkgPSBkZWZhdWx0cyh3LkUsIDEpO1xuICAgICAgICBpZiAod2Vla2RheSA8IDEgfHwgd2Vla2RheSA+IDcpIHtcbiAgICAgICAgICAgIHdlZWtkYXlPdmVyZmxvdyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBkb3cgPSBjb25maWcuX2xvY2FsZS5fd2Vlay5kb3c7XG4gICAgICAgIGRveSA9IGNvbmZpZy5fbG9jYWxlLl93ZWVrLmRveTtcblxuICAgICAgICBjdXJXZWVrID0gd2Vla09mWWVhcihjcmVhdGVMb2NhbCgpLCBkb3csIGRveSk7XG5cbiAgICAgICAgd2Vla1llYXIgPSBkZWZhdWx0cyh3LmdnLCBjb25maWcuX2FbWUVBUl0sIGN1cldlZWsueWVhcik7XG5cbiAgICAgICAgLy8gRGVmYXVsdCB0byBjdXJyZW50IHdlZWsuXG4gICAgICAgIHdlZWsgPSBkZWZhdWx0cyh3LncsIGN1cldlZWsud2Vlayk7XG5cbiAgICAgICAgaWYgKHcuZCAhPSBudWxsKSB7XG4gICAgICAgICAgICAvLyB3ZWVrZGF5IC0tIGxvdyBkYXkgbnVtYmVycyBhcmUgY29uc2lkZXJlZCBuZXh0IHdlZWtcbiAgICAgICAgICAgIHdlZWtkYXkgPSB3LmQ7XG4gICAgICAgICAgICBpZiAod2Vla2RheSA8IDAgfHwgd2Vla2RheSA+IDYpIHtcbiAgICAgICAgICAgICAgICB3ZWVrZGF5T3ZlcmZsb3cgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHcuZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAvLyBsb2NhbCB3ZWVrZGF5IC0tIGNvdW50aW5nIHN0YXJ0cyBmcm9tIGJlZ2lubmluZyBvZiB3ZWVrXG4gICAgICAgICAgICB3ZWVrZGF5ID0gdy5lICsgZG93O1xuICAgICAgICAgICAgaWYgKHcuZSA8IDAgfHwgdy5lID4gNikge1xuICAgICAgICAgICAgICAgIHdlZWtkYXlPdmVyZmxvdyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBkZWZhdWx0IHRvIGJlZ2lubmluZyBvZiB3ZWVrXG4gICAgICAgICAgICB3ZWVrZGF5ID0gZG93O1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh3ZWVrIDwgMSB8fCB3ZWVrID4gd2Vla3NJblllYXIod2Vla1llYXIsIGRvdywgZG95KSkge1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5fb3ZlcmZsb3dXZWVrcyA9IHRydWU7XG4gICAgfSBlbHNlIGlmICh3ZWVrZGF5T3ZlcmZsb3cgIT0gbnVsbCkge1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5fb3ZlcmZsb3dXZWVrZGF5ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0ZW1wID0gZGF5T2ZZZWFyRnJvbVdlZWtzKHdlZWtZZWFyLCB3ZWVrLCB3ZWVrZGF5LCBkb3csIGRveSk7XG4gICAgICAgIGNvbmZpZy5fYVtZRUFSXSA9IHRlbXAueWVhcjtcbiAgICAgICAgY29uZmlnLl9kYXlPZlllYXIgPSB0ZW1wLmRheU9mWWVhcjtcbiAgICB9XG59XG5cbi8vIGNvbnN0YW50IHRoYXQgcmVmZXJzIHRvIHRoZSBJU08gc3RhbmRhcmRcbmhvb2tzLklTT184NjAxID0gZnVuY3Rpb24gKCkge307XG5cbi8vIGNvbnN0YW50IHRoYXQgcmVmZXJzIHRvIHRoZSBSRkMgMjgyMiBmb3JtXG5ob29rcy5SRkNfMjgyMiA9IGZ1bmN0aW9uICgpIHt9O1xuXG4vLyBkYXRlIGZyb20gc3RyaW5nIGFuZCBmb3JtYXQgc3RyaW5nXG5mdW5jdGlvbiBjb25maWdGcm9tU3RyaW5nQW5kRm9ybWF0KGNvbmZpZykge1xuICAgIC8vIFRPRE86IE1vdmUgdGhpcyB0byBhbm90aGVyIHBhcnQgb2YgdGhlIGNyZWF0aW9uIGZsb3cgdG8gcHJldmVudCBjaXJjdWxhciBkZXBzXG4gICAgaWYgKGNvbmZpZy5fZiA9PT0gaG9va3MuSVNPXzg2MDEpIHtcbiAgICAgICAgY29uZmlnRnJvbUlTTyhjb25maWcpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjb25maWcuX2YgPT09IGhvb2tzLlJGQ18yODIyKSB7XG4gICAgICAgIGNvbmZpZ0Zyb21SRkMyODIyKGNvbmZpZyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uZmlnLl9hID0gW107XG4gICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuZW1wdHkgPSB0cnVlO1xuXG4gICAgLy8gVGhpcyBhcnJheSBpcyB1c2VkIHRvIG1ha2UgYSBEYXRlLCBlaXRoZXIgd2l0aCBgbmV3IERhdGVgIG9yIGBEYXRlLlVUQ2BcbiAgICB2YXIgc3RyaW5nID0gJycgKyBjb25maWcuX2ksXG4gICAgICAgIGksXG4gICAgICAgIHBhcnNlZElucHV0LFxuICAgICAgICB0b2tlbnMsXG4gICAgICAgIHRva2VuLFxuICAgICAgICBza2lwcGVkLFxuICAgICAgICBzdHJpbmdMZW5ndGggPSBzdHJpbmcubGVuZ3RoLFxuICAgICAgICB0b3RhbFBhcnNlZElucHV0TGVuZ3RoID0gMCxcbiAgICAgICAgZXJhLFxuICAgICAgICB0b2tlbkxlbjtcblxuICAgIHRva2VucyA9XG4gICAgICAgIGV4cGFuZEZvcm1hdChjb25maWcuX2YsIGNvbmZpZy5fbG9jYWxlKS5tYXRjaChmb3JtYXR0aW5nVG9rZW5zKSB8fCBbXTtcbiAgICB0b2tlbkxlbiA9IHRva2Vucy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IHRva2VuTGVuOyBpKyspIHtcbiAgICAgICAgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgIHBhcnNlZElucHV0ID0gKHN0cmluZy5tYXRjaChnZXRQYXJzZVJlZ2V4Rm9yVG9rZW4odG9rZW4sIGNvbmZpZykpIHx8XG4gICAgICAgICAgICBbXSlbMF07XG4gICAgICAgIGlmIChwYXJzZWRJbnB1dCkge1xuICAgICAgICAgICAgc2tpcHBlZCA9IHN0cmluZy5zdWJzdHIoMCwgc3RyaW5nLmluZGV4T2YocGFyc2VkSW5wdXQpKTtcbiAgICAgICAgICAgIGlmIChza2lwcGVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS51bnVzZWRJbnB1dC5wdXNoKHNraXBwZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nLnNsaWNlKFxuICAgICAgICAgICAgICAgIHN0cmluZy5pbmRleE9mKHBhcnNlZElucHV0KSArIHBhcnNlZElucHV0Lmxlbmd0aFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRvdGFsUGFyc2VkSW5wdXRMZW5ndGggKz0gcGFyc2VkSW5wdXQubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIC8vIGRvbid0IHBhcnNlIGlmIGl0J3Mgbm90IGEga25vd24gdG9rZW5cbiAgICAgICAgaWYgKGZvcm1hdFRva2VuRnVuY3Rpb25zW3Rva2VuXSkge1xuICAgICAgICAgICAgaWYgKHBhcnNlZElucHV0KSB7XG4gICAgICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuZW1wdHkgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykudW51c2VkVG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWRkVGltZVRvQXJyYXlGcm9tVG9rZW4odG9rZW4sIHBhcnNlZElucHV0LCBjb25maWcpO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbmZpZy5fc3RyaWN0ICYmICFwYXJzZWRJbnB1dCkge1xuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykudW51c2VkVG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gYWRkIHJlbWFpbmluZyB1bnBhcnNlZCBpbnB1dCBsZW5ndGggdG8gdGhlIHN0cmluZ1xuICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmNoYXJzTGVmdE92ZXIgPVxuICAgICAgICBzdHJpbmdMZW5ndGggLSB0b3RhbFBhcnNlZElucHV0TGVuZ3RoO1xuICAgIGlmIChzdHJpbmcubGVuZ3RoID4gMCkge1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS51bnVzZWRJbnB1dC5wdXNoKHN0cmluZyk7XG4gICAgfVxuXG4gICAgLy8gY2xlYXIgXzEyaCBmbGFnIGlmIGhvdXIgaXMgPD0gMTJcbiAgICBpZiAoXG4gICAgICAgIGNvbmZpZy5fYVtIT1VSXSA8PSAxMiAmJlxuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5iaWdIb3VyID09PSB0cnVlICYmXG4gICAgICAgIGNvbmZpZy5fYVtIT1VSXSA+IDBcbiAgICApIHtcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuYmlnSG91ciA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5wYXJzZWREYXRlUGFydHMgPSBjb25maWcuX2Euc2xpY2UoMCk7XG4gICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykubWVyaWRpZW0gPSBjb25maWcuX21lcmlkaWVtO1xuICAgIC8vIGhhbmRsZSBtZXJpZGllbVxuICAgIGNvbmZpZy5fYVtIT1VSXSA9IG1lcmlkaWVtRml4V3JhcChcbiAgICAgICAgY29uZmlnLl9sb2NhbGUsXG4gICAgICAgIGNvbmZpZy5fYVtIT1VSXSxcbiAgICAgICAgY29uZmlnLl9tZXJpZGllbVxuICAgICk7XG5cbiAgICAvLyBoYW5kbGUgZXJhXG4gICAgZXJhID0gZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuZXJhO1xuICAgIGlmIChlcmEgIT09IG51bGwpIHtcbiAgICAgICAgY29uZmlnLl9hW1lFQVJdID0gY29uZmlnLl9sb2NhbGUuZXJhc0NvbnZlcnRZZWFyKGVyYSwgY29uZmlnLl9hW1lFQVJdKTtcbiAgICB9XG5cbiAgICBjb25maWdGcm9tQXJyYXkoY29uZmlnKTtcbiAgICBjaGVja092ZXJmbG93KGNvbmZpZyk7XG59XG5cbmZ1bmN0aW9uIG1lcmlkaWVtRml4V3JhcChsb2NhbGUsIGhvdXIsIG1lcmlkaWVtKSB7XG4gICAgdmFyIGlzUG07XG5cbiAgICBpZiAobWVyaWRpZW0gPT0gbnVsbCkge1xuICAgICAgICAvLyBub3RoaW5nIHRvIGRvXG4gICAgICAgIHJldHVybiBob3VyO1xuICAgIH1cbiAgICBpZiAobG9jYWxlLm1lcmlkaWVtSG91ciAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUubWVyaWRpZW1Ib3VyKGhvdXIsIG1lcmlkaWVtKTtcbiAgICB9IGVsc2UgaWYgKGxvY2FsZS5pc1BNICE9IG51bGwpIHtcbiAgICAgICAgLy8gRmFsbGJhY2tcbiAgICAgICAgaXNQbSA9IGxvY2FsZS5pc1BNKG1lcmlkaWVtKTtcbiAgICAgICAgaWYgKGlzUG0gJiYgaG91ciA8IDEyKSB7XG4gICAgICAgICAgICBob3VyICs9IDEyO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNQbSAmJiBob3VyID09PSAxMikge1xuICAgICAgICAgICAgaG91ciA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhvdXI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdGhpcyBpcyBub3Qgc3VwcG9zZWQgdG8gaGFwcGVuXG4gICAgICAgIHJldHVybiBob3VyO1xuICAgIH1cbn1cblxuLy8gZGF0ZSBmcm9tIHN0cmluZyBhbmQgYXJyYXkgb2YgZm9ybWF0IHN0cmluZ3NcbmZ1bmN0aW9uIGNvbmZpZ0Zyb21TdHJpbmdBbmRBcnJheShjb25maWcpIHtcbiAgICB2YXIgdGVtcENvbmZpZyxcbiAgICAgICAgYmVzdE1vbWVudCxcbiAgICAgICAgc2NvcmVUb0JlYXQsXG4gICAgICAgIGksXG4gICAgICAgIGN1cnJlbnRTY29yZSxcbiAgICAgICAgdmFsaWRGb3JtYXRGb3VuZCxcbiAgICAgICAgYmVzdEZvcm1hdElzVmFsaWQgPSBmYWxzZSxcbiAgICAgICAgY29uZmlnZkxlbiA9IGNvbmZpZy5fZi5sZW5ndGg7XG5cbiAgICBpZiAoY29uZmlnZkxlbiA9PT0gMCkge1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5pbnZhbGlkRm9ybWF0ID0gdHJ1ZTtcbiAgICAgICAgY29uZmlnLl9kID0gbmV3IERhdGUoTmFOKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBjb25maWdmTGVuOyBpKyspIHtcbiAgICAgICAgY3VycmVudFNjb3JlID0gMDtcbiAgICAgICAgdmFsaWRGb3JtYXRGb3VuZCA9IGZhbHNlO1xuICAgICAgICB0ZW1wQ29uZmlnID0gY29weUNvbmZpZyh7fSwgY29uZmlnKTtcbiAgICAgICAgaWYgKGNvbmZpZy5fdXNlVVRDICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRlbXBDb25maWcuX3VzZVVUQyA9IGNvbmZpZy5fdXNlVVRDO1xuICAgICAgICB9XG4gICAgICAgIHRlbXBDb25maWcuX2YgPSBjb25maWcuX2ZbaV07XG4gICAgICAgIGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQodGVtcENvbmZpZyk7XG5cbiAgICAgICAgaWYgKGlzVmFsaWQodGVtcENvbmZpZykpIHtcbiAgICAgICAgICAgIHZhbGlkRm9ybWF0Rm91bmQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgYW55IGlucHV0IHRoYXQgd2FzIG5vdCBwYXJzZWQgYWRkIGEgcGVuYWx0eSBmb3IgdGhhdCBmb3JtYXRcbiAgICAgICAgY3VycmVudFNjb3JlICs9IGdldFBhcnNpbmdGbGFncyh0ZW1wQ29uZmlnKS5jaGFyc0xlZnRPdmVyO1xuXG4gICAgICAgIC8vb3IgdG9rZW5zXG4gICAgICAgIGN1cnJlbnRTY29yZSArPSBnZXRQYXJzaW5nRmxhZ3ModGVtcENvbmZpZykudW51c2VkVG9rZW5zLmxlbmd0aCAqIDEwO1xuXG4gICAgICAgIGdldFBhcnNpbmdGbGFncyh0ZW1wQ29uZmlnKS5zY29yZSA9IGN1cnJlbnRTY29yZTtcblxuICAgICAgICBpZiAoIWJlc3RGb3JtYXRJc1ZhbGlkKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgc2NvcmVUb0JlYXQgPT0gbnVsbCB8fFxuICAgICAgICAgICAgICAgIGN1cnJlbnRTY29yZSA8IHNjb3JlVG9CZWF0IHx8XG4gICAgICAgICAgICAgICAgdmFsaWRGb3JtYXRGb3VuZFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgc2NvcmVUb0JlYXQgPSBjdXJyZW50U2NvcmU7XG4gICAgICAgICAgICAgICAgYmVzdE1vbWVudCA9IHRlbXBDb25maWc7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkRm9ybWF0Rm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgYmVzdEZvcm1hdElzVmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50U2NvcmUgPCBzY29yZVRvQmVhdCkge1xuICAgICAgICAgICAgICAgIHNjb3JlVG9CZWF0ID0gY3VycmVudFNjb3JlO1xuICAgICAgICAgICAgICAgIGJlc3RNb21lbnQgPSB0ZW1wQ29uZmlnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXh0ZW5kKGNvbmZpZywgYmVzdE1vbWVudCB8fCB0ZW1wQ29uZmlnKTtcbn1cblxuZnVuY3Rpb24gY29uZmlnRnJvbU9iamVjdChjb25maWcpIHtcbiAgICBpZiAoY29uZmlnLl9kKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgaSA9IG5vcm1hbGl6ZU9iamVjdFVuaXRzKGNvbmZpZy5faSksXG4gICAgICAgIGRheU9yRGF0ZSA9IGkuZGF5ID09PSB1bmRlZmluZWQgPyBpLmRhdGUgOiBpLmRheTtcbiAgICBjb25maWcuX2EgPSBtYXAoXG4gICAgICAgIFtpLnllYXIsIGkubW9udGgsIGRheU9yRGF0ZSwgaS5ob3VyLCBpLm1pbnV0ZSwgaS5zZWNvbmQsIGkubWlsbGlzZWNvbmRdLFxuICAgICAgICBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqICYmIHBhcnNlSW50KG9iaiwgMTApO1xuICAgICAgICB9XG4gICAgKTtcblxuICAgIGNvbmZpZ0Zyb21BcnJheShjb25maWcpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGcm9tQ29uZmlnKGNvbmZpZykge1xuICAgIHZhciByZXMgPSBuZXcgTW9tZW50KGNoZWNrT3ZlcmZsb3cocHJlcGFyZUNvbmZpZyhjb25maWcpKSk7XG4gICAgaWYgKHJlcy5fbmV4dERheSkge1xuICAgICAgICAvLyBBZGRpbmcgaXMgc21hcnQgZW5vdWdoIGFyb3VuZCBEU1RcbiAgICAgICAgcmVzLmFkZCgxLCAnZCcpO1xuICAgICAgICByZXMuX25leHREYXkgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbn1cblxuZnVuY3Rpb24gcHJlcGFyZUNvbmZpZyhjb25maWcpIHtcbiAgICB2YXIgaW5wdXQgPSBjb25maWcuX2ksXG4gICAgICAgIGZvcm1hdCA9IGNvbmZpZy5fZjtcblxuICAgIGNvbmZpZy5fbG9jYWxlID0gY29uZmlnLl9sb2NhbGUgfHwgZ2V0TG9jYWxlKGNvbmZpZy5fbCk7XG5cbiAgICBpZiAoaW5wdXQgPT09IG51bGwgfHwgKGZvcm1hdCA9PT0gdW5kZWZpbmVkICYmIGlucHV0ID09PSAnJykpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUludmFsaWQoeyBudWxsSW5wdXQ6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uZmlnLl9pID0gaW5wdXQgPSBjb25maWcuX2xvY2FsZS5wcmVwYXJzZShpbnB1dCk7XG4gICAgfVxuXG4gICAgaWYgKGlzTW9tZW50KGlucHV0KSkge1xuICAgICAgICByZXR1cm4gbmV3IE1vbWVudChjaGVja092ZXJmbG93KGlucHV0KSk7XG4gICAgfSBlbHNlIGlmIChpc0RhdGUoaW5wdXQpKSB7XG4gICAgICAgIGNvbmZpZy5fZCA9IGlucHV0O1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheShmb3JtYXQpKSB7XG4gICAgICAgIGNvbmZpZ0Zyb21TdHJpbmdBbmRBcnJheShjb25maWcpO1xuICAgIH0gZWxzZSBpZiAoZm9ybWF0KSB7XG4gICAgICAgIGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQoY29uZmlnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25maWdGcm9tSW5wdXQoY29uZmlnKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzVmFsaWQoY29uZmlnKSkge1xuICAgICAgICBjb25maWcuX2QgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjb25maWc7XG59XG5cbmZ1bmN0aW9uIGNvbmZpZ0Zyb21JbnB1dChjb25maWcpIHtcbiAgICB2YXIgaW5wdXQgPSBjb25maWcuX2k7XG4gICAgaWYgKGlzVW5kZWZpbmVkKGlucHV0KSkge1xuICAgICAgICBjb25maWcuX2QgPSBuZXcgRGF0ZShob29rcy5ub3coKSk7XG4gICAgfSBlbHNlIGlmIChpc0RhdGUoaW5wdXQpKSB7XG4gICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKGlucHV0LnZhbHVlT2YoKSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbmZpZ0Zyb21TdHJpbmcoY29uZmlnKTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkoaW5wdXQpKSB7XG4gICAgICAgIGNvbmZpZy5fYSA9IG1hcChpbnB1dC5zbGljZSgwKSwgZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KG9iaiwgMTApO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uZmlnRnJvbUFycmF5KGNvbmZpZyk7XG4gICAgfSBlbHNlIGlmIChpc09iamVjdChpbnB1dCkpIHtcbiAgICAgICAgY29uZmlnRnJvbU9iamVjdChjb25maWcpO1xuICAgIH0gZWxzZSBpZiAoaXNOdW1iZXIoaW5wdXQpKSB7XG4gICAgICAgIC8vIGZyb20gbWlsbGlzZWNvbmRzXG4gICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKGlucHV0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBob29rcy5jcmVhdGVGcm9tSW5wdXRGYWxsYmFjayhjb25maWcpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlTG9jYWxPclVUQyhpbnB1dCwgZm9ybWF0LCBsb2NhbGUsIHN0cmljdCwgaXNVVEMpIHtcbiAgICB2YXIgYyA9IHt9O1xuXG4gICAgaWYgKGZvcm1hdCA9PT0gdHJ1ZSB8fCBmb3JtYXQgPT09IGZhbHNlKSB7XG4gICAgICAgIHN0cmljdCA9IGZvcm1hdDtcbiAgICAgICAgZm9ybWF0ID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmIChsb2NhbGUgPT09IHRydWUgfHwgbG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICBzdHJpY3QgPSBsb2NhbGU7XG4gICAgICAgIGxvY2FsZSA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAgIChpc09iamVjdChpbnB1dCkgJiYgaXNPYmplY3RFbXB0eShpbnB1dCkpIHx8XG4gICAgICAgIChpc0FycmF5KGlucHV0KSAmJiBpbnB1dC5sZW5ndGggPT09IDApXG4gICAgKSB7XG4gICAgICAgIGlucHV0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvLyBvYmplY3QgY29uc3RydWN0aW9uIG11c3QgYmUgZG9uZSB0aGlzIHdheS5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9pc3N1ZXMvMTQyM1xuICAgIGMuX2lzQU1vbWVudE9iamVjdCA9IHRydWU7XG4gICAgYy5fdXNlVVRDID0gYy5faXNVVEMgPSBpc1VUQztcbiAgICBjLl9sID0gbG9jYWxlO1xuICAgIGMuX2kgPSBpbnB1dDtcbiAgICBjLl9mID0gZm9ybWF0O1xuICAgIGMuX3N0cmljdCA9IHN0cmljdDtcblxuICAgIHJldHVybiBjcmVhdGVGcm9tQ29uZmlnKGMpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMb2NhbChpbnB1dCwgZm9ybWF0LCBsb2NhbGUsIHN0cmljdCkge1xuICAgIHJldHVybiBjcmVhdGVMb2NhbE9yVVRDKGlucHV0LCBmb3JtYXQsIGxvY2FsZSwgc3RyaWN0LCBmYWxzZSk7XG59XG5cbnZhciBwcm90b3R5cGVNaW4gPSBkZXByZWNhdGUoXG4gICAgICAgICdtb21lbnQoKS5taW4gaXMgZGVwcmVjYXRlZCwgdXNlIG1vbWVudC5tYXggaW5zdGVhZC4gaHR0cDovL21vbWVudGpzLmNvbS9ndWlkZXMvIy93YXJuaW5ncy9taW4tbWF4LycsXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBvdGhlciA9IGNyZWF0ZUxvY2FsLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1ZhbGlkKCkgJiYgb3RoZXIuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG90aGVyIDwgdGhpcyA/IHRoaXMgOiBvdGhlcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUludmFsaWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICksXG4gICAgcHJvdG90eXBlTWF4ID0gZGVwcmVjYXRlKFxuICAgICAgICAnbW9tZW50KCkubWF4IGlzIGRlcHJlY2F0ZWQsIHVzZSBtb21lbnQubWluIGluc3RlYWQuIGh0dHA6Ly9tb21lbnRqcy5jb20vZ3VpZGVzLyMvd2FybmluZ3MvbWluLW1heC8nLFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgb3RoZXIgPSBjcmVhdGVMb2NhbC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWxpZCgpICYmIG90aGVyLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvdGhlciA+IHRoaXMgPyB0aGlzIDogb3RoZXI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVJbnZhbGlkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICApO1xuXG4vLyBQaWNrIGEgbW9tZW50IG0gZnJvbSBtb21lbnRzIHNvIHRoYXQgbVtmbl0ob3RoZXIpIGlzIHRydWUgZm9yIGFsbFxuLy8gb3RoZXIuIFRoaXMgcmVsaWVzIG9uIHRoZSBmdW5jdGlvbiBmbiB0byBiZSB0cmFuc2l0aXZlLlxuLy9cbi8vIG1vbWVudHMgc2hvdWxkIGVpdGhlciBiZSBhbiBhcnJheSBvZiBtb21lbnQgb2JqZWN0cyBvciBhbiBhcnJheSwgd2hvc2Vcbi8vIGZpcnN0IGVsZW1lbnQgaXMgYW4gYXJyYXkgb2YgbW9tZW50IG9iamVjdHMuXG5mdW5jdGlvbiBwaWNrQnkoZm4sIG1vbWVudHMpIHtcbiAgICB2YXIgcmVzLCBpO1xuICAgIGlmIChtb21lbnRzLmxlbmd0aCA9PT0gMSAmJiBpc0FycmF5KG1vbWVudHNbMF0pKSB7XG4gICAgICAgIG1vbWVudHMgPSBtb21lbnRzWzBdO1xuICAgIH1cbiAgICBpZiAoIW1vbWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVMb2NhbCgpO1xuICAgIH1cbiAgICByZXMgPSBtb21lbnRzWzBdO1xuICAgIGZvciAoaSA9IDE7IGkgPCBtb21lbnRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmICghbW9tZW50c1tpXS5pc1ZhbGlkKCkgfHwgbW9tZW50c1tpXVtmbl0ocmVzKSkge1xuICAgICAgICAgICAgcmVzID0gbW9tZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuXG4vLyBUT0RPOiBVc2UgW10uc29ydCBpbnN0ZWFkP1xuZnVuY3Rpb24gbWluKCkge1xuICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuXG4gICAgcmV0dXJuIHBpY2tCeSgnaXNCZWZvcmUnLCBhcmdzKTtcbn1cblxuZnVuY3Rpb24gbWF4KCkge1xuICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuXG4gICAgcmV0dXJuIHBpY2tCeSgnaXNBZnRlcicsIGFyZ3MpO1xufVxuXG52YXIgbm93ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBEYXRlLm5vdyA/IERhdGUubm93KCkgOiArbmV3IERhdGUoKTtcbn07XG5cbnZhciBvcmRlcmluZyA9IFtcbiAgICAneWVhcicsXG4gICAgJ3F1YXJ0ZXInLFxuICAgICdtb250aCcsXG4gICAgJ3dlZWsnLFxuICAgICdkYXknLFxuICAgICdob3VyJyxcbiAgICAnbWludXRlJyxcbiAgICAnc2Vjb25kJyxcbiAgICAnbWlsbGlzZWNvbmQnLFxuXTtcblxuZnVuY3Rpb24gaXNEdXJhdGlvblZhbGlkKG0pIHtcbiAgICB2YXIga2V5LFxuICAgICAgICB1bml0SGFzRGVjaW1hbCA9IGZhbHNlLFxuICAgICAgICBpLFxuICAgICAgICBvcmRlckxlbiA9IG9yZGVyaW5nLmxlbmd0aDtcbiAgICBmb3IgKGtleSBpbiBtKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGhhc093blByb3AobSwga2V5KSAmJlxuICAgICAgICAgICAgIShcbiAgICAgICAgICAgICAgICBpbmRleE9mLmNhbGwob3JkZXJpbmcsIGtleSkgIT09IC0xICYmXG4gICAgICAgICAgICAgICAgKG1ba2V5XSA9PSBudWxsIHx8ICFpc05hTihtW2tleV0pKVxuICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBvcmRlckxlbjsgKytpKSB7XG4gICAgICAgIGlmIChtW29yZGVyaW5nW2ldXSkge1xuICAgICAgICAgICAgaWYgKHVuaXRIYXNEZWNpbWFsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBvbmx5IGFsbG93IG5vbi1pbnRlZ2VycyBmb3Igc21hbGxlc3QgdW5pdFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhcnNlRmxvYXQobVtvcmRlcmluZ1tpXV0pICE9PSB0b0ludChtW29yZGVyaW5nW2ldXSkpIHtcbiAgICAgICAgICAgICAgICB1bml0SGFzRGVjaW1hbCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZCQxKCkge1xuICAgIHJldHVybiB0aGlzLl9pc1ZhbGlkO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbnZhbGlkJDEoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUR1cmF0aW9uKE5hTik7XG59XG5cbmZ1bmN0aW9uIER1cmF0aW9uKGR1cmF0aW9uKSB7XG4gICAgdmFyIG5vcm1hbGl6ZWRJbnB1dCA9IG5vcm1hbGl6ZU9iamVjdFVuaXRzKGR1cmF0aW9uKSxcbiAgICAgICAgeWVhcnMgPSBub3JtYWxpemVkSW5wdXQueWVhciB8fCAwLFxuICAgICAgICBxdWFydGVycyA9IG5vcm1hbGl6ZWRJbnB1dC5xdWFydGVyIHx8IDAsXG4gICAgICAgIG1vbnRocyA9IG5vcm1hbGl6ZWRJbnB1dC5tb250aCB8fCAwLFxuICAgICAgICB3ZWVrcyA9IG5vcm1hbGl6ZWRJbnB1dC53ZWVrIHx8IG5vcm1hbGl6ZWRJbnB1dC5pc29XZWVrIHx8IDAsXG4gICAgICAgIGRheXMgPSBub3JtYWxpemVkSW5wdXQuZGF5IHx8IDAsXG4gICAgICAgIGhvdXJzID0gbm9ybWFsaXplZElucHV0LmhvdXIgfHwgMCxcbiAgICAgICAgbWludXRlcyA9IG5vcm1hbGl6ZWRJbnB1dC5taW51dGUgfHwgMCxcbiAgICAgICAgc2Vjb25kcyA9IG5vcm1hbGl6ZWRJbnB1dC5zZWNvbmQgfHwgMCxcbiAgICAgICAgbWlsbGlzZWNvbmRzID0gbm9ybWFsaXplZElucHV0Lm1pbGxpc2Vjb25kIHx8IDA7XG5cbiAgICB0aGlzLl9pc1ZhbGlkID0gaXNEdXJhdGlvblZhbGlkKG5vcm1hbGl6ZWRJbnB1dCk7XG5cbiAgICAvLyByZXByZXNlbnRhdGlvbiBmb3IgZGF0ZUFkZFJlbW92ZVxuICAgIHRoaXMuX21pbGxpc2Vjb25kcyA9XG4gICAgICAgICttaWxsaXNlY29uZHMgK1xuICAgICAgICBzZWNvbmRzICogMWUzICsgLy8gMTAwMFxuICAgICAgICBtaW51dGVzICogNmU0ICsgLy8gMTAwMCAqIDYwXG4gICAgICAgIGhvdXJzICogMTAwMCAqIDYwICogNjA7IC8vdXNpbmcgMTAwMCAqIDYwICogNjAgaW5zdGVhZCBvZiAzNmU1IHRvIGF2b2lkIGZsb2F0aW5nIHBvaW50IHJvdW5kaW5nIGVycm9ycyBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9pc3N1ZXMvMjk3OFxuICAgIC8vIEJlY2F1c2Ugb2YgZGF0ZUFkZFJlbW92ZSB0cmVhdHMgMjQgaG91cnMgYXMgZGlmZmVyZW50IGZyb20gYVxuICAgIC8vIGRheSB3aGVuIHdvcmtpbmcgYXJvdW5kIERTVCwgd2UgbmVlZCB0byBzdG9yZSB0aGVtIHNlcGFyYXRlbHlcbiAgICB0aGlzLl9kYXlzID0gK2RheXMgKyB3ZWVrcyAqIDc7XG4gICAgLy8gSXQgaXMgaW1wb3NzaWJsZSB0byB0cmFuc2xhdGUgbW9udGhzIGludG8gZGF5cyB3aXRob3V0IGtub3dpbmdcbiAgICAvLyB3aGljaCBtb250aHMgeW91IGFyZSBhcmUgdGFsa2luZyBhYm91dCwgc28gd2UgaGF2ZSB0byBzdG9yZVxuICAgIC8vIGl0IHNlcGFyYXRlbHkuXG4gICAgdGhpcy5fbW9udGhzID0gK21vbnRocyArIHF1YXJ0ZXJzICogMyArIHllYXJzICogMTI7XG5cbiAgICB0aGlzLl9kYXRhID0ge307XG5cbiAgICB0aGlzLl9sb2NhbGUgPSBnZXRMb2NhbGUoKTtcblxuICAgIHRoaXMuX2J1YmJsZSgpO1xufVxuXG5mdW5jdGlvbiBpc0R1cmF0aW9uKG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBEdXJhdGlvbjtcbn1cblxuZnVuY3Rpb24gYWJzUm91bmQobnVtYmVyKSB7XG4gICAgaWYgKG51bWJlciA8IDApIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoLTEgKiBudW1iZXIpICogLTE7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQobnVtYmVyKTtcbiAgICB9XG59XG5cbi8vIGNvbXBhcmUgdHdvIGFycmF5cywgcmV0dXJuIHRoZSBudW1iZXIgb2YgZGlmZmVyZW5jZXNcbmZ1bmN0aW9uIGNvbXBhcmVBcnJheXMoYXJyYXkxLCBhcnJheTIsIGRvbnRDb252ZXJ0KSB7XG4gICAgdmFyIGxlbiA9IE1hdGgubWluKGFycmF5MS5sZW5ndGgsIGFycmF5Mi5sZW5ndGgpLFxuICAgICAgICBsZW5ndGhEaWZmID0gTWF0aC5hYnMoYXJyYXkxLmxlbmd0aCAtIGFycmF5Mi5sZW5ndGgpLFxuICAgICAgICBkaWZmcyA9IDAsXG4gICAgICAgIGk7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIChkb250Q29udmVydCAmJiBhcnJheTFbaV0gIT09IGFycmF5MltpXSkgfHxcbiAgICAgICAgICAgICghZG9udENvbnZlcnQgJiYgdG9JbnQoYXJyYXkxW2ldKSAhPT0gdG9JbnQoYXJyYXkyW2ldKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBkaWZmcysrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkaWZmcyArIGxlbmd0aERpZmY7XG59XG5cbi8vIEZPUk1BVFRJTkdcblxuZnVuY3Rpb24gb2Zmc2V0KHRva2VuLCBzZXBhcmF0b3IpIHtcbiAgICBhZGRGb3JtYXRUb2tlbih0b2tlbiwgMCwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb2Zmc2V0ID0gdGhpcy51dGNPZmZzZXQoKSxcbiAgICAgICAgICAgIHNpZ24gPSAnKyc7XG4gICAgICAgIGlmIChvZmZzZXQgPCAwKSB7XG4gICAgICAgICAgICBvZmZzZXQgPSAtb2Zmc2V0O1xuICAgICAgICAgICAgc2lnbiA9ICctJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgc2lnbiArXG4gICAgICAgICAgICB6ZXJvRmlsbCh+fihvZmZzZXQgLyA2MCksIDIpICtcbiAgICAgICAgICAgIHNlcGFyYXRvciArXG4gICAgICAgICAgICB6ZXJvRmlsbCh+fm9mZnNldCAlIDYwLCAyKVxuICAgICAgICApO1xuICAgIH0pO1xufVxuXG5vZmZzZXQoJ1onLCAnOicpO1xub2Zmc2V0KCdaWicsICcnKTtcblxuLy8gUEFSU0lOR1xuXG5hZGRSZWdleFRva2VuKCdaJywgbWF0Y2hTaG9ydE9mZnNldCk7XG5hZGRSZWdleFRva2VuKCdaWicsIG1hdGNoU2hvcnRPZmZzZXQpO1xuYWRkUGFyc2VUb2tlbihbJ1onLCAnWlonXSwgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgY29uZmlnLl91c2VVVEMgPSB0cnVlO1xuICAgIGNvbmZpZy5fdHptID0gb2Zmc2V0RnJvbVN0cmluZyhtYXRjaFNob3J0T2Zmc2V0LCBpbnB1dCk7XG59KTtcblxuLy8gSEVMUEVSU1xuXG4vLyB0aW1lem9uZSBjaHVua2VyXG4vLyAnKzEwOjAwJyA+IFsnMTAnLCAgJzAwJ11cbi8vICctMTUzMCcgID4gWyctMTUnLCAnMzAnXVxudmFyIGNodW5rT2Zmc2V0ID0gLyhbXFwrXFwtXXxcXGRcXGQpL2dpO1xuXG5mdW5jdGlvbiBvZmZzZXRGcm9tU3RyaW5nKG1hdGNoZXIsIHN0cmluZykge1xuICAgIHZhciBtYXRjaGVzID0gKHN0cmluZyB8fCAnJykubWF0Y2gobWF0Y2hlciksXG4gICAgICAgIGNodW5rLFxuICAgICAgICBwYXJ0cyxcbiAgICAgICAgbWludXRlcztcblxuICAgIGlmIChtYXRjaGVzID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNodW5rID0gbWF0Y2hlc1ttYXRjaGVzLmxlbmd0aCAtIDFdIHx8IFtdO1xuICAgIHBhcnRzID0gKGNodW5rICsgJycpLm1hdGNoKGNodW5rT2Zmc2V0KSB8fCBbJy0nLCAwLCAwXTtcbiAgICBtaW51dGVzID0gKyhwYXJ0c1sxXSAqIDYwKSArIHRvSW50KHBhcnRzWzJdKTtcblxuICAgIHJldHVybiBtaW51dGVzID09PSAwID8gMCA6IHBhcnRzWzBdID09PSAnKycgPyBtaW51dGVzIDogLW1pbnV0ZXM7XG59XG5cbi8vIFJldHVybiBhIG1vbWVudCBmcm9tIGlucHV0LCB0aGF0IGlzIGxvY2FsL3V0Yy96b25lIGVxdWl2YWxlbnQgdG8gbW9kZWwuXG5mdW5jdGlvbiBjbG9uZVdpdGhPZmZzZXQoaW5wdXQsIG1vZGVsKSB7XG4gICAgdmFyIHJlcywgZGlmZjtcbiAgICBpZiAobW9kZWwuX2lzVVRDKSB7XG4gICAgICAgIHJlcyA9IG1vZGVsLmNsb25lKCk7XG4gICAgICAgIGRpZmYgPVxuICAgICAgICAgICAgKGlzTW9tZW50KGlucHV0KSB8fCBpc0RhdGUoaW5wdXQpXG4gICAgICAgICAgICAgICAgPyBpbnB1dC52YWx1ZU9mKClcbiAgICAgICAgICAgICAgICA6IGNyZWF0ZUxvY2FsKGlucHV0KS52YWx1ZU9mKCkpIC0gcmVzLnZhbHVlT2YoKTtcbiAgICAgICAgLy8gVXNlIGxvdy1sZXZlbCBhcGksIGJlY2F1c2UgdGhpcyBmbiBpcyBsb3ctbGV2ZWwgYXBpLlxuICAgICAgICByZXMuX2Quc2V0VGltZShyZXMuX2QudmFsdWVPZigpICsgZGlmZik7XG4gICAgICAgIGhvb2tzLnVwZGF0ZU9mZnNldChyZXMsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY3JlYXRlTG9jYWwoaW5wdXQpLmxvY2FsKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXREYXRlT2Zmc2V0KG0pIHtcbiAgICAvLyBPbiBGaXJlZm94LjI0IERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyBhIGZsb2F0aW5nIHBvaW50LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L3B1bGwvMTg3MVxuICAgIHJldHVybiAtTWF0aC5yb3VuZChtLl9kLmdldFRpbWV6b25lT2Zmc2V0KCkpO1xufVxuXG4vLyBIT09LU1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIHdoZW5ldmVyIGEgbW9tZW50IGlzIG11dGF0ZWQuXG4vLyBJdCBpcyBpbnRlbmRlZCB0byBrZWVwIHRoZSBvZmZzZXQgaW4gc3luYyB3aXRoIHRoZSB0aW1lem9uZS5cbmhvb2tzLnVwZGF0ZU9mZnNldCA9IGZ1bmN0aW9uICgpIHt9O1xuXG4vLyBNT01FTlRTXG5cbi8vIGtlZXBMb2NhbFRpbWUgPSB0cnVlIG1lYW5zIG9ubHkgY2hhbmdlIHRoZSB0aW1lem9uZSwgd2l0aG91dFxuLy8gYWZmZWN0aW5nIHRoZSBsb2NhbCBob3VyLiBTbyA1OjMxOjI2ICswMzAwIC0tW3V0Y09mZnNldCgyLCB0cnVlKV0tLT5cbi8vIDU6MzE6MjYgKzAyMDAgSXQgaXMgcG9zc2libGUgdGhhdCA1OjMxOjI2IGRvZXNuJ3QgZXhpc3Qgd2l0aCBvZmZzZXRcbi8vICswMjAwLCBzbyB3ZSBhZGp1c3QgdGhlIHRpbWUgYXMgbmVlZGVkLCB0byBiZSB2YWxpZC5cbi8vXG4vLyBLZWVwaW5nIHRoZSB0aW1lIGFjdHVhbGx5IGFkZHMvc3VidHJhY3RzIChvbmUgaG91cilcbi8vIGZyb20gdGhlIGFjdHVhbCByZXByZXNlbnRlZCB0aW1lLiBUaGF0IGlzIHdoeSB3ZSBjYWxsIHVwZGF0ZU9mZnNldFxuLy8gYSBzZWNvbmQgdGltZS4gSW4gY2FzZSBpdCB3YW50cyB1cyB0byBjaGFuZ2UgdGhlIG9mZnNldCBhZ2FpblxuLy8gX2NoYW5nZUluUHJvZ3Jlc3MgPT0gdHJ1ZSBjYXNlLCB0aGVuIHdlIGhhdmUgdG8gYWRqdXN0LCBiZWNhdXNlXG4vLyB0aGVyZSBpcyBubyBzdWNoIHRpbWUgaW4gdGhlIGdpdmVuIHRpbWV6b25lLlxuZnVuY3Rpb24gZ2V0U2V0T2Zmc2V0KGlucHV0LCBrZWVwTG9jYWxUaW1lLCBrZWVwTWludXRlcykge1xuICAgIHZhciBvZmZzZXQgPSB0aGlzLl9vZmZzZXQgfHwgMCxcbiAgICAgICAgbG9jYWxBZGp1c3Q7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4gaW5wdXQgIT0gbnVsbCA/IHRoaXMgOiBOYU47XG4gICAgfVxuICAgIGlmIChpbnB1dCAhPSBudWxsKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpbnB1dCA9IG9mZnNldEZyb21TdHJpbmcobWF0Y2hTaG9ydE9mZnNldCwgaW5wdXQpO1xuICAgICAgICAgICAgaWYgKGlucHV0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMoaW5wdXQpIDwgMTYgJiYgIWtlZXBNaW51dGVzKSB7XG4gICAgICAgICAgICBpbnB1dCA9IGlucHV0ICogNjA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9pc1VUQyAmJiBrZWVwTG9jYWxUaW1lKSB7XG4gICAgICAgICAgICBsb2NhbEFkanVzdCA9IGdldERhdGVPZmZzZXQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fb2Zmc2V0ID0gaW5wdXQ7XG4gICAgICAgIHRoaXMuX2lzVVRDID0gdHJ1ZTtcbiAgICAgICAgaWYgKGxvY2FsQWRqdXN0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkKGxvY2FsQWRqdXN0LCAnbScpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvZmZzZXQgIT09IGlucHV0KSB7XG4gICAgICAgICAgICBpZiAoIWtlZXBMb2NhbFRpbWUgfHwgdGhpcy5fY2hhbmdlSW5Qcm9ncmVzcykge1xuICAgICAgICAgICAgICAgIGFkZFN1YnRyYWN0KFxuICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVEdXJhdGlvbihpbnB1dCAtIG9mZnNldCwgJ20nKSxcbiAgICAgICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5fY2hhbmdlSW5Qcm9ncmVzcykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NoYW5nZUluUHJvZ3Jlc3MgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGhvb2tzLnVwZGF0ZU9mZnNldCh0aGlzLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGFuZ2VJblByb2dyZXNzID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNVVEMgPyBvZmZzZXQgOiBnZXREYXRlT2Zmc2V0KHRoaXMpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0U2V0Wm9uZShpbnB1dCwga2VlcExvY2FsVGltZSkge1xuICAgIGlmIChpbnB1dCAhPSBudWxsKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaW5wdXQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpbnB1dCA9IC1pbnB1dDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXRjT2Zmc2V0KGlucHV0LCBrZWVwTG9jYWxUaW1lKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gLXRoaXMudXRjT2Zmc2V0KCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzZXRPZmZzZXRUb1VUQyhrZWVwTG9jYWxUaW1lKSB7XG4gICAgcmV0dXJuIHRoaXMudXRjT2Zmc2V0KDAsIGtlZXBMb2NhbFRpbWUpO1xufVxuXG5mdW5jdGlvbiBzZXRPZmZzZXRUb0xvY2FsKGtlZXBMb2NhbFRpbWUpIHtcbiAgICBpZiAodGhpcy5faXNVVEMpIHtcbiAgICAgICAgdGhpcy51dGNPZmZzZXQoMCwga2VlcExvY2FsVGltZSk7XG4gICAgICAgIHRoaXMuX2lzVVRDID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGtlZXBMb2NhbFRpbWUpIHtcbiAgICAgICAgICAgIHRoaXMuc3VidHJhY3QoZ2V0RGF0ZU9mZnNldCh0aGlzKSwgJ20nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gc2V0T2Zmc2V0VG9QYXJzZWRPZmZzZXQoKSB7XG4gICAgaWYgKHRoaXMuX3R6bSAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMudXRjT2Zmc2V0KHRoaXMuX3R6bSwgZmFsc2UsIHRydWUpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMuX2kgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciB0Wm9uZSA9IG9mZnNldEZyb21TdHJpbmcobWF0Y2hPZmZzZXQsIHRoaXMuX2kpO1xuICAgICAgICBpZiAodFpvbmUgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy51dGNPZmZzZXQodFpvbmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51dGNPZmZzZXQoMCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGhhc0FsaWduZWRIb3VyT2Zmc2V0KGlucHV0KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlucHV0ID0gaW5wdXQgPyBjcmVhdGVMb2NhbChpbnB1dCkudXRjT2Zmc2V0KCkgOiAwO1xuXG4gICAgcmV0dXJuICh0aGlzLnV0Y09mZnNldCgpIC0gaW5wdXQpICUgNjAgPT09IDA7XG59XG5cbmZ1bmN0aW9uIGlzRGF5bGlnaHRTYXZpbmdUaW1lKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMudXRjT2Zmc2V0KCkgPiB0aGlzLmNsb25lKCkubW9udGgoMCkudXRjT2Zmc2V0KCkgfHxcbiAgICAgICAgdGhpcy51dGNPZmZzZXQoKSA+IHRoaXMuY2xvbmUoKS5tb250aCg1KS51dGNPZmZzZXQoKVxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGlzRGF5bGlnaHRTYXZpbmdUaW1lU2hpZnRlZCgpIHtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKHRoaXMuX2lzRFNUU2hpZnRlZCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRFNUU2hpZnRlZDtcbiAgICB9XG5cbiAgICB2YXIgYyA9IHt9LFxuICAgICAgICBvdGhlcjtcblxuICAgIGNvcHlDb25maWcoYywgdGhpcyk7XG4gICAgYyA9IHByZXBhcmVDb25maWcoYyk7XG5cbiAgICBpZiAoYy5fYSkge1xuICAgICAgICBvdGhlciA9IGMuX2lzVVRDID8gY3JlYXRlVVRDKGMuX2EpIDogY3JlYXRlTG9jYWwoYy5fYSk7XG4gICAgICAgIHRoaXMuX2lzRFNUU2hpZnRlZCA9XG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQoKSAmJiBjb21wYXJlQXJyYXlzKGMuX2EsIG90aGVyLnRvQXJyYXkoKSkgPiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2lzRFNUU2hpZnRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9pc0RTVFNoaWZ0ZWQ7XG59XG5cbmZ1bmN0aW9uIGlzTG9jYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCgpID8gIXRoaXMuX2lzVVRDIDogZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGlzVXRjT2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQoKSA/IHRoaXMuX2lzVVRDIDogZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGlzVXRjKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQoKSA/IHRoaXMuX2lzVVRDICYmIHRoaXMuX29mZnNldCA9PT0gMCA6IGZhbHNlO1xufVxuXG4vLyBBU1AuTkVUIGpzb24gZGF0ZSBmb3JtYXQgcmVnZXhcbnZhciBhc3BOZXRSZWdleCA9IC9eKC18XFwrKT8oPzooXFxkKilbLiBdKT8oXFxkKyk6KFxcZCspKD86OihcXGQrKShcXC5cXGQqKT8pPyQvLFxuICAgIC8vIGZyb20gaHR0cDovL2RvY3MuY2xvc3VyZS1saWJyYXJ5Lmdvb2dsZWNvZGUuY29tL2dpdC9jbG9zdXJlX2dvb2dfZGF0ZV9kYXRlLmpzLnNvdXJjZS5odG1sXG4gICAgLy8gc29tZXdoYXQgbW9yZSBpbiBsaW5lIHdpdGggNC40LjMuMiAyMDA0IHNwZWMsIGJ1dCBhbGxvd3MgZGVjaW1hbCBhbnl3aGVyZVxuICAgIC8vIGFuZCBmdXJ0aGVyIG1vZGlmaWVkIHRvIGFsbG93IGZvciBzdHJpbmdzIGNvbnRhaW5pbmcgYm90aCB3ZWVrIGFuZCBkYXlcbiAgICBpc29SZWdleCA9XG4gICAgICAgIC9eKC18XFwrKT9QKD86KFstK10/WzAtOSwuXSopWSk/KD86KFstK10/WzAtOSwuXSopTSk/KD86KFstK10/WzAtOSwuXSopVyk/KD86KFstK10/WzAtOSwuXSopRCk/KD86VCg/OihbLStdP1swLTksLl0qKUgpPyg/OihbLStdP1swLTksLl0qKU0pPyg/OihbLStdP1swLTksLl0qKVMpPyk/JC87XG5cbmZ1bmN0aW9uIGNyZWF0ZUR1cmF0aW9uKGlucHV0LCBrZXkpIHtcbiAgICB2YXIgZHVyYXRpb24gPSBpbnB1dCxcbiAgICAgICAgLy8gbWF0Y2hpbmcgYWdhaW5zdCByZWdleHAgaXMgZXhwZW5zaXZlLCBkbyBpdCBvbiBkZW1hbmRcbiAgICAgICAgbWF0Y2ggPSBudWxsLFxuICAgICAgICBzaWduLFxuICAgICAgICByZXQsXG4gICAgICAgIGRpZmZSZXM7XG5cbiAgICBpZiAoaXNEdXJhdGlvbihpbnB1dCkpIHtcbiAgICAgICAgZHVyYXRpb24gPSB7XG4gICAgICAgICAgICBtczogaW5wdXQuX21pbGxpc2Vjb25kcyxcbiAgICAgICAgICAgIGQ6IGlucHV0Ll9kYXlzLFxuICAgICAgICAgICAgTTogaW5wdXQuX21vbnRocyxcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGlzTnVtYmVyKGlucHV0KSB8fCAhaXNOYU4oK2lucHV0KSkge1xuICAgICAgICBkdXJhdGlvbiA9IHt9O1xuICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICBkdXJhdGlvbltrZXldID0gK2lucHV0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZHVyYXRpb24ubWlsbGlzZWNvbmRzID0gK2lucHV0O1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmICgobWF0Y2ggPSBhc3BOZXRSZWdleC5leGVjKGlucHV0KSkpIHtcbiAgICAgICAgc2lnbiA9IG1hdGNoWzFdID09PSAnLScgPyAtMSA6IDE7XG4gICAgICAgIGR1cmF0aW9uID0ge1xuICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgIGQ6IHRvSW50KG1hdGNoW0RBVEVdKSAqIHNpZ24sXG4gICAgICAgICAgICBoOiB0b0ludChtYXRjaFtIT1VSXSkgKiBzaWduLFxuICAgICAgICAgICAgbTogdG9JbnQobWF0Y2hbTUlOVVRFXSkgKiBzaWduLFxuICAgICAgICAgICAgczogdG9JbnQobWF0Y2hbU0VDT05EXSkgKiBzaWduLFxuICAgICAgICAgICAgbXM6IHRvSW50KGFic1JvdW5kKG1hdGNoW01JTExJU0VDT05EXSAqIDEwMDApKSAqIHNpZ24sIC8vIHRoZSBtaWxsaXNlY29uZCBkZWNpbWFsIHBvaW50IGlzIGluY2x1ZGVkIGluIHRoZSBtYXRjaFxuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAoKG1hdGNoID0gaXNvUmVnZXguZXhlYyhpbnB1dCkpKSB7XG4gICAgICAgIHNpZ24gPSBtYXRjaFsxXSA9PT0gJy0nID8gLTEgOiAxO1xuICAgICAgICBkdXJhdGlvbiA9IHtcbiAgICAgICAgICAgIHk6IHBhcnNlSXNvKG1hdGNoWzJdLCBzaWduKSxcbiAgICAgICAgICAgIE06IHBhcnNlSXNvKG1hdGNoWzNdLCBzaWduKSxcbiAgICAgICAgICAgIHc6IHBhcnNlSXNvKG1hdGNoWzRdLCBzaWduKSxcbiAgICAgICAgICAgIGQ6IHBhcnNlSXNvKG1hdGNoWzVdLCBzaWduKSxcbiAgICAgICAgICAgIGg6IHBhcnNlSXNvKG1hdGNoWzZdLCBzaWduKSxcbiAgICAgICAgICAgIG06IHBhcnNlSXNvKG1hdGNoWzddLCBzaWduKSxcbiAgICAgICAgICAgIHM6IHBhcnNlSXNvKG1hdGNoWzhdLCBzaWduKSxcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGR1cmF0aW9uID09IG51bGwpIHtcbiAgICAgICAgLy8gY2hlY2tzIGZvciBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICBkdXJhdGlvbiA9IHt9O1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHR5cGVvZiBkdXJhdGlvbiA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgKCdmcm9tJyBpbiBkdXJhdGlvbiB8fCAndG8nIGluIGR1cmF0aW9uKVxuICAgICkge1xuICAgICAgICBkaWZmUmVzID0gbW9tZW50c0RpZmZlcmVuY2UoXG4gICAgICAgICAgICBjcmVhdGVMb2NhbChkdXJhdGlvbi5mcm9tKSxcbiAgICAgICAgICAgIGNyZWF0ZUxvY2FsKGR1cmF0aW9uLnRvKVxuICAgICAgICApO1xuXG4gICAgICAgIGR1cmF0aW9uID0ge307XG4gICAgICAgIGR1cmF0aW9uLm1zID0gZGlmZlJlcy5taWxsaXNlY29uZHM7XG4gICAgICAgIGR1cmF0aW9uLk0gPSBkaWZmUmVzLm1vbnRocztcbiAgICB9XG5cbiAgICByZXQgPSBuZXcgRHVyYXRpb24oZHVyYXRpb24pO1xuXG4gICAgaWYgKGlzRHVyYXRpb24oaW5wdXQpICYmIGhhc093blByb3AoaW5wdXQsICdfbG9jYWxlJykpIHtcbiAgICAgICAgcmV0Ll9sb2NhbGUgPSBpbnB1dC5fbG9jYWxlO1xuICAgIH1cblxuICAgIGlmIChpc0R1cmF0aW9uKGlucHV0KSAmJiBoYXNPd25Qcm9wKGlucHV0LCAnX2lzVmFsaWQnKSkge1xuICAgICAgICByZXQuX2lzVmFsaWQgPSBpbnB1dC5faXNWYWxpZDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xufVxuXG5jcmVhdGVEdXJhdGlvbi5mbiA9IER1cmF0aW9uLnByb3RvdHlwZTtcbmNyZWF0ZUR1cmF0aW9uLmludmFsaWQgPSBjcmVhdGVJbnZhbGlkJDE7XG5cbmZ1bmN0aW9uIHBhcnNlSXNvKGlucCwgc2lnbikge1xuICAgIC8vIFdlJ2Qgbm9ybWFsbHkgdXNlIH5+aW5wIGZvciB0aGlzLCBidXQgdW5mb3J0dW5hdGVseSBpdCBhbHNvXG4gICAgLy8gY29udmVydHMgZmxvYXRzIHRvIGludHMuXG4gICAgLy8gaW5wIG1heSBiZSB1bmRlZmluZWQsIHNvIGNhcmVmdWwgY2FsbGluZyByZXBsYWNlIG9uIGl0LlxuICAgIHZhciByZXMgPSBpbnAgJiYgcGFyc2VGbG9hdChpbnAucmVwbGFjZSgnLCcsICcuJykpO1xuICAgIC8vIGFwcGx5IHNpZ24gd2hpbGUgd2UncmUgYXQgaXRcbiAgICByZXR1cm4gKGlzTmFOKHJlcykgPyAwIDogcmVzKSAqIHNpZ247XG59XG5cbmZ1bmN0aW9uIHBvc2l0aXZlTW9tZW50c0RpZmZlcmVuY2UoYmFzZSwgb3RoZXIpIHtcbiAgICB2YXIgcmVzID0ge307XG5cbiAgICByZXMubW9udGhzID1cbiAgICAgICAgb3RoZXIubW9udGgoKSAtIGJhc2UubW9udGgoKSArIChvdGhlci55ZWFyKCkgLSBiYXNlLnllYXIoKSkgKiAxMjtcbiAgICBpZiAoYmFzZS5jbG9uZSgpLmFkZChyZXMubW9udGhzLCAnTScpLmlzQWZ0ZXIob3RoZXIpKSB7XG4gICAgICAgIC0tcmVzLm1vbnRocztcbiAgICB9XG5cbiAgICByZXMubWlsbGlzZWNvbmRzID0gK290aGVyIC0gK2Jhc2UuY2xvbmUoKS5hZGQocmVzLm1vbnRocywgJ00nKTtcblxuICAgIHJldHVybiByZXM7XG59XG5cbmZ1bmN0aW9uIG1vbWVudHNEaWZmZXJlbmNlKGJhc2UsIG90aGVyKSB7XG4gICAgdmFyIHJlcztcbiAgICBpZiAoIShiYXNlLmlzVmFsaWQoKSAmJiBvdGhlci5pc1ZhbGlkKCkpKSB7XG4gICAgICAgIHJldHVybiB7IG1pbGxpc2Vjb25kczogMCwgbW9udGhzOiAwIH07XG4gICAgfVxuXG4gICAgb3RoZXIgPSBjbG9uZVdpdGhPZmZzZXQob3RoZXIsIGJhc2UpO1xuICAgIGlmIChiYXNlLmlzQmVmb3JlKG90aGVyKSkge1xuICAgICAgICByZXMgPSBwb3NpdGl2ZU1vbWVudHNEaWZmZXJlbmNlKGJhc2UsIG90aGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXMgPSBwb3NpdGl2ZU1vbWVudHNEaWZmZXJlbmNlKG90aGVyLCBiYXNlKTtcbiAgICAgICAgcmVzLm1pbGxpc2Vjb25kcyA9IC1yZXMubWlsbGlzZWNvbmRzO1xuICAgICAgICByZXMubW9udGhzID0gLXJlcy5tb250aHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbn1cblxuLy8gVE9ETzogcmVtb3ZlICduYW1lJyBhcmcgYWZ0ZXIgZGVwcmVjYXRpb24gaXMgcmVtb3ZlZFxuZnVuY3Rpb24gY3JlYXRlQWRkZXIoZGlyZWN0aW9uLCBuYW1lKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWwsIHBlcmlvZCkge1xuICAgICAgICB2YXIgZHVyLCB0bXA7XG4gICAgICAgIC8vaW52ZXJ0IHRoZSBhcmd1bWVudHMsIGJ1dCBjb21wbGFpbiBhYm91dCBpdFxuICAgICAgICBpZiAocGVyaW9kICE9PSBudWxsICYmICFpc05hTigrcGVyaW9kKSkge1xuICAgICAgICAgICAgZGVwcmVjYXRlU2ltcGxlKFxuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgJ21vbWVudCgpLicgK1xuICAgICAgICAgICAgICAgICAgICBuYW1lICtcbiAgICAgICAgICAgICAgICAgICAgJyhwZXJpb2QsIG51bWJlcikgaXMgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSBtb21lbnQoKS4nICtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArXG4gICAgICAgICAgICAgICAgICAgICcobnVtYmVyLCBwZXJpb2QpLiAnICtcbiAgICAgICAgICAgICAgICAgICAgJ1NlZSBodHRwOi8vbW9tZW50anMuY29tL2d1aWRlcy8jL3dhcm5pbmdzL2FkZC1pbnZlcnRlZC1wYXJhbS8gZm9yIG1vcmUgaW5mby4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdG1wID0gdmFsO1xuICAgICAgICAgICAgdmFsID0gcGVyaW9kO1xuICAgICAgICAgICAgcGVyaW9kID0gdG1wO1xuICAgICAgICB9XG5cbiAgICAgICAgZHVyID0gY3JlYXRlRHVyYXRpb24odmFsLCBwZXJpb2QpO1xuICAgICAgICBhZGRTdWJ0cmFjdCh0aGlzLCBkdXIsIGRpcmVjdGlvbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGFkZFN1YnRyYWN0KG1vbSwgZHVyYXRpb24sIGlzQWRkaW5nLCB1cGRhdGVPZmZzZXQpIHtcbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gZHVyYXRpb24uX21pbGxpc2Vjb25kcyxcbiAgICAgICAgZGF5cyA9IGFic1JvdW5kKGR1cmF0aW9uLl9kYXlzKSxcbiAgICAgICAgbW9udGhzID0gYWJzUm91bmQoZHVyYXRpb24uX21vbnRocyk7XG5cbiAgICBpZiAoIW1vbS5pc1ZhbGlkKCkpIHtcbiAgICAgICAgLy8gTm8gb3BcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHVwZGF0ZU9mZnNldCA9IHVwZGF0ZU9mZnNldCA9PSBudWxsID8gdHJ1ZSA6IHVwZGF0ZU9mZnNldDtcblxuICAgIGlmIChtb250aHMpIHtcbiAgICAgICAgc2V0TW9udGgobW9tLCBnZXQobW9tLCAnTW9udGgnKSArIG1vbnRocyAqIGlzQWRkaW5nKTtcbiAgICB9XG4gICAgaWYgKGRheXMpIHtcbiAgICAgICAgc2V0JDEobW9tLCAnRGF0ZScsIGdldChtb20sICdEYXRlJykgKyBkYXlzICogaXNBZGRpbmcpO1xuICAgIH1cbiAgICBpZiAobWlsbGlzZWNvbmRzKSB7XG4gICAgICAgIG1vbS5fZC5zZXRUaW1lKG1vbS5fZC52YWx1ZU9mKCkgKyBtaWxsaXNlY29uZHMgKiBpc0FkZGluZyk7XG4gICAgfVxuICAgIGlmICh1cGRhdGVPZmZzZXQpIHtcbiAgICAgICAgaG9va3MudXBkYXRlT2Zmc2V0KG1vbSwgZGF5cyB8fCBtb250aHMpO1xuICAgIH1cbn1cblxudmFyIGFkZCA9IGNyZWF0ZUFkZGVyKDEsICdhZGQnKSxcbiAgICBzdWJ0cmFjdCA9IGNyZWF0ZUFkZGVyKC0xLCAnc3VidHJhY3QnKTtcblxuZnVuY3Rpb24gaXNTdHJpbmcoaW5wdXQpIHtcbiAgICByZXR1cm4gdHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJyB8fCBpbnB1dCBpbnN0YW5jZW9mIFN0cmluZztcbn1cblxuLy8gdHlwZSBNb21lbnRJbnB1dCA9IE1vbWVudCB8IERhdGUgfCBzdHJpbmcgfCBudW1iZXIgfCAobnVtYmVyIHwgc3RyaW5nKVtdIHwgTW9tZW50SW5wdXRPYmplY3QgfCB2b2lkOyAvLyBudWxsIHwgdW5kZWZpbmVkXG5mdW5jdGlvbiBpc01vbWVudElucHV0KGlucHV0KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgaXNNb21lbnQoaW5wdXQpIHx8XG4gICAgICAgIGlzRGF0ZShpbnB1dCkgfHxcbiAgICAgICAgaXNTdHJpbmcoaW5wdXQpIHx8XG4gICAgICAgIGlzTnVtYmVyKGlucHV0KSB8fFxuICAgICAgICBpc051bWJlck9yU3RyaW5nQXJyYXkoaW5wdXQpIHx8XG4gICAgICAgIGlzTW9tZW50SW5wdXRPYmplY3QoaW5wdXQpIHx8XG4gICAgICAgIGlucHV0ID09PSBudWxsIHx8XG4gICAgICAgIGlucHV0ID09PSB1bmRlZmluZWRcbiAgICApO1xufVxuXG5mdW5jdGlvbiBpc01vbWVudElucHV0T2JqZWN0KGlucHV0KSB7XG4gICAgdmFyIG9iamVjdFRlc3QgPSBpc09iamVjdChpbnB1dCkgJiYgIWlzT2JqZWN0RW1wdHkoaW5wdXQpLFxuICAgICAgICBwcm9wZXJ0eVRlc3QgPSBmYWxzZSxcbiAgICAgICAgcHJvcGVydGllcyA9IFtcbiAgICAgICAgICAgICd5ZWFycycsXG4gICAgICAgICAgICAneWVhcicsXG4gICAgICAgICAgICAneScsXG4gICAgICAgICAgICAnbW9udGhzJyxcbiAgICAgICAgICAgICdtb250aCcsXG4gICAgICAgICAgICAnTScsXG4gICAgICAgICAgICAnZGF5cycsXG4gICAgICAgICAgICAnZGF5JyxcbiAgICAgICAgICAgICdkJyxcbiAgICAgICAgICAgICdkYXRlcycsXG4gICAgICAgICAgICAnZGF0ZScsXG4gICAgICAgICAgICAnRCcsXG4gICAgICAgICAgICAnaG91cnMnLFxuICAgICAgICAgICAgJ2hvdXInLFxuICAgICAgICAgICAgJ2gnLFxuICAgICAgICAgICAgJ21pbnV0ZXMnLFxuICAgICAgICAgICAgJ21pbnV0ZScsXG4gICAgICAgICAgICAnbScsXG4gICAgICAgICAgICAnc2Vjb25kcycsXG4gICAgICAgICAgICAnc2Vjb25kJyxcbiAgICAgICAgICAgICdzJyxcbiAgICAgICAgICAgICdtaWxsaXNlY29uZHMnLFxuICAgICAgICAgICAgJ21pbGxpc2Vjb25kJyxcbiAgICAgICAgICAgICdtcycsXG4gICAgICAgIF0sXG4gICAgICAgIGksXG4gICAgICAgIHByb3BlcnR5LFxuICAgICAgICBwcm9wZXJ0eUxlbiA9IHByb3BlcnRpZXMubGVuZ3RoO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHByb3BlcnR5TGVuOyBpICs9IDEpIHtcbiAgICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0aWVzW2ldO1xuICAgICAgICBwcm9wZXJ0eVRlc3QgPSBwcm9wZXJ0eVRlc3QgfHwgaGFzT3duUHJvcChpbnB1dCwgcHJvcGVydHkpO1xuICAgIH1cblxuICAgIHJldHVybiBvYmplY3RUZXN0ICYmIHByb3BlcnR5VGVzdDtcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXJPclN0cmluZ0FycmF5KGlucHV0KSB7XG4gICAgdmFyIGFycmF5VGVzdCA9IGlzQXJyYXkoaW5wdXQpLFxuICAgICAgICBkYXRhVHlwZVRlc3QgPSBmYWxzZTtcbiAgICBpZiAoYXJyYXlUZXN0KSB7XG4gICAgICAgIGRhdGFUeXBlVGVzdCA9XG4gICAgICAgICAgICBpbnB1dC5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIWlzTnVtYmVyKGl0ZW0pICYmIGlzU3RyaW5nKGlucHV0KTtcbiAgICAgICAgICAgIH0pLmxlbmd0aCA9PT0gMDtcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5VGVzdCAmJiBkYXRhVHlwZVRlc3Q7XG59XG5cbmZ1bmN0aW9uIGlzQ2FsZW5kYXJTcGVjKGlucHV0KSB7XG4gICAgdmFyIG9iamVjdFRlc3QgPSBpc09iamVjdChpbnB1dCkgJiYgIWlzT2JqZWN0RW1wdHkoaW5wdXQpLFxuICAgICAgICBwcm9wZXJ0eVRlc3QgPSBmYWxzZSxcbiAgICAgICAgcHJvcGVydGllcyA9IFtcbiAgICAgICAgICAgICdzYW1lRGF5JyxcbiAgICAgICAgICAgICduZXh0RGF5JyxcbiAgICAgICAgICAgICdsYXN0RGF5JyxcbiAgICAgICAgICAgICduZXh0V2VlaycsXG4gICAgICAgICAgICAnbGFzdFdlZWsnLFxuICAgICAgICAgICAgJ3NhbWVFbHNlJyxcbiAgICAgICAgXSxcbiAgICAgICAgaSxcbiAgICAgICAgcHJvcGVydHk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBwcm9wZXJ0eSA9IHByb3BlcnRpZXNbaV07XG4gICAgICAgIHByb3BlcnR5VGVzdCA9IHByb3BlcnR5VGVzdCB8fCBoYXNPd25Qcm9wKGlucHV0LCBwcm9wZXJ0eSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iamVjdFRlc3QgJiYgcHJvcGVydHlUZXN0O1xufVxuXG5mdW5jdGlvbiBnZXRDYWxlbmRhckZvcm1hdChteU1vbWVudCwgbm93KSB7XG4gICAgdmFyIGRpZmYgPSBteU1vbWVudC5kaWZmKG5vdywgJ2RheXMnLCB0cnVlKTtcbiAgICByZXR1cm4gZGlmZiA8IC02XG4gICAgICAgID8gJ3NhbWVFbHNlJ1xuICAgICAgICA6IGRpZmYgPCAtMVxuICAgICAgICAgID8gJ2xhc3RXZWVrJ1xuICAgICAgICAgIDogZGlmZiA8IDBcbiAgICAgICAgICAgID8gJ2xhc3REYXknXG4gICAgICAgICAgICA6IGRpZmYgPCAxXG4gICAgICAgICAgICAgID8gJ3NhbWVEYXknXG4gICAgICAgICAgICAgIDogZGlmZiA8IDJcbiAgICAgICAgICAgICAgICA/ICduZXh0RGF5J1xuICAgICAgICAgICAgICAgIDogZGlmZiA8IDdcbiAgICAgICAgICAgICAgICAgID8gJ25leHRXZWVrJ1xuICAgICAgICAgICAgICAgICAgOiAnc2FtZUVsc2UnO1xufVxuXG5mdW5jdGlvbiBjYWxlbmRhciQxKHRpbWUsIGZvcm1hdHMpIHtcbiAgICAvLyBTdXBwb3J0IGZvciBzaW5nbGUgcGFyYW1ldGVyLCBmb3JtYXRzIG9ubHkgb3ZlcmxvYWQgdG8gdGhlIGNhbGVuZGFyIGZ1bmN0aW9uXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgaWYgKCFhcmd1bWVudHNbMF0pIHtcbiAgICAgICAgICAgIHRpbWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBmb3JtYXRzID0gdW5kZWZpbmVkO1xuICAgICAgICB9IGVsc2UgaWYgKGlzTW9tZW50SW5wdXQoYXJndW1lbnRzWzBdKSkge1xuICAgICAgICAgICAgdGltZSA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgIGZvcm1hdHMgPSB1bmRlZmluZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNDYWxlbmRhclNwZWMoYXJndW1lbnRzWzBdKSkge1xuICAgICAgICAgICAgZm9ybWF0cyA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgIHRpbWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gV2Ugd2FudCB0byBjb21wYXJlIHRoZSBzdGFydCBvZiB0b2RheSwgdnMgdGhpcy5cbiAgICAvLyBHZXR0aW5nIHN0YXJ0LW9mLXRvZGF5IGRlcGVuZHMgb24gd2hldGhlciB3ZSdyZSBsb2NhbC91dGMvb2Zmc2V0IG9yIG5vdC5cbiAgICB2YXIgbm93ID0gdGltZSB8fCBjcmVhdGVMb2NhbCgpLFxuICAgICAgICBzb2QgPSBjbG9uZVdpdGhPZmZzZXQobm93LCB0aGlzKS5zdGFydE9mKCdkYXknKSxcbiAgICAgICAgZm9ybWF0ID0gaG9va3MuY2FsZW5kYXJGb3JtYXQodGhpcywgc29kKSB8fCAnc2FtZUVsc2UnLFxuICAgICAgICBvdXRwdXQgPVxuICAgICAgICAgICAgZm9ybWF0cyAmJlxuICAgICAgICAgICAgKGlzRnVuY3Rpb24oZm9ybWF0c1tmb3JtYXRdKVxuICAgICAgICAgICAgICAgID8gZm9ybWF0c1tmb3JtYXRdLmNhbGwodGhpcywgbm93KVxuICAgICAgICAgICAgICAgIDogZm9ybWF0c1tmb3JtYXRdKTtcblxuICAgIHJldHVybiB0aGlzLmZvcm1hdChcbiAgICAgICAgb3V0cHV0IHx8IHRoaXMubG9jYWxlRGF0YSgpLmNhbGVuZGFyKGZvcm1hdCwgdGhpcywgY3JlYXRlTG9jYWwobm93KSlcbiAgICApO1xufVxuXG5mdW5jdGlvbiBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IE1vbWVudCh0aGlzKTtcbn1cblxuZnVuY3Rpb24gaXNBZnRlcihpbnB1dCwgdW5pdHMpIHtcbiAgICB2YXIgbG9jYWxJbnB1dCA9IGlzTW9tZW50KGlucHV0KSA/IGlucHV0IDogY3JlYXRlTG9jYWwoaW5wdXQpO1xuICAgIGlmICghKHRoaXMuaXNWYWxpZCgpICYmIGxvY2FsSW5wdXQuaXNWYWxpZCgpKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpIHx8ICdtaWxsaXNlY29uZCc7XG4gICAgaWYgKHVuaXRzID09PSAnbWlsbGlzZWNvbmQnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKSA+IGxvY2FsSW5wdXQudmFsdWVPZigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsb2NhbElucHV0LnZhbHVlT2YoKSA8IHRoaXMuY2xvbmUoKS5zdGFydE9mKHVuaXRzKS52YWx1ZU9mKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc0JlZm9yZShpbnB1dCwgdW5pdHMpIHtcbiAgICB2YXIgbG9jYWxJbnB1dCA9IGlzTW9tZW50KGlucHV0KSA/IGlucHV0IDogY3JlYXRlTG9jYWwoaW5wdXQpO1xuICAgIGlmICghKHRoaXMuaXNWYWxpZCgpICYmIGxvY2FsSW5wdXQuaXNWYWxpZCgpKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpIHx8ICdtaWxsaXNlY29uZCc7XG4gICAgaWYgKHVuaXRzID09PSAnbWlsbGlzZWNvbmQnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKSA8IGxvY2FsSW5wdXQudmFsdWVPZigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsb25lKCkuZW5kT2YodW5pdHMpLnZhbHVlT2YoKSA8IGxvY2FsSW5wdXQudmFsdWVPZigpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaXNCZXR3ZWVuKGZyb20sIHRvLCB1bml0cywgaW5jbHVzaXZpdHkpIHtcbiAgICB2YXIgbG9jYWxGcm9tID0gaXNNb21lbnQoZnJvbSkgPyBmcm9tIDogY3JlYXRlTG9jYWwoZnJvbSksXG4gICAgICAgIGxvY2FsVG8gPSBpc01vbWVudCh0bykgPyB0byA6IGNyZWF0ZUxvY2FsKHRvKTtcbiAgICBpZiAoISh0aGlzLmlzVmFsaWQoKSAmJiBsb2NhbEZyb20uaXNWYWxpZCgpICYmIGxvY2FsVG8uaXNWYWxpZCgpKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGluY2x1c2l2aXR5ID0gaW5jbHVzaXZpdHkgfHwgJygpJztcbiAgICByZXR1cm4gKFxuICAgICAgICAoaW5jbHVzaXZpdHlbMF0gPT09ICcoJ1xuICAgICAgICAgICAgPyB0aGlzLmlzQWZ0ZXIobG9jYWxGcm9tLCB1bml0cylcbiAgICAgICAgICAgIDogIXRoaXMuaXNCZWZvcmUobG9jYWxGcm9tLCB1bml0cykpICYmXG4gICAgICAgIChpbmNsdXNpdml0eVsxXSA9PT0gJyknXG4gICAgICAgICAgICA/IHRoaXMuaXNCZWZvcmUobG9jYWxUbywgdW5pdHMpXG4gICAgICAgICAgICA6ICF0aGlzLmlzQWZ0ZXIobG9jYWxUbywgdW5pdHMpKVxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGlzU2FtZShpbnB1dCwgdW5pdHMpIHtcbiAgICB2YXIgbG9jYWxJbnB1dCA9IGlzTW9tZW50KGlucHV0KSA/IGlucHV0IDogY3JlYXRlTG9jYWwoaW5wdXQpLFxuICAgICAgICBpbnB1dE1zO1xuICAgIGlmICghKHRoaXMuaXNWYWxpZCgpICYmIGxvY2FsSW5wdXQuaXNWYWxpZCgpKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpIHx8ICdtaWxsaXNlY29uZCc7XG4gICAgaWYgKHVuaXRzID09PSAnbWlsbGlzZWNvbmQnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKSA9PT0gbG9jYWxJbnB1dC52YWx1ZU9mKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW5wdXRNcyA9IGxvY2FsSW5wdXQudmFsdWVPZigpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgdGhpcy5jbG9uZSgpLnN0YXJ0T2YodW5pdHMpLnZhbHVlT2YoKSA8PSBpbnB1dE1zICYmXG4gICAgICAgICAgICBpbnB1dE1zIDw9IHRoaXMuY2xvbmUoKS5lbmRPZih1bml0cykudmFsdWVPZigpXG4gICAgICAgICk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc1NhbWVPckFmdGVyKGlucHV0LCB1bml0cykge1xuICAgIHJldHVybiB0aGlzLmlzU2FtZShpbnB1dCwgdW5pdHMpIHx8IHRoaXMuaXNBZnRlcihpbnB1dCwgdW5pdHMpO1xufVxuXG5mdW5jdGlvbiBpc1NhbWVPckJlZm9yZShpbnB1dCwgdW5pdHMpIHtcbiAgICByZXR1cm4gdGhpcy5pc1NhbWUoaW5wdXQsIHVuaXRzKSB8fCB0aGlzLmlzQmVmb3JlKGlucHV0LCB1bml0cyk7XG59XG5cbmZ1bmN0aW9uIGRpZmYoaW5wdXQsIHVuaXRzLCBhc0Zsb2F0KSB7XG4gICAgdmFyIHRoYXQsIHpvbmVEZWx0YSwgb3V0cHV0O1xuXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4gTmFOO1xuICAgIH1cblxuICAgIHRoYXQgPSBjbG9uZVdpdGhPZmZzZXQoaW5wdXQsIHRoaXMpO1xuXG4gICAgaWYgKCF0aGF0LmlzVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4gTmFOO1xuICAgIH1cblxuICAgIHpvbmVEZWx0YSA9ICh0aGF0LnV0Y09mZnNldCgpIC0gdGhpcy51dGNPZmZzZXQoKSkgKiA2ZTQ7XG5cbiAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcblxuICAgIHN3aXRjaCAodW5pdHMpIHtcbiAgICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgICAgICBvdXRwdXQgPSBtb250aERpZmYodGhpcywgdGhhdCkgLyAxMjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtb250aCc6XG4gICAgICAgICAgICBvdXRwdXQgPSBtb250aERpZmYodGhpcywgdGhhdCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncXVhcnRlcic6XG4gICAgICAgICAgICBvdXRwdXQgPSBtb250aERpZmYodGhpcywgdGhhdCkgLyAzO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgICAgICAgICBvdXRwdXQgPSAodGhpcyAtIHRoYXQpIC8gMWUzO1xuICAgICAgICAgICAgYnJlYWs7IC8vIDEwMDBcbiAgICAgICAgY2FzZSAnbWludXRlJzpcbiAgICAgICAgICAgIG91dHB1dCA9ICh0aGlzIC0gdGhhdCkgLyA2ZTQ7XG4gICAgICAgICAgICBicmVhazsgLy8gMTAwMCAqIDYwXG4gICAgICAgIGNhc2UgJ2hvdXInOlxuICAgICAgICAgICAgb3V0cHV0ID0gKHRoaXMgLSB0aGF0KSAvIDM2ZTU7XG4gICAgICAgICAgICBicmVhazsgLy8gMTAwMCAqIDYwICogNjBcbiAgICAgICAgY2FzZSAnZGF5JzpcbiAgICAgICAgICAgIG91dHB1dCA9ICh0aGlzIC0gdGhhdCAtIHpvbmVEZWx0YSkgLyA4NjRlNTtcbiAgICAgICAgICAgIGJyZWFrOyAvLyAxMDAwICogNjAgKiA2MCAqIDI0LCBuZWdhdGUgZHN0XG4gICAgICAgIGNhc2UgJ3dlZWsnOlxuICAgICAgICAgICAgb3V0cHV0ID0gKHRoaXMgLSB0aGF0IC0gem9uZURlbHRhKSAvIDYwNDhlNTtcbiAgICAgICAgICAgIGJyZWFrOyAvLyAxMDAwICogNjAgKiA2MCAqIDI0ICogNywgbmVnYXRlIGRzdFxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgb3V0cHV0ID0gdGhpcyAtIHRoYXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFzRmxvYXQgPyBvdXRwdXQgOiBhYnNGbG9vcihvdXRwdXQpO1xufVxuXG5mdW5jdGlvbiBtb250aERpZmYoYSwgYikge1xuICAgIGlmIChhLmRhdGUoKSA8IGIuZGF0ZSgpKSB7XG4gICAgICAgIC8vIGVuZC1vZi1tb250aCBjYWxjdWxhdGlvbnMgd29yayBjb3JyZWN0IHdoZW4gdGhlIHN0YXJ0IG1vbnRoIGhhcyBtb3JlXG4gICAgICAgIC8vIGRheXMgdGhhbiB0aGUgZW5kIG1vbnRoLlxuICAgICAgICByZXR1cm4gLW1vbnRoRGlmZihiLCBhKTtcbiAgICB9XG4gICAgLy8gZGlmZmVyZW5jZSBpbiBtb250aHNcbiAgICB2YXIgd2hvbGVNb250aERpZmYgPSAoYi55ZWFyKCkgLSBhLnllYXIoKSkgKiAxMiArIChiLm1vbnRoKCkgLSBhLm1vbnRoKCkpLFxuICAgICAgICAvLyBiIGlzIGluIChhbmNob3IgLSAxIG1vbnRoLCBhbmNob3IgKyAxIG1vbnRoKVxuICAgICAgICBhbmNob3IgPSBhLmNsb25lKCkuYWRkKHdob2xlTW9udGhEaWZmLCAnbW9udGhzJyksXG4gICAgICAgIGFuY2hvcjIsXG4gICAgICAgIGFkanVzdDtcblxuICAgIGlmIChiIC0gYW5jaG9yIDwgMCkge1xuICAgICAgICBhbmNob3IyID0gYS5jbG9uZSgpLmFkZCh3aG9sZU1vbnRoRGlmZiAtIDEsICdtb250aHMnKTtcbiAgICAgICAgLy8gbGluZWFyIGFjcm9zcyB0aGUgbW9udGhcbiAgICAgICAgYWRqdXN0ID0gKGIgLSBhbmNob3IpIC8gKGFuY2hvciAtIGFuY2hvcjIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFuY2hvcjIgPSBhLmNsb25lKCkuYWRkKHdob2xlTW9udGhEaWZmICsgMSwgJ21vbnRocycpO1xuICAgICAgICAvLyBsaW5lYXIgYWNyb3NzIHRoZSBtb250aFxuICAgICAgICBhZGp1c3QgPSAoYiAtIGFuY2hvcikgLyAoYW5jaG9yMiAtIGFuY2hvcik7XG4gICAgfVxuXG4gICAgLy9jaGVjayBmb3IgbmVnYXRpdmUgemVybywgcmV0dXJuIHplcm8gaWYgbmVnYXRpdmUgemVyb1xuICAgIHJldHVybiAtKHdob2xlTW9udGhEaWZmICsgYWRqdXN0KSB8fCAwO1xufVxuXG5ob29rcy5kZWZhdWx0Rm9ybWF0ID0gJ1lZWVktTU0tRERUSEg6bW06c3NaJztcbmhvb2tzLmRlZmF1bHRGb3JtYXRVdGMgPSAnWVlZWS1NTS1ERFRISDptbTpzc1taXSc7XG5cbmZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmNsb25lKCkubG9jYWxlKCdlbicpLmZvcm1hdCgnZGRkIE1NTSBERCBZWVlZIEhIOm1tOnNzIFtHTVRdWlonKTtcbn1cblxuZnVuY3Rpb24gdG9JU09TdHJpbmcoa2VlcE9mZnNldCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhciB1dGMgPSBrZWVwT2Zmc2V0ICE9PSB0cnVlLFxuICAgICAgICBtID0gdXRjID8gdGhpcy5jbG9uZSgpLnV0YygpIDogdGhpcztcbiAgICBpZiAobS55ZWFyKCkgPCAwIHx8IG0ueWVhcigpID4gOTk5OSkge1xuICAgICAgICByZXR1cm4gZm9ybWF0TW9tZW50KFxuICAgICAgICAgICAgbSxcbiAgICAgICAgICAgIHV0Y1xuICAgICAgICAgICAgICAgID8gJ1lZWVlZWS1NTS1ERFtUXUhIOm1tOnNzLlNTU1taXSdcbiAgICAgICAgICAgICAgICA6ICdZWVlZWVktTU0tRERbVF1ISDptbTpzcy5TU1NaJ1xuICAgICAgICApO1xuICAgIH1cbiAgICBpZiAoaXNGdW5jdGlvbihEYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZykpIHtcbiAgICAgICAgLy8gbmF0aXZlIGltcGxlbWVudGF0aW9uIGlzIH41MHggZmFzdGVyLCB1c2UgaXQgd2hlbiB3ZSBjYW5cbiAgICAgICAgaWYgKHV0Yykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9EYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLnZhbHVlT2YoKSArIHRoaXMudXRjT2Zmc2V0KCkgKiA2MCAqIDEwMDApXG4gICAgICAgICAgICAgICAgLnRvSVNPU3RyaW5nKClcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgnWicsIGZvcm1hdE1vbWVudChtLCAnWicpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZm9ybWF0TW9tZW50KFxuICAgICAgICBtLFxuICAgICAgICB1dGMgPyAnWVlZWS1NTS1ERFtUXUhIOm1tOnNzLlNTU1taXScgOiAnWVlZWS1NTS1ERFtUXUhIOm1tOnNzLlNTU1onXG4gICAgKTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYSBodW1hbiByZWFkYWJsZSByZXByZXNlbnRhdGlvbiBvZiBhIG1vbWVudCB0aGF0IGNhblxuICogYWxzbyBiZSBldmFsdWF0ZWQgdG8gZ2V0IGEgbmV3IG1vbWVudCB3aGljaCBpcyB0aGUgc2FtZVxuICpcbiAqIEBsaW5rIGh0dHBzOi8vbm9kZWpzLm9yZy9kaXN0L2xhdGVzdC9kb2NzL2FwaS91dGlsLmh0bWwjdXRpbF9jdXN0b21faW5zcGVjdF9mdW5jdGlvbl9vbl9vYmplY3RzXG4gKi9cbmZ1bmN0aW9uIGluc3BlY3QoKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4gJ21vbWVudC5pbnZhbGlkKC8qICcgKyB0aGlzLl9pICsgJyAqLyknO1xuICAgIH1cbiAgICB2YXIgZnVuYyA9ICdtb21lbnQnLFxuICAgICAgICB6b25lID0gJycsXG4gICAgICAgIHByZWZpeCxcbiAgICAgICAgeWVhcixcbiAgICAgICAgZGF0ZXRpbWUsXG4gICAgICAgIHN1ZmZpeDtcbiAgICBpZiAoIXRoaXMuaXNMb2NhbCgpKSB7XG4gICAgICAgIGZ1bmMgPSB0aGlzLnV0Y09mZnNldCgpID09PSAwID8gJ21vbWVudC51dGMnIDogJ21vbWVudC5wYXJzZVpvbmUnO1xuICAgICAgICB6b25lID0gJ1onO1xuICAgIH1cbiAgICBwcmVmaXggPSAnWycgKyBmdW5jICsgJyhcIl0nO1xuICAgIHllYXIgPSAwIDw9IHRoaXMueWVhcigpICYmIHRoaXMueWVhcigpIDw9IDk5OTkgPyAnWVlZWScgOiAnWVlZWVlZJztcbiAgICBkYXRldGltZSA9ICctTU0tRERbVF1ISDptbTpzcy5TU1MnO1xuICAgIHN1ZmZpeCA9IHpvbmUgKyAnW1wiKV0nO1xuXG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0KHByZWZpeCArIHllYXIgKyBkYXRldGltZSArIHN1ZmZpeCk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdChpbnB1dFN0cmluZykge1xuICAgIGlmICghaW5wdXRTdHJpbmcpIHtcbiAgICAgICAgaW5wdXRTdHJpbmcgPSB0aGlzLmlzVXRjKClcbiAgICAgICAgICAgID8gaG9va3MuZGVmYXVsdEZvcm1hdFV0Y1xuICAgICAgICAgICAgOiBob29rcy5kZWZhdWx0Rm9ybWF0O1xuICAgIH1cbiAgICB2YXIgb3V0cHV0ID0gZm9ybWF0TW9tZW50KHRoaXMsIGlucHV0U3RyaW5nKTtcbiAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkucG9zdGZvcm1hdChvdXRwdXQpO1xufVxuXG5mdW5jdGlvbiBmcm9tKHRpbWUsIHdpdGhvdXRTdWZmaXgpIHtcbiAgICBpZiAoXG4gICAgICAgIHRoaXMuaXNWYWxpZCgpICYmXG4gICAgICAgICgoaXNNb21lbnQodGltZSkgJiYgdGltZS5pc1ZhbGlkKCkpIHx8IGNyZWF0ZUxvY2FsKHRpbWUpLmlzVmFsaWQoKSlcbiAgICApIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUR1cmF0aW9uKHsgdG86IHRoaXMsIGZyb206IHRpbWUgfSlcbiAgICAgICAgICAgIC5sb2NhbGUodGhpcy5sb2NhbGUoKSlcbiAgICAgICAgICAgIC5odW1hbml6ZSghd2l0aG91dFN1ZmZpeCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLmludmFsaWREYXRlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBmcm9tTm93KHdpdGhvdXRTdWZmaXgpIHtcbiAgICByZXR1cm4gdGhpcy5mcm9tKGNyZWF0ZUxvY2FsKCksIHdpdGhvdXRTdWZmaXgpO1xufVxuXG5mdW5jdGlvbiB0byh0aW1lLCB3aXRob3V0U3VmZml4KSB7XG4gICAgaWYgKFxuICAgICAgICB0aGlzLmlzVmFsaWQoKSAmJlxuICAgICAgICAoKGlzTW9tZW50KHRpbWUpICYmIHRpbWUuaXNWYWxpZCgpKSB8fCBjcmVhdGVMb2NhbCh0aW1lKS5pc1ZhbGlkKCkpXG4gICAgKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVEdXJhdGlvbih7IGZyb206IHRoaXMsIHRvOiB0aW1lIH0pXG4gICAgICAgICAgICAubG9jYWxlKHRoaXMubG9jYWxlKCkpXG4gICAgICAgICAgICAuaHVtYW5pemUoIXdpdGhvdXRTdWZmaXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5pbnZhbGlkRGF0ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdG9Ob3cod2l0aG91dFN1ZmZpeCkge1xuICAgIHJldHVybiB0aGlzLnRvKGNyZWF0ZUxvY2FsKCksIHdpdGhvdXRTdWZmaXgpO1xufVxuXG4vLyBJZiBwYXNzZWQgYSBsb2NhbGUga2V5LCBpdCB3aWxsIHNldCB0aGUgbG9jYWxlIGZvciB0aGlzXG4vLyBpbnN0YW5jZS4gIE90aGVyd2lzZSwgaXQgd2lsbCByZXR1cm4gdGhlIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyB2YXJpYWJsZXMgZm9yIHRoaXMgaW5zdGFuY2UuXG5mdW5jdGlvbiBsb2NhbGUoa2V5KSB7XG4gICAgdmFyIG5ld0xvY2FsZURhdGE7XG5cbiAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvY2FsZS5fYWJicjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuZXdMb2NhbGVEYXRhID0gZ2V0TG9jYWxlKGtleSk7XG4gICAgICAgIGlmIChuZXdMb2NhbGVEYXRhICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX2xvY2FsZSA9IG5ld0xvY2FsZURhdGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG52YXIgbGFuZyA9IGRlcHJlY2F0ZShcbiAgICAnbW9tZW50KCkubGFuZygpIGlzIGRlcHJlY2F0ZWQuIEluc3RlYWQsIHVzZSBtb21lbnQoKS5sb2NhbGVEYXRhKCkgdG8gZ2V0IHRoZSBsYW5ndWFnZSBjb25maWd1cmF0aW9uLiBVc2UgbW9tZW50KCkubG9jYWxlKCkgdG8gY2hhbmdlIGxhbmd1YWdlcy4nLFxuICAgIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGUoa2V5KTtcbiAgICAgICAgfVxuICAgIH1cbik7XG5cbmZ1bmN0aW9uIGxvY2FsZURhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZTtcbn1cblxudmFyIE1TX1BFUl9TRUNPTkQgPSAxMDAwLFxuICAgIE1TX1BFUl9NSU5VVEUgPSA2MCAqIE1TX1BFUl9TRUNPTkQsXG4gICAgTVNfUEVSX0hPVVIgPSA2MCAqIE1TX1BFUl9NSU5VVEUsXG4gICAgTVNfUEVSXzQwMF9ZRUFSUyA9ICgzNjUgKiA0MDAgKyA5NykgKiAyNCAqIE1TX1BFUl9IT1VSO1xuXG4vLyBhY3R1YWwgbW9kdWxvIC0gaGFuZGxlcyBuZWdhdGl2ZSBudW1iZXJzIChmb3IgZGF0ZXMgYmVmb3JlIDE5NzApOlxuZnVuY3Rpb24gbW9kJDEoZGl2aWRlbmQsIGRpdmlzb3IpIHtcbiAgICByZXR1cm4gKChkaXZpZGVuZCAlIGRpdmlzb3IpICsgZGl2aXNvcikgJSBkaXZpc29yO1xufVxuXG5mdW5jdGlvbiBsb2NhbFN0YXJ0T2ZEYXRlKHksIG0sIGQpIHtcbiAgICAvLyB0aGUgZGF0ZSBjb25zdHJ1Y3RvciByZW1hcHMgeWVhcnMgMC05OSB0byAxOTAwLTE5OTlcbiAgICBpZiAoeSA8IDEwMCAmJiB5ID49IDApIHtcbiAgICAgICAgLy8gcHJlc2VydmUgbGVhcCB5ZWFycyB1c2luZyBhIGZ1bGwgNDAwIHllYXIgY3ljbGUsIHRoZW4gcmVzZXRcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHkgKyA0MDAsIG0sIGQpIC0gTVNfUEVSXzQwMF9ZRUFSUztcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoeSwgbSwgZCkudmFsdWVPZigpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdXRjU3RhcnRPZkRhdGUoeSwgbSwgZCkge1xuICAgIC8vIERhdGUuVVRDIHJlbWFwcyB5ZWFycyAwLTk5IHRvIDE5MDAtMTk5OVxuICAgIGlmICh5IDwgMTAwICYmIHkgPj0gMCkge1xuICAgICAgICAvLyBwcmVzZXJ2ZSBsZWFwIHllYXJzIHVzaW5nIGEgZnVsbCA0MDAgeWVhciBjeWNsZSwgdGhlbiByZXNldFxuICAgICAgICByZXR1cm4gRGF0ZS5VVEMoeSArIDQwMCwgbSwgZCkgLSBNU19QRVJfNDAwX1lFQVJTO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBEYXRlLlVUQyh5LCBtLCBkKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHN0YXJ0T2YodW5pdHMpIHtcbiAgICB2YXIgdGltZSwgc3RhcnRPZkRhdGU7XG4gICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cyk7XG4gICAgaWYgKHVuaXRzID09PSB1bmRlZmluZWQgfHwgdW5pdHMgPT09ICdtaWxsaXNlY29uZCcgfHwgIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN0YXJ0T2ZEYXRlID0gdGhpcy5faXNVVEMgPyB1dGNTdGFydE9mRGF0ZSA6IGxvY2FsU3RhcnRPZkRhdGU7XG5cbiAgICBzd2l0Y2ggKHVuaXRzKSB7XG4gICAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICAgICAgdGltZSA9IHN0YXJ0T2ZEYXRlKHRoaXMueWVhcigpLCAwLCAxKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdxdWFydGVyJzpcbiAgICAgICAgICAgIHRpbWUgPSBzdGFydE9mRGF0ZShcbiAgICAgICAgICAgICAgICB0aGlzLnllYXIoKSxcbiAgICAgICAgICAgICAgICB0aGlzLm1vbnRoKCkgLSAodGhpcy5tb250aCgpICUgMyksXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtb250aCc6XG4gICAgICAgICAgICB0aW1lID0gc3RhcnRPZkRhdGUodGhpcy55ZWFyKCksIHRoaXMubW9udGgoKSwgMSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnd2Vlayc6XG4gICAgICAgICAgICB0aW1lID0gc3RhcnRPZkRhdGUoXG4gICAgICAgICAgICAgICAgdGhpcy55ZWFyKCksXG4gICAgICAgICAgICAgICAgdGhpcy5tb250aCgpLFxuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZSgpIC0gdGhpcy53ZWVrZGF5KClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnaXNvV2Vlayc6XG4gICAgICAgICAgICB0aW1lID0gc3RhcnRPZkRhdGUoXG4gICAgICAgICAgICAgICAgdGhpcy55ZWFyKCksXG4gICAgICAgICAgICAgICAgdGhpcy5tb250aCgpLFxuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZSgpIC0gKHRoaXMuaXNvV2Vla2RheSgpIC0gMSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZGF5JzpcbiAgICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgICAgICB0aW1lID0gc3RhcnRPZkRhdGUodGhpcy55ZWFyKCksIHRoaXMubW9udGgoKSwgdGhpcy5kYXRlKCkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2hvdXInOlxuICAgICAgICAgICAgdGltZSA9IHRoaXMuX2QudmFsdWVPZigpO1xuICAgICAgICAgICAgdGltZSAtPSBtb2QkMShcbiAgICAgICAgICAgICAgICB0aW1lICsgKHRoaXMuX2lzVVRDID8gMCA6IHRoaXMudXRjT2Zmc2V0KCkgKiBNU19QRVJfTUlOVVRFKSxcbiAgICAgICAgICAgICAgICBNU19QRVJfSE9VUlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtaW51dGUnOlxuICAgICAgICAgICAgdGltZSA9IHRoaXMuX2QudmFsdWVPZigpO1xuICAgICAgICAgICAgdGltZSAtPSBtb2QkMSh0aW1lLCBNU19QRVJfTUlOVVRFKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzZWNvbmQnOlxuICAgICAgICAgICAgdGltZSA9IHRoaXMuX2QudmFsdWVPZigpO1xuICAgICAgICAgICAgdGltZSAtPSBtb2QkMSh0aW1lLCBNU19QRVJfU0VDT05EKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRoaXMuX2Quc2V0VGltZSh0aW1lKTtcbiAgICBob29rcy51cGRhdGVPZmZzZXQodGhpcywgdHJ1ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGVuZE9mKHVuaXRzKSB7XG4gICAgdmFyIHRpbWUsIHN0YXJ0T2ZEYXRlO1xuICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpO1xuICAgIGlmICh1bml0cyA9PT0gdW5kZWZpbmVkIHx8IHVuaXRzID09PSAnbWlsbGlzZWNvbmQnIHx8ICF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdGFydE9mRGF0ZSA9IHRoaXMuX2lzVVRDID8gdXRjU3RhcnRPZkRhdGUgOiBsb2NhbFN0YXJ0T2ZEYXRlO1xuXG4gICAgc3dpdGNoICh1bml0cykge1xuICAgICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgICAgIHRpbWUgPSBzdGFydE9mRGF0ZSh0aGlzLnllYXIoKSArIDEsIDAsIDEpIC0gMTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdxdWFydGVyJzpcbiAgICAgICAgICAgIHRpbWUgPVxuICAgICAgICAgICAgICAgIHN0YXJ0T2ZEYXRlKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnllYXIoKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb250aCgpIC0gKHRoaXMubW9udGgoKSAlIDMpICsgMyxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICkgLSAxO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICAgIHRpbWUgPSBzdGFydE9mRGF0ZSh0aGlzLnllYXIoKSwgdGhpcy5tb250aCgpICsgMSwgMSkgLSAxO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3dlZWsnOlxuICAgICAgICAgICAgdGltZSA9XG4gICAgICAgICAgICAgICAgc3RhcnRPZkRhdGUoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueWVhcigpLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vbnRoKCksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZSgpIC0gdGhpcy53ZWVrZGF5KCkgKyA3XG4gICAgICAgICAgICAgICAgKSAtIDE7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnaXNvV2Vlayc6XG4gICAgICAgICAgICB0aW1lID1cbiAgICAgICAgICAgICAgICBzdGFydE9mRGF0ZShcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ZWFyKCksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9udGgoKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlKCkgLSAodGhpcy5pc29XZWVrZGF5KCkgLSAxKSArIDdcbiAgICAgICAgICAgICAgICApIC0gMTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkYXknOlxuICAgICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgICAgIHRpbWUgPSBzdGFydE9mRGF0ZSh0aGlzLnllYXIoKSwgdGhpcy5tb250aCgpLCB0aGlzLmRhdGUoKSArIDEpIC0gMTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdob3VyJzpcbiAgICAgICAgICAgIHRpbWUgPSB0aGlzLl9kLnZhbHVlT2YoKTtcbiAgICAgICAgICAgIHRpbWUgKz1cbiAgICAgICAgICAgICAgICBNU19QRVJfSE9VUiAtXG4gICAgICAgICAgICAgICAgbW9kJDEoXG4gICAgICAgICAgICAgICAgICAgIHRpbWUgKyAodGhpcy5faXNVVEMgPyAwIDogdGhpcy51dGNPZmZzZXQoKSAqIE1TX1BFUl9NSU5VVEUpLFxuICAgICAgICAgICAgICAgICAgICBNU19QRVJfSE9VUlxuICAgICAgICAgICAgICAgICkgLVxuICAgICAgICAgICAgICAgIDE7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbWludXRlJzpcbiAgICAgICAgICAgIHRpbWUgPSB0aGlzLl9kLnZhbHVlT2YoKTtcbiAgICAgICAgICAgIHRpbWUgKz0gTVNfUEVSX01JTlVURSAtIG1vZCQxKHRpbWUsIE1TX1BFUl9NSU5VVEUpIC0gMTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzZWNvbmQnOlxuICAgICAgICAgICAgdGltZSA9IHRoaXMuX2QudmFsdWVPZigpO1xuICAgICAgICAgICAgdGltZSArPSBNU19QRVJfU0VDT05EIC0gbW9kJDEodGltZSwgTVNfUEVSX1NFQ09ORCkgLSAxO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhpcy5fZC5zZXRUaW1lKHRpbWUpO1xuICAgIGhvb2tzLnVwZGF0ZU9mZnNldCh0aGlzLCB0cnVlKTtcbiAgICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gdmFsdWVPZigpIHtcbiAgICByZXR1cm4gdGhpcy5fZC52YWx1ZU9mKCkgLSAodGhpcy5fb2Zmc2V0IHx8IDApICogNjAwMDA7XG59XG5cbmZ1bmN0aW9uIHVuaXgoKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy52YWx1ZU9mKCkgLyAxMDAwKTtcbn1cblxuZnVuY3Rpb24gdG9EYXRlKCkge1xuICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLnZhbHVlT2YoKSk7XG59XG5cbmZ1bmN0aW9uIHRvQXJyYXkoKSB7XG4gICAgdmFyIG0gPSB0aGlzO1xuICAgIHJldHVybiBbXG4gICAgICAgIG0ueWVhcigpLFxuICAgICAgICBtLm1vbnRoKCksXG4gICAgICAgIG0uZGF0ZSgpLFxuICAgICAgICBtLmhvdXIoKSxcbiAgICAgICAgbS5taW51dGUoKSxcbiAgICAgICAgbS5zZWNvbmQoKSxcbiAgICAgICAgbS5taWxsaXNlY29uZCgpLFxuICAgIF07XG59XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KCkge1xuICAgIHZhciBtID0gdGhpcztcbiAgICByZXR1cm4ge1xuICAgICAgICB5ZWFyczogbS55ZWFyKCksXG4gICAgICAgIG1vbnRoczogbS5tb250aCgpLFxuICAgICAgICBkYXRlOiBtLmRhdGUoKSxcbiAgICAgICAgaG91cnM6IG0uaG91cnMoKSxcbiAgICAgICAgbWludXRlczogbS5taW51dGVzKCksXG4gICAgICAgIHNlY29uZHM6IG0uc2Vjb25kcygpLFxuICAgICAgICBtaWxsaXNlY29uZHM6IG0ubWlsbGlzZWNvbmRzKCksXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gdG9KU09OKCkge1xuICAgIC8vIG5ldyBEYXRlKE5hTikudG9KU09OKCkgPT09IG51bGxcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkKCkgPyB0aGlzLnRvSVNPU3RyaW5nKCkgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkJDIoKSB7XG4gICAgcmV0dXJuIGlzVmFsaWQodGhpcyk7XG59XG5cbmZ1bmN0aW9uIHBhcnNpbmdGbGFncygpIHtcbiAgICByZXR1cm4gZXh0ZW5kKHt9LCBnZXRQYXJzaW5nRmxhZ3ModGhpcykpO1xufVxuXG5mdW5jdGlvbiBpbnZhbGlkQXQoKSB7XG4gICAgcmV0dXJuIGdldFBhcnNpbmdGbGFncyh0aGlzKS5vdmVyZmxvdztcbn1cblxuZnVuY3Rpb24gY3JlYXRpb25EYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGlucHV0OiB0aGlzLl9pLFxuICAgICAgICBmb3JtYXQ6IHRoaXMuX2YsXG4gICAgICAgIGxvY2FsZTogdGhpcy5fbG9jYWxlLFxuICAgICAgICBpc1VUQzogdGhpcy5faXNVVEMsXG4gICAgICAgIHN0cmljdDogdGhpcy5fc3RyaWN0LFxuICAgIH07XG59XG5cbmFkZEZvcm1hdFRva2VuKCdOJywgMCwgMCwgJ2VyYUFiYnInKTtcbmFkZEZvcm1hdFRva2VuKCdOTicsIDAsIDAsICdlcmFBYmJyJyk7XG5hZGRGb3JtYXRUb2tlbignTk5OJywgMCwgMCwgJ2VyYUFiYnInKTtcbmFkZEZvcm1hdFRva2VuKCdOTk5OJywgMCwgMCwgJ2VyYU5hbWUnKTtcbmFkZEZvcm1hdFRva2VuKCdOTk5OTicsIDAsIDAsICdlcmFOYXJyb3cnKTtcblxuYWRkRm9ybWF0VG9rZW4oJ3knLCBbJ3knLCAxXSwgJ3lvJywgJ2VyYVllYXInKTtcbmFkZEZvcm1hdFRva2VuKCd5JywgWyd5eScsIDJdLCAwLCAnZXJhWWVhcicpO1xuYWRkRm9ybWF0VG9rZW4oJ3knLCBbJ3l5eScsIDNdLCAwLCAnZXJhWWVhcicpO1xuYWRkRm9ybWF0VG9rZW4oJ3knLCBbJ3l5eXknLCA0XSwgMCwgJ2VyYVllYXInKTtcblxuYWRkUmVnZXhUb2tlbignTicsIG1hdGNoRXJhQWJicik7XG5hZGRSZWdleFRva2VuKCdOTicsIG1hdGNoRXJhQWJicik7XG5hZGRSZWdleFRva2VuKCdOTk4nLCBtYXRjaEVyYUFiYnIpO1xuYWRkUmVnZXhUb2tlbignTk5OTicsIG1hdGNoRXJhTmFtZSk7XG5hZGRSZWdleFRva2VuKCdOTk5OTicsIG1hdGNoRXJhTmFycm93KTtcblxuYWRkUGFyc2VUb2tlbihcbiAgICBbJ04nLCAnTk4nLCAnTk5OJywgJ05OTk4nLCAnTk5OTk4nXSxcbiAgICBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcsIHRva2VuKSB7XG4gICAgICAgIHZhciBlcmEgPSBjb25maWcuX2xvY2FsZS5lcmFzUGFyc2UoaW5wdXQsIHRva2VuLCBjb25maWcuX3N0cmljdCk7XG4gICAgICAgIGlmIChlcmEpIHtcbiAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmVyYSA9IGVyYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmludmFsaWRFcmEgPSBpbnB1dDtcbiAgICAgICAgfVxuICAgIH1cbik7XG5cbmFkZFJlZ2V4VG9rZW4oJ3knLCBtYXRjaFVuc2lnbmVkKTtcbmFkZFJlZ2V4VG9rZW4oJ3l5JywgbWF0Y2hVbnNpZ25lZCk7XG5hZGRSZWdleFRva2VuKCd5eXknLCBtYXRjaFVuc2lnbmVkKTtcbmFkZFJlZ2V4VG9rZW4oJ3l5eXknLCBtYXRjaFVuc2lnbmVkKTtcbmFkZFJlZ2V4VG9rZW4oJ3lvJywgbWF0Y2hFcmFZZWFyT3JkaW5hbCk7XG5cbmFkZFBhcnNlVG9rZW4oWyd5JywgJ3l5JywgJ3l5eScsICd5eXl5J10sIFlFQVIpO1xuYWRkUGFyc2VUb2tlbihbJ3lvJ10sIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZywgdG9rZW4pIHtcbiAgICB2YXIgbWF0Y2g7XG4gICAgaWYgKGNvbmZpZy5fbG9jYWxlLl9lcmFZZWFyT3JkaW5hbFJlZ2V4KSB7XG4gICAgICAgIG1hdGNoID0gaW5wdXQubWF0Y2goY29uZmlnLl9sb2NhbGUuX2VyYVllYXJPcmRpbmFsUmVnZXgpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuX2xvY2FsZS5lcmFZZWFyT3JkaW5hbFBhcnNlKSB7XG4gICAgICAgIGFycmF5W1lFQVJdID0gY29uZmlnLl9sb2NhbGUuZXJhWWVhck9yZGluYWxQYXJzZShpbnB1dCwgbWF0Y2gpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFycmF5W1lFQVJdID0gcGFyc2VJbnQoaW5wdXQsIDEwKTtcbiAgICB9XG59KTtcblxuZnVuY3Rpb24gbG9jYWxlRXJhcyhtLCBmb3JtYXQpIHtcbiAgICB2YXIgaSxcbiAgICAgICAgbCxcbiAgICAgICAgZGF0ZSxcbiAgICAgICAgZXJhcyA9IHRoaXMuX2VyYXMgfHwgZ2V0TG9jYWxlKCdlbicpLl9lcmFzO1xuICAgIGZvciAoaSA9IDAsIGwgPSBlcmFzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgICAgICBzd2l0Y2ggKHR5cGVvZiBlcmFzW2ldLnNpbmNlKSB7XG4gICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgIC8vIHRydW5jYXRlIHRpbWVcbiAgICAgICAgICAgICAgICBkYXRlID0gaG9va3MoZXJhc1tpXS5zaW5jZSkuc3RhcnRPZignZGF5Jyk7XG4gICAgICAgICAgICAgICAgZXJhc1tpXS5zaW5jZSA9IGRhdGUudmFsdWVPZigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoICh0eXBlb2YgZXJhc1tpXS51bnRpbCkge1xuICAgICAgICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgICAgICAgICBlcmFzW2ldLnVudGlsID0gK0luZmluaXR5O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICAvLyB0cnVuY2F0ZSB0aW1lXG4gICAgICAgICAgICAgICAgZGF0ZSA9IGhvb2tzKGVyYXNbaV0udW50aWwpLnN0YXJ0T2YoJ2RheScpLnZhbHVlT2YoKTtcbiAgICAgICAgICAgICAgICBlcmFzW2ldLnVudGlsID0gZGF0ZS52YWx1ZU9mKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVyYXM7XG59XG5cbmZ1bmN0aW9uIGxvY2FsZUVyYXNQYXJzZShlcmFOYW1lLCBmb3JtYXQsIHN0cmljdCkge1xuICAgIHZhciBpLFxuICAgICAgICBsLFxuICAgICAgICBlcmFzID0gdGhpcy5lcmFzKCksXG4gICAgICAgIG5hbWUsXG4gICAgICAgIGFiYnIsXG4gICAgICAgIG5hcnJvdztcbiAgICBlcmFOYW1lID0gZXJhTmFtZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgZm9yIChpID0gMCwgbCA9IGVyYXMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgICAgIG5hbWUgPSBlcmFzW2ldLm5hbWUudG9VcHBlckNhc2UoKTtcbiAgICAgICAgYWJiciA9IGVyYXNbaV0uYWJici50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBuYXJyb3cgPSBlcmFzW2ldLm5hcnJvdy50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICAgIGlmIChzdHJpY3QpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZm9ybWF0KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnTic6XG4gICAgICAgICAgICAgICAgY2FzZSAnTk4nOlxuICAgICAgICAgICAgICAgIGNhc2UgJ05OTic6XG4gICAgICAgICAgICAgICAgICAgIGlmIChhYmJyID09PSBlcmFOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXJhc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ05OTk4nOlxuICAgICAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gZXJhTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVyYXNbaV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdOTk5OTic6XG4gICAgICAgICAgICAgICAgICAgIGlmIChuYXJyb3cgPT09IGVyYU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlcmFzW2ldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKFtuYW1lLCBhYmJyLCBuYXJyb3ddLmluZGV4T2YoZXJhTmFtZSkgPj0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGVyYXNbaV07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxvY2FsZUVyYXNDb252ZXJ0WWVhcihlcmEsIHllYXIpIHtcbiAgICB2YXIgZGlyID0gZXJhLnNpbmNlIDw9IGVyYS51bnRpbCA/ICsxIDogLTE7XG4gICAgaWYgKHllYXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gaG9va3MoZXJhLnNpbmNlKS55ZWFyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGhvb2tzKGVyYS5zaW5jZSkueWVhcigpICsgKHllYXIgLSBlcmEub2Zmc2V0KSAqIGRpcjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldEVyYU5hbWUoKSB7XG4gICAgdmFyIGksXG4gICAgICAgIGwsXG4gICAgICAgIHZhbCxcbiAgICAgICAgZXJhcyA9IHRoaXMubG9jYWxlRGF0YSgpLmVyYXMoKTtcbiAgICBmb3IgKGkgPSAwLCBsID0gZXJhcy5sZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICAgICAgLy8gdHJ1bmNhdGUgdGltZVxuICAgICAgICB2YWwgPSB0aGlzLmNsb25lKCkuc3RhcnRPZignZGF5JykudmFsdWVPZigpO1xuXG4gICAgICAgIGlmIChlcmFzW2ldLnNpbmNlIDw9IHZhbCAmJiB2YWwgPD0gZXJhc1tpXS51bnRpbCkge1xuICAgICAgICAgICAgcmV0dXJuIGVyYXNbaV0ubmFtZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJhc1tpXS51bnRpbCA8PSB2YWwgJiYgdmFsIDw9IGVyYXNbaV0uc2luY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBlcmFzW2ldLm5hbWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldEVyYU5hcnJvdygpIHtcbiAgICB2YXIgaSxcbiAgICAgICAgbCxcbiAgICAgICAgdmFsLFxuICAgICAgICBlcmFzID0gdGhpcy5sb2NhbGVEYXRhKCkuZXJhcygpO1xuICAgIGZvciAoaSA9IDAsIGwgPSBlcmFzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgICAgICAvLyB0cnVuY2F0ZSB0aW1lXG4gICAgICAgIHZhbCA9IHRoaXMuY2xvbmUoKS5zdGFydE9mKCdkYXknKS52YWx1ZU9mKCk7XG5cbiAgICAgICAgaWYgKGVyYXNbaV0uc2luY2UgPD0gdmFsICYmIHZhbCA8PSBlcmFzW2ldLnVudGlsKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJhc1tpXS5uYXJyb3c7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVyYXNbaV0udW50aWwgPD0gdmFsICYmIHZhbCA8PSBlcmFzW2ldLnNpbmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJhc1tpXS5uYXJyb3c7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldEVyYUFiYnIoKSB7XG4gICAgdmFyIGksXG4gICAgICAgIGwsXG4gICAgICAgIHZhbCxcbiAgICAgICAgZXJhcyA9IHRoaXMubG9jYWxlRGF0YSgpLmVyYXMoKTtcbiAgICBmb3IgKGkgPSAwLCBsID0gZXJhcy5sZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICAgICAgLy8gdHJ1bmNhdGUgdGltZVxuICAgICAgICB2YWwgPSB0aGlzLmNsb25lKCkuc3RhcnRPZignZGF5JykudmFsdWVPZigpO1xuXG4gICAgICAgIGlmIChlcmFzW2ldLnNpbmNlIDw9IHZhbCAmJiB2YWwgPD0gZXJhc1tpXS51bnRpbCkge1xuICAgICAgICAgICAgcmV0dXJuIGVyYXNbaV0uYWJicjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJhc1tpXS51bnRpbCA8PSB2YWwgJiYgdmFsIDw9IGVyYXNbaV0uc2luY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBlcmFzW2ldLmFiYnI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldEVyYVllYXIoKSB7XG4gICAgdmFyIGksXG4gICAgICAgIGwsXG4gICAgICAgIGRpcixcbiAgICAgICAgdmFsLFxuICAgICAgICBlcmFzID0gdGhpcy5sb2NhbGVEYXRhKCkuZXJhcygpO1xuICAgIGZvciAoaSA9IDAsIGwgPSBlcmFzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgICAgICBkaXIgPSBlcmFzW2ldLnNpbmNlIDw9IGVyYXNbaV0udW50aWwgPyArMSA6IC0xO1xuXG4gICAgICAgIC8vIHRydW5jYXRlIHRpbWVcbiAgICAgICAgdmFsID0gdGhpcy5jbG9uZSgpLnN0YXJ0T2YoJ2RheScpLnZhbHVlT2YoKTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAoZXJhc1tpXS5zaW5jZSA8PSB2YWwgJiYgdmFsIDw9IGVyYXNbaV0udW50aWwpIHx8XG4gICAgICAgICAgICAoZXJhc1tpXS51bnRpbCA8PSB2YWwgJiYgdmFsIDw9IGVyYXNbaV0uc2luY2UpXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAodGhpcy55ZWFyKCkgLSBob29rcyhlcmFzW2ldLnNpbmNlKS55ZWFyKCkpICogZGlyICtcbiAgICAgICAgICAgICAgICBlcmFzW2ldLm9mZnNldFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnllYXIoKTtcbn1cblxuZnVuY3Rpb24gZXJhc05hbWVSZWdleChpc1N0cmljdCkge1xuICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX2VyYXNOYW1lUmVnZXgnKSkge1xuICAgICAgICBjb21wdXRlRXJhc1BhcnNlLmNhbGwodGhpcyk7XG4gICAgfVxuICAgIHJldHVybiBpc1N0cmljdCA/IHRoaXMuX2VyYXNOYW1lUmVnZXggOiB0aGlzLl9lcmFzUmVnZXg7XG59XG5cbmZ1bmN0aW9uIGVyYXNBYmJyUmVnZXgoaXNTdHJpY3QpIHtcbiAgICBpZiAoIWhhc093blByb3AodGhpcywgJ19lcmFzQWJiclJlZ2V4JykpIHtcbiAgICAgICAgY29tcHV0ZUVyYXNQYXJzZS5jYWxsKHRoaXMpO1xuICAgIH1cbiAgICByZXR1cm4gaXNTdHJpY3QgPyB0aGlzLl9lcmFzQWJiclJlZ2V4IDogdGhpcy5fZXJhc1JlZ2V4O1xufVxuXG5mdW5jdGlvbiBlcmFzTmFycm93UmVnZXgoaXNTdHJpY3QpIHtcbiAgICBpZiAoIWhhc093blByb3AodGhpcywgJ19lcmFzTmFycm93UmVnZXgnKSkge1xuICAgICAgICBjb21wdXRlRXJhc1BhcnNlLmNhbGwodGhpcyk7XG4gICAgfVxuICAgIHJldHVybiBpc1N0cmljdCA/IHRoaXMuX2VyYXNOYXJyb3dSZWdleCA6IHRoaXMuX2VyYXNSZWdleDtcbn1cblxuZnVuY3Rpb24gbWF0Y2hFcmFBYmJyKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICByZXR1cm4gbG9jYWxlLmVyYXNBYmJyUmVnZXgoaXNTdHJpY3QpO1xufVxuXG5mdW5jdGlvbiBtYXRjaEVyYU5hbWUoaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgIHJldHVybiBsb2NhbGUuZXJhc05hbWVSZWdleChpc1N0cmljdCk7XG59XG5cbmZ1bmN0aW9uIG1hdGNoRXJhTmFycm93KGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICByZXR1cm4gbG9jYWxlLmVyYXNOYXJyb3dSZWdleChpc1N0cmljdCk7XG59XG5cbmZ1bmN0aW9uIG1hdGNoRXJhWWVhck9yZGluYWwoaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgIHJldHVybiBsb2NhbGUuX2VyYVllYXJPcmRpbmFsUmVnZXggfHwgbWF0Y2hVbnNpZ25lZDtcbn1cblxuZnVuY3Rpb24gY29tcHV0ZUVyYXNQYXJzZSgpIHtcbiAgICB2YXIgYWJiclBpZWNlcyA9IFtdLFxuICAgICAgICBuYW1lUGllY2VzID0gW10sXG4gICAgICAgIG5hcnJvd1BpZWNlcyA9IFtdLFxuICAgICAgICBtaXhlZFBpZWNlcyA9IFtdLFxuICAgICAgICBpLFxuICAgICAgICBsLFxuICAgICAgICBlcmFzTmFtZSxcbiAgICAgICAgZXJhc0FiYnIsXG4gICAgICAgIGVyYXNOYXJyb3csXG4gICAgICAgIGVyYXMgPSB0aGlzLmVyYXMoKTtcblxuICAgIGZvciAoaSA9IDAsIGwgPSBlcmFzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgICAgICBlcmFzTmFtZSA9IHJlZ2V4RXNjYXBlKGVyYXNbaV0ubmFtZSk7XG4gICAgICAgIGVyYXNBYmJyID0gcmVnZXhFc2NhcGUoZXJhc1tpXS5hYmJyKTtcbiAgICAgICAgZXJhc05hcnJvdyA9IHJlZ2V4RXNjYXBlKGVyYXNbaV0ubmFycm93KTtcblxuICAgICAgICBuYW1lUGllY2VzLnB1c2goZXJhc05hbWUpO1xuICAgICAgICBhYmJyUGllY2VzLnB1c2goZXJhc0FiYnIpO1xuICAgICAgICBuYXJyb3dQaWVjZXMucHVzaChlcmFzTmFycm93KTtcbiAgICAgICAgbWl4ZWRQaWVjZXMucHVzaChlcmFzTmFtZSk7XG4gICAgICAgIG1peGVkUGllY2VzLnB1c2goZXJhc0FiYnIpO1xuICAgICAgICBtaXhlZFBpZWNlcy5wdXNoKGVyYXNOYXJyb3cpO1xuICAgIH1cblxuICAgIHRoaXMuX2VyYXNSZWdleCA9IG5ldyBSZWdFeHAoJ14oJyArIG1peGVkUGllY2VzLmpvaW4oJ3wnKSArICcpJywgJ2knKTtcbiAgICB0aGlzLl9lcmFzTmFtZVJlZ2V4ID0gbmV3IFJlZ0V4cCgnXignICsgbmFtZVBpZWNlcy5qb2luKCd8JykgKyAnKScsICdpJyk7XG4gICAgdGhpcy5fZXJhc0FiYnJSZWdleCA9IG5ldyBSZWdFeHAoJ14oJyArIGFiYnJQaWVjZXMuam9pbignfCcpICsgJyknLCAnaScpO1xuICAgIHRoaXMuX2VyYXNOYXJyb3dSZWdleCA9IG5ldyBSZWdFeHAoXG4gICAgICAgICdeKCcgKyBuYXJyb3dQaWVjZXMuam9pbignfCcpICsgJyknLFxuICAgICAgICAnaSdcbiAgICApO1xufVxuXG4vLyBGT1JNQVRUSU5HXG5cbmFkZEZvcm1hdFRva2VuKDAsIFsnZ2cnLCAyXSwgMCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLndlZWtZZWFyKCkgJSAxMDA7XG59KTtcblxuYWRkRm9ybWF0VG9rZW4oMCwgWydHRycsIDJdLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNvV2Vla1llYXIoKSAlIDEwMDtcbn0pO1xuXG5mdW5jdGlvbiBhZGRXZWVrWWVhckZvcm1hdFRva2VuKHRva2VuLCBnZXR0ZXIpIHtcbiAgICBhZGRGb3JtYXRUb2tlbigwLCBbdG9rZW4sIHRva2VuLmxlbmd0aF0sIDAsIGdldHRlcik7XG59XG5cbmFkZFdlZWtZZWFyRm9ybWF0VG9rZW4oJ2dnZ2cnLCAnd2Vla1llYXInKTtcbmFkZFdlZWtZZWFyRm9ybWF0VG9rZW4oJ2dnZ2dnJywgJ3dlZWtZZWFyJyk7XG5hZGRXZWVrWWVhckZvcm1hdFRva2VuKCdHR0dHJywgJ2lzb1dlZWtZZWFyJyk7XG5hZGRXZWVrWWVhckZvcm1hdFRva2VuKCdHR0dHRycsICdpc29XZWVrWWVhcicpO1xuXG4vLyBBTElBU0VTXG5cbi8vIFBBUlNJTkdcblxuYWRkUmVnZXhUb2tlbignRycsIG1hdGNoU2lnbmVkKTtcbmFkZFJlZ2V4VG9rZW4oJ2cnLCBtYXRjaFNpZ25lZCk7XG5hZGRSZWdleFRva2VuKCdHRycsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbmFkZFJlZ2V4VG9rZW4oJ2dnJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuYWRkUmVnZXhUb2tlbignR0dHRycsIG1hdGNoMXRvNCwgbWF0Y2g0KTtcbmFkZFJlZ2V4VG9rZW4oJ2dnZ2cnLCBtYXRjaDF0bzQsIG1hdGNoNCk7XG5hZGRSZWdleFRva2VuKCdHR0dHRycsIG1hdGNoMXRvNiwgbWF0Y2g2KTtcbmFkZFJlZ2V4VG9rZW4oJ2dnZ2dnJywgbWF0Y2gxdG82LCBtYXRjaDYpO1xuXG5hZGRXZWVrUGFyc2VUb2tlbihcbiAgICBbJ2dnZ2cnLCAnZ2dnZ2cnLCAnR0dHRycsICdHR0dHRyddLFxuICAgIGZ1bmN0aW9uIChpbnB1dCwgd2VlaywgY29uZmlnLCB0b2tlbikge1xuICAgICAgICB3ZWVrW3Rva2VuLnN1YnN0cigwLCAyKV0gPSB0b0ludChpbnB1dCk7XG4gICAgfVxuKTtcblxuYWRkV2Vla1BhcnNlVG9rZW4oWydnZycsICdHRyddLCBmdW5jdGlvbiAoaW5wdXQsIHdlZWssIGNvbmZpZywgdG9rZW4pIHtcbiAgICB3ZWVrW3Rva2VuXSA9IGhvb2tzLnBhcnNlVHdvRGlnaXRZZWFyKGlucHV0KTtcbn0pO1xuXG4vLyBNT01FTlRTXG5cbmZ1bmN0aW9uIGdldFNldFdlZWtZZWFyKGlucHV0KSB7XG4gICAgcmV0dXJuIGdldFNldFdlZWtZZWFySGVscGVyLmNhbGwoXG4gICAgICAgIHRoaXMsXG4gICAgICAgIGlucHV0LFxuICAgICAgICB0aGlzLndlZWsoKSxcbiAgICAgICAgdGhpcy53ZWVrZGF5KCkgKyB0aGlzLmxvY2FsZURhdGEoKS5fd2Vlay5kb3csXG4gICAgICAgIHRoaXMubG9jYWxlRGF0YSgpLl93ZWVrLmRvdyxcbiAgICAgICAgdGhpcy5sb2NhbGVEYXRhKCkuX3dlZWsuZG95XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0U2V0SVNPV2Vla1llYXIoaW5wdXQpIHtcbiAgICByZXR1cm4gZ2V0U2V0V2Vla1llYXJIZWxwZXIuY2FsbChcbiAgICAgICAgdGhpcyxcbiAgICAgICAgaW5wdXQsXG4gICAgICAgIHRoaXMuaXNvV2VlaygpLFxuICAgICAgICB0aGlzLmlzb1dlZWtkYXkoKSxcbiAgICAgICAgMSxcbiAgICAgICAgNFxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGdldElTT1dlZWtzSW5ZZWFyKCkge1xuICAgIHJldHVybiB3ZWVrc0luWWVhcih0aGlzLnllYXIoKSwgMSwgNCk7XG59XG5cbmZ1bmN0aW9uIGdldElTT1dlZWtzSW5JU09XZWVrWWVhcigpIHtcbiAgICByZXR1cm4gd2Vla3NJblllYXIodGhpcy5pc29XZWVrWWVhcigpLCAxLCA0KTtcbn1cblxuZnVuY3Rpb24gZ2V0V2Vla3NJblllYXIoKSB7XG4gICAgdmFyIHdlZWtJbmZvID0gdGhpcy5sb2NhbGVEYXRhKCkuX3dlZWs7XG4gICAgcmV0dXJuIHdlZWtzSW5ZZWFyKHRoaXMueWVhcigpLCB3ZWVrSW5mby5kb3csIHdlZWtJbmZvLmRveSk7XG59XG5cbmZ1bmN0aW9uIGdldFdlZWtzSW5XZWVrWWVhcigpIHtcbiAgICB2YXIgd2Vla0luZm8gPSB0aGlzLmxvY2FsZURhdGEoKS5fd2VlaztcbiAgICByZXR1cm4gd2Vla3NJblllYXIodGhpcy53ZWVrWWVhcigpLCB3ZWVrSW5mby5kb3csIHdlZWtJbmZvLmRveSk7XG59XG5cbmZ1bmN0aW9uIGdldFNldFdlZWtZZWFySGVscGVyKGlucHV0LCB3ZWVrLCB3ZWVrZGF5LCBkb3csIGRveSkge1xuICAgIHZhciB3ZWVrc1RhcmdldDtcbiAgICBpZiAoaW5wdXQgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gd2Vla09mWWVhcih0aGlzLCBkb3csIGRveSkueWVhcjtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3ZWVrc1RhcmdldCA9IHdlZWtzSW5ZZWFyKGlucHV0LCBkb3csIGRveSk7XG4gICAgICAgIGlmICh3ZWVrID4gd2Vla3NUYXJnZXQpIHtcbiAgICAgICAgICAgIHdlZWsgPSB3ZWVrc1RhcmdldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2V0V2Vla0FsbC5jYWxsKHRoaXMsIGlucHV0LCB3ZWVrLCB3ZWVrZGF5LCBkb3csIGRveSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzZXRXZWVrQWxsKHdlZWtZZWFyLCB3ZWVrLCB3ZWVrZGF5LCBkb3csIGRveSkge1xuICAgIHZhciBkYXlPZlllYXJEYXRhID0gZGF5T2ZZZWFyRnJvbVdlZWtzKHdlZWtZZWFyLCB3ZWVrLCB3ZWVrZGF5LCBkb3csIGRveSksXG4gICAgICAgIGRhdGUgPSBjcmVhdGVVVENEYXRlKGRheU9mWWVhckRhdGEueWVhciwgMCwgZGF5T2ZZZWFyRGF0YS5kYXlPZlllYXIpO1xuXG4gICAgdGhpcy55ZWFyKGRhdGUuZ2V0VVRDRnVsbFllYXIoKSk7XG4gICAgdGhpcy5tb250aChkYXRlLmdldFVUQ01vbnRoKCkpO1xuICAgIHRoaXMuZGF0ZShkYXRlLmdldFVUQ0RhdGUoKSk7XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEZPUk1BVFRJTkdcblxuYWRkRm9ybWF0VG9rZW4oJ1EnLCAwLCAnUW8nLCAncXVhcnRlcicpO1xuXG4vLyBQQVJTSU5HXG5cbmFkZFJlZ2V4VG9rZW4oJ1EnLCBtYXRjaDEpO1xuYWRkUGFyc2VUb2tlbignUScsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXkpIHtcbiAgICBhcnJheVtNT05USF0gPSAodG9JbnQoaW5wdXQpIC0gMSkgKiAzO1xufSk7XG5cbi8vIE1PTUVOVFNcblxuZnVuY3Rpb24gZ2V0U2V0UXVhcnRlcihpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dCA9PSBudWxsXG4gICAgICAgID8gTWF0aC5jZWlsKCh0aGlzLm1vbnRoKCkgKyAxKSAvIDMpXG4gICAgICAgIDogdGhpcy5tb250aCgoaW5wdXQgLSAxKSAqIDMgKyAodGhpcy5tb250aCgpICUgMykpO1xufVxuXG4vLyBGT1JNQVRUSU5HXG5cbmFkZEZvcm1hdFRva2VuKCdEJywgWydERCcsIDJdLCAnRG8nLCAnZGF0ZScpO1xuXG4vLyBQQVJTSU5HXG5cbmFkZFJlZ2V4VG9rZW4oJ0QnLCBtYXRjaDF0bzIsIG1hdGNoMXRvMk5vTGVhZGluZ1plcm8pO1xuYWRkUmVnZXhUb2tlbignREQnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG5hZGRSZWdleFRva2VuKCdEbycsIGZ1bmN0aW9uIChpc1N0cmljdCwgbG9jYWxlKSB7XG4gICAgLy8gVE9ETzogUmVtb3ZlIFwib3JkaW5hbFBhcnNlXCIgZmFsbGJhY2sgaW4gbmV4dCBtYWpvciByZWxlYXNlLlxuICAgIHJldHVybiBpc1N0cmljdFxuICAgICAgICA/IGxvY2FsZS5fZGF5T2ZNb250aE9yZGluYWxQYXJzZSB8fCBsb2NhbGUuX29yZGluYWxQYXJzZVxuICAgICAgICA6IGxvY2FsZS5fZGF5T2ZNb250aE9yZGluYWxQYXJzZUxlbmllbnQ7XG59KTtcblxuYWRkUGFyc2VUb2tlbihbJ0QnLCAnREQnXSwgREFURSk7XG5hZGRQYXJzZVRva2VuKCdEbycsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXkpIHtcbiAgICBhcnJheVtEQVRFXSA9IHRvSW50KGlucHV0Lm1hdGNoKG1hdGNoMXRvMilbMF0pO1xufSk7XG5cbi8vIE1PTUVOVFNcblxudmFyIGdldFNldERheU9mTW9udGggPSBtYWtlR2V0U2V0KCdEYXRlJywgdHJ1ZSk7XG5cbi8vIEZPUk1BVFRJTkdcblxuYWRkRm9ybWF0VG9rZW4oJ0RERCcsIFsnRERERCcsIDNdLCAnREREbycsICdkYXlPZlllYXInKTtcblxuLy8gUEFSU0lOR1xuXG5hZGRSZWdleFRva2VuKCdEREQnLCBtYXRjaDF0bzMpO1xuYWRkUmVnZXhUb2tlbignRERERCcsIG1hdGNoMyk7XG5hZGRQYXJzZVRva2VuKFsnREREJywgJ0REREQnXSwgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgY29uZmlnLl9kYXlPZlllYXIgPSB0b0ludChpbnB1dCk7XG59KTtcblxuLy8gSEVMUEVSU1xuXG4vLyBNT01FTlRTXG5cbmZ1bmN0aW9uIGdldFNldERheU9mWWVhcihpbnB1dCkge1xuICAgIHZhciBkYXlPZlllYXIgPVxuICAgICAgICBNYXRoLnJvdW5kKFxuICAgICAgICAgICAgKHRoaXMuY2xvbmUoKS5zdGFydE9mKCdkYXknKSAtIHRoaXMuY2xvbmUoKS5zdGFydE9mKCd5ZWFyJykpIC8gODY0ZTVcbiAgICAgICAgKSArIDE7XG4gICAgcmV0dXJuIGlucHV0ID09IG51bGwgPyBkYXlPZlllYXIgOiB0aGlzLmFkZChpbnB1dCAtIGRheU9mWWVhciwgJ2QnKTtcbn1cblxuLy8gRk9STUFUVElOR1xuXG5hZGRGb3JtYXRUb2tlbignbScsIFsnbW0nLCAyXSwgMCwgJ21pbnV0ZScpO1xuXG4vLyBQQVJTSU5HXG5cbmFkZFJlZ2V4VG9rZW4oJ20nLCBtYXRjaDF0bzIsIG1hdGNoMXRvMkhhc1plcm8pO1xuYWRkUmVnZXhUb2tlbignbW0nLCBtYXRjaDF0bzIsIG1hdGNoMik7XG5hZGRQYXJzZVRva2VuKFsnbScsICdtbSddLCBNSU5VVEUpO1xuXG4vLyBNT01FTlRTXG5cbnZhciBnZXRTZXRNaW51dGUgPSBtYWtlR2V0U2V0KCdNaW51dGVzJywgZmFsc2UpO1xuXG4vLyBGT1JNQVRUSU5HXG5cbmFkZEZvcm1hdFRva2VuKCdzJywgWydzcycsIDJdLCAwLCAnc2Vjb25kJyk7XG5cbi8vIFBBUlNJTkdcblxuYWRkUmVnZXhUb2tlbigncycsIG1hdGNoMXRvMiwgbWF0Y2gxdG8ySGFzWmVybyk7XG5hZGRSZWdleFRva2VuKCdzcycsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbmFkZFBhcnNlVG9rZW4oWydzJywgJ3NzJ10sIFNFQ09ORCk7XG5cbi8vIE1PTUVOVFNcblxudmFyIGdldFNldFNlY29uZCA9IG1ha2VHZXRTZXQoJ1NlY29uZHMnLCBmYWxzZSk7XG5cbi8vIEZPUk1BVFRJTkdcblxuYWRkRm9ybWF0VG9rZW4oJ1MnLCAwLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIH5+KHRoaXMubWlsbGlzZWNvbmQoKSAvIDEwMCk7XG59KTtcblxuYWRkRm9ybWF0VG9rZW4oMCwgWydTUycsIDJdLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIH5+KHRoaXMubWlsbGlzZWNvbmQoKSAvIDEwKTtcbn0pO1xuXG5hZGRGb3JtYXRUb2tlbigwLCBbJ1NTUycsIDNdLCAwLCAnbWlsbGlzZWNvbmQnKTtcbmFkZEZvcm1hdFRva2VuKDAsIFsnU1NTUycsIDRdLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMubWlsbGlzZWNvbmQoKSAqIDEwO1xufSk7XG5hZGRGb3JtYXRUb2tlbigwLCBbJ1NTU1NTJywgNV0sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5taWxsaXNlY29uZCgpICogMTAwO1xufSk7XG5hZGRGb3JtYXRUb2tlbigwLCBbJ1NTU1NTUycsIDZdLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMubWlsbGlzZWNvbmQoKSAqIDEwMDA7XG59KTtcbmFkZEZvcm1hdFRva2VuKDAsIFsnU1NTU1NTUycsIDddLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMubWlsbGlzZWNvbmQoKSAqIDEwMDAwO1xufSk7XG5hZGRGb3JtYXRUb2tlbigwLCBbJ1NTU1NTU1NTJywgOF0sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5taWxsaXNlY29uZCgpICogMTAwMDAwO1xufSk7XG5hZGRGb3JtYXRUb2tlbigwLCBbJ1NTU1NTU1NTUycsIDldLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMubWlsbGlzZWNvbmQoKSAqIDEwMDAwMDA7XG59KTtcblxuLy8gUEFSU0lOR1xuXG5hZGRSZWdleFRva2VuKCdTJywgbWF0Y2gxdG8zLCBtYXRjaDEpO1xuYWRkUmVnZXhUb2tlbignU1MnLCBtYXRjaDF0bzMsIG1hdGNoMik7XG5hZGRSZWdleFRva2VuKCdTU1MnLCBtYXRjaDF0bzMsIG1hdGNoMyk7XG5cbnZhciB0b2tlbiwgZ2V0U2V0TWlsbGlzZWNvbmQ7XG5mb3IgKHRva2VuID0gJ1NTU1MnOyB0b2tlbi5sZW5ndGggPD0gOTsgdG9rZW4gKz0gJ1MnKSB7XG4gICAgYWRkUmVnZXhUb2tlbih0b2tlbiwgbWF0Y2hVbnNpZ25lZCk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlTXMoaW5wdXQsIGFycmF5KSB7XG4gICAgYXJyYXlbTUlMTElTRUNPTkRdID0gdG9JbnQoKCcwLicgKyBpbnB1dCkgKiAxMDAwKTtcbn1cblxuZm9yICh0b2tlbiA9ICdTJzsgdG9rZW4ubGVuZ3RoIDw9IDk7IHRva2VuICs9ICdTJykge1xuICAgIGFkZFBhcnNlVG9rZW4odG9rZW4sIHBhcnNlTXMpO1xufVxuXG5nZXRTZXRNaWxsaXNlY29uZCA9IG1ha2VHZXRTZXQoJ01pbGxpc2Vjb25kcycsIGZhbHNlKTtcblxuLy8gRk9STUFUVElOR1xuXG5hZGRGb3JtYXRUb2tlbigneicsIDAsIDAsICd6b25lQWJicicpO1xuYWRkRm9ybWF0VG9rZW4oJ3p6JywgMCwgMCwgJ3pvbmVOYW1lJyk7XG5cbi8vIE1PTUVOVFNcblxuZnVuY3Rpb24gZ2V0Wm9uZUFiYnIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzVVRDID8gJ1VUQycgOiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0Wm9uZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzVVRDID8gJ0Nvb3JkaW5hdGVkIFVuaXZlcnNhbCBUaW1lJyA6ICcnO1xufVxuXG52YXIgcHJvdG8gPSBNb21lbnQucHJvdG90eXBlO1xuXG5wcm90by5hZGQgPSBhZGQ7XG5wcm90by5jYWxlbmRhciA9IGNhbGVuZGFyJDE7XG5wcm90by5jbG9uZSA9IGNsb25lO1xucHJvdG8uZGlmZiA9IGRpZmY7XG5wcm90by5lbmRPZiA9IGVuZE9mO1xucHJvdG8uZm9ybWF0ID0gZm9ybWF0O1xucHJvdG8uZnJvbSA9IGZyb207XG5wcm90by5mcm9tTm93ID0gZnJvbU5vdztcbnByb3RvLnRvID0gdG87XG5wcm90by50b05vdyA9IHRvTm93O1xucHJvdG8uZ2V0ID0gc3RyaW5nR2V0O1xucHJvdG8uaW52YWxpZEF0ID0gaW52YWxpZEF0O1xucHJvdG8uaXNBZnRlciA9IGlzQWZ0ZXI7XG5wcm90by5pc0JlZm9yZSA9IGlzQmVmb3JlO1xucHJvdG8uaXNCZXR3ZWVuID0gaXNCZXR3ZWVuO1xucHJvdG8uaXNTYW1lID0gaXNTYW1lO1xucHJvdG8uaXNTYW1lT3JBZnRlciA9IGlzU2FtZU9yQWZ0ZXI7XG5wcm90by5pc1NhbWVPckJlZm9yZSA9IGlzU2FtZU9yQmVmb3JlO1xucHJvdG8uaXNWYWxpZCA9IGlzVmFsaWQkMjtcbnByb3RvLmxhbmcgPSBsYW5nO1xucHJvdG8ubG9jYWxlID0gbG9jYWxlO1xucHJvdG8ubG9jYWxlRGF0YSA9IGxvY2FsZURhdGE7XG5wcm90by5tYXggPSBwcm90b3R5cGVNYXg7XG5wcm90by5taW4gPSBwcm90b3R5cGVNaW47XG5wcm90by5wYXJzaW5nRmxhZ3MgPSBwYXJzaW5nRmxhZ3M7XG5wcm90by5zZXQgPSBzdHJpbmdTZXQ7XG5wcm90by5zdGFydE9mID0gc3RhcnRPZjtcbnByb3RvLnN1YnRyYWN0ID0gc3VidHJhY3Q7XG5wcm90by50b0FycmF5ID0gdG9BcnJheTtcbnByb3RvLnRvT2JqZWN0ID0gdG9PYmplY3Q7XG5wcm90by50b0RhdGUgPSB0b0RhdGU7XG5wcm90by50b0lTT1N0cmluZyA9IHRvSVNPU3RyaW5nO1xucHJvdG8uaW5zcGVjdCA9IGluc3BlY3Q7XG5pZiAodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLmZvciAhPSBudWxsKSB7XG4gICAgcHJvdG9bU3ltYm9sLmZvcignbm9kZWpzLnV0aWwuaW5zcGVjdC5jdXN0b20nKV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAnTW9tZW50PCcgKyB0aGlzLmZvcm1hdCgpICsgJz4nO1xuICAgIH07XG59XG5wcm90by50b0pTT04gPSB0b0pTT047XG5wcm90by50b1N0cmluZyA9IHRvU3RyaW5nO1xucHJvdG8udW5peCA9IHVuaXg7XG5wcm90by52YWx1ZU9mID0gdmFsdWVPZjtcbnByb3RvLmNyZWF0aW9uRGF0YSA9IGNyZWF0aW9uRGF0YTtcbnByb3RvLmVyYU5hbWUgPSBnZXRFcmFOYW1lO1xucHJvdG8uZXJhTmFycm93ID0gZ2V0RXJhTmFycm93O1xucHJvdG8uZXJhQWJiciA9IGdldEVyYUFiYnI7XG5wcm90by5lcmFZZWFyID0gZ2V0RXJhWWVhcjtcbnByb3RvLnllYXIgPSBnZXRTZXRZZWFyO1xucHJvdG8uaXNMZWFwWWVhciA9IGdldElzTGVhcFllYXI7XG5wcm90by53ZWVrWWVhciA9IGdldFNldFdlZWtZZWFyO1xucHJvdG8uaXNvV2Vla1llYXIgPSBnZXRTZXRJU09XZWVrWWVhcjtcbnByb3RvLnF1YXJ0ZXIgPSBwcm90by5xdWFydGVycyA9IGdldFNldFF1YXJ0ZXI7XG5wcm90by5tb250aCA9IGdldFNldE1vbnRoO1xucHJvdG8uZGF5c0luTW9udGggPSBnZXREYXlzSW5Nb250aDtcbnByb3RvLndlZWsgPSBwcm90by53ZWVrcyA9IGdldFNldFdlZWs7XG5wcm90by5pc29XZWVrID0gcHJvdG8uaXNvV2Vla3MgPSBnZXRTZXRJU09XZWVrO1xucHJvdG8ud2Vla3NJblllYXIgPSBnZXRXZWVrc0luWWVhcjtcbnByb3RvLndlZWtzSW5XZWVrWWVhciA9IGdldFdlZWtzSW5XZWVrWWVhcjtcbnByb3RvLmlzb1dlZWtzSW5ZZWFyID0gZ2V0SVNPV2Vla3NJblllYXI7XG5wcm90by5pc29XZWVrc0luSVNPV2Vla1llYXIgPSBnZXRJU09XZWVrc0luSVNPV2Vla1llYXI7XG5wcm90by5kYXRlID0gZ2V0U2V0RGF5T2ZNb250aDtcbnByb3RvLmRheSA9IHByb3RvLmRheXMgPSBnZXRTZXREYXlPZldlZWs7XG5wcm90by53ZWVrZGF5ID0gZ2V0U2V0TG9jYWxlRGF5T2ZXZWVrO1xucHJvdG8uaXNvV2Vla2RheSA9IGdldFNldElTT0RheU9mV2VlaztcbnByb3RvLmRheU9mWWVhciA9IGdldFNldERheU9mWWVhcjtcbnByb3RvLmhvdXIgPSBwcm90by5ob3VycyA9IGdldFNldEhvdXI7XG5wcm90by5taW51dGUgPSBwcm90by5taW51dGVzID0gZ2V0U2V0TWludXRlO1xucHJvdG8uc2Vjb25kID0gcHJvdG8uc2Vjb25kcyA9IGdldFNldFNlY29uZDtcbnByb3RvLm1pbGxpc2Vjb25kID0gcHJvdG8ubWlsbGlzZWNvbmRzID0gZ2V0U2V0TWlsbGlzZWNvbmQ7XG5wcm90by51dGNPZmZzZXQgPSBnZXRTZXRPZmZzZXQ7XG5wcm90by51dGMgPSBzZXRPZmZzZXRUb1VUQztcbnByb3RvLmxvY2FsID0gc2V0T2Zmc2V0VG9Mb2NhbDtcbnByb3RvLnBhcnNlWm9uZSA9IHNldE9mZnNldFRvUGFyc2VkT2Zmc2V0O1xucHJvdG8uaGFzQWxpZ25lZEhvdXJPZmZzZXQgPSBoYXNBbGlnbmVkSG91ck9mZnNldDtcbnByb3RvLmlzRFNUID0gaXNEYXlsaWdodFNhdmluZ1RpbWU7XG5wcm90by5pc0xvY2FsID0gaXNMb2NhbDtcbnByb3RvLmlzVXRjT2Zmc2V0ID0gaXNVdGNPZmZzZXQ7XG5wcm90by5pc1V0YyA9IGlzVXRjO1xucHJvdG8uaXNVVEMgPSBpc1V0YztcbnByb3RvLnpvbmVBYmJyID0gZ2V0Wm9uZUFiYnI7XG5wcm90by56b25lTmFtZSA9IGdldFpvbmVOYW1lO1xucHJvdG8uZGF0ZXMgPSBkZXByZWNhdGUoXG4gICAgJ2RhdGVzIGFjY2Vzc29yIGlzIGRlcHJlY2F0ZWQuIFVzZSBkYXRlIGluc3RlYWQuJyxcbiAgICBnZXRTZXREYXlPZk1vbnRoXG4pO1xucHJvdG8ubW9udGhzID0gZGVwcmVjYXRlKFxuICAgICdtb250aHMgYWNjZXNzb3IgaXMgZGVwcmVjYXRlZC4gVXNlIG1vbnRoIGluc3RlYWQnLFxuICAgIGdldFNldE1vbnRoXG4pO1xucHJvdG8ueWVhcnMgPSBkZXByZWNhdGUoXG4gICAgJ3llYXJzIGFjY2Vzc29yIGlzIGRlcHJlY2F0ZWQuIFVzZSB5ZWFyIGluc3RlYWQnLFxuICAgIGdldFNldFllYXJcbik7XG5wcm90by56b25lID0gZGVwcmVjYXRlKFxuICAgICdtb21lbnQoKS56b25lIGlzIGRlcHJlY2F0ZWQsIHVzZSBtb21lbnQoKS51dGNPZmZzZXQgaW5zdGVhZC4gaHR0cDovL21vbWVudGpzLmNvbS9ndWlkZXMvIy93YXJuaW5ncy96b25lLycsXG4gICAgZ2V0U2V0Wm9uZVxuKTtcbnByb3RvLmlzRFNUU2hpZnRlZCA9IGRlcHJlY2F0ZShcbiAgICAnaXNEU1RTaGlmdGVkIGlzIGRlcHJlY2F0ZWQuIFNlZSBodHRwOi8vbW9tZW50anMuY29tL2d1aWRlcy8jL3dhcm5pbmdzL2RzdC1zaGlmdGVkLyBmb3IgbW9yZSBpbmZvcm1hdGlvbicsXG4gICAgaXNEYXlsaWdodFNhdmluZ1RpbWVTaGlmdGVkXG4pO1xuXG5mdW5jdGlvbiBjcmVhdGVVbml4KGlucHV0KSB7XG4gICAgcmV0dXJuIGNyZWF0ZUxvY2FsKGlucHV0ICogMTAwMCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUluWm9uZSgpIHtcbiAgICByZXR1cm4gY3JlYXRlTG9jYWwuYXBwbHkobnVsbCwgYXJndW1lbnRzKS5wYXJzZVpvbmUoKTtcbn1cblxuZnVuY3Rpb24gcHJlUGFyc2VQb3N0Rm9ybWF0KHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmc7XG59XG5cbnZhciBwcm90byQxID0gTG9jYWxlLnByb3RvdHlwZTtcblxucHJvdG8kMS5jYWxlbmRhciA9IGNhbGVuZGFyO1xucHJvdG8kMS5sb25nRGF0ZUZvcm1hdCA9IGxvbmdEYXRlRm9ybWF0O1xucHJvdG8kMS5pbnZhbGlkRGF0ZSA9IGludmFsaWREYXRlO1xucHJvdG8kMS5vcmRpbmFsID0gb3JkaW5hbDtcbnByb3RvJDEucHJlcGFyc2UgPSBwcmVQYXJzZVBvc3RGb3JtYXQ7XG5wcm90byQxLnBvc3Rmb3JtYXQgPSBwcmVQYXJzZVBvc3RGb3JtYXQ7XG5wcm90byQxLnJlbGF0aXZlVGltZSA9IHJlbGF0aXZlVGltZTtcbnByb3RvJDEucGFzdEZ1dHVyZSA9IHBhc3RGdXR1cmU7XG5wcm90byQxLnNldCA9IHNldDtcbnByb3RvJDEuZXJhcyA9IGxvY2FsZUVyYXM7XG5wcm90byQxLmVyYXNQYXJzZSA9IGxvY2FsZUVyYXNQYXJzZTtcbnByb3RvJDEuZXJhc0NvbnZlcnRZZWFyID0gbG9jYWxlRXJhc0NvbnZlcnRZZWFyO1xucHJvdG8kMS5lcmFzQWJiclJlZ2V4ID0gZXJhc0FiYnJSZWdleDtcbnByb3RvJDEuZXJhc05hbWVSZWdleCA9IGVyYXNOYW1lUmVnZXg7XG5wcm90byQxLmVyYXNOYXJyb3dSZWdleCA9IGVyYXNOYXJyb3dSZWdleDtcblxucHJvdG8kMS5tb250aHMgPSBsb2NhbGVNb250aHM7XG5wcm90byQxLm1vbnRoc1Nob3J0ID0gbG9jYWxlTW9udGhzU2hvcnQ7XG5wcm90byQxLm1vbnRoc1BhcnNlID0gbG9jYWxlTW9udGhzUGFyc2U7XG5wcm90byQxLm1vbnRoc1JlZ2V4ID0gbW9udGhzUmVnZXg7XG5wcm90byQxLm1vbnRoc1Nob3J0UmVnZXggPSBtb250aHNTaG9ydFJlZ2V4O1xucHJvdG8kMS53ZWVrID0gbG9jYWxlV2VlaztcbnByb3RvJDEuZmlyc3REYXlPZlllYXIgPSBsb2NhbGVGaXJzdERheU9mWWVhcjtcbnByb3RvJDEuZmlyc3REYXlPZldlZWsgPSBsb2NhbGVGaXJzdERheU9mV2VlaztcblxucHJvdG8kMS53ZWVrZGF5cyA9IGxvY2FsZVdlZWtkYXlzO1xucHJvdG8kMS53ZWVrZGF5c01pbiA9IGxvY2FsZVdlZWtkYXlzTWluO1xucHJvdG8kMS53ZWVrZGF5c1Nob3J0ID0gbG9jYWxlV2Vla2RheXNTaG9ydDtcbnByb3RvJDEud2Vla2RheXNQYXJzZSA9IGxvY2FsZVdlZWtkYXlzUGFyc2U7XG5cbnByb3RvJDEud2Vla2RheXNSZWdleCA9IHdlZWtkYXlzUmVnZXg7XG5wcm90byQxLndlZWtkYXlzU2hvcnRSZWdleCA9IHdlZWtkYXlzU2hvcnRSZWdleDtcbnByb3RvJDEud2Vla2RheXNNaW5SZWdleCA9IHdlZWtkYXlzTWluUmVnZXg7XG5cbnByb3RvJDEuaXNQTSA9IGxvY2FsZUlzUE07XG5wcm90byQxLm1lcmlkaWVtID0gbG9jYWxlTWVyaWRpZW07XG5cbmZ1bmN0aW9uIGdldCQxKGZvcm1hdCwgaW5kZXgsIGZpZWxkLCBzZXR0ZXIpIHtcbiAgICB2YXIgbG9jYWxlID0gZ2V0TG9jYWxlKCksXG4gICAgICAgIHV0YyA9IGNyZWF0ZVVUQygpLnNldChzZXR0ZXIsIGluZGV4KTtcbiAgICByZXR1cm4gbG9jYWxlW2ZpZWxkXSh1dGMsIGZvcm1hdCk7XG59XG5cbmZ1bmN0aW9uIGxpc3RNb250aHNJbXBsKGZvcm1hdCwgaW5kZXgsIGZpZWxkKSB7XG4gICAgaWYgKGlzTnVtYmVyKGZvcm1hdCkpIHtcbiAgICAgICAgaW5kZXggPSBmb3JtYXQ7XG4gICAgICAgIGZvcm1hdCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBmb3JtYXQgPSBmb3JtYXQgfHwgJyc7XG5cbiAgICBpZiAoaW5kZXggIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZ2V0JDEoZm9ybWF0LCBpbmRleCwgZmllbGQsICdtb250aCcpO1xuICAgIH1cblxuICAgIHZhciBpLFxuICAgICAgICBvdXQgPSBbXTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgICBvdXRbaV0gPSBnZXQkMShmb3JtYXQsIGksIGZpZWxkLCAnbW9udGgnKTtcbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLy8gKClcbi8vICg1KVxuLy8gKGZtdCwgNSlcbi8vIChmbXQpXG4vLyAodHJ1ZSlcbi8vICh0cnVlLCA1KVxuLy8gKHRydWUsIGZtdCwgNSlcbi8vICh0cnVlLCBmbXQpXG5mdW5jdGlvbiBsaXN0V2Vla2RheXNJbXBsKGxvY2FsZVNvcnRlZCwgZm9ybWF0LCBpbmRleCwgZmllbGQpIHtcbiAgICBpZiAodHlwZW9mIGxvY2FsZVNvcnRlZCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIGlmIChpc051bWJlcihmb3JtYXQpKSB7XG4gICAgICAgICAgICBpbmRleCA9IGZvcm1hdDtcbiAgICAgICAgICAgIGZvcm1hdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdCB8fCAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3JtYXQgPSBsb2NhbGVTb3J0ZWQ7XG4gICAgICAgIGluZGV4ID0gZm9ybWF0O1xuICAgICAgICBsb2NhbGVTb3J0ZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoaXNOdW1iZXIoZm9ybWF0KSkge1xuICAgICAgICAgICAgaW5kZXggPSBmb3JtYXQ7XG4gICAgICAgICAgICBmb3JtYXQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQgfHwgJyc7XG4gICAgfVxuXG4gICAgdmFyIGxvY2FsZSA9IGdldExvY2FsZSgpLFxuICAgICAgICBzaGlmdCA9IGxvY2FsZVNvcnRlZCA/IGxvY2FsZS5fd2Vlay5kb3cgOiAwLFxuICAgICAgICBpLFxuICAgICAgICBvdXQgPSBbXTtcblxuICAgIGlmIChpbmRleCAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiBnZXQkMShmb3JtYXQsIChpbmRleCArIHNoaWZ0KSAlIDcsIGZpZWxkLCAnZGF5Jyk7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICBvdXRbaV0gPSBnZXQkMShmb3JtYXQsIChpICsgc2hpZnQpICUgNywgZmllbGQsICdkYXknKTtcbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbn1cblxuZnVuY3Rpb24gbGlzdE1vbnRocyhmb3JtYXQsIGluZGV4KSB7XG4gICAgcmV0dXJuIGxpc3RNb250aHNJbXBsKGZvcm1hdCwgaW5kZXgsICdtb250aHMnKTtcbn1cblxuZnVuY3Rpb24gbGlzdE1vbnRoc1Nob3J0KGZvcm1hdCwgaW5kZXgpIHtcbiAgICByZXR1cm4gbGlzdE1vbnRoc0ltcGwoZm9ybWF0LCBpbmRleCwgJ21vbnRoc1Nob3J0Jyk7XG59XG5cbmZ1bmN0aW9uIGxpc3RXZWVrZGF5cyhsb2NhbGVTb3J0ZWQsIGZvcm1hdCwgaW5kZXgpIHtcbiAgICByZXR1cm4gbGlzdFdlZWtkYXlzSW1wbChsb2NhbGVTb3J0ZWQsIGZvcm1hdCwgaW5kZXgsICd3ZWVrZGF5cycpO1xufVxuXG5mdW5jdGlvbiBsaXN0V2Vla2RheXNTaG9ydChsb2NhbGVTb3J0ZWQsIGZvcm1hdCwgaW5kZXgpIHtcbiAgICByZXR1cm4gbGlzdFdlZWtkYXlzSW1wbChsb2NhbGVTb3J0ZWQsIGZvcm1hdCwgaW5kZXgsICd3ZWVrZGF5c1Nob3J0Jyk7XG59XG5cbmZ1bmN0aW9uIGxpc3RXZWVrZGF5c01pbihsb2NhbGVTb3J0ZWQsIGZvcm1hdCwgaW5kZXgpIHtcbiAgICByZXR1cm4gbGlzdFdlZWtkYXlzSW1wbChsb2NhbGVTb3J0ZWQsIGZvcm1hdCwgaW5kZXgsICd3ZWVrZGF5c01pbicpO1xufVxuXG5nZXRTZXRHbG9iYWxMb2NhbGUoJ2VuJywge1xuICAgIGVyYXM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgc2luY2U6ICcwMDAxLTAxLTAxJyxcbiAgICAgICAgICAgIHVudGlsOiArSW5maW5pdHksXG4gICAgICAgICAgICBvZmZzZXQ6IDEsXG4gICAgICAgICAgICBuYW1lOiAnQW5ubyBEb21pbmknLFxuICAgICAgICAgICAgbmFycm93OiAnQUQnLFxuICAgICAgICAgICAgYWJicjogJ0FEJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc2luY2U6ICcwMDAwLTEyLTMxJyxcbiAgICAgICAgICAgIHVudGlsOiAtSW5maW5pdHksXG4gICAgICAgICAgICBvZmZzZXQ6IDEsXG4gICAgICAgICAgICBuYW1lOiAnQmVmb3JlIENocmlzdCcsXG4gICAgICAgICAgICBuYXJyb3c6ICdCQycsXG4gICAgICAgICAgICBhYmJyOiAnQkMnLFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9KHRofHN0fG5kfHJkKS8sXG4gICAgb3JkaW5hbDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICB2YXIgYiA9IG51bWJlciAlIDEwLFxuICAgICAgICAgICAgb3V0cHV0ID1cbiAgICAgICAgICAgICAgICB0b0ludCgobnVtYmVyICUgMTAwKSAvIDEwKSA9PT0gMVxuICAgICAgICAgICAgICAgICAgICA/ICd0aCdcbiAgICAgICAgICAgICAgICAgICAgOiBiID09PSAxXG4gICAgICAgICAgICAgICAgICAgICAgPyAnc3QnXG4gICAgICAgICAgICAgICAgICAgICAgOiBiID09PSAyXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICduZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYiA9PT0gM1xuICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdyZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAndGgnO1xuICAgICAgICByZXR1cm4gbnVtYmVyICsgb3V0cHV0O1xuICAgIH0sXG59KTtcblxuLy8gU2lkZSBlZmZlY3QgaW1wb3J0c1xuXG5ob29rcy5sYW5nID0gZGVwcmVjYXRlKFxuICAgICdtb21lbnQubGFuZyBpcyBkZXByZWNhdGVkLiBVc2UgbW9tZW50LmxvY2FsZSBpbnN0ZWFkLicsXG4gICAgZ2V0U2V0R2xvYmFsTG9jYWxlXG4pO1xuaG9va3MubGFuZ0RhdGEgPSBkZXByZWNhdGUoXG4gICAgJ21vbWVudC5sYW5nRGF0YSBpcyBkZXByZWNhdGVkLiBVc2UgbW9tZW50LmxvY2FsZURhdGEgaW5zdGVhZC4nLFxuICAgIGdldExvY2FsZVxuKTtcblxudmFyIG1hdGhBYnMgPSBNYXRoLmFicztcblxuZnVuY3Rpb24gYWJzKCkge1xuICAgIHZhciBkYXRhID0gdGhpcy5fZGF0YTtcblxuICAgIHRoaXMuX21pbGxpc2Vjb25kcyA9IG1hdGhBYnModGhpcy5fbWlsbGlzZWNvbmRzKTtcbiAgICB0aGlzLl9kYXlzID0gbWF0aEFicyh0aGlzLl9kYXlzKTtcbiAgICB0aGlzLl9tb250aHMgPSBtYXRoQWJzKHRoaXMuX21vbnRocyk7XG5cbiAgICBkYXRhLm1pbGxpc2Vjb25kcyA9IG1hdGhBYnMoZGF0YS5taWxsaXNlY29uZHMpO1xuICAgIGRhdGEuc2Vjb25kcyA9IG1hdGhBYnMoZGF0YS5zZWNvbmRzKTtcbiAgICBkYXRhLm1pbnV0ZXMgPSBtYXRoQWJzKGRhdGEubWludXRlcyk7XG4gICAgZGF0YS5ob3VycyA9IG1hdGhBYnMoZGF0YS5ob3Vycyk7XG4gICAgZGF0YS5tb250aHMgPSBtYXRoQWJzKGRhdGEubW9udGhzKTtcbiAgICBkYXRhLnllYXJzID0gbWF0aEFicyhkYXRhLnllYXJzKTtcblxuICAgIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBhZGRTdWJ0cmFjdCQxKGR1cmF0aW9uLCBpbnB1dCwgdmFsdWUsIGRpcmVjdGlvbikge1xuICAgIHZhciBvdGhlciA9IGNyZWF0ZUR1cmF0aW9uKGlucHV0LCB2YWx1ZSk7XG5cbiAgICBkdXJhdGlvbi5fbWlsbGlzZWNvbmRzICs9IGRpcmVjdGlvbiAqIG90aGVyLl9taWxsaXNlY29uZHM7XG4gICAgZHVyYXRpb24uX2RheXMgKz0gZGlyZWN0aW9uICogb3RoZXIuX2RheXM7XG4gICAgZHVyYXRpb24uX21vbnRocyArPSBkaXJlY3Rpb24gKiBvdGhlci5fbW9udGhzO1xuXG4gICAgcmV0dXJuIGR1cmF0aW9uLl9idWJibGUoKTtcbn1cblxuLy8gc3VwcG9ydHMgb25seSAyLjAtc3R5bGUgYWRkKDEsICdzJykgb3IgYWRkKGR1cmF0aW9uKVxuZnVuY3Rpb24gYWRkJDEoaW5wdXQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIGFkZFN1YnRyYWN0JDEodGhpcywgaW5wdXQsIHZhbHVlLCAxKTtcbn1cblxuLy8gc3VwcG9ydHMgb25seSAyLjAtc3R5bGUgc3VidHJhY3QoMSwgJ3MnKSBvciBzdWJ0cmFjdChkdXJhdGlvbilcbmZ1bmN0aW9uIHN1YnRyYWN0JDEoaW5wdXQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIGFkZFN1YnRyYWN0JDEodGhpcywgaW5wdXQsIHZhbHVlLCAtMSk7XG59XG5cbmZ1bmN0aW9uIGFic0NlaWwobnVtYmVyKSB7XG4gICAgaWYgKG51bWJlciA8IDApIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IobnVtYmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKG51bWJlcik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBidWJibGUoKSB7XG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IHRoaXMuX21pbGxpc2Vjb25kcyxcbiAgICAgICAgZGF5cyA9IHRoaXMuX2RheXMsXG4gICAgICAgIG1vbnRocyA9IHRoaXMuX21vbnRocyxcbiAgICAgICAgZGF0YSA9IHRoaXMuX2RhdGEsXG4gICAgICAgIHNlY29uZHMsXG4gICAgICAgIG1pbnV0ZXMsXG4gICAgICAgIGhvdXJzLFxuICAgICAgICB5ZWFycyxcbiAgICAgICAgbW9udGhzRnJvbURheXM7XG5cbiAgICAvLyBpZiB3ZSBoYXZlIGEgbWl4IG9mIHBvc2l0aXZlIGFuZCBuZWdhdGl2ZSB2YWx1ZXMsIGJ1YmJsZSBkb3duIGZpcnN0XG4gICAgLy8gY2hlY2s6IGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L2lzc3Vlcy8yMTY2XG4gICAgaWYgKFxuICAgICAgICAhKFxuICAgICAgICAgICAgKG1pbGxpc2Vjb25kcyA+PSAwICYmIGRheXMgPj0gMCAmJiBtb250aHMgPj0gMCkgfHxcbiAgICAgICAgICAgIChtaWxsaXNlY29uZHMgPD0gMCAmJiBkYXlzIDw9IDAgJiYgbW9udGhzIDw9IDApXG4gICAgICAgIClcbiAgICApIHtcbiAgICAgICAgbWlsbGlzZWNvbmRzICs9IGFic0NlaWwobW9udGhzVG9EYXlzKG1vbnRocykgKyBkYXlzKSAqIDg2NGU1O1xuICAgICAgICBkYXlzID0gMDtcbiAgICAgICAgbW9udGhzID0gMDtcbiAgICB9XG5cbiAgICAvLyBUaGUgZm9sbG93aW5nIGNvZGUgYnViYmxlcyB1cCB2YWx1ZXMsIHNlZSB0aGUgdGVzdHMgZm9yXG4gICAgLy8gZXhhbXBsZXMgb2Ygd2hhdCB0aGF0IG1lYW5zLlxuICAgIGRhdGEubWlsbGlzZWNvbmRzID0gbWlsbGlzZWNvbmRzICUgMTAwMDtcblxuICAgIHNlY29uZHMgPSBhYnNGbG9vcihtaWxsaXNlY29uZHMgLyAxMDAwKTtcbiAgICBkYXRhLnNlY29uZHMgPSBzZWNvbmRzICUgNjA7XG5cbiAgICBtaW51dGVzID0gYWJzRmxvb3Ioc2Vjb25kcyAvIDYwKTtcbiAgICBkYXRhLm1pbnV0ZXMgPSBtaW51dGVzICUgNjA7XG5cbiAgICBob3VycyA9IGFic0Zsb29yKG1pbnV0ZXMgLyA2MCk7XG4gICAgZGF0YS5ob3VycyA9IGhvdXJzICUgMjQ7XG5cbiAgICBkYXlzICs9IGFic0Zsb29yKGhvdXJzIC8gMjQpO1xuXG4gICAgLy8gY29udmVydCBkYXlzIHRvIG1vbnRoc1xuICAgIG1vbnRoc0Zyb21EYXlzID0gYWJzRmxvb3IoZGF5c1RvTW9udGhzKGRheXMpKTtcbiAgICBtb250aHMgKz0gbW9udGhzRnJvbURheXM7XG4gICAgZGF5cyAtPSBhYnNDZWlsKG1vbnRoc1RvRGF5cyhtb250aHNGcm9tRGF5cykpO1xuXG4gICAgLy8gMTIgbW9udGhzIC0+IDEgeWVhclxuICAgIHllYXJzID0gYWJzRmxvb3IobW9udGhzIC8gMTIpO1xuICAgIG1vbnRocyAlPSAxMjtcblxuICAgIGRhdGEuZGF5cyA9IGRheXM7XG4gICAgZGF0YS5tb250aHMgPSBtb250aHM7XG4gICAgZGF0YS55ZWFycyA9IHllYXJzO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGRheXNUb01vbnRocyhkYXlzKSB7XG4gICAgLy8gNDAwIHllYXJzIGhhdmUgMTQ2MDk3IGRheXMgKHRha2luZyBpbnRvIGFjY291bnQgbGVhcCB5ZWFyIHJ1bGVzKVxuICAgIC8vIDQwMCB5ZWFycyBoYXZlIDEyIG1vbnRocyA9PT0gNDgwMFxuICAgIHJldHVybiAoZGF5cyAqIDQ4MDApIC8gMTQ2MDk3O1xufVxuXG5mdW5jdGlvbiBtb250aHNUb0RheXMobW9udGhzKSB7XG4gICAgLy8gdGhlIHJldmVyc2Ugb2YgZGF5c1RvTW9udGhzXG4gICAgcmV0dXJuIChtb250aHMgKiAxNDYwOTcpIC8gNDgwMDtcbn1cblxuZnVuY3Rpb24gYXModW5pdHMpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgfVxuICAgIHZhciBkYXlzLFxuICAgICAgICBtb250aHMsXG4gICAgICAgIG1pbGxpc2Vjb25kcyA9IHRoaXMuX21pbGxpc2Vjb25kcztcblxuICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpO1xuXG4gICAgaWYgKHVuaXRzID09PSAnbW9udGgnIHx8IHVuaXRzID09PSAncXVhcnRlcicgfHwgdW5pdHMgPT09ICd5ZWFyJykge1xuICAgICAgICBkYXlzID0gdGhpcy5fZGF5cyArIG1pbGxpc2Vjb25kcyAvIDg2NGU1O1xuICAgICAgICBtb250aHMgPSB0aGlzLl9tb250aHMgKyBkYXlzVG9Nb250aHMoZGF5cyk7XG4gICAgICAgIHN3aXRjaCAodW5pdHMpIHtcbiAgICAgICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9udGhzO1xuICAgICAgICAgICAgY2FzZSAncXVhcnRlcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vbnRocyAvIDM7XG4gICAgICAgICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9udGhzIC8gMTI7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBoYW5kbGUgbWlsbGlzZWNvbmRzIHNlcGFyYXRlbHkgYmVjYXVzZSBvZiBmbG9hdGluZyBwb2ludCBtYXRoIGVycm9ycyAoaXNzdWUgIzE4NjcpXG4gICAgICAgIGRheXMgPSB0aGlzLl9kYXlzICsgTWF0aC5yb3VuZChtb250aHNUb0RheXModGhpcy5fbW9udGhzKSk7XG4gICAgICAgIHN3aXRjaCAodW5pdHMpIHtcbiAgICAgICAgICAgIGNhc2UgJ3dlZWsnOlxuICAgICAgICAgICAgICAgIHJldHVybiBkYXlzIC8gNyArIG1pbGxpc2Vjb25kcyAvIDYwNDhlNTtcbiAgICAgICAgICAgIGNhc2UgJ2RheSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRheXMgKyBtaWxsaXNlY29uZHMgLyA4NjRlNTtcbiAgICAgICAgICAgIGNhc2UgJ2hvdXInOlxuICAgICAgICAgICAgICAgIHJldHVybiBkYXlzICogMjQgKyBtaWxsaXNlY29uZHMgLyAzNmU1O1xuICAgICAgICAgICAgY2FzZSAnbWludXRlJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF5cyAqIDE0NDAgKyBtaWxsaXNlY29uZHMgLyA2ZTQ7XG4gICAgICAgICAgICBjYXNlICdzZWNvbmQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBkYXlzICogODY0MDAgKyBtaWxsaXNlY29uZHMgLyAxMDAwO1xuICAgICAgICAgICAgLy8gTWF0aC5mbG9vciBwcmV2ZW50cyBmbG9hdGluZyBwb2ludCBtYXRoIGVycm9ycyBoZXJlXG4gICAgICAgICAgICBjYXNlICdtaWxsaXNlY29uZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoZGF5cyAqIDg2NGU1KSArIG1pbGxpc2Vjb25kcztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIHVuaXQgJyArIHVuaXRzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbWFrZUFzKGFsaWFzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXMoYWxpYXMpO1xuICAgIH07XG59XG5cbnZhciBhc01pbGxpc2Vjb25kcyA9IG1ha2VBcygnbXMnKSxcbiAgICBhc1NlY29uZHMgPSBtYWtlQXMoJ3MnKSxcbiAgICBhc01pbnV0ZXMgPSBtYWtlQXMoJ20nKSxcbiAgICBhc0hvdXJzID0gbWFrZUFzKCdoJyksXG4gICAgYXNEYXlzID0gbWFrZUFzKCdkJyksXG4gICAgYXNXZWVrcyA9IG1ha2VBcygndycpLFxuICAgIGFzTW9udGhzID0gbWFrZUFzKCdNJyksXG4gICAgYXNRdWFydGVycyA9IG1ha2VBcygnUScpLFxuICAgIGFzWWVhcnMgPSBtYWtlQXMoJ3knKSxcbiAgICB2YWx1ZU9mJDEgPSBhc01pbGxpc2Vjb25kcztcblxuZnVuY3Rpb24gY2xvbmUkMSgpIHtcbiAgICByZXR1cm4gY3JlYXRlRHVyYXRpb24odGhpcyk7XG59XG5cbmZ1bmN0aW9uIGdldCQyKHVuaXRzKSB7XG4gICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cyk7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCgpID8gdGhpc1t1bml0cyArICdzJ10oKSA6IE5hTjtcbn1cblxuZnVuY3Rpb24gbWFrZUdldHRlcihuYW1lKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCgpID8gdGhpcy5fZGF0YVtuYW1lXSA6IE5hTjtcbiAgICB9O1xufVxuXG52YXIgbWlsbGlzZWNvbmRzID0gbWFrZUdldHRlcignbWlsbGlzZWNvbmRzJyksXG4gICAgc2Vjb25kcyA9IG1ha2VHZXR0ZXIoJ3NlY29uZHMnKSxcbiAgICBtaW51dGVzID0gbWFrZUdldHRlcignbWludXRlcycpLFxuICAgIGhvdXJzID0gbWFrZUdldHRlcignaG91cnMnKSxcbiAgICBkYXlzID0gbWFrZUdldHRlcignZGF5cycpLFxuICAgIG1vbnRocyA9IG1ha2VHZXR0ZXIoJ21vbnRocycpLFxuICAgIHllYXJzID0gbWFrZUdldHRlcigneWVhcnMnKTtcblxuZnVuY3Rpb24gd2Vla3MoKSB7XG4gICAgcmV0dXJuIGFic0Zsb29yKHRoaXMuZGF5cygpIC8gNyk7XG59XG5cbnZhciByb3VuZCA9IE1hdGgucm91bmQsXG4gICAgdGhyZXNob2xkcyA9IHtcbiAgICAgICAgc3M6IDQ0LCAvLyBhIGZldyBzZWNvbmRzIHRvIHNlY29uZHNcbiAgICAgICAgczogNDUsIC8vIHNlY29uZHMgdG8gbWludXRlXG4gICAgICAgIG06IDQ1LCAvLyBtaW51dGVzIHRvIGhvdXJcbiAgICAgICAgaDogMjIsIC8vIGhvdXJzIHRvIGRheVxuICAgICAgICBkOiAyNiwgLy8gZGF5cyB0byBtb250aC93ZWVrXG4gICAgICAgIHc6IG51bGwsIC8vIHdlZWtzIHRvIG1vbnRoXG4gICAgICAgIE06IDExLCAvLyBtb250aHMgdG8geWVhclxuICAgIH07XG5cbi8vIGhlbHBlciBmdW5jdGlvbiBmb3IgbW9tZW50LmZuLmZyb20sIG1vbWVudC5mbi5mcm9tTm93LCBhbmQgbW9tZW50LmR1cmF0aW9uLmZuLmh1bWFuaXplXG5mdW5jdGlvbiBzdWJzdGl0dXRlVGltZUFnbyhzdHJpbmcsIG51bWJlciwgd2l0aG91dFN1ZmZpeCwgaXNGdXR1cmUsIGxvY2FsZSkge1xuICAgIHJldHVybiBsb2NhbGUucmVsYXRpdmVUaW1lKG51bWJlciB8fCAxLCAhIXdpdGhvdXRTdWZmaXgsIHN0cmluZywgaXNGdXR1cmUpO1xufVxuXG5mdW5jdGlvbiByZWxhdGl2ZVRpbWUkMShwb3NOZWdEdXJhdGlvbiwgd2l0aG91dFN1ZmZpeCwgdGhyZXNob2xkcywgbG9jYWxlKSB7XG4gICAgdmFyIGR1cmF0aW9uID0gY3JlYXRlRHVyYXRpb24ocG9zTmVnRHVyYXRpb24pLmFicygpLFxuICAgICAgICBzZWNvbmRzID0gcm91bmQoZHVyYXRpb24uYXMoJ3MnKSksXG4gICAgICAgIG1pbnV0ZXMgPSByb3VuZChkdXJhdGlvbi5hcygnbScpKSxcbiAgICAgICAgaG91cnMgPSByb3VuZChkdXJhdGlvbi5hcygnaCcpKSxcbiAgICAgICAgZGF5cyA9IHJvdW5kKGR1cmF0aW9uLmFzKCdkJykpLFxuICAgICAgICBtb250aHMgPSByb3VuZChkdXJhdGlvbi5hcygnTScpKSxcbiAgICAgICAgd2Vla3MgPSByb3VuZChkdXJhdGlvbi5hcygndycpKSxcbiAgICAgICAgeWVhcnMgPSByb3VuZChkdXJhdGlvbi5hcygneScpKSxcbiAgICAgICAgYSA9XG4gICAgICAgICAgICAoc2Vjb25kcyA8PSB0aHJlc2hvbGRzLnNzICYmIFsncycsIHNlY29uZHNdKSB8fFxuICAgICAgICAgICAgKHNlY29uZHMgPCB0aHJlc2hvbGRzLnMgJiYgWydzcycsIHNlY29uZHNdKSB8fFxuICAgICAgICAgICAgKG1pbnV0ZXMgPD0gMSAmJiBbJ20nXSkgfHxcbiAgICAgICAgICAgIChtaW51dGVzIDwgdGhyZXNob2xkcy5tICYmIFsnbW0nLCBtaW51dGVzXSkgfHxcbiAgICAgICAgICAgIChob3VycyA8PSAxICYmIFsnaCddKSB8fFxuICAgICAgICAgICAgKGhvdXJzIDwgdGhyZXNob2xkcy5oICYmIFsnaGgnLCBob3Vyc10pIHx8XG4gICAgICAgICAgICAoZGF5cyA8PSAxICYmIFsnZCddKSB8fFxuICAgICAgICAgICAgKGRheXMgPCB0aHJlc2hvbGRzLmQgJiYgWydkZCcsIGRheXNdKTtcblxuICAgIGlmICh0aHJlc2hvbGRzLncgIT0gbnVsbCkge1xuICAgICAgICBhID1cbiAgICAgICAgICAgIGEgfHxcbiAgICAgICAgICAgICh3ZWVrcyA8PSAxICYmIFsndyddKSB8fFxuICAgICAgICAgICAgKHdlZWtzIDwgdGhyZXNob2xkcy53ICYmIFsnd3cnLCB3ZWVrc10pO1xuICAgIH1cbiAgICBhID0gYSB8fFxuICAgICAgICAobW9udGhzIDw9IDEgJiYgWydNJ10pIHx8XG4gICAgICAgIChtb250aHMgPCB0aHJlc2hvbGRzLk0gJiYgWydNTScsIG1vbnRoc10pIHx8XG4gICAgICAgICh5ZWFycyA8PSAxICYmIFsneSddKSB8fCBbJ3l5JywgeWVhcnNdO1xuXG4gICAgYVsyXSA9IHdpdGhvdXRTdWZmaXg7XG4gICAgYVszXSA9ICtwb3NOZWdEdXJhdGlvbiA+IDA7XG4gICAgYVs0XSA9IGxvY2FsZTtcbiAgICByZXR1cm4gc3Vic3RpdHV0ZVRpbWVBZ28uYXBwbHkobnVsbCwgYSk7XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gYWxsb3dzIHlvdSB0byBzZXQgdGhlIHJvdW5kaW5nIGZ1bmN0aW9uIGZvciByZWxhdGl2ZSB0aW1lIHN0cmluZ3NcbmZ1bmN0aW9uIGdldFNldFJlbGF0aXZlVGltZVJvdW5kaW5nKHJvdW5kaW5nRnVuY3Rpb24pIHtcbiAgICBpZiAocm91bmRpbmdGdW5jdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiByb3VuZDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiByb3VuZGluZ0Z1bmN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJvdW5kID0gcm91bmRpbmdGdW5jdGlvbjtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBhbGxvd3MgeW91IHRvIHNldCBhIHRocmVzaG9sZCBmb3IgcmVsYXRpdmUgdGltZSBzdHJpbmdzXG5mdW5jdGlvbiBnZXRTZXRSZWxhdGl2ZVRpbWVUaHJlc2hvbGQodGhyZXNob2xkLCBsaW1pdCkge1xuICAgIGlmICh0aHJlc2hvbGRzW3RocmVzaG9sZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChsaW1pdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0aHJlc2hvbGRzW3RocmVzaG9sZF07XG4gICAgfVxuICAgIHRocmVzaG9sZHNbdGhyZXNob2xkXSA9IGxpbWl0O1xuICAgIGlmICh0aHJlc2hvbGQgPT09ICdzJykge1xuICAgICAgICB0aHJlc2hvbGRzLnNzID0gbGltaXQgLSAxO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaHVtYW5pemUoYXJnV2l0aFN1ZmZpeCwgYXJnVGhyZXNob2xkcykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLmludmFsaWREYXRlKCk7XG4gICAgfVxuXG4gICAgdmFyIHdpdGhTdWZmaXggPSBmYWxzZSxcbiAgICAgICAgdGggPSB0aHJlc2hvbGRzLFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIG91dHB1dDtcblxuICAgIGlmICh0eXBlb2YgYXJnV2l0aFN1ZmZpeCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgYXJnVGhyZXNob2xkcyA9IGFyZ1dpdGhTdWZmaXg7XG4gICAgICAgIGFyZ1dpdGhTdWZmaXggPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBhcmdXaXRoU3VmZml4ID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgd2l0aFN1ZmZpeCA9IGFyZ1dpdGhTdWZmaXg7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgYXJnVGhyZXNob2xkcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGggPSBPYmplY3QuYXNzaWduKHt9LCB0aHJlc2hvbGRzLCBhcmdUaHJlc2hvbGRzKTtcbiAgICAgICAgaWYgKGFyZ1RocmVzaG9sZHMucyAhPSBudWxsICYmIGFyZ1RocmVzaG9sZHMuc3MgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGguc3MgPSBhcmdUaHJlc2hvbGRzLnMgLSAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9jYWxlID0gdGhpcy5sb2NhbGVEYXRhKCk7XG4gICAgb3V0cHV0ID0gcmVsYXRpdmVUaW1lJDEodGhpcywgIXdpdGhTdWZmaXgsIHRoLCBsb2NhbGUpO1xuXG4gICAgaWYgKHdpdGhTdWZmaXgpIHtcbiAgICAgICAgb3V0cHV0ID0gbG9jYWxlLnBhc3RGdXR1cmUoK3RoaXMsIG91dHB1dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxvY2FsZS5wb3N0Zm9ybWF0KG91dHB1dCk7XG59XG5cbnZhciBhYnMkMSA9IE1hdGguYWJzO1xuXG5mdW5jdGlvbiBzaWduKHgpIHtcbiAgICByZXR1cm4gKHggPiAwKSAtICh4IDwgMCkgfHwgK3g7XG59XG5cbmZ1bmN0aW9uIHRvSVNPU3RyaW5nJDEoKSB7XG4gICAgLy8gZm9yIElTTyBzdHJpbmdzIHdlIGRvIG5vdCB1c2UgdGhlIG5vcm1hbCBidWJibGluZyBydWxlczpcbiAgICAvLyAgKiBtaWxsaXNlY29uZHMgYnViYmxlIHVwIHVudGlsIHRoZXkgYmVjb21lIGhvdXJzXG4gICAgLy8gICogZGF5cyBkbyBub3QgYnViYmxlIGF0IGFsbFxuICAgIC8vICAqIG1vbnRocyBidWJibGUgdXAgdW50aWwgdGhleSBiZWNvbWUgeWVhcnNcbiAgICAvLyBUaGlzIGlzIGJlY2F1c2UgdGhlcmUgaXMgbm8gY29udGV4dC1mcmVlIGNvbnZlcnNpb24gYmV0d2VlbiBob3VycyBhbmQgZGF5c1xuICAgIC8vICh0aGluayBvZiBjbG9jayBjaGFuZ2VzKVxuICAgIC8vIGFuZCBhbHNvIG5vdCBiZXR3ZWVuIGRheXMgYW5kIG1vbnRocyAoMjgtMzEgZGF5cyBwZXIgbW9udGgpXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkuaW52YWxpZERhdGUoKTtcbiAgICB9XG5cbiAgICB2YXIgc2Vjb25kcyA9IGFicyQxKHRoaXMuX21pbGxpc2Vjb25kcykgLyAxMDAwLFxuICAgICAgICBkYXlzID0gYWJzJDEodGhpcy5fZGF5cyksXG4gICAgICAgIG1vbnRocyA9IGFicyQxKHRoaXMuX21vbnRocyksXG4gICAgICAgIG1pbnV0ZXMsXG4gICAgICAgIGhvdXJzLFxuICAgICAgICB5ZWFycyxcbiAgICAgICAgcyxcbiAgICAgICAgdG90YWwgPSB0aGlzLmFzU2Vjb25kcygpLFxuICAgICAgICB0b3RhbFNpZ24sXG4gICAgICAgIHltU2lnbixcbiAgICAgICAgZGF5c1NpZ24sXG4gICAgICAgIGhtc1NpZ247XG5cbiAgICBpZiAoIXRvdGFsKSB7XG4gICAgICAgIC8vIHRoaXMgaXMgdGhlIHNhbWUgYXMgQyMncyAoTm9kYSkgYW5kIHB5dGhvbiAoaXNvZGF0ZSkuLi5cbiAgICAgICAgLy8gYnV0IG5vdCBvdGhlciBKUyAoZ29vZy5kYXRlKVxuICAgICAgICByZXR1cm4gJ1AwRCc7XG4gICAgfVxuXG4gICAgLy8gMzYwMCBzZWNvbmRzIC0+IDYwIG1pbnV0ZXMgLT4gMSBob3VyXG4gICAgbWludXRlcyA9IGFic0Zsb29yKHNlY29uZHMgLyA2MCk7XG4gICAgaG91cnMgPSBhYnNGbG9vcihtaW51dGVzIC8gNjApO1xuICAgIHNlY29uZHMgJT0gNjA7XG4gICAgbWludXRlcyAlPSA2MDtcblxuICAgIC8vIDEyIG1vbnRocyAtPiAxIHllYXJcbiAgICB5ZWFycyA9IGFic0Zsb29yKG1vbnRocyAvIDEyKTtcbiAgICBtb250aHMgJT0gMTI7XG5cbiAgICAvLyBpbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vZG9yZGlsbGUvbW9tZW50LWlzb2R1cmF0aW9uL2Jsb2IvbWFzdGVyL21vbWVudC5pc29kdXJhdGlvbi5qc1xuICAgIHMgPSBzZWNvbmRzID8gc2Vjb25kcy50b0ZpeGVkKDMpLnJlcGxhY2UoL1xcLj8wKyQvLCAnJykgOiAnJztcblxuICAgIHRvdGFsU2lnbiA9IHRvdGFsIDwgMCA/ICctJyA6ICcnO1xuICAgIHltU2lnbiA9IHNpZ24odGhpcy5fbW9udGhzKSAhPT0gc2lnbih0b3RhbCkgPyAnLScgOiAnJztcbiAgICBkYXlzU2lnbiA9IHNpZ24odGhpcy5fZGF5cykgIT09IHNpZ24odG90YWwpID8gJy0nIDogJyc7XG4gICAgaG1zU2lnbiA9IHNpZ24odGhpcy5fbWlsbGlzZWNvbmRzKSAhPT0gc2lnbih0b3RhbCkgPyAnLScgOiAnJztcblxuICAgIHJldHVybiAoXG4gICAgICAgIHRvdGFsU2lnbiArXG4gICAgICAgICdQJyArXG4gICAgICAgICh5ZWFycyA/IHltU2lnbiArIHllYXJzICsgJ1knIDogJycpICtcbiAgICAgICAgKG1vbnRocyA/IHltU2lnbiArIG1vbnRocyArICdNJyA6ICcnKSArXG4gICAgICAgIChkYXlzID8gZGF5c1NpZ24gKyBkYXlzICsgJ0QnIDogJycpICtcbiAgICAgICAgKGhvdXJzIHx8IG1pbnV0ZXMgfHwgc2Vjb25kcyA/ICdUJyA6ICcnKSArXG4gICAgICAgIChob3VycyA/IGhtc1NpZ24gKyBob3VycyArICdIJyA6ICcnKSArXG4gICAgICAgIChtaW51dGVzID8gaG1zU2lnbiArIG1pbnV0ZXMgKyAnTScgOiAnJykgK1xuICAgICAgICAoc2Vjb25kcyA/IGhtc1NpZ24gKyBzICsgJ1MnIDogJycpXG4gICAgKTtcbn1cblxudmFyIHByb3RvJDIgPSBEdXJhdGlvbi5wcm90b3R5cGU7XG5cbnByb3RvJDIuaXNWYWxpZCA9IGlzVmFsaWQkMTtcbnByb3RvJDIuYWJzID0gYWJzO1xucHJvdG8kMi5hZGQgPSBhZGQkMTtcbnByb3RvJDIuc3VidHJhY3QgPSBzdWJ0cmFjdCQxO1xucHJvdG8kMi5hcyA9IGFzO1xucHJvdG8kMi5hc01pbGxpc2Vjb25kcyA9IGFzTWlsbGlzZWNvbmRzO1xucHJvdG8kMi5hc1NlY29uZHMgPSBhc1NlY29uZHM7XG5wcm90byQyLmFzTWludXRlcyA9IGFzTWludXRlcztcbnByb3RvJDIuYXNIb3VycyA9IGFzSG91cnM7XG5wcm90byQyLmFzRGF5cyA9IGFzRGF5cztcbnByb3RvJDIuYXNXZWVrcyA9IGFzV2Vla3M7XG5wcm90byQyLmFzTW9udGhzID0gYXNNb250aHM7XG5wcm90byQyLmFzUXVhcnRlcnMgPSBhc1F1YXJ0ZXJzO1xucHJvdG8kMi5hc1llYXJzID0gYXNZZWFycztcbnByb3RvJDIudmFsdWVPZiA9IHZhbHVlT2YkMTtcbnByb3RvJDIuX2J1YmJsZSA9IGJ1YmJsZTtcbnByb3RvJDIuY2xvbmUgPSBjbG9uZSQxO1xucHJvdG8kMi5nZXQgPSBnZXQkMjtcbnByb3RvJDIubWlsbGlzZWNvbmRzID0gbWlsbGlzZWNvbmRzO1xucHJvdG8kMi5zZWNvbmRzID0gc2Vjb25kcztcbnByb3RvJDIubWludXRlcyA9IG1pbnV0ZXM7XG5wcm90byQyLmhvdXJzID0gaG91cnM7XG5wcm90byQyLmRheXMgPSBkYXlzO1xucHJvdG8kMi53ZWVrcyA9IHdlZWtzO1xucHJvdG8kMi5tb250aHMgPSBtb250aHM7XG5wcm90byQyLnllYXJzID0geWVhcnM7XG5wcm90byQyLmh1bWFuaXplID0gaHVtYW5pemU7XG5wcm90byQyLnRvSVNPU3RyaW5nID0gdG9JU09TdHJpbmckMTtcbnByb3RvJDIudG9TdHJpbmcgPSB0b0lTT1N0cmluZyQxO1xucHJvdG8kMi50b0pTT04gPSB0b0lTT1N0cmluZyQxO1xucHJvdG8kMi5sb2NhbGUgPSBsb2NhbGU7XG5wcm90byQyLmxvY2FsZURhdGEgPSBsb2NhbGVEYXRhO1xuXG5wcm90byQyLnRvSXNvU3RyaW5nID0gZGVwcmVjYXRlKFxuICAgICd0b0lzb1N0cmluZygpIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2UgdG9JU09TdHJpbmcoKSBpbnN0ZWFkIChub3RpY2UgdGhlIGNhcGl0YWxzKScsXG4gICAgdG9JU09TdHJpbmckMVxuKTtcbnByb3RvJDIubGFuZyA9IGxhbmc7XG5cbi8vIEZPUk1BVFRJTkdcblxuYWRkRm9ybWF0VG9rZW4oJ1gnLCAwLCAwLCAndW5peCcpO1xuYWRkRm9ybWF0VG9rZW4oJ3gnLCAwLCAwLCAndmFsdWVPZicpO1xuXG4vLyBQQVJTSU5HXG5cbmFkZFJlZ2V4VG9rZW4oJ3gnLCBtYXRjaFNpZ25lZCk7XG5hZGRSZWdleFRva2VuKCdYJywgbWF0Y2hUaW1lc3RhbXApO1xuYWRkUGFyc2VUb2tlbignWCcsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKHBhcnNlRmxvYXQoaW5wdXQpICogMTAwMCk7XG59KTtcbmFkZFBhcnNlVG9rZW4oJ3gnLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICBjb25maWcuX2QgPSBuZXcgRGF0ZSh0b0ludChpbnB1dCkpO1xufSk7XG5cbi8vISBtb21lbnQuanNcblxuaG9va3MudmVyc2lvbiA9ICcyLjMwLjEnO1xuXG5zZXRIb29rQ2FsbGJhY2soY3JlYXRlTG9jYWwpO1xuXG5ob29rcy5mbiA9IHByb3RvO1xuaG9va3MubWluID0gbWluO1xuaG9va3MubWF4ID0gbWF4O1xuaG9va3Mubm93ID0gbm93O1xuaG9va3MudXRjID0gY3JlYXRlVVRDO1xuaG9va3MudW5peCA9IGNyZWF0ZVVuaXg7XG5ob29rcy5tb250aHMgPSBsaXN0TW9udGhzO1xuaG9va3MuaXNEYXRlID0gaXNEYXRlO1xuaG9va3MubG9jYWxlID0gZ2V0U2V0R2xvYmFsTG9jYWxlO1xuaG9va3MuaW52YWxpZCA9IGNyZWF0ZUludmFsaWQ7XG5ob29rcy5kdXJhdGlvbiA9IGNyZWF0ZUR1cmF0aW9uO1xuaG9va3MuaXNNb21lbnQgPSBpc01vbWVudDtcbmhvb2tzLndlZWtkYXlzID0gbGlzdFdlZWtkYXlzO1xuaG9va3MucGFyc2Vab25lID0gY3JlYXRlSW5ab25lO1xuaG9va3MubG9jYWxlRGF0YSA9IGdldExvY2FsZTtcbmhvb2tzLmlzRHVyYXRpb24gPSBpc0R1cmF0aW9uO1xuaG9va3MubW9udGhzU2hvcnQgPSBsaXN0TW9udGhzU2hvcnQ7XG5ob29rcy53ZWVrZGF5c01pbiA9IGxpc3RXZWVrZGF5c01pbjtcbmhvb2tzLmRlZmluZUxvY2FsZSA9IGRlZmluZUxvY2FsZTtcbmhvb2tzLnVwZGF0ZUxvY2FsZSA9IHVwZGF0ZUxvY2FsZTtcbmhvb2tzLmxvY2FsZXMgPSBsaXN0TG9jYWxlcztcbmhvb2tzLndlZWtkYXlzU2hvcnQgPSBsaXN0V2Vla2RheXNTaG9ydDtcbmhvb2tzLm5vcm1hbGl6ZVVuaXRzID0gbm9ybWFsaXplVW5pdHM7XG5ob29rcy5yZWxhdGl2ZVRpbWVSb3VuZGluZyA9IGdldFNldFJlbGF0aXZlVGltZVJvdW5kaW5nO1xuaG9va3MucmVsYXRpdmVUaW1lVGhyZXNob2xkID0gZ2V0U2V0UmVsYXRpdmVUaW1lVGhyZXNob2xkO1xuaG9va3MuY2FsZW5kYXJGb3JtYXQgPSBnZXRDYWxlbmRhckZvcm1hdDtcbmhvb2tzLnByb3RvdHlwZSA9IHByb3RvO1xuXG4vLyBjdXJyZW50bHkgSFRNTDUgaW5wdXQgdHlwZSBvbmx5IHN1cHBvcnRzIDI0LWhvdXIgZm9ybWF0c1xuaG9va3MuSFRNTDVfRk1UID0ge1xuICAgIERBVEVUSU1FX0xPQ0FMOiAnWVlZWS1NTS1ERFRISDptbScsIC8vIDxpbnB1dCB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIiAvPlxuICAgIERBVEVUSU1FX0xPQ0FMX1NFQ09ORFM6ICdZWVlZLU1NLUREVEhIOm1tOnNzJywgLy8gPGlucHV0IHR5cGU9XCJkYXRldGltZS1sb2NhbFwiIHN0ZXA9XCIxXCIgLz5cbiAgICBEQVRFVElNRV9MT0NBTF9NUzogJ1lZWVktTU0tRERUSEg6bW06c3MuU1NTJywgLy8gPGlucHV0IHR5cGU9XCJkYXRldGltZS1sb2NhbFwiIHN0ZXA9XCIwLjAwMVwiIC8+XG4gICAgREFURTogJ1lZWVktTU0tREQnLCAvLyA8aW5wdXQgdHlwZT1cImRhdGVcIiAvPlxuICAgIFRJTUU6ICdISDptbScsIC8vIDxpbnB1dCB0eXBlPVwidGltZVwiIC8+XG4gICAgVElNRV9TRUNPTkRTOiAnSEg6bW06c3MnLCAvLyA8aW5wdXQgdHlwZT1cInRpbWVcIiBzdGVwPVwiMVwiIC8+XG4gICAgVElNRV9NUzogJ0hIOm1tOnNzLlNTUycsIC8vIDxpbnB1dCB0eXBlPVwidGltZVwiIHN0ZXA9XCIwLjAwMVwiIC8+XG4gICAgV0VFSzogJ0dHR0ctW1ddV1cnLCAvLyA8aW5wdXQgdHlwZT1cIndlZWtcIiAvPlxuICAgIE1PTlRIOiAnWVlZWS1NTScsIC8vIDxpbnB1dCB0eXBlPVwibW9udGhcIiAvPlxufTtcblxuZXhwb3J0IGRlZmF1bHQgaG9va3M7XG4iLCIvLyBBY2Nlc3NTaGllbGQgQVBJIFNlcnZpY2UgLSBEaXJlY3QgQVBJIGludGVncmF0aW9uIHVzaW5nIGh1YnNwb3QuZmV0Y2hcbi8vIEh1YlNwb3QgYXV0b21hdGljYWxseSBzaWducyByZXF1ZXN0cyBhbmQgaW5jbHVkZXMgbWV0YWRhdGFcbmNvbnN0IEFQSV9CQVNFX1VSTCA9ICdodHRwczovLzA1MTg5MmU1ODkyNi5uZ3Jvay1mcmVlLmFwcCc7XG5cbmNsYXNzIEFjY2Vzc1NoaWVsZEFQSSB7XG4gIGNvbnN0cnVjdG9yKGh1YnNwb3RGZXRjaCA9IG51bGwsIGNvbnRleHQgPSBudWxsKSB7XG4gICAgdGhpcy5iYXNlVVJMID0gQVBJX0JBU0VfVVJMO1xuICAgIHRoaXMuZmV0Y2ggPSBodWJzcG90RmV0Y2g7IC8vIFVzZSBIdWJTcG90J3MgZmV0Y2ggbWV0aG9kXG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDsgLy8gU3RvcmUgY29udGV4dCBmb3IgcG9ydGFsL3VzZXIgaW5mb1xuICAgIGNvbnNvbGUubG9nKCfwn5SnIEFjY2Vzc1NoaWVsZEFQSSBpbml0aWFsaXplZCB3aXRoIGJhc2VVUkw6JywgdGhpcy5iYXNlVVJMKTtcbiAgICBjb25zb2xlLmxvZygn8J+MkCBGZXRjaCBmdW5jdGlvbiB0eXBlOicsIHR5cGVvZiBodWJzcG90RmV0Y2gpO1xuICAgIGNvbnNvbGUubG9nKCfwn5GkIENvbnRleHQgYXZhaWxhYmxlOicsICEhY29udGV4dCk7XG4gIH1cblxuICAvLyBTZXQgdGhlIGh1YnNwb3QgZmV0Y2ggbWV0aG9kXG4gIHNldEZldGNoKGh1YnNwb3RGZXRjaCkge1xuICAgIHRoaXMuZmV0Y2ggPSBodWJzcG90RmV0Y2g7XG4gIH1cblxuICAvLyBVcGxvYWQgZG9jdW1lbnQgdG8gQWNjZXNzU2hpZWxkIGJhY2tlbmRcbiAgYXN5bmMgdXBsb2FkRG9jdW1lbnQoZmlsZSwgb2JqZWN0SWQsIG9iamVjdFR5cGUsIG1ldGFkYXRhID0ge30pIHtcbiAgICBjb25zb2xlLmxvZygn8J+TpCBBUEk6IHVwbG9hZERvY3VtZW50IGNhbGxlZCcsIHsgZmlsZU5hbWU6IGZpbGU/Lm5hbWUsIG9iamVjdElkLCBvYmplY3RUeXBlLCBtZXRhZGF0YSB9KTtcblxuICAgIGlmICghdGhpcy5mZXRjaCkge1xuICAgICAgY29uc29sZS5lcnJvcign4p2MIEFQSTogSHViU3BvdCBmZXRjaCBub3QgaW5pdGlhbGl6ZWQgZm9yIHVwbG9hZCcpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdIdWJTcG90IGZldGNoIG5vdCBpbml0aWFsaXplZCcpO1xuICAgIH1cblxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdkb2N1bWVudCcsIGZpbGUpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgnb2JqZWN0SWQnLCBvYmplY3RJZCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdvYmplY3RUeXBlJywgb2JqZWN0VHlwZSk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdtZXRhZGF0YScsIEpTT04uc3RyaW5naWZ5KG1ldGFkYXRhKSk7XG5cbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmJhc2VVUkx9L2FwaS91cGxvYWQtZG9jdW1lbnRgO1xuICAgIGNvbnNvbGUubG9nKCfwn5OkIEFQSTogTWFraW5nIHVwbG9hZCByZXF1ZXN0IHRvOicsIHVybCk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmZldGNoKHVybCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogZm9ybURhdGEsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zb2xlLmxvZygn8J+TpCBBUEk6IFVwbG9hZCByZXNwb25zZSBzdGF0dXM6JywgcmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgIGNvbnNvbGUubG9nKCfwn5OkIEFQSTogVXBsb2FkIHJlc3BvbnNlIG9rOicsIHJlc3BvbnNlLm9rKTtcblxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICBjb25zdCBlcnJvclRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ+KdjCBBUEk6IFVwbG9hZCBlcnJvciByZXNwb25zZTonLCBlcnJvclRleHQpO1xuICAgICAgICBsZXQgZXJyb3JEYXRhO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGVycm9yRGF0YSA9IEpTT04ucGFyc2UoZXJyb3JUZXh0KTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgZXJyb3JEYXRhID0geyBlcnJvcjogZXJyb3JUZXh0IH07XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yRGF0YS5lcnJvciB8fCAnVXBsb2FkIGZhaWxlZCcpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBjb25zb2xlLmxvZygn8J+TpCBBUEk6IFVwbG9hZCBzdWNjZXNzOicsIHJlc3VsdCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfinYwgQVBJOiB1cGxvYWREb2N1bWVudCBlcnJvcjonLCBlcnJvcik7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cblxuICAvLyBHZXQgZG9jdW1lbnRzIGZvciBhIEh1YlNwb3QgcmVjb3JkIChtdWx0aS10ZW5hbnQpXG4gIGFzeW5jIGdldERvY3VtZW50cyhvYmplY3RUeXBlLCBvYmplY3RJZCkge1xuICAgIGNvbnNvbGUubG9nKCfwn5OEIEFQSTogZ2V0RG9jdW1lbnRzIGNhbGxlZCcsIHsgb2JqZWN0VHlwZSwgb2JqZWN0SWQgfSk7XG5cbiAgICBpZiAoIXRoaXMuZmV0Y2gpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+KdjCBBUEk6IEh1YlNwb3QgZmV0Y2ggbm90IGluaXRpYWxpemVkJyk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0h1YlNwb3QgZmV0Y2ggbm90IGluaXRpYWxpemVkJyk7XG4gICAgfVxuXG4gICAgY29uc3QgcG9ydGFsSWQgPSB0aGlzLmNvbnRleHQ/LnBvcnRhbD8uaWQ7XG4gICAgY29uc3QgdGVhbUlkID0gJ2RlZmF1bHQnOyAvLyBGb3Igbm93LCB1c2luZyBkZWZhdWx0IHRlYW1cblxuICAgIGlmICghcG9ydGFsSWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUG9ydGFsIElEIG5vdCBhdmFpbGFibGUnKTtcbiAgICB9XG5cbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmJhc2VVUkx9L2FwaS9kb2N1bWVudHMvJHtwb3J0YWxJZH0vJHtvYmplY3RUeXBlfS8ke29iamVjdElkfWA7XG4gICAgY29uc29sZS5sb2coJ/Cfk4QgQVBJOiBNYWtpbmcgcmVxdWVzdCB0bzonLCB1cmwpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5mZXRjaCh1cmwsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKCfwn5OEIEFQSTogUmVzcG9uc2Ugc3RhdHVzOicsIHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICBjb25zb2xlLmxvZygn8J+ThCBBUEk6IFJlc3BvbnNlIG9rOicsIHJlc3BvbnNlLm9rKTtcblxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICBjb25zdCBlcnJvclRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ+KdjCBBUEk6IEVycm9yIHJlc3BvbnNlOicsIGVycm9yVGV4dCk7XG4gICAgICAgIGxldCBlcnJvckRhdGE7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZXJyb3JEYXRhID0gSlNPTi5wYXJzZShlcnJvclRleHQpO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICBlcnJvckRhdGEgPSB7IGVycm9yOiBlcnJvclRleHQgfTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JEYXRhLmVycm9yIHx8ICdGYWlsZWQgdG8gZmV0Y2ggZG9jdW1lbnRzJyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBjb25zb2xlLmxvZygn8J+ThCBBUEk6IERvY3VtZW50cyBkYXRhOicsIGRhdGEpO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+KdjCBBUEk6IGdldERvY3VtZW50cyBlcnJvcjonLCBlcnJvcik7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cblxuICAvLyBHZXQgYWNjZXNzIGxvZ3MgZm9yIGRvY3VtZW50cyAobXVsdGktdGVuYW50KVxuICBhc3luYyBnZXRBY2Nlc3NMb2dzKGRvY3VtZW50SWQgPSBudWxsKSB7XG4gICAgY29uc29sZS5sb2coJ/Cfk5wgQVBJOiBnZXRBY2Nlc3NMb2dzIGNhbGxlZCcsIHsgZG9jdW1lbnRJZCB9KTtcblxuICAgIGlmICghdGhpcy5mZXRjaCkge1xuICAgICAgY29uc29sZS5lcnJvcign4p2MIEFQSTogSHViU3BvdCBmZXRjaCBub3QgaW5pdGlhbGl6ZWQgZm9yIGFjY2VzcyBsb2dzJyk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0h1YlNwb3QgZmV0Y2ggbm90IGluaXRpYWxpemVkJyk7XG4gICAgfVxuXG4gICAgY29uc3QgcG9ydGFsSWQgPSB0aGlzLmNvbnRleHQ/LnBvcnRhbD8uaWQ7XG4gICAgY29uc3QgdGVhbUlkID0gJ2RlZmF1bHQnOyAvLyBGb3Igbm93LCB1c2luZyBkZWZhdWx0IHRlYW1cblxuICAgIGlmICghcG9ydGFsSWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUG9ydGFsIElEIG5vdCBhdmFpbGFibGUnKTtcbiAgICB9XG5cbiAgICAvLyBCdWlsZCBVUkwgd2l0aCBvcHRpb25hbCBkb2N1bWVudF9pZCBmaWx0ZXJcbiAgICBsZXQgdXJsID0gYCR7dGhpcy5iYXNlVVJMfS9hcGkvZG9jdW1lbnRzLyR7dGVhbUlkfS8ke3BvcnRhbElkfS9hY2Nlc3MtbG9nc2A7XG4gICAgaWYgKGRvY3VtZW50SWQpIHtcbiAgICAgIHVybCArPSBgP2RvY3VtZW50X2lkPSR7ZG9jdW1lbnRJZH1gO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKCfwn5OcIEFQSTogTWFraW5nIGFjY2VzcyBsb2dzIHJlcXVlc3QgdG86JywgdXJsKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuZmV0Y2godXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICAgIH0pO1xuXG4gICAgICBjb25zb2xlLmxvZygn8J+TnCBBUEk6IEFjY2VzcyBsb2dzIHJlc3BvbnNlIHN0YXR1czonLCByZXNwb25zZS5zdGF0dXMpO1xuICAgICAgY29uc29sZS5sb2coJ/Cfk5wgQVBJOiBBY2Nlc3MgbG9ncyByZXNwb25zZSBvazonLCByZXNwb25zZS5vayk7XG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgY29uc3QgZXJyb3JUZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgICBjb25zb2xlLmVycm9yKCfinYwgQVBJOiBBY2Nlc3MgbG9ncyBlcnJvciByZXNwb25zZTonLCBlcnJvclRleHQpO1xuICAgICAgICBsZXQgZXJyb3JEYXRhO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGVycm9yRGF0YSA9IEpTT04ucGFyc2UoZXJyb3JUZXh0KTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgZXJyb3JEYXRhID0geyBlcnJvcjogZXJyb3JUZXh0IH07XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yRGF0YS5lcnJvciB8fCAnRmFpbGVkIHRvIGZldGNoIGFjY2VzcyBsb2dzJyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKCfwn5OcIEFQSTogQWNjZXNzIGxvZ3MgZGF0YTonLCByZXN1bHQpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcign4p2MIEFQSTogZ2V0QWNjZXNzTG9ncyBlcnJvcjonLCBlcnJvcik7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cblxuICAvLyBMb2cgZG9jdW1lbnQgYWNjZXNzXG4gIGFzeW5jIGxvZ0FjY2Vzcyhkb2N1bWVudElkLCB1c2VySWQsIGFjdGlvbiwgbWV0YWRhdGEgPSB7fSkge1xuICAgIGNvbnNvbGUubG9nKCfwn5OdIEFQSTogbG9nQWNjZXNzIGNhbGxlZCcsIHsgZG9jdW1lbnRJZCwgdXNlcklkLCBhY3Rpb24sIG1ldGFkYXRhIH0pO1xuXG4gICAgaWYgKCF0aGlzLmZldGNoKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfinYwgQVBJOiBIdWJTcG90IGZldGNoIG5vdCBpbml0aWFsaXplZCBmb3IgbG9nIGFjY2VzcycpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdIdWJTcG90IGZldGNoIG5vdCBpbml0aWFsaXplZCcpO1xuICAgIH1cblxuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYmFzZVVSTH0vYXBpL2xvZy1hY2Nlc3NgO1xuICAgIGNvbnN0IHBheWxvYWQgPSB7IGRvY3VtZW50SWQsIHVzZXJJZCwgYWN0aW9uLCBtZXRhZGF0YSB9O1xuICAgIGNvbnNvbGUubG9nKCfwn5OdIEFQSTogTWFraW5nIGxvZyBhY2Nlc3MgcmVxdWVzdCB0bzonLCB1cmwsICd3aXRoIHBheWxvYWQ6JywgcGF5bG9hZCk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmZldGNoKHVybCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZClcbiAgICAgIH0pO1xuXG4gICAgICBjb25zb2xlLmxvZygn8J+TnSBBUEk6IExvZyBhY2Nlc3MgcmVzcG9uc2Ugc3RhdHVzOicsIHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICBjb25zb2xlLmxvZygn8J+TnSBBUEk6IExvZyBhY2Nlc3MgcmVzcG9uc2Ugb2s6JywgcmVzcG9uc2Uub2spO1xuXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGNvbnN0IGVycm9yVGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgY29uc29sZS5lcnJvcign4p2MIEFQSTogTG9nIGFjY2VzcyBlcnJvciByZXNwb25zZTonLCBlcnJvclRleHQpO1xuICAgICAgICBsZXQgZXJyb3JEYXRhO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGVycm9yRGF0YSA9IEpTT04ucGFyc2UoZXJyb3JUZXh0KTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgZXJyb3JEYXRhID0geyBlcnJvcjogZXJyb3JUZXh0IH07XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yRGF0YS5lcnJvciB8fCAnRmFpbGVkIHRvIGxvZyBhY2Nlc3MnKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc29sZS5sb2coJ/Cfk50gQVBJOiBMb2cgYWNjZXNzIHN1Y2Nlc3M6JywgcmVzdWx0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+KdjCBBUEk6IGxvZ0FjY2VzcyBlcnJvcjonLCBlcnJvcik7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cblxuICAvLyBHZXQgY29tcGxpYW5jZSBzdGF0aXN0aWNzIChtdWx0aS10ZW5hbnQpXG4gIGFzeW5jIGdldENvbXBsaWFuY2VTdGF0cyhvYmplY3RUeXBlLCBvYmplY3RJZCkge1xuICAgIGNvbnNvbGUubG9nKCfwn5OKIEFQSTogZ2V0Q29tcGxpYW5jZVN0YXRzIGNhbGxlZCcsIHsgb2JqZWN0VHlwZSwgb2JqZWN0SWQgfSk7XG5cbiAgICBpZiAoIXRoaXMuZmV0Y2gpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+KdjCBBUEk6IEh1YlNwb3QgZmV0Y2ggbm90IGluaXRpYWxpemVkIGZvciBjb21wbGlhbmNlIHN0YXRzJyk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0h1YlNwb3QgZmV0Y2ggbm90IGluaXRpYWxpemVkJyk7XG4gICAgfVxuXG4gICAgY29uc3QgcG9ydGFsSWQgPSB0aGlzLmNvbnRleHQ/LnBvcnRhbD8uaWQ7XG4gICAgY29uc3QgdGVhbUlkID0gJ2RlZmF1bHQnOyAvLyBGb3Igbm93LCB1c2luZyBkZWZhdWx0IHRlYW1cblxuICAgIGlmICghcG9ydGFsSWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUG9ydGFsIElEIG5vdCBhdmFpbGFibGUnKTtcbiAgICB9XG5cbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmJhc2VVUkx9L2FwaS9kb2N1bWVudHMvJHt0ZWFtSWR9LyR7cG9ydGFsSWR9L2NvbXBsaWFuY2Utc3RhdHNgO1xuICAgIGNvbnNvbGUubG9nKCfwn5OKIEFQSTogTWFraW5nIGNvbXBsaWFuY2Ugc3RhdHMgcmVxdWVzdCB0bzonLCB1cmwpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5mZXRjaCh1cmwsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKCfwn5OKIEFQSTogQ29tcGxpYW5jZSBzdGF0cyByZXNwb25zZSBzdGF0dXM6JywgcmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgIGNvbnNvbGUubG9nKCfwn5OKIEFQSTogQ29tcGxpYW5jZSBzdGF0cyByZXNwb25zZSBvazonLCByZXNwb25zZS5vayk7XG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgY29uc3QgZXJyb3JUZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgICBjb25zb2xlLmVycm9yKCfinYwgQVBJOiBDb21wbGlhbmNlIHN0YXRzIGVycm9yIHJlc3BvbnNlOicsIGVycm9yVGV4dCk7XG4gICAgICAgIGxldCBlcnJvckRhdGE7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZXJyb3JEYXRhID0gSlNPTi5wYXJzZShlcnJvclRleHQpO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICBlcnJvckRhdGEgPSB7IGVycm9yOiBlcnJvclRleHQgfTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JEYXRhLmVycm9yIHx8ICdGYWlsZWQgdG8gZmV0Y2ggY29tcGxpYW5jZSBzdGF0cycpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBjb25zb2xlLmxvZygn8J+TiiBBUEk6IENvbXBsaWFuY2Ugc3RhdHMgZGF0YTonLCByZXN1bHQpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcign4p2MIEFQSTogZ2V0Q29tcGxpYW5jZVN0YXRzIGVycm9yOicsIGVycm9yKTtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxuXG4gIC8vIEhlYWx0aCBjaGVja1xuICBhc3luYyBoZWFsdGhDaGVjaygpIHtcbiAgICBjb25zb2xlLmxvZygn8J+PpSBBUEk6IGhlYWx0aENoZWNrIGNhbGxlZCcpO1xuXG4gICAgaWYgKCF0aGlzLmZldGNoKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfinYwgQVBJOiBIdWJTcG90IGZldGNoIG5vdCBpbml0aWFsaXplZCBmb3IgaGVhbHRoIGNoZWNrJyk7XG4gICAgICByZXR1cm4geyBzdGF0dXM6ICd1bmF2YWlsYWJsZScsIGVycm9yOiAnSHViU3BvdCBmZXRjaCBub3QgaW5pdGlhbGl6ZWQnIH07XG4gICAgfVxuXG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5iYXNlVVJMfS9hcGkvaGVhbHRoYDtcbiAgICBjb25zb2xlLmxvZygn8J+PpSBBUEk6IE1ha2luZyBoZWFsdGggY2hlY2sgcmVxdWVzdCB0bzonLCB1cmwpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5mZXRjaCh1cmwpO1xuICAgICAgY29uc29sZS5sb2coJ/Cfj6UgQVBJOiBIZWFsdGggY2hlY2sgcmVzcG9uc2Ugc3RhdHVzOicsIHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICBjb25zb2xlLmxvZygn8J+PpSBBUEk6IEhlYWx0aCBjaGVjayByZXNwb25zZSBvazonLCByZXNwb25zZS5vayk7XG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKCfwn4+lIEFQSTogSGVhbHRoIGNoZWNrIHJlc3VsdDonLCByZXN1bHQpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcign4p2MIEFQSTogaGVhbHRoQ2hlY2sgZXJyb3I6JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIHsgc3RhdHVzOiAndW5hdmFpbGFibGUnLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xuICAgIH1cbiAgfVxufVxuXG4vLyBFeHBvcnQgY2xhc3MgZm9yIGluc3RhbnRpYXRpb24gd2l0aCBmZXRjaCBtZXRob2RcbmV4cG9ydCBkZWZhdWx0IEFjY2Vzc1NoaWVsZEFQSTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIGh1YnNwb3QsXG4gIENhcmQsXG4gIEJ1dHRvbixcbiAgVGFibGUsXG4gIFRhYmxlSGVhZCxcbiAgVGFibGVSb3csXG4gIFRhYmxlSGVhZGVyLFxuICBUYWJsZUJvZHksXG4gIFRhYmxlQ2VsbCxcbiAgSW5wdXQsXG4gIFRleHQsXG4gIEhlYWRpbmcsXG4gIEZsZXgsXG4gIExvYWRpbmdTcGlubmVyLFxuICBBbGVydCxcbn0gZnJvbSAnQGh1YnNwb3QvdWktZXh0ZW5zaW9ucyc7XG5pbXBvcnQgeyBEb2N1bWVudFVwbG9hZCB9IGZyb20gJy4vRG9jdW1lbnRVcGxvYWQnO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSwgZ2V0QmxvY2tjaGFpblN0YXR1c1ZhcmlhbnQgfSBmcm9tICcuL2hlbHBlcnMnO1xuaW1wb3J0IEFjY2Vzc1NoaWVsZEFQSSBmcm9tICcuL2FwaVNlcnZpY2UnO1xuXG5odWJzcG90LmV4dGVuZCgoZXh0ZW5zaW9uUHJvcHMpID0+IHtcbiAgY29uc29sZS5sb2coJ/CflKcgRXh0ZW5zaW9uIHByb3BzIHJlY2VpdmVkOicsIGV4dGVuc2lvblByb3BzKTtcbiAgY29uc29sZS5sb2coJ/CflKcgRXh0ZW5zaW9uIGNvbnRleHQ6JywgZXh0ZW5zaW9uUHJvcHMuY29udGV4dCk7XG4gIGNvbnNvbGUubG9nKCfwn5SnIEV4dGVuc2lvbiBhY3Rpb25zOicsIGV4dGVuc2lvblByb3BzLmFjdGlvbnMpO1xuICBjb25zb2xlLmxvZygn8J+UpyBFeHRlbnNpb24gZmV0Y2g6JywgZXh0ZW5zaW9uUHJvcHMuZmV0Y2gpO1xuICBjb25zb2xlLmxvZygn8J+UpyBBbGwgZXh0ZW5zaW9uIGtleXM6JywgT2JqZWN0LmtleXMoZXh0ZW5zaW9uUHJvcHMpKTtcbiAgY29uc29sZS5sb2coJ/CflKcgaHVic3BvdC5mZXRjaCBkaXJlY3RseTonLCBodWJzcG90LmZldGNoKTtcbiAgY29uc29sZS5sb2coJ/CflKcgaHVic3BvdCBvYmplY3Q6JywgaHVic3BvdCk7XG4gIGNvbnNvbGUubG9nKCfwn5SnIHR5cGVvZiBodWJzcG90LmZldGNoOicsIHR5cGVvZiBodWJzcG90LmZldGNoKTtcblxuICBjb25zdCB7IGNvbnRleHQsIGFjdGlvbnMsIHJ1blNlcnZlcmxlc3NGdW5jdGlvbiB9ID0gZXh0ZW5zaW9uUHJvcHM7XG4gIHJldHVybiAoXG4gICAgPERvY3VtZW50QWNjZXNzQ2FyZFxuICAgICAgY29udGV4dD17Y29udGV4dH1cbiAgICAgIGFjdGlvbnM9e2FjdGlvbnN9XG4gICAgICBydW5TZXJ2ZXJsZXNzRnVuY3Rpb249e3J1blNlcnZlcmxlc3NGdW5jdGlvbn1cbiAgICAvPlxuICApO1xufSk7XG5cbmNvbnN0IERvY3VtZW50QWNjZXNzQ2FyZCA9ICh7IGNvbnRleHQsIGFjdGlvbnMsIHJ1blNlcnZlcmxlc3NGdW5jdGlvbiB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKCfwn5qAIERvY3VtZW50QWNjZXNzQ2FyZCBpbml0aWFsaXplZCcpO1xuICBjb25zb2xlLmxvZygn8J+TiyBDb250ZXh0IHJlY2VpdmVkOicsIGNvbnRleHQpO1xuICBjb25zb2xlLmxvZygn8J+UpyBBY3Rpb25zIGF2YWlsYWJsZTonLCBPYmplY3Qua2V5cyhhY3Rpb25zIHx8IHt9KSk7XG4gIGNvbnNvbGUubG9nKCfwn5SnIEFjdGlvbnMgZGV0YWlsczonLCBhY3Rpb25zKTtcbiAgY29uc29sZS5sb2coJ/CflKcgcnVuU2VydmVybGVzc0Z1bmN0aW9uIGF2YWlsYWJsZTonLCB0eXBlb2YgcnVuU2VydmVybGVzc0Z1bmN0aW9uKTtcbiAgY29uc29sZS5sb2coJ/CflKcgVXNlciBpbmZvOicsIGNvbnRleHQudXNlcik7XG4gIGNvbnNvbGUubG9nKCfwn5SnIFBvcnRhbCBpbmZvOicsIGNvbnRleHQucG9ydGFsKTtcblxuICAvLyBDaGVjayB3aGF0IENSTSBjYXBhYmlsaXRpZXMgYXJlIGF2YWlsYWJsZVxuICBjb25zb2xlLmxvZygn8J+UpyBmZXRjaENybU9iamVjdFByb3BlcnRpZXM6JywgYWN0aW9ucy5mZXRjaENybU9iamVjdFByb3BlcnRpZXMpO1xuICBjb25zb2xlLmxvZygn8J+UpyByZWZyZXNoT2JqZWN0UHJvcGVydGllczonLCBhY3Rpb25zLnJlZnJlc2hPYmplY3RQcm9wZXJ0aWVzKTtcblxuICBjb25zdCBbZG9jdW1lbnRzLCBzZXREb2N1bWVudHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbYWNjZXNzTG9ncywgc2V0QWNjZXNzTG9nc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbdXBsb2FkaW5nLCBzZXRVcGxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtzZWxlY3RlZFNlc3Npb24sIHNldFNlbGVjdGVkU2Vzc2lvbl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3Nob3dTZXNzaW9uQ2FyZCwgc2V0U2hvd1Nlc3Npb25DYXJkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2FwaVNlcnZpY2UsIHNldEFwaVNlcnZpY2VdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3Qgb2JqZWN0SWQgPSBjb250ZXh0LmNybT8ub2JqZWN0SWQ7XG4gIGNvbnN0IG9iamVjdFR5cGUgPSBjb250ZXh0LmNybT8ub2JqZWN0VHlwZUlkO1xuXG4gIGNvbnNvbGUubG9nKCfwn5OKIE9iamVjdCBkZXRhaWxzOicsIHsgb2JqZWN0SWQsIG9iamVjdFR5cGUsIGZ1bGxPYmplY3RUeXBlOiBjb250ZXh0LmNybT8ub2JqZWN0VHlwZSB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCfwn5SnIFNldHRpbmcgdXAgaHVic3BvdC5mZXRjaCBBUEkgc2VydmljZS4uLicpO1xuXG4gICAgaWYgKHR5cGVvZiBodWJzcG90LmZldGNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmxvZygn4pyFIGh1YnNwb3QuZmV0Y2ggaXMgYXZhaWxhYmxlLCBjcmVhdGluZyBBUEkgc2VydmljZScpO1xuICAgICAgY29uc3QgYXBpID0gbmV3IEFjY2Vzc1NoaWVsZEFQSShodWJzcG90LmZldGNoLCBjb250ZXh0KTtcbiAgICAgIHNldEFwaVNlcnZpY2UoYXBpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcign4p2MIGh1YnNwb3QuZmV0Y2ggbm90IGF2YWlsYWJsZScpO1xuICAgICAgc2V0RXJyb3IoJ0h1YlNwb3QgZmV0Y2ggQVBJIG5vdCBhdmFpbGFibGUnKTtcbiAgICB9XG4gIH0sIFtvYmplY3RJZCwgY29udGV4dC51c2VyXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygn8J+ToSBDaGVja2luZyBpZiByZWFkeSB0byBsb2FkIGRhdGE6JywgeyBvYmplY3RJZCwgaGFzQXBpU2VydmljZTogISFhcGlTZXJ2aWNlIH0pO1xuICAgIGlmIChvYmplY3RJZCAmJiBhcGlTZXJ2aWNlKSB7XG4gICAgICBjb25zb2xlLmxvZygn4pa277iPIFN0YXJ0aW5nIGRhdGEgbG9hZC4uLicpO1xuICAgICAgbG9hZERhdGEoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ+KPsyBXYWl0aW5nIGZvciBvYmplY3RJZCBhbmQgYXBpU2VydmljZS4uLicsIHsgb2JqZWN0SWQsIGhhc0FwaVNlcnZpY2U6ICEhYXBpU2VydmljZSB9KTtcbiAgICB9XG4gIH0sIFtvYmplY3RJZCwgYXBpU2VydmljZV0pO1xuXG4gIGNvbnN0IGxvYWREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCfwn5OlIGxvYWREYXRhIGNhbGxlZCcpO1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgc2V0RXJyb3IobnVsbCk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc29sZS5sb2coJ/Cfk54gTWFraW5nIEFQSSBjYWxscy4uLicpO1xuICAgICAgY29uc29sZS5sb2coJ/Cfjq8gQVBJIGVuZHBvaW50cyB3aWxsIGJlIGNhbGxlZCB3aXRoOicsIHsgb2JqZWN0VHlwZSwgb2JqZWN0SWQgfSk7XG5cbiAgICAgIGNvbnN0IFtkb2N1bWVudHNSZXNwb25zZSwgbG9nc1Jlc3BvbnNlXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgYXBpU2VydmljZS5nZXREb2N1bWVudHMob2JqZWN0VHlwZSwgb2JqZWN0SWQpLFxuICAgICAgICBhcGlTZXJ2aWNlLmdldEFjY2Vzc0xvZ3Mob2JqZWN0SWQpXG4gICAgICBdKTtcblxuICAgICAgY29uc29sZS5sb2coJ/Cfk4QgRG9jdW1lbnRzIHJlc3BvbnNlOicsIGRvY3VtZW50c1Jlc3BvbnNlKTtcbiAgICAgIGNvbnNvbGUubG9nKCfwn5OcIExvZ3MgcmVzcG9uc2U6JywgbG9nc1Jlc3BvbnNlKTtcblxuICAgICAgc2V0RG9jdW1lbnRzKGRvY3VtZW50c1Jlc3BvbnNlLmRvY3VtZW50cyB8fCBbXSk7XG4gICAgICBzZXRBY2Nlc3NMb2dzKGxvZ3NSZXNwb25zZS5sb2dzIHx8IFtdKTtcblxuICAgICAgY29uc29sZS5sb2coJ+KchSBEYXRhIGxvYWRlZCBzdWNjZXNzZnVsbHknKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+KdjCBFcnJvciBsb2FkaW5nIGRhdGE6JywgZXJyKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+KdjCBFcnJvciBkZXRhaWxzOicsIHtcbiAgICAgICAgbWVzc2FnZTogZXJyLm1lc3NhZ2UsXG4gICAgICAgIHN0YWNrOiBlcnIuc3RhY2ssXG4gICAgICAgIG5hbWU6IGVyci5uYW1lXG4gICAgICB9KTtcbiAgICAgIHNldEVycm9yKCdGYWlsZWQgdG8gbG9hZCBkb2N1bWVudHMgYW5kIGFjY2VzcyBsb2dzOiAnICsgZXJyLm1lc3NhZ2UpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBjb25zb2xlLmxvZygn8J+PgSBTZXR0aW5nIGxvYWRpbmcgdG8gZmFsc2UnKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVVcGxvYWRTdWNjZXNzID0gYXN5bmMgKHVwbG9hZERhdGEpID0+IHtcbiAgICBzZXRVcGxvYWRpbmcoZmFsc2UpO1xuICAgIGF3YWl0IGxvYWREYXRhKCk7XG4gICAgYWN0aW9ucy5hZGRBbGVydCh7XG4gICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICBtZXNzYWdlOiAnRG9jdW1lbnQgdXBsb2FkZWQgYW5kIHJlZ2lzdGVyZWQgc3VjY2Vzc2Z1bGx5ISdcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVWaWV3RG9jdW1lbnQgPSBhc3luYyAoZG9jdW1lbnQpID0+IHtcbiAgICB0cnkge1xuICAgICAgLy8gTG9nIHRoZSBhY2Nlc3MgdXNpbmcgZXh0ZXJuYWwgQVBJXG4gICAgICBhd2FpdCBhcGlTZXJ2aWNlLmxvZ0FjY2VzcyhcbiAgICAgICAgZG9jdW1lbnQuaWQsXG4gICAgICAgIGNvbnRleHQudXNlcj8uaWQgfHwgJ3Vua25vd24nLFxuICAgICAgICAndmlldycsXG4gICAgICAgIHsgZG9jdW1lbnRIYXNoOiBkb2N1bWVudC5oYXNoIH1cbiAgICAgICk7XG5cbiAgICAgIC8vIEZvciBub3csIHNob3cgZG9jdW1lbnQgaW5mbyAtIGluIGZ1bGwgaW1wbGVtZW50YXRpb24sIHRoaXMgd291bGQgb3BlbiBhIHNlY3VyZSB2aWV3ZXJcbiAgICAgIGFjdGlvbnMuYWRkQWxlcnQoe1xuICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgIG1lc3NhZ2U6IGBWaWV3aW5nIGRvY3VtZW50OiAke2RvY3VtZW50Lm5hbWV9IChIYXNoOiAke2RvY3VtZW50Lmhhc2g/LnN1YnN0cmluZygwLCA4KX0uLi4pYFxuICAgICAgfSk7XG5cbiAgICAgIGF3YWl0IGxvYWREYXRhKCk7IC8vIFJlZnJlc2ggbG9nc1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0RXJyb3IoJ0ZhaWxlZCB0byBvcGVuIGRvY3VtZW50OiAnICsgZXJyLm1lc3NhZ2UpO1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igb3BlbmluZyBkb2N1bWVudDonLCBlcnIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVWaWV3U2Vzc2lvbiA9IGFzeW5jIChzZXNzaW9uSWQpID0+IHtcbiAgICB0cnkge1xuICAgICAgLy8gRm9yIG5vdywgc2hvdyBzZXNzaW9uIGluZm8gZnJvbSBhY2Nlc3MgbG9nc1xuICAgICAgY29uc3Qgc2Vzc2lvbiA9IGFjY2Vzc0xvZ3MuZmluZChsb2cgPT4gbG9nLmlkID09PSBzZXNzaW9uSWQpO1xuICAgICAgc2V0U2VsZWN0ZWRTZXNzaW9uKHNlc3Npb24gfHwgeyBpZDogc2Vzc2lvbklkLCBzdGF0dXM6ICdTZXNzaW9uIGRldGFpbHMgbm90IGF2YWlsYWJsZScgfSk7XG4gICAgICBzZXRTaG93U2Vzc2lvbkNhcmQodHJ1ZSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXRFcnJvcignRmFpbGVkIHRvIGxvYWQgc2Vzc2lvbiBkZXRhaWxzOiAnICsgZXJyLm1lc3NhZ2UpO1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyBzZXNzaW9uOicsIGVycik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGZpbHRlcmVkTG9ncyA9IGFjY2Vzc0xvZ3MuZmlsdGVyKGxvZyA9PlxuICAgIGxvZy5maWxlTmFtZT8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpIHx8XG4gICAgbG9nLnVzZXJOYW1lPy50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSkgfHxcbiAgICBsb2cuYWNjZXNzVHlwZT8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpXG4gICk7XG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICBjb25zb2xlLmxvZygn8J+UhCBSZW5kZXJpbmcgbG9hZGluZyBzdGF0ZScpO1xuICAgIHJldHVybiAoXG4gICAgICA8Q2FyZD5cbiAgICAgICAgPEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCIgZ2FwPVwibWVkaXVtXCIganVzdGlmeT1cImNlbnRlclwiIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgPExvYWRpbmdTcGlubmVyIC8+XG4gICAgICAgICAgPFRleHQ+TG9hZGluZyBBY2Nlc3NTaGllbGQuLi48L1RleHQ+XG4gICAgICAgIDwvRmxleD5cbiAgICAgIDwvQ2FyZD5cbiAgICApO1xuICB9XG5cbiAgY29uc29sZS5sb2coJ/CfjqggUmVuZGVyaW5nIG1haW4gY29tcG9uZW50IHdpdGggZGF0YTonLCB7XG4gICAgZG9jdW1lbnRzQ291bnQ6IGRvY3VtZW50cy5sZW5ndGgsXG4gICAgbG9nc0NvdW50OiBhY2Nlc3NMb2dzLmxlbmd0aCxcbiAgICBoYXNFcnJvcjogISFlcnJvclxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxDYXJkPlxuICAgICAgPEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCIgZ2FwPVwibWVkaXVtXCI+XG4gICAgICAgIDxIZWFkaW5nPkFjY2Vzc1NoaWVsZCBieSBLUk5MPC9IZWFkaW5nPlxuXG4gICAgICAgIHtlcnJvciAmJiAoXG4gICAgICAgICAgPEFsZXJ0IHZhcmlhbnQ9XCJlcnJvclwiIHRpdGxlPVwiRXJyb3JcIj5cbiAgICAgICAgICAgIHtlcnJvcn1cbiAgICAgICAgICA8L0FsZXJ0PlxuICAgICAgICApfVxuXG4gICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJtaWNyb2NvcHlcIj5cbiAgICAgICAgICBTZWN1cmUgZG9jdW1lbnQgbWFuYWdlbWVudCB3aXRoIGJsb2NrY2hhaW4gdmVyaWZpY2F0aW9uIGFuZCBpZGVudGl0eS1ib3VuZCB3YXRlcm1hcmtpbmcuXG4gICAgICAgIDwvVGV4dD5cblxuICAgICAgICB7LyogUXVpY2sgU3RhdHVzICovfVxuICAgICAgICB7ZG9jdW1lbnRzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICA8RmxleCBkaXJlY3Rpb249XCJjb2x1bW5cIiBnYXA9XCJzbWFsbFwiPlxuICAgICAgICAgICAgICA8VGV4dCB3ZWlnaHQ9XCJib2xkXCI+TGF0ZXN0IERvY3VtZW50PC9UZXh0PlxuICAgICAgICAgICAgICA8VGV4dCB2YXJpYW50PVwibWljcm9jb3B5XCI+XG4gICAgICAgICAgICAgICAge2RvY3VtZW50c1swXT8uZmlsZU5hbWV9IC0ge2RvY3VtZW50c1swXT8uYmxvY2tjaGFpblN0YXR1c31cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8VGV4dCB2YXJpYW50PVwibWljcm9jb3B5XCI+XG4gICAgICAgICAgICAgICAgR28gdG8gdGhlIERhc2hib2FyZCB0YWIgZm9yIGZ1bGwgZG9jdW1lbnQgbWFuYWdlbWVudC5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgIDxGbGV4IGRpcmVjdGlvbj1cImNvbHVtblwiIGdhcD1cInNtYWxsXCI+XG4gICAgICAgICAgICAgIDxUZXh0IHdlaWdodD1cImJvbGRcIj5ObyBEb2N1bWVudHMgWWV0PC9UZXh0PlxuICAgICAgICAgICAgICA8VGV4dCB2YXJpYW50PVwibWljcm9jb3B5XCI+XG4gICAgICAgICAgICAgICAgR28gdG8gdGhlIERhc2hib2FyZCB0YWIgdG8gdXBsb2FkIGFuZCBtYW5hZ2UgZG9jdW1lbnRzLlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICApfVxuICAgICAgPC9GbGV4PlxuICAgIDwvQ2FyZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERvY3VtZW50QWNjZXNzQ2FyZDsiXSwibmFtZXMiOlsiUmVhY3QiLCJyZXF1aXJlJCQwIiwiZm9ybWF0IiwiUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSIsImlzQXJyYXkiLCJzZWxmIiwia2V5cyIsImpzeFJ1bnRpbWVNb2R1bGUiLCJjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCIsIl9qc3giLCJjcmVhdGVDb250ZXh0IiwibG9jYWxlIiwidG8iLCJmcm9tIiwibm93Iiwic2lnbiIsInRva2VuIiwib3JkaW5hbCIsImkiLCJkaWZmIiwibG9jYWxlRGF0YSIsImhvdXJzIiwibWludXRlcyIsInRva2VucyIsIm1lcmlkaWVtIiwieWVhcnMiLCJtb250aHMiLCJ3ZWVrcyIsImRheXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwib2Zmc2V0IiwidGhyZXNob2xkcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiX2EiLCJfYiIsIl9jIl0sIm1hcHBpbmdzIjoiOzs7QUFJQSxRQUFNLG9CQUFvQixNQUFNLE9BQU8sU0FBUyxlQUM1QyxLQUFLLGlDQUFpQztBQUkxQyxRQUFNLG9CQUFvQjtBQUFBLElBQ3RCLFFBQVE7QUFBQSxNQUNKLE9BQU8sQ0FBQyxTQUFTO0FBQ2IsZ0JBQVEsSUFBSSxJQUFJO0FBQUEsTUFDcEI7QUFBQSxNQUNBLE1BQU0sQ0FBQyxTQUFTO0FBQ1osZ0JBQVEsS0FBSyxJQUFJO0FBQUEsTUFDckI7QUFBQSxNQUNBLE1BQU0sQ0FBQyxTQUFTO0FBQ1osZ0JBQVEsS0FBSyxJQUFJO0FBQUEsTUFDckI7QUFBQSxNQUNBLE9BQU8sQ0FB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
