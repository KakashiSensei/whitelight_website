import React, { Component } from "react";
import { Helmet, title } from "react-helmet";
import * as config from "../../config";

export default class HomeHeader extends Component {
    render() {
        let imageURL = "https://scontent-sin6-1.xx.fbcdn.net/v/t31.0-8/17157436_211385332672148_579550780088126766_o.jpg?oh=b03f3449493b1d847523ecdc4f73346d&oe=597FECCF";
        return (
            <Helmet>
                <meta charSet="utf-8" />
                <title>White Light</title>
                <meta name="description" content="White Light - be positive" />
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                <meta name="viewport" content="width=device-width, height=device-height,  initial-scale=1" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="googlebot" content="noindex" />
                <meta property="fb:app_id" content={config.appID} />
                <meta property="fb:admins" content={config.adminID} />
                <meta property="og:site_name" content={config.website} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={config.website} />
                <meta property="og:image" content={imageURL} />
            </Helmet>
        )
    }
}