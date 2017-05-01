import React, { Component } from "react";
import NavBarComp from "../components/NavBarComp";
import FacebookPagePlugin from "../components/FacebookPagePlugin";
import JumbotronComp from "../components/JumbotronComp";
import * as config from "../../config";
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
import CardDeckComp from "../components/CardDeckComp";

if (process.env.BROWSER) {
    require('../../css');
    require('../../asset/font/Molleat.otf');
}

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "games": null,
            "fbLoaded": false
        }
    }

    componentDidMount() {
        let gameUrl = config.domainName + '/api/game';
        let promise = fetch(gameUrl, { method: 'GET' })
            .then(res => res.json())
        promise.then((data) => {
            this.setState({ "games": data })
        })

        // loading the facebook plugin after FB is loaded
        if(window.FB){
            this.setState({fbLoaded: true});
        }else{
            document.addEventListener('fb_init', (e) => {
                FB.XFBML.parse()
                this.setState({fbLoaded: true});
            });
        }
    }

    render() {
        let facebookPlugin = <div></div>;
        if (this.state.fbLoaded) {
            facebookPlugin = <FacebookPagePlugin />
        }
        return (
            <div>
                <NavBarComp />
                <JumbotronComp />
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="centerAlign topic">
                                Play Games
                            </div>
                            <div>
                                <CardDeckComp/>
                            </div>

                        </div>
                        <div className="col-md-3">
                            {facebookPlugin}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}