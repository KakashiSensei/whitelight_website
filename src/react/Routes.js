import React, { Component } from "react";
import { Route, IndexRoute } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import ResultPage from './pages/ResultPage';
import WallPostPage from './pages/WallPostPage';
import NavBarComp from './components/NavBarComp';
import FooterComp from './components/FooterComp';

export default class Routes extends Component {
    render() {
        return (
            <div>
                <NavBarComp/>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/game/:id" component={GamePage} />
                <Route exact path="/game/result/:id" component={ResultPage}/>
                <Route exact path="/game/wallpost/:id" component={WallPostPage} />
                <FooterComp/>
            </div>
        )
    }
}