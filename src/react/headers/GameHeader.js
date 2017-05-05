import React, { Component } from "react";
import { Helmet, title } from "react-helmet";
import * as config from "../../config";

export default class GameHeader extends Component {
    constructor(props){
        super(props)
    }

    render() {
        let title = this.props.title
        let website = this.props.url;
        return (
            <Helmet>
                <meta charSet="utf-8" />
                <title>White Light</title>
                <meta name="description" content={title} />
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                <meta name="viewport" content="width=device-width, height=device-height,  initial-scale=1" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="googlebot" content="noindex" />
                <meta property="fb:app_id" content={config.appID} />
                <meta property="fb:admins" content={config.adminID} />
                <meta property="og:site_name" content={config.website} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={website} />
                <meta property="og:image" content="https://support.apple.com/content/dam/edam/applecare/images/en_US/iphone/featured-content-iphone-transfer-content-ios10_2x.png" />
            </Helmet>
        )
    }
}