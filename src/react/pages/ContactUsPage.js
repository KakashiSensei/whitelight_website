import React, { Component } from "react";
import HomeHeader from "../headers/HomeHeader";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
    }

    render() {
        return (
            <div>
                <HomeHeader />
                <div className="centerAlign falseSize">
                    <div className="linePadding">
                        Complaints & Suggestions <b><a href="mailto:message@whitelight.social">message@whitelight.social</a></b>
                    </div>
                    <div className="linePadding">
                        ( Like something? Hate something? Want to change something? We’d love to hear about all three.)
                    </div>
                    <div className="linePadding">
                        For Promos & Partnerships: <b><a href="mailto:media@whitelight.social">media@whitelight.social</a></b>
                    </div>
                    <div className="linePadding">
                        (Want to create something beautiful together? Write to us and let’s make it happen!)
                    </div>
                </div>
            </div>
        )
    }
}