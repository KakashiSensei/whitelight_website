import React, { Component } from "react";
import ResultHeader from "../headers/ResultHeader";
import * as  AppHelper from "../helper/AppHelper";
import GameQuestionComp from "../components/GameQuestionComp";
import * as config from "../../config";
import * as Requests from "../Requests";
import FacebookPagePlugin from "../components/FacebookPagePlugin";
import CardDeckComp from "../components/CardDeckComp";
import AdHelper from "../helper/AdHelper";

if (process.env.BROWSER) {
    require('../../css');
}

export default class WallPostPage extends Component {
    title;
    gameID;
    introImage;
    imageFullPath;
    fullURL;
    description;

    constructor(props) {
        super(props);
        let pathName = this.props.location.pathname;
        let urlParams = AppHelper.urlParams(this.props.location);
        let imageName = urlParams["image"];
        this.description = urlParams["description"];
        this.imageFullPath = config.storageContainer + "/" + imageName;
        this.title = urlParams["title"];
        this.gameID = pathName.split("/").pop();
        this.fullURL = config.website + this.props.location.pathname + this.props.location.search;

        this.state = {
            questionLoaded: false,
            showLoader: false,
            recommendedGames: [],
            sideRecommendationGames: []
        }
    }

    setInitialState(pathName) {
        let urlParams = AppHelper.urlParams(this.props.location);
        this.title = urlParams["title"];
        this.description = urlParams["description"];
        this.gameID = pathName.split("/").pop();
    }

    componentDidMount() {
        Requests.getGame(this.gameID)
            .then((data) => {
                this.title = data.title;
                this.gameID = data._id;
                this.introImage = data.introImage;
                this.setState({
                    questionLoaded: true
                })
            })

        Requests.getRecommendedGames(this.gameID, 4)
            .then((data) => {
                this.setState({
                    recommendedGames: data
                })
            })

        Requests.getRecommendedGames(this.gameID, 4)
            .then((data) => {
                this.setState({
                    sideRecommendationGames: data
                })
            })

        // add the add widget
        AdHelper.addAd(document);
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
                    let linkAddress = "/game/result/" + this.gameID + "?image=" + name + "&title=" + this.title + "&description=" + this.description;
                    _this.props.history.push(linkAddress);
                });
            })
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
                <ResultHeader title={this.title} image={this.imageFullPath} url={this.props.location} description={this.description} />
                <div className="container">
                    <div className="row containerMargin">
                        <div className="col-md-8">
                            {questionContainer}
                            <div className="recommendedMargin">
                                <div>
                                    <div className="row">
                                        <div className="topic">
                                            MORE GAMES
                                        </div>
                                        <div>
                                            <CardDeckComp games={this.state.recommendedGames} contentPos="recommended" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="contentad406263" className="row">
                            </div>
                        </div>
                        <div className="col-md-4 recommendedMargin">
                            <div>
                                <FacebookPagePlugin />
                            </div>
                            <div>
                                <CardDeckComp games={this.state.sideRecommendationGames} contentPos="side" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}