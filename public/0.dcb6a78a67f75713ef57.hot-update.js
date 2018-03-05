webpackHotUpdate(0,{

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actionTypes = __webpack_require__(8);

var _lodash = __webpack_require__(54);

var _ = _interopRequireWildcard(_lodash);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var INITIAL_STATE = { next: undefined, list: [], query: '' };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.POKEMON_LOAD_SUCCESS:
      return listPaginateFiltering(state, action);
    case _actionTypes.POKEMON_LOAD_ERROR:
      return _extends({}, state, { error: action.payload });
    case _actionTypes.POKEMON_LOAD_REPLACE:
      return _extends({}, state, { list: action.pokemons, query: action.query });
    default:
      return state;
  }
};

function listPaginateFiltering(state, action) {
  var results = action.payload.data.results;

  state = _extends({}, state, { next: action.payload.data.next });
  state = state.query === action.query ? state : _extends({}, state, { list: [], query: action.query });

  state = results ? _extends({}, state, { list: _.uniqBy([].concat(_toConsumableArray(state.list), _toConsumableArray(results)), 'name') }) : _extends({}, state, { list: action.payload.data.forms });

  return state;
}

/***/ })

})
//# sourceMappingURL=0.dcb6a78a67f75713ef57.hot-update.js.map