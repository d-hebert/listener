import { connect } from 'react-redux'
import { fetchAlbums, fetchOneAlbum } from '../../actions/albums_actions'
import { load } from '../../actions/session_actions'

import AlbumShow from './album_show'

const msp = (state, ownProps) => {
    const albumId = ownProps.match.params.id 
    const albums = state.entities.albums
    return {
        albumId,
        albums
    }
}

const mdp = (dispatch) => {
    return {
        fetchOneAlbum: (albumId) => dispatch(fetchAlbums(albumId)),
        load: (track) => dispatch(load(track))
    }
}

export default connect(msp, mdp)(AlbumShow);