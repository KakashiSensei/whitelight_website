import React, { Component } from "react";
import GameHeader from "../headers/GameHeader";
import * as Requests from "../Requests";
import GameQuestionComp from "../components/GameQuestionComp";
import FacebookPagePlugin from "../components/FacebookPagePlugin";
import { Redirect } from 'react-router-dom';
import config from "../../config";
import * as AppHelper from "../helper/AppHelper";
import CardDeckComp from "../components/CardDeckComp";
import FacebookHelper from "../helper/FacebookHelper";
import LoaderComp from "../components/LoaderComp";

if (process.env.BROWSER) {
    require('../../css');
}

export default class HomePage extends Component {
    title;
    gameID;
    introImage;

    constructor(props) {
        super(props);
        let pathName = this.props.location.pathname;
        this.setInitialState(pathName);
        this.state = {
            questionLoaded: false,
            showLoader: false,
            recommendedGames: []
        }
        this.cardClicked = this.cardClicked.bind(this);
        this.startRequesting();
    }

    setInitialState(pathName) {
        let urlParams = AppHelper.urlParams(this.props.location);
        this.title = urlParams["title"];
        this.gameID = pathName.split("/").pop();
    }

    startRequesting() {
        Requests.getGame(this.gameID)
            .then((data) => {
                this.title = data.title;
                this.gameID = data._id;
                this.introImage = data.introImage;
                this.setState({
                    questionLoaded: true
                })
            });

        Requests.getRecommendedGames(this.gameID)
            .then((data) => {
                this.setState({
                    recommendedGames: data
                })
            })
    }

    componentWillReceiveProps(nextProps) {
        let pathName = nextProps.location.pathname;
        let urlParams = AppHelper.urlParams(nextProps.location);
        let gameID = pathName.split("/").pop();
        if (this.gameID !== gameID) {
            this.setInitialState(pathName);
            this.componentDidMount();
        }
    }

    callbackFunction() {
        let _this = this;
        this.setState({
            showLoader: true
        })
        //request for the game
        FacebookHelper.loginFacebook()
            .then((response) => {
                var uid = response.authResponse.userID;
                var accessToken = response.authResponse.accessToken;

                Requests.getGameResult(uid, accessToken, this.gameID).then((res) => {
                    let name = res.Key;
                    let linkAddress = "/game/result/" + this.gameID + "?image=" + name + "&title=" + this.title;
                    _this.props.history.push(linkAddress);
                });
            })
    }

    cardClicked(url) {
        this.props.history.push(url);
    }

    render() {
        let questionContainer = <div className="gameOuterMargin falseSize addShadow"></div>;
        if (this.state.questionLoaded) {
            questionContainer = (
                <GameQuestionComp id={this.gameID} title={this.title} introImage={this.introImage} callbackFunction={this.callbackFunction.bind(this)} />
            )
        }
        if (this.state.showLoader) {
            questionContainer = (
                <div className="loaderHeight gameContainer addShadow">
                    <LoaderComp />
                </div>
            )
        }

        return (
            <div>
                <GameHeader title={this.title} url={this.props.location} />
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            {questionContainer}
                            <div className="recommendedMargin">
                                <div>
                                    <div className="topic">
                                        Play more games
                                    </div>
                                    <div>
                                        <CardDeckComp games={this.state.recommendedGames} callBackFunction={this.cardClicked} />
                                    </div>
                                </div>
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