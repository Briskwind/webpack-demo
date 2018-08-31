(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print.js */ "./src/print.js");





 function component() {
   var element = document.createElement('div');
   var btn = document.createElement('button');

   element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.join(['Hello', 'webpack'], ' ');

   btn.innerHTML = '打印中文!';
   btn.onclick = _print_js__WEBPACK_IMPORTED_MODULE_1__["default"];

   element.appendChild(btn);

    return element;
  }

  document.body.appendChild(component());


/***/ }),

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return printMe; });


// 管理输出
function printMe() {
  console.log('打印出中文啊!');
}


/***/ })

},[["./src/index.js","runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ByaW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5idW5kbGUuOGM0N2JmZjI2YjMxNTNjMGE5ZjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBwcmludE1lIGZyb20gJy4vcHJpbnQuanMnO1xuXG4gZnVuY3Rpb24gY29tcG9uZW50KCkge1xuICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgIHZhciBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oWydIZWxsbycsICd3ZWJwYWNrJ10sICcgJyk7XG5cbiAgIGJ0bi5pbm5lckhUTUwgPSAn5omT5Y2w5Lit5paHISc7XG4gICBidG4ub25jbGljayA9IHByaW50TWU7XG5cbiAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnRuKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7XG4iLCJcblxuLy8g566h55CG6L6T5Ye6XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludE1lKCkge1xuICBjb25zb2xlLmxvZygn5omT5Y2w5Ye65Lit5paH5ZWKIScpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==