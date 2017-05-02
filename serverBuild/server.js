"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _server = require("react-dom/server");

var _server2 = _interopRequireDefault(_server);

var _reactRouter = require("react-router");

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _Routes = require("./src/react/Routes");

var _Routes2 = _interopRequireDefault(_Routes);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _reactHelmet = require("react-helmet");

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _config = require("config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_express2.default.static(_path2.default.join(__dirname, 'dist')));
app.get('*', function (req, res) {
    var context = {};
    console.log(req.get('host'));
    console.log(req.params);
    var markup = _server2.default.renderToString(_react2.default.createElement(
        _reactRouter2.default,
        { location: req.url, context: context },
        _react2.default.createElement(_Routes2.default, null)
    ));
    var helmet = _reactHelmet2.default.renderStatic();

    // render the index template with the embedded React markup
    return res.send(renderPage(markup));
});

function renderPage(appHtml) {
    return "\n    <html>\n    <body>\n    <div id=app>" + appHtml + "</div>\n    <script>\n    (function (d, s, id) {\n        var js, fjs = d.getElementsByTagName(s)[0];\n        if (d.getElementById(id)) return;\n        js = d.createElement(s); js.id = id;\n        js.src = \"//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.8&appId=1778022462419350\";\n        fjs.parentNode.insertBefore(js, fjs);\n    }(document, 'script', 'facebook-jssdk'));\n</script>\n    <script src=\"/bundle.js\"></script>\n    </body>\n    </html>\n   ";
}

if (typeof window === 'undefined') {
    global.window = {};
}

console.log("Dynamic port", process.env.PORT);
var PORT = _config2.default.get('PORT') || 3000;
app.listen(PORT, function () {
    console.log("App running on", "localhost:" + PORT);
});
