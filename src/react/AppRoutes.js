import React, { Component } from "react";
import ReactDom from "react-dom";
import {
    BrowserRouter as Router, useRouterHistory
} from 'react-router-dom'
import Routes from "./Routes";
if (process.env.BROWSER) {
    require('../asset/bgimage.png');
    require('../asset/loading.png');
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