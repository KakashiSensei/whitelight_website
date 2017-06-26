import React, { Component } from 'react';
import { Card, CardImg, CardBlock, CardTitle } from 'reactstrap';
import PropTypes from "prop-types";
import config from "../../config";

export default class CardComp extends Component {
    static propType = {
        id: PropTypes.string.isRequired,
        introImage: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        callBackFunction: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);
        this.cardClicked = this.cardClicked.bind(this);
    }

    cardClicked(e) {
        let url = "/game/" + this.props.id + "?title=" + this.props.title;
        this.props.callBackFunction(url);
    }

    render() {
        return (
            <Card block className="col-xs-6 col-sm-6 col-md-4 col-lg-4 rollOver" onClick={this.cardClicked}>
                <div>
                    <CardImg top width="100%" src={this.props.introImage} alt="Card image cap" />
                    <CardBlock>
                        <CardTitle width="100%" className="questionTitle">{this.props.title}</CardTitle>
                    </CardBlock>
                </div>
                <br />
            </Card>
        )
    }
}