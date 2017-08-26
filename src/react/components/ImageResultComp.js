import React, { Component } from "react";
import { PropTypes } from "prop-types";
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
            <div className="gameOuterMargin gameContainer centerAlign addShadow" onClick={this.props.callbackFunction.bind(this)}>
                <div className="col-md-12 centerAlign gameTitle">
                    {this.props.title}
                </div>
                <div className="row">
                    <div className="col-md-12 centerAlign">
                        <img className="imageSize" src={this.props.resultImage}></img>
                    </div>
                </div>
                <div className="row">
                    <div style={divStyle} className="col-md-12">
                        <div className="innerTextPadding">
                            {parsedElement}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-md-push-3 centerAlign">
                        <Button className="shareButton" size="lg" block>
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