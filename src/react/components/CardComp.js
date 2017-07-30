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
        description: PropTypes.string.isRequired,
        contentPos: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
    }

    render() {
        console.log("description", this.props.description);
        let image = this.props.introImage.split("/");
        let url = "/game/" + this.props.id + "?title=" + this.props.title + "&image=" + image[image.length - 1] + "&description=" + this.props.description;
        let appliedClass = "col-xs-12 col-sm-12 col-md-6 col-lg-6";
        if (this.props.contentPos === "side") {
            appliedClass = "col-xs-12 col-sm-12 col-md-12 col-lg-12";
        }
        return (
            <div className={appliedClass}>
                <Link to={url}>
                    <Card>
                        <div>
                            <CardImg className="roundedCorner" top width="100%" src={this.props.introImage} alt="Card image cap" />
                            <CardBlock>
                                <CardTitle width="100%" className="questionTitle">{this.props.title}</CardTitle>
                            </CardBlock>
                        </div>
                        <br />
                    </Card>
                </Link>
            </div>
        )
    }
}