'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Icon$1 = require('components/Icon');
var Button$1 = require('components/Button');
var Box$2 = require('components/Box');
var Chip$1 = require('components/Chip');
var Field$1 = require('components/Field');
var Checkbox$2 = require('components/Checkbox');
var TextField$1 = require('components/TextField');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function ownKeys$3(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2$3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$3(Object(source), true).forEach(function (key) {
        _defineProperty$3(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$3(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty$3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends$4w() {
  _extends$4w = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$4w.apply(this, arguments);
}

function _objectWithoutPropertiesLoose$4w(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties$4v(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose$4w(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$3(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$3(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$3(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray$3(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$3(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$3(o, minLen);
}

function _arrayLikeToArray$3(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k$1=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k$1:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k$1;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k$1};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k$1||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});
reactIs_development.AsyncMode;
reactIs_development.ConcurrentMode;
reactIs_development.ContextConsumer;
reactIs_development.ContextProvider;
reactIs_development.Element;
reactIs_development.ForwardRef;
reactIs_development.Fragment;
reactIs_development.Lazy;
reactIs_development.Memo;
reactIs_development.Portal;
reactIs_development.Profiler;
reactIs_development.StrictMode;
reactIs_development.Suspense;
reactIs_development.isAsyncMode;
reactIs_development.isConcurrentMode;
reactIs_development.isContextConsumer;
reactIs_development.isContextProvider;
reactIs_development.isElement;
reactIs_development.isForwardRef;
reactIs_development.isFragment;
reactIs_development.isLazy;
reactIs_development.isMemo;
reactIs_development.isPortal;
reactIs_development.isProfiler;
reactIs_development.isStrictMode;
reactIs_development.isSuspense;
reactIs_development.isValidElementType;
reactIs_development.typeOf;

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;

var printWarning$2 = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning$2 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has$1(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning$2(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning$2(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

var Accordion = function Accordion(_ref) {
  var color = _ref.color,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties$4v(_ref, ["color", "children", "className"]);

  var _useState = React.useState(children.map(function (c) {
    return false;
  })),
      _useState2 = _slicedToArray(_useState, 2),
      panelStates = _useState2[0],
      setPanelStates = _useState2[1];

  var togglePanel = function togglePanel(index) {
    setPanelStates(panelStates.map(function (state, i) {
      return i === index ? !state : state;
    }));
  };

  var childrenWithProps = children.map(function (child, i) {
    if ( /*#__PURE__*/React.isValidElement(child)) {
      return /*#__PURE__*/React.cloneElement(child, {
        key: "panel-".concat(i),
        color: color,
        index: i,
        togglePanel: togglePanel,
        isOpen: panelStates[i],
        isLast: i === children.length - 1 ? true : false
      });
    }

    return null;
  });
  return /*#__PURE__*/React__default['default'].createElement("div", _extends$4w({
    className: "accordion ".concat(className)
  }, props), childrenWithProps);
};
Accordion.defaultProps = {
  color: 'blue',
  className: ''
};
Accordion.propTypes = {
  color: propTypes.string,
  className: propTypes.string,
  children: propTypes.node.isRequired
};
var AccordionPanel = function AccordionPanel(_ref2) {
  var icon = _ref2.icon,
      label = _ref2.label,
      color = _ref2.color,
      index = _ref2.index,
      isOpen = _ref2.isOpen,
      isLast = _ref2.isLast,
      children = _ref2.children,
      togglePanel = _ref2.togglePanel,
      props = _objectWithoutProperties$4v(_ref2, ["icon", "label", "color", "index", "isOpen", "isLast", "children", "togglePanel"]);

  var panelHeaderClasses = classnames('accordion--panel-header', "hover:text-".concat(color, "-500"), {
    'border-b-1': !isLast || isLast && isOpen
  });
  var panelIconClasses = classnames('mr-2', {
    'transform rotate-90': isOpen
  });
  var panelContentClasses = classnames('accordion--panel-content', {
    'border-b-1 border-gray-200': !isLast
  });
  return /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("div", _extends$4w({
    onClick: function onClick() {
      return togglePanel(index);
    },
    className: panelHeaderClasses
  }, props), icon ? /*#__PURE__*/React__default['default'].createElement(Icon$1.Icon, {
    as: icon,
    color: color,
    variant: "shaded",
    size: 6,
    padding: 1,
    className: "mr-2"
  }) : /*#__PURE__*/React__default['default'].createElement(Icon$1.Icon, {
    as: "ChevronRight",
    className: panelIconClasses
  }), label), /*#__PURE__*/React__default['default'].createElement("div", {
    className: isOpen ? panelContentClasses : 'hidden'
  }, children));
};
AccordionPanel.defaultProps = {
  icon: '',
  color: 'blue'
};
AccordionPanel.propTypes = {
  icon: propTypes.string,
  isOpen: propTypes.bool,
  isLast: propTypes.bool,
  index: propTypes.number,
  color: propTypes.string,
  children: propTypes.node,
  togglePanel: propTypes.func,
  label: propTypes.string.isRequired
};

var ActionMenu = function ActionMenu(_ref) {
  var _classNames;

  var icon = _ref.icon,
      label = _ref.label,
      color = _ref.color,
      variant = _ref.variant,
      isSmall = _ref.isSmall,
      position = _ref.position,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties$4v(_ref, ["icon", "label", "color", "variant", "isSmall", "position", "children", "className"]);

  var actionMenuRef = React.useRef();

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  React.useEffect(function () {
    var handleClickAway = function handleClickAway(e) {
      if (actionMenuRef.current.contains(e.target)) return;
      setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickAway);
    return function () {
      document.removeEventListener("mousedown", handleClickAway);
    };
  }, [setIsOpen]);
  var childrenWithProps = children.map(function (child, i) {
    if ( /*#__PURE__*/React.isValidElement(child)) {
      return /*#__PURE__*/React.cloneElement(child, {
        key: "actionmenuitem-".concat(i),
        color: color,
        isSmall: isSmall
      });
    }

    return null;
  });
  var actionMenuClasses = classnames((_classNames = {}, _defineProperty$3(_classNames, "action-menu action-menu--to-".concat(position), isOpen), _defineProperty$3(_classNames, 'hidden', !isOpen), _classNames));
  return /*#__PURE__*/React__default['default'].createElement("div", _extends$4w({
    ref: actionMenuRef,
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    },
    className: "action-menu--wrapper ".concat(className)
  }, props), /*#__PURE__*/React__default['default'].createElement(Button$1.Button, {
    color: color,
    variant: variant,
    isSmall: isSmall,
    label: icon ? /*#__PURE__*/React__default['default'].createElement(Icon$1.Icon, {
      as: icon,
      size: 6
    }) : label
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: actionMenuClasses
  }, childrenWithProps));
};
ActionMenu.defaultProps = {
  className: '',
  position: "bl",
  isSmall: false
};
ActionMenu.propTypes = {
  icon: propTypes.string,
  label: propTypes.string,
  color: propTypes.string,
  isSmall: propTypes.bool,
  children: propTypes.node,
  variant: propTypes.string,
  position: propTypes.string,
  className: propTypes.string
};
var ActionMenuItem = function ActionMenuItem(_ref2) {
  var icon = _ref2.icon,
      label = _ref2.label,
      color = _ref2.color,
      onClick = _ref2.onClick,
      isSmall = _ref2.isSmall,
      className = _ref2.className,
      props = _objectWithoutProperties$4v(_ref2, ["icon", "label", "color", "onClick", "isSmall", "className"]);

  var itemClasses = classnames('action-menu--item', "action-menu--item--".concat(color), className, {
    'action-menu--item--small': isSmall
  });
  return /*#__PURE__*/React__default['default'].createElement("div", _extends$4w({
    onClick: onClick,
    className: itemClasses
  }, props), icon && /*#__PURE__*/React__default['default'].createElement(Icon$1.Icon, {
    as: icon,
    className: "action-menu--icon"
  }), label);
};
ActionMenuItem.defaultProps = {
  color: 'blue',
  className: '',
  isSmall: false
};
ActionMenuItem.propTypes = {
  icon: propTypes.string,
  isSmall: propTypes.bool,
  onClick: propTypes.func,
  className: propTypes.string,
  label: propTypes.string.isRequired
};

var Alert = function Alert(_ref) {
  var icon = _ref.icon,
      color = _ref.color,
      action = _ref.action,
      heading = _ref.heading,
      message = _ref.message;
      _ref.isSmall;
      var pingColor = _ref.pingColor,
      className = _ref.className,
      props = _objectWithoutProperties$4v(_ref, ["icon", "color", "action", "heading", "message", "isSmall", "pingColor", "className"]);

  var alertClasses = classnames('alert', className, _defineProperty$3({}, "animate-ping-".concat(pingColor), pingColor));
  var alertHeadingClasses = classnames('alert--heading', "alert--heading--".concat(color), {
    'ml-3': icon
  });
  var alertMessageClasses = classnames('alert--message', "alert--message--".concat(color), {
    'ml-3': icon
  });
  return /*#__PURE__*/React__default['default'].createElement(Box$2.Box, _extends$4w({
    color: color,
    variant: "frame",
    className: alertClasses
  }, props), icon && /*#__PURE__*/React__default['default'].createElement(Box$2.Box, {
    color: color,
    className: "inline-block",
    isRounded: true
  }, /*#__PURE__*/React__default['default'].createElement(Icon$1.Icon, {
    as: icon,
    size: 6,
    color: "white"
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "alert--content"
  }, heading && /*#__PURE__*/React__default['default'].createElement("span", {
    className: alertHeadingClasses
  }, heading), /*#__PURE__*/React__default['default'].createElement("span", {
    className: alertMessageClasses
  }, message)), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "alert--action"
  }, action));
};
Alert.defaultProps = {
  icon: '',
  heading: '',
  color: 'gray',
  className: '',
  isSmall: false,
  pingColor: ''
};
Alert.propTypes = {
  icon: propTypes.string,
  action: propTypes.node,
  color: propTypes.string,
  isSmall: propTypes.bool,
  heading: propTypes.string,
  pingColor: propTypes.string,
  className: propTypes.string,
  message: propTypes.string.isRequired
};

var Avatar = function Avatar(_ref) {
  var src = _ref.src,
      size = _ref.size,
      label = _ref.label,
      color = _ref.color,
      className = _ref.className;
      _objectWithoutProperties$4v(_ref, ["src", "size", "label", "color", "className"]);

  var avatarClasses = classnames('avatar', "h-".concat(size), "w-".concat(size), className, _defineProperty$3({}, "avatar--".concat(color), !src));
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: avatarClasses
  }, src ? /*#__PURE__*/React__default['default'].createElement("img", {
    src: src,
    alt: "user-avatar"
  }) : /*#__PURE__*/React__default['default'].createElement("span", {
    className: "avatar--label"
  }, label));
};
Avatar.defaultProps = {
  src: '',
  size: 10,
  color: 'blue',
  className: ''
};
Avatar.propTypes = {
  src: propTypes.string,
  size: propTypes.number,
  color: propTypes.string,
  className: propTypes.string
};

var Badge = function Badge(_ref) {
  var label = _ref.label,
      color = _ref.color,
      variant = _ref.variant,
      isSmall = _ref.isSmall,
      isRounded = _ref.isRounded,
      pingColor = _ref.pingColor,
      className = _ref.className,
      props = _objectWithoutProperties$4v(_ref, ["label", "color", "variant", "isSmall", "isRounded", "pingColor", "className"]);

  var badgeClasses = classnames('badge', "badge--".concat(variant, "--").concat(color), className, _defineProperty$3({
    'badge--small': isSmall,
    'badge--rounded': isRounded
  }, "animate-ping-".concat(pingColor), pingColor));
  return /*#__PURE__*/React__default['default'].createElement("span", _extends$4w({
    className: badgeClasses
  }, props), label);
};
Badge.defaultProps = {
  color: 'gray',
  pingColor: '',
  isSmall: false,
  isRounded: false,
  variant: 'default',
  className: ''
};
Badge.propTypes = {
  color: propTypes.string,
  isSmall: propTypes.bool,
  isRounded: propTypes.bool,
  variant: propTypes.string,
  pingColor: propTypes.string,
  className: propTypes.string,
  label: propTypes.string.isRequired
};

var Box$1 = function Box(_ref) {
  var color = _ref.color,
      variant = _ref.variant,
      isRounded = _ref.isRounded,
      pingColor = _ref.pingColor,
      className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties$4v(_ref, ["color", "variant", "isRounded", "pingColor", "className", "children"]);

  var boxClasses = classnames('box', "box--".concat(variant, "--").concat(color), className, _defineProperty$3({
    'box--rounded': isRounded
  }, "animate-ping-".concat(pingColor), pingColor));
  return /*#__PURE__*/React__default['default'].createElement("div", _extends$4w({
    className: boxClasses
  }, props), children);
};
Box$1.defaultProps = {
  color: 'white',
  variant: 'default',
  className: ''
};
Box$1.propTypes = {
  color: propTypes.string,
  variant: propTypes.string,
  pingColor: propTypes.string,
  className: propTypes.string
};

var Button = function Button(_ref) {
  var _classNames;

  var label = _ref.label,
      color = _ref.color,
      variant = _ref.variant,
      isSmall = _ref.isSmall,
      leftIcon = _ref.leftIcon,
      rightIcon = _ref.rightIcon,
      isLoading = _ref.isLoading,
      isDisabled = _ref.isDisabled,
      className = _ref.className,
      props = _objectWithoutProperties$4v(_ref, ["label", "color", "variant", "isSmall", "leftIcon", "rightIcon", "isLoading", "isDisabled", "className"]);

  var buttonClasses = classnames('button', className, (_classNames = {
    'button--small': isSmall
  }, _defineProperty$3(_classNames, "button--".concat(variant, "--disabled"), isDisabled), _defineProperty$3(_classNames, "button--".concat(variant, "--").concat(color), !isDisabled), _classNames));
  return /*#__PURE__*/React__default['default'].createElement("button", _extends$4w({
    className: buttonClasses,
    onAnimationEnd: function onAnimationEnd(e) {
      return e.target.blur();
    },
    disabled: isDisabled || isLoading
  }, props), leftIcon && !isLoading && /*#__PURE__*/React__default['default'].createElement(Icon$1.Icon, {
    as: leftIcon,
    className: "button--left-icon"
  }), isLoading ? /*#__PURE__*/React__default['default'].createElement(Icon$1.Icon, {
    as: "Loader",
    size: 6,
    className: "button--loader"
  }) : label, rightIcon && !isLoading && /*#__PURE__*/React__default['default'].createElement(Icon$1.Icon, {
    as: rightIcon,
    className: "button--right-icon"
  }));
};
Button.defaultProps = {
  type: 'button',
  color: 'default',
  variant: 'primary',
  className: '',
  leftIcon: '',
  rightIcon: '',
  isSmall: false,
  isLoading: false,
  isDisabled: false
};
Button.propTypes = {
  type: propTypes.oneOf(['button', 'submit', 'reset']),
  variant: propTypes.string,
  color: propTypes.string,
  label: propTypes.oneOfType([propTypes.string, propTypes.node]).isRequired,
  isDisabled: propTypes.bool,
  isSmall: propTypes.bool,
  isLoading: propTypes.bool,
  className: propTypes.string,
  leftIcon: propTypes.string,
  rightIcon: propTypes.string
};

function _defineProperty$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys$2(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2$2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$2(Object(source), true).forEach(function (key) {
        _defineProperty$2(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$2(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose$4v(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _unsupportedIterableToArray$2(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen);
}

function _arrayLikeToArray$2(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose$2(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray$2(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}

var SystemContext = /*#__PURE__*/React.createContext({});

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$1(Object(source), true).forEach(function (key) {
        _defineProperty$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose$4u(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _unsupportedIterableToArray$1(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
}

function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose$1(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}

function isRenderProp(children) {
  return typeof children === "function";
}

/**
 * Custom hook that will call `children` if it's a function. If
 * `useCreateElement` has been passed to the context, it'll be used instead.
 *
 * @example
 * import React from "react";
 * import { SystemProvider, useCreateElement } from "reakit-system";
 *
 * const system = {
 *   useCreateElement(type, props, children = props.children) {
 *     // very similar to what `useCreateElement` does already
 *     if (typeof children === "function") {
 *       const { children: _, ...rest } = props;
 *       return children(rest);
 *     }
 *     return React.createElement(type, props, children);
 *   },
 * };
 *
 * function Component(props) {
 *   return useCreateElement("div", props);
 * }
 *
 * function App() {
 *   return (
 *     <SystemProvider unstable_system={system}>
 *       <Component url="url">{({ url }) => <a href={url}>link</a>}</Component>
 *     </SystemProvider>
 *   );
 * }
 */

var useCreateElement = function useCreateElement(type, props, children) {
  if (children === void 0) {
    children = props.children;
  }

  var context = React.useContext(SystemContext);

  if (context.useCreateElement) {
    return context.useCreateElement(type, props, children);
  }

  if (typeof type === "string" && isRenderProp(children)) {
    props.children;
        var rest = _objectWithoutPropertiesLoose$4u(props, ["children"]);

    return children(rest);
  }

  return /*#__PURE__*/React.createElement(type, props, children);
};

/**
 * Splits an object (`props`) into a tuple where the first item is an object
 * with the passed `keys`, and the second item is an object with these keys
 * omitted.
 *
 * @example
 * import { splitProps } from "reakit-utils";
 *
 * splitProps({ a: "a", b: "b" }, ["a"]); // [{ a: "a" }, { b: "b" }]
 */
function splitProps(props, keys) {
  var propsKeys = Object.keys(props);
  var picked = {};
  var omitted = {};

  for (var _i = 0, _propsKeys = propsKeys; _i < _propsKeys.length; _i++) {
    var key = _propsKeys[_i];

    if (keys.indexOf(key) >= 0) {
      picked[key] = props[key];
    } else {
      omitted[key] = props[key];
    }
  }

  return [picked, omitted];
}

/**
 * Compares two objects.
 *
 * @example
 * import { shallowEqual } from "reakit-utils";
 *
 * shallowEqual({ a: "a" }, {}); // false
 * shallowEqual({ a: "a" }, { b: "b" }); // false
 * shallowEqual({ a: "a" }, { a: "a" }); // true
 * shallowEqual({ a: "a" }, { a: "a", b: "b" }); // false
 */
function shallowEqual(objA, objB) {
  if (objA === objB) return true;
  if (!objA) return false;
  if (!objB) return false;
  if (typeof objA !== "object") return false;
  if (typeof objB !== "object") return false;
  var aKeys = Object.keys(objA);
  var bKeys = Object.keys(objB);
  var length = aKeys.length;
  if (bKeys.length !== length) return false;

  for (var _i = 0, _aKeys = aKeys; _i < _aKeys.length; _i++) {
    var key = _aKeys[_i];

    if (objA[key] !== objB[key]) {
      return false;
    }
  }

  return true;
}

function forwardRef$1(component) {
  return /*#__PURE__*/React.forwardRef(component);
}

function memo(component, propsAreEqual) {
  return /*#__PURE__*/React.memo(component, propsAreEqual);
}

/**
 * Creates a React component.
 *
 * @example
 * import { createComponent } from "reakit-system";
 *
 * const A = createComponent({ as: "a" });
 *
 * @param options
 */
function createComponent(_ref) {
  var type = _ref.as,
      useHook = _ref.useHook,
      shouldMemo = _ref.memo,
      _ref$propsAreEqual = _ref.propsAreEqual,
      propsAreEqual = _ref$propsAreEqual === void 0 ? useHook === null || useHook === void 0 ? void 0 : useHook.unstable_propsAreEqual : _ref$propsAreEqual,
      _ref$keys = _ref.keys,
      keys = _ref$keys === void 0 ? (useHook === null || useHook === void 0 ? void 0 : useHook.__keys) || [] : _ref$keys,
      _ref$useCreateElement = _ref.useCreateElement,
      useCreateElement$1 = _ref$useCreateElement === void 0 ? useCreateElement : _ref$useCreateElement;

  var Comp = function Comp(_ref2, ref) {
    var _ref2$as = _ref2.as,
        as = _ref2$as === void 0 ? type : _ref2$as,
        props = _objectWithoutPropertiesLoose$4u(_ref2, ["as"]);

    if (useHook) {
      var _as$render;

      var _splitProps = splitProps(props, keys),
          _options = _splitProps[0],
          htmlProps = _splitProps[1];

      var _useHook = useHook(_options, _objectSpread2$1({
        ref: ref
      }, htmlProps)),
          wrapElement = _useHook.wrapElement,
          elementProps = _objectWithoutPropertiesLoose$4u(_useHook, ["wrapElement"]); // @ts-ignore


      var asKeys = ((_as$render = as.render) === null || _as$render === void 0 ? void 0 : _as$render.__keys) || as.__keys;
      var asOptions = asKeys && splitProps(props, asKeys)[0];
      var allProps = asOptions ? _objectSpread2$1(_objectSpread2$1({}, elementProps), asOptions) : elementProps;

      var _element = useCreateElement$1(as, allProps);

      if (wrapElement) {
        return wrapElement(_element);
      }

      return _element;
    }

    return useCreateElement$1(as, _objectSpread2$1({
      ref: ref
    }, props));
  };

  if (process.env.NODE_ENV !== "production" && useHook) {
    Comp.displayName = useHook.name.replace(/^(unstable_)?use/, "");
  }

  Comp = forwardRef$1(Comp);

  if (shouldMemo) {
    Comp = memo(Comp, propsAreEqual);
  }

  Comp.__keys = keys;
  Comp.unstable_propsAreEqual = propsAreEqual || shallowEqual;
  return Comp;
}

/**
 * React custom hook that returns the value of any token defined in the
 * SystemContext. It's mainly used internally in [`useOptions`](#useoptions)
 * and [`useProps`](#useprops).
 *
 * @example
 * import { SystemProvider, useToken } from "reakit-system";
 *
 * const system = {
 *   token: "value",
 * };
 *
 * function Component(props) {
 *   const token = useToken("token", "default value");
 *   return <div {...props}>{token}</div>;
 * }
 *
 * function App() {
 *   return (
 *     <SystemProvider unstable_system={system}>
 *       <Component />
 *     </SystemProvider>
 *   );
 * }
 */

function useToken(token, defaultValue) {
  React.useDebugValue(token);
  var context = React.useContext(SystemContext);
  return context[token] != null ? context[token] : defaultValue;
}

/**
 * React custom hook that returns the props returned by a given
 * `use${name}Props` in the SystemContext.
 *
 * @example
 * import { SystemProvider, useProps } from "reakit-system";
 *
 * const system = {
 *   useAProps(options, htmlProps) {
 *     return {
 *       ...htmlProps,
 *       href: options.url,
 *     };
 *   },
 * };
 *
 * function A({ url, ...htmlProps }) {
 *   const props = useProps("A", { url }, htmlProps);
 *   return <a {...props} />;
 * }
 *
 * function App() {
 *   return (
 *     <SystemProvider unstable_system={system}>
 *       <A url="url">It will convert url into href in useAProps</A>
 *     </SystemProvider>
 *   );
 * }
 */

function useProps(name, options, htmlProps) {
  if (options === void 0) {
    options = {};
  }

  if (htmlProps === void 0) {
    htmlProps = {};
  }

  var hookName = "use" + name + "Props";
  React.useDebugValue(hookName);
  var useHook = useToken(hookName);

  if (useHook) {
    return useHook(options, htmlProps);
  }

  return htmlProps;
}

/**
 * React custom hook that returns the options returned by a given
 * `use${name}Options` in the SystemContext.
 *
 * @example
 * import React from "react";
 * import { SystemProvider, useOptions } from "reakit-system";
 *
 * const system = {
 *   useAOptions(options, htmlProps) {
 *     return {
 *       ...options,
 *       url: htmlProps.href,
 *     };
 *   },
 * };
 *
 * function A({ url, ...htmlProps }) {
 *   const options = useOptions("A", { url }, htmlProps);
 *   return <a href={options.url} {...htmlProps} />;
 * }
 *
 * function App() {
 *   return (
 *     <SystemProvider unstable_system={system}>
 *       <A href="url">
 *         It will convert href into url in useAOptions and then url into href in A
 *       </A>
 *     </SystemProvider>
 *   );
 * }
 */

function useOptions(name, options, htmlProps) {
  if (options === void 0) {
    options = {};
  }

  if (htmlProps === void 0) {
    htmlProps = {};
  }

  var hookName = "use" + name + "Options";
  React.useDebugValue(hookName);
  var useHook = useToken(hookName);

  if (useHook) {
    return _objectSpread2$1(_objectSpread2$1({}, options), useHook(options, htmlProps));
  }

  return options;
}

/**
 * Transforms `arg` into an array if it's not already.
 *
 * @example
 * import { toArray } from "reakit-utils";
 *
 * toArray("a"); // ["a"]
 * toArray(["a"]); // ["a"]
 */
function toArray(arg) {
  if (Array.isArray(arg)) {
    return arg;
  }

  return typeof arg !== "undefined" ? [arg] : [];
}

/**
 * Creates a React custom hook that will return component props.
 *
 * @example
 * import { createHook } from "reakit-system";
 *
 * const useA = createHook({
 *   name: "A",
 *   keys: ["url"], // custom props/options keys
 *   useProps(options, htmlProps) {
 *     return {
 *       ...htmlProps,
 *       href: options.url,
 *     };
 *   },
 * });
 *
 * function A({ url, ...htmlProps }) {
 *   const props = useA({ url }, htmlProps);
 *   return <a {...props} />;
 * }
 *
 * @param options
 */
function createHook(options) {
  var _options$useState, _composedHooks$;

  var composedHooks = toArray(options.compose);

  var __useOptions = function __useOptions(hookOptions, htmlProps) {
    // Call the current hook's useOptions first
    if (options.useOptions) {
      hookOptions = options.useOptions(hookOptions, htmlProps);
    } // If there's name, call useOptions from the system context


    if (options.name) {
      hookOptions = useOptions(options.name, hookOptions, htmlProps);
    } // Run composed hooks useOptions


    if (options.compose) {
      for (var _iterator = _createForOfIteratorHelperLoose$1(composedHooks), _step; !(_step = _iterator()).done;) {
        var hook = _step.value;
        hookOptions = hook.__useOptions(hookOptions, htmlProps);
      }
    }

    return hookOptions;
  };

  var useHook = function useHook(hookOptions, htmlProps, unstable_ignoreUseOptions) {
    if (hookOptions === void 0) {
      hookOptions = {};
    }

    if (htmlProps === void 0) {
      htmlProps = {};
    }

    if (unstable_ignoreUseOptions === void 0) {
      unstable_ignoreUseOptions = false;
    }

    // This won't execute when useHook was called from within another useHook
    if (!unstable_ignoreUseOptions) {
      hookOptions = __useOptions(hookOptions, htmlProps);
    } // Call the current hook's useProps


    if (options.useProps) {
      htmlProps = options.useProps(hookOptions, htmlProps);
    } // If there's name, call useProps from the system context


    if (options.name) {
      htmlProps = useProps(options.name, hookOptions, htmlProps);
    }

    if (options.compose) {
      if (options.useComposeOptions) {
        hookOptions = options.useComposeOptions(hookOptions, htmlProps);
      }

      if (options.useComposeProps) {
        htmlProps = options.useComposeProps(hookOptions, htmlProps);
      } else {
        for (var _iterator2 = _createForOfIteratorHelperLoose$1(composedHooks), _step2; !(_step2 = _iterator2()).done;) {
          var hook = _step2.value;
          htmlProps = hook(hookOptions, htmlProps, true);
        }
      }
    } // Remove undefined values from htmlProps


    var finalHTMLProps = {};
    var definedHTMLProps = htmlProps || {};

    for (var prop in definedHTMLProps) {
      if (definedHTMLProps[prop] !== undefined) {
        finalHTMLProps[prop] = definedHTMLProps[prop];
      }
    }

    return finalHTMLProps;
  };

  useHook.__useOptions = __useOptions;
  var composedKeys = composedHooks.reduce(function (keys, hook) {
    keys.push.apply(keys, hook.__keys || []);
    return keys;
  }, []); // It's used by createComponent to split option props (keys) and html props

  useHook.__keys = [].concat(composedKeys, ((_options$useState = options.useState) === null || _options$useState === void 0 ? void 0 : _options$useState.__keys) || [], options.keys || []);
  useHook.unstable_propsAreEqual = options.propsAreEqual || ((_composedHooks$ = composedHooks[0]) === null || _composedHooks$ === void 0 ? void 0 : _composedHooks$.unstable_propsAreEqual) || shallowEqual;

  if (process.env.NODE_ENV !== "production" && options.name) {
    Object.defineProperty(useHook, "name", {
      value: "use" + options.name
    });
  }

  return useHook;
}

// Automatically generated
var BOX_KEYS = ["unstable_system"];

var useBox = createHook({
  name: "Box",
  keys: BOX_KEYS,
  propsAreEqual: function propsAreEqual(prev, next) {
    var prevSystem = prev.unstable_system,
        prevProps = _objectWithoutPropertiesLoose$4v(prev, ["unstable_system"]);

    var nextSystem = next.unstable_system,
        nextProps = _objectWithoutPropertiesLoose$4v(next, ["unstable_system"]);

    if (prevSystem !== nextSystem && !shallowEqual(prevSystem, nextSystem)) {
      return false;
    }

    return shallowEqual(prevProps, nextProps);
  }
});
createComponent({
  as: "div",
  useHook: useBox
});

// https://github.com/mui-org/material-ui/blob/2bcc874cf07b81202968f769cb9c2398c7c11311/packages/material-ui/src/utils/useForkRef.js

function setRef(ref, value) {
  if (value === void 0) {
    value = null;
  }

  if (!ref) return;

  if (typeof ref === "function") {
    ref(value);
  } else {
    ref.current = value;
  }
}
/**
 * Merges up to two React Refs into a single memoized function React Ref so you
 * can pass it to an element.
 *
 * @example
 * import React from "react";
 * import { useForkRef } from "reakit-utils";
 *
 * const Component = React.forwardRef((props, ref) => {
 *   const internalRef = React.useRef();
 *   return <div {...props} ref={useForkRef(internalRef, ref)} />;
 * });
 */


function useForkRef(refA, refB) {
  return React.useMemo(function () {
    if (refA == null && refB == null) {
      return null;
    }

    return function (value) {
      setRef(refA, value);
      setRef(refB, value);
    };
  }, [refA, refB]);
}

var buttonInputTypes = ["button", "color", "file", "image", "reset", "submit"];
/**
 * Checks whether `element` is a native HTML button element.
 *
 * @example
 * import { isButton } from "reakit-utils";
 *
 * isButton(document.querySelector("button")); // true
 * isButton(document.querySelector("input[type='button']")); // true
 * isButton(document.querySelector("div")); // false
 * isButton(document.querySelector("input[type='text']")); // false
 * isButton(document.querySelector("div[role='button']")); // false
 *
 * @returns {boolean}
 */

function isButton(element) {
  if (element.tagName === "BUTTON") return true;

  if (element.tagName === "INPUT") {
    var input = element;
    return buttonInputTypes.indexOf(input.type) !== -1;
  }

  return false;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}

/**
 * Transforms an array with multiple levels into a flattened one.
 *
 * @example
 * import { flatten } from "reakit-utils";
 *
 * flatten([0, 1, [2, [3, 4], 5], 6]);
 * // => [0, 1, 2, 3, 4, 5, 6]
 */
function flatten$1(array) {
  var flat = [];

  for (var _iterator = _createForOfIteratorHelperLoose(array), _step; !(_step = _iterator()).done;) {
    var maybeArray = _step.value;

    if (Array.isArray(maybeArray)) {
      flat.push.apply(flat, flatten$1(maybeArray));
    } else {
      flat.push(maybeArray);
    }
  }

  return flat;
}

/**
 * Logs `messages` to the console using `console.warn` based on a `condition`.
 *
 * @example
 * import { warning } from "reakit-warning";
 *
 * warning(true, "a", "b"); // console.warn("a", "\n", "b")
 * warning(false, "a", "b"); // does nothing
 */

function warning$1(condition) {
  if (process.env.NODE_ENV !== "production") {
    var _console;

    if (!condition) return;

    for (var _len = arguments.length, messages = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      messages[_key - 1] = arguments[_key];
    }

    var warns = flatten$1(messages.map(function (message) {
      return [message, "\n"];
    })); // eslint-disable-next-line no-console

    (_console = console).warn.apply(_console, warns.slice(0, -1)); // Throwing an error and catching it immediately to improve debugging
    // A consumer can use 'pause on caught exceptions'
    // https://github.com/facebook/react/issues/4216


    try {
      throw Error(warns.join(""));
    } catch (x) {// do nothing
    }
  }
}

/**
 * Checks whether `arg` is an object or not.
 *
 * @returns {boolean}
 */
function isObject(arg) {
  return typeof arg === "object" && arg != null;
}

function isRefObject(ref) {
  return isObject(ref) && "current" in ref;
}
/**
 * Logs `messages` to the console using `console.warn` based on a `condition`.
 * This should be used inside components.
 */


function useWarning(condition) {
  for (var _len = arguments.length, messages = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    messages[_key - 1] = arguments[_key];
  }

  if (process.env.NODE_ENV !== "production") {
    React.useEffect(function () {
      process.env.NODE_ENV !== "production" ? warning$1.apply(void 0, [condition].concat(messages.map(function (message) {
        return isRefObject(message) ? message.current : message;
      }))) : void 0;
    }, [condition]);
  }
}

/**
 * Returns `element.ownerDocument || document`.
 */
function getDocument(element) {
  return element ? element.ownerDocument || element : document;
}

// Thanks to Fluent UI for doing the [research on IE11 memery leak](https://github.com/microsoft/fluentui/pull/9010#issuecomment-490768427)

var _window; // Note: Accessing "window" in IE11 is somewhat expensive, and calling "typeof window"
// hits a memory leak, whereas aliasing it and calling "typeof _window" does not.
// Caching the window value at the file scope lets us minimize the impact.


try {
  _window = window;
} catch (e) {
  /* no-op */
}
/**
 * Returns `element.ownerDocument.defaultView || window`.
 */


function getWindow(element) {
  if (!element) {
    return _window;
  }

  return getDocument(element).defaultView || _window;
}

function checkIsBrowser() {
  var _window = getWindow();

  return Boolean(typeof _window !== "undefined" && _window.document && _window.document.createElement);
}
/**
 * It's `true` if it is running in a browser environment or `false` if it is not (SSR).
 *
 * @example
 * import { canUseDOM } from "reakit-utils";
 *
 * const title = canUseDOM ? document.title : "";
 */


var canUseDOM$1 = checkIsBrowser();

/**
 * `React.useLayoutEffect` that fallbacks to `React.useEffect` on server side
 * rendering.
 */

var useIsomorphicEffect = !canUseDOM$1 ? React.useEffect : React.useLayoutEffect;

/**
 * A `React.Ref` that keeps track of the passed `value`.
 */

function useLiveRef(value) {
  var ref = React.useRef(value);
  useIsomorphicEffect(function () {
    ref.current = value;
  });
  return ref;
}

/**
 * Returns `true` if `event.target` and `event.currentTarget` are the same.
 */
function isSelfTarget(event) {
  return event.target === event.currentTarget;
}

/**
 * Returns `element.ownerDocument.activeElement`.
 */

function getActiveElement(element) {
  var _getDocument = getDocument(element),
      activeElement = _getDocument.activeElement;

  if (!(activeElement === null || activeElement === void 0 ? void 0 : activeElement.nodeName)) {
    // In IE11, activeElement might be an empty object if we're interacting
    // with elements inside of an iframe.
    return null;
  }

  return activeElement;
}

/**
 * Similar to `Element.prototype.contains`, but a little bit faster when
 * `element` is the same as `child`.
 *
 * @example
 * import { contains } from "reakit-utils";
 *
 * contains(document.getElementById("parent"), document.getElementById("child"));
 */
function contains(parent, child) {
  return parent === child || parent.contains(child);
}

/**
 * Checks if `element` has focus within. Elements that are referenced by
 * `aria-activedescendant` are also considered.
 *
 * @example
 * import { hasFocusWithin } from "reakit-utils";
 *
 * hasFocusWithin(document.getElementById("id"));
 */

function hasFocusWithin(element) {
  var activeElement = getActiveElement(element);
  if (!activeElement) return false;
  if (contains(element, activeElement)) return true;
  var activeDescendant = activeElement.getAttribute("aria-activedescendant");
  if (!activeDescendant) return false;
  if (activeDescendant === element.id) return true;
  return !!element.querySelector("#" + activeDescendant);
}

/**
 * Returns `true` if `event` has been fired within a React Portal element.
 */

function isPortalEvent(event) {
  return !contains(event.currentTarget, event.target);
}

/**
 * Ponyfill for `Element.prototype.matches`
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
 */
function matches(element, selectors) {
  if ("matches" in element) {
    return element.matches(selectors);
  }

  if ("msMatchesSelector" in element) {
    return element.msMatchesSelector(selectors);
  }

  return element.webkitMatchesSelector(selectors);
}

/**
 * Ponyfill for `Element.prototype.closest`
 *
 * @example
 * import { closest } from "reakit-utils";
 *
 * closest(document.getElementById("id"), "div");
 * // same as
 * document.getElementById("id").closest("div");
 */
function closest(element, selectors) {
  if ("closest" in element) return element.closest(selectors);

  do {
    if (matches(element, selectors)) return element;
    element = element.parentElement || element.parentNode;
  } while (element !== null && element.nodeType === 1);

  return null;
}

/** @module tabbable */
var selector = "input:not([type='hidden']):not([disabled]), select:not([disabled]), " + "textarea:not([disabled]), a[href], button:not([disabled]), [tabindex], " + "iframe, object, embed, area[href], audio[controls], video[controls], " + "[contenteditable]:not([contenteditable='false'])";

function isVisible(element) {
  var htmlElement = element;
  return htmlElement.offsetWidth > 0 || htmlElement.offsetHeight > 0 || element.getClientRects().length > 0;
}
/**
 * Checks whether `element` is focusable or not.
 *
 * @memberof tabbable
 *
 * @example
 * import { isFocusable } from "reakit-utils";
 *
 * isFocusable(document.querySelector("input")); // true
 * isFocusable(document.querySelector("input[tabindex='-1']")); // true
 * isFocusable(document.querySelector("input[hidden]")); // false
 * isFocusable(document.querySelector("input:disabled")); // false
 */


function isFocusable(element) {
  return matches(element, selector) && isVisible(element);
}
/**
 * Returns the closest focusable element.
 *
 * @memberof tabbable
 *
 * @param {Element} container
 *
 * @returns {Element|null}
 */

function getClosestFocusable(element) {
  while (element && !isFocusable(element)) {
    element = closest(element, selector);
  }

  return element;
}

// Automatically generated
var TABBABLE_KEYS = ["disabled", "focusable"];

function isUA(string) {
  if (!canUseDOM$1) return false;
  return window.navigator.userAgent.indexOf(string) !== -1;
}

var isSafariOrFirefoxOnMac = isUA("Mac") && !isUA("Chrome") && (isUA("Safari") || isUA("Firefox"));

function focusIfNeeded(element) {
  if (!hasFocusWithin(element)) {
    element.focus();
  }
} // Safari and Firefox on MacOS don't focus on buttons on mouse down like other
// browsers/platforms. Instead, they focus on the closest focusable ancestor
// element, which is ultimately the body element. So we make sure to give focus
// to the tabbable element on mouse down so it works consistently across
// browsers.
// istanbul ignore next


function useFocusOnMouseDown() {
  if (!isSafariOrFirefoxOnMac) return undefined;

  var _React$useState = React.useState(null),
      tabbable = _React$useState[0],
      scheduleFocus = _React$useState[1];

  React.useEffect(function () {
    if (!tabbable) return;
    focusIfNeeded(tabbable);
    scheduleFocus(null);
  }, [tabbable]);
  var onMouseDown = React.useCallback(function (event) {
    var element = event.currentTarget;
    if (isPortalEvent(event)) return;
    if (!isButton(element)) return;
    var activeElement = getActiveElement(element);
    if (!activeElement) return;
    var activeElementIsBody = activeElement.tagName === "BODY";
    var focusableAncestor = getClosestFocusable(element.parentElement);

    if (activeElement === focusableAncestor || activeElementIsBody && !focusableAncestor) {
      // When the active element is the focusable ancestor, it'll not emit
      // focus/blur events. After all, it's already focused. So we can't
      // listen to those events to focus this tabbable element.
      // When the active element is body and there's no focusable ancestor,
      // we also don't have any other event to listen to since body never
      // emits focus/blur events on itself.
      // In both of these cases, we have to schedule focus on this tabbable
      // element.
      scheduleFocus(element);
    } else if (focusableAncestor) {
      // Clicking (mouse down) on the tabbable element on Safari and Firefox
      // on MacOS will fire focus on the focusable ancestor element if
      // there's any and if it's not the current active element. So we wait
      // for this event to happen before moving focus to this element.
      // Instead of moving focus right away, we have to schedule it,
      // otherwise it's gonna prevent drag events from happening.
      var onFocus = function onFocus() {
        return scheduleFocus(element);
      };

      focusableAncestor.addEventListener("focusin", onFocus, {
        once: true
      });
    } else {
      // Finally, if there's no focsuable ancestor and there's another
      // element with focus, we wait for that element to get blurred before
      // focusing this one.
      var onBlur = function onBlur() {
        return focusIfNeeded(element);
      };

      activeElement.addEventListener("blur", onBlur, {
        once: true
      });
    }
  }, []);
  return onMouseDown;
}

function isNativeTabbable(element) {
  return element.tagName === "BUTTON" || element.tagName === "INPUT" || element.tagName === "SELECT" || element.tagName === "TEXTAREA" || element.tagName === "A";
}

function supportsDisabledAttribute(element) {
  return element.tagName === "BUTTON" || element.tagName === "INPUT" || element.tagName === "SELECT" || element.tagName === "TEXTAREA";
}

function getTabIndex(trulyDisabled, nativeTabbable, supportsDisabled, htmlTabIndex) {
  if (trulyDisabled) {
    if (nativeTabbable && !supportsDisabled) {
      // Anchor, audio and video tags don't support the `disabled` attribute.
      // We must pass tabIndex={-1} so they don't receive focus on tab.
      return -1;
    } // Elements that support the `disabled` attribute don't need tabIndex.


    return undefined;
  }

  if (nativeTabbable) {
    // If the element is enabled and it's natively tabbable, we don't need to
    // specify a tabIndex attribute unless it's explicitly set by the user.
    return htmlTabIndex;
  } // If the element is enabled and is not natively tabbable, we have to
  // fallback tabIndex={0}.


  return htmlTabIndex || 0;
}

function useDisableEvent(htmlEventRef, disabled) {
  return React.useCallback(function (event) {
    var _htmlEventRef$current;

    (_htmlEventRef$current = htmlEventRef.current) === null || _htmlEventRef$current === void 0 ? void 0 : _htmlEventRef$current.call(htmlEventRef, event);
    if (event.defaultPrevented) return;

    if (disabled) {
      event.stopPropagation();
      event.preventDefault();
    }
  }, [htmlEventRef, disabled]);
}

var useTabbable = createHook({
  name: "Tabbable",
  compose: useBox,
  keys: TABBABLE_KEYS,
  useOptions: function useOptions(options, _ref) {
    var disabled = _ref.disabled;
    return _objectSpread2$2({
      disabled: disabled
    }, options);
  },
  useProps: function useProps(options, _ref2) {
    var htmlRef = _ref2.ref,
        htmlTabIndex = _ref2.tabIndex,
        htmlOnClickCapture = _ref2.onClickCapture,
        htmlOnMouseDownCapture = _ref2.onMouseDownCapture,
        htmlOnMouseDown = _ref2.onMouseDown,
        htmlOnKeyPressCapture = _ref2.onKeyPressCapture,
        htmlStyle = _ref2.style,
        htmlProps = _objectWithoutPropertiesLoose$4v(_ref2, ["ref", "tabIndex", "onClickCapture", "onMouseDownCapture", "onMouseDown", "onKeyPressCapture", "style"]);

    var ref = React.useRef(null);
    var onClickCaptureRef = useLiveRef(htmlOnClickCapture);
    var onMouseDownCaptureRef = useLiveRef(htmlOnMouseDownCapture);
    var onMouseDownRef = useLiveRef(htmlOnMouseDown);
    var onKeyPressCaptureRef = useLiveRef(htmlOnKeyPressCapture);
    var trulyDisabled = !!options.disabled && !options.focusable;

    var _React$useState2 = React.useState(true),
        nativeTabbable = _React$useState2[0],
        setNativeTabbable = _React$useState2[1];

    var _React$useState3 = React.useState(true),
        supportsDisabled = _React$useState3[0],
        setSupportsDisabled = _React$useState3[1];

    var style = options.disabled ? _objectSpread2$2({
      pointerEvents: "none"
    }, htmlStyle) : htmlStyle;
    var focusOnMouseDown = useFocusOnMouseDown();
    useIsomorphicEffect(function () {
      var tabbable = ref.current;

      if (!tabbable) {
        process.env.NODE_ENV !== "production" ? warning$1(true, "Can't determine if the element is a native tabbable element because `ref` wasn't passed to the component.", "See https://reakit.io/docs/tabbable") : void 0;
        return;
      }

      if (!isNativeTabbable(tabbable)) {
        setNativeTabbable(false);
      }

      if (!supportsDisabledAttribute(tabbable)) {
        setSupportsDisabled(false);
      }
    }, []);
    var onClickCapture = useDisableEvent(onClickCaptureRef, options.disabled);
    var onMouseDownCapture = useDisableEvent(onMouseDownCaptureRef, options.disabled);
    var onKeyPressCapture = useDisableEvent(onKeyPressCaptureRef, options.disabled);
    var onMouseDown = React.useCallback(function (event) {
      var _onMouseDownRef$curre;

      (_onMouseDownRef$curre = onMouseDownRef.current) === null || _onMouseDownRef$curre === void 0 ? void 0 : _onMouseDownRef$curre.call(onMouseDownRef, event);
      if (event.defaultPrevented) return;
      focusOnMouseDown === null || focusOnMouseDown === void 0 ? void 0 : focusOnMouseDown(event);
    }, [options.disabled, focusOnMouseDown]);
    return _objectSpread2$2({
      ref: useForkRef(ref, htmlRef),
      style: style,
      tabIndex: getTabIndex(trulyDisabled, nativeTabbable, supportsDisabled, htmlTabIndex),
      disabled: trulyDisabled && supportsDisabled ? true : undefined,
      "aria-disabled": options.disabled ? true : undefined,
      onClickCapture: onClickCapture,
      onMouseDownCapture: onMouseDownCapture,
      onMouseDown: onMouseDown,
      onKeyPressCapture: onKeyPressCapture
    }, htmlProps);
  }
});
createComponent({
  as: "div",
  useHook: useTabbable
});

// Automatically generated
var CLICKABLE_KEYS = ["unstable_clickOnEnter", "unstable_clickOnSpace"];

function isNativeClick(event) {
  var element = event.currentTarget;
  if (!event.isTrusted) return false; // istanbul ignore next: can't test trusted events yet

  return isButton(element) || element.tagName === "INPUT" || element.tagName === "TEXTAREA" || element.tagName === "A" || element.tagName === "SELECT";
}

var useClickable = createHook({
  name: "Clickable",
  compose: useTabbable,
  keys: CLICKABLE_KEYS,
  useOptions: function useOptions(_ref) {
    var _ref$unstable_clickOn = _ref.unstable_clickOnEnter,
        unstable_clickOnEnter = _ref$unstable_clickOn === void 0 ? true : _ref$unstable_clickOn,
        _ref$unstable_clickOn2 = _ref.unstable_clickOnSpace,
        unstable_clickOnSpace = _ref$unstable_clickOn2 === void 0 ? true : _ref$unstable_clickOn2,
        options = _objectWithoutPropertiesLoose$4v(_ref, ["unstable_clickOnEnter", "unstable_clickOnSpace"]);

    return _objectSpread2$2({
      unstable_clickOnEnter: unstable_clickOnEnter,
      unstable_clickOnSpace: unstable_clickOnSpace
    }, options);
  },
  useProps: function useProps(options, _ref2) {
    var htmlOnKeyDown = _ref2.onKeyDown,
        htmlOnKeyUp = _ref2.onKeyUp,
        htmlProps = _objectWithoutPropertiesLoose$4v(_ref2, ["onKeyDown", "onKeyUp"]);

    var _React$useState = React.useState(false),
        active = _React$useState[0],
        setActive = _React$useState[1];

    var onKeyDownRef = useLiveRef(htmlOnKeyDown);
    var onKeyUpRef = useLiveRef(htmlOnKeyUp);
    var onKeyDown = React.useCallback(function (event) {
      var _onKeyDownRef$current;

      (_onKeyDownRef$current = onKeyDownRef.current) === null || _onKeyDownRef$current === void 0 ? void 0 : _onKeyDownRef$current.call(onKeyDownRef, event);
      if (event.defaultPrevented) return;
      if (options.disabled) return;
      if (event.metaKey) return;
      if (!isSelfTarget(event)) return;
      var isEnter = options.unstable_clickOnEnter && event.key === "Enter";
      var isSpace = options.unstable_clickOnSpace && event.key === " ";

      if (isEnter || isSpace) {
        if (isNativeClick(event)) return;
        event.preventDefault();

        if (isEnter) {
          event.currentTarget.click();
        } else if (isSpace) {
          setActive(true);
        }
      }
    }, [options.disabled, options.unstable_clickOnEnter, options.unstable_clickOnSpace]);
    var onKeyUp = React.useCallback(function (event) {
      var _onKeyUpRef$current;

      (_onKeyUpRef$current = onKeyUpRef.current) === null || _onKeyUpRef$current === void 0 ? void 0 : _onKeyUpRef$current.call(onKeyUpRef, event);
      if (event.defaultPrevented) return;
      if (options.disabled) return;
      if (event.metaKey) return;
      var isSpace = options.unstable_clickOnSpace && event.key === " ";

      if (active && isSpace) {
        setActive(false);
        event.currentTarget.click();
      }
    }, [options.disabled, options.unstable_clickOnSpace, active]);
    return _objectSpread2$2({
      "data-active": active || undefined,
      onKeyDown: onKeyDown,
      onKeyUp: onKeyUp
    }, htmlProps);
  }
});
var Clickable = createComponent({
  as: "button",
  memo: true,
  useHook: useClickable
});

/**
 * Immutably removes an index from an array.
 *
 * @example
 * import { removeIndexFromArray } from "reakit-utils";
 *
 * removeIndexFromArray(["a", "b", "c"], 1); // ["a", "c"]
 *
 * @returns {Array} A new array without the item in the passed index.
 */
function removeIndexFromArray(array, index) {
  if (index === -1) return array;
  return [].concat(array.slice(0, index), array.slice(index + 1));
}

/**
 * Creates an `Event` in a way that also works on IE 11.
 *
 * @example
 * import { createEvent } from "reakit-utils";
 *
 * const el = document.getElementById("id");
 * el.dispatchEvent(createEvent(el, "blur", { bubbles: false }));
 */

function createEvent(element, type, eventInit) {
  if (typeof Event === "function") {
    return new Event(type, eventInit);
  } // IE 11 doesn't support Event constructors


  var event = getDocument(element).createEvent("Event");
  event.initEvent(type, eventInit === null || eventInit === void 0 ? void 0 : eventInit.bubbles, eventInit === null || eventInit === void 0 ? void 0 : eventInit.cancelable);
  return event;
}

// Automatically generated
var CHECKBOX_STATE_KEYS = ["state", "setState"];
var CHECKBOX_KEYS = [].concat(CHECKBOX_STATE_KEYS, ["value", "checked"]);

function getChecked$1(options) {
  if (typeof options.checked !== "undefined") {
    return options.checked;
  }

  if (typeof options.value === "undefined") {
    return !!options.state;
  }

  var state = Array.isArray(options.state) ? options.state : [];
  return state.indexOf(options.value) !== -1;
}

function fireChange$1(element, onChange) {
  var event = createEvent(element, "change");
  Object.defineProperties(event, {
    type: {
      value: "change"
    },
    target: {
      value: element
    },
    currentTarget: {
      value: element
    }
  });
  onChange === null || onChange === void 0 ? void 0 : onChange(event);
}

function useIndeterminateState(ref, options) {
  React.useEffect(function () {
    var element = ref.current;

    if (!element) {
      process.env.NODE_ENV !== "production" ? warning$1(options.state === "indeterminate", "Can't set indeterminate state because `ref` wasn't passed to component.", "See https://reakit.io/docs/checkbox/#indeterminate-state") : void 0;
      return;
    }

    if (options.state === "indeterminate") {
      element.indeterminate = true;
    } else if (element.indeterminate) {
      element.indeterminate = false;
    }
  }, [options.state, ref]);
}

var useCheckbox = createHook({
  name: "Checkbox",
  compose: useClickable,
  keys: CHECKBOX_KEYS,
  useOptions: function useOptions(_ref, _ref2) {
    var value = _ref2.value,
        checked = _ref2.checked;

    var _ref$unstable_clickOn = _ref.unstable_clickOnEnter,
        unstable_clickOnEnter = _ref$unstable_clickOn === void 0 ? false : _ref$unstable_clickOn,
        options = _objectWithoutPropertiesLoose$4v(_ref, ["unstable_clickOnEnter"]);

    return _objectSpread2$2({
      unstable_clickOnEnter: unstable_clickOnEnter,
      value: value,
      checked: getChecked$1(_objectSpread2$2({
        checked: checked
      }, options))
    }, options);
  },
  useProps: function useProps(options, _ref3) {
    var htmlRef = _ref3.ref,
        htmlOnChange = _ref3.onChange,
        htmlOnClick = _ref3.onClick,
        htmlProps = _objectWithoutPropertiesLoose$4v(_ref3, ["ref", "onChange", "onClick"]);

    var ref = React.useRef(null);

    var _React$useState = React.useState(true),
        isNativeCheckbox = _React$useState[0],
        setIsNativeCheckbox = _React$useState[1];

    var onChangeRef = useLiveRef(htmlOnChange);
    var onClickRef = useLiveRef(htmlOnClick);
    React.useEffect(function () {
      var element = ref.current;

      if (!element) {
        process.env.NODE_ENV !== "production" ? warning$1(true, "Can't determine whether the element is a native checkbox because `ref` wasn't passed to the component", "See https://reakit.io/docs/checkbox") : void 0;
        return;
      }

      if (element.tagName !== "INPUT" || element.type !== "checkbox") {
        setIsNativeCheckbox(false);
      }
    }, []);
    useIndeterminateState(ref, options);
    var onChange = React.useCallback(function (event) {
      var element = event.currentTarget;

      if (options.disabled) {
        event.stopPropagation();
        event.preventDefault();
        return;
      }

      if (onChangeRef.current) {
        // If component is NOT rendered as a native input, it will not have
        // the `checked` property. So we assign it for consistency.
        if (!isNativeCheckbox) {
          element.checked = !element.checked;
        }

        onChangeRef.current(event);
      }

      if (!options.setState) return;

      if (typeof options.value === "undefined") {
        options.setState(!options.checked);
      } else {
        var state = Array.isArray(options.state) ? options.state : [];
        var index = state.indexOf(options.value);

        if (index === -1) {
          options.setState([].concat(state, [options.value]));
        } else {
          options.setState(removeIndexFromArray(state, index));
        }
      }
    }, [options.disabled, isNativeCheckbox, options.setState, options.value, options.checked, options.state]);
    var onClick = React.useCallback(function (event) {
      var _onClickRef$current;

      (_onClickRef$current = onClickRef.current) === null || _onClickRef$current === void 0 ? void 0 : _onClickRef$current.call(onClickRef, event);
      if (event.defaultPrevented) return;
      if (isNativeCheckbox) return;
      fireChange$1(event.currentTarget, onChange);
    }, [isNativeCheckbox, onChange]);
    return _objectSpread2$2({
      ref: useForkRef(ref, htmlRef),
      role: !isNativeCheckbox ? "checkbox" : undefined,
      type: isNativeCheckbox ? "checkbox" : undefined,
      value: isNativeCheckbox ? options.value : undefined,
      checked: options.checked,
      "aria-checked": options.state === "indeterminate" ? "mixed" : options.checked,
      onChange: onChange,
      onClick: onClick
    }, htmlProps);
  }
});
var Checkbox$1 = createComponent({
  as: "input",
  memo: true,
  useHook: useCheckbox
});

var Checkbox = function Checkbox(_ref) {
  var label = _ref.label,
      className = _ref.className,
      props = _objectWithoutProperties$4v(_ref, ["label", "className"]);

  return /*#__PURE__*/React__default['default'].createElement("label", {
    className: "checkbox--wrapper ".concat(className)
  }, /*#__PURE__*/React__default['default'].createElement(Checkbox$1, _extends$4w({
    className: "checkbox"
  }, props)), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "checkbox--label"
  }, label));
};
Checkbox.propTypes = {
  className: propTypes.string
};

var Chip = function Chip(_ref) {
  var label = _ref.label,
      color = _ref.color,
      isSmall = _ref.isSmall,
      onClick = _ref.onClick,
      className = _ref.className,
      props = _objectWithoutProperties$4v(_ref, ["label", "color", "isSmall", "onClick", "className"]);

  var chipClasses = classnames('chip', "chip--".concat(color), className, {
    'chip--small': isSmall
  });
  return /*#__PURE__*/React__default['default'].createElement("span", _extends$4w({
    className: chipClasses
  }, props), label, /*#__PURE__*/React__default['default'].createElement(Icon$1.Icon, {
    as: "X",
    color: color,
    variant: "clickable",
    isRounded: true,
    size: 5,
    padding: 1,
    className: "ml-0.5",
    onClick: onClick
  }));
};
Chip.defaultProps = {
  color: 'blue',
  className: '',
  isSmall: false
};
Chip.propTypes = {
  color: propTypes.string,
  isSmall: propTypes.bool,
  onClick: propTypes.func,
  className: propTypes.string,
  label: propTypes.string.isRequired
};

var Divider = function Divider(_ref) {
  var className = _ref.className;
      _objectWithoutProperties$4v(_ref, ["className"]);

  return /*#__PURE__*/React__default['default'].createElement("hr", {
    className: "divider ".concat(className)
  });
};
Divider.defaultProps = {
  className: ''
};
Divider.propTypes = {
  className: propTypes.string
};

var Drawer = function Drawer(_ref) {
  var hide = _ref.hide,
      isOpen = _ref.isOpen,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties$4v(_ref, ["hide", "isOpen", "children", "className"]);

  var childrenWithProps = children.map(function (child, i) {
    if ( /*#__PURE__*/React.isValidElement(child)) {
      return /*#__PURE__*/React.cloneElement(child, {
        key: "drawerchild-".concat(i),
        hide: hide
      });
    }

    return null;
  });
  return /*#__PURE__*/React__default['default'].createElement("div", {
    onClick: hide,
    className: isOpen ? 'drawer--background' : 'hidden'
  }, /*#__PURE__*/React__default['default'].createElement("div", _extends$4w({
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    variant: "frame",
    className: "drawer ".concat(isOpen ? 'animate-slide-in' : '', " ").concat(className)
  }, props), childrenWithProps));
};
Drawer.defaultProps = {
  className: ''
};
Drawer.propTypes = {
  hide: propTypes.func.isRequired,
  isOpen: propTypes.bool.isRequired,
  className: propTypes.string
};
var DrawerHeader = function DrawerHeader(_ref2) {
  var hide = _ref2.hide,
      className = _ref2.className,
      children = _ref2.children,
      props = _objectWithoutProperties$4v(_ref2, ["hide", "className", "children"]);

  return /*#__PURE__*/React__default['default'].createElement("div", _extends$4w({
    className: "drawer--header ".concat(className)
  }, props), /*#__PURE__*/React__default['default'].createElement(Icon$1.Icon, {
    as: "X",
    variant: "clickable",
    color: "blue",
    size: 10,
    padding: 2,
    isRounded: true,
    onClick: hide,
    className: "drawer--header-button"
  }), children);
};
DrawerHeader.defaultProps = {
  className: ''
};
DrawerHeader.propTypes = {
  hide: propTypes.func,
  children: propTypes.node,
  className: propTypes.string
};
var DrawerBody = function DrawerBody(_ref3) {
  _ref3.hide;
      var className = _ref3.className,
      children = _ref3.children,
      props = _objectWithoutProperties$4v(_ref3, ["hide", "className", "children"]);

  return /*#__PURE__*/React__default['default'].createElement("div", _extends$4w({
    className: "drawer--body ".concat(className)
  }, props), children);
};
DrawerBody.defaultProps = {
  className: ''
};
DrawerBody.propTypes = {
  hide: propTypes.func,
  children: propTypes.node,
  className: propTypes.string
};
var DrawerFooter = function DrawerFooter(_ref4) {
  _ref4.hide;
      var className = _ref4.className,
      children = _ref4.children,
      props = _objectWithoutProperties$4v(_ref4, ["hide", "className", "children"]);

  return /*#__PURE__*/React__default['default'].createElement("div", _extends$4w({
    className: "drawer--footer ".concat(className)
  }, props), children);
};
DrawerFooter.defaultProps = {
  className: ''
};
DrawerFooter.propTypes = {
  hide: propTypes.func,
  children: propTypes.node,
  className: propTypes.string
};

var Field = function Field(_ref) {
  var errors = _ref.errors,
      isSmall = _ref.isSmall,
      isFocused = _ref.isFocused,
      isDisabled = _ref.isDisabled,
      className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties$4v(_ref, ["errors", "isSmall", "isFocused", "isDisabled", "className", "children"]);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      focused = _useState2[0],
      setFocused = _useState2[1];

  var toggleFocus = function toggleFocus(e) {
    e.type === 'focus' ? setFocused(true) : setFocused(false);
  }; // if isFocused prop has value, assign its value to fieldFocus to control classes; otherwise, built-in state controls classes.


  var fieldFocus = typeof isFocused !== 'undefined' ? isFocused : focused;
  var childrenWithProps = children.map(function (child, i) {
    if ( /*#__PURE__*/React.isValidElement(child) && (child.type.id === 'TextField' || child.type.id === 'Select')) {
      return /*#__PURE__*/React.cloneElement(child, {
        key: "".concat(child.type.id, "-").concat(i),
        onBlur: toggleFocus,
        onFocus: toggleFocus,
        // Used in TextField index.js and Select index.js
        withElements: true,
        isDisabled: isDisabled
      });
    }

    if ( /*#__PURE__*/React.isValidElement(child) && child.type.id === 'FieldElementLeft') {
      return /*#__PURE__*/React.cloneElement(child, _objectSpread2$3({
        key: "field-element-left-".concat(i)
      }, child.props));
    }

    if ( /*#__PURE__*/React.isValidElement(child) && child.type.id === 'FieldElementRight') {
      return /*#__PURE__*/React.cloneElement(child, _objectSpread2$3({
        key: "field-element-right-".concat(i)
      }, child.props));
    }

    return child;
  });
  var fieldClasses = classnames('field', className, {
    'field--small': isSmall,
    'field--disabled': isDisabled,
    'field--focused': !isDisabled && fieldFocus && !errors,
    'field--focused--errror': !isDisabled && fieldFocus && errors
  });
  return /*#__PURE__*/React__default['default'].createElement("div", _extends$4w({
    className: fieldClasses
  }, props), childrenWithProps);
};
Field.defaultProps = {
  isSmall: false,
  isDisabled: false,
  className: ''
};
Field.propTypes = {
  errors: propTypes.string,
  isSmall: propTypes.bool,
  isFocused: propTypes.bool,
  isDisabled: propTypes.bool,
  className: propTypes.string,
  children: propTypes.node
};

var FieldElementLeft = function FieldElementLeft(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties$4v(_ref, ["children", "className"]);

  var leftElementClasses = classnames('field-element', 'field-element--left', className);
  return /*#__PURE__*/React__default['default'].createElement("div", _extends$4w({
    className: leftElementClasses
  }, props), children);
};
FieldElementLeft.id = 'FieldElementLeft';
FieldElementLeft.defaultProps = {
  className: ''
};
FieldElementLeft.propTypes = {
  children: propTypes.node,
  className: propTypes.string
};
var FieldElementRight = function FieldElementRight(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      props = _objectWithoutProperties$4v(_ref2, ["children", "className"]);

  var rightElementClasses = classnames('field-element', 'field-element--right', className);
  return /*#__PURE__*/React__default['default'].createElement("div", _extends$4w({
    className: rightElementClasses
  }, props), children);
};
FieldElementRight.id = 'FieldElementRight';
FieldElementRight.defaultProps = {
  className: ''
};
FieldElementRight.propTypes = {
  children: propTypes.node,
  className: propTypes.string
};

var FieldMessage = function FieldMessage(_ref) {
  var errors = _ref.errors,
      props = _objectWithoutProperties$4v(_ref, ["errors"]);

  if (!errors) return null;
  return /*#__PURE__*/React__default['default'].createElement("p", _extends$4w({
    className: "field-message"
  }, props), errors);
};
FieldMessage.propTypes = {
  errors: propTypes.string
};

function _extends$4v() { _extends$4v = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4v.apply(this, arguments); }

function _objectWithoutProperties$4u(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$4t(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$4t(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Activity = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$4u(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$4v({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "22 12 18 12 15 21 9 3 6 12 2 12"
  }));
});
Activity.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Activity.displayName = 'Activity';

function _extends$4u() { _extends$4u = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4u.apply(this, arguments); }

function _objectWithoutProperties$4t(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$4s(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$4s(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Airplay = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$4t(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$4u({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"
  }), /*#__PURE__*/React__default['default'].createElement("polygon", {
    points: "12 15 17 21 7 21 12 15"
  }));
});
Airplay.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Airplay.displayName = 'Airplay';

function _extends$4t() { _extends$4t = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4t.apply(this, arguments); }

function _objectWithoutProperties$4s(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$4r(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$4r(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var AlertCircle = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$4s(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$4t({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "12"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "16",
    x2: "12.01",
    y2: "16"
  }));
});
AlertCircle.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
AlertCircle.displayName = 'AlertCircle';

function _extends$4s() { _extends$4s = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4s.apply(this, arguments); }

function _objectWithoutProperties$4r(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$4q(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$4q(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var AlertOctagon = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$4r(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$4s({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polygon", {
    points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "12"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "16",
    x2: "12.01",
    y2: "16"
  }));
});
AlertOctagon.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
AlertOctagon.displayName = 'AlertOctagon';

function _extends$4r() { _extends$4r = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4r.apply(this, arguments); }

function _objectWithoutProperties$4q(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$4p(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$4p(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var AlertTriangle = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$4q(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$4r({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "9",
    x2: "12",
    y2: "13"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "17",
    x2: "12.01",
    y2: "17"
  }));
});
AlertTriangle.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
AlertTriangle.displayName = 'AlertTriangle';

function _extends$4q() { _extends$4q = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4q.apply(this, arguments); }

function _objectWithoutProperties$4p(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$4o(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$4o(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var AlignCenter = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$4p(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$4q({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "18",
    y1: "10",
    x2: "6",
    y2: "10"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "21",
    y1: "6",
    x2: "3",
    y2: "6"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "21",
    y1: "14",
    x2: "3",
    y2: "14"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "18",
    y1: "18",
    x2: "6",
    y2: "18"
  }));
});
AlignCenter.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
AlignCenter.displayName = 'AlignCenter';

function _extends$4p() { _extends$4p = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4p.apply(this, arguments); }

function _objectWithoutProperties$4o(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$4n(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$4n(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var AlignJustify = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$4o(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$4p({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "21",
    y1: "10",
    x2: "3",
    y2: "10"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "21",
    y1: "6",
    x2: "3",
    y2: "6"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "21",
    y1: "14",
    x2: "3",
    y2: "14"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "21",
    y1: "18",
    x2: "3",
    y2: "18"
  }));
});
AlignJustify.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
AlignJustify.displayName = 'AlignJustify';

function _extends$4o() { _extends$4o = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4o.apply(this, arguments); }

function _objectWithoutProperties$4n(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$4m(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$4m(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var AlignLeft = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$4n(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$4o({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "17",
    y1: "10",
    x2: "3",
    y2: "10"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "21",
    y1: "6",
    x2: "3",
    y2: "6"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "21",
    y1: "14",
    x2: "3",
    y2: "14"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "17",
    y1: "18",
    x2: "3",
    y2: "18"
  }));
});
AlignLeft.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
AlignLeft.displayName = 'AlignLeft';

function _extends$4n() { _extends$4n = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4n.apply(this, arguments); }

function _objectWithoutProperties$4m(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$4l(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$4l(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var AlignRight = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$4m(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$4n({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "21",
    y1: "10",
    x2: "7",
    y2: "10"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "21",
    y1: "6",
    x2: "3",
    y2: "6"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "21",
    y1: "14",
    x2: "3",
    y2: "14"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "21",
    y1: "18",
    x2: "7",
    y2: "18"
  }));
});
AlignRight.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
AlignRight.displayName = 'AlignRight';

function _extends$4m() { _extends$4m = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4m.apply(this, arguments); }

function _objectWithoutProperties$4l(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$4k(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$4k(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Anchor = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$4l(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$4m({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "5",
    r: "3"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "22",
    x2: "12",
    y2: "8"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5 12H2a10 10 0 0 0 20 0h-3"
  }));
});
Anchor.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Anchor.displayName = 'Anchor';

function _extends$4l() { _extends$4l = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4l.apply(this, arguments); }

function _objectWithoutProperties$4k(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$4j(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$4j(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Aperture = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$4k(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$4l({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "14.31",
    y1: "8",
    x2: "20.05",
    y2: "17.94"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "9.69",
    y1: "8",
    x2: "21.17",
    y2: "8"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "7.38",
    y1: "12",
    x2: "13.12",
    y2: "2.06"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "9.69",
    y1: "16",
    x2: "3.95",
    y2: "6.06"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "14.31",
    y1: "16",
    x2: "2.83",
    y2: "16"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "16.62",
    y1: "12",
    x2: "10.88",
    y2: "21.94"
  }));
});
Aperture.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Aperture.displayName = 'Aperture';

function _extends$4k() { _extends$4k = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4k.apply(this, arguments); }

function _objectWithoutProperties$4j(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$4i(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$4i(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Archive = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$4j(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$4k({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "21 8 21 21 3 21 3 8"
  }), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "1",
    y: "3",
    width: "22",
    height: "5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "10",
    y1: "12",
    x2: "14",
    y2: "12"
  }));
});
Archive.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Archive.displayName = 'Archive';

function _extends$4j() { _extends$4j = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4j.apply(this, arguments); }

function _objectWithoutProperties$4i(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$4h(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$4h(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ArrowDownCircle = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$4i(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$4j({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "8 12 12 16 16 12"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "16"
  }));
});
ArrowDownCircle.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ArrowDownCircle.displayName = 'ArrowDownCircle';

function _extends$4i() { _extends$4i = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4i.apply(this, arguments); }

function _objectWithoutProperties$4h(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$4g(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$4g(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ArrowDownLeft = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$4h(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$4i({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "17",
    y1: "7",
    x2: "7",
    y2: "17"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "17 17 7 17 7 7"
  }));
});
ArrowDownLeft.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ArrowDownLeft.displayName = 'ArrowDownLeft';

function _extends$4h() { _extends$4h = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4h.apply(this, arguments); }

function _objectWithoutProperties$4g(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$4f(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$4f(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ArrowDownRight = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$4g(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$4h({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "7",
    y1: "7",
    x2: "17",
    y2: "17"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "17 7 17 17 7 17"
  }));
});
ArrowDownRight.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ArrowDownRight.displayName = 'ArrowDownRight';

function _extends$4g() { _extends$4g = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4g.apply(this, arguments); }

function _objectWithoutProperties$4f(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$4e(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$4e(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ArrowDown = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$4f(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$4g({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "19"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "19 12 12 19 5 12"
  }));
});
ArrowDown.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ArrowDown.displayName = 'ArrowDown';

function _extends$4f() { _extends$4f = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4f.apply(this, arguments); }

function _objectWithoutProperties$4e(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$4d(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$4d(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ArrowLeftCircle = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$4e(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$4f({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "12 8 8 12 12 16"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "16",
    y1: "12",
    x2: "8",
    y2: "12"
  }));
});
ArrowLeftCircle.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ArrowLeftCircle.displayName = 'ArrowLeftCircle';

function _extends$4e() { _extends$4e = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4e.apply(this, arguments); }

function _objectWithoutProperties$4d(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$4c(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$4c(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ArrowLeft = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$4d(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$4e({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "19",
    y1: "12",
    x2: "5",
    y2: "12"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "12 19 5 12 12 5"
  }));
});
ArrowLeft.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ArrowLeft.displayName = 'ArrowLeft';

function _extends$4d() { _extends$4d = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4d.apply(this, arguments); }

function _objectWithoutProperties$4c(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$4b(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$4b(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ArrowRightCircle = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$4c(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$4d({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "12 16 16 12 12 8"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "8",
    y1: "12",
    x2: "16",
    y2: "12"
  }));
});
ArrowRightCircle.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ArrowRightCircle.displayName = 'ArrowRightCircle';

function _extends$4c() { _extends$4c = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4c.apply(this, arguments); }

function _objectWithoutProperties$4b(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$4a(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$4a(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ArrowRight = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$4b(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$4c({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "12 5 19 12 12 19"
  }));
});
ArrowRight.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ArrowRight.displayName = 'ArrowRight';

function _extends$4b() { _extends$4b = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4b.apply(this, arguments); }

function _objectWithoutProperties$4a(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$49(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$49(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ArrowUpCircle = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$4a(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$4b({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "16 12 12 8 8 12"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "16",
    x2: "12",
    y2: "8"
  }));
});
ArrowUpCircle.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ArrowUpCircle.displayName = 'ArrowUpCircle';

function _extends$4a() { _extends$4a = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4a.apply(this, arguments); }

function _objectWithoutProperties$49(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$48(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$48(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ArrowUpLeft = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$49(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$4a({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "17",
    y1: "17",
    x2: "7",
    y2: "7"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "7 17 7 7 17 7"
  }));
});
ArrowUpLeft.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ArrowUpLeft.displayName = 'ArrowUpLeft';

function _extends$49() { _extends$49 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$49.apply(this, arguments); }

function _objectWithoutProperties$48(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$47(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$47(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ArrowUpRight = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$48(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$49({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "7",
    y1: "17",
    x2: "17",
    y2: "7"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "7 7 17 7 17 17"
  }));
});
ArrowUpRight.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ArrowUpRight.displayName = 'ArrowUpRight';

function _extends$48() { _extends$48 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$48.apply(this, arguments); }

function _objectWithoutProperties$47(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$46(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$46(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ArrowUp = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$47(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$48({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "19",
    x2: "12",
    y2: "5"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "5 12 12 5 19 12"
  }));
});
ArrowUp.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ArrowUp.displayName = 'ArrowUp';

function _extends$47() { _extends$47 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$47.apply(this, arguments); }

function _objectWithoutProperties$46(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$45(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$45(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var AtSign = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$46(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$47({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"
  }));
});
AtSign.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
AtSign.displayName = 'AtSign';

function _extends$46() { _extends$46 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$46.apply(this, arguments); }

function _objectWithoutProperties$45(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$44(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$44(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Award = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$45(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$46({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "8",
    r: "7"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "8.21 13.89 7 23 12 20 17 23 15.79 13.88"
  }));
});
Award.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Award.displayName = 'Award';

function _extends$45() { _extends$45 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$45.apply(this, arguments); }

function _objectWithoutProperties$44(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$43(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$43(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var BarChart2 = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$44(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$45({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "18",
    y1: "20",
    x2: "18",
    y2: "10"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "20",
    x2: "12",
    y2: "4"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "6",
    y1: "20",
    x2: "6",
    y2: "14"
  }));
});
BarChart2.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
BarChart2.displayName = 'BarChart2';

function _extends$44() { _extends$44 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$44.apply(this, arguments); }

function _objectWithoutProperties$43(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$42(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$42(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var BarChart = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$43(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$44({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "20",
    x2: "12",
    y2: "10"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "18",
    y1: "20",
    x2: "18",
    y2: "4"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "6",
    y1: "20",
    x2: "6",
    y2: "16"
  }));
});
BarChart.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
BarChart.displayName = 'BarChart';

function _extends$43() { _extends$43 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$43.apply(this, arguments); }

function _objectWithoutProperties$42(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$41(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$41(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var BatteryCharging = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$42(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$43({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "23",
    y1: "13",
    x2: "23",
    y2: "11"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "11 6 7 12 13 12 9 18"
  }));
});
BatteryCharging.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
BatteryCharging.displayName = 'BatteryCharging';

function _extends$42() { _extends$42 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$42.apply(this, arguments); }

function _objectWithoutProperties$41(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$40(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$40(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Battery = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$41(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$42({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "1",
    y: "6",
    width: "18",
    height: "12",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "23",
    y1: "13",
    x2: "23",
    y2: "11"
  }));
});
Battery.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Battery.displayName = 'Battery';

function _extends$41() { _extends$41 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$41.apply(this, arguments); }

function _objectWithoutProperties$40(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3$(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3$(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var BellOff = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$40(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$41({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M13.73 21a2 2 0 0 1-3.46 0"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18.63 13A17.89 17.89 0 0 1 18 8"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18 8a6 6 0 0 0-9.33-5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "1",
    y1: "1",
    x2: "23",
    y2: "23"
  }));
});
BellOff.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
BellOff.displayName = 'BellOff';

function _extends$40() { _extends$40 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$40.apply(this, arguments); }

function _objectWithoutProperties$3$(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3_(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3_(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Bell = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3$(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$40({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M13.73 21a2 2 0 0 1-3.46 0"
  }));
});
Bell.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Bell.displayName = 'Bell';

function _extends$3$() { _extends$3$ = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3$.apply(this, arguments); }

function _objectWithoutProperties$3_(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3Z(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3Z(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Bluetooth = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3_(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3$({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"
  }));
});
Bluetooth.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Bluetooth.displayName = 'Bluetooth';

function _extends$3_() { _extends$3_ = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3_.apply(this, arguments); }

function _objectWithoutProperties$3Z(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3Y(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3Y(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Bold = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3Z(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3_({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"
  }));
});
Bold.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Bold.displayName = 'Bold';

function _extends$3Z() { _extends$3Z = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3Z.apply(this, arguments); }

function _objectWithoutProperties$3Y(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3X(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3X(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var BookOpen = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3Y(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3Z({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
  }));
});
BookOpen.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
BookOpen.displayName = 'BookOpen';

function _extends$3Y() { _extends$3Y = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3Y.apply(this, arguments); }

function _objectWithoutProperties$3X(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3W(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3W(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Book = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3X(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3Y({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
  }));
});
Book.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Book.displayName = 'Book';

function _extends$3X() { _extends$3X = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3X.apply(this, arguments); }

function _objectWithoutProperties$3W(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3V(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3V(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Bookmark = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3W(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3X({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
  }));
});
Bookmark.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Bookmark.displayName = 'Bookmark';

function _extends$3W() { _extends$3W = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3W.apply(this, arguments); }

function _objectWithoutProperties$3V(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3U(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3U(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Box = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3V(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3W({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "3.27 6.96 12 12.01 20.73 6.96"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "22.08",
    x2: "12",
    y2: "12"
  }));
});
Box.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Box.displayName = 'Box';

function _extends$3V() { _extends$3V = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3V.apply(this, arguments); }

function _objectWithoutProperties$3U(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3T(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3T(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Briefcase = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3U(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3V({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "2",
    y: "7",
    width: "20",
    height: "14",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
  }));
});
Briefcase.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Briefcase.displayName = 'Briefcase';

function _extends$3U() { _extends$3U = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3U.apply(this, arguments); }

function _objectWithoutProperties$3T(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3S(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3S(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Calendar = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3T(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3U({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "18",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "16",
    y1: "2",
    x2: "16",
    y2: "6"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "8",
    y1: "2",
    x2: "8",
    y2: "6"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "3",
    y1: "10",
    x2: "21",
    y2: "10"
  }));
});
Calendar.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Calendar.displayName = 'Calendar';

function _extends$3T() { _extends$3T = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3T.apply(this, arguments); }

function _objectWithoutProperties$3S(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3R(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3R(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var CameraOff = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3S(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3T({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "1",
    y1: "1",
    x2: "23",
    y2: "23"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"
  }));
});
CameraOff.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
CameraOff.displayName = 'CameraOff';

function _extends$3S() { _extends$3S = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3S.apply(this, arguments); }

function _objectWithoutProperties$3R(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3Q(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3Q(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Camera = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3R(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3S({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "13",
    r: "4"
  }));
});
Camera.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Camera.displayName = 'Camera';

function _extends$3R() { _extends$3R = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3R.apply(this, arguments); }

function _objectWithoutProperties$3Q(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3P(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3P(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Cast = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3Q(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3R({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "2",
    y1: "20",
    x2: "2.01",
    y2: "20"
  }));
});
Cast.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Cast.displayName = 'Cast';

function _extends$3Q() { _extends$3Q = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3Q.apply(this, arguments); }

function _objectWithoutProperties$3P(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3O(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3O(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var CheckCircle = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3P(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3Q({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "22 4 12 14.01 9 11.01"
  }));
});
CheckCircle.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
CheckCircle.displayName = 'CheckCircle';

function _extends$3P() { _extends$3P = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3P.apply(this, arguments); }

function _objectWithoutProperties$3O(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3N(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3N(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var CheckSquare = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3O(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3P({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "9 11 12 14 22 4"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
  }));
});
CheckSquare.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
CheckSquare.displayName = 'CheckSquare';

function _extends$3O() { _extends$3O = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3O.apply(this, arguments); }

function _objectWithoutProperties$3N(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3M(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3M(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Check = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3N(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3O({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "20 6 9 17 4 12"
  }));
});
Check.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Check.displayName = 'Check';

function _extends$3N() { _extends$3N = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3N.apply(this, arguments); }

function _objectWithoutProperties$3M(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3L(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3L(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ChevronDown = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3M(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3N({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "6 9 12 15 18 9"
  }));
});
ChevronDown.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ChevronDown.displayName = 'ChevronDown';

function _extends$3M() { _extends$3M = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3M.apply(this, arguments); }

function _objectWithoutProperties$3L(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3K(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3K(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ChevronLeft = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3L(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3M({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "15 18 9 12 15 6"
  }));
});
ChevronLeft.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ChevronLeft.displayName = 'ChevronLeft';

function _extends$3L() { _extends$3L = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3L.apply(this, arguments); }

function _objectWithoutProperties$3K(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3J(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3J(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ChevronRight = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3K(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3L({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "9 18 15 12 9 6"
  }));
});
ChevronRight.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ChevronRight.displayName = 'ChevronRight';

function _extends$3K() { _extends$3K = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3K.apply(this, arguments); }

function _objectWithoutProperties$3J(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3I(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3I(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ChevronUp = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3J(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3K({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "18 15 12 9 6 15"
  }));
});
ChevronUp.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ChevronUp.displayName = 'ChevronUp';

function _extends$3J() { _extends$3J = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3J.apply(this, arguments); }

function _objectWithoutProperties$3I(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3H(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3H(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ChevronsDown = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3I(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3J({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "7 13 12 18 17 13"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "7 6 12 11 17 6"
  }));
});
ChevronsDown.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ChevronsDown.displayName = 'ChevronsDown';

function _extends$3I() { _extends$3I = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3I.apply(this, arguments); }

function _objectWithoutProperties$3H(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3G(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3G(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ChevronsLeft = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3H(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3I({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "11 17 6 12 11 7"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "18 17 13 12 18 7"
  }));
});
ChevronsLeft.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ChevronsLeft.displayName = 'ChevronsLeft';

function _extends$3H() { _extends$3H = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3H.apply(this, arguments); }

function _objectWithoutProperties$3G(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3F(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3F(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ChevronsRight = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3G(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3H({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "13 17 18 12 13 7"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "6 17 11 12 6 7"
  }));
});
ChevronsRight.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ChevronsRight.displayName = 'ChevronsRight';

function _extends$3G() { _extends$3G = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3G.apply(this, arguments); }

function _objectWithoutProperties$3F(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3E(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3E(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ChevronsUp = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3F(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3G({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "17 11 12 6 7 11"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "17 18 12 13 7 18"
  }));
});
ChevronsUp.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ChevronsUp.displayName = 'ChevronsUp';

function _extends$3F() { _extends$3F = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3F.apply(this, arguments); }

function _objectWithoutProperties$3E(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3D(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3D(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Chrome = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3E(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3F({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "21.17",
    y1: "8",
    x2: "12",
    y2: "8"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "3.95",
    y1: "6.06",
    x2: "8.54",
    y2: "14"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "10.88",
    y1: "21.94",
    x2: "15.46",
    y2: "14"
  }));
});
Chrome.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Chrome.displayName = 'Chrome';

function _extends$3E() { _extends$3E = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3E.apply(this, arguments); }

function _objectWithoutProperties$3D(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3C(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3C(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Circle = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3D(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3E({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }));
});
Circle.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Circle.displayName = 'Circle';

function _extends$3D() { _extends$3D = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3D.apply(this, arguments); }

function _objectWithoutProperties$3C(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3B(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3B(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Clipboard = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3C(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3D({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
  }), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "8",
    y: "2",
    width: "8",
    height: "4",
    rx: "1",
    ry: "1"
  }));
});
Clipboard.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Clipboard.displayName = 'Clipboard';

function _extends$3C() { _extends$3C = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3C.apply(this, arguments); }

function _objectWithoutProperties$3B(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3A(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3A(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Clock = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3B(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3C({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "12 6 12 12 16 14"
  }));
});
Clock.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Clock.displayName = 'Clock';

function _extends$3B() { _extends$3B = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3B.apply(this, arguments); }

function _objectWithoutProperties$3A(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3z(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3z(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var CloudDrizzle = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3A(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3B({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "8",
    y1: "19",
    x2: "8",
    y2: "21"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "8",
    y1: "13",
    x2: "8",
    y2: "15"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "16",
    y1: "19",
    x2: "16",
    y2: "21"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "16",
    y1: "13",
    x2: "16",
    y2: "15"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "21",
    x2: "12",
    y2: "23"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "15",
    x2: "12",
    y2: "17"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"
  }));
});
CloudDrizzle.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
CloudDrizzle.displayName = 'CloudDrizzle';

function _extends$3A() { _extends$3A = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3A.apply(this, arguments); }

function _objectWithoutProperties$3z(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3y(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3y(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var CloudLightning = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3z(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3A({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "13 11 9 17 15 17 11 23"
  }));
});
CloudLightning.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
CloudLightning.displayName = 'CloudLightning';

function _extends$3z() { _extends$3z = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3z.apply(this, arguments); }

function _objectWithoutProperties$3y(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3x(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3x(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var CloudOff = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3y(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3z({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "1",
    y1: "1",
    x2: "23",
    y2: "23"
  }));
});
CloudOff.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
CloudOff.displayName = 'CloudOff';

function _extends$3y() { _extends$3y = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3y.apply(this, arguments); }

function _objectWithoutProperties$3x(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3w(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3w(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var CloudRain = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3x(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3y({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "16",
    y1: "13",
    x2: "16",
    y2: "21"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "8",
    y1: "13",
    x2: "8",
    y2: "21"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "15",
    x2: "12",
    y2: "23"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"
  }));
});
CloudRain.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
CloudRain.displayName = 'CloudRain';

function _extends$3x() { _extends$3x = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3x.apply(this, arguments); }

function _objectWithoutProperties$3w(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3v(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3v(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var CloudSnow = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3w(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3x({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "8",
    y1: "16",
    x2: "8.01",
    y2: "16"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "8",
    y1: "20",
    x2: "8.01",
    y2: "20"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "18",
    x2: "12.01",
    y2: "18"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "22",
    x2: "12.01",
    y2: "22"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "16",
    y1: "16",
    x2: "16.01",
    y2: "16"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "16",
    y1: "20",
    x2: "16.01",
    y2: "20"
  }));
});
CloudSnow.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
CloudSnow.displayName = 'CloudSnow';

function _extends$3w() { _extends$3w = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3w.apply(this, arguments); }

function _objectWithoutProperties$3v(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3u(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3u(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Cloud = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3v(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3w({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"
  }));
});
Cloud.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Cloud.displayName = 'Cloud';

function _extends$3v() { _extends$3v = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3v.apply(this, arguments); }

function _objectWithoutProperties$3u(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3t(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3t(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Code = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3u(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3v({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "16 18 22 12 16 6"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "8 6 2 12 8 18"
  }));
});
Code.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Code.displayName = 'Code';

function _extends$3u() { _extends$3u = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3u.apply(this, arguments); }

function _objectWithoutProperties$3t(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3s(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3s(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Codepen = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3t(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3u({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polygon", {
    points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "22",
    x2: "12",
    y2: "15.5"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "22 8.5 12 15.5 2 8.5"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "2 15.5 12 8.5 22 15.5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "8.5"
  }));
});
Codepen.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Codepen.displayName = 'Codepen';

function _extends$3t() { _extends$3t = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3t.apply(this, arguments); }

function _objectWithoutProperties$3s(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3r(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3r(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Codesandbox = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3s(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3t({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "7.5 4.21 12 6.81 16.5 4.21"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "7.5 19.79 7.5 14.6 3 12"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "21 12 16.5 14.6 16.5 19.79"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "3.27 6.96 12 12.01 20.73 6.96"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "22.08",
    x2: "12",
    y2: "12"
  }));
});
Codesandbox.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Codesandbox.displayName = 'Codesandbox';

function _extends$3s() { _extends$3s = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3s.apply(this, arguments); }

function _objectWithoutProperties$3r(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3q(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3q(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Coffee = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3r(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3s({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18 8h1a4 4 0 0 1 0 8h-1"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "6",
    y1: "1",
    x2: "6",
    y2: "4"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "10",
    y1: "1",
    x2: "10",
    y2: "4"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "14",
    y1: "1",
    x2: "14",
    y2: "4"
  }));
});
Coffee.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Coffee.displayName = 'Coffee';

function _extends$3r() { _extends$3r = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3r.apply(this, arguments); }

function _objectWithoutProperties$3q(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3p(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3p(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Columns = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3q(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3r({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"
  }));
});
Columns.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Columns.displayName = 'Columns';

function _extends$3q() { _extends$3q = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3q.apply(this, arguments); }

function _objectWithoutProperties$3p(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3o(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3o(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Command = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3p(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3q({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
  }));
});
Command.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Command.displayName = 'Command';

function _extends$3p() { _extends$3p = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3p.apply(this, arguments); }

function _objectWithoutProperties$3o(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3n(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3n(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Compass = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3o(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3p({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React__default['default'].createElement("polygon", {
    points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
  }));
});
Compass.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Compass.displayName = 'Compass';

function _extends$3o() { _extends$3o = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3o.apply(this, arguments); }

function _objectWithoutProperties$3n(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3m(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3m(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Copy = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3n(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3o({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "9",
    y: "9",
    width: "13",
    height: "13",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
  }));
});
Copy.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Copy.displayName = 'Copy';

function _extends$3n() { _extends$3n = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3n.apply(this, arguments); }

function _objectWithoutProperties$3m(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3l(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3l(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var CornerDownLeft = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3m(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3n({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "9 10 4 15 9 20"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20 4v7a4 4 0 0 1-4 4H4"
  }));
});
CornerDownLeft.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
CornerDownLeft.displayName = 'CornerDownLeft';

function _extends$3m() { _extends$3m = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3m.apply(this, arguments); }

function _objectWithoutProperties$3l(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3k(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3k(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var CornerDownRight = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3l(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3m({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "15 10 20 15 15 20"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M4 4v7a4 4 0 0 0 4 4h12"
  }));
});
CornerDownRight.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
CornerDownRight.displayName = 'CornerDownRight';

function _extends$3l() { _extends$3l = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3l.apply(this, arguments); }

function _objectWithoutProperties$3k(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3j(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3j(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var CornerLeftDown = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3k(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3l({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "14 15 9 20 4 15"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20 4h-7a4 4 0 0 0-4 4v12"
  }));
});
CornerLeftDown.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
CornerLeftDown.displayName = 'CornerLeftDown';

function _extends$3k() { _extends$3k = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3k.apply(this, arguments); }

function _objectWithoutProperties$3j(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3i(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3i(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var CornerLeftUp = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3j(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3k({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "14 9 9 4 4 9"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20 20h-7a4 4 0 0 1-4-4V4"
  }));
});
CornerLeftUp.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
CornerLeftUp.displayName = 'CornerLeftUp';

function _extends$3j() { _extends$3j = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3j.apply(this, arguments); }

function _objectWithoutProperties$3i(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3h(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3h(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var CornerRightDown = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3i(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3j({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "10 15 15 20 20 15"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M4 4h7a4 4 0 0 1 4 4v12"
  }));
});
CornerRightDown.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
CornerRightDown.displayName = 'CornerRightDown';

function _extends$3i() { _extends$3i = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3i.apply(this, arguments); }

function _objectWithoutProperties$3h(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3g(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3g(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var CornerRightUp = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3h(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3i({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "10 9 15 4 20 9"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M4 20h7a4 4 0 0 0 4-4V4"
  }));
});
CornerRightUp.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
CornerRightUp.displayName = 'CornerRightUp';

function _extends$3h() { _extends$3h = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3h.apply(this, arguments); }

function _objectWithoutProperties$3g(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3f(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3f(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var CornerUpLeft = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3g(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3h({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "9 14 4 9 9 4"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20 20v-7a4 4 0 0 0-4-4H4"
  }));
});
CornerUpLeft.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
CornerUpLeft.displayName = 'CornerUpLeft';

function _extends$3g() { _extends$3g = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3g.apply(this, arguments); }

function _objectWithoutProperties$3f(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3e(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3e(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var CornerUpRight = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3f(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3g({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "15 14 20 9 15 4"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M4 20v-7a4 4 0 0 1 4-4h12"
  }));
});
CornerUpRight.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
CornerUpRight.displayName = 'CornerUpRight';

function _extends$3f() { _extends$3f = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3f.apply(this, arguments); }

function _objectWithoutProperties$3e(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3d(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3d(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Cpu = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3e(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3f({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "4",
    y: "4",
    width: "16",
    height: "16",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "9",
    y: "9",
    width: "6",
    height: "6"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "9",
    y1: "1",
    x2: "9",
    y2: "4"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "15",
    y1: "1",
    x2: "15",
    y2: "4"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "9",
    y1: "20",
    x2: "9",
    y2: "23"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "15",
    y1: "20",
    x2: "15",
    y2: "23"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "20",
    y1: "9",
    x2: "23",
    y2: "9"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "20",
    y1: "14",
    x2: "23",
    y2: "14"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "1",
    y1: "9",
    x2: "4",
    y2: "9"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "1",
    y1: "14",
    x2: "4",
    y2: "14"
  }));
});
Cpu.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Cpu.displayName = 'Cpu';

function _extends$3e() { _extends$3e = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3e.apply(this, arguments); }

function _objectWithoutProperties$3d(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3c(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3c(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var CreditCard = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3d(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3e({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "1",
    y: "4",
    width: "22",
    height: "16",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "1",
    y1: "10",
    x2: "23",
    y2: "10"
  }));
});
CreditCard.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
CreditCard.displayName = 'CreditCard';

function _extends$3d() { _extends$3d = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3d.apply(this, arguments); }

function _objectWithoutProperties$3c(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3b(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3b(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Crop = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3c(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3d({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6.13 1L6 16a2 2 0 0 0 2 2h15"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M1 6.13L16 6a2 2 0 0 1 2 2v15"
  }));
});
Crop.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Crop.displayName = 'Crop';

function _extends$3c() { _extends$3c = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3c.apply(this, arguments); }

function _objectWithoutProperties$3b(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3a(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3a(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Crosshair = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3b(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3c({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "22",
    y1: "12",
    x2: "18",
    y2: "12"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "6",
    y1: "12",
    x2: "2",
    y2: "12"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "6",
    x2: "12",
    y2: "2"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "22",
    x2: "12",
    y2: "18"
  }));
});
Crosshair.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Crosshair.displayName = 'Crosshair';

function _extends$3b() { _extends$3b = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3b.apply(this, arguments); }

function _objectWithoutProperties$3a(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$39(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$39(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Database = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3a(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3b({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("ellipse", {
    cx: "12",
    cy: "5",
    rx: "9",
    ry: "3"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"
  }));
});
Database.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Database.displayName = 'Database';

function _extends$3a() { _extends$3a = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3a.apply(this, arguments); }

function _objectWithoutProperties$39(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$38(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$38(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Delete = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$39(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3a({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "18",
    y1: "9",
    x2: "12",
    y2: "15"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "9",
    x2: "18",
    y2: "15"
  }));
});
Delete.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Delete.displayName = 'Delete';

function _extends$39() { _extends$39 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$39.apply(this, arguments); }

function _objectWithoutProperties$38(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$37(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$37(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Disc = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$38(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$39({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }));
});
Disc.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Disc.displayName = 'Disc';

function _extends$38() { _extends$38 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$38.apply(this, arguments); }

function _objectWithoutProperties$37(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$36(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$36(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var DivideCircle = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$37(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$38({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "8",
    y1: "12",
    x2: "16",
    y2: "12"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "16",
    x2: "12",
    y2: "16"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "8"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }));
});
DivideCircle.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
DivideCircle.displayName = 'DivideCircle';

function _extends$37() { _extends$37 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$37.apply(this, arguments); }

function _objectWithoutProperties$36(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$35(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$35(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var DivideSquare = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$36(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$37({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "8",
    y1: "12",
    x2: "16",
    y2: "12"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "16",
    x2: "12",
    y2: "16"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "8"
  }));
});
DivideSquare.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
DivideSquare.displayName = 'DivideSquare';

function _extends$36() { _extends$36 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$36.apply(this, arguments); }

function _objectWithoutProperties$35(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$34(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$34(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Divide = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$35(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$36({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "6",
    r: "2"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "18",
    r: "2"
  }));
});
Divide.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Divide.displayName = 'Divide';

function _extends$35() { _extends$35 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$35.apply(this, arguments); }

function _objectWithoutProperties$34(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$33(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$33(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var DollarSign = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$34(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$35({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "1",
    x2: "12",
    y2: "23"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
  }));
});
DollarSign.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
DollarSign.displayName = 'DollarSign';

function _extends$34() { _extends$34 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$34.apply(this, arguments); }

function _objectWithoutProperties$33(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$32(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$32(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var DownloadCloud = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$33(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$34({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "8 17 12 21 16 17"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "12",
    x2: "12",
    y2: "21"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"
  }));
});
DownloadCloud.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
DownloadCloud.displayName = 'DownloadCloud';

function _extends$33() { _extends$33 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$33.apply(this, arguments); }

function _objectWithoutProperties$32(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$31(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$31(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Download = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$32(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$33({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "7 10 12 15 17 10"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "15",
    x2: "12",
    y2: "3"
  }));
});
Download.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Download.displayName = 'Download';

function _extends$32() { _extends$32 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$32.apply(this, arguments); }

function _objectWithoutProperties$31(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$30(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$30(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Dribbble = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$31(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$32({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"
  }));
});
Dribbble.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Dribbble.displayName = 'Dribbble';

function _extends$31() { _extends$31 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$31.apply(this, arguments); }

function _objectWithoutProperties$30(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2$(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2$(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Droplet = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$30(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$31({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"
  }));
});
Droplet.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Droplet.displayName = 'Droplet';

function _extends$30() { _extends$30 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$30.apply(this, arguments); }

function _objectWithoutProperties$2$(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2_(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2_(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Edit2 = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2$(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$30({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
  }));
});
Edit2.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Edit2.displayName = 'Edit2';

function _extends$2$() { _extends$2$ = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2$.apply(this, arguments); }

function _objectWithoutProperties$2_(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2Z(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2Z(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Edit3 = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2_(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2$({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 20h9"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
  }));
});
Edit3.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Edit3.displayName = 'Edit3';

function _extends$2_() { _extends$2_ = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2_.apply(this, arguments); }

function _objectWithoutProperties$2Z(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2Y(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2Y(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Edit = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2Z(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2_({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
  }));
});
Edit.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Edit.displayName = 'Edit';

function _extends$2Z() { _extends$2Z = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2Z.apply(this, arguments); }

function _objectWithoutProperties$2Y(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2X(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2X(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ExternalLink = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2Y(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2Z({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "15 3 21 3 21 9"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "10",
    y1: "14",
    x2: "21",
    y2: "3"
  }));
});
ExternalLink.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ExternalLink.displayName = 'ExternalLink';

function _extends$2Y() { _extends$2Y = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2Y.apply(this, arguments); }

function _objectWithoutProperties$2X(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2W(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2W(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var EyeOff = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2X(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2Y({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "1",
    y1: "1",
    x2: "23",
    y2: "23"
  }));
});
EyeOff.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
EyeOff.displayName = 'EyeOff';

function _extends$2X() { _extends$2X = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2X.apply(this, arguments); }

function _objectWithoutProperties$2W(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2V(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2V(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Eye = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2W(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2X({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }));
});
Eye.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Eye.displayName = 'Eye';

function _extends$2W() { _extends$2W = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2W.apply(this, arguments); }

function _objectWithoutProperties$2V(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2U(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2U(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Facebook = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2V(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2W({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
  }));
});
Facebook.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Facebook.displayName = 'Facebook';

function _extends$2V() { _extends$2V = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2V.apply(this, arguments); }

function _objectWithoutProperties$2U(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2T(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2T(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var FastForward = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2U(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2V({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polygon", {
    points: "13 19 22 12 13 5 13 19"
  }), /*#__PURE__*/React__default['default'].createElement("polygon", {
    points: "2 19 11 12 2 5 2 19"
  }));
});
FastForward.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
FastForward.displayName = 'FastForward';

function _extends$2U() { _extends$2U = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2U.apply(this, arguments); }

function _objectWithoutProperties$2T(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2S(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2S(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Feather = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2T(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2U({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "16",
    y1: "8",
    x2: "2",
    y2: "22"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "17.5",
    y1: "15",
    x2: "9",
    y2: "15"
  }));
});
Feather.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Feather.displayName = 'Feather';

function _extends$2T() { _extends$2T = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2T.apply(this, arguments); }

function _objectWithoutProperties$2S(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2R(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2R(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Figma = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2S(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2T({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"
  }));
});
Figma.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Figma.displayName = 'Figma';

function _extends$2S() { _extends$2S = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2S.apply(this, arguments); }

function _objectWithoutProperties$2R(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2Q(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2Q(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var FileMinus = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2R(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2S({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "14 2 14 8 20 8"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "9",
    y1: "15",
    x2: "15",
    y2: "15"
  }));
});
FileMinus.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
FileMinus.displayName = 'FileMinus';

function _extends$2R() { _extends$2R = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2R.apply(this, arguments); }

function _objectWithoutProperties$2Q(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2P(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2P(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var FilePlus = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2Q(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2R({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "14 2 14 8 20 8"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "18",
    x2: "12",
    y2: "12"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "9",
    y1: "15",
    x2: "15",
    y2: "15"
  }));
});
FilePlus.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
FilePlus.displayName = 'FilePlus';

function _extends$2Q() { _extends$2Q = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2Q.apply(this, arguments); }

function _objectWithoutProperties$2P(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2O(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2O(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var FileText = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2P(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2Q({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "14 2 14 8 20 8"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "16",
    y1: "13",
    x2: "8",
    y2: "13"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "16",
    y1: "17",
    x2: "8",
    y2: "17"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "10 9 9 9 8 9"
  }));
});
FileText.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
FileText.displayName = 'FileText';

function _extends$2P() { _extends$2P = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2P.apply(this, arguments); }

function _objectWithoutProperties$2O(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2N(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2N(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var File = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2O(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2P({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "13 2 13 9 20 9"
  }));
});
File.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
File.displayName = 'File';

function _extends$2O() { _extends$2O = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2O.apply(this, arguments); }

function _objectWithoutProperties$2N(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2M(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2M(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Film = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2N(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2O({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "20",
    rx: "2.18",
    ry: "2.18"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "7",
    y1: "2",
    x2: "7",
    y2: "22"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "17",
    y1: "2",
    x2: "17",
    y2: "22"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "2",
    y1: "12",
    x2: "22",
    y2: "12"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "2",
    y1: "7",
    x2: "7",
    y2: "7"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "2",
    y1: "17",
    x2: "7",
    y2: "17"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "17",
    y1: "17",
    x2: "22",
    y2: "17"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "17",
    y1: "7",
    x2: "22",
    y2: "7"
  }));
});
Film.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Film.displayName = 'Film';

function _extends$2N() { _extends$2N = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2N.apply(this, arguments); }

function _objectWithoutProperties$2M(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2L(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2L(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Filter = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2M(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2N({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polygon", {
    points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
  }));
});
Filter.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Filter.displayName = 'Filter';

function _extends$2M() { _extends$2M = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2M.apply(this, arguments); }

function _objectWithoutProperties$2L(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2K(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2K(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Flag = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2L(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2M({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "4",
    y1: "22",
    x2: "4",
    y2: "15"
  }));
});
Flag.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Flag.displayName = 'Flag';

function _extends$2L() { _extends$2L = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2L.apply(this, arguments); }

function _objectWithoutProperties$2K(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2J(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2J(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var FolderMinus = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2K(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2L({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "9",
    y1: "14",
    x2: "15",
    y2: "14"
  }));
});
FolderMinus.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
FolderMinus.displayName = 'FolderMinus';

function _extends$2K() { _extends$2K = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2K.apply(this, arguments); }

function _objectWithoutProperties$2J(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2I(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2I(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var FolderPlus = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2J(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2K({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "11",
    x2: "12",
    y2: "17"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "9",
    y1: "14",
    x2: "15",
    y2: "14"
  }));
});
FolderPlus.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
FolderPlus.displayName = 'FolderPlus';

function _extends$2J() { _extends$2J = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2J.apply(this, arguments); }

function _objectWithoutProperties$2I(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2H(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2H(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Folder = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2I(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2J({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
  }));
});
Folder.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Folder.displayName = 'Folder';

function _extends$2I() { _extends$2I = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2I.apply(this, arguments); }

function _objectWithoutProperties$2H(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2G(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2G(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Framer = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2H(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2I({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"
  }));
});
Framer.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Framer.displayName = 'Framer';

function _extends$2H() { _extends$2H = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2H.apply(this, arguments); }

function _objectWithoutProperties$2G(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2F(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2F(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Frown = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2G(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2H({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 16s-1.5-2-4-2-4 2-4 2"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "9",
    y1: "9",
    x2: "9.01",
    y2: "9"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "15",
    y1: "9",
    x2: "15.01",
    y2: "9"
  }));
});
Frown.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Frown.displayName = 'Frown';

function _extends$2G() { _extends$2G = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2G.apply(this, arguments); }

function _objectWithoutProperties$2F(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2E(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2E(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Gift = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2F(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2G({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "20 12 20 22 4 22 4 12"
  }), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "2",
    y: "7",
    width: "20",
    height: "5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "22",
    x2: "12",
    y2: "7"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"
  }));
});
Gift.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Gift.displayName = 'Gift';

function _extends$2F() { _extends$2F = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2F.apply(this, arguments); }

function _objectWithoutProperties$2E(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2D(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2D(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var GitBranch = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2E(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2F({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "6",
    y1: "3",
    x2: "6",
    y2: "15"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "18",
    cy: "6",
    r: "3"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "6",
    cy: "18",
    r: "3"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18 9a9 9 0 0 1-9 9"
  }));
});
GitBranch.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
GitBranch.displayName = 'GitBranch';

function _extends$2E() { _extends$2E = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2E.apply(this, arguments); }

function _objectWithoutProperties$2D(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2C(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2C(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var GitCommit = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2D(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2E({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "1.05",
    y1: "12",
    x2: "7",
    y2: "12"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "17.01",
    y1: "12",
    x2: "22.96",
    y2: "12"
  }));
});
GitCommit.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
GitCommit.displayName = 'GitCommit';

function _extends$2D() { _extends$2D = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2D.apply(this, arguments); }

function _objectWithoutProperties$2C(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2B(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2B(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var GitMerge = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2C(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2D({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "18",
    cy: "18",
    r: "3"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "6",
    cy: "6",
    r: "3"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6 21V9a9 9 0 0 0 9 9"
  }));
});
GitMerge.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
GitMerge.displayName = 'GitMerge';

function _extends$2C() { _extends$2C = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2C.apply(this, arguments); }

function _objectWithoutProperties$2B(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2A(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2A(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var GitPullRequest = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2B(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2C({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "18",
    cy: "18",
    r: "3"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "6",
    cy: "6",
    r: "3"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M13 6h3a2 2 0 0 1 2 2v7"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "6",
    y1: "9",
    x2: "6",
    y2: "21"
  }));
});
GitPullRequest.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
GitPullRequest.displayName = 'GitPullRequest';

function _extends$2B() { _extends$2B = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2B.apply(this, arguments); }

function _objectWithoutProperties$2A(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2z(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2z(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var GitHub = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2A(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2B({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
  }));
});
GitHub.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
GitHub.displayName = 'GitHub';

function _extends$2A() { _extends$2A = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2A.apply(this, arguments); }

function _objectWithoutProperties$2z(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2y(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2y(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Gitlab = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2z(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2A({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"
  }));
});
Gitlab.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Gitlab.displayName = 'Gitlab';

function _extends$2z() { _extends$2z = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2z.apply(this, arguments); }

function _objectWithoutProperties$2y(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2x(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2x(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Globe = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2y(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2z({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "2",
    y1: "12",
    x2: "22",
    y2: "12"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
  }));
});
Globe.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Globe.displayName = 'Globe';

function _extends$2y() { _extends$2y = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2y.apply(this, arguments); }

function _objectWithoutProperties$2x(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2w(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2w(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Grid = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2x(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2y({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "3",
    y: "3",
    width: "7",
    height: "7"
  }), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "14",
    y: "3",
    width: "7",
    height: "7"
  }), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "14",
    y: "14",
    width: "7",
    height: "7"
  }), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "3",
    y: "14",
    width: "7",
    height: "7"
  }));
});
Grid.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Grid.displayName = 'Grid';

function _extends$2x() { _extends$2x = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2x.apply(this, arguments); }

function _objectWithoutProperties$2w(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2v(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2v(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var HardDrive = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2w(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2x({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "22",
    y1: "12",
    x2: "2",
    y2: "12"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "6",
    y1: "16",
    x2: "6.01",
    y2: "16"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "10",
    y1: "16",
    x2: "10.01",
    y2: "16"
  }));
});
HardDrive.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
HardDrive.displayName = 'HardDrive';

function _extends$2w() { _extends$2w = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2w.apply(this, arguments); }

function _objectWithoutProperties$2v(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2u(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2u(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Hash = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2v(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2w({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "4",
    y1: "9",
    x2: "20",
    y2: "9"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "4",
    y1: "15",
    x2: "20",
    y2: "15"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "10",
    y1: "3",
    x2: "8",
    y2: "21"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "16",
    y1: "3",
    x2: "14",
    y2: "21"
  }));
});
Hash.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Hash.displayName = 'Hash';

function _extends$2v() { _extends$2v = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2v.apply(this, arguments); }

function _objectWithoutProperties$2u(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2t(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2t(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Headphones = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2u(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2v({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M3 18v-6a9 9 0 0 1 18 0v6"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"
  }));
});
Headphones.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Headphones.displayName = 'Headphones';

function _extends$2u() { _extends$2u = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2u.apply(this, arguments); }

function _objectWithoutProperties$2t(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2s(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2s(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Heart = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2t(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2u({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
  }));
});
Heart.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Heart.displayName = 'Heart';

function _extends$2t() { _extends$2t = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2t.apply(this, arguments); }

function _objectWithoutProperties$2s(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2r(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2r(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var HelpCircle = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2s(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2t({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "17",
    x2: "12.01",
    y2: "17"
  }));
});
HelpCircle.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
HelpCircle.displayName = 'HelpCircle';

function _extends$2s() { _extends$2s = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2s.apply(this, arguments); }

function _objectWithoutProperties$2r(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2q(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2q(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Hexagon = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2r(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2s({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
  }));
});
Hexagon.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Hexagon.displayName = 'Hexagon';

function _extends$2r() { _extends$2r = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2r.apply(this, arguments); }

function _objectWithoutProperties$2q(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2p(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2p(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Home = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2q(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2r({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "9 22 9 12 15 12 15 22"
  }));
});
Home.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Home.displayName = 'Home';

function _extends$2q() { _extends$2q = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2q.apply(this, arguments); }

function _objectWithoutProperties$2p(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2o(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2o(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Image = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2p(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2q({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "8.5",
    cy: "8.5",
    r: "1.5"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "21 15 16 10 5 21"
  }));
});
Image.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Image.displayName = 'Image';

function _extends$2p() { _extends$2p = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2p.apply(this, arguments); }

function _objectWithoutProperties$2o(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2n(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2n(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Inbox = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2o(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2p({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "22 12 16 12 14 15 10 15 8 12 2 12"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
  }));
});
Inbox.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Inbox.displayName = 'Inbox';

function _extends$2o() { _extends$2o = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2o.apply(this, arguments); }

function _objectWithoutProperties$2n(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2m(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2m(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Info = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2n(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2o({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "16",
    x2: "12",
    y2: "12"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12.01",
    y2: "8"
  }));
});
Info.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Info.displayName = 'Info';

function _extends$2n() { _extends$2n = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2n.apply(this, arguments); }

function _objectWithoutProperties$2m(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2l(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2l(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Instagram = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2m(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2n({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "20",
    rx: "5",
    ry: "5"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "17.5",
    y1: "6.5",
    x2: "17.51",
    y2: "6.5"
  }));
});
Instagram.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Instagram.displayName = 'Instagram';

function _extends$2m() { _extends$2m = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2m.apply(this, arguments); }

function _objectWithoutProperties$2l(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2k(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2k(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Italic = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2l(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2m({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "19",
    y1: "4",
    x2: "10",
    y2: "4"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "14",
    y1: "20",
    x2: "5",
    y2: "20"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "15",
    y1: "4",
    x2: "9",
    y2: "20"
  }));
});
Italic.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Italic.displayName = 'Italic';

function _extends$2l() { _extends$2l = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2l.apply(this, arguments); }

function _objectWithoutProperties$2k(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2j(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2j(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Key = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2k(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2l({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"
  }));
});
Key.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Key.displayName = 'Key';

function _extends$2k() { _extends$2k = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2k.apply(this, arguments); }

function _objectWithoutProperties$2j(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2i(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2i(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Layers = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2j(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2k({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polygon", {
    points: "12 2 2 7 12 12 22 7 12 2"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "2 17 12 22 22 17"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "2 12 12 17 22 12"
  }));
});
Layers.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Layers.displayName = 'Layers';

function _extends$2j() { _extends$2j = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2j.apply(this, arguments); }

function _objectWithoutProperties$2i(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2h(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2h(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Layout = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2i(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2j({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "3",
    y1: "9",
    x2: "21",
    y2: "9"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "9",
    y1: "21",
    x2: "9",
    y2: "9"
  }));
});
Layout.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Layout.displayName = 'Layout';

function _extends$2i() { _extends$2i = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2i.apply(this, arguments); }

function _objectWithoutProperties$2h(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2g(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2g(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var LifeBuoy = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2h(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2i({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "4.93",
    y1: "4.93",
    x2: "9.17",
    y2: "9.17"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "14.83",
    y1: "14.83",
    x2: "19.07",
    y2: "19.07"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "14.83",
    y1: "9.17",
    x2: "19.07",
    y2: "4.93"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "14.83",
    y1: "9.17",
    x2: "18.36",
    y2: "5.64"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "4.93",
    y1: "19.07",
    x2: "9.17",
    y2: "14.83"
  }));
});
LifeBuoy.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
LifeBuoy.displayName = 'LifeBuoy';

function _extends$2h() { _extends$2h = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2h.apply(this, arguments); }

function _objectWithoutProperties$2g(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2f(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2f(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Link2 = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2g(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2h({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "8",
    y1: "12",
    x2: "16",
    y2: "12"
  }));
});
Link2.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Link2.displayName = 'Link2';

function _extends$2g() { _extends$2g = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2g.apply(this, arguments); }

function _objectWithoutProperties$2f(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2e(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2e(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Link$1 = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2f(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2g({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
  }));
});
Link$1.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Link$1.displayName = 'Link';

function _extends$2f() { _extends$2f = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2f.apply(this, arguments); }

function _objectWithoutProperties$2e(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2d(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2d(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Linkedin = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2e(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2f({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
  }), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "2",
    y: "9",
    width: "4",
    height: "12"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "4",
    cy: "4",
    r: "2"
  }));
});
Linkedin.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Linkedin.displayName = 'Linkedin';

function _extends$2e() { _extends$2e = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2e.apply(this, arguments); }

function _objectWithoutProperties$2d(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2c(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2c(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var List = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2d(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2e({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "8",
    y1: "6",
    x2: "21",
    y2: "6"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "8",
    y1: "12",
    x2: "21",
    y2: "12"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "8",
    y1: "18",
    x2: "21",
    y2: "18"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "3",
    y1: "6",
    x2: "3.01",
    y2: "6"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "3",
    y1: "12",
    x2: "3.01",
    y2: "12"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "3",
    y1: "18",
    x2: "3.01",
    y2: "18"
  }));
});
List.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
List.displayName = 'List';

function _extends$2d() { _extends$2d = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2d.apply(this, arguments); }

function _objectWithoutProperties$2c(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2b(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2b(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Loader = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2c(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2d({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "6"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "18",
    x2: "12",
    y2: "22"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "4.93",
    y1: "4.93",
    x2: "7.76",
    y2: "7.76"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "16.24",
    y1: "16.24",
    x2: "19.07",
    y2: "19.07"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "2",
    y1: "12",
    x2: "6",
    y2: "12"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "18",
    y1: "12",
    x2: "22",
    y2: "12"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "4.93",
    y1: "19.07",
    x2: "7.76",
    y2: "16.24"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "16.24",
    y1: "7.76",
    x2: "19.07",
    y2: "4.93"
  }));
});
Loader.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Loader.displayName = 'Loader';

function _extends$2c() { _extends$2c = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2c.apply(this, arguments); }

function _objectWithoutProperties$2b(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2a(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2a(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Lock = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2b(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2c({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "3",
    y: "11",
    width: "18",
    height: "11",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4"
  }));
});
Lock.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Lock.displayName = 'Lock';

function _extends$2b() { _extends$2b = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2b.apply(this, arguments); }

function _objectWithoutProperties$2a(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$29(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$29(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var LogIn = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2a(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2b({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "10 17 15 12 10 7"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "15",
    y1: "12",
    x2: "3",
    y2: "12"
  }));
});
LogIn.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
LogIn.displayName = 'LogIn';

function _extends$2a() { _extends$2a = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2a.apply(this, arguments); }

function _objectWithoutProperties$29(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$28(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$28(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var LogOut = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$29(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2a({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "16 17 21 12 16 7"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "21",
    y1: "12",
    x2: "9",
    y2: "12"
  }));
});
LogOut.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
LogOut.displayName = 'LogOut';

function _extends$29() { _extends$29 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$29.apply(this, arguments); }

function _objectWithoutProperties$28(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$27(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$27(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Mail = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$28(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$29({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "22,6 12,13 2,6"
  }));
});
Mail.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Mail.displayName = 'Mail';

function _extends$28() { _extends$28 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$28.apply(this, arguments); }

function _objectWithoutProperties$27(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$26(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$26(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var MapPin = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$27(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$28({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  }));
});
MapPin.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
MapPin.displayName = 'MapPin';

function _extends$27() { _extends$27 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$27.apply(this, arguments); }

function _objectWithoutProperties$26(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$25(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$25(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Map = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$26(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$27({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polygon", {
    points: "1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "8",
    y1: "2",
    x2: "8",
    y2: "18"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "16",
    y1: "6",
    x2: "16",
    y2: "22"
  }));
});
Map.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Map.displayName = 'Map';

function _extends$26() { _extends$26 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$26.apply(this, arguments); }

function _objectWithoutProperties$25(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$24(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$24(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Maximize2 = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$25(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$26({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "15 3 21 3 21 9"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "9 21 3 21 3 15"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "21",
    y1: "3",
    x2: "14",
    y2: "10"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "3",
    y1: "21",
    x2: "10",
    y2: "14"
  }));
});
Maximize2.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Maximize2.displayName = 'Maximize2';

function _extends$25() { _extends$25 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$25.apply(this, arguments); }

function _objectWithoutProperties$24(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$23(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$23(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Maximize = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$24(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$25({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
  }));
});
Maximize.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Maximize.displayName = 'Maximize';

function _extends$24() { _extends$24 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$24.apply(this, arguments); }

function _objectWithoutProperties$23(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$22(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$22(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Meh = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$23(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$24({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "8",
    y1: "15",
    x2: "16",
    y2: "15"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "9",
    y1: "9",
    x2: "9.01",
    y2: "9"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "15",
    y1: "9",
    x2: "15.01",
    y2: "9"
  }));
});
Meh.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Meh.displayName = 'Meh';

function _extends$23() { _extends$23 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$23.apply(this, arguments); }

function _objectWithoutProperties$22(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$21(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$21(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Menu$1 = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$22(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$23({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "3",
    y1: "12",
    x2: "21",
    y2: "12"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "3",
    y1: "6",
    x2: "21",
    y2: "6"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "3",
    y1: "18",
    x2: "21",
    y2: "18"
  }));
});
Menu$1.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Menu$1.displayName = 'Menu';

function _extends$22() { _extends$22 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$22.apply(this, arguments); }

function _objectWithoutProperties$21(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$20(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$20(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var MessageCircle = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$21(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$22({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
  }));
});
MessageCircle.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
MessageCircle.displayName = 'MessageCircle';

function _extends$21() { _extends$21 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$21.apply(this, arguments); }

function _objectWithoutProperties$20(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1$(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1$(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var MessageSquare = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$20(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$21({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
  }));
});
MessageSquare.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
MessageSquare.displayName = 'MessageSquare';

function _extends$20() { _extends$20 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$20.apply(this, arguments); }

function _objectWithoutProperties$1$(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1_(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1_(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var MicOff = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1$(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$20({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "1",
    y1: "1",
    x2: "23",
    y2: "23"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "19",
    x2: "12",
    y2: "23"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "8",
    y1: "23",
    x2: "16",
    y2: "23"
  }));
});
MicOff.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
MicOff.displayName = 'MicOff';

function _extends$1$() { _extends$1$ = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1$.apply(this, arguments); }

function _objectWithoutProperties$1_(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1Z(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1Z(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Mic = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1_(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1$({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M19 10v2a7 7 0 0 1-14 0v-2"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "19",
    x2: "12",
    y2: "23"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "8",
    y1: "23",
    x2: "16",
    y2: "23"
  }));
});
Mic.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Mic.displayName = 'Mic';

function _extends$1_() { _extends$1_ = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1_.apply(this, arguments); }

function _objectWithoutProperties$1Z(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1Y(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1Y(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Minimize2 = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1Z(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1_({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "4 14 10 14 10 20"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "20 10 14 10 14 4"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "14",
    y1: "10",
    x2: "21",
    y2: "3"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "3",
    y1: "21",
    x2: "10",
    y2: "14"
  }));
});
Minimize2.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Minimize2.displayName = 'Minimize2';

function _extends$1Z() { _extends$1Z = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1Z.apply(this, arguments); }

function _objectWithoutProperties$1Y(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1X(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1X(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Minimize = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1Y(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1Z({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"
  }));
});
Minimize.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Minimize.displayName = 'Minimize';

function _extends$1Y() { _extends$1Y = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1Y.apply(this, arguments); }

function _objectWithoutProperties$1X(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1W(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1W(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var MinusCircle = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1X(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1Y({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "8",
    y1: "12",
    x2: "16",
    y2: "12"
  }));
});
MinusCircle.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
MinusCircle.displayName = 'MinusCircle';

function _extends$1X() { _extends$1X = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1X.apply(this, arguments); }

function _objectWithoutProperties$1W(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1V(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1V(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var MinusSquare = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1W(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1X({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "8",
    y1: "12",
    x2: "16",
    y2: "12"
  }));
});
MinusSquare.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
MinusSquare.displayName = 'MinusSquare';

function _extends$1W() { _extends$1W = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1W.apply(this, arguments); }

function _objectWithoutProperties$1V(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1U(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1U(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Minus = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1V(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1W({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }));
});
Minus.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Minus.displayName = 'Minus';

function _extends$1V() { _extends$1V = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1V.apply(this, arguments); }

function _objectWithoutProperties$1U(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1T(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1T(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Monitor = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1U(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1V({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "2",
    y: "3",
    width: "20",
    height: "14",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "8",
    y1: "21",
    x2: "16",
    y2: "21"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "17",
    x2: "12",
    y2: "21"
  }));
});
Monitor.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Monitor.displayName = 'Monitor';

function _extends$1U() { _extends$1U = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1U.apply(this, arguments); }

function _objectWithoutProperties$1T(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1S(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1S(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Moon = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1T(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1U({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
  }));
});
Moon.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Moon.displayName = 'Moon';

function _extends$1T() { _extends$1T = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1T.apply(this, arguments); }

function _objectWithoutProperties$1S(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1R(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1R(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var MoreHorizontal = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1S(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1T({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "19",
    cy: "12",
    r: "1"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "5",
    cy: "12",
    r: "1"
  }));
});
MoreHorizontal.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
MoreHorizontal.displayName = 'MoreHorizontal';

function _extends$1S() { _extends$1S = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1S.apply(this, arguments); }

function _objectWithoutProperties$1R(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1Q(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1Q(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var MoreVertical = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1R(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1S({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "5",
    r: "1"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "19",
    r: "1"
  }));
});
MoreVertical.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
MoreVertical.displayName = 'MoreVertical';

function _extends$1R() { _extends$1R = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1R.apply(this, arguments); }

function _objectWithoutProperties$1Q(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1P(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1P(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var MousePointer = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1Q(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1R({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M13 13l6 6"
  }));
});
MousePointer.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
MousePointer.displayName = 'MousePointer';

function _extends$1Q() { _extends$1Q = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1Q.apply(this, arguments); }

function _objectWithoutProperties$1P(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1O(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1O(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Move = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1P(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1Q({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "5 9 2 12 5 15"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "9 5 12 2 15 5"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "15 19 12 22 9 19"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "19 9 22 12 19 15"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "2",
    y1: "12",
    x2: "22",
    y2: "12"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22"
  }));
});
Move.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Move.displayName = 'Move';

function _extends$1P() { _extends$1P = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1P.apply(this, arguments); }

function _objectWithoutProperties$1O(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1N(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1N(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Music = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1O(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1P({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9 18V5l12-2v13"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "6",
    cy: "18",
    r: "3"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "18",
    cy: "16",
    r: "3"
  }));
});
Music.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Music.displayName = 'Music';

function _extends$1O() { _extends$1O = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1O.apply(this, arguments); }

function _objectWithoutProperties$1N(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1M(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1M(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Navigation2 = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1N(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1O({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polygon", {
    points: "12 2 19 21 12 17 5 21 12 2"
  }));
});
Navigation2.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Navigation2.displayName = 'Navigation2';

function _extends$1N() { _extends$1N = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1N.apply(this, arguments); }

function _objectWithoutProperties$1M(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1L(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1L(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Navigation = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1M(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1N({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polygon", {
    points: "3 11 22 2 13 21 11 13 3 11"
  }));
});
Navigation.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Navigation.displayName = 'Navigation';

function _extends$1M() { _extends$1M = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1M.apply(this, arguments); }

function _objectWithoutProperties$1L(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1K(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1K(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Octagon = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1L(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1M({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polygon", {
    points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
  }));
});
Octagon.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Octagon.displayName = 'Octagon';

function _extends$1L() { _extends$1L = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1L.apply(this, arguments); }

function _objectWithoutProperties$1K(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1J(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1J(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Package = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1K(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1L({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "16.5",
    y1: "9.4",
    x2: "7.5",
    y2: "4.21"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "3.27 6.96 12 12.01 20.73 6.96"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "22.08",
    x2: "12",
    y2: "12"
  }));
});
Package.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Package.displayName = 'Package';

function _extends$1K() { _extends$1K = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1K.apply(this, arguments); }

function _objectWithoutProperties$1J(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1I(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1I(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Paperclip = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1J(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1K({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"
  }));
});
Paperclip.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Paperclip.displayName = 'Paperclip';

function _extends$1J() { _extends$1J = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1J.apply(this, arguments); }

function _objectWithoutProperties$1I(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1H(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1H(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var PauseCircle = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1I(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1J({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "10",
    y1: "15",
    x2: "10",
    y2: "9"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "14",
    y1: "15",
    x2: "14",
    y2: "9"
  }));
});
PauseCircle.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
PauseCircle.displayName = 'PauseCircle';

function _extends$1I() { _extends$1I = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1I.apply(this, arguments); }

function _objectWithoutProperties$1H(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1G(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1G(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Pause = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1H(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1I({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "6",
    y: "4",
    width: "4",
    height: "16"
  }), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "14",
    y: "4",
    width: "4",
    height: "16"
  }));
});
Pause.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Pause.displayName = 'Pause';

function _extends$1H() { _extends$1H = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1H.apply(this, arguments); }

function _objectWithoutProperties$1G(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1F(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1F(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var PenTool = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1G(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1H({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 19l7-7 3 3-7 7-3-3z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M2 2l7.586 7.586"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "11",
    cy: "11",
    r: "2"
  }));
});
PenTool.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
PenTool.displayName = 'PenTool';

function _extends$1G() { _extends$1G = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1G.apply(this, arguments); }

function _objectWithoutProperties$1F(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1E(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1E(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Percent = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1F(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1G({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "19",
    y1: "5",
    x2: "5",
    y2: "19"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "6.5",
    cy: "6.5",
    r: "2.5"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "17.5",
    cy: "17.5",
    r: "2.5"
  }));
});
Percent.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Percent.displayName = 'Percent';

function _extends$1F() { _extends$1F = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1F.apply(this, arguments); }

function _objectWithoutProperties$1E(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1D(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1D(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var PhoneCall = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1E(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1F({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
  }));
});
PhoneCall.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
PhoneCall.displayName = 'PhoneCall';

function _extends$1E() { _extends$1E = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1E.apply(this, arguments); }

function _objectWithoutProperties$1D(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1C(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1C(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var PhoneForwarded = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1D(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1E({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "19 1 23 5 19 9"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "15",
    y1: "5",
    x2: "23",
    y2: "5"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
  }));
});
PhoneForwarded.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
PhoneForwarded.displayName = 'PhoneForwarded';

function _extends$1D() { _extends$1D = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1D.apply(this, arguments); }

function _objectWithoutProperties$1C(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1B(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1B(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var PhoneIncoming = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1C(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1D({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "16 2 16 8 22 8"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "23",
    y1: "1",
    x2: "16",
    y2: "8"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
  }));
});
PhoneIncoming.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
PhoneIncoming.displayName = 'PhoneIncoming';

function _extends$1C() { _extends$1C = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1C.apply(this, arguments); }

function _objectWithoutProperties$1B(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1A(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1A(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var PhoneMissed = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1B(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1C({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "23",
    y1: "1",
    x2: "17",
    y2: "7"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "17",
    y1: "1",
    x2: "23",
    y2: "7"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
  }));
});
PhoneMissed.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
PhoneMissed.displayName = 'PhoneMissed';

function _extends$1B() { _extends$1B = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1B.apply(this, arguments); }

function _objectWithoutProperties$1A(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1z(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1z(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var PhoneOff = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1A(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1B({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "23",
    y1: "1",
    x2: "1",
    y2: "23"
  }));
});
PhoneOff.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
PhoneOff.displayName = 'PhoneOff';

function _extends$1A() { _extends$1A = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1A.apply(this, arguments); }

function _objectWithoutProperties$1z(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1y(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1y(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var PhoneOutgoing = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1z(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1A({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "23 7 23 1 17 1"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "16",
    y1: "8",
    x2: "23",
    y2: "1"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
  }));
});
PhoneOutgoing.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
PhoneOutgoing.displayName = 'PhoneOutgoing';

function _extends$1z() { _extends$1z = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1z.apply(this, arguments); }

function _objectWithoutProperties$1y(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1x(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1x(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Phone = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1y(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1z({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
  }));
});
Phone.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Phone.displayName = 'Phone';

function _extends$1y() { _extends$1y = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1y.apply(this, arguments); }

function _objectWithoutProperties$1x(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1w(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1w(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var PieChart = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1x(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1y({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21.21 15.89A10 10 0 1 1 8 2.83"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M22 12A10 10 0 0 0 12 2v10z"
  }));
});
PieChart.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
PieChart.displayName = 'PieChart';

function _extends$1x() { _extends$1x = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1x.apply(this, arguments); }

function _objectWithoutProperties$1w(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1v(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1v(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var PlayCircle = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1w(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1x({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React__default['default'].createElement("polygon", {
    points: "10 8 16 12 10 16 10 8"
  }));
});
PlayCircle.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
PlayCircle.displayName = 'PlayCircle';

function _extends$1w() { _extends$1w = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1w.apply(this, arguments); }

function _objectWithoutProperties$1v(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1u(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1u(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Play = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1v(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1w({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polygon", {
    points: "5 3 19 12 5 21 5 3"
  }));
});
Play.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Play.displayName = 'Play';

function _extends$1v() { _extends$1v = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1v.apply(this, arguments); }

function _objectWithoutProperties$1u(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1t(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1t(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var PlusCircle = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1u(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1v({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "16"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "8",
    y1: "12",
    x2: "16",
    y2: "12"
  }));
});
PlusCircle.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
PlusCircle.displayName = 'PlusCircle';

function _extends$1u() { _extends$1u = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1u.apply(this, arguments); }

function _objectWithoutProperties$1t(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1s(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1s(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var PlusSquare = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1t(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1u({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "16"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "8",
    y1: "12",
    x2: "16",
    y2: "12"
  }));
});
PlusSquare.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
PlusSquare.displayName = 'PlusSquare';

function _extends$1t() { _extends$1t = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1t.apply(this, arguments); }

function _objectWithoutProperties$1s(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1r(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1r(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Plus = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1s(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1t({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "19"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }));
});
Plus.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Plus.displayName = 'Plus';

function _extends$1s() { _extends$1s = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1s.apply(this, arguments); }

function _objectWithoutProperties$1r(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1q(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1q(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Pocket = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1r(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1s({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "8 10 12 14 16 10"
  }));
});
Pocket.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Pocket.displayName = 'Pocket';

function _extends$1r() { _extends$1r = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1r.apply(this, arguments); }

function _objectWithoutProperties$1q(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1p(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1p(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Power = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1q(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1r({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18.36 6.64a9 9 0 1 1-12.73 0"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "12"
  }));
});
Power.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Power.displayName = 'Power';

function _extends$1q() { _extends$1q = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1q.apply(this, arguments); }

function _objectWithoutProperties$1p(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1o(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1o(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Printer = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1p(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1q({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "6 9 6 2 18 2 18 9"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
  }), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "6",
    y: "14",
    width: "12",
    height: "8"
  }));
});
Printer.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Printer.displayName = 'Printer';

function _extends$1p() { _extends$1p = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1p.apply(this, arguments); }

function _objectWithoutProperties$1o(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1n(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1n(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Radio$2 = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1o(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1p({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "2"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"
  }));
});
Radio$2.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Radio$2.displayName = 'Radio';

function _extends$1o() { _extends$1o = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1o.apply(this, arguments); }

function _objectWithoutProperties$1n(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1m(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1m(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var RefreshCcw = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1n(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1o({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "1 4 1 10 7 10"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "23 20 23 14 17 14"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"
  }));
});
RefreshCcw.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
RefreshCcw.displayName = 'RefreshCcw';

function _extends$1n() { _extends$1n = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1n.apply(this, arguments); }

function _objectWithoutProperties$1m(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1l(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1l(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var RefreshCw = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1m(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1n({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "23 4 23 10 17 10"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "1 20 1 14 7 14"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"
  }));
});
RefreshCw.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
RefreshCw.displayName = 'RefreshCw';

function _extends$1m() { _extends$1m = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1m.apply(this, arguments); }

function _objectWithoutProperties$1l(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1k(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1k(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Repeat = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1l(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1m({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "17 1 21 5 17 9"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M3 11V9a4 4 0 0 1 4-4h14"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "7 23 3 19 7 15"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 13v2a4 4 0 0 1-4 4H3"
  }));
});
Repeat.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Repeat.displayName = 'Repeat';

function _extends$1l() { _extends$1l = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1l.apply(this, arguments); }

function _objectWithoutProperties$1k(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1j(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1j(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Rewind = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1k(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1l({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polygon", {
    points: "11 19 2 12 11 5 11 19"
  }), /*#__PURE__*/React__default['default'].createElement("polygon", {
    points: "22 19 13 12 22 5 22 19"
  }));
});
Rewind.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Rewind.displayName = 'Rewind';

function _extends$1k() { _extends$1k = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1k.apply(this, arguments); }

function _objectWithoutProperties$1j(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1i(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1i(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var RotateCcw = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1j(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1k({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "1 4 1 10 7 10"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"
  }));
});
RotateCcw.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
RotateCcw.displayName = 'RotateCcw';

function _extends$1j() { _extends$1j = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1j.apply(this, arguments); }

function _objectWithoutProperties$1i(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1h(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1h(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var RotateCw = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1i(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1j({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "23 4 23 10 17 10"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20.49 15a9 9 0 1 1-2.12-9.36L23 10"
  }));
});
RotateCw.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
RotateCw.displayName = 'RotateCw';

function _extends$1i() { _extends$1i = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1i.apply(this, arguments); }

function _objectWithoutProperties$1h(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1g(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1g(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Rss = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1h(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1i({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M4 11a9 9 0 0 1 9 9"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M4 4a16 16 0 0 1 16 16"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "5",
    cy: "19",
    r: "1"
  }));
});
Rss.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Rss.displayName = 'Rss';

function _extends$1h() { _extends$1h = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1h.apply(this, arguments); }

function _objectWithoutProperties$1g(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1f(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1f(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Save = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1g(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1h({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "17 21 17 13 7 13 7 21"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "7 3 7 8 15 8"
  }));
});
Save.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Save.displayName = 'Save';

function _extends$1g() { _extends$1g = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1g.apply(this, arguments); }

function _objectWithoutProperties$1f(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1e(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1e(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Scissors = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1f(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1g({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "6",
    cy: "6",
    r: "3"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "6",
    cy: "18",
    r: "3"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "20",
    y1: "4",
    x2: "8.12",
    y2: "15.88"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "14.47",
    y1: "14.48",
    x2: "20",
    y2: "20"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "8.12",
    y1: "8.12",
    x2: "12",
    y2: "12"
  }));
});
Scissors.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Scissors.displayName = 'Scissors';

function _extends$1f() { _extends$1f = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1f.apply(this, arguments); }

function _objectWithoutProperties$1e(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1d(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1d(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Search = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1e(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1f({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "21",
    y1: "21",
    x2: "16.65",
    y2: "16.65"
  }));
});
Search.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Search.displayName = 'Search';

function _extends$1e() { _extends$1e = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1e.apply(this, arguments); }

function _objectWithoutProperties$1d(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1c(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1c(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Send = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1d(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1e({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "22",
    y1: "2",
    x2: "11",
    y2: "13"
  }), /*#__PURE__*/React__default['default'].createElement("polygon", {
    points: "22 2 15 22 11 13 2 9 22 2"
  }));
});
Send.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Send.displayName = 'Send';

function _extends$1d() { _extends$1d = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1d.apply(this, arguments); }

function _objectWithoutProperties$1c(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1b(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1b(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Server = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1c(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1d({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "8",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "2",
    y: "14",
    width: "20",
    height: "8",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "6",
    y1: "6",
    x2: "6.01",
    y2: "6"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "6",
    y1: "18",
    x2: "6.01",
    y2: "18"
  }));
});
Server.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Server.displayName = 'Server';

function _extends$1c() { _extends$1c = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1c.apply(this, arguments); }

function _objectWithoutProperties$1b(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1a(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1a(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Settings = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1b(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1c({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
  }));
});
Settings.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Settings.displayName = 'Settings';

function _extends$1b() { _extends$1b = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1b.apply(this, arguments); }

function _objectWithoutProperties$1a(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$19(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$19(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Share2 = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1a(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1b({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "18",
    cy: "5",
    r: "3"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "6",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "18",
    cy: "19",
    r: "3"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "8.59",
    y1: "13.51",
    x2: "15.42",
    y2: "17.49"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "15.41",
    y1: "6.51",
    x2: "8.59",
    y2: "10.49"
  }));
});
Share2.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Share2.displayName = 'Share2';

function _extends$1a() { _extends$1a = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1a.apply(this, arguments); }

function _objectWithoutProperties$19(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$18(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$18(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Share = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$19(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$1a({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "16 6 12 2 8 6"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "15"
  }));
});
Share.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Share.displayName = 'Share';

function _extends$19() { _extends$19 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$19.apply(this, arguments); }

function _objectWithoutProperties$18(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$17(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$17(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ShieldOff = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$18(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$19({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "1",
    y1: "1",
    x2: "23",
    y2: "23"
  }));
});
ShieldOff.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ShieldOff.displayName = 'ShieldOff';

function _extends$18() { _extends$18 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$18.apply(this, arguments); }

function _objectWithoutProperties$17(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$16(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$16(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Shield = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$17(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$18({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
  }));
});
Shield.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Shield.displayName = 'Shield';

function _extends$17() { _extends$17 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$17.apply(this, arguments); }

function _objectWithoutProperties$16(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$15(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$15(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ShoppingBag = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$16(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$17({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "3",
    y1: "6",
    x2: "21",
    y2: "6"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 10a4 4 0 0 1-8 0"
  }));
});
ShoppingBag.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ShoppingBag.displayName = 'ShoppingBag';

function _extends$16() { _extends$16 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$16.apply(this, arguments); }

function _objectWithoutProperties$15(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$14(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$14(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ShoppingCart = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$15(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$16({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "9",
    cy: "21",
    r: "1"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "20",
    cy: "21",
    r: "1"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
  }));
});
ShoppingCart.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ShoppingCart.displayName = 'ShoppingCart';

function _extends$15() { _extends$15 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$15.apply(this, arguments); }

function _objectWithoutProperties$14(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$13(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$13(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Shuffle = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$14(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$15({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "16 3 21 3 21 8"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "4",
    y1: "20",
    x2: "21",
    y2: "3"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "21 16 21 21 16 21"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "15",
    y1: "15",
    x2: "21",
    y2: "21"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "4",
    y1: "4",
    x2: "9",
    y2: "9"
  }));
});
Shuffle.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Shuffle.displayName = 'Shuffle';

function _extends$14() { _extends$14 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$14.apply(this, arguments); }

function _objectWithoutProperties$13(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$12(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$12(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Sidebar = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$13(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$14({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "9",
    y1: "3",
    x2: "9",
    y2: "21"
  }));
});
Sidebar.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Sidebar.displayName = 'Sidebar';

function _extends$13() { _extends$13 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$13.apply(this, arguments); }

function _objectWithoutProperties$12(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$11(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$11(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var SkipBack = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$12(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$13({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polygon", {
    points: "19 20 9 12 19 4 19 20"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "5",
    y1: "19",
    x2: "5",
    y2: "5"
  }));
});
SkipBack.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
SkipBack.displayName = 'SkipBack';

function _extends$12() { _extends$12 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$12.apply(this, arguments); }

function _objectWithoutProperties$11(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$10(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$10(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var SkipForward = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$11(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$12({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polygon", {
    points: "5 4 15 12 5 20 5 4"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "19",
    y1: "5",
    x2: "19",
    y2: "19"
  }));
});
SkipForward.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
SkipForward.displayName = 'SkipForward';

function _extends$11() { _extends$11 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$11.apply(this, arguments); }

function _objectWithoutProperties$10(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$$(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$$(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Slack = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$10(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$11({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"
  }));
});
Slack.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Slack.displayName = 'Slack';

function _extends$10() { _extends$10 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$10.apply(this, arguments); }

function _objectWithoutProperties$$(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$_(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$_(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Slash = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$$(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$10({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "4.93",
    y1: "4.93",
    x2: "19.07",
    y2: "19.07"
  }));
});
Slash.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Slash.displayName = 'Slash';

function _extends$$() { _extends$$ = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$$.apply(this, arguments); }

function _objectWithoutProperties$_(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$Z(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$Z(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Sliders = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$_(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$$({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "4",
    y1: "21",
    x2: "4",
    y2: "14"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "4",
    y1: "10",
    x2: "4",
    y2: "3"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "21",
    x2: "12",
    y2: "12"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "3"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "20",
    y1: "21",
    x2: "20",
    y2: "16"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "20",
    y1: "12",
    x2: "20",
    y2: "3"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "1",
    y1: "14",
    x2: "7",
    y2: "14"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "9",
    y1: "8",
    x2: "15",
    y2: "8"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "17",
    y1: "16",
    x2: "23",
    y2: "16"
  }));
});
Sliders.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Sliders.displayName = 'Sliders';

function _extends$_() { _extends$_ = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$_.apply(this, arguments); }

function _objectWithoutProperties$Z(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$Y(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$Y(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Smartphone = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$Z(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$_({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "5",
    y: "2",
    width: "14",
    height: "20",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "18",
    x2: "12.01",
    y2: "18"
  }));
});
Smartphone.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Smartphone.displayName = 'Smartphone';

function _extends$Z() { _extends$Z = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$Z.apply(this, arguments); }

function _objectWithoutProperties$Y(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$X(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$X(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Smile = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$Y(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$Z({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8 14s1.5 2 4 2 4-2 4-2"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "9",
    y1: "9",
    x2: "9.01",
    y2: "9"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "15",
    y1: "9",
    x2: "15.01",
    y2: "9"
  }));
});
Smile.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Smile.displayName = 'Smile';

function _extends$Y() { _extends$Y = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$Y.apply(this, arguments); }

function _objectWithoutProperties$X(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$W(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$W(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Speaker = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$X(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$Y({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "4",
    y: "2",
    width: "16",
    height: "20",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "14",
    r: "4"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "6",
    x2: "12.01",
    y2: "6"
  }));
});
Speaker.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Speaker.displayName = 'Speaker';

function _extends$X() { _extends$X = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$X.apply(this, arguments); }

function _objectWithoutProperties$W(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$V(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$V(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Square = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$W(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$X({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2",
    ry: "2"
  }));
});
Square.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Square.displayName = 'Square';

function _extends$W() { _extends$W = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$W.apply(this, arguments); }

function _objectWithoutProperties$V(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$U(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$U(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Star = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$V(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$W({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polygon", {
    points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
  }));
});
Star.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Star.displayName = 'Star';

function _extends$V() { _extends$V = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$V.apply(this, arguments); }

function _objectWithoutProperties$U(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$T(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$T(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var StopCircle = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$U(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$V({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "9",
    y: "9",
    width: "6",
    height: "6"
  }));
});
StopCircle.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
StopCircle.displayName = 'StopCircle';

function _extends$U() { _extends$U = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$U.apply(this, arguments); }

function _objectWithoutProperties$T(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$S(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$S(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Sun = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$T(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$U({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "1",
    x2: "12",
    y2: "3"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "21",
    x2: "12",
    y2: "23"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "4.22",
    y1: "4.22",
    x2: "5.64",
    y2: "5.64"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "18.36",
    y1: "18.36",
    x2: "19.78",
    y2: "19.78"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "1",
    y1: "12",
    x2: "3",
    y2: "12"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "21",
    y1: "12",
    x2: "23",
    y2: "12"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "4.22",
    y1: "19.78",
    x2: "5.64",
    y2: "18.36"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "18.36",
    y1: "5.64",
    x2: "19.78",
    y2: "4.22"
  }));
});
Sun.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Sun.displayName = 'Sun';

function _extends$T() { _extends$T = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$T.apply(this, arguments); }

function _objectWithoutProperties$S(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$R(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$R(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Sunrise = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$S(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$T({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M17 18a5 5 0 0 0-10 0"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "9"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "4.22",
    y1: "10.22",
    x2: "5.64",
    y2: "11.64"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "1",
    y1: "18",
    x2: "3",
    y2: "18"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "21",
    y1: "18",
    x2: "23",
    y2: "18"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "18.36",
    y1: "11.64",
    x2: "19.78",
    y2: "10.22"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "23",
    y1: "22",
    x2: "1",
    y2: "22"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "8 6 12 2 16 6"
  }));
});
Sunrise.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Sunrise.displayName = 'Sunrise';

function _extends$S() { _extends$S = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$S.apply(this, arguments); }

function _objectWithoutProperties$R(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$Q(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$Q(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Sunset = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$R(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$S({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M17 18a5 5 0 0 0-10 0"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "9",
    x2: "12",
    y2: "2"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "4.22",
    y1: "10.22",
    x2: "5.64",
    y2: "11.64"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "1",
    y1: "18",
    x2: "3",
    y2: "18"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "21",
    y1: "18",
    x2: "23",
    y2: "18"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "18.36",
    y1: "11.64",
    x2: "19.78",
    y2: "10.22"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "23",
    y1: "22",
    x2: "1",
    y2: "22"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "16 5 12 9 8 5"
  }));
});
Sunset.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Sunset.displayName = 'Sunset';

function _extends$R() { _extends$R = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$R.apply(this, arguments); }

function _objectWithoutProperties$Q(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$P(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$P(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Tablet = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$Q(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$R({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "4",
    y: "2",
    width: "16",
    height: "20",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "18",
    x2: "12.01",
    y2: "18"
  }));
});
Tablet.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Tablet.displayName = 'Tablet';

function _extends$Q() { _extends$Q = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$Q.apply(this, arguments); }

function _objectWithoutProperties$P(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$O(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$O(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Tag = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$P(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$Q({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "7",
    y1: "7",
    x2: "7.01",
    y2: "7"
  }));
});
Tag.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Tag.displayName = 'Tag';

function _extends$P() { _extends$P = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$P.apply(this, arguments); }

function _objectWithoutProperties$O(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$N(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$N(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Target = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$O(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$P({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "6"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "2"
  }));
});
Target.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Target.displayName = 'Target';

function _extends$O() { _extends$O = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$O.apply(this, arguments); }

function _objectWithoutProperties$N(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$M(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$M(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Terminal = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$N(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$O({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "4 17 10 11 4 5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "19",
    x2: "20",
    y2: "19"
  }));
});
Terminal.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Terminal.displayName = 'Terminal';

function _extends$N() { _extends$N = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$N.apply(this, arguments); }

function _objectWithoutProperties$M(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$L(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$L(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Thermometer = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$M(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$N({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"
  }));
});
Thermometer.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Thermometer.displayName = 'Thermometer';

function _extends$M() { _extends$M = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$M.apply(this, arguments); }

function _objectWithoutProperties$L(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$K(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$K(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ThumbsDown = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$L(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$M({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"
  }));
});
ThumbsDown.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ThumbsDown.displayName = 'ThumbsDown';

function _extends$L() { _extends$L = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$L.apply(this, arguments); }

function _objectWithoutProperties$K(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$J(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$J(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ThumbsUp = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$K(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$L({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
  }));
});
ThumbsUp.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ThumbsUp.displayName = 'ThumbsUp';

function _extends$K() { _extends$K = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$K.apply(this, arguments); }

function _objectWithoutProperties$J(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$I(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$I(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ToggleLeft = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$J(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$K({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "1",
    y: "5",
    width: "22",
    height: "14",
    rx: "7",
    ry: "7"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "8",
    cy: "12",
    r: "3"
  }));
});
ToggleLeft.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ToggleLeft.displayName = 'ToggleLeft';

function _extends$J() { _extends$J = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$J.apply(this, arguments); }

function _objectWithoutProperties$I(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$H(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$H(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ToggleRight = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$I(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$J({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "1",
    y: "5",
    width: "22",
    height: "14",
    rx: "7",
    ry: "7"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "16",
    cy: "12",
    r: "3"
  }));
});
ToggleRight.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ToggleRight.displayName = 'ToggleRight';

function _extends$I() { _extends$I = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$I.apply(this, arguments); }

function _objectWithoutProperties$H(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$G(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$G(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Tool = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$H(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$I({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
  }));
});
Tool.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Tool.displayName = 'Tool';

function _extends$H() { _extends$H = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$H.apply(this, arguments); }

function _objectWithoutProperties$G(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$F(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$F(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Trash2 = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$G(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$H({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "3 6 5 6 21 6"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "10",
    y1: "11",
    x2: "10",
    y2: "17"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "14",
    y1: "11",
    x2: "14",
    y2: "17"
  }));
});
Trash2.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Trash2.displayName = 'Trash2';

function _extends$G() { _extends$G = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$G.apply(this, arguments); }

function _objectWithoutProperties$F(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$E(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$E(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Trash = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$F(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$G({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "3 6 5 6 21 6"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
  }));
});
Trash.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Trash.displayName = 'Trash';

function _extends$F() { _extends$F = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$F.apply(this, arguments); }

function _objectWithoutProperties$E(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$D(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$D(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Trello = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$E(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$F({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "7",
    y: "7",
    width: "3",
    height: "9"
  }), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "14",
    y: "7",
    width: "3",
    height: "5"
  }));
});
Trello.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Trello.displayName = 'Trello';

function _extends$E() { _extends$E = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$E.apply(this, arguments); }

function _objectWithoutProperties$D(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$C(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$C(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var TrendingDown = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$D(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$E({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "23 18 13.5 8.5 8.5 13.5 1 6"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "17 18 23 18 23 12"
  }));
});
TrendingDown.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
TrendingDown.displayName = 'TrendingDown';

function _extends$D() { _extends$D = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$D.apply(this, arguments); }

function _objectWithoutProperties$C(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$B(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$B(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var TrendingUp = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$C(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$D({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "23 6 13.5 15.5 8.5 10.5 1 18"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "17 6 23 6 23 12"
  }));
});
TrendingUp.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
TrendingUp.displayName = 'TrendingUp';

function _extends$C() { _extends$C = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$C.apply(this, arguments); }

function _objectWithoutProperties$B(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$A(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$A(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Triangle = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$B(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$C({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
  }));
});
Triangle.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Triangle.displayName = 'Triangle';

function _extends$B() { _extends$B = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$B.apply(this, arguments); }

function _objectWithoutProperties$A(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$z(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$z(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Truck = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$A(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$B({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "1",
    y: "3",
    width: "15",
    height: "13"
  }), /*#__PURE__*/React__default['default'].createElement("polygon", {
    points: "16 8 20 8 23 11 23 16 16 16 16 8"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "5.5",
    cy: "18.5",
    r: "2.5"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "18.5",
    cy: "18.5",
    r: "2.5"
  }));
});
Truck.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Truck.displayName = 'Truck';

function _extends$A() { _extends$A = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$A.apply(this, arguments); }

function _objectWithoutProperties$z(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$y(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$y(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Tv = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$z(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$A({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "2",
    y: "7",
    width: "20",
    height: "15",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "17 2 12 7 7 2"
  }));
});
Tv.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Tv.displayName = 'Tv';

function _extends$z() { _extends$z = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$z.apply(this, arguments); }

function _objectWithoutProperties$y(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$x(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$x(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Twitch = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$y(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$z({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"
  }));
});
Twitch.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Twitch.displayName = 'Twitch';

function _extends$y() { _extends$y = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$y.apply(this, arguments); }

function _objectWithoutProperties$x(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$w(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$w(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Twitter = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$x(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$y({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
  }));
});
Twitter.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Twitter.displayName = 'Twitter';

function _extends$x() { _extends$x = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$x.apply(this, arguments); }

function _objectWithoutProperties$w(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$v(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$v(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Type = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$w(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$x({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "4 7 4 4 20 4 20 7"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "9",
    y1: "20",
    x2: "15",
    y2: "20"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "4",
    x2: "12",
    y2: "20"
  }));
});
Type.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Type.displayName = 'Type';

function _extends$w() { _extends$w = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$w.apply(this, arguments); }

function _objectWithoutProperties$v(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$u(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$u(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Umbrella = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$v(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$w({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"
  }));
});
Umbrella.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Umbrella.displayName = 'Umbrella';

function _extends$v() { _extends$v = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$v.apply(this, arguments); }

function _objectWithoutProperties$u(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$t(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$t(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Underline = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$u(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$v({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "4",
    y1: "21",
    x2: "20",
    y2: "21"
  }));
});
Underline.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Underline.displayName = 'Underline';

function _extends$u() { _extends$u = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$u.apply(this, arguments); }

function _objectWithoutProperties$t(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$s(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$s(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Unlock = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$t(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$u({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "3",
    y: "11",
    width: "18",
    height: "11",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M7 11V7a5 5 0 0 1 9.9-1"
  }));
});
Unlock.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Unlock.displayName = 'Unlock';

function _extends$t() { _extends$t = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$t.apply(this, arguments); }

function _objectWithoutProperties$s(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$r(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$r(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var UploadCloud = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$s(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$t({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "16 16 12 12 8 16"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "12",
    x2: "12",
    y2: "21"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "16 16 12 12 8 16"
  }));
});
UploadCloud.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
UploadCloud.displayName = 'UploadCloud';

function _extends$s() { _extends$s = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$s.apply(this, arguments); }

function _objectWithoutProperties$r(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$q(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$q(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Upload = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$r(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$s({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "17 8 12 3 7 8"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "3",
    x2: "12",
    y2: "15"
  }));
});
Upload.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Upload.displayName = 'Upload';

function _extends$r() { _extends$r = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$r.apply(this, arguments); }

function _objectWithoutProperties$q(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$p(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$p(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var UserCheck = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$q(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$r({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "8.5",
    cy: "7",
    r: "4"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "17 11 19 13 23 9"
  }));
});
UserCheck.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
UserCheck.displayName = 'UserCheck';

function _extends$q() { _extends$q = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$q.apply(this, arguments); }

function _objectWithoutProperties$p(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$o(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$o(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var UserMinus = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$p(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$q({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "8.5",
    cy: "7",
    r: "4"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "23",
    y1: "11",
    x2: "17",
    y2: "11"
  }));
});
UserMinus.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
UserMinus.displayName = 'UserMinus';

function _extends$p() { _extends$p = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$p.apply(this, arguments); }

function _objectWithoutProperties$o(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$n(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$n(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var UserPlus = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$o(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$p({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "8.5",
    cy: "7",
    r: "4"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "20",
    y1: "8",
    x2: "20",
    y2: "14"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "23",
    y1: "11",
    x2: "17",
    y2: "11"
  }));
});
UserPlus.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
UserPlus.displayName = 'UserPlus';

function _extends$o() { _extends$o = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$o.apply(this, arguments); }

function _objectWithoutProperties$n(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$m(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$m(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var UserX = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$n(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$o({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "8.5",
    cy: "7",
    r: "4"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "18",
    y1: "8",
    x2: "23",
    y2: "13"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "23",
    y1: "8",
    x2: "18",
    y2: "13"
  }));
});
UserX.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
UserX.displayName = 'UserX';

function _extends$n() { _extends$n = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$n.apply(this, arguments); }

function _objectWithoutProperties$m(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$l(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$l(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var User = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$m(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$n({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "7",
    r: "4"
  }));
});
User.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
User.displayName = 'User';

function _extends$m() { _extends$m = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$m.apply(this, arguments); }

function _objectWithoutProperties$l(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$k(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$k(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Users = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$l(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$m({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "9",
    cy: "7",
    r: "4"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M23 21v-2a4 4 0 0 0-3-3.87"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75"
  }));
});
Users.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Users.displayName = 'Users';

function _extends$l() { _extends$l = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$l.apply(this, arguments); }

function _objectWithoutProperties$k(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$j(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$j(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var VideoOff = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$k(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$l({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "1",
    y1: "1",
    x2: "23",
    y2: "23"
  }));
});
VideoOff.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
VideoOff.displayName = 'VideoOff';

function _extends$k() { _extends$k = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$k.apply(this, arguments); }

function _objectWithoutProperties$j(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$i(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$i(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Video = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$j(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$k({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polygon", {
    points: "23 7 16 12 23 17 23 7"
  }), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "1",
    y: "5",
    width: "15",
    height: "14",
    rx: "2",
    ry: "2"
  }));
});
Video.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Video.displayName = 'Video';

function _extends$j() { _extends$j = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$j.apply(this, arguments); }

function _objectWithoutProperties$i(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$h(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$h(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Voicemail = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$i(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$j({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "5.5",
    cy: "11.5",
    r: "4.5"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "18.5",
    cy: "11.5",
    r: "4.5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "5.5",
    y1: "16",
    x2: "18.5",
    y2: "16"
  }));
});
Voicemail.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Voicemail.displayName = 'Voicemail';

function _extends$i() { _extends$i = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$i.apply(this, arguments); }

function _objectWithoutProperties$h(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$g(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$g(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Volume1 = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$h(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$i({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polygon", {
    points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M15.54 8.46a5 5 0 0 1 0 7.07"
  }));
});
Volume1.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Volume1.displayName = 'Volume1';

function _extends$h() { _extends$h = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$h.apply(this, arguments); }

function _objectWithoutProperties$g(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$f(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$f(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Volume2 = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$g(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$h({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polygon", {
    points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"
  }));
});
Volume2.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Volume2.displayName = 'Volume2';

function _extends$g() { _extends$g = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$g.apply(this, arguments); }

function _objectWithoutProperties$f(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$e(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$e(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var VolumeX = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$f(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$g({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polygon", {
    points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "23",
    y1: "9",
    x2: "17",
    y2: "15"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "17",
    y1: "9",
    x2: "23",
    y2: "15"
  }));
});
VolumeX.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
VolumeX.displayName = 'VolumeX';

function _extends$f() { _extends$f = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$f.apply(this, arguments); }

function _objectWithoutProperties$e(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$d(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$d(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Volume = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$e(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$f({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polygon", {
    points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
  }));
});
Volume.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Volume.displayName = 'Volume';

function _extends$e() { _extends$e = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$e.apply(this, arguments); }

function _objectWithoutProperties$d(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$c(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$c(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Watch = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$d(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$e({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "7"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "12 9 12 12 13.5 13.5"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"
  }));
});
Watch.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Watch.displayName = 'Watch';

function _extends$d() { _extends$d = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$d.apply(this, arguments); }

function _objectWithoutProperties$c(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$b(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$b(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var WifiOff = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$c(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$d({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "1",
    y1: "1",
    x2: "23",
    y2: "23"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16.72 11.06A10.94 10.94 0 0 1 19 12.55"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5 12.55a10.94 10.94 0 0 1 5.17-2.39"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M10.71 5.05A16 16 0 0 1 22.58 9"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M1.42 9a15.91 15.91 0 0 1 4.7-2.88"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8.53 16.11a6 6 0 0 1 6.95 0"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "20",
    x2: "12.01",
    y2: "20"
  }));
});
WifiOff.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
WifiOff.displayName = 'WifiOff';

function _extends$c() { _extends$c = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$c.apply(this, arguments); }

function _objectWithoutProperties$b(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$a(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$a(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Wifi = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$b(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$c({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5 12.55a11 11 0 0 1 14.08 0"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M1.42 9a16 16 0 0 1 21.16 0"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8.53 16.11a6 6 0 0 1 6.95 0"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "12",
    y1: "20",
    x2: "12.01",
    y2: "20"
  }));
});
Wifi.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Wifi.displayName = 'Wifi';

function _extends$b() { _extends$b = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$b.apply(this, arguments); }

function _objectWithoutProperties$a(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$9(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$9(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Wind = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$a(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$b({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"
  }));
});
Wind.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Wind.displayName = 'Wind';

function _extends$a() { _extends$a = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$a.apply(this, arguments); }

function _objectWithoutProperties$9(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$8(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$8(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var XCircle = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$9(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$a({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "15",
    y1: "9",
    x2: "9",
    y2: "15"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "9",
    y1: "9",
    x2: "15",
    y2: "15"
  }));
});
XCircle.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
XCircle.displayName = 'XCircle';

function _extends$9() { _extends$9 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$9.apply(this, arguments); }

function _objectWithoutProperties$8(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$7(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$7(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var XOctagon = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$8(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$9({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polygon", {
    points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "15",
    y1: "9",
    x2: "9",
    y2: "15"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "9",
    y1: "9",
    x2: "15",
    y2: "15"
  }));
});
XOctagon.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
XOctagon.displayName = 'XOctagon';

function _extends$8() { _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$8.apply(this, arguments); }

function _objectWithoutProperties$7(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$6(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$6(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var XSquare = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$7(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$8({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "9",
    y1: "9",
    x2: "15",
    y2: "15"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "15",
    y1: "9",
    x2: "9",
    y2: "15"
  }));
});
XSquare.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
XSquare.displayName = 'XSquare';

function _extends$7() { _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }

function _objectWithoutProperties$6(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$5(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$5(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var X = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$6(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$7({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }));
});
X.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
X.displayName = 'X';

function _extends$6() { _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }

function _objectWithoutProperties$5(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$4(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$4(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Youtube = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$5(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$6({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
  }), /*#__PURE__*/React__default['default'].createElement("polygon", {
    points: "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
  }));
});
Youtube.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Youtube.displayName = 'Youtube';

function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

function _objectWithoutProperties$4(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ZapOff = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$4(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$5({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "12.41 6.75 13 2 10.57 4.92"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "18.57 12.91 21 10 15.66 10"
  }), /*#__PURE__*/React__default['default'].createElement("polyline", {
    points: "8 8 3 14 12 14 11 22 16 16"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "1",
    y1: "1",
    x2: "23",
    y2: "23"
  }));
});
ZapOff.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ZapOff.displayName = 'ZapOff';

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

function _objectWithoutProperties$3(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Zap = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$4({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("polygon", {
    points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
  }));
});
Zap.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
Zap.displayName = 'Zap';

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

function _objectWithoutProperties$2(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ZoomIn = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$3({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "21",
    y1: "21",
    x2: "16.65",
    y2: "16.65"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "11",
    y1: "8",
    x2: "11",
    y2: "14"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "8",
    y1: "11",
    x2: "14",
    y2: "11"
  }));
});
ZoomIn.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ZoomIn.displayName = 'ZoomIn';

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function _objectWithoutProperties$1(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ZoomOut = React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1(_ref, ["color", "size"]);

  return /*#__PURE__*/React__default['default'].createElement("svg", _extends$2({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "21",
    y1: "21",
    x2: "16.65",
    y2: "16.65"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "8",
    y1: "11",
    x2: "14",
    y2: "11"
  }));
});
ZoomOut.propTypes = {
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number])
};
ZoomOut.displayName = 'ZoomOut';

var Icons = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Activity: Activity,
  Airplay: Airplay,
  AlertCircle: AlertCircle,
  AlertOctagon: AlertOctagon,
  AlertTriangle: AlertTriangle,
  AlignCenter: AlignCenter,
  AlignJustify: AlignJustify,
  AlignLeft: AlignLeft,
  AlignRight: AlignRight,
  Anchor: Anchor,
  Aperture: Aperture,
  Archive: Archive,
  ArrowDownCircle: ArrowDownCircle,
  ArrowDownLeft: ArrowDownLeft,
  ArrowDownRight: ArrowDownRight,
  ArrowDown: ArrowDown,
  ArrowLeftCircle: ArrowLeftCircle,
  ArrowLeft: ArrowLeft,
  ArrowRightCircle: ArrowRightCircle,
  ArrowRight: ArrowRight,
  ArrowUpCircle: ArrowUpCircle,
  ArrowUpLeft: ArrowUpLeft,
  ArrowUpRight: ArrowUpRight,
  ArrowUp: ArrowUp,
  AtSign: AtSign,
  Award: Award,
  BarChart2: BarChart2,
  BarChart: BarChart,
  BatteryCharging: BatteryCharging,
  Battery: Battery,
  BellOff: BellOff,
  Bell: Bell,
  Bluetooth: Bluetooth,
  Bold: Bold,
  BookOpen: BookOpen,
  Book: Book,
  Bookmark: Bookmark,
  Box: Box,
  Briefcase: Briefcase,
  Calendar: Calendar,
  CameraOff: CameraOff,
  Camera: Camera,
  Cast: Cast,
  CheckCircle: CheckCircle,
  CheckSquare: CheckSquare,
  Check: Check,
  ChevronDown: ChevronDown,
  ChevronLeft: ChevronLeft,
  ChevronRight: ChevronRight,
  ChevronUp: ChevronUp,
  ChevronsDown: ChevronsDown,
  ChevronsLeft: ChevronsLeft,
  ChevronsRight: ChevronsRight,
  ChevronsUp: ChevronsUp,
  Chrome: Chrome,
  Circle: Circle,
  Clipboard: Clipboard,
  Clock: Clock,
  CloudDrizzle: CloudDrizzle,
  CloudLightning: CloudLightning,
  CloudOff: CloudOff,
  CloudRain: CloudRain,
  CloudSnow: CloudSnow,
  Cloud: Cloud,
  Code: Code,
  Codepen: Codepen,
  Codesandbox: Codesandbox,
  Coffee: Coffee,
  Columns: Columns,
  Command: Command,
  Compass: Compass,
  Copy: Copy,
  CornerDownLeft: CornerDownLeft,
  CornerDownRight: CornerDownRight,
  CornerLeftDown: CornerLeftDown,
  CornerLeftUp: CornerLeftUp,
  CornerRightDown: CornerRightDown,
  CornerRightUp: CornerRightUp,
  CornerUpLeft: CornerUpLeft,
  CornerUpRight: CornerUpRight,
  Cpu: Cpu,
  CreditCard: CreditCard,
  Crop: Crop,
  Crosshair: Crosshair,
  Database: Database,
  Delete: Delete,
  Disc: Disc,
  DivideCircle: DivideCircle,
  DivideSquare: DivideSquare,
  Divide: Divide,
  DollarSign: DollarSign,
  DownloadCloud: DownloadCloud,
  Download: Download,
  Dribbble: Dribbble,
  Droplet: Droplet,
  Edit2: Edit2,
  Edit3: Edit3,
  Edit: Edit,
  ExternalLink: ExternalLink,
  EyeOff: EyeOff,
  Eye: Eye,
  Facebook: Facebook,
  FastForward: FastForward,
  Feather: Feather,
  Figma: Figma,
  FileMinus: FileMinus,
  FilePlus: FilePlus,
  FileText: FileText,
  File: File,
  Film: Film,
  Filter: Filter,
  Flag: Flag,
  FolderMinus: FolderMinus,
  FolderPlus: FolderPlus,
  Folder: Folder,
  Framer: Framer,
  Frown: Frown,
  Gift: Gift,
  GitBranch: GitBranch,
  GitCommit: GitCommit,
  GitMerge: GitMerge,
  GitPullRequest: GitPullRequest,
  GitHub: GitHub,
  Gitlab: Gitlab,
  Globe: Globe,
  Grid: Grid,
  HardDrive: HardDrive,
  Hash: Hash,
  Headphones: Headphones,
  Heart: Heart,
  HelpCircle: HelpCircle,
  Hexagon: Hexagon,
  Home: Home,
  Image: Image,
  Inbox: Inbox,
  Info: Info,
  Instagram: Instagram,
  Italic: Italic,
  Key: Key,
  Layers: Layers,
  Layout: Layout,
  LifeBuoy: LifeBuoy,
  Link2: Link2,
  Link: Link$1,
  Linkedin: Linkedin,
  List: List,
  Loader: Loader,
  Lock: Lock,
  LogIn: LogIn,
  LogOut: LogOut,
  Mail: Mail,
  MapPin: MapPin,
  Map: Map,
  Maximize2: Maximize2,
  Maximize: Maximize,
  Meh: Meh,
  Menu: Menu$1,
  MessageCircle: MessageCircle,
  MessageSquare: MessageSquare,
  MicOff: MicOff,
  Mic: Mic,
  Minimize2: Minimize2,
  Minimize: Minimize,
  MinusCircle: MinusCircle,
  MinusSquare: MinusSquare,
  Minus: Minus,
  Monitor: Monitor,
  Moon: Moon,
  MoreHorizontal: MoreHorizontal,
  MoreVertical: MoreVertical,
  MousePointer: MousePointer,
  Move: Move,
  Music: Music,
  Navigation2: Navigation2,
  Navigation: Navigation,
  Octagon: Octagon,
  Package: Package,
  Paperclip: Paperclip,
  PauseCircle: PauseCircle,
  Pause: Pause,
  PenTool: PenTool,
  Percent: Percent,
  PhoneCall: PhoneCall,
  PhoneForwarded: PhoneForwarded,
  PhoneIncoming: PhoneIncoming,
  PhoneMissed: PhoneMissed,
  PhoneOff: PhoneOff,
  PhoneOutgoing: PhoneOutgoing,
  Phone: Phone,
  PieChart: PieChart,
  PlayCircle: PlayCircle,
  Play: Play,
  PlusCircle: PlusCircle,
  PlusSquare: PlusSquare,
  Plus: Plus,
  Pocket: Pocket,
  Power: Power,
  Printer: Printer,
  Radio: Radio$2,
  RefreshCcw: RefreshCcw,
  RefreshCw: RefreshCw,
  Repeat: Repeat,
  Rewind: Rewind,
  RotateCcw: RotateCcw,
  RotateCw: RotateCw,
  Rss: Rss,
  Save: Save,
  Scissors: Scissors,
  Search: Search,
  Send: Send,
  Server: Server,
  Settings: Settings,
  Share2: Share2,
  Share: Share,
  ShieldOff: ShieldOff,
  Shield: Shield,
  ShoppingBag: ShoppingBag,
  ShoppingCart: ShoppingCart,
  Shuffle: Shuffle,
  Sidebar: Sidebar,
  SkipBack: SkipBack,
  SkipForward: SkipForward,
  Slack: Slack,
  Slash: Slash,
  Sliders: Sliders,
  Smartphone: Smartphone,
  Smile: Smile,
  Speaker: Speaker,
  Square: Square,
  Star: Star,
  StopCircle: StopCircle,
  Sun: Sun,
  Sunrise: Sunrise,
  Sunset: Sunset,
  Tablet: Tablet,
  Tag: Tag,
  Target: Target,
  Terminal: Terminal,
  Thermometer: Thermometer,
  ThumbsDown: ThumbsDown,
  ThumbsUp: ThumbsUp,
  ToggleLeft: ToggleLeft,
  ToggleRight: ToggleRight,
  Tool: Tool,
  Trash2: Trash2,
  Trash: Trash,
  Trello: Trello,
  TrendingDown: TrendingDown,
  TrendingUp: TrendingUp,
  Triangle: Triangle,
  Truck: Truck,
  Tv: Tv,
  Twitch: Twitch,
  Twitter: Twitter,
  Type: Type,
  Umbrella: Umbrella,
  Underline: Underline,
  Unlock: Unlock,
  UploadCloud: UploadCloud,
  Upload: Upload,
  UserCheck: UserCheck,
  UserMinus: UserMinus,
  UserPlus: UserPlus,
  UserX: UserX,
  User: User,
  Users: Users,
  VideoOff: VideoOff,
  Video: Video,
  Voicemail: Voicemail,
  Volume1: Volume1,
  Volume2: Volume2,
  VolumeX: VolumeX,
  Volume: Volume,
  Watch: Watch,
  WifiOff: WifiOff,
  Wifi: Wifi,
  Wind: Wind,
  XCircle: XCircle,
  XOctagon: XOctagon,
  XSquare: XSquare,
  X: X,
  Youtube: Youtube,
  ZapOff: ZapOff,
  Zap: Zap,
  ZoomIn: ZoomIn,
  ZoomOut: ZoomOut
});

var Icon = function Icon(_ref) {
  var as = _ref.as,
      size = _ref.size,
      color = _ref.color,
      variant = _ref.variant,
      padding = _ref.padding,
      onClick = _ref.onClick,
      isSolid = _ref.isSolid,
      isDisabled = _ref.isDisabled,
      isRounded = _ref.isRounded,
      isFocusable = _ref.isFocusable,
      className = _ref.className;
      _objectWithoutProperties$4v(_ref, ["as", "size", "color", "variant", "padding", "onClick", "isSolid", "isDisabled", "isRounded", "isFocusable", "className"]);

  var Icon = Icons[as];
  var iconClasses = classnames("h-".concat(size), "w-".concat(size), "p-".concat(padding), className, {
    'rounded': !isRounded,
    'rounded-full': isRounded,
    'fill-current': isSolid
  });
  return variant === 'clickable' ? /*#__PURE__*/React__default['default'].createElement(Clickable, {
    as: "div",
    onClick: onClick,
    disabled: isDisabled,
    focusable: isFocusable,
    className: "icon--clickable"
  }, /*#__PURE__*/React.cloneElement( /*#__PURE__*/React__default['default'].createElement(Icon, null), {
    className: "icon--clickable--".concat(color, " ").concat(iconClasses)
  })) : /*#__PURE__*/React.cloneElement( /*#__PURE__*/React__default['default'].createElement(Icon, null), {
    className: "icon--".concat(variant, "--").concat(color, " ").concat(iconClasses)
  });
};
Icon.id = 'Icon';
Icon.defaultProps = {
  size: 4,
  padding: 0,
  variant: 'default',
  isSolid: false,
  isRounded: false,
  isDisabled: false,
  isFocusable: false,
  className: ''
};
Icon.propTypes = {
  size: propTypes.number,
  padding: propTypes.number,
  color: propTypes.string,
  variant: propTypes.string,
  onClick: propTypes.func,
  isSolid: propTypes.bool,
  isRounded: propTypes.bool,
  isDisabled: propTypes.bool,
  isFocusable: propTypes.bool,
  className: propTypes.string,
  as: propTypes.string.isRequired
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var NODE_ENV = process.env.NODE_ENV;

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

var invariant_1 = invariant;

var key = '__global_unique_id__';

var gud = function() {
  return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
};

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = process.env.NODE_ENV !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

var warning_1 = warning;

var implementation = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



_interopRequireDefault(React__default['default']);



var _propTypes2 = _interopRequireDefault(propTypes);



var _gud2 = _interopRequireDefault(gud);



var _warning2 = _interopRequireDefault(warning_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MAX_SIGNED_31_BIT_INT = 1073741823;

// Inlined Object.is polyfill.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + (0, _gud2.default)() + '__';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    function Provider() {
      var _temp, _this, _ret;

      _classCallCheck(this, Provider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
    }

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits = void 0;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0; // No change
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
          if (process.env.NODE_ENV !== 'production') {
            (0, _warning2.default)((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: %s', changedBits);
          }

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    Provider.prototype.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(React__default['default'].Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);

  var Consumer = function (_Component2) {
    _inherits(Consumer, _Component2);

    function Consumer() {
      var _temp2, _this2, _ret2;

      _classCallCheck(this, Consumer);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
        value: _this2.getValue()
      }, _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;
        if ((observedBits & changedBits) !== 0) {
          _this2.setState({ value: _this2.getValue() });
        }
      }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    Consumer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }
      var observedBits = this.props.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    Consumer.prototype.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    Consumer.prototype.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(React__default['default'].Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);


  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

exports.default = createReactContext;
module.exports = exports['default'];
});

unwrapExports(implementation);

var lib = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _react2 = _interopRequireDefault(React__default['default']);



var _implementation2 = _interopRequireDefault(implementation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createContext || _implementation2.default;
module.exports = exports['default'];
});

var createContext = unwrapExports(lib);

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}

////////////////////////////////////////////////////////////////////////////////
// startsWith(string, search) - Check if `string` starts with `search`
var startsWith = function startsWith(string, search) {
  return string.substr(0, search.length) === search;
};

////////////////////////////////////////////////////////////////////////////////
// pick(routes, uri)
//
// Ranks and picks the best route to match. Each segment gets the highest
// amount of points, then the type of segment gets an additional amount of
// points where
//
//     static > dynamic > splat > root
//
// This way we don't have to worry about the order of our routes, let the
// computers do it.
//
// A route looks like this
//
//     { path, default, value }
//
// And a returned match looks like:
//
//     { route, params, uri }
//
// I know, I should use TypeScript not comments for these types.
var pick = function pick(routes, uri) {
  var match = void 0;
  var default_ = void 0;

  var _uri$split = uri.split("?"),
      uriPathname = _uri$split[0];

  var uriSegments = segmentize(uriPathname);
  var isRootUri = uriSegments[0] === "";
  var ranked = rankRoutes(routes);

  for (var i = 0, l = ranked.length; i < l; i++) {
    var missed = false;
    var route = ranked[i].route;

    if (route.default) {
      default_ = {
        route: route,
        params: {},
        uri: uri
      };
      continue;
    }

    var routeSegments = segmentize(route.path);
    var params = {};
    var max = Math.max(uriSegments.length, routeSegments.length);
    var index = 0;

    for (; index < max; index++) {
      var routeSegment = routeSegments[index];
      var uriSegment = uriSegments[index];

      if (isSplat(routeSegment)) {
        // Hit a splat, just grab the rest, and return a match
        // uri:   /files/documents/work
        // route: /files/*
        var param = routeSegment.slice(1) || "*";
        params[param] = uriSegments.slice(index).map(decodeURIComponent).join("/");
        break;
      }

      if (uriSegment === undefined) {
        // URI is shorter than the route, no match
        // uri:   /users
        // route: /users/:userId
        missed = true;
        break;
      }

      var dynamicMatch = paramRe.exec(routeSegment);

      if (dynamicMatch && !isRootUri) {
        var matchIsNotReserved = reservedNames.indexOf(dynamicMatch[1]) === -1;
        !matchIsNotReserved ? process.env.NODE_ENV !== "production" ? invariant_1(false, "<Router> dynamic segment \"" + dynamicMatch[1] + "\" is a reserved name. Please use a different name in path \"" + route.path + "\".") : invariant_1(false) : void 0;
        var value = decodeURIComponent(uriSegment);
        params[dynamicMatch[1]] = value;
      } else if (routeSegment !== uriSegment) {
        // Current segments don't match, not dynamic, not splat, so no match
        // uri:   /users/123/settings
        // route: /users/:id/profile
        missed = true;
        break;
      }
    }

    if (!missed) {
      match = {
        route: route,
        params: params,
        uri: "/" + uriSegments.slice(0, index).join("/")
      };
      break;
    }
  }

  return match || default_ || null;
};

////////////////////////////////////////////////////////////////////////////////
// resolve(to, basepath)
//
// Resolves URIs as though every path is a directory, no files.  Relative URIs
// in the browser can feel awkward because not only can you be "in a directory"
// you can be "at a file", too. For example
//
//     browserSpecResolve('foo', '/bar/') => /bar/foo
//     browserSpecResolve('foo', '/bar') => /foo
//
// But on the command line of a file system, it's not as complicated, you can't
// `cd` from a file, only directories.  This way, links have to know less about
// their current path. To go deeper you can do this:
//
//     <Link to="deeper"/>
//     // instead of
//     <Link to=`{${props.uri}/deeper}`/>
//
// Just like `cd`, if you want to go deeper from the command line, you do this:
//
//     cd deeper
//     # not
//     cd $(pwd)/deeper
//
// By treating every path as a directory, linking to relative paths should
// require less contextual information and (fingers crossed) be more intuitive.
var resolve = function resolve(to, base) {
  // /foo/bar, /baz/qux => /foo/bar
  if (startsWith(to, "/")) {
    return to;
  }

  var _to$split = to.split("?"),
      toPathname = _to$split[0],
      toQuery = _to$split[1];

  var _base$split = base.split("?"),
      basePathname = _base$split[0];

  var toSegments = segmentize(toPathname);
  var baseSegments = segmentize(basePathname);

  // ?a=b, /users?b=c => /users?a=b
  if (toSegments[0] === "") {
    return addQuery(basePathname, toQuery);
  }

  // profile, /users/789 => /users/789/profile
  if (!startsWith(toSegments[0], ".")) {
    var pathname = baseSegments.concat(toSegments).join("/");
    return addQuery((basePathname === "/" ? "" : "/") + pathname, toQuery);
  }

  // ./         /users/123  =>  /users/123
  // ../        /users/123  =>  /users
  // ../..      /users/123  =>  /
  // ../../one  /a/b/c/d    =>  /a/b/one
  // .././one   /a/b/c/d    =>  /a/b/c/one
  var allSegments = baseSegments.concat(toSegments);
  var segments = [];
  for (var i = 0, l = allSegments.length; i < l; i++) {
    var segment = allSegments[i];
    if (segment === "..") segments.pop();else if (segment !== ".") segments.push(segment);
  }

  return addQuery("/" + segments.join("/"), toQuery);
};

////////////////////////////////////////////////////////////////////////////////
// insertParams(path, params)

var insertParams = function insertParams(path, params) {
  var _path$split = path.split("?"),
      pathBase = _path$split[0],
      _path$split$ = _path$split[1],
      query = _path$split$ === undefined ? "" : _path$split$;

  var segments = segmentize(pathBase);
  var constructedPath = "/" + segments.map(function (segment) {
    var match = paramRe.exec(segment);
    return match ? params[match[1]] : segment;
  }).join("/");
  var _params$location = params.location;
  _params$location = _params$location === undefined ? {} : _params$location;
  var _params$location$sear = _params$location.search,
      search = _params$location$sear === undefined ? "" : _params$location$sear;

  var searchSplit = search.split("?")[1] || "";
  constructedPath = addQuery(constructedPath, query, searchSplit);
  return constructedPath;
};

var validateRedirect = function validateRedirect(from, to) {
  var filter = function filter(segment) {
    return isDynamic(segment);
  };
  var fromString = segmentize(from).filter(filter).sort().join("/");
  var toString = segmentize(to).filter(filter).sort().join("/");
  return fromString === toString;
};

////////////////////////////////////////////////////////////////////////////////
// Junk
var paramRe = /^:(.+)/;

var SEGMENT_POINTS = 4;
var STATIC_POINTS = 3;
var DYNAMIC_POINTS = 2;
var SPLAT_PENALTY = 1;
var ROOT_POINTS = 1;

var isRootSegment = function isRootSegment(segment) {
  return segment === "";
};
var isDynamic = function isDynamic(segment) {
  return paramRe.test(segment);
};
var isSplat = function isSplat(segment) {
  return segment && segment[0] === "*";
};

var rankRoute = function rankRoute(route, index) {
  var score = route.default ? 0 : segmentize(route.path).reduce(function (score, segment) {
    score += SEGMENT_POINTS;
    if (isRootSegment(segment)) score += ROOT_POINTS;else if (isDynamic(segment)) score += DYNAMIC_POINTS;else if (isSplat(segment)) score -= SEGMENT_POINTS + SPLAT_PENALTY;else score += STATIC_POINTS;
    return score;
  }, 0);
  return { route: route, score: score, index: index };
};

var rankRoutes = function rankRoutes(routes) {
  return routes.map(rankRoute).sort(function (a, b) {
    return a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index;
  });
};

var segmentize = function segmentize(uri) {
  return uri
  // strip starting/ending slashes
  .replace(/(^\/+|\/+$)/g, "").split("/");
};

var addQuery = function addQuery(pathname) {
  for (var _len = arguments.length, query = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    query[_key - 1] = arguments[_key];
  }

  query = query.filter(function (q) {
    return q && q.length > 0;
  });
  return pathname + (query && query.length > 0 ? "?" + query.join("&") : "");
};

var reservedNames = ["uri", "path"];

/**
 * Shallow compares two objects.
 * @param {Object} obj1 The first object to compare.
 * @param {Object} obj2 The second object to compare.
 */
var shallowCompare = function shallowCompare(obj1, obj2) {
  var obj1Keys = Object.keys(obj1);
  return obj1Keys.length === Object.keys(obj2).length && obj1Keys.every(function (key) {
    return obj2.hasOwnProperty(key) && obj1[key] === obj2[key];
  });
};

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getLocation = function getLocation(source) {
  var _source$location = source.location,
      search = _source$location.search,
      hash = _source$location.hash,
      href = _source$location.href,
      origin = _source$location.origin,
      protocol = _source$location.protocol,
      host = _source$location.host,
      hostname = _source$location.hostname,
      port = _source$location.port;
  var pathname = source.location.pathname;


  if (!pathname && href && canUseDOM) {
    var url = new URL(href);
    pathname = url.pathname;
  }

  return {
    pathname: encodeURI(decodeURI(pathname)),
    search: search,
    hash: hash,
    href: href,
    origin: origin,
    protocol: protocol,
    host: host,
    hostname: hostname,
    port: port,
    state: source.history.state,
    key: source.history.state && source.history.state.key || "initial"
  };
};

var createHistory = function createHistory(source, options) {
  var listeners = [];
  var location = getLocation(source);
  var transitioning = false;
  var resolveTransition = function resolveTransition() {};

  return {
    get location() {
      return location;
    },

    get transitioning() {
      return transitioning;
    },

    _onTransitionComplete: function _onTransitionComplete() {
      transitioning = false;
      resolveTransition();
    },
    listen: function listen(listener) {
      listeners.push(listener);

      var popstateListener = function popstateListener() {
        location = getLocation(source);
        listener({ location: location, action: "POP" });
      };

      source.addEventListener("popstate", popstateListener);

      return function () {
        source.removeEventListener("popstate", popstateListener);
        listeners = listeners.filter(function (fn) {
          return fn !== listener;
        });
      };
    },
    navigate: function navigate(to) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          state = _ref.state,
          _ref$replace = _ref.replace,
          replace = _ref$replace === undefined ? false : _ref$replace;

      if (typeof to === "number") {
        source.history.go(to);
      } else {
        state = _extends$1({}, state, { key: Date.now() + "" });
        // try...catch iOS Safari limits to 100 pushState calls
        try {
          if (transitioning || replace) {
            source.history.replaceState(state, null, to);
          } else {
            source.history.pushState(state, null, to);
          }
        } catch (e) {
          source.location[replace ? "replace" : "assign"](to);
        }
      }

      location = getLocation(source);
      transitioning = true;
      var transition = new Promise(function (res) {
        return resolveTransition = res;
      });
      listeners.forEach(function (listener) {
        return listener({ location: location, action: "PUSH" });
      });
      return transition;
    }
  };
};

////////////////////////////////////////////////////////////////////////////////
// Stores history entries in memory for testing or other platforms like Native
var createMemorySource = function createMemorySource() {
  var initialPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";

  var searchIndex = initialPath.indexOf("?");
  var initialLocation = {
    pathname: searchIndex > -1 ? initialPath.substr(0, searchIndex) : initialPath,
    search: searchIndex > -1 ? initialPath.substr(searchIndex) : ""
  };
  var index = 0;
  var stack = [initialLocation];
  var states = [null];

  return {
    get location() {
      return stack[index];
    },
    addEventListener: function addEventListener(name, fn) {},
    removeEventListener: function removeEventListener(name, fn) {},

    history: {
      get entries() {
        return stack;
      },
      get index() {
        return index;
      },
      get state() {
        return states[index];
      },
      pushState: function pushState(state, _, uri) {
        var _uri$split = uri.split("?"),
            pathname = _uri$split[0],
            _uri$split$ = _uri$split[1],
            search = _uri$split$ === undefined ? "" : _uri$split$;

        index++;
        stack.push({ pathname: pathname, search: search.length ? "?" + search : search });
        states.push(state);
      },
      replaceState: function replaceState(state, _, uri) {
        var _uri$split2 = uri.split("?"),
            pathname = _uri$split2[0],
            _uri$split2$ = _uri$split2[1],
            search = _uri$split2$ === undefined ? "" : _uri$split2$;

        stack[index] = { pathname: pathname, search: search };
        states[index] = state;
      },
      go: function go(to) {
        var newIndex = index + to;

        if (newIndex < 0 || newIndex > states.length - 1) {
          return;
        }

        index = newIndex;
      }
    }
  };
};

////////////////////////////////////////////////////////////////////////////////
// global history - uses window.history as the source if available, otherwise a
// memory history
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var getSource = function getSource() {
  return canUseDOM ? window : createMemorySource();
};

var globalHistory = createHistory(getSource());

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

////////////////////////////////////////////////////////////////////////////////

var createNamedContext = function createNamedContext(name, defaultValue) {
  var Ctx = createContext(defaultValue);
  Ctx.displayName = name;
  return Ctx;
};

////////////////////////////////////////////////////////////////////////////////
// Location Context/Provider
var LocationContext = createNamedContext("Location");

// sets up a listener if there isn't one already so apps don't need to be
// wrapped in some top level provider
var Location = function Location(_ref) {
  var children = _ref.children;
  return React__default['default'].createElement(
    LocationContext.Consumer,
    null,
    function (context) {
      return context ? children(context) : React__default['default'].createElement(
        LocationProvider,
        null,
        children
      );
    }
  );
};

var LocationProvider = function (_React$Component) {
  _inherits(LocationProvider, _React$Component);

  function LocationProvider() {
    var _temp, _this, _ret;

    _classCallCheck(this, LocationProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      context: _this.getContext(),
      refs: { unlisten: null }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  LocationProvider.prototype.getContext = function getContext() {
    var _props$history = this.props.history,
        navigate = _props$history.navigate,
        location = _props$history.location;

    return { navigate: navigate, location: location };
  };

  LocationProvider.prototype.componentDidCatch = function componentDidCatch(error, info) {
    if (isRedirect(error)) {
      var _navigate = this.props.history.navigate;

      _navigate(error.uri, { replace: true });
    } else {
      throw error;
    }
  };

  LocationProvider.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevState.context.location !== this.state.context.location) {
      this.props.history._onTransitionComplete();
    }
  };

  LocationProvider.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var refs = this.state.refs,
        history = this.props.history;

    history._onTransitionComplete();
    refs.unlisten = history.listen(function () {
      Promise.resolve().then(function () {
        // TODO: replace rAF with react deferred update API when it's ready https://github.com/facebook/react/issues/13306
        requestAnimationFrame(function () {
          if (!_this2.unmounted) {
            _this2.setState(function () {
              return { context: _this2.getContext() };
            });
          }
        });
      });
    });
  };

  LocationProvider.prototype.componentWillUnmount = function componentWillUnmount() {
    var refs = this.state.refs;

    this.unmounted = true;
    refs.unlisten();
  };

  LocationProvider.prototype.render = function render() {
    var context = this.state.context,
        children = this.props.children;

    return React__default['default'].createElement(
      LocationContext.Provider,
      { value: context },
      typeof children === "function" ? children(context) : children || null
    );
  };

  return LocationProvider;
}(React__default['default'].Component);

////////////////////////////////////////////////////////////////////////////////


LocationProvider.defaultProps = {
  history: globalHistory
};
process.env.NODE_ENV !== "production" ? LocationProvider.propTypes = {
  history: propTypes.object.isRequired
} : void 0;
////////////////////////////////////////////////////////////////////////////////
// Sets baseuri and basepath for nested routers and links
var BaseContext = createNamedContext("Base", { baseuri: "/", basepath: "/" });

////////////////////////////////////////////////////////////////////////////////
// The main event, welcome to the show everybody.
var Router = function Router(props) {
  return React__default['default'].createElement(
    BaseContext.Consumer,
    null,
    function (baseContext) {
      return React__default['default'].createElement(
        Location,
        null,
        function (locationContext) {
          return React__default['default'].createElement(RouterImpl, _extends({}, baseContext, locationContext, props));
        }
      );
    }
  );
};

var RouterImpl = function (_React$PureComponent) {
  _inherits(RouterImpl, _React$PureComponent);

  function RouterImpl() {
    _classCallCheck(this, RouterImpl);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }

  RouterImpl.prototype.render = function render() {
    var _props = this.props,
        location = _props.location,
        _navigate2 = _props.navigate,
        basepath = _props.basepath,
        primary = _props.primary,
        children = _props.children;
        _props.baseuri;
        var _props$component = _props.component,
        component = _props$component === undefined ? "div" : _props$component,
        domProps = _objectWithoutProperties(_props, ["location", "navigate", "basepath", "primary", "children", "baseuri", "component"]);

    var routes = React__default['default'].Children.toArray(children).reduce(function (array, child) {
      var routes = createRoute(basepath)(child);
      return array.concat(routes);
    }, []);
    var pathname = location.pathname;


    var match = pick(routes, pathname);

    if (match) {
      var params = match.params,
          uri = match.uri,
          route = match.route,
          element = match.route.value;

      // remove the /* from the end for child routes relative paths

      basepath = route.default ? basepath : route.path.replace(/\*$/, "");

      var props = _extends({}, params, {
        uri: uri,
        location: location,
        navigate: function navigate(to, options) {
          return _navigate2(resolve(to, uri), options);
        }
      });

      var clone = React__default['default'].cloneElement(element, props, element.props.children ? React__default['default'].createElement(
        Router,
        { location: location, primary: primary },
        element.props.children
      ) : undefined);

      // using 'div' for < 16.3 support
      var FocusWrapper = primary ? FocusHandler : component;
      // don't pass any props to 'div'
      var wrapperProps = primary ? _extends({ uri: uri, location: location, component: component }, domProps) : domProps;

      return React__default['default'].createElement(
        BaseContext.Provider,
        { value: { baseuri: uri, basepath: basepath } },
        React__default['default'].createElement(
          FocusWrapper,
          wrapperProps,
          clone
        )
      );
    } else {
      // Not sure if we want this, would require index routes at every level
      // warning(
      //   false,
      //   `<Router basepath="${basepath}">\n\nNothing matched:\n\t${
      //     location.pathname
      //   }\n\nPaths checked: \n\t${routes
      //     .map(route => route.path)
      //     .join(
      //       "\n\t"
      //     )}\n\nTo get rid of this warning, add a default NotFound component as child of Router:
      //   \n\tlet NotFound = () => <div>Not Found!</div>
      //   \n\t<Router>\n\t  <NotFound default/>\n\t  {/* ... */}\n\t</Router>`
      // );
      return null;
    }
  };

  return RouterImpl;
}(React__default['default'].PureComponent);

RouterImpl.defaultProps = {
  primary: true
};


var FocusContext = createNamedContext("Focus");

var FocusHandler = function FocusHandler(_ref3) {
  var uri = _ref3.uri,
      location = _ref3.location,
      component = _ref3.component,
      domProps = _objectWithoutProperties(_ref3, ["uri", "location", "component"]);

  return React__default['default'].createElement(
    FocusContext.Consumer,
    null,
    function (requestFocus) {
      return React__default['default'].createElement(FocusHandlerImpl, _extends({}, domProps, {
        component: component,
        requestFocus: requestFocus,
        uri: uri,
        location: location
      }));
    }
  );
};

// don't focus on initial render
var initialRender = true;
var focusHandlerCount = 0;

var FocusHandlerImpl = function (_React$Component2) {
  _inherits(FocusHandlerImpl, _React$Component2);

  function FocusHandlerImpl() {
    var _temp2, _this4, _ret2;

    _classCallCheck(this, FocusHandlerImpl);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this4 = _possibleConstructorReturn(this, _React$Component2.call.apply(_React$Component2, [this].concat(args))), _this4), _this4.state = {}, _this4.requestFocus = function (node) {
      if (!_this4.state.shouldFocus && node) {
        node.focus();
      }
    }, _temp2), _possibleConstructorReturn(_this4, _ret2);
  }

  FocusHandlerImpl.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var initial = prevState.uri == null;
    if (initial) {
      return _extends({
        shouldFocus: true
      }, nextProps);
    } else {
      var myURIChanged = nextProps.uri !== prevState.uri;
      var navigatedUpToMe = prevState.location.pathname !== nextProps.location.pathname && nextProps.location.pathname === nextProps.uri;
      return _extends({
        shouldFocus: myURIChanged || navigatedUpToMe
      }, nextProps);
    }
  };

  FocusHandlerImpl.prototype.componentDidMount = function componentDidMount() {
    focusHandlerCount++;
    this.focus();
  };

  FocusHandlerImpl.prototype.componentWillUnmount = function componentWillUnmount() {
    focusHandlerCount--;
    if (focusHandlerCount === 0) {
      initialRender = true;
    }
  };

  FocusHandlerImpl.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevProps.location !== this.props.location && this.state.shouldFocus) {
      this.focus();
    }
  };

  FocusHandlerImpl.prototype.focus = function focus() {
    if (process.env.NODE_ENV === "test") {
      // getting cannot read property focus of null in the tests
      // and that bit of global `initialRender` state causes problems
      // should probably figure it out!
      return;
    }

    var requestFocus = this.props.requestFocus;


    if (requestFocus) {
      requestFocus(this.node);
    } else {
      if (initialRender) {
        initialRender = false;
      } else if (this.node) {
        // React polyfills [autofocus] and it fires earlier than cDM,
        // so we were stealing focus away, this line prevents that.
        if (!this.node.contains(document.activeElement)) {
          this.node.focus();
        }
      }
    }
  };

  FocusHandlerImpl.prototype.render = function render() {
    var _this5 = this;

    var _props2 = this.props;
        _props2.children;
        var style = _props2.style;
        _props2.requestFocus;
        var _props2$component = _props2.component,
        Comp = _props2$component === undefined ? "div" : _props2$component;
        _props2.uri;
        _props2.location;
        var domProps = _objectWithoutProperties(_props2, ["children", "style", "requestFocus", "component", "uri", "location"]);

    return React__default['default'].createElement(
      Comp,
      _extends({
        style: _extends({ outline: "none" }, style),
        tabIndex: "-1",
        ref: function ref(n) {
          return _this5.node = n;
        }
      }, domProps),
      React__default['default'].createElement(
        FocusContext.Provider,
        { value: this.requestFocus },
        this.props.children
      )
    );
  };

  return FocusHandlerImpl;
}(React__default['default'].Component);

polyfill(FocusHandlerImpl);

var k = function k() {};

////////////////////////////////////////////////////////////////////////////////
var forwardRef = React__default['default'].forwardRef;

if (typeof forwardRef === "undefined") {
  forwardRef = function forwardRef(C) {
    return C;
  };
}

var Link = forwardRef(function (_ref4, ref) {
  var innerRef = _ref4.innerRef,
      props = _objectWithoutProperties(_ref4, ["innerRef"]);

  return React__default['default'].createElement(
    BaseContext.Consumer,
    null,
    function (_ref5) {
      _ref5.basepath;
          var baseuri = _ref5.baseuri;
      return React__default['default'].createElement(
        Location,
        null,
        function (_ref6) {
          var location = _ref6.location,
              navigate = _ref6.navigate;

          var to = props.to,
              state = props.state,
              replace = props.replace,
              _props$getProps = props.getProps,
              getProps = _props$getProps === undefined ? k : _props$getProps,
              anchorProps = _objectWithoutProperties(props, ["to", "state", "replace", "getProps"]);

          var href = resolve(to, baseuri);
          var encodedHref = encodeURI(href);
          var isCurrent = location.pathname === encodedHref;
          var isPartiallyCurrent = startsWith(location.pathname, encodedHref);

          return React__default['default'].createElement("a", _extends({
            ref: ref || innerRef,
            "aria-current": isCurrent ? "page" : undefined
          }, anchorProps, getProps({ isCurrent: isCurrent, isPartiallyCurrent: isPartiallyCurrent, href: href, location: location }), {
            href: href,
            onClick: function onClick(event) {
              if (anchorProps.onClick) anchorProps.onClick(event);
              if (shouldNavigate(event)) {
                event.preventDefault();
                var shouldReplace = replace;
                if (typeof replace !== "boolean" && isCurrent) {
                  var _location$state = _extends({}, location.state);
                      _location$state.key;
                      var restState = _objectWithoutProperties(_location$state, ["key"]);

                  shouldReplace = shallowCompare(_extends({}, state), restState);
                }
                navigate(href, {
                  state: state,
                  replace: shouldReplace
                });
              }
            }
          }));
        }
      );
    }
  );
});

Link.displayName = "Link";

process.env.NODE_ENV !== "production" ? Link.propTypes = {
  to: propTypes.string.isRequired
} : void 0;

////////////////////////////////////////////////////////////////////////////////
function RedirectRequest(uri) {
  this.uri = uri;
}

var isRedirect = function isRedirect(o) {
  return o instanceof RedirectRequest;
};

var redirectTo = function redirectTo(to) {
  throw new RedirectRequest(to);
};

var RedirectImpl = function (_React$Component3) {
  _inherits(RedirectImpl, _React$Component3);

  function RedirectImpl() {
    _classCallCheck(this, RedirectImpl);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  }

  // Support React < 16 with this hook
  RedirectImpl.prototype.componentDidMount = function componentDidMount() {
    var _props3 = this.props,
        navigate = _props3.navigate,
        to = _props3.to;
        _props3.from;
        var _props3$replace = _props3.replace,
        replace = _props3$replace === undefined ? true : _props3$replace,
        state = _props3.state;
        _props3.noThrow;
        var baseuri = _props3.baseuri,
        props = _objectWithoutProperties(_props3, ["navigate", "to", "from", "replace", "state", "noThrow", "baseuri"]);

    Promise.resolve().then(function () {
      var resolvedTo = resolve(to, baseuri);
      navigate(insertParams(resolvedTo, props), { replace: replace, state: state });
    });
  };

  RedirectImpl.prototype.render = function render() {
    var _props4 = this.props;
        _props4.navigate;
        var to = _props4.to;
        _props4.from;
        _props4.replace;
        _props4.state;
        var noThrow = _props4.noThrow,
        baseuri = _props4.baseuri,
        props = _objectWithoutProperties(_props4, ["navigate", "to", "from", "replace", "state", "noThrow", "baseuri"]);

    var resolvedTo = resolve(to, baseuri);
    if (!noThrow) redirectTo(insertParams(resolvedTo, props));
    return null;
  };

  return RedirectImpl;
}(React__default['default'].Component);

var Redirect = function Redirect(props) {
  return React__default['default'].createElement(
    BaseContext.Consumer,
    null,
    function (_ref7) {
      var baseuri = _ref7.baseuri;
      return React__default['default'].createElement(
        Location,
        null,
        function (locationContext) {
          return React__default['default'].createElement(RedirectImpl, _extends({}, locationContext, { baseuri: baseuri }, props));
        }
      );
    }
  );
};

process.env.NODE_ENV !== "production" ? Redirect.propTypes = {
  from: propTypes.string,
  to: propTypes.string.isRequired
} : void 0;

////////////////////////////////////////////////////////////////////////////////
// Junk
var stripSlashes = function stripSlashes(str) {
  return str.replace(/(^\/+|\/+$)/g, "");
};

var createRoute = function createRoute(basepath) {
  return function (element) {
    if (!element) {
      return null;
    }

    if (element.type === React__default['default'].Fragment && element.props.children) {
      return React__default['default'].Children.map(element.props.children, createRoute(basepath));
    }
    !(element.props.path || element.props.default || element.type === Redirect) ? process.env.NODE_ENV !== "production" ? invariant_1(false, "<Router>: Children of <Router> must have a `path` or `default` prop, or be a `<Redirect>`. None found on element type `" + element.type + "`") : invariant_1(false) : void 0;

    !!(element.type === Redirect && (!element.props.from || !element.props.to)) ? process.env.NODE_ENV !== "production" ? invariant_1(false, "<Redirect from=\"" + element.props.from + "\" to=\"" + element.props.to + "\"/> requires both \"from\" and \"to\" props when inside a <Router>.") : invariant_1(false) : void 0;

    !!(element.type === Redirect && !validateRedirect(element.props.from, element.props.to)) ? process.env.NODE_ENV !== "production" ? invariant_1(false, "<Redirect from=\"" + element.props.from + " to=\"" + element.props.to + "\"/> has mismatched dynamic segments, ensure both paths have the exact same dynamic segments.") : invariant_1(false) : void 0;

    if (element.props.default) {
      return { value: element, default: true };
    }

    var elementPath = element.type === Redirect ? element.props.from : element.props.path;

    var path = elementPath === "/" ? basepath : stripSlashes(basepath) + "/" + stripSlashes(elementPath);

    return {
      value: element,
      default: element.props.default,
      path: element.props.children ? stripSlashes(path) + "/*" : path
    };
  };
};

var shouldNavigate = function shouldNavigate(event) {
  return !event.defaultPrevented && event.button === 0 && !(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

var Menu = function Menu(_ref) {
  var color = _ref.color,
      children = _ref.children,
      className = _ref.className,
      withLinks = _ref.withLinks,
      props = _objectWithoutProperties$4v(_ref, ["color", "children", "className", "withLinks"]);

  var childrenWithProps = children.map(function (child, i) {
    if ( /*#__PURE__*/React.isValidElement(child) && child.type.id === 'MenuItem') {
      return /*#__PURE__*/React.cloneElement(child, {
        key: "menuitem-".concat(i),
        color: color,
        withLinks: withLinks
      });
    }

    if ( /*#__PURE__*/React.isValidElement(child) && child.type.id === 'MenuCategory') {
      return /*#__PURE__*/React.cloneElement(child, {
        key: "menucategory-".concat(i)
      });
    }

    return null;
  });
  return /*#__PURE__*/React__default['default'].createElement("div", _extends$4w({
    className: "menu ".concat(className)
  }, props), childrenWithProps);
};
Menu.defaultProps = {
  color: 'blue',
  className: '',
  withLinks: false
};
Menu.propTypes = {
  color: propTypes.string,
  withLinks: propTypes.bool,
  className: propTypes.string,
  children: propTypes.node.isRequired
};
var MenuItem = function MenuItem(_ref2) {
  var label = _ref2.label,
      color = _ref2.color,
      onClick = _ref2.onClick,
      isActive = _ref2.isActive,
      className = _ref2.className,
      withLinks = _ref2.withLinks,
      props = _objectWithoutProperties$4v(_ref2, ["label", "color", "onClick", "isActive", "className", "withLinks"]);

  var menuItemClasses = classnames('menu--item', className, _defineProperty$3({
    'menu--item--inactive': !isActive
  }, "menu--item--active--".concat(color), isActive));

  if (withLinks) {
    return /*#__PURE__*/React__default['default'].createElement(Link, _extends$4w({
      onClick: onClick,
      className: menuItemClasses
    }, props), label);
  }

  return /*#__PURE__*/React__default['default'].createElement("div", _extends$4w({
    onClick: onClick,
    className: menuItemClasses
  }, props), label);
};
MenuItem.id = 'MenuItem';
MenuItem.defaultProps = {
  className: ''
};
MenuItem.propTypes = {
  onClick: propTypes.func,
  withLinks: propTypes.bool,
  className: propTypes.string,
  label: propTypes.string.isRequired
};
var MenuCategory = function MenuCategory(_ref3) {
  var label = _ref3.label,
      onClick = _ref3.onClick,
      className = _ref3.className,
      props = _objectWithoutProperties$4v(_ref3, ["label", "onClick", "className"]);

  return /*#__PURE__*/React__default['default'].createElement("div", _extends$4w({
    onClick: onClick,
    className: "menu--category ".concat(className)
  }, props), label);
};
MenuCategory.id = 'MenuCategory';
MenuCategory.defaultProps = {
  className: ''
};
MenuCategory.propTypes = {
  onClick: propTypes.func,
  className: propTypes.string,
  label: propTypes.string.isRequired
};

var Modal = function Modal(_ref) {
  var size = _ref.size,
      hide = _ref.hide,
      isVisible = _ref.isVisible,
      children = _ref.children;
      _ref.className;
      var props = _objectWithoutProperties$4v(_ref, ["size", "hide", "isVisible", "children", "className"]);

  var modalClasses = classnames("modal--".concat(size), {
    'animate-fade-in': isVisible
  });
  var modalBackgroundClasses = classnames({
    'hidden': !isVisible,
    'modal--background': isVisible
  });
  return /*#__PURE__*/React__default['default'].createElement("div", {
    onClick: hide,
    className: modalBackgroundClasses
  }, /*#__PURE__*/React__default['default'].createElement(Box$2.Box, _extends$4w({
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    variant: "frame",
    className: modalClasses
  }, props), children));
};
Modal.defaultProps = {
  size: "small",
  isVisible: false
};
Modal.propTypes = {
  hide: propTypes.func.isRequired,
  isVisible: propTypes.bool.isRequired,
  className: propTypes.string
};
var ModalHeader = function ModalHeader(_ref2) {
  var className = _ref2.className,
      children = _ref2.children,
      props = _objectWithoutProperties$4v(_ref2, ["className", "children"]);

  return /*#__PURE__*/React__default['default'].createElement("div", _extends$4w({
    className: "modal--header ".concat(className)
  }, props), children);
};
ModalHeader.defaultProps = {
  className: ''
};
ModalHeader.propTypes = {
  className: propTypes.string
};
var ModalBody = function ModalBody(_ref3) {
  var className = _ref3.className,
      children = _ref3.children,
      props = _objectWithoutProperties$4v(_ref3, ["className", "children"]);

  return /*#__PURE__*/React__default['default'].createElement("div", _extends$4w({
    className: "modal--body ".concat(className)
  }, props), children);
};
ModalBody.defaultProps = {
  className: ''
};
ModalBody.propTypes = {
  className: propTypes.string
};
var ModalFooter = function ModalFooter(_ref4) {
  var className = _ref4.className,
      children = _ref4.children,
      props = _objectWithoutProperties$4v(_ref4, ["className", "children"]);

  return /*#__PURE__*/React__default['default'].createElement("div", _extends$4w({
    className: "modal--footer ".concat(className)
  }, props), children);
};
ModalFooter.defaultProps = {
  className: ''
};
ModalFooter.propTypes = {
  className: propTypes.string
};

var MultiSelect = function MultiSelect(_ref) {
  var name = _ref.name,
      errors = _ref.errors,
      items = _ref.items,
      isSmall = _ref.isSmall;
      _ref.position;
      var onChange = _ref.onChange,
      className = _ref.className,
      placeholder = _ref.placeholder,
      props = _objectWithoutProperties$4v(_ref, ["name", "errors", "items", "isSmall", "position", "onChange", "className", "placeholder"]);

  // handle click away from position:absolute options list
  var multiSelectRef = React.useRef();

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  React.useEffect(function () {
    var handleClickAway = function handleClickAway(e) {
      if (multiSelectRef.current.contains(e.target)) return;
      setIsOpen(false);
    };

    document.addEventListener('mousedown', handleClickAway);
    return function () {
      document.removeEventListener('mousedown', handleClickAway);
    };
  }, [setIsOpen]); // filter for unique items

  var uniqueItems = Array.from(new Set(items.map(function (item) {
    return item.label;
  }))).map(function (label) {
    return items.find(function (item) {
      return item.label === label;
    });
  }); // available options and selected options

  var _useState3 = React.useState(uniqueItems),
      _useState4 = _slicedToArray(_useState3, 2),
      options = _useState4[0],
      setOptions = _useState4[1];

  var _useState5 = React.useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      selected = _useState6[0],
      setSelected = _useState6[1]; // filter - compare search string to options


  var _useState7 = React.useState(''),
      _useState8 = _slicedToArray(_useState7, 2),
      searchString = _useState8[0],
      setSearchString = _useState8[1];

  var handleSearchString = function handleSearchString(e) {
    var value = e.target.value;
    value ? setOptions(uniqueItems.filter(function (item) {
      return item.label.toLowerCase().includes(value.toLowerCase());
    })) : setOptions(uniqueItems);
    setSearchString(value);
  }; // select matching item when Enter is pressed


  var handleOnKeyUp = function handleOnKeyUp(e) {
    if (e.key === 'Enter') {
      var searchStringMatch = options.find(function (item) {
        return item.label.toLowerCase() === searchString.toLocaleLowerCase();
      });
      var matchAlreadySelected = searchStringMatch ? selected.find(function (item) {
        return item.label === searchStringMatch.label;
      }) : null;

      if (searchStringMatch && !matchAlreadySelected) {
        setSearchString('');
        setOptions(uniqueItems);
        setSelected([].concat(_toConsumableArray(selected), [searchStringMatch]));
      }
    }
  };

  var handleSetSelected = function handleSetSelected(selectedItems) {
    // onChange handled in useForm hook
    if (onChange) {
      onChange({
        target: {
          name: name,
          value: selectedItems,
          type: 'multiselect',
          dataset: {}
        }
      });
    }

    setSelected(selectedItems);
  };

  return /*#__PURE__*/React__default['default'].createElement("div", _extends$4w({
    ref: multiSelectRef,
    className: "multiselect--wrapper ".concat(className)
  }, props), /*#__PURE__*/React__default['default'].createElement(Field$1.Field, {
    errors: errors,
    isSmall: isSmall,
    isFocused: isOpen,
    className: "w-full"
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "multiselect--selected-items"
  }, selected.map(function (item, i) {
    return /*#__PURE__*/React__default['default'].createElement(Chip$1.Chip, {
      key: "selecteditem-".concat(i),
      isSmall: true,
      label: item.label,
      onClick: function onClick() {
        return handleSetSelected(selected.filter(function (i) {
          return i.label !== item.label;
        }));
      },
      className: i === selected.length - 1 ? 'mr-2' : 'mr-1'
    });
  }), errors && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "multiselect--error"
  }, errors)), /*#__PURE__*/React__default['default'].createElement(TextField$1.TextField, {
    value: searchString,
    onKeyUp: handleOnKeyUp,
    onChange: handleSearchString,
    placeholder: placeholder,
    onClick: function onClick() {
      return setIsOpen(true);
    }
  })), /*#__PURE__*/React__default['default'].createElement("ul", {
    className: isOpen ? 'multiselect--item-list' : 'hidden'
  }, options.map(function (item, i) {
    return /*#__PURE__*/React__default['default'].createElement(MultiSelectItem, {
      key: "multiselectitem-".concat(i),
      label: item.label,
      isSelected: selected.find(function (i) {
        return i.label === item.label;
      }) === undefined ? false : true,
      addItem: function addItem() {
        return handleSetSelected([].concat(_toConsumableArray(selected), [item]));
      },
      removeItem: function removeItem() {
        return handleSetSelected(selected.filter(function (i) {
          return i.label !== item.label;
        }));
      }
    });
  }), options.length === 0 && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "multiselect--no-results"
  }, "No results for \"", searchString, "\"")));
};
MultiSelect.defaultProps = {
  position: '',
  className: '',
  isSmall: false,
  placeholder: ''
};
MultiSelect.propTypes = {
  position: propTypes.string,
  className: propTypes.string,
  items: propTypes.array.isRequired
};
var MultiSelectItem = function MultiSelectItem(_ref2) {
  var label = _ref2.label,
      addItem = _ref2.addItem,
      removeItem = _ref2.removeItem,
      isSelected = _ref2.isSelected,
      props = _objectWithoutProperties$4v(_ref2, ["label", "addItem", "removeItem", "isSelected"]);

  return /*#__PURE__*/React__default['default'].createElement("li", _extends$4w({
    className: "multiselect--item ".concat(isSelected ? 'font-medium' : 'font-normal'),
    onClick: isSelected ? removeItem : addItem
  }, props), /*#__PURE__*/React__default['default'].createElement(Checkbox$2.Checkbox, {
    checked: isSelected
  }), label);
};
MultiSelectItem.propTypes = {
  label: propTypes.string.isRequired,
  addItem: propTypes.func.isRequired,
  removeItem: propTypes.func.isRequired,
  isSelected: propTypes.bool.isRequired
};

function createFocusEvent(element, type, eventInit) {
  if (eventInit === void 0) {
    eventInit = {};
  }

  if (typeof FocusEvent === "function") {
    return new FocusEvent(type, eventInit);
  }

  return createEvent(element, type, eventInit);
}
/**
 * Creates and dispatches a blur event in a way that also works on IE 11.
 *
 * @example
 * import { fireBlurEvent } from "reakit-utils";
 *
 * fireBlurEvent(document.getElementById("id"));
 */


function fireBlurEvent(element, eventInit) {
  var event = createFocusEvent(element, "blur", eventInit);
  var defaultAllowed = element.dispatchEvent(event);

  var bubbleInit = _objectSpread2(_objectSpread2({}, eventInit), {}, {
    bubbles: true
  });

  element.dispatchEvent(createFocusEvent(element, "focusout", bubbleInit));
  return defaultAllowed;
}

function createKeyboardEvent(element, type, eventInit) {
  if (eventInit === void 0) {
    eventInit = {};
  }

  if (typeof KeyboardEvent === "function") {
    return new KeyboardEvent(type, eventInit);
  } // IE 11 doesn't support Event constructors


  var event = getDocument(element).createEvent("KeyboardEvent");
  event.initKeyboardEvent(type, eventInit.bubbles, eventInit.cancelable, getWindow(element), eventInit.key, eventInit.location, eventInit.ctrlKey, eventInit.altKey, eventInit.shiftKey, eventInit.metaKey);
  return event;
}
/**
 * Creates and dispatches `KeyboardEvent` in a way that also works on IE 11.
 *
 * @example
 * import { fireKeyboardEvent } from "reakit-utils";
 *
 * fireKeyboardEvent(document.getElementById("id"), "keydown", {
 *   key: "ArrowDown",
 *   shiftKey: true,
 * });
 */


function fireKeyboardEvent(element, type, eventInit) {
  return element.dispatchEvent(createKeyboardEvent(element, type, eventInit));
}

var isIE11$1 = canUseDOM$1 && "msCrypto" in window;
/**
 * Cross-browser method that returns the next active element (the element that
 * is receiving focus) after a blur event is dispatched. It receives the blur
 * event object as the argument.
 *
 * @example
 * import { getNextActiveElementOnBlur } from "reakit-utils";
 *
 * const element = document.getElementById("id");
 * element.addEventListener("blur", (event) => {
 *   const nextActiveElement = getNextActiveElementOnBlur(event);
 * });
 */

function getNextActiveElementOnBlur(event) {
  // IE 11 doesn't support event.relatedTarget on blur.
  // document.activeElement points the the next active element.
  // On modern browsers, document.activeElement points to the current target.
  if (isIE11$1) {
    var activeElement = getActiveElement(event.currentTarget);
    return activeElement;
  }

  return event.relatedTarget;
}

function groupItems(items) {
  var groups = [[]];

  var _loop = function _loop() {
    var item = _step.value;
    var group = groups.find(function (g) {
      return !g[0] || g[0].groupId === item.groupId;
    });

    if (group) {
      group.push(item);
    } else {
      groups.push([item]);
    }
  };

  for (var _iterator = _createForOfIteratorHelperLoose$2(items), _step; !(_step = _iterator()).done;) {
    _loop();
  }

  return groups;
}

function flatten(grid) {
  var flattened = [];

  for (var _iterator = _createForOfIteratorHelperLoose$2(grid), _step; !(_step = _iterator()).done;) {
    var row = _step.value;
    flattened.push.apply(flattened, row);
  }

  return flattened;
}

function reverse(array) {
  return array.slice().reverse();
}

function findFirstEnabledItem(items, excludeId) {
  if (excludeId) {
    return items.find(function (item) {
      return !item.disabled && item.id !== excludeId;
    });
  }

  return items.find(function (item) {
    return !item.disabled;
  });
}

function getCurrentId(options, passedId) {
  var _findFirstEnabledItem;

  if (passedId || passedId === null) {
    return passedId;
  }

  if (options.currentId || options.currentId === null) {
    return options.currentId;
  }

  return (_findFirstEnabledItem = findFirstEnabledItem(options.items || [])) === null || _findFirstEnabledItem === void 0 ? void 0 : _findFirstEnabledItem.id;
}

function findEnabledItemById(items, id) {
  if (!id) return undefined;
  return items === null || items === void 0 ? void 0 : items.find(function (item) {
    return item.id === id && !item.disabled;
  });
}

// Automatically generated
var COMPOSITE_STATE_KEYS = ["baseId", "unstable_idCountRef", "setBaseId", "unstable_virtual", "rtl", "orientation", "items", "groups", "currentId", "loop", "wrap", "unstable_moves", "unstable_angular", "unstable_hasActiveWidget", "registerItem", "unregisterItem", "registerGroup", "unregisterGroup", "move", "next", "previous", "up", "down", "first", "last", "sort", "unstable_setVirtual", "setRTL", "setOrientation", "setCurrentId", "setLoop", "setWrap", "reset", "unstable_setHasActiveWidget"];
var COMPOSITE_KEYS = COMPOSITE_STATE_KEYS;
var COMPOSITE_GROUP_KEYS = COMPOSITE_KEYS;
var COMPOSITE_ITEM_KEYS = COMPOSITE_GROUP_KEYS;

var validCompositeRoles = ["combobox", "grid", "tablist", "listbox", "menu", "menubar", "toolbar", "radiogroup", "tree", "treegrid"];
var isIE11 = canUseDOM$1 && "msCrypto" in window;

function canProxyKeyboardEvent(event) {
  if (!isSelfTarget(event)) return false;
  if (event.metaKey) return false;
  if (event.key === "Tab") return false;
  return true;
}

function useKeyboardEventProxy(virtual, currentItem, htmlEventHandler) {
  var eventHandlerRef = useLiveRef(htmlEventHandler);
  return React.useCallback(function (event) {
    var _eventHandlerRef$curr;

    (_eventHandlerRef$curr = eventHandlerRef.current) === null || _eventHandlerRef$curr === void 0 ? void 0 : _eventHandlerRef$curr.call(eventHandlerRef, event);
    if (event.defaultPrevented) return;

    if (virtual && canProxyKeyboardEvent(event)) {
      var currentElement = currentItem === null || currentItem === void 0 ? void 0 : currentItem.ref.current;

      if (currentElement) {
        if (!fireKeyboardEvent(currentElement, event.type, event)) {
          event.preventDefault();
        } // The event will be triggered on the composite item and then
        // propagated up to this composite element again, so we can pretend
        // that it wasn't called on this component in the first place.


        if (event.currentTarget.contains(currentElement)) {
          event.stopPropagation();
        }
      }
    }
  }, [virtual, currentItem]);
} // istanbul ignore next


function useActiveElementRef(elementRef) {
  var activeElementRef = React.useRef(null);
  React.useEffect(function () {
    var document = getDocument(elementRef.current);

    var onFocus = function onFocus(event) {
      var target = event.target;
      activeElementRef.current = target;
    };

    document.addEventListener("focus", onFocus, true);
    return function () {
      document.removeEventListener("focus", onFocus, true);
    };
  }, []);
  return activeElementRef;
}

function findFirstEnabledItemInTheLastRow(items) {
  return findFirstEnabledItem(flatten(reverse(groupItems(items))));
}

function isItem(items, element) {
  return items === null || items === void 0 ? void 0 : items.some(function (item) {
    return !!element && item.ref.current === element;
  });
}

var useComposite = createHook({
  name: "Composite",
  compose: [useTabbable],
  keys: COMPOSITE_KEYS,
  useOptions: function useOptions(options) {
    return _objectSpread2$2(_objectSpread2$2({}, options), {}, {
      currentId: getCurrentId(options)
    });
  },
  useProps: function useProps(options, _ref) {
    var htmlRef = _ref.ref,
        htmlOnFocusCapture = _ref.onFocusCapture,
        htmlOnFocus = _ref.onFocus,
        htmlOnBlurCapture = _ref.onBlurCapture,
        htmlOnKeyDown = _ref.onKeyDown,
        htmlOnKeyDownCapture = _ref.onKeyDownCapture,
        htmlOnKeyUpCapture = _ref.onKeyUpCapture,
        htmlProps = _objectWithoutPropertiesLoose$4v(_ref, ["ref", "onFocusCapture", "onFocus", "onBlurCapture", "onKeyDown", "onKeyDownCapture", "onKeyUpCapture"]);

    var ref = React.useRef(null);
    var currentItem = findEnabledItemById(options.items, options.currentId);
    var previousElementRef = React.useRef(null);
    var onFocusCaptureRef = useLiveRef(htmlOnFocusCapture);
    var onFocusRef = useLiveRef(htmlOnFocus);
    var onBlurCaptureRef = useLiveRef(htmlOnBlurCapture);
    var onKeyDownRef = useLiveRef(htmlOnKeyDown); // IE 11 doesn't support event.relatedTarget, so we use the active element
    // ref instead.

    var activeElementRef = isIE11 ? useActiveElementRef(ref) : undefined;
    React.useEffect(function () {
      var element = ref.current;

      if (options.unstable_moves && !currentItem) {
        process.env.NODE_ENV !== "production" ? warning$1(!element, "Can't focus composite component because `ref` wasn't passed to component.", "See https://reakit.io/docs/composite") : void 0; // If composite.move(null) has been called, the composite container
        // will receive focus.

        element === null || element === void 0 ? void 0 : element.focus();
      }
    }, [options.unstable_moves, currentItem]);
    var onKeyDownCapture = useKeyboardEventProxy(options.unstable_virtual, currentItem, htmlOnKeyDownCapture);
    var onKeyUpCapture = useKeyboardEventProxy(options.unstable_virtual, currentItem, htmlOnKeyUpCapture);
    var onFocusCapture = React.useCallback(function (event) {
      var _onFocusCaptureRef$cu;

      (_onFocusCaptureRef$cu = onFocusCaptureRef.current) === null || _onFocusCaptureRef$cu === void 0 ? void 0 : _onFocusCaptureRef$cu.call(onFocusCaptureRef, event);
      if (event.defaultPrevented) return;
      if (!options.unstable_virtual) return; // IE11 doesn't support event.relatedTarget, so we use the active
      // element ref instead.

      var previousActiveElement = (activeElementRef === null || activeElementRef === void 0 ? void 0 : activeElementRef.current) || event.relatedTarget;
      var previousActiveElementWasItem = isItem(options.items, previousActiveElement);

      if (isSelfTarget(event) && previousActiveElementWasItem) {
        // Composite has been focused as a result of an item receiving focus.
        // The composite item will move focus back to the composite
        // container. In this case, we don't want to propagate this
        // additional event nor call the onFocus handler passed to
        // <Composite onFocus={...} />.
        event.stopPropagation();
      }
    }, [options.unstable_virtual, options.items]);
    var onFocus = React.useCallback(function (event) {
      var _onFocusRef$current;

      (_onFocusRef$current = onFocusRef.current) === null || _onFocusRef$current === void 0 ? void 0 : _onFocusRef$current.call(onFocusRef, event);
      if (event.defaultPrevented) return;

      if (options.unstable_virtual) {
        var currentElement = (currentItem === null || currentItem === void 0 ? void 0 : currentItem.ref.current) || null;

        if (isSelfTarget(event)) {
          // This means that the composite element has been focused while the
          // composite item has not. For example, by clicking on the
          // composite element without touching any item, or by tabbing into
          // the composite element. In this case, we want to trigger focus on
          // the item, just like it would happen with roving tabindex.
          // When it receives focus, the composite item will put focus back
          // on the composite element, in which case hasItemWithFocus will be
          // true.
          currentElement === null || currentElement === void 0 ? void 0 : currentElement.focus();
        }
      } else if (isSelfTarget(event)) {
        var _options$setCurrentId;

        // When the roving tabindex composite gets intentionally focused (for
        // example, by clicking directly on it, and not on an item), we make
        // sure to set the current id to null (which means the composite
        // itself is focused).
        (_options$setCurrentId = options.setCurrentId) === null || _options$setCurrentId === void 0 ? void 0 : _options$setCurrentId.call(options, null);
      }
    }, [options.unstable_virtual, currentItem, options.setCurrentId]);
    var onBlurCapture = React.useCallback(function (event) {
      var _onBlurCaptureRef$cur;

      (_onBlurCaptureRef$cur = onBlurCaptureRef.current) === null || _onBlurCaptureRef$cur === void 0 ? void 0 : _onBlurCaptureRef$cur.call(onBlurCaptureRef, event);
      if (event.defaultPrevented) return;
      if (!options.unstable_virtual) return; // When virtual is set to true, we move focus from the composite
      // container (this component) to the composite item that is being
      // selected. Then we move focus back to the composite container. This
      // is so we can provide the same API as the roving tabindex method,
      // which means people can attach onFocus/onBlur handlers on the
      // CompositeItem component regardless of whether it's virtual or not.
      // This sequence of blurring and focusing items and composite may be
      // confusing, so we ignore intermediate focus and blurs by stopping its
      // propagation and not calling the passed onBlur handler (htmlOnBlur).

      var currentElement = (currentItem === null || currentItem === void 0 ? void 0 : currentItem.ref.current) || null;
      var nextActiveElement = getNextActiveElementOnBlur(event);
      var nextActiveElementIsItem = isItem(options.items, nextActiveElement);

      if (isSelfTarget(event) && nextActiveElementIsItem) {
        // This is an intermediate blur event: blurring the composite
        // container to focus an item (nextActiveElement).
        if (nextActiveElement === currentElement) {
          // The next active element will be the same as the current item in
          // the state in two scenarios:
          //   - Moving focus with keyboard: the state is updated before the
          // blur event is triggered, so here the current item is already
          // pointing to the next active element.
          //   - Clicking on the current active item with a pointer: this
          // will trigger blur on the composite element and then the next
          // active element will be the same as the current item. Clicking on
          // an item other than the current one doesn't end up here as the
          // currentItem state will be updated only after it.
          if (previousElementRef.current && previousElementRef.current !== nextActiveElement) {
            // If there's a previous active item and it's not a click action,
            // then we fire a blur event on it so it will work just like if
            // it had DOM focus before (like when using roving tabindex).
            fireBlurEvent(previousElementRef.current, event);
          }

          previousElementRef.current = currentElement;
        } else if (currentElement) {
          // This will be true when the next active element is not the
          // current element, but there's a current item. This will only
          // happen when clicking with a pointer on a different item, when
          // there's already an item selected, in which case currentElement
          // is the item that is getting blurred, and nextActiveElement is
          // the item that is being clicked.
          fireBlurEvent(currentElement, event);
          previousElementRef.current = nextActiveElement;
        } // We want to ignore intermediate blur events, so we stop its
        // propagation and return early so onFocus will not be called.


        event.stopPropagation();
      } else {
        var targetIsItem = isItem(options.items, event.target);

        if (!targetIsItem && currentElement) {
          // If target is not a composite item, it may be the composite
          // element itself (isSelfTarget) or a tabbable element inside the
          // composite widget. This may be triggered by clicking outside the
          // composite widget or by tabbing out of it. In either cases we
          // want to fire a blur event on the current item.
          fireBlurEvent(currentElement, event);
        }
      }
    }, [options.unstable_virtual, options.items, currentItem]);
    var onKeyDown = React.useCallback(function (event) {
      var _onKeyDownRef$current, _options$groups;

      (_onKeyDownRef$current = onKeyDownRef.current) === null || _onKeyDownRef$current === void 0 ? void 0 : _onKeyDownRef$current.call(onKeyDownRef, event);
      if (event.defaultPrevented) return;
      if (options.currentId !== null) return;
      if (!isSelfTarget(event)) return;
      var isVertical = options.orientation !== "horizontal";
      var isHorizontal = options.orientation !== "vertical";
      var isGrid = !!((_options$groups = options.groups) === null || _options$groups === void 0 ? void 0 : _options$groups.length);

      var up = function up() {
        if (isGrid) {
          var item = findFirstEnabledItemInTheLastRow(options.items);

          if (item === null || item === void 0 ? void 0 : item.id) {
            var _options$move;

            (_options$move = options.move) === null || _options$move === void 0 ? void 0 : _options$move.call(options, item.id);
          }
        } else {
          var _options$last;

          (_options$last = options.last) === null || _options$last === void 0 ? void 0 : _options$last.call(options);
        }
      };

      var keyMap = {
        ArrowUp: (isGrid || isVertical) && up,
        ArrowRight: (isGrid || isHorizontal) && options.first,
        ArrowDown: (isGrid || isVertical) && options.first,
        ArrowLeft: (isGrid || isHorizontal) && options.last,
        Home: options.first,
        End: options.last,
        PageUp: options.first,
        PageDown: options.last
      };
      var action = keyMap[event.key];

      if (action) {
        event.preventDefault();
        action();
      }
    }, [options.currentId, options.orientation, options.groups, options.items, options.move, options.last, options.first]);
    return _objectSpread2$2({
      ref: useForkRef(ref, htmlRef),
      id: options.baseId,
      onFocus: onFocus,
      onFocusCapture: onFocusCapture,
      onBlurCapture: onBlurCapture,
      onKeyDownCapture: onKeyDownCapture,
      onKeyDown: onKeyDown,
      onKeyUpCapture: onKeyUpCapture,
      "aria-activedescendant": options.unstable_virtual ? (currentItem === null || currentItem === void 0 ? void 0 : currentItem.id) || undefined : undefined
    }, htmlProps);
  },
  useComposeProps: function useComposeProps(options, htmlProps) {
    htmlProps = useBox(options, htmlProps, true);
    var tabbableHTMLProps = useTabbable(options, htmlProps, true);

    if (options.unstable_virtual || options.currentId === null) {
      // Composite will only be tabbable by default if the focus is managed
      // using aria-activedescendant, which requires DOM focus on the container
      // element (the composite)
      return tabbableHTMLProps;
    }

    return _objectSpread2$2(_objectSpread2$2({}, htmlProps), {}, {
      ref: tabbableHTMLProps.ref
    });
  }
});
createComponent({
  as: "div",
  useHook: useComposite,
  useCreateElement: function useCreateElement$1(type, props, children) {
    process.env.NODE_ENV !== "production" ? useWarning(!props.role || validCompositeRoles.indexOf(props.role) === -1, "You should provide a valid `role` attribute to composite components.", "See https://reakit.io/docs/composite") : void 0;
    process.env.NODE_ENV !== "production" ? useWarning(!props["aria-label"] && !props["aria-labelledby"], "You should provide either `aria-label` or `aria-labelledby` props.", "See https://reakit.io/docs/composite") : void 0;
    return useCreateElement(type, props, children);
  }
});

var defaultPrefix = "id";
function generateRandomString(prefix) {
  if (prefix === void 0) {
    prefix = defaultPrefix;
  }

  return "" + (prefix ? prefix + "-" : "") + Math.random().toString(32).substr(2, 6);
}

var unstable_IdContext = /*#__PURE__*/React.createContext(generateRandomString);

// Automatically generated
var ID_STATE_KEYS = ["baseId", "unstable_idCountRef", "setBaseId"];
var ID_KEYS = [].concat(ID_STATE_KEYS, ["id"]);

var unstable_useId = createHook({
  keys: ID_KEYS,
  useOptions: function useOptions(options, htmlProps) {
    var generateId = React.useContext(unstable_IdContext);

    var _React$useState = React.useState(function () {
      // This comes from useIdState
      if (options.unstable_idCountRef) {
        options.unstable_idCountRef.current += 1;
        return "-" + options.unstable_idCountRef.current;
      } // If there's no useIdState, we check if `baseId` was passed (as a prop,
      // not from useIdState).


      if (options.baseId) {
        return "-" + generateId("");
      }

      return "";
    }),
        suffix = _React$useState[0]; // `baseId` will be the prop passed directly as a prop or via useIdState.
    // If there's neither, then it'll fallback to Context's generateId.
    // This generateId can result in a sequential ID (if there's a Provider)
    // or a random string (without Provider).


    var baseId = React.useMemo(function () {
      return options.baseId || generateId();
    }, [options.baseId, generateId]);
    var id = htmlProps.id || options.id || "" + baseId + suffix;
    return _objectSpread2$2(_objectSpread2$2({}, options), {}, {
      id: id
    });
  },
  useProps: function useProps(options, htmlProps) {
    return _objectSpread2$2({
      id: options.id
    }, htmlProps);
  }
});
createComponent({
  as: "div",
  useHook: unstable_useId
});

/**
 * Check whether the given element is a text field, where text field is defined
 * by the ability to select within the input, or that it is contenteditable.
 *
 * @example
 * import { isTextField } from "reakit-utils";
 *
 * isTextField(document.querySelector("div")); // false
 * isTextField(document.querySelector("input")); // true
 * isTextField(document.querySelector("input[type='button']")); // false
 * isTextField(document.querySelector("textarea")); // true
 * isTextField(document.querySelector("div[contenteditable='true']")); // true
 */
function isTextField(element) {
  try {
    var isTextInput = element instanceof HTMLInputElement && element.selectionStart !== null;
    var isTextArea = element.tagName === "TEXTAREA";
    var isContentEditable = element.contentEditable === "true";
    return isTextInput || isTextArea || isContentEditable || false;
  } catch (error) {
    // Safari throws an exception when trying to get `selectionStart`
    // on non-text <input> elements (which, understandably, don't
    // have the text selection API). We catch this via a try/catch
    // block, as opposed to a more explicit check of the element's
    // input types, because of Safari's non-standard behavior. This
    // also means we don't have to worry about the list of input
    // types that support `selectionStart` changing as the HTML spec
    // evolves over time.
    return false;
  }
}

/**
 * Checks if `element` has focus. Elements that are referenced by
 * `aria-activedescendant` are also considered.
 *
 * @example
 * import { hasFocus } from "reakit-utils";
 *
 * hasFocus(document.getElementById("id"));
 */

function hasFocus(element) {
  var activeElement = getActiveElement(element);
  if (!activeElement) return false;
  if (activeElement === element) return true;
  var activeDescendant = activeElement.getAttribute("aria-activedescendant");
  if (!activeDescendant) return false;
  return activeDescendant === element.id;
}

/**
 * Ensures `element` will receive focus if it's not already.
 *
 * @example
 * import { ensureFocus } from "reakit-utils";
 *
 * ensureFocus(document.activeElement); // does nothing
 *
 * const element = document.querySelector("input");
 *
 * ensureFocus(element); // focuses element
 * ensureFocus(element, { preventScroll: true }); // focuses element preventing scroll jump
 *
 * function isActive(el) {
 *   return el.dataset.active === "true";
 * }
 *
 * ensureFocus(document.querySelector("[data-active='true']"), { isActive }); // does nothing
 *
 * @returns {number} `requestAnimationFrame` call ID so it can be passed to `cancelAnimationFrame` if needed.
 */
function ensureFocus(element, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      preventScroll = _ref.preventScroll,
      _ref$isActive = _ref.isActive,
      isActive = _ref$isActive === void 0 ? hasFocus : _ref$isActive;

  if (isActive(element)) return -1;
  element.focus({
    preventScroll: preventScroll
  });
  if (isActive(element)) return -1;
  return requestAnimationFrame(function () {
    element.focus({
      preventScroll: preventScroll
    });
  });
}

function setTextFieldValue(element, value) {
  element.value = value;
}

function getWidget(itemElement) {
  return itemElement.querySelector("[data-composite-item-widget]");
}

function useItem(options) {
  return React.useMemo(function () {
    var _options$items;

    return (_options$items = options.items) === null || _options$items === void 0 ? void 0 : _options$items.find(function (item) {
      return options.id && item.id === options.id;
    });
  }, [options.items, options.id]);
}

function targetIsAnotherItem(event, items) {
  if (isSelfTarget(event)) return false;

  for (var _iterator = _createForOfIteratorHelperLoose$2(items), _step; !(_step = _iterator()).done;) {
    var item = _step.value;

    if (item.ref.current === event.target) {
      return true;
    }
  }

  return false;
}

var useCompositeItem = createHook({
  name: "CompositeItem",
  compose: [useClickable, unstable_useId],
  keys: COMPOSITE_ITEM_KEYS,
  propsAreEqual: function propsAreEqual(prev, next) {
    if (!next.id || prev.id !== next.id) {
      return useClickable.unstable_propsAreEqual(prev, next);
    }

    var prevCurrentId = prev.currentId,
        prevMoves = prev.unstable_moves,
        prevProps = _objectWithoutPropertiesLoose$4v(prev, ["currentId", "unstable_moves"]);

    var nextCurrentId = next.currentId,
        nextMoves = next.unstable_moves,
        nextProps = _objectWithoutPropertiesLoose$4v(next, ["currentId", "unstable_moves"]);

    if (nextCurrentId !== prevCurrentId) {
      if (next.id === nextCurrentId || next.id === prevCurrentId) {
        return false;
      }
    } else if (prevMoves !== nextMoves) {
      return false;
    }

    return useClickable.unstable_propsAreEqual(prevProps, nextProps);
  },
  useOptions: function useOptions(options) {
    return _objectSpread2$2(_objectSpread2$2({}, options), {}, {
      id: options.id,
      currentId: getCurrentId(options),
      unstable_clickOnSpace: options.unstable_hasActiveWidget ? false : options.unstable_clickOnSpace
    });
  },
  useProps: function useProps(options, _ref) {
    var _options$items2;

    var htmlRef = _ref.ref,
        _ref$tabIndex = _ref.tabIndex,
        htmlTabIndex = _ref$tabIndex === void 0 ? 0 : _ref$tabIndex,
        htmlOnFocus = _ref.onFocus,
        htmlOnBlurCapture = _ref.onBlurCapture,
        htmlOnKeyDown = _ref.onKeyDown,
        htmlOnClick = _ref.onClick,
        htmlProps = _objectWithoutPropertiesLoose$4v(_ref, ["ref", "tabIndex", "onFocus", "onBlurCapture", "onKeyDown", "onClick"]);

    var ref = React.useRef(null);
    var id = options.id;
    var trulyDisabled = options.disabled && !options.focusable;
    var isCurrentItem = options.currentId === id;
    var isCurrentItemRef = useLiveRef(isCurrentItem);
    var hasFocusedComposite = React.useRef(false);
    var item = useItem(options);
    var onFocusRef = useLiveRef(htmlOnFocus);
    var onBlurCaptureRef = useLiveRef(htmlOnBlurCapture);
    var onKeyDownRef = useLiveRef(htmlOnKeyDown);
    var onClickRef = useLiveRef(htmlOnClick);
    var shouldTabIndex = !options.unstable_virtual && !options.unstable_hasActiveWidget && isCurrentItem || // We don't want to set tabIndex="-1" when using CompositeItem as a
    // standalone component, without state props.
    !((_options$items2 = options.items) === null || _options$items2 === void 0 ? void 0 : _options$items2.length);
    React.useEffect(function () {
      var _options$registerItem;

      if (!id) return undefined;
      (_options$registerItem = options.registerItem) === null || _options$registerItem === void 0 ? void 0 : _options$registerItem.call(options, {
        id: id,
        ref: ref,
        disabled: !!trulyDisabled
      });
      return function () {
        var _options$unregisterIt;

        (_options$unregisterIt = options.unregisterItem) === null || _options$unregisterIt === void 0 ? void 0 : _options$unregisterIt.call(options, id);
      };
    }, [id, trulyDisabled, options.registerItem, options.unregisterItem]);
    React.useEffect(function () {
      var element = ref.current;

      if (!element) {
        process.env.NODE_ENV !== "production" ? warning$1(true, "Can't focus composite item component because `ref` wasn't passed to component.", "See https://reakit.io/docs/composite") : void 0;
        return;
      } // `moves` will be incremented whenever next, previous, up, down, first,
      // last or move have been called. This means that the composite item will
      // be focused whenever some of these functions are called. We're using
      // isCurrentItemRef instead of isCurrentItem because we don't want to
      // focus the item if isCurrentItem changes (and options.moves doesn't).


      if (options.unstable_moves && isCurrentItemRef.current) {
        element.focus();
      }
    }, [options.unstable_moves]);
    var onFocus = React.useCallback(function (event) {
      var _onFocusRef$current, _options$setCurrentId;

      (_onFocusRef$current = onFocusRef.current) === null || _onFocusRef$current === void 0 ? void 0 : _onFocusRef$current.call(onFocusRef, event);
      if (event.defaultPrevented) return;
      if (isPortalEvent(event)) return;
      if (!id) return;
      if (targetIsAnotherItem(event, options.items)) return;
      (_options$setCurrentId = options.setCurrentId) === null || _options$setCurrentId === void 0 ? void 0 : _options$setCurrentId.call(options, id); // When using aria-activedescendant, we want to make sure that the
      // composite container receives focus, not the composite item.
      // But we don't want to do this if the target is another focusable
      // element inside the composite item, such as CompositeItemWidget.

      if (options.unstable_virtual && options.baseId && isSelfTarget(event)) {
        var target = event.target;
        var composite = getDocument(target).getElementById(options.baseId);

        if (composite) {
          hasFocusedComposite.current = true;
          ensureFocus(composite);
        }
      }
    }, [id, options.items, options.setCurrentId, options.unstable_virtual, options.baseId]);
    var onBlurCapture = React.useCallback(function (event) {
      var _onBlurCaptureRef$cur;

      (_onBlurCaptureRef$cur = onBlurCaptureRef.current) === null || _onBlurCaptureRef$cur === void 0 ? void 0 : _onBlurCaptureRef$cur.call(onBlurCaptureRef, event);
      if (event.defaultPrevented) return;

      if (options.unstable_virtual && hasFocusedComposite.current) {
        // When hasFocusedComposite is true, composite has been focused right
        // after focusing this item. This is an intermediate blur event, so
        // we ignore it.
        hasFocusedComposite.current = false;
        event.preventDefault();
        event.stopPropagation();
      }
    }, [options.unstable_virtual]);
    var onKeyDown = React.useCallback(function (event) {
      var _onKeyDownRef$current;

      if (!isSelfTarget(event)) return;
      var isVertical = options.orientation !== "horizontal";
      var isHorizontal = options.orientation !== "vertical";
      var isGrid = !!(item === null || item === void 0 ? void 0 : item.groupId);
      var keyMap = {
        ArrowUp: (isGrid || isVertical) && options.up,
        ArrowRight: (isGrid || isHorizontal) && options.next,
        ArrowDown: (isGrid || isVertical) && options.down,
        ArrowLeft: (isGrid || isHorizontal) && options.previous,
        Home: function Home() {
          if (!isGrid || event.ctrlKey) {
            var _options$first;

            (_options$first = options.first) === null || _options$first === void 0 ? void 0 : _options$first.call(options);
          } else {
            var _options$previous;

            (_options$previous = options.previous) === null || _options$previous === void 0 ? void 0 : _options$previous.call(options, true);
          }
        },
        End: function End() {
          if (!isGrid || event.ctrlKey) {
            var _options$last;

            (_options$last = options.last) === null || _options$last === void 0 ? void 0 : _options$last.call(options);
          } else {
            var _options$next;

            (_options$next = options.next) === null || _options$next === void 0 ? void 0 : _options$next.call(options, true);
          }
        },
        PageUp: function PageUp() {
          if (isGrid) {
            var _options$up;

            (_options$up = options.up) === null || _options$up === void 0 ? void 0 : _options$up.call(options, true);
          } else {
            var _options$first2;

            (_options$first2 = options.first) === null || _options$first2 === void 0 ? void 0 : _options$first2.call(options);
          }
        },
        PageDown: function PageDown() {
          if (isGrid) {
            var _options$down;

            (_options$down = options.down) === null || _options$down === void 0 ? void 0 : _options$down.call(options, true);
          } else {
            var _options$last2;

            (_options$last2 = options.last) === null || _options$last2 === void 0 ? void 0 : _options$last2.call(options);
          }
        }
      };
      var action = keyMap[event.key];

      if (action) {
        event.preventDefault();
        action();
        return;
      }

      (_onKeyDownRef$current = onKeyDownRef.current) === null || _onKeyDownRef$current === void 0 ? void 0 : _onKeyDownRef$current.call(onKeyDownRef, event);
      if (event.defaultPrevented) return;

      if (event.key.length === 1 && event.key !== " ") {
        var widget = getWidget(event.currentTarget);

        if (widget && isTextField(widget)) {
          widget.focus();
          setTextFieldValue(widget, "");
        }
      } else if (event.key === "Delete" || event.key === "Backspace") {
        var _widget = getWidget(event.currentTarget);

        if (_widget && isTextField(_widget)) {
          event.preventDefault();
          setTextFieldValue(_widget, "");
        }
      }
    }, [options.orientation, item, options.up, options.next, options.down, options.previous, options.first, options.last]);
    var onClick = React.useCallback(function (event) {
      var _onClickRef$current;

      (_onClickRef$current = onClickRef.current) === null || _onClickRef$current === void 0 ? void 0 : _onClickRef$current.call(onClickRef, event);
      if (event.defaultPrevented) return;
      var element = event.currentTarget;
      var widget = getWidget(element);

      if (widget && !hasFocusWithin(widget)) {
        // If there's a widget inside the composite item, we make sure it's
        // focused when pressing enter, space or clicking on the composite item.
        widget.focus();
      }
    }, []);
    return _objectSpread2$2({
      ref: useForkRef(ref, htmlRef),
      id: id,
      tabIndex: shouldTabIndex ? htmlTabIndex : -1,
      "aria-selected": options.unstable_virtual && isCurrentItem ? true : undefined,
      onFocus: onFocus,
      onBlurCapture: onBlurCapture,
      onKeyDown: onKeyDown,
      onClick: onClick
    }, htmlProps);
  }
});
createComponent({
  as: "button",
  memo: true,
  useHook: useCompositeItem
});

// Automatically generated
var RADIO_STATE_KEYS = ["baseId", "unstable_idCountRef", "unstable_virtual", "rtl", "orientation", "items", "groups", "currentId", "loop", "wrap", "unstable_moves", "unstable_angular", "unstable_hasActiveWidget", "state", "setBaseId", "registerItem", "unregisterItem", "registerGroup", "unregisterGroup", "move", "next", "previous", "up", "down", "first", "last", "sort", "unstable_setVirtual", "setRTL", "setOrientation", "setCurrentId", "setLoop", "setWrap", "reset", "unstable_setHasActiveWidget", "setState"];
var RADIO_KEYS = [].concat(RADIO_STATE_KEYS, ["value", "checked", "unstable_checkOnFocus"]);
var RADIO_GROUP_KEYS = RADIO_STATE_KEYS;

function getChecked(options) {
  if (typeof options.checked !== "undefined") {
    return options.checked;
  }

  return typeof options.value !== "undefined" && options.state === options.value;
}

function useInitialChecked(options) {
  var _React$useState = React.useState(function () {
    return getChecked(options);
  }),
      initialChecked = _React$useState[0];

  var _React$useState2 = React.useState(options.currentId),
      initialCurrentId = _React$useState2[0];

  var id = options.id,
      setCurrentId = options.setCurrentId;
  React.useEffect(function () {
    if (initialChecked && id && initialCurrentId !== id) {
      setCurrentId === null || setCurrentId === void 0 ? void 0 : setCurrentId(id);
    }
  }, [initialChecked, id, setCurrentId, initialCurrentId]);
}

function fireChange(element, onChange) {
  var event = createEvent(element, "change");
  Object.defineProperties(event, {
    type: {
      value: "change"
    },
    target: {
      value: element
    },
    currentTarget: {
      value: element
    }
  });
  onChange === null || onChange === void 0 ? void 0 : onChange(event);
}

var useRadio = createHook({
  name: "Radio",
  compose: useCompositeItem,
  keys: RADIO_KEYS,
  useOptions: function useOptions(_ref, _ref2) {
    var _options$value;

    var value = _ref2.value,
        checked = _ref2.checked;

    var _ref$unstable_clickOn = _ref.unstable_clickOnEnter,
        unstable_clickOnEnter = _ref$unstable_clickOn === void 0 ? false : _ref$unstable_clickOn,
        _ref$unstable_checkOn = _ref.unstable_checkOnFocus,
        unstable_checkOnFocus = _ref$unstable_checkOn === void 0 ? true : _ref$unstable_checkOn,
        options = _objectWithoutPropertiesLoose$4v(_ref, ["unstable_clickOnEnter", "unstable_checkOnFocus"]);

    return _objectSpread2$2(_objectSpread2$2({
      checked: checked,
      unstable_clickOnEnter: unstable_clickOnEnter,
      unstable_checkOnFocus: unstable_checkOnFocus
    }, options), {}, {
      value: (_options$value = options.value) != null ? _options$value : value
    });
  },
  useProps: function useProps(options, _ref3) {
    var htmlRef = _ref3.ref,
        htmlOnChange = _ref3.onChange,
        htmlOnClick = _ref3.onClick,
        htmlProps = _objectWithoutPropertiesLoose$4v(_ref3, ["ref", "onChange", "onClick"]);

    var ref = React.useRef(null);

    var _React$useState3 = React.useState(true),
        isNativeRadio = _React$useState3[0],
        setIsNativeRadio = _React$useState3[1];

    var checked = getChecked(options);
    var isCurrentItemRef = useLiveRef(options.currentId === options.id);
    var onChangeRef = useLiveRef(htmlOnChange);
    var onClickRef = useLiveRef(htmlOnClick);
    useInitialChecked(options);
    React.useEffect(function () {
      var element = ref.current;

      if (!element) {
        process.env.NODE_ENV !== "production" ? warning$1(true, "Can't determine whether the element is a native radio because `ref` wasn't passed to the component", "See https://reakit.io/docs/radio") : void 0;
        return;
      }

      if (element.tagName !== "INPUT" || element.type !== "radio") {
        setIsNativeRadio(false);
      }
    }, []);
    var onChange = React.useCallback(function (event) {
      var _onChangeRef$current, _options$setState;

      (_onChangeRef$current = onChangeRef.current) === null || _onChangeRef$current === void 0 ? void 0 : _onChangeRef$current.call(onChangeRef, event);
      if (event.defaultPrevented) return;
      if (options.disabled) return;
      (_options$setState = options.setState) === null || _options$setState === void 0 ? void 0 : _options$setState.call(options, options.value);
    }, [options.disabled, options.setState, options.value]);
    var onClick = React.useCallback(function (event) {
      var _onClickRef$current;

      (_onClickRef$current = onClickRef.current) === null || _onClickRef$current === void 0 ? void 0 : _onClickRef$current.call(onClickRef, event);
      if (event.defaultPrevented) return;
      fireChange(event.currentTarget, onChange);
    }, [onChange]);
    React.useEffect(function () {
      var element = ref.current;
      if (!element) return;

      if (options.unstable_moves && isCurrentItemRef.current && options.unstable_checkOnFocus) {
        fireChange(element, onChange);
      }
    }, [options.unstable_moves, options.unstable_checkOnFocus, onChange]);
    return _objectSpread2$2({
      ref: useForkRef(ref, htmlRef),
      role: !isNativeRadio ? "radio" : undefined,
      type: isNativeRadio ? "radio" : undefined,
      value: isNativeRadio ? options.value : undefined,
      name: isNativeRadio ? options.baseId : undefined,
      "aria-checked": checked,
      checked: checked,
      onChange: onChange,
      onClick: onClick
    }, htmlProps);
  }
});
var Radio$1 = createComponent({
  as: "input",
  memo: true,
  useHook: useRadio
});

var useRadioGroup = createHook({
  name: "RadioGroup",
  compose: useComposite,
  keys: RADIO_GROUP_KEYS,
  useProps: function useProps(_, htmlProps) {
    return _objectSpread2$2({
      role: "radiogroup"
    }, htmlProps);
  }
});
var RadioGroup$1 = createComponent({
  as: "div",
  useHook: useRadioGroup,
  useCreateElement: function useCreateElement$1(type, props, children) {
    process.env.NODE_ENV !== "production" ? useWarning(!props["aria-label"] && !props["aria-labelledby"], "You should provide either `aria-label` or `aria-labelledby` props.", "See https://reakit.io/docs/radio") : void 0;
    return useCreateElement(type, props, children);
  }
});

var Radio = function Radio(_ref) {
  var label = _ref.label,
      className = _ref.className,
      props = _objectWithoutProperties$4v(_ref, ["label", "className"]);

  return /*#__PURE__*/React__default['default'].createElement("label", {
    className: "radio--wrapper ".concat(className)
  }, /*#__PURE__*/React__default['default'].createElement(Radio$1, _extends$4w({
    className: "radio"
  }, props)), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "radio--label"
  }, label));
};
Radio.defaultProps = {
  className: ''
};
Radio.propTypes = {
  label: propTypes.string,
  className: propTypes.string
};
var RadioGroup = function RadioGroup(_ref2) {
  var className = _ref2.className,
      props = _objectWithoutProperties$4v(_ref2, ["className"]);

  return /*#__PURE__*/React__default['default'].createElement(RadioGroup$1, _extends$4w({
    className: "radio--group ".concat(className)
  }, props));
};
RadioGroup.defaultProps = {
  className: ''
};
RadioGroup.propTypes = {
  className: propTypes.string
};

var Select = function Select(_ref) {
  var value = _ref.value,
      errors = _ref.errors,
      isSmall = _ref.isSmall,
      isDisabled = _ref.isDisabled,
      withElements = _ref.withElements,
      className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties$4v(_ref, ["value", "errors", "isSmall", "isDisabled", "withElements", "className", "children"]);

  var selectClasses = classnames({
    'select': !withElements,
    'select--default': !withElements && !errors,
    'select--error': !withElements && errors,
    'select--with-elements': withElements,
    'text-gray-1000': value,
    'text-gray-600': !value,
    'select--small': isSmall
  }, className);
  return /*#__PURE__*/React__default['default'].createElement("select", _extends$4w({
    value: value,
    className: selectClasses,
    disabled: isDisabled
  }, props), children);
};
Select.id = 'Select';
Select.defaultProps = {
  className: ''
};
Select.propTypes = {
  isSmall: propTypes.bool,
  isDisabled: propTypes.bool,
  withElements: propTypes.bool,
  className: propTypes.string,
  children: propTypes.node
};
var Option = function Option(_ref2) {
  var value = _ref2.value,
      children = _ref2.children,
      isDisabled = _ref2.isDisabled,
      props = _objectWithoutProperties$4v(_ref2, ["value", "children", "isDisabled"]);

  return /*#__PURE__*/React__default['default'].createElement("option", _extends$4w({
    value: value,
    disabled: isDisabled,
    className: value ? 'text-gray-900' : 'text-gray-600'
  }, props), children);
};
Option.id = 'Option';
Option.propTypes = {
  isDisabled: propTypes.bool,
  children: propTypes.node
};

var Switch = function Switch(_ref) {
  var name = _ref.name,
      value = _ref.value,
      label = _ref.label,
      color = _ref.color,
      checked = _ref.checked,
      onChange = _ref.onChange,
      className = _ref.className,
      props = _objectWithoutProperties$4v(_ref, ["name", "value", "label", "color", "checked", "onChange", "className"]);

  var switchClasses = classnames('switch', _defineProperty$3({
    'switch--inactive': !checked
  }, "switch--active--".concat(color), checked));
  var switchButtonClasses = classnames('transform', 'switch--button', {
    'switch--button--active': checked,
    'switch--button--inactive': !checked
  });
  return /*#__PURE__*/React__default['default'].createElement("label", {
    className: "switch--wrapper ".concat(className)
  }, /*#__PURE__*/React__default['default'].createElement("div", _extends$4w({
    name: name,
    value: value,
    "data-type": "switch",
    className: switchClasses,
    onClick: onChange
  }, props), /*#__PURE__*/React__default['default'].createElement("div", {
    name: name,
    value: value,
    "data-type": "switch",
    onClick: onChange,
    className: switchButtonClasses
  })), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "switch--label"
  }, label));
};
Switch.defaultProps = {
  label: '',
  color: 'blue',
  className: ''
};
Switch.propTypes = {
  name: propTypes.string,
  label: propTypes.string,
  color: propTypes.string,
  value: propTypes.bool,
  checked: propTypes.bool,
  onChange: propTypes.func,
  className: propTypes.string
};

var TabLabel = function TabLabel(_ref) {
  var _classNames;

  var icon = _ref.icon,
      index = _ref.index,
      color = _ref.color,
      title = _ref.title,
      active = _ref.active,
      newTab = _ref.newTab,
      removeTab = _ref.removeTab,
      setActiveTab = _ref.setActiveTab,
      multipleTabs = _ref.multipleTabs;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      hover = _useState2[0],
      setHover = _useState2[1];

  var tabLabelClasses = classnames('tab', (_classNames = {}, _defineProperty$3(_classNames, "tab--active--".concat(color), active), _defineProperty$3(_classNames, "tab--inactive--".concat(color), !active), _classNames));
  var tabDeleteClasses = classnames({
    'tab--delete--hover': multipleTabs && hover,
    'tab--delete--default': !multipleTabs || multipleTabs && !hover
  });
  var tabMarkerClasses = classnames('tab--marker', _defineProperty$3({
    'tab--marker': !active
  }, "tab--marker--".concat(color), active));
  return /*#__PURE__*/React__default['default'].createElement("div", {
    onClick: function onClick() {
      return setActiveTab(index);
    },
    onMouseEnter: function onMouseEnter() {
      return setHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHover(false);
    },
    className: tabLabelClasses
  }, newTab && /*#__PURE__*/React__default['default'].createElement(Icon$1.Icon, {
    as: "X",
    isRounded: true,
    padding: 1,
    color: color,
    variant: "clickable",
    className: tabDeleteClasses,
    onClick: function onClick(e) {
      return removeTab(e, index);
    }
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "tab--label"
  }, icon && /*#__PURE__*/React__default['default'].createElement(Icon$1.Icon, {
    as: icon,
    className: "mr-2"
  }), title), /*#__PURE__*/React__default['default'].createElement("div", {
    className: tabMarkerClasses
  }));
};

var Tabs = function Tabs(_ref2) {
  var index = _ref2.index,
      color = _ref2.color,
      newTab = _ref2.newTab,
      onClick = _ref2.onClick,
      children = _ref2.children,
      props = _objectWithoutProperties$4v(_ref2, ["index", "color", "newTab", "onClick", "children"]);

  var defaultChildrenCopyState = children.length > 1 ? _toConsumableArray(children) : [children];

  var _useState3 = React.useState(defaultChildrenCopyState),
      _useState4 = _slicedToArray(_useState3, 2),
      childrenCopy = _useState4[0],
      setChildrenCopy = _useState4[1];

  var tabs = childrenCopy.map(function (child) {
    return {
      title: child.props.tabTitle,
      icon: child.props.icon
    };
  });
  var setActiveTab = onClick;

  var addTab = function addTab() {
    setChildrenCopy([].concat(_toConsumableArray(childrenCopy), [newTab]));
  };

  var removeTab = function removeTab(event, tabIndex) {
    event.stopPropagation(); // delete active tab at index 0

    if (index === tabIndex && index - 1 === -1) {
      setActiveTab(0);
    } // delete active tab at index > 0 || delete inactive tab at lower index than active
    else if (index === tabIndex || tabIndex < index) {
        setActiveTab(index - 1);
      }

    setChildrenCopy(childrenCopy.filter(function (tab, i) {
      return i !== tabIndex;
    }));
  };

  return /*#__PURE__*/React__default['default'].createElement("div", props, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "tab--wrapper"
  }, tabs.map(function (tab, i) {
    return /*#__PURE__*/React__default['default'].createElement(TabLabel, {
      key: "tab-".concat(i),
      index: i,
      color: color,
      icon: tab.icon,
      newTab: newTab,
      title: tab.title,
      setActiveTab: setActiveTab,
      removeTab: removeTab,
      active: index === i,
      multipleTabs: tabs.length > 1
    });
  }), newTab && /*#__PURE__*/React__default['default'].createElement(Icon$1.Icon, {
    as: "Plus",
    size: 5,
    isRounded: true,
    padding: 1,
    color: color,
    variant: "clickable",
    className: "mb-2",
    onClick: addTab
  })), /*#__PURE__*/React__default['default'].createElement("div", null, childrenCopy.map(function (panel, i) {
    return index === i ? /*#__PURE__*/React.cloneElement(panel, {
      key: "panel-".concat(i),
      className: 'pt-4'
    }) : /*#__PURE__*/React.cloneElement(panel, {
      key: "panel-".concat(i),
      className: 'hidden'
    });
  })));
};
Tabs.defaultProps = {
  color: 'blue'
};
Tabs.propTypes = {
  color: propTypes.string,
  index: propTypes.number.isRequired,
  onClick: propTypes.func.isRequired
};
var Tab = function Tab(_ref3) {
  _ref3.icon;
      _ref3.tabTitle;
      var children = _ref3.children,
      props = _objectWithoutProperties$4v(_ref3, ["icon", "tabTitle", "children"]);

  return /*#__PURE__*/React__default['default'].createElement("div", props, children);
};
Tab.propTypes = {
  icon: propTypes.string,
  tabTitle: propTypes.string.isRequired
};

var TextArea = function TextArea(_ref) {
  var rows = _ref.rows,
      cols = _ref.cols,
      errors = _ref.errors,
      isDisabled = _ref.isDisabled,
      className = _ref.className,
      props = _objectWithoutProperties$4v(_ref, ["rows", "cols", "errors", "isDisabled", "className"]);

  var textAreaClasses = classnames('text-area', className, {
    'text-area--default': !errors,
    'text-area--error': errors
  });
  return /*#__PURE__*/React__default['default'].createElement("textarea", _extends$4w({
    rows: rows,
    cols: cols,
    className: textAreaClasses,
    disabled: isDisabled
  }, props));
};
TextArea.id = 'TextArea';
TextArea.defaultProps = {
  rows: 2,
  cols: 25,
  className: '',
  isDisabled: false
};
TextArea.propTypes = {
  rows: propTypes.number,
  cols: propTypes.number,
  isDisabled: propTypes.bool,
  className: propTypes.string
};

var TextField = function TextField(_ref) {
  var type = _ref.type,
      errors = _ref.errors,
      isSmall = _ref.isSmall,
      isDisabled = _ref.isDisabled,
      withElements = _ref.withElements,
      className = _ref.className,
      props = _objectWithoutProperties$4v(_ref, ["type", "errors", "isSmall", "isDisabled", "withElements", "className"]);

  var textFieldClasses = classnames({
    'textfield': !withElements,
    'textfield--default': !withElements && !errors,
    'textfield--error': !withElements && errors,
    'textfield--with-elements': withElements,
    'textfield--small': isSmall
  }, className);
  return /*#__PURE__*/React__default['default'].createElement("input", _extends$4w({
    type: type,
    className: textFieldClasses,
    disabled: isDisabled
  }, props));
};
TextField.id = 'TextField';
TextField.defaultProps = {
  type: 'text',
  className: '',
  isSmall: false,
  isDisabled: false,
  withElements: false
};
TextField.propTypes = {
  isSmall: propTypes.bool,
  isDisabled: propTypes.bool,
  withElements: propTypes.bool,
  className: propTypes.string,
  type: propTypes.oneOf(['text', 'password'])
};

var Tooltip = function Tooltip(_ref) {
  var color = _ref.color,
      content = _ref.content,
      isSmall = _ref.isSmall,
      position = _ref.position,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties$4v(_ref, ["color", "content", "isSmall", "position", "children", "className"]);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var wrapperPositionClasses = classnames(_defineProperty$3({
    'hidden': !visible
  }, "tooltip--wrapper--".concat(position), visible));
  var tooltipClasses = classnames('tooltip', "tooltip--".concat(color), "animate-fade-in-to-".concat(position), {
    'tooltip--small': isSmall
  });
  return /*#__PURE__*/React__default['default'].createElement("div", _extends$4w({
    onMouseEnter: function onMouseEnter() {
      return setVisible(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setVisible(false);
    },
    className: "tooltip--wrapper ".concat(className)
  }, props), /*#__PURE__*/React__default['default'].createElement("div", {
    className: wrapperPositionClasses
  }, /*#__PURE__*/React__default['default'].createElement(Box$2.Box, {
    color: color,
    variant: "frame",
    className: tooltipClasses
  }, content)), children);
};
Tooltip.defaultProps = {
  color: 'blue',
  position: 'r',
  className: ''
};
Tooltip.propTypes = {
  color: propTypes.string,
  isSmall: propTypes.bool,
  position: propTypes.string,
  className: propTypes.string
};

var useForm = function useForm() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$initialValues = _ref.initialValues,
      initialValues = _ref$initialValues === void 0 ? {} : _ref$initialValues,
      _ref$validators = _ref.validators,
      validators = _ref$validators === void 0 ? {} : _ref$validators;

  var _useState = React.useState(initialValues),
      _useState2 = _slicedToArray(_useState, 2),
      values = _useState2[0],
      setValues = _useState2[1];

  var _useState3 = React.useState({}),
      _useState4 = _slicedToArray(_useState3, 2),
      errors = _useState4[0],
      setErrors = _useState4[1];

  return {
    values: values,
    setValues: setValues,
    set: function set(name) {
      return {
        name: name,
        value: values[name],
        errors: errors[name],
        checked: values[name],
        onChange: function onChange(event) {
          var _event$target = event.target,
              name = _event$target.name,
              value = _event$target.value,
              type = _event$target.type,
              dataset = _event$target.dataset;

          if (dataset.type === 'switch') {
            name = event.target.getAttribute('name');
            value = event.target.getAttribute('value');
          } // Validate input value.


          if (validators && validators[name] && value === '') {
            setErrors(Object.assign({}, errors, _defineProperty$3({}, name, null)));
          } else if (validators && validators[name]) {
            setErrors(Object.assign({}, errors, _defineProperty$3({}, name, validators[name](value))));
          } // Set new value to state.


          type === 'checkbox' || dataset.type === 'switch' ? setValues(Object.assign({}, values, _defineProperty$3({}, name, !values[name]))) : setValues(Object.assign({}, values, _defineProperty$3({}, name, value)));
        }
      };
    },
    getValidatedSubmission: function getValidatedSubmission() {
      // Prevent callback execution if errors present.
      for (var name in errors) {
        if (errors && errors[name]) {
          return {
            errors: errors
          };
        }
      } // Prevent callback execution if empty form fields break any validation rules.


      for (var _name in values) {
        if (validators && validators[_name] && validators[_name](values[_name])) {
          return {
            errors: 'Please fill in all required fields.'
          };
        }
      }

      return {
        values: values
      };
    },
    reset: function reset() {
      setValues(initialValues);
      setErrors({});
    },
    helpers: {
      checkIfEmail: function checkIfEmail(email) {
        var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return !regex.test(email);
      },
      checkIfPhoneNumber: function checkIfPhoneNumber(phoneNumber) {
        var regex = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
        return regex.test(phoneNumber);
      },
      checkIfProtocolUrl: function checkIfProtocolUrl(url) {
        // Protocol required.
        var regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/;
        return !regex.test(url);
      },
      checkIfUrl: function checkIfUrl(url) {
        // Protocol optional.
        var regex = /(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
        return !regex.test(url);
      },
      checkPasswordStrength: function checkPasswordStrength(password) {
        // Requires 1 lowercase letter, 1 uppercase letter, 1 number, and at least 8 characters.
        var regex = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/;
        return !regex.test(password);
      },
      checkPasswordStrengthStrict: function checkPasswordStrengthStrict(password) {
        // Requires 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character, and at least 8 characters.
        var regex = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;
        return !regex.test(password);
      },
      checkIfAlphanumeric: function checkIfAlphanumeric(string) {
        var regex = /^[a-zA-Z0-9]*$/;
        return !regex.test(string);
      },
      checkIfAlphanumericWithSpaces: function checkIfAlphanumericWithSpaces(string) {
        var regex = /^[a-zA-Z0-9 ]*$/;
        return !regex.test(string);
      }
    }
  };
};

exports.Accordion = Accordion;
exports.AccordionPanel = AccordionPanel;
exports.ActionMenu = ActionMenu;
exports.ActionMenuItem = ActionMenuItem;
exports.Alert = Alert;
exports.Avatar = Avatar;
exports.Badge = Badge;
exports.Box = Box$1;
exports.Button = Button;
exports.Checkbox = Checkbox;
exports.Chip = Chip;
exports.Divider = Divider;
exports.Drawer = Drawer;
exports.DrawerBody = DrawerBody;
exports.DrawerFooter = DrawerFooter;
exports.DrawerHeader = DrawerHeader;
exports.Field = Field;
exports.FieldElementLeft = FieldElementLeft;
exports.FieldElementRight = FieldElementRight;
exports.FieldMessage = FieldMessage;
exports.Icon = Icon;
exports.Menu = Menu;
exports.MenuCategory = MenuCategory;
exports.MenuItem = MenuItem;
exports.Modal = Modal;
exports.ModalBody = ModalBody;
exports.ModalFooter = ModalFooter;
exports.ModalHeader = ModalHeader;
exports.MultiSelect = MultiSelect;
exports.MultiSelectItem = MultiSelectItem;
exports.Option = Option;
exports.Radio = Radio;
exports.RadioGroup = RadioGroup;
exports.Select = Select;
exports.Switch = Switch;
exports.Tab = Tab;
exports.Tabs = Tabs;
exports.TextArea = TextArea;
exports.TextField = TextField;
exports.Tooltip = Tooltip;
exports.useForm = useForm;
