import React, { Component } from "react";
import { PropTypes } from "prop-types";
import config from "../../config";
import { Button } from 'reactstrap';
import Parser from "html-react-parser";

export default class ImageResultComp extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        resultImage: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        callbackFunction: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
    }

    render() {
        let parsedElement = <div></div>;
        let divStyle = {};
        if (this.props.outputText) {
            parsedElement = Parser(this.props.outputText);
            divStyle = {
                textAlign: "left",
            }
        }

        return (
            <div className="gameOuterMargin gameContainer centerAlign addShadow">
                <div className="row">
                    <div className="col-md-12 centerAlign gameTitle">
                        {this.props.title}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 centerAlign">
                        <img className="imageSize" src={this.props.resultImage}></img>
                        <div className="row">
                            <div style={divStyle} className="innerTextPadding col-md-12">
                                {parsedElement}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-md-push-4 centerAlign">
                        <Button className="loginButton" size="lg" onClick={this.props.callbackFunction.bind(this)}>
                            <span className="loginIcon">
                                <img src="/src/asset/f_logo_with_white_back.png" />
                            </span>
                            <span>Share on Facebook</span>
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}