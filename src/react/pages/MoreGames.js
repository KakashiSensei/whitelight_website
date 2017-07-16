import React, { Component } from "react";
import * as Requests from "../Requests";
import * as Constants from "../../Constants";
import CardDeckComp from "../components/CardDeckComp";
import { Link } from "react-router-dom";
import * as AppHelper from "../helper/AppHelper";

export default class MoreGames extends Component {
    totalCount;
    currentPage = 1;

    constructor(props) {
        super(props);
        let pathName = this.props.location.pathname;
        this.setInitialState(this.props.location);
        this.state = {
            games: null
        }
    }

    setInitialState(location){
        let urlParams = AppHelper.urlParams(location);
        this.currentPage = +urlParams.pn || this.currentPage;
    }

    componentDidMount() {
        Requests.getAllGames(Constants.PER_PAGE, this.currentPage)
            .then((data) => {
                this.totalCount = data.count;
                this.setState({ "games": data.items })
            })
    }

    componentWillReceiveProps(nextProps) {
        let pathName = nextProps.location.pathname;
        let urlParams = AppHelper.urlParams(nextProps.location);
        if (this.currentPage !== urlParams.pn) {
            this.setInitialState(nextProps.location);
            this.componentDidMount();
        }
    }

    disableRedirection(){
        return false
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
                        <CardDeckComp games={this.state.games} />
                    </div>
                </div>

            let previousButton = <li><a href= 'javascript:void(0);' className="disableLink">Previous</a></li>;
            if (this.currentPage > 1) {
                let url = `/game?pn=${this.currentPage - 1}`;
                previousButton = <li><Link to={url}>Previous</Link></li>
            }

            let nextButton = <li><a href= 'javascript:void(0);' className="disableLink">Next</a></li>;
            if (this.currentPage * Constants.PER_PAGE < this.totalCount) {
                let url = `/game?pn=${this.currentPage + 1}`;
                nextButton = <li><Link to={url}>Next</Link></li>
            }
            pagerButton =
                <ul className="pager">
                    {previousButton}
                    {nextButton}
                </ul>
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {gameComponent}
                    </div>
                </div>
                <div className="centerAlign">
                    {pagerButton}
                </div>
            </div>
        )
    }
}