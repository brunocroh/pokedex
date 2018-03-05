webpackHotUpdate(0,{

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actionTypes = __webpack_require__(8);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.POKEMON_DETAIL_SUCCESS:
      return _extends({}, state, action.payload.data);
    case _actionTypes.POKEMON_DETAIL_ERROR:
      return _extends({}, state, { error: action.payload });
    default:
      return state;
  }
};

/***/ })

})
//# sourceMappingURL=0.5244063d6afa424b46f3.hot-update.js.map