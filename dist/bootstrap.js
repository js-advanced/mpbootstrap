(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"), require("react-redux"), require("redux"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom", "react-redux", "redux"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-dom"), require("react-redux"), require("redux")) : factory(root["react"], root["react-dom"], root["react-redux"], root["redux"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__, __WEBPACK_EXTERNAL_MODULE_react_redux__, __WEBPACK_EXTERNAL_MODULE_redux__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/fbjs/lib/EventListener.js":
/*!************************************************!*\
  !*** ./node_modules/fbjs/lib/EventListener.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */
var emptyFunction = __webpack_require__(/*! ./emptyFunction */ "./node_modules/fbjs/lib/emptyFunction.js");
/**
 * Upstream version of event listener. Does not take into account specific
 * nature of platform.
 */


var EventListener = {
  /**
   * Listen to DOM events during the bubble phase.
   *
   * @param {DOMEventTarget} target DOM element to register listener on.
   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
   * @param {function} callback Callback function.
   * @return {object} Object with a `remove` method.
   */
  listen: function listen(target, eventType, callback) {
    if (target.addEventListener) {
      target.addEventListener(eventType, callback, false);
      return {
        remove: function remove() {
          target.removeEventListener(eventType, callback, false);
        }
      };
    } else if (target.attachEvent) {
      target.attachEvent('on' + eventType, callback);
      return {
        remove: function remove() {
          target.detachEvent('on' + eventType, callback);
        }
      };
    }
  },

  /**
   * Listen to DOM events during the capture phase.
   *
   * @param {DOMEventTarget} target DOM element to register listener on.
   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
   * @param {function} callback Callback function.
   * @return {object} Object with a `remove` method.
   */
  capture: function capture(target, eventType, callback) {
    if (target.addEventListener) {
      target.addEventListener(eventType, callback, true);
      return {
        remove: function remove() {
          target.removeEventListener(eventType, callback, true);
        }
      };
    } else {
      if (true) {
        console.error('Attempted to listen to events during the capture phase on a ' + 'browser that does not support the capture phase. Your application ' + 'will not receive some events.');
      }

      return {
        remove: emptyFunction
      };
    }
  },
  registerDefault: function registerDefault() {}
};
module.exports = EventListener;

/***/ }),

/***/ "./node_modules/fbjs/lib/emptyFunction.js":
/*!************************************************!*\
  !*** ./node_modules/fbjs/lib/emptyFunction.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}
/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */


var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);

emptyFunction.thatReturnsThis = function () {
  return this;
};

emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ "./node_modules/redux-devtools-extension/index.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-devtools-extension/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var compose = __webpack_require__(/*! redux */ "redux").compose;

exports.__esModule = true;
exports.composeWithDevTools = (
   true && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
    function() {
      if (arguments.length === 0) return undefined;
      if (typeof arguments[0] === 'object') return compose;
      return compose.apply(null, arguments);
    }
);

exports.devToolsEnhancer = (
   true && window.__REDUX_DEVTOOLS_EXTENSION__ ?
    window.__REDUX_DEVTOOLS_EXTENSION__ :
    function() { return function(noop) { return noop; } }
);


/***/ }),

/***/ "./node_modules/redux-thunk/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/redux-thunk/es/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

/* harmony default export */ __webpack_exports__["default"] = (thunk);

/***/ }),

/***/ "./src/bootstrap.tsx":
/*!***************************!*\
  !*** ./src/bootstrap.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var react_redux_1 = __webpack_require__(/*! react-redux */ "react-redux");
var store_1 = __webpack_require__(/*! ./store */ "./src/store.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
var actions_1 = __webpack_require__(/*! ./workspace/actions */ "./src/workspace/actions.ts");
var EventListener_1 = __webpack_require__(/*! fbjs/lib/EventListener */ "./node_modules/fbjs/lib/EventListener.js");
var events_1 = __webpack_require__(/*! ./workflow/events */ "./src/workflow/events.ts");
var Bootstrap = /** @class */ (function (_super) {
    __extends(Bootstrap, _super);
    function Bootstrap() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.firstRender = true;
        _this.currentBundle = '';
        _this.onPopState = function (event) {
            _this.props.openApp(window.location.hash.substr(1));
        };
        return _this;
    }
    Bootstrap.prototype.componentDidMount = function () {
        EventListener_1.listen(window, 'popstate', this.onPopState);
        //  this.props.getWorkSpace();
    };
    Bootstrap.prototype.componentWillUnmount = function () {
        console.info('WillUnmount');
    };
    Bootstrap.prototype.downloader = function (bundleName) {
        return __awaiter(this, void 0, void 0, function () {
            var _bundleName, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _bundleName = bundleName;
                        if (bundleName === 'defaultapp') {
                            _bundleName = "main-landing/" + bundleName;
                        }
                        if (bundleName === 'radio/radioapp') {
                            _bundleName = 'radioapp';
                        }
                        this.currentBundle = bundleName;
                        _a = this;
                        return [4 /*yield*/, utils_1.loadApp(_bundleName, this.props.errorOpenApp)];
                    case 1:
                        _a.App = _b.sent();
                        this.setState({ appLoaded: true });
                        window.history.pushState({ flowName: bundleName }, '', "/#" + bundleName);
                        return [2 /*return*/];
                }
            });
        });
    };
    Bootstrap.prototype.render = function () {
        var _this = this;
        var _a = this, _b = _a.props, bundleName = _b.bundleName, errorbundleName = _b.errorbundleName, App = _a.App, firstRender = _a.firstRender, state = _a.state, currentBundle = _a.currentBundle;
        if (errorbundleName) {
            alert("\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 " + errorbundleName + " \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C");
        }
        if (bundleName !== currentBundle) {
            console.log(333);
            this.downloader(bundleName);
            return (React.createElement("div", null, "\u0418\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."));
        }
        if (firstRender && state && this.state.appLoaded) {
            firstRender = false;
            console.log(222);
            return !App ? React.createElement("div", null, "\u0418\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430...") :
                (React.createElement(react_redux_1.ReactReduxContext.Consumer, null, function (_a) {
                    var store = _a.store;
                    store_1.injectAsyncReducer(store, 'app', App.reducer);
                    _this.setState({ appLoaded: false });
                    return React.createElement(App, __assign({}, _this.props));
                }));
        }
        console.log(111);
        return !App ? React.createElement("div", null, "\u0418\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430...") : React.createElement(App, __assign({}, this.props));
    };
    return Bootstrap;
}(React.PureComponent));
var mapStateToProps = function (state) {
    // console.log('state', state);
    return {
        errorbundleName: state.workspace.errorbundleName,
        bundleName: state.workspace.bundleName || window.location.hash.substr(1) || 'defaultapp',
        data: state.workflow.data,
        stateName: state.workflow.stateName,
        flowName: state.workflow.flowName,
        history: state.workflow.history || [],
        isLoading: state.workflow.isLoading
    };
};
var mapDispatchToProps = function (dispatch) { return ({
    openApp: function (bundleName) { return dispatch(actions_1.openApp(bundleName)); },
    initFlow: function (param, data) { return dispatch(events_1.initFlow(param, data)); },
    sendStateEvent: function (name, data) { return dispatch(events_1.sendStateEvent(name, data)); },
    errorOpenApp: function (bundleName) { return dispatch(actions_1.errorOpenApp(bundleName)); },
    rollback: function (stateId) { return dispatch(events_1.rollbackState(stateId)); },
    exitApp: function () { return dispatch(events_1.exitState()); }
    // getWorkSpace: () => dispatch(getWorkSpace()),
}); };
exports.LoaderApp = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Bootstrap);


/***/ }),

/***/ "./src/main.tsx":
/*!**********************!*\
  !*** ./src/main.tsx ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
var react_redux_1 = __webpack_require__(/*! react-redux */ "react-redux");
var bootstrap_1 = __webpack_require__(/*! ./bootstrap */ "./src/bootstrap.tsx");
var store_1 = __webpack_require__(/*! ./store */ "./src/store.ts");
var initialState = {};
var store = store_1.configureStore(initialState);
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store },
    React.createElement(bootstrap_1.LoaderApp, null)), document.getElementById('root'));


/***/ }),

/***/ "./src/store.ts":
/*!**********************!*\
  !*** ./src/store.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Redux = __webpack_require__(/*! redux */ "redux");
var redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
var Thunk = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
var reducers_1 = __webpack_require__(/*! ./workspace/reducers */ "./src/workspace/reducers.ts");
var reducers_2 = __webpack_require__(/*! ./workflow/reducers */ "./src/workflow/reducers.ts");
function createReducer(asyncReducers) {
    return Redux.combineReducers(__assign({ workspace: reducers_1.workspace,
        workflow: reducers_2.workflow }, asyncReducers));
}
function injectAsyncReducer(store, name, asyncReducer) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (store.asyncReducers[name]) {
                        return [2 /*return*/];
                    }
                    store.asyncReducers[name] = asyncReducer;
                    return [4 /*yield*/, store.replaceReducer(createReducer(store.asyncReducers))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.injectAsyncReducer = injectAsyncReducer;
function configureStore(initialState) {
    if (initialState === void 0) { initialState = {}; }
    var store = Redux.createStore(createReducer({}), redux_devtools_extension_1.composeWithDevTools(Redux.applyMiddleware(Thunk.default)));
    store.asyncReducers = {};
    return store;
}
exports.configureStore = configureStore;


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = __webpack_require__(/*! ./workspace/actions */ "./src/workspace/actions.ts");
// export const PushToHistory = (flowname: string) => {
//     window.history.pushState(
//         { flowName: flowname },
//         '',
//         `/#${flowname}`
//     );
// };
function loadApp(bundleName, errorfn) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, System.import("./" + bundleName + ".js")
                        .then(function (result) {
                        return result.default;
                    })
                        .catch(function (error) {
                        console.info("\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C " + bundleName + " \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C!");
                        console.info("error in " + bundleName, error);
                        errorfn(bundleName);
                    })];
                case 1: 
                // console.log(`./${bundleName}.js`);
                return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.loadApp = loadApp;
exports.getWorkSpace = function () { return function (dispatch, getState) {
    fetch('/getCurrentState', { credentials: 'same-origin' })
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        dispatch(actions_1.getCurrentState(data));
    });
}; };


/***/ }),

/***/ "./src/workflow/actions.ts":
/*!*********************************!*\
  !*** ./src/workflow/actions.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.init = function (options) { return ({
    type: 'WF_INIT',
    options: options
}); };
exports.success = function (body) { return ({
    type: 'WF_SUCCESS',
    body: body
}); };
exports.sendCommand = function () { return ({ type: 'WF_SEND_COMMAND' }); };
exports.error = function (data) { return ({
    type: 'WF_ERROR',
    error: data
}); };


/***/ }),

/***/ "./src/workflow/constants.ts":
/*!***********************************!*\
  !*** ./src/workflow/constants.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Command;
(function (Command) {
    Command["START"] = "START";
    Command["EVENT"] = "EVENT";
    Command["EXIT"] = "EXIT";
    Command["ABORT"] = "ABORT";
    Command["ROLLBACK"] = "ROLLBACK";
})(Command = exports.Command || (exports.Command = {}));
var WorkflowStatus;
(function (WorkflowStatus) {
    WorkflowStatus[WorkflowStatus["SUCCESS"] = 0] = "SUCCESS";
    WorkflowStatus[WorkflowStatus["EXTERNAL_ENTER"] = 1] = "EXTERNAL_ENTER";
    WorkflowStatus[WorkflowStatus["EXTERNAL_RETURN"] = 2] = "EXTERNAL_RETURN";
    WorkflowStatus[WorkflowStatus["END"] = 3] = "END";
})(WorkflowStatus = exports.WorkflowStatus || (exports.WorkflowStatus = {}));


/***/ }),

/***/ "./src/workflow/events.ts":
/*!********************************!*\
  !*** ./src/workflow/events.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(/*! ./constants */ "./src/workflow/constants.ts");
var actions_1 = __webpack_require__(/*! ./actions */ "./src/workflow/actions.ts");
var execute_1 = __webpack_require__(/*! ./execute */ "./src/workflow/execute.ts");
var initFlow = function (options, data) { return function (dispatch, getState) {
    dispatch(actions_1.init(options));
    var _a = getState().workspace.currentState, flowName = _a.flowName, eventName = _a.eventName;
    if (flowName === options.flowName && eventName) {
        dispatch(execute_1.default(constants_1.Command.EVENT, { name: eventName }, {}));
    }
    else {
        // PushToHistory(getState().workflow.flowName);
        dispatch(execute_1.default(constants_1.Command.START, { name: options.flowName }, data));
    }
}; };
exports.initFlow = initFlow;
var sendStateEvent = function (name, data) { return function (dispatch) {
    dispatch(execute_1.default(constants_1.Command.EVENT, { name: name }, data));
}; };
exports.sendStateEvent = sendStateEvent;
var rollbackState = function (stateId) { return function (dispatch) {
    dispatch(execute_1.default(constants_1.Command.ABORT, { name: stateId }));
}; };
exports.rollbackState = rollbackState;
var exitState = function () { return function (dispatch) {
    dispatch(execute_1.default(constants_1.Command.EXIT, {}));
}; };
exports.exitState = exitState;


/***/ }),

/***/ "./src/workflow/execute.ts":
/*!*********************************!*\
  !*** ./src/workflow/execute.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(/*! ./constants */ "./src/workflow/constants.ts");
var actions_1 = __webpack_require__(/*! ./actions */ "./src/workflow/actions.ts");
var helpers_1 = __webpack_require__(/*! ./helpers */ "./src/workflow/helpers.ts");
exports.default = (function (command, params, postdata) {
    if (params === void 0) { params = {}; }
    if (postdata === void 0) { postdata = {}; }
    return function (dispatch, getState) {
        var _a = getState().workflow, url = _a.url, processId = _a.processId, flowName = _a.flowName;
        dispatch(actions_1.sendCommand());
        var queryParams = {
            cmd: constants_1.Command[command],
            d: new Date().getTime().toString()
        };
        var getParam = __assign({}, queryParams, params);
        fetch("/" + url + "/" + helpers_1.createGetParams(getParam), {
            method: 'POST',
            body: JSON.stringify(postdata),
            credentials: 'same-origin',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(function (response) {
            return response.json();
        })
            .then(function (result) {
            dispatch(actions_1.success(result));
        });
    };
});


/***/ }),

/***/ "./src/workflow/helpers.ts":
/*!*********************************!*\
  !*** ./src/workflow/helpers.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createGetParams = function (params) {
    if (params === void 0) { params = {}; }
    var i = 0;
    var result = '';
    var keys = Object.keys(params);
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        var param = !!params[key] ? params[key] : 'null';
        result += i === 0 ? '?' : '&';
        result += key + "=" + encodeURIComponent(param.toString());
        i++;
    }
    return result;
};
exports.PushToHistory = function (flowname) {
    window.history.pushState({ flowName: flowname }, '', "/#" + flowname);
};


/***/ }),

/***/ "./src/workflow/reducers.ts":
/*!**********************************!*\
  !*** ./src/workflow/reducers.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(/*! ./constants */ "./src/workflow/constants.ts");
exports.workflow = function (state, action) {
    if (state === void 0) { state = { isLoading: false }; }
    var options = action.options, body = action.body, error = action.error;
    switch (action.type) {
        case 'WF_INIT':
            return __assign({}, state, { url: options.url, flowName: options.flowName });
        case 'WF_SUCCESS':
            return __assign({}, state, { isLoading: ['EXTERNAL_ENTER', 'EXTERNAL_RETURN'].indexOf(body.result) > -1, status: constants_1.WorkflowStatus[body.result], stateName: body.state || state.stateName, flowName: body.flow || state.flowName, processId: body.pid || state.processId, url: body.url || state.url, data: body.output || state.data, history: body.history || state.history });
        case 'WF_ERROR':
            return __assign({}, state, { isLoading: false, error: error });
        case 'WF_SEND_COMMAND':
            return __assign({}, state, { isLoading: true });
        default:
            return state;
    }
};


/***/ }),

/***/ "./src/workspace/actions.ts":
/*!**********************************!*\
  !*** ./src/workspace/actions.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.openApp = function (bundleName) { return ({
    type: 'OPEN_APP',
    bundleName: bundleName
}); };
exports.errorOpenApp = function (bundleName) { return ({
    type: 'ERROR_OPEN_APP',
    bundleName: bundleName
}); };
exports.getCurrentState = function (currentState) { return ({
    type: 'GET_CURRENT_STATE',
    currentState: currentState
}); };


/***/ }),

/***/ "./src/workspace/reducers.ts":
/*!***********************************!*\
  !*** ./src/workspace/reducers.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var initialValues = {
    bundleName: '',
    currentState: {
        flowName: '',
        stateName: '',
        eventName: ''
    }
};
exports.workspace = function (state, action) {
    if (state === void 0) { state = initialValues; }
    var bundleName = action.bundleName, currentState = action.currentState;
    switch (action.type) {
        case 'OPEN_APP':
            return __assign({}, state, { errorbundleName: undefined, bundleName: bundleName });
        case 'ERROR_OPEN_APP':
            return __assign({}, state, { errorbundleName: bundleName });
        case 'GET_CURRENT_STATE':
            return __assign({}, state, { currentState: currentState });
        default:
            return state;
    }
};


/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/main.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/main.tsx */"./src/main.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_redux__;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_redux__;

/***/ })

/******/ });
});