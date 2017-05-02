import React, { Component } from 'react';
import { CardDeck } from 'reactstrap';
import CardComp from './CardComp';
import PropTypes from "prop-types";

export default class CardDeckComp extends Component {
    static propType = {
        games: PropTypes.shape({
            id: PropTypes.string,
            introImage: PropTypes.string,
            title: PropTypes.string
        }).isRequired,
        callBackFunction: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <CardDeck className="row">
                {this.props.games && this.props.games.map((element, index)=>{
                    return (<CardComp key={element.id} id={element.id} title={element.title} introImage={element.introImage} callBackFunction = {this.props.callBackFunction}/>);
                })}
            </CardDeck>
        )
    }
}