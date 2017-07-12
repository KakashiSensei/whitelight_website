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
import FooterComp from "../components/FooterComp";

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
        Requests.getAllGames()
            .then((data) => {
                this.setState({ "games": data })
            })

        Requests.getAllVideos()
            .then((data)=>{
                this.setState({ "videos": data })
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
                            <div className="row">
                                <div className="topic">
                                    Play Games
                                </div>
                                <div>
                                    <CardDeckComp games={this.state.games} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="topic">
                                    Watch Video
                                </div>
                                <div>
                                    <VideoDeckComp videos={this.state.videos} />
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