import React, { Component } from "react";

export default class FacebookPagePlugin extends Component {
    render() {
        return (
            <div className="iframeContainer">
                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fwhitelight.social%2F&tabs&width=340&height=214&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=399964337042548" className="iframeProp" scrolling="no" frameBorder="0" allowTransparency="true"></iframe>
            </div>
        );
    }
}