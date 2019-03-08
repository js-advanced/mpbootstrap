(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-redux"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-redux"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-redux")) : factory(root["react"], root["react-redux"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_redux__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/exampleApp/form1.tsx":
/*!**********************************!*\
  !*** ./src/exampleApp/form1.tsx ***!
  \**********************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var Form1 = /** @class */ (function (_super) {
    __extends(Form1, _super);
    function Form1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Form1.prototype.render = function () {
        var _this = this;
        return (React.createElement(React.Suspense, { fallback: React.createElement("div", null, "Loading") },
            React.createElement("h1", null, "\u0424\u043E\u0440\u043C\u0430 1"),
            React.createElement("button", { onClick: function () { return _this.props.sendStateEvent('next'); } }, "\u043F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0444\u043E\u0440\u043C\u0443 2"),
            React.createElement("button", { onClick: function () { return _this.props.openApp('defaultapp'); } }, "\u0432\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E")));
    };
    return Form1;
}(React.PureComponent));
exports.Form1 = Form1;


/***/ }),

/***/ "./src/exampleApp/form2.tsx":
/*!**********************************!*\
  !*** ./src/exampleApp/form2.tsx ***!
  \**********************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var Form2 = /** @class */ (function (_super) {
    __extends(Form2, _super);
    function Form2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Form2.prototype.render = function () {
        var _this = this;
        return (React.createElement(React.Suspense, { fallback: React.createElement("div", null, "Loading") },
            React.createElement("h1", null, "\u0424\u043E\u0440\u043C\u0430 2"),
            React.createElement("button", { onClick: function () { return _this.props.sendStateEvent('back'); } }, "\u043F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0444\u043E\u0440\u043C\u0443 1"),
            React.createElement("button", { onClick: function () { return _this.props.openApp('defaultapp'); } }, "\u0432\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E"),
            React.createElement("button", { onClick: function () { return _this.props.rollback('1'); } }, "\u0432\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430 \u0444\u043E\u0440\u043C\u0443 1 \u0447\u0435\u0440\u0435\u0437 \u0438\u0441\u0442\u043E\u0440\u0438\u044E")));
    };
    return Form2;
}(React.PureComponent));
exports.Form2 = Form2;


/***/ }),

/***/ "./src/exampleApp/index.tsx":
/*!**********************************!*\
  !*** ./src/exampleApp/index.tsx ***!
  \**********************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var react_redux_1 = __webpack_require__(/*! react-redux */ "react-redux");
var form1_1 = __webpack_require__(/*! ./form1 */ "./src/exampleApp/form1.tsx");
var form2_1 = __webpack_require__(/*! ./form2 */ "./src/exampleApp/form2.tsx");
var processes = {
    radioFlow: {
        radioForm1: form1_1.Form1,
        radioForm2: form2_1.Form2
    }
};
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.componentDidMount = function () {
        console.log(888);
        this.props.initFlow({
            flowName: 'radioFlow',
            url: 'radio-bh'
        });
    };
    Main.prototype.render = function () {
        var _this = this;
        console.log(this.props);
        var _a = this.props, flowName = _a.flowName, stateName = _a.stateName, isLoading = _a.isLoading, status = _a.status;
        var Component;
        if (flowName && stateName) {
            Component = processes[flowName][stateName];
        }
        // return <div>1111</div>
        return (React.createElement(React.Suspense, { fallback: React.createElement("div", null, "Loading") },
            React.createElement("h1", null, "\u0414\u0440\u0443\u0433\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430"),
            React.createElement("div", null, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u043E\u0441\u044C \u0434\u0440\u0443\u0433\u043E\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435"),
            React.createElement("button", { onClick: function () {
                    _this.props.exitApp();
                    _this.props.openApp('defaultapp');
                } }, "\u0432\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E"),
            Component && React.createElement(Component, __assign({}, this.props))));
    };
    return Main;
}(React.PureComponent));
var mapStateToProps = function (state) { return ({}); };
var mapDispatchToProps = function (dispatch) { return ({}); };
var connectedApp = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Main);
var reducers = 'reducer';
connectedApp[reducers] = function (state, action) {
    if (state === void 0) { state = { a: 1 }; }
    return state;
};
exports.default = connectedApp;


/***/ }),

/***/ 1:
/*!****************************************!*\
  !*** multi ./src/exampleApp/index.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/exampleApp/index.tsx */"./src/exampleApp/index.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_redux__;

/***/ })

/******/ });
});