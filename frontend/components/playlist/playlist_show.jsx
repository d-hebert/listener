import React from 'react';
import AddSongButton from './add_song_button'

class PlaylistShow extends React.Component {
    constructor(props) {
        super(props)
        
        this.audio = document.getElementsByClassName("html5-player")[0]
    }

    componentDidMount() {
        this.props.fetchPlaylist(this.props.playlistId)
    }

    loadTrack(id, audio) {
        this.props.load(id);
        audio.play();
    }


    tracks() {
        const playlist = this.props.playlists[this.props.playlistId]
        const tracks = playlist.tracks
        const audio = document.getElementsByClassName("html5-player")[0]
        if (tracks) {
            return tracks.map(track =>
                <li className="list-item">
                    <button onClick={() => this.loadTrack({ id: track.id }, audio)}
                        className="track-button" > {track.title}
                    </button>
                    <AddSongButton /> 
                </li>
            )
        }
    }

    render() {
        const playlist = this.props.playlists[this.props.playlistId]
        if (playlist) {
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