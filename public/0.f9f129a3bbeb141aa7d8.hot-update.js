webpackHotUpdate(0,{

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(9);

var _App2 = _interopRequireDefault(_App);

var _reactRedux = __webpack_require__(10);

var _redux = __webpack_require__(7);

var _reactRouterDom = __webpack_require__(18);

var _Loading = __webpack_require__(64);

var _Loading2 = _interopRequireDefault(_Loading);

var _pokemonDetail = __webpack_require__(199);

var _pokemonDetail2 = _interopRequireDefault(_pokemonDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PokemonDetail = function (_React$Component) {
  _inherits(PokemonDetail, _React$Component);

  function PokemonDetail() {
    _classCallCheck(this, PokemonDetail);

    return _possibleConstructorReturn(this, (PokemonDetail.__proto__ || Object.getPrototypeOf(PokemonDetail)).apply(this, arguments));
  }

  _createClass(PokemonDetail, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var url = this.props.location.state.url;
      this.props.pokemonDetail(url);
    }
  }, {
    key: 'renderStats',
    value: function renderStats(pokemon) {
      return pokemon.stats.map(function (s) {
        return _react2.default.createElement(
          'span',
          { key: s.stat.name, className: _App2.default.stat },
          s.stat.name,
          ' : ',
          s.base_stat
        );
      });
    }
  }, {
    key: 'renderAbilities',
    value: function renderAbilities(pokemon) {
      return pokemon.abilities.map(function (a) {
        return _react2.default.createElement(
          'span',
          { key: a.ability.name, className: _App2.default.ability },
          a.ability.name
        );
      });
    }
  }, {
    key: 'renderTypes',
    value: function renderTypes(pokemon) {
      return pokemon.types.sort(function (a, b) {
        return a.slot - b.slot;
      }).map(function (t) {
        return _react2.default.createElement(
          'span',
          { key: t.type.name, className: _App2.default.type },
          t.type.name
        );
      });
    }
  }, {
    key: 'renderProperties',
    value: function renderProperties(pokemon) {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'span',
          { className: _App2.default.propertie },
          'Height: ',
          pokemon.height / 10,
          ' m'
        ),
        _react2.default.createElement(
          'span',
          { className: _App2.default.propertie },
          'Weight: ',
          pokemon.weight / 10,
          ' kg'
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          pokemon = _props.pokemon,
          isFetching = _props.isFetching;


      if (isFetching && !pokemon) {
        return _react2.default.createElement(_Loading2.default, null);
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/' },
          'Voltar'
        ),
        _react2.default.createElement(
          'div',
          { className: _App2.default.containerDetail },
          _react2.default.createElement(
            'div',
            { className: _App2.default.title },
            _react2.default.createElement(
              'h2',
              null,
              pokemon.name
            )
          ),
          _react2.default.createElement(
            'div',
            { className: _App2.default.pokemonPhoto },
            _react2.default.createElement('img', { className: _App2.default.itemCentralized, src: 'images/pokemons/' + pokemon.name + '.png', alt: pokemon.name })
          ),
          _react2.default.createElement(
            'div',
            { className: _App2.default.pokemonDetails },
            this.renderStats(pokemon)
          ),
          _react2.default.createElement(
            'div',
            { className: _App2.default.pokemonExtras },
            this.renderProperties(pokemon)
          ),
          _react2.default.createElement(
            'div',
            { className: _App2.default.pokemonAbilities },
            this.renderAbilities(pokemon)
          ),
          _react2.default.createElement(
            'div',
            { className: _App2.default.pokemonTypes },
            this.renderTypes(pokemon)
          ),
          console.log(pokemon)
        )
      );
    }
  }]);

  return PokemonDetail;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    pokemon: state.pokemonDetail,
    isFetching: state.isFetching
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ pokemonDetail: _pokemonDetail2.default }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PokemonDetail);

/***/ })

})
//# sourceMappingURL=0.f9f129a3bbeb141aa7d8.hot-update.js.map