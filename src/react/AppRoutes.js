import React, { Component } from "react";
import ReactDom from "react-dom";
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import Routes from "./Routes";
import createHistory from 'history/createBrowserHistory'

export default class AppRoutes extends Component {
    render() {
        return (
            <Router>
                <Routes/>
            </Router>
        )
    }
}