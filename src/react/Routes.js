import React, { Component } from "react";
import { Route, IndexRoute } from 'react-router-dom';
import HomePage from './pages/HomePage';

export default class Routes extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={HomePage}></Route>
            </div>
        )
    }
}