/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Editor.js":
/*!**********************************!*\
  !*** ./src/components/Editor.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var _wp$editor = wp.editor,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    BlockControls = _wp$editor.BlockControls,
    RichText = _wp$editor.RichText;

var Editor = function Editor(_ref) {
  var _ref$attributes = _ref.attributes,
      content = _ref$attributes.content,
      alignment = _ref$attributes.alignment,
      className = _ref.className,
      setAttributes = _ref.setAttributes;

  var onChangeContent = function onChangeContent(content) {
    setAttributes({
      content: content
    });
  };

  var onChangeAlignment = function onChangeAlignment(alignment) {
    setAttributes({
      alignment: alignment === undefined ? 'none' : alignment
    });
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(AlignmentToolbar, {
    value: alignment,
    onChange: onChangeAlignment
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: className
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
    tagName: "p",
    className: "controls__content",
    style: {
      textAlign: alignment
    },
    onChange: onChangeContent,
    value: content
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Editor);

/***/ }),

/***/ "./src/components/Screen.js":
/*!**********************************!*\
  !*** ./src/components/Screen.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var RichText = wp.editor.RichText;

var Screen = function Screen(_ref) {
  var _ref$attributes = _ref.attributes,
      content = _ref$attributes.content,
      alignment = _ref$attributes.alignment;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
    tagName: "p",
    className: "controls__content controls__content--".concat(alignment),
    value: content
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Screen);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_editor_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/editor.css */ "./src/styles/editor.css");
/* harmony import */ var _styles_editor_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_editor_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_screen_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/screen.css */ "./src/styles/screen.css");
/* harmony import */ var _styles_screen_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_screen_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Editor */ "./src/components/Editor.js");
/* harmony import */ var _components_Screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Screen */ "./src/components/Screen.js");




var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
registerBlockType('gutenberg201908/controls', {
  title: __('Controls', 'controls'),
  category: 'common',
  attributes: {
    content: {
      type: 'array',
      source: 'children',
      selector: '.controls__content'
    },
    alignment: {
      type: 'string',
      default: 'none'
    }
  },
  edit: _components_Editor__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _components_Screen__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/styles/editor.css":
/*!*******************************!*\
  !*** ./src/styles/editor.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/styles/screen.css":
/*!*******************************!*\
  !*** ./src/styles/screen.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map