import React, { Component } from 'react';
import { CardDeck } from 'reactstrap';
import CardComp from './CardComp';
import PropTypes from "prop-types";

export default class CardDeckComp extends Component {
    static propType = {
        games: PropTypes.shape({
            _id: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            introImage: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
        }).isRequired,
        contentPos: PropTypes.string
    }

    constructor(props) {
        super(props);
    }

    componentDidMount(){

    }

    render() {
        return (
            <CardDeck className="row">
                {this.props.games && this.props.games.map((element, index)=>{
                    return (<CardComp key={element._id} id={element._id} title={element.title} introImage={element.introImage} description={element.description} contentPos={this.props.contentPos}/>);
                })}
            </CardDeck>
        )
    }
}