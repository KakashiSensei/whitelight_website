import React, { Component } from "react";
import { Jumbotron } from 'reactstrap';

export default class JumbotronComp extends Component {
    render() {
        return (
            <Jumbotron>
                <img className="imageSize" src="/src/asset/bgimage.png"/>
            </Jumbotron>
        )
    }
}