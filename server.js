import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Routes from "./serverBuild/react/Routes";
import path from 'path';
import Helmet from "react-helmet";
import favicon from 'serve-favicon';

const app = express();
app.use(express.static(path.join(__dirname, 'dist')));
app.use(favicon(path.join(__dirname, 'favicon.ico')))
app.get('*', (req, res) => {
    console.log("Request", req.url);
    const context = {};
    const markup = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <Routes />
        </StaticRouter>
    )
    const helmet = Helmet.renderStatic();

    // render the index template with the embedded React markup
    let renderedPage = renderPage(markup, helmet);
    return res.send(renderedPage);
});

function renderPage(appHtml, helmet) {
    return `
    <html>
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    <head>
    <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <script type="text/javascript" data-cfasync="false" src="//dsms0mj1bbhn4.cloudfront.net/assets/pub/shareaholic.js" data-shr-siteid="3cac38b1c33af8bd957a9222fed4acc4" async="async"></script>
    </head>
    <link rel="stylesheet" type="text/css" href="/styles.css">
    <body>
    <div id="fb-root"></div>
    <div id=app>${appHtml}</div>
    </body>
    <script>(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.9&appId=399964337042548";
    fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));</script>
    <script src="/bundle.js"></script>
    </html>
   `
}

var PORT = process.env.PORT || 8004;
app.listen(PORT, function () {
    console.log("App running on", "localhost:" + PORT);
})

