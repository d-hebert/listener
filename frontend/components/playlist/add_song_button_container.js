import { connect } from 'react-redux'
import addSongButton from './add_song_button'
import { selectUserPlaylists } from '../../reducers/selectors'

const msp = (state) => {
    return {
        playlists: selectUserPlaylists(state)
    }
}

export default connect(msp, null)(addSongButton)