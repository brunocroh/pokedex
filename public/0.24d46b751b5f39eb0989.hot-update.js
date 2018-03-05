webpackHotUpdate(0,{

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Loading = __webpack_require__(64);

var _Loading2 = _interopRequireDefault(_Loading);

var _reactRedux = __webpack_require__(10);

var _App = __webpack_require__(9);

var _App2 = _interopRequireDefault(_App);

var _pokemon = __webpack_require__(196);

var _pokemon2 = _interopRequireDefault(_pokemon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pokemonList = function pokemonList(props) {
  var renderPokemons = function renderPokemons() {
    var pokemons = props.pokemons || [];
    return pokemons.map(function (poke) {
      return _react2.default.createElement(_pokemon2.default, {
        key: poke.name,
        name: poke.name,
        url: poke.url });
    });
  };

  var loading = function loading() {
    var isFetching = props.isFetching;


    if (isFetching) {
      return _react2.default.createElement(_Loading2.default, null);
    }
  };

  return _react2.default.createElement(
    'div',
    { className: _App2.default.gridPokemons },
    renderPokemons(),
    loading(),
    _react2.default.createElement('br', null)
  );
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isFetching: state.isFetching
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(pokemonList);

/***/ })

})
//# sourceMappingURL=0.24d46b751b5f39eb0989.hot-update.js.map