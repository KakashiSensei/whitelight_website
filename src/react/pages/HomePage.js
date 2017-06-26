import React, { Component } from "react";
import NavBarComp from "../components/NavBarComp";
import FacebookPagePlugin from "../components/FacebookPagePlugin";
import JumbotronComp from "../components/JumbotronComp";
import * as config from "../../config";
require('es6-promise').polyfill();
import CardDeckComp from "../components/CardDeckComp";
import { Redirect } from "react-router-dom";
import HomeHeader from "../headers/HomeHeader";
import * as Requests from "../Requests";
import FooterComp from "../components/FooterComp";

if (process.env.BROWSER) {
    require('../../css');
    require('../../asset/font/Molleat.otf');
}

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "games": null
        }
    }

    cardClicked(url) {
        this.props.history.push(url);
    }

    componentDidMount() {
        Requests.getAllGames()
            .then((data) => {
                this.setState({ "games": data })
            })
    }

    render() {
        return (
            <div>
                <HomeHeader />
                <JumbotronComp />
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="topic">
                                Play Games
                            </div>
                            <div>
                                <CardDeckComp games={this.state.games} callBackFunction={this.cardClicked.bind(this)} />
                            </div>

                        </div>
                        <div className="col-md-3 recommendedMargin">
                            <FacebookPagePlugin />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}