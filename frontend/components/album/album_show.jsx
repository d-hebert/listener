import React from 'react';
import AddSongButton from '../playlist/add_song_button_container';

class AlbumShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.props.fetchOneAlbum(this.props.albumId)
    }
    
    componentDidMount() {
        if (this.props.albums == {}) {
            this.props.fetchOneAlbum(this.props.albumId)
        }
    }

    loadTrack(id, audio) {
        this.props.load(id);
        audio.play();
    }

    tracks() {
        const album = this.props.albums[this.props.albumId]
        const tracks = album.tracks
        const audio = document.getElementsByClassName("html5-player")[0]
        if (tracks) {
            return tracks.map(track =>
                <li className="list-item">
                    <button onClick={() => this.loadTrack({ id: track.id }, audio)}
                        className="track-button" > {track.title}
                    </button>
                    <AddSongButton trackId={track.id} />
                </li>
            )
        }
    }

    render() {
        const album = this.props.albums[this.props.albumId]
        if (album) {
            return (
                <div className="artist-show">
                    <div className="artist-image-container">
                        <img src={album.cover_art} className="artist-image" />
                    </div>
                    <h4 className="artist-show-tag">ALBUM</h4>
                    <h1 className="artist-show-header">{album.title}</h1>
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

export default AlbumShow;