import React, { Component } from "react";
import { Jumbotron } from 'reactstrap';
import bgImage from "../../asset/bgimage.png";

export default class JumbotronComp extends Component {
    render() {
        let bgImage = bgImage || "/src/asset/bgimage.png";
        return (
            <Jumbotron>
                <img className="imageSize" src={bgImage} />
            </Jumbotron>
        )
    }
}