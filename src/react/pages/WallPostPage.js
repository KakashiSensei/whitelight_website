import React, { Component } from "react";
import ResultHeader from "../headers/ResultHeader";
import * as  AppHelper from "../helper/AppHelper";
import GameQuestionComp from "../components/GameQuestionComp";
import * as config from "../../config";
import * as Requests from "../Requests";
import FacebookPagePlugin from "../components/FacebookPagePlugin";
import CardDeckComp from "../components/CardDeckComp";

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
        }
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
    }

    callbackFunction() {
        let _this = this;
        this.setState({
            showLoader: true
        })
        //request for the game
        FB.init({
            appId: config.appID,
            xfbml: true,
            version: 'v2.8',
            status: true
        });
        FB.login((response) => {
            if (response.status === 'connected') {
                var uid = response.authResponse.userID;
                var accessToken = response.authResponse.accessToken;

                Requests.getGameResult(uid, accessToken, this.gameID).then((res) => {
                    let name = res.Key;
                    let linkAddress = "/game/result/" + this.gameID + "?image=" + name + "&title=" + this.title;
                    _this.props.history.push(linkAddress);
                });
            } else if (response.status === 'not_authorized') {
                // the user is logged in to Facebook, 
                // but has not authenticated your app
            } else {
                // the user isn't logged in to Facebook.
            }
        }, { scope: config.scope });
    }

    render() {
        let questionContainer = <div className="falseSize addShadow"></div>;
        if (this.state.questionLoaded) {
            questionContainer = (
                <GameQuestionComp id={this.gameID} title={this.title} introImage={this.introImage} callbackFunction={this.callbackFunction.bind(this)} />
            )
        }
        if (this.state.showLoader) {
            questionContainer = (
                <div className="loaderHeight">
                    <div className="loader">Loading...</div>
                </div>
            )
        }

        return (
            <div>
                <ResultHeader title={this.title} image={this.imageFullPath} url={this.props.location} description={this.description}/>
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
                                        <CardDeckComp games={this.state.recommendedGames} contentPos="recommended"/>
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