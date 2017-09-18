import React, { Component } from "react";
import VideoDeckComp from "../components/VideoDeckComp";
import FacebookPagePlugin from "../components/FacebookPagePlugin";
import * as Requests from "../Requests";
import { Link } from "react-router-dom";
import * as AppHelper from "../helper/AppHelper";
import * as Constants from "../../Constants";

if (process.env.BROWSER) {
    require('../../css');
}

export default class MoreVideos extends Component {
    constructor(props) {
        super(props);
        let pathName = this.props.location.pathname;
        this.setInitialState(this.props.location);
        this.state = {
            videos: null
        }
    }

    setInitialState(location) {
        let urlParams = AppHelper.urlParams(location);
        this.currentPage = +urlParams.pn || this.currentPage;
    }

    componentDidMount() {
        Requests.getAllVideos(Constants.PER_PAGE, this.currentPage)
            .then((data) => {
                this.totalCount = data.count;
                this.setState({ "videos": data.items })
            })
    }

    componentWillReceiveProps(nextProps) {
        let pathName = nextProps.location.pathname;
        let urlParams = AppHelper.urlParams(nextProps.location);
        if (this.currentPage !== urlParams.pn) {
            this.setInitialState(nextProps.location);
            this.componentDidMount();
        }
    }

    disableRedirection() {
        return false
    }

    render() {
        let pagerButton = <div></div>;
        let videoComponent = <div></div>
        if (this.state.videos) {
            videoComponent =
                <div>
                    <div className="topic">
                        Videos
                        </div>
                    <div>
                        <VideoDeckComp videos={this.state.videos} />
                    </div>
                </div>

            let previousButton = <li><a href='javascript:void(0);' className="disableLink">Previous</a></li>;
            if (this.currentPage > 1) {
                let url = `/video?pn=${this.currentPage - 1}`;
                previousButton = <li><Link to={url}>Previous</Link></li>
            }

            let nextButton = <li><a href='javascript:void(0);' className="disableLink">Next</a></li>;
            if (this.currentPage * Constants.PER_PAGE < this.totalCount) {
                let url = `/video?pn=${this.currentPage + 1}`;
                nextButton = <li><Link to={url}>Next</Link></li>
            }
            pagerButton =
                <ul className="pager">
                    {previousButton}
                    {nextButton}
                </ul>
        }

        return (
            <div className="container recommendedMargin">
                <div className="row containerMargin">
                    <div className="col-md-8">
                        {videoComponent}
                        <div className="centerAlign">
                            {pagerButton}
                        </div>
                    </div>
                    <div className="col-md-4 recommendedMargin">
                        <div className="padding15">
                            <div>
                                <FacebookPagePlugin />
                            </div>
                            <div className="paddingRecommendedQuote">
                                <div>
                                    <h4>
                                        Quote of the day
                                </h4>
                                </div>
                                <div className="paddingRecommendedQuote">
                                    <div>
                                        <img className="imageSize roundedCorner" src="https://whitelight-quiz-questions.s3.amazonaws.com/GroupImage.png"></img>
                                    </div>
                                    <div className="recommendedQuote">
                                        You can do it.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}