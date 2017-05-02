import React, { Component } from "react";
import GameHeader from "../headers/GameHeader";

export default class HomePage extends Component {
    title;
    gameID;

    constructor(props) {
        super(props);
        let pathName = this.props.location.pathname;
        let queryString = this.props.location.search.substring(1);
        this.urlParams = JSON.parse('{"' + decodeURI(queryString).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');

        this.title = this.urlParams["title"];

        this.gameID = pathName.split("/").pop();
        this.state = {
            introImage: null,
            title: null,
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <GameHeader title={this.title} imageURL="https://cdn.psychologytoday.com/sites/default/files/blogs/1023/2013/01/115847-113843.jpg" url={this.props.location.pathname}/>
                GamePage
            </div>
        )
    }
}