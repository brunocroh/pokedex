webpackHotUpdate(0,{

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pokemonLoad = exports.pokemonLoadReplace = undefined;

var _actionTypes = __webpack_require__(8);

var _fetching = __webpack_require__(65);

var _axios = __webpack_require__(66);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pokemonLoadSuccess = function pokemonLoadSuccess(response, query) {
  return {
    type: _actionTypes.POKEMON_LOAD_SUCCESS,
    payload: response,
    query: query
  };
};

var pokemonLoadError = function pokemonLoadError(err) {
  return {
    type: _actionTypes.POKEMON_LOAD_ERROR,
    payload: err
  };
};

var pokemonLoadReplace = exports.pokemonLoadReplace = function pokemonLoadReplace(pokemons) {
  return {
    type: _actionTypes.POKEMON_LOAD_REPLACE,
    query: _actionTypes.POKEMON_LOAD_REPLACE,
    pokemons: pokemons
  };
};

var pokemonLoad = exports.pokemonLoad = function pokemonLoad() {
  var uri = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'https://pokeapi.co/api/v2/pokemon/';
  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  return function (dispatch) {
    dispatch((0, _fetching.request)());
    _axios2.default.get('' + uri + query).then(function (res) {
      dispatch(pokemonLoadSuccess(res, query));
      dispatch((0, _fetching.receive)());
    }).catch(function (err) {
      pokemonLoad(uri, query);
    });
  };
};

/***/ })

})
//# sourceMappingURL=0.722b3c76ab4c3b7f85a8.hot-update.js.map