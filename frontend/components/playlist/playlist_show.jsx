import React from 'react';

class PlaylistShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPlaylist(this.props.playlistId)
    }

    loadTrack(id) {
        this.props.load(id);
    }

    tracks() {
        const playlist = this.props.playlist[this.props.playlistId]
        const tracks = playlist.tracks
        if (tracks) {
            return tracks.map(track =>
                <li className="list-item">
                    <button onClick={() => this.loadTrack({ id: track.id })}
                        className="track-button" > {track.title}
                    </button>
                </li>
            )
        }
    }

    render() {
        const playlist = this.props.playlist[this.props.playlistId]
        if (playlist) {
            debugger
            return (
                <div className="artist-show">
                    <div className="artist-image-container">
                        <img src={playlist.cover_art} className="artist-image" />
                    </div>
                    <h4 className="artist-show-tag">PLAYLIST</h4>
                    <h1 className="artist-show-header">{playlist.title}</h1>
                    <div className="artist-tracks-container">
                        <ul className="artist-tracks-list">
                            {this.tracks()}
                        </ul>
                    </div>

                </div>
            )
        }
        else {
            return (<h1></h1>)
        }
    }
}

export default PlaylistShow;