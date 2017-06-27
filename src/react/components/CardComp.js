import React, { Component } from 'react';
import { Card, CardImg, CardBlock, CardTitle } from 'reactstrap';
import PropTypes from "prop-types";
import config from "../../config";
import { Link } from "react-router-dom";

export default class CardComp extends Component {
    static propType = {
        id: PropTypes.string.isRequired,
        introImage: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }

    constructor(props) {
        super(props);
    }

    render() {
        let url = "/game/" + this.props.id + "?title=" + this.props.title;
        return (
            <Link to={url}>
                <Card block className="col-xs-6 col-sm-6 col-md-4 col-lg-4 rollOver">
                    <div>
                        <CardImg top width="100%" src={this.props.introImage} alt="Card image cap" />
                        <CardBlock>
                            <CardTitle width="100%" className="questionTitle">{this.props.title}</CardTitle>
                        </CardBlock>
                    </div>
                    <br />
                </Card>
            </Link>
        )
    }
}