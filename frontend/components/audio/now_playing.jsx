import React from 'react';
import { Link } from 'react-router-dom'

class NowPlaying extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            title: this.props.track.title,
            artist: this.props.track.artist_name
        }
    }

    render () {
        return (
            <div className="now-playing">
                <div className="cover-art">
                    <img src={this.props.track.cover_art}/>
                </div>
                <div className="track-desc">
                    <span className="track-title">{this.props.track.title}</span>
                    <span className="track-artist">{this.props.track.artist_name}</span>
                </div>
            </div>
        )
    }
}

export default NowPlaying