import React, { Component } from "react";
import NavBarComp from "../components/NavBarComp";
import FacebookPagePlugin from "../components/FacebookPagePlugin";
import JumbotronComp from "../components/JumbotronComp";
import * as config from "../../config";
require('es6-promise').polyfill();
import CardDeckComp from "../components/CardDeckComp";
import VideoDeckComp from "../components/VideoDeckComp";
import HomeHeader from "../headers/HomeHeader";
import * as Requests from "../Requests";
import { Link } from "react-router-dom";

if (process.env.BROWSER) {
    require('../../css');
    require('../../asset/font/Molleat.otf');
}

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "games": null,
            "videos": null
        }
    }

    componentDidMount() {
        Requests.getAllGames(6, 1)
            .then((data) => {
                this.setState({ "games": data.items })
            })

        Requests.getAllVideos(6, 1)
            .then((data) => {
                this.setState({ "videos": data.items })
            })
    }

    render() {
        let gameComponent = <div></div>;
        if (this.state.games && this.state.games.length > 0) {
            gameComponent =
                <div className="row">
                    <div className="topic">
                        GAMES
                                </div>
                    <div>
                        <CardDeckComp games={this.state.games} />
                    </div>
                    <div className="alignRight">
                        <Link to="/game">
                            <div className="more">
                                more
                            </div>
                        </Link>
                    </div>
                </div>
        }

        let videoComponent = <div></div>;
        if (this.state.videos && this.state.videos.length > 0) {
            videoComponent =
                <div className="row">
                    <div className="topic">
                        VIDEOS
                                </div>
                    <div>
                        <VideoDeckComp videos={this.state.videos} />
                    </div>
                    <div className="alignRight">
                        <Link to="/video">
                            <div className="more">
                                more
                            </div>
                        </Link>
                    </div>
                </div>
        }

        return (
            <div>
                <HomeHeader />
                <JumbotronComp />
                <div className="container">
                    <div className="row containerMargin">
                        <div className="col-md-8">
                            {gameComponent}
                            <br />
                            <br />
                            {videoComponent}
                        </div>
                        <div className="col-md-4 recommendedMargin">
                            <div className="padding15">
                                <div>
                                    <FacebookPagePlugin />
                                </div>
                                <div className="paddingRecommendedQuote">
                                    <div>
                                        <h4>
                                        Quote of the day
                                        </h4>
                                    </div>
                                    <div>
                                        <img className="imageSize roundedCorner" src="https://whitelight-quiz-questions.s3.amazonaws.com/group9Image.png"></img>
                                    </div>
                                    <div className="recommendedQuote">
                                        Peace begins with a smile.
                                    </div>
                                </div>
                                <div className="paddingRecommendedQuote">
                                    <div>
                                        <img className="imageSize roundedCorner" src="https://whitelight-quiz-questions.s3.amazonaws.com/GroupImage.png"></img>
                                    </div>
                                    <div className="recommendedQuote">
                                        You can do it.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}