import React, { Component } from 'react';
import { CardDeck } from 'reactstrap';
import VideoComp from './VideoComp';
import PropTypes from "prop-types";
import YoutubeEmbedVideo from 'youtube-embed-video';

export default class VideoDeckComp extends Component {
    videoIDClicked = null;

    static propType = {
        videos: PropTypes.shape({
            _id: PropTypes.string.isRequired,
            videoID: PropTypes.string.isRequired,
        }).isRequired,
    }

    constructor(props) {
        super(props);
        this.state = {
            playVideo: false
        }

        this.videoClicked = this.videoClicked.bind(this);
        this.hideVideo = this.hideVideo.bind(this);
    }

    videoClicked(videoID){
        this.videoIDClicked = videoID;
        this.setState({
            playVideo: true
        })
    }

    hideVideo(){
        this.setState({
            playVideo: false
        })
    }

    render(){
        let overlayVideo = <div></div>
        if(this.state.playVideo){
            overlayVideo = 
                <div className="youtubeVideoDisplay" onClick={this.hideVideo}>
                    <div className="fullWindow">
                        <YoutubeEmbedVideo videoId={this.videoIDClicked} suggestions={false}></YoutubeEmbedVideo>
                    </div>
                </div> 
        }
        return(
            <div>
                <div>{overlayVideo}</div>
                <CardDeck className="row">
                    {this.props.videos && this.props.videos.map((element, index)=>{
                        return (<VideoComp key={element._id} id={element._id} videoID={element.videoID} videoClicked={this.videoClicked}/>);
                    })}
                </CardDeck>
            </div>
        )
    }
}