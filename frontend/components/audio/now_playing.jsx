import React from 'react';
import { Link, NavLink } from 'react-router-dom'

class NowPlaying extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            title: this.props.track.title,
            artist: this.props.track.artist_name
        }
    }

formatTitle () {
    let title = this.props.track.title 
    if (title && title.length > 17) {
        title = title.slice(0, 12) + "..."
    }
    return title
}

    render () {
        // debugger
        return (
            <div className="now-playing">
                <div className="cover-art">
                    <img src={this.props.track.cover_art}/>
                </div>
                <div className="track-desc">
                    <span className="track-title">{this.formatTitle()}</span>
                    {/* <span className="track-artist">{this.props.track.artist_name}</span> */}
                    <span className="track-artist">
                        <NavLink 
                            exact to={{
                                pathname: "/artist",
                                artist_id: `${this.props.track.artist_id}`
                            }}
                            className="track-artist-link" >
                            {this.props.track.artist_name}
                        </NavLink>
                    </span>
                </div>
            </div>
        )
    }
}

export default NowPlaying