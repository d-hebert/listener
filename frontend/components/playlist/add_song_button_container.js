import { connect } from 'react-redux'
import addSongButton from './add_song_button'
import { selectUserPlaylists } from '../../reducers/selectors'
import { addToPlaylist } from '../../actions/playlists_actions'

const msp = (state) => {
    return {
        playlists: selectUserPlaylists(state)
    }
}

const mdp = (dispatch) => {
    return {
        addToPlaylist: (playlistId, trackId) => dispatch(addToPlaylist(playlistId, trackId))
    }
}

export default connect(msp, mdp)(addSongButton)