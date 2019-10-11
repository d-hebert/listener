import { connect } from 'react-redux';
import { selectUserPlaylists } from '../../reducers/selectors'
import UserPlaylists from './user_playlists';

const msp = (state) => {
    return {
        playlists: selectUserPlaylists(state),
    }
}

const mdp = (dispatch) => {
    return {
    }
}

export default connect(msp, null)(UserPlaylists)