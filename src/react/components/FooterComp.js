import React, { Component } from 'react';

export default class FooterComp extends Component {
    render() {
        return (
            <div className="footerBody footerTopMargin">
                <div className="container">
                    <div className="row brand-font centerAlign">
                        <a href='/'>White Light</a>
                    </div>
                    <div className="row centerAlign marginLinkFooter">
                        <a className="marginBetweenText" href='/'>Home</a>
                        <a className="marginBetweenText" href='/'>Contact Us</a>
                        <a className="marginBetweenText" href='/'>Privacy</a>
                    </div>
                    <div className="row centerAlign marginLinkFooter footerDisclamerColor">
                        Disclaimer: All content is provided for fun and entertainment purposes only.
                    </div>
                </div>
            </div>
        )
    }
}