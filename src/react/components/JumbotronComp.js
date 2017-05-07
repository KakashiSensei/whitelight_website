import React, { Component } from "react";
import { Jumbotron } from 'reactstrap';

export default class JumbotronComp extends Component {
    render() {
        let bgImage = bgImage || "/src/asset/bgimage.png";
        return (
            <Jumbotron>
                <div className="jumbotronImage imageSize"></div>
            </Jumbotron>
        )
    }
}