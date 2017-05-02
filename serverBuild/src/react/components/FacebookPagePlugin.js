"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FacebookPagePlugin = function (_Component) {
    _inherits(FacebookPagePlugin, _Component);

    function FacebookPagePlugin() {
        _classCallCheck(this, FacebookPagePlugin);

        return _possibleConstructorReturn(this, (FacebookPagePlugin.__proto__ || Object.getPrototypeOf(FacebookPagePlugin)).apply(this, arguments));
    }

    _createClass(FacebookPagePlugin, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "fb-page", "data-href": "https://www.facebook.com/whitelight.social/", "data-small-header": "false", "data-adapt-container-width": "true", "data-hide-cover": "false", "data-show-facepile": "true" },
                _react2.default.createElement(
                    "blockquote",
                    { cite: "https://www.facebook.com/whitelight.social/", className: "fb-xfbml-parse-ignore" },
                    _react2.default.createElement(
                        "a",
                        { href: "https://www.facebook.com/whitelight.social/" },
                        "White Light"
                    )
                )
            );
        }
    }]);

    return FacebookPagePlugin;
}(_react.Component);

exports.default = FacebookPagePlugin;