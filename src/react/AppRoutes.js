import React, { Component } from "react";
import ReactDom from "react-dom";
import {
    BrowserRouter as Router,
} from 'react-router-dom'
import Routes from "./Routes";
import createHistory from 'history/createBrowserHistory';
if (process.env.BROWSER) {
    require('../asset/bgimage.png');
    require('../asset/footerImage.png');
    require('../asset/f_logo_with_white_back.png');
    require('../css');
    require('../asset/font/Molleat.otf');
    require('../asset/font/fontawesome-webfont.woff2');
}

export default class AppRoutes extends Component {
    render() {
        return (
            <Router>
                <Routes />
            </Router>
        )
    }
}