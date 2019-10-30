import { connect } from 'react-redux';
import { selectUserPlaylists } from '../../reducers/selectors'
import UserPlaylists from './user_playlists';

const msp = (state) => {
    let loggedIn = Boolean(state.session.id)
   return {
            loggedIn,
            playlists: selectUserPlaylists(state),
        }
}

const mdp = (dispatch) => {
    return {
    }
}

export default connect(msp, null)(UserPlaylists)