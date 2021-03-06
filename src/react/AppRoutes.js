import React, { Component } from "react";
import ReactDom from "react-dom";
import {
    BrowserRouter as Router, useRouterHistory
} from 'react-router-dom';
import Routes from "./Routes";
import ScrollToTop from "./ScrollToTop";

if (process.env.BROWSER) {
    require('../asset/bgimage.png');
    require('../asset/play.png');
    require('../asset/f_logo_with_white_back.png');
    require('../css');
    require('../asset/font/Molleat.otf');
    require('../asset/font/avenir-next-regular.ttf');
}

export default class AppRoutes extends Component {
    render() {
        return (
            <Router>
                <ScrollToTop>
                    <Routes />
                </ScrollToTop>
            </Router>
        )
    }
}