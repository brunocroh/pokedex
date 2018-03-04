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

var pokemonRemove = exports.pokemonRemove = function pokemonRemove(pokemon) {
  return {
    type: _actionTypes.POKEMON_REMOVE,
    payload: pokemon
  };
};

/***/ })

})
//# sourceMappingURL=0.2d4689d3f2c413ce3293.hot-update.js.map