import React, { Component } from "react";
import VideoDeckComp from "../components/VideoDeckComp";
import FacebookPagePlugin from "../components/FacebookPagePlugin";
import * as Requests from "../Requests";

export default class MoreVideos extends Component {
    constructor(props) {
        super(props);
        let pathName = this.props.location.pathname;
        this.setInitialState(this.props.location);
        this.state = {
            videos: null
        }
    }

    setInitialState(location){
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

    disableRedirection(){
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
                        <CardDeckComp videos={this.state.videos} />
                    </div>
                </div>

            let previousButton = <li><a href= 'javascript:void(0);' className="disableLink">Previous</a></li>;
            if (this.currentPage > 1) {
                let url = `/video?pn=${this.currentPage - 1}`;
                previousButton = <li><Link to={url}>Previous</Link></li>
            }

            let nextButton = <li><a href= 'javascript:void(0);' className="disableLink">Next</a></li>;
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
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {videoComponent}
                    </div>
                </div>
                <div className="centerAlign">
                    {pagerButton}
                </div>
            </div>
        )
    }
}