import React, { Component } from "react";
import ResultHeader from "../headers/ResultHeader";
import * as  AppHelper from "../helper/AppHelper";
import * as config from "../../config";
import ImageResultComp from "../components/ImageResultComp";
import FacebookPagePlugin from "../components/FacebookPagePlugin";
import CardDeckComp from "../components/CardDeckComp";
import * as Requests from "../Requests";

export default class ResultPage extends Component {
    title;
    gameID;
    imageFullPath;
    fullURL;
    imageName;
    description;

    constructor(props) {
        super(props);
        let pathName = this.props.location.pathname;
        let urlParams = AppHelper.urlParams(this.props.location);
        this.title = urlParams["title"];
        this.imageName = urlParams["image"];
        this.description = urlParams["description"];
        this.imageFullPath = config.storageContainer + "/" + this.imageName;
        this.gameID = pathName.split("/").pop();
        this.fullURL = config.website + this.props.location.pathname + this.props.location.search;
        this.shareClicked = this.shareClicked.bind(this);
        this.state = {
            recommendedGames: [],
            outputText: null
        }

        let shareURL = config.website + "/game/wallpost/" + this.gameID + "?image=" + this.imageName + "&title=" + this.title + "&description=" + this.description;
        // scrap the wallpost link here
        this.scrapHere(shareURL);
    }

    scrapHere(shareURL){
        console.log("shareURL", shareURL);
        Requests.scarpImage(shareURL).then(()=>{
            console.log("Page scrapped");
        })
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        Requests.getRecommendedGames(this.gameID, 4)
            .then((data) => {
                this.setState({
                    recommendedGames: data
                })
            })

        let transcationNumber = this.imageName.replace("image", "").replace(".jpg", "");
        Requests.getTransaction(transcationNumber)
            .then((data) => {
                let outputText = data.outputText;
                this.setState({
                    outputText: outputText
                })
            })
    }

    shareClicked(e) {
        let shareURL = config.website + "/game/wallpost/" + this.gameID + "?image=" + this.imageName + "&title=" + this.title + "&description=" + this.description;
        FB.ui({
            method: 'share',
            display: 'popup',
            href: shareURL,
        }, function (response) { });
    }

    render() {
        let style = { width: "0px", height: "0px", margin: "0px", padding: "0px" };
        return (
            <div>
                <ResultHeader title={this.title} image={this.imageFullPath} url={this.props.location} description={this.description}/>
                <div className="container">
                    <div className="row containerMargin">
                        <div className="col-md-8">
                            <div className="row">
                                <ImageResultComp id={this.gameID} resultImage={this.imageFullPath} title={this.title} callbackFunction={this.shareClicked} outputText={this.state.outputText} />
                            </div>
                            <div className="recommendedMargin">
                                <div className="row">
                                    <div>
                                        <div className="topic">
                                            MORE GAMES
                                    </div>
                                        <div>
                                            <CardDeckComp games={this.state.recommendedGames} contentPos="recommended" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 recommendedMargin">
                            <div>
                                <FacebookPagePlugin />
                            </div>
                            <div>
                                <CardDeckComp games={this.state.recommendedGames} contentPos="side" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
