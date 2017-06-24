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
        this.loadImage = this.loadImage.bind(this);
        this.state = {
            imageLoaded: false
        }
    }

    loadImage() {
        fetch(this.props.introImage, { method: "GET" })
            .then((res) => {
                this.setState({
                    imageLoaded: true
                })
            })
    }

    cardClicked(e) {
        let url = "/game/" + this.props.id + "?title=" + this.props.title;
        this.props.callBackFunction(url);
    }

    render() {
        let loadingImage = "/src/asset/loading.png";

        let loaderImageClass = {};
        let iconImageClass = {display: "none"};
        let loaderAnimation = "loader positionLoader";
        if (this.state.imageLoaded) {
            loaderAnimation = "";
            loaderImageClass = {display: "none"};
            iconImageClass = {};
        }

        return (
            <Card className="col-xs-6 col-sm-6 col-md-4 col-lg-4 rollOver" onClick={this.cardClicked}>
                <div className={loaderAnimation}></div>
                <CardImg top width="100%" style={loaderImageClass} src={loadingImage} alt="Card image cap" />
                <CardImg top width="100%" style={iconImageClass} src={this.props.introImage} alt="Card image cap" onLoad={this.loadImage}/>
                <CardBlock>
                    <CardTitle width="100%" className="questionTitle">{this.props.title}</CardTitle>
                </CardBlock>
            </Card>
        )
    }
}