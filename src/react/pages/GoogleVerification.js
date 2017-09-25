import React, { Component } from "react";

export default class GamePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        debugger;
        var __html = require('../../../google91db4ea908ce0a1f.html');
        var template = { __html: __html };
        console.log(template);
        return (
            <div dangerouslySetInnerHTML={template} />
        )
    }
}