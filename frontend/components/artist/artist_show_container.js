import { connect } from 'react-redux'
import ArtistShow from './artist_show'
import { fetchArtist } from '../../actions/artist_actions'
import { load } from '../../actions/session_actions'

const msp = (state, ownProps) => { 
    debugger
    const artistId = ownProps.location.artist_id
    const artist = state.entities.artists
    return {
        artist,
        artistId
    }
}

const mdp = (dispatch) => {
    return {
        fetchArtist: (artist_id) => dispatch(fetchArtist(artist_id)),
        load: (track) => dispatch(load(track))
    }
}

export default connect(msp, mdp)(ArtistShow);