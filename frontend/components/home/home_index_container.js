import { connect } from 'react-redux';
import HomeIndex from './home_index';
import { fetchAlbums } from '../../actions/albums_actions';
import { selectAllAlbums } from '../../reducers/selectors';
import { fetchPlaylists } from '../../actions/playlists_actions';
import { selectAllPlaylists } from '../../reducers/selectors';

const msp = (state) => {
   return {
        albums: selectAllAlbums(state),
        playlists: selectAllPlaylists(state),
        loading: state.ui.loading.home
   }
}

const mdp = (dispatch) => {
    return {
        fetchAlbums: () => { dispatch(fetchAlbums()) },
        fetchPlaylists: () => { dispatch(fetchPlaylists()) }
    }
}

export default connect(msp, mdp)(HomeIndex);