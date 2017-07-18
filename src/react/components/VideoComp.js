import React, { Component } from 'react';
import { Card, CardImg, CardBlock, CardTitle } from 'reactstrap';
import PropTypes from "prop-types";
import Requests from "../Requests";

export default class CardComp extends Component {
    static propType = {
        id: PropTypes.string.isRequired,
        videoID: PropTypes.string.isRequired,
        videoClicked: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            videoThumb: null,
            videoTitle: null
        }
    }

    componentDidMount(){
        Requests.getVideoDetails(this.props.videoID)
            .then((data) => {
                console.log("Video Detail", data.items[0].snippet.thumbnails.high.url);
                this.setState({
                    videoThumb: data.items[0].snippet.thumbnails.high.url,
                    videoTitle: data.items[0].snippet.title
                })
            })
    }

    render(){
        if(!this.state.videoThumb || !this.state.videoTitle){
            return <div></div>
        }

        return(
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <Card onClick={()=>{this.props.videoClicked(this.props.videoID)}}>
                        <div>
                            <CardImg className="roundedCorner" top width="100%" src={this.state.videoThumb} alt="Card image cap" />
                            <CardBlock>
                                <CardTitle width="100%" className="questionTitle">{this.state.videoTitle}</CardTitle>
                            </CardBlock>
                        </div>
                        <br />
                    </Card>
            </div>
        )
    }
}