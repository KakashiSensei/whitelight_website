var express = require("express");
var React = require("react");
var ReactDOMServer = require("react-dom/server");
import { match, RouterContext, StaticRouter } from "react-router";
import Routes from "./src/react/Routes";
var path = require('path');
import { Helmet } from "react-helmet";

var app = express();
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
    const context = {};
    console.log(req.get('host'));
    console.log(req.params)
    const markup = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <Routes />
        </StaticRouter>
    )
    const helmet = Helmet.renderStatic();

    // render the index template with the embedded React markup
    return res.send(renderPage(markup));
});

function renderPage(appHtml) {
    
    return `
    <html>
    <body>
    <div id=app>${appHtml}</div>
    <script>
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.8&appId=1778022462419350";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
</script>
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

