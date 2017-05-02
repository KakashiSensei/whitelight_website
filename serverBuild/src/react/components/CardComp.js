'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactstrap = require('reactstrap');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardComp = function (_Component) {
    _inherits(CardComp, _Component);

    function CardComp(props) {
        _classCallCheck(this, CardComp);

        return _possibleConstructorReturn(this, (CardComp.__proto__ || Object.getPrototypeOf(CardComp)).call(this, props));
    }

    _createClass(CardComp, [{
        key: 'render',
        value: function render() {
            var url = "/game/" + this.props.id + "?title=" + this.props.title;
            return _react2.default.createElement(
                _reactstrap.Card,
                { className: 'col-md-4 rollOver', onClick: this.props.callBackFunction.bind(this, url) },
                _react2.default.createElement(_reactstrap.CardImg, { top: true, width: '100%', src: this.props.introImage, alt: 'Card image cap' }),
                _react2.default.createElement(
                    _reactstrap.CardBlock,
                    null,
                    _react2.default.createElement(
                        _reactstrap.CardTitle,
                        { className: 'questionTitle' },
                        this.props.title
                    )
                )
            );
        }
    }]);

    return CardComp;
}(_react.Component);

CardComp.propType = {
    id: _propTypes2.default.string.isRequired,
    introImage: _propTypes2.default.string.isRequired,
    title: _propTypes2.default.string.isRequired,
    callBackFunction: _propTypes2.default.func.isRequired
};
exports.default = CardComp;