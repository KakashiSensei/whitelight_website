import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";
import Routes from "./src/react/Routes";
import path from 'path';
import Helmet from "react-helmet";
// import config from 'config';

const app = express();
app.use(express.static(path.join(__dirname, 'dist')));
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
    <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-101643128-1', 'auto');
    ga('send', 'pageview');
    </script>
   `
}

var PORT = process.env.PORT || 8004;
app.listen(PORT, function () {
    console.log("App running on", "localhost:" + PORT);
})

