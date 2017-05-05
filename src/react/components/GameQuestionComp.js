import React, { Component } from "react";
import { PropTypes } from "prop-types";
import config from "../../config";
import { Button } from 'reactstrap';
import fbWhite from "../../asset/f_logo_with_white_back.png";

export default class GameQuestionComp extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        introImage: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
    }

    render() {
        let fbIcon = fbWhite || "/src/asset/f_logo_with_white_back.png";
        console.log(fbIcon);
        return (
            <div className="gameContainer">
                <div className="row">
                    <div className="col-md-12 centerAlign gameTitle">
                        {this.props.title}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 centerAlign gameImageContainer">
                        <img className="imageSize" src={this.props.introImage} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-md-push-4 centerAlign">
                        <Button className="loginButton" size="lg">
                            <img src={require("../../asset/f_logo_with_white_back.png")}></img>
                            <span>Login with Facebook</span>
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}