import React from 'react';
import AddSongButton from '../playlist/add_song_button_container'

class ArtistShow extends React.Component {
    constructor (props) {
        super (props)
    }

    componentDidMount () {
        this.props.fetchArtist(this.props.artistId)
    }

    loadTrack (id) {
        this.props.load(id);
    }

    tracks () {
        const tracks = this.props.artist.tracks
        if (tracks) {
        return tracks.map(track => 
            <li className="list-item">
                <button onClick={() => this.loadTrack({id: track.id})}
                    className="track-button" > {track.title}
                </button>
                <AddSongButton trackId={track.id} />          
            </li> 
            )
        }
    }

    render () {
        if (this.props.artist) {
            return (
                <div className="artist-show">
                    <div className="artist-image-container">
                        <img src={this.props.artist.image} className="artist-image" />
                    </div>
                        <h4 className="artist-show-tag">ARTIST</h4>
                        <h1 className="artist-show-header">{this.props.artist.name}</h1>
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

export default ArtistShow;