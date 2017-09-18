import React, { Component } from "react";
import { Route, IndexRoute, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import ResultPage from './pages/ResultPage';
import WallPostPage from './pages/WallPostPage';
import PrivacyPage from './pages/PrivacyPage';
import ContactUsPage from './pages/ContactUsPage';
import MoreGames from './pages/MoreGames';
import MoreVideos from './pages/MoreVideos';
import NavBarComp from './components/NavBarComp';
import FooterComp from './components/FooterComp';

if (process.env.BROWSER) {
    require('../css');
    require('../asset/font/Molleat.otf');
}

if (process.env.BROWSER) {
    var ReactGA = require('react-ga');
    ReactGA.initialize('UA-101643128-1', {
        debug: false,
        titleCase: false
    });
}
const logPageView = () => {
    if (process.env.BROWSER && process.env.NODE_ENV !== "development") {
        ReactGA.set({ page: window.location.pathname });
        ReactGA.pageview(window.location.pathname);
    }
    return null;
};

export default class Routes extends Component {
    render() {
        return (
            <div>
                <NavBarComp />
                <Route path="/" component={logPageView} />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/game" component={MoreGames} />
                    <Route exact path="/video" component={MoreVideos} />
                    <Route exact path="/game/:id" component={GamePage} />
                    <Route exact path="/game/result/:id" component={ResultPage} />
                    <Route exact path="/game/wallpost/:id" component={WallPostPage} />
                    <Route exact path="/privacy" component={PrivacyPage} />
                    <Route exact path="/contactus" component={ContactUsPage} />
                    <Route component={HomePage} />
                </Switch>
                <FooterComp />
            </div>
        )
    }
}