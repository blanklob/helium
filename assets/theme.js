/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/components/skip-to-content.js":
/*!***********************************************!*\
  !*** ./src/app/components/skip-to-content.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var App_utils_checkFocus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! App/utils/checkFocus */ \"./src/app/utils/checkFocus.js\");\n\n\nclass SkipToContent {\n  constructor() {\n    this.el = document.querySelector('[data-skip-to-content]');\n    this.children = Array.from(this.el.children);\n    this.children.forEach(child => {\n      child.addEventListener('click', () => {\n        this.deactivate();\n      });\n      child.addEventListener('focus', () => {\n        this.activate();\n      });\n    });\n    this.el.addEventListener('keydown', event => {\n      if (event.keyCode == 9) this.children.forEach(child => {\n        if (!(0,App_utils_checkFocus__WEBPACK_IMPORTED_MODULE_0__.default)(child)) this.deactivate();\n      });\n    });\n  }\n\n  activate() {\n    this.el.classList.remove('u-hidden-visually');\n    this.el.classList.add('--active');\n  }\n\n  deactivate() {\n    this.el.classList.add('u-hidden-visually');\n    this.el.classList.remove('--active');\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new SkipToContent());\n\n//# sourceURL=webpack://shopify-webpack-with-os2-features/./src/app/components/skip-to-content.js?");

/***/ }),

/***/ "./src/app/theme.js":
/*!**************************!*\
  !*** ./src/app/theme.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var App_components_skip_to_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! App/components/skip-to-content */ \"./src/app/components/skip-to-content.js\");\n\n\n//# sourceURL=webpack://shopify-webpack-with-os2-features/./src/app/theme.js?");

/***/ }),

/***/ "./src/app/utils/checkFocus.js":
/*!*************************************!*\
  !*** ./src/app/utils/checkFocus.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(el) {\n  var focused = document.activeElement;\n  if (!focused || focused == document.body) focused = null;else if (document.querySelector) focused = document.querySelector(':focus');\n  if (el === focused) return true;\n  return false;\n}\n\n//# sourceURL=webpack://shopify-webpack-with-os2-features/./src/app/utils/checkFocus.js?");

/***/ }),

/***/ "./src/styles/layouts/theme.scss":
/*!***************************************!*\
  !*** ./src/styles/layouts/theme.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://shopify-webpack-with-os2-features/./src/styles/layouts/theme.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/app/theme.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/styles/layouts/theme.scss");
/******/ 	
/******/ })()
;