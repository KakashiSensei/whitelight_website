import React, { Component } from 'react';
import { Card, CardImg, CardBlock, CardTitle } from 'reactstrap';
import PropTypes from "prop-types";
import Requests from "../Requests";

export default class CardComp extends Component {
    playXPos;
    playYPos;

    static propType = {
        id: PropTypes.string.isRequired,
        videoID: PropTypes.string.isRequired,
        videoClicked: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);
        this.state = {
            videoThumb: null,
            videoTitle: null,
            thumbLoaded: null
        }
        this.imageLoaded = this.imageLoaded.bind(this);
    }

    componentDidMount() {
        Requests.getVideoDetails(this.props.videoID)
            .then((data) => {
                console.log("Video Detail", data.items[0].snippet.thumbnails.high.url);
                this.setState({
                    videoThumb: `http://img.youtube.com/vi/${this.props.videoID}/mqdefault.jpg`,
                    videoTitle: data.items[0].snippet.title
                })
            })
    }

    imageLoaded(e) {
        let target = e.currentTarget;
        this.playXPos = target.clientWidth / 2;
        this.playYPos = target.clientHeight / 2;
        console.log(this.playXPos, this.playYPos);
        this.setState({
            thumbLoaded: true
        })
    }

    render() {
        if (!this.state.videoThumb || !this.state.videoTitle) {
            return <div></div>
        }

        let playButton = <div></div>
        if (this.state.thumbLoaded) {
            let css = `top:${this.playYPos};left:${this.playXPos}`;
            playButton = <img style={{top: this.playYPos + "px", left: this.playXPos + "px"}} className="playButton" src="/src/asset/play.png" />;
        }

        return (
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <Card onClick={() => { this.props.videoClicked(this.props.videoID) }}>
                    <div>
                        <div>
                            {playButton}
                            <CardImg className="roundedCorner" top width="100%" src={this.state.videoThumb} alt="Card image cap" onLoad={this.imageLoaded}/>
                        </div>
                        <div>
                            <CardBlock>
                                <CardTitle width="100%" className="questionTitle">{this.state.videoTitle}</CardTitle>
                            </CardBlock>
                        </div>
                    </div>
                    <br />
                </Card>
            </div>
        )
    }
}