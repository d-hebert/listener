import { connect } from 'react-redux'
import PlaylistShow from './playlist_show'
import { fetchPlaylist } from '../../actions/playlists_actions'
import { load } from '../../actions/session_actions'

const msp = (state, ownProps) => {
    // get the playlist ID 
    const playlistId = ownProps.match.params.id
    const playlists = state.entities.playlists
    return {
        playlists,
        playlistId
    }
}

const mdp = (dispatch) => {
    return {
        fetchPlaylist: (playlist_id) => dispatch(fetchPlaylist(playlist_id)),
        load: (track) => dispatch(load(track))
    }
}

export default connect(msp, mdp)(PlaylistShow);