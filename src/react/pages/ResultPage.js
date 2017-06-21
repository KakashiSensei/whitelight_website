import React, { Component } from "react";
import ResultHeader from "../headers/ResultHeader";
import * as  AppHelper from "../helper/AppHelper";
import * as config from "../../config";
import ImageResultComp from "../components/ImageResultComp";
import FacebookPagePlugin from "../components/FacebookPagePlugin";
import CardDeckComp from "../components/CardDeckComp";
import * as Requests from "../Requests";
import { Redirect } from 'react-router';

export default class ResultPage extends Component {
    title;
    gameID;
    imageFullPath;
    fullURL;
    imageName;

    constructor(props) {
        super(props);
        let pathName = this.props.location.pathname;
        let urlParams = AppHelper.urlParams(this.props.location);
        this.title = urlParams["title"];
        this.imageName = urlParams["image"];
        this.imageFullPath = config.storageContainer + "/" + this.imageName;
        this.gameID = pathName.split("/").pop();
        this.fullURL = config.website + this.props.location.pathname + this.props.location.search;
        this.shareClicked = this.shareClicked.bind(this);
        this.state = {
            recommendedGames: [],
        }

    }

    componentDidMount() {
        Requests.getRecommendedGames(this.gameID)
            .then((data) => {
                this.setState({
                    recommendedGames: data
                })
            })
    }

    cardClicked(url) {
        this.props.history.push(url);
    }

    shareClicked(e) {
        let shareURL = config.website + "/game/wallpost/" + this.gameID + "?image=" + this.imageName + "&title=" + this.title;
        FB.ui({
            method: 'share',
            display: 'popup',
            href: shareURL,
        }, function (response) { });
    }

    render() {
        return (
            <div>
                <ResultHeader title={this.title} image={this.imageFullPath} url={this.fullURL} />
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <ImageResultComp id={this.gameID} resultImage={this.imageFullPath} title={this.title} callbackFunction={this.shareClicked} />
                            <div className="recommendedMargin">
                                <div>
                                    <div className="topic">
                                        Play more games
                                    </div>
                                    <div>
                                        <CardDeckComp games={this.state.recommendedGames} callBackFunction={this.cardClicked.bind(this)} />
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
