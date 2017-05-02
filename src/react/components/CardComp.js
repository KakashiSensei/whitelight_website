import React, { Component } from 'react';
import { Card, CardImg, CardBlock, CardTitle } from 'reactstrap';
import PropTypes from "prop-types";
import config from "../../config";

export default class CardComp extends Component {
    static propType = {
        id: PropTypes.string.isRequired,
        introImage: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        callBackFunction: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
    }

    render() {
        let url = "/game/" + this.props.id + "?title=" + this.props.title;
        return (
            <Card className="col-md-4 rollOver" onClick={this.props.callBackFunction.bind(this, url)}>
                    <CardImg top width="100%" src={this.props.introImage} alt="Card image cap" />
                    <CardBlock>
                        <CardTitle className="questionTitle">{this.props.title}</CardTitle>
                    </CardBlock>
            </Card>
        )
    }
}