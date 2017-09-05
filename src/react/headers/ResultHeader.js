import React, { Component } from "react";
import { Helmet, title } from "react-helmet";
import * as config from "../../config";
import { PropTypes } from "prop-types";
import decode from "urldecode";
import * as helper from "../helper/AppHelper";

export default class ResultHeader extends Component {

    static propTypes = {
        url: PropTypes.shape({}).isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }

    constructor(props){
        super(props);
    }

    render() {
        let regEx = new RegExp(/[+]/g);
        let website = this.props.url;
        let params = helper.urlParams(website);
        let imageURL = config.questionContainer + "/" + params.image;

        return (
            <Helmet>
                <meta charSet="utf-8" />
                <title>{decode(decode(this.props.title).replace(regEx, " "))}</title>
                <meta name="description" content={decode(decode(this.props.description).replace(regEx, " "))} />
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                <meta name="viewport" content="width=device-width, height=device-height,  initial-scale=1" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="googlebot" content="noindex" />
                <meta property="fb:app_id" content={config.appID} />
                <meta property="fb:admins" content={config.adminID} />
                <meta property="og:site_name" content={config.website} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={this.props.image} />
                <meta property="og:url" content={this.props.url} />
                <meta property="og:image:secure_url" content={this.props.url} />
                <meta property="og:image:width" content="698"/>
                <meta property="og:image:height" content="367"/>
            </Helmet>
        )
    }
}