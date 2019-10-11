import { connect } from 'react-redux'
import PlaylistShow from './playlist_show'
import { fetchPlaylist } from '../../actions/playlists_actions'
import { load } from '../../actions/session_actions'

const msp = (state, ownProps) => {
    const playlistId = ownProps.location.playlist_id
    const playlist = state.entities.playlists
    return {
        playlist,
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