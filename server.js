var express = require("express");
var React = require("react");
var ReactDOMServer = require("react-dom/server");
import { match, RouterContext, StaticRouter } from "react-router";
import Routes from "./src/react/Routes";
var path = require('path');

var app = express();
app.use('/files',express.static(path.join(__dirname, 'dist')));
// universal routing and rendering
app.get('*', (req, res) => {
    const context = {};
    console.log(req.get('host'));
    console.log(req.params)
    const markup = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <Routes/>
        </StaticRouter>
    )

    // render the index template with the embedded React markup
    return res.send(renderPage(markup));
});

function renderPage(appHtml) {
    return `
    <html>
    <body>
    <div id=app>${appHtml}</div>
    <script src="/bundle.js"></script>
    </body>
    </html>
   `
}

if (typeof window === 'undefined') {
    global.window = {}
}
var PORT = 8080;
app.listen(PORT, function () {
    console.log("App running on", "localhost:" + PORT);
})

