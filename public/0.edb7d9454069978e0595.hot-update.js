webpackHotUpdate(0,{

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(8);

var _App2 = _interopRequireDefault(_App);

var _reactRedux = __webpack_require__(17);

var _redux = __webpack_require__(7);

var _Button = __webpack_require__(61);

var _Button2 = _interopRequireDefault(_Button);

var _Loading = __webpack_require__(172);

var _Loading2 = _interopRequireDefault(_Loading);

var _pokemonLoad = __webpack_require__(62);

var _pokemonLoad2 = _interopRequireDefault(_pokemonLoad);

var _pokemonSearch = __webpack_require__(191);

var _pokemonSearch2 = _interopRequireDefault(_pokemonSearch);

var _pokemonList = __webpack_require__(192);

var _pokemonList2 = _interopRequireDefault(_pokemonList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pokemon = function (_React$Component) {
  _inherits(Pokemon, _React$Component);

  function Pokemon() {
    _classCallCheck(this, Pokemon);

    return _possibleConstructorReturn(this, (Pokemon.__proto__ || Object.getPrototypeOf(Pokemon)).apply(this, arguments));
  }

  _createClass(Pokemon, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.pokemonLoad(this.props.next);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          pokemonLoad = _props.pokemonLoad,
          pokemons = _props.pokemons,
          isFetching = _props.isFetching;


      if (true) {
        return _react2.default.createElement(_Loading2.default, null);
      }

      return _react2.default.createElement(
        'div',
        { className: _App2.default.rootContainer },
        _react2.default.createElement(_pokemonSearch2.default, null),
        _react2.default.createElement(_pokemonList2.default, { pokemons: pokemons }),
        _react2.default.createElement(_Button2.default, { style: _App2.default.buttonBlue, onClick: function onClick() {
            return pokemonLoad(_this2.props.next);
          }, label: 'carregar mais' })
      );
    }
  }]);

  return Pokemon;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    pokemons: state.pokemon.list,
    next: state.pokemon.next,
    isFetching: state.fetchingPokemons
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ pokemonLoad: _pokemonLoad2.default }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Pokemon);

/***/ })

})
//# sourceMappingURL=0.edb7d9454069978e0595.hot-update.js.map