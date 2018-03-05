webpackHotUpdate(0,{

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(9);

var _App2 = _interopRequireDefault(_App);

var _reactRedux = __webpack_require__(10);

var _redux = __webpack_require__(7);

var _Button = __webpack_require__(20);

var _Button2 = _interopRequireDefault(_Button);

var _pokemonLoad = __webpack_require__(34);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pokemonSearch = function pokemonSearch(props) {
  var handleKeyPress = function handleKeyPress(e) {
    if (e.key === 'Enter') {
      props.pokemonLoad(undefined, e.target.value);
    }
  };

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { className: _App2.default.container },
      _react2.default.createElement('input', { type: 'text',
        className: _App2.default.input,
        placeholder: 'Nome ou c\xF3digo',
        onKeyPress: handleKeyPress }),
      _react2.default.createElement(_Button2.default, { style: _App2.default.buttonRed, icon: 'search', onClick: handleKeyPress })
    )
  );
};

var mapStateToProps = function mapStateToProps(state) {
  return { next: state.pokemon.next };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ pokemonLoad: _pokemonLoad.pokemonLoad }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(pokemonSearch);

/***/ })

})
//# sourceMappingURL=0.9f9aeca5a416bd41b94b.hot-update.js.map