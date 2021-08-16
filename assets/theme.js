/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/components/components.core.js":
/*!***********************************************!*\
  !*** ./src/app/components/components.core.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _default; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _default = /*#__PURE__*/function () {
  function _default(options) {
    _classCallCheck(this, _default);

    this.sName = options.name;
    this.sAttr = "data-component-".concat(this.sName);
    this.sRoot = document.querySelector('[' + this.sAttr + ']');
  }

  _createClass(_default, [{
    key: "$",
    value: function $(query, context) {
      var classIndex = query.indexOf('.');
      var idIndex = query.indexOf('#');
      var attrIndex = query.indexOf('[');
      var indexes = [classIndex, idIndex, attrIndex].filter(function (index) {
        return index != -1;
      });
      var index = false;
      var name = query;
      var more = '';
      var parent = this.sRoot;

      if (indexes.length) {
        index = Math.min.apply(Math, _toConsumableArray(indexes));
        name = query.slice(0, index);
        more = query.slice(index);
      }

      if (_typeof(context) == 'object') {
        parent = context;
      }

      return parent.querySelectorAll('[' + this.sAttr + '=' + name + ']' + more);
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./src/app/components/components.example.js":
/*!**************************************************!*\
  !*** ./src/app/components/components.example.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components.core */ "./src/app/components/components.core.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Example = /*#__PURE__*/function (_Core) {
  _inherits(Example, _Core);

  var _super = _createSuper(Example);

  function Example(m) {
    var _this;

    _classCallCheck(this, Example);

    _this = _super.call(this, m);

    _this.init();

    return _this;
  }

  _createClass(Example, [{
    key: "init",
    value: function init() {
      this.$('heading')[0].innerText = 'Thanks for choosing this setup for your Shopify Theme.';
      this.$('subheading')[0].innerHTML = 'Modern development on Shopify using Webpack 5 fully supporting<br>Online Store 2.0 features and github integration.';
    }
  }]);

  return Example;
}(_components_core__WEBPACK_IMPORTED_MODULE_0__.default);

/* harmony default export */ __webpack_exports__["default"] = (new Example({
  name: 'example'
}));

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
!function() {
var __webpack_exports__ = {};
/*!******************************************!*\
  !*** ./src/app/layouts/layouts.theme.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var App_components_components_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! App/components/components.example */ "./src/app/components/components.example.js");
/* ==========================================================================
   ## LAYOUT/APP: THEME (OUTPUT FILE)
   ========================================================================== */
// @author Youness Id bakkasse <https://github.com/younessidbakkasse>
// @link https://github.com/younessidbakkasse/shopify-webpack-with-os2-features for more Docs.
///
///
/// @content This is the imports file.
///
/// - COMPONENTS
/// EXAMPLE..............An example component for testing.
///
///
/// - UTILS
/// Math.................A bunch of helpful math functions.
///
// COMPONENTS
// Uncomment and add to this section as necessary.

console.clear();
console.log('Hello world. (from theme layout)');
}();
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
!function() {
/*!************************************************!*\
  !*** ./src/styles/layouts/_layouts.theme.scss ***!
  \************************************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9waWZ5LXdlYnBhY2std2l0aC1vczItZmVhdHVyZXMvLi9zcmMvYXBwL2NvbXBvbmVudHMvY29tcG9uZW50cy5jb3JlLmpzIiwid2VicGFjazovL3Nob3BpZnktd2VicGFjay13aXRoLW9zMi1mZWF0dXJlcy8uL3NyYy9hcHAvY29tcG9uZW50cy9jb21wb25lbnRzLmV4YW1wbGUuanMiLCJ3ZWJwYWNrOi8vc2hvcGlmeS13ZWJwYWNrLXdpdGgtb3MyLWZlYXR1cmVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Nob3BpZnktd2VicGFjay13aXRoLW9zMi1mZWF0dXJlcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2hvcGlmeS13ZWJwYWNrLXdpdGgtb3MyLWZlYXR1cmVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc2hvcGlmeS13ZWJwYWNrLXdpdGgtb3MyLWZlYXR1cmVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2hvcGlmeS13ZWJwYWNrLXdpdGgtb3MyLWZlYXR1cmVzLy4vc3JjL2FwcC9sYXlvdXRzL2xheW91dHMudGhlbWUuanMiLCJ3ZWJwYWNrOi8vc2hvcGlmeS13ZWJwYWNrLXdpdGgtb3MyLWZlYXR1cmVzLy4vc3JjL3N0eWxlcy9sYXlvdXRzL19sYXlvdXRzLnRoZW1lLnNjc3MiXSwibmFtZXMiOlsib3B0aW9ucyIsInNOYW1lIiwibmFtZSIsInNBdHRyIiwic1Jvb3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJxdWVyeSIsImNvbnRleHQiLCJjbGFzc0luZGV4IiwiaW5kZXhPZiIsImlkSW5kZXgiLCJhdHRySW5kZXgiLCJpbmRleGVzIiwiZmlsdGVyIiwiaW5kZXgiLCJtb3JlIiwicGFyZW50IiwibGVuZ3RoIiwiTWF0aCIsIm1pbiIsInNsaWNlIiwicXVlcnlTZWxlY3RvckFsbCIsIkV4YW1wbGUiLCJtIiwiaW5pdCIsIiQiLCJpbm5lclRleHQiLCJpbm5lckhUTUwiLCJDb3JlIiwiY29uc29sZSIsImNsZWFyIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNFLG9CQUFZQSxPQUFaLEVBQXFCO0FBQUE7O0FBQ25CLFNBQUtDLEtBQUwsR0FBYUQsT0FBTyxDQUFDRSxJQUFyQjtBQUNBLFNBQUtDLEtBQUwsNEJBQStCLEtBQUtGLEtBQXBDO0FBQ0EsU0FBS0csS0FBTCxHQUFhQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBTSxLQUFLSCxLQUFYLEdBQW1CLEdBQTFDLENBQWI7QUFDRDs7OztXQUVELFdBQUVJLEtBQUYsRUFBU0MsT0FBVCxFQUFrQjtBQUNoQixVQUFNQyxVQUFVLEdBQUdGLEtBQUssQ0FBQ0csT0FBTixDQUFjLEdBQWQsQ0FBbkI7QUFDQSxVQUFNQyxPQUFPLEdBQUdKLEtBQUssQ0FBQ0csT0FBTixDQUFjLEdBQWQsQ0FBaEI7QUFDQSxVQUFNRSxTQUFTLEdBQUdMLEtBQUssQ0FBQ0csT0FBTixDQUFjLEdBQWQsQ0FBbEI7QUFDQSxVQUFNRyxPQUFPLEdBQUcsQ0FBQ0osVUFBRCxFQUFhRSxPQUFiLEVBQXNCQyxTQUF0QixFQUFpQ0UsTUFBakMsQ0FDZCxVQUFDQyxLQUFEO0FBQUEsZUFBV0EsS0FBSyxJQUFJLENBQUMsQ0FBckI7QUFBQSxPQURjLENBQWhCO0FBSUEsVUFBSUEsS0FBSyxHQUFHLEtBQVo7QUFDQSxVQUFJYixJQUFJLEdBQUdLLEtBQVg7QUFDQSxVQUFJUyxJQUFJLEdBQUcsRUFBWDtBQUNBLFVBQUlDLE1BQU0sR0FBRyxLQUFLYixLQUFsQjs7QUFFQSxVQUFJUyxPQUFPLENBQUNLLE1BQVosRUFBb0I7QUFDbEJILGFBQUssR0FBR0ksSUFBSSxDQUFDQyxHQUFMLE9BQUFELElBQUkscUJBQVFOLE9BQVIsRUFBWjtBQUNBWCxZQUFJLEdBQUdLLEtBQUssQ0FBQ2MsS0FBTixDQUFZLENBQVosRUFBZU4sS0FBZixDQUFQO0FBQ0FDLFlBQUksR0FBR1QsS0FBSyxDQUFDYyxLQUFOLENBQVlOLEtBQVosQ0FBUDtBQUNEOztBQUVELFVBQUksUUFBT1AsT0FBUCxLQUFrQixRQUF0QixFQUFnQztBQUM5QlMsY0FBTSxHQUFHVCxPQUFUO0FBQ0Q7O0FBRUQsYUFBT1MsTUFBTSxDQUFDSyxnQkFBUCxDQUF3QixNQUFNLEtBQUtuQixLQUFYLEdBQW1CLEdBQW5CLEdBQXlCRCxJQUF6QixHQUFnQyxHQUFoQyxHQUFzQ2MsSUFBOUQsQ0FBUDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JIOztJQUVNTyxPOzs7OztBQUNKLG1CQUFZQyxDQUFaLEVBQWU7QUFBQTs7QUFBQTs7QUFDYiw4QkFBTUEsQ0FBTjs7QUFDQSxVQUFLQyxJQUFMOztBQUZhO0FBR2Q7Ozs7V0FFRCxnQkFBTztBQUNMLFdBQUtDLENBQUwsQ0FBTyxTQUFQLEVBQWtCLENBQWxCLEVBQXFCQyxTQUFyQixHQUNFLHdEQURGO0FBRUEsV0FBS0QsQ0FBTCxDQUFPLFlBQVAsRUFBcUIsQ0FBckIsRUFBd0JFLFNBQXhCLEdBQ0UscUhBREY7QUFFRDs7OztFQVhtQkMscUQ7O0FBY3RCLCtEQUFlLElBQUlOLE9BQUosQ0FBWTtBQUN6QnJCLE1BQUksRUFBRTtBQURtQixDQUFaLENBQWYsRTs7Ozs7O1VDaEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSw2Q0FBNkMsd0RBQXdELEU7Ozs7O1dDQXJHO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTRCLE9BQU8sQ0FBQ0MsS0FBUjtBQUNBRCxPQUFPLENBQUNFLEdBQVIsQ0FBWSxrQ0FBWixFOzs7Ozs7OztBQ3ZCQSIsImZpbGUiOiJ0aGVtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMuc05hbWUgPSBvcHRpb25zLm5hbWVcbiAgICB0aGlzLnNBdHRyID0gYGRhdGEtY29tcG9uZW50LSR7dGhpcy5zTmFtZX1gXG4gICAgdGhpcy5zUm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1snICsgdGhpcy5zQXR0ciArICddJylcbiAgfVxuXG4gICQocXVlcnksIGNvbnRleHQpIHtcbiAgICBjb25zdCBjbGFzc0luZGV4ID0gcXVlcnkuaW5kZXhPZignLicpXG4gICAgY29uc3QgaWRJbmRleCA9IHF1ZXJ5LmluZGV4T2YoJyMnKVxuICAgIGNvbnN0IGF0dHJJbmRleCA9IHF1ZXJ5LmluZGV4T2YoJ1snKVxuICAgIGNvbnN0IGluZGV4ZXMgPSBbY2xhc3NJbmRleCwgaWRJbmRleCwgYXR0ckluZGV4XS5maWx0ZXIoXG4gICAgICAoaW5kZXgpID0+IGluZGV4ICE9IC0xXG4gICAgKVxuXG4gICAgbGV0IGluZGV4ID0gZmFsc2VcbiAgICBsZXQgbmFtZSA9IHF1ZXJ5XG4gICAgbGV0IG1vcmUgPSAnJ1xuICAgIGxldCBwYXJlbnQgPSB0aGlzLnNSb290XG5cbiAgICBpZiAoaW5kZXhlcy5sZW5ndGgpIHtcbiAgICAgIGluZGV4ID0gTWF0aC5taW4oLi4uaW5kZXhlcylcbiAgICAgIG5hbWUgPSBxdWVyeS5zbGljZSgwLCBpbmRleClcbiAgICAgIG1vcmUgPSBxdWVyeS5zbGljZShpbmRleClcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbnRleHQgPT0gJ29iamVjdCcpIHtcbiAgICAgIHBhcmVudCA9IGNvbnRleHRcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1snICsgdGhpcy5zQXR0ciArICc9JyArIG5hbWUgKyAnXScgKyBtb3JlKVxuICB9XG59XG4iLCJpbXBvcnQgQ29yZSBmcm9tICcuL2NvbXBvbmVudHMuY29yZSdcblxuY2xhc3MgRXhhbXBsZSBleHRlbmRzIENvcmUge1xuICBjb25zdHJ1Y3RvcihtKSB7XG4gICAgc3VwZXIobSlcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLiQoJ2hlYWRpbmcnKVswXS5pbm5lclRleHQgPVxuICAgICAgJ1RoYW5rcyBmb3IgY2hvb3NpbmcgdGhpcyBzZXR1cCBmb3IgeW91ciBTaG9waWZ5IFRoZW1lLidcbiAgICB0aGlzLiQoJ3N1YmhlYWRpbmcnKVswXS5pbm5lckhUTUwgPVxuICAgICAgJ01vZGVybiBkZXZlbG9wbWVudCBvbiBTaG9waWZ5IHVzaW5nIFdlYnBhY2sgNSBmdWxseSBzdXBwb3J0aW5nPGJyPk9ubGluZSBTdG9yZSAyLjAgZmVhdHVyZXMgYW5kIGdpdGh1YiBpbnRlZ3JhdGlvbi4nXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEV4YW1wbGUoe1xuICBuYW1lOiAnZXhhbXBsZScsXG59KVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICMjIExBWU9VVC9BUFA6IFRIRU1FIChPVVRQVVQgRklMRSlcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8vIEBhdXRob3IgWW91bmVzcyBJZCBiYWtrYXNzZSA8aHR0cHM6Ly9naXRodWIuY29tL3lvdW5lc3NpZGJha2thc3NlPlxuLy8gQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3lvdW5lc3NpZGJha2thc3NlL3Nob3BpZnktd2VicGFjay13aXRoLW9zMi1mZWF0dXJlcyBmb3IgbW9yZSBEb2NzLlxuLy8vXG4vLy9cbi8vLyBAY29udGVudCBUaGlzIGlzIHRoZSBpbXBvcnRzIGZpbGUuXG4vLy9cbi8vLyAtIENPTVBPTkVOVFNcbi8vLyBFWEFNUExFLi4uLi4uLi4uLi4uLi5BbiBleGFtcGxlIGNvbXBvbmVudCBmb3IgdGVzdGluZy5cbi8vL1xuLy8vXG4vLy8gLSBVVElMU1xuLy8vIE1hdGguLi4uLi4uLi4uLi4uLi4uLkEgYnVuY2ggb2YgaGVscGZ1bCBtYXRoIGZ1bmN0aW9ucy5cbi8vL1xuXG4vLyBDT01QT05FTlRTXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byB0aGlzIHNlY3Rpb24gYXMgbmVjZXNzYXJ5LlxuaW1wb3J0IGV4YW1wbGUgZnJvbSAnQXBwL2NvbXBvbmVudHMvY29tcG9uZW50cy5leGFtcGxlJ1xuXG5jb25zb2xlLmNsZWFyKClcbmNvbnNvbGUubG9nKCdIZWxsbyB3b3JsZC4gKGZyb20gdGhlbWUgbGF5b3V0KScpXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9