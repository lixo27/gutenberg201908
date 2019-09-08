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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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
var __ = wp.i18n.__;
var MediaUpload = wp.editor.MediaUpload;
var RichText = wp.editor.RichText;
var Button = wp.components.Button;

var Editor = function Editor(_ref) {
  var _ref$attributes = _ref.attributes,
      title = _ref$attributes.title,
      mediaID = _ref$attributes.mediaID,
      mediaURL = _ref$attributes.mediaURL,
      ingredients = _ref$attributes.ingredients,
      instructions = _ref$attributes.instructions,
      className = _ref.className,
      setAttributes = _ref.setAttributes;

  var onChangeTitle = function onChangeTitle(title) {
    setAttributes({
      title: title
    });
  };

  var onSelectImage = function onSelectImage(media) {
    console.log(media);
    setAttributes({
      mediaURL: media.url,
      mediaID: media.id
    });
  };

  var onChangeIngredients = function onChangeIngredients(ingredients) {
    setAttributes({
      ingredients: ingredients
    });
  };

  var onChangeInstructions = function onChangeInstructions(instructions) {
    setAttributes({
      instructions: instructions
    });
  };

  return React.createElement("div", {
    className: className
  }, React.createElement(RichText, {
    tagName: "h2",
    placeholder: __('Write Recipe title…', 'recipe'),
    value: title,
    onChange: onChangeTitle
  }), React.createElement("div", {
    className: "recipe__image"
  }, React.createElement(MediaUpload, {
    onSelect: onSelectImage,
    allowedTypes: "image",
    value: mediaID,
    render: function render(_ref2) {
      var open = _ref2.open;
      return React.createElement(Button, {
        className: mediaID ? 'image-button' : 'button button-large',
        onClick: open
      }, !mediaID ? __('Upload Image', 'recipe') : React.createElement("img", {
        src: mediaURL,
        alt: __('Upload Recipe Image', 'recipe')
      }));
    }
  })), React.createElement("h3", null, __('Ingredients', 'recipe')), React.createElement(RichText, {
    tagName: "ul",
    multiline: "li",
    placeholder: __('Write a list of ingredients…', 'recipe'),
    value: ingredients,
    onChange: onChangeIngredients,
    className: "ingredients"
  }), React.createElement("h3", null, __('Instructions', 'recipe')), React.createElement(RichText, {
    tagName: "div",
    multiline: "p",
    className: "steps",
    placeholder: __('Write the instructions…', 'recipe'),
    value: instructions,
    onChange: onChangeInstructions
  }));
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
var RichText = wp.editor.RichText;

var Screen = function Screen(_ref) {
  var _ref$attributes = _ref.attributes,
      title = _ref$attributes.title,
      mediaURL = _ref$attributes.mediaURL,
      ingredients = _ref$attributes.ingredients,
      instructions = _ref$attributes.instructions,
      className = _ref.className;
  return React.createElement("div", {
    className: className
  }, React.createElement(RichText.Content, {
    tagName: "h2",
    value: title
  }), mediaURL && React.createElement("img", {
    className: "recipe__image",
    src: mediaURL,
    alt: __('Recipe Image', 'recipe')
  }), React.createElement(RichText.Content, {
    tagName: "h2",
    className: "ingredients",
    value: ingredients
  }), React.createElement(RichText.Content, {
    tagName: "div",
    className: "steps",
    value: instructions
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
/* harmony import */ var _components_Screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Screen */ "./src/components/Screen.js");
/* harmony import */ var _components_Editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Editor */ "./src/components/Editor.js");


var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
registerBlockType('gutenberg201908/recipe', {
  title: __('Recipe', 'recipe'),
  category: 'common',
  attributes: {
    title: {
      type: 'array',
      source: 'children',
      selector: 'h2'
    },
    mediaID: {
      type: 'number'
    },
    mediaURL: {
      type: 'string',
      source: 'attribute',
      selector: 'img',
      attribute: 'src'
    },
    ingredients: {
      type: 'array',
      source: 'children',
      selector: '.ingredients'
    },
    instructions: {
      type: 'array',
      source: 'children',
      selector: '.steps'
    }
  },
  edit: _components_Editor__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _components_Screen__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./src/styles/editor.scss":
/*!********************************!*\
  !*** ./src/styles/editor.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/styles/screen.scss":
/*!********************************!*\
  !*** ./src/styles/screen.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!******************************************************************************!*\
  !*** multi ./src/index.js ./src/styles/editor.scss ./src/styles/screen.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /var/www/html/wp-content/plugins/04-recipe/src/index.js */"./src/index.js");
__webpack_require__(/*! /var/www/html/wp-content/plugins/04-recipe/src/styles/editor.scss */"./src/styles/editor.scss");
module.exports = __webpack_require__(/*! /var/www/html/wp-content/plugins/04-recipe/src/styles/screen.scss */"./src/styles/screen.scss");


/***/ })

/******/ });