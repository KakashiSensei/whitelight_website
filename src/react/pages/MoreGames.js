import React, { Component } from "react";
import * as Requests from "../Requests";
import * as Constants from "../../Constants";
import CardDeckComp from "../components/CardDeckComp";
import { Link } from "react-router-dom";
import * as AppHelper from "../helper/AppHelper";
import FacebookPagePlugin from "../components/FacebookPagePlugin";

if (process.env.BROWSER) {
    require('../../css');
}

export default class MoreGames extends Component {
    totalCount;
    currentPage = 1;
    nextGames = null;
    previousGames = null;
    currentGames = null;

    constructor(props) {
        super(props);
        let pathName = this.props.location.pathname;
        this.setInitialState(this.props.location);
        this.state = {
            games: null
        }
    }

    setInitialState(location) {
        let urlParams = AppHelper.urlParams(location);
        this.currentPage = +urlParams.pn || this.currentPage;
    }

    componentDidMount() {
        if (this.currentGames === null) {
            Requests.getAllGames(Constants.PER_PAGE, this.currentPage)
                .then((data) => {
                    this.totalCount = data.count;
                    this.setState({ "games": data.items })
                })
        } else {
            this.setState({ "games": this.currentGames });
            this.currentGames = null;
        }

        Requests.getAllGames(Constants.PER_PAGE, this.currentPage + 1)
            .then((data) => {
                this.nextGames = data.items;
            })

        if (this.currentPage > 1) {
            Requests.getAllGames(Constants.PER_PAGE, this.currentPage - 1)
                .then((data) => {
                    this.nextGames = data.items;
                })
        }
    }

    componentWillReceiveProps(nextProps) {
        let pathName = nextProps.location.pathname;
        let urlParams = AppHelper.urlParams(nextProps.location);
        if (this.currentPage !== urlParams.pn) {
            this.setInitialState(nextProps.location);
            this.componentDidMount();
        }
    }

    disableRedirection() {
        return false;
    }

    pushNewState(currentPage) {
        if (currentPage > this.currentPage) {
            this.currentGames = this.nextGames;
        } else {
            this.currentGames = this.previousGames;
        }
        this.nextGames = null;
        this.previousGames = null;

        let location = `/game?pn=${currentPage}`;
        this.props.history.push(location);
    }

    render() {
        let pagerButton = <div></div>;
        let gameComponent = <div></div>
        if (this.state.games) {
            gameComponent =
                <div>
                    <div className="topic">
                        Games
                        </div>
                    <div>
                        <CardDeckComp games={this.state.games} contentPos="main" />
                    </div>
                </div>

            let previousButton = <li><a href='javascript:void(0);' className="disableLink">Previous</a></li>;
            if (this.currentPage > 1) {
                previousButton = <li onClick={() => this.pushNewState(this.currentPage - 1)}><Link to="#">Previous</Link></li>
            }

            let nextButton = <li><a href='javascript:void(0);' className="disableLink">Next</a></li>;
            if (this.currentPage * Constants.PER_PAGE < this.totalCount) {
                nextButton = <li onClick={() => this.pushNewState(this.currentPage + 1)}><Link to="#">Next</Link></li>
            }
            pagerButton =
                <ul className="pager">
                    {previousButton}
                    {nextButton}
                </ul>
        }

        return (
            <div className="container">
                <div className="row containerMargin">
                    <div className="col-md-8">
                        {gameComponent}
                        <div className="centerAlign">
                            {pagerButton}
                        </div>
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