"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _NavBarComp = require("../components/NavBarComp");

var _NavBarComp2 = _interopRequireDefault(_NavBarComp);

var _FacebookPagePlugin = require("../components/FacebookPagePlugin");

var _FacebookPagePlugin2 = _interopRequireDefault(_FacebookPagePlugin);

var _JumbotronComp = require("../components/JumbotronComp");

var _JumbotronComp2 = _interopRequireDefault(_JumbotronComp);

var _config = require("../../config");

var config = _interopRequireWildcard(_config);

var _isomorphicFetch = require("isomorphic-fetch");

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _CardDeckComp = require("../components/CardDeckComp");

var _CardDeckComp2 = _interopRequireDefault(_CardDeckComp);

var _reactRouterDom = require("react-router-dom");

var _HomeHeader = require("../headers/HomeHeader");

var _HomeHeader2 = _interopRequireDefault(_HomeHeader);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('es6-promise').polyfill();

console.log("Browser Env", process.env.BROWSER);
if (process.env.BROWSER) {
    require('../../css');
    require('../../asset/font/Molleat.otf');
}

var HomePage = function (_Component) {
    _inherits(HomePage, _Component);

    function HomePage(props) {
        _classCallCheck(this, HomePage);

        var _this = _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, props));

        _this.state = {
            "games": null,
            "fbLoaded": false,
            "redirectURL": null
        };
        return _this;
    }

    _createClass(HomePage, [{
        key: "cardClicked",
        value: function cardClicked(url) {
            //redirect to other link
            this.setState({
                "redirectURL": url
            });
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            var gameUrl = config.domainName + '/api/game';
            var promise = (0, _isomorphicFetch2.default)(gameUrl, { method: 'GET' }).then(function (res) {
                return res.json();
            });
            promise.then(function (data) {
                var gamesArray = [];
                data.forEach(function (element) {
                    var gameData = {};
                    gameData["id"] = element._id;
                    gameData["introImage"] = element.introImage;
                    gameData["title"] = element.title;
                    gamesArray.push(gameData);
                }, _this2);
                _this2.setState({ "games": gamesArray });
            });

            // loading the facebook plugin after FB is loaded
            if (window.FB) {
                this.setState({ fbLoaded: true });
            } else {
                document.addEventListener('fb_init', function (e) {
                    FB.XFBML.parse();
                    _this2.setState({ fbLoaded: true });
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            if (this.state.redirectURL) {
                return _react2.default.createElement(_reactRouterDom.Redirect, { push: true, to: this.state.redirectURL });
            }

            var facebookPlugin = _react2.default.createElement("div", null);
            if (this.state.fbLoaded) {
                facebookPlugin = _react2.default.createElement(_FacebookPagePlugin2.default, null);
            }
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(_HomeHeader2.default, null),
                _react2.default.createElement(_NavBarComp2.default, null),
                _react2.default.createElement(_JumbotronComp2.default, null),
                _react2.default.createElement(
                    "div",
                    { className: "container" },
                    _react2.default.createElement(
                        "div",
                        { className: "row" },
                        _react2.default.createElement(
                            "div",
                            { className: "col-md-9" },
                            _react2.default.createElement(
                                "div",
                                { className: "centerAlign topic" },
                                "Play Games"
                            ),
                            _react2.default.createElement(
                                "div",
                                null,
                                _react2.default.createElement(_CardDeckComp2.default, { games: this.state.games, callBackFunction: this.cardClicked.bind(this) })
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "col-md-3" },
                            facebookPlugin
                        )
                    )
                )
            );
        }
    }]);

    return HomePage;
}(_react.Component);

exports.default = HomePage;