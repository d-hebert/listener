import { connect } from 'react-redux';
import { createPlaylist } from  '../../actions/playlists_actions';
import NewPlaylist from './new_playlist'

const msp = (state) => {
    const currentUser = state.entities.users[state.session.id]
    return {
        currentUser
    }
}

const mdp = (dispatch) => {
    return {
        createPlaylist: (playlist) => dispatch(createPlaylist(playlist))
    }
}

export default connect(msp, mdp)(NewPlaylist);