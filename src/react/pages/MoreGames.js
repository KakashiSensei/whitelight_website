import React, { Component } from "react";
import CardDeckComp from "../components/CardDeckComp";
import FacebookPagePlugin from "../components/FacebookPagePlugin";
import * as Requests from "../Requests";

export default class MoreGames extends Component {
    constructor(props){
        super(props);
        this.state = {
            games: null
        }
    }

    componentDidMount(){
        Requests.getAllGames(9, 1)
            .then((data) => {
                this.setState({ "games": data.items })
            })
    }

    render(){
        return(
            <div className="container recommendedMargin">
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
                    </div>
                    <div className="col-md-3">
                        <FacebookPagePlugin />
                    </div>
                </div>
            </div>
        )
    }
}