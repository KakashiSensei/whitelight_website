"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = require("react-helmet");

var _config = require("../../config");

var config = _interopRequireWildcard(_config);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomeHeader = function (_Component) {
    _inherits(HomeHeader, _Component);

    function HomeHeader() {
        _classCallCheck(this, HomeHeader);

        return _possibleConstructorReturn(this, (HomeHeader.__proto__ || Object.getPrototypeOf(HomeHeader)).apply(this, arguments));
    }

    _createClass(HomeHeader, [{
        key: "render",
        value: function render() {
            var imageURL = "https://scontent-sin6-1.xx.fbcdn.net/v/t31.0-8/17157436_211385332672148_579550780088126766_o.jpg?oh=b03f3449493b1d847523ecdc4f73346d&oe=597FECCF";
            return _react2.default.createElement(
                _reactHelmet.Helmet,
                null,
                _react2.default.createElement("meta", { charSet: "utf-8" }),
                _react2.default.createElement(
                    "title",
                    null,
                    "White Light"
                ),
                _react2.default.createElement("meta", { name: "description", content: "White Light - be positive" }),
                _react2.default.createElement("meta", { "http-equiv": "Content-Type", content: "text/html; charset=UTF-8" }),
                _react2.default.createElement("meta", { name: "viewport", content: "width=device-width, height=device-height,  initial-scale=1" }),
                _react2.default.createElement("meta", { "http-equiv": "X-UA-Compatible", content: "IE=edge" }),
                _react2.default.createElement("meta", { name: "googlebot", content: "noindex" }),
                _react2.default.createElement("meta", { property: "fb:app_id", content: config.appID }),
                _react2.default.createElement("meta", { property: "fb:admins", content: config.adminID }),
                _react2.default.createElement("meta", { property: "og:site_name", content: config.website }),
                _react2.default.createElement("meta", { property: "og:type", content: "website" }),
                _react2.default.createElement("meta", { property: "og:url", content: config.website }),
                _react2.default.createElement("meta", { property: "og:image", content: imageURL })
            );
        }
    }]);

    return HomeHeader;
}(_react.Component);

exports.default = HomeHeader;