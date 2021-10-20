/******/ (function() { // webpackBootstrap
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
var __webpack_exports__ = {};
/*!*****************************************************!*\
  !*** ./src/styles/components/dark-mode-button.scss ***!
  \*****************************************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

}();
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
!function() {
/*!****************************************************!*\
  !*** ./src/scripts/components/dark-mode-button.js ***!
  \****************************************************/
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DarkModeButton = /*#__PURE__*/function (_HTMLElement) {
  _inherits(DarkModeButton, _HTMLElement);

  var _super = _createSuper(DarkModeButton);

  function DarkModeButton() {
    var _this;

    _classCallCheck(this, DarkModeButton);

    _this = _super.call(this);
    _this.button = _this.querySelector('button');
    _this.moonIcon = _this.querySelector('.-moon');
    _this.sunIcon = _this.querySelector('.-sun');

    _this.sunIcon.classList.add('u-hide');

    if (!_this.button) return _possibleConstructorReturn(_this);
    _this.toggleMode = _this.toggleMode.bind(_assertThisInitialized(_this));

    _this.button.addEventListener('click', _this.toggleMode);

    return _this;
  }

  _createClass(DarkModeButton, [{
    key: "toggleMode",
    value: function toggleMode() {
      document.documentElement.classList.toggle('is-dark');
      this.moonIcon.classList.toggle('u-hide');
      this.sunIcon.classList.toggle('u-hide');
    }
  }]);

  return DarkModeButton;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('dark-mode-button', DarkModeButton);
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWRhcmstbW9kZS1idXR0b24uanMiLCJtYXBwaW5ncyI6IjtVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FNQTs7Ozs7QUFDSiw0QkFBYztBQUFBOztBQUFBOztBQUNaO0FBQ0EsVUFBS0MsTUFBTCxHQUFjLE1BQUtDLGFBQUwsQ0FBbUIsUUFBbkIsQ0FBZDtBQUNBLFVBQUtDLFFBQUwsR0FBZ0IsTUFBS0QsYUFBTCxDQUFtQixRQUFuQixDQUFoQjtBQUNBLFVBQUtFLE9BQUwsR0FBZSxNQUFLRixhQUFMLENBQW1CLE9BQW5CLENBQWY7O0FBQ0EsVUFBS0UsT0FBTCxDQUFhQyxTQUFiLENBQXVCQyxHQUF2QixDQUEyQixRQUEzQjs7QUFFQSxRQUFJLENBQUMsTUFBS0wsTUFBVixFQUFrQjtBQUNsQixVQUFLTSxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JDLElBQWhCLCtCQUFsQjs7QUFDQSxVQUFLUCxNQUFMLENBQVlRLGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDLE1BQUtGLFVBQTNDOztBQVRZO0FBVWI7Ozs7V0FFRCxzQkFBYTtBQUNYRyxNQUFBQSxRQUFRLENBQUNDLGVBQVQsQ0FBeUJOLFNBQXpCLENBQW1DTyxNQUFuQyxDQUEwQyxTQUExQztBQUNBLFdBQUtULFFBQUwsQ0FBY0UsU0FBZCxDQUF3Qk8sTUFBeEIsQ0FBK0IsUUFBL0I7QUFDQSxXQUFLUixPQUFMLENBQWFDLFNBQWIsQ0FBdUJPLE1BQXZCLENBQThCLFFBQTlCO0FBQ0Q7Ozs7aUNBakIwQkM7O0FBb0I3QkMsY0FBYyxDQUFDQyxNQUFmLENBQXNCLGtCQUF0QixFQUEwQ2YsY0FBMUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dvcmtmbG93L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dvcmtmbG93L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvZGFyay1tb2RlLWJ1dHRvbi5zY3NzP2EyNTIiLCJ3ZWJwYWNrOi8vd29ya2Zsb3cvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2RhcmstbW9kZS1idXR0b24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY2xhc3MgRGFya01vZGVCdXR0b24gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmJ1dHRvbiA9IHRoaXMucXVlcnlTZWxlY3RvcignYnV0dG9uJylcbiAgICB0aGlzLm1vb25JY29uID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcuLW1vb24nKVxuICAgIHRoaXMuc3VuSWNvbiA9IHRoaXMucXVlcnlTZWxlY3RvcignLi1zdW4nKVxuICAgIHRoaXMuc3VuSWNvbi5jbGFzc0xpc3QuYWRkKCd1LWhpZGUnKVxuXG4gICAgaWYgKCF0aGlzLmJ1dHRvbikgcmV0dXJuXG4gICAgdGhpcy50b2dnbGVNb2RlID0gdGhpcy50b2dnbGVNb2RlLmJpbmQodGhpcylcbiAgICB0aGlzLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlTW9kZSlcbiAgfVxuXG4gIHRvZ2dsZU1vZGUoKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2lzLWRhcmsnKVxuICAgIHRoaXMubW9vbkljb24uY2xhc3NMaXN0LnRvZ2dsZSgndS1oaWRlJylcbiAgICB0aGlzLnN1bkljb24uY2xhc3NMaXN0LnRvZ2dsZSgndS1oaWRlJylcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2RhcmstbW9kZS1idXR0b24nLCBEYXJrTW9kZUJ1dHRvbilcbiJdLCJuYW1lcyI6WyJEYXJrTW9kZUJ1dHRvbiIsImJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJtb29uSWNvbiIsInN1bkljb24iLCJjbGFzc0xpc3QiLCJhZGQiLCJ0b2dnbGVNb2RlIiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInRvZ2dsZSIsIkhUTUxFbGVtZW50IiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiXSwic291cmNlUm9vdCI6IiJ9