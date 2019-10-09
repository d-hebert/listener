import { connect } from 'react-redux';
import HomeIndex from './home_index';
import { fetchAlbums } from '../../actions/albums_actions';
import { selectAllAlbums } from '../../reducers/selectors';

const msp = (state) => {
   return {
        albums: selectAllAlbums(state),
        loading: state.ui.loading.home
   }
}

const mdp = (dispatch) => {
    return {
        fetchAlbums: () => { dispatch(fetchAlbums()) }
    }
}

export default connect(msp, mdp)(HomeIndex);