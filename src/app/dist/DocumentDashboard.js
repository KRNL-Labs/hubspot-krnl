this.DocumentDashboard = this.DocumentDashboard || {};
this.DocumentDashboard.js = (function(React2, react) {
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
  const Button = createAndRegisterRemoteReactComponent("Button", {
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
  const Input = createAndRegisterRemoteReactComponent("Input");
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
  const Table = createAndRegisterRemoteReactComponent("Table");
  createAndRegisterRemoteReactComponent("TableFooter");
  const TableCell = createAndRegisterRemoteReactComponent("TableCell");
  const TableRow = createAndRegisterRemoteReactComponent("TableRow");
  const TableBody = createAndRegisterRemoteReactComponent("TableBody");
  const TableHeader = createAndRegisterRemoteReactComponent("TableHeader");
  const TableHead = createAndRegisterRemoteReactComponent("TableHead");
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
  const LoadingButton = createAndRegisterRemoteReactComponent("LoadingButton", {
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
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    try {
      return hooks(dateString).format("MMM DD, YYYY HH:mm");
    } catch (error) {
      return dateString;
    }
  };
  const getBlockchainStatusVariant = (status) => {
    switch (status) {
      case "Registered":
      case "Logged to Blockchain":
      case "COMPLETED_WITH_EVENT":
        return "success";
      case "Pending":
      case "Processing":
        return "warning";
      case "Failed":
      case "Blockchain Error":
      case "Registration Failed":
        return "error";
      default:
        return "neutral";
    }
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
    // Get documents for a HubSpot record (multi-tenant)
    async getDocuments(objectType, objectId) {
      var _a, _b;
      console.log("📄 API: getDocuments called", { objectType, objectId });
      if (!this.fetch) {
        console.error("❌ API: HubSpot fetch not initialized");
        throw new Error("HubSpot fetch not initialized");
      }
      const portalId = (_b = (_a = this.context) == null ? void 0 : _a.portal) == null ? void 0 : _b.id;
      const teamId = "default";
      if (!portalId) {
        throw new Error("Portal ID not available");
      }
      const url = `${this.baseURL}/api/documents/${teamId}/${portalId}/${objectType}/${objectId}`;
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
    // Get access logs for a specific record
    async getAccessLogs(recordId = null) {
      var _a, _b, _c, _d;
      console.log("📜 API: getAccessLogs called", {
        recordId,
        recordIdType: typeof recordId,
        baseURL: this.baseURL,
        contextPortalId: (_b = (_a = this.context) == null ? void 0 : _a.portal) == null ? void 0 : _b.id
      });
      if (!this.fetch) {
        console.error("❌ API: HubSpot fetch not initialized for access logs");
        throw new Error("HubSpot fetch not initialized");
      }
      const portalId = (_d = (_c = this.context) == null ? void 0 : _c.portal) == null ? void 0 : _d.id;
      const teamId = "default";
      if (!portalId) {
        throw new Error("Portal ID not available");
      }
      let url = `${this.baseURL}/api/documents/${teamId}/${portalId}/access-logs`;
      if (recordId) {
        url += `?record_id=${recordId}`;
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
  }
  const DocumentUpload = ({
    onUploadStart,
    onUploadSuccess,
    onUploadError,
    objectId,
    objectType,
    disabled,
    crmService,
    actions,
    context
  }) => {
    const [selectedFile, setSelectedFile] = React2.useState(null);
    const [uploadUrl, setUploadUrl] = React2.useState("");
    React2.useEffect(() => {
      var _a;
      const viewerBaseUrl = "http://localhost:5173";
      const finalObjectType = objectType || "contact";
      const hubspotAccountId = ((_a = context == null ? void 0 : context.portal) == null ? void 0 : _a.id) || "244763631";
      const uploadPageUrl = `${viewerBaseUrl}/upload?objectId=${objectId}&objectType=${finalObjectType}&hubspotAccountId=${hubspotAccountId}`;
      console.log("🔗 Generated upload URL:", uploadPageUrl);
      setUploadUrl(uploadPageUrl);
    }, [objectId, objectType, context]);
    React2.useEffect(() => {
      if (typeof window === "undefined") return;
      const urlParams = new URLSearchParams(window.location.search);
      const uploadSuccess = urlParams.get("uploadSuccess");
      const fileName = urlParams.get("fileName");
      const fileSize = urlParams.get("fileSize");
      const documentId = urlParams.get("documentId");
      if (uploadSuccess === "true" && fileName) {
        setSelectedFile({
          name: fileName,
          size: parseInt(fileSize) || 0,
          type: "uploaded"
        });
        onUploadSuccess({
          success: true,
          document: {
            id: documentId,
            fileName,
            fileSize: parseInt(fileSize) || 0
          }
        });
        const cleanUrl = window.location.origin + window.location.pathname;
        window.history.replaceState({}, "", cleanUrl);
      }
    }, [onUploadSuccess]);
    const handleDebugClick = () => {
      console.log("🔘 Button clicked!");
      console.log("🔘 Upload URL:", uploadUrl);
      console.log("🔘 Selected file:", selectedFile);
    };
    const handleClearFile = () => {
      setSelectedFile(null);
    };
    return /* @__PURE__ */ React2.createElement(Flex, { direction: "column", gap: "medium" }, /* @__PURE__ */ React2.createElement(Text, { variant: "microcopy" }, "Upload documents for blockchain registration and secure access tracking."), /* @__PURE__ */ React2.createElement(Flex, { direction: "column", gap: "small" }, selectedFile ? /* @__PURE__ */ React2.createElement(Flex, { direction: "column", gap: "small" }, /* @__PURE__ */ React2.createElement(Text, { weight: "bold" }, "Selected File:"), /* @__PURE__ */ React2.createElement(Flex, { justify: "between", align: "center" }, /* @__PURE__ */ React2.createElement(Flex, { direction: "column", gap: "extraSmall" }, /* @__PURE__ */ React2.createElement(Text, null, selectedFile.name), /* @__PURE__ */ React2.createElement(Text, { variant: "microcopy" }, Math.round(selectedFile.size / 1024), "KB - ", selectedFile.type)), /* @__PURE__ */ React2.createElement(
      Button,
      {
        variant: "secondary",
        size: "small",
        onClick: handleClearFile
      },
      "Clear"
    ))) : /* @__PURE__ */ React2.createElement(Text, { variant: "microcopy" }, "No file selected")), /* @__PURE__ */ React2.createElement(Flex, { gap: "medium", justify: "center" }, /* @__PURE__ */ React2.createElement(
      Button,
      {
        variant: "primary",
        href: {
          url: uploadUrl,
          external: true
        },
        onClick: handleDebugClick,
        disabled: disabled || !uploadUrl
      },
      "Upload Document"
    )), /* @__PURE__ */ React2.createElement(Text, { variant: "microcopy", style: { textAlign: "center", fontStyle: "italic" } }, 'Click "Upload Document" to open the upload page in a new tab'));
  };
  hubspot.extend((extensionProps) => {
    console.log("📊 Dashboard Extension props received:", extensionProps);
    console.log("📊 Dashboard Extension context:", extensionProps.context);
    console.log("📊 Dashboard Extension actions:", extensionProps.actions);
    console.log("📊 Dashboard Extension fetch:", extensionProps.fetch);
    console.log("📊 Dashboard All extension keys:", Object.keys(extensionProps));
    const { context, actions, runServerlessFunction } = extensionProps;
    return /* @__PURE__ */ React2.createElement(
      DocumentDashboard,
      {
        context,
        actions,
        runServerlessFunction,
        openIframeModal: actions.openIframeModal
      }
    );
  });
  const DocumentDashboard = ({ context, actions, runServerlessFunction, openIframeModal }) => {
    var _a;
    console.log("📊 DocumentDashboard initialized");
    console.log("📋 Dashboard Context:", context);
    console.log("🔧 Dashboard Actions:", Object.keys(actions || {}));
    console.log("🔧 Dashboard runServerlessFunction:", typeof runServerlessFunction);
    console.log("🔧 Dashboard User info:", context.user);
    console.log("🔧 Dashboard Portal info:", context.portal);
    const [stats, setStats] = React2.useState({
      totalDocuments: 0,
      blockchainRegistered: 0,
      totalAccessEvents: 0,
      recentAccessEvents: 0
    });
    const [recentActivity, setRecentActivity] = React2.useState([]);
    const [documents, setDocuments] = React2.useState([]);
    const [loading, setLoading] = React2.useState(true);
    const [uploading, setUploading] = React2.useState(false);
    const [uploadError, setUploadError] = React2.useState(null);
    const [searchTerm, setSearchTerm] = React2.useState("");
    const [error, setError] = React2.useState(null);
    const [apiService, setApiService] = React2.useState(null);
    const [viewButtonLoading, setViewButtonLoading] = React2.useState(false);
    const [result, setResult] = React2.useState("");
    const objectId = (_a = context.crm) == null ? void 0 : _a.objectId;
    const getObjectType = () => {
      var _a2, _b;
      const typeId = (_a2 = context.crm) == null ? void 0 : _a2.objectTypeId;
      switch (typeId) {
        case "0-1":
          return "contact";
        case "0-2":
          return "contact";
        case "0-3":
          return "company";
        case "0-4":
          return "deal";
        default:
          return ((_b = context.crm) == null ? void 0 : _b.objectType) || "contact";
      }
    };
    const objectType = getObjectType();
    React2.useEffect(() => {
      console.log("📊 Dashboard setting up hubspot.fetch API service...");
      if (typeof hubspot.fetch === "function") {
        console.log("✅ Dashboard hubspot.fetch is available, creating API service");
        const api = new AccessShieldAPI(hubspot.fetch, context);
        setApiService(api);
      } else {
        console.error("❌ Dashboard: hubspot.fetch not available");
        setError("HubSpot fetch API not available");
      }
    }, [context.user]);
    React2.useEffect(() => {
      console.log("📊 Dashboard checking API service:", { hasApiService: !!apiService });
      if (apiService) {
        console.log("▶️ Dashboard starting data load...");
        loadDashboardData();
      } else {
        console.log("⏳ Dashboard waiting for API service...");
      }
    }, [apiService]);
    const loadDashboardData = async () => {
      var _a2, _b, _c;
      console.log("📊 Dashboard loadData called");
      setLoading(true);
      setError(null);
      try {
        const objectId2 = (_a2 = context.crm) == null ? void 0 : _a2.objectId;
        const objectType2 = getObjectType();
        console.log("📊 Dashboard object details:", { objectId: objectId2, objectType: objectType2, objectTypeId: (_b = context.crm) == null ? void 0 : _b.objectTypeId });
        console.log("📞 Dashboard making API calls...");
        console.log("📞 Dashboard calling getAccessLogs with objectId:", objectId2);
        const [statsResponse, activityResponse, documentsResponse] = await Promise.all([
          apiService.getComplianceStats(objectType2, objectId2),
          apiService.getAccessLogs(objectId2),
          apiService.getDocuments(objectType2, objectId2)
        ]);
        console.log("📈 Dashboard stats response:", statsResponse);
        console.log("📈 Dashboard activity response:", activityResponse);
        console.log("📈 Dashboard activity response logs array:", activityResponse == null ? void 0 : activityResponse.logs);
        console.log("📈 Dashboard activity response logs length:", (_c = activityResponse == null ? void 0 : activityResponse.logs) == null ? void 0 : _c.length);
        console.log("📈 Dashboard documents response:", documentsResponse);
        setStats(statsResponse.stats || {});
        const activityLogs = activityResponse.logs || [];
        console.log("📈 Dashboard setting recentActivity to:", activityLogs);
        setRecentActivity(activityLogs);
        setDocuments(documentsResponse.documents || []);
        console.log("✅ Dashboard data loaded successfully");
      } catch (err) {
        console.error("❌ Dashboard error loading data:", err);
        console.error("❌ Dashboard error details:", {
          message: err.message,
          stack: err.stack,
          name: err.name
        });
        setError("Failed to load dashboard data: " + err.message);
      } finally {
        console.log("🏁 Dashboard setting loading to false");
        setLoading(false);
      }
    };
    const handleUploadStart = () => {
      setUploading(true);
      setUploadError(null);
    };
    const handleUploadSuccess = async (uploadData) => {
      setUploading(false);
      await loadDashboardData();
      actions.addAlert({
        type: "success",
        message: "Document uploaded and registered successfully!"
      });
    };
    const handleUploadError = (error2) => {
      setUploading(false);
      setUploadError(error2.message);
      actions.addAlert({
        type: "error",
        message: "Upload failed: " + error2.message
      });
    };
    const handleViewDocument = async (document) => {
      var _a2, _b, _c;
      console.log("🔍 View document clicked:", document);
      setViewButtonLoading(true);
      try {
        const objectId2 = (_a2 = context.crm) == null ? void 0 : _a2.objectId;
        const objectType2 = getObjectType();
        const userId = ((_b = context.user) == null ? void 0 : _b.email) || ((_c = context.user) == null ? void 0 : _c.id) || "anonymous";
        console.log("📞 Calling access init API...", {
          documentHash: document.documentHash,
          documentId: document.storagePath || document.id,
          recordType: objectType2,
          recordId: objectId2,
          userId,
          accessType: "view",
          fileName: document.fileName
        });
        const response = await hubspot.fetch("https://051892e58926.ngrok-free.app/api/access/init", {
          method: "POST",
          body: {
            documentHash: document.documentHash,
            documentId: document.storagePath || document.id,
            recordId: objectId2,
            // Just the numeric ID, not prefixed
            userId,
            accessType: "view",
            fileName: document.fileName,
            clientIP: "",
            userAgent: navigator.userAgent
          }
        });
        console.log("📞 Access init response status:", response.status);
        if (!response.ok) {
          const errorText = await response.text();
          console.error("❌ Access init error response:", errorText);
          throw new Error("Failed to initialize document access");
        }
        const result2 = await response.json();
        console.log("✅ Access init success:", result2);
        if (result2 && result2.viewerSessionUrl) {
          openIframeModal({
            uri: result2.viewerSessionUrl,
            height: 800,
            width: 1200,
            title: `Document Viewer - ${document.fileName}`,
            flush: true
          }, () => {
            console.log("Document viewer modal closed");
          });
          actions.addAlert({
            type: "success",
            message: "Opening secure viewer..."
          });
        } else {
          throw new Error("No viewer URL received from access init");
        }
      } catch (error2) {
        console.error("❌ View document error:", error2);
        actions.addAlert({
          type: "error",
          message: "Failed to open document viewer: " + error2.message
        });
      } finally {
        setViewButtonLoading(false);
      }
    };
    const filteredActivity = recentActivity.filter(
      (activity) => {
        var _a2, _b, _c, _d, _e;
        return ((_a2 = activity.fileName) == null ? void 0 : _a2.toLowerCase().includes(searchTerm.toLowerCase())) || ((_b = activity.userName) == null ? void 0 : _b.toLowerCase().includes(searchTerm.toLowerCase())) || ((_c = activity.userEmail) == null ? void 0 : _c.toLowerCase().includes(searchTerm.toLowerCase())) || ((_d = activity.accessHash) == null ? void 0 : _d.toLowerCase().includes(searchTerm.toLowerCase())) || ((_e = activity.accessType) == null ? void 0 : _e.toLowerCase().includes(searchTerm.toLowerCase()));
      }
    );
    console.log("🔍 Access History Debug:", {
      recentActivityLength: recentActivity == null ? void 0 : recentActivity.length,
      recentActivitySample: recentActivity == null ? void 0 : recentActivity[0],
      filteredActivityLength: filteredActivity == null ? void 0 : filteredActivity.length,
      searchTerm,
      hasRecentActivity: !!recentActivity && recentActivity.length > 0
    });
    const complianceCoverage = stats.totalDocuments > 0 ? Math.round(stats.blockchainRegistered / stats.totalDocuments * 100) : 0;
    if (loading) {
      return /* @__PURE__ */ React2.createElement(Flex, { justify: "center", align: "center", style: { minHeight: "200px" } }, /* @__PURE__ */ React2.createElement(LoadingSpinner, null));
    }
    return /* @__PURE__ */ React2.createElement(Flex, { direction: "column", gap: "large" }, /* @__PURE__ */ React2.createElement(Heading, null, "AccessShield Dashboard"), /* @__PURE__ */ React2.createElement(Text, null, "Welcome to AccessShield by KRNL. This dashboard provides a quick overview of tracked documents and recent access activity."), error && /* @__PURE__ */ React2.createElement(Alert, { variant: "error", title: "Error" }, error), /* @__PURE__ */ React2.createElement(Card, null, /* @__PURE__ */ React2.createElement(Flex, { direction: "column", gap: "medium" }, /* @__PURE__ */ React2.createElement(Heading, { level: 2 }, "Document Upload"), uploadError && /* @__PURE__ */ React2.createElement(Alert, { variant: "error", title: "Upload Error" }, uploadError), /* @__PURE__ */ React2.createElement(
      DocumentUpload,
      {
        onUploadStart: handleUploadStart,
        onUploadSuccess: handleUploadSuccess,
        onUploadError: handleUploadError,
        objectId,
        objectType,
        disabled: uploading,
        crmService: apiService,
        actions,
        context
      }
    ))), /* @__PURE__ */ React2.createElement(Card, null, /* @__PURE__ */ React2.createElement(Heading, { level: 2 }, "Key Metrics"), /* @__PURE__ */ React2.createElement(Flex, { gap: "medium", wrap: "wrap" }, /* @__PURE__ */ React2.createElement(
      Card,
      {
        title: "Tracked Documents",
        value: stats.totalDocuments,
        icon: "document"
      }
    ), /* @__PURE__ */ React2.createElement(
      Card,
      {
        title: "Blockchain Registered",
        value: stats.blockchainRegistered,
        icon: "shield"
      }
    ), /* @__PURE__ */ React2.createElement(
      Card,
      {
        title: "Total Access Events",
        value: stats.totalAccessEvents,
        icon: "eye"
      }
    ), /* @__PURE__ */ React2.createElement(
      Card,
      {
        title: "Compliance Coverage",
        value: `${complianceCoverage}%`,
        icon: "chart"
      }
    ))), /* @__PURE__ */ React2.createElement(Card, null, /* @__PURE__ */ React2.createElement(Flex, { direction: "column", gap: "medium" }, /* @__PURE__ */ React2.createElement(Heading, { level: 2 }, "Document History"), documents && documents.length > 0 ? /* @__PURE__ */ React2.createElement(Table, null, /* @__PURE__ */ React2.createElement(TableHead, null, /* @__PURE__ */ React2.createElement(TableRow, null, /* @__PURE__ */ React2.createElement(TableHeader, null, "File Name"), /* @__PURE__ */ React2.createElement(TableHeader, null, "Upload Date"), /* @__PURE__ */ React2.createElement(TableHeader, null, "Blockchain Status"), /* @__PURE__ */ React2.createElement(TableHeader, null, "File Size"), /* @__PURE__ */ React2.createElement(TableHeader, null, "Actions"))), /* @__PURE__ */ React2.createElement(TableBody, null, documents.map((doc) => /* @__PURE__ */ React2.createElement(TableRow, { key: doc.id }, /* @__PURE__ */ React2.createElement(TableCell, null, /* @__PURE__ */ React2.createElement(Text, null, doc.fileName)), /* @__PURE__ */ React2.createElement(TableCell, null, /* @__PURE__ */ React2.createElement(Text, null, formatDate(doc.registrationTimestamp || doc.uploadedAt))), /* @__PURE__ */ React2.createElement(TableCell, null, /* @__PURE__ */ React2.createElement(Text, { variant: getBlockchainStatusVariant(doc.blockchainStatus) }, doc.blockchainStatus)), /* @__PURE__ */ React2.createElement(TableCell, null, /* @__PURE__ */ React2.createElement(Text, null, Math.round((doc.fileSize || 0) / 1024), "KB")), /* @__PURE__ */ React2.createElement(TableCell, null, /* @__PURE__ */ React2.createElement(
      LoadingButton,
      {
        variant: "primary",
        size: "small",
        onClick: () => handleViewDocument(doc),
        loading: viewButtonLoading
      },
      viewButtonLoading ? "Loading..." : "View"
    )))))) : /* @__PURE__ */ React2.createElement(Flex, { justify: "center", align: "center", style: { padding: "40px" } }, /* @__PURE__ */ React2.createElement(Flex, { direction: "column", align: "center", gap: "small" }, /* @__PURE__ */ React2.createElement(Text, { variant: "microcopy" }, "No documents uploaded yet"), /* @__PURE__ */ React2.createElement(Text, { variant: "microcopy" }, "Upload a document above to see it appear in this history."))))), /* @__PURE__ */ React2.createElement(Card, null, /* @__PURE__ */ React2.createElement(Flex, { direction: "column", gap: "medium" }, /* @__PURE__ */ React2.createElement(Heading, { level: 2 }, "Access History"), /* @__PURE__ */ React2.createElement(
      Input,
      {
        placeholder: "Search by file name, user email, access hash...",
        value: searchTerm,
        onChange: (value) => setSearchTerm(value)
      }
    ), filteredActivity && filteredActivity.length > 0 ? /* @__PURE__ */ React2.createElement(Table, null, /* @__PURE__ */ React2.createElement(TableHead, null, /* @__PURE__ */ React2.createElement(TableRow, null, /* @__PURE__ */ React2.createElement(TableHeader, null, "Access Time"), /* @__PURE__ */ React2.createElement(TableHeader, null, "File Name"), /* @__PURE__ */ React2.createElement(TableHeader, null, "User Email"), /* @__PURE__ */ React2.createElement(TableHeader, null, "Access Hash"), /* @__PURE__ */ React2.createElement(TableHeader, null, "Watermark Status"), /* @__PURE__ */ React2.createElement(TableHeader, null, "IP Address"))), /* @__PURE__ */ React2.createElement(TableBody, null, filteredActivity.map((activity) => /* @__PURE__ */ React2.createElement(TableRow, { key: activity.id }, /* @__PURE__ */ React2.createElement(TableCell, null, /* @__PURE__ */ React2.createElement(Text, null, formatDate(activity.accessTimestamp))), /* @__PURE__ */ React2.createElement(TableCell, null, /* @__PURE__ */ React2.createElement(Text, null, activity.fileName)), /* @__PURE__ */ React2.createElement(TableCell, null, /* @__PURE__ */ React2.createElement(Text, null, activity.userEmail)), /* @__PURE__ */ React2.createElement(TableCell, null, /* @__PURE__ */ React2.createElement(Text, { style: { fontFamily: "monospace", fontSize: "12px" } }, activity.accessHash ? `${activity.accessHash.substring(0, 8)}...${activity.accessHash.slice(-6)}` : "N/A")), /* @__PURE__ */ React2.createElement(TableCell, null, /* @__PURE__ */ React2.createElement(Text, { variant: getBlockchainStatusVariant(activity.watermarkApplied ? "Registered on Blockchain" : "Pending") }, activity.watermarkApplied ? "Applied" : "Not Applied")), /* @__PURE__ */ React2.createElement(TableCell, null, /* @__PURE__ */ React2.createElement(Text, { variant: "microcopy" }, activity.ipAddress)))))) : /* @__PURE__ */ React2.createElement(Flex, { justify: "center", align: "center", style: { padding: "40px" } }, /* @__PURE__ */ React2.createElement(Flex, { direction: "column", align: "center", gap: "small" }, /* @__PURE__ */ React2.createElement(Text, { variant: "microcopy" }, "No access events yet"), /* @__PURE__ */ React2.createElement(Text, { variant: "microcopy" }, "Once users start viewing documents via KRNL, activity will appear here."))))), stats.blockchainStatusBreakdown && /* @__PURE__ */ React2.createElement(Card, null, /* @__PURE__ */ React2.createElement(Heading, { level: 2 }, "Document Status Breakdown"), /* @__PURE__ */ React2.createElement(Flex, { gap: "medium", wrap: "wrap" }, Object.entries(stats.blockchainStatusBreakdown).map(([status, count]) => /* @__PURE__ */ React2.createElement(
      Card,
      {
        key: status,
        title: status,
        value: count,
        variant: getBlockchainStatusVariant(status)
      }
    )))), stats.accessTypeBreakdown && /* @__PURE__ */ React2.createElement(Card, null, /* @__PURE__ */ React2.createElement(Heading, { level: 2 }, "Access Type Breakdown (Last 30 Days)"), /* @__PURE__ */ React2.createElement(Flex, { gap: "medium", wrap: "wrap" }, Object.entries(stats.accessTypeBreakdown).map(([type, count]) => /* @__PURE__ */ React2.createElement(
      Card,
      {
        key: type,
        title: type,
        value: count,
        icon: "activity"
      }
    )))));
  };
  return DocumentDashboard;
})(React, RemoteUI);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdW1lbnREYXNoYm9hcmQuanMiLCJzb3VyY2VzIjpbIi4uL2NhcmRzL25vZGVfbW9kdWxlcy9AaHVic3BvdC91aS1leHRlbnNpb25zL2Rpc3QvaW50ZXJuYWwvZ2xvYmFsLXV0aWxzLmpzIiwiLi4vY2FyZHMvbm9kZV9tb2R1bGVzL0BodWJzcG90L3VpLWV4dGVuc2lvbnMvZGlzdC9odWJzcG90LmpzIiwiLi4vY2FyZHMvbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC1qc3gtcnVudGltZS5kZXZlbG9wbWVudC5qcyIsIi4uL2NhcmRzL25vZGVfbW9kdWxlcy9yZWFjdC9qc3gtcnVudGltZS5qcyIsIi4uL2NhcmRzL25vZGVfbW9kdWxlcy9AaHVic3BvdC91aS1leHRlbnNpb25zL2Rpc3Qvc2hhcmVkL3V0aWxzL3JlbW90ZS1jb21wb25lbnQtcmVnaXN0cnkuanMiLCIuLi9jYXJkcy9ub2RlX21vZHVsZXMvQGh1YnNwb3QvdWktZXh0ZW5zaW9ucy9kaXN0L3NoYXJlZC9yZW1vdGVDb21wb25lbnRzLmpzIiwiLi4vY2FyZHMvbm9kZV9tb2R1bGVzL0BodWJzcG90L3VpLWV4dGVuc2lvbnMvZGlzdC9pbnRlcm5hbC9ob29rLXV0aWxzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9kaXN0L21vbWVudC5qcyIsIi4uL2NhcmRzL2hlbHBlcnMuanMiLCIuLi9jYXJkcy9hcGlTZXJ2aWNlLmpzIiwiLi4vY2FyZHMvRG9jdW1lbnRVcGxvYWQuanN4IiwiLi4vY2FyZHMvRG9jdW1lbnREYXNoYm9hcmQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ2hlY2tzIGlmIHRoZSBjdXJyZW50IGVudmlyb25tZW50IGlzIGEgSHViU3BvdCBleHRlbnNpb24gd29ya2VyLlxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgY3VycmVudCBlbnZpcm9ubWVudCBpcyBhIEh1YlNwb3QgZXh0ZW5zaW9uIHdvcmtlci5cbiAqL1xuY29uc3QgaXNSdW5uaW5nSW5Xb3JrZXIgPSAoKSA9PiB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBzZWxmLl9fSFVCU1BPVF9FWFRFTlNJT05fV09SS0VSX18gPT09IHRydWU7XG4vKipcbiAqIEEgZmFrZSB3b3JrZXIgZ2xvYmFscyBvYmplY3QgZm9yIHVzZSBpbiB0ZXN0IGVudmlyb25tZW50cy5cbiAqL1xuY29uc3QgZmFrZVdvcmtlckdsb2JhbHMgPSB7XG4gICAgbG9nZ2VyOiB7XG4gICAgICAgIGRlYnVnOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIH0sXG4gICAgICAgIGluZm86IChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oZGF0YSk7XG4gICAgICAgIH0sXG4gICAgICAgIHdhcm46IChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oZGF0YSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihkYXRhKTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGV4dGVuZF9WMjogKCkgPT4ge1xuICAgICAgICAvLyBOby1vcCBpbiB0ZXN0IGVudmlyb25tZW50XG4gICAgfSxcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIHdlIGFyZSBub3QgdXNpbmcgdGhlIHdvcmtlciBlbmRwb2ludCBpbiB0ZXN0cyBlbnYuXG4gICAgX191c2VFeHRlbnNpb25Db250ZXh0OiAoKSA9PiB7XG4gICAgICAgIC8vIE5vLW9wIGluIHRlc3QgZW52aXJvbm1lbnRcbiAgICB9LFxufTtcbi8qKlxuICogR2V0cyB0aGUgd29ya2VyIGdsb2JhbHMgb2JqZWN0IGZvciB0aGUgY3VycmVudCBlbnZpcm9ubWVudC5cbiAqIEByZXR1cm5zIFRoZSB3b3JrZXIgZ2xvYmFscyBvYmplY3QuXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRXb3JrZXJHbG9iYWxzID0gKCkgPT4ge1xuICAgIHJldHVybiBpc1J1bm5pbmdJbldvcmtlcigpXG4gICAgICAgID8gc2VsZlxuICAgICAgICA6IGZha2VXb3JrZXJHbG9iYWxzO1xufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGh1YnNwb3QtZGV2L25vLWNvbmZ1c2luZy1icm93c2VyLWdsb2JhbHMgKi9cbmltcG9ydCB7IGdldFdvcmtlckdsb2JhbHMgfSBmcm9tIFwiLi9pbnRlcm5hbC9nbG9iYWwtdXRpbHMuanNcIjtcbmNvbnN0IGV4dGVuZF9WMiA9IGdldFdvcmtlckdsb2JhbHMoKS5leHRlbmRfVjI7XG5leHBvcnQgZnVuY3Rpb24gc2VydmVybGVzcyhuYW1lLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHNlbGYuc2VydmVybGVzcyhuYW1lLCBvcHRpb25zKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaCh1cmwsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gc2VsZi5oc0ZldGNoKHVybCwgb3B0aW9ucyk7XG59XG5leHBvcnQgY29uc3QgaHVic3BvdCA9IHtcbiAgICBleHRlbmQ6IGV4dGVuZF9WMixcbiAgICBzZXJ2ZXJsZXNzLFxuICAgIGZldGNoLFxufTtcbiIsIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHJlYWN0LWpzeC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50Jyk7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKTtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKTtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKTtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0Jyk7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKTtcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5Jyk7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG5cbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0gUmVhY3QuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG5cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG5cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gU3RyaW5nKGl0ZW0pO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cbnZhciBlbmFibGVDYWNoZUVsZW1lbnQgPSBmYWxzZTtcbnZhciBlbmFibGVUcmFuc2l0aW9uVHJhY2luZyA9IGZhbHNlOyAvLyBObyBrbm93biBidWdzLCBidXQgbmVlZHMgcGVyZm9ybWFuY2UgdGVzdGluZ1xuXG52YXIgZW5hYmxlTGVnYWN5SGlkZGVuID0gZmFsc2U7IC8vIEVuYWJsZXMgdW5zdGFibGVfYXZvaWRUaGlzRmFsbGJhY2sgZmVhdHVyZSBpbiBGaWJlclxuLy8gc3R1ZmYuIEludGVuZGVkIHRvIGVuYWJsZSBSZWFjdCBjb3JlIG1lbWJlcnMgdG8gbW9yZSBlYXNpbHkgZGVidWcgc2NoZWR1bGluZ1xuLy8gaXNzdWVzIGluIERFViBidWlsZHMuXG5cbnZhciBlbmFibGVEZWJ1Z1RyYWNpbmcgPSBmYWxzZTsgLy8gVHJhY2sgd2hpY2ggRmliZXIocykgc2NoZWR1bGUgcmVuZGVyIHdvcmsuXG5cbnZhciBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFO1xuXG57XG4gIFJFQUNUX01PRFVMRV9SRUZFUkVOQ0UgPSBTeW1ib2wuZm9yKCdyZWFjdC5tb2R1bGUucmVmZXJlbmNlJyk7XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCBlbmFibGVEZWJ1Z1RyYWNpbmcgIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgZW5hYmxlTGVnYWN5SGlkZGVuICB8fCB0eXBlID09PSBSRUFDVF9PRkZTQ1JFRU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSAgfHwgZW5hYmxlQ2FjaGVFbGVtZW50ICB8fCBlbmFibGVUcmFuc2l0aW9uVHJhY2luZyApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gVGhpcyBuZWVkcyB0byBpbmNsdWRlIGFsbCBwb3NzaWJsZSBtb2R1bGUgcmVmZXJlbmNlIG9iamVjdFxuICAgIC8vIHR5cGVzIHN1cHBvcnRlZCBieSBhbnkgRmxpZ2h0IGNvbmZpZ3VyYXRpb24gYW55d2hlcmUgc2luY2VcbiAgICAvLyB3ZSBkb24ndCBrbm93IHdoaWNoIEZsaWdodCBidWlsZCB0aGlzIHdpbGwgZW5kIHVwIGJlaW5nIHVzZWRcbiAgICAvLyB3aXRoLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01PRFVMRV9SRUZFUkVOQ0UgfHwgdHlwZS5nZXRNb2R1bGVJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZGlzcGxheU5hbWUgPSBvdXRlclR5cGUuZGlzcGxheU5hbWU7XG5cbiAgaWYgKGRpc3BsYXlOYW1lKSB7XG4gICAgcmV0dXJuIGRpc3BsYXlOYW1lO1xuICB9XG5cbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZTtcbn0gLy8gS2VlcCBpbiBzeW5jIHdpdGggcmVhY3QtcmVjb25jaWxlci9nZXRDb21wb25lbnROYW1lRnJvbUZpYmVyXG5cblxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XG59IC8vIE5vdGUgdGhhdCB0aGUgcmVjb25jaWxlciBwYWNrYWdlIHNob3VsZCBnZW5lcmFsbHkgcHJlZmVyIHRvIHVzZSBnZXRDb21wb25lbnROYW1lRnJvbUZpYmVyKCkgaW5zdGVhZC5cblxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuXG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgdmFyIG91dGVyTmFtZSA9IHR5cGUuZGlzcGxheU5hbWUgfHwgbnVsbDtcblxuICAgICAgICBpZiAob3V0ZXJOYW1lICE9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG91dGVyTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZS50eXBlKSB8fCAnTWVtbyc7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShpbml0KHBheWxvYWQpKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWZhbGx0aHJvdWdoXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkxvZ1xuICAgICAgICB9KSxcbiAgICAgICAgaW5mbzogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2SW5mb1xuICAgICAgICB9KSxcbiAgICAgICAgd2FybjogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkVycm9yXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cDogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwRW5kXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPCAwKSB7XG4gICAgICBlcnJvcignZGlzYWJsZWREZXB0aCBmZWxsIGJlbG93IHplcm8uICcgKyAnVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBwcmVmaXg7XG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cblxuXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcbiAgfVxufVxudmFyIHJlZW50cnkgPSBmYWxzZTtcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xuXG57XG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cbiAgaWYgKCAhZm4gfHwgcmVlbnRyeSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHtcbiAgICB2YXIgZnJhbWUgPSBjb21wb25lbnRGcmFtZUNhY2hlLmdldChmbik7XG5cbiAgICBpZiAoZnJhbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250cm9sO1xuICByZWVudHJ5ID0gdHJ1ZTtcbiAgdmFyIHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2UgPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZTsgLy8gJEZsb3dGaXhNZSBJdCBkb2VzIGFjY2VwdCB1bmRlZmluZWQuXG5cbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSB1bmRlZmluZWQ7XG4gIHZhciBwcmV2aW91c0Rpc3BhdGNoZXI7XG5cbiAge1xuICAgIHByZXZpb3VzRGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDsgLy8gU2V0IHRoZSBkaXNwYXRjaGVyIGluIERFViBiZWNhdXNlIHRoaXMgbWlnaHQgYmUgY2FsbCBpbiB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgLy8gZm9yIHdhcm5pbmdzLlxuXG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gbnVsbDtcbiAgICBkaXNhYmxlTG9ncygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cbiAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAvLyBTb21ldGhpbmcgc2hvdWxkIGJlIHNldHRpbmcgdGhlIHByb3BzIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWtlLnByb3RvdHlwZSwgJ3Byb3BzJywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IHdvbid0IHRocm93IGluIGEgbm9uLXN0cmljdCBtb2RlIGZ1bmN0aW9uLlxuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIGRpZmZlcmVudCBjb250cm9sIGZvciB0aGlzIGNhc2UgdG8gaW5jbHVkZSBhbnkgZXh0cmFcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICB9XG5cbiAgICAgIGZuKCk7XG4gICAgfVxuICB9IGNhdGNoIChzYW1wbGUpIHtcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyBleHRyYWN0cyB0aGUgZmlyc3QgZnJhbWUgZnJvbSB0aGUgc2FtcGxlIHRoYXQgaXNuJ3QgYWxzbyBpbiB0aGUgY29udHJvbC5cbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBjb250cm9sTGluZXMgPSBjb250cm9sLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXG4gICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHdpbGwgYmUgdGhlIHJvb3QgbW9zdCBvbmUuIEhvd2V2ZXIsIHN0YWNrIGZyYW1lcyBtYXkgYmVcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGZvciBjdXQgb2ZmIGVhcmxpZXIuIFNvIHdlIHNob3VsZCBmaW5kIHRoZSByb290IG1vc3QgZnJhbWUgaW5cbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgIGMtLTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XG4gICAgICAgIC8vIE5leHQgd2UgZmluZCB0aGUgZmlyc3Qgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgd2hpY2ggc2hvdWxkIGJlIHRoZVxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAvLyBJbiBWOCwgdGhlIGZpcnN0IGxpbmUgaXMgZGVzY3JpYmluZyB0aGUgbWVzc2FnZSBidXQgb3RoZXIgVk1zIGRvbid0LlxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xuICAgICAgICAgIC8vIHRoZSBjb250cm9sLiBJLmUuIGJlZm9yZSB3ZSBlbnRlcmVkIHRoZSBzYW1wbGUgZnJhbWUuIFNvIHdlIGlnbm9yZSB0aGlzIHJlc3VsdC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgICAgICAgLy8gVGhlIG5leHQgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgc2hvdWxkIGJlIG91ciBtYXRjaCB0aG91Z2guXG5cbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAgICAgICAvLyBWOCBhZGRzIGEgXCJuZXdcIiBwcmVmaXggZm9yIG5hdGl2ZSBjbGFzc2VzLiBMZXQncyByZW1vdmUgaXQgdG8gbWFrZSBpdCBwcmV0dGllci5cbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7IC8vIElmIG91ciBjb21wb25lbnQgZnJhbWUgaXMgbGFiZWxlZCBcIjxhbm9ueW1vdXM+XCJcbiAgICAgICAgICAgICAgICAvLyBidXQgd2UgaGF2ZSBhIHVzZXItcHJvdmlkZWQgXCJkaXNwbGF5TmFtZVwiXG4gICAgICAgICAgICAgICAgLy8gc3BsaWNlIGl0IGluIHRvIG1ha2UgdGhlIHN0YWNrIG1vcmUgcmVhZGFibGUuXG5cblxuICAgICAgICAgICAgICAgIGlmIChmbi5kaXNwbGF5TmFtZSAmJiBfZnJhbWUuaW5jbHVkZXMoJzxhbm9ueW1vdXM+JykpIHtcbiAgICAgICAgICAgICAgICAgIF9mcmFtZSA9IF9mcmFtZS5yZXBsYWNlKCc8YW5vbnltb3VzPicsIGZuLmRpc3BsYXlOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChzID49IDEgJiYgYyA+PSAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWVudHJ5ID0gZmFsc2U7XG5cbiAgICB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBwcmV2aW91c0Rpc3BhdGNoZXI7XG4gICAgICByZWVuYWJsZUxvZ3MoKTtcbiAgICB9XG5cbiAgICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2U7XG4gIH0gLy8gRmFsbGJhY2sgdG8ganVzdCB1c2luZyB0aGUgbmFtZSBpZiB3ZSBjb3VsZG4ndCBtYWtlIGl0IHRocm93LlxuXG5cbiAgdmFyIG5hbWUgPSBmbiA/IGZuLmRpc3BsYXlOYW1lIHx8IGZuLm5hbWUgOiAnJztcbiAgdmFyIHN5bnRoZXRpY0ZyYW1lID0gbmFtZSA/IGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUpIDogJyc7XG5cbiAge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBzeW50aGV0aWNGcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN5bnRoZXRpY0ZyYW1lO1xufVxuZnVuY3Rpb24gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKGZuLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkQ29uc3RydWN0KENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgcmV0dXJuICEhKHByb3RvdHlwZSAmJiBwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLCBzb3VyY2UsIG93bmVyRm4pIHtcblxuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAge1xuICAgICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUodHlwZSwgc2hvdWxkQ29uc3RydWN0KHR5cGUpKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKHR5cGUpO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZScpO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlTGlzdCcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUucmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIC8vIE1lbW8gbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZS50eXBlLCBzb3VyY2UsIG93bmVyRm4pO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XG4gIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChoYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3IkMSA9IHZvaWQgMDsgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3Byb2QtZXJyb3ItY29kZXNcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcigoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgKyAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nICsgJ1RoaXMgb2Z0ZW4gaGFwcGVucyBiZWNhdXNlIG9mIHR5cG9zIHN1Y2ggYXMgYFByb3BUeXBlcy5mdW5jdGlvbmAgaW5zdGVhZCBvZiBgUHJvcFR5cGVzLmZ1bmNgLicpO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXJyb3IkMSA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJyk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IkMSA9IGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgJiYgIShlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcycgKyAnIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvciQxKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yJDEubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IkMS5tZXNzYWdlXSA9IHRydWU7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignRmFpbGVkICVzIHR5cGU6ICVzJywgbG9jYXRpb24sIGVycm9yJDEubWVzc2FnZSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgaXNBcnJheUltcGwgPSBBcnJheS5pc0FycmF5OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVkZWNsYXJlXG5cbmZ1bmN0aW9uIGlzQXJyYXkoYSkge1xuICByZXR1cm4gaXNBcnJheUltcGwoYSk7XG59XG5cbi8qXG4gKiBUaGUgYCcnICsgdmFsdWVgIHBhdHRlcm4gKHVzZWQgaW4gaW4gcGVyZi1zZW5zaXRpdmUgY29kZSkgdGhyb3dzIGZvciBTeW1ib2xcbiAqIGFuZCBUZW1wb3JhbC4qIHR5cGVzLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L3B1bGwvMjIwNjQuXG4gKlxuICogVGhlIGZ1bmN0aW9ucyBpbiB0aGlzIG1vZHVsZSB3aWxsIHRocm93IGFuIGVhc2llci10by11bmRlcnN0YW5kLFxuICogZWFzaWVyLXRvLWRlYnVnIGV4Y2VwdGlvbiB3aXRoIGEgY2xlYXIgZXJyb3JzIG1lc3NhZ2UgbWVzc2FnZSBleHBsYWluaW5nIHRoZVxuICogcHJvYmxlbS4gKEluc3RlYWQgb2YgYSBjb25mdXNpbmcgZXhjZXB0aW9uIHRocm93biBpbnNpZGUgdGhlIGltcGxlbWVudGF0aW9uXG4gKiBvZiB0aGUgYHZhbHVlYCBvYmplY3QpLlxuICovXG4vLyAkRmxvd0ZpeE1lIG9ubHkgY2FsbGVkIGluIERFViwgc28gdm9pZCByZXR1cm4gaXMgbm90IHBvc3NpYmxlLlxuZnVuY3Rpb24gdHlwZU5hbWUodmFsdWUpIHtcbiAge1xuICAgIC8vIHRvU3RyaW5nVGFnIGlzIG5lZWRlZCBmb3IgbmFtZXNwYWNlZCB0eXBlcyBsaWtlIFRlbXBvcmFsLkluc3RhbnRcbiAgICB2YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC50b1N0cmluZ1RhZztcbiAgICB2YXIgdHlwZSA9IGhhc1RvU3RyaW5nVGFnICYmIHZhbHVlW1N5bWJvbC50b1N0cmluZ1RhZ10gfHwgdmFsdWUuY29uc3RydWN0b3IubmFtZSB8fCAnT2JqZWN0JztcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxufSAvLyAkRmxvd0ZpeE1lIG9ubHkgY2FsbGVkIGluIERFViwgc28gdm9pZCByZXR1cm4gaXMgbm90IHBvc3NpYmxlLlxuXG5cbmZ1bmN0aW9uIHdpbGxDb2VyY2lvblRocm93KHZhbHVlKSB7XG4gIHtcbiAgICB0cnkge1xuICAgICAgdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKSB7XG4gIC8vIElmIHlvdSBlbmRlZCB1cCBoZXJlIGJ5IGZvbGxvd2luZyBhbiBleGNlcHRpb24gY2FsbCBzdGFjaywgaGVyZSdzIHdoYXQnc1xuICAvLyBoYXBwZW5lZDogeW91IHN1cHBsaWVkIGFuIG9iamVjdCBvciBzeW1ib2wgdmFsdWUgdG8gUmVhY3QgKGFzIGEgcHJvcCwga2V5LFxuICAvLyBET00gYXR0cmlidXRlLCBDU1MgcHJvcGVydHksIHN0cmluZyByZWYsIGV0Yy4pIGFuZCB3aGVuIFJlYWN0IHRyaWVkIHRvXG4gIC8vIGNvZXJjZSBpdCB0byBhIHN0cmluZyB1c2luZyBgJycgKyB2YWx1ZWAsIGFuIGV4Y2VwdGlvbiB3YXMgdGhyb3duLlxuICAvL1xuICAvLyBUaGUgbW9zdCBjb21tb24gdHlwZXMgdGhhdCB3aWxsIGNhdXNlIHRoaXMgZXhjZXB0aW9uIGFyZSBgU3ltYm9sYCBpbnN0YW5jZXNcbiAgLy8gYW5kIFRlbXBvcmFsIG9iamVjdHMgbGlrZSBgVGVtcG9yYWwuSW5zdGFudGAuIEJ1dCBhbnkgb2JqZWN0IHRoYXQgaGFzIGFcbiAgLy8gYHZhbHVlT2ZgIG9yIGBbU3ltYm9sLnRvUHJpbWl0aXZlXWAgbWV0aG9kIHRoYXQgdGhyb3dzIHdpbGwgYWxzbyBjYXVzZSB0aGlzXG4gIC8vIGV4Y2VwdGlvbi4gKExpYnJhcnkgYXV0aG9ycyBkbyB0aGlzIHRvIHByZXZlbnQgdXNlcnMgZnJvbSB1c2luZyBidWlsdC1pblxuICAvLyBudW1lcmljIG9wZXJhdG9ycyBsaWtlIGArYCBvciBjb21wYXJpc29uIG9wZXJhdG9ycyBsaWtlIGA+PWAgYmVjYXVzZSBjdXN0b21cbiAgLy8gbWV0aG9kcyBhcmUgbmVlZGVkIHRvIHBlcmZvcm0gYWNjdXJhdGUgYXJpdGhtZXRpYyBvciBjb21wYXJpc29uLilcbiAgLy9cbiAgLy8gVG8gZml4IHRoZSBwcm9ibGVtLCBjb2VyY2UgdGhpcyBvYmplY3Qgb3Igc3ltYm9sIHZhbHVlIHRvIGEgc3RyaW5nIGJlZm9yZVxuICAvLyBwYXNzaW5nIGl0IHRvIFJlYWN0LiBUaGUgbW9zdCByZWxpYWJsZSB3YXkgaXMgdXN1YWxseSBgU3RyaW5nKHZhbHVlKWAuXG4gIC8vXG4gIC8vIFRvIGZpbmQgd2hpY2ggdmFsdWUgaXMgdGhyb3dpbmcsIGNoZWNrIHRoZSBicm93c2VyIG9yIGRlYnVnZ2VyIGNvbnNvbGUuXG4gIC8vIEJlZm9yZSB0aGlzIGV4Y2VwdGlvbiB3YXMgdGhyb3duLCB0aGVyZSBzaG91bGQgYmUgYGNvbnNvbGUuZXJyb3JgIG91dHB1dFxuICAvLyB0aGF0IHNob3dzIHRoZSB0eXBlIChTeW1ib2wsIFRlbXBvcmFsLlBsYWluRGF0ZSwgZXRjLikgdGhhdCBjYXVzZWQgdGhlXG4gIC8vIHByb2JsZW0gYW5kIGhvdyB0aGF0IHR5cGUgd2FzIHVzZWQ6IGtleSwgYXRycmlidXRlLCBpbnB1dCB2YWx1ZSBwcm9wLCBldGMuXG4gIC8vIEluIG1vc3QgY2FzZXMsIHRoaXMgY29uc29sZSBvdXRwdXQgYWxzbyBzaG93cyB0aGUgY29tcG9uZW50IGFuZCBpdHNcbiAgLy8gYW5jZXN0b3IgY29tcG9uZW50cyB3aGVyZSB0aGUgZXhjZXB0aW9uIGhhcHBlbmVkLlxuICAvL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvc2FmZS1zdHJpbmctY29lcmNpb25cbiAgcmV0dXJuICcnICsgdmFsdWU7XG59XG5mdW5jdGlvbiBjaGVja0tleVN0cmluZ0NvZXJjaW9uKHZhbHVlKSB7XG4gIHtcbiAgICBpZiAod2lsbENvZXJjaW9uVGhyb3codmFsdWUpKSB7XG4gICAgICBlcnJvcignVGhlIHByb3ZpZGVkIGtleSBpcyBhbiB1bnN1cHBvcnRlZCB0eXBlICVzLicgKyAnIFRoaXMgdmFsdWUgbXVzdCBiZSBjb2VyY2VkIHRvIGEgc3RyaW5nIGJlZm9yZSBiZWZvcmUgdXNpbmcgaXQgaGVyZS4nLCB0eXBlTmFtZSh2YWx1ZSkpO1xuXG4gICAgICByZXR1cm4gdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKTsgLy8gdGhyb3cgKHRvIGhlbHAgY2FsbGVycyBmaW5kIHRyb3VibGVzaG9vdGluZyBjb21tZW50cylcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBfX3NlbGY6IHRydWUsXG4gIF9fc291cmNlOiB0cnVlXG59O1xudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duO1xudmFyIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duO1xudmFyIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKCFkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICAgIGVycm9yKCdDb21wb25lbnQgXCIlc1wiIGNvbnRhaW5zIHRoZSBzdHJpbmcgcmVmIFwiJXNcIi4gJyArICdTdXBwb3J0IGZvciBzdHJpbmcgcmVmcyB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gJyArICdUaGlzIGNhc2UgY2Fubm90IGJlIGF1dG9tYXRpY2FsbHkgY29udmVydGVkIHRvIGFuIGFycm93IGZ1bmN0aW9uLiAnICsgJ1dlIGFzayB5b3UgdG8gbWFudWFsbHkgZml4IHRoaXMgY2FzZSBieSB1c2luZyB1c2VSZWYoKSBvciBjcmVhdGVSZWYoKSBpbnN0ZWFkLiAnICsgJ0xlYXJuIG1vcmUgYWJvdXQgdXNpbmcgcmVmcyBzYWZlbHkgaGVyZTogJyArICdodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3RyaWN0LW1vZGUtc3RyaW5nLXJlZicsIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JmY3MvcHVsbC8xMDdcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKi9cblxuZnVuY3Rpb24ganN4REVWKHR5cGUsIGNvbmZpZywgbWF5YmVLZXksIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgICB2YXIgcHJvcHMgPSB7fTtcbiAgICB2YXIga2V5ID0gbnVsbDtcbiAgICB2YXIgcmVmID0gbnVsbDsgLy8gQ3VycmVudGx5LCBrZXkgY2FuIGJlIHNwcmVhZCBpbiBhcyBhIHByb3AuIFRoaXMgY2F1c2VzIGEgcG90ZW50aWFsXG4gICAgLy8gaXNzdWUgaWYga2V5IGlzIGFsc28gZXhwbGljaXRseSBkZWNsYXJlZCAoaWUuIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+XG4gICAgLy8gb3IgPGRpdiBrZXk9XCJIaVwiIHsuLi5wcm9wc30gLz4gKS4gV2Ugd2FudCB0byBkZXByZWNhdGUga2V5IHNwcmVhZCxcbiAgICAvLyBidXQgYXMgYW4gaW50ZXJtZWRpYXJ5IHN0ZXAsIHdlIHdpbGwgdXNlIGpzeERFViBmb3IgZXZlcnl0aGluZyBleGNlcHRcbiAgICAvLyA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPiwgYmVjYXVzZSB3ZSBhcmVuJ3QgY3VycmVudGx5IGFibGUgdG8gdGVsbCBpZlxuICAgIC8vIGtleSBpcyBleHBsaWNpdGx5IGRlY2xhcmVkIHRvIGJlIHVuZGVmaW5lZCBvciBub3QuXG5cbiAgICBpZiAobWF5YmVLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAge1xuICAgICAgICBjaGVja0tleVN0cmluZ0NvZXJjaW9uKG1heWJlS2V5KTtcbiAgICAgIH1cblxuICAgICAga2V5ID0gJycgKyBtYXliZUtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAge1xuICAgICAgICBjaGVja0tleVN0cmluZ0NvZXJjaW9uKGNvbmZpZy5rZXkpO1xuICAgICAgfVxuXG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAge1xuICAgIGlmIChSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAge1xuICAgIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB7XG4gICAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICAgIGlmICghaW5mbykge1xuICAgICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG5cbiAgICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5mbztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuXG4gICAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gICAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAgIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cblxuICAgIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShlbGVtZW50Ll9vd25lci50eXBlKSArIFwiLlwiO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCk7XG5cbiAgICBlcnJvcignRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3dhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpc0FycmF5KG5vZGUpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuXG4gICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB7XG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BUeXBlcztcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BUeXBlcykge1xuICAgICAgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuICAgICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTsgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcblxuICAgICAgdmFyIF9uYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIGRpZFdhcm5BYm91dEtleVNwcmVhZCA9IHt9O1xuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgaXNTdGF0aWNDaGlsZHJlbiwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAgIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgICBpZiAoIXZhbGlkVHlwZSkge1xuICAgICAgdmFyIGluZm8gPSAnJztcblxuICAgICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpO1xuXG4gICAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdHlwZVN0cmluZztcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICAgIH0gZWxzZSBpZiAoaXNBcnJheSh0eXBlKSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICAgIH1cblxuICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgICB9XG5cbiAgICB2YXIgZWxlbWVudCA9IGpzeERFVih0eXBlLCBwcm9wcywga2V5LCBzb3VyY2UsIHNlbGYpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAgIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICAgIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gICAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAgIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gICAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuXG5cbiAgICBpZiAodmFsaWRUeXBlKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcblxuICAgICAgaWYgKGNoaWxkcmVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGlzU3RhdGljQ2hpbGRyZW4pIHtcbiAgICAgICAgICBpZiAoaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW5baV0sIHR5cGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogU3RhdGljIGNoaWxkcmVuIHNob3VsZCBhbHdheXMgYmUgYW4gYXJyYXkuICcgKyAnWW91IGFyZSBsaWtlbHkgZXhwbGljaXRseSBjYWxsaW5nIFJlYWN0LmpzeHMgb3IgUmVhY3QuanN4REVWLiAnICsgJ1VzZSB0aGUgQmFiZWwgdHJhbnNmb3JtIGluc3RlYWQuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuLCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3BzLCAna2V5JykpIHtcbiAgICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSk7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMocHJvcHMpLmZpbHRlcihmdW5jdGlvbiAoaykge1xuICAgICAgICAgIHJldHVybiBrICE9PSAna2V5JztcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBiZWZvcmVFeGFtcGxlID0ga2V5cy5sZW5ndGggPiAwID8gJ3trZXk6IHNvbWVLZXksICcgKyBrZXlzLmpvaW4oJzogLi4uLCAnKSArICc6IC4uLn0nIDogJ3trZXk6IHNvbWVLZXl9JztcblxuICAgICAgICBpZiAoIWRpZFdhcm5BYm91dEtleVNwcmVhZFtjb21wb25lbnROYW1lICsgYmVmb3JlRXhhbXBsZV0pIHtcbiAgICAgICAgICB2YXIgYWZ0ZXJFeGFtcGxlID0ga2V5cy5sZW5ndGggPiAwID8gJ3snICsga2V5cy5qb2luKCc6IC4uLiwgJykgKyAnOiAuLi59JyA6ICd7fSc7XG5cbiAgICAgICAgICBlcnJvcignQSBwcm9wcyBvYmplY3QgY29udGFpbmluZyBhIFwia2V5XCIgcHJvcCBpcyBiZWluZyBzcHJlYWQgaW50byBKU1g6XFxuJyArICcgIGxldCBwcm9wcyA9ICVzO1xcbicgKyAnICA8JXMgey4uLnByb3BzfSAvPlxcbicgKyAnUmVhY3Qga2V5cyBtdXN0IGJlIHBhc3NlZCBkaXJlY3RseSB0byBKU1ggd2l0aG91dCB1c2luZyBzcHJlYWQ6XFxuJyArICcgIGxldCBwcm9wcyA9ICVzO1xcbicgKyAnICA8JXMga2V5PXtzb21lS2V5fSB7Li4ucHJvcHN9IC8+JywgYmVmb3JlRXhhbXBsZSwgY29tcG9uZW50TmFtZSwgYWZ0ZXJFeGFtcGxlLCBjb21wb25lbnROYW1lKTtcblxuICAgICAgICAgIGRpZFdhcm5BYm91dEtleVNwcmVhZFtjb21wb25lbnROYW1lICsgYmVmb3JlRXhhbXBsZV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn0gLy8gVGhlc2UgdHdvIGZ1bmN0aW9ucyBleGlzdCB0byBzdGlsbCBnZXQgY2hpbGQgd2FybmluZ3MgaW4gZGV2XG4vLyBldmVuIHdpdGggdGhlIHByb2QgdHJhbnNmb3JtLiBUaGlzIG1lYW5zIHRoYXQganN4REVWIGlzIHB1cmVseVxuLy8gb3B0LWluIGJlaGF2aW9yIGZvciBiZXR0ZXIgbWVzc2FnZXMgYnV0IHRoYXQgd2Ugd29uJ3Qgc3RvcFxuLy8gZ2l2aW5nIHlvdSB3YXJuaW5ncyBpZiB5b3UgdXNlIHByb2R1Y3Rpb24gYXBpcy5cblxuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb25TdGF0aWModHlwZSwgcHJvcHMsIGtleSkge1xuICB7XG4gICAgcmV0dXJuIGpzeFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBrZXksIHRydWUpO1xuICB9XG59XG5mdW5jdGlvbiBqc3hXaXRoVmFsaWRhdGlvbkR5bmFtaWModHlwZSwgcHJvcHMsIGtleSkge1xuICB7XG4gICAgcmV0dXJuIGpzeFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBrZXksIGZhbHNlKTtcbiAgfVxufVxuXG52YXIganN4ID0gIGpzeFdpdGhWYWxpZGF0aW9uRHluYW1pYyA7IC8vIHdlIG1heSB3YW50IHRvIHNwZWNpYWwgY2FzZSBqc3hzIGludGVybmFsbHkgdG8gdGFrZSBhZHZhbnRhZ2Ugb2Ygc3RhdGljIGNoaWxkcmVuLlxuLy8gZm9yIG5vdyB3ZSBjYW4gc2hpcCBpZGVudGljYWwgcHJvZCBmdW5jdGlvbnNcblxudmFyIGpzeHMgPSAganN4V2l0aFZhbGlkYXRpb25TdGF0aWMgO1xuXG5leHBvcnRzLkZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbmV4cG9ydHMuanN4ID0ganN4O1xuZXhwb3J0cy5qc3hzID0ganN4cztcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtcnVudGltZS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtcnVudGltZS5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50IH0gZnJvbSAnQHJlbW90ZS11aS9yZWFjdCc7XG5leHBvcnQgY29uc3QgY3JlYXRlUmVtb3RlQ29tcG9uZW50UmVnaXN0cnkgPSAoKSA9PiB7XG4gICAgY29uc3QgY29tcG9uZW50TWV0YWRhdGFMb29rdXAgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgY29tcG9uZW50TmFtZUJ5Q29tcG9uZW50TWFwID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHJlZ2lzdGVyQ29tcG9uZW50ID0gKGNvbXBvbmVudCwgY29tcG9uZW50TmFtZSwgZnJhZ21lbnRQcm9wcykgPT4ge1xuICAgICAgICBjb21wb25lbnROYW1lQnlDb21wb25lbnRNYXAuc2V0KGNvbXBvbmVudCwgY29tcG9uZW50TmFtZSk7XG4gICAgICAgIGNvbXBvbmVudE1ldGFkYXRhTG9va3VwLnNldChjb21wb25lbnROYW1lLCB7XG4gICAgICAgICAgICBmcmFnbWVudFByb3BzU2V0OiBuZXcgU2V0KGZyYWdtZW50UHJvcHMpLFxuICAgICAgICAgICAgZnJhZ21lbnRQcm9wc0FycmF5OiBmcmFnbWVudFByb3BzLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldENvbXBvbmVudE5hbWU6IChjb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lQnlDb21wb25lbnRNYXAuZ2V0KGNvbXBvbmVudCk7XG4gICAgICAgICAgICBpZiAoIWNvbXBvbmVudE5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnROYW1lO1xuICAgICAgICB9LFxuICAgICAgICBpc0FsbG93ZWRDb21wb25lbnROYW1lOiAoY29tcG9uZW50TmFtZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudE1ldGFkYXRhTG9va3VwLmhhcyhjb21wb25lbnROYW1lKTtcbiAgICAgICAgfSxcbiAgICAgICAgaXNDb21wb25lbnRGcmFnbWVudFByb3A6IChjb21wb25lbnROYW1lLCBwcm9wTmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50TWV0YWRhdGEgPSBjb21wb25lbnRNZXRhZGF0YUxvb2t1cC5nZXQoY29tcG9uZW50TmFtZSk7XG4gICAgICAgICAgICBpZiAoIWNvbXBvbmVudE1ldGFkYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudE1ldGFkYXRhLmZyYWdtZW50UHJvcHNTZXQuaGFzKHByb3BOYW1lKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0Q29tcG9uZW50RnJhZ21lbnRQcm9wTmFtZXM6IChjb21wb25lbnROYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb21wb25lbnRNZXRhZGF0YSA9IGNvbXBvbmVudE1ldGFkYXRhTG9va3VwLmdldChjb21wb25lbnROYW1lKTtcbiAgICAgICAgICAgIGlmICghY29tcG9uZW50TWV0YWRhdGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IGZyYWdtZW50UHJvcHNBcnJheSB9ID0gY29tcG9uZW50TWV0YWRhdGE7XG4gICAgICAgICAgICByZXR1cm4gZnJhZ21lbnRQcm9wc0FycmF5O1xuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50OiAoY29tcG9uZW50TmFtZSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGZyYWdtZW50UHJvcHMgPSBbXSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGNvbnN0IHJlbW90ZVJlYWN0Q29tcG9uZW50ID0gY3JlYXRlUmVtb3RlUmVhY3RDb21wb25lbnQoY29tcG9uZW50TmFtZSwge1xuICAgICAgICAgICAgICAgIGZyYWdtZW50UHJvcHM6IGZyYWdtZW50UHJvcHMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiByZWdpc3RlckNvbXBvbmVudChyZW1vdGVSZWFjdENvbXBvbmVudCwgY29tcG9uZW50TmFtZSwgZnJhZ21lbnRQcm9wcyk7XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlQ29tcG91bmRSZWFjdENvbXBvbmVudDogKGNvbXBvbmVudE5hbWUsIG9wdGlvbnMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgZnJhZ21lbnRQcm9wcyA9IFtdIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgY29uc3QgUmVtb3RlQ29tcG9uZW50VHlwZSA9IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50KGNvbXBvbmVudE5hbWUsIHtcbiAgICAgICAgICAgICAgICBmcmFnbWVudFByb3BzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBXZSBjYW4gb25seSBhdHRhY2ggcHJvcGVydGllcyB0byBhIGZ1bmN0aW9uIGNvbXBvbmVudCB0eXBlLCBzbyB3ZSBuZWVkIHRvIGNoZWNrIGlmIHRoZSByZW1vdGUgY29tcG9uZW50IHR5cGUgaXMgYSBmdW5jdGlvbi5cbiAgICAgICAgICAgIC8vIElmIHRoZSByZW1vdGUgY29tcG9uZW50IHR5cGUgaXMgbm90IGEgZnVuY3Rpb24sIHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIGZ1bmN0aW9uIGNvbXBvbmVudC5cbiAgICAgICAgICAgIGNvbnN0IENvbXBvdW5kRnVuY3Rpb25Db21wb25lbnRUeXBlID0gdHlwZW9mIFJlbW90ZUNvbXBvbmVudFR5cGUgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICA/IFJlbW90ZUNvbXBvbmVudFR5cGVcbiAgICAgICAgICAgICAgICA6IChwcm9wcykgPT4gKF9qc3goUmVtb3RlQ29tcG9uZW50VHlwZSwgeyAuLi5wcm9wcyB9KSk7XG4gICAgICAgICAgICAvLyBBdHRhY2ggdGhlIGNvbXBvdW5kIGNvbXBvbmVudCBwcm9wZXJ0aWVzIHRvIHRoZSBmdW5jdGlvbiBjb21wb25lbnQgdGhhdCB3ZSB3aWxsIGJlIHJldHVybmluZy5cbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oQ29tcG91bmRGdW5jdGlvbkNvbXBvbmVudFR5cGUsIG9wdGlvbnMuY29tcG91bmRDb21wb25lbnRQcm9wZXJ0aWVzKTtcbiAgICAgICAgICAgIC8vIFJlZ2lzdGVyIHRoZSBjb21wb3VuZCBmdW5jdGlvbiBjb21wb25lbnQgd2l0aCB0aGUgcmVnaXN0cnkgYW5kIHJldHVybiBpdC5cbiAgICAgICAgICAgIHJldHVybiByZWdpc3RlckNvbXBvbmVudChDb21wb3VuZEZ1bmN0aW9uQ29tcG9uZW50VHlwZSwgY29tcG9uZW50TmFtZSwgZnJhZ21lbnRQcm9wcyk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVSZW1vdGVDb21wb25lbnRSZWdpc3RyeSB9IGZyb20gXCIuL3V0aWxzL3JlbW90ZS1jb21wb25lbnQtcmVnaXN0cnkuanNcIjtcbi8qKlxuICogUmVwcmVzZW50cyBhIHJlZ2lzdHJ5IG9mIEh1YlNwb3QtcHJvdmlkZWQgUmVhY3QgY29tcG9uZW50cyB0aGF0IHNob3VsZCBvbmx5IGJlIHVzZWQgKippbnRlcm5hbGx5KiogYnkgdGhlIFVJIGV4dGVuc2lvbiBTREsuXG4gKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBjb25zdCBfX2h1YlNwb3RDb21wb25lbnRSZWdpc3RyeSA9IGNyZWF0ZVJlbW90ZUNvbXBvbmVudFJlZ2lzdHJ5KCk7XG5jb25zdCB7IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQsIGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlQ29tcG91bmRSZWFjdENvbXBvbmVudCwgfSA9IF9faHViU3BvdENvbXBvbmVudFJlZ2lzdHJ5O1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBTVEFOREFSRCBDT01QT05FTlRTXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8qKlxuICogVGhlIGBBbGVydGAgY29tcG9uZW50IHJlbmRlcnMgYW4gYWxlcnQgd2l0aGluIGEgY2FyZC4gVXNlIHRoaXMgY29tcG9uZW50IHRvIGdpdmUgdXNhZ2UgZ3VpZGFuY2UsIG5vdGlmeSB1c2VycyBvZiBhY3Rpb24gcmVzdWx0cywgb3Igd2FybiB0aGVtIGFib3V0IHBvdGVudGlhbCBpc3N1ZXMgb3IgZmFpbHVyZXMuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvYWxlcnQgRG9jc31cbiAqIC0ge0BsaW5rIGh0dHBzOi8vYXBwLmh1YnNwb3QuY29tL2RvY3MvNDgwMDg5MTYvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9hbGVydCN2YXJpYW50cyBWYXJpYW50c31cbiAqL1xuZXhwb3J0IGNvbnN0IEFsZXJ0ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQWxlcnQnKTtcbi8qKlxuICogVGhlIGBCdXR0b25gIGNvbXBvbmVudCByZW5kZXJzIGEgc2luZ2xlIGJ1dHRvbi4gVXNlIHRoaXMgY29tcG9uZW50IHRvIGVuYWJsZSB1c2VycyB0byBwZXJmb3JtIGFjdGlvbnMsIHN1Y2ggYXMgc3VibWl0dGluZyBhIGZvcm0sIHNlbmRpbmcgZGF0YSB0byBhbiBleHRlcm5hbCBzeXN0ZW0sIG9yIGRlbGV0aW5nIGRhdGEuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvYnV0dG9uIERvY3N9XG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2J1dHRvbiN1c2FnZS1leGFtcGxlcyBFeGFtcGxlc31cbiAqIC0ge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9IdWJTcG90L3VpLWV4dGVuc2lvbnMtZXhhbXBsZXMvdHJlZS9tYWluL2Rlc2lnbi1wYXR0ZXJucyNidXR0b24gRGVzaWduIFBhdHRlcm4gRXhhbXBsZXN9XG4gKi9cbmV4cG9ydCBjb25zdCBCdXR0b24gPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdCdXR0b24nLCB7XG4gICAgZnJhZ21lbnRQcm9wczogWydvdmVybGF5J10sXG59KTtcbi8qKlxuICogVGhlIGBCdXR0b25Sb3dgIGNvbXBvbmVudCByZW5kZXJzIGEgcm93IG9mIHNwZWNpZmllZCBgQnV0dG9uYCBjb21wb25lbnRzLiBVc2UgdGhpcyBjb21wb25lbnQgd2hlbiB5b3Ugd2FudCB0byBpbmNsdWRlIG11bHRpcGxlIGJ1dHRvbnMgaW4gYSByb3cuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvYnV0dG9uLXJvdyBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgQnV0dG9uUm93ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQnV0dG9uUm93Jyk7XG5leHBvcnQgY29uc3QgQ2FyZCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0NhcmQnKTtcbi8qKlxuICogVGhlIGBEZXNjcmlwdGlvbkxpc3RgIGNvbXBvbmVudCByZW5kZXJzIHBhaXJzIG9mIGxhYmVscyBhbmQgdmFsdWVzLiBVc2UgdGhpcyBjb21wb25lbnQgdG8gZGlzcGxheSBwYWlycyBvZiBsYWJlbHMgYW5kIHZhbHVlcyBpbiBhIHdheSB0aGF0J3MgZWFzeSB0byByZWFkIGF0IGEgZ2xhbmNlLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2Rlc2NyaXB0aW9uLWxpc3QgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uTGlzdCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0Rlc2NyaXB0aW9uTGlzdCcpO1xuLyoqXG4gKiBUaGUgYERlc2NyaXB0aW9uTGlzdEl0ZW1gIGNvbXBvbmVudCByZW5kZXJzIGEgc2luZ2xlIHNldCBvZiBhIGxhYmVsIGFuZCB2YWx1ZS4gVXNlIHRoaXMgY29tcG9uZW50IHdpdGhpbiBhIGBEZXNjcmlwdGlvbkxpc3RgIGNvbXBvbmVudC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9kZXNjcmlwdGlvbi1saXN0IERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbkxpc3RJdGVtID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnRGVzY3JpcHRpb25MaXN0SXRlbScpO1xuLyoqXG4gKiBUaGUgYERpdmlkZXJgIGNvbXBvbmVudCByZW5kZXJzIGEgZ3JleSwgaG9yaXpvbnRhbCBsaW5lIGZvciBzcGFjaW5nIG91dCBjb21wb25lbnRzIHZlcnRpY2FsbHkgb3IgY3JlYXRpbmcgc2VjdGlvbnMgaW4gYW4gZXh0ZW5zaW9uLiBVc2UgdGhpcyBjb21wb25lbnQgdG8gc3BhY2Ugb3V0IG90aGVyIGNvbXBvbmVudHMgd2hlbiB0aGUgY29udGVudCBuZWVkcyBtb3JlIHNlcGFyYXRpb24gdGhhbiB3aGl0ZSBzcGFjZS5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9kaXZpZGVyIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBEaXZpZGVyID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnRGl2aWRlcicpO1xuLyoqXG4gKiBUaGUgYEVtcHR5U3RhdGVgIGNvbXBvbmVudCBzZXRzIHRoZSBjb250ZW50IHRoYXQgYXBwZWFycyB3aGVuIHRoZSBleHRlbnNpb24gaXMgaW4gYW4gZW1wdHkgc3RhdGUuIFVzZSB0aGlzIGNvbXBvbmVudCB3aGVuIHRoZXJlJ3Mgbm8gY29udGVudCBvciBkYXRhIHRvIGhlbHAgZ3VpZGUgdXNlcnMuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvZW1wdHktc3RhdGUgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IEVtcHR5U3RhdGUgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdFbXB0eVN0YXRlJyk7XG4vKipcbiAqIFRoZSBgRXJyb3JTdGF0ZWAgY29tcG9uZW50IHNldHMgdGhlIGNvbnRlbnQgb2YgYW4gZXJyb3JpbmcgZXh0ZW5zaW9uLiBVc2UgdGhpcyBjb21wb25lbnQgdG8gZ3VpZGUgdXNlcnMgdGhyb3VnaCByZXNvbHZpbmcgZXJyb3JzIHRoYXQgeW91ciBleHRlbnNpb24gbWlnaHQgZW5jb3VudGVyLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2Vycm9yLXN0YXRlIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBFcnJvclN0YXRlID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnRXJyb3JTdGF0ZScpO1xuLyoqXG4gKiBUaGUgYEZvcm1gIGNvbXBvbmVudCByZW5kZXJzIGEgZm9ybSB0aGF0IGNhbiBjb250YWluIG90aGVyIHN1YmNvbXBvbmVudHMsIHN1Y2ggYXMgYElucHV0YCwgYFNlbGVjdGAsIGFuZCBgQnV0dG9uYC4gVXNlIHRoaXMgY29tcG9uZW50IHRvIGVuYWJsZSB1c2VycyB0byBzdWJtaXQgZGF0YSB0byBIdWJTcG90IG9yIGFuIGV4dGVybmFsIHN5c3RlbS5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9mb3JtIERvY3N9XG4gKiAtIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vSHViU3BvdC91aS1leHRlbnNpb25zLWV4YW1wbGVzL3RyZWUvbWFpbi9kZXNpZ24tcGF0dGVybnMjZm9ybSBEZXNpZ24gUGF0dGVybiBFeGFtcGxlc31cbiAqL1xuZXhwb3J0IGNvbnN0IEZvcm0gPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdGb3JtJyk7XG4vKipcbiAqIFRoZSBgSGVhZGluZ2AgY29tcG9uZW50IHJlbmRlcnMgbGFyZ2UgaGVhZGluZyB0ZXh0LiBVc2UgdGhpcyBjb21wb25lbnQgdG8gaW50cm9kdWNlIG9yIGRpZmZlcmVudGlhdGUgc2VjdGlvbnMgb2YgeW91ciBjb21wb25lbnQuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvaGVhZGluZyBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgSGVhZGluZyA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0hlYWRpbmcnKTtcbi8qKlxuICogVGhlIGBJbWFnZWAgY29tcG9uZW50IHJlbmRlcnMgYW4gaW1hZ2UuIFVzZSB0aGlzIGNvbXBvbmVudCB0byBhZGQgYSBsb2dvIG9yIG90aGVyIHZpc3VhbCBicmFuZCBpZGVudGl0eSBhc3NldCwgb3IgdG8gYWNjZW50dWF0ZSBvdGhlciBjb250ZW50IGluIHRoZSBleHRlbnNpb24uXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvaW1hZ2UgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IEltYWdlID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnSW1hZ2UnLCB7XG4gICAgZnJhZ21lbnRQcm9wczogWydvdmVybGF5J10sXG59KTtcbi8qKlxuICogVGhlIGBJbnB1dGAgY29tcG9uZW50IHJlbmRlcnMgYSB0ZXh0IGlucHV0IGZpZWxkIHdoZXJlIGEgdXNlciBjYW4gZW50ZXIgYSBjdXN0b20gdGV4dCB2YWx1ZS4gTGlrZSBvdGhlciBpbnB1dHMsIHRoaXMgY29tcG9uZW50IHNob3VsZCBiZSB1c2VkIHdpdGhpbiBhIGBGb3JtYCB0aGF0IGhhcyBhIHN1Ym1pdCBidXR0b24uXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvaW5wdXQgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IElucHV0ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnSW5wdXQnKTtcbi8qKlxuICogVGhlIGBMaW5rYCBjb21wb25lbnQgcmVuZGVycyBhIGNsaWNrYWJsZSBoeXBlcmxpbmsuIFVzZSBsaW5rcyB0byBkaXJlY3QgdXNlcnMgdG8gYW4gZXh0ZXJuYWwgd2ViIHBhZ2Ugb3IgYW5vdGhlciBwYXJ0IG9mIHRoZSBIdWJTcG90IGFwcC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9saW5rIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBMaW5rID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnTGluaycsIHtcbiAgICBmcmFnbWVudFByb3BzOiBbJ292ZXJsYXknXSxcbn0pO1xuLyoqXG4gKiBUaGUgYFRleHRBcmVhYCBjb21wb25lbnQgcmVuZGVycyBhIGZpbGxhYmxlIHRleHQgZmllbGQuIExpa2Ugb3RoZXIgaW5wdXRzLCB0aGlzIGNvbXBvbmVudCBzaG91bGQgYmUgdXNlZCB3aXRoaW4gYSBgRm9ybWAgdGhhdCBoYXMgYSBzdWJtaXQgYnV0dG9uLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3RleHQtYXJlYSBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgVGV4dEFyZWEgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdUZXh0QXJlYScpO1xuLy8gVGV4dGFyZWEgd2FzIGNoYW5nZWQgdG8gVGV4dEFyZWFcbi8vIEV4cG9ydGluZyBib3RoIGZvciBiYWNrd2FyZHMgY29tcGF0XG4vKiogQGRlcHJlY2F0ZWQgdXNlIFRleHRBcmVhIGluc3RlYWQuIFdpdGggYSBjYXBpdGFsIEEuKi9cbmV4cG9ydCBjb25zdCBUZXh0YXJlYSA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1RleHRhcmVhJyk7XG4vKipcbiAqIFRoZSBgTG9hZGluZ1NwaW5uZXJgIGNvbXBvbmVudCByZW5kZXJzIGEgdmlzdWFsIGluZGljYXRvciBmb3Igd2hlbiBhbiBleHRlbnNpb24gaXMgbG9hZGluZyBvciBwcm9jZXNzaW5nIGRhdGEuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvbG9hZGluZy1zcGlubmVyIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBMb2FkaW5nU3Bpbm5lciA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0xvYWRpbmdTcGlubmVyJyk7XG4vKipcbiAqIFRoZSBgUHJvZ3Jlc3NCYXJgIGNvbXBvbmVudCByZW5kZXJzIGEgdmlzdWFsIGluZGljYXRvciBzaG93aW5nIGEgbnVtZXJpYyBhbmQvb3IgcGVyY2VudGFnZS1iYXNlZCByZXByZXNlbnRhdGlvbiBvZiBwcm9ncmVzcy4gVGhlIHBlcmNlbnRhZ2UgaXMgY2FsY3VsYXRlZCBiYXNlZCBvbiB0aGUgbWF4aW11bSBwb3NzaWJsZSB2YWx1ZSBzcGVjaWZpZWQgaW4gdGhlIGNvbXBvbmVudC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9wcm9ncmVzcy1iYXIgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IFByb2dyZXNzQmFyID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnUHJvZ3Jlc3NCYXInKTtcbi8qKlxuICogVGhlIGBTZWxlY3RgIGNvbXBvbmVudCByZW5kZXJzIGEgZHJvcGRvd24gbWVudSBzZWxlY3QgZmllbGQgd2hlcmUgYSB1c2VyIGNhbiBzZWxlY3QgYSBzaW5nbGUgdmFsdWUuIEEgc2VhcmNoIGJhciB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgaW5jbHVkZWQgd2hlbiB0aGVyZSBhcmUgbW9yZSB0aGFuIHNldmVuIG9wdGlvbnMuIExpa2Ugb3RoZXIgaW5wdXRzLCB0aGlzIGNvbXBvbmVudCBzaG91bGQgYmUgdXNlZCB3aXRoaW4gYSBgRm9ybWAgdGhhdCBoYXMgYSBzdWJtaXQgYnV0dG9uLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3NlbGVjdCBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgU2VsZWN0ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnU2VsZWN0Jyk7XG4vKipcbiAqIFRoZSBgVGFnYCBjb21wb25lbnQgcmVuZGVycyBhIHRhZyB0byBsYWJlbCBvciBjYXRlZ29yaXplIGluZm9ybWF0aW9uIG9yIG90aGVyIGNvbXBvbmVudHMuIFRhZ3MgY2FuIGJlIHN0YXRpYyBvciBjbGlja2FibGUgZm9yIGludm9raW5nIGZ1bmN0aW9ucy5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy90YWcgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IFRhZyA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1RhZycsIHtcbiAgICBmcmFnbWVudFByb3BzOiBbJ292ZXJsYXknXSxcbn0pO1xuLyoqXG4gKiBUaGUgYFRleHRgIGNvbXBvbmVudCByZW5kZXJzIHRleHQgd2l0aCBmb3JtYXR0aW5nIG9wdGlvbnMuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvdGV4dCBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgVGV4dCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1RleHQnKTtcbi8qKlxuICogVGhlIGBUaWxlYCBjb21wb25lbnQgcmVuZGVycyBhIHNxdWFyZSB0aWxlIHRoYXQgY2FuIGNvbnRhaW4gb3RoZXIgY29tcG9uZW50cy4gVXNlIHRoaXMgY29tcG9uZW50IHRvIGNyZWF0ZSBncm91cHMgb2YgcmVsYXRlZCBjb21wb25lbnRzLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3RpbGUgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IFRpbGUgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdUaWxlJyk7XG4vKiogQGRlcHJlY2F0ZWQgdXNlIEZsZXggaW5zdGVhZC4gSXQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IHJlbGVhc2UuICovXG5leHBvcnQgY29uc3QgU3RhY2sgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdTdGFjaycpO1xuLyoqXG4gKiBUaGUgYFRvZ2dsZUdyb3VwYCBjb21wb25lbnQgcmVuZGVycyBhIGxpc3Qgb2Ygc2VsZWN0YWJsZSBvcHRpb25zLCBlaXRoZXIgaW4gcmFkaW8gYnV0dG9uIG9yIGNoZWNrYm94IGZvcm0uXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvdG9nZ2xlLWdyb3VwIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBUb2dnbGVHcm91cCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1RvZ2dsZUdyb3VwJyk7XG4vKipcbiAqIFRoZSBgU3RhdGlzdGljc0l0ZW1gIGNvbXBvbmVudCByZW5kZXJzIGEgc2luZ2xlIGRhdGEgcG9pbnQgd2l0aGluIGEgYFN0YXRpc3RpY3NgIGNvbXBvbmVudC4gVXNlIHRoaXMgY29tcG9uZW50IHRvIGRpc3BsYXkgYSBzaW5nbGUgZGF0YSBwb2ludCwgc3VjaCBhcyBhIG51bWJlciBvciBwZXJjZW50YWdlLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3N0YXRpc3RpY3MgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IFN0YXRpc3RpY3NJdGVtID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnU3RhdGlzdGljc0l0ZW0nKTtcbi8qKlxuICogVGhlIGBTdGF0aXN0aWNzYCBjb21wb25lbnQgcmVuZGVycyBhIHZpc3VhbCBzcG90bGlnaHQgb2Ygb25lIG9yIG1vcmUgZGF0YSBwb2ludHMuIEluY2x1ZGVzIHRoZSBgU3RhdGlzdGljc0l0ZW1gIGFuZCBgU3RhdGlzdGljc1RyZW5kYCBzdWJjb21wb25lbnRzLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3N0YXRpc3RpY3MgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IFN0YXRpc3RpY3MgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdTdGF0aXN0aWNzJyk7XG4vKipcbiAqIFRoZSBgU3RhdGlzdGljc1RyZW5kYCBjb21wb25lbnQgcmVuZGVycyBhIHBlcmNlbnRhZ2UgdHJlbmQgdmFsdWUgYW5kIGRpcmVjdGlvbiBhbG9uc2lkZSBhIGBTdGF0aXN0aWNzSXRlbWAgY29tcG9uZW50LiBVc2UgdGhpcyBjb21wb25lbnQgd2l0aGluIHRoZSBgU3RhdGlzdGljc0l0ZW1gIGNvbXBvbmVudC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9zdGF0aXN0aWNzIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBTdGF0aXN0aWNzVHJlbmQgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdTdGF0aXN0aWNzVHJlbmQnKTtcbi8qKlxuICogVGhlIGBUYWJsZWAgY29tcG9uZW50IHJlbmRlcnMgYSB0YWJsZS4gVG8gZm9ybWF0IHRoZSB0YWJsZSwgdXNlIHRoZSBzdWJjb21wb25lbnRzIGBUYWJsZUhlYWRgLCBgVGFibGVSb3dgLCBgVGFibGVIZWFkZXJgLCBgVGFibGVCb2R5YCwgYFRhYmxlQ2VsbGBhbmQgYFRhYmxlRm9vdGVyYC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy90YWJsZSBEb2NzfVxuICogLSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL0h1YlNwb3QvdWktZXh0ZW5zaW9ucy1leGFtcGxlcy90cmVlL21haW4vZGVzaWduLXBhdHRlcm5zI3RhYmxlIERlc2lnbiBQYXR0ZXJuIEV4YW1wbGV9XG4gKi9cbmV4cG9ydCBjb25zdCBUYWJsZSA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1RhYmxlJyk7XG4vKipcbiAqIFRoZSBgVGFibGVGb290ZXJgIGNvbXBvbmVudCByZW5kZXJzIGEgZm9vdGVyIHdpdGhpbiBhIGBUYWJsZWAgY29tcG9uZW50LiBVc2UgdGhpcyBjb21wb25lbnQgdG8gZGlzcGxheSB0b3RhbHMgb3Igb3RoZXIgc3VtbWFyeSBpbmZvcm1hdGlvbi5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy90YWJsZSBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgVGFibGVGb290ZXIgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdUYWJsZUZvb3RlcicpO1xuLyoqXG4gKiBUaGUgYFRhYmxlQ2VsbGAgY29tcG9uZW50IHJlbmRlcnMgaW5kaXZpZHVhbCBjZWxscyB3aXRoaW4gdGhlIGBUYWJsZUJvZHlgIGNvbXBvbmVudC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy90YWJsZSBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgVGFibGVDZWxsID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnVGFibGVDZWxsJyk7XG4vKipcbiAqIFRoZSBgVGFibGVSb3dgIGNvbXBvbmVudCByZW5kZXJzIGEgcm93IHdpdGhpbiB0aGUgYFRhYmxlQm9keWAgb3IgYFRhYmxlSGVhZGAgY29tcG9uZW50LlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3RhYmxlIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBUYWJsZVJvdyA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1RhYmxlUm93Jyk7XG4vKipcbiAqIFRoZSBgVGFibGVCb2R5YCBjb21wb25lbnQgcmVuZGVycyB0aGUgYm9keSAocm93cyBhbmQgY2VsbHMpIG9mIGEgdGFibGUgd2l0aGluIHRoZSBgVGFibGVgIGNvbXBvbmVudC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy90YWJsZSBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgVGFibGVCb2R5ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnVGFibGVCb2R5Jyk7XG4vKipcbiAqIFRoZSBgVGFibGVIZWFkZXJgIGNvbXBvbmVudCByZW5kZXJzIGluZGl2aWR1YWwgY2VsbHMgY29udGFpbmluZyBib2xkZWQgY29sdW1uIGxhYmVscywgd2l0aGluIGBUYWJsZUhlYWRgLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3RhYmxlIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBUYWJsZUhlYWRlciA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1RhYmxlSGVhZGVyJyk7XG4vKipcbiAqIFRoZSBgVGFibGVIZWFkYCBjb21wb25lbnQgcmVuZGVycyB0aGUgaGVhZGVyIHNlY3Rpb24gb2YgdGhlIGBUYWJsZWAgY29tcG9uZW50LCBjb250YWluaW5nIGNvbHVtbiBsYWJlbHMuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvdGFibGUgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IFRhYmxlSGVhZCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1RhYmxlSGVhZCcpO1xuLyoqXG4gKiBUaGUgYE51bWJlcklucHV0YCBjb21wb25lbnQgcmVuZGVycyBhIG51bWJlciBpbnB1dCBmaWVsZC4gTGlrZSBvdGhlciBpbnB1dHMsIHRoaXMgY29tcG9uZW50IHNob3VsZCBiZSB1c2VkIHdpdGhpbiBhIGBGb3JtYCB0aGF0IGhhcyBhIHN1Ym1pdCBidXR0b24uXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvbnVtYmVyLWlucHV0IERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBOdW1iZXJJbnB1dCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ051bWJlcklucHV0Jyk7XG4vKipcbiAqIFRoZSBgQm94YCBjb21wb25lbnQgcmVuZGVycyBhbiBlbXB0eSBkaXYgY29udGFpbmVyIGZvciBmaW5lIHR1bmluZyB0aGUgc3BhY2luZyBvZiBjb21wb25lbnRzLiBDb21tb25seSB1c2VkIHdpdGggdGhlIGBGbGV4YCBjb21wb25lbnQuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvYm94IERvY3N9XG4gKiAtIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vSHViU3BvdC91aS1leHRlbnNpb25zLWV4YW1wbGVzL3RyZWUvbWFpbi9mbGV4LWFuZC1ib3ggRmxleCBhbmQgQm94IEV4YW1wbGV9XG4gKi9cbmV4cG9ydCBjb25zdCBCb3ggPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdCb3gnKTtcbi8qKlxuICogVGhlIGBTdGVwSW5kaWNhdG9yYCBjb21wb25lbnQgcmVuZGVycyBhbiBpbmRpY2F0b3IgdG8gc2hvdyB0aGUgY3VycmVudCBzdGVwIG9mIGEgbXVsdGktc3RlcCBwcm9jZXNzLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3N0ZXAtaW5kaWNhdG9yIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBTdGVwSW5kaWNhdG9yID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnU3RlcEluZGljYXRvcicpO1xuLyoqXG4gKiBUaGUgYEFjY29yZGlvbmAgY29tcG9uZW50IHJlbmRlcnMgYW4gZXhwYW5kYWJsZSBhbmQgY29sbGFwc2FibGUgc2VjdGlvbiB0aGF0IGNhbiBjb250YWluIG90aGVyIGNvbXBvbmVudHMuIFRoaXMgY29tcG9uZW50IGNhbiBiZSBoZWxwZnVsIGZvciBzYXZpbmcgc3BhY2UgYW5kIGJyZWFraW5nIHVwIGV4dGVuc2lvbiBjb250ZW50LlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2FjY29yZGlvbiBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgQWNjb3JkaW9uID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQWNjb3JkaW9uJyk7XG4vKipcbiAqIFRoZSBNdWx0aVNlbGVjdCBjb21wb25lbnQgcmVuZGVycyBhIGRyb3Bkb3duIG1lbnUgc2VsZWN0IGZpZWxkIHdoZXJlIGEgdXNlciBjYW4gc2VsZWN0IG11bHRpcGxlIHZhbHVlcy4gQ29tbW9ubHkgdXNlZCB3aXRoaW4gdGhlIGBGb3JtYCBjb21wb25lbnQuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvbXVsdGktc2VsZWN0IERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBNdWx0aVNlbGVjdCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ011bHRpU2VsZWN0Jyk7XG4vKipcbiAqIFRoZSBgRmxleGAgY29tcG9uZW50IHJlbmRlcnMgYSBmbGV4IGNvbnRhaW5lciB0aGF0IGNhbiBjb250YWluIG90aGVyIGNvbXBvbmVudHMsIGFuZCBhcnJhbmdlIHRoZW0gd2l0aCBwcm9wcy4gVXNlIHRoaXMgY29tcG9uZW50IHRvIGNyZWF0ZSBhIGZsZXhpYmxlIGFuZCByZXNwb25zaXZlIGxheW91dC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9mbGV4IERvY3N9XG4gKiAtIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vSHViU3BvdC91aS1leHRlbnNpb25zLWV4YW1wbGVzL3RyZWUvbWFpbi9mbGV4LWFuZC1ib3ggRmxleCBhbmQgQm94IEV4YW1wbGV9XG4gKi9cbmV4cG9ydCBjb25zdCBGbGV4ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnRmxleCcpO1xuLyoqXG4gKiBUaGUgYERhdGVJbnB1dGAgY29tcG9uZW50IHJlbmRlcnMgYW4gaW5wdXQgZmllbGQgd2hlcmUgYSB1c2VyIGNhbiBzZWxlY3QgYSBkYXRlLiBDb21tb25seSB1c2VkIHdpdGhpbiB0aGUgYEZvcm1gIGNvbXBvbmVudC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9kYXRlLWlucHV0IERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBEYXRlSW5wdXQgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdEYXRlSW5wdXQnKTtcbi8qKlxuICogVGhlIGBDaGVja2JveGAgY29tcG9uZW50IHJlbmRlcnMgYSBzaW5nbGUgY2hlY2tib3ggaW5wdXQuIENvbW1vbmx5IHVzZWQgd2l0aGluIHRoZSBgRm9ybWAgY29tcG9uZW50LiBJZiB5b3Ugd2FudCB0byBkaXNwbGF5IG11bHRpcGxlIGNoZWNrYm94ZXMsIHlvdSBzaG91bGQgdXNlIGBUb2dnbGVHcm91cGAgaW5zdGVhZCwgYXMgaXQgY29tZXMgd2l0aCBleHRyYSBsb2dpYyBmb3IgaGFuZGxpbmcgbXVsdGlwbGUgY2hlY2tib3hlcy5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9jaGVja2JveCBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgQ2hlY2tib3ggPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdDaGVja2JveCcpO1xuLyoqXG4gKiBUaGUgYFJhZGlvQnV0dG9uYCBjb21wb25lbnQgcmVuZGVycyBhIHNpbmdsZSByYWRpbyBpbnB1dC4gQ29tbW9ubHkgdXNlZCB3aXRoaW4gdGhlIGBGb3JtYCBjb21wb25lbnQuIElmIHlvdSB3YW50IHRvIGRpc3BsYXkgbXVsdGlwbGUgcmFkaW8gaW5wdXRzLCB5b3Ugc2hvdWxkIHVzZSBgVG9nZ2xlR3JvdXBgIGluc3RlYWQsIGFzIGl0IGNvbWVzIHdpdGggZXh0cmEgbG9naWMgZm9yIGhhbmRsaW5nIG11bHRpcGxlIGlucHV0cy5cbiAqL1xuZXhwb3J0IGNvbnN0IFJhZGlvQnV0dG9uID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnUmFkaW9CdXR0b24nKTtcbi8qKlxuICogVGhlIGBMaXN0YCBjb21wb25lbnQgcmVuZGVycyBhIGxpc3Qgb2YgaXRlbXMuIFVzZSB0aGlzIGNvbXBvbmVudCB0byBkaXNwbGF5IGEgbGlzdCBvZiBpdGVtcywgc3VjaCBhcyBhIGxpc3Qgb2YgY29udGFjdHMsIHRhc2tzLCBvciBvdGhlciBkYXRhLiBBIGxpc3QgY2FuIGJlIHN0eWxlZCBhcyBhIGJ1bGxldGVkIGxpc3Qgb3IgYSBudW1iZXJlZCBsaXN0LlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2xpc3QgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IExpc3QgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdMaXN0Jyk7XG4vKipcbiAqIFRoZSBgVG9nZ2xlYCBjb21wb25lbnQgcmVuZGVycyBhIGJvb2xlYW4gdG9nZ2xlIHN3aXRjaCB0aGF0IGNhbiBiZSBjb25maWd1cmVkIHdpdGggc2l6aW5nLCBsYWJlbCBwb3NpdGlvbiwgcmVhZC1vbmx5LCBhbmQgbW9yZS5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy90b2dnbGUgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IFRvZ2dsZSA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1RvZ2dsZScpO1xuLyoqXG4gKiBUaGUgYERyb3Bkb3duYCBjb21wb25lbnQgcmVuZGVycyBhIGRyb3Bkb3duIG1lbnUgdGhhdCBjYW4gYXBwZWFyIGFzIGEgYnV0dG9uIG9yIGh5cGVybGluay4gVXNlIHRoaXMgY29tcG9uZW50IHRvIGVuYWJsZSB1c2VycyB0byBzZWxlY3QgZnJvbSBtdWx0aXBsZSBvcHRpb25zIGluIGEgY29tcGFjdCBsaXN0LlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2Ryb3Bkb3duIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBEcm9wZG93biA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlQ29tcG91bmRSZWFjdENvbXBvbmVudCgnRHJvcGRvd24nLCB7XG4gICAgY29tcG91bmRDb21wb25lbnRQcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgYERyb3Bkb3duLkJ1dHRvbkl0ZW1gIGNvbXBvbmVudCByZXByZXNlbnRzIGEgc2luZ2xlIG9wdGlvbiB3aXRoaW4gYSBgRHJvcGRvd25gIG1lbnUuIFVzZSB0aGlzIGNvbXBvbmVudCBhcyBhIGNoaWxkIG9mIHRoZSBgRHJvcGRvd25gIGNvbXBvbmVudC5cbiAgICAgICAgICpcbiAgICAgICAgICogKipMaW5rczoqKlxuICAgICAgICAgKlxuICAgICAgICAgKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2Ryb3Bkb3duIERvY3N9XG4gICAgICAgICAqL1xuICAgICAgICBCdXR0b25JdGVtOiBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdEcm9wZG93bkJ1dHRvbkl0ZW0nLCB7XG4gICAgICAgICAgICBmcmFnbWVudFByb3BzOiBbJ292ZXJsYXknXSxcbiAgICAgICAgfSksXG4gICAgfSxcbn0pO1xuLyoqXG4gKiBUaGUgUGFuZWwgY29tcG9uZW50IHJlbmRlcnMgYSBwYW5lbCBvdmVybGF5IG9uIHRoZSByaWdodCBzaWRlIG9mIHRoZSBwYWdlIGFuZCBjb250YWlucyBvdGhlciBjb21wb25lbnRzLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3BhbmVsIERvY3N9XG4gKiAtIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vSHViU3BvdC91aS1leHRlbnNpb25zLWV4YW1wbGVzL3RyZWUvbWFpbi9vdmVybGF5LWV4YW1wbGUgT3ZlcmxheSBFeGFtcGxlfVxuICogLSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL0h1YlNwb3QvdWktZXh0ZW5zaW9ucy1leGFtcGxlcy90cmVlL21haW4vZGVzaWduLXBhdHRlcm5zI3BhbmVsIERlc2lnbiBQYXR0ZXJuIEV4YW1wbGVzfVxuICovXG5leHBvcnQgY29uc3QgUGFuZWwgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdQYW5lbCcpO1xuLyoqXG4gKiBUaGUgYFBhbmVsRm9vdGVyYCBpcyBhIHN0aWNreSBmb290ZXIgY29tcG9uZW50IGRpc3BsYXllZCBhdCB0aGUgYm90dG9tIG9mIGEgYFBhbmVsYCBjb21wb25lbnQuIFVzZSB0aGlzIGNvbXBvbmVudCB0byBkaXNwbGF5IGFjdGlvbnMgb3Igb3RoZXIgY29udGVudCB0aGF0IHNob3VsZCBiZSB2aXNpYmxlIGF0IGFsbCB0aW1lcy4gSW5jbHVkZSBvbmx5IG9uZSBgUGFuZWxGb290ZXJgIGNvbXBvbmVudCBwZXIgYFBhbmVsYC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9wYW5lbC1mb290ZXIgRG9jc31cbiAqIC0ge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9IdWJTcG90L3VpLWV4dGVuc2lvbnMtZXhhbXBsZXMvdHJlZS9tYWluL292ZXJsYXktZXhhbXBsZSBPdmVybGF5IEV4YW1wbGV9XG4gKi9cbmV4cG9ydCBjb25zdCBQYW5lbEZvb3RlciA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1BhbmVsRm9vdGVyJyk7XG4vKipcbiAqIFRoZSBgUGFuZWxCb2R5YCBjb21wb25lbnQgaXMgYSBjb250YWluZXIgdGhhdCB3cmFwcyB0aGUgcGFuZWwncyBjb250ZW50IGFuZCBtYWtlcyBpdCBzY3JvbGxhYmxlLiBJbmNsdWRlIG9ubHkgb25lIGBQYW5lbEJvZHlgIGNvbXBvbmVudCBwZXIgYFBhbmVsYC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9wYW5lbC1mb290ZXIgRG9jc31cbiAqIC0ge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9IdWJTcG90L3VpLWV4dGVuc2lvbnMtZXhhbXBsZXMvdHJlZS9tYWluL292ZXJsYXktZXhhbXBsZSBPdmVybGF5IEV4YW1wbGV9XG4gKi9cbmV4cG9ydCBjb25zdCBQYW5lbEJvZHkgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdQYW5lbEJvZHknKTtcbi8qKlxuICogVGhlIGBQYW5lbFNlY3Rpb25gIGNvbXBvbmVudCBpcyBhIGNvbnRhaW5lciB0aGF0IGFkZHMgcGFkZGluZyBhbmQgYm90dG9tIG1hcmdpbiB0byBwcm92aWRlIHNwYWNpbmcgYmV0d2VlbiBjb250ZW50LiBVc2UgdGhlIGBQYW5lbFNlY3Rpb25gIGNvbXBvbmVudCB0byBzZXBhcmF0ZSBjb250ZW50IHdpdGhpbiBhIGBQYW5lbEJvZHlgLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3BhbmVsLWZvb3RlciBEb2NzfVxuICogLSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL0h1YlNwb3QvdWktZXh0ZW5zaW9ucy1leGFtcGxlcy90cmVlL21haW4vb3ZlcmxheS1leGFtcGxlIE92ZXJsYXkgRXhhbXBsZX1cbiAqL1xuZXhwb3J0IGNvbnN0IFBhbmVsU2VjdGlvbiA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1BhbmVsU2VjdGlvbicpO1xuLyoqXG4gKiBUaGUgYFN0ZXBwZXJJbnB1dGAgY29tcG9uZW50IHJlbmRlcnMgYSBudW1iZXIgaW5wdXQgZmllbGQgdGhhdCBjYW4gYmUgaW5jcmVhc2VkIG9yIGRlY3JlYXNlZCBieSBhIHNldCBudW1iZXIuIENvbW1vbmx5IHVzZWQgd2l0aGluIHRoZSBgRm9ybWAgY29tcG9uZW50LlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3N0ZXBwZXItaW5wdXQgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IFN0ZXBwZXJJbnB1dCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1N0ZXBwZXJJbnB1dCcpO1xuLyoqXG4gKiBUaGUgTW9kYWwgY29tcG9uZW50IHJlbmRlcnMgYSBwb3AtdXAgb3ZlcmxheSB0aGF0IGNhbiBjb250YWluIG90aGVyIGNvbXBvbmVudHMuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvbW9kYWwgRG9jc31cbiAqIC0ge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9IdWJTcG90L3VpLWV4dGVuc2lvbnMtZXhhbXBsZXMvdHJlZS9tYWluL292ZXJsYXktZXhhbXBsZSBPdmVybGF5IEV4YW1wbGV9XG4gKiAtIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vSHViU3BvdC91aS1leHRlbnNpb25zLWV4YW1wbGVzL3RyZWUvbWFpbi9kZXNpZ24tcGF0dGVybnMjbW9kYWwgRGVzaWduIFBhdHRlcm4gRXhhbXBsZXN9XG4gKi9cbmV4cG9ydCBjb25zdCBNb2RhbCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ01vZGFsJyk7XG4vKipcbiAqIFRoZSBgTW9kYWxCb2R5YCBjb21wb25lbnQgY29udGFpbnMgdGhlIG1haW4gY29udGVudCBvZiB0aGUgbW9kYWwuIE9uZSBgTW9kYWxCb2R5YCBpcyByZXF1aXJlZCBwZXIgYE1vZGFsYC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9tb2RhbCBEb2NzfVxuICogLSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL0h1YlNwb3QvdWktZXh0ZW5zaW9ucy1leGFtcGxlcy90cmVlL21haW4vb3ZlcmxheS1leGFtcGxlIE92ZXJsYXkgRXhhbXBsZX1cbiAqL1xuZXhwb3J0IGNvbnN0IE1vZGFsQm9keSA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ01vZGFsQm9keScpO1xuLyoqXG4gKiBUaGUgYE1vZGFsRm9vdGVyYCBjb21wb25lbnQgaXMgYW4gb3B0aW9uYWwgY29tcG9uZW50IHRvIGZvcm1hdCB0aGUgZm9vdGVyIHNlY3Rpb24gb2YgdGhlIG1vZGFsLiBVc2Ugb25lIGBNb2RhbEZvb3RlcmAgcGVyIGBNb2RhbGAuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvbW9kYWwgRG9jc31cbiAqIC0ge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9IdWJTcG90L3VpLWV4dGVuc2lvbnMtZXhhbXBsZXMvdHJlZS9tYWluL292ZXJsYXktZXhhbXBsZSBPdmVybGF5IEV4YW1wbGV9XG4gKi9cbmV4cG9ydCBjb25zdCBNb2RhbEZvb3RlciA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ01vZGFsRm9vdGVyJyk7XG4vKipcbiAqIFVzZSB0aGUgYEljb25gIGNvbXBvbmVudCB0byByZW5kZXIgYSB2aXN1YWwgaWNvbiB3aXRoaW4gb3RoZXIgY29tcG9uZW50cy4gSXQgY2FuIGdlbmVyYWxseSBiZSB1c2VkIGluc2lkZSBtb3N0IGNvbXBvbmVudHMsIGV4Y2x1ZGluZyBvbmVzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBjaGlsZCBjb21wb25lbnRzLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2ljb24gRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IEljb24gPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdJY29uJyk7XG4vKipcbiAqIFRoZSBgU3RhdHVzVGFnYCBjb21wb25lbnQgcmVuZGVycyBhIHZpc3VhbCBpbmRpY2F0b3IgdG8gZGlzcGxheSB0aGUgY3VycmVudCBzdGF0dXMgb2YgYW4gaXRlbS4gU3RhdHVzIHRhZ3MgY2FuIGJlIHN0YXRpYyBvciBjbGlja2FibGUuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvc3RhdHVzLXRhZyBEb2NzfVxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9zdGF0dXMtdGFnI3ZhcmlhbnRzIFZhcmlhbnRzfVxuICovXG5leHBvcnQgY29uc3QgU3RhdHVzVGFnID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnU3RhdHVzVGFnJyk7XG4vKipcbiAqIFRoZSBgTG9hZGluZ0J1dHRvbmAgY29tcG9uZW50IHJlbmRlcnMgYSBidXR0b24gd2l0aCBsb2FkaW5nIHN0YXRlIG9wdGlvbnMuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvbG9hZGluZy1idXR0b24gRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IExvYWRpbmdCdXR0b24gPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdMb2FkaW5nQnV0dG9uJywge1xuICAgIGZyYWdtZW50UHJvcHM6IFsnb3ZlcmxheSddLFxufSk7XG4vKipcbiAqIFRoZSBgQmFyQ2hhcnRgIGNvbXBvbmVudCByZW5kZXJzIGEgYmFyIGNoYXJ0IGZvciB2aXN1YWxpemluZyBkYXRhLiBUaGlzIHR5cGUgb2YgY2hhcnQgaXMgYmVzdCBzdWl0ZWQgZm9yIGNvbXBhcmluZyBjYXRlZ29yaWNhbCBkYXRhLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2Jhci1jaGFydCBCYXJDaGFydCBEb2NzfVxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9jaGFydHMgQ2hhcnRzIERvY3N9XG4gKiAtIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vSHViU3BvdC91aS1leHRlbnNpb25zLWV4YW1wbGVzL3RyZWUvbWFpbi9jaGFydHMtZXhhbXBsZSBDaGFydHMgRXhhbXBsZX1cbiAqL1xuZXhwb3J0IGNvbnN0IEJhckNoYXJ0ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQmFyQ2hhcnQnKTtcbi8qKlxuICogVGhlIGBMaW5lQ2hhcnRgIGNvbXBvbmVudCByZW5kZXJzIGEgbGluZSBjaGFydCBmb3IgdmlzdWFsaXppbmcgZGF0YS4gVGhpcyB0eXBlIG9mIGNoYXJ0IGlzIGJlc3Qgc3VpdGVkIGZvciB0aW1lIHNlcmllcyBwbG90cyBvciB0cmVuZCBkYXRhLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2xpbmUtY2hhcnQgTGluZUNoYXJ0IERvY3N9XG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2NoYXJ0cyBDaGFydHMgRG9jc31cbiAqIC0ge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9IdWJTcG90L3VpLWV4dGVuc2lvbnMtZXhhbXBsZXMvdHJlZS9tYWluL2NoYXJ0cy1leGFtcGxlIENoYXJ0cyBFeGFtcGxlfVxuICovXG5leHBvcnQgY29uc3QgTGluZUNoYXJ0ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnTGluZUNoYXJ0Jyk7XG4vKipcbiAqIGBUYWJzYCBhbGxvdyB5b3UgdG8gZ3JvdXAgcmVsYXRlZCBjb250ZW50IGluIGEgY29tcGFjdCBzcGFjZSwgYWxsb3dpbmcgdXNlcnMgdG8gc3dpdGNoIGJldHdlZW4gdmlld3Mgd2l0aG91dCBsZWF2aW5nIHRoZSBwYWdlLlxuICogQGV4YW1wbGVcbiAqIGBgYHRzeFxuICogPFRhYnMgZGVmYXVsdFNlbGVjdGVkPVwiMVwiPlxuICogICA8VGFiIHRhYklkPVwiMVwiPkZpcnN0IHRhYiBjb250ZW50PC9UYWI+XG4gKiAgIDxUYWIgdGFiSWQ9XCIyXCI+U2Vjb25kIHRhYiBjb250ZW50PC9UYWI+XG4gKiA8L1RhYnM+XG4gKiBgYGBcbiAqXG4gKiAqKkxpbmtzOioqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3RhYnMgRG9jdW1lbnRhdGlvbn1cbiAqIC0ge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9odWJzcG90ZGV2L3VpZS10YWJiZWQtcHJvZHVjdC1jYXJvdXNlbCBUYWJzIEV4YW1wbGV9XG4gKi9cbmV4cG9ydCBjb25zdCBUYWJzID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnVGFicycpO1xuLyoqXG4gKiBFYWNoIGBUYWJgIHJlcHJlc2VudHMgYSBzaW5nbGUgdGFiIChvciBcInZpZXdcIikgd2l0aGluIHRoZSBwYXJlbnQgYFRhYnNgIGNvbXBvbmVudC5cbiAqIEBleGFtcGxlXG4gKiBgYGB0c3hcbiAqIDxUYWJzIGRlZmF1bHRTZWxlY3RlZD1cIjFcIj5cbiAqICAgPFRhYiB0YWJJZD1cIjFcIj5GaXJzdCB0YWIgY29udGVudDwvVGFiPlxuICogICA8VGFiIHRhYklkPVwiMlwiPlNlY29uZCB0YWIgY29udGVudDwvVGFiPlxuICogPC9UYWJzPlxuICogYGBgXG4gKlxuICogKipMaW5rczoqKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy90YWJzIERvY3VtZW50YXRpb259XG4gKiAtIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vaHVic3BvdGRldi91aWUtdGFiYmVkLXByb2R1Y3QtY2Fyb3VzZWwgVGFicyBFeGFtcGxlfVxuICovXG5leHBvcnQgY29uc3QgVGFiID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnVGFiJyk7XG4vKipcbiAqIFRoZSBgSWxsdXN0cmF0aW9uYCBjb21wb25lbnQgcmVuZGVycyBhbiBpbGx1c3RyYXRpb24uXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvaWxsdXN0cmF0aW9uIElsbHVzdHJhdGlvbiBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgSWxsdXN0cmF0aW9uID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnSWxsdXN0cmF0aW9uJyk7XG4vKipcbiAqIFRoZSBgVG9vbHRpcGAgY29tcG9uZW50IHJlbmRlcnMgYSB0b29sdGlwIGZvciBhIGNvbXBvbmVudC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3Rvb2x0aXAgRG9jdW1lbnRhdGlvbn1cbiAqL1xuZXhwb3J0IGNvbnN0IFRvb2x0aXAgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdUb29sdGlwJyk7XG4vKipcbiAqIFRoZSBgU2VhcmNoSW5wdXRgIGNvbXBvbmVudCByZW5kZXJzIGEgc2VhcmNoIGlucHV0IGZpZWxkLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3NlYXJjaC1pbnB1dCBTZWFyY2hJbnB1dCBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgU2VhcmNoSW5wdXQgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdTZWFyY2hJbnB1dCcpO1xuLyoqXG4gKiBUaGUgYFRpbWVJbnB1dGAgY29tcG9uZW50IHJlbmRlcnMgYW4gaW5wdXQgZmllbGQgd2hlcmUgYSB1c2VyIGNhbiBzZWxlY3QgYSB0aW1lLiBDb21tb25seSB1c2VkIHdpdGhpbiB0aGUgYEZvcm1gIGNvbXBvbmVudC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy90aW1lLWlucHV0IERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBUaW1lSW5wdXQgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdUaW1lSW5wdXQnKTtcbi8qKlxuICogVGhlIGBDdXJyZW5jeUlucHV0YCBjb21wb25lbnQgcmVuZGVycyBhIGN1cnJlbmN5IGlucHV0IGZpZWxkIHdpdGggcHJvcGVyIGZvcm1hdHRpbmcsXG4gKiBjdXJyZW5jeSBzeW1ib2xzLCBhbmQgbG9jYWxlLXNwZWNpZmljIGRpc3BsYXkgcGF0dGVybnMuIENvbW1vbmx5IHVzZWQgd2l0aGluIHRoZSBgRm9ybWAgY29tcG9uZW50LlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2N1cnJlbmN5LWlucHV0IERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBDdXJyZW5jeUlucHV0ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQ3VycmVuY3lJbnB1dCcpO1xuLyoqXG4gKiBUaGUgYElubGluZWAgY29tcG9uZW50IHNwcmVhZHMgYWxpZ25zIGl0cyBjaGlsZHJlbiBob3Jpem9udGFsbHkgKGFsb25nIHRoZSB4LWF4aXMpLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2lubGluZSBEb2NzfVxuICovIGV4cG9ydCBjb25zdCBJbmxpbmUgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdJbmxpbmUnKTtcbi8qKlxuICogVGhlIGBBdXRvR3JpZGAgY29tcG9uZW50IHJlbmRlcnMgYSByZXNwb25zaXZlIGdyaWQgbGF5b3V0IHRoYXQgYXV0b21hdGljYWxseSBhZGp1c3RzIHRoZSBudW1iZXIgb2YgY29sdW1ucyBiYXNlZCBvbiBhdmFpbGFibGUgc3BhY2UuIFVzZSB0aGlzIGNvbXBvbmVudCB0byBjcmVhdGUgZmxleGlibGUgZ3JpZCBsYXlvdXRzIGZvciBjYXJkcywgdGlsZXMsIG9yIG90aGVyIGNvbnRlbnQuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvc2ltcGxlLWdyaWQgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IEF1dG9HcmlkID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQXV0b0dyaWQnKTtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBDUk0gQ09NUE9ORU5UU1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmV4cG9ydCBjb25zdCBDcm1Qcm9wZXJ0eUxpc3QgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdDcm1Qcm9wZXJ0eUxpc3QnKTtcbmV4cG9ydCBjb25zdCBDcm1Bc3NvY2lhdGlvblRhYmxlID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQ3JtQXNzb2NpYXRpb25UYWJsZScpO1xuZXhwb3J0IGNvbnN0IENybURhdGFIaWdobGlnaHQgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdDcm1EYXRhSGlnaGxpZ2h0Jyk7XG5leHBvcnQgY29uc3QgQ3JtUmVwb3J0ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQ3JtUmVwb3J0Jyk7XG5leHBvcnQgY29uc3QgQ3JtQXNzb2NpYXRpb25QaXZvdCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0NybUFzc29jaWF0aW9uUGl2b3QnKTtcbmV4cG9ydCBjb25zdCBDcm1Bc3NvY2lhdGlvblByb3BlcnR5TGlzdCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0NybUFzc29jaWF0aW9uUHJvcGVydHlMaXN0Jyk7XG5leHBvcnQgY29uc3QgQ3JtQXNzb2NpYXRpb25TdGFnZVRyYWNrZXIgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdDcm1Bc3NvY2lhdGlvblN0YWdlVHJhY2tlcicpO1xuZXhwb3J0IGNvbnN0IENybVNpbXBsZURlYWRsaW5lID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQ3JtU2ltcGxlRGVhZGxpbmUnKTtcbmV4cG9ydCBjb25zdCBDcm1TdGFnZVRyYWNrZXIgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdDcm1TdGFnZVRyYWNrZXInKTtcbmV4cG9ydCBjb25zdCBDcm1TdGF0aXN0aWNzID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQ3JtU3RhdGlzdGljcycpO1xuZXhwb3J0IGNvbnN0IENybUFjdGlvbkJ1dHRvbiA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0NybUFjdGlvbkJ1dHRvbicpO1xuZXhwb3J0IGNvbnN0IENybUFjdGlvbkxpbmsgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdDcm1BY3Rpb25MaW5rJyk7XG5leHBvcnQgY29uc3QgQ3JtQ2FyZEFjdGlvbnMgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdDcm1DYXJkQWN0aW9ucycpO1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIEFQUCBIT01FIENPTVBPTkVOVFNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vKipcbiAqIFRoZSBgSGVhZGVyQWN0aW9uc2AgY29tcG9uZW50IHJlbmRlcnMgYSBjb250YWluZXIgZm9yIGFjdGlvbiBidXR0b25zIGluIHRoZSBhcHAgaG9tZSBoZWFkZXIuIEl0IGFjY2VwdHMgYFByaW1hcnlIZWFkZXJBY3Rpb25CdXR0b25gIGFuZCBgU2Vjb25kYXJ5SGVhZGVyQWN0aW9uQnV0dG9uYCBhcyBjaGlsZHJlbi5cbiAqXG4gKi9cbmV4cG9ydCBjb25zdCBIZWFkZXJBY3Rpb25zID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnSGVhZGVyQWN0aW9ucycpO1xuLyoqXG4gKiBUaGUgYFByaW1hcnlIZWFkZXJBY3Rpb25CdXR0b25gIGNvbXBvbmVudCByZW5kZXJzIGEgcHJpbWFyeSBhY3Rpb24gYnV0dG9uIGluIHRoZSBhcHAgaG9tZSBoZWFkZXIuIFRoaXMgYnV0dG9uIGlzIHN0eWxlZCBhcyB0aGUgbWFpbiBjYWxsLXRvLWFjdGlvbiBhbmQgb25seSBvbmUgc2hvdWxkIGJlIHVzZWQgcGVyIGBIZWFkZXJBY3Rpb25zYCBjb250YWluZXIuXG4gKlxuICovXG5leHBvcnQgY29uc3QgUHJpbWFyeUhlYWRlckFjdGlvbkJ1dHRvbiA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1ByaW1hcnlIZWFkZXJBY3Rpb25CdXR0b24nLCB7XG4gICAgZnJhZ21lbnRQcm9wczogWydvdmVybGF5J10sXG59KTtcbi8qKlxuICogVGhlIGBTZWNvbmRhcnlIZWFkZXJBY3Rpb25CdXR0b25gIGNvbXBvbmVudCByZW5kZXJzIGEgc2Vjb25kYXJ5IGFjdGlvbiBidXR0b24gaW4gdGhlIGFwcCBob21lIGhlYWRlci4gTXVsdGlwbGUgc2Vjb25kYXJ5IGFjdGlvbnMgY2FuIGJlIHVzZWQgYW5kIHRoZXkgd2lsbCBiZSBncm91cGVkIGFwcHJvcHJpYXRlbHkgaW4gdGhlIGhlYWRlci5cbiAqXG4gKi9cbmV4cG9ydCBjb25zdCBTZWNvbmRhcnlIZWFkZXJBY3Rpb25CdXR0b24gPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdTZWNvbmRhcnlIZWFkZXJBY3Rpb25CdXR0b24nLCB7XG4gICAgZnJhZ21lbnRQcm9wczogWydvdmVybGF5J10sXG59KTtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBFWFBFUklNRU5UQUwgQ09NUE9ORU5UU1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8qKlxuICogQGV4cGVyaW1lbnRhbCBUaGlzIGNvbXBvbmVudCBpcyBleHBlcmltZW50YWwuIEF2b2lkIHVzaW5nIGl0IGluIHByb2R1Y3Rpb24gZHVlIHRvIHBvdGVudGlhbCBicmVha2luZyBjaGFuZ2VzLiBZb3VyIGZlZWRiYWNrIGlzIHZhbHVhYmxlIGZvciBpbXByb3ZlbWVudHMuIFN0YXkgdHVuZWQgZm9yIHVwZGF0ZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBJZnJhbWUgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdJZnJhbWUnKTtcbi8qKlxuICogQGV4cGVyaW1lbnRhbCBUaGlzIGNvbXBvbmVudCBpcyBleHBlcmltZW50YWwuIEF2b2lkIHVzaW5nIGl0IGluIHByb2R1Y3Rpb24gZHVlIHRvIHBvdGVudGlhbCBicmVha2luZyBjaGFuZ2VzLiBZb3VyIGZlZWRiYWNrIGlzIHZhbHVhYmxlIGZvciBpbXByb3ZlbWVudHMuIFN0YXkgdHVuZWQgZm9yIHVwZGF0ZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBNZWRpYU9iamVjdCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ01lZGlhT2JqZWN0Jywge1xuICAgIGZyYWdtZW50UHJvcHM6IFsnaXRlbVJpZ2h0JywgJ2l0ZW1MZWZ0J10sXG59KTtcbi8qKlxuICogQGV4cGVyaW1lbnRhbCBUaGlzIGNvbXBvbmVudCBpcyBleHBlcmltZW50YWwuIEF2b2lkIHVzaW5nIGl0IGluIHByb2R1Y3Rpb24gZHVlIHRvIHBvdGVudGlhbCBicmVha2luZyBjaGFuZ2VzLiBZb3VyIGZlZWRiYWNrIGlzIHZhbHVhYmxlIGZvciBpbXByb3ZlbWVudHMuIFN0YXkgdHVuZWQgZm9yIHVwZGF0ZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBTdGFjazIgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdTdGFjazInKTtcbi8qKlxuICogQGV4cGVyaW1lbnRhbCBUaGlzIGNvbXBvbmVudCBpcyBleHBlcmltZW50YWwuIEF2b2lkIHVzaW5nIGl0IGluIHByb2R1Y3Rpb24gZHVlIHRvIHBvdGVudGlhbCBicmVha2luZyBjaGFuZ2VzLiBZb3VyIGZlZWRiYWNrIGlzIHZhbHVhYmxlIGZvciBpbXByb3ZlbWVudHMuIFN0YXkgdHVuZWQgZm9yIHVwZGF0ZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBDZW50ZXIgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdDZW50ZXInKTtcbi8qKlxuICogQGV4cGVyaW1lbnRhbCBUaGlzIGNvbXBvbmVudCBpcyBleHBlcmltZW50YWwuIEF2b2lkIHVzaW5nIGl0IGluIHByb2R1Y3Rpb24gZHVlIHRvIHBvdGVudGlhbCBicmVha2luZyBjaGFuZ2VzLiBZb3VyIGZlZWRiYWNrIGlzIHZhbHVhYmxlIGZvciBpbXByb3ZlbWVudHMuIFN0YXkgdHVuZWQgZm9yIHVwZGF0ZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBHcmlkID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnR3JpZCcpO1xuLyoqXG4gKiBAZXhwZXJpbWVudGFsIFRoaXMgY29tcG9uZW50IGlzIGV4cGVyaW1lbnRhbC4gQXZvaWQgdXNpbmcgaXQgaW4gcHJvZHVjdGlvbiBkdWUgdG8gcG90ZW50aWFsIGJyZWFraW5nIGNoYW5nZXMuIFlvdXIgZmVlZGJhY2sgaXMgdmFsdWFibGUgZm9yIGltcHJvdmVtZW50cy4gU3RheSB0dW5lZCBmb3IgdXBkYXRlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IEdyaWRJdGVtID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnR3JpZEl0ZW0nKTtcbi8qKlxuICogQGV4cGVyaW1lbnRhbCBUaGlzIGNvbXBvbmVudCBpcyBleHBlcmltZW50YWwuIEF2b2lkIHVzaW5nIGl0IGluIHByb2R1Y3Rpb24gZHVlIHRvIHBvdGVudGlhbCBicmVha2luZyBjaGFuZ2VzLiBZb3VyIGZlZWRiYWNrIGlzIHZhbHVhYmxlIGZvciBpbXByb3ZlbWVudHMuIFN0YXkgdHVuZWQgZm9yIHVwZGF0ZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBTZXR0aW5nc1ZpZXcgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdTZXR0aW5nc1ZpZXcnKTtcbi8qKlxuICogVGhlIGBFeHBhbmRhYmxlVGV4dGAgY29tcG9uZW50IHJlbmRlcnMgYSB0ZXh0IHRoYXQgY2FuIGJlIGV4cGFuZGVkIG9yIGNvbGxhcHNlZCBiYXNlZCBvbiBhIG1heGltdW0gaGVpZ2h0LlxuICpcbiAqIEBleHBlcmltZW50YWwgVGhpcyBjb21wb25lbnQgaXMgZXhwZXJpbWVudGFsLiBBdm9pZCB1c2luZyBpdCBpbiBwcm9kdWN0aW9uIGR1ZSB0byBwb3RlbnRpYWwgYnJlYWtpbmcgY2hhbmdlcy4gWW91ciBmZWVkYmFjayBpcyB2YWx1YWJsZSBmb3IgaW1wcm92ZW1lbnRzLiBTdGF5IHR1bmVkIGZvciB1cGRhdGVzLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2V4cGFuZGFibGUtdGV4dCBFeHBhbmRhYmxlVGV4dCBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgRXhwYW5kYWJsZVRleHQgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdFeHBhbmRhYmxlVGV4dCcpO1xuLyoqXG4gKiBUaGUgYFBvcG92ZXJgIGNvbXBvbmVudCByZW5kZXJzIGEgcG9wb3ZlciBvdmVybGF5IHRoYXQgY2FuIGNvbnRhaW4gb3RoZXIgY29tcG9uZW50cy5cbiAqXG4gKiBAZXhwZXJpbWVudGFsIFRoaXMgY29tcG9uZW50IGlzIGV4cGVyaW1lbnRhbC4gQXZvaWQgdXNpbmcgaXQgaW4gcHJvZHVjdGlvbiBkdWUgdG8gcG90ZW50aWFsIGJyZWFraW5nIGNoYW5nZXMuIFlvdXIgZmVlZGJhY2sgaXMgdmFsdWFibGUgZm9yIGltcHJvdmVtZW50cy4gU3RheSB0dW5lZCBmb3IgdXBkYXRlcy5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9wb3BvdmVyIFBvcG92ZXIgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IFBvcG92ZXIgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdQb3BvdmVyJyk7XG4vKipcbiAqIEBleHBlcmltZW50YWwgVGhpcyBjb21wb25lbnQgaXMgZXhwZXJpbWVudGFsLiBBdm9pZCB1c2luZyBpdCBpbiBwcm9kdWN0aW9uIGR1ZSB0byBwb3RlbnRpYWwgYnJlYWtpbmcgY2hhbmdlcy4gWW91ciBmZWVkYmFjayBpcyB2YWx1YWJsZSBmb3IgaW1wcm92ZW1lbnRzLiBTdGF5IHR1bmVkIGZvciB1cGRhdGVzLlxuICovXG5leHBvcnQgY29uc3QgRmlsZUlucHV0ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnRmlsZUlucHV0Jyk7XG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuY29uc3QgTW9ja3NDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcbi8qKlxuICogQ3JlYXRlcyBhIG1vY2stYXdhcmUgaG9vayBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIG1vY2sgdGhlIG9yaWdpbmFsIGhvb2sgZnVuY3Rpb24uXG4gKiBUaGUgbW9jay1hd2FyZSBob29rIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIHRoZSBtb2NrZWQgaG9vayBmdW5jdGlvbiBpZiBhIG1vY2sgaXMgZm91bmQsIG90aGVyd2lzZSBpdCB3aWxsIHJldHVybiB0aGUgb3JpZ2luYWwgaG9vayBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0gaG9va05hbWUgVGhlIG5hbWUgb2YgdGhlIGhvb2sgdG8gbW9jayB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSBrZXkgaW4gdGhlIE1vY2tzIGludGVyZmFjZVxuICogQHBhcmFtIG9yaWdpbmFsSG9va0Z1bmN0aW9uIFRoZSBvcmlnaW5hbCBob29rIGZ1bmN0aW9uIHRvIGNhbGwgaWYgbm8gbW9jayBpcyBmb3VuZFxuICogQHJldHVybnMgVGhlIG1vY2tlZCBob29rIGZ1bmN0aW9uIG9yIHRoZSBvcmlnaW5hbCBob29rIGZ1bmN0aW9uIGlmIG5vIG1vY2sgaXMgZm91bmRcbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZU1vY2tBd2FyZUhvb2sgPSAoaG9va05hbWUsIG9yaWdpbmFsSG9va0Z1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgdXNlV3JhcHBlciA9ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vY2tzID0gdXNlTW9ja3NDb250ZXh0KCk7XG4gICAgICAgIGlmICghbW9ja3MpIHtcbiAgICAgICAgICAgIC8vIElmIG5vIG1vY2tzIGFyZSBwcm92aWRlZCwgY2FsbCB0aGUgb3JpZ2luYWwgaG9vayBmdW5jdGlvblxuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsSG9va0Z1bmN0aW9uKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdoZW4gYSBtb2NrIGlzIHByb3ZpZGVkIGJ5IHRoZSB0ZXN0aW5nIHV0aWxpdGllcyAodmlhIDxNb2Nrc0NvbnRleHRQcm92aWRlcj4pLCByZXR1cm4gdGhlIG1vY2tlZCBob29rIGZ1bmN0aW9uXG4gICAgICAgIGNvbnN0IG1vY2tIb29rID0gbW9ja3NbaG9va05hbWVdO1xuICAgICAgICBpZiAoIW1vY2tIb29rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYElsbGVnYWwgU3RhdGU6IE1vY2sgZm9yIGhvb2sgJHtob29rTmFtZX0gbm90IGZvdW5kLmApO1xuICAgICAgICB9XG4gICAgICAgIC8vIENhbGwgdGhlIG1vY2tlZCBob29rIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgYXJndW1lbnRzIGFzIHRoZSBvcmlnaW5hbCBob29rIGZ1bmN0aW9uIGFuZCByZXR1cm4gdGhlIHJlc3VsdFxuICAgICAgICByZXR1cm4gbW9ja0hvb2soLi4uYXJncyk7XG4gICAgfTtcbiAgICByZXR1cm4gdXNlV3JhcHBlcjtcbn07XG4vKipcbiAqIEEgaG9vayB0aGF0IHByb3ZpZGVzIGFjY2VzcyB0byB0aGUgTW9ja3MgY29udGV4dC5cbiAqIFJldHVybnMgdGhlIG1vY2tzIG9iamVjdCBpZiBpbnNpZGUgYSBNb2Nrc0NvbnRleHRQcm92aWRlciwgb3RoZXJ3aXNlIHJldHVybnMgbnVsbC5cbiAqXG4gKiBAcmV0dXJucyBUaGUgbW9ja3Mgb2JqZWN0IG9yIG51bGwgaWYgbm90IGluIGEgdGVzdCBlbnZpcm9ubWVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1vY2tzQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdXNlQ29udGV4dChNb2Nrc0NvbnRleHQpO1xufVxuLyoqXG4gKiBBIFJlYWN0IGNvbXBvbmVudCB0aGF0IHByb3ZpZGVzIHRoZSBNb2NrcyBjb250ZXh0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcHJvdmlkZSBtb2NrcyB0byB0aGUgbW9jay1hd2FyZSBob29rIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcGFyYW0gY2hpbGRyZW4gVGhlIGNoaWxkcmVuIHRvIHJlbmRlci5cbiAqIEByZXR1cm5zIFRoZSBjaGlsZHJlbiB3cmFwcGVkIGluIHRoZSBNb2NrcyBjb250ZXh0IHByb3ZpZGVyLlxuICovXG5leHBvcnQgY29uc3QgTW9ja3NDb250ZXh0UHJvdmlkZXIgPSBNb2Nrc0NvbnRleHQuUHJvdmlkZXI7XG4iLCIvLyEgbW9tZW50LmpzXG4vLyEgdmVyc2lvbiA6IDIuMzAuMVxuLy8hIGF1dGhvcnMgOiBUaW0gV29vZCwgSXNrcmVuIENoZXJuZXYsIE1vbWVudC5qcyBjb250cmlidXRvcnNcbi8vISBsaWNlbnNlIDogTUlUXG4vLyEgbW9tZW50anMuY29tXG5cbnZhciBob29rQ2FsbGJhY2s7XG5cbmZ1bmN0aW9uIGhvb2tzKCkge1xuICAgIHJldHVybiBob29rQ2FsbGJhY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbn1cblxuLy8gVGhpcyBpcyBkb25lIHRvIHJlZ2lzdGVyIHRoZSBtZXRob2QgY2FsbGVkIHdpdGggbW9tZW50KClcbi8vIHdpdGhvdXQgY3JlYXRpbmcgY2lyY3VsYXIgZGVwZW5kZW5jaWVzLlxuZnVuY3Rpb24gc2V0SG9va0NhbGxiYWNrKGNhbGxiYWNrKSB7XG4gICAgaG9va0NhbGxiYWNrID0gY2FsbGJhY2s7XG59XG5cbmZ1bmN0aW9uIGlzQXJyYXkoaW5wdXQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICBpbnB1dCBpbnN0YW5jZW9mIEFycmF5IHx8XG4gICAgICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbnB1dCkgPT09ICdbb2JqZWN0IEFycmF5XSdcbiAgICApO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdChpbnB1dCkge1xuICAgIC8vIElFOCB3aWxsIHRyZWF0IHVuZGVmaW5lZCBhbmQgbnVsbCBhcyBvYmplY3QgaWYgaXQgd2Fzbid0IGZvclxuICAgIC8vIGlucHV0ICE9IG51bGxcbiAgICByZXR1cm4gKFxuICAgICAgICBpbnB1dCAhPSBudWxsICYmXG4gICAgICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbnB1dCkgPT09ICdbb2JqZWN0IE9iamVjdF0nXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gaGFzT3duUHJvcChhLCBiKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhLCBiKTtcbn1cblxuZnVuY3Rpb24gaXNPYmplY3RFbXB0eShvYmopIHtcbiAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaikubGVuZ3RoID09PSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBrO1xuICAgICAgICBmb3IgKGsgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcChvYmosIGspKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQgPT09IHZvaWQgMDtcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIoaW5wdXQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICB0eXBlb2YgaW5wdXQgPT09ICdudW1iZXInIHx8XG4gICAgICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbnB1dCkgPT09ICdbb2JqZWN0IE51bWJlcl0nXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gaXNEYXRlKGlucHV0KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgaW5wdXQgaW5zdGFuY2VvZiBEYXRlIHx8XG4gICAgICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbnB1dCkgPT09ICdbb2JqZWN0IERhdGVdJ1xuICAgICk7XG59XG5cbmZ1bmN0aW9uIG1hcChhcnIsIGZuKSB7XG4gICAgdmFyIHJlcyA9IFtdLFxuICAgICAgICBpLFxuICAgICAgICBhcnJMZW4gPSBhcnIubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBhcnJMZW47ICsraSkge1xuICAgICAgICByZXMucHVzaChmbihhcnJbaV0sIGkpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuZnVuY3Rpb24gZXh0ZW5kKGEsIGIpIHtcbiAgICBmb3IgKHZhciBpIGluIGIpIHtcbiAgICAgICAgaWYgKGhhc093blByb3AoYiwgaSkpIHtcbiAgICAgICAgICAgIGFbaV0gPSBiW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhhc093blByb3AoYiwgJ3RvU3RyaW5nJykpIHtcbiAgICAgICAgYS50b1N0cmluZyA9IGIudG9TdHJpbmc7XG4gICAgfVxuXG4gICAgaWYgKGhhc093blByb3AoYiwgJ3ZhbHVlT2YnKSkge1xuICAgICAgICBhLnZhbHVlT2YgPSBiLnZhbHVlT2Y7XG4gICAgfVxuXG4gICAgcmV0dXJuIGE7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVVUQyhpbnB1dCwgZm9ybWF0LCBsb2NhbGUsIHN0cmljdCkge1xuICAgIHJldHVybiBjcmVhdGVMb2NhbE9yVVRDKGlucHV0LCBmb3JtYXQsIGxvY2FsZSwgc3RyaWN0LCB0cnVlKS51dGMoKTtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdFBhcnNpbmdGbGFncygpIHtcbiAgICAvLyBXZSBuZWVkIHRvIGRlZXAgY2xvbmUgdGhpcyBvYmplY3QuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZW1wdHk6IGZhbHNlLFxuICAgICAgICB1bnVzZWRUb2tlbnM6IFtdLFxuICAgICAgICB1bnVzZWRJbnB1dDogW10sXG4gICAgICAgIG92ZXJmbG93OiAtMixcbiAgICAgICAgY2hhcnNMZWZ0T3ZlcjogMCxcbiAgICAgICAgbnVsbElucHV0OiBmYWxzZSxcbiAgICAgICAgaW52YWxpZEVyYTogbnVsbCxcbiAgICAgICAgaW52YWxpZE1vbnRoOiBudWxsLFxuICAgICAgICBpbnZhbGlkRm9ybWF0OiBmYWxzZSxcbiAgICAgICAgdXNlckludmFsaWRhdGVkOiBmYWxzZSxcbiAgICAgICAgaXNvOiBmYWxzZSxcbiAgICAgICAgcGFyc2VkRGF0ZVBhcnRzOiBbXSxcbiAgICAgICAgZXJhOiBudWxsLFxuICAgICAgICBtZXJpZGllbTogbnVsbCxcbiAgICAgICAgcmZjMjgyMjogZmFsc2UsXG4gICAgICAgIHdlZWtkYXlNaXNtYXRjaDogZmFsc2UsXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0UGFyc2luZ0ZsYWdzKG0pIHtcbiAgICBpZiAobS5fcGYgPT0gbnVsbCkge1xuICAgICAgICBtLl9wZiA9IGRlZmF1bHRQYXJzaW5nRmxhZ3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIG0uX3BmO1xufVxuXG52YXIgc29tZTtcbmlmIChBcnJheS5wcm90b3R5cGUuc29tZSkge1xuICAgIHNvbWUgPSBBcnJheS5wcm90b3R5cGUuc29tZTtcbn0gZWxzZSB7XG4gICAgc29tZSA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICAgICAgdmFyIHQgPSBPYmplY3QodGhpcyksXG4gICAgICAgICAgICBsZW4gPSB0Lmxlbmd0aCA+Pj4gMCxcbiAgICAgICAgICAgIGk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSBpbiB0ICYmIGZ1bi5jYWxsKHRoaXMsIHRbaV0sIGksIHQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZChtKSB7XG4gICAgdmFyIGZsYWdzID0gbnVsbCxcbiAgICAgICAgcGFyc2VkUGFydHMgPSBmYWxzZSxcbiAgICAgICAgaXNOb3dWYWxpZCA9IG0uX2QgJiYgIWlzTmFOKG0uX2QuZ2V0VGltZSgpKTtcbiAgICBpZiAoaXNOb3dWYWxpZCkge1xuICAgICAgICBmbGFncyA9IGdldFBhcnNpbmdGbGFncyhtKTtcbiAgICAgICAgcGFyc2VkUGFydHMgPSBzb21lLmNhbGwoZmxhZ3MucGFyc2VkRGF0ZVBhcnRzLCBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgcmV0dXJuIGkgIT0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgICAgIGlzTm93VmFsaWQgPVxuICAgICAgICAgICAgZmxhZ3Mub3ZlcmZsb3cgPCAwICYmXG4gICAgICAgICAgICAhZmxhZ3MuZW1wdHkgJiZcbiAgICAgICAgICAgICFmbGFncy5pbnZhbGlkRXJhICYmXG4gICAgICAgICAgICAhZmxhZ3MuaW52YWxpZE1vbnRoICYmXG4gICAgICAgICAgICAhZmxhZ3MuaW52YWxpZFdlZWtkYXkgJiZcbiAgICAgICAgICAgICFmbGFncy53ZWVrZGF5TWlzbWF0Y2ggJiZcbiAgICAgICAgICAgICFmbGFncy5udWxsSW5wdXQgJiZcbiAgICAgICAgICAgICFmbGFncy5pbnZhbGlkRm9ybWF0ICYmXG4gICAgICAgICAgICAhZmxhZ3MudXNlckludmFsaWRhdGVkICYmXG4gICAgICAgICAgICAoIWZsYWdzLm1lcmlkaWVtIHx8IChmbGFncy5tZXJpZGllbSAmJiBwYXJzZWRQYXJ0cykpO1xuICAgICAgICBpZiAobS5fc3RyaWN0KSB7XG4gICAgICAgICAgICBpc05vd1ZhbGlkID1cbiAgICAgICAgICAgICAgICBpc05vd1ZhbGlkICYmXG4gICAgICAgICAgICAgICAgZmxhZ3MuY2hhcnNMZWZ0T3ZlciA9PT0gMCAmJlxuICAgICAgICAgICAgICAgIGZsYWdzLnVudXNlZFRva2Vucy5sZW5ndGggPT09IDAgJiZcbiAgICAgICAgICAgICAgICBmbGFncy5iaWdIb3VyID09PSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKE9iamVjdC5pc0Zyb3plbiA9PSBudWxsIHx8ICFPYmplY3QuaXNGcm96ZW4obSkpIHtcbiAgICAgICAgbS5faXNWYWxpZCA9IGlzTm93VmFsaWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGlzTm93VmFsaWQ7XG4gICAgfVxuICAgIHJldHVybiBtLl9pc1ZhbGlkO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbnZhbGlkKGZsYWdzKSB7XG4gICAgdmFyIG0gPSBjcmVhdGVVVEMoTmFOKTtcbiAgICBpZiAoZmxhZ3MgIT0gbnVsbCkge1xuICAgICAgICBleHRlbmQoZ2V0UGFyc2luZ0ZsYWdzKG0pLCBmbGFncyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKG0pLnVzZXJJbnZhbGlkYXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG07XG59XG5cbi8vIFBsdWdpbnMgdGhhdCBhZGQgcHJvcGVydGllcyBzaG91bGQgYWxzbyBhZGQgdGhlIGtleSBoZXJlIChudWxsIHZhbHVlKSxcbi8vIHNvIHdlIGNhbiBwcm9wZXJseSBjbG9uZSBvdXJzZWx2ZXMuXG52YXIgbW9tZW50UHJvcGVydGllcyA9IChob29rcy5tb21lbnRQcm9wZXJ0aWVzID0gW10pLFxuICAgIHVwZGF0ZUluUHJvZ3Jlc3MgPSBmYWxzZTtcblxuZnVuY3Rpb24gY29weUNvbmZpZyh0bywgZnJvbSkge1xuICAgIHZhciBpLFxuICAgICAgICBwcm9wLFxuICAgICAgICB2YWwsXG4gICAgICAgIG1vbWVudFByb3BlcnRpZXNMZW4gPSBtb21lbnRQcm9wZXJ0aWVzLmxlbmd0aDtcblxuICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5faXNBTW9tZW50T2JqZWN0KSkge1xuICAgICAgICB0by5faXNBTW9tZW50T2JqZWN0ID0gZnJvbS5faXNBTW9tZW50T2JqZWN0O1xuICAgIH1cbiAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX2kpKSB7XG4gICAgICAgIHRvLl9pID0gZnJvbS5faTtcbiAgICB9XG4gICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl9mKSkge1xuICAgICAgICB0by5fZiA9IGZyb20uX2Y7XG4gICAgfVxuICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5fbCkpIHtcbiAgICAgICAgdG8uX2wgPSBmcm9tLl9sO1xuICAgIH1cbiAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX3N0cmljdCkpIHtcbiAgICAgICAgdG8uX3N0cmljdCA9IGZyb20uX3N0cmljdDtcbiAgICB9XG4gICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl90em0pKSB7XG4gICAgICAgIHRvLl90em0gPSBmcm9tLl90em07XG4gICAgfVxuICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5faXNVVEMpKSB7XG4gICAgICAgIHRvLl9pc1VUQyA9IGZyb20uX2lzVVRDO1xuICAgIH1cbiAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX29mZnNldCkpIHtcbiAgICAgICAgdG8uX29mZnNldCA9IGZyb20uX29mZnNldDtcbiAgICB9XG4gICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl9wZikpIHtcbiAgICAgICAgdG8uX3BmID0gZ2V0UGFyc2luZ0ZsYWdzKGZyb20pO1xuICAgIH1cbiAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX2xvY2FsZSkpIHtcbiAgICAgICAgdG8uX2xvY2FsZSA9IGZyb20uX2xvY2FsZTtcbiAgICB9XG5cbiAgICBpZiAobW9tZW50UHJvcGVydGllc0xlbiA+IDApIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG1vbWVudFByb3BlcnRpZXNMZW47IGkrKykge1xuICAgICAgICAgICAgcHJvcCA9IG1vbWVudFByb3BlcnRpZXNbaV07XG4gICAgICAgICAgICB2YWwgPSBmcm9tW3Byb3BdO1xuICAgICAgICAgICAgaWYgKCFpc1VuZGVmaW5lZCh2YWwpKSB7XG4gICAgICAgICAgICAgICAgdG9bcHJvcF0gPSB2YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdG87XG59XG5cbi8vIE1vbWVudCBwcm90b3R5cGUgb2JqZWN0XG5mdW5jdGlvbiBNb21lbnQoY29uZmlnKSB7XG4gICAgY29weUNvbmZpZyh0aGlzLCBjb25maWcpO1xuICAgIHRoaXMuX2QgPSBuZXcgRGF0ZShjb25maWcuX2QgIT0gbnVsbCA/IGNvbmZpZy5fZC5nZXRUaW1lKCkgOiBOYU4pO1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgdGhpcy5fZCA9IG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICAgIC8vIFByZXZlbnQgaW5maW5pdGUgbG9vcCBpbiBjYXNlIHVwZGF0ZU9mZnNldCBjcmVhdGVzIG5ldyBtb21lbnRcbiAgICAvLyBvYmplY3RzLlxuICAgIGlmICh1cGRhdGVJblByb2dyZXNzID09PSBmYWxzZSkge1xuICAgICAgICB1cGRhdGVJblByb2dyZXNzID0gdHJ1ZTtcbiAgICAgICAgaG9va3MudXBkYXRlT2Zmc2V0KHRoaXMpO1xuICAgICAgICB1cGRhdGVJblByb2dyZXNzID0gZmFsc2U7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc01vbWVudChvYmopIHtcbiAgICByZXR1cm4gKFxuICAgICAgICBvYmogaW5zdGFuY2VvZiBNb21lbnQgfHwgKG9iaiAhPSBudWxsICYmIG9iai5faXNBTW9tZW50T2JqZWN0ICE9IG51bGwpXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gd2Fybihtc2cpIHtcbiAgICBpZiAoXG4gICAgICAgIGhvb2tzLnN1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5ncyA9PT0gZmFsc2UgJiZcbiAgICAgICAgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIGNvbnNvbGUud2FyblxuICAgICkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0RlcHJlY2F0aW9uIHdhcm5pbmc6ICcgKyBtc2cpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZGVwcmVjYXRlKG1zZywgZm4pIHtcbiAgICB2YXIgZmlyc3RUaW1lID0gdHJ1ZTtcblxuICAgIHJldHVybiBleHRlbmQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaG9va3MuZGVwcmVjYXRpb25IYW5kbGVyICE9IG51bGwpIHtcbiAgICAgICAgICAgIGhvb2tzLmRlcHJlY2F0aW9uSGFuZGxlcihudWxsLCBtc2cpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmaXJzdFRpbWUpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW10sXG4gICAgICAgICAgICAgICAgYXJnLFxuICAgICAgICAgICAgICAgIGksXG4gICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgIGFyZ0xlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYXJnTGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhcmcgPSAnJztcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1tpXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJnICs9ICdcXG5bJyArIGkgKyAnXSAnO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGtleSBpbiBhcmd1bWVudHNbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wKGFyZ3VtZW50c1swXSwga2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZyArPSBrZXkgKyAnOiAnICsgYXJndW1lbnRzWzBdW2tleV0gKyAnLCAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGFyZyA9IGFyZy5zbGljZSgwLCAtMik7IC8vIFJlbW92ZSB0cmFpbGluZyBjb21tYSBhbmQgc3BhY2VcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhcmcgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFyZ3MucHVzaChhcmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2FybihcbiAgICAgICAgICAgICAgICBtc2cgK1xuICAgICAgICAgICAgICAgICAgICAnXFxuQXJndW1lbnRzOiAnICtcbiAgICAgICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJncykuam9pbignJykgK1xuICAgICAgICAgICAgICAgICAgICAnXFxuJyArXG4gICAgICAgICAgICAgICAgICAgIG5ldyBFcnJvcigpLnN0YWNrXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZmlyc3RUaW1lID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfSwgZm4pO1xufVxuXG52YXIgZGVwcmVjYXRpb25zID0ge307XG5cbmZ1bmN0aW9uIGRlcHJlY2F0ZVNpbXBsZShuYW1lLCBtc2cpIHtcbiAgICBpZiAoaG9va3MuZGVwcmVjYXRpb25IYW5kbGVyICE9IG51bGwpIHtcbiAgICAgICAgaG9va3MuZGVwcmVjYXRpb25IYW5kbGVyKG5hbWUsIG1zZyk7XG4gICAgfVxuICAgIGlmICghZGVwcmVjYXRpb25zW25hbWVdKSB7XG4gICAgICAgIHdhcm4obXNnKTtcbiAgICAgICAgZGVwcmVjYXRpb25zW25hbWVdID0gdHJ1ZTtcbiAgICB9XG59XG5cbmhvb2tzLnN1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5ncyA9IGZhbHNlO1xuaG9va3MuZGVwcmVjYXRpb25IYW5kbGVyID0gbnVsbDtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihpbnB1dCkge1xuICAgIHJldHVybiAoXG4gICAgICAgICh0eXBlb2YgRnVuY3Rpb24gIT09ICd1bmRlZmluZWQnICYmIGlucHV0IGluc3RhbmNlb2YgRnVuY3Rpb24pIHx8XG4gICAgICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbnB1dCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSdcbiAgICApO1xufVxuXG5mdW5jdGlvbiBzZXQoY29uZmlnKSB7XG4gICAgdmFyIHByb3AsIGk7XG4gICAgZm9yIChpIGluIGNvbmZpZykge1xuICAgICAgICBpZiAoaGFzT3duUHJvcChjb25maWcsIGkpKSB7XG4gICAgICAgICAgICBwcm9wID0gY29uZmlnW2ldO1xuICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24ocHJvcCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2ldID0gcHJvcDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpc1snXycgKyBpXSA9IHByb3A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgIC8vIExlbmllbnQgb3JkaW5hbCBwYXJzaW5nIGFjY2VwdHMganVzdCBhIG51bWJlciBpbiBhZGRpdGlvbiB0b1xuICAgIC8vIG51bWJlciArIChwb3NzaWJseSkgc3R1ZmYgY29taW5nIGZyb20gX2RheU9mTW9udGhPcmRpbmFsUGFyc2UuXG4gICAgLy8gVE9ETzogUmVtb3ZlIFwib3JkaW5hbFBhcnNlXCIgZmFsbGJhY2sgaW4gbmV4dCBtYWpvciByZWxlYXNlLlxuICAgIHRoaXMuX2RheU9mTW9udGhPcmRpbmFsUGFyc2VMZW5pZW50ID0gbmV3IFJlZ0V4cChcbiAgICAgICAgKHRoaXMuX2RheU9mTW9udGhPcmRpbmFsUGFyc2Uuc291cmNlIHx8IHRoaXMuX29yZGluYWxQYXJzZS5zb3VyY2UpICtcbiAgICAgICAgICAgICd8JyArXG4gICAgICAgICAgICAvXFxkezEsMn0vLnNvdXJjZVxuICAgICk7XG59XG5cbmZ1bmN0aW9uIG1lcmdlQ29uZmlncyhwYXJlbnRDb25maWcsIGNoaWxkQ29uZmlnKSB7XG4gICAgdmFyIHJlcyA9IGV4dGVuZCh7fSwgcGFyZW50Q29uZmlnKSxcbiAgICAgICAgcHJvcDtcbiAgICBmb3IgKHByb3AgaW4gY2hpbGRDb25maWcpIHtcbiAgICAgICAgaWYgKGhhc093blByb3AoY2hpbGRDb25maWcsIHByb3ApKSB7XG4gICAgICAgICAgICBpZiAoaXNPYmplY3QocGFyZW50Q29uZmlnW3Byb3BdKSAmJiBpc09iamVjdChjaGlsZENvbmZpZ1twcm9wXSkpIHtcbiAgICAgICAgICAgICAgICByZXNbcHJvcF0gPSB7fTtcbiAgICAgICAgICAgICAgICBleHRlbmQocmVzW3Byb3BdLCBwYXJlbnRDb25maWdbcHJvcF0pO1xuICAgICAgICAgICAgICAgIGV4dGVuZChyZXNbcHJvcF0sIGNoaWxkQ29uZmlnW3Byb3BdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGRDb25maWdbcHJvcF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJlc1twcm9wXSA9IGNoaWxkQ29uZmlnW3Byb3BdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgcmVzW3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAocHJvcCBpbiBwYXJlbnRDb25maWcpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgaGFzT3duUHJvcChwYXJlbnRDb25maWcsIHByb3ApICYmXG4gICAgICAgICAgICAhaGFzT3duUHJvcChjaGlsZENvbmZpZywgcHJvcCkgJiZcbiAgICAgICAgICAgIGlzT2JqZWN0KHBhcmVudENvbmZpZ1twcm9wXSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgY2hhbmdlcyB0byBwcm9wZXJ0aWVzIGRvbid0IG1vZGlmeSBwYXJlbnQgY29uZmlnXG4gICAgICAgICAgICByZXNbcHJvcF0gPSBleHRlbmQoe30sIHJlc1twcm9wXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuZnVuY3Rpb24gTG9jYWxlKGNvbmZpZykge1xuICAgIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNldChjb25maWcpO1xuICAgIH1cbn1cblxudmFyIGtleXM7XG5cbmlmIChPYmplY3Qua2V5cykge1xuICAgIGtleXMgPSBPYmplY3Qua2V5cztcbn0gZWxzZSB7XG4gICAga2V5cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgdmFyIGksXG4gICAgICAgICAgICByZXMgPSBbXTtcbiAgICAgICAgZm9yIChpIGluIG9iaikge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3Aob2JqLCBpKSkge1xuICAgICAgICAgICAgICAgIHJlcy5wdXNoKGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfTtcbn1cblxudmFyIGRlZmF1bHRDYWxlbmRhciA9IHtcbiAgICBzYW1lRGF5OiAnW1RvZGF5IGF0XSBMVCcsXG4gICAgbmV4dERheTogJ1tUb21vcnJvdyBhdF0gTFQnLFxuICAgIG5leHRXZWVrOiAnZGRkZCBbYXRdIExUJyxcbiAgICBsYXN0RGF5OiAnW1llc3RlcmRheSBhdF0gTFQnLFxuICAgIGxhc3RXZWVrOiAnW0xhc3RdIGRkZGQgW2F0XSBMVCcsXG4gICAgc2FtZUVsc2U6ICdMJyxcbn07XG5cbmZ1bmN0aW9uIGNhbGVuZGFyKGtleSwgbW9tLCBub3cpIHtcbiAgICB2YXIgb3V0cHV0ID0gdGhpcy5fY2FsZW5kYXJba2V5XSB8fCB0aGlzLl9jYWxlbmRhclsnc2FtZUVsc2UnXTtcbiAgICByZXR1cm4gaXNGdW5jdGlvbihvdXRwdXQpID8gb3V0cHV0LmNhbGwobW9tLCBub3cpIDogb3V0cHV0O1xufVxuXG5mdW5jdGlvbiB6ZXJvRmlsbChudW1iZXIsIHRhcmdldExlbmd0aCwgZm9yY2VTaWduKSB7XG4gICAgdmFyIGFic051bWJlciA9ICcnICsgTWF0aC5hYnMobnVtYmVyKSxcbiAgICAgICAgemVyb3NUb0ZpbGwgPSB0YXJnZXRMZW5ndGggLSBhYnNOdW1iZXIubGVuZ3RoLFxuICAgICAgICBzaWduID0gbnVtYmVyID49IDA7XG4gICAgcmV0dXJuIChcbiAgICAgICAgKHNpZ24gPyAoZm9yY2VTaWduID8gJysnIDogJycpIDogJy0nKSArXG4gICAgICAgIE1hdGgucG93KDEwLCBNYXRoLm1heCgwLCB6ZXJvc1RvRmlsbCkpLnRvU3RyaW5nKCkuc3Vic3RyKDEpICtcbiAgICAgICAgYWJzTnVtYmVyXG4gICAgKTtcbn1cblxudmFyIGZvcm1hdHRpbmdUb2tlbnMgPVxuICAgICAgICAvKFxcW1teXFxbXSpcXF0pfChcXFxcKT8oW0hoXW1tKHNzKT98TW98TU0/TT9NP3xEb3xERERvfEREP0Q/RD98ZGRkP2Q/fGRvP3x3W298d10/fFdbb3xXXT98UW8/fE57MSw1fXxZWVlZWVl8WVlZWVl8WVlZWXxZWXx5ezIsNH18eW8/fGdnKGdnZz8pP3xHRyhHR0c/KT98ZXxFfGF8QXxoaD98SEg/fGtrP3xtbT98c3M/fFN7MSw5fXx4fFh8eno/fFpaP3wuKS9nLFxuICAgIGxvY2FsRm9ybWF0dGluZ1Rva2VucyA9IC8oXFxbW15cXFtdKlxcXSl8KFxcXFwpPyhMVFN8TFR8TEw/TD9MP3xsezEsNH0pL2csXG4gICAgZm9ybWF0RnVuY3Rpb25zID0ge30sXG4gICAgZm9ybWF0VG9rZW5GdW5jdGlvbnMgPSB7fTtcblxuLy8gdG9rZW46ICAgICdNJ1xuLy8gcGFkZGVkOiAgIFsnTU0nLCAyXVxuLy8gb3JkaW5hbDogICdNbydcbi8vIGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7IHRoaXMubW9udGgoKSArIDEgfVxuZnVuY3Rpb24gYWRkRm9ybWF0VG9rZW4odG9rZW4sIHBhZGRlZCwgb3JkaW5hbCwgY2FsbGJhY2spIHtcbiAgICB2YXIgZnVuYyA9IGNhbGxiYWNrO1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpc1tjYWxsYmFja10oKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICAgIGZvcm1hdFRva2VuRnVuY3Rpb25zW3Rva2VuXSA9IGZ1bmM7XG4gICAgfVxuICAgIGlmIChwYWRkZWQpIHtcbiAgICAgICAgZm9ybWF0VG9rZW5GdW5jdGlvbnNbcGFkZGVkWzBdXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB6ZXJvRmlsbChmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIHBhZGRlZFsxXSwgcGFkZGVkWzJdKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKG9yZGluYWwpIHtcbiAgICAgICAgZm9ybWF0VG9rZW5GdW5jdGlvbnNbb3JkaW5hbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkub3JkaW5hbChcbiAgICAgICAgICAgICAgICBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksXG4gICAgICAgICAgICAgICAgdG9rZW5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH07XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVGb3JtYXR0aW5nVG9rZW5zKGlucHV0KSB7XG4gICAgaWYgKGlucHV0Lm1hdGNoKC9cXFtbXFxzXFxTXS8pKSB7XG4gICAgICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKC9eXFxbfFxcXSQvZywgJycpO1xuICAgIH1cbiAgICByZXR1cm4gaW5wdXQucmVwbGFjZSgvXFxcXC9nLCAnJyk7XG59XG5cbmZ1bmN0aW9uIG1ha2VGb3JtYXRGdW5jdGlvbihmb3JtYXQpIHtcbiAgICB2YXIgYXJyYXkgPSBmb3JtYXQubWF0Y2goZm9ybWF0dGluZ1Rva2VucyksXG4gICAgICAgIGksXG4gICAgICAgIGxlbmd0aDtcblxuICAgIGZvciAoaSA9IDAsIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChmb3JtYXRUb2tlbkZ1bmN0aW9uc1thcnJheVtpXV0pIHtcbiAgICAgICAgICAgIGFycmF5W2ldID0gZm9ybWF0VG9rZW5GdW5jdGlvbnNbYXJyYXlbaV1dO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXJyYXlbaV0gPSByZW1vdmVGb3JtYXR0aW5nVG9rZW5zKGFycmF5W2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAobW9tKSB7XG4gICAgICAgIHZhciBvdXRwdXQgPSAnJyxcbiAgICAgICAgICAgIGk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgb3V0cHV0ICs9IGlzRnVuY3Rpb24oYXJyYXlbaV0pXG4gICAgICAgICAgICAgICAgPyBhcnJheVtpXS5jYWxsKG1vbSwgZm9ybWF0KVxuICAgICAgICAgICAgICAgIDogYXJyYXlbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9O1xufVxuXG4vLyBmb3JtYXQgZGF0ZSB1c2luZyBuYXRpdmUgZGF0ZSBvYmplY3RcbmZ1bmN0aW9uIGZvcm1hdE1vbWVudChtLCBmb3JtYXQpIHtcbiAgICBpZiAoIW0uaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiBtLmxvY2FsZURhdGEoKS5pbnZhbGlkRGF0ZSgpO1xuICAgIH1cblxuICAgIGZvcm1hdCA9IGV4cGFuZEZvcm1hdChmb3JtYXQsIG0ubG9jYWxlRGF0YSgpKTtcbiAgICBmb3JtYXRGdW5jdGlvbnNbZm9ybWF0XSA9XG4gICAgICAgIGZvcm1hdEZ1bmN0aW9uc1tmb3JtYXRdIHx8IG1ha2VGb3JtYXRGdW5jdGlvbihmb3JtYXQpO1xuXG4gICAgcmV0dXJuIGZvcm1hdEZ1bmN0aW9uc1tmb3JtYXRdKG0pO1xufVxuXG5mdW5jdGlvbiBleHBhbmRGb3JtYXQoZm9ybWF0LCBsb2NhbGUpIHtcbiAgICB2YXIgaSA9IDU7XG5cbiAgICBmdW5jdGlvbiByZXBsYWNlTG9uZ0RhdGVGb3JtYXRUb2tlbnMoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5sb25nRGF0ZUZvcm1hdChpbnB1dCkgfHwgaW5wdXQ7XG4gICAgfVxuXG4gICAgbG9jYWxGb3JtYXR0aW5nVG9rZW5zLmxhc3RJbmRleCA9IDA7XG4gICAgd2hpbGUgKGkgPj0gMCAmJiBsb2NhbEZvcm1hdHRpbmdUb2tlbnMudGVzdChmb3JtYXQpKSB7XG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKFxuICAgICAgICAgICAgbG9jYWxGb3JtYXR0aW5nVG9rZW5zLFxuICAgICAgICAgICAgcmVwbGFjZUxvbmdEYXRlRm9ybWF0VG9rZW5zXG4gICAgICAgICk7XG4gICAgICAgIGxvY2FsRm9ybWF0dGluZ1Rva2Vucy5sYXN0SW5kZXggPSAwO1xuICAgICAgICBpIC09IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1hdDtcbn1cblxudmFyIGRlZmF1bHRMb25nRGF0ZUZvcm1hdCA9IHtcbiAgICBMVFM6ICdoOm1tOnNzIEEnLFxuICAgIExUOiAnaDptbSBBJyxcbiAgICBMOiAnTU0vREQvWVlZWScsXG4gICAgTEw6ICdNTU1NIEQsIFlZWVknLFxuICAgIExMTDogJ01NTU0gRCwgWVlZWSBoOm1tIEEnLFxuICAgIExMTEw6ICdkZGRkLCBNTU1NIEQsIFlZWVkgaDptbSBBJyxcbn07XG5cbmZ1bmN0aW9uIGxvbmdEYXRlRm9ybWF0KGtleSkge1xuICAgIHZhciBmb3JtYXQgPSB0aGlzLl9sb25nRGF0ZUZvcm1hdFtrZXldLFxuICAgICAgICBmb3JtYXRVcHBlciA9IHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleS50b1VwcGVyQ2FzZSgpXTtcblxuICAgIGlmIChmb3JtYXQgfHwgIWZvcm1hdFVwcGVyKSB7XG4gICAgICAgIHJldHVybiBmb3JtYXQ7XG4gICAgfVxuXG4gICAgdGhpcy5fbG9uZ0RhdGVGb3JtYXRba2V5XSA9IGZvcm1hdFVwcGVyXG4gICAgICAgIC5tYXRjaChmb3JtYXR0aW5nVG9rZW5zKVxuICAgICAgICAubWFwKGZ1bmN0aW9uICh0b2spIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0b2sgPT09ICdNTU1NJyB8fFxuICAgICAgICAgICAgICAgIHRvayA9PT0gJ01NJyB8fFxuICAgICAgICAgICAgICAgIHRvayA9PT0gJ0REJyB8fFxuICAgICAgICAgICAgICAgIHRvayA9PT0gJ2RkZGQnXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9rLnNsaWNlKDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRvaztcbiAgICAgICAgfSlcbiAgICAgICAgLmpvaW4oJycpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleV07XG59XG5cbnZhciBkZWZhdWx0SW52YWxpZERhdGUgPSAnSW52YWxpZCBkYXRlJztcblxuZnVuY3Rpb24gaW52YWxpZERhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ludmFsaWREYXRlO1xufVxuXG52YXIgZGVmYXVsdE9yZGluYWwgPSAnJWQnLFxuICAgIGRlZmF1bHREYXlPZk1vbnRoT3JkaW5hbFBhcnNlID0gL1xcZHsxLDJ9LztcblxuZnVuY3Rpb24gb3JkaW5hbChudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5fb3JkaW5hbC5yZXBsYWNlKCclZCcsIG51bWJlcik7XG59XG5cbnZhciBkZWZhdWx0UmVsYXRpdmVUaW1lID0ge1xuICAgIGZ1dHVyZTogJ2luICVzJyxcbiAgICBwYXN0OiAnJXMgYWdvJyxcbiAgICBzOiAnYSBmZXcgc2Vjb25kcycsXG4gICAgc3M6ICclZCBzZWNvbmRzJyxcbiAgICBtOiAnYSBtaW51dGUnLFxuICAgIG1tOiAnJWQgbWludXRlcycsXG4gICAgaDogJ2FuIGhvdXInLFxuICAgIGhoOiAnJWQgaG91cnMnLFxuICAgIGQ6ICdhIGRheScsXG4gICAgZGQ6ICclZCBkYXlzJyxcbiAgICB3OiAnYSB3ZWVrJyxcbiAgICB3dzogJyVkIHdlZWtzJyxcbiAgICBNOiAnYSBtb250aCcsXG4gICAgTU06ICclZCBtb250aHMnLFxuICAgIHk6ICdhIHllYXInLFxuICAgIHl5OiAnJWQgeWVhcnMnLFxufTtcblxuZnVuY3Rpb24gcmVsYXRpdmVUaW1lKG51bWJlciwgd2l0aG91dFN1ZmZpeCwgc3RyaW5nLCBpc0Z1dHVyZSkge1xuICAgIHZhciBvdXRwdXQgPSB0aGlzLl9yZWxhdGl2ZVRpbWVbc3RyaW5nXTtcbiAgICByZXR1cm4gaXNGdW5jdGlvbihvdXRwdXQpXG4gICAgICAgID8gb3V0cHV0KG51bWJlciwgd2l0aG91dFN1ZmZpeCwgc3RyaW5nLCBpc0Z1dHVyZSlcbiAgICAgICAgOiBvdXRwdXQucmVwbGFjZSgvJWQvaSwgbnVtYmVyKTtcbn1cblxuZnVuY3Rpb24gcGFzdEZ1dHVyZShkaWZmLCBvdXRwdXQpIHtcbiAgICB2YXIgZm9ybWF0ID0gdGhpcy5fcmVsYXRpdmVUaW1lW2RpZmYgPiAwID8gJ2Z1dHVyZScgOiAncGFzdCddO1xuICAgIHJldHVybiBpc0Z1bmN0aW9uKGZvcm1hdCkgPyBmb3JtYXQob3V0cHV0KSA6IGZvcm1hdC5yZXBsYWNlKC8lcy9pLCBvdXRwdXQpO1xufVxuXG52YXIgYWxpYXNlcyA9IHtcbiAgICBEOiAnZGF0ZScsXG4gICAgZGF0ZXM6ICdkYXRlJyxcbiAgICBkYXRlOiAnZGF0ZScsXG4gICAgZDogJ2RheScsXG4gICAgZGF5czogJ2RheScsXG4gICAgZGF5OiAnZGF5JyxcbiAgICBlOiAnd2Vla2RheScsXG4gICAgd2Vla2RheXM6ICd3ZWVrZGF5JyxcbiAgICB3ZWVrZGF5OiAnd2Vla2RheScsXG4gICAgRTogJ2lzb1dlZWtkYXknLFxuICAgIGlzb3dlZWtkYXlzOiAnaXNvV2Vla2RheScsXG4gICAgaXNvd2Vla2RheTogJ2lzb1dlZWtkYXknLFxuICAgIERERDogJ2RheU9mWWVhcicsXG4gICAgZGF5b2Z5ZWFyczogJ2RheU9mWWVhcicsXG4gICAgZGF5b2Z5ZWFyOiAnZGF5T2ZZZWFyJyxcbiAgICBoOiAnaG91cicsXG4gICAgaG91cnM6ICdob3VyJyxcbiAgICBob3VyOiAnaG91cicsXG4gICAgbXM6ICdtaWxsaXNlY29uZCcsXG4gICAgbWlsbGlzZWNvbmRzOiAnbWlsbGlzZWNvbmQnLFxuICAgIG1pbGxpc2Vjb25kOiAnbWlsbGlzZWNvbmQnLFxuICAgIG06ICdtaW51dGUnLFxuICAgIG1pbnV0ZXM6ICdtaW51dGUnLFxuICAgIG1pbnV0ZTogJ21pbnV0ZScsXG4gICAgTTogJ21vbnRoJyxcbiAgICBtb250aHM6ICdtb250aCcsXG4gICAgbW9udGg6ICdtb250aCcsXG4gICAgUTogJ3F1YXJ0ZXInLFxuICAgIHF1YXJ0ZXJzOiAncXVhcnRlcicsXG4gICAgcXVhcnRlcjogJ3F1YXJ0ZXInLFxuICAgIHM6ICdzZWNvbmQnLFxuICAgIHNlY29uZHM6ICdzZWNvbmQnLFxuICAgIHNlY29uZDogJ3NlY29uZCcsXG4gICAgZ2c6ICd3ZWVrWWVhcicsXG4gICAgd2Vla3llYXJzOiAnd2Vla1llYXInLFxuICAgIHdlZWt5ZWFyOiAnd2Vla1llYXInLFxuICAgIEdHOiAnaXNvV2Vla1llYXInLFxuICAgIGlzb3dlZWt5ZWFyczogJ2lzb1dlZWtZZWFyJyxcbiAgICBpc293ZWVreWVhcjogJ2lzb1dlZWtZZWFyJyxcbiAgICB3OiAnd2VlaycsXG4gICAgd2Vla3M6ICd3ZWVrJyxcbiAgICB3ZWVrOiAnd2VlaycsXG4gICAgVzogJ2lzb1dlZWsnLFxuICAgIGlzb3dlZWtzOiAnaXNvV2VlaycsXG4gICAgaXNvd2VlazogJ2lzb1dlZWsnLFxuICAgIHk6ICd5ZWFyJyxcbiAgICB5ZWFyczogJ3llYXInLFxuICAgIHllYXI6ICd5ZWFyJyxcbn07XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVVuaXRzKHVuaXRzKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB1bml0cyA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBhbGlhc2VzW3VuaXRzXSB8fCBhbGlhc2VzW3VuaXRzLnRvTG93ZXJDYXNlKCldXG4gICAgICAgIDogdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVPYmplY3RVbml0cyhpbnB1dE9iamVjdCkge1xuICAgIHZhciBub3JtYWxpemVkSW5wdXQgPSB7fSxcbiAgICAgICAgbm9ybWFsaXplZFByb3AsXG4gICAgICAgIHByb3A7XG5cbiAgICBmb3IgKHByb3AgaW4gaW5wdXRPYmplY3QpIHtcbiAgICAgICAgaWYgKGhhc093blByb3AoaW5wdXRPYmplY3QsIHByb3ApKSB7XG4gICAgICAgICAgICBub3JtYWxpemVkUHJvcCA9IG5vcm1hbGl6ZVVuaXRzKHByb3ApO1xuICAgICAgICAgICAgaWYgKG5vcm1hbGl6ZWRQcm9wKSB7XG4gICAgICAgICAgICAgICAgbm9ybWFsaXplZElucHV0W25vcm1hbGl6ZWRQcm9wXSA9IGlucHV0T2JqZWN0W3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vcm1hbGl6ZWRJbnB1dDtcbn1cblxudmFyIHByaW9yaXRpZXMgPSB7XG4gICAgZGF0ZTogOSxcbiAgICBkYXk6IDExLFxuICAgIHdlZWtkYXk6IDExLFxuICAgIGlzb1dlZWtkYXk6IDExLFxuICAgIGRheU9mWWVhcjogNCxcbiAgICBob3VyOiAxMyxcbiAgICBtaWxsaXNlY29uZDogMTYsXG4gICAgbWludXRlOiAxNCxcbiAgICBtb250aDogOCxcbiAgICBxdWFydGVyOiA3LFxuICAgIHNlY29uZDogMTUsXG4gICAgd2Vla1llYXI6IDEsXG4gICAgaXNvV2Vla1llYXI6IDEsXG4gICAgd2VlazogNSxcbiAgICBpc29XZWVrOiA1LFxuICAgIHllYXI6IDEsXG59O1xuXG5mdW5jdGlvbiBnZXRQcmlvcml0aXplZFVuaXRzKHVuaXRzT2JqKSB7XG4gICAgdmFyIHVuaXRzID0gW10sXG4gICAgICAgIHU7XG4gICAgZm9yICh1IGluIHVuaXRzT2JqKSB7XG4gICAgICAgIGlmIChoYXNPd25Qcm9wKHVuaXRzT2JqLCB1KSkge1xuICAgICAgICAgICAgdW5pdHMucHVzaCh7IHVuaXQ6IHUsIHByaW9yaXR5OiBwcmlvcml0aWVzW3VdIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVuaXRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEucHJpb3JpdHkgLSBiLnByaW9yaXR5O1xuICAgIH0pO1xuICAgIHJldHVybiB1bml0cztcbn1cblxudmFyIG1hdGNoMSA9IC9cXGQvLCAvLyAgICAgICAwIC0gOVxuICAgIG1hdGNoMiA9IC9cXGRcXGQvLCAvLyAgICAgIDAwIC0gOTlcbiAgICBtYXRjaDMgPSAvXFxkezN9LywgLy8gICAgIDAwMCAtIDk5OVxuICAgIG1hdGNoNCA9IC9cXGR7NH0vLCAvLyAgICAwMDAwIC0gOTk5OVxuICAgIG1hdGNoNiA9IC9bKy1dP1xcZHs2fS8sIC8vIC05OTk5OTkgLSA5OTk5OTlcbiAgICBtYXRjaDF0bzIgPSAvXFxkXFxkPy8sIC8vICAgICAgIDAgLSA5OVxuICAgIG1hdGNoM3RvNCA9IC9cXGRcXGRcXGRcXGQ/LywgLy8gICAgIDk5OSAtIDk5OTlcbiAgICBtYXRjaDV0bzYgPSAvXFxkXFxkXFxkXFxkXFxkXFxkPy8sIC8vICAgOTk5OTkgLSA5OTk5OTlcbiAgICBtYXRjaDF0bzMgPSAvXFxkezEsM30vLCAvLyAgICAgICAwIC0gOTk5XG4gICAgbWF0Y2gxdG80ID0gL1xcZHsxLDR9LywgLy8gICAgICAgMCAtIDk5OTlcbiAgICBtYXRjaDF0bzYgPSAvWystXT9cXGR7MSw2fS8sIC8vIC05OTk5OTkgLSA5OTk5OTlcbiAgICBtYXRjaFVuc2lnbmVkID0gL1xcZCsvLCAvLyAgICAgICAwIC0gaW5mXG4gICAgbWF0Y2hTaWduZWQgPSAvWystXT9cXGQrLywgLy8gICAgLWluZiAtIGluZlxuICAgIG1hdGNoT2Zmc2V0ID0gL1p8WystXVxcZFxcZDo/XFxkXFxkL2dpLCAvLyArMDA6MDAgLTAwOjAwICswMDAwIC0wMDAwIG9yIFpcbiAgICBtYXRjaFNob3J0T2Zmc2V0ID0gL1p8WystXVxcZFxcZCg/Ojo/XFxkXFxkKT8vZ2ksIC8vICswMCAtMDAgKzAwOjAwIC0wMDowMCArMDAwMCAtMDAwMCBvciBaXG4gICAgbWF0Y2hUaW1lc3RhbXAgPSAvWystXT9cXGQrKFxcLlxcZHsxLDN9KT8vLCAvLyAxMjM0NTY3ODkgMTIzNDU2Nzg5LjEyM1xuICAgIC8vIGFueSB3b3JkIChvciB0d28pIGNoYXJhY3RlcnMgb3IgbnVtYmVycyBpbmNsdWRpbmcgdHdvL3RocmVlIHdvcmQgbW9udGggaW4gYXJhYmljLlxuICAgIC8vIGluY2x1ZGVzIHNjb3R0aXNoIGdhZWxpYyB0d28gd29yZCBhbmQgaHlwaGVuYXRlZCBtb250aHNcbiAgICBtYXRjaFdvcmQgPVxuICAgICAgICAvWzAtOV17MCwyNTZ9WydhLXpcXHUwMEEwLVxcdTA1RkZcXHUwNzAwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGMDdcXHVGRjEwLVxcdUZGRUZdezEsMjU2fXxbXFx1MDYwMC1cXHUwNkZGXFwvXXsxLDI1Nn0oXFxzKj9bXFx1MDYwMC1cXHUwNkZGXXsxLDI1Nn0pezEsMn0vaSxcbiAgICBtYXRjaDF0bzJOb0xlYWRpbmdaZXJvID0gL15bMS05XVxcZD8vLCAvLyAgICAgICAgIDEtOTlcbiAgICBtYXRjaDF0bzJIYXNaZXJvID0gL14oWzEtOV1cXGR8XFxkKS8sIC8vICAgICAgICAgICAwLTk5XG4gICAgcmVnZXhlcztcblxucmVnZXhlcyA9IHt9O1xuXG5mdW5jdGlvbiBhZGRSZWdleFRva2VuKHRva2VuLCByZWdleCwgc3RyaWN0UmVnZXgpIHtcbiAgICByZWdleGVzW3Rva2VuXSA9IGlzRnVuY3Rpb24ocmVnZXgpXG4gICAgICAgID8gcmVnZXhcbiAgICAgICAgOiBmdW5jdGlvbiAoaXNTdHJpY3QsIGxvY2FsZURhdGEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGlzU3RyaWN0ICYmIHN0cmljdFJlZ2V4ID8gc3RyaWN0UmVnZXggOiByZWdleDtcbiAgICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXRQYXJzZVJlZ2V4Rm9yVG9rZW4odG9rZW4sIGNvbmZpZykge1xuICAgIGlmICghaGFzT3duUHJvcChyZWdleGVzLCB0b2tlbikpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAodW5lc2NhcGVGb3JtYXQodG9rZW4pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVnZXhlc1t0b2tlbl0oY29uZmlnLl9zdHJpY3QsIGNvbmZpZy5fbG9jYWxlKTtcbn1cblxuLy8gQ29kZSBmcm9tIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzU2MTQ5My9pcy10aGVyZS1hLXJlZ2V4cC1lc2NhcGUtZnVuY3Rpb24taW4tamF2YXNjcmlwdFxuZnVuY3Rpb24gdW5lc2NhcGVGb3JtYXQocykge1xuICAgIHJldHVybiByZWdleEVzY2FwZShcbiAgICAgICAgc1xuICAgICAgICAgICAgLnJlcGxhY2UoJ1xcXFwnLCAnJylcbiAgICAgICAgICAgIC5yZXBsYWNlKFxuICAgICAgICAgICAgICAgIC9cXFxcKFxcWyl8XFxcXChcXF0pfFxcWyhbXlxcXVxcW10qKVxcXXxcXFxcKC4pL2csXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKG1hdGNoZWQsIHAxLCBwMiwgcDMsIHA0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwMSB8fCBwMiB8fCBwMyB8fCBwNDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gcmVnZXhFc2NhcGUocykge1xuICAgIHJldHVybiBzLnJlcGxhY2UoL1stXFwvXFxcXF4kKis/LigpfFtcXF17fV0vZywgJ1xcXFwkJicpO1xufVxuXG5mdW5jdGlvbiBhYnNGbG9vcihudW1iZXIpIHtcbiAgICBpZiAobnVtYmVyIDwgMCkge1xuICAgICAgICAvLyAtMCAtPiAwXG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwobnVtYmVyKSB8fCAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKG51bWJlcik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0b0ludChhcmd1bWVudEZvckNvZXJjaW9uKSB7XG4gICAgdmFyIGNvZXJjZWROdW1iZXIgPSArYXJndW1lbnRGb3JDb2VyY2lvbixcbiAgICAgICAgdmFsdWUgPSAwO1xuXG4gICAgaWYgKGNvZXJjZWROdW1iZXIgIT09IDAgJiYgaXNGaW5pdGUoY29lcmNlZE51bWJlcikpIHtcbiAgICAgICAgdmFsdWUgPSBhYnNGbG9vcihjb2VyY2VkTnVtYmVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbnZhciB0b2tlbnMgPSB7fTtcblxuZnVuY3Rpb24gYWRkUGFyc2VUb2tlbih0b2tlbiwgY2FsbGJhY2spIHtcbiAgICB2YXIgaSxcbiAgICAgICAgZnVuYyA9IGNhbGxiYWNrLFxuICAgICAgICB0b2tlbkxlbjtcbiAgICBpZiAodHlwZW9mIHRva2VuID09PSAnc3RyaW5nJykge1xuICAgICAgICB0b2tlbiA9IFt0b2tlbl07XG4gICAgfVxuICAgIGlmIChpc051bWJlcihjYWxsYmFjaykpIHtcbiAgICAgICAgZnVuYyA9IGZ1bmN0aW9uIChpbnB1dCwgYXJyYXkpIHtcbiAgICAgICAgICAgIGFycmF5W2NhbGxiYWNrXSA9IHRvSW50KGlucHV0KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9rZW5MZW4gPSB0b2tlbi5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IHRva2VuTGVuOyBpKyspIHtcbiAgICAgICAgdG9rZW5zW3Rva2VuW2ldXSA9IGZ1bmM7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBhZGRXZWVrUGFyc2VUb2tlbih0b2tlbiwgY2FsbGJhY2spIHtcbiAgICBhZGRQYXJzZVRva2VuKHRva2VuLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcsIHRva2VuKSB7XG4gICAgICAgIGNvbmZpZy5fdyA9IGNvbmZpZy5fdyB8fCB7fTtcbiAgICAgICAgY2FsbGJhY2soaW5wdXQsIGNvbmZpZy5fdywgY29uZmlnLCB0b2tlbik7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZFRpbWVUb0FycmF5RnJvbVRva2VuKHRva2VuLCBpbnB1dCwgY29uZmlnKSB7XG4gICAgaWYgKGlucHV0ICE9IG51bGwgJiYgaGFzT3duUHJvcCh0b2tlbnMsIHRva2VuKSkge1xuICAgICAgICB0b2tlbnNbdG9rZW5dKGlucHV0LCBjb25maWcuX2EsIGNvbmZpZywgdG9rZW4pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaXNMZWFwWWVhcih5ZWFyKSB7XG4gICAgcmV0dXJuICh5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwKSB8fCB5ZWFyICUgNDAwID09PSAwO1xufVxuXG52YXIgWUVBUiA9IDAsXG4gICAgTU9OVEggPSAxLFxuICAgIERBVEUgPSAyLFxuICAgIEhPVVIgPSAzLFxuICAgIE1JTlVURSA9IDQsXG4gICAgU0VDT05EID0gNSxcbiAgICBNSUxMSVNFQ09ORCA9IDYsXG4gICAgV0VFSyA9IDcsXG4gICAgV0VFS0RBWSA9IDg7XG5cbi8vIEZPUk1BVFRJTkdcblxuYWRkRm9ybWF0VG9rZW4oJ1knLCAwLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHkgPSB0aGlzLnllYXIoKTtcbiAgICByZXR1cm4geSA8PSA5OTk5ID8gemVyb0ZpbGwoeSwgNCkgOiAnKycgKyB5O1xufSk7XG5cbmFkZEZvcm1hdFRva2VuKDAsIFsnWVknLCAyXSwgMCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLnllYXIoKSAlIDEwMDtcbn0pO1xuXG5hZGRGb3JtYXRUb2tlbigwLCBbJ1lZWVknLCA0XSwgMCwgJ3llYXInKTtcbmFkZEZvcm1hdFRva2VuKDAsIFsnWVlZWVknLCA1XSwgMCwgJ3llYXInKTtcbmFkZEZvcm1hdFRva2VuKDAsIFsnWVlZWVlZJywgNiwgdHJ1ZV0sIDAsICd5ZWFyJyk7XG5cbi8vIFBBUlNJTkdcblxuYWRkUmVnZXhUb2tlbignWScsIG1hdGNoU2lnbmVkKTtcbmFkZFJlZ2V4VG9rZW4oJ1lZJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuYWRkUmVnZXhUb2tlbignWVlZWScsIG1hdGNoMXRvNCwgbWF0Y2g0KTtcbmFkZFJlZ2V4VG9rZW4oJ1lZWVlZJywgbWF0Y2gxdG82LCBtYXRjaDYpO1xuYWRkUmVnZXhUb2tlbignWVlZWVlZJywgbWF0Y2gxdG82LCBtYXRjaDYpO1xuXG5hZGRQYXJzZVRva2VuKFsnWVlZWVknLCAnWVlZWVlZJ10sIFlFQVIpO1xuYWRkUGFyc2VUb2tlbignWVlZWScsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXkpIHtcbiAgICBhcnJheVtZRUFSXSA9XG4gICAgICAgIGlucHV0Lmxlbmd0aCA9PT0gMiA/IGhvb2tzLnBhcnNlVHdvRGlnaXRZZWFyKGlucHV0KSA6IHRvSW50KGlucHV0KTtcbn0pO1xuYWRkUGFyc2VUb2tlbignWVknLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5KSB7XG4gICAgYXJyYXlbWUVBUl0gPSBob29rcy5wYXJzZVR3b0RpZ2l0WWVhcihpbnB1dCk7XG59KTtcbmFkZFBhcnNlVG9rZW4oJ1knLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5KSB7XG4gICAgYXJyYXlbWUVBUl0gPSBwYXJzZUludChpbnB1dCwgMTApO1xufSk7XG5cbi8vIEhFTFBFUlNcblxuZnVuY3Rpb24gZGF5c0luWWVhcih5ZWFyKSB7XG4gICAgcmV0dXJuIGlzTGVhcFllYXIoeWVhcikgPyAzNjYgOiAzNjU7XG59XG5cbi8vIEhPT0tTXG5cbmhvb2tzLnBhcnNlVHdvRGlnaXRZZWFyID0gZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgcmV0dXJuIHRvSW50KGlucHV0KSArICh0b0ludChpbnB1dCkgPiA2OCA/IDE5MDAgOiAyMDAwKTtcbn07XG5cbi8vIE1PTUVOVFNcblxudmFyIGdldFNldFllYXIgPSBtYWtlR2V0U2V0KCdGdWxsWWVhcicsIHRydWUpO1xuXG5mdW5jdGlvbiBnZXRJc0xlYXBZZWFyKCkge1xuICAgIHJldHVybiBpc0xlYXBZZWFyKHRoaXMueWVhcigpKTtcbn1cblxuZnVuY3Rpb24gbWFrZUdldFNldCh1bml0LCBrZWVwVGltZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHNldCQxKHRoaXMsIHVuaXQsIHZhbHVlKTtcbiAgICAgICAgICAgIGhvb2tzLnVwZGF0ZU9mZnNldCh0aGlzLCBrZWVwVGltZSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBnZXQodGhpcywgdW5pdCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXQobW9tLCB1bml0KSB7XG4gICAgaWYgKCFtb20uaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgfVxuXG4gICAgdmFyIGQgPSBtb20uX2QsXG4gICAgICAgIGlzVVRDID0gbW9tLl9pc1VUQztcblxuICAgIHN3aXRjaCAodW5pdCkge1xuICAgICAgICBjYXNlICdNaWxsaXNlY29uZHMnOlxuICAgICAgICAgICAgcmV0dXJuIGlzVVRDID8gZC5nZXRVVENNaWxsaXNlY29uZHMoKSA6IGQuZ2V0TWlsbGlzZWNvbmRzKCk7XG4gICAgICAgIGNhc2UgJ1NlY29uZHMnOlxuICAgICAgICAgICAgcmV0dXJuIGlzVVRDID8gZC5nZXRVVENTZWNvbmRzKCkgOiBkLmdldFNlY29uZHMoKTtcbiAgICAgICAgY2FzZSAnTWludXRlcyc6XG4gICAgICAgICAgICByZXR1cm4gaXNVVEMgPyBkLmdldFVUQ01pbnV0ZXMoKSA6IGQuZ2V0TWludXRlcygpO1xuICAgICAgICBjYXNlICdIb3Vycyc6XG4gICAgICAgICAgICByZXR1cm4gaXNVVEMgPyBkLmdldFVUQ0hvdXJzKCkgOiBkLmdldEhvdXJzKCk7XG4gICAgICAgIGNhc2UgJ0RhdGUnOlxuICAgICAgICAgICAgcmV0dXJuIGlzVVRDID8gZC5nZXRVVENEYXRlKCkgOiBkLmdldERhdGUoKTtcbiAgICAgICAgY2FzZSAnRGF5JzpcbiAgICAgICAgICAgIHJldHVybiBpc1VUQyA/IGQuZ2V0VVRDRGF5KCkgOiBkLmdldERheSgpO1xuICAgICAgICBjYXNlICdNb250aCc6XG4gICAgICAgICAgICByZXR1cm4gaXNVVEMgPyBkLmdldFVUQ01vbnRoKCkgOiBkLmdldE1vbnRoKCk7XG4gICAgICAgIGNhc2UgJ0Z1bGxZZWFyJzpcbiAgICAgICAgICAgIHJldHVybiBpc1VUQyA/IGQuZ2V0VVRDRnVsbFllYXIoKSA6IGQuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBOYU47IC8vIEp1c3QgaW4gY2FzZVxuICAgIH1cbn1cblxuZnVuY3Rpb24gc2V0JDEobW9tLCB1bml0LCB2YWx1ZSkge1xuICAgIHZhciBkLCBpc1VUQywgeWVhciwgbW9udGgsIGRhdGU7XG5cbiAgICBpZiAoIW1vbS5pc1ZhbGlkKCkgfHwgaXNOYU4odmFsdWUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkID0gbW9tLl9kO1xuICAgIGlzVVRDID0gbW9tLl9pc1VUQztcblxuICAgIHN3aXRjaCAodW5pdCkge1xuICAgICAgICBjYXNlICdNaWxsaXNlY29uZHMnOlxuICAgICAgICAgICAgcmV0dXJuIHZvaWQgKGlzVVRDXG4gICAgICAgICAgICAgICAgPyBkLnNldFVUQ01pbGxpc2Vjb25kcyh2YWx1ZSlcbiAgICAgICAgICAgICAgICA6IGQuc2V0TWlsbGlzZWNvbmRzKHZhbHVlKSk7XG4gICAgICAgIGNhc2UgJ1NlY29uZHMnOlxuICAgICAgICAgICAgcmV0dXJuIHZvaWQgKGlzVVRDID8gZC5zZXRVVENTZWNvbmRzKHZhbHVlKSA6IGQuc2V0U2Vjb25kcyh2YWx1ZSkpO1xuICAgICAgICBjYXNlICdNaW51dGVzJzpcbiAgICAgICAgICAgIHJldHVybiB2b2lkIChpc1VUQyA/IGQuc2V0VVRDTWludXRlcyh2YWx1ZSkgOiBkLnNldE1pbnV0ZXModmFsdWUpKTtcbiAgICAgICAgY2FzZSAnSG91cnMnOlxuICAgICAgICAgICAgcmV0dXJuIHZvaWQgKGlzVVRDID8gZC5zZXRVVENIb3Vycyh2YWx1ZSkgOiBkLnNldEhvdXJzKHZhbHVlKSk7XG4gICAgICAgIGNhc2UgJ0RhdGUnOlxuICAgICAgICAgICAgcmV0dXJuIHZvaWQgKGlzVVRDID8gZC5zZXRVVENEYXRlKHZhbHVlKSA6IGQuc2V0RGF0ZSh2YWx1ZSkpO1xuICAgICAgICAvLyBjYXNlICdEYXknOiAvLyBOb3QgcmVhbFxuICAgICAgICAvLyAgICByZXR1cm4gdm9pZCAoaXNVVEMgPyBkLnNldFVUQ0RheSh2YWx1ZSkgOiBkLnNldERheSh2YWx1ZSkpO1xuICAgICAgICAvLyBjYXNlICdNb250aCc6IC8vIE5vdCB1c2VkIGJlY2F1c2Ugd2UgbmVlZCB0byBwYXNzIHR3byB2YXJpYWJsZXNcbiAgICAgICAgLy8gICAgIHJldHVybiB2b2lkIChpc1VUQyA/IGQuc2V0VVRDTW9udGgodmFsdWUpIDogZC5zZXRNb250aCh2YWx1ZSkpO1xuICAgICAgICBjYXNlICdGdWxsWWVhcic6XG4gICAgICAgICAgICBicmVhazsgLy8gU2VlIGJlbG93IC4uLlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuOyAvLyBKdXN0IGluIGNhc2VcbiAgICB9XG5cbiAgICB5ZWFyID0gdmFsdWU7XG4gICAgbW9udGggPSBtb20ubW9udGgoKTtcbiAgICBkYXRlID0gbW9tLmRhdGUoKTtcbiAgICBkYXRlID0gZGF0ZSA9PT0gMjkgJiYgbW9udGggPT09IDEgJiYgIWlzTGVhcFllYXIoeWVhcikgPyAyOCA6IGRhdGU7XG4gICAgdm9pZCAoaXNVVENcbiAgICAgICAgPyBkLnNldFVUQ0Z1bGxZZWFyKHllYXIsIG1vbnRoLCBkYXRlKVxuICAgICAgICA6IGQuc2V0RnVsbFllYXIoeWVhciwgbW9udGgsIGRhdGUpKTtcbn1cblxuLy8gTU9NRU5UU1xuXG5mdW5jdGlvbiBzdHJpbmdHZXQodW5pdHMpIHtcbiAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcbiAgICBpZiAoaXNGdW5jdGlvbih0aGlzW3VuaXRzXSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbdW5pdHNdKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdTZXQodW5pdHMsIHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB1bml0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgdW5pdHMgPSBub3JtYWxpemVPYmplY3RVbml0cyh1bml0cyk7XG4gICAgICAgIHZhciBwcmlvcml0aXplZCA9IGdldFByaW9yaXRpemVkVW5pdHModW5pdHMpLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIHByaW9yaXRpemVkTGVuID0gcHJpb3JpdGl6ZWQubGVuZ3RoO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcHJpb3JpdGl6ZWRMZW47IGkrKykge1xuICAgICAgICAgICAgdGhpc1twcmlvcml0aXplZFtpXS51bml0XSh1bml0c1twcmlvcml0aXplZFtpXS51bml0XSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24odGhpc1t1bml0c10pKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpc1t1bml0c10odmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBtb2QobiwgeCkge1xuICAgIHJldHVybiAoKG4gJSB4KSArIHgpICUgeDtcbn1cblxudmFyIGluZGV4T2Y7XG5cbmlmIChBcnJheS5wcm90b3R5cGUuaW5kZXhPZikge1xuICAgIGluZGV4T2YgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZjtcbn0gZWxzZSB7XG4gICAgaW5kZXhPZiA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgIC8vIEkga25vd1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmICh0aGlzW2ldID09PSBvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGRheXNJbk1vbnRoKHllYXIsIG1vbnRoKSB7XG4gICAgaWYgKGlzTmFOKHllYXIpIHx8IGlzTmFOKG1vbnRoKSkge1xuICAgICAgICByZXR1cm4gTmFOO1xuICAgIH1cbiAgICB2YXIgbW9kTW9udGggPSBtb2QobW9udGgsIDEyKTtcbiAgICB5ZWFyICs9IChtb250aCAtIG1vZE1vbnRoKSAvIDEyO1xuICAgIHJldHVybiBtb2RNb250aCA9PT0gMVxuICAgICAgICA/IGlzTGVhcFllYXIoeWVhcilcbiAgICAgICAgICAgID8gMjlcbiAgICAgICAgICAgIDogMjhcbiAgICAgICAgOiAzMSAtICgobW9kTW9udGggJSA3KSAlIDIpO1xufVxuXG4vLyBGT1JNQVRUSU5HXG5cbmFkZEZvcm1hdFRva2VuKCdNJywgWydNTScsIDJdLCAnTW8nLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMubW9udGgoKSArIDE7XG59KTtcblxuYWRkRm9ybWF0VG9rZW4oJ01NTScsIDAsIDAsIGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkubW9udGhzU2hvcnQodGhpcywgZm9ybWF0KTtcbn0pO1xuXG5hZGRGb3JtYXRUb2tlbignTU1NTScsIDAsIDAsIGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkubW9udGhzKHRoaXMsIGZvcm1hdCk7XG59KTtcblxuLy8gUEFSU0lOR1xuXG5hZGRSZWdleFRva2VuKCdNJywgbWF0Y2gxdG8yLCBtYXRjaDF0bzJOb0xlYWRpbmdaZXJvKTtcbmFkZFJlZ2V4VG9rZW4oJ01NJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuYWRkUmVnZXhUb2tlbignTU1NJywgZnVuY3Rpb24gKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICByZXR1cm4gbG9jYWxlLm1vbnRoc1Nob3J0UmVnZXgoaXNTdHJpY3QpO1xufSk7XG5hZGRSZWdleFRva2VuKCdNTU1NJywgZnVuY3Rpb24gKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICByZXR1cm4gbG9jYWxlLm1vbnRoc1JlZ2V4KGlzU3RyaWN0KTtcbn0pO1xuXG5hZGRQYXJzZVRva2VuKFsnTScsICdNTSddLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5KSB7XG4gICAgYXJyYXlbTU9OVEhdID0gdG9JbnQoaW5wdXQpIC0gMTtcbn0pO1xuXG5hZGRQYXJzZVRva2VuKFsnTU1NJywgJ01NTU0nXSwgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnLCB0b2tlbikge1xuICAgIHZhciBtb250aCA9IGNvbmZpZy5fbG9jYWxlLm1vbnRoc1BhcnNlKGlucHV0LCB0b2tlbiwgY29uZmlnLl9zdHJpY3QpO1xuICAgIC8vIGlmIHdlIGRpZG4ndCBmaW5kIGEgbW9udGggbmFtZSwgbWFyayB0aGUgZGF0ZSBhcyBpbnZhbGlkLlxuICAgIGlmIChtb250aCAhPSBudWxsKSB7XG4gICAgICAgIGFycmF5W01PTlRIXSA9IG1vbnRoO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmludmFsaWRNb250aCA9IGlucHV0O1xuICAgIH1cbn0pO1xuXG4vLyBMT0NBTEVTXG5cbnZhciBkZWZhdWx0TG9jYWxlTW9udGhzID1cbiAgICAgICAgJ0phbnVhcnlfRmVicnVhcnlfTWFyY2hfQXByaWxfTWF5X0p1bmVfSnVseV9BdWd1c3RfU2VwdGVtYmVyX09jdG9iZXJfTm92ZW1iZXJfRGVjZW1iZXInLnNwbGl0KFxuICAgICAgICAgICAgJ18nXG4gICAgICAgICksXG4gICAgZGVmYXVsdExvY2FsZU1vbnRoc1Nob3J0ID1cbiAgICAgICAgJ0phbl9GZWJfTWFyX0Fwcl9NYXlfSnVuX0p1bF9BdWdfU2VwX09jdF9Ob3ZfRGVjJy5zcGxpdCgnXycpLFxuICAgIE1PTlRIU19JTl9GT1JNQVQgPSAvRFtvRF0/KFxcW1teXFxbXFxdXSpcXF18XFxzKStNTU1NPy8sXG4gICAgZGVmYXVsdE1vbnRoc1Nob3J0UmVnZXggPSBtYXRjaFdvcmQsXG4gICAgZGVmYXVsdE1vbnRoc1JlZ2V4ID0gbWF0Y2hXb3JkO1xuXG5mdW5jdGlvbiBsb2NhbGVNb250aHMobSwgZm9ybWF0KSB7XG4gICAgaWYgKCFtKSB7XG4gICAgICAgIHJldHVybiBpc0FycmF5KHRoaXMuX21vbnRocylcbiAgICAgICAgICAgID8gdGhpcy5fbW9udGhzXG4gICAgICAgICAgICA6IHRoaXMuX21vbnRoc1snc3RhbmRhbG9uZSddO1xuICAgIH1cbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLl9tb250aHMpXG4gICAgICAgID8gdGhpcy5fbW9udGhzW20ubW9udGgoKV1cbiAgICAgICAgOiB0aGlzLl9tb250aHNbXG4gICAgICAgICAgICAgICh0aGlzLl9tb250aHMuaXNGb3JtYXQgfHwgTU9OVEhTX0lOX0ZPUk1BVCkudGVzdChmb3JtYXQpXG4gICAgICAgICAgICAgICAgICA/ICdmb3JtYXQnXG4gICAgICAgICAgICAgICAgICA6ICdzdGFuZGFsb25lJ1xuICAgICAgICAgIF1bbS5tb250aCgpXTtcbn1cblxuZnVuY3Rpb24gbG9jYWxlTW9udGhzU2hvcnQobSwgZm9ybWF0KSB7XG4gICAgaWYgKCFtKSB7XG4gICAgICAgIHJldHVybiBpc0FycmF5KHRoaXMuX21vbnRoc1Nob3J0KVxuICAgICAgICAgICAgPyB0aGlzLl9tb250aHNTaG9ydFxuICAgICAgICAgICAgOiB0aGlzLl9tb250aHNTaG9ydFsnc3RhbmRhbG9uZSddO1xuICAgIH1cbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLl9tb250aHNTaG9ydClcbiAgICAgICAgPyB0aGlzLl9tb250aHNTaG9ydFttLm1vbnRoKCldXG4gICAgICAgIDogdGhpcy5fbW9udGhzU2hvcnRbXG4gICAgICAgICAgICAgIE1PTlRIU19JTl9GT1JNQVQudGVzdChmb3JtYXQpID8gJ2Zvcm1hdCcgOiAnc3RhbmRhbG9uZSdcbiAgICAgICAgICBdW20ubW9udGgoKV07XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVN0cmljdFBhcnNlKG1vbnRoTmFtZSwgZm9ybWF0LCBzdHJpY3QpIHtcbiAgICB2YXIgaSxcbiAgICAgICAgaWksXG4gICAgICAgIG1vbSxcbiAgICAgICAgbGxjID0gbW9udGhOYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgaWYgKCF0aGlzLl9tb250aHNQYXJzZSkge1xuICAgICAgICAvLyB0aGlzIGlzIG5vdCB1c2VkXG4gICAgICAgIHRoaXMuX21vbnRoc1BhcnNlID0gW107XG4gICAgICAgIHRoaXMuX2xvbmdNb250aHNQYXJzZSA9IFtdO1xuICAgICAgICB0aGlzLl9zaG9ydE1vbnRoc1BhcnNlID0gW107XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgKytpKSB7XG4gICAgICAgICAgICBtb20gPSBjcmVhdGVVVEMoWzIwMDAsIGldKTtcbiAgICAgICAgICAgIHRoaXMuX3Nob3J0TW9udGhzUGFyc2VbaV0gPSB0aGlzLm1vbnRoc1Nob3J0KFxuICAgICAgICAgICAgICAgIG1vbSxcbiAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgdGhpcy5fbG9uZ01vbnRoc1BhcnNlW2ldID0gdGhpcy5tb250aHMobW9tLCAnJykudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdHJpY3QpIHtcbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gJ01NTScpIHtcbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3Nob3J0TW9udGhzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fbG9uZ01vbnRoc1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmb3JtYXQgPT09ICdNTU0nKSB7XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9zaG9ydE1vbnRoc1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX2xvbmdNb250aHNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9sb25nTW9udGhzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fc2hvcnRNb250aHNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxvY2FsZU1vbnRoc1BhcnNlKG1vbnRoTmFtZSwgZm9ybWF0LCBzdHJpY3QpIHtcbiAgICB2YXIgaSwgbW9tLCByZWdleDtcblxuICAgIGlmICh0aGlzLl9tb250aHNQYXJzZUV4YWN0KSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVTdHJpY3RQYXJzZS5jYWxsKHRoaXMsIG1vbnRoTmFtZSwgZm9ybWF0LCBzdHJpY3QpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fbW9udGhzUGFyc2UpIHtcbiAgICAgICAgdGhpcy5fbW9udGhzUGFyc2UgPSBbXTtcbiAgICAgICAgdGhpcy5fbG9uZ01vbnRoc1BhcnNlID0gW107XG4gICAgICAgIHRoaXMuX3Nob3J0TW9udGhzUGFyc2UgPSBbXTtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBhZGQgc29ydGluZ1xuICAgIC8vIFNvcnRpbmcgbWFrZXMgc3VyZSBpZiBvbmUgbW9udGggKG9yIGFiYnIpIGlzIGEgcHJlZml4IG9mIGFub3RoZXJcbiAgICAvLyBzZWUgc29ydGluZyBpbiBjb21wdXRlTW9udGhzUGFyc2VcbiAgICBmb3IgKGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgICAvLyBtYWtlIHRoZSByZWdleCBpZiB3ZSBkb24ndCBoYXZlIGl0IGFscmVhZHlcbiAgICAgICAgbW9tID0gY3JlYXRlVVRDKFsyMDAwLCBpXSk7XG4gICAgICAgIGlmIChzdHJpY3QgJiYgIXRoaXMuX2xvbmdNb250aHNQYXJzZVtpXSkge1xuICAgICAgICAgICAgdGhpcy5fbG9uZ01vbnRoc1BhcnNlW2ldID0gbmV3IFJlZ0V4cChcbiAgICAgICAgICAgICAgICAnXicgKyB0aGlzLm1vbnRocyhtb20sICcnKS5yZXBsYWNlKCcuJywgJycpICsgJyQnLFxuICAgICAgICAgICAgICAgICdpJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuX3Nob3J0TW9udGhzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKFxuICAgICAgICAgICAgICAgICdeJyArIHRoaXMubW9udGhzU2hvcnQobW9tLCAnJykucmVwbGFjZSgnLicsICcnKSArICckJyxcbiAgICAgICAgICAgICAgICAnaSdcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzdHJpY3QgJiYgIXRoaXMuX21vbnRoc1BhcnNlW2ldKSB7XG4gICAgICAgICAgICByZWdleCA9XG4gICAgICAgICAgICAgICAgJ14nICsgdGhpcy5tb250aHMobW9tLCAnJykgKyAnfF4nICsgdGhpcy5tb250aHNTaG9ydChtb20sICcnKTtcbiAgICAgICAgICAgIHRoaXMuX21vbnRoc1BhcnNlW2ldID0gbmV3IFJlZ0V4cChyZWdleC5yZXBsYWNlKCcuJywgJycpLCAnaScpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRlc3QgdGhlIHJlZ2V4XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHN0cmljdCAmJlxuICAgICAgICAgICAgZm9ybWF0ID09PSAnTU1NTScgJiZcbiAgICAgICAgICAgIHRoaXMuX2xvbmdNb250aHNQYXJzZVtpXS50ZXN0KG1vbnRoTmFtZSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIHN0cmljdCAmJlxuICAgICAgICAgICAgZm9ybWF0ID09PSAnTU1NJyAmJlxuICAgICAgICAgICAgdGhpcy5fc2hvcnRNb250aHNQYXJzZVtpXS50ZXN0KG1vbnRoTmFtZSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfSBlbHNlIGlmICghc3RyaWN0ICYmIHRoaXMuX21vbnRoc1BhcnNlW2ldLnRlc3QobW9udGhOYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIE1PTUVOVFNcblxuZnVuY3Rpb24gc2V0TW9udGgobW9tLCB2YWx1ZSkge1xuICAgIGlmICghbW9tLmlzVmFsaWQoKSkge1xuICAgICAgICAvLyBObyBvcFxuICAgICAgICByZXR1cm4gbW9tO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICgvXlxcZCskLy50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUgPSB0b0ludCh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG1vbS5sb2NhbGVEYXRhKCkubW9udGhzUGFyc2UodmFsdWUpO1xuICAgICAgICAgICAgLy8gVE9ETzogQW5vdGhlciBzaWxlbnQgZmFpbHVyZT9cbiAgICAgICAgICAgIGlmICghaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBtb250aCA9IHZhbHVlLFxuICAgICAgICBkYXRlID0gbW9tLmRhdGUoKTtcblxuICAgIGRhdGUgPSBkYXRlIDwgMjkgPyBkYXRlIDogTWF0aC5taW4oZGF0ZSwgZGF5c0luTW9udGgobW9tLnllYXIoKSwgbW9udGgpKTtcbiAgICB2b2lkIChtb20uX2lzVVRDXG4gICAgICAgID8gbW9tLl9kLnNldFVUQ01vbnRoKG1vbnRoLCBkYXRlKVxuICAgICAgICA6IG1vbS5fZC5zZXRNb250aChtb250aCwgZGF0ZSkpO1xuICAgIHJldHVybiBtb207XG59XG5cbmZ1bmN0aW9uIGdldFNldE1vbnRoKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgc2V0TW9udGgodGhpcywgdmFsdWUpO1xuICAgICAgICBob29rcy51cGRhdGVPZmZzZXQodGhpcywgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBnZXQodGhpcywgJ01vbnRoJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXREYXlzSW5Nb250aCgpIHtcbiAgICByZXR1cm4gZGF5c0luTW9udGgodGhpcy55ZWFyKCksIHRoaXMubW9udGgoKSk7XG59XG5cbmZ1bmN0aW9uIG1vbnRoc1Nob3J0UmVnZXgoaXNTdHJpY3QpIHtcbiAgICBpZiAodGhpcy5fbW9udGhzUGFyc2VFeGFjdCkge1xuICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ19tb250aHNSZWdleCcpKSB7XG4gICAgICAgICAgICBjb21wdXRlTW9udGhzUGFyc2UuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNTdHJpY3QpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb250aHNTaG9ydFN0cmljdFJlZ2V4O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1Nob3J0UmVnZXg7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ19tb250aHNTaG9ydFJlZ2V4JykpIHtcbiAgICAgICAgICAgIHRoaXMuX21vbnRoc1Nob3J0UmVnZXggPSBkZWZhdWx0TW9udGhzU2hvcnRSZWdleDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fbW9udGhzU2hvcnRTdHJpY3RSZWdleCAmJiBpc1N0cmljdFxuICAgICAgICAgICAgPyB0aGlzLl9tb250aHNTaG9ydFN0cmljdFJlZ2V4XG4gICAgICAgICAgICA6IHRoaXMuX21vbnRoc1Nob3J0UmVnZXg7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBtb250aHNSZWdleChpc1N0cmljdCkge1xuICAgIGlmICh0aGlzLl9tb250aHNQYXJzZUV4YWN0KSB7XG4gICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX21vbnRoc1JlZ2V4JykpIHtcbiAgICAgICAgICAgIGNvbXB1dGVNb250aHNQYXJzZS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1N0cmljdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1N0cmljdFJlZ2V4O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1JlZ2V4O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfbW9udGhzUmVnZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fbW9udGhzUmVnZXggPSBkZWZhdWx0TW9udGhzUmVnZXg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1N0cmljdFJlZ2V4ICYmIGlzU3RyaWN0XG4gICAgICAgICAgICA/IHRoaXMuX21vbnRoc1N0cmljdFJlZ2V4XG4gICAgICAgICAgICA6IHRoaXMuX21vbnRoc1JlZ2V4O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY29tcHV0ZU1vbnRoc1BhcnNlKCkge1xuICAgIGZ1bmN0aW9uIGNtcExlblJldihhLCBiKSB7XG4gICAgICAgIHJldHVybiBiLmxlbmd0aCAtIGEubGVuZ3RoO1xuICAgIH1cblxuICAgIHZhciBzaG9ydFBpZWNlcyA9IFtdLFxuICAgICAgICBsb25nUGllY2VzID0gW10sXG4gICAgICAgIG1peGVkUGllY2VzID0gW10sXG4gICAgICAgIGksXG4gICAgICAgIG1vbSxcbiAgICAgICAgc2hvcnRQLFxuICAgICAgICBsb25nUDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgICAvLyBtYWtlIHRoZSByZWdleCBpZiB3ZSBkb24ndCBoYXZlIGl0IGFscmVhZHlcbiAgICAgICAgbW9tID0gY3JlYXRlVVRDKFsyMDAwLCBpXSk7XG4gICAgICAgIHNob3J0UCA9IHJlZ2V4RXNjYXBlKHRoaXMubW9udGhzU2hvcnQobW9tLCAnJykpO1xuICAgICAgICBsb25nUCA9IHJlZ2V4RXNjYXBlKHRoaXMubW9udGhzKG1vbSwgJycpKTtcbiAgICAgICAgc2hvcnRQaWVjZXMucHVzaChzaG9ydFApO1xuICAgICAgICBsb25nUGllY2VzLnB1c2gobG9uZ1ApO1xuICAgICAgICBtaXhlZFBpZWNlcy5wdXNoKGxvbmdQKTtcbiAgICAgICAgbWl4ZWRQaWVjZXMucHVzaChzaG9ydFApO1xuICAgIH1cbiAgICAvLyBTb3J0aW5nIG1ha2VzIHN1cmUgaWYgb25lIG1vbnRoIChvciBhYmJyKSBpcyBhIHByZWZpeCBvZiBhbm90aGVyIGl0XG4gICAgLy8gd2lsbCBtYXRjaCB0aGUgbG9uZ2VyIHBpZWNlLlxuICAgIHNob3J0UGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICBsb25nUGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICBtaXhlZFBpZWNlcy5zb3J0KGNtcExlblJldik7XG5cbiAgICB0aGlzLl9tb250aHNSZWdleCA9IG5ldyBSZWdFeHAoJ14oJyArIG1peGVkUGllY2VzLmpvaW4oJ3wnKSArICcpJywgJ2knKTtcbiAgICB0aGlzLl9tb250aHNTaG9ydFJlZ2V4ID0gdGhpcy5fbW9udGhzUmVnZXg7XG4gICAgdGhpcy5fbW9udGhzU3RyaWN0UmVnZXggPSBuZXcgUmVnRXhwKFxuICAgICAgICAnXignICsgbG9uZ1BpZWNlcy5qb2luKCd8JykgKyAnKScsXG4gICAgICAgICdpJ1xuICAgICk7XG4gICAgdGhpcy5fbW9udGhzU2hvcnRTdHJpY3RSZWdleCA9IG5ldyBSZWdFeHAoXG4gICAgICAgICdeKCcgKyBzaG9ydFBpZWNlcy5qb2luKCd8JykgKyAnKScsXG4gICAgICAgICdpJ1xuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURhdGUoeSwgbSwgZCwgaCwgTSwgcywgbXMpIHtcbiAgICAvLyBjYW4ndCBqdXN0IGFwcGx5KCkgdG8gY3JlYXRlIGEgZGF0ZTpcbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMTgxMzQ4XG4gICAgdmFyIGRhdGU7XG4gICAgLy8gdGhlIGRhdGUgY29uc3RydWN0b3IgcmVtYXBzIHllYXJzIDAtOTkgdG8gMTkwMC0xOTk5XG4gICAgaWYgKHkgPCAxMDAgJiYgeSA+PSAwKSB7XG4gICAgICAgIC8vIHByZXNlcnZlIGxlYXAgeWVhcnMgdXNpbmcgYSBmdWxsIDQwMCB5ZWFyIGN5Y2xlLCB0aGVuIHJlc2V0XG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZSh5ICsgNDAwLCBtLCBkLCBoLCBNLCBzLCBtcyk7XG4gICAgICAgIGlmIChpc0Zpbml0ZShkYXRlLmdldEZ1bGxZZWFyKCkpKSB7XG4gICAgICAgICAgICBkYXRlLnNldEZ1bGxZZWFyKHkpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKHksIG0sIGQsIGgsIE0sIHMsIG1zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0ZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVVRDRGF0ZSh5KSB7XG4gICAgdmFyIGRhdGUsIGFyZ3M7XG4gICAgLy8gdGhlIERhdGUuVVRDIGZ1bmN0aW9uIHJlbWFwcyB5ZWFycyAwLTk5IHRvIDE5MDAtMTk5OVxuICAgIGlmICh5IDwgMTAwICYmIHkgPj0gMCkge1xuICAgICAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgLy8gcHJlc2VydmUgbGVhcCB5ZWFycyB1c2luZyBhIGZ1bGwgNDAwIHllYXIgY3ljbGUsIHRoZW4gcmVzZXRcbiAgICAgICAgYXJnc1swXSA9IHkgKyA0MDA7XG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQy5hcHBseShudWxsLCBhcmdzKSk7XG4gICAgICAgIGlmIChpc0Zpbml0ZShkYXRlLmdldFVUQ0Z1bGxZZWFyKCkpKSB7XG4gICAgICAgICAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHkpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDLmFwcGx5KG51bGwsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRlO1xufVxuXG4vLyBzdGFydC1vZi1maXJzdC13ZWVrIC0gc3RhcnQtb2YteWVhclxuZnVuY3Rpb24gZmlyc3RXZWVrT2Zmc2V0KHllYXIsIGRvdywgZG95KSB7XG4gICAgdmFyIC8vIGZpcnN0LXdlZWsgZGF5IC0tIHdoaWNoIGphbnVhcnkgaXMgYWx3YXlzIGluIHRoZSBmaXJzdCB3ZWVrICg0IGZvciBpc28sIDEgZm9yIG90aGVyKVxuICAgICAgICBmd2QgPSA3ICsgZG93IC0gZG95LFxuICAgICAgICAvLyBmaXJzdC13ZWVrIGRheSBsb2NhbCB3ZWVrZGF5IC0tIHdoaWNoIGxvY2FsIHdlZWtkYXkgaXMgZndkXG4gICAgICAgIGZ3ZGx3ID0gKDcgKyBjcmVhdGVVVENEYXRlKHllYXIsIDAsIGZ3ZCkuZ2V0VVRDRGF5KCkgLSBkb3cpICUgNztcblxuICAgIHJldHVybiAtZndkbHcgKyBmd2QgLSAxO1xufVxuXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlI0NhbGN1bGF0aW5nX2FfZGF0ZV9naXZlbl90aGVfeWVhci4yQ193ZWVrX251bWJlcl9hbmRfd2Vla2RheVxuZnVuY3Rpb24gZGF5T2ZZZWFyRnJvbVdlZWtzKHllYXIsIHdlZWssIHdlZWtkYXksIGRvdywgZG95KSB7XG4gICAgdmFyIGxvY2FsV2Vla2RheSA9ICg3ICsgd2Vla2RheSAtIGRvdykgJSA3LFxuICAgICAgICB3ZWVrT2Zmc2V0ID0gZmlyc3RXZWVrT2Zmc2V0KHllYXIsIGRvdywgZG95KSxcbiAgICAgICAgZGF5T2ZZZWFyID0gMSArIDcgKiAod2VlayAtIDEpICsgbG9jYWxXZWVrZGF5ICsgd2Vla09mZnNldCxcbiAgICAgICAgcmVzWWVhcixcbiAgICAgICAgcmVzRGF5T2ZZZWFyO1xuXG4gICAgaWYgKGRheU9mWWVhciA8PSAwKSB7XG4gICAgICAgIHJlc1llYXIgPSB5ZWFyIC0gMTtcbiAgICAgICAgcmVzRGF5T2ZZZWFyID0gZGF5c0luWWVhcihyZXNZZWFyKSArIGRheU9mWWVhcjtcbiAgICB9IGVsc2UgaWYgKGRheU9mWWVhciA+IGRheXNJblllYXIoeWVhcikpIHtcbiAgICAgICAgcmVzWWVhciA9IHllYXIgKyAxO1xuICAgICAgICByZXNEYXlPZlllYXIgPSBkYXlPZlllYXIgLSBkYXlzSW5ZZWFyKHllYXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc1llYXIgPSB5ZWFyO1xuICAgICAgICByZXNEYXlPZlllYXIgPSBkYXlPZlllYXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgeWVhcjogcmVzWWVhcixcbiAgICAgICAgZGF5T2ZZZWFyOiByZXNEYXlPZlllYXIsXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gd2Vla09mWWVhcihtb20sIGRvdywgZG95KSB7XG4gICAgdmFyIHdlZWtPZmZzZXQgPSBmaXJzdFdlZWtPZmZzZXQobW9tLnllYXIoKSwgZG93LCBkb3kpLFxuICAgICAgICB3ZWVrID0gTWF0aC5mbG9vcigobW9tLmRheU9mWWVhcigpIC0gd2Vla09mZnNldCAtIDEpIC8gNykgKyAxLFxuICAgICAgICByZXNXZWVrLFxuICAgICAgICByZXNZZWFyO1xuXG4gICAgaWYgKHdlZWsgPCAxKSB7XG4gICAgICAgIHJlc1llYXIgPSBtb20ueWVhcigpIC0gMTtcbiAgICAgICAgcmVzV2VlayA9IHdlZWsgKyB3ZWVrc0luWWVhcihyZXNZZWFyLCBkb3csIGRveSk7XG4gICAgfSBlbHNlIGlmICh3ZWVrID4gd2Vla3NJblllYXIobW9tLnllYXIoKSwgZG93LCBkb3kpKSB7XG4gICAgICAgIHJlc1dlZWsgPSB3ZWVrIC0gd2Vla3NJblllYXIobW9tLnllYXIoKSwgZG93LCBkb3kpO1xuICAgICAgICByZXNZZWFyID0gbW9tLnllYXIoKSArIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzWWVhciA9IG1vbS55ZWFyKCk7XG4gICAgICAgIHJlc1dlZWsgPSB3ZWVrO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHdlZWs6IHJlc1dlZWssXG4gICAgICAgIHllYXI6IHJlc1llYXIsXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gd2Vla3NJblllYXIoeWVhciwgZG93LCBkb3kpIHtcbiAgICB2YXIgd2Vla09mZnNldCA9IGZpcnN0V2Vla09mZnNldCh5ZWFyLCBkb3csIGRveSksXG4gICAgICAgIHdlZWtPZmZzZXROZXh0ID0gZmlyc3RXZWVrT2Zmc2V0KHllYXIgKyAxLCBkb3csIGRveSk7XG4gICAgcmV0dXJuIChkYXlzSW5ZZWFyKHllYXIpIC0gd2Vla09mZnNldCArIHdlZWtPZmZzZXROZXh0KSAvIDc7XG59XG5cbi8vIEZPUk1BVFRJTkdcblxuYWRkRm9ybWF0VG9rZW4oJ3cnLCBbJ3d3JywgMl0sICd3bycsICd3ZWVrJyk7XG5hZGRGb3JtYXRUb2tlbignVycsIFsnV1cnLCAyXSwgJ1dvJywgJ2lzb1dlZWsnKTtcblxuLy8gUEFSU0lOR1xuXG5hZGRSZWdleFRva2VuKCd3JywgbWF0Y2gxdG8yLCBtYXRjaDF0bzJOb0xlYWRpbmdaZXJvKTtcbmFkZFJlZ2V4VG9rZW4oJ3d3JywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuYWRkUmVnZXhUb2tlbignVycsIG1hdGNoMXRvMiwgbWF0Y2gxdG8yTm9MZWFkaW5nWmVybyk7XG5hZGRSZWdleFRva2VuKCdXVycsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcblxuYWRkV2Vla1BhcnNlVG9rZW4oXG4gICAgWyd3JywgJ3d3JywgJ1cnLCAnV1cnXSxcbiAgICBmdW5jdGlvbiAoaW5wdXQsIHdlZWssIGNvbmZpZywgdG9rZW4pIHtcbiAgICAgICAgd2Vla1t0b2tlbi5zdWJzdHIoMCwgMSldID0gdG9JbnQoaW5wdXQpO1xuICAgIH1cbik7XG5cbi8vIEhFTFBFUlNcblxuLy8gTE9DQUxFU1xuXG5mdW5jdGlvbiBsb2NhbGVXZWVrKG1vbSkge1xuICAgIHJldHVybiB3ZWVrT2ZZZWFyKG1vbSwgdGhpcy5fd2Vlay5kb3csIHRoaXMuX3dlZWsuZG95KS53ZWVrO1xufVxuXG52YXIgZGVmYXVsdExvY2FsZVdlZWsgPSB7XG4gICAgZG93OiAwLCAvLyBTdW5kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3k6IDYsIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDZ0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbn07XG5cbmZ1bmN0aW9uIGxvY2FsZUZpcnN0RGF5T2ZXZWVrKCkge1xuICAgIHJldHVybiB0aGlzLl93ZWVrLmRvdztcbn1cblxuZnVuY3Rpb24gbG9jYWxlRmlyc3REYXlPZlllYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dlZWsuZG95O1xufVxuXG4vLyBNT01FTlRTXG5cbmZ1bmN0aW9uIGdldFNldFdlZWsoaW5wdXQpIHtcbiAgICB2YXIgd2VlayA9IHRoaXMubG9jYWxlRGF0YSgpLndlZWsodGhpcyk7XG4gICAgcmV0dXJuIGlucHV0ID09IG51bGwgPyB3ZWVrIDogdGhpcy5hZGQoKGlucHV0IC0gd2VlaykgKiA3LCAnZCcpO1xufVxuXG5mdW5jdGlvbiBnZXRTZXRJU09XZWVrKGlucHV0KSB7XG4gICAgdmFyIHdlZWsgPSB3ZWVrT2ZZZWFyKHRoaXMsIDEsIDQpLndlZWs7XG4gICAgcmV0dXJuIGlucHV0ID09IG51bGwgPyB3ZWVrIDogdGhpcy5hZGQoKGlucHV0IC0gd2VlaykgKiA3LCAnZCcpO1xufVxuXG4vLyBGT1JNQVRUSU5HXG5cbmFkZEZvcm1hdFRva2VuKCdkJywgMCwgJ2RvJywgJ2RheScpO1xuXG5hZGRGb3JtYXRUb2tlbignZGQnLCAwLCAwLCBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLndlZWtkYXlzTWluKHRoaXMsIGZvcm1hdCk7XG59KTtcblxuYWRkRm9ybWF0VG9rZW4oJ2RkZCcsIDAsIDAsIGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkud2Vla2RheXNTaG9ydCh0aGlzLCBmb3JtYXQpO1xufSk7XG5cbmFkZEZvcm1hdFRva2VuKCdkZGRkJywgMCwgMCwgZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS53ZWVrZGF5cyh0aGlzLCBmb3JtYXQpO1xufSk7XG5cbmFkZEZvcm1hdFRva2VuKCdlJywgMCwgMCwgJ3dlZWtkYXknKTtcbmFkZEZvcm1hdFRva2VuKCdFJywgMCwgMCwgJ2lzb1dlZWtkYXknKTtcblxuLy8gUEFSU0lOR1xuXG5hZGRSZWdleFRva2VuKCdkJywgbWF0Y2gxdG8yKTtcbmFkZFJlZ2V4VG9rZW4oJ2UnLCBtYXRjaDF0bzIpO1xuYWRkUmVnZXhUb2tlbignRScsIG1hdGNoMXRvMik7XG5hZGRSZWdleFRva2VuKCdkZCcsIGZ1bmN0aW9uIChpc1N0cmljdCwgbG9jYWxlKSB7XG4gICAgcmV0dXJuIGxvY2FsZS53ZWVrZGF5c01pblJlZ2V4KGlzU3RyaWN0KTtcbn0pO1xuYWRkUmVnZXhUb2tlbignZGRkJywgZnVuY3Rpb24gKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICByZXR1cm4gbG9jYWxlLndlZWtkYXlzU2hvcnRSZWdleChpc1N0cmljdCk7XG59KTtcbmFkZFJlZ2V4VG9rZW4oJ2RkZGQnLCBmdW5jdGlvbiAoaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgIHJldHVybiBsb2NhbGUud2Vla2RheXNSZWdleChpc1N0cmljdCk7XG59KTtcblxuYWRkV2Vla1BhcnNlVG9rZW4oWydkZCcsICdkZGQnLCAnZGRkZCddLCBmdW5jdGlvbiAoaW5wdXQsIHdlZWssIGNvbmZpZywgdG9rZW4pIHtcbiAgICB2YXIgd2Vla2RheSA9IGNvbmZpZy5fbG9jYWxlLndlZWtkYXlzUGFyc2UoaW5wdXQsIHRva2VuLCBjb25maWcuX3N0cmljdCk7XG4gICAgLy8gaWYgd2UgZGlkbid0IGdldCBhIHdlZWtkYXkgbmFtZSwgbWFyayB0aGUgZGF0ZSBhcyBpbnZhbGlkXG4gICAgaWYgKHdlZWtkYXkgIT0gbnVsbCkge1xuICAgICAgICB3ZWVrLmQgPSB3ZWVrZGF5O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmludmFsaWRXZWVrZGF5ID0gaW5wdXQ7XG4gICAgfVxufSk7XG5cbmFkZFdlZWtQYXJzZVRva2VuKFsnZCcsICdlJywgJ0UnXSwgZnVuY3Rpb24gKGlucHV0LCB3ZWVrLCBjb25maWcsIHRva2VuKSB7XG4gICAgd2Vla1t0b2tlbl0gPSB0b0ludChpbnB1dCk7XG59KTtcblxuLy8gSEVMUEVSU1xuXG5mdW5jdGlvbiBwYXJzZVdlZWtkYXkoaW5wdXQsIGxvY2FsZSkge1xuICAgIGlmICh0eXBlb2YgaW5wdXQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBpbnB1dDtcbiAgICB9XG5cbiAgICBpZiAoIWlzTmFOKGlucHV0KSkge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoaW5wdXQsIDEwKTtcbiAgICB9XG5cbiAgICBpbnB1dCA9IGxvY2FsZS53ZWVrZGF5c1BhcnNlKGlucHV0KTtcbiAgICBpZiAodHlwZW9mIGlucHV0ID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIHBhcnNlSXNvV2Vla2RheShpbnB1dCwgbG9jYWxlKSB7XG4gICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS53ZWVrZGF5c1BhcnNlKGlucHV0KSAlIDcgfHwgNztcbiAgICB9XG4gICAgcmV0dXJuIGlzTmFOKGlucHV0KSA/IG51bGwgOiBpbnB1dDtcbn1cblxuLy8gTE9DQUxFU1xuZnVuY3Rpb24gc2hpZnRXZWVrZGF5cyh3cywgbikge1xuICAgIHJldHVybiB3cy5zbGljZShuLCA3KS5jb25jYXQod3Muc2xpY2UoMCwgbikpO1xufVxuXG52YXIgZGVmYXVsdExvY2FsZVdlZWtkYXlzID1cbiAgICAgICAgJ1N1bmRheV9Nb25kYXlfVHVlc2RheV9XZWRuZXNkYXlfVGh1cnNkYXlfRnJpZGF5X1NhdHVyZGF5Jy5zcGxpdCgnXycpLFxuICAgIGRlZmF1bHRMb2NhbGVXZWVrZGF5c1Nob3J0ID0gJ1N1bl9Nb25fVHVlX1dlZF9UaHVfRnJpX1NhdCcuc3BsaXQoJ18nKSxcbiAgICBkZWZhdWx0TG9jYWxlV2Vla2RheXNNaW4gPSAnU3VfTW9fVHVfV2VfVGhfRnJfU2EnLnNwbGl0KCdfJyksXG4gICAgZGVmYXVsdFdlZWtkYXlzUmVnZXggPSBtYXRjaFdvcmQsXG4gICAgZGVmYXVsdFdlZWtkYXlzU2hvcnRSZWdleCA9IG1hdGNoV29yZCxcbiAgICBkZWZhdWx0V2Vla2RheXNNaW5SZWdleCA9IG1hdGNoV29yZDtcblxuZnVuY3Rpb24gbG9jYWxlV2Vla2RheXMobSwgZm9ybWF0KSB7XG4gICAgdmFyIHdlZWtkYXlzID0gaXNBcnJheSh0aGlzLl93ZWVrZGF5cylcbiAgICAgICAgPyB0aGlzLl93ZWVrZGF5c1xuICAgICAgICA6IHRoaXMuX3dlZWtkYXlzW1xuICAgICAgICAgICAgICBtICYmIG0gIT09IHRydWUgJiYgdGhpcy5fd2Vla2RheXMuaXNGb3JtYXQudGVzdChmb3JtYXQpXG4gICAgICAgICAgICAgICAgICA/ICdmb3JtYXQnXG4gICAgICAgICAgICAgICAgICA6ICdzdGFuZGFsb25lJ1xuICAgICAgICAgIF07XG4gICAgcmV0dXJuIG0gPT09IHRydWVcbiAgICAgICAgPyBzaGlmdFdlZWtkYXlzKHdlZWtkYXlzLCB0aGlzLl93ZWVrLmRvdylcbiAgICAgICAgOiBtXG4gICAgICAgICAgPyB3ZWVrZGF5c1ttLmRheSgpXVxuICAgICAgICAgIDogd2Vla2RheXM7XG59XG5cbmZ1bmN0aW9uIGxvY2FsZVdlZWtkYXlzU2hvcnQobSkge1xuICAgIHJldHVybiBtID09PSB0cnVlXG4gICAgICAgID8gc2hpZnRXZWVrZGF5cyh0aGlzLl93ZWVrZGF5c1Nob3J0LCB0aGlzLl93ZWVrLmRvdylcbiAgICAgICAgOiBtXG4gICAgICAgICAgPyB0aGlzLl93ZWVrZGF5c1Nob3J0W20uZGF5KCldXG4gICAgICAgICAgOiB0aGlzLl93ZWVrZGF5c1Nob3J0O1xufVxuXG5mdW5jdGlvbiBsb2NhbGVXZWVrZGF5c01pbihtKSB7XG4gICAgcmV0dXJuIG0gPT09IHRydWVcbiAgICAgICAgPyBzaGlmdFdlZWtkYXlzKHRoaXMuX3dlZWtkYXlzTWluLCB0aGlzLl93ZWVrLmRvdylcbiAgICAgICAgOiBtXG4gICAgICAgICAgPyB0aGlzLl93ZWVrZGF5c01pblttLmRheSgpXVxuICAgICAgICAgIDogdGhpcy5fd2Vla2RheXNNaW47XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVN0cmljdFBhcnNlJDEod2Vla2RheU5hbWUsIGZvcm1hdCwgc3RyaWN0KSB7XG4gICAgdmFyIGksXG4gICAgICAgIGlpLFxuICAgICAgICBtb20sXG4gICAgICAgIGxsYyA9IHdlZWtkYXlOYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgaWYgKCF0aGlzLl93ZWVrZGF5c1BhcnNlKSB7XG4gICAgICAgIHRoaXMuX3dlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICAgICAgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlID0gW107XG4gICAgICAgIHRoaXMuX21pbldlZWtkYXlzUGFyc2UgPSBbXTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgNzsgKytpKSB7XG4gICAgICAgICAgICBtb20gPSBjcmVhdGVVVEMoWzIwMDAsIDFdKS5kYXkoaSk7XG4gICAgICAgICAgICB0aGlzLl9taW5XZWVrZGF5c1BhcnNlW2ldID0gdGhpcy53ZWVrZGF5c01pbihcbiAgICAgICAgICAgICAgICBtb20sXG4gICAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICkudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgICAgIHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZVtpXSA9IHRoaXMud2Vla2RheXNTaG9ydChcbiAgICAgICAgICAgICAgICBtb20sXG4gICAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICkudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgICAgIHRoaXMuX3dlZWtkYXlzUGFyc2VbaV0gPSB0aGlzLndlZWtkYXlzKG1vbSwgJycpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RyaWN0KSB7XG4gICAgICAgIGlmIChmb3JtYXQgPT09ICdkZGRkJykge1xuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fd2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAoZm9ybWF0ID09PSAnZGRkJykge1xuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX21pbldlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gJ2RkZGQnKSB7XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl93ZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9taW5XZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmIChmb3JtYXQgPT09ICdkZGQnKSB7XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fd2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9taW5XZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX21pbldlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fd2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsb2NhbGVXZWVrZGF5c1BhcnNlKHdlZWtkYXlOYW1lLCBmb3JtYXQsIHN0cmljdCkge1xuICAgIHZhciBpLCBtb20sIHJlZ2V4O1xuXG4gICAgaWYgKHRoaXMuX3dlZWtkYXlzUGFyc2VFeGFjdCkge1xuICAgICAgICByZXR1cm4gaGFuZGxlU3RyaWN0UGFyc2UkMS5jYWxsKHRoaXMsIHdlZWtkYXlOYW1lLCBmb3JtYXQsIHN0cmljdCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl93ZWVrZGF5c1BhcnNlKSB7XG4gICAgICAgIHRoaXMuX3dlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICAgICAgdGhpcy5fbWluV2Vla2RheXNQYXJzZSA9IFtdO1xuICAgICAgICB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICAgICAgdGhpcy5fZnVsbFdlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgIC8vIG1ha2UgdGhlIHJlZ2V4IGlmIHdlIGRvbid0IGhhdmUgaXQgYWxyZWFkeVxuXG4gICAgICAgIG1vbSA9IGNyZWF0ZVVUQyhbMjAwMCwgMV0pLmRheShpKTtcbiAgICAgICAgaWYgKHN0cmljdCAmJiAhdGhpcy5fZnVsbFdlZWtkYXlzUGFyc2VbaV0pIHtcbiAgICAgICAgICAgIHRoaXMuX2Z1bGxXZWVrZGF5c1BhcnNlW2ldID0gbmV3IFJlZ0V4cChcbiAgICAgICAgICAgICAgICAnXicgKyB0aGlzLndlZWtkYXlzKG1vbSwgJycpLnJlcGxhY2UoJy4nLCAnXFxcXC4/JykgKyAnJCcsXG4gICAgICAgICAgICAgICAgJ2knXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlW2ldID0gbmV3IFJlZ0V4cChcbiAgICAgICAgICAgICAgICAnXicgKyB0aGlzLndlZWtkYXlzU2hvcnQobW9tLCAnJykucmVwbGFjZSgnLicsICdcXFxcLj8nKSArICckJyxcbiAgICAgICAgICAgICAgICAnaSdcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLl9taW5XZWVrZGF5c1BhcnNlW2ldID0gbmV3IFJlZ0V4cChcbiAgICAgICAgICAgICAgICAnXicgKyB0aGlzLndlZWtkYXlzTWluKG1vbSwgJycpLnJlcGxhY2UoJy4nLCAnXFxcXC4/JykgKyAnJCcsXG4gICAgICAgICAgICAgICAgJ2knXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fd2Vla2RheXNQYXJzZVtpXSkge1xuICAgICAgICAgICAgcmVnZXggPVxuICAgICAgICAgICAgICAgICdeJyArXG4gICAgICAgICAgICAgICAgdGhpcy53ZWVrZGF5cyhtb20sICcnKSArXG4gICAgICAgICAgICAgICAgJ3xeJyArXG4gICAgICAgICAgICAgICAgdGhpcy53ZWVrZGF5c1Nob3J0KG1vbSwgJycpICtcbiAgICAgICAgICAgICAgICAnfF4nICtcbiAgICAgICAgICAgICAgICB0aGlzLndlZWtkYXlzTWluKG1vbSwgJycpO1xuICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNQYXJzZVtpXSA9IG5ldyBSZWdFeHAocmVnZXgucmVwbGFjZSgnLicsICcnKSwgJ2knKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB0ZXN0IHRoZSByZWdleFxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBzdHJpY3QgJiZcbiAgICAgICAgICAgIGZvcm1hdCA9PT0gJ2RkZGQnICYmXG4gICAgICAgICAgICB0aGlzLl9mdWxsV2Vla2RheXNQYXJzZVtpXS50ZXN0KHdlZWtkYXlOYW1lKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgc3RyaWN0ICYmXG4gICAgICAgICAgICBmb3JtYXQgPT09ICdkZGQnICYmXG4gICAgICAgICAgICB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2VbaV0udGVzdCh3ZWVrZGF5TmFtZSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIHN0cmljdCAmJlxuICAgICAgICAgICAgZm9ybWF0ID09PSAnZGQnICYmXG4gICAgICAgICAgICB0aGlzLl9taW5XZWVrZGF5c1BhcnNlW2ldLnRlc3Qod2Vla2RheU5hbWUpXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXN0cmljdCAmJiB0aGlzLl93ZWVrZGF5c1BhcnNlW2ldLnRlc3Qod2Vla2RheU5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gTU9NRU5UU1xuXG5mdW5jdGlvbiBnZXRTZXREYXlPZldlZWsoaW5wdXQpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiBpbnB1dCAhPSBudWxsID8gdGhpcyA6IE5hTjtcbiAgICB9XG5cbiAgICB2YXIgZGF5ID0gZ2V0KHRoaXMsICdEYXknKTtcbiAgICBpZiAoaW5wdXQgIT0gbnVsbCkge1xuICAgICAgICBpbnB1dCA9IHBhcnNlV2Vla2RheShpbnB1dCwgdGhpcy5sb2NhbGVEYXRhKCkpO1xuICAgICAgICByZXR1cm4gdGhpcy5hZGQoaW5wdXQgLSBkYXksICdkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGRheTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldFNldExvY2FsZURheU9mV2VlayhpbnB1dCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0ICE9IG51bGwgPyB0aGlzIDogTmFOO1xuICAgIH1cbiAgICB2YXIgd2Vla2RheSA9ICh0aGlzLmRheSgpICsgNyAtIHRoaXMubG9jYWxlRGF0YSgpLl93ZWVrLmRvdykgJSA3O1xuICAgIHJldHVybiBpbnB1dCA9PSBudWxsID8gd2Vla2RheSA6IHRoaXMuYWRkKGlucHV0IC0gd2Vla2RheSwgJ2QnKTtcbn1cblxuZnVuY3Rpb24gZ2V0U2V0SVNPRGF5T2ZXZWVrKGlucHV0KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4gaW5wdXQgIT0gbnVsbCA/IHRoaXMgOiBOYU47XG4gICAgfVxuXG4gICAgLy8gYmVoYXZlcyB0aGUgc2FtZSBhcyBtb21lbnQjZGF5IGV4Y2VwdFxuICAgIC8vIGFzIGEgZ2V0dGVyLCByZXR1cm5zIDcgaW5zdGVhZCBvZiAwICgxLTcgcmFuZ2UgaW5zdGVhZCBvZiAwLTYpXG4gICAgLy8gYXMgYSBzZXR0ZXIsIHN1bmRheSBzaG91bGQgYmVsb25nIHRvIHRoZSBwcmV2aW91cyB3ZWVrLlxuXG4gICAgaWYgKGlucHV0ICE9IG51bGwpIHtcbiAgICAgICAgdmFyIHdlZWtkYXkgPSBwYXJzZUlzb1dlZWtkYXkoaW5wdXQsIHRoaXMubG9jYWxlRGF0YSgpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF5KHRoaXMuZGF5KCkgJSA3ID8gd2Vla2RheSA6IHdlZWtkYXkgLSA3KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXkoKSB8fCA3O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gd2Vla2RheXNSZWdleChpc1N0cmljdCkge1xuICAgIGlmICh0aGlzLl93ZWVrZGF5c1BhcnNlRXhhY3QpIHtcbiAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNSZWdleCcpKSB7XG4gICAgICAgICAgICBjb21wdXRlV2Vla2RheXNQYXJzZS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1N0cmljdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU3RyaWN0UmVnZXg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNSZWdleDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzUmVnZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNSZWdleCA9IGRlZmF1bHRXZWVrZGF5c1JlZ2V4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1N0cmljdFJlZ2V4ICYmIGlzU3RyaWN0XG4gICAgICAgICAgICA/IHRoaXMuX3dlZWtkYXlzU3RyaWN0UmVnZXhcbiAgICAgICAgICAgIDogdGhpcy5fd2Vla2RheXNSZWdleDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHdlZWtkYXlzU2hvcnRSZWdleChpc1N0cmljdCkge1xuICAgIGlmICh0aGlzLl93ZWVrZGF5c1BhcnNlRXhhY3QpIHtcbiAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNSZWdleCcpKSB7XG4gICAgICAgICAgICBjb21wdXRlV2Vla2RheXNQYXJzZS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1N0cmljdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU2hvcnRTdHJpY3RSZWdleDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1Nob3J0UmVnZXg7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c1Nob3J0UmVnZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNTaG9ydFJlZ2V4ID0gZGVmYXVsdFdlZWtkYXlzU2hvcnRSZWdleDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNTaG9ydFN0cmljdFJlZ2V4ICYmIGlzU3RyaWN0XG4gICAgICAgICAgICA/IHRoaXMuX3dlZWtkYXlzU2hvcnRTdHJpY3RSZWdleFxuICAgICAgICAgICAgOiB0aGlzLl93ZWVrZGF5c1Nob3J0UmVnZXg7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB3ZWVrZGF5c01pblJlZ2V4KGlzU3RyaWN0KSB7XG4gICAgaWYgKHRoaXMuX3dlZWtkYXlzUGFyc2VFeGFjdCkge1xuICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c1JlZ2V4JykpIHtcbiAgICAgICAgICAgIGNvbXB1dGVXZWVrZGF5c1BhcnNlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzU3RyaWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNNaW5TdHJpY3RSZWdleDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c01pblJlZ2V4O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNNaW5SZWdleCcpKSB7XG4gICAgICAgICAgICB0aGlzLl93ZWVrZGF5c01pblJlZ2V4ID0gZGVmYXVsdFdlZWtkYXlzTWluUmVnZXg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzTWluU3RyaWN0UmVnZXggJiYgaXNTdHJpY3RcbiAgICAgICAgICAgID8gdGhpcy5fd2Vla2RheXNNaW5TdHJpY3RSZWdleFxuICAgICAgICAgICAgOiB0aGlzLl93ZWVrZGF5c01pblJlZ2V4O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY29tcHV0ZVdlZWtkYXlzUGFyc2UoKSB7XG4gICAgZnVuY3Rpb24gY21wTGVuUmV2KGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGIubGVuZ3RoIC0gYS5sZW5ndGg7XG4gICAgfVxuXG4gICAgdmFyIG1pblBpZWNlcyA9IFtdLFxuICAgICAgICBzaG9ydFBpZWNlcyA9IFtdLFxuICAgICAgICBsb25nUGllY2VzID0gW10sXG4gICAgICAgIG1peGVkUGllY2VzID0gW10sXG4gICAgICAgIGksXG4gICAgICAgIG1vbSxcbiAgICAgICAgbWlucCxcbiAgICAgICAgc2hvcnRwLFxuICAgICAgICBsb25ncDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgIC8vIG1ha2UgdGhlIHJlZ2V4IGlmIHdlIGRvbid0IGhhdmUgaXQgYWxyZWFkeVxuICAgICAgICBtb20gPSBjcmVhdGVVVEMoWzIwMDAsIDFdKS5kYXkoaSk7XG4gICAgICAgIG1pbnAgPSByZWdleEVzY2FwZSh0aGlzLndlZWtkYXlzTWluKG1vbSwgJycpKTtcbiAgICAgICAgc2hvcnRwID0gcmVnZXhFc2NhcGUodGhpcy53ZWVrZGF5c1Nob3J0KG1vbSwgJycpKTtcbiAgICAgICAgbG9uZ3AgPSByZWdleEVzY2FwZSh0aGlzLndlZWtkYXlzKG1vbSwgJycpKTtcbiAgICAgICAgbWluUGllY2VzLnB1c2gobWlucCk7XG4gICAgICAgIHNob3J0UGllY2VzLnB1c2goc2hvcnRwKTtcbiAgICAgICAgbG9uZ1BpZWNlcy5wdXNoKGxvbmdwKTtcbiAgICAgICAgbWl4ZWRQaWVjZXMucHVzaChtaW5wKTtcbiAgICAgICAgbWl4ZWRQaWVjZXMucHVzaChzaG9ydHApO1xuICAgICAgICBtaXhlZFBpZWNlcy5wdXNoKGxvbmdwKTtcbiAgICB9XG4gICAgLy8gU29ydGluZyBtYWtlcyBzdXJlIGlmIG9uZSB3ZWVrZGF5IChvciBhYmJyKSBpcyBhIHByZWZpeCBvZiBhbm90aGVyIGl0XG4gICAgLy8gd2lsbCBtYXRjaCB0aGUgbG9uZ2VyIHBpZWNlLlxuICAgIG1pblBpZWNlcy5zb3J0KGNtcExlblJldik7XG4gICAgc2hvcnRQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xuICAgIGxvbmdQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xuICAgIG1peGVkUGllY2VzLnNvcnQoY21wTGVuUmV2KTtcblxuICAgIHRoaXMuX3dlZWtkYXlzUmVnZXggPSBuZXcgUmVnRXhwKCdeKCcgKyBtaXhlZFBpZWNlcy5qb2luKCd8JykgKyAnKScsICdpJyk7XG4gICAgdGhpcy5fd2Vla2RheXNTaG9ydFJlZ2V4ID0gdGhpcy5fd2Vla2RheXNSZWdleDtcbiAgICB0aGlzLl93ZWVrZGF5c01pblJlZ2V4ID0gdGhpcy5fd2Vla2RheXNSZWdleDtcblxuICAgIHRoaXMuX3dlZWtkYXlzU3RyaWN0UmVnZXggPSBuZXcgUmVnRXhwKFxuICAgICAgICAnXignICsgbG9uZ1BpZWNlcy5qb2luKCd8JykgKyAnKScsXG4gICAgICAgICdpJ1xuICAgICk7XG4gICAgdGhpcy5fd2Vla2RheXNTaG9ydFN0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cChcbiAgICAgICAgJ14oJyArIHNob3J0UGllY2VzLmpvaW4oJ3wnKSArICcpJyxcbiAgICAgICAgJ2knXG4gICAgKTtcbiAgICB0aGlzLl93ZWVrZGF5c01pblN0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cChcbiAgICAgICAgJ14oJyArIG1pblBpZWNlcy5qb2luKCd8JykgKyAnKScsXG4gICAgICAgICdpJ1xuICAgICk7XG59XG5cbi8vIEZPUk1BVFRJTkdcblxuZnVuY3Rpb24gaEZvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5ob3VycygpICUgMTIgfHwgMTI7XG59XG5cbmZ1bmN0aW9uIGtGb3JtYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaG91cnMoKSB8fCAyNDtcbn1cblxuYWRkRm9ybWF0VG9rZW4oJ0gnLCBbJ0hIJywgMl0sIDAsICdob3VyJyk7XG5hZGRGb3JtYXRUb2tlbignaCcsIFsnaGgnLCAyXSwgMCwgaEZvcm1hdCk7XG5hZGRGb3JtYXRUb2tlbignaycsIFsna2snLCAyXSwgMCwga0Zvcm1hdCk7XG5cbmFkZEZvcm1hdFRva2VuKCdobW0nLCAwLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICcnICsgaEZvcm1hdC5hcHBseSh0aGlzKSArIHplcm9GaWxsKHRoaXMubWludXRlcygpLCAyKTtcbn0pO1xuXG5hZGRGb3JtYXRUb2tlbignaG1tc3MnLCAwLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgJycgK1xuICAgICAgICBoRm9ybWF0LmFwcGx5KHRoaXMpICtcbiAgICAgICAgemVyb0ZpbGwodGhpcy5taW51dGVzKCksIDIpICtcbiAgICAgICAgemVyb0ZpbGwodGhpcy5zZWNvbmRzKCksIDIpXG4gICAgKTtcbn0pO1xuXG5hZGRGb3JtYXRUb2tlbignSG1tJywgMCwgMCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnJyArIHRoaXMuaG91cnMoKSArIHplcm9GaWxsKHRoaXMubWludXRlcygpLCAyKTtcbn0pO1xuXG5hZGRGb3JtYXRUb2tlbignSG1tc3MnLCAwLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgJycgK1xuICAgICAgICB0aGlzLmhvdXJzKCkgK1xuICAgICAgICB6ZXJvRmlsbCh0aGlzLm1pbnV0ZXMoKSwgMikgK1xuICAgICAgICB6ZXJvRmlsbCh0aGlzLnNlY29uZHMoKSwgMilcbiAgICApO1xufSk7XG5cbmZ1bmN0aW9uIG1lcmlkaWVtKHRva2VuLCBsb3dlcmNhc2UpIHtcbiAgICBhZGRGb3JtYXRUb2tlbih0b2tlbiwgMCwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkubWVyaWRpZW0oXG4gICAgICAgICAgICB0aGlzLmhvdXJzKCksXG4gICAgICAgICAgICB0aGlzLm1pbnV0ZXMoKSxcbiAgICAgICAgICAgIGxvd2VyY2FzZVxuICAgICAgICApO1xuICAgIH0pO1xufVxuXG5tZXJpZGllbSgnYScsIHRydWUpO1xubWVyaWRpZW0oJ0EnLCBmYWxzZSk7XG5cbi8vIFBBUlNJTkdcblxuZnVuY3Rpb24gbWF0Y2hNZXJpZGllbShpc1N0cmljdCwgbG9jYWxlKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5fbWVyaWRpZW1QYXJzZTtcbn1cblxuYWRkUmVnZXhUb2tlbignYScsIG1hdGNoTWVyaWRpZW0pO1xuYWRkUmVnZXhUb2tlbignQScsIG1hdGNoTWVyaWRpZW0pO1xuYWRkUmVnZXhUb2tlbignSCcsIG1hdGNoMXRvMiwgbWF0Y2gxdG8ySGFzWmVybyk7XG5hZGRSZWdleFRva2VuKCdoJywgbWF0Y2gxdG8yLCBtYXRjaDF0bzJOb0xlYWRpbmdaZXJvKTtcbmFkZFJlZ2V4VG9rZW4oJ2snLCBtYXRjaDF0bzIsIG1hdGNoMXRvMk5vTGVhZGluZ1plcm8pO1xuYWRkUmVnZXhUb2tlbignSEgnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG5hZGRSZWdleFRva2VuKCdoaCcsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbmFkZFJlZ2V4VG9rZW4oJ2trJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuXG5hZGRSZWdleFRva2VuKCdobW0nLCBtYXRjaDN0bzQpO1xuYWRkUmVnZXhUb2tlbignaG1tc3MnLCBtYXRjaDV0bzYpO1xuYWRkUmVnZXhUb2tlbignSG1tJywgbWF0Y2gzdG80KTtcbmFkZFJlZ2V4VG9rZW4oJ0htbXNzJywgbWF0Y2g1dG82KTtcblxuYWRkUGFyc2VUb2tlbihbJ0gnLCAnSEgnXSwgSE9VUik7XG5hZGRQYXJzZVRva2VuKFsnaycsICdrayddLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICB2YXIga0lucHV0ID0gdG9JbnQoaW5wdXQpO1xuICAgIGFycmF5W0hPVVJdID0ga0lucHV0ID09PSAyNCA/IDAgOiBrSW5wdXQ7XG59KTtcbmFkZFBhcnNlVG9rZW4oWydhJywgJ0EnXSwgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgY29uZmlnLl9pc1BtID0gY29uZmlnLl9sb2NhbGUuaXNQTShpbnB1dCk7XG4gICAgY29uZmlnLl9tZXJpZGllbSA9IGlucHV0O1xufSk7XG5hZGRQYXJzZVRva2VuKFsnaCcsICdoaCddLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICBhcnJheVtIT1VSXSA9IHRvSW50KGlucHV0KTtcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5iaWdIb3VyID0gdHJ1ZTtcbn0pO1xuYWRkUGFyc2VUb2tlbignaG1tJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgdmFyIHBvcyA9IGlucHV0Lmxlbmd0aCAtIDI7XG4gICAgYXJyYXlbSE9VUl0gPSB0b0ludChpbnB1dC5zdWJzdHIoMCwgcG9zKSk7XG4gICAgYXJyYXlbTUlOVVRFXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MpKTtcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5iaWdIb3VyID0gdHJ1ZTtcbn0pO1xuYWRkUGFyc2VUb2tlbignaG1tc3MnLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICB2YXIgcG9zMSA9IGlucHV0Lmxlbmd0aCAtIDQsXG4gICAgICAgIHBvczIgPSBpbnB1dC5sZW5ndGggLSAyO1xuICAgIGFycmF5W0hPVVJdID0gdG9JbnQoaW5wdXQuc3Vic3RyKDAsIHBvczEpKTtcbiAgICBhcnJheVtNSU5VVEVdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvczEsIDIpKTtcbiAgICBhcnJheVtTRUNPTkRdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvczIpKTtcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5iaWdIb3VyID0gdHJ1ZTtcbn0pO1xuYWRkUGFyc2VUb2tlbignSG1tJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgdmFyIHBvcyA9IGlucHV0Lmxlbmd0aCAtIDI7XG4gICAgYXJyYXlbSE9VUl0gPSB0b0ludChpbnB1dC5zdWJzdHIoMCwgcG9zKSk7XG4gICAgYXJyYXlbTUlOVVRFXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MpKTtcbn0pO1xuYWRkUGFyc2VUb2tlbignSG1tc3MnLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICB2YXIgcG9zMSA9IGlucHV0Lmxlbmd0aCAtIDQsXG4gICAgICAgIHBvczIgPSBpbnB1dC5sZW5ndGggLSAyO1xuICAgIGFycmF5W0hPVVJdID0gdG9JbnQoaW5wdXQuc3Vic3RyKDAsIHBvczEpKTtcbiAgICBhcnJheVtNSU5VVEVdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvczEsIDIpKTtcbiAgICBhcnJheVtTRUNPTkRdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvczIpKTtcbn0pO1xuXG4vLyBMT0NBTEVTXG5cbmZ1bmN0aW9uIGxvY2FsZUlzUE0oaW5wdXQpIHtcbiAgICAvLyBJRTggUXVpcmtzIE1vZGUgJiBJRTcgU3RhbmRhcmRzIE1vZGUgZG8gbm90IGFsbG93IGFjY2Vzc2luZyBzdHJpbmdzIGxpa2UgYXJyYXlzXG4gICAgLy8gVXNpbmcgY2hhckF0IHNob3VsZCBiZSBtb3JlIGNvbXBhdGlibGUuXG4gICAgcmV0dXJuIChpbnB1dCArICcnKS50b0xvd2VyQ2FzZSgpLmNoYXJBdCgwKSA9PT0gJ3AnO1xufVxuXG52YXIgZGVmYXVsdExvY2FsZU1lcmlkaWVtUGFyc2UgPSAvW2FwXVxcLj9tP1xcLj8vaSxcbiAgICAvLyBTZXR0aW5nIHRoZSBob3VyIHNob3VsZCBrZWVwIHRoZSB0aW1lLCBiZWNhdXNlIHRoZSB1c2VyIGV4cGxpY2l0bHlcbiAgICAvLyBzcGVjaWZpZWQgd2hpY2ggaG91ciB0aGV5IHdhbnQuIFNvIHRyeWluZyB0byBtYWludGFpbiB0aGUgc2FtZSBob3VyIChpblxuICAgIC8vIGEgbmV3IHRpbWV6b25lKSBtYWtlcyBzZW5zZS4gQWRkaW5nL3N1YnRyYWN0aW5nIGhvdXJzIGRvZXMgbm90IGZvbGxvd1xuICAgIC8vIHRoaXMgcnVsZS5cbiAgICBnZXRTZXRIb3VyID0gbWFrZUdldFNldCgnSG91cnMnLCB0cnVlKTtcblxuZnVuY3Rpb24gbG9jYWxlTWVyaWRpZW0oaG91cnMsIG1pbnV0ZXMsIGlzTG93ZXIpIHtcbiAgICBpZiAoaG91cnMgPiAxMSkge1xuICAgICAgICByZXR1cm4gaXNMb3dlciA/ICdwbScgOiAnUE0nO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpc0xvd2VyID8gJ2FtJyA6ICdBTSc7XG4gICAgfVxufVxuXG52YXIgYmFzZUNvbmZpZyA9IHtcbiAgICBjYWxlbmRhcjogZGVmYXVsdENhbGVuZGFyLFxuICAgIGxvbmdEYXRlRm9ybWF0OiBkZWZhdWx0TG9uZ0RhdGVGb3JtYXQsXG4gICAgaW52YWxpZERhdGU6IGRlZmF1bHRJbnZhbGlkRGF0ZSxcbiAgICBvcmRpbmFsOiBkZWZhdWx0T3JkaW5hbCxcbiAgICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiBkZWZhdWx0RGF5T2ZNb250aE9yZGluYWxQYXJzZSxcbiAgICByZWxhdGl2ZVRpbWU6IGRlZmF1bHRSZWxhdGl2ZVRpbWUsXG5cbiAgICBtb250aHM6IGRlZmF1bHRMb2NhbGVNb250aHMsXG4gICAgbW9udGhzU2hvcnQ6IGRlZmF1bHRMb2NhbGVNb250aHNTaG9ydCxcblxuICAgIHdlZWs6IGRlZmF1bHRMb2NhbGVXZWVrLFxuXG4gICAgd2Vla2RheXM6IGRlZmF1bHRMb2NhbGVXZWVrZGF5cyxcbiAgICB3ZWVrZGF5c01pbjogZGVmYXVsdExvY2FsZVdlZWtkYXlzTWluLFxuICAgIHdlZWtkYXlzU2hvcnQ6IGRlZmF1bHRMb2NhbGVXZWVrZGF5c1Nob3J0LFxuXG4gICAgbWVyaWRpZW1QYXJzZTogZGVmYXVsdExvY2FsZU1lcmlkaWVtUGFyc2UsXG59O1xuXG4vLyBpbnRlcm5hbCBzdG9yYWdlIGZvciBsb2NhbGUgY29uZmlnIGZpbGVzXG52YXIgbG9jYWxlcyA9IHt9LFxuICAgIGxvY2FsZUZhbWlsaWVzID0ge30sXG4gICAgZ2xvYmFsTG9jYWxlO1xuXG5mdW5jdGlvbiBjb21tb25QcmVmaXgoYXJyMSwgYXJyMikge1xuICAgIHZhciBpLFxuICAgICAgICBtaW5sID0gTWF0aC5taW4oYXJyMS5sZW5ndGgsIGFycjIubGVuZ3RoKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbWlubDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChhcnIxW2ldICE9PSBhcnIyW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWlubDtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlKGtleSkge1xuICAgIHJldHVybiBrZXkgPyBrZXkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKCdfJywgJy0nKSA6IGtleTtcbn1cblxuLy8gcGljayB0aGUgbG9jYWxlIGZyb20gdGhlIGFycmF5XG4vLyB0cnkgWydlbi1hdScsICdlbi1nYiddIGFzICdlbi1hdScsICdlbi1nYicsICdlbicsIGFzIGluIG1vdmUgdGhyb3VnaCB0aGUgbGlzdCB0cnlpbmcgZWFjaFxuLy8gc3Vic3RyaW5nIGZyb20gbW9zdCBzcGVjaWZpYyB0byBsZWFzdCwgYnV0IG1vdmUgdG8gdGhlIG5leHQgYXJyYXkgaXRlbSBpZiBpdCdzIGEgbW9yZSBzcGVjaWZpYyB2YXJpYW50IHRoYW4gdGhlIGN1cnJlbnQgcm9vdFxuZnVuY3Rpb24gY2hvb3NlTG9jYWxlKG5hbWVzKSB7XG4gICAgdmFyIGkgPSAwLFxuICAgICAgICBqLFxuICAgICAgICBuZXh0LFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHNwbGl0O1xuXG4gICAgd2hpbGUgKGkgPCBuYW1lcy5sZW5ndGgpIHtcbiAgICAgICAgc3BsaXQgPSBub3JtYWxpemVMb2NhbGUobmFtZXNbaV0pLnNwbGl0KCctJyk7XG4gICAgICAgIGogPSBzcGxpdC5sZW5ndGg7XG4gICAgICAgIG5leHQgPSBub3JtYWxpemVMb2NhbGUobmFtZXNbaSArIDFdKTtcbiAgICAgICAgbmV4dCA9IG5leHQgPyBuZXh0LnNwbGl0KCctJykgOiBudWxsO1xuICAgICAgICB3aGlsZSAoaiA+IDApIHtcbiAgICAgICAgICAgIGxvY2FsZSA9IGxvYWRMb2NhbGUoc3BsaXQuc2xpY2UoMCwgaikuam9pbignLScpKTtcbiAgICAgICAgICAgIGlmIChsb2NhbGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9jYWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIG5leHQgJiZcbiAgICAgICAgICAgICAgICBuZXh0Lmxlbmd0aCA+PSBqICYmXG4gICAgICAgICAgICAgICAgY29tbW9uUHJlZml4KHNwbGl0LCBuZXh0KSA+PSBqIC0gMVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgLy90aGUgbmV4dCBhcnJheSBpdGVtIGlzIGJldHRlciB0aGFuIGEgc2hhbGxvd2VyIHN1YnN0cmluZyBvZiB0aGlzIG9uZVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgai0tO1xuICAgICAgICB9XG4gICAgICAgIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIGdsb2JhbExvY2FsZTtcbn1cblxuZnVuY3Rpb24gaXNMb2NhbGVOYW1lU2FuZShuYW1lKSB7XG4gICAgLy8gUHJldmVudCBuYW1lcyB0aGF0IGxvb2sgbGlrZSBmaWxlc3lzdGVtIHBhdGhzLCBpLmUgY29udGFpbiAnLycgb3IgJ1xcJ1xuICAgIC8vIEVuc3VyZSBuYW1lIGlzIGF2YWlsYWJsZSBhbmQgZnVuY3Rpb24gcmV0dXJucyBib29sZWFuXG4gICAgcmV0dXJuICEhKG5hbWUgJiYgbmFtZS5tYXRjaCgnXlteL1xcXFxcXFxcXSokJykpO1xufVxuXG5mdW5jdGlvbiBsb2FkTG9jYWxlKG5hbWUpIHtcbiAgICB2YXIgb2xkTG9jYWxlID0gbnVsbCxcbiAgICAgICAgYWxpYXNlZFJlcXVpcmU7XG4gICAgLy8gVE9ETzogRmluZCBhIGJldHRlciB3YXkgdG8gcmVnaXN0ZXIgYW5kIGxvYWQgYWxsIHRoZSBsb2NhbGVzIGluIE5vZGVcbiAgICBpZiAoXG4gICAgICAgIGxvY2FsZXNbbmFtZV0gPT09IHVuZGVmaW5lZCAmJlxuICAgICAgICB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBtb2R1bGUgJiZcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgJiZcbiAgICAgICAgaXNMb2NhbGVOYW1lU2FuZShuYW1lKVxuICAgICkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgb2xkTG9jYWxlID0gZ2xvYmFsTG9jYWxlLl9hYmJyO1xuICAgICAgICAgICAgYWxpYXNlZFJlcXVpcmUgPSByZXF1aXJlO1xuICAgICAgICAgICAgYWxpYXNlZFJlcXVpcmUoJy4vbG9jYWxlLycgKyBuYW1lKTtcbiAgICAgICAgICAgIGdldFNldEdsb2JhbExvY2FsZShvbGRMb2NhbGUpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBtYXJrIGFzIG5vdCBmb3VuZCB0byBhdm9pZCByZXBlYXRpbmcgZXhwZW5zaXZlIGZpbGUgcmVxdWlyZSBjYWxsIGNhdXNpbmcgaGlnaCBDUFVcbiAgICAgICAgICAgIC8vIHdoZW4gdHJ5aW5nIHRvIGZpbmQgZW4tVVMsIGVuX1VTLCBlbi11cyBmb3IgZXZlcnkgZm9ybWF0IGNhbGxcbiAgICAgICAgICAgIGxvY2FsZXNbbmFtZV0gPSBudWxsOyAvLyBudWxsIG1lYW5zIG5vdCBmb3VuZFxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBsb2NhbGVzW25hbWVdO1xufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIHdpbGwgbG9hZCBsb2NhbGUgYW5kIHRoZW4gc2V0IHRoZSBnbG9iYWwgbG9jYWxlLiAgSWZcbi8vIG5vIGFyZ3VtZW50cyBhcmUgcGFzc2VkIGluLCBpdCB3aWxsIHNpbXBseSByZXR1cm4gdGhlIGN1cnJlbnQgZ2xvYmFsXG4vLyBsb2NhbGUga2V5LlxuZnVuY3Rpb24gZ2V0U2V0R2xvYmFsTG9jYWxlKGtleSwgdmFsdWVzKSB7XG4gICAgdmFyIGRhdGE7XG4gICAgaWYgKGtleSkge1xuICAgICAgICBpZiAoaXNVbmRlZmluZWQodmFsdWVzKSkge1xuICAgICAgICAgICAgZGF0YSA9IGdldExvY2FsZShrZXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF0YSA9IGRlZmluZUxvY2FsZShrZXksIHZhbHVlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgLy8gbW9tZW50LmR1cmF0aW9uLl9sb2NhbGUgPSBtb21lbnQuX2xvY2FsZSA9IGRhdGE7XG4gICAgICAgICAgICBnbG9iYWxMb2NhbGUgPSBkYXRhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBjb25zb2xlLndhcm4pIHtcbiAgICAgICAgICAgICAgICAvL3dhcm4gdXNlciBpZiBhcmd1bWVudHMgYXJlIHBhc3NlZCBidXQgdGhlIGxvY2FsZSBjb3VsZCBub3QgYmUgc2V0XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgICAgICAnTG9jYWxlICcgKyBrZXkgKyAnIG5vdCBmb3VuZC4gRGlkIHlvdSBmb3JnZXQgdG8gbG9hZCBpdD8nXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBnbG9iYWxMb2NhbGUuX2FiYnI7XG59XG5cbmZ1bmN0aW9uIGRlZmluZUxvY2FsZShuYW1lLCBjb25maWcpIHtcbiAgICBpZiAoY29uZmlnICE9PSBudWxsKSB7XG4gICAgICAgIHZhciBsb2NhbGUsXG4gICAgICAgICAgICBwYXJlbnRDb25maWcgPSBiYXNlQ29uZmlnO1xuICAgICAgICBjb25maWcuYWJiciA9IG5hbWU7XG4gICAgICAgIGlmIChsb2NhbGVzW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGRlcHJlY2F0ZVNpbXBsZShcbiAgICAgICAgICAgICAgICAnZGVmaW5lTG9jYWxlT3ZlcnJpZGUnLFxuICAgICAgICAgICAgICAgICd1c2UgbW9tZW50LnVwZGF0ZUxvY2FsZShsb2NhbGVOYW1lLCBjb25maWcpIHRvIGNoYW5nZSAnICtcbiAgICAgICAgICAgICAgICAgICAgJ2FuIGV4aXN0aW5nIGxvY2FsZS4gbW9tZW50LmRlZmluZUxvY2FsZShsb2NhbGVOYW1lLCAnICtcbiAgICAgICAgICAgICAgICAgICAgJ2NvbmZpZykgc2hvdWxkIG9ubHkgYmUgdXNlZCBmb3IgY3JlYXRpbmcgYSBuZXcgbG9jYWxlICcgK1xuICAgICAgICAgICAgICAgICAgICAnU2VlIGh0dHA6Ly9tb21lbnRqcy5jb20vZ3VpZGVzLyMvd2FybmluZ3MvZGVmaW5lLWxvY2FsZS8gZm9yIG1vcmUgaW5mby4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcGFyZW50Q29uZmlnID0gbG9jYWxlc1tuYW1lXS5fY29uZmlnO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbmZpZy5wYXJlbnRMb2NhbGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGxvY2FsZXNbY29uZmlnLnBhcmVudExvY2FsZV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHBhcmVudENvbmZpZyA9IGxvY2FsZXNbY29uZmlnLnBhcmVudExvY2FsZV0uX2NvbmZpZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbG9jYWxlID0gbG9hZExvY2FsZShjb25maWcucGFyZW50TG9jYWxlKTtcbiAgICAgICAgICAgICAgICBpZiAobG9jYWxlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Q29uZmlnID0gbG9jYWxlLl9jb25maWc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFsb2NhbGVGYW1pbGllc1tjb25maWcucGFyZW50TG9jYWxlXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlRmFtaWxpZXNbY29uZmlnLnBhcmVudExvY2FsZV0gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsb2NhbGVGYW1pbGllc1tjb25maWcucGFyZW50TG9jYWxlXS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsb2NhbGVzW25hbWVdID0gbmV3IExvY2FsZShtZXJnZUNvbmZpZ3MocGFyZW50Q29uZmlnLCBjb25maWcpKTtcblxuICAgICAgICBpZiAobG9jYWxlRmFtaWxpZXNbbmFtZV0pIHtcbiAgICAgICAgICAgIGxvY2FsZUZhbWlsaWVzW25hbWVdLmZvckVhY2goZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICBkZWZpbmVMb2NhbGUoeC5uYW1lLCB4LmNvbmZpZyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGJhY2t3YXJkcyBjb21wYXQgZm9yIG5vdzogYWxzbyBzZXQgdGhlIGxvY2FsZVxuICAgICAgICAvLyBtYWtlIHN1cmUgd2Ugc2V0IHRoZSBsb2NhbGUgQUZURVIgYWxsIGNoaWxkIGxvY2FsZXMgaGF2ZSBiZWVuXG4gICAgICAgIC8vIGNyZWF0ZWQsIHNvIHdlIHdvbid0IGVuZCB1cCB3aXRoIHRoZSBjaGlsZCBsb2NhbGUgc2V0LlxuICAgICAgICBnZXRTZXRHbG9iYWxMb2NhbGUobmFtZSk7XG5cbiAgICAgICAgcmV0dXJuIGxvY2FsZXNbbmFtZV07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdXNlZnVsIGZvciB0ZXN0aW5nXG4gICAgICAgIGRlbGV0ZSBsb2NhbGVzW25hbWVdO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxvY2FsZShuYW1lLCBjb25maWcpIHtcbiAgICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICAgICAgdmFyIGxvY2FsZSxcbiAgICAgICAgICAgIHRtcExvY2FsZSxcbiAgICAgICAgICAgIHBhcmVudENvbmZpZyA9IGJhc2VDb25maWc7XG5cbiAgICAgICAgaWYgKGxvY2FsZXNbbmFtZV0gIT0gbnVsbCAmJiBsb2NhbGVzW25hbWVdLnBhcmVudExvY2FsZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAvLyBVcGRhdGUgZXhpc3RpbmcgY2hpbGQgbG9jYWxlIGluLXBsYWNlIHRvIGF2b2lkIG1lbW9yeS1sZWFrc1xuICAgICAgICAgICAgbG9jYWxlc1tuYW1lXS5zZXQobWVyZ2VDb25maWdzKGxvY2FsZXNbbmFtZV0uX2NvbmZpZywgY29uZmlnKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBNRVJHRVxuICAgICAgICAgICAgdG1wTG9jYWxlID0gbG9hZExvY2FsZShuYW1lKTtcbiAgICAgICAgICAgIGlmICh0bXBMb2NhbGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHBhcmVudENvbmZpZyA9IHRtcExvY2FsZS5fY29uZmlnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uZmlnID0gbWVyZ2VDb25maWdzKHBhcmVudENvbmZpZywgY29uZmlnKTtcbiAgICAgICAgICAgIGlmICh0bXBMb2NhbGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZUxvY2FsZSBpcyBjYWxsZWQgZm9yIGNyZWF0aW5nIGEgbmV3IGxvY2FsZVxuICAgICAgICAgICAgICAgIC8vIFNldCBhYmJyIHNvIGl0IHdpbGwgaGF2ZSBhIG5hbWUgKGdldHRlcnMgcmV0dXJuXG4gICAgICAgICAgICAgICAgLy8gdW5kZWZpbmVkIG90aGVyd2lzZSkuXG4gICAgICAgICAgICAgICAgY29uZmlnLmFiYnIgPSBuYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9jYWxlID0gbmV3IExvY2FsZShjb25maWcpO1xuICAgICAgICAgICAgbG9jYWxlLnBhcmVudExvY2FsZSA9IGxvY2FsZXNbbmFtZV07XG4gICAgICAgICAgICBsb2NhbGVzW25hbWVdID0gbG9jYWxlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYmFja3dhcmRzIGNvbXBhdCBmb3Igbm93OiBhbHNvIHNldCB0aGUgbG9jYWxlXG4gICAgICAgIGdldFNldEdsb2JhbExvY2FsZShuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBwYXNzIG51bGwgZm9yIGNvbmZpZyB0byB1bnVwZGF0ZSwgdXNlZnVsIGZvciB0ZXN0c1xuICAgICAgICBpZiAobG9jYWxlc1tuYW1lXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAobG9jYWxlc1tuYW1lXS5wYXJlbnRMb2NhbGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsZXNbbmFtZV0gPSBsb2NhbGVzW25hbWVdLnBhcmVudExvY2FsZTtcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gZ2V0U2V0R2xvYmFsTG9jYWxlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0U2V0R2xvYmFsTG9jYWxlKG5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAobG9jYWxlc1tuYW1lXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGxvY2FsZXNbbmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGxvY2FsZXNbbmFtZV07XG59XG5cbi8vIHJldHVybnMgbG9jYWxlIGRhdGFcbmZ1bmN0aW9uIGdldExvY2FsZShrZXkpIHtcbiAgICB2YXIgbG9jYWxlO1xuXG4gICAgaWYgKGtleSAmJiBrZXkuX2xvY2FsZSAmJiBrZXkuX2xvY2FsZS5fYWJicikge1xuICAgICAgICBrZXkgPSBrZXkuX2xvY2FsZS5fYWJicjtcbiAgICB9XG5cbiAgICBpZiAoIWtleSkge1xuICAgICAgICByZXR1cm4gZ2xvYmFsTG9jYWxlO1xuICAgIH1cblxuICAgIGlmICghaXNBcnJheShrZXkpKSB7XG4gICAgICAgIC8vc2hvcnQtY2lyY3VpdCBldmVyeXRoaW5nIGVsc2VcbiAgICAgICAgbG9jYWxlID0gbG9hZExvY2FsZShrZXkpO1xuICAgICAgICBpZiAobG9jYWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gbG9jYWxlO1xuICAgICAgICB9XG4gICAgICAgIGtleSA9IFtrZXldO1xuICAgIH1cblxuICAgIHJldHVybiBjaG9vc2VMb2NhbGUoa2V5KTtcbn1cblxuZnVuY3Rpb24gbGlzdExvY2FsZXMoKSB7XG4gICAgcmV0dXJuIGtleXMobG9jYWxlcyk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrT3ZlcmZsb3cobSkge1xuICAgIHZhciBvdmVyZmxvdyxcbiAgICAgICAgYSA9IG0uX2E7XG5cbiAgICBpZiAoYSAmJiBnZXRQYXJzaW5nRmxhZ3MobSkub3ZlcmZsb3cgPT09IC0yKSB7XG4gICAgICAgIG92ZXJmbG93ID1cbiAgICAgICAgICAgIGFbTU9OVEhdIDwgMCB8fCBhW01PTlRIXSA+IDExXG4gICAgICAgICAgICAgICAgPyBNT05USFxuICAgICAgICAgICAgICAgIDogYVtEQVRFXSA8IDEgfHwgYVtEQVRFXSA+IGRheXNJbk1vbnRoKGFbWUVBUl0sIGFbTU9OVEhdKVxuICAgICAgICAgICAgICAgICAgPyBEQVRFXG4gICAgICAgICAgICAgICAgICA6IGFbSE9VUl0gPCAwIHx8XG4gICAgICAgICAgICAgICAgICAgICAgYVtIT1VSXSA+IDI0IHx8XG4gICAgICAgICAgICAgICAgICAgICAgKGFbSE9VUl0gPT09IDI0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChhW01JTlVURV0gIT09IDAgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFbU0VDT05EXSAhPT0gMCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYVtNSUxMSVNFQ09ORF0gIT09IDApKVxuICAgICAgICAgICAgICAgICAgICA/IEhPVVJcbiAgICAgICAgICAgICAgICAgICAgOiBhW01JTlVURV0gPCAwIHx8IGFbTUlOVVRFXSA+IDU5XG4gICAgICAgICAgICAgICAgICAgICAgPyBNSU5VVEVcbiAgICAgICAgICAgICAgICAgICAgICA6IGFbU0VDT05EXSA8IDAgfHwgYVtTRUNPTkRdID4gNTlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gU0VDT05EXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGFbTUlMTElTRUNPTkRdIDwgMCB8fCBhW01JTExJU0VDT05EXSA+IDk5OVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IE1JTExJU0VDT05EXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogLTE7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKG0pLl9vdmVyZmxvd0RheU9mWWVhciAmJlxuICAgICAgICAgICAgKG92ZXJmbG93IDwgWUVBUiB8fCBvdmVyZmxvdyA+IERBVEUpXG4gICAgICAgICkge1xuICAgICAgICAgICAgb3ZlcmZsb3cgPSBEQVRFO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnZXRQYXJzaW5nRmxhZ3MobSkuX292ZXJmbG93V2Vla3MgJiYgb3ZlcmZsb3cgPT09IC0xKSB7XG4gICAgICAgICAgICBvdmVyZmxvdyA9IFdFRUs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdldFBhcnNpbmdGbGFncyhtKS5fb3ZlcmZsb3dXZWVrZGF5ICYmIG92ZXJmbG93ID09PSAtMSkge1xuICAgICAgICAgICAgb3ZlcmZsb3cgPSBXRUVLREFZO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKG0pLm92ZXJmbG93ID0gb3ZlcmZsb3c7XG4gICAgfVxuXG4gICAgcmV0dXJuIG07XG59XG5cbi8vIGlzbyA4NjAxIHJlZ2V4XG4vLyAwMDAwLTAwLTAwIDAwMDAtVzAwIG9yIDAwMDAtVzAwLTAgKyBUICsgMDAgb3IgMDA6MDAgb3IgMDA6MDA6MDAgb3IgMDA6MDA6MDAuMDAwICsgKzAwOjAwIG9yICswMDAwIG9yICswMClcbnZhciBleHRlbmRlZElzb1JlZ2V4ID1cbiAgICAgICAgL15cXHMqKCg/OlsrLV1cXGR7Nn18XFxkezR9KS0oPzpcXGRcXGQtXFxkXFxkfFdcXGRcXGQtXFxkfFdcXGRcXGR8XFxkXFxkXFxkfFxcZFxcZCkpKD86KFR8ICkoXFxkXFxkKD86OlxcZFxcZCg/OjpcXGRcXGQoPzpbLixdXFxkKyk/KT8pPykoWystXVxcZFxcZCg/Ojo/XFxkXFxkKT98XFxzKlopPyk/JC8sXG4gICAgYmFzaWNJc29SZWdleCA9XG4gICAgICAgIC9eXFxzKigoPzpbKy1dXFxkezZ9fFxcZHs0fSkoPzpcXGRcXGRcXGRcXGR8V1xcZFxcZFxcZHxXXFxkXFxkfFxcZFxcZFxcZHxcXGRcXGR8KSkoPzooVHwgKShcXGRcXGQoPzpcXGRcXGQoPzpcXGRcXGQoPzpbLixdXFxkKyk/KT8pPykoWystXVxcZFxcZCg/Ojo/XFxkXFxkKT98XFxzKlopPyk/JC8sXG4gICAgdHpSZWdleCA9IC9afFsrLV1cXGRcXGQoPzo6P1xcZFxcZCk/LyxcbiAgICBpc29EYXRlcyA9IFtcbiAgICAgICAgWydZWVlZWVktTU0tREQnLCAvWystXVxcZHs2fS1cXGRcXGQtXFxkXFxkL10sXG4gICAgICAgIFsnWVlZWS1NTS1ERCcsIC9cXGR7NH0tXFxkXFxkLVxcZFxcZC9dLFxuICAgICAgICBbJ0dHR0ctW1ddV1ctRScsIC9cXGR7NH0tV1xcZFxcZC1cXGQvXSxcbiAgICAgICAgWydHR0dHLVtXXVdXJywgL1xcZHs0fS1XXFxkXFxkLywgZmFsc2VdLFxuICAgICAgICBbJ1lZWVktREREJywgL1xcZHs0fS1cXGR7M30vXSxcbiAgICAgICAgWydZWVlZLU1NJywgL1xcZHs0fS1cXGRcXGQvLCBmYWxzZV0sXG4gICAgICAgIFsnWVlZWVlZTU1ERCcsIC9bKy1dXFxkezEwfS9dLFxuICAgICAgICBbJ1lZWVlNTUREJywgL1xcZHs4fS9dLFxuICAgICAgICBbJ0dHR0dbV11XV0UnLCAvXFxkezR9V1xcZHszfS9dLFxuICAgICAgICBbJ0dHR0dbV11XVycsIC9cXGR7NH1XXFxkezJ9LywgZmFsc2VdLFxuICAgICAgICBbJ1lZWVlEREQnLCAvXFxkezd9L10sXG4gICAgICAgIFsnWVlZWU1NJywgL1xcZHs2fS8sIGZhbHNlXSxcbiAgICAgICAgWydZWVlZJywgL1xcZHs0fS8sIGZhbHNlXSxcbiAgICBdLFxuICAgIC8vIGlzbyB0aW1lIGZvcm1hdHMgYW5kIHJlZ2V4ZXNcbiAgICBpc29UaW1lcyA9IFtcbiAgICAgICAgWydISDptbTpzcy5TU1NTJywgL1xcZFxcZDpcXGRcXGQ6XFxkXFxkXFwuXFxkKy9dLFxuICAgICAgICBbJ0hIOm1tOnNzLFNTU1MnLCAvXFxkXFxkOlxcZFxcZDpcXGRcXGQsXFxkKy9dLFxuICAgICAgICBbJ0hIOm1tOnNzJywgL1xcZFxcZDpcXGRcXGQ6XFxkXFxkL10sXG4gICAgICAgIFsnSEg6bW0nLCAvXFxkXFxkOlxcZFxcZC9dLFxuICAgICAgICBbJ0hIbW1zcy5TU1NTJywgL1xcZFxcZFxcZFxcZFxcZFxcZFxcLlxcZCsvXSxcbiAgICAgICAgWydISG1tc3MsU1NTUycsIC9cXGRcXGRcXGRcXGRcXGRcXGQsXFxkKy9dLFxuICAgICAgICBbJ0hIbW1zcycsIC9cXGRcXGRcXGRcXGRcXGRcXGQvXSxcbiAgICAgICAgWydISG1tJywgL1xcZFxcZFxcZFxcZC9dLFxuICAgICAgICBbJ0hIJywgL1xcZFxcZC9dLFxuICAgIF0sXG4gICAgYXNwTmV0SnNvblJlZ2V4ID0gL15cXC8/RGF0ZVxcKCgtP1xcZCspL2ksXG4gICAgLy8gUkZDIDI4MjIgcmVnZXg6IEZvciBkZXRhaWxzIHNlZSBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjgyMiNzZWN0aW9uLTMuM1xuICAgIHJmYzI4MjIgPVxuICAgICAgICAvXig/OihNb258VHVlfFdlZHxUaHV8RnJpfFNhdHxTdW4pLD9cXHMpPyhcXGR7MSwyfSlcXHMoSmFufEZlYnxNYXJ8QXByfE1heXxKdW58SnVsfEF1Z3xTZXB8T2N0fE5vdnxEZWMpXFxzKFxcZHsyLDR9KVxccyhcXGRcXGQpOihcXGRcXGQpKD86OihcXGRcXGQpKT9cXHMoPzooVVR8R01UfFtFQ01QXVtTRF1UKXwoW1p6XSl8KFsrLV1cXGR7NH0pKSQvLFxuICAgIG9ic09mZnNldHMgPSB7XG4gICAgICAgIFVUOiAwLFxuICAgICAgICBHTVQ6IDAsXG4gICAgICAgIEVEVDogLTQgKiA2MCxcbiAgICAgICAgRVNUOiAtNSAqIDYwLFxuICAgICAgICBDRFQ6IC01ICogNjAsXG4gICAgICAgIENTVDogLTYgKiA2MCxcbiAgICAgICAgTURUOiAtNiAqIDYwLFxuICAgICAgICBNU1Q6IC03ICogNjAsXG4gICAgICAgIFBEVDogLTcgKiA2MCxcbiAgICAgICAgUFNUOiAtOCAqIDYwLFxuICAgIH07XG5cbi8vIGRhdGUgZnJvbSBpc28gZm9ybWF0XG5mdW5jdGlvbiBjb25maWdGcm9tSVNPKGNvbmZpZykge1xuICAgIHZhciBpLFxuICAgICAgICBsLFxuICAgICAgICBzdHJpbmcgPSBjb25maWcuX2ksXG4gICAgICAgIG1hdGNoID0gZXh0ZW5kZWRJc29SZWdleC5leGVjKHN0cmluZykgfHwgYmFzaWNJc29SZWdleC5leGVjKHN0cmluZyksXG4gICAgICAgIGFsbG93VGltZSxcbiAgICAgICAgZGF0ZUZvcm1hdCxcbiAgICAgICAgdGltZUZvcm1hdCxcbiAgICAgICAgdHpGb3JtYXQsXG4gICAgICAgIGlzb0RhdGVzTGVuID0gaXNvRGF0ZXMubGVuZ3RoLFxuICAgICAgICBpc29UaW1lc0xlbiA9IGlzb1RpbWVzLmxlbmd0aDtcblxuICAgIGlmIChtYXRjaCkge1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5pc28gPSB0cnVlO1xuICAgICAgICBmb3IgKGkgPSAwLCBsID0gaXNvRGF0ZXNMZW47IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpc29EYXRlc1tpXVsxXS5leGVjKG1hdGNoWzFdKSkge1xuICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQgPSBpc29EYXRlc1tpXVswXTtcbiAgICAgICAgICAgICAgICBhbGxvd1RpbWUgPSBpc29EYXRlc1tpXVsyXSAhPT0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGVGb3JtYXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoWzNdKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwLCBsID0gaXNvVGltZXNMZW47IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNvVGltZXNbaV1bMV0uZXhlYyhtYXRjaFszXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbWF0Y2hbMl0gc2hvdWxkIGJlICdUJyBvciBzcGFjZVxuICAgICAgICAgICAgICAgICAgICB0aW1lRm9ybWF0ID0gKG1hdGNoWzJdIHx8ICcgJykgKyBpc29UaW1lc1tpXVswXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRpbWVGb3JtYXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFsbG93VGltZSAmJiB0aW1lRm9ybWF0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtYXRjaFs0XSkge1xuICAgICAgICAgICAgaWYgKHR6UmVnZXguZXhlYyhtYXRjaFs0XSkpIHtcbiAgICAgICAgICAgICAgICB0ekZvcm1hdCA9ICdaJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbmZpZy5fZiA9IGRhdGVGb3JtYXQgKyAodGltZUZvcm1hdCB8fCAnJykgKyAodHpGb3JtYXQgfHwgJycpO1xuICAgICAgICBjb25maWdGcm9tU3RyaW5nQW5kRm9ybWF0KGNvbmZpZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBleHRyYWN0RnJvbVJGQzI4MjJTdHJpbmdzKFxuICAgIHllYXJTdHIsXG4gICAgbW9udGhTdHIsXG4gICAgZGF5U3RyLFxuICAgIGhvdXJTdHIsXG4gICAgbWludXRlU3RyLFxuICAgIHNlY29uZFN0clxuKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtcbiAgICAgICAgdW50cnVuY2F0ZVllYXIoeWVhclN0ciksXG4gICAgICAgIGRlZmF1bHRMb2NhbGVNb250aHNTaG9ydC5pbmRleE9mKG1vbnRoU3RyKSxcbiAgICAgICAgcGFyc2VJbnQoZGF5U3RyLCAxMCksXG4gICAgICAgIHBhcnNlSW50KGhvdXJTdHIsIDEwKSxcbiAgICAgICAgcGFyc2VJbnQobWludXRlU3RyLCAxMCksXG4gICAgXTtcblxuICAgIGlmIChzZWNvbmRTdHIpIHtcbiAgICAgICAgcmVzdWx0LnB1c2gocGFyc2VJbnQoc2Vjb25kU3RyLCAxMCkpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHVudHJ1bmNhdGVZZWFyKHllYXJTdHIpIHtcbiAgICB2YXIgeWVhciA9IHBhcnNlSW50KHllYXJTdHIsIDEwKTtcbiAgICBpZiAoeWVhciA8PSA0OSkge1xuICAgICAgICByZXR1cm4gMjAwMCArIHllYXI7XG4gICAgfSBlbHNlIGlmICh5ZWFyIDw9IDk5OSkge1xuICAgICAgICByZXR1cm4gMTkwMCArIHllYXI7XG4gICAgfVxuICAgIHJldHVybiB5ZWFyO1xufVxuXG5mdW5jdGlvbiBwcmVwcm9jZXNzUkZDMjgyMihzKSB7XG4gICAgLy8gUmVtb3ZlIGNvbW1lbnRzIGFuZCBmb2xkaW5nIHdoaXRlc3BhY2UgYW5kIHJlcGxhY2UgbXVsdGlwbGUtc3BhY2VzIHdpdGggYSBzaW5nbGUgc3BhY2VcbiAgICByZXR1cm4gc1xuICAgICAgICAucmVwbGFjZSgvXFwoW14oKV0qXFwpfFtcXG5cXHRdL2csICcgJylcbiAgICAgICAgLnJlcGxhY2UoLyhcXHNcXHMrKS9nLCAnICcpXG4gICAgICAgIC5yZXBsYWNlKC9eXFxzXFxzKi8sICcnKVxuICAgICAgICAucmVwbGFjZSgvXFxzXFxzKiQvLCAnJyk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrV2Vla2RheSh3ZWVrZGF5U3RyLCBwYXJzZWRJbnB1dCwgY29uZmlnKSB7XG4gICAgaWYgKHdlZWtkYXlTdHIpIHtcbiAgICAgICAgLy8gVE9ETzogUmVwbGFjZSB0aGUgdmFuaWxsYSBKUyBEYXRlIG9iamVjdCB3aXRoIGFuIGluZGVwZW5kZW50IGRheS1vZi13ZWVrIGNoZWNrLlxuICAgICAgICB2YXIgd2Vla2RheVByb3ZpZGVkID0gZGVmYXVsdExvY2FsZVdlZWtkYXlzU2hvcnQuaW5kZXhPZih3ZWVrZGF5U3RyKSxcbiAgICAgICAgICAgIHdlZWtkYXlBY3R1YWwgPSBuZXcgRGF0ZShcbiAgICAgICAgICAgICAgICBwYXJzZWRJbnB1dFswXSxcbiAgICAgICAgICAgICAgICBwYXJzZWRJbnB1dFsxXSxcbiAgICAgICAgICAgICAgICBwYXJzZWRJbnB1dFsyXVxuICAgICAgICAgICAgKS5nZXREYXkoKTtcbiAgICAgICAgaWYgKHdlZWtkYXlQcm92aWRlZCAhPT0gd2Vla2RheUFjdHVhbCkge1xuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykud2Vla2RheU1pc21hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVPZmZzZXQob2JzT2Zmc2V0LCBtaWxpdGFyeU9mZnNldCwgbnVtT2Zmc2V0KSB7XG4gICAgaWYgKG9ic09mZnNldCkge1xuICAgICAgICByZXR1cm4gb2JzT2Zmc2V0c1tvYnNPZmZzZXRdO1xuICAgIH0gZWxzZSBpZiAobWlsaXRhcnlPZmZzZXQpIHtcbiAgICAgICAgLy8gdGhlIG9ubHkgYWxsb3dlZCBtaWxpdGFyeSB0eiBpcyBaXG4gICAgICAgIHJldHVybiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBobSA9IHBhcnNlSW50KG51bU9mZnNldCwgMTApLFxuICAgICAgICAgICAgbSA9IGhtICUgMTAwLFxuICAgICAgICAgICAgaCA9IChobSAtIG0pIC8gMTAwO1xuICAgICAgICByZXR1cm4gaCAqIDYwICsgbTtcbiAgICB9XG59XG5cbi8vIGRhdGUgYW5kIHRpbWUgZnJvbSByZWYgMjgyMiBmb3JtYXRcbmZ1bmN0aW9uIGNvbmZpZ0Zyb21SRkMyODIyKGNvbmZpZykge1xuICAgIHZhciBtYXRjaCA9IHJmYzI4MjIuZXhlYyhwcmVwcm9jZXNzUkZDMjgyMihjb25maWcuX2kpKSxcbiAgICAgICAgcGFyc2VkQXJyYXk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHBhcnNlZEFycmF5ID0gZXh0cmFjdEZyb21SRkMyODIyU3RyaW5ncyhcbiAgICAgICAgICAgIG1hdGNoWzRdLFxuICAgICAgICAgICAgbWF0Y2hbM10sXG4gICAgICAgICAgICBtYXRjaFsyXSxcbiAgICAgICAgICAgIG1hdGNoWzVdLFxuICAgICAgICAgICAgbWF0Y2hbNl0sXG4gICAgICAgICAgICBtYXRjaFs3XVxuICAgICAgICApO1xuICAgICAgICBpZiAoIWNoZWNrV2Vla2RheShtYXRjaFsxXSwgcGFyc2VkQXJyYXksIGNvbmZpZykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbmZpZy5fYSA9IHBhcnNlZEFycmF5O1xuICAgICAgICBjb25maWcuX3R6bSA9IGNhbGN1bGF0ZU9mZnNldChtYXRjaFs4XSwgbWF0Y2hbOV0sIG1hdGNoWzEwXSk7XG5cbiAgICAgICAgY29uZmlnLl9kID0gY3JlYXRlVVRDRGF0ZS5hcHBseShudWxsLCBjb25maWcuX2EpO1xuICAgICAgICBjb25maWcuX2Quc2V0VVRDTWludXRlcyhjb25maWcuX2QuZ2V0VVRDTWludXRlcygpIC0gY29uZmlnLl90em0pO1xuXG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnJmYzI4MjIgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xuICAgIH1cbn1cblxuLy8gZGF0ZSBmcm9tIDEpIEFTUC5ORVQsIDIpIElTTywgMykgUkZDIDI4MjIgZm9ybWF0cywgb3IgNCkgb3B0aW9uYWwgZmFsbGJhY2sgaWYgcGFyc2luZyBpc24ndCBzdHJpY3RcbmZ1bmN0aW9uIGNvbmZpZ0Zyb21TdHJpbmcoY29uZmlnKSB7XG4gICAgdmFyIG1hdGNoZWQgPSBhc3BOZXRKc29uUmVnZXguZXhlYyhjb25maWcuX2kpO1xuICAgIGlmIChtYXRjaGVkICE9PSBudWxsKSB7XG4gICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKCttYXRjaGVkWzFdKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbmZpZ0Zyb21JU08oY29uZmlnKTtcbiAgICBpZiAoY29uZmlnLl9pc1ZhbGlkID09PSBmYWxzZSkge1xuICAgICAgICBkZWxldGUgY29uZmlnLl9pc1ZhbGlkO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25maWdGcm9tUkZDMjgyMihjb25maWcpO1xuICAgIGlmIChjb25maWcuX2lzVmFsaWQgPT09IGZhbHNlKSB7XG4gICAgICAgIGRlbGV0ZSBjb25maWcuX2lzVmFsaWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuX3N0cmljdCkge1xuICAgICAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGaW5hbCBhdHRlbXB0LCB1c2UgSW5wdXQgRmFsbGJhY2tcbiAgICAgICAgaG9va3MuY3JlYXRlRnJvbUlucHV0RmFsbGJhY2soY29uZmlnKTtcbiAgICB9XG59XG5cbmhvb2tzLmNyZWF0ZUZyb21JbnB1dEZhbGxiYWNrID0gZGVwcmVjYXRlKFxuICAgICd2YWx1ZSBwcm92aWRlZCBpcyBub3QgaW4gYSByZWNvZ25pemVkIFJGQzI4MjIgb3IgSVNPIGZvcm1hdC4gbW9tZW50IGNvbnN0cnVjdGlvbiBmYWxscyBiYWNrIHRvIGpzIERhdGUoKSwgJyArXG4gICAgICAgICd3aGljaCBpcyBub3QgcmVsaWFibGUgYWNyb3NzIGFsbCBicm93c2VycyBhbmQgdmVyc2lvbnMuIE5vbiBSRkMyODIyL0lTTyBkYXRlIGZvcm1hdHMgYXJlICcgK1xuICAgICAgICAnZGlzY291cmFnZWQuIFBsZWFzZSByZWZlciB0byBodHRwOi8vbW9tZW50anMuY29tL2d1aWRlcy8jL3dhcm5pbmdzL2pzLWRhdGUvIGZvciBtb3JlIGluZm8uJyxcbiAgICBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKGNvbmZpZy5faSArIChjb25maWcuX3VzZVVUQyA/ICcgVVRDJyA6ICcnKSk7XG4gICAgfVxuKTtcblxuLy8gUGljayB0aGUgZmlyc3QgZGVmaW5lZCBvZiB0d28gb3IgdGhyZWUgYXJndW1lbnRzLlxuZnVuY3Rpb24gZGVmYXVsdHMoYSwgYiwgYykge1xuICAgIGlmIChhICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgfVxuICAgIGlmIChiICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGI7XG4gICAgfVxuICAgIHJldHVybiBjO1xufVxuXG5mdW5jdGlvbiBjdXJyZW50RGF0ZUFycmF5KGNvbmZpZykge1xuICAgIC8vIGhvb2tzIGlzIGFjdHVhbGx5IHRoZSBleHBvcnRlZCBtb21lbnQgb2JqZWN0XG4gICAgdmFyIG5vd1ZhbHVlID0gbmV3IERhdGUoaG9va3Mubm93KCkpO1xuICAgIGlmIChjb25maWcuX3VzZVVUQykge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgbm93VmFsdWUuZ2V0VVRDRnVsbFllYXIoKSxcbiAgICAgICAgICAgIG5vd1ZhbHVlLmdldFVUQ01vbnRoKCksXG4gICAgICAgICAgICBub3dWYWx1ZS5nZXRVVENEYXRlKCksXG4gICAgICAgIF07XG4gICAgfVxuICAgIHJldHVybiBbbm93VmFsdWUuZ2V0RnVsbFllYXIoKSwgbm93VmFsdWUuZ2V0TW9udGgoKSwgbm93VmFsdWUuZ2V0RGF0ZSgpXTtcbn1cblxuLy8gY29udmVydCBhbiBhcnJheSB0byBhIGRhdGUuXG4vLyB0aGUgYXJyYXkgc2hvdWxkIG1pcnJvciB0aGUgcGFyYW1ldGVycyBiZWxvd1xuLy8gbm90ZTogYWxsIHZhbHVlcyBwYXN0IHRoZSB5ZWFyIGFyZSBvcHRpb25hbCBhbmQgd2lsbCBkZWZhdWx0IHRvIHRoZSBsb3dlc3QgcG9zc2libGUgdmFsdWUuXG4vLyBbeWVhciwgbW9udGgsIGRheSAsIGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBtaWxsaXNlY29uZF1cbmZ1bmN0aW9uIGNvbmZpZ0Zyb21BcnJheShjb25maWcpIHtcbiAgICB2YXIgaSxcbiAgICAgICAgZGF0ZSxcbiAgICAgICAgaW5wdXQgPSBbXSxcbiAgICAgICAgY3VycmVudERhdGUsXG4gICAgICAgIGV4cGVjdGVkV2Vla2RheSxcbiAgICAgICAgeWVhclRvVXNlO1xuXG4gICAgaWYgKGNvbmZpZy5fZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY3VycmVudERhdGUgPSBjdXJyZW50RGF0ZUFycmF5KGNvbmZpZyk7XG5cbiAgICAvL2NvbXB1dGUgZGF5IG9mIHRoZSB5ZWFyIGZyb20gd2Vla3MgYW5kIHdlZWtkYXlzXG4gICAgaWYgKGNvbmZpZy5fdyAmJiBjb25maWcuX2FbREFURV0gPT0gbnVsbCAmJiBjb25maWcuX2FbTU9OVEhdID09IG51bGwpIHtcbiAgICAgICAgZGF5T2ZZZWFyRnJvbVdlZWtJbmZvKGNvbmZpZyk7XG4gICAgfVxuXG4gICAgLy9pZiB0aGUgZGF5IG9mIHRoZSB5ZWFyIGlzIHNldCwgZmlndXJlIG91dCB3aGF0IGl0IGlzXG4gICAgaWYgKGNvbmZpZy5fZGF5T2ZZZWFyICE9IG51bGwpIHtcbiAgICAgICAgeWVhclRvVXNlID0gZGVmYXVsdHMoY29uZmlnLl9hW1lFQVJdLCBjdXJyZW50RGF0ZVtZRUFSXSk7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgY29uZmlnLl9kYXlPZlllYXIgPiBkYXlzSW5ZZWFyKHllYXJUb1VzZSkgfHxcbiAgICAgICAgICAgIGNvbmZpZy5fZGF5T2ZZZWFyID09PSAwXG4gICAgICAgICkge1xuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuX292ZXJmbG93RGF5T2ZZZWFyID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGUgPSBjcmVhdGVVVENEYXRlKHllYXJUb1VzZSwgMCwgY29uZmlnLl9kYXlPZlllYXIpO1xuICAgICAgICBjb25maWcuX2FbTU9OVEhdID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgICAgICBjb25maWcuX2FbREFURV0gPSBkYXRlLmdldFVUQ0RhdGUoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IHRvIGN1cnJlbnQgZGF0ZS5cbiAgICAvLyAqIGlmIG5vIHllYXIsIG1vbnRoLCBkYXkgb2YgbW9udGggYXJlIGdpdmVuLCBkZWZhdWx0IHRvIHRvZGF5XG4gICAgLy8gKiBpZiBkYXkgb2YgbW9udGggaXMgZ2l2ZW4sIGRlZmF1bHQgbW9udGggYW5kIHllYXJcbiAgICAvLyAqIGlmIG1vbnRoIGlzIGdpdmVuLCBkZWZhdWx0IG9ubHkgeWVhclxuICAgIC8vICogaWYgeWVhciBpcyBnaXZlbiwgZG9uJ3QgZGVmYXVsdCBhbnl0aGluZ1xuICAgIGZvciAoaSA9IDA7IGkgPCAzICYmIGNvbmZpZy5fYVtpXSA9PSBudWxsOyArK2kpIHtcbiAgICAgICAgY29uZmlnLl9hW2ldID0gaW5wdXRbaV0gPSBjdXJyZW50RGF0ZVtpXTtcbiAgICB9XG5cbiAgICAvLyBaZXJvIG91dCB3aGF0ZXZlciB3YXMgbm90IGRlZmF1bHRlZCwgaW5jbHVkaW5nIHRpbWVcbiAgICBmb3IgKDsgaSA8IDc7IGkrKykge1xuICAgICAgICBjb25maWcuX2FbaV0gPSBpbnB1dFtpXSA9XG4gICAgICAgICAgICBjb25maWcuX2FbaV0gPT0gbnVsbCA/IChpID09PSAyID8gMSA6IDApIDogY29uZmlnLl9hW2ldO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciAyNDowMDowMC4wMDBcbiAgICBpZiAoXG4gICAgICAgIGNvbmZpZy5fYVtIT1VSXSA9PT0gMjQgJiZcbiAgICAgICAgY29uZmlnLl9hW01JTlVURV0gPT09IDAgJiZcbiAgICAgICAgY29uZmlnLl9hW1NFQ09ORF0gPT09IDAgJiZcbiAgICAgICAgY29uZmlnLl9hW01JTExJU0VDT05EXSA9PT0gMFxuICAgICkge1xuICAgICAgICBjb25maWcuX25leHREYXkgPSB0cnVlO1xuICAgICAgICBjb25maWcuX2FbSE9VUl0gPSAwO1xuICAgIH1cblxuICAgIGNvbmZpZy5fZCA9IChjb25maWcuX3VzZVVUQyA/IGNyZWF0ZVVUQ0RhdGUgOiBjcmVhdGVEYXRlKS5hcHBseShcbiAgICAgICAgbnVsbCxcbiAgICAgICAgaW5wdXRcbiAgICApO1xuICAgIGV4cGVjdGVkV2Vla2RheSA9IGNvbmZpZy5fdXNlVVRDXG4gICAgICAgID8gY29uZmlnLl9kLmdldFVUQ0RheSgpXG4gICAgICAgIDogY29uZmlnLl9kLmdldERheSgpO1xuXG4gICAgLy8gQXBwbHkgdGltZXpvbmUgb2Zmc2V0IGZyb20gaW5wdXQuIFRoZSBhY3R1YWwgdXRjT2Zmc2V0IGNhbiBiZSBjaGFuZ2VkXG4gICAgLy8gd2l0aCBwYXJzZVpvbmUuXG4gICAgaWYgKGNvbmZpZy5fdHptICE9IG51bGwpIHtcbiAgICAgICAgY29uZmlnLl9kLnNldFVUQ01pbnV0ZXMoY29uZmlnLl9kLmdldFVUQ01pbnV0ZXMoKSAtIGNvbmZpZy5fdHptKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLl9uZXh0RGF5KSB7XG4gICAgICAgIGNvbmZpZy5fYVtIT1VSXSA9IDI0O1xuICAgIH1cblxuICAgIC8vIGNoZWNrIGZvciBtaXNtYXRjaGluZyBkYXkgb2Ygd2Vla1xuICAgIGlmIChcbiAgICAgICAgY29uZmlnLl93ICYmXG4gICAgICAgIHR5cGVvZiBjb25maWcuX3cuZCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgY29uZmlnLl93LmQgIT09IGV4cGVjdGVkV2Vla2RheVxuICAgICkge1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS53ZWVrZGF5TWlzbWF0Y2ggPSB0cnVlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZGF5T2ZZZWFyRnJvbVdlZWtJbmZvKGNvbmZpZykge1xuICAgIHZhciB3LCB3ZWVrWWVhciwgd2Vlaywgd2Vla2RheSwgZG93LCBkb3ksIHRlbXAsIHdlZWtkYXlPdmVyZmxvdywgY3VyV2VlaztcblxuICAgIHcgPSBjb25maWcuX3c7XG4gICAgaWYgKHcuR0cgIT0gbnVsbCB8fCB3LlcgIT0gbnVsbCB8fCB3LkUgIT0gbnVsbCkge1xuICAgICAgICBkb3cgPSAxO1xuICAgICAgICBkb3kgPSA0O1xuXG4gICAgICAgIC8vIFRPRE86IFdlIG5lZWQgdG8gdGFrZSB0aGUgY3VycmVudCBpc29XZWVrWWVhciwgYnV0IHRoYXQgZGVwZW5kcyBvblxuICAgICAgICAvLyBob3cgd2UgaW50ZXJwcmV0IG5vdyAobG9jYWwsIHV0YywgZml4ZWQgb2Zmc2V0KS4gU28gY3JlYXRlXG4gICAgICAgIC8vIGEgbm93IHZlcnNpb24gb2YgY3VycmVudCBjb25maWcgKHRha2UgbG9jYWwvdXRjL29mZnNldCBmbGFncywgYW5kXG4gICAgICAgIC8vIGNyZWF0ZSBub3cpLlxuICAgICAgICB3ZWVrWWVhciA9IGRlZmF1bHRzKFxuICAgICAgICAgICAgdy5HRyxcbiAgICAgICAgICAgIGNvbmZpZy5fYVtZRUFSXSxcbiAgICAgICAgICAgIHdlZWtPZlllYXIoY3JlYXRlTG9jYWwoKSwgMSwgNCkueWVhclxuICAgICAgICApO1xuICAgICAgICB3ZWVrID0gZGVmYXVsdHMody5XLCAxKTtcbiAgICAgICAgd2Vla2RheSA9IGRlZmF1bHRzKHcuRSwgMSk7XG4gICAgICAgIGlmICh3ZWVrZGF5IDwgMSB8fCB3ZWVrZGF5ID4gNykge1xuICAgICAgICAgICAgd2Vla2RheU92ZXJmbG93ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGRvdyA9IGNvbmZpZy5fbG9jYWxlLl93ZWVrLmRvdztcbiAgICAgICAgZG95ID0gY29uZmlnLl9sb2NhbGUuX3dlZWsuZG95O1xuXG4gICAgICAgIGN1cldlZWsgPSB3ZWVrT2ZZZWFyKGNyZWF0ZUxvY2FsKCksIGRvdywgZG95KTtcblxuICAgICAgICB3ZWVrWWVhciA9IGRlZmF1bHRzKHcuZ2csIGNvbmZpZy5fYVtZRUFSXSwgY3VyV2Vlay55ZWFyKTtcblxuICAgICAgICAvLyBEZWZhdWx0IHRvIGN1cnJlbnQgd2Vlay5cbiAgICAgICAgd2VlayA9IGRlZmF1bHRzKHcudywgY3VyV2Vlay53ZWVrKTtcblxuICAgICAgICBpZiAody5kICE9IG51bGwpIHtcbiAgICAgICAgICAgIC8vIHdlZWtkYXkgLS0gbG93IGRheSBudW1iZXJzIGFyZSBjb25zaWRlcmVkIG5leHQgd2Vla1xuICAgICAgICAgICAgd2Vla2RheSA9IHcuZDtcbiAgICAgICAgICAgIGlmICh3ZWVrZGF5IDwgMCB8fCB3ZWVrZGF5ID4gNikge1xuICAgICAgICAgICAgICAgIHdlZWtkYXlPdmVyZmxvdyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAody5lICE9IG51bGwpIHtcbiAgICAgICAgICAgIC8vIGxvY2FsIHdlZWtkYXkgLS0gY291bnRpbmcgc3RhcnRzIGZyb20gYmVnaW5uaW5nIG9mIHdlZWtcbiAgICAgICAgICAgIHdlZWtkYXkgPSB3LmUgKyBkb3c7XG4gICAgICAgICAgICBpZiAody5lIDwgMCB8fCB3LmUgPiA2KSB7XG4gICAgICAgICAgICAgICAgd2Vla2RheU92ZXJmbG93ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGRlZmF1bHQgdG8gYmVnaW5uaW5nIG9mIHdlZWtcbiAgICAgICAgICAgIHdlZWtkYXkgPSBkb3c7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHdlZWsgPCAxIHx8IHdlZWsgPiB3ZWVrc0luWWVhcih3ZWVrWWVhciwgZG93LCBkb3kpKSB7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLl9vdmVyZmxvd1dlZWtzID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHdlZWtkYXlPdmVyZmxvdyAhPSBudWxsKSB7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLl9vdmVyZmxvd1dlZWtkYXkgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRlbXAgPSBkYXlPZlllYXJGcm9tV2Vla3Mod2Vla1llYXIsIHdlZWssIHdlZWtkYXksIGRvdywgZG95KTtcbiAgICAgICAgY29uZmlnLl9hW1lFQVJdID0gdGVtcC55ZWFyO1xuICAgICAgICBjb25maWcuX2RheU9mWWVhciA9IHRlbXAuZGF5T2ZZZWFyO1xuICAgIH1cbn1cblxuLy8gY29uc3RhbnQgdGhhdCByZWZlcnMgdG8gdGhlIElTTyBzdGFuZGFyZFxuaG9va3MuSVNPXzg2MDEgPSBmdW5jdGlvbiAoKSB7fTtcblxuLy8gY29uc3RhbnQgdGhhdCByZWZlcnMgdG8gdGhlIFJGQyAyODIyIGZvcm1cbmhvb2tzLlJGQ18yODIyID0gZnVuY3Rpb24gKCkge307XG5cbi8vIGRhdGUgZnJvbSBzdHJpbmcgYW5kIGZvcm1hdCBzdHJpbmdcbmZ1bmN0aW9uIGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQoY29uZmlnKSB7XG4gICAgLy8gVE9ETzogTW92ZSB0aGlzIHRvIGFub3RoZXIgcGFydCBvZiB0aGUgY3JlYXRpb24gZmxvdyB0byBwcmV2ZW50IGNpcmN1bGFyIGRlcHNcbiAgICBpZiAoY29uZmlnLl9mID09PSBob29rcy5JU09fODYwMSkge1xuICAgICAgICBjb25maWdGcm9tSVNPKGNvbmZpZyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNvbmZpZy5fZiA9PT0gaG9va3MuUkZDXzI4MjIpIHtcbiAgICAgICAgY29uZmlnRnJvbVJGQzI4MjIoY29uZmlnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25maWcuX2EgPSBbXTtcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5lbXB0eSA9IHRydWU7XG5cbiAgICAvLyBUaGlzIGFycmF5IGlzIHVzZWQgdG8gbWFrZSBhIERhdGUsIGVpdGhlciB3aXRoIGBuZXcgRGF0ZWAgb3IgYERhdGUuVVRDYFxuICAgIHZhciBzdHJpbmcgPSAnJyArIGNvbmZpZy5faSxcbiAgICAgICAgaSxcbiAgICAgICAgcGFyc2VkSW5wdXQsXG4gICAgICAgIHRva2VucyxcbiAgICAgICAgdG9rZW4sXG4gICAgICAgIHNraXBwZWQsXG4gICAgICAgIHN0cmluZ0xlbmd0aCA9IHN0cmluZy5sZW5ndGgsXG4gICAgICAgIHRvdGFsUGFyc2VkSW5wdXRMZW5ndGggPSAwLFxuICAgICAgICBlcmEsXG4gICAgICAgIHRva2VuTGVuO1xuXG4gICAgdG9rZW5zID1cbiAgICAgICAgZXhwYW5kRm9ybWF0KGNvbmZpZy5fZiwgY29uZmlnLl9sb2NhbGUpLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnMpIHx8IFtdO1xuICAgIHRva2VuTGVuID0gdG9rZW5zLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgdG9rZW5MZW47IGkrKykge1xuICAgICAgICB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgcGFyc2VkSW5wdXQgPSAoc3RyaW5nLm1hdGNoKGdldFBhcnNlUmVnZXhGb3JUb2tlbih0b2tlbiwgY29uZmlnKSkgfHxcbiAgICAgICAgICAgIFtdKVswXTtcbiAgICAgICAgaWYgKHBhcnNlZElucHV0KSB7XG4gICAgICAgICAgICBza2lwcGVkID0gc3RyaW5nLnN1YnN0cigwLCBzdHJpbmcuaW5kZXhPZihwYXJzZWRJbnB1dCkpO1xuICAgICAgICAgICAgaWYgKHNraXBwZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnVudXNlZElucHV0LnB1c2goc2tpcHBlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmcuc2xpY2UoXG4gICAgICAgICAgICAgICAgc3RyaW5nLmluZGV4T2YocGFyc2VkSW5wdXQpICsgcGFyc2VkSW5wdXQubGVuZ3RoXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdG90YWxQYXJzZWRJbnB1dExlbmd0aCArPSBwYXJzZWRJbnB1dC5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZG9uJ3QgcGFyc2UgaWYgaXQncyBub3QgYSBrbm93biB0b2tlblxuICAgICAgICBpZiAoZm9ybWF0VG9rZW5GdW5jdGlvbnNbdG9rZW5dKSB7XG4gICAgICAgICAgICBpZiAocGFyc2VkSW5wdXQpIHtcbiAgICAgICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5lbXB0eSA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS51bnVzZWRUb2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhZGRUaW1lVG9BcnJheUZyb21Ub2tlbih0b2tlbiwgcGFyc2VkSW5wdXQsIGNvbmZpZyk7XG4gICAgICAgIH0gZWxzZSBpZiAoY29uZmlnLl9zdHJpY3QgJiYgIXBhcnNlZElucHV0KSB7XG4gICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS51bnVzZWRUb2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhZGQgcmVtYWluaW5nIHVucGFyc2VkIGlucHV0IGxlbmd0aCB0byB0aGUgc3RyaW5nXG4gICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuY2hhcnNMZWZ0T3ZlciA9XG4gICAgICAgIHN0cmluZ0xlbmd0aCAtIHRvdGFsUGFyc2VkSW5wdXRMZW5ndGg7XG4gICAgaWYgKHN0cmluZy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnVudXNlZElucHV0LnB1c2goc3RyaW5nKTtcbiAgICB9XG5cbiAgICAvLyBjbGVhciBfMTJoIGZsYWcgaWYgaG91ciBpcyA8PSAxMlxuICAgIGlmIChcbiAgICAgICAgY29uZmlnLl9hW0hPVVJdIDw9IDEyICYmXG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmJpZ0hvdXIgPT09IHRydWUgJiZcbiAgICAgICAgY29uZmlnLl9hW0hPVVJdID4gMFxuICAgICkge1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5iaWdIb3VyID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnBhcnNlZERhdGVQYXJ0cyA9IGNvbmZpZy5fYS5zbGljZSgwKTtcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5tZXJpZGllbSA9IGNvbmZpZy5fbWVyaWRpZW07XG4gICAgLy8gaGFuZGxlIG1lcmlkaWVtXG4gICAgY29uZmlnLl9hW0hPVVJdID0gbWVyaWRpZW1GaXhXcmFwKFxuICAgICAgICBjb25maWcuX2xvY2FsZSxcbiAgICAgICAgY29uZmlnLl9hW0hPVVJdLFxuICAgICAgICBjb25maWcuX21lcmlkaWVtXG4gICAgKTtcblxuICAgIC8vIGhhbmRsZSBlcmFcbiAgICBlcmEgPSBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5lcmE7XG4gICAgaWYgKGVyYSAhPT0gbnVsbCkge1xuICAgICAgICBjb25maWcuX2FbWUVBUl0gPSBjb25maWcuX2xvY2FsZS5lcmFzQ29udmVydFllYXIoZXJhLCBjb25maWcuX2FbWUVBUl0pO1xuICAgIH1cblxuICAgIGNvbmZpZ0Zyb21BcnJheShjb25maWcpO1xuICAgIGNoZWNrT3ZlcmZsb3coY29uZmlnKTtcbn1cblxuZnVuY3Rpb24gbWVyaWRpZW1GaXhXcmFwKGxvY2FsZSwgaG91ciwgbWVyaWRpZW0pIHtcbiAgICB2YXIgaXNQbTtcblxuICAgIGlmIChtZXJpZGllbSA9PSBudWxsKSB7XG4gICAgICAgIC8vIG5vdGhpbmcgdG8gZG9cbiAgICAgICAgcmV0dXJuIGhvdXI7XG4gICAgfVxuICAgIGlmIChsb2NhbGUubWVyaWRpZW1Ib3VyICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5tZXJpZGllbUhvdXIoaG91ciwgbWVyaWRpZW0pO1xuICAgIH0gZWxzZSBpZiAobG9jYWxlLmlzUE0gIT0gbnVsbCkge1xuICAgICAgICAvLyBGYWxsYmFja1xuICAgICAgICBpc1BtID0gbG9jYWxlLmlzUE0obWVyaWRpZW0pO1xuICAgICAgICBpZiAoaXNQbSAmJiBob3VyIDwgMTIpIHtcbiAgICAgICAgICAgIGhvdXIgKz0gMTI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc1BtICYmIGhvdXIgPT09IDEyKSB7XG4gICAgICAgICAgICBob3VyID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaG91cjtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyB0aGlzIGlzIG5vdCBzdXBwb3NlZCB0byBoYXBwZW5cbiAgICAgICAgcmV0dXJuIGhvdXI7XG4gICAgfVxufVxuXG4vLyBkYXRlIGZyb20gc3RyaW5nIGFuZCBhcnJheSBvZiBmb3JtYXQgc3RyaW5nc1xuZnVuY3Rpb24gY29uZmlnRnJvbVN0cmluZ0FuZEFycmF5KGNvbmZpZykge1xuICAgIHZhciB0ZW1wQ29uZmlnLFxuICAgICAgICBiZXN0TW9tZW50LFxuICAgICAgICBzY29yZVRvQmVhdCxcbiAgICAgICAgaSxcbiAgICAgICAgY3VycmVudFNjb3JlLFxuICAgICAgICB2YWxpZEZvcm1hdEZvdW5kLFxuICAgICAgICBiZXN0Rm9ybWF0SXNWYWxpZCA9IGZhbHNlLFxuICAgICAgICBjb25maWdmTGVuID0gY29uZmlnLl9mLmxlbmd0aDtcblxuICAgIGlmIChjb25maWdmTGVuID09PSAwKSB7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmludmFsaWRGb3JtYXQgPSB0cnVlO1xuICAgICAgICBjb25maWcuX2QgPSBuZXcgRGF0ZShOYU4pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IGNvbmZpZ2ZMZW47IGkrKykge1xuICAgICAgICBjdXJyZW50U2NvcmUgPSAwO1xuICAgICAgICB2YWxpZEZvcm1hdEZvdW5kID0gZmFsc2U7XG4gICAgICAgIHRlbXBDb25maWcgPSBjb3B5Q29uZmlnKHt9LCBjb25maWcpO1xuICAgICAgICBpZiAoY29uZmlnLl91c2VVVEMgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGVtcENvbmZpZy5fdXNlVVRDID0gY29uZmlnLl91c2VVVEM7XG4gICAgICAgIH1cbiAgICAgICAgdGVtcENvbmZpZy5fZiA9IGNvbmZpZy5fZltpXTtcbiAgICAgICAgY29uZmlnRnJvbVN0cmluZ0FuZEZvcm1hdCh0ZW1wQ29uZmlnKTtcblxuICAgICAgICBpZiAoaXNWYWxpZCh0ZW1wQ29uZmlnKSkge1xuICAgICAgICAgICAgdmFsaWRGb3JtYXRGb3VuZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiB0aGVyZSBpcyBhbnkgaW5wdXQgdGhhdCB3YXMgbm90IHBhcnNlZCBhZGQgYSBwZW5hbHR5IGZvciB0aGF0IGZvcm1hdFxuICAgICAgICBjdXJyZW50U2NvcmUgKz0gZ2V0UGFyc2luZ0ZsYWdzKHRlbXBDb25maWcpLmNoYXJzTGVmdE92ZXI7XG5cbiAgICAgICAgLy9vciB0b2tlbnNcbiAgICAgICAgY3VycmVudFNjb3JlICs9IGdldFBhcnNpbmdGbGFncyh0ZW1wQ29uZmlnKS51bnVzZWRUb2tlbnMubGVuZ3RoICogMTA7XG5cbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKHRlbXBDb25maWcpLnNjb3JlID0gY3VycmVudFNjb3JlO1xuXG4gICAgICAgIGlmICghYmVzdEZvcm1hdElzVmFsaWQpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBzY29yZVRvQmVhdCA9PSBudWxsIHx8XG4gICAgICAgICAgICAgICAgY3VycmVudFNjb3JlIDwgc2NvcmVUb0JlYXQgfHxcbiAgICAgICAgICAgICAgICB2YWxpZEZvcm1hdEZvdW5kXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBzY29yZVRvQmVhdCA9IGN1cnJlbnRTY29yZTtcbiAgICAgICAgICAgICAgICBiZXN0TW9tZW50ID0gdGVtcENvbmZpZztcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRGb3JtYXRGb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICBiZXN0Rm9ybWF0SXNWYWxpZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRTY29yZSA8IHNjb3JlVG9CZWF0KSB7XG4gICAgICAgICAgICAgICAgc2NvcmVUb0JlYXQgPSBjdXJyZW50U2NvcmU7XG4gICAgICAgICAgICAgICAgYmVzdE1vbWVudCA9IHRlbXBDb25maWc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHRlbmQoY29uZmlnLCBiZXN0TW9tZW50IHx8IHRlbXBDb25maWcpO1xufVxuXG5mdW5jdGlvbiBjb25maWdGcm9tT2JqZWN0KGNvbmZpZykge1xuICAgIGlmIChjb25maWcuX2QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBpID0gbm9ybWFsaXplT2JqZWN0VW5pdHMoY29uZmlnLl9pKSxcbiAgICAgICAgZGF5T3JEYXRlID0gaS5kYXkgPT09IHVuZGVmaW5lZCA/IGkuZGF0ZSA6IGkuZGF5O1xuICAgIGNvbmZpZy5fYSA9IG1hcChcbiAgICAgICAgW2kueWVhciwgaS5tb250aCwgZGF5T3JEYXRlLCBpLmhvdXIsIGkubWludXRlLCBpLnNlY29uZCwgaS5taWxsaXNlY29uZF0sXG4gICAgICAgIGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgIHJldHVybiBvYmogJiYgcGFyc2VJbnQob2JqLCAxMCk7XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgY29uZmlnRnJvbUFycmF5KGNvbmZpZyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyb21Db25maWcoY29uZmlnKSB7XG4gICAgdmFyIHJlcyA9IG5ldyBNb21lbnQoY2hlY2tPdmVyZmxvdyhwcmVwYXJlQ29uZmlnKGNvbmZpZykpKTtcbiAgICBpZiAocmVzLl9uZXh0RGF5KSB7XG4gICAgICAgIC8vIEFkZGluZyBpcyBzbWFydCBlbm91Z2ggYXJvdW5kIERTVFxuICAgICAgICByZXMuYWRkKDEsICdkJyk7XG4gICAgICAgIHJlcy5fbmV4dERheSA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xufVxuXG5mdW5jdGlvbiBwcmVwYXJlQ29uZmlnKGNvbmZpZykge1xuICAgIHZhciBpbnB1dCA9IGNvbmZpZy5faSxcbiAgICAgICAgZm9ybWF0ID0gY29uZmlnLl9mO1xuXG4gICAgY29uZmlnLl9sb2NhbGUgPSBjb25maWcuX2xvY2FsZSB8fCBnZXRMb2NhbGUoY29uZmlnLl9sKTtcblxuICAgIGlmIChpbnB1dCA9PT0gbnVsbCB8fCAoZm9ybWF0ID09PSB1bmRlZmluZWQgJiYgaW5wdXQgPT09ICcnKSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlSW52YWxpZCh7IG51bGxJbnB1dDogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb25maWcuX2kgPSBpbnB1dCA9IGNvbmZpZy5fbG9jYWxlLnByZXBhcnNlKGlucHV0KTtcbiAgICB9XG5cbiAgICBpZiAoaXNNb21lbnQoaW5wdXQpKSB7XG4gICAgICAgIHJldHVybiBuZXcgTW9tZW50KGNoZWNrT3ZlcmZsb3coaW5wdXQpKTtcbiAgICB9IGVsc2UgaWYgKGlzRGF0ZShpbnB1dCkpIHtcbiAgICAgICAgY29uZmlnLl9kID0gaW5wdXQ7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KGZvcm1hdCkpIHtcbiAgICAgICAgY29uZmlnRnJvbVN0cmluZ0FuZEFycmF5KGNvbmZpZyk7XG4gICAgfSBlbHNlIGlmIChmb3JtYXQpIHtcbiAgICAgICAgY29uZmlnRnJvbVN0cmluZ0FuZEZvcm1hdChjb25maWcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbmZpZ0Zyb21JbnB1dChjb25maWcpO1xuICAgIH1cblxuICAgIGlmICghaXNWYWxpZChjb25maWcpKSB7XG4gICAgICAgIGNvbmZpZy5fZCA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZztcbn1cblxuZnVuY3Rpb24gY29uZmlnRnJvbUlucHV0KGNvbmZpZykge1xuICAgIHZhciBpbnB1dCA9IGNvbmZpZy5faTtcbiAgICBpZiAoaXNVbmRlZmluZWQoaW5wdXQpKSB7XG4gICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKGhvb2tzLm5vdygpKTtcbiAgICB9IGVsc2UgaWYgKGlzRGF0ZShpbnB1dCkpIHtcbiAgICAgICAgY29uZmlnLl9kID0gbmV3IERhdGUoaW5wdXQudmFsdWVPZigpKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uZmlnRnJvbVN0cmluZyhjb25maWcpO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheShpbnB1dCkpIHtcbiAgICAgICAgY29uZmlnLl9hID0gbWFwKGlucHV0LnNsaWNlKDApLCBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQob2JqLCAxMCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25maWdGcm9tQXJyYXkoY29uZmlnKTtcbiAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KGlucHV0KSkge1xuICAgICAgICBjb25maWdGcm9tT2JqZWN0KGNvbmZpZyk7XG4gICAgfSBlbHNlIGlmIChpc051bWJlcihpbnB1dCkpIHtcbiAgICAgICAgLy8gZnJvbSBtaWxsaXNlY29uZHNcbiAgICAgICAgY29uZmlnLl9kID0gbmV3IERhdGUoaW5wdXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGhvb2tzLmNyZWF0ZUZyb21JbnB1dEZhbGxiYWNrKGNvbmZpZyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVMb2NhbE9yVVRDKGlucHV0LCBmb3JtYXQsIGxvY2FsZSwgc3RyaWN0LCBpc1VUQykge1xuICAgIHZhciBjID0ge307XG5cbiAgICBpZiAoZm9ybWF0ID09PSB0cnVlIHx8IGZvcm1hdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgc3RyaWN0ID0gZm9ybWF0O1xuICAgICAgICBmb3JtYXQgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKGxvY2FsZSA9PT0gdHJ1ZSB8fCBsb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHN0cmljdCA9IGxvY2FsZTtcbiAgICAgICAgbG9jYWxlID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgICAgKGlzT2JqZWN0KGlucHV0KSAmJiBpc09iamVjdEVtcHR5KGlucHV0KSkgfHxcbiAgICAgICAgKGlzQXJyYXkoaW5wdXQpICYmIGlucHV0Lmxlbmd0aCA9PT0gMClcbiAgICApIHtcbiAgICAgICAgaW5wdXQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8vIG9iamVjdCBjb25zdHJ1Y3Rpb24gbXVzdCBiZSBkb25lIHRoaXMgd2F5LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L2lzc3Vlcy8xNDIzXG4gICAgYy5faXNBTW9tZW50T2JqZWN0ID0gdHJ1ZTtcbiAgICBjLl91c2VVVEMgPSBjLl9pc1VUQyA9IGlzVVRDO1xuICAgIGMuX2wgPSBsb2NhbGU7XG4gICAgYy5faSA9IGlucHV0O1xuICAgIGMuX2YgPSBmb3JtYXQ7XG4gICAgYy5fc3RyaWN0ID0gc3RyaWN0O1xuXG4gICAgcmV0dXJuIGNyZWF0ZUZyb21Db25maWcoYyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxvY2FsKGlucHV0LCBmb3JtYXQsIGxvY2FsZSwgc3RyaWN0KSB7XG4gICAgcmV0dXJuIGNyZWF0ZUxvY2FsT3JVVEMoaW5wdXQsIGZvcm1hdCwgbG9jYWxlLCBzdHJpY3QsIGZhbHNlKTtcbn1cblxudmFyIHByb3RvdHlwZU1pbiA9IGRlcHJlY2F0ZShcbiAgICAgICAgJ21vbWVudCgpLm1pbiBpcyBkZXByZWNhdGVkLCB1c2UgbW9tZW50Lm1heCBpbnN0ZWFkLiBodHRwOi8vbW9tZW50anMuY29tL2d1aWRlcy8jL3dhcm5pbmdzL21pbi1tYXgvJyxcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG90aGVyID0gY3JlYXRlTG9jYWwuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVmFsaWQoKSAmJiBvdGhlci5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3RoZXIgPCB0aGlzID8gdGhpcyA6IG90aGVyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlSW52YWxpZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKSxcbiAgICBwcm90b3R5cGVNYXggPSBkZXByZWNhdGUoXG4gICAgICAgICdtb21lbnQoKS5tYXggaXMgZGVwcmVjYXRlZCwgdXNlIG1vbWVudC5taW4gaW5zdGVhZC4gaHR0cDovL21vbWVudGpzLmNvbS9ndWlkZXMvIy93YXJuaW5ncy9taW4tbWF4LycsXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBvdGhlciA9IGNyZWF0ZUxvY2FsLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1ZhbGlkKCkgJiYgb3RoZXIuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG90aGVyID4gdGhpcyA/IHRoaXMgOiBvdGhlcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUludmFsaWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICk7XG5cbi8vIFBpY2sgYSBtb21lbnQgbSBmcm9tIG1vbWVudHMgc28gdGhhdCBtW2ZuXShvdGhlcikgaXMgdHJ1ZSBmb3IgYWxsXG4vLyBvdGhlci4gVGhpcyByZWxpZXMgb24gdGhlIGZ1bmN0aW9uIGZuIHRvIGJlIHRyYW5zaXRpdmUuXG4vL1xuLy8gbW9tZW50cyBzaG91bGQgZWl0aGVyIGJlIGFuIGFycmF5IG9mIG1vbWVudCBvYmplY3RzIG9yIGFuIGFycmF5LCB3aG9zZVxuLy8gZmlyc3QgZWxlbWVudCBpcyBhbiBhcnJheSBvZiBtb21lbnQgb2JqZWN0cy5cbmZ1bmN0aW9uIHBpY2tCeShmbiwgbW9tZW50cykge1xuICAgIHZhciByZXMsIGk7XG4gICAgaWYgKG1vbWVudHMubGVuZ3RoID09PSAxICYmIGlzQXJyYXkobW9tZW50c1swXSkpIHtcbiAgICAgICAgbW9tZW50cyA9IG1vbWVudHNbMF07XG4gICAgfVxuICAgIGlmICghbW9tZW50cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUxvY2FsKCk7XG4gICAgfVxuICAgIHJlcyA9IG1vbWVudHNbMF07XG4gICAgZm9yIChpID0gMTsgaSA8IG1vbWVudHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgaWYgKCFtb21lbnRzW2ldLmlzVmFsaWQoKSB8fCBtb21lbnRzW2ldW2ZuXShyZXMpKSB7XG4gICAgICAgICAgICByZXMgPSBtb21lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cbi8vIFRPRE86IFVzZSBbXS5zb3J0IGluc3RlYWQ/XG5mdW5jdGlvbiBtaW4oKSB7XG4gICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG5cbiAgICByZXR1cm4gcGlja0J5KCdpc0JlZm9yZScsIGFyZ3MpO1xufVxuXG5mdW5jdGlvbiBtYXgoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG5cbiAgICByZXR1cm4gcGlja0J5KCdpc0FmdGVyJywgYXJncyk7XG59XG5cbnZhciBub3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIERhdGUubm93ID8gRGF0ZS5ub3coKSA6ICtuZXcgRGF0ZSgpO1xufTtcblxudmFyIG9yZGVyaW5nID0gW1xuICAgICd5ZWFyJyxcbiAgICAncXVhcnRlcicsXG4gICAgJ21vbnRoJyxcbiAgICAnd2VlaycsXG4gICAgJ2RheScsXG4gICAgJ2hvdXInLFxuICAgICdtaW51dGUnLFxuICAgICdzZWNvbmQnLFxuICAgICdtaWxsaXNlY29uZCcsXG5dO1xuXG5mdW5jdGlvbiBpc0R1cmF0aW9uVmFsaWQobSkge1xuICAgIHZhciBrZXksXG4gICAgICAgIHVuaXRIYXNEZWNpbWFsID0gZmFsc2UsXG4gICAgICAgIGksXG4gICAgICAgIG9yZGVyTGVuID0gb3JkZXJpbmcubGVuZ3RoO1xuICAgIGZvciAoa2V5IGluIG0pIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgaGFzT3duUHJvcChtLCBrZXkpICYmXG4gICAgICAgICAgICAhKFxuICAgICAgICAgICAgICAgIGluZGV4T2YuY2FsbChvcmRlcmluZywga2V5KSAhPT0gLTEgJiZcbiAgICAgICAgICAgICAgICAobVtrZXldID09IG51bGwgfHwgIWlzTmFOKG1ba2V5XSkpXG4gICAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IG9yZGVyTGVuOyArK2kpIHtcbiAgICAgICAgaWYgKG1bb3JkZXJpbmdbaV1dKSB7XG4gICAgICAgICAgICBpZiAodW5pdEhhc0RlY2ltYWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIG9ubHkgYWxsb3cgbm9uLWludGVnZXJzIGZvciBzbWFsbGVzdCB1bml0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGFyc2VGbG9hdChtW29yZGVyaW5nW2ldXSkgIT09IHRvSW50KG1bb3JkZXJpbmdbaV1dKSkge1xuICAgICAgICAgICAgICAgIHVuaXRIYXNEZWNpbWFsID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkJDEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzVmFsaWQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUludmFsaWQkMSgpIHtcbiAgICByZXR1cm4gY3JlYXRlRHVyYXRpb24oTmFOKTtcbn1cblxuZnVuY3Rpb24gRHVyYXRpb24oZHVyYXRpb24pIHtcbiAgICB2YXIgbm9ybWFsaXplZElucHV0ID0gbm9ybWFsaXplT2JqZWN0VW5pdHMoZHVyYXRpb24pLFxuICAgICAgICB5ZWFycyA9IG5vcm1hbGl6ZWRJbnB1dC55ZWFyIHx8IDAsXG4gICAgICAgIHF1YXJ0ZXJzID0gbm9ybWFsaXplZElucHV0LnF1YXJ0ZXIgfHwgMCxcbiAgICAgICAgbW9udGhzID0gbm9ybWFsaXplZElucHV0Lm1vbnRoIHx8IDAsXG4gICAgICAgIHdlZWtzID0gbm9ybWFsaXplZElucHV0LndlZWsgfHwgbm9ybWFsaXplZElucHV0Lmlzb1dlZWsgfHwgMCxcbiAgICAgICAgZGF5cyA9IG5vcm1hbGl6ZWRJbnB1dC5kYXkgfHwgMCxcbiAgICAgICAgaG91cnMgPSBub3JtYWxpemVkSW5wdXQuaG91ciB8fCAwLFxuICAgICAgICBtaW51dGVzID0gbm9ybWFsaXplZElucHV0Lm1pbnV0ZSB8fCAwLFxuICAgICAgICBzZWNvbmRzID0gbm9ybWFsaXplZElucHV0LnNlY29uZCB8fCAwLFxuICAgICAgICBtaWxsaXNlY29uZHMgPSBub3JtYWxpemVkSW5wdXQubWlsbGlzZWNvbmQgfHwgMDtcblxuICAgIHRoaXMuX2lzVmFsaWQgPSBpc0R1cmF0aW9uVmFsaWQobm9ybWFsaXplZElucHV0KTtcblxuICAgIC8vIHJlcHJlc2VudGF0aW9uIGZvciBkYXRlQWRkUmVtb3ZlXG4gICAgdGhpcy5fbWlsbGlzZWNvbmRzID1cbiAgICAgICAgK21pbGxpc2Vjb25kcyArXG4gICAgICAgIHNlY29uZHMgKiAxZTMgKyAvLyAxMDAwXG4gICAgICAgIG1pbnV0ZXMgKiA2ZTQgKyAvLyAxMDAwICogNjBcbiAgICAgICAgaG91cnMgKiAxMDAwICogNjAgKiA2MDsgLy91c2luZyAxMDAwICogNjAgKiA2MCBpbnN0ZWFkIG9mIDM2ZTUgdG8gYXZvaWQgZmxvYXRpbmcgcG9pbnQgcm91bmRpbmcgZXJyb3JzIGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L2lzc3Vlcy8yOTc4XG4gICAgLy8gQmVjYXVzZSBvZiBkYXRlQWRkUmVtb3ZlIHRyZWF0cyAyNCBob3VycyBhcyBkaWZmZXJlbnQgZnJvbSBhXG4gICAgLy8gZGF5IHdoZW4gd29ya2luZyBhcm91bmQgRFNULCB3ZSBuZWVkIHRvIHN0b3JlIHRoZW0gc2VwYXJhdGVseVxuICAgIHRoaXMuX2RheXMgPSArZGF5cyArIHdlZWtzICogNztcbiAgICAvLyBJdCBpcyBpbXBvc3NpYmxlIHRvIHRyYW5zbGF0ZSBtb250aHMgaW50byBkYXlzIHdpdGhvdXQga25vd2luZ1xuICAgIC8vIHdoaWNoIG1vbnRocyB5b3UgYXJlIGFyZSB0YWxraW5nIGFib3V0LCBzbyB3ZSBoYXZlIHRvIHN0b3JlXG4gICAgLy8gaXQgc2VwYXJhdGVseS5cbiAgICB0aGlzLl9tb250aHMgPSArbW9udGhzICsgcXVhcnRlcnMgKiAzICsgeWVhcnMgKiAxMjtcblxuICAgIHRoaXMuX2RhdGEgPSB7fTtcblxuICAgIHRoaXMuX2xvY2FsZSA9IGdldExvY2FsZSgpO1xuXG4gICAgdGhpcy5fYnViYmxlKCk7XG59XG5cbmZ1bmN0aW9uIGlzRHVyYXRpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIER1cmF0aW9uO1xufVxuXG5mdW5jdGlvbiBhYnNSb3VuZChudW1iZXIpIHtcbiAgICBpZiAobnVtYmVyIDwgMCkge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCgtMSAqIG51bWJlcikgKiAtMTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChudW1iZXIpO1xuICAgIH1cbn1cblxuLy8gY29tcGFyZSB0d28gYXJyYXlzLCByZXR1cm4gdGhlIG51bWJlciBvZiBkaWZmZXJlbmNlc1xuZnVuY3Rpb24gY29tcGFyZUFycmF5cyhhcnJheTEsIGFycmF5MiwgZG9udENvbnZlcnQpIHtcbiAgICB2YXIgbGVuID0gTWF0aC5taW4oYXJyYXkxLmxlbmd0aCwgYXJyYXkyLmxlbmd0aCksXG4gICAgICAgIGxlbmd0aERpZmYgPSBNYXRoLmFicyhhcnJheTEubGVuZ3RoIC0gYXJyYXkyLmxlbmd0aCksXG4gICAgICAgIGRpZmZzID0gMCxcbiAgICAgICAgaTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKGRvbnRDb252ZXJ0ICYmIGFycmF5MVtpXSAhPT0gYXJyYXkyW2ldKSB8fFxuICAgICAgICAgICAgKCFkb250Q29udmVydCAmJiB0b0ludChhcnJheTFbaV0pICE9PSB0b0ludChhcnJheTJbaV0pKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGRpZmZzKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRpZmZzICsgbGVuZ3RoRGlmZjtcbn1cblxuLy8gRk9STUFUVElOR1xuXG5mdW5jdGlvbiBvZmZzZXQodG9rZW4sIHNlcGFyYXRvcikge1xuICAgIGFkZEZvcm1hdFRva2VuKHRva2VuLCAwLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvZmZzZXQgPSB0aGlzLnV0Y09mZnNldCgpLFxuICAgICAgICAgICAgc2lnbiA9ICcrJztcbiAgICAgICAgaWYgKG9mZnNldCA8IDApIHtcbiAgICAgICAgICAgIG9mZnNldCA9IC1vZmZzZXQ7XG4gICAgICAgICAgICBzaWduID0gJy0nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBzaWduICtcbiAgICAgICAgICAgIHplcm9GaWxsKH5+KG9mZnNldCAvIDYwKSwgMikgK1xuICAgICAgICAgICAgc2VwYXJhdG9yICtcbiAgICAgICAgICAgIHplcm9GaWxsKH5+b2Zmc2V0ICUgNjAsIDIpXG4gICAgICAgICk7XG4gICAgfSk7XG59XG5cbm9mZnNldCgnWicsICc6Jyk7XG5vZmZzZXQoJ1paJywgJycpO1xuXG4vLyBQQVJTSU5HXG5cbmFkZFJlZ2V4VG9rZW4oJ1onLCBtYXRjaFNob3J0T2Zmc2V0KTtcbmFkZFJlZ2V4VG9rZW4oJ1paJywgbWF0Y2hTaG9ydE9mZnNldCk7XG5hZGRQYXJzZVRva2VuKFsnWicsICdaWiddLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICBjb25maWcuX3VzZVVUQyA9IHRydWU7XG4gICAgY29uZmlnLl90em0gPSBvZmZzZXRGcm9tU3RyaW5nKG1hdGNoU2hvcnRPZmZzZXQsIGlucHV0KTtcbn0pO1xuXG4vLyBIRUxQRVJTXG5cbi8vIHRpbWV6b25lIGNodW5rZXJcbi8vICcrMTA6MDAnID4gWycxMCcsICAnMDAnXVxuLy8gJy0xNTMwJyAgPiBbJy0xNScsICczMCddXG52YXIgY2h1bmtPZmZzZXQgPSAvKFtcXCtcXC1dfFxcZFxcZCkvZ2k7XG5cbmZ1bmN0aW9uIG9mZnNldEZyb21TdHJpbmcobWF0Y2hlciwgc3RyaW5nKSB7XG4gICAgdmFyIG1hdGNoZXMgPSAoc3RyaW5nIHx8ICcnKS5tYXRjaChtYXRjaGVyKSxcbiAgICAgICAgY2h1bmssXG4gICAgICAgIHBhcnRzLFxuICAgICAgICBtaW51dGVzO1xuXG4gICAgaWYgKG1hdGNoZXMgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY2h1bmsgPSBtYXRjaGVzW21hdGNoZXMubGVuZ3RoIC0gMV0gfHwgW107XG4gICAgcGFydHMgPSAoY2h1bmsgKyAnJykubWF0Y2goY2h1bmtPZmZzZXQpIHx8IFsnLScsIDAsIDBdO1xuICAgIG1pbnV0ZXMgPSArKHBhcnRzWzFdICogNjApICsgdG9JbnQocGFydHNbMl0pO1xuXG4gICAgcmV0dXJuIG1pbnV0ZXMgPT09IDAgPyAwIDogcGFydHNbMF0gPT09ICcrJyA/IG1pbnV0ZXMgOiAtbWludXRlcztcbn1cblxuLy8gUmV0dXJuIGEgbW9tZW50IGZyb20gaW5wdXQsIHRoYXQgaXMgbG9jYWwvdXRjL3pvbmUgZXF1aXZhbGVudCB0byBtb2RlbC5cbmZ1bmN0aW9uIGNsb25lV2l0aE9mZnNldChpbnB1dCwgbW9kZWwpIHtcbiAgICB2YXIgcmVzLCBkaWZmO1xuICAgIGlmIChtb2RlbC5faXNVVEMpIHtcbiAgICAgICAgcmVzID0gbW9kZWwuY2xvbmUoKTtcbiAgICAgICAgZGlmZiA9XG4gICAgICAgICAgICAoaXNNb21lbnQoaW5wdXQpIHx8IGlzRGF0ZShpbnB1dClcbiAgICAgICAgICAgICAgICA/IGlucHV0LnZhbHVlT2YoKVxuICAgICAgICAgICAgICAgIDogY3JlYXRlTG9jYWwoaW5wdXQpLnZhbHVlT2YoKSkgLSByZXMudmFsdWVPZigpO1xuICAgICAgICAvLyBVc2UgbG93LWxldmVsIGFwaSwgYmVjYXVzZSB0aGlzIGZuIGlzIGxvdy1sZXZlbCBhcGkuXG4gICAgICAgIHJlcy5fZC5zZXRUaW1lKHJlcy5fZC52YWx1ZU9mKCkgKyBkaWZmKTtcbiAgICAgICAgaG9va3MudXBkYXRlT2Zmc2V0KHJlcywgZmFsc2UpO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVMb2NhbChpbnB1dCkubG9jYWwoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldERhdGVPZmZzZXQobSkge1xuICAgIC8vIE9uIEZpcmVmb3guMjQgRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIGEgZmxvYXRpbmcgcG9pbnQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvcHVsbC8xODcxXG4gICAgcmV0dXJuIC1NYXRoLnJvdW5kKG0uX2QuZ2V0VGltZXpvbmVPZmZzZXQoKSk7XG59XG5cbi8vIEhPT0tTXG5cbi8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgd2hlbmV2ZXIgYSBtb21lbnQgaXMgbXV0YXRlZC5cbi8vIEl0IGlzIGludGVuZGVkIHRvIGtlZXAgdGhlIG9mZnNldCBpbiBzeW5jIHdpdGggdGhlIHRpbWV6b25lLlxuaG9va3MudXBkYXRlT2Zmc2V0ID0gZnVuY3Rpb24gKCkge307XG5cbi8vIE1PTUVOVFNcblxuLy8ga2VlcExvY2FsVGltZSA9IHRydWUgbWVhbnMgb25seSBjaGFuZ2UgdGhlIHRpbWV6b25lLCB3aXRob3V0XG4vLyBhZmZlY3RpbmcgdGhlIGxvY2FsIGhvdXIuIFNvIDU6MzE6MjYgKzAzMDAgLS1bdXRjT2Zmc2V0KDIsIHRydWUpXS0tPlxuLy8gNTozMToyNiArMDIwMCBJdCBpcyBwb3NzaWJsZSB0aGF0IDU6MzE6MjYgZG9lc24ndCBleGlzdCB3aXRoIG9mZnNldFxuLy8gKzAyMDAsIHNvIHdlIGFkanVzdCB0aGUgdGltZSBhcyBuZWVkZWQsIHRvIGJlIHZhbGlkLlxuLy9cbi8vIEtlZXBpbmcgdGhlIHRpbWUgYWN0dWFsbHkgYWRkcy9zdWJ0cmFjdHMgKG9uZSBob3VyKVxuLy8gZnJvbSB0aGUgYWN0dWFsIHJlcHJlc2VudGVkIHRpbWUuIFRoYXQgaXMgd2h5IHdlIGNhbGwgdXBkYXRlT2Zmc2V0XG4vLyBhIHNlY29uZCB0aW1lLiBJbiBjYXNlIGl0IHdhbnRzIHVzIHRvIGNoYW5nZSB0aGUgb2Zmc2V0IGFnYWluXG4vLyBfY2hhbmdlSW5Qcm9ncmVzcyA9PSB0cnVlIGNhc2UsIHRoZW4gd2UgaGF2ZSB0byBhZGp1c3QsIGJlY2F1c2Vcbi8vIHRoZXJlIGlzIG5vIHN1Y2ggdGltZSBpbiB0aGUgZ2l2ZW4gdGltZXpvbmUuXG5mdW5jdGlvbiBnZXRTZXRPZmZzZXQoaW5wdXQsIGtlZXBMb2NhbFRpbWUsIGtlZXBNaW51dGVzKSB7XG4gICAgdmFyIG9mZnNldCA9IHRoaXMuX29mZnNldCB8fCAwLFxuICAgICAgICBsb2NhbEFkanVzdDtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiBpbnB1dCAhPSBudWxsID8gdGhpcyA6IE5hTjtcbiAgICB9XG4gICAgaWYgKGlucHV0ICE9IG51bGwpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlucHV0ID0gb2Zmc2V0RnJvbVN0cmluZyhtYXRjaFNob3J0T2Zmc2V0LCBpbnB1dCk7XG4gICAgICAgICAgICBpZiAoaW5wdXQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChNYXRoLmFicyhpbnB1dCkgPCAxNiAmJiAha2VlcE1pbnV0ZXMpIHtcbiAgICAgICAgICAgIGlucHV0ID0gaW5wdXQgKiA2MDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX2lzVVRDICYmIGtlZXBMb2NhbFRpbWUpIHtcbiAgICAgICAgICAgIGxvY2FsQWRqdXN0ID0gZ2V0RGF0ZU9mZnNldCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9vZmZzZXQgPSBpbnB1dDtcbiAgICAgICAgdGhpcy5faXNVVEMgPSB0cnVlO1xuICAgICAgICBpZiAobG9jYWxBZGp1c3QgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5hZGQobG9jYWxBZGp1c3QsICdtJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9mZnNldCAhPT0gaW5wdXQpIHtcbiAgICAgICAgICAgIGlmICgha2VlcExvY2FsVGltZSB8fCB0aGlzLl9jaGFuZ2VJblByb2dyZXNzKSB7XG4gICAgICAgICAgICAgICAgYWRkU3VidHJhY3QoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUR1cmF0aW9uKGlucHV0IC0gb2Zmc2V0LCAnbScpLFxuICAgICAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLl9jaGFuZ2VJblByb2dyZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2hhbmdlSW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgaG9va3MudXBkYXRlT2Zmc2V0KHRoaXMsIHRydWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NoYW5nZUluUHJvZ3Jlc3MgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1VUQyA/IG9mZnNldCA6IGdldERhdGVPZmZzZXQodGhpcyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRTZXRab25lKGlucHV0LCBrZWVwTG9jYWxUaW1lKSB7XG4gICAgaWYgKGlucHV0ICE9IG51bGwpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlucHV0ID0gLWlucHV0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51dGNPZmZzZXQoaW5wdXQsIGtlZXBMb2NhbFRpbWUpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAtdGhpcy51dGNPZmZzZXQoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNldE9mZnNldFRvVVRDKGtlZXBMb2NhbFRpbWUpIHtcbiAgICByZXR1cm4gdGhpcy51dGNPZmZzZXQoMCwga2VlcExvY2FsVGltZSk7XG59XG5cbmZ1bmN0aW9uIHNldE9mZnNldFRvTG9jYWwoa2VlcExvY2FsVGltZSkge1xuICAgIGlmICh0aGlzLl9pc1VUQykge1xuICAgICAgICB0aGlzLnV0Y09mZnNldCgwLCBrZWVwTG9jYWxUaW1lKTtcbiAgICAgICAgdGhpcy5faXNVVEMgPSBmYWxzZTtcblxuICAgICAgICBpZiAoa2VlcExvY2FsVGltZSkge1xuICAgICAgICAgICAgdGhpcy5zdWJ0cmFjdChnZXREYXRlT2Zmc2V0KHRoaXMpLCAnbScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBzZXRPZmZzZXRUb1BhcnNlZE9mZnNldCgpIHtcbiAgICBpZiAodGhpcy5fdHptICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy51dGNPZmZzZXQodGhpcy5fdHptLCBmYWxzZSwgdHJ1ZSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5faSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIHRab25lID0gb2Zmc2V0RnJvbVN0cmluZyhtYXRjaE9mZnNldCwgdGhpcy5faSk7XG4gICAgICAgIGlmICh0Wm9uZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnV0Y09mZnNldCh0Wm9uZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnV0Y09mZnNldCgwLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gaGFzQWxpZ25lZEhvdXJPZmZzZXQoaW5wdXQpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaW5wdXQgPSBpbnB1dCA/IGNyZWF0ZUxvY2FsKGlucHV0KS51dGNPZmZzZXQoKSA6IDA7XG5cbiAgICByZXR1cm4gKHRoaXMudXRjT2Zmc2V0KCkgLSBpbnB1dCkgJSA2MCA9PT0gMDtcbn1cblxuZnVuY3Rpb24gaXNEYXlsaWdodFNhdmluZ1RpbWUoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy51dGNPZmZzZXQoKSA+IHRoaXMuY2xvbmUoKS5tb250aCgwKS51dGNPZmZzZXQoKSB8fFxuICAgICAgICB0aGlzLnV0Y09mZnNldCgpID4gdGhpcy5jbG9uZSgpLm1vbnRoKDUpLnV0Y09mZnNldCgpXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gaXNEYXlsaWdodFNhdmluZ1RpbWVTaGlmdGVkKCkge1xuICAgIGlmICghaXNVbmRlZmluZWQodGhpcy5faXNEU1RTaGlmdGVkKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNEU1RTaGlmdGVkO1xuICAgIH1cblxuICAgIHZhciBjID0ge30sXG4gICAgICAgIG90aGVyO1xuXG4gICAgY29weUNvbmZpZyhjLCB0aGlzKTtcbiAgICBjID0gcHJlcGFyZUNvbmZpZyhjKTtcblxuICAgIGlmIChjLl9hKSB7XG4gICAgICAgIG90aGVyID0gYy5faXNVVEMgPyBjcmVhdGVVVEMoYy5fYSkgOiBjcmVhdGVMb2NhbChjLl9hKTtcbiAgICAgICAgdGhpcy5faXNEU1RTaGlmdGVkID1cbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCgpICYmIGNvbXBhcmVBcnJheXMoYy5fYSwgb3RoZXIudG9BcnJheSgpKSA+IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faXNEU1RTaGlmdGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2lzRFNUU2hpZnRlZDtcbn1cblxuZnVuY3Rpb24gaXNMb2NhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkKCkgPyAhdGhpcy5faXNVVEMgOiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaXNVdGNPZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCgpID8gdGhpcy5faXNVVEMgOiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaXNVdGMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCgpID8gdGhpcy5faXNVVEMgJiYgdGhpcy5fb2Zmc2V0ID09PSAwIDogZmFsc2U7XG59XG5cbi8vIEFTUC5ORVQganNvbiBkYXRlIGZvcm1hdCByZWdleFxudmFyIGFzcE5ldFJlZ2V4ID0gL14oLXxcXCspPyg/OihcXGQqKVsuIF0pPyhcXGQrKTooXFxkKykoPzo6KFxcZCspKFxcLlxcZCopPyk/JC8sXG4gICAgLy8gZnJvbSBodHRwOi8vZG9jcy5jbG9zdXJlLWxpYnJhcnkuZ29vZ2xlY29kZS5jb20vZ2l0L2Nsb3N1cmVfZ29vZ19kYXRlX2RhdGUuanMuc291cmNlLmh0bWxcbiAgICAvLyBzb21ld2hhdCBtb3JlIGluIGxpbmUgd2l0aCA0LjQuMy4yIDIwMDQgc3BlYywgYnV0IGFsbG93cyBkZWNpbWFsIGFueXdoZXJlXG4gICAgLy8gYW5kIGZ1cnRoZXIgbW9kaWZpZWQgdG8gYWxsb3cgZm9yIHN0cmluZ3MgY29udGFpbmluZyBib3RoIHdlZWsgYW5kIGRheVxuICAgIGlzb1JlZ2V4ID1cbiAgICAgICAgL14oLXxcXCspP1AoPzooWy0rXT9bMC05LC5dKilZKT8oPzooWy0rXT9bMC05LC5dKilNKT8oPzooWy0rXT9bMC05LC5dKilXKT8oPzooWy0rXT9bMC05LC5dKilEKT8oPzpUKD86KFstK10/WzAtOSwuXSopSCk/KD86KFstK10/WzAtOSwuXSopTSk/KD86KFstK10/WzAtOSwuXSopUyk/KT8kLztcblxuZnVuY3Rpb24gY3JlYXRlRHVyYXRpb24oaW5wdXQsIGtleSkge1xuICAgIHZhciBkdXJhdGlvbiA9IGlucHV0LFxuICAgICAgICAvLyBtYXRjaGluZyBhZ2FpbnN0IHJlZ2V4cCBpcyBleHBlbnNpdmUsIGRvIGl0IG9uIGRlbWFuZFxuICAgICAgICBtYXRjaCA9IG51bGwsXG4gICAgICAgIHNpZ24sXG4gICAgICAgIHJldCxcbiAgICAgICAgZGlmZlJlcztcblxuICAgIGlmIChpc0R1cmF0aW9uKGlucHV0KSkge1xuICAgICAgICBkdXJhdGlvbiA9IHtcbiAgICAgICAgICAgIG1zOiBpbnB1dC5fbWlsbGlzZWNvbmRzLFxuICAgICAgICAgICAgZDogaW5wdXQuX2RheXMsXG4gICAgICAgICAgICBNOiBpbnB1dC5fbW9udGhzLFxuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAoaXNOdW1iZXIoaW5wdXQpIHx8ICFpc05hTigraW5wdXQpKSB7XG4gICAgICAgIGR1cmF0aW9uID0ge307XG4gICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgIGR1cmF0aW9uW2tleV0gPSAraW5wdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkdXJhdGlvbi5taWxsaXNlY29uZHMgPSAraW5wdXQ7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKChtYXRjaCA9IGFzcE5ldFJlZ2V4LmV4ZWMoaW5wdXQpKSkge1xuICAgICAgICBzaWduID0gbWF0Y2hbMV0gPT09ICctJyA/IC0xIDogMTtcbiAgICAgICAgZHVyYXRpb24gPSB7XG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgZDogdG9JbnQobWF0Y2hbREFURV0pICogc2lnbixcbiAgICAgICAgICAgIGg6IHRvSW50KG1hdGNoW0hPVVJdKSAqIHNpZ24sXG4gICAgICAgICAgICBtOiB0b0ludChtYXRjaFtNSU5VVEVdKSAqIHNpZ24sXG4gICAgICAgICAgICBzOiB0b0ludChtYXRjaFtTRUNPTkRdKSAqIHNpZ24sXG4gICAgICAgICAgICBtczogdG9JbnQoYWJzUm91bmQobWF0Y2hbTUlMTElTRUNPTkRdICogMTAwMCkpICogc2lnbiwgLy8gdGhlIG1pbGxpc2Vjb25kIGRlY2ltYWwgcG9pbnQgaXMgaW5jbHVkZWQgaW4gdGhlIG1hdGNoXG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmICgobWF0Y2ggPSBpc29SZWdleC5leGVjKGlucHV0KSkpIHtcbiAgICAgICAgc2lnbiA9IG1hdGNoWzFdID09PSAnLScgPyAtMSA6IDE7XG4gICAgICAgIGR1cmF0aW9uID0ge1xuICAgICAgICAgICAgeTogcGFyc2VJc28obWF0Y2hbMl0sIHNpZ24pLFxuICAgICAgICAgICAgTTogcGFyc2VJc28obWF0Y2hbM10sIHNpZ24pLFxuICAgICAgICAgICAgdzogcGFyc2VJc28obWF0Y2hbNF0sIHNpZ24pLFxuICAgICAgICAgICAgZDogcGFyc2VJc28obWF0Y2hbNV0sIHNpZ24pLFxuICAgICAgICAgICAgaDogcGFyc2VJc28obWF0Y2hbNl0sIHNpZ24pLFxuICAgICAgICAgICAgbTogcGFyc2VJc28obWF0Y2hbN10sIHNpZ24pLFxuICAgICAgICAgICAgczogcGFyc2VJc28obWF0Y2hbOF0sIHNpZ24pLFxuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAoZHVyYXRpb24gPT0gbnVsbCkge1xuICAgICAgICAvLyBjaGVja3MgZm9yIG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgIGR1cmF0aW9uID0ge307XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICAgdHlwZW9mIGR1cmF0aW9uID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAoJ2Zyb20nIGluIGR1cmF0aW9uIHx8ICd0bycgaW4gZHVyYXRpb24pXG4gICAgKSB7XG4gICAgICAgIGRpZmZSZXMgPSBtb21lbnRzRGlmZmVyZW5jZShcbiAgICAgICAgICAgIGNyZWF0ZUxvY2FsKGR1cmF0aW9uLmZyb20pLFxuICAgICAgICAgICAgY3JlYXRlTG9jYWwoZHVyYXRpb24udG8pXG4gICAgICAgICk7XG5cbiAgICAgICAgZHVyYXRpb24gPSB7fTtcbiAgICAgICAgZHVyYXRpb24ubXMgPSBkaWZmUmVzLm1pbGxpc2Vjb25kcztcbiAgICAgICAgZHVyYXRpb24uTSA9IGRpZmZSZXMubW9udGhzO1xuICAgIH1cblxuICAgIHJldCA9IG5ldyBEdXJhdGlvbihkdXJhdGlvbik7XG5cbiAgICBpZiAoaXNEdXJhdGlvbihpbnB1dCkgJiYgaGFzT3duUHJvcChpbnB1dCwgJ19sb2NhbGUnKSkge1xuICAgICAgICByZXQuX2xvY2FsZSA9IGlucHV0Ll9sb2NhbGU7XG4gICAgfVxuXG4gICAgaWYgKGlzRHVyYXRpb24oaW5wdXQpICYmIGhhc093blByb3AoaW5wdXQsICdfaXNWYWxpZCcpKSB7XG4gICAgICAgIHJldC5faXNWYWxpZCA9IGlucHV0Ll9pc1ZhbGlkO1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG59XG5cbmNyZWF0ZUR1cmF0aW9uLmZuID0gRHVyYXRpb24ucHJvdG90eXBlO1xuY3JlYXRlRHVyYXRpb24uaW52YWxpZCA9IGNyZWF0ZUludmFsaWQkMTtcblxuZnVuY3Rpb24gcGFyc2VJc28oaW5wLCBzaWduKSB7XG4gICAgLy8gV2UnZCBub3JtYWxseSB1c2Ugfn5pbnAgZm9yIHRoaXMsIGJ1dCB1bmZvcnR1bmF0ZWx5IGl0IGFsc29cbiAgICAvLyBjb252ZXJ0cyBmbG9hdHMgdG8gaW50cy5cbiAgICAvLyBpbnAgbWF5IGJlIHVuZGVmaW5lZCwgc28gY2FyZWZ1bCBjYWxsaW5nIHJlcGxhY2Ugb24gaXQuXG4gICAgdmFyIHJlcyA9IGlucCAmJiBwYXJzZUZsb2F0KGlucC5yZXBsYWNlKCcsJywgJy4nKSk7XG4gICAgLy8gYXBwbHkgc2lnbiB3aGlsZSB3ZSdyZSBhdCBpdFxuICAgIHJldHVybiAoaXNOYU4ocmVzKSA/IDAgOiByZXMpICogc2lnbjtcbn1cblxuZnVuY3Rpb24gcG9zaXRpdmVNb21lbnRzRGlmZmVyZW5jZShiYXNlLCBvdGhlcikge1xuICAgIHZhciByZXMgPSB7fTtcblxuICAgIHJlcy5tb250aHMgPVxuICAgICAgICBvdGhlci5tb250aCgpIC0gYmFzZS5tb250aCgpICsgKG90aGVyLnllYXIoKSAtIGJhc2UueWVhcigpKSAqIDEyO1xuICAgIGlmIChiYXNlLmNsb25lKCkuYWRkKHJlcy5tb250aHMsICdNJykuaXNBZnRlcihvdGhlcikpIHtcbiAgICAgICAgLS1yZXMubW9udGhzO1xuICAgIH1cblxuICAgIHJlcy5taWxsaXNlY29uZHMgPSArb3RoZXIgLSArYmFzZS5jbG9uZSgpLmFkZChyZXMubW9udGhzLCAnTScpO1xuXG4gICAgcmV0dXJuIHJlcztcbn1cblxuZnVuY3Rpb24gbW9tZW50c0RpZmZlcmVuY2UoYmFzZSwgb3RoZXIpIHtcbiAgICB2YXIgcmVzO1xuICAgIGlmICghKGJhc2UuaXNWYWxpZCgpICYmIG90aGVyLmlzVmFsaWQoKSkpIHtcbiAgICAgICAgcmV0dXJuIHsgbWlsbGlzZWNvbmRzOiAwLCBtb250aHM6IDAgfTtcbiAgICB9XG5cbiAgICBvdGhlciA9IGNsb25lV2l0aE9mZnNldChvdGhlciwgYmFzZSk7XG4gICAgaWYgKGJhc2UuaXNCZWZvcmUob3RoZXIpKSB7XG4gICAgICAgIHJlcyA9IHBvc2l0aXZlTW9tZW50c0RpZmZlcmVuY2UoYmFzZSwgb3RoZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcyA9IHBvc2l0aXZlTW9tZW50c0RpZmZlcmVuY2Uob3RoZXIsIGJhc2UpO1xuICAgICAgICByZXMubWlsbGlzZWNvbmRzID0gLXJlcy5taWxsaXNlY29uZHM7XG4gICAgICAgIHJlcy5tb250aHMgPSAtcmVzLm1vbnRocztcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xufVxuXG4vLyBUT0RPOiByZW1vdmUgJ25hbWUnIGFyZyBhZnRlciBkZXByZWNhdGlvbiBpcyByZW1vdmVkXG5mdW5jdGlvbiBjcmVhdGVBZGRlcihkaXJlY3Rpb24sIG5hbWUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbCwgcGVyaW9kKSB7XG4gICAgICAgIHZhciBkdXIsIHRtcDtcbiAgICAgICAgLy9pbnZlcnQgdGhlIGFyZ3VtZW50cywgYnV0IGNvbXBsYWluIGFib3V0IGl0XG4gICAgICAgIGlmIChwZXJpb2QgIT09IG51bGwgJiYgIWlzTmFOKCtwZXJpb2QpKSB7XG4gICAgICAgICAgICBkZXByZWNhdGVTaW1wbGUoXG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICAnbW9tZW50KCkuJyArXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgK1xuICAgICAgICAgICAgICAgICAgICAnKHBlcmlvZCwgbnVtYmVyKSBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIG1vbWVudCgpLicgK1xuICAgICAgICAgICAgICAgICAgICBuYW1lICtcbiAgICAgICAgICAgICAgICAgICAgJyhudW1iZXIsIHBlcmlvZCkuICcgK1xuICAgICAgICAgICAgICAgICAgICAnU2VlIGh0dHA6Ly9tb21lbnRqcy5jb20vZ3VpZGVzLyMvd2FybmluZ3MvYWRkLWludmVydGVkLXBhcmFtLyBmb3IgbW9yZSBpbmZvLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0bXAgPSB2YWw7XG4gICAgICAgICAgICB2YWwgPSBwZXJpb2Q7XG4gICAgICAgICAgICBwZXJpb2QgPSB0bXA7XG4gICAgICAgIH1cblxuICAgICAgICBkdXIgPSBjcmVhdGVEdXJhdGlvbih2YWwsIHBlcmlvZCk7XG4gICAgICAgIGFkZFN1YnRyYWN0KHRoaXMsIGR1ciwgZGlyZWN0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gYWRkU3VidHJhY3QobW9tLCBkdXJhdGlvbiwgaXNBZGRpbmcsIHVwZGF0ZU9mZnNldCkge1xuICAgIHZhciBtaWxsaXNlY29uZHMgPSBkdXJhdGlvbi5fbWlsbGlzZWNvbmRzLFxuICAgICAgICBkYXlzID0gYWJzUm91bmQoZHVyYXRpb24uX2RheXMpLFxuICAgICAgICBtb250aHMgPSBhYnNSb3VuZChkdXJhdGlvbi5fbW9udGhzKTtcblxuICAgIGlmICghbW9tLmlzVmFsaWQoKSkge1xuICAgICAgICAvLyBObyBvcFxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdXBkYXRlT2Zmc2V0ID0gdXBkYXRlT2Zmc2V0ID09IG51bGwgPyB0cnVlIDogdXBkYXRlT2Zmc2V0O1xuXG4gICAgaWYgKG1vbnRocykge1xuICAgICAgICBzZXRNb250aChtb20sIGdldChtb20sICdNb250aCcpICsgbW9udGhzICogaXNBZGRpbmcpO1xuICAgIH1cbiAgICBpZiAoZGF5cykge1xuICAgICAgICBzZXQkMShtb20sICdEYXRlJywgZ2V0KG1vbSwgJ0RhdGUnKSArIGRheXMgKiBpc0FkZGluZyk7XG4gICAgfVxuICAgIGlmIChtaWxsaXNlY29uZHMpIHtcbiAgICAgICAgbW9tLl9kLnNldFRpbWUobW9tLl9kLnZhbHVlT2YoKSArIG1pbGxpc2Vjb25kcyAqIGlzQWRkaW5nKTtcbiAgICB9XG4gICAgaWYgKHVwZGF0ZU9mZnNldCkge1xuICAgICAgICBob29rcy51cGRhdGVPZmZzZXQobW9tLCBkYXlzIHx8IG1vbnRocyk7XG4gICAgfVxufVxuXG52YXIgYWRkID0gY3JlYXRlQWRkZXIoMSwgJ2FkZCcpLFxuICAgIHN1YnRyYWN0ID0gY3JlYXRlQWRkZXIoLTEsICdzdWJ0cmFjdCcpO1xuXG5mdW5jdGlvbiBpc1N0cmluZyhpbnB1dCkge1xuICAgIHJldHVybiB0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnIHx8IGlucHV0IGluc3RhbmNlb2YgU3RyaW5nO1xufVxuXG4vLyB0eXBlIE1vbWVudElucHV0ID0gTW9tZW50IHwgRGF0ZSB8IHN0cmluZyB8IG51bWJlciB8IChudW1iZXIgfCBzdHJpbmcpW10gfCBNb21lbnRJbnB1dE9iamVjdCB8IHZvaWQ7IC8vIG51bGwgfCB1bmRlZmluZWRcbmZ1bmN0aW9uIGlzTW9tZW50SW5wdXQoaW5wdXQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICBpc01vbWVudChpbnB1dCkgfHxcbiAgICAgICAgaXNEYXRlKGlucHV0KSB8fFxuICAgICAgICBpc1N0cmluZyhpbnB1dCkgfHxcbiAgICAgICAgaXNOdW1iZXIoaW5wdXQpIHx8XG4gICAgICAgIGlzTnVtYmVyT3JTdHJpbmdBcnJheShpbnB1dCkgfHxcbiAgICAgICAgaXNNb21lbnRJbnB1dE9iamVjdChpbnB1dCkgfHxcbiAgICAgICAgaW5wdXQgPT09IG51bGwgfHxcbiAgICAgICAgaW5wdXQgPT09IHVuZGVmaW5lZFxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGlzTW9tZW50SW5wdXRPYmplY3QoaW5wdXQpIHtcbiAgICB2YXIgb2JqZWN0VGVzdCA9IGlzT2JqZWN0KGlucHV0KSAmJiAhaXNPYmplY3RFbXB0eShpbnB1dCksXG4gICAgICAgIHByb3BlcnR5VGVzdCA9IGZhbHNlLFxuICAgICAgICBwcm9wZXJ0aWVzID0gW1xuICAgICAgICAgICAgJ3llYXJzJyxcbiAgICAgICAgICAgICd5ZWFyJyxcbiAgICAgICAgICAgICd5JyxcbiAgICAgICAgICAgICdtb250aHMnLFxuICAgICAgICAgICAgJ21vbnRoJyxcbiAgICAgICAgICAgICdNJyxcbiAgICAgICAgICAgICdkYXlzJyxcbiAgICAgICAgICAgICdkYXknLFxuICAgICAgICAgICAgJ2QnLFxuICAgICAgICAgICAgJ2RhdGVzJyxcbiAgICAgICAgICAgICdkYXRlJyxcbiAgICAgICAgICAgICdEJyxcbiAgICAgICAgICAgICdob3VycycsXG4gICAgICAgICAgICAnaG91cicsXG4gICAgICAgICAgICAnaCcsXG4gICAgICAgICAgICAnbWludXRlcycsXG4gICAgICAgICAgICAnbWludXRlJyxcbiAgICAgICAgICAgICdtJyxcbiAgICAgICAgICAgICdzZWNvbmRzJyxcbiAgICAgICAgICAgICdzZWNvbmQnLFxuICAgICAgICAgICAgJ3MnLFxuICAgICAgICAgICAgJ21pbGxpc2Vjb25kcycsXG4gICAgICAgICAgICAnbWlsbGlzZWNvbmQnLFxuICAgICAgICAgICAgJ21zJyxcbiAgICAgICAgXSxcbiAgICAgICAgaSxcbiAgICAgICAgcHJvcGVydHksXG4gICAgICAgIHByb3BlcnR5TGVuID0gcHJvcGVydGllcy5sZW5ndGg7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgcHJvcGVydHlMZW47IGkgKz0gMSkge1xuICAgICAgICBwcm9wZXJ0eSA9IHByb3BlcnRpZXNbaV07XG4gICAgICAgIHByb3BlcnR5VGVzdCA9IHByb3BlcnR5VGVzdCB8fCBoYXNPd25Qcm9wKGlucHV0LCBwcm9wZXJ0eSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iamVjdFRlc3QgJiYgcHJvcGVydHlUZXN0O1xufVxuXG5mdW5jdGlvbiBpc051bWJlck9yU3RyaW5nQXJyYXkoaW5wdXQpIHtcbiAgICB2YXIgYXJyYXlUZXN0ID0gaXNBcnJheShpbnB1dCksXG4gICAgICAgIGRhdGFUeXBlVGVzdCA9IGZhbHNlO1xuICAgIGlmIChhcnJheVRlc3QpIHtcbiAgICAgICAgZGF0YVR5cGVUZXN0ID1cbiAgICAgICAgICAgIGlucHV0LmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhaXNOdW1iZXIoaXRlbSkgJiYgaXNTdHJpbmcoaW5wdXQpO1xuICAgICAgICAgICAgfSkubGVuZ3RoID09PSAwO1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXlUZXN0ICYmIGRhdGFUeXBlVGVzdDtcbn1cblxuZnVuY3Rpb24gaXNDYWxlbmRhclNwZWMoaW5wdXQpIHtcbiAgICB2YXIgb2JqZWN0VGVzdCA9IGlzT2JqZWN0KGlucHV0KSAmJiAhaXNPYmplY3RFbXB0eShpbnB1dCksXG4gICAgICAgIHByb3BlcnR5VGVzdCA9IGZhbHNlLFxuICAgICAgICBwcm9wZXJ0aWVzID0gW1xuICAgICAgICAgICAgJ3NhbWVEYXknLFxuICAgICAgICAgICAgJ25leHREYXknLFxuICAgICAgICAgICAgJ2xhc3REYXknLFxuICAgICAgICAgICAgJ25leHRXZWVrJyxcbiAgICAgICAgICAgICdsYXN0V2VlaycsXG4gICAgICAgICAgICAnc2FtZUVsc2UnLFxuICAgICAgICBdLFxuICAgICAgICBpLFxuICAgICAgICBwcm9wZXJ0eTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBwcm9wZXJ0aWVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHByb3BlcnR5ID0gcHJvcGVydGllc1tpXTtcbiAgICAgICAgcHJvcGVydHlUZXN0ID0gcHJvcGVydHlUZXN0IHx8IGhhc093blByb3AoaW5wdXQsIHByb3BlcnR5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqZWN0VGVzdCAmJiBwcm9wZXJ0eVRlc3Q7XG59XG5cbmZ1bmN0aW9uIGdldENhbGVuZGFyRm9ybWF0KG15TW9tZW50LCBub3cpIHtcbiAgICB2YXIgZGlmZiA9IG15TW9tZW50LmRpZmYobm93LCAnZGF5cycsIHRydWUpO1xuICAgIHJldHVybiBkaWZmIDwgLTZcbiAgICAgICAgPyAnc2FtZUVsc2UnXG4gICAgICAgIDogZGlmZiA8IC0xXG4gICAgICAgICAgPyAnbGFzdFdlZWsnXG4gICAgICAgICAgOiBkaWZmIDwgMFxuICAgICAgICAgICAgPyAnbGFzdERheSdcbiAgICAgICAgICAgIDogZGlmZiA8IDFcbiAgICAgICAgICAgICAgPyAnc2FtZURheSdcbiAgICAgICAgICAgICAgOiBkaWZmIDwgMlxuICAgICAgICAgICAgICAgID8gJ25leHREYXknXG4gICAgICAgICAgICAgICAgOiBkaWZmIDwgN1xuICAgICAgICAgICAgICAgICAgPyAnbmV4dFdlZWsnXG4gICAgICAgICAgICAgICAgICA6ICdzYW1lRWxzZSc7XG59XG5cbmZ1bmN0aW9uIGNhbGVuZGFyJDEodGltZSwgZm9ybWF0cykge1xuICAgIC8vIFN1cHBvcnQgZm9yIHNpbmdsZSBwYXJhbWV0ZXIsIGZvcm1hdHMgb25seSBvdmVybG9hZCB0byB0aGUgY2FsZW5kYXIgZnVuY3Rpb25cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBpZiAoIWFyZ3VtZW50c1swXSkge1xuICAgICAgICAgICAgdGltZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGZvcm1hdHMgPSB1bmRlZmluZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNNb21lbnRJbnB1dChhcmd1bWVudHNbMF0pKSB7XG4gICAgICAgICAgICB0aW1lID0gYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgZm9ybWF0cyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfSBlbHNlIGlmIChpc0NhbGVuZGFyU3BlYyhhcmd1bWVudHNbMF0pKSB7XG4gICAgICAgICAgICBmb3JtYXRzID0gYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgdGltZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBXZSB3YW50IHRvIGNvbXBhcmUgdGhlIHN0YXJ0IG9mIHRvZGF5LCB2cyB0aGlzLlxuICAgIC8vIEdldHRpbmcgc3RhcnQtb2YtdG9kYXkgZGVwZW5kcyBvbiB3aGV0aGVyIHdlJ3JlIGxvY2FsL3V0Yy9vZmZzZXQgb3Igbm90LlxuICAgIHZhciBub3cgPSB0aW1lIHx8IGNyZWF0ZUxvY2FsKCksXG4gICAgICAgIHNvZCA9IGNsb25lV2l0aE9mZnNldChub3csIHRoaXMpLnN0YXJ0T2YoJ2RheScpLFxuICAgICAgICBmb3JtYXQgPSBob29rcy5jYWxlbmRhckZvcm1hdCh0aGlzLCBzb2QpIHx8ICdzYW1lRWxzZScsXG4gICAgICAgIG91dHB1dCA9XG4gICAgICAgICAgICBmb3JtYXRzICYmXG4gICAgICAgICAgICAoaXNGdW5jdGlvbihmb3JtYXRzW2Zvcm1hdF0pXG4gICAgICAgICAgICAgICAgPyBmb3JtYXRzW2Zvcm1hdF0uY2FsbCh0aGlzLCBub3cpXG4gICAgICAgICAgICAgICAgOiBmb3JtYXRzW2Zvcm1hdF0pO1xuXG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0KFxuICAgICAgICBvdXRwdXQgfHwgdGhpcy5sb2NhbGVEYXRhKCkuY2FsZW5kYXIoZm9ybWF0LCB0aGlzLCBjcmVhdGVMb2NhbChub3cpKVxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNsb25lKCkge1xuICAgIHJldHVybiBuZXcgTW9tZW50KHRoaXMpO1xufVxuXG5mdW5jdGlvbiBpc0FmdGVyKGlucHV0LCB1bml0cykge1xuICAgIHZhciBsb2NhbElucHV0ID0gaXNNb21lbnQoaW5wdXQpID8gaW5wdXQgOiBjcmVhdGVMb2NhbChpbnB1dCk7XG4gICAgaWYgKCEodGhpcy5pc1ZhbGlkKCkgJiYgbG9jYWxJbnB1dC5pc1ZhbGlkKCkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cykgfHwgJ21pbGxpc2Vjb25kJztcbiAgICBpZiAodW5pdHMgPT09ICdtaWxsaXNlY29uZCcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpID4gbG9jYWxJbnB1dC52YWx1ZU9mKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsSW5wdXQudmFsdWVPZigpIDwgdGhpcy5jbG9uZSgpLnN0YXJ0T2YodW5pdHMpLnZhbHVlT2YoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzQmVmb3JlKGlucHV0LCB1bml0cykge1xuICAgIHZhciBsb2NhbElucHV0ID0gaXNNb21lbnQoaW5wdXQpID8gaW5wdXQgOiBjcmVhdGVMb2NhbChpbnB1dCk7XG4gICAgaWYgKCEodGhpcy5pc1ZhbGlkKCkgJiYgbG9jYWxJbnB1dC5pc1ZhbGlkKCkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cykgfHwgJ21pbGxpc2Vjb25kJztcbiAgICBpZiAodW5pdHMgPT09ICdtaWxsaXNlY29uZCcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpIDwgbG9jYWxJbnB1dC52YWx1ZU9mKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5lbmRPZih1bml0cykudmFsdWVPZigpIDwgbG9jYWxJbnB1dC52YWx1ZU9mKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc0JldHdlZW4oZnJvbSwgdG8sIHVuaXRzLCBpbmNsdXNpdml0eSkge1xuICAgIHZhciBsb2NhbEZyb20gPSBpc01vbWVudChmcm9tKSA/IGZyb20gOiBjcmVhdGVMb2NhbChmcm9tKSxcbiAgICAgICAgbG9jYWxUbyA9IGlzTW9tZW50KHRvKSA/IHRvIDogY3JlYXRlTG9jYWwodG8pO1xuICAgIGlmICghKHRoaXMuaXNWYWxpZCgpICYmIGxvY2FsRnJvbS5pc1ZhbGlkKCkgJiYgbG9jYWxUby5pc1ZhbGlkKCkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaW5jbHVzaXZpdHkgPSBpbmNsdXNpdml0eSB8fCAnKCknO1xuICAgIHJldHVybiAoXG4gICAgICAgIChpbmNsdXNpdml0eVswXSA9PT0gJygnXG4gICAgICAgICAgICA/IHRoaXMuaXNBZnRlcihsb2NhbEZyb20sIHVuaXRzKVxuICAgICAgICAgICAgOiAhdGhpcy5pc0JlZm9yZShsb2NhbEZyb20sIHVuaXRzKSkgJiZcbiAgICAgICAgKGluY2x1c2l2aXR5WzFdID09PSAnKSdcbiAgICAgICAgICAgID8gdGhpcy5pc0JlZm9yZShsb2NhbFRvLCB1bml0cylcbiAgICAgICAgICAgIDogIXRoaXMuaXNBZnRlcihsb2NhbFRvLCB1bml0cykpXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gaXNTYW1lKGlucHV0LCB1bml0cykge1xuICAgIHZhciBsb2NhbElucHV0ID0gaXNNb21lbnQoaW5wdXQpID8gaW5wdXQgOiBjcmVhdGVMb2NhbChpbnB1dCksXG4gICAgICAgIGlucHV0TXM7XG4gICAgaWYgKCEodGhpcy5pc1ZhbGlkKCkgJiYgbG9jYWxJbnB1dC5pc1ZhbGlkKCkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cykgfHwgJ21pbGxpc2Vjb25kJztcbiAgICBpZiAodW5pdHMgPT09ICdtaWxsaXNlY29uZCcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpID09PSBsb2NhbElucHV0LnZhbHVlT2YoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpbnB1dE1zID0gbG9jYWxJbnB1dC52YWx1ZU9mKCk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB0aGlzLmNsb25lKCkuc3RhcnRPZih1bml0cykudmFsdWVPZigpIDw9IGlucHV0TXMgJiZcbiAgICAgICAgICAgIGlucHV0TXMgPD0gdGhpcy5jbG9uZSgpLmVuZE9mKHVuaXRzKS52YWx1ZU9mKClcbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzU2FtZU9yQWZ0ZXIoaW5wdXQsIHVuaXRzKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNTYW1lKGlucHV0LCB1bml0cykgfHwgdGhpcy5pc0FmdGVyKGlucHV0LCB1bml0cyk7XG59XG5cbmZ1bmN0aW9uIGlzU2FtZU9yQmVmb3JlKGlucHV0LCB1bml0cykge1xuICAgIHJldHVybiB0aGlzLmlzU2FtZShpbnB1dCwgdW5pdHMpIHx8IHRoaXMuaXNCZWZvcmUoaW5wdXQsIHVuaXRzKTtcbn1cblxuZnVuY3Rpb24gZGlmZihpbnB1dCwgdW5pdHMsIGFzRmxvYXQpIHtcbiAgICB2YXIgdGhhdCwgem9uZURlbHRhLCBvdXRwdXQ7XG5cbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgfVxuXG4gICAgdGhhdCA9IGNsb25lV2l0aE9mZnNldChpbnB1dCwgdGhpcyk7XG5cbiAgICBpZiAoIXRoYXQuaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgfVxuXG4gICAgem9uZURlbHRhID0gKHRoYXQudXRjT2Zmc2V0KCkgLSB0aGlzLnV0Y09mZnNldCgpKSAqIDZlNDtcblxuICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpO1xuXG4gICAgc3dpdGNoICh1bml0cykge1xuICAgICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgICAgIG91dHB1dCA9IG1vbnRoRGlmZih0aGlzLCB0aGF0KSAvIDEyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICAgIG91dHB1dCA9IG1vbnRoRGlmZih0aGlzLCB0aGF0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdxdWFydGVyJzpcbiAgICAgICAgICAgIG91dHB1dCA9IG1vbnRoRGlmZih0aGlzLCB0aGF0KSAvIDM7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc2Vjb25kJzpcbiAgICAgICAgICAgIG91dHB1dCA9ICh0aGlzIC0gdGhhdCkgLyAxZTM7XG4gICAgICAgICAgICBicmVhazsgLy8gMTAwMFxuICAgICAgICBjYXNlICdtaW51dGUnOlxuICAgICAgICAgICAgb3V0cHV0ID0gKHRoaXMgLSB0aGF0KSAvIDZlNDtcbiAgICAgICAgICAgIGJyZWFrOyAvLyAxMDAwICogNjBcbiAgICAgICAgY2FzZSAnaG91cic6XG4gICAgICAgICAgICBvdXRwdXQgPSAodGhpcyAtIHRoYXQpIC8gMzZlNTtcbiAgICAgICAgICAgIGJyZWFrOyAvLyAxMDAwICogNjAgKiA2MFxuICAgICAgICBjYXNlICdkYXknOlxuICAgICAgICAgICAgb3V0cHV0ID0gKHRoaXMgLSB0aGF0IC0gem9uZURlbHRhKSAvIDg2NGU1O1xuICAgICAgICAgICAgYnJlYWs7IC8vIDEwMDAgKiA2MCAqIDYwICogMjQsIG5lZ2F0ZSBkc3RcbiAgICAgICAgY2FzZSAnd2Vlayc6XG4gICAgICAgICAgICBvdXRwdXQgPSAodGhpcyAtIHRoYXQgLSB6b25lRGVsdGEpIC8gNjA0OGU1O1xuICAgICAgICAgICAgYnJlYWs7IC8vIDEwMDAgKiA2MCAqIDYwICogMjQgKiA3LCBuZWdhdGUgZHN0XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBvdXRwdXQgPSB0aGlzIC0gdGhhdDtcbiAgICB9XG5cbiAgICByZXR1cm4gYXNGbG9hdCA/IG91dHB1dCA6IGFic0Zsb29yKG91dHB1dCk7XG59XG5cbmZ1bmN0aW9uIG1vbnRoRGlmZihhLCBiKSB7XG4gICAgaWYgKGEuZGF0ZSgpIDwgYi5kYXRlKCkpIHtcbiAgICAgICAgLy8gZW5kLW9mLW1vbnRoIGNhbGN1bGF0aW9ucyB3b3JrIGNvcnJlY3Qgd2hlbiB0aGUgc3RhcnQgbW9udGggaGFzIG1vcmVcbiAgICAgICAgLy8gZGF5cyB0aGFuIHRoZSBlbmQgbW9udGguXG4gICAgICAgIHJldHVybiAtbW9udGhEaWZmKGIsIGEpO1xuICAgIH1cbiAgICAvLyBkaWZmZXJlbmNlIGluIG1vbnRoc1xuICAgIHZhciB3aG9sZU1vbnRoRGlmZiA9IChiLnllYXIoKSAtIGEueWVhcigpKSAqIDEyICsgKGIubW9udGgoKSAtIGEubW9udGgoKSksXG4gICAgICAgIC8vIGIgaXMgaW4gKGFuY2hvciAtIDEgbW9udGgsIGFuY2hvciArIDEgbW9udGgpXG4gICAgICAgIGFuY2hvciA9IGEuY2xvbmUoKS5hZGQod2hvbGVNb250aERpZmYsICdtb250aHMnKSxcbiAgICAgICAgYW5jaG9yMixcbiAgICAgICAgYWRqdXN0O1xuXG4gICAgaWYgKGIgLSBhbmNob3IgPCAwKSB7XG4gICAgICAgIGFuY2hvcjIgPSBhLmNsb25lKCkuYWRkKHdob2xlTW9udGhEaWZmIC0gMSwgJ21vbnRocycpO1xuICAgICAgICAvLyBsaW5lYXIgYWNyb3NzIHRoZSBtb250aFxuICAgICAgICBhZGp1c3QgPSAoYiAtIGFuY2hvcikgLyAoYW5jaG9yIC0gYW5jaG9yMik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYW5jaG9yMiA9IGEuY2xvbmUoKS5hZGQod2hvbGVNb250aERpZmYgKyAxLCAnbW9udGhzJyk7XG4gICAgICAgIC8vIGxpbmVhciBhY3Jvc3MgdGhlIG1vbnRoXG4gICAgICAgIGFkanVzdCA9IChiIC0gYW5jaG9yKSAvIChhbmNob3IyIC0gYW5jaG9yKTtcbiAgICB9XG5cbiAgICAvL2NoZWNrIGZvciBuZWdhdGl2ZSB6ZXJvLCByZXR1cm4gemVybyBpZiBuZWdhdGl2ZSB6ZXJvXG4gICAgcmV0dXJuIC0od2hvbGVNb250aERpZmYgKyBhZGp1c3QpIHx8IDA7XG59XG5cbmhvb2tzLmRlZmF1bHRGb3JtYXQgPSAnWVlZWS1NTS1ERFRISDptbTpzc1onO1xuaG9va3MuZGVmYXVsdEZvcm1hdFV0YyA9ICdZWVlZLU1NLUREVEhIOm1tOnNzW1pdJztcblxuZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5sb2NhbGUoJ2VuJykuZm9ybWF0KCdkZGQgTU1NIEREIFlZWVkgSEg6bW06c3MgW0dNVF1aWicpO1xufVxuXG5mdW5jdGlvbiB0b0lTT1N0cmluZyhrZWVwT2Zmc2V0KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIHV0YyA9IGtlZXBPZmZzZXQgIT09IHRydWUsXG4gICAgICAgIG0gPSB1dGMgPyB0aGlzLmNsb25lKCkudXRjKCkgOiB0aGlzO1xuICAgIGlmIChtLnllYXIoKSA8IDAgfHwgbS55ZWFyKCkgPiA5OTk5KSB7XG4gICAgICAgIHJldHVybiBmb3JtYXRNb21lbnQoXG4gICAgICAgICAgICBtLFxuICAgICAgICAgICAgdXRjXG4gICAgICAgICAgICAgICAgPyAnWVlZWVlZLU1NLUREW1RdSEg6bW06c3MuU1NTW1pdJ1xuICAgICAgICAgICAgICAgIDogJ1lZWVlZWS1NTS1ERFtUXUhIOm1tOnNzLlNTU1onXG4gICAgICAgICk7XG4gICAgfVxuICAgIGlmIChpc0Z1bmN0aW9uKERhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nKSkge1xuICAgICAgICAvLyBuYXRpdmUgaW1wbGVtZW50YXRpb24gaXMgfjUweCBmYXN0ZXIsIHVzZSBpdCB3aGVuIHdlIGNhblxuICAgICAgICBpZiAodXRjKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0RhdGUoKS50b0lTT1N0cmluZygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMudmFsdWVPZigpICsgdGhpcy51dGNPZmZzZXQoKSAqIDYwICogMTAwMClcbiAgICAgICAgICAgICAgICAudG9JU09TdHJpbmcoKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCdaJywgZm9ybWF0TW9tZW50KG0sICdaJykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmb3JtYXRNb21lbnQoXG4gICAgICAgIG0sXG4gICAgICAgIHV0YyA/ICdZWVlZLU1NLUREW1RdSEg6bW06c3MuU1NTW1pdJyA6ICdZWVlZLU1NLUREW1RdSEg6bW06c3MuU1NTWidcbiAgICApO1xufVxuXG4vKipcbiAqIFJldHVybiBhIGh1bWFuIHJlYWRhYmxlIHJlcHJlc2VudGF0aW9uIG9mIGEgbW9tZW50IHRoYXQgY2FuXG4gKiBhbHNvIGJlIGV2YWx1YXRlZCB0byBnZXQgYSBuZXcgbW9tZW50IHdoaWNoIGlzIHRoZSBzYW1lXG4gKlxuICogQGxpbmsgaHR0cHM6Ly9ub2RlanMub3JnL2Rpc3QvbGF0ZXN0L2RvY3MvYXBpL3V0aWwuaHRtbCN1dGlsX2N1c3RvbV9pbnNwZWN0X2Z1bmN0aW9uX29uX29iamVjdHNcbiAqL1xuZnVuY3Rpb24gaW5zcGVjdCgpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiAnbW9tZW50LmludmFsaWQoLyogJyArIHRoaXMuX2kgKyAnICovKSc7XG4gICAgfVxuICAgIHZhciBmdW5jID0gJ21vbWVudCcsXG4gICAgICAgIHpvbmUgPSAnJyxcbiAgICAgICAgcHJlZml4LFxuICAgICAgICB5ZWFyLFxuICAgICAgICBkYXRldGltZSxcbiAgICAgICAgc3VmZml4O1xuICAgIGlmICghdGhpcy5pc0xvY2FsKCkpIHtcbiAgICAgICAgZnVuYyA9IHRoaXMudXRjT2Zmc2V0KCkgPT09IDAgPyAnbW9tZW50LnV0YycgOiAnbW9tZW50LnBhcnNlWm9uZSc7XG4gICAgICAgIHpvbmUgPSAnWic7XG4gICAgfVxuICAgIHByZWZpeCA9ICdbJyArIGZ1bmMgKyAnKFwiXSc7XG4gICAgeWVhciA9IDAgPD0gdGhpcy55ZWFyKCkgJiYgdGhpcy55ZWFyKCkgPD0gOTk5OSA/ICdZWVlZJyA6ICdZWVlZWVknO1xuICAgIGRhdGV0aW1lID0gJy1NTS1ERFtUXUhIOm1tOnNzLlNTUyc7XG4gICAgc3VmZml4ID0gem9uZSArICdbXCIpXSc7XG5cbiAgICByZXR1cm4gdGhpcy5mb3JtYXQocHJlZml4ICsgeWVhciArIGRhdGV0aW1lICsgc3VmZml4KTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0KGlucHV0U3RyaW5nKSB7XG4gICAgaWYgKCFpbnB1dFN0cmluZykge1xuICAgICAgICBpbnB1dFN0cmluZyA9IHRoaXMuaXNVdGMoKVxuICAgICAgICAgICAgPyBob29rcy5kZWZhdWx0Rm9ybWF0VXRjXG4gICAgICAgICAgICA6IGhvb2tzLmRlZmF1bHRGb3JtYXQ7XG4gICAgfVxuICAgIHZhciBvdXRwdXQgPSBmb3JtYXRNb21lbnQodGhpcywgaW5wdXRTdHJpbmcpO1xuICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5wb3N0Zm9ybWF0KG91dHB1dCk7XG59XG5cbmZ1bmN0aW9uIGZyb20odGltZSwgd2l0aG91dFN1ZmZpeCkge1xuICAgIGlmIChcbiAgICAgICAgdGhpcy5pc1ZhbGlkKCkgJiZcbiAgICAgICAgKChpc01vbWVudCh0aW1lKSAmJiB0aW1lLmlzVmFsaWQoKSkgfHwgY3JlYXRlTG9jYWwodGltZSkuaXNWYWxpZCgpKVxuICAgICkge1xuICAgICAgICByZXR1cm4gY3JlYXRlRHVyYXRpb24oeyB0bzogdGhpcywgZnJvbTogdGltZSB9KVxuICAgICAgICAgICAgLmxvY2FsZSh0aGlzLmxvY2FsZSgpKVxuICAgICAgICAgICAgLmh1bWFuaXplKCF3aXRob3V0U3VmZml4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkuaW52YWxpZERhdGUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGZyb21Ob3cod2l0aG91dFN1ZmZpeCkge1xuICAgIHJldHVybiB0aGlzLmZyb20oY3JlYXRlTG9jYWwoKSwgd2l0aG91dFN1ZmZpeCk7XG59XG5cbmZ1bmN0aW9uIHRvKHRpbWUsIHdpdGhvdXRTdWZmaXgpIHtcbiAgICBpZiAoXG4gICAgICAgIHRoaXMuaXNWYWxpZCgpICYmXG4gICAgICAgICgoaXNNb21lbnQodGltZSkgJiYgdGltZS5pc1ZhbGlkKCkpIHx8IGNyZWF0ZUxvY2FsKHRpbWUpLmlzVmFsaWQoKSlcbiAgICApIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUR1cmF0aW9uKHsgZnJvbTogdGhpcywgdG86IHRpbWUgfSlcbiAgICAgICAgICAgIC5sb2NhbGUodGhpcy5sb2NhbGUoKSlcbiAgICAgICAgICAgIC5odW1hbml6ZSghd2l0aG91dFN1ZmZpeCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLmludmFsaWREYXRlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0b05vdyh3aXRob3V0U3VmZml4KSB7XG4gICAgcmV0dXJuIHRoaXMudG8oY3JlYXRlTG9jYWwoKSwgd2l0aG91dFN1ZmZpeCk7XG59XG5cbi8vIElmIHBhc3NlZCBhIGxvY2FsZSBrZXksIGl0IHdpbGwgc2V0IHRoZSBsb2NhbGUgZm9yIHRoaXNcbi8vIGluc3RhbmNlLiAgT3RoZXJ3aXNlLCBpdCB3aWxsIHJldHVybiB0aGUgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vIHZhcmlhYmxlcyBmb3IgdGhpcyBpbnN0YW5jZS5cbmZ1bmN0aW9uIGxvY2FsZShrZXkpIHtcbiAgICB2YXIgbmV3TG9jYWxlRGF0YTtcblxuICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9jYWxlLl9hYmJyO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0xvY2FsZURhdGEgPSBnZXRMb2NhbGUoa2V5KTtcbiAgICAgICAgaWYgKG5ld0xvY2FsZURhdGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fbG9jYWxlID0gbmV3TG9jYWxlRGF0YTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5cbnZhciBsYW5nID0gZGVwcmVjYXRlKFxuICAgICdtb21lbnQoKS5sYW5nKCkgaXMgZGVwcmVjYXRlZC4gSW5zdGVhZCwgdXNlIG1vbWVudCgpLmxvY2FsZURhdGEoKSB0byBnZXQgdGhlIGxhbmd1YWdlIGNvbmZpZ3VyYXRpb24uIFVzZSBtb21lbnQoKS5sb2NhbGUoKSB0byBjaGFuZ2UgbGFuZ3VhZ2VzLicsXG4gICAgZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2FsZShrZXkpO1xuICAgICAgICB9XG4gICAgfVxuKTtcblxuZnVuY3Rpb24gbG9jYWxlRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlO1xufVxuXG52YXIgTVNfUEVSX1NFQ09ORCA9IDEwMDAsXG4gICAgTVNfUEVSX01JTlVURSA9IDYwICogTVNfUEVSX1NFQ09ORCxcbiAgICBNU19QRVJfSE9VUiA9IDYwICogTVNfUEVSX01JTlVURSxcbiAgICBNU19QRVJfNDAwX1lFQVJTID0gKDM2NSAqIDQwMCArIDk3KSAqIDI0ICogTVNfUEVSX0hPVVI7XG5cbi8vIGFjdHVhbCBtb2R1bG8gLSBoYW5kbGVzIG5lZ2F0aXZlIG51bWJlcnMgKGZvciBkYXRlcyBiZWZvcmUgMTk3MCk6XG5mdW5jdGlvbiBtb2QkMShkaXZpZGVuZCwgZGl2aXNvcikge1xuICAgIHJldHVybiAoKGRpdmlkZW5kICUgZGl2aXNvcikgKyBkaXZpc29yKSAlIGRpdmlzb3I7XG59XG5cbmZ1bmN0aW9uIGxvY2FsU3RhcnRPZkRhdGUoeSwgbSwgZCkge1xuICAgIC8vIHRoZSBkYXRlIGNvbnN0cnVjdG9yIHJlbWFwcyB5ZWFycyAwLTk5IHRvIDE5MDAtMTk5OVxuICAgIGlmICh5IDwgMTAwICYmIHkgPj0gMCkge1xuICAgICAgICAvLyBwcmVzZXJ2ZSBsZWFwIHllYXJzIHVzaW5nIGEgZnVsbCA0MDAgeWVhciBjeWNsZSwgdGhlbiByZXNldFxuICAgICAgICByZXR1cm4gbmV3IERhdGUoeSArIDQwMCwgbSwgZCkgLSBNU19QRVJfNDAwX1lFQVJTO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSh5LCBtLCBkKS52YWx1ZU9mKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB1dGNTdGFydE9mRGF0ZSh5LCBtLCBkKSB7XG4gICAgLy8gRGF0ZS5VVEMgcmVtYXBzIHllYXJzIDAtOTkgdG8gMTkwMC0xOTk5XG4gICAgaWYgKHkgPCAxMDAgJiYgeSA+PSAwKSB7XG4gICAgICAgIC8vIHByZXNlcnZlIGxlYXAgeWVhcnMgdXNpbmcgYSBmdWxsIDQwMCB5ZWFyIGN5Y2xlLCB0aGVuIHJlc2V0XG4gICAgICAgIHJldHVybiBEYXRlLlVUQyh5ICsgNDAwLCBtLCBkKSAtIE1TX1BFUl80MDBfWUVBUlM7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIERhdGUuVVRDKHksIG0sIGQpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc3RhcnRPZih1bml0cykge1xuICAgIHZhciB0aW1lLCBzdGFydE9mRGF0ZTtcbiAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcbiAgICBpZiAodW5pdHMgPT09IHVuZGVmaW5lZCB8fCB1bml0cyA9PT0gJ21pbGxpc2Vjb25kJyB8fCAhdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RhcnRPZkRhdGUgPSB0aGlzLl9pc1VUQyA/IHV0Y1N0YXJ0T2ZEYXRlIDogbG9jYWxTdGFydE9mRGF0ZTtcblxuICAgIHN3aXRjaCAodW5pdHMpIHtcbiAgICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgICAgICB0aW1lID0gc3RhcnRPZkRhdGUodGhpcy55ZWFyKCksIDAsIDEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3F1YXJ0ZXInOlxuICAgICAgICAgICAgdGltZSA9IHN0YXJ0T2ZEYXRlKFxuICAgICAgICAgICAgICAgIHRoaXMueWVhcigpLFxuICAgICAgICAgICAgICAgIHRoaXMubW9udGgoKSAtICh0aGlzLm1vbnRoKCkgJSAzKSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICAgIHRpbWUgPSBzdGFydE9mRGF0ZSh0aGlzLnllYXIoKSwgdGhpcy5tb250aCgpLCAxKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd3ZWVrJzpcbiAgICAgICAgICAgIHRpbWUgPSBzdGFydE9mRGF0ZShcbiAgICAgICAgICAgICAgICB0aGlzLnllYXIoKSxcbiAgICAgICAgICAgICAgICB0aGlzLm1vbnRoKCksXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlKCkgLSB0aGlzLndlZWtkYXkoKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdpc29XZWVrJzpcbiAgICAgICAgICAgIHRpbWUgPSBzdGFydE9mRGF0ZShcbiAgICAgICAgICAgICAgICB0aGlzLnllYXIoKSxcbiAgICAgICAgICAgICAgICB0aGlzLm1vbnRoKCksXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlKCkgLSAodGhpcy5pc29XZWVrZGF5KCkgLSAxKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkYXknOlxuICAgICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgICAgIHRpbWUgPSBzdGFydE9mRGF0ZSh0aGlzLnllYXIoKSwgdGhpcy5tb250aCgpLCB0aGlzLmRhdGUoKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnaG91cic6XG4gICAgICAgICAgICB0aW1lID0gdGhpcy5fZC52YWx1ZU9mKCk7XG4gICAgICAgICAgICB0aW1lIC09IG1vZCQxKFxuICAgICAgICAgICAgICAgIHRpbWUgKyAodGhpcy5faXNVVEMgPyAwIDogdGhpcy51dGNPZmZzZXQoKSAqIE1TX1BFUl9NSU5VVEUpLFxuICAgICAgICAgICAgICAgIE1TX1BFUl9IT1VSXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgICAgICAgICB0aW1lID0gdGhpcy5fZC52YWx1ZU9mKCk7XG4gICAgICAgICAgICB0aW1lIC09IG1vZCQxKHRpbWUsIE1TX1BFUl9NSU5VVEUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgICAgICAgICB0aW1lID0gdGhpcy5fZC52YWx1ZU9mKCk7XG4gICAgICAgICAgICB0aW1lIC09IG1vZCQxKHRpbWUsIE1TX1BFUl9TRUNPTkQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhpcy5fZC5zZXRUaW1lKHRpbWUpO1xuICAgIGhvb2tzLnVwZGF0ZU9mZnNldCh0aGlzLCB0cnVlKTtcbiAgICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gZW5kT2YodW5pdHMpIHtcbiAgICB2YXIgdGltZSwgc3RhcnRPZkRhdGU7XG4gICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cyk7XG4gICAgaWYgKHVuaXRzID09PSB1bmRlZmluZWQgfHwgdW5pdHMgPT09ICdtaWxsaXNlY29uZCcgfHwgIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN0YXJ0T2ZEYXRlID0gdGhpcy5faXNVVEMgPyB1dGNTdGFydE9mRGF0ZSA6IGxvY2FsU3RhcnRPZkRhdGU7XG5cbiAgICBzd2l0Y2ggKHVuaXRzKSB7XG4gICAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICAgICAgdGltZSA9IHN0YXJ0T2ZEYXRlKHRoaXMueWVhcigpICsgMSwgMCwgMSkgLSAxO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3F1YXJ0ZXInOlxuICAgICAgICAgICAgdGltZSA9XG4gICAgICAgICAgICAgICAgc3RhcnRPZkRhdGUoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueWVhcigpLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vbnRoKCkgLSAodGhpcy5tb250aCgpICUgMykgKyAzLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSAtIDE7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgICAgdGltZSA9IHN0YXJ0T2ZEYXRlKHRoaXMueWVhcigpLCB0aGlzLm1vbnRoKCkgKyAxLCAxKSAtIDE7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnd2Vlayc6XG4gICAgICAgICAgICB0aW1lID1cbiAgICAgICAgICAgICAgICBzdGFydE9mRGF0ZShcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ZWFyKCksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9udGgoKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlKCkgLSB0aGlzLndlZWtkYXkoKSArIDdcbiAgICAgICAgICAgICAgICApIC0gMTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdpc29XZWVrJzpcbiAgICAgICAgICAgIHRpbWUgPVxuICAgICAgICAgICAgICAgIHN0YXJ0T2ZEYXRlKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnllYXIoKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb250aCgpLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGUoKSAtICh0aGlzLmlzb1dlZWtkYXkoKSAtIDEpICsgN1xuICAgICAgICAgICAgICAgICkgLSAxO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2RheSc6XG4gICAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICAgICAgdGltZSA9IHN0YXJ0T2ZEYXRlKHRoaXMueWVhcigpLCB0aGlzLm1vbnRoKCksIHRoaXMuZGF0ZSgpICsgMSkgLSAxO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2hvdXInOlxuICAgICAgICAgICAgdGltZSA9IHRoaXMuX2QudmFsdWVPZigpO1xuICAgICAgICAgICAgdGltZSArPVxuICAgICAgICAgICAgICAgIE1TX1BFUl9IT1VSIC1cbiAgICAgICAgICAgICAgICBtb2QkMShcbiAgICAgICAgICAgICAgICAgICAgdGltZSArICh0aGlzLl9pc1VUQyA/IDAgOiB0aGlzLnV0Y09mZnNldCgpICogTVNfUEVSX01JTlVURSksXG4gICAgICAgICAgICAgICAgICAgIE1TX1BFUl9IT1VSXG4gICAgICAgICAgICAgICAgKSAtXG4gICAgICAgICAgICAgICAgMTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtaW51dGUnOlxuICAgICAgICAgICAgdGltZSA9IHRoaXMuX2QudmFsdWVPZigpO1xuICAgICAgICAgICAgdGltZSArPSBNU19QRVJfTUlOVVRFIC0gbW9kJDEodGltZSwgTVNfUEVSX01JTlVURSkgLSAxO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgICAgICAgICB0aW1lID0gdGhpcy5fZC52YWx1ZU9mKCk7XG4gICAgICAgICAgICB0aW1lICs9IE1TX1BFUl9TRUNPTkQgLSBtb2QkMSh0aW1lLCBNU19QRVJfU0VDT05EKSAtIDE7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICB0aGlzLl9kLnNldFRpbWUodGltZSk7XG4gICAgaG9va3MudXBkYXRlT2Zmc2V0KHRoaXMsIHRydWUpO1xuICAgIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiB2YWx1ZU9mKCkge1xuICAgIHJldHVybiB0aGlzLl9kLnZhbHVlT2YoKSAtICh0aGlzLl9vZmZzZXQgfHwgMCkgKiA2MDAwMDtcbn1cblxuZnVuY3Rpb24gdW5peCgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLnZhbHVlT2YoKSAvIDEwMDApO1xufVxuXG5mdW5jdGlvbiB0b0RhdGUoKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMudmFsdWVPZigpKTtcbn1cblxuZnVuY3Rpb24gdG9BcnJheSgpIHtcbiAgICB2YXIgbSA9IHRoaXM7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgbS55ZWFyKCksXG4gICAgICAgIG0ubW9udGgoKSxcbiAgICAgICAgbS5kYXRlKCksXG4gICAgICAgIG0uaG91cigpLFxuICAgICAgICBtLm1pbnV0ZSgpLFxuICAgICAgICBtLnNlY29uZCgpLFxuICAgICAgICBtLm1pbGxpc2Vjb25kKCksXG4gICAgXTtcbn1cblxuZnVuY3Rpb24gdG9PYmplY3QoKSB7XG4gICAgdmFyIG0gPSB0aGlzO1xuICAgIHJldHVybiB7XG4gICAgICAgIHllYXJzOiBtLnllYXIoKSxcbiAgICAgICAgbW9udGhzOiBtLm1vbnRoKCksXG4gICAgICAgIGRhdGU6IG0uZGF0ZSgpLFxuICAgICAgICBob3VyczogbS5ob3VycygpLFxuICAgICAgICBtaW51dGVzOiBtLm1pbnV0ZXMoKSxcbiAgICAgICAgc2Vjb25kczogbS5zZWNvbmRzKCksXG4gICAgICAgIG1pbGxpc2Vjb25kczogbS5taWxsaXNlY29uZHMoKSxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgLy8gbmV3IERhdGUoTmFOKS50b0pTT04oKSA9PT0gbnVsbFxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQoKSA/IHRoaXMudG9JU09TdHJpbmcoKSA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWQkMigpIHtcbiAgICByZXR1cm4gaXNWYWxpZCh0aGlzKTtcbn1cblxuZnVuY3Rpb24gcGFyc2luZ0ZsYWdzKCkge1xuICAgIHJldHVybiBleHRlbmQoe30sIGdldFBhcnNpbmdGbGFncyh0aGlzKSk7XG59XG5cbmZ1bmN0aW9uIGludmFsaWRBdCgpIHtcbiAgICByZXR1cm4gZ2V0UGFyc2luZ0ZsYWdzKHRoaXMpLm92ZXJmbG93O1xufVxuXG5mdW5jdGlvbiBjcmVhdGlvbkRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5wdXQ6IHRoaXMuX2ksXG4gICAgICAgIGZvcm1hdDogdGhpcy5fZixcbiAgICAgICAgbG9jYWxlOiB0aGlzLl9sb2NhbGUsXG4gICAgICAgIGlzVVRDOiB0aGlzLl9pc1VUQyxcbiAgICAgICAgc3RyaWN0OiB0aGlzLl9zdHJpY3QsXG4gICAgfTtcbn1cblxuYWRkRm9ybWF0VG9rZW4oJ04nLCAwLCAwLCAnZXJhQWJicicpO1xuYWRkRm9ybWF0VG9rZW4oJ05OJywgMCwgMCwgJ2VyYUFiYnInKTtcbmFkZEZvcm1hdFRva2VuKCdOTk4nLCAwLCAwLCAnZXJhQWJicicpO1xuYWRkRm9ybWF0VG9rZW4oJ05OTk4nLCAwLCAwLCAnZXJhTmFtZScpO1xuYWRkRm9ybWF0VG9rZW4oJ05OTk5OJywgMCwgMCwgJ2VyYU5hcnJvdycpO1xuXG5hZGRGb3JtYXRUb2tlbigneScsIFsneScsIDFdLCAneW8nLCAnZXJhWWVhcicpO1xuYWRkRm9ybWF0VG9rZW4oJ3knLCBbJ3l5JywgMl0sIDAsICdlcmFZZWFyJyk7XG5hZGRGb3JtYXRUb2tlbigneScsIFsneXl5JywgM10sIDAsICdlcmFZZWFyJyk7XG5hZGRGb3JtYXRUb2tlbigneScsIFsneXl5eScsIDRdLCAwLCAnZXJhWWVhcicpO1xuXG5hZGRSZWdleFRva2VuKCdOJywgbWF0Y2hFcmFBYmJyKTtcbmFkZFJlZ2V4VG9rZW4oJ05OJywgbWF0Y2hFcmFBYmJyKTtcbmFkZFJlZ2V4VG9rZW4oJ05OTicsIG1hdGNoRXJhQWJicik7XG5hZGRSZWdleFRva2VuKCdOTk5OJywgbWF0Y2hFcmFOYW1lKTtcbmFkZFJlZ2V4VG9rZW4oJ05OTk5OJywgbWF0Y2hFcmFOYXJyb3cpO1xuXG5hZGRQYXJzZVRva2VuKFxuICAgIFsnTicsICdOTicsICdOTk4nLCAnTk5OTicsICdOTk5OTiddLFxuICAgIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZywgdG9rZW4pIHtcbiAgICAgICAgdmFyIGVyYSA9IGNvbmZpZy5fbG9jYWxlLmVyYXNQYXJzZShpbnB1dCwgdG9rZW4sIGNvbmZpZy5fc3RyaWN0KTtcbiAgICAgICAgaWYgKGVyYSkge1xuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuZXJhID0gZXJhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuaW52YWxpZEVyYSA9IGlucHV0O1xuICAgICAgICB9XG4gICAgfVxuKTtcblxuYWRkUmVnZXhUb2tlbigneScsIG1hdGNoVW5zaWduZWQpO1xuYWRkUmVnZXhUb2tlbigneXknLCBtYXRjaFVuc2lnbmVkKTtcbmFkZFJlZ2V4VG9rZW4oJ3l5eScsIG1hdGNoVW5zaWduZWQpO1xuYWRkUmVnZXhUb2tlbigneXl5eScsIG1hdGNoVW5zaWduZWQpO1xuYWRkUmVnZXhUb2tlbigneW8nLCBtYXRjaEVyYVllYXJPcmRpbmFsKTtcblxuYWRkUGFyc2VUb2tlbihbJ3knLCAneXknLCAneXl5JywgJ3l5eXknXSwgWUVBUik7XG5hZGRQYXJzZVRva2VuKFsneW8nXSwgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnLCB0b2tlbikge1xuICAgIHZhciBtYXRjaDtcbiAgICBpZiAoY29uZmlnLl9sb2NhbGUuX2VyYVllYXJPcmRpbmFsUmVnZXgpIHtcbiAgICAgICAgbWF0Y2ggPSBpbnB1dC5tYXRjaChjb25maWcuX2xvY2FsZS5fZXJhWWVhck9yZGluYWxSZWdleCk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5fbG9jYWxlLmVyYVllYXJPcmRpbmFsUGFyc2UpIHtcbiAgICAgICAgYXJyYXlbWUVBUl0gPSBjb25maWcuX2xvY2FsZS5lcmFZZWFyT3JkaW5hbFBhcnNlKGlucHV0LCBtYXRjaCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYXJyYXlbWUVBUl0gPSBwYXJzZUludChpbnB1dCwgMTApO1xuICAgIH1cbn0pO1xuXG5mdW5jdGlvbiBsb2NhbGVFcmFzKG0sIGZvcm1hdCkge1xuICAgIHZhciBpLFxuICAgICAgICBsLFxuICAgICAgICBkYXRlLFxuICAgICAgICBlcmFzID0gdGhpcy5fZXJhcyB8fCBnZXRMb2NhbGUoJ2VuJykuX2VyYXM7XG4gICAgZm9yIChpID0gMCwgbCA9IGVyYXMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgICAgIHN3aXRjaCAodHlwZW9mIGVyYXNbaV0uc2luY2UpIHtcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgLy8gdHJ1bmNhdGUgdGltZVxuICAgICAgICAgICAgICAgIGRhdGUgPSBob29rcyhlcmFzW2ldLnNpbmNlKS5zdGFydE9mKCdkYXknKTtcbiAgICAgICAgICAgICAgICBlcmFzW2ldLnNpbmNlID0gZGF0ZS52YWx1ZU9mKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKHR5cGVvZiBlcmFzW2ldLnVudGlsKSB7XG4gICAgICAgICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICAgICAgICAgIGVyYXNbaV0udW50aWwgPSArSW5maW5pdHk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgIC8vIHRydW5jYXRlIHRpbWVcbiAgICAgICAgICAgICAgICBkYXRlID0gaG9va3MoZXJhc1tpXS51bnRpbCkuc3RhcnRPZignZGF5JykudmFsdWVPZigpO1xuICAgICAgICAgICAgICAgIGVyYXNbaV0udW50aWwgPSBkYXRlLnZhbHVlT2YoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZXJhcztcbn1cblxuZnVuY3Rpb24gbG9jYWxlRXJhc1BhcnNlKGVyYU5hbWUsIGZvcm1hdCwgc3RyaWN0KSB7XG4gICAgdmFyIGksXG4gICAgICAgIGwsXG4gICAgICAgIGVyYXMgPSB0aGlzLmVyYXMoKSxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgYWJicixcbiAgICAgICAgbmFycm93O1xuICAgIGVyYU5hbWUgPSBlcmFOYW1lLnRvVXBwZXJDYXNlKCk7XG5cbiAgICBmb3IgKGkgPSAwLCBsID0gZXJhcy5sZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICAgICAgbmFtZSA9IGVyYXNbaV0ubmFtZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBhYmJyID0gZXJhc1tpXS5hYmJyLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIG5hcnJvdyA9IGVyYXNbaV0ubmFycm93LnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgaWYgKHN0cmljdCkge1xuICAgICAgICAgICAgc3dpdGNoIChmb3JtYXQpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdOJzpcbiAgICAgICAgICAgICAgICBjYXNlICdOTic6XG4gICAgICAgICAgICAgICAgY2FzZSAnTk5OJzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFiYnIgPT09IGVyYU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlcmFzW2ldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnTk5OTic6XG4gICAgICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSBlcmFOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXJhc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ05OTk5OJzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hcnJvdyA9PT0gZXJhTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVyYXNbaV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoW25hbWUsIGFiYnIsIG5hcnJvd10uaW5kZXhPZihlcmFOYW1lKSA+PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJhc1tpXTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbG9jYWxlRXJhc0NvbnZlcnRZZWFyKGVyYSwgeWVhcikge1xuICAgIHZhciBkaXIgPSBlcmEuc2luY2UgPD0gZXJhLnVudGlsID8gKzEgOiAtMTtcbiAgICBpZiAoeWVhciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBob29rcyhlcmEuc2luY2UpLnllYXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gaG9va3MoZXJhLnNpbmNlKS55ZWFyKCkgKyAoeWVhciAtIGVyYS5vZmZzZXQpICogZGlyO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0RXJhTmFtZSgpIHtcbiAgICB2YXIgaSxcbiAgICAgICAgbCxcbiAgICAgICAgdmFsLFxuICAgICAgICBlcmFzID0gdGhpcy5sb2NhbGVEYXRhKCkuZXJhcygpO1xuICAgIGZvciAoaSA9IDAsIGwgPSBlcmFzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgICAgICAvLyB0cnVuY2F0ZSB0aW1lXG4gICAgICAgIHZhbCA9IHRoaXMuY2xvbmUoKS5zdGFydE9mKCdkYXknKS52YWx1ZU9mKCk7XG5cbiAgICAgICAgaWYgKGVyYXNbaV0uc2luY2UgPD0gdmFsICYmIHZhbCA8PSBlcmFzW2ldLnVudGlsKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJhc1tpXS5uYW1lO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcmFzW2ldLnVudGlsIDw9IHZhbCAmJiB2YWwgPD0gZXJhc1tpXS5zaW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuIGVyYXNbaV0ubmFtZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0RXJhTmFycm93KCkge1xuICAgIHZhciBpLFxuICAgICAgICBsLFxuICAgICAgICB2YWwsXG4gICAgICAgIGVyYXMgPSB0aGlzLmxvY2FsZURhdGEoKS5lcmFzKCk7XG4gICAgZm9yIChpID0gMCwgbCA9IGVyYXMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgICAgIC8vIHRydW5jYXRlIHRpbWVcbiAgICAgICAgdmFsID0gdGhpcy5jbG9uZSgpLnN0YXJ0T2YoJ2RheScpLnZhbHVlT2YoKTtcblxuICAgICAgICBpZiAoZXJhc1tpXS5zaW5jZSA8PSB2YWwgJiYgdmFsIDw9IGVyYXNbaV0udW50aWwpIHtcbiAgICAgICAgICAgIHJldHVybiBlcmFzW2ldLm5hcnJvdztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJhc1tpXS51bnRpbCA8PSB2YWwgJiYgdmFsIDw9IGVyYXNbaV0uc2luY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBlcmFzW2ldLm5hcnJvdztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0RXJhQWJicigpIHtcbiAgICB2YXIgaSxcbiAgICAgICAgbCxcbiAgICAgICAgdmFsLFxuICAgICAgICBlcmFzID0gdGhpcy5sb2NhbGVEYXRhKCkuZXJhcygpO1xuICAgIGZvciAoaSA9IDAsIGwgPSBlcmFzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgICAgICAvLyB0cnVuY2F0ZSB0aW1lXG4gICAgICAgIHZhbCA9IHRoaXMuY2xvbmUoKS5zdGFydE9mKCdkYXknKS52YWx1ZU9mKCk7XG5cbiAgICAgICAgaWYgKGVyYXNbaV0uc2luY2UgPD0gdmFsICYmIHZhbCA8PSBlcmFzW2ldLnVudGlsKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJhc1tpXS5hYmJyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcmFzW2ldLnVudGlsIDw9IHZhbCAmJiB2YWwgPD0gZXJhc1tpXS5zaW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuIGVyYXNbaV0uYWJicjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0RXJhWWVhcigpIHtcbiAgICB2YXIgaSxcbiAgICAgICAgbCxcbiAgICAgICAgZGlyLFxuICAgICAgICB2YWwsXG4gICAgICAgIGVyYXMgPSB0aGlzLmxvY2FsZURhdGEoKS5lcmFzKCk7XG4gICAgZm9yIChpID0gMCwgbCA9IGVyYXMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgICAgIGRpciA9IGVyYXNbaV0uc2luY2UgPD0gZXJhc1tpXS51bnRpbCA/ICsxIDogLTE7XG5cbiAgICAgICAgLy8gdHJ1bmNhdGUgdGltZVxuICAgICAgICB2YWwgPSB0aGlzLmNsb25lKCkuc3RhcnRPZignZGF5JykudmFsdWVPZigpO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIChlcmFzW2ldLnNpbmNlIDw9IHZhbCAmJiB2YWwgPD0gZXJhc1tpXS51bnRpbCkgfHxcbiAgICAgICAgICAgIChlcmFzW2ldLnVudGlsIDw9IHZhbCAmJiB2YWwgPD0gZXJhc1tpXS5zaW5jZSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICh0aGlzLnllYXIoKSAtIGhvb2tzKGVyYXNbaV0uc2luY2UpLnllYXIoKSkgKiBkaXIgK1xuICAgICAgICAgICAgICAgIGVyYXNbaV0ub2Zmc2V0XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMueWVhcigpO1xufVxuXG5mdW5jdGlvbiBlcmFzTmFtZVJlZ2V4KGlzU3RyaWN0KSB7XG4gICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfZXJhc05hbWVSZWdleCcpKSB7XG4gICAgICAgIGNvbXB1dGVFcmFzUGFyc2UuY2FsbCh0aGlzKTtcbiAgICB9XG4gICAgcmV0dXJuIGlzU3RyaWN0ID8gdGhpcy5fZXJhc05hbWVSZWdleCA6IHRoaXMuX2VyYXNSZWdleDtcbn1cblxuZnVuY3Rpb24gZXJhc0FiYnJSZWdleChpc1N0cmljdCkge1xuICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX2VyYXNBYmJyUmVnZXgnKSkge1xuICAgICAgICBjb21wdXRlRXJhc1BhcnNlLmNhbGwodGhpcyk7XG4gICAgfVxuICAgIHJldHVybiBpc1N0cmljdCA/IHRoaXMuX2VyYXNBYmJyUmVnZXggOiB0aGlzLl9lcmFzUmVnZXg7XG59XG5cbmZ1bmN0aW9uIGVyYXNOYXJyb3dSZWdleChpc1N0cmljdCkge1xuICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX2VyYXNOYXJyb3dSZWdleCcpKSB7XG4gICAgICAgIGNvbXB1dGVFcmFzUGFyc2UuY2FsbCh0aGlzKTtcbiAgICB9XG4gICAgcmV0dXJuIGlzU3RyaWN0ID8gdGhpcy5fZXJhc05hcnJvd1JlZ2V4IDogdGhpcy5fZXJhc1JlZ2V4O1xufVxuXG5mdW5jdGlvbiBtYXRjaEVyYUFiYnIoaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgIHJldHVybiBsb2NhbGUuZXJhc0FiYnJSZWdleChpc1N0cmljdCk7XG59XG5cbmZ1bmN0aW9uIG1hdGNoRXJhTmFtZShpc1N0cmljdCwgbG9jYWxlKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5lcmFzTmFtZVJlZ2V4KGlzU3RyaWN0KTtcbn1cblxuZnVuY3Rpb24gbWF0Y2hFcmFOYXJyb3coaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgIHJldHVybiBsb2NhbGUuZXJhc05hcnJvd1JlZ2V4KGlzU3RyaWN0KTtcbn1cblxuZnVuY3Rpb24gbWF0Y2hFcmFZZWFyT3JkaW5hbChpc1N0cmljdCwgbG9jYWxlKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5fZXJhWWVhck9yZGluYWxSZWdleCB8fCBtYXRjaFVuc2lnbmVkO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlRXJhc1BhcnNlKCkge1xuICAgIHZhciBhYmJyUGllY2VzID0gW10sXG4gICAgICAgIG5hbWVQaWVjZXMgPSBbXSxcbiAgICAgICAgbmFycm93UGllY2VzID0gW10sXG4gICAgICAgIG1peGVkUGllY2VzID0gW10sXG4gICAgICAgIGksXG4gICAgICAgIGwsXG4gICAgICAgIGVyYXNOYW1lLFxuICAgICAgICBlcmFzQWJicixcbiAgICAgICAgZXJhc05hcnJvdyxcbiAgICAgICAgZXJhcyA9IHRoaXMuZXJhcygpO1xuXG4gICAgZm9yIChpID0gMCwgbCA9IGVyYXMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgICAgIGVyYXNOYW1lID0gcmVnZXhFc2NhcGUoZXJhc1tpXS5uYW1lKTtcbiAgICAgICAgZXJhc0FiYnIgPSByZWdleEVzY2FwZShlcmFzW2ldLmFiYnIpO1xuICAgICAgICBlcmFzTmFycm93ID0gcmVnZXhFc2NhcGUoZXJhc1tpXS5uYXJyb3cpO1xuXG4gICAgICAgIG5hbWVQaWVjZXMucHVzaChlcmFzTmFtZSk7XG4gICAgICAgIGFiYnJQaWVjZXMucHVzaChlcmFzQWJicik7XG4gICAgICAgIG5hcnJvd1BpZWNlcy5wdXNoKGVyYXNOYXJyb3cpO1xuICAgICAgICBtaXhlZFBpZWNlcy5wdXNoKGVyYXNOYW1lKTtcbiAgICAgICAgbWl4ZWRQaWVjZXMucHVzaChlcmFzQWJicik7XG4gICAgICAgIG1peGVkUGllY2VzLnB1c2goZXJhc05hcnJvdyk7XG4gICAgfVxuXG4gICAgdGhpcy5fZXJhc1JlZ2V4ID0gbmV3IFJlZ0V4cCgnXignICsgbWl4ZWRQaWVjZXMuam9pbignfCcpICsgJyknLCAnaScpO1xuICAgIHRoaXMuX2VyYXNOYW1lUmVnZXggPSBuZXcgUmVnRXhwKCdeKCcgKyBuYW1lUGllY2VzLmpvaW4oJ3wnKSArICcpJywgJ2knKTtcbiAgICB0aGlzLl9lcmFzQWJiclJlZ2V4ID0gbmV3IFJlZ0V4cCgnXignICsgYWJiclBpZWNlcy5qb2luKCd8JykgKyAnKScsICdpJyk7XG4gICAgdGhpcy5fZXJhc05hcnJvd1JlZ2V4ID0gbmV3IFJlZ0V4cChcbiAgICAgICAgJ14oJyArIG5hcnJvd1BpZWNlcy5qb2luKCd8JykgKyAnKScsXG4gICAgICAgICdpJ1xuICAgICk7XG59XG5cbi8vIEZPUk1BVFRJTkdcblxuYWRkRm9ybWF0VG9rZW4oMCwgWydnZycsIDJdLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMud2Vla1llYXIoKSAlIDEwMDtcbn0pO1xuXG5hZGRGb3JtYXRUb2tlbigwLCBbJ0dHJywgMl0sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5pc29XZWVrWWVhcigpICUgMTAwO1xufSk7XG5cbmZ1bmN0aW9uIGFkZFdlZWtZZWFyRm9ybWF0VG9rZW4odG9rZW4sIGdldHRlcikge1xuICAgIGFkZEZvcm1hdFRva2VuKDAsIFt0b2tlbiwgdG9rZW4ubGVuZ3RoXSwgMCwgZ2V0dGVyKTtcbn1cblxuYWRkV2Vla1llYXJGb3JtYXRUb2tlbignZ2dnZycsICd3ZWVrWWVhcicpO1xuYWRkV2Vla1llYXJGb3JtYXRUb2tlbignZ2dnZ2cnLCAnd2Vla1llYXInKTtcbmFkZFdlZWtZZWFyRm9ybWF0VG9rZW4oJ0dHR0cnLCAnaXNvV2Vla1llYXInKTtcbmFkZFdlZWtZZWFyRm9ybWF0VG9rZW4oJ0dHR0dHJywgJ2lzb1dlZWtZZWFyJyk7XG5cbi8vIEFMSUFTRVNcblxuLy8gUEFSU0lOR1xuXG5hZGRSZWdleFRva2VuKCdHJywgbWF0Y2hTaWduZWQpO1xuYWRkUmVnZXhUb2tlbignZycsIG1hdGNoU2lnbmVkKTtcbmFkZFJlZ2V4VG9rZW4oJ0dHJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuYWRkUmVnZXhUb2tlbignZ2cnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG5hZGRSZWdleFRva2VuKCdHR0dHJywgbWF0Y2gxdG80LCBtYXRjaDQpO1xuYWRkUmVnZXhUb2tlbignZ2dnZycsIG1hdGNoMXRvNCwgbWF0Y2g0KTtcbmFkZFJlZ2V4VG9rZW4oJ0dHR0dHJywgbWF0Y2gxdG82LCBtYXRjaDYpO1xuYWRkUmVnZXhUb2tlbignZ2dnZ2cnLCBtYXRjaDF0bzYsIG1hdGNoNik7XG5cbmFkZFdlZWtQYXJzZVRva2VuKFxuICAgIFsnZ2dnZycsICdnZ2dnZycsICdHR0dHJywgJ0dHR0dHJ10sXG4gICAgZnVuY3Rpb24gKGlucHV0LCB3ZWVrLCBjb25maWcsIHRva2VuKSB7XG4gICAgICAgIHdlZWtbdG9rZW4uc3Vic3RyKDAsIDIpXSA9IHRvSW50KGlucHV0KTtcbiAgICB9XG4pO1xuXG5hZGRXZWVrUGFyc2VUb2tlbihbJ2dnJywgJ0dHJ10sIGZ1bmN0aW9uIChpbnB1dCwgd2VlaywgY29uZmlnLCB0b2tlbikge1xuICAgIHdlZWtbdG9rZW5dID0gaG9va3MucGFyc2VUd29EaWdpdFllYXIoaW5wdXQpO1xufSk7XG5cbi8vIE1PTUVOVFNcblxuZnVuY3Rpb24gZ2V0U2V0V2Vla1llYXIoaW5wdXQpIHtcbiAgICByZXR1cm4gZ2V0U2V0V2Vla1llYXJIZWxwZXIuY2FsbChcbiAgICAgICAgdGhpcyxcbiAgICAgICAgaW5wdXQsXG4gICAgICAgIHRoaXMud2VlaygpLFxuICAgICAgICB0aGlzLndlZWtkYXkoKSArIHRoaXMubG9jYWxlRGF0YSgpLl93ZWVrLmRvdyxcbiAgICAgICAgdGhpcy5sb2NhbGVEYXRhKCkuX3dlZWsuZG93LFxuICAgICAgICB0aGlzLmxvY2FsZURhdGEoKS5fd2Vlay5kb3lcbiAgICApO1xufVxuXG5mdW5jdGlvbiBnZXRTZXRJU09XZWVrWWVhcihpbnB1dCkge1xuICAgIHJldHVybiBnZXRTZXRXZWVrWWVhckhlbHBlci5jYWxsKFxuICAgICAgICB0aGlzLFxuICAgICAgICBpbnB1dCxcbiAgICAgICAgdGhpcy5pc29XZWVrKCksXG4gICAgICAgIHRoaXMuaXNvV2Vla2RheSgpLFxuICAgICAgICAxLFxuICAgICAgICA0XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0SVNPV2Vla3NJblllYXIoKSB7XG4gICAgcmV0dXJuIHdlZWtzSW5ZZWFyKHRoaXMueWVhcigpLCAxLCA0KTtcbn1cblxuZnVuY3Rpb24gZ2V0SVNPV2Vla3NJbklTT1dlZWtZZWFyKCkge1xuICAgIHJldHVybiB3ZWVrc0luWWVhcih0aGlzLmlzb1dlZWtZZWFyKCksIDEsIDQpO1xufVxuXG5mdW5jdGlvbiBnZXRXZWVrc0luWWVhcigpIHtcbiAgICB2YXIgd2Vla0luZm8gPSB0aGlzLmxvY2FsZURhdGEoKS5fd2VlaztcbiAgICByZXR1cm4gd2Vla3NJblllYXIodGhpcy55ZWFyKCksIHdlZWtJbmZvLmRvdywgd2Vla0luZm8uZG95KTtcbn1cblxuZnVuY3Rpb24gZ2V0V2Vla3NJbldlZWtZZWFyKCkge1xuICAgIHZhciB3ZWVrSW5mbyA9IHRoaXMubG9jYWxlRGF0YSgpLl93ZWVrO1xuICAgIHJldHVybiB3ZWVrc0luWWVhcih0aGlzLndlZWtZZWFyKCksIHdlZWtJbmZvLmRvdywgd2Vla0luZm8uZG95KTtcbn1cblxuZnVuY3Rpb24gZ2V0U2V0V2Vla1llYXJIZWxwZXIoaW5wdXQsIHdlZWssIHdlZWtkYXksIGRvdywgZG95KSB7XG4gICAgdmFyIHdlZWtzVGFyZ2V0O1xuICAgIGlmIChpbnB1dCA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB3ZWVrT2ZZZWFyKHRoaXMsIGRvdywgZG95KS55ZWFyO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdlZWtzVGFyZ2V0ID0gd2Vla3NJblllYXIoaW5wdXQsIGRvdywgZG95KTtcbiAgICAgICAgaWYgKHdlZWsgPiB3ZWVrc1RhcmdldCkge1xuICAgICAgICAgICAgd2VlayA9IHdlZWtzVGFyZ2V0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZXRXZWVrQWxsLmNhbGwodGhpcywgaW5wdXQsIHdlZWssIHdlZWtkYXksIGRvdywgZG95KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNldFdlZWtBbGwod2Vla1llYXIsIHdlZWssIHdlZWtkYXksIGRvdywgZG95KSB7XG4gICAgdmFyIGRheU9mWWVhckRhdGEgPSBkYXlPZlllYXJGcm9tV2Vla3Mod2Vla1llYXIsIHdlZWssIHdlZWtkYXksIGRvdywgZG95KSxcbiAgICAgICAgZGF0ZSA9IGNyZWF0ZVVUQ0RhdGUoZGF5T2ZZZWFyRGF0YS55ZWFyLCAwLCBkYXlPZlllYXJEYXRhLmRheU9mWWVhcik7XG5cbiAgICB0aGlzLnllYXIoZGF0ZS5nZXRVVENGdWxsWWVhcigpKTtcbiAgICB0aGlzLm1vbnRoKGRhdGUuZ2V0VVRDTW9udGgoKSk7XG4gICAgdGhpcy5kYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpKTtcbiAgICByZXR1cm4gdGhpcztcbn1cblxuLy8gRk9STUFUVElOR1xuXG5hZGRGb3JtYXRUb2tlbignUScsIDAsICdRbycsICdxdWFydGVyJyk7XG5cbi8vIFBBUlNJTkdcblxuYWRkUmVnZXhUb2tlbignUScsIG1hdGNoMSk7XG5hZGRQYXJzZVRva2VuKCdRJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSkge1xuICAgIGFycmF5W01PTlRIXSA9ICh0b0ludChpbnB1dCkgLSAxKSAqIDM7XG59KTtcblxuLy8gTU9NRU5UU1xuXG5mdW5jdGlvbiBnZXRTZXRRdWFydGVyKGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0ID09IG51bGxcbiAgICAgICAgPyBNYXRoLmNlaWwoKHRoaXMubW9udGgoKSArIDEpIC8gMylcbiAgICAgICAgOiB0aGlzLm1vbnRoKChpbnB1dCAtIDEpICogMyArICh0aGlzLm1vbnRoKCkgJSAzKSk7XG59XG5cbi8vIEZPUk1BVFRJTkdcblxuYWRkRm9ybWF0VG9rZW4oJ0QnLCBbJ0REJywgMl0sICdEbycsICdkYXRlJyk7XG5cbi8vIFBBUlNJTkdcblxuYWRkUmVnZXhUb2tlbignRCcsIG1hdGNoMXRvMiwgbWF0Y2gxdG8yTm9MZWFkaW5nWmVybyk7XG5hZGRSZWdleFRva2VuKCdERCcsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbmFkZFJlZ2V4VG9rZW4oJ0RvJywgZnVuY3Rpb24gKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICAvLyBUT0RPOiBSZW1vdmUgXCJvcmRpbmFsUGFyc2VcIiBmYWxsYmFjayBpbiBuZXh0IG1ham9yIHJlbGVhc2UuXG4gICAgcmV0dXJuIGlzU3RyaWN0XG4gICAgICAgID8gbG9jYWxlLl9kYXlPZk1vbnRoT3JkaW5hbFBhcnNlIHx8IGxvY2FsZS5fb3JkaW5hbFBhcnNlXG4gICAgICAgIDogbG9jYWxlLl9kYXlPZk1vbnRoT3JkaW5hbFBhcnNlTGVuaWVudDtcbn0pO1xuXG5hZGRQYXJzZVRva2VuKFsnRCcsICdERCddLCBEQVRFKTtcbmFkZFBhcnNlVG9rZW4oJ0RvJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSkge1xuICAgIGFycmF5W0RBVEVdID0gdG9JbnQoaW5wdXQubWF0Y2gobWF0Y2gxdG8yKVswXSk7XG59KTtcblxuLy8gTU9NRU5UU1xuXG52YXIgZ2V0U2V0RGF5T2ZNb250aCA9IG1ha2VHZXRTZXQoJ0RhdGUnLCB0cnVlKTtcblxuLy8gRk9STUFUVElOR1xuXG5hZGRGb3JtYXRUb2tlbignREREJywgWydEREREJywgM10sICdERERvJywgJ2RheU9mWWVhcicpO1xuXG4vLyBQQVJTSU5HXG5cbmFkZFJlZ2V4VG9rZW4oJ0RERCcsIG1hdGNoMXRvMyk7XG5hZGRSZWdleFRva2VuKCdEREREJywgbWF0Y2gzKTtcbmFkZFBhcnNlVG9rZW4oWydEREQnLCAnRERERCddLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICBjb25maWcuX2RheU9mWWVhciA9IHRvSW50KGlucHV0KTtcbn0pO1xuXG4vLyBIRUxQRVJTXG5cbi8vIE1PTUVOVFNcblxuZnVuY3Rpb24gZ2V0U2V0RGF5T2ZZZWFyKGlucHV0KSB7XG4gICAgdmFyIGRheU9mWWVhciA9XG4gICAgICAgIE1hdGgucm91bmQoXG4gICAgICAgICAgICAodGhpcy5jbG9uZSgpLnN0YXJ0T2YoJ2RheScpIC0gdGhpcy5jbG9uZSgpLnN0YXJ0T2YoJ3llYXInKSkgLyA4NjRlNVxuICAgICAgICApICsgMTtcbiAgICByZXR1cm4gaW5wdXQgPT0gbnVsbCA/IGRheU9mWWVhciA6IHRoaXMuYWRkKGlucHV0IC0gZGF5T2ZZZWFyLCAnZCcpO1xufVxuXG4vLyBGT1JNQVRUSU5HXG5cbmFkZEZvcm1hdFRva2VuKCdtJywgWydtbScsIDJdLCAwLCAnbWludXRlJyk7XG5cbi8vIFBBUlNJTkdcblxuYWRkUmVnZXhUb2tlbignbScsIG1hdGNoMXRvMiwgbWF0Y2gxdG8ySGFzWmVybyk7XG5hZGRSZWdleFRva2VuKCdtbScsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbmFkZFBhcnNlVG9rZW4oWydtJywgJ21tJ10sIE1JTlVURSk7XG5cbi8vIE1PTUVOVFNcblxudmFyIGdldFNldE1pbnV0ZSA9IG1ha2VHZXRTZXQoJ01pbnV0ZXMnLCBmYWxzZSk7XG5cbi8vIEZPUk1BVFRJTkdcblxuYWRkRm9ybWF0VG9rZW4oJ3MnLCBbJ3NzJywgMl0sIDAsICdzZWNvbmQnKTtcblxuLy8gUEFSU0lOR1xuXG5hZGRSZWdleFRva2VuKCdzJywgbWF0Y2gxdG8yLCBtYXRjaDF0bzJIYXNaZXJvKTtcbmFkZFJlZ2V4VG9rZW4oJ3NzJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuYWRkUGFyc2VUb2tlbihbJ3MnLCAnc3MnXSwgU0VDT05EKTtcblxuLy8gTU9NRU5UU1xuXG52YXIgZ2V0U2V0U2Vjb25kID0gbWFrZUdldFNldCgnU2Vjb25kcycsIGZhbHNlKTtcblxuLy8gRk9STUFUVElOR1xuXG5hZGRGb3JtYXRUb2tlbignUycsIDAsIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gfn4odGhpcy5taWxsaXNlY29uZCgpIC8gMTAwKTtcbn0pO1xuXG5hZGRGb3JtYXRUb2tlbigwLCBbJ1NTJywgMl0sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gfn4odGhpcy5taWxsaXNlY29uZCgpIC8gMTApO1xufSk7XG5cbmFkZEZvcm1hdFRva2VuKDAsIFsnU1NTJywgM10sIDAsICdtaWxsaXNlY29uZCcpO1xuYWRkRm9ybWF0VG9rZW4oMCwgWydTU1NTJywgNF0sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5taWxsaXNlY29uZCgpICogMTA7XG59KTtcbmFkZEZvcm1hdFRva2VuKDAsIFsnU1NTU1MnLCA1XSwgMCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLm1pbGxpc2Vjb25kKCkgKiAxMDA7XG59KTtcbmFkZEZvcm1hdFRva2VuKDAsIFsnU1NTU1NTJywgNl0sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5taWxsaXNlY29uZCgpICogMTAwMDtcbn0pO1xuYWRkRm9ybWF0VG9rZW4oMCwgWydTU1NTU1NTJywgN10sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5taWxsaXNlY29uZCgpICogMTAwMDA7XG59KTtcbmFkZEZvcm1hdFRva2VuKDAsIFsnU1NTU1NTU1MnLCA4XSwgMCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLm1pbGxpc2Vjb25kKCkgKiAxMDAwMDA7XG59KTtcbmFkZEZvcm1hdFRva2VuKDAsIFsnU1NTU1NTU1NTJywgOV0sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5taWxsaXNlY29uZCgpICogMTAwMDAwMDtcbn0pO1xuXG4vLyBQQVJTSU5HXG5cbmFkZFJlZ2V4VG9rZW4oJ1MnLCBtYXRjaDF0bzMsIG1hdGNoMSk7XG5hZGRSZWdleFRva2VuKCdTUycsIG1hdGNoMXRvMywgbWF0Y2gyKTtcbmFkZFJlZ2V4VG9rZW4oJ1NTUycsIG1hdGNoMXRvMywgbWF0Y2gzKTtcblxudmFyIHRva2VuLCBnZXRTZXRNaWxsaXNlY29uZDtcbmZvciAodG9rZW4gPSAnU1NTUyc7IHRva2VuLmxlbmd0aCA8PSA5OyB0b2tlbiArPSAnUycpIHtcbiAgICBhZGRSZWdleFRva2VuKHRva2VuLCBtYXRjaFVuc2lnbmVkKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VNcyhpbnB1dCwgYXJyYXkpIHtcbiAgICBhcnJheVtNSUxMSVNFQ09ORF0gPSB0b0ludCgoJzAuJyArIGlucHV0KSAqIDEwMDApO1xufVxuXG5mb3IgKHRva2VuID0gJ1MnOyB0b2tlbi5sZW5ndGggPD0gOTsgdG9rZW4gKz0gJ1MnKSB7XG4gICAgYWRkUGFyc2VUb2tlbih0b2tlbiwgcGFyc2VNcyk7XG59XG5cbmdldFNldE1pbGxpc2Vjb25kID0gbWFrZUdldFNldCgnTWlsbGlzZWNvbmRzJywgZmFsc2UpO1xuXG4vLyBGT1JNQVRUSU5HXG5cbmFkZEZvcm1hdFRva2VuKCd6JywgMCwgMCwgJ3pvbmVBYmJyJyk7XG5hZGRGb3JtYXRUb2tlbignenonLCAwLCAwLCAnem9uZU5hbWUnKTtcblxuLy8gTU9NRU5UU1xuXG5mdW5jdGlvbiBnZXRab25lQWJicigpIHtcbiAgICByZXR1cm4gdGhpcy5faXNVVEMgPyAnVVRDJyA6ICcnO1xufVxuXG5mdW5jdGlvbiBnZXRab25lTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNVVEMgPyAnQ29vcmRpbmF0ZWQgVW5pdmVyc2FsIFRpbWUnIDogJyc7XG59XG5cbnZhciBwcm90byA9IE1vbWVudC5wcm90b3R5cGU7XG5cbnByb3RvLmFkZCA9IGFkZDtcbnByb3RvLmNhbGVuZGFyID0gY2FsZW5kYXIkMTtcbnByb3RvLmNsb25lID0gY2xvbmU7XG5wcm90by5kaWZmID0gZGlmZjtcbnByb3RvLmVuZE9mID0gZW5kT2Y7XG5wcm90by5mb3JtYXQgPSBmb3JtYXQ7XG5wcm90by5mcm9tID0gZnJvbTtcbnByb3RvLmZyb21Ob3cgPSBmcm9tTm93O1xucHJvdG8udG8gPSB0bztcbnByb3RvLnRvTm93ID0gdG9Ob3c7XG5wcm90by5nZXQgPSBzdHJpbmdHZXQ7XG5wcm90by5pbnZhbGlkQXQgPSBpbnZhbGlkQXQ7XG5wcm90by5pc0FmdGVyID0gaXNBZnRlcjtcbnByb3RvLmlzQmVmb3JlID0gaXNCZWZvcmU7XG5wcm90by5pc0JldHdlZW4gPSBpc0JldHdlZW47XG5wcm90by5pc1NhbWUgPSBpc1NhbWU7XG5wcm90by5pc1NhbWVPckFmdGVyID0gaXNTYW1lT3JBZnRlcjtcbnByb3RvLmlzU2FtZU9yQmVmb3JlID0gaXNTYW1lT3JCZWZvcmU7XG5wcm90by5pc1ZhbGlkID0gaXNWYWxpZCQyO1xucHJvdG8ubGFuZyA9IGxhbmc7XG5wcm90by5sb2NhbGUgPSBsb2NhbGU7XG5wcm90by5sb2NhbGVEYXRhID0gbG9jYWxlRGF0YTtcbnByb3RvLm1heCA9IHByb3RvdHlwZU1heDtcbnByb3RvLm1pbiA9IHByb3RvdHlwZU1pbjtcbnByb3RvLnBhcnNpbmdGbGFncyA9IHBhcnNpbmdGbGFncztcbnByb3RvLnNldCA9IHN0cmluZ1NldDtcbnByb3RvLnN0YXJ0T2YgPSBzdGFydE9mO1xucHJvdG8uc3VidHJhY3QgPSBzdWJ0cmFjdDtcbnByb3RvLnRvQXJyYXkgPSB0b0FycmF5O1xucHJvdG8udG9PYmplY3QgPSB0b09iamVjdDtcbnByb3RvLnRvRGF0ZSA9IHRvRGF0ZTtcbnByb3RvLnRvSVNPU3RyaW5nID0gdG9JU09TdHJpbmc7XG5wcm90by5pbnNwZWN0ID0gaW5zcGVjdDtcbmlmICh0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wuZm9yICE9IG51bGwpIHtcbiAgICBwcm90b1tTeW1ib2wuZm9yKCdub2RlanMudXRpbC5pbnNwZWN0LmN1c3RvbScpXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICdNb21lbnQ8JyArIHRoaXMuZm9ybWF0KCkgKyAnPic7XG4gICAgfTtcbn1cbnByb3RvLnRvSlNPTiA9IHRvSlNPTjtcbnByb3RvLnRvU3RyaW5nID0gdG9TdHJpbmc7XG5wcm90by51bml4ID0gdW5peDtcbnByb3RvLnZhbHVlT2YgPSB2YWx1ZU9mO1xucHJvdG8uY3JlYXRpb25EYXRhID0gY3JlYXRpb25EYXRhO1xucHJvdG8uZXJhTmFtZSA9IGdldEVyYU5hbWU7XG5wcm90by5lcmFOYXJyb3cgPSBnZXRFcmFOYXJyb3c7XG5wcm90by5lcmFBYmJyID0gZ2V0RXJhQWJicjtcbnByb3RvLmVyYVllYXIgPSBnZXRFcmFZZWFyO1xucHJvdG8ueWVhciA9IGdldFNldFllYXI7XG5wcm90by5pc0xlYXBZZWFyID0gZ2V0SXNMZWFwWWVhcjtcbnByb3RvLndlZWtZZWFyID0gZ2V0U2V0V2Vla1llYXI7XG5wcm90by5pc29XZWVrWWVhciA9IGdldFNldElTT1dlZWtZZWFyO1xucHJvdG8ucXVhcnRlciA9IHByb3RvLnF1YXJ0ZXJzID0gZ2V0U2V0UXVhcnRlcjtcbnByb3RvLm1vbnRoID0gZ2V0U2V0TW9udGg7XG5wcm90by5kYXlzSW5Nb250aCA9IGdldERheXNJbk1vbnRoO1xucHJvdG8ud2VlayA9IHByb3RvLndlZWtzID0gZ2V0U2V0V2VlaztcbnByb3RvLmlzb1dlZWsgPSBwcm90by5pc29XZWVrcyA9IGdldFNldElTT1dlZWs7XG5wcm90by53ZWVrc0luWWVhciA9IGdldFdlZWtzSW5ZZWFyO1xucHJvdG8ud2Vla3NJbldlZWtZZWFyID0gZ2V0V2Vla3NJbldlZWtZZWFyO1xucHJvdG8uaXNvV2Vla3NJblllYXIgPSBnZXRJU09XZWVrc0luWWVhcjtcbnByb3RvLmlzb1dlZWtzSW5JU09XZWVrWWVhciA9IGdldElTT1dlZWtzSW5JU09XZWVrWWVhcjtcbnByb3RvLmRhdGUgPSBnZXRTZXREYXlPZk1vbnRoO1xucHJvdG8uZGF5ID0gcHJvdG8uZGF5cyA9IGdldFNldERheU9mV2VlaztcbnByb3RvLndlZWtkYXkgPSBnZXRTZXRMb2NhbGVEYXlPZldlZWs7XG5wcm90by5pc29XZWVrZGF5ID0gZ2V0U2V0SVNPRGF5T2ZXZWVrO1xucHJvdG8uZGF5T2ZZZWFyID0gZ2V0U2V0RGF5T2ZZZWFyO1xucHJvdG8uaG91ciA9IHByb3RvLmhvdXJzID0gZ2V0U2V0SG91cjtcbnByb3RvLm1pbnV0ZSA9IHByb3RvLm1pbnV0ZXMgPSBnZXRTZXRNaW51dGU7XG5wcm90by5zZWNvbmQgPSBwcm90by5zZWNvbmRzID0gZ2V0U2V0U2Vjb25kO1xucHJvdG8ubWlsbGlzZWNvbmQgPSBwcm90by5taWxsaXNlY29uZHMgPSBnZXRTZXRNaWxsaXNlY29uZDtcbnByb3RvLnV0Y09mZnNldCA9IGdldFNldE9mZnNldDtcbnByb3RvLnV0YyA9IHNldE9mZnNldFRvVVRDO1xucHJvdG8ubG9jYWwgPSBzZXRPZmZzZXRUb0xvY2FsO1xucHJvdG8ucGFyc2Vab25lID0gc2V0T2Zmc2V0VG9QYXJzZWRPZmZzZXQ7XG5wcm90by5oYXNBbGlnbmVkSG91ck9mZnNldCA9IGhhc0FsaWduZWRIb3VyT2Zmc2V0O1xucHJvdG8uaXNEU1QgPSBpc0RheWxpZ2h0U2F2aW5nVGltZTtcbnByb3RvLmlzTG9jYWwgPSBpc0xvY2FsO1xucHJvdG8uaXNVdGNPZmZzZXQgPSBpc1V0Y09mZnNldDtcbnByb3RvLmlzVXRjID0gaXNVdGM7XG5wcm90by5pc1VUQyA9IGlzVXRjO1xucHJvdG8uem9uZUFiYnIgPSBnZXRab25lQWJicjtcbnByb3RvLnpvbmVOYW1lID0gZ2V0Wm9uZU5hbWU7XG5wcm90by5kYXRlcyA9IGRlcHJlY2F0ZShcbiAgICAnZGF0ZXMgYWNjZXNzb3IgaXMgZGVwcmVjYXRlZC4gVXNlIGRhdGUgaW5zdGVhZC4nLFxuICAgIGdldFNldERheU9mTW9udGhcbik7XG5wcm90by5tb250aHMgPSBkZXByZWNhdGUoXG4gICAgJ21vbnRocyBhY2Nlc3NvciBpcyBkZXByZWNhdGVkLiBVc2UgbW9udGggaW5zdGVhZCcsXG4gICAgZ2V0U2V0TW9udGhcbik7XG5wcm90by55ZWFycyA9IGRlcHJlY2F0ZShcbiAgICAneWVhcnMgYWNjZXNzb3IgaXMgZGVwcmVjYXRlZC4gVXNlIHllYXIgaW5zdGVhZCcsXG4gICAgZ2V0U2V0WWVhclxuKTtcbnByb3RvLnpvbmUgPSBkZXByZWNhdGUoXG4gICAgJ21vbWVudCgpLnpvbmUgaXMgZGVwcmVjYXRlZCwgdXNlIG1vbWVudCgpLnV0Y09mZnNldCBpbnN0ZWFkLiBodHRwOi8vbW9tZW50anMuY29tL2d1aWRlcy8jL3dhcm5pbmdzL3pvbmUvJyxcbiAgICBnZXRTZXRab25lXG4pO1xucHJvdG8uaXNEU1RTaGlmdGVkID0gZGVwcmVjYXRlKFxuICAgICdpc0RTVFNoaWZ0ZWQgaXMgZGVwcmVjYXRlZC4gU2VlIGh0dHA6Ly9tb21lbnRqcy5jb20vZ3VpZGVzLyMvd2FybmluZ3MvZHN0LXNoaWZ0ZWQvIGZvciBtb3JlIGluZm9ybWF0aW9uJyxcbiAgICBpc0RheWxpZ2h0U2F2aW5nVGltZVNoaWZ0ZWRcbik7XG5cbmZ1bmN0aW9uIGNyZWF0ZVVuaXgoaW5wdXQpIHtcbiAgICByZXR1cm4gY3JlYXRlTG9jYWwoaW5wdXQgKiAxMDAwKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5ab25lKCkge1xuICAgIHJldHVybiBjcmVhdGVMb2NhbC5hcHBseShudWxsLCBhcmd1bWVudHMpLnBhcnNlWm9uZSgpO1xufVxuXG5mdW5jdGlvbiBwcmVQYXJzZVBvc3RGb3JtYXQoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZztcbn1cblxudmFyIHByb3RvJDEgPSBMb2NhbGUucHJvdG90eXBlO1xuXG5wcm90byQxLmNhbGVuZGFyID0gY2FsZW5kYXI7XG5wcm90byQxLmxvbmdEYXRlRm9ybWF0ID0gbG9uZ0RhdGVGb3JtYXQ7XG5wcm90byQxLmludmFsaWREYXRlID0gaW52YWxpZERhdGU7XG5wcm90byQxLm9yZGluYWwgPSBvcmRpbmFsO1xucHJvdG8kMS5wcmVwYXJzZSA9IHByZVBhcnNlUG9zdEZvcm1hdDtcbnByb3RvJDEucG9zdGZvcm1hdCA9IHByZVBhcnNlUG9zdEZvcm1hdDtcbnByb3RvJDEucmVsYXRpdmVUaW1lID0gcmVsYXRpdmVUaW1lO1xucHJvdG8kMS5wYXN0RnV0dXJlID0gcGFzdEZ1dHVyZTtcbnByb3RvJDEuc2V0ID0gc2V0O1xucHJvdG8kMS5lcmFzID0gbG9jYWxlRXJhcztcbnByb3RvJDEuZXJhc1BhcnNlID0gbG9jYWxlRXJhc1BhcnNlO1xucHJvdG8kMS5lcmFzQ29udmVydFllYXIgPSBsb2NhbGVFcmFzQ29udmVydFllYXI7XG5wcm90byQxLmVyYXNBYmJyUmVnZXggPSBlcmFzQWJiclJlZ2V4O1xucHJvdG8kMS5lcmFzTmFtZVJlZ2V4ID0gZXJhc05hbWVSZWdleDtcbnByb3RvJDEuZXJhc05hcnJvd1JlZ2V4ID0gZXJhc05hcnJvd1JlZ2V4O1xuXG5wcm90byQxLm1vbnRocyA9IGxvY2FsZU1vbnRocztcbnByb3RvJDEubW9udGhzU2hvcnQgPSBsb2NhbGVNb250aHNTaG9ydDtcbnByb3RvJDEubW9udGhzUGFyc2UgPSBsb2NhbGVNb250aHNQYXJzZTtcbnByb3RvJDEubW9udGhzUmVnZXggPSBtb250aHNSZWdleDtcbnByb3RvJDEubW9udGhzU2hvcnRSZWdleCA9IG1vbnRoc1Nob3J0UmVnZXg7XG5wcm90byQxLndlZWsgPSBsb2NhbGVXZWVrO1xucHJvdG8kMS5maXJzdERheU9mWWVhciA9IGxvY2FsZUZpcnN0RGF5T2ZZZWFyO1xucHJvdG8kMS5maXJzdERheU9mV2VlayA9IGxvY2FsZUZpcnN0RGF5T2ZXZWVrO1xuXG5wcm90byQxLndlZWtkYXlzID0gbG9jYWxlV2Vla2RheXM7XG5wcm90byQxLndlZWtkYXlzTWluID0gbG9jYWxlV2Vla2RheXNNaW47XG5wcm90byQxLndlZWtkYXlzU2hvcnQgPSBsb2NhbGVXZWVrZGF5c1Nob3J0O1xucHJvdG8kMS53ZWVrZGF5c1BhcnNlID0gbG9jYWxlV2Vla2RheXNQYXJzZTtcblxucHJvdG8kMS53ZWVrZGF5c1JlZ2V4ID0gd2Vla2RheXNSZWdleDtcbnByb3RvJDEud2Vla2RheXNTaG9ydFJlZ2V4ID0gd2Vla2RheXNTaG9ydFJlZ2V4O1xucHJvdG8kMS53ZWVrZGF5c01pblJlZ2V4ID0gd2Vla2RheXNNaW5SZWdleDtcblxucHJvdG8kMS5pc1BNID0gbG9jYWxlSXNQTTtcbnByb3RvJDEubWVyaWRpZW0gPSBsb2NhbGVNZXJpZGllbTtcblxuZnVuY3Rpb24gZ2V0JDEoZm9ybWF0LCBpbmRleCwgZmllbGQsIHNldHRlcikge1xuICAgIHZhciBsb2NhbGUgPSBnZXRMb2NhbGUoKSxcbiAgICAgICAgdXRjID0gY3JlYXRlVVRDKCkuc2V0KHNldHRlciwgaW5kZXgpO1xuICAgIHJldHVybiBsb2NhbGVbZmllbGRdKHV0YywgZm9ybWF0KTtcbn1cblxuZnVuY3Rpb24gbGlzdE1vbnRoc0ltcGwoZm9ybWF0LCBpbmRleCwgZmllbGQpIHtcbiAgICBpZiAoaXNOdW1iZXIoZm9ybWF0KSkge1xuICAgICAgICBpbmRleCA9IGZvcm1hdDtcbiAgICAgICAgZm9ybWF0ID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGZvcm1hdCA9IGZvcm1hdCB8fCAnJztcblxuICAgIGlmIChpbmRleCAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiBnZXQkMShmb3JtYXQsIGluZGV4LCBmaWVsZCwgJ21vbnRoJyk7XG4gICAgfVxuXG4gICAgdmFyIGksXG4gICAgICAgIG91dCA9IFtdO1xuICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICAgIG91dFtpXSA9IGdldCQxKGZvcm1hdCwgaSwgZmllbGQsICdtb250aCcpO1xuICAgIH1cbiAgICByZXR1cm4gb3V0O1xufVxuXG4vLyAoKVxuLy8gKDUpXG4vLyAoZm10LCA1KVxuLy8gKGZtdClcbi8vICh0cnVlKVxuLy8gKHRydWUsIDUpXG4vLyAodHJ1ZSwgZm10LCA1KVxuLy8gKHRydWUsIGZtdClcbmZ1bmN0aW9uIGxpc3RXZWVrZGF5c0ltcGwobG9jYWxlU29ydGVkLCBmb3JtYXQsIGluZGV4LCBmaWVsZCkge1xuICAgIGlmICh0eXBlb2YgbG9jYWxlU29ydGVkID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgaWYgKGlzTnVtYmVyKGZvcm1hdCkpIHtcbiAgICAgICAgICAgIGluZGV4ID0gZm9ybWF0O1xuICAgICAgICAgICAgZm9ybWF0ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0IHx8ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvcm1hdCA9IGxvY2FsZVNvcnRlZDtcbiAgICAgICAgaW5kZXggPSBmb3JtYXQ7XG4gICAgICAgIGxvY2FsZVNvcnRlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChpc051bWJlcihmb3JtYXQpKSB7XG4gICAgICAgICAgICBpbmRleCA9IGZvcm1hdDtcbiAgICAgICAgICAgIGZvcm1hdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdCB8fCAnJztcbiAgICB9XG5cbiAgICB2YXIgbG9jYWxlID0gZ2V0TG9jYWxlKCksXG4gICAgICAgIHNoaWZ0ID0gbG9jYWxlU29ydGVkID8gbG9jYWxlLl93ZWVrLmRvdyA6IDAsXG4gICAgICAgIGksXG4gICAgICAgIG91dCA9IFtdO1xuXG4gICAgaWYgKGluZGV4ICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGdldCQxKGZvcm1hdCwgKGluZGV4ICsgc2hpZnQpICUgNywgZmllbGQsICdkYXknKTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgIG91dFtpXSA9IGdldCQxKGZvcm1hdCwgKGkgKyBzaGlmdCkgJSA3LCBmaWVsZCwgJ2RheScpO1xuICAgIH1cbiAgICByZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBsaXN0TW9udGhzKGZvcm1hdCwgaW5kZXgpIHtcbiAgICByZXR1cm4gbGlzdE1vbnRoc0ltcGwoZm9ybWF0LCBpbmRleCwgJ21vbnRocycpO1xufVxuXG5mdW5jdGlvbiBsaXN0TW9udGhzU2hvcnQoZm9ybWF0LCBpbmRleCkge1xuICAgIHJldHVybiBsaXN0TW9udGhzSW1wbChmb3JtYXQsIGluZGV4LCAnbW9udGhzU2hvcnQnKTtcbn1cblxuZnVuY3Rpb24gbGlzdFdlZWtkYXlzKGxvY2FsZVNvcnRlZCwgZm9ybWF0LCBpbmRleCkge1xuICAgIHJldHVybiBsaXN0V2Vla2RheXNJbXBsKGxvY2FsZVNvcnRlZCwgZm9ybWF0LCBpbmRleCwgJ3dlZWtkYXlzJyk7XG59XG5cbmZ1bmN0aW9uIGxpc3RXZWVrZGF5c1Nob3J0KGxvY2FsZVNvcnRlZCwgZm9ybWF0LCBpbmRleCkge1xuICAgIHJldHVybiBsaXN0V2Vla2RheXNJbXBsKGxvY2FsZVNvcnRlZCwgZm9ybWF0LCBpbmRleCwgJ3dlZWtkYXlzU2hvcnQnKTtcbn1cblxuZnVuY3Rpb24gbGlzdFdlZWtkYXlzTWluKGxvY2FsZVNvcnRlZCwgZm9ybWF0LCBpbmRleCkge1xuICAgIHJldHVybiBsaXN0V2Vla2RheXNJbXBsKGxvY2FsZVNvcnRlZCwgZm9ybWF0LCBpbmRleCwgJ3dlZWtkYXlzTWluJyk7XG59XG5cbmdldFNldEdsb2JhbExvY2FsZSgnZW4nLCB7XG4gICAgZXJhczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBzaW5jZTogJzAwMDEtMDEtMDEnLFxuICAgICAgICAgICAgdW50aWw6ICtJbmZpbml0eSxcbiAgICAgICAgICAgIG9mZnNldDogMSxcbiAgICAgICAgICAgIG5hbWU6ICdBbm5vIERvbWluaScsXG4gICAgICAgICAgICBuYXJyb3c6ICdBRCcsXG4gICAgICAgICAgICBhYmJyOiAnQUQnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzaW5jZTogJzAwMDAtMTItMzEnLFxuICAgICAgICAgICAgdW50aWw6IC1JbmZpbml0eSxcbiAgICAgICAgICAgIG9mZnNldDogMSxcbiAgICAgICAgICAgIG5hbWU6ICdCZWZvcmUgQ2hyaXN0JyxcbiAgICAgICAgICAgIG5hcnJvdzogJ0JDJyxcbiAgICAgICAgICAgIGFiYnI6ICdCQycsXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0odGh8c3R8bmR8cmQpLyxcbiAgICBvcmRpbmFsOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgIHZhciBiID0gbnVtYmVyICUgMTAsXG4gICAgICAgICAgICBvdXRwdXQgPVxuICAgICAgICAgICAgICAgIHRvSW50KChudW1iZXIgJSAxMDApIC8gMTApID09PSAxXG4gICAgICAgICAgICAgICAgICAgID8gJ3RoJ1xuICAgICAgICAgICAgICAgICAgICA6IGIgPT09IDFcbiAgICAgICAgICAgICAgICAgICAgICA/ICdzdCdcbiAgICAgICAgICAgICAgICAgICAgICA6IGIgPT09IDJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ25kJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiBiID09PSAzXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gJ3JkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICd0aCc7XG4gICAgICAgIHJldHVybiBudW1iZXIgKyBvdXRwdXQ7XG4gICAgfSxcbn0pO1xuXG4vLyBTaWRlIGVmZmVjdCBpbXBvcnRzXG5cbmhvb2tzLmxhbmcgPSBkZXByZWNhdGUoXG4gICAgJ21vbWVudC5sYW5nIGlzIGRlcHJlY2F0ZWQuIFVzZSBtb21lbnQubG9jYWxlIGluc3RlYWQuJyxcbiAgICBnZXRTZXRHbG9iYWxMb2NhbGVcbik7XG5ob29rcy5sYW5nRGF0YSA9IGRlcHJlY2F0ZShcbiAgICAnbW9tZW50LmxhbmdEYXRhIGlzIGRlcHJlY2F0ZWQuIFVzZSBtb21lbnQubG9jYWxlRGF0YSBpbnN0ZWFkLicsXG4gICAgZ2V0TG9jYWxlXG4pO1xuXG52YXIgbWF0aEFicyA9IE1hdGguYWJzO1xuXG5mdW5jdGlvbiBhYnMoKSB7XG4gICAgdmFyIGRhdGEgPSB0aGlzLl9kYXRhO1xuXG4gICAgdGhpcy5fbWlsbGlzZWNvbmRzID0gbWF0aEFicyh0aGlzLl9taWxsaXNlY29uZHMpO1xuICAgIHRoaXMuX2RheXMgPSBtYXRoQWJzKHRoaXMuX2RheXMpO1xuICAgIHRoaXMuX21vbnRocyA9IG1hdGhBYnModGhpcy5fbW9udGhzKTtcblxuICAgIGRhdGEubWlsbGlzZWNvbmRzID0gbWF0aEFicyhkYXRhLm1pbGxpc2Vjb25kcyk7XG4gICAgZGF0YS5zZWNvbmRzID0gbWF0aEFicyhkYXRhLnNlY29uZHMpO1xuICAgIGRhdGEubWludXRlcyA9IG1hdGhBYnMoZGF0YS5taW51dGVzKTtcbiAgICBkYXRhLmhvdXJzID0gbWF0aEFicyhkYXRhLmhvdXJzKTtcbiAgICBkYXRhLm1vbnRocyA9IG1hdGhBYnMoZGF0YS5tb250aHMpO1xuICAgIGRhdGEueWVhcnMgPSBtYXRoQWJzKGRhdGEueWVhcnMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGFkZFN1YnRyYWN0JDEoZHVyYXRpb24sIGlucHV0LCB2YWx1ZSwgZGlyZWN0aW9uKSB7XG4gICAgdmFyIG90aGVyID0gY3JlYXRlRHVyYXRpb24oaW5wdXQsIHZhbHVlKTtcblxuICAgIGR1cmF0aW9uLl9taWxsaXNlY29uZHMgKz0gZGlyZWN0aW9uICogb3RoZXIuX21pbGxpc2Vjb25kcztcbiAgICBkdXJhdGlvbi5fZGF5cyArPSBkaXJlY3Rpb24gKiBvdGhlci5fZGF5cztcbiAgICBkdXJhdGlvbi5fbW9udGhzICs9IGRpcmVjdGlvbiAqIG90aGVyLl9tb250aHM7XG5cbiAgICByZXR1cm4gZHVyYXRpb24uX2J1YmJsZSgpO1xufVxuXG4vLyBzdXBwb3J0cyBvbmx5IDIuMC1zdHlsZSBhZGQoMSwgJ3MnKSBvciBhZGQoZHVyYXRpb24pXG5mdW5jdGlvbiBhZGQkMShpbnB1dCwgdmFsdWUpIHtcbiAgICByZXR1cm4gYWRkU3VidHJhY3QkMSh0aGlzLCBpbnB1dCwgdmFsdWUsIDEpO1xufVxuXG4vLyBzdXBwb3J0cyBvbmx5IDIuMC1zdHlsZSBzdWJ0cmFjdCgxLCAncycpIG9yIHN1YnRyYWN0KGR1cmF0aW9uKVxuZnVuY3Rpb24gc3VidHJhY3QkMShpbnB1dCwgdmFsdWUpIHtcbiAgICByZXR1cm4gYWRkU3VidHJhY3QkMSh0aGlzLCBpbnB1dCwgdmFsdWUsIC0xKTtcbn1cblxuZnVuY3Rpb24gYWJzQ2VpbChudW1iZXIpIHtcbiAgICBpZiAobnVtYmVyIDwgMCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihudW1iZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwobnVtYmVyKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGJ1YmJsZSgpIHtcbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gdGhpcy5fbWlsbGlzZWNvbmRzLFxuICAgICAgICBkYXlzID0gdGhpcy5fZGF5cyxcbiAgICAgICAgbW9udGhzID0gdGhpcy5fbW9udGhzLFxuICAgICAgICBkYXRhID0gdGhpcy5fZGF0YSxcbiAgICAgICAgc2Vjb25kcyxcbiAgICAgICAgbWludXRlcyxcbiAgICAgICAgaG91cnMsXG4gICAgICAgIHllYXJzLFxuICAgICAgICBtb250aHNGcm9tRGF5cztcblxuICAgIC8vIGlmIHdlIGhhdmUgYSBtaXggb2YgcG9zaXRpdmUgYW5kIG5lZ2F0aXZlIHZhbHVlcywgYnViYmxlIGRvd24gZmlyc3RcbiAgICAvLyBjaGVjazogaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvaXNzdWVzLzIxNjZcbiAgICBpZiAoXG4gICAgICAgICEoXG4gICAgICAgICAgICAobWlsbGlzZWNvbmRzID49IDAgJiYgZGF5cyA+PSAwICYmIG1vbnRocyA+PSAwKSB8fFxuICAgICAgICAgICAgKG1pbGxpc2Vjb25kcyA8PSAwICYmIGRheXMgPD0gMCAmJiBtb250aHMgPD0gMClcbiAgICAgICAgKVxuICAgICkge1xuICAgICAgICBtaWxsaXNlY29uZHMgKz0gYWJzQ2VpbChtb250aHNUb0RheXMobW9udGhzKSArIGRheXMpICogODY0ZTU7XG4gICAgICAgIGRheXMgPSAwO1xuICAgICAgICBtb250aHMgPSAwO1xuICAgIH1cblxuICAgIC8vIFRoZSBmb2xsb3dpbmcgY29kZSBidWJibGVzIHVwIHZhbHVlcywgc2VlIHRoZSB0ZXN0cyBmb3JcbiAgICAvLyBleGFtcGxlcyBvZiB3aGF0IHRoYXQgbWVhbnMuXG4gICAgZGF0YS5taWxsaXNlY29uZHMgPSBtaWxsaXNlY29uZHMgJSAxMDAwO1xuXG4gICAgc2Vjb25kcyA9IGFic0Zsb29yKG1pbGxpc2Vjb25kcyAvIDEwMDApO1xuICAgIGRhdGEuc2Vjb25kcyA9IHNlY29uZHMgJSA2MDtcblxuICAgIG1pbnV0ZXMgPSBhYnNGbG9vcihzZWNvbmRzIC8gNjApO1xuICAgIGRhdGEubWludXRlcyA9IG1pbnV0ZXMgJSA2MDtcblxuICAgIGhvdXJzID0gYWJzRmxvb3IobWludXRlcyAvIDYwKTtcbiAgICBkYXRhLmhvdXJzID0gaG91cnMgJSAyNDtcblxuICAgIGRheXMgKz0gYWJzRmxvb3IoaG91cnMgLyAyNCk7XG5cbiAgICAvLyBjb252ZXJ0IGRheXMgdG8gbW9udGhzXG4gICAgbW9udGhzRnJvbURheXMgPSBhYnNGbG9vcihkYXlzVG9Nb250aHMoZGF5cykpO1xuICAgIG1vbnRocyArPSBtb250aHNGcm9tRGF5cztcbiAgICBkYXlzIC09IGFic0NlaWwobW9udGhzVG9EYXlzKG1vbnRoc0Zyb21EYXlzKSk7XG5cbiAgICAvLyAxMiBtb250aHMgLT4gMSB5ZWFyXG4gICAgeWVhcnMgPSBhYnNGbG9vcihtb250aHMgLyAxMik7XG4gICAgbW9udGhzICU9IDEyO1xuXG4gICAgZGF0YS5kYXlzID0gZGF5cztcbiAgICBkYXRhLm1vbnRocyA9IG1vbnRocztcbiAgICBkYXRhLnllYXJzID0geWVhcnM7XG5cbiAgICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gZGF5c1RvTW9udGhzKGRheXMpIHtcbiAgICAvLyA0MDAgeWVhcnMgaGF2ZSAxNDYwOTcgZGF5cyAodGFraW5nIGludG8gYWNjb3VudCBsZWFwIHllYXIgcnVsZXMpXG4gICAgLy8gNDAwIHllYXJzIGhhdmUgMTIgbW9udGhzID09PSA0ODAwXG4gICAgcmV0dXJuIChkYXlzICogNDgwMCkgLyAxNDYwOTc7XG59XG5cbmZ1bmN0aW9uIG1vbnRoc1RvRGF5cyhtb250aHMpIHtcbiAgICAvLyB0aGUgcmV2ZXJzZSBvZiBkYXlzVG9Nb250aHNcbiAgICByZXR1cm4gKG1vbnRocyAqIDE0NjA5NykgLyA0ODAwO1xufVxuXG5mdW5jdGlvbiBhcyh1bml0cykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG4gICAgdmFyIGRheXMsXG4gICAgICAgIG1vbnRocyxcbiAgICAgICAgbWlsbGlzZWNvbmRzID0gdGhpcy5fbWlsbGlzZWNvbmRzO1xuXG4gICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cyk7XG5cbiAgICBpZiAodW5pdHMgPT09ICdtb250aCcgfHwgdW5pdHMgPT09ICdxdWFydGVyJyB8fCB1bml0cyA9PT0gJ3llYXInKSB7XG4gICAgICAgIGRheXMgPSB0aGlzLl9kYXlzICsgbWlsbGlzZWNvbmRzIC8gODY0ZTU7XG4gICAgICAgIG1vbnRocyA9IHRoaXMuX21vbnRocyArIGRheXNUb01vbnRocyhkYXlzKTtcbiAgICAgICAgc3dpdGNoICh1bml0cykge1xuICAgICAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgICAgICAgIHJldHVybiBtb250aHM7XG4gICAgICAgICAgICBjYXNlICdxdWFydGVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9udGhzIC8gMztcbiAgICAgICAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICAgICAgICAgIHJldHVybiBtb250aHMgLyAxMjtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGhhbmRsZSBtaWxsaXNlY29uZHMgc2VwYXJhdGVseSBiZWNhdXNlIG9mIGZsb2F0aW5nIHBvaW50IG1hdGggZXJyb3JzIChpc3N1ZSAjMTg2NylcbiAgICAgICAgZGF5cyA9IHRoaXMuX2RheXMgKyBNYXRoLnJvdW5kKG1vbnRoc1RvRGF5cyh0aGlzLl9tb250aHMpKTtcbiAgICAgICAgc3dpdGNoICh1bml0cykge1xuICAgICAgICAgICAgY2FzZSAnd2Vlayc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRheXMgLyA3ICsgbWlsbGlzZWNvbmRzIC8gNjA0OGU1O1xuICAgICAgICAgICAgY2FzZSAnZGF5JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF5cyArIG1pbGxpc2Vjb25kcyAvIDg2NGU1O1xuICAgICAgICAgICAgY2FzZSAnaG91cic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRheXMgKiAyNCArIG1pbGxpc2Vjb25kcyAvIDM2ZTU7XG4gICAgICAgICAgICBjYXNlICdtaW51dGUnOlxuICAgICAgICAgICAgICAgIHJldHVybiBkYXlzICogMTQ0MCArIG1pbGxpc2Vjb25kcyAvIDZlNDtcbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRheXMgKiA4NjQwMCArIG1pbGxpc2Vjb25kcyAvIDEwMDA7XG4gICAgICAgICAgICAvLyBNYXRoLmZsb29yIHByZXZlbnRzIGZsb2F0aW5nIHBvaW50IG1hdGggZXJyb3JzIGhlcmVcbiAgICAgICAgICAgIGNhc2UgJ21pbGxpc2Vjb25kJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihkYXlzICogODY0ZTUpICsgbWlsbGlzZWNvbmRzO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gdW5pdCAnICsgdW5pdHMpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBtYWtlQXMoYWxpYXMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hcyhhbGlhcyk7XG4gICAgfTtcbn1cblxudmFyIGFzTWlsbGlzZWNvbmRzID0gbWFrZUFzKCdtcycpLFxuICAgIGFzU2Vjb25kcyA9IG1ha2VBcygncycpLFxuICAgIGFzTWludXRlcyA9IG1ha2VBcygnbScpLFxuICAgIGFzSG91cnMgPSBtYWtlQXMoJ2gnKSxcbiAgICBhc0RheXMgPSBtYWtlQXMoJ2QnKSxcbiAgICBhc1dlZWtzID0gbWFrZUFzKCd3JyksXG4gICAgYXNNb250aHMgPSBtYWtlQXMoJ00nKSxcbiAgICBhc1F1YXJ0ZXJzID0gbWFrZUFzKCdRJyksXG4gICAgYXNZZWFycyA9IG1ha2VBcygneScpLFxuICAgIHZhbHVlT2YkMSA9IGFzTWlsbGlzZWNvbmRzO1xuXG5mdW5jdGlvbiBjbG9uZSQxKCkge1xuICAgIHJldHVybiBjcmVhdGVEdXJhdGlvbih0aGlzKTtcbn1cblxuZnVuY3Rpb24gZ2V0JDIodW5pdHMpIHtcbiAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkKCkgPyB0aGlzW3VuaXRzICsgJ3MnXSgpIDogTmFOO1xufVxuXG5mdW5jdGlvbiBtYWtlR2V0dGVyKG5hbWUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkKCkgPyB0aGlzLl9kYXRhW25hbWVdIDogTmFOO1xuICAgIH07XG59XG5cbnZhciBtaWxsaXNlY29uZHMgPSBtYWtlR2V0dGVyKCdtaWxsaXNlY29uZHMnKSxcbiAgICBzZWNvbmRzID0gbWFrZUdldHRlcignc2Vjb25kcycpLFxuICAgIG1pbnV0ZXMgPSBtYWtlR2V0dGVyKCdtaW51dGVzJyksXG4gICAgaG91cnMgPSBtYWtlR2V0dGVyKCdob3VycycpLFxuICAgIGRheXMgPSBtYWtlR2V0dGVyKCdkYXlzJyksXG4gICAgbW9udGhzID0gbWFrZUdldHRlcignbW9udGhzJyksXG4gICAgeWVhcnMgPSBtYWtlR2V0dGVyKCd5ZWFycycpO1xuXG5mdW5jdGlvbiB3ZWVrcygpIHtcbiAgICByZXR1cm4gYWJzRmxvb3IodGhpcy5kYXlzKCkgLyA3KTtcbn1cblxudmFyIHJvdW5kID0gTWF0aC5yb3VuZCxcbiAgICB0aHJlc2hvbGRzID0ge1xuICAgICAgICBzczogNDQsIC8vIGEgZmV3IHNlY29uZHMgdG8gc2Vjb25kc1xuICAgICAgICBzOiA0NSwgLy8gc2Vjb25kcyB0byBtaW51dGVcbiAgICAgICAgbTogNDUsIC8vIG1pbnV0ZXMgdG8gaG91clxuICAgICAgICBoOiAyMiwgLy8gaG91cnMgdG8gZGF5XG4gICAgICAgIGQ6IDI2LCAvLyBkYXlzIHRvIG1vbnRoL3dlZWtcbiAgICAgICAgdzogbnVsbCwgLy8gd2Vla3MgdG8gbW9udGhcbiAgICAgICAgTTogMTEsIC8vIG1vbnRocyB0byB5ZWFyXG4gICAgfTtcblxuLy8gaGVscGVyIGZ1bmN0aW9uIGZvciBtb21lbnQuZm4uZnJvbSwgbW9tZW50LmZuLmZyb21Ob3csIGFuZCBtb21lbnQuZHVyYXRpb24uZm4uaHVtYW5pemVcbmZ1bmN0aW9uIHN1YnN0aXR1dGVUaW1lQWdvKHN0cmluZywgbnVtYmVyLCB3aXRob3V0U3VmZml4LCBpc0Z1dHVyZSwgbG9jYWxlKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5yZWxhdGl2ZVRpbWUobnVtYmVyIHx8IDEsICEhd2l0aG91dFN1ZmZpeCwgc3RyaW5nLCBpc0Z1dHVyZSk7XG59XG5cbmZ1bmN0aW9uIHJlbGF0aXZlVGltZSQxKHBvc05lZ0R1cmF0aW9uLCB3aXRob3V0U3VmZml4LCB0aHJlc2hvbGRzLCBsb2NhbGUpIHtcbiAgICB2YXIgZHVyYXRpb24gPSBjcmVhdGVEdXJhdGlvbihwb3NOZWdEdXJhdGlvbikuYWJzKCksXG4gICAgICAgIHNlY29uZHMgPSByb3VuZChkdXJhdGlvbi5hcygncycpKSxcbiAgICAgICAgbWludXRlcyA9IHJvdW5kKGR1cmF0aW9uLmFzKCdtJykpLFxuICAgICAgICBob3VycyA9IHJvdW5kKGR1cmF0aW9uLmFzKCdoJykpLFxuICAgICAgICBkYXlzID0gcm91bmQoZHVyYXRpb24uYXMoJ2QnKSksXG4gICAgICAgIG1vbnRocyA9IHJvdW5kKGR1cmF0aW9uLmFzKCdNJykpLFxuICAgICAgICB3ZWVrcyA9IHJvdW5kKGR1cmF0aW9uLmFzKCd3JykpLFxuICAgICAgICB5ZWFycyA9IHJvdW5kKGR1cmF0aW9uLmFzKCd5JykpLFxuICAgICAgICBhID1cbiAgICAgICAgICAgIChzZWNvbmRzIDw9IHRocmVzaG9sZHMuc3MgJiYgWydzJywgc2Vjb25kc10pIHx8XG4gICAgICAgICAgICAoc2Vjb25kcyA8IHRocmVzaG9sZHMucyAmJiBbJ3NzJywgc2Vjb25kc10pIHx8XG4gICAgICAgICAgICAobWludXRlcyA8PSAxICYmIFsnbSddKSB8fFxuICAgICAgICAgICAgKG1pbnV0ZXMgPCB0aHJlc2hvbGRzLm0gJiYgWydtbScsIG1pbnV0ZXNdKSB8fFxuICAgICAgICAgICAgKGhvdXJzIDw9IDEgJiYgWydoJ10pIHx8XG4gICAgICAgICAgICAoaG91cnMgPCB0aHJlc2hvbGRzLmggJiYgWydoaCcsIGhvdXJzXSkgfHxcbiAgICAgICAgICAgIChkYXlzIDw9IDEgJiYgWydkJ10pIHx8XG4gICAgICAgICAgICAoZGF5cyA8IHRocmVzaG9sZHMuZCAmJiBbJ2RkJywgZGF5c10pO1xuXG4gICAgaWYgKHRocmVzaG9sZHMudyAhPSBudWxsKSB7XG4gICAgICAgIGEgPVxuICAgICAgICAgICAgYSB8fFxuICAgICAgICAgICAgKHdlZWtzIDw9IDEgJiYgWyd3J10pIHx8XG4gICAgICAgICAgICAod2Vla3MgPCB0aHJlc2hvbGRzLncgJiYgWyd3dycsIHdlZWtzXSk7XG4gICAgfVxuICAgIGEgPSBhIHx8XG4gICAgICAgIChtb250aHMgPD0gMSAmJiBbJ00nXSkgfHxcbiAgICAgICAgKG1vbnRocyA8IHRocmVzaG9sZHMuTSAmJiBbJ01NJywgbW9udGhzXSkgfHxcbiAgICAgICAgKHllYXJzIDw9IDEgJiYgWyd5J10pIHx8IFsneXknLCB5ZWFyc107XG5cbiAgICBhWzJdID0gd2l0aG91dFN1ZmZpeDtcbiAgICBhWzNdID0gK3Bvc05lZ0R1cmF0aW9uID4gMDtcbiAgICBhWzRdID0gbG9jYWxlO1xuICAgIHJldHVybiBzdWJzdGl0dXRlVGltZUFnby5hcHBseShudWxsLCBhKTtcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBhbGxvd3MgeW91IHRvIHNldCB0aGUgcm91bmRpbmcgZnVuY3Rpb24gZm9yIHJlbGF0aXZlIHRpbWUgc3RyaW5nc1xuZnVuY3Rpb24gZ2V0U2V0UmVsYXRpdmVUaW1lUm91bmRpbmcocm91bmRpbmdGdW5jdGlvbikge1xuICAgIGlmIChyb3VuZGluZ0Z1bmN0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHJvdW5kO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHJvdW5kaW5nRnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcm91bmQgPSByb3VuZGluZ0Z1bmN0aW9uO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGFsbG93cyB5b3UgdG8gc2V0IGEgdGhyZXNob2xkIGZvciByZWxhdGl2ZSB0aW1lIHN0cmluZ3NcbmZ1bmN0aW9uIGdldFNldFJlbGF0aXZlVGltZVRocmVzaG9sZCh0aHJlc2hvbGQsIGxpbWl0KSB7XG4gICAgaWYgKHRocmVzaG9sZHNbdGhyZXNob2xkXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGxpbWl0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRocmVzaG9sZHNbdGhyZXNob2xkXTtcbiAgICB9XG4gICAgdGhyZXNob2xkc1t0aHJlc2hvbGRdID0gbGltaXQ7XG4gICAgaWYgKHRocmVzaG9sZCA9PT0gJ3MnKSB7XG4gICAgICAgIHRocmVzaG9sZHMuc3MgPSBsaW1pdCAtIDE7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBodW1hbml6ZShhcmdXaXRoU3VmZml4LCBhcmdUaHJlc2hvbGRzKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkuaW52YWxpZERhdGUoKTtcbiAgICB9XG5cbiAgICB2YXIgd2l0aFN1ZmZpeCA9IGZhbHNlLFxuICAgICAgICB0aCA9IHRocmVzaG9sZHMsXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgb3V0cHV0O1xuXG4gICAgaWYgKHR5cGVvZiBhcmdXaXRoU3VmZml4ID09PSAnb2JqZWN0Jykge1xuICAgICAgICBhcmdUaHJlc2hvbGRzID0gYXJnV2l0aFN1ZmZpeDtcbiAgICAgICAgYXJnV2l0aFN1ZmZpeCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGFyZ1dpdGhTdWZmaXggPT09ICdib29sZWFuJykge1xuICAgICAgICB3aXRoU3VmZml4ID0gYXJnV2l0aFN1ZmZpeDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBhcmdUaHJlc2hvbGRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICB0aCA9IE9iamVjdC5hc3NpZ24oe30sIHRocmVzaG9sZHMsIGFyZ1RocmVzaG9sZHMpO1xuICAgICAgICBpZiAoYXJnVGhyZXNob2xkcy5zICE9IG51bGwgJiYgYXJnVGhyZXNob2xkcy5zcyA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aC5zcyA9IGFyZ1RocmVzaG9sZHMucyAtIDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2NhbGUgPSB0aGlzLmxvY2FsZURhdGEoKTtcbiAgICBvdXRwdXQgPSByZWxhdGl2ZVRpbWUkMSh0aGlzLCAhd2l0aFN1ZmZpeCwgdGgsIGxvY2FsZSk7XG5cbiAgICBpZiAod2l0aFN1ZmZpeCkge1xuICAgICAgICBvdXRwdXQgPSBsb2NhbGUucGFzdEZ1dHVyZSgrdGhpcywgb3V0cHV0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbG9jYWxlLnBvc3Rmb3JtYXQob3V0cHV0KTtcbn1cblxudmFyIGFicyQxID0gTWF0aC5hYnM7XG5cbmZ1bmN0aW9uIHNpZ24oeCkge1xuICAgIHJldHVybiAoeCA+IDApIC0gKHggPCAwKSB8fCAreDtcbn1cblxuZnVuY3Rpb24gdG9JU09TdHJpbmckMSgpIHtcbiAgICAvLyBmb3IgSVNPIHN0cmluZ3Mgd2UgZG8gbm90IHVzZSB0aGUgbm9ybWFsIGJ1YmJsaW5nIHJ1bGVzOlxuICAgIC8vICAqIG1pbGxpc2Vjb25kcyBidWJibGUgdXAgdW50aWwgdGhleSBiZWNvbWUgaG91cnNcbiAgICAvLyAgKiBkYXlzIGRvIG5vdCBidWJibGUgYXQgYWxsXG4gICAgLy8gICogbW9udGhzIGJ1YmJsZSB1cCB1bnRpbCB0aGV5IGJlY29tZSB5ZWFyc1xuICAgIC8vIFRoaXMgaXMgYmVjYXVzZSB0aGVyZSBpcyBubyBjb250ZXh0LWZyZWUgY29udmVyc2lvbiBiZXR3ZWVuIGhvdXJzIGFuZCBkYXlzXG4gICAgLy8gKHRoaW5rIG9mIGNsb2NrIGNoYW5nZXMpXG4gICAgLy8gYW5kIGFsc28gbm90IGJldHdlZW4gZGF5cyBhbmQgbW9udGhzICgyOC0zMSBkYXlzIHBlciBtb250aClcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5pbnZhbGlkRGF0ZSgpO1xuICAgIH1cblxuICAgIHZhciBzZWNvbmRzID0gYWJzJDEodGhpcy5fbWlsbGlzZWNvbmRzKSAvIDEwMDAsXG4gICAgICAgIGRheXMgPSBhYnMkMSh0aGlzLl9kYXlzKSxcbiAgICAgICAgbW9udGhzID0gYWJzJDEodGhpcy5fbW9udGhzKSxcbiAgICAgICAgbWludXRlcyxcbiAgICAgICAgaG91cnMsXG4gICAgICAgIHllYXJzLFxuICAgICAgICBzLFxuICAgICAgICB0b3RhbCA9IHRoaXMuYXNTZWNvbmRzKCksXG4gICAgICAgIHRvdGFsU2lnbixcbiAgICAgICAgeW1TaWduLFxuICAgICAgICBkYXlzU2lnbixcbiAgICAgICAgaG1zU2lnbjtcblxuICAgIGlmICghdG90YWwpIHtcbiAgICAgICAgLy8gdGhpcyBpcyB0aGUgc2FtZSBhcyBDIydzIChOb2RhKSBhbmQgcHl0aG9uIChpc29kYXRlKS4uLlxuICAgICAgICAvLyBidXQgbm90IG90aGVyIEpTIChnb29nLmRhdGUpXG4gICAgICAgIHJldHVybiAnUDBEJztcbiAgICB9XG5cbiAgICAvLyAzNjAwIHNlY29uZHMgLT4gNjAgbWludXRlcyAtPiAxIGhvdXJcbiAgICBtaW51dGVzID0gYWJzRmxvb3Ioc2Vjb25kcyAvIDYwKTtcbiAgICBob3VycyA9IGFic0Zsb29yKG1pbnV0ZXMgLyA2MCk7XG4gICAgc2Vjb25kcyAlPSA2MDtcbiAgICBtaW51dGVzICU9IDYwO1xuXG4gICAgLy8gMTIgbW9udGhzIC0+IDEgeWVhclxuICAgIHllYXJzID0gYWJzRmxvb3IobW9udGhzIC8gMTIpO1xuICAgIG1vbnRocyAlPSAxMjtcblxuICAgIC8vIGluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9kb3JkaWxsZS9tb21lbnQtaXNvZHVyYXRpb24vYmxvYi9tYXN0ZXIvbW9tZW50Lmlzb2R1cmF0aW9uLmpzXG4gICAgcyA9IHNlY29uZHMgPyBzZWNvbmRzLnRvRml4ZWQoMykucmVwbGFjZSgvXFwuPzArJC8sICcnKSA6ICcnO1xuXG4gICAgdG90YWxTaWduID0gdG90YWwgPCAwID8gJy0nIDogJyc7XG4gICAgeW1TaWduID0gc2lnbih0aGlzLl9tb250aHMpICE9PSBzaWduKHRvdGFsKSA/ICctJyA6ICcnO1xuICAgIGRheXNTaWduID0gc2lnbih0aGlzLl9kYXlzKSAhPT0gc2lnbih0b3RhbCkgPyAnLScgOiAnJztcbiAgICBobXNTaWduID0gc2lnbih0aGlzLl9taWxsaXNlY29uZHMpICE9PSBzaWduKHRvdGFsKSA/ICctJyA6ICcnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgdG90YWxTaWduICtcbiAgICAgICAgJ1AnICtcbiAgICAgICAgKHllYXJzID8geW1TaWduICsgeWVhcnMgKyAnWScgOiAnJykgK1xuICAgICAgICAobW9udGhzID8geW1TaWduICsgbW9udGhzICsgJ00nIDogJycpICtcbiAgICAgICAgKGRheXMgPyBkYXlzU2lnbiArIGRheXMgKyAnRCcgOiAnJykgK1xuICAgICAgICAoaG91cnMgfHwgbWludXRlcyB8fCBzZWNvbmRzID8gJ1QnIDogJycpICtcbiAgICAgICAgKGhvdXJzID8gaG1zU2lnbiArIGhvdXJzICsgJ0gnIDogJycpICtcbiAgICAgICAgKG1pbnV0ZXMgPyBobXNTaWduICsgbWludXRlcyArICdNJyA6ICcnKSArXG4gICAgICAgIChzZWNvbmRzID8gaG1zU2lnbiArIHMgKyAnUycgOiAnJylcbiAgICApO1xufVxuXG52YXIgcHJvdG8kMiA9IER1cmF0aW9uLnByb3RvdHlwZTtcblxucHJvdG8kMi5pc1ZhbGlkID0gaXNWYWxpZCQxO1xucHJvdG8kMi5hYnMgPSBhYnM7XG5wcm90byQyLmFkZCA9IGFkZCQxO1xucHJvdG8kMi5zdWJ0cmFjdCA9IHN1YnRyYWN0JDE7XG5wcm90byQyLmFzID0gYXM7XG5wcm90byQyLmFzTWlsbGlzZWNvbmRzID0gYXNNaWxsaXNlY29uZHM7XG5wcm90byQyLmFzU2Vjb25kcyA9IGFzU2Vjb25kcztcbnByb3RvJDIuYXNNaW51dGVzID0gYXNNaW51dGVzO1xucHJvdG8kMi5hc0hvdXJzID0gYXNIb3VycztcbnByb3RvJDIuYXNEYXlzID0gYXNEYXlzO1xucHJvdG8kMi5hc1dlZWtzID0gYXNXZWVrcztcbnByb3RvJDIuYXNNb250aHMgPSBhc01vbnRocztcbnByb3RvJDIuYXNRdWFydGVycyA9IGFzUXVhcnRlcnM7XG5wcm90byQyLmFzWWVhcnMgPSBhc1llYXJzO1xucHJvdG8kMi52YWx1ZU9mID0gdmFsdWVPZiQxO1xucHJvdG8kMi5fYnViYmxlID0gYnViYmxlO1xucHJvdG8kMi5jbG9uZSA9IGNsb25lJDE7XG5wcm90byQyLmdldCA9IGdldCQyO1xucHJvdG8kMi5taWxsaXNlY29uZHMgPSBtaWxsaXNlY29uZHM7XG5wcm90byQyLnNlY29uZHMgPSBzZWNvbmRzO1xucHJvdG8kMi5taW51dGVzID0gbWludXRlcztcbnByb3RvJDIuaG91cnMgPSBob3VycztcbnByb3RvJDIuZGF5cyA9IGRheXM7XG5wcm90byQyLndlZWtzID0gd2Vla3M7XG5wcm90byQyLm1vbnRocyA9IG1vbnRocztcbnByb3RvJDIueWVhcnMgPSB5ZWFycztcbnByb3RvJDIuaHVtYW5pemUgPSBodW1hbml6ZTtcbnByb3RvJDIudG9JU09TdHJpbmcgPSB0b0lTT1N0cmluZyQxO1xucHJvdG8kMi50b1N0cmluZyA9IHRvSVNPU3RyaW5nJDE7XG5wcm90byQyLnRvSlNPTiA9IHRvSVNPU3RyaW5nJDE7XG5wcm90byQyLmxvY2FsZSA9IGxvY2FsZTtcbnByb3RvJDIubG9jYWxlRGF0YSA9IGxvY2FsZURhdGE7XG5cbnByb3RvJDIudG9Jc29TdHJpbmcgPSBkZXByZWNhdGUoXG4gICAgJ3RvSXNvU3RyaW5nKCkgaXMgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSB0b0lTT1N0cmluZygpIGluc3RlYWQgKG5vdGljZSB0aGUgY2FwaXRhbHMpJyxcbiAgICB0b0lTT1N0cmluZyQxXG4pO1xucHJvdG8kMi5sYW5nID0gbGFuZztcblxuLy8gRk9STUFUVElOR1xuXG5hZGRGb3JtYXRUb2tlbignWCcsIDAsIDAsICd1bml4Jyk7XG5hZGRGb3JtYXRUb2tlbigneCcsIDAsIDAsICd2YWx1ZU9mJyk7XG5cbi8vIFBBUlNJTkdcblxuYWRkUmVnZXhUb2tlbigneCcsIG1hdGNoU2lnbmVkKTtcbmFkZFJlZ2V4VG9rZW4oJ1gnLCBtYXRjaFRpbWVzdGFtcCk7XG5hZGRQYXJzZVRva2VuKCdYJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgY29uZmlnLl9kID0gbmV3IERhdGUocGFyc2VGbG9hdChpbnB1dCkgKiAxMDAwKTtcbn0pO1xuYWRkUGFyc2VUb2tlbigneCcsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKHRvSW50KGlucHV0KSk7XG59KTtcblxuLy8hIG1vbWVudC5qc1xuXG5ob29rcy52ZXJzaW9uID0gJzIuMzAuMSc7XG5cbnNldEhvb2tDYWxsYmFjayhjcmVhdGVMb2NhbCk7XG5cbmhvb2tzLmZuID0gcHJvdG87XG5ob29rcy5taW4gPSBtaW47XG5ob29rcy5tYXggPSBtYXg7XG5ob29rcy5ub3cgPSBub3c7XG5ob29rcy51dGMgPSBjcmVhdGVVVEM7XG5ob29rcy51bml4ID0gY3JlYXRlVW5peDtcbmhvb2tzLm1vbnRocyA9IGxpc3RNb250aHM7XG5ob29rcy5pc0RhdGUgPSBpc0RhdGU7XG5ob29rcy5sb2NhbGUgPSBnZXRTZXRHbG9iYWxMb2NhbGU7XG5ob29rcy5pbnZhbGlkID0gY3JlYXRlSW52YWxpZDtcbmhvb2tzLmR1cmF0aW9uID0gY3JlYXRlRHVyYXRpb247XG5ob29rcy5pc01vbWVudCA9IGlzTW9tZW50O1xuaG9va3Mud2Vla2RheXMgPSBsaXN0V2Vla2RheXM7XG5ob29rcy5wYXJzZVpvbmUgPSBjcmVhdGVJblpvbmU7XG5ob29rcy5sb2NhbGVEYXRhID0gZ2V0TG9jYWxlO1xuaG9va3MuaXNEdXJhdGlvbiA9IGlzRHVyYXRpb247XG5ob29rcy5tb250aHNTaG9ydCA9IGxpc3RNb250aHNTaG9ydDtcbmhvb2tzLndlZWtkYXlzTWluID0gbGlzdFdlZWtkYXlzTWluO1xuaG9va3MuZGVmaW5lTG9jYWxlID0gZGVmaW5lTG9jYWxlO1xuaG9va3MudXBkYXRlTG9jYWxlID0gdXBkYXRlTG9jYWxlO1xuaG9va3MubG9jYWxlcyA9IGxpc3RMb2NhbGVzO1xuaG9va3Mud2Vla2RheXNTaG9ydCA9IGxpc3RXZWVrZGF5c1Nob3J0O1xuaG9va3Mubm9ybWFsaXplVW5pdHMgPSBub3JtYWxpemVVbml0cztcbmhvb2tzLnJlbGF0aXZlVGltZVJvdW5kaW5nID0gZ2V0U2V0UmVsYXRpdmVUaW1lUm91bmRpbmc7XG5ob29rcy5yZWxhdGl2ZVRpbWVUaHJlc2hvbGQgPSBnZXRTZXRSZWxhdGl2ZVRpbWVUaHJlc2hvbGQ7XG5ob29rcy5jYWxlbmRhckZvcm1hdCA9IGdldENhbGVuZGFyRm9ybWF0O1xuaG9va3MucHJvdG90eXBlID0gcHJvdG87XG5cbi8vIGN1cnJlbnRseSBIVE1MNSBpbnB1dCB0eXBlIG9ubHkgc3VwcG9ydHMgMjQtaG91ciBmb3JtYXRzXG5ob29rcy5IVE1MNV9GTVQgPSB7XG4gICAgREFURVRJTUVfTE9DQUw6ICdZWVlZLU1NLUREVEhIOm1tJywgLy8gPGlucHV0IHR5cGU9XCJkYXRldGltZS1sb2NhbFwiIC8+XG4gICAgREFURVRJTUVfTE9DQUxfU0VDT05EUzogJ1lZWVktTU0tRERUSEg6bW06c3MnLCAvLyA8aW5wdXQgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCIgc3RlcD1cIjFcIiAvPlxuICAgIERBVEVUSU1FX0xPQ0FMX01TOiAnWVlZWS1NTS1ERFRISDptbTpzcy5TU1MnLCAvLyA8aW5wdXQgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCIgc3RlcD1cIjAuMDAxXCIgLz5cbiAgICBEQVRFOiAnWVlZWS1NTS1ERCcsIC8vIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIC8+XG4gICAgVElNRTogJ0hIOm1tJywgLy8gPGlucHV0IHR5cGU9XCJ0aW1lXCIgLz5cbiAgICBUSU1FX1NFQ09ORFM6ICdISDptbTpzcycsIC8vIDxpbnB1dCB0eXBlPVwidGltZVwiIHN0ZXA9XCIxXCIgLz5cbiAgICBUSU1FX01TOiAnSEg6bW06c3MuU1NTJywgLy8gPGlucHV0IHR5cGU9XCJ0aW1lXCIgc3RlcD1cIjAuMDAxXCIgLz5cbiAgICBXRUVLOiAnR0dHRy1bV11XVycsIC8vIDxpbnB1dCB0eXBlPVwid2Vla1wiIC8+XG4gICAgTU9OVEg6ICdZWVlZLU1NJywgLy8gPGlucHV0IHR5cGU9XCJtb250aFwiIC8+XG59O1xuXG5leHBvcnQgZGVmYXVsdCBob29rcztcbiIsImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuLyoqXG4gKiBGb3JtYXQgZGF0ZSBmb3IgZGlzcGxheVxuICovXG5leHBvcnQgY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlU3RyaW5nKSA9PiB7XG4gIGlmICghZGF0ZVN0cmluZykgcmV0dXJuICdOL0EnO1xuXG4gIHRyeSB7XG4gICAgcmV0dXJuIG1vbWVudChkYXRlU3RyaW5nKS5mb3JtYXQoJ01NTSBERCwgWVlZWSBISDptbScpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBkYXRlU3RyaW5nO1xuICB9XG59O1xuXG4vKipcbiAqIEdldCBiYWRnZSB2YXJpYW50IGJhc2VkIG9uIGJsb2NrY2hhaW4gc3RhdHVzXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRCbG9ja2NoYWluU3RhdHVzVmFyaWFudCA9IChzdGF0dXMpID0+IHtcbiAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICBjYXNlICdSZWdpc3RlcmVkJzpcbiAgICBjYXNlICdMb2dnZWQgdG8gQmxvY2tjaGFpbic6XG4gICAgY2FzZSAnQ09NUExFVEVEX1dJVEhfRVZFTlQnOlxuICAgICAgcmV0dXJuICdzdWNjZXNzJztcbiAgICBjYXNlICdQZW5kaW5nJzpcbiAgICBjYXNlICdQcm9jZXNzaW5nJzpcbiAgICAgIHJldHVybiAnd2FybmluZyc7XG4gICAgY2FzZSAnRmFpbGVkJzpcbiAgICBjYXNlICdCbG9ja2NoYWluIEVycm9yJzpcbiAgICBjYXNlICdSZWdpc3RyYXRpb24gRmFpbGVkJzpcbiAgICAgIHJldHVybiAnZXJyb3InO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJ25ldXRyYWwnO1xuICB9XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlIHNlY3VyZSBoYXNoIGZvciBkb2N1bWVudFxuICovXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVEb2N1bWVudEhhc2ggPSBhc3luYyAoZmlsZUNvbnRlbnQpID0+IHtcbiAgY29uc3QgZW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigpO1xuICBjb25zdCBkYXRhID0gZW5jb2Rlci5lbmNvZGUoZmlsZUNvbnRlbnQpO1xuICBjb25zdCBoYXNoQnVmZmVyID0gYXdhaXQgY3J5cHRvLnN1YnRsZS5kaWdlc3QoJ1NIQS0yNTYnLCBkYXRhKTtcbiAgY29uc3QgaGFzaEFycmF5ID0gQXJyYXkuZnJvbShuZXcgVWludDhBcnJheShoYXNoQnVmZmVyKSk7XG4gIHJldHVybiBoYXNoQXJyYXkubWFwKGIgPT4gYi50b1N0cmluZygxNikucGFkU3RhcnQoMiwgJzAnKSkuam9pbignJyk7XG59O1xuXG4vKipcbiAqIFZhbGlkYXRlIGZpbGUgdHlwZVxuICovXG5leHBvcnQgY29uc3QgaXNWYWxpZEZpbGVUeXBlID0gKGZpbGUpID0+IHtcbiAgY29uc3QgYWxsb3dlZFR5cGVzID0gW1xuICAgICdhcHBsaWNhdGlvbi9wZGYnLFxuICAgICdhcHBsaWNhdGlvbi9tc3dvcmQnLFxuICAgICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQud29yZHByb2Nlc3NpbmdtbC5kb2N1bWVudCcsXG4gICAgJ3RleHQvcGxhaW4nLFxuICAgICdpbWFnZS9qcGVnJyxcbiAgICAnaW1hZ2UvcG5nJ1xuICBdO1xuXG4gIHJldHVybiBhbGxvd2VkVHlwZXMuaW5jbHVkZXMoZmlsZS50eXBlKTtcbn07XG5cbi8qKlxuICogRm9ybWF0IGZpbGUgc2l6ZSBmb3IgZGlzcGxheVxuICovXG5leHBvcnQgY29uc3QgZm9ybWF0RmlsZVNpemUgPSAoYnl0ZXMpID0+IHtcbiAgaWYgKGJ5dGVzID09PSAwKSByZXR1cm4gJzAgQnl0ZXMnO1xuXG4gIGNvbnN0IGsgPSAxMDI0O1xuICBjb25zdCBzaXplcyA9IFsnQnl0ZXMnLCAnS0InLCAnTUInLCAnR0InXTtcbiAgY29uc3QgaSA9IE1hdGguZmxvb3IoTWF0aC5sb2coYnl0ZXMpIC8gTWF0aC5sb2coaykpO1xuXG4gIHJldHVybiBwYXJzZUZsb2F0KChieXRlcyAvIE1hdGgucG93KGssIGkpKS50b0ZpeGVkKDIpKSArICcgJyArIHNpemVzW2ldO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0ZSByYW5kb20gc2Vzc2lvbiBJRFxuICovXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVTZXNzaW9uSWQgPSAoKSA9PiB7XG4gIHJldHVybiAnc2Vzc2lvbl8nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDkpICsgJ18nICsgRGF0ZS5ub3coKTtcbn07XG5cbi8qKlxuICogVmFsaWRhdGUgSHViU3BvdCBvYmplY3QgSURcbiAqL1xuZXhwb3J0IGNvbnN0IGlzVmFsaWRPYmplY3RJZCA9IChpZCkgPT4ge1xuICByZXR1cm4gaWQgJiYgdHlwZW9mIGlkID09PSAnc3RyaW5nJyAmJiAvXlxcZCskLy50ZXN0KGlkKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIEV0aGVyc2NhbiBVUkwgZm9yIHRyYW5zYWN0aW9uIGhhc2hcbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUV0aGVyc2NhblVybCA9ICh0eEhhc2gsIG5ldHdvcmsgPSAnc2Vwb2xpYScpID0+IHtcbiAgaWYgKCF0eEhhc2gpIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IGJhc2VVcmwgPSBuZXR3b3JrID09PSAnbWFpbm5ldCdcbiAgICA/ICdodHRwczovL2V0aGVyc2Nhbi5pby90eC8nXG4gICAgOiBgaHR0cHM6Ly8ke25ldHdvcmt9LmV0aGVyc2Nhbi5pby90eC9gO1xuXG4gIHJldHVybiBiYXNlVXJsICsgdHhIYXNoO1xufTtcblxuLyoqXG4gKiBEZWJvdW5jZSBmdW5jdGlvbiBmb3Igc2VhcmNoIGlucHV0c1xuICovXG5leHBvcnQgY29uc3QgZGVib3VuY2UgPSAoZnVuYywgZGVsYXkpID0+IHtcbiAgbGV0IHRpbWVvdXRJZDtcbiAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiBmdW5jLmFwcGx5KG51bGwsIGFyZ3MpLCBkZWxheSk7XG4gIH07XG59O1xuXG4vKipcbiAqIEV4dHJhY3QgbWV0YWRhdGEgZnJvbSBmaWxlXG4gKi9cbmV4cG9ydCBjb25zdCBleHRyYWN0RmlsZU1ldGFkYXRhID0gKGZpbGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBmaWxlLm5hbWUsXG4gICAgc2l6ZTogZmlsZS5zaXplLFxuICAgIHR5cGU6IGZpbGUudHlwZSxcbiAgICBsYXN0TW9kaWZpZWQ6IGZpbGUubGFzdE1vZGlmaWVkLFxuICAgIGxhc3RNb2RpZmllZERhdGU6IGZpbGUubGFzdE1vZGlmaWVkRGF0ZVxuICB9O1xufTtcblxuLyoqXG4gKiBDcmVhdGUgZG93bmxvYWQgbGluayBmb3IgZmlsZVxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlRG93bmxvYWRMaW5rID0gKGJsb2IsIGZpbGVuYW1lKSA9PiB7XG4gIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGxpbmsuaHJlZiA9IHVybDtcbiAgbGluay5kb3dubG9hZCA9IGZpbGVuYW1lO1xuICBsaW5rLmNsaWNrKCk7XG4gIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbn07XG5cbi8qKlxuICogUGFyc2UgZXJyb3IgbWVzc2FnZSBmcm9tIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCBjb25zdCBwYXJzZUVycm9yTWVzc2FnZSA9IChlcnJvcikgPT4ge1xuICBpZiAodHlwZW9mIGVycm9yID09PSAnc3RyaW5nJykgcmV0dXJuIGVycm9yO1xuICBpZiAoZXJyb3IubWVzc2FnZSkgcmV0dXJuIGVycm9yLm1lc3NhZ2U7XG4gIGlmIChlcnJvci5yZXNwb25zZT8uZGF0YT8ubWVzc2FnZSkgcmV0dXJuIGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZTtcbiAgaWYgKGVycm9yLnJlc3BvbnNlPy5zdGF0dXNUZXh0KSByZXR1cm4gZXJyb3IucmVzcG9uc2Uuc3RhdHVzVGV4dDtcbiAgcmV0dXJuICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkJztcbn07IiwiLy8gQWNjZXNzU2hpZWxkIEFQSSBTZXJ2aWNlIC0gRGlyZWN0IEFQSSBpbnRlZ3JhdGlvbiB1c2luZyBodWJzcG90LmZldGNoXG4vLyBIdWJTcG90IGF1dG9tYXRpY2FsbHkgc2lnbnMgcmVxdWVzdHMgYW5kIGluY2x1ZGVzIG1ldGFkYXRhXG5jb25zdCBBUElfQkFTRV9VUkwgPSAnaHR0cHM6Ly8wNTE4OTJlNTg5MjYubmdyb2stZnJlZS5hcHAnO1xuXG5jbGFzcyBBY2Nlc3NTaGllbGRBUEkge1xuICBjb25zdHJ1Y3RvcihodWJzcG90RmV0Y2ggPSBudWxsLCBjb250ZXh0ID0gbnVsbCkge1xuICAgIHRoaXMuYmFzZVVSTCA9IEFQSV9CQVNFX1VSTDtcbiAgICB0aGlzLmZldGNoID0gaHVic3BvdEZldGNoOyAvLyBVc2UgSHViU3BvdCdzIGZldGNoIG1ldGhvZFxuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7IC8vIFN0b3JlIGNvbnRleHQgZm9yIHBvcnRhbC91c2VyIGluZm9cbiAgICBjb25zb2xlLmxvZygn8J+UpyBBY2Nlc3NTaGllbGRBUEkgaW5pdGlhbGl6ZWQgd2l0aCBiYXNlVVJMOicsIHRoaXMuYmFzZVVSTCk7XG4gICAgY29uc29sZS5sb2coJ/CfjJAgRmV0Y2ggZnVuY3Rpb24gdHlwZTonLCB0eXBlb2YgaHVic3BvdEZldGNoKTtcbiAgICBjb25zb2xlLmxvZygn8J+RpCBDb250ZXh0IGF2YWlsYWJsZTonLCAhIWNvbnRleHQpO1xuICB9XG5cbiAgLy8gU2V0IHRoZSBodWJzcG90IGZldGNoIG1ldGhvZFxuICBzZXRGZXRjaChodWJzcG90RmV0Y2gpIHtcbiAgICB0aGlzLmZldGNoID0gaHVic3BvdEZldGNoO1xuICB9XG5cblxuICAvLyBHZXQgZG9jdW1lbnRzIGZvciBhIEh1YlNwb3QgcmVjb3JkIChtdWx0aS10ZW5hbnQpXG4gIGFzeW5jIGdldERvY3VtZW50cyhvYmplY3RUeXBlLCBvYmplY3RJZCkge1xuICAgIGNvbnNvbGUubG9nKCfwn5OEIEFQSTogZ2V0RG9jdW1lbnRzIGNhbGxlZCcsIHsgb2JqZWN0VHlwZSwgb2JqZWN0SWQgfSk7XG5cbiAgICBpZiAoIXRoaXMuZmV0Y2gpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+KdjCBBUEk6IEh1YlNwb3QgZmV0Y2ggbm90IGluaXRpYWxpemVkJyk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0h1YlNwb3QgZmV0Y2ggbm90IGluaXRpYWxpemVkJyk7XG4gICAgfVxuXG4gICAgY29uc3QgcG9ydGFsSWQgPSB0aGlzLmNvbnRleHQ/LnBvcnRhbD8uaWQ7XG4gICAgY29uc3QgdGVhbUlkID0gJ2RlZmF1bHQnOyAvLyBGb3Igbm93LCB1c2luZyBkZWZhdWx0IHRlYW1cblxuICAgIGlmICghcG9ydGFsSWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUG9ydGFsIElEIG5vdCBhdmFpbGFibGUnKTtcbiAgICB9XG5cbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmJhc2VVUkx9L2FwaS9kb2N1bWVudHMvJHt0ZWFtSWR9LyR7cG9ydGFsSWR9LyR7b2JqZWN0VHlwZX0vJHtvYmplY3RJZH1gO1xuICAgIGNvbnNvbGUubG9nKCfwn5OEIEFQSTogTWFraW5nIHJlcXVlc3QgdG86JywgdXJsKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuZmV0Y2godXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICAgIH0pO1xuXG4gICAgICBjb25zb2xlLmxvZygn8J+ThCBBUEk6IFJlc3BvbnNlIHN0YXR1czonLCByZXNwb25zZS5zdGF0dXMpO1xuICAgICAgY29uc29sZS5sb2coJ/Cfk4QgQVBJOiBSZXNwb25zZSBvazonLCByZXNwb25zZS5vayk7XG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgY29uc3QgZXJyb3JUZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgICBjb25zb2xlLmVycm9yKCfinYwgQVBJOiBFcnJvciByZXNwb25zZTonLCBlcnJvclRleHQpO1xuICAgICAgICBsZXQgZXJyb3JEYXRhO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGVycm9yRGF0YSA9IEpTT04ucGFyc2UoZXJyb3JUZXh0KTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgZXJyb3JEYXRhID0geyBlcnJvcjogZXJyb3JUZXh0IH07XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yRGF0YS5lcnJvciB8fCAnRmFpbGVkIHRvIGZldGNoIGRvY3VtZW50cycpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc29sZS5sb2coJ/Cfk4QgQVBJOiBEb2N1bWVudHMgZGF0YTonLCBkYXRhKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfinYwgQVBJOiBnZXREb2N1bWVudHMgZXJyb3I6JywgZXJyb3IpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgLy8gR2V0IGFjY2VzcyBsb2dzIGZvciBhIHNwZWNpZmljIHJlY29yZFxuICBhc3luYyBnZXRBY2Nlc3NMb2dzKHJlY29yZElkID0gbnVsbCkge1xuICAgIGNvbnNvbGUubG9nKCfwn5OcIEFQSTogZ2V0QWNjZXNzTG9ncyBjYWxsZWQnLCB7XG4gICAgICByZWNvcmRJZCxcbiAgICAgIHJlY29yZElkVHlwZTogdHlwZW9mIHJlY29yZElkLFxuICAgICAgYmFzZVVSTDogdGhpcy5iYXNlVVJMLFxuICAgICAgY29udGV4dFBvcnRhbElkOiB0aGlzLmNvbnRleHQ/LnBvcnRhbD8uaWRcbiAgICB9KTtcblxuICAgIGlmICghdGhpcy5mZXRjaCkge1xuICAgICAgY29uc29sZS5lcnJvcign4p2MIEFQSTogSHViU3BvdCBmZXRjaCBub3QgaW5pdGlhbGl6ZWQgZm9yIGFjY2VzcyBsb2dzJyk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0h1YlNwb3QgZmV0Y2ggbm90IGluaXRpYWxpemVkJyk7XG4gICAgfVxuXG4gICAgY29uc3QgcG9ydGFsSWQgPSB0aGlzLmNvbnRleHQ/LnBvcnRhbD8uaWQ7XG4gICAgY29uc3QgdGVhbUlkID0gJ2RlZmF1bHQnOyAvLyBGb3Igbm93LCB1c2luZyBkZWZhdWx0IHRlYW1cblxuICAgIGlmICghcG9ydGFsSWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUG9ydGFsIElEIG5vdCBhdmFpbGFibGUnKTtcbiAgICB9XG5cbiAgICAvLyBCdWlsZCBVUkwgZm9yIGFjY2VzcyBsb2dzIChvcmlnaW5hbCBiYWNrZW5kIHBhdHRlcm4pXG4gICAgbGV0IHVybCA9IGAke3RoaXMuYmFzZVVSTH0vYXBpL2RvY3VtZW50cy8ke3RlYW1JZH0vJHtwb3J0YWxJZH0vYWNjZXNzLWxvZ3NgO1xuICAgIGlmIChyZWNvcmRJZCkge1xuICAgICAgdXJsICs9IGA/cmVjb3JkX2lkPSR7cmVjb3JkSWR9YDtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZygn8J+TnCBBUEk6IE1ha2luZyBhY2Nlc3MgbG9ncyByZXF1ZXN0IHRvOicsIHVybCk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmZldGNoKHVybCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICB9KTtcblxuICAgICAgY29uc29sZS5sb2coJ/Cfk5wgQVBJOiBBY2Nlc3MgbG9ncyByZXNwb25zZSBzdGF0dXM6JywgcmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgIGNvbnNvbGUubG9nKCfwn5OcIEFQSTogQWNjZXNzIGxvZ3MgcmVzcG9uc2Ugb2s6JywgcmVzcG9uc2Uub2spO1xuXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGNvbnN0IGVycm9yVGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgY29uc29sZS5lcnJvcign4p2MIEFQSTogQWNjZXNzIGxvZ3MgZXJyb3IgcmVzcG9uc2U6JywgZXJyb3JUZXh0KTtcbiAgICAgICAgbGV0IGVycm9yRGF0YTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBlcnJvckRhdGEgPSBKU09OLnBhcnNlKGVycm9yVGV4dCk7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgIGVycm9yRGF0YSA9IHsgZXJyb3I6IGVycm9yVGV4dCB9O1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvckRhdGEuZXJyb3IgfHwgJ0ZhaWxlZCB0byBmZXRjaCBhY2Nlc3MgbG9ncycpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBjb25zb2xlLmxvZygn8J+TnCBBUEk6IEFjY2VzcyBsb2dzIGRhdGE6JywgcmVzdWx0KTtcblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcign4p2MIEFQSTogZ2V0QWNjZXNzTG9ncyBlcnJvcjonLCBlcnJvcik7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cblxuICAvLyBMb2cgZG9jdW1lbnQgYWNjZXNzXG4gIGFzeW5jIGxvZ0FjY2Vzcyhkb2N1bWVudElkLCB1c2VySWQsIGFjdGlvbiwgbWV0YWRhdGEgPSB7fSkge1xuICAgIGNvbnNvbGUubG9nKCfwn5OdIEFQSTogbG9nQWNjZXNzIGNhbGxlZCcsIHsgZG9jdW1lbnRJZCwgdXNlcklkLCBhY3Rpb24sIG1ldGFkYXRhIH0pO1xuXG4gICAgaWYgKCF0aGlzLmZldGNoKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfinYwgQVBJOiBIdWJTcG90IGZldGNoIG5vdCBpbml0aWFsaXplZCBmb3IgbG9nIGFjY2VzcycpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdIdWJTcG90IGZldGNoIG5vdCBpbml0aWFsaXplZCcpO1xuICAgIH1cblxuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYmFzZVVSTH0vYXBpL2xvZy1hY2Nlc3NgO1xuICAgIGNvbnN0IHBheWxvYWQgPSB7IGRvY3VtZW50SWQsIHVzZXJJZCwgYWN0aW9uLCBtZXRhZGF0YSB9O1xuICAgIGNvbnNvbGUubG9nKCfwn5OdIEFQSTogTWFraW5nIGxvZyBhY2Nlc3MgcmVxdWVzdCB0bzonLCB1cmwsICd3aXRoIHBheWxvYWQ6JywgcGF5bG9hZCk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmZldGNoKHVybCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZClcbiAgICAgIH0pO1xuXG4gICAgICBjb25zb2xlLmxvZygn8J+TnSBBUEk6IExvZyBhY2Nlc3MgcmVzcG9uc2Ugc3RhdHVzOicsIHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICBjb25zb2xlLmxvZygn8J+TnSBBUEk6IExvZyBhY2Nlc3MgcmVzcG9uc2Ugb2s6JywgcmVzcG9uc2Uub2spO1xuXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGNvbnN0IGVycm9yVGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgY29uc29sZS5lcnJvcign4p2MIEFQSTogTG9nIGFjY2VzcyBlcnJvciByZXNwb25zZTonLCBlcnJvclRleHQpO1xuICAgICAgICBsZXQgZXJyb3JEYXRhO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGVycm9yRGF0YSA9IEpTT04ucGFyc2UoZXJyb3JUZXh0KTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgZXJyb3JEYXRhID0geyBlcnJvcjogZXJyb3JUZXh0IH07XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yRGF0YS5lcnJvciB8fCAnRmFpbGVkIHRvIGxvZyBhY2Nlc3MnKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc29sZS5sb2coJ/Cfk50gQVBJOiBMb2cgYWNjZXNzIHN1Y2Nlc3M6JywgcmVzdWx0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+KdjCBBUEk6IGxvZ0FjY2VzcyBlcnJvcjonLCBlcnJvcik7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cblxuICAvLyBHZXQgY29tcGxpYW5jZSBzdGF0aXN0aWNzIChtdWx0aS10ZW5hbnQpXG4gIGFzeW5jIGdldENvbXBsaWFuY2VTdGF0cyhvYmplY3RUeXBlLCBvYmplY3RJZCkge1xuICAgIGNvbnNvbGUubG9nKCfwn5OKIEFQSTogZ2V0Q29tcGxpYW5jZVN0YXRzIGNhbGxlZCcsIHsgb2JqZWN0VHlwZSwgb2JqZWN0SWQgfSk7XG5cbiAgICBpZiAoIXRoaXMuZmV0Y2gpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+KdjCBBUEk6IEh1YlNwb3QgZmV0Y2ggbm90IGluaXRpYWxpemVkIGZvciBjb21wbGlhbmNlIHN0YXRzJyk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0h1YlNwb3QgZmV0Y2ggbm90IGluaXRpYWxpemVkJyk7XG4gICAgfVxuXG4gICAgY29uc3QgcG9ydGFsSWQgPSB0aGlzLmNvbnRleHQ/LnBvcnRhbD8uaWQ7XG4gICAgY29uc3QgdGVhbUlkID0gJ2RlZmF1bHQnOyAvLyBGb3Igbm93LCB1c2luZyBkZWZhdWx0IHRlYW1cblxuICAgIGlmICghcG9ydGFsSWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUG9ydGFsIElEIG5vdCBhdmFpbGFibGUnKTtcbiAgICB9XG5cbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmJhc2VVUkx9L2FwaS9kb2N1bWVudHMvJHt0ZWFtSWR9LyR7cG9ydGFsSWR9L2NvbXBsaWFuY2Utc3RhdHNgO1xuICAgIGNvbnNvbGUubG9nKCfwn5OKIEFQSTogTWFraW5nIGNvbXBsaWFuY2Ugc3RhdHMgcmVxdWVzdCB0bzonLCB1cmwpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5mZXRjaCh1cmwsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKCfwn5OKIEFQSTogQ29tcGxpYW5jZSBzdGF0cyByZXNwb25zZSBzdGF0dXM6JywgcmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgIGNvbnNvbGUubG9nKCfwn5OKIEFQSTogQ29tcGxpYW5jZSBzdGF0cyByZXNwb25zZSBvazonLCByZXNwb25zZS5vayk7XG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgY29uc3QgZXJyb3JUZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgICBjb25zb2xlLmVycm9yKCfinYwgQVBJOiBDb21wbGlhbmNlIHN0YXRzIGVycm9yIHJlc3BvbnNlOicsIGVycm9yVGV4dCk7XG4gICAgICAgIGxldCBlcnJvckRhdGE7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZXJyb3JEYXRhID0gSlNPTi5wYXJzZShlcnJvclRleHQpO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICBlcnJvckRhdGEgPSB7IGVycm9yOiBlcnJvclRleHQgfTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JEYXRhLmVycm9yIHx8ICdGYWlsZWQgdG8gZmV0Y2ggY29tcGxpYW5jZSBzdGF0cycpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBjb25zb2xlLmxvZygn8J+TiiBBUEk6IENvbXBsaWFuY2Ugc3RhdHMgZGF0YTonLCByZXN1bHQpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcign4p2MIEFQSTogZ2V0Q29tcGxpYW5jZVN0YXRzIGVycm9yOicsIGVycm9yKTtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxuXG59XG5cbi8vIEV4cG9ydCBjbGFzcyBmb3IgaW5zdGFudGlhdGlvbiB3aXRoIGZldGNoIG1ldGhvZFxuZXhwb3J0IGRlZmF1bHQgQWNjZXNzU2hpZWxkQVBJOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBGbGV4LFxuICBUZXh0LFxuICBMb2FkaW5nU3Bpbm5lcixcbiAgQWxlcnQsXG4gIENhcmQsXG59IGZyb20gJ0BodWJzcG90L3VpLWV4dGVuc2lvbnMnO1xuXG5leHBvcnQgY29uc3QgRG9jdW1lbnRVcGxvYWQgPSAoe1xuICBvblVwbG9hZFN0YXJ0LFxuICBvblVwbG9hZFN1Y2Nlc3MsXG4gIG9uVXBsb2FkRXJyb3IsXG4gIG9iamVjdElkLFxuICBvYmplY3RUeXBlLFxuICBkaXNhYmxlZCxcbiAgY3JtU2VydmljZSxcbiAgYWN0aW9ucyxcbiAgY29udGV4dFxufSkgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWRGaWxlLCBzZXRTZWxlY3RlZEZpbGVdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFt1cGxvYWRVcmwsIHNldFVwbG9hZFVybF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgLy8gSW5pdGlhbGl6ZSB1cGxvYWQgVVJMIG9uIGNvbXBvbmVudCBtb3VudFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFVzZSB0aGUgdmlld2VyIHByb2plY3QgZm9yIHVwbG9hZCBVSSAobWF0Y2hlcyBkZXNpZ24gZXhhY3RseSlcbiAgICBjb25zdCB2aWV3ZXJCYXNlVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTE3Myc7IC8vIExvY2FsIGRldiBzZXJ2ZXIgZm9yIHRlc3RpbmdcbiAgICAvLyBGYWxsYmFjayBmb3Igb2JqZWN0VHlwZSBpZiB1bmRlZmluZWRcbiAgICBjb25zdCBmaW5hbE9iamVjdFR5cGUgPSBvYmplY3RUeXBlIHx8ICdjb250YWN0JztcbiAgICBjb25zdCBodWJzcG90QWNjb3VudElkID0gY29udGV4dD8ucG9ydGFsPy5pZCB8fCAnMjQ0NzYzNjMxJztcbiAgICBjb25zdCB1cGxvYWRQYWdlVXJsID0gYCR7dmlld2VyQmFzZVVybH0vdXBsb2FkP29iamVjdElkPSR7b2JqZWN0SWR9Jm9iamVjdFR5cGU9JHtmaW5hbE9iamVjdFR5cGV9Jmh1YnNwb3RBY2NvdW50SWQ9JHtodWJzcG90QWNjb3VudElkfWA7XG4gICAgY29uc29sZS5sb2coJ/CflJcgR2VuZXJhdGVkIHVwbG9hZCBVUkw6JywgdXBsb2FkUGFnZVVybCk7XG4gICAgc2V0VXBsb2FkVXJsKHVwbG9hZFBhZ2VVcmwpO1xuICB9LCBbb2JqZWN0SWQsIG9iamVjdFR5cGUsIGNvbnRleHRdKTtcblxuICAvLyBDaGVjayBmb3IgdXBsb2FkIHN1Y2Nlc3MgaW4gVVJMIHBhcmFtZXRlcnMgKHdoZW4gdXNlciByZXR1cm5zIGZyb20gZXh0ZXJuYWwgcGFnZSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcblxuICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgY29uc3QgdXBsb2FkU3VjY2VzcyA9IHVybFBhcmFtcy5nZXQoJ3VwbG9hZFN1Y2Nlc3MnKTtcbiAgICBjb25zdCBmaWxlTmFtZSA9IHVybFBhcmFtcy5nZXQoJ2ZpbGVOYW1lJyk7XG4gICAgY29uc3QgZmlsZVNpemUgPSB1cmxQYXJhbXMuZ2V0KCdmaWxlU2l6ZScpO1xuICAgIGNvbnN0IGRvY3VtZW50SWQgPSB1cmxQYXJhbXMuZ2V0KCdkb2N1bWVudElkJyk7XG5cbiAgICBpZiAodXBsb2FkU3VjY2VzcyA9PT0gJ3RydWUnICYmIGZpbGVOYW1lKSB7XG4gICAgICBzZXRTZWxlY3RlZEZpbGUoe1xuICAgICAgICBuYW1lOiBmaWxlTmFtZSxcbiAgICAgICAgc2l6ZTogcGFyc2VJbnQoZmlsZVNpemUpIHx8IDAsXG4gICAgICAgIHR5cGU6ICd1cGxvYWRlZCdcbiAgICAgIH0pO1xuXG4gICAgICAvLyBOb3RpZnkgcGFyZW50IG9mIHN1Y2Nlc3NmdWwgdXBsb2FkXG4gICAgICBvblVwbG9hZFN1Y2Nlc3Moe1xuICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICBkb2N1bWVudDoge1xuICAgICAgICAgIGlkOiBkb2N1bWVudElkLFxuICAgICAgICAgIGZpbGVOYW1lOiBmaWxlTmFtZSxcbiAgICAgICAgICBmaWxlU2l6ZTogcGFyc2VJbnQoZmlsZVNpemUpIHx8IDBcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIERvY3VtZW50IHVwbG9hZGVkIHN1Y2Nlc3NmdWxseSAtIHBhcmVudCBjb21wb25lbnQgd2lsbCBoYW5kbGUgcmVmcmVzaFxuXG4gICAgICAvLyBDbGVhbiB1cCBVUkwgcGFyYW1ldGVyc1xuICAgICAgY29uc3QgY2xlYW5VcmwgPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHt9LCAnJywgY2xlYW5VcmwpO1xuICAgIH1cbiAgfSwgW29uVXBsb2FkU3VjY2Vzc10pO1xuXG4gIGNvbnN0IGhhbmRsZURlYnVnQ2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ/CflJggQnV0dG9uIGNsaWNrZWQhJyk7XG4gICAgY29uc29sZS5sb2coJ/CflJggVXBsb2FkIFVSTDonLCB1cGxvYWRVcmwpO1xuICAgIGNvbnNvbGUubG9nKCfwn5SYIFNlbGVjdGVkIGZpbGU6Jywgc2VsZWN0ZWRGaWxlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbGVhckZpbGUgPSAoKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRGaWxlKG51bGwpO1xuICB9O1xuXG5cbiAgcmV0dXJuIChcbiAgICA8RmxleCBkaXJlY3Rpb249XCJjb2x1bW5cIiBnYXA9XCJtZWRpdW1cIj5cbiAgICAgIDxUZXh0IHZhcmlhbnQ9XCJtaWNyb2NvcHlcIj5cbiAgICAgICAgVXBsb2FkIGRvY3VtZW50cyBmb3IgYmxvY2tjaGFpbiByZWdpc3RyYXRpb24gYW5kIHNlY3VyZSBhY2Nlc3MgdHJhY2tpbmcuXG4gICAgICA8L1RleHQ+XG5cbiAgICAgIHsvKiBGaWxlIFNlbGVjdGlvbiBBcmVhICovfVxuICAgICAgPEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCIgZ2FwPVwic21hbGxcIj5cbiAgICAgICAge3NlbGVjdGVkRmlsZSA/IChcbiAgICAgICAgICA8RmxleCBkaXJlY3Rpb249XCJjb2x1bW5cIiBnYXA9XCJzbWFsbFwiPlxuICAgICAgICAgICAgPFRleHQgd2VpZ2h0PVwiYm9sZFwiPlNlbGVjdGVkIEZpbGU6PC9UZXh0PlxuICAgICAgICAgICAgPEZsZXgganVzdGlmeT1cImJldHdlZW5cIiBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICA8RmxleCBkaXJlY3Rpb249XCJjb2x1bW5cIiBnYXA9XCJleHRyYVNtYWxsXCI+XG4gICAgICAgICAgICAgICAgPFRleHQ+e3NlbGVjdGVkRmlsZS5uYW1lfTwvVGV4dD5cbiAgICAgICAgICAgICAgICA8VGV4dCB2YXJpYW50PVwibWljcm9jb3B5XCI+XG4gICAgICAgICAgICAgICAgICB7TWF0aC5yb3VuZChzZWxlY3RlZEZpbGUuc2l6ZSAvIDEwMjQpfUtCIC0ge3NlbGVjdGVkRmlsZS50eXBlfVxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGVhckZpbGV9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDbGVhclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFRleHQgdmFyaWFudD1cIm1pY3JvY29weVwiPk5vIGZpbGUgc2VsZWN0ZWQ8L1RleHQ+XG4gICAgICAgICl9XG4gICAgICA8L0ZsZXg+XG5cbiAgICAgIHsvKiBVcGxvYWQgQ29udHJvbHMgKi99XG4gICAgICA8RmxleCBnYXA9XCJtZWRpdW1cIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgaHJlZj17e1xuICAgICAgICAgICAgdXJsOiB1cGxvYWRVcmwsXG4gICAgICAgICAgICBleHRlcm5hbDogdHJ1ZVxuICAgICAgICAgIH19XG4gICAgICAgICAgb25DbGljaz17aGFuZGxlRGVidWdDbGlja31cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWQgfHwgIXVwbG9hZFVybH1cbiAgICAgICAgPlxuICAgICAgICAgIFVwbG9hZCBEb2N1bWVudFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvRmxleD5cblxuICAgICAgey8qIEluc3RydWN0aW9ucyAqL31cbiAgICAgIDxUZXh0IHZhcmlhbnQ9XCJtaWNyb2NvcHlcIiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBmb250U3R5bGU6ICdpdGFsaWMnIH19PlxuICAgICAgICBDbGljayBcIlVwbG9hZCBEb2N1bWVudFwiIHRvIG9wZW4gdGhlIHVwbG9hZCBwYWdlIGluIGEgbmV3IHRhYlxuICAgICAgPC9UZXh0PlxuICAgIDwvRmxleD5cbiAgKTtcbn07IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBodWJzcG90LFxuICBDYXJkLFxuICBGbGV4LFxuICBIZWFkaW5nLFxuICBUZXh0LFxuICBMb2FkaW5nU3Bpbm5lcixcbiAgQWxlcnQsXG4gIFRhYmxlLFxuICBUYWJsZUhlYWQsXG4gIFRhYmxlUm93LFxuICBUYWJsZUhlYWRlcixcbiAgVGFibGVCb2R5LFxuICBUYWJsZUNlbGwsXG4gIEJ1dHRvbixcbiAgTG9hZGluZ0J1dHRvbixcbiAgSW5wdXRcbn0gZnJvbSAnQGh1YnNwb3QvdWktZXh0ZW5zaW9ucyc7XG5pbXBvcnQgeyBmb3JtYXREYXRlLCBnZXRCbG9ja2NoYWluU3RhdHVzVmFyaWFudCB9IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQgQWNjZXNzU2hpZWxkQVBJIGZyb20gJy4vYXBpU2VydmljZSc7XG5pbXBvcnQgeyBEb2N1bWVudFVwbG9hZCB9IGZyb20gJy4vRG9jdW1lbnRVcGxvYWQnO1xuXG5odWJzcG90LmV4dGVuZCgoZXh0ZW5zaW9uUHJvcHMpID0+IHtcbiAgY29uc29sZS5sb2coJ/Cfk4ogRGFzaGJvYXJkIEV4dGVuc2lvbiBwcm9wcyByZWNlaXZlZDonLCBleHRlbnNpb25Qcm9wcyk7XG4gIGNvbnNvbGUubG9nKCfwn5OKIERhc2hib2FyZCBFeHRlbnNpb24gY29udGV4dDonLCBleHRlbnNpb25Qcm9wcy5jb250ZXh0KTtcbiAgY29uc29sZS5sb2coJ/Cfk4ogRGFzaGJvYXJkIEV4dGVuc2lvbiBhY3Rpb25zOicsIGV4dGVuc2lvblByb3BzLmFjdGlvbnMpO1xuICBjb25zb2xlLmxvZygn8J+TiiBEYXNoYm9hcmQgRXh0ZW5zaW9uIGZldGNoOicsIGV4dGVuc2lvblByb3BzLmZldGNoKTtcbiAgY29uc29sZS5sb2coJ/Cfk4ogRGFzaGJvYXJkIEFsbCBleHRlbnNpb24ga2V5czonLCBPYmplY3Qua2V5cyhleHRlbnNpb25Qcm9wcykpO1xuXG4gIGNvbnN0IHsgY29udGV4dCwgYWN0aW9ucywgcnVuU2VydmVybGVzc0Z1bmN0aW9uIH0gPSBleHRlbnNpb25Qcm9wcztcbiAgcmV0dXJuIChcbiAgICA8RG9jdW1lbnREYXNoYm9hcmRcbiAgICAgIGNvbnRleHQ9e2NvbnRleHR9XG4gICAgICBhY3Rpb25zPXthY3Rpb25zfVxuICAgICAgcnVuU2VydmVybGVzc0Z1bmN0aW9uPXtydW5TZXJ2ZXJsZXNzRnVuY3Rpb259XG4gICAgICBvcGVuSWZyYW1lTW9kYWw9e2FjdGlvbnMub3BlbklmcmFtZU1vZGFsfVxuICAgIC8+XG4gICk7XG59KTtcblxuY29uc3QgRG9jdW1lbnREYXNoYm9hcmQgPSAoeyBjb250ZXh0LCBhY3Rpb25zLCBydW5TZXJ2ZXJsZXNzRnVuY3Rpb24sIG9wZW5JZnJhbWVNb2RhbCB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKCfwn5OKIERvY3VtZW50RGFzaGJvYXJkIGluaXRpYWxpemVkJyk7XG4gIGNvbnNvbGUubG9nKCfwn5OLIERhc2hib2FyZCBDb250ZXh0OicsIGNvbnRleHQpO1xuICBjb25zb2xlLmxvZygn8J+UpyBEYXNoYm9hcmQgQWN0aW9uczonLCBPYmplY3Qua2V5cyhhY3Rpb25zIHx8IHt9KSk7XG4gIGNvbnNvbGUubG9nKCfwn5SnIERhc2hib2FyZCBydW5TZXJ2ZXJsZXNzRnVuY3Rpb246JywgdHlwZW9mIHJ1blNlcnZlcmxlc3NGdW5jdGlvbik7XG4gIGNvbnNvbGUubG9nKCfwn5SnIERhc2hib2FyZCBVc2VyIGluZm86JywgY29udGV4dC51c2VyKTtcbiAgY29uc29sZS5sb2coJ/CflKcgRGFzaGJvYXJkIFBvcnRhbCBpbmZvOicsIGNvbnRleHQucG9ydGFsKTtcblxuICBjb25zdCBbc3RhdHMsIHNldFN0YXRzXSA9IHVzZVN0YXRlKHtcbiAgICB0b3RhbERvY3VtZW50czogMCxcbiAgICBibG9ja2NoYWluUmVnaXN0ZXJlZDogMCxcbiAgICB0b3RhbEFjY2Vzc0V2ZW50czogMCxcbiAgICByZWNlbnRBY2Nlc3NFdmVudHM6IDBcbiAgfSk7XG4gIGNvbnN0IFtyZWNlbnRBY3Rpdml0eSwgc2V0UmVjZW50QWN0aXZpdHldID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZG9jdW1lbnRzLCBzZXREb2N1bWVudHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3VwbG9hZGluZywgc2V0VXBsb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3VwbG9hZEVycm9yLCBzZXRVcGxvYWRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbYXBpU2VydmljZSwgc2V0QXBpU2VydmljZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3ZpZXdCdXR0b25Mb2FkaW5nLCBzZXRWaWV3QnV0dG9uTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBvYmplY3RJZCA9IGNvbnRleHQuY3JtPy5vYmplY3RJZDtcblxuICAvLyBNYXAgSHViU3BvdCBvYmplY3RUeXBlSWQgdG8gcHJvcGVyIHN0cmluZyBmb3JtYXRcbiAgY29uc3QgZ2V0T2JqZWN0VHlwZSA9ICgpID0+IHtcbiAgICBjb25zdCB0eXBlSWQgPSBjb250ZXh0LmNybT8ub2JqZWN0VHlwZUlkO1xuICAgIHN3aXRjaCAodHlwZUlkKSB7XG4gICAgICBjYXNlICcwLTEnOiByZXR1cm4gJ2NvbnRhY3QnO1xuICAgICAgY2FzZSAnMC0yJzogcmV0dXJuICdjb250YWN0JztcbiAgICAgIGNhc2UgJzAtMyc6IHJldHVybiAnY29tcGFueSc7XG4gICAgICBjYXNlICcwLTQnOiByZXR1cm4gJ2RlYWwnO1xuICAgICAgZGVmYXVsdDogcmV0dXJuIGNvbnRleHQuY3JtPy5vYmplY3RUeXBlIHx8ICdjb250YWN0JztcbiAgICB9XG4gIH07XG4gIGNvbnN0IG9iamVjdFR5cGUgPSBnZXRPYmplY3RUeXBlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygn8J+TiiBEYXNoYm9hcmQgc2V0dGluZyB1cCBodWJzcG90LmZldGNoIEFQSSBzZXJ2aWNlLi4uJyk7XG5cbiAgICBpZiAodHlwZW9mIGh1YnNwb3QuZmV0Y2ggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUubG9nKCfinIUgRGFzaGJvYXJkIGh1YnNwb3QuZmV0Y2ggaXMgYXZhaWxhYmxlLCBjcmVhdGluZyBBUEkgc2VydmljZScpO1xuICAgICAgY29uc3QgYXBpID0gbmV3IEFjY2Vzc1NoaWVsZEFQSShodWJzcG90LmZldGNoLCBjb250ZXh0KTtcbiAgICAgIHNldEFwaVNlcnZpY2UoYXBpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcign4p2MIERhc2hib2FyZDogaHVic3BvdC5mZXRjaCBub3QgYXZhaWxhYmxlJyk7XG4gICAgICBzZXRFcnJvcignSHViU3BvdCBmZXRjaCBBUEkgbm90IGF2YWlsYWJsZScpO1xuICAgIH1cbiAgfSwgW2NvbnRleHQudXNlcl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ/Cfk4ogRGFzaGJvYXJkIGNoZWNraW5nIEFQSSBzZXJ2aWNlOicsIHsgaGFzQXBpU2VydmljZTogISFhcGlTZXJ2aWNlIH0pO1xuICAgIGlmIChhcGlTZXJ2aWNlKSB7XG4gICAgICBjb25zb2xlLmxvZygn4pa277iPIERhc2hib2FyZCBzdGFydGluZyBkYXRhIGxvYWQuLi4nKTtcbiAgICAgIGxvYWREYXNoYm9hcmREYXRhKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCfij7MgRGFzaGJvYXJkIHdhaXRpbmcgZm9yIEFQSSBzZXJ2aWNlLi4uJyk7XG4gICAgfVxuICB9LCBbYXBpU2VydmljZV0pO1xuXG4gIGNvbnN0IGxvYWREYXNoYm9hcmREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCfwn5OKIERhc2hib2FyZCBsb2FkRGF0YSBjYWxsZWQnKTtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHNldEVycm9yKG51bGwpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG9iamVjdElkID0gY29udGV4dC5jcm0/Lm9iamVjdElkO1xuICAgICAgY29uc3Qgb2JqZWN0VHlwZSA9IGdldE9iamVjdFR5cGUoKTtcblxuICAgICAgY29uc29sZS5sb2coJ/Cfk4ogRGFzaGJvYXJkIG9iamVjdCBkZXRhaWxzOicsIHsgb2JqZWN0SWQsIG9iamVjdFR5cGUsIG9iamVjdFR5cGVJZDogY29udGV4dC5jcm0/Lm9iamVjdFR5cGVJZCB9KTtcblxuICAgICAgY29uc29sZS5sb2coJ/Cfk54gRGFzaGJvYXJkIG1ha2luZyBBUEkgY2FsbHMuLi4nKTtcbiAgICAgIGNvbnNvbGUubG9nKCfwn5OeIERhc2hib2FyZCBjYWxsaW5nIGdldEFjY2Vzc0xvZ3Mgd2l0aCBvYmplY3RJZDonLCBvYmplY3RJZCk7XG5cbiAgICAgIGNvbnN0IFtzdGF0c1Jlc3BvbnNlLCBhY3Rpdml0eVJlc3BvbnNlLCBkb2N1bWVudHNSZXNwb25zZV0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgIGFwaVNlcnZpY2UuZ2V0Q29tcGxpYW5jZVN0YXRzKG9iamVjdFR5cGUsIG9iamVjdElkKSxcbiAgICAgICAgYXBpU2VydmljZS5nZXRBY2Nlc3NMb2dzKG9iamVjdElkKSxcbiAgICAgICAgYXBpU2VydmljZS5nZXREb2N1bWVudHMob2JqZWN0VHlwZSwgb2JqZWN0SWQpXG4gICAgICBdKTtcblxuICAgICAgY29uc29sZS5sb2coJ/Cfk4ggRGFzaGJvYXJkIHN0YXRzIHJlc3BvbnNlOicsIHN0YXRzUmVzcG9uc2UpO1xuICAgICAgY29uc29sZS5sb2coJ/Cfk4ggRGFzaGJvYXJkIGFjdGl2aXR5IHJlc3BvbnNlOicsIGFjdGl2aXR5UmVzcG9uc2UpO1xuICAgICAgY29uc29sZS5sb2coJ/Cfk4ggRGFzaGJvYXJkIGFjdGl2aXR5IHJlc3BvbnNlIGxvZ3MgYXJyYXk6JywgYWN0aXZpdHlSZXNwb25zZT8ubG9ncyk7XG4gICAgICBjb25zb2xlLmxvZygn8J+TiCBEYXNoYm9hcmQgYWN0aXZpdHkgcmVzcG9uc2UgbG9ncyBsZW5ndGg6JywgYWN0aXZpdHlSZXNwb25zZT8ubG9ncz8ubGVuZ3RoKTtcbiAgICAgIGNvbnNvbGUubG9nKCfwn5OIIERhc2hib2FyZCBkb2N1bWVudHMgcmVzcG9uc2U6JywgZG9jdW1lbnRzUmVzcG9uc2UpO1xuXG4gICAgICBzZXRTdGF0cyhzdGF0c1Jlc3BvbnNlLnN0YXRzIHx8IHt9KTtcbiAgICAgIGNvbnN0IGFjdGl2aXR5TG9ncyA9IGFjdGl2aXR5UmVzcG9uc2UubG9ncyB8fCBbXTtcbiAgICAgIGNvbnNvbGUubG9nKCfwn5OIIERhc2hib2FyZCBzZXR0aW5nIHJlY2VudEFjdGl2aXR5IHRvOicsIGFjdGl2aXR5TG9ncyk7XG4gICAgICBzZXRSZWNlbnRBY3Rpdml0eShhY3Rpdml0eUxvZ3MpO1xuICAgICAgc2V0RG9jdW1lbnRzKGRvY3VtZW50c1Jlc3BvbnNlLmRvY3VtZW50cyB8fCBbXSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKCfinIUgRGFzaGJvYXJkIGRhdGEgbG9hZGVkIHN1Y2Nlc3NmdWxseScpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcign4p2MIERhc2hib2FyZCBlcnJvciBsb2FkaW5nIGRhdGE6JywgZXJyKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+KdjCBEYXNoYm9hcmQgZXJyb3IgZGV0YWlsczonLCB7XG4gICAgICAgIG1lc3NhZ2U6IGVyci5tZXNzYWdlLFxuICAgICAgICBzdGFjazogZXJyLnN0YWNrLFxuICAgICAgICBuYW1lOiBlcnIubmFtZVxuICAgICAgfSk7XG4gICAgICBzZXRFcnJvcignRmFpbGVkIHRvIGxvYWQgZGFzaGJvYXJkIGRhdGE6ICcgKyBlcnIubWVzc2FnZSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGNvbnNvbGUubG9nKCfwn4+BIERhc2hib2FyZCBzZXR0aW5nIGxvYWRpbmcgdG8gZmFsc2UnKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVVcGxvYWRTdGFydCA9ICgpID0+IHtcbiAgICBzZXRVcGxvYWRpbmcodHJ1ZSk7XG4gICAgc2V0VXBsb2FkRXJyb3IobnVsbCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVXBsb2FkU3VjY2VzcyA9IGFzeW5jICh1cGxvYWREYXRhKSA9PiB7XG4gICAgc2V0VXBsb2FkaW5nKGZhbHNlKTtcbiAgICBhd2FpdCBsb2FkRGFzaGJvYXJkRGF0YSgpO1xuICAgIGFjdGlvbnMuYWRkQWxlcnQoe1xuICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgbWVzc2FnZTogJ0RvY3VtZW50IHVwbG9hZGVkIGFuZCByZWdpc3RlcmVkIHN1Y2Nlc3NmdWxseSEnXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVXBsb2FkRXJyb3IgPSAoZXJyb3IpID0+IHtcbiAgICBzZXRVcGxvYWRpbmcoZmFsc2UpO1xuICAgIHNldFVwbG9hZEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgIGFjdGlvbnMuYWRkQWxlcnQoe1xuICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgIG1lc3NhZ2U6ICdVcGxvYWQgZmFpbGVkOiAnICsgZXJyb3IubWVzc2FnZVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVZpZXdEb2N1bWVudCA9IGFzeW5jIChkb2N1bWVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCfwn5SNIFZpZXcgZG9jdW1lbnQgY2xpY2tlZDonLCBkb2N1bWVudCk7XG4gICAgc2V0Vmlld0J1dHRvbkxvYWRpbmcodHJ1ZSk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgb2JqZWN0SWQgPSBjb250ZXh0LmNybT8ub2JqZWN0SWQ7XG4gICAgICBjb25zdCBvYmplY3RUeXBlID0gZ2V0T2JqZWN0VHlwZSgpO1xuICAgICAgY29uc3QgdXNlcklkID0gY29udGV4dC51c2VyPy5lbWFpbCB8fCBjb250ZXh0LnVzZXI/LmlkIHx8ICdhbm9ueW1vdXMnO1xuXG4gICAgICBjb25zb2xlLmxvZygn8J+TniBDYWxsaW5nIGFjY2VzcyBpbml0IEFQSS4uLicsIHtcbiAgICAgICAgZG9jdW1lbnRIYXNoOiBkb2N1bWVudC5kb2N1bWVudEhhc2gsXG4gICAgICAgIGRvY3VtZW50SWQ6IGRvY3VtZW50LnN0b3JhZ2VQYXRoIHx8IGRvY3VtZW50LmlkLFxuICAgICAgICByZWNvcmRUeXBlOiBvYmplY3RUeXBlLFxuICAgICAgICByZWNvcmRJZDogb2JqZWN0SWQsXG4gICAgICAgIHVzZXJJZDogdXNlcklkLFxuICAgICAgICBhY2Nlc3NUeXBlOiAndmlldycsXG4gICAgICAgIGZpbGVOYW1lOiBkb2N1bWVudC5maWxlTmFtZVxuICAgICAgfSk7XG5cbiAgICAgIC8vIENhbGwgYmFja2VuZCAvYXBpL2FjY2Vzcy9pbml0IHRvIHN0YXJ0IEtSTkwgd29ya2Zsb3cgdXNpbmcgaHVic3BvdC5mZXRjaFxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBodWJzcG90LmZldGNoKCdodHRwczovLzA1MTg5MmU1ODkyNi5uZ3Jvay1mcmVlLmFwcC9hcGkvYWNjZXNzL2luaXQnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiB7XG4gICAgICAgICAgZG9jdW1lbnRIYXNoOiBkb2N1bWVudC5kb2N1bWVudEhhc2gsXG4gICAgICAgICAgZG9jdW1lbnRJZDogZG9jdW1lbnQuc3RvcmFnZVBhdGggfHwgZG9jdW1lbnQuaWQsXG4gICAgICAgICAgcmVjb3JkSWQ6IG9iamVjdElkLCAvLyBKdXN0IHRoZSBudW1lcmljIElELCBub3QgcHJlZml4ZWRcbiAgICAgICAgICB1c2VySWQ6IHVzZXJJZCxcbiAgICAgICAgICBhY2Nlc3NUeXBlOiAndmlldycsXG4gICAgICAgICAgZmlsZU5hbWU6IGRvY3VtZW50LmZpbGVOYW1lLFxuICAgICAgICAgIGNsaWVudElQOiAnJyxcbiAgICAgICAgICB1c2VyQWdlbnQ6IG5hdmlnYXRvci51c2VyQWdlbnRcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKCfwn5OeIEFjY2VzcyBpbml0IHJlc3BvbnNlIHN0YXR1czonLCByZXNwb25zZS5zdGF0dXMpO1xuXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGNvbnN0IGVycm9yVGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgY29uc29sZS5lcnJvcign4p2MIEFjY2VzcyBpbml0IGVycm9yIHJlc3BvbnNlOicsIGVycm9yVGV4dCk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGluaXRpYWxpemUgZG9jdW1lbnQgYWNjZXNzJyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKCfinIUgQWNjZXNzIGluaXQgc3VjY2VzczonLCByZXN1bHQpO1xuXG4gICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC52aWV3ZXJTZXNzaW9uVXJsKSB7XG4gICAgICAgIC8vIE9wZW4gdGhlIHZpZXdlciBVUkwgaW4gYW4gaWZyYW1lIG1vZGFsXG4gICAgICAgIG9wZW5JZnJhbWVNb2RhbCh7XG4gICAgICAgICAgdXJpOiByZXN1bHQudmlld2VyU2Vzc2lvblVybCxcbiAgICAgICAgICBoZWlnaHQ6IDgwMCxcbiAgICAgICAgICB3aWR0aDogMTIwMCxcbiAgICAgICAgICB0aXRsZTogYERvY3VtZW50IFZpZXdlciAtICR7ZG9jdW1lbnQuZmlsZU5hbWV9YCxcbiAgICAgICAgICBmbHVzaDogdHJ1ZVxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ0RvY3VtZW50IHZpZXdlciBtb2RhbCBjbG9zZWQnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYWN0aW9ucy5hZGRBbGVydCh7XG4gICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgIG1lc3NhZ2U6ICdPcGVuaW5nIHNlY3VyZSB2aWV3ZXIuLi4nXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyB2aWV3ZXIgVVJMIHJlY2VpdmVkIGZyb20gYWNjZXNzIGluaXQnKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcign4p2MIFZpZXcgZG9jdW1lbnQgZXJyb3I6JywgZXJyb3IpO1xuICAgICAgYWN0aW9ucy5hZGRBbGVydCh7XG4gICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgIG1lc3NhZ2U6ICdGYWlsZWQgdG8gb3BlbiBkb2N1bWVudCB2aWV3ZXI6ICcgKyBlcnJvci5tZXNzYWdlXG4gICAgICB9KTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0Vmlld0J1dHRvbkxvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVTZXNzaW9uVmlldyA9IGFzeW5jIChzZXNzaW9uSWQpID0+IHtcbiAgICB0cnkge1xuICAgICAgLy8gRm9yIG5vdywgc2hvdyBzZXNzaW9uIGluZm8gZnJvbSByZWNlbnQgYWN0aXZpdHlcbiAgICAgIGNvbnN0IHNlc3Npb24gPSByZWNlbnRBY3Rpdml0eS5maW5kKGFjdGl2aXR5ID0+IGFjdGl2aXR5LmlkID09PSBzZXNzaW9uSWQpO1xuXG4gICAgICBpZiAoc2Vzc2lvbikge1xuICAgICAgICBhY3Rpb25zLmFkZEFsZXJ0KHtcbiAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgICAgbWVzc2FnZTogYFNlc3Npb24gJHtzZXNzaW9uSWR9OiAke3Nlc3Npb24uYWN0aW9ufSBieSAke3Nlc3Npb24udXNlckVtYWlsIHx8ICdVbmtub3duIHVzZXInfSBhdCAke2Zvcm1hdERhdGUoc2Vzc2lvbi5hY2Nlc3NUaW1lKX1gXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWN0aW9ucy5hZGRBbGVydCh7XG4gICAgICAgICAgdHlwZTogJ2luZm8nLFxuICAgICAgICAgIG1lc3NhZ2U6IGBTZXNzaW9uICR7c2Vzc2lvbklkfSBkZXRhaWxzIG5vdCBhdmFpbGFibGVgXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0RXJyb3IoJ0ZhaWxlZCB0byBsb2FkIHNlc3Npb24gZGV0YWlsczogJyArIGVyci5tZXNzYWdlKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgc2Vzc2lvbjonLCBlcnIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBmaWx0ZXJlZEFjdGl2aXR5ID0gcmVjZW50QWN0aXZpdHkuZmlsdGVyKGFjdGl2aXR5ID0+XG4gICAgYWN0aXZpdHkuZmlsZU5hbWU/LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgIGFjdGl2aXR5LnVzZXJOYW1lPy50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSkgfHxcbiAgICBhY3Rpdml0eS51c2VyRW1haWw/LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgIGFjdGl2aXR5LmFjY2Vzc0hhc2g/LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgIGFjdGl2aXR5LmFjY2Vzc1R5cGU/LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKVxuICApO1xuXG4gIC8vIERlYnVnIGxvZ3MgZm9yIGFjY2VzcyBoaXN0b3J5XG4gIGNvbnNvbGUubG9nKCfwn5SNIEFjY2VzcyBIaXN0b3J5IERlYnVnOicsIHtcbiAgICByZWNlbnRBY3Rpdml0eUxlbmd0aDogcmVjZW50QWN0aXZpdHk/Lmxlbmd0aCxcbiAgICByZWNlbnRBY3Rpdml0eVNhbXBsZTogcmVjZW50QWN0aXZpdHk/LlswXSxcbiAgICBmaWx0ZXJlZEFjdGl2aXR5TGVuZ3RoOiBmaWx0ZXJlZEFjdGl2aXR5Py5sZW5ndGgsXG4gICAgc2VhcmNoVGVybSxcbiAgICBoYXNSZWNlbnRBY3Rpdml0eTogISFyZWNlbnRBY3Rpdml0eSAmJiByZWNlbnRBY3Rpdml0eS5sZW5ndGggPiAwXG4gIH0pO1xuXG4gIGNvbnN0IGNvbXBsaWFuY2VDb3ZlcmFnZSA9IHN0YXRzLnRvdGFsRG9jdW1lbnRzID4gMFxuICAgID8gTWF0aC5yb3VuZCgoc3RhdHMuYmxvY2tjaGFpblJlZ2lzdGVyZWQgLyBzdGF0cy50b3RhbERvY3VtZW50cykgKiAxMDApXG4gICAgOiAwO1xuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGbGV4IGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbj1cImNlbnRlclwiIHN0eWxlPXt7IG1pbkhlaWdodDogJzIwMHB4JyB9fT5cbiAgICAgICAgPExvYWRpbmdTcGlubmVyIC8+XG4gICAgICA8L0ZsZXg+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCIgZ2FwPVwibGFyZ2VcIj5cbiAgICAgIDxIZWFkaW5nPkFjY2Vzc1NoaWVsZCBEYXNoYm9hcmQ8L0hlYWRpbmc+XG5cbiAgICAgIDxUZXh0PlxuICAgICAgICBXZWxjb21lIHRvIEFjY2Vzc1NoaWVsZCBieSBLUk5MLiBUaGlzIGRhc2hib2FyZCBwcm92aWRlcyBhIHF1aWNrIG92ZXJ2aWV3XG4gICAgICAgIG9mIHRyYWNrZWQgZG9jdW1lbnRzIGFuZCByZWNlbnQgYWNjZXNzIGFjdGl2aXR5LlxuICAgICAgPC9UZXh0PlxuXG4gICAgICB7ZXJyb3IgJiYgKFxuICAgICAgICA8QWxlcnQgdmFyaWFudD1cImVycm9yXCIgdGl0bGU9XCJFcnJvclwiPlxuICAgICAgICAgIHtlcnJvcn1cbiAgICAgICAgPC9BbGVydD5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBEb2N1bWVudCBVcGxvYWQgU2VjdGlvbiAqL31cbiAgICAgIDxDYXJkPlxuICAgICAgICA8RmxleCBkaXJlY3Rpb249XCJjb2x1bW5cIiBnYXA9XCJtZWRpdW1cIj5cbiAgICAgICAgICA8SGVhZGluZyBsZXZlbD17Mn0+RG9jdW1lbnQgVXBsb2FkPC9IZWFkaW5nPlxuICAgICAgICAgIHt1cGxvYWRFcnJvciAmJiAoXG4gICAgICAgICAgICA8QWxlcnQgdmFyaWFudD1cImVycm9yXCIgdGl0bGU9XCJVcGxvYWQgRXJyb3JcIj5cbiAgICAgICAgICAgICAge3VwbG9hZEVycm9yfVxuICAgICAgICAgICAgPC9BbGVydD5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxEb2N1bWVudFVwbG9hZFxuICAgICAgICAgICAgb25VcGxvYWRTdGFydD17aGFuZGxlVXBsb2FkU3RhcnR9XG4gICAgICAgICAgICBvblVwbG9hZFN1Y2Nlc3M9e2hhbmRsZVVwbG9hZFN1Y2Nlc3N9XG4gICAgICAgICAgICBvblVwbG9hZEVycm9yPXtoYW5kbGVVcGxvYWRFcnJvcn1cbiAgICAgICAgICAgIG9iamVjdElkPXtvYmplY3RJZH1cbiAgICAgICAgICAgIG9iamVjdFR5cGU9e29iamVjdFR5cGV9XG4gICAgICAgICAgICBkaXNhYmxlZD17dXBsb2FkaW5nfVxuICAgICAgICAgICAgY3JtU2VydmljZT17YXBpU2VydmljZX1cbiAgICAgICAgICAgIGFjdGlvbnM9e2FjdGlvbnN9XG4gICAgICAgICAgICBjb250ZXh0PXtjb250ZXh0fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRmxleD5cbiAgICAgIDwvQ2FyZD5cblxuICAgICAgey8qIEtleSBQZXJmb3JtYW5jZSBJbmRpY2F0b3JzICovfVxuICAgICAgPENhcmQ+XG4gICAgICAgIDxIZWFkaW5nIGxldmVsPXsyfT5LZXkgTWV0cmljczwvSGVhZGluZz5cbiAgICAgICAgPEZsZXggZ2FwPVwibWVkaXVtXCIgd3JhcD1cIndyYXBcIj5cbiAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgdGl0bGU9XCJUcmFja2VkIERvY3VtZW50c1wiXG4gICAgICAgICAgICB2YWx1ZT17c3RhdHMudG90YWxEb2N1bWVudHN9XG4gICAgICAgICAgICBpY29uPVwiZG9jdW1lbnRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENhcmRcbiAgICAgICAgICAgIHRpdGxlPVwiQmxvY2tjaGFpbiBSZWdpc3RlcmVkXCJcbiAgICAgICAgICAgIHZhbHVlPXtzdGF0cy5ibG9ja2NoYWluUmVnaXN0ZXJlZH1cbiAgICAgICAgICAgIGljb249XCJzaGllbGRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENhcmRcbiAgICAgICAgICAgIHRpdGxlPVwiVG90YWwgQWNjZXNzIEV2ZW50c1wiXG4gICAgICAgICAgICB2YWx1ZT17c3RhdHMudG90YWxBY2Nlc3NFdmVudHN9XG4gICAgICAgICAgICBpY29uPVwiZXllXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICB0aXRsZT1cIkNvbXBsaWFuY2UgQ292ZXJhZ2VcIlxuICAgICAgICAgICAgdmFsdWU9e2Ake2NvbXBsaWFuY2VDb3ZlcmFnZX0lYH1cbiAgICAgICAgICAgIGljb249XCJjaGFydFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgPC9DYXJkPlxuXG4gICAgICB7LyogRG9jdW1lbnQgSGlzdG9yeSAqL31cbiAgICAgIDxDYXJkPlxuICAgICAgICA8RmxleCBkaXJlY3Rpb249XCJjb2x1bW5cIiBnYXA9XCJtZWRpdW1cIj5cbiAgICAgICAgICA8SGVhZGluZyBsZXZlbD17Mn0+RG9jdW1lbnQgSGlzdG9yeTwvSGVhZGluZz5cbiAgICAgICAgICB7ZG9jdW1lbnRzICYmIGRvY3VtZW50cy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgPFRhYmxlPlxuICAgICAgICAgICAgICA8VGFibGVIZWFkPlxuICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWRlcj5GaWxlIE5hbWU8L1RhYmxlSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZGVyPlVwbG9hZCBEYXRlPC9UYWJsZUhlYWRlcj5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWRlcj5CbG9ja2NoYWluIFN0YXR1czwvVGFibGVIZWFkZXI+XG4gICAgICAgICAgICAgICAgICA8VGFibGVIZWFkZXI+RmlsZSBTaXplPC9UYWJsZUhlYWRlcj5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWRlcj5BY3Rpb25zPC9UYWJsZUhlYWRlcj5cbiAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cbiAgICAgICAgICAgICAgPFRhYmxlQm9keT5cbiAgICAgICAgICAgICAgICB7ZG9jdW1lbnRzLm1hcCgoZG9jKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtkb2MuaWR9PlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Pntkb2MuZmlsZU5hbWV9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dD57Zm9ybWF0RGF0ZShkb2MucmVnaXN0cmF0aW9uVGltZXN0YW1wIHx8IGRvYy51cGxvYWRlZEF0KX08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9e2dldEJsb2NrY2hhaW5TdGF0dXNWYXJpYW50KGRvYy5ibG9ja2NoYWluU3RhdHVzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZG9jLmJsb2NrY2hhaW5TdGF0dXN9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dD57TWF0aC5yb3VuZCgoZG9jLmZpbGVTaXplIHx8IDApIC8gMTAyNCl9S0I8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVmlld0RvY3VtZW50KGRvYyl9XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXt2aWV3QnV0dG9uTG9hZGluZ31cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dmlld0J1dHRvbkxvYWRpbmcgPyAnTG9hZGluZy4uLicgOiAnVmlldyd9XG4gICAgICAgICAgICAgICAgICAgICAgPC9Mb2FkaW5nQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvVGFibGVCb2R5PlxuICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEZsZXgganVzdGlmeT1cImNlbnRlclwiIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3sgcGFkZGluZzogJzQwcHgnIH19PlxuICAgICAgICAgICAgICA8RmxleCBkaXJlY3Rpb249XCJjb2x1bW5cIiBhbGlnbj1cImNlbnRlclwiIGdhcD1cInNtYWxsXCI+XG4gICAgICAgICAgICAgICAgPFRleHQgdmFyaWFudD1cIm1pY3JvY29weVwiPk5vIGRvY3VtZW50cyB1cGxvYWRlZCB5ZXQ8L1RleHQ+XG4gICAgICAgICAgICAgICAgPFRleHQgdmFyaWFudD1cIm1pY3JvY29weVwiPlxuICAgICAgICAgICAgICAgICAgVXBsb2FkIGEgZG9jdW1lbnQgYWJvdmUgdG8gc2VlIGl0IGFwcGVhciBpbiB0aGlzIGhpc3RvcnkuXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9GbGV4PlxuICAgICAgPC9DYXJkPlxuXG4gICAgICB7LyogQWNjZXNzIEhpc3RvcnkgKi99XG4gICAgICA8Q2FyZD5cbiAgICAgICAgPEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCIgZ2FwPVwibWVkaXVtXCI+XG4gICAgICAgICAgPEhlYWRpbmcgbGV2ZWw9ezJ9PkFjY2VzcyBIaXN0b3J5PC9IZWFkaW5nPlxuXG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBieSBmaWxlIG5hbWUsIHVzZXIgZW1haWwsIGFjY2VzcyBoYXNoLi4uXCJcbiAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hUZXJtfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0U2VhcmNoVGVybSh2YWx1ZSl9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIHtmaWx0ZXJlZEFjdGl2aXR5ICYmIGZpbHRlcmVkQWN0aXZpdHkubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgIDxUYWJsZT5cbiAgICAgICAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICAgICAgICA8VGFibGVIZWFkZXI+QWNjZXNzIFRpbWU8L1RhYmxlSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZGVyPkZpbGUgTmFtZTwvVGFibGVIZWFkZXI+XG4gICAgICAgICAgICAgICAgICA8VGFibGVIZWFkZXI+VXNlciBFbWFpbDwvVGFibGVIZWFkZXI+XG4gICAgICAgICAgICAgICAgICA8VGFibGVIZWFkZXI+QWNjZXNzIEhhc2g8L1RhYmxlSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZGVyPldhdGVybWFyayBTdGF0dXM8L1RhYmxlSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZGVyPklQIEFkZHJlc3M8L1RhYmxlSGVhZGVyPlxuICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICAgICAgICA8VGFibGVCb2R5PlxuICAgICAgICAgICAgICAgIHtmaWx0ZXJlZEFjdGl2aXR5Lm1hcCgoYWN0aXZpdHkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e2FjdGl2aXR5LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dD57Zm9ybWF0RGF0ZShhY3Rpdml0eS5hY2Nlc3NUaW1lc3RhbXApfTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgPFRleHQ+e2FjdGl2aXR5LmZpbGVOYW1lfTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgPFRleHQ+e2FjdGl2aXR5LnVzZXJFbWFpbH08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRGYW1pbHk6ICdtb25vc3BhY2UnLCBmb250U2l6ZTogJzEycHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge2FjdGl2aXR5LmFjY2Vzc0hhc2ggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBgJHthY3Rpdml0eS5hY2Nlc3NIYXNoLnN1YnN0cmluZygwLCA4KX0uLi4ke2FjdGl2aXR5LmFjY2Vzc0hhc2guc2xpY2UoLTYpfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAnTi9BJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgPFRleHQgdmFyaWFudD17Z2V0QmxvY2tjaGFpblN0YXR1c1ZhcmlhbnQoYWN0aXZpdHkud2F0ZXJtYXJrQXBwbGllZCA/ICdSZWdpc3RlcmVkIG9uIEJsb2NrY2hhaW4nIDogJ1BlbmRpbmcnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YWN0aXZpdHkud2F0ZXJtYXJrQXBwbGllZCA/ICdBcHBsaWVkJyA6ICdOb3QgQXBwbGllZCd9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dCB2YXJpYW50PVwibWljcm9jb3B5XCI+e2FjdGl2aXR5LmlwQWRkcmVzc308L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8RmxleCBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17eyBwYWRkaW5nOiAnNDBweCcgfX0+XG4gICAgICAgICAgICAgIDxGbGV4IGRpcmVjdGlvbj1cImNvbHVtblwiIGFsaWduPVwiY2VudGVyXCIgZ2FwPVwic21hbGxcIj5cbiAgICAgICAgICAgICAgICA8VGV4dCB2YXJpYW50PVwibWljcm9jb3B5XCI+Tm8gYWNjZXNzIGV2ZW50cyB5ZXQ8L1RleHQ+XG4gICAgICAgICAgICAgICAgPFRleHQgdmFyaWFudD1cIm1pY3JvY29weVwiPlxuICAgICAgICAgICAgICAgICAgT25jZSB1c2VycyBzdGFydCB2aWV3aW5nIGRvY3VtZW50cyB2aWEgS1JOTCwgYWN0aXZpdHkgd2lsbCBhcHBlYXIgaGVyZS5cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICApfVxuICAgICAgICA8L0ZsZXg+XG4gICAgICA8L0NhcmQ+XG5cbiAgICAgIHsvKiBCbG9ja2NoYWluIFN0YXR1cyBCcmVha2Rvd24gKi99XG4gICAgICB7c3RhdHMuYmxvY2tjaGFpblN0YXR1c0JyZWFrZG93biAmJiAoXG4gICAgICAgIDxDYXJkPlxuICAgICAgICAgIDxIZWFkaW5nIGxldmVsPXsyfT5Eb2N1bWVudCBTdGF0dXMgQnJlYWtkb3duPC9IZWFkaW5nPlxuICAgICAgICAgIDxGbGV4IGdhcD1cIm1lZGl1bVwiIHdyYXA9XCJ3cmFwXCI+XG4gICAgICAgICAgICB7T2JqZWN0LmVudHJpZXMoc3RhdHMuYmxvY2tjaGFpblN0YXR1c0JyZWFrZG93bikubWFwKChbc3RhdHVzLCBjb3VudF0pID0+IChcbiAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICBrZXk9e3N0YXR1c31cbiAgICAgICAgICAgICAgICB0aXRsZT17c3RhdHVzfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb3VudH1cbiAgICAgICAgICAgICAgICB2YXJpYW50PXtnZXRCbG9ja2NoYWluU3RhdHVzVmFyaWFudChzdGF0dXMpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L0NhcmQ+XG4gICAgICApfVxuXG4gICAgICB7LyogQWNjZXNzIFR5cGUgQnJlYWtkb3duICovfVxuICAgICAge3N0YXRzLmFjY2Vzc1R5cGVCcmVha2Rvd24gJiYgKFxuICAgICAgICA8Q2FyZD5cbiAgICAgICAgICA8SGVhZGluZyBsZXZlbD17Mn0+QWNjZXNzIFR5cGUgQnJlYWtkb3duIChMYXN0IDMwIERheXMpPC9IZWFkaW5nPlxuICAgICAgICAgIDxGbGV4IGdhcD1cIm1lZGl1bVwiIHdyYXA9XCJ3cmFwXCI+XG4gICAgICAgICAgICB7T2JqZWN0LmVudHJpZXMoc3RhdHMuYWNjZXNzVHlwZUJyZWFrZG93bikubWFwKChbdHlwZSwgY291bnRdKSA9PiAoXG4gICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAga2V5PXt0eXBlfVxuICAgICAgICAgICAgICAgIHRpdGxlPXt0eXBlfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb3VudH1cbiAgICAgICAgICAgICAgICBpY29uPVwiYWN0aXZpdHlcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L0NhcmQ+XG4gICAgICApfVxuICAgIDwvRmxleD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERvY3VtZW50RGFzaGJvYXJkOyJdLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUkJDAiLCJmb3JtYXQiLCJSZWFjdERlYnVnQ3VycmVudEZyYW1lIiwiaXNBcnJheSIsInNlbGYiLCJrZXlzIiwianN4UnVudGltZU1vZHVsZSIsImNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50IiwiX2pzeCIsImNyZWF0ZUNvbnRleHQiLCJsb2NhbGUiLCJ0byIsImZyb20iLCJub3ciLCJzaWduIiwidG9rZW4iLCJvcmRpbmFsIiwiaSIsImRpZmYiLCJsb2NhbGVEYXRhIiwiaG91cnMiLCJtaW51dGVzIiwidG9rZW5zIiwibWVyaWRpZW0iLCJ5ZWFycyIsIm1vbnRocyIsIndlZWtzIiwiZGF5cyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHMiLCJvZmZzZXQiLCJ0aHJlc2hvbGRzIiwibW9tZW50IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJfYSIsIm9iamVjdElkIiwib2JqZWN0VHlwZSIsImVycm9yIiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7QUFJQSxRQUFNLG9CQUFvQixNQUFNLE9BQU8sU0FBUyxlQUM1QyxLQUFLLGlDQUFpQztBQUkxQyxRQUFNLG9CQUFvQjtBQUFBLElBQ3RCLFFBQVE7QUFBQSxNQUNKLE9BQU8sQ0FBQyxTQUFTO0FBQ2IsZ0JBQVEsSUFBSSxJQUFJO0FBQUEsTUFDcEI7QUFBQSxNQUNBLE1BQU0sQ0FBQyxTQUFTO0FBQ1osZ0JBQVEsS0FBSyxJQUFJO0FBQUEsTUFDckI7QUFBQSxNQUNBLE1BQU0sQ0FBQyxTQUFTO0FBQ1osZ0JBQVEsS0FBSyxJQUFJO0FB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
