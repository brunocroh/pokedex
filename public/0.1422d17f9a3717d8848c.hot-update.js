webpackHotUpdate(0,{

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pokemonRemove = exports.pokemonAdd = undefined;

var _actionTypes = __webpack_require__(7);

var pokemonAdd = exports.pokemonAdd = function pokemonAdd(pokemon) {
  return {
    type: _actionTypes.POKEMON_ADD,
    pokemon: pokemon
  };
};

var pokemonRemove = exports.pokemonRemove = function pokemonRemove(err) {
  return {
    type: _actionTypes.POKEMON_REMOVE,
    payload: err
  };
};

/***/ })

})
//# sourceMappingURL=0.1422d17f9a3717d8848c.hot-update.js.map