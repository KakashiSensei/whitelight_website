import React, { Component } from "react";
import NavBar from "../components/NavBar";
if ( process.env.BROWSER ) {
    require('../../css');
    // const bgImage = require('../../asset/logo.png');
}

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "games": null
        }
        this.getGames();
    }

    componentDidMount() {
    }

    getGames() {

    }

    render() {
        let bgImage = bgImage || "image.png";
        return (
            <div className="container">
                <div className="row">
                    <img src={bgImage}/>
                    Hello World
                </div>
            </div>
        )
    }
}