import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBlock,
    CardTitle
} from 'reactstrap';
import PropTypes from "prop-types";


export default class CardComp extends Component {
    // static propTypes = {
    //     id: PropTypes.string.isRequired,
    //     title: PropTypes.string.isRequired,
    //     iconImage: PropTypes.string.isRequired
    // }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card className="col-md-4">
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBlock>
                    <CardTitle>Card title</CardTitle>
                </CardBlock>
            </Card>
        )
    }
}