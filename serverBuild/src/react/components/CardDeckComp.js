'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactstrap = require('reactstrap');

var _CardComp = require('./CardComp');

var _CardComp2 = _interopRequireDefault(_CardComp);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardDeckComp = function (_Component) {
    _inherits(CardDeckComp, _Component);

    function CardDeckComp(props) {
        _classCallCheck(this, CardDeckComp);

        return _possibleConstructorReturn(this, (CardDeckComp.__proto__ || Object.getPrototypeOf(CardDeckComp)).call(this, props));
    }

    _createClass(CardDeckComp, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _reactstrap.CardDeck,
                { className: 'row' },
                this.props.games && this.props.games.map(function (element, index) {
                    return _react2.default.createElement(_CardComp2.default, { key: element.id, id: element.id, title: element.title, introImage: element.introImage, callBackFunction: _this2.props.callBackFunction });
                })
            );
        }
    }]);

    return CardDeckComp;
}(_react.Component);

CardDeckComp.propType = {
    games: _propTypes2.default.shape({
        id: _propTypes2.default.string,
        introImage: _propTypes2.default.string,
        title: _propTypes2.default.string
    }).isRequired,
    callBackFunction: _propTypes2.default.func.isRequired
};
exports.default = CardDeckComp;