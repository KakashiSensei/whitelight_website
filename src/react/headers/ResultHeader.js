import React, { Component } from "react";
import { Helmet, title } from "react-helmet";
import * as config from "../../config";
import { PropTypes } from "prop-types";

export default class ResultHeader extends Component {

    static propTypes = {
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    }

    constructor(props){
        super(props);
    }

    render() {
        return (
            <Helmet>
                <meta charSet="utf-8" />
                <title>White Light</title>
                <meta name="description" content={this.props.title} />
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                <meta name="viewport" content="width=device-width, height=device-height,  initial-scale=1" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="googlebot" content="noindex" />
                <meta property="fb:app_id" content={config.appID} />
                <meta property="fb:admins" content={config.adminID} />
                <meta property="og:site_name" content={config.website} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={this.props.url} />
                <meta property="og:image" content={this.props.image} />
                <meta property="og:image:width" content="698"/>
                <meta property="og:image:height" content="367"/>
            </Helmet>
        )
    }
}