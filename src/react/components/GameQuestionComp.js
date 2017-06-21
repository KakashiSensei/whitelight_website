import React, { Component } from "react";
import { PropTypes } from "prop-types";
import config from "../../config";
import { Button } from 'reactstrap';

export default class GameQuestionComp extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        introImage: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        callbackFunction: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="gameContainer addShadow">
                <div className="gameOuterMargin">
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
                            <Button className="loginButton" size="lg" onClick={this.props.callbackFunction.bind(this)}>
                                <span className="facebookIcon loginIcon"></span>
                                <span>Login with Facebook</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}