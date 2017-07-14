import React, { Component } from "react";
import VideoDeckComp from "../components/VideoDeckComp";
import FacebookPagePlugin from "../components/FacebookPagePlugin";
import * as Requests from "../Requests";

export default class MoreVideos extends Component {
    constructor(props){
        super(props);
        this.state = {
            videos: null
        }
    }

    componentDidMount(){
        Requests.getAllVideos(9, 1)
            .then((data) => {
                this.setState({ "videos": data.items })
            })
    }

    render(){
        return(
            <div className="container recommendedMargin">
                <div className="row">
                    <div className="col-md-9">
                        <div className="row">
                            <div className="topic">
                                Watch Videos
                            </div>
                            <div>
                                <VideoDeckComp videos={this.state.videos} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <FacebookPagePlugin />
                    </div>
                </div>
            </div>
        )
    }
}