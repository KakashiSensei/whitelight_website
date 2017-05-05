import React, { Component } from "react";
import GameHeader from "../headers/GameHeader";
import * as Requests from "../Requests";
import GameQuestionComp from "../components/GameQuestionComp";
import NavBarComp from "../components/NavBarComp";

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
        let queryString = this.props.location.search.substring(1);
        this.urlParams = JSON.parse('{"' + decodeURI(queryString).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');

        this.title = this.urlParams["title"];

        this.gameID = pathName.split("/").pop();
        this.state = {
            questionLoaded: false,
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
    }

    render() {
        let questionContainer = <div></div>;
        if (this.state.questionLoaded) {
            questionContainer = (
                <GameQuestionComp id={this.gameID} title={this.title} introImage={this.introImage} />
            )
        }

        return (
            <div>
                <GameHeader title={this.title} url={this.props.location.pathname} />
                <NavBarComp />
                <div className="row">
                    <div className="col-md-9">
                        {questionContainer}
                    </div>
                    <div className="col-md-3">
                        {/*<RecommendedGames />*/}
                    </div>
                </div>
            </div>
        )
    }
}