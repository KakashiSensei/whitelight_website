import React, { Component } from 'react';
import { CardDeck } from 'reactstrap';
import CardComp from './CardComp';

export default class CardDeckComp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <CardDeck className="row">
                <CardComp/>
                <CardComp/>
                <CardComp/>
                <CardComp/>
                <CardComp/>
                <CardComp/>
                <CardComp/>
                <CardComp/>
                <CardComp/>
                <CardComp/>
                <CardComp/>
                <CardComp/>
            </CardDeck>
        )
    }
}