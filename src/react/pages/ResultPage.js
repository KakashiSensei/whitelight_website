import React, { Component } from "react";
import ResultHeader from "../headers/ResultHeader";
import * as  AppHelper from "../helper/AppHelper";
import NavBarComp from "../components/NavBarComp";
import * as config from "../../config";
import ImageResultComp from "../components/ImageResultComp";

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
    }

    shareClicked(e){
        let shareURL = config.website + "/game/wallpost/" + this.gameID + "?image=" + this.imageName + "&title=" + this.title;
        console.log("Share URL", shareURL);
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
                <NavBarComp />
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 gameContainer centerAlign">
                            <ImageResultComp id={this.gameID} resultImage={this.imageFullPath} title={this.title} callbackFunction={this.shareClicked}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
