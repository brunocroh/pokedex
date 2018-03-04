webpackHotUpdate(0,{

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(7);

var _pokemon = __webpack_require__(133);

var _pokemon2 = _interopRequireDefault(_pokemon);

var _pokemonsAdded = __webpack_require__(197);

var _pokemonsAdded2 = _interopRequireDefault(_pokemonsAdded);

var _isFetching = __webpack_require__(135);

var _isFetching2 = _interopRequireDefault(_isFetching);

var _pokemonDetail = __webpack_require__(136);

var _pokemonDetail2 = _interopRequireDefault(_pokemonDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  pokemon: _pokemon2.default,
  pokemonAdded: pokemonAdded,
  pokemonDetail: _pokemonDetail2.default,
  isFetching: _isFetching2.default
});

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actionTypes = __webpack_require__(9);

var _lodash = __webpack_require__(134);

var _ = _interopRequireWildcard(_lodash);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var INITIAL_STATE = { list: [] };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.POKEMON_ADD:
      return _extends({}, state, {
        list: _.uniqBy([].concat(_toConsumableArray(state.list), [action.pokemon.name]))
      });
    case _actionTypes.POKEMON_REMOVE:
      return _extends({}, state, {
        list: state.list.filter(function (i) {
          return i.name !== action.pokemon.name;
        })
      });
    default:
      return state;
  }
};

/***/ })

})
//# sourceMappingURL=0.50868bb1b66642583c1c.hot-update.js.map