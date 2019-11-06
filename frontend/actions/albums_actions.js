import * as APIUtil from '../util/albums_api_util'

export const RECEIVE_ALL_ALBUMS = 'RECEIVE_ALL_ALBUMS';
export const LOADING_ALBUMS = 'LOADING_ALBUMS';
export const RECEIVE_ONE_ALBUM = 'RECEIVE_ONE_ALBUM';

export const receiveAllAlbums = (albums) => {
    dispatch(loadingAlbums());
    return {
        type: RECEIVE_ALL_ALBUMS,
        albums
        }
}

export const receiveOneAlbum = (album) => {
    return {
        type: RECEIVE_ONE_ALBUM,
        album
    }
}

export const fetchOneAlbum = () => (dispatch) => {
    return APIUtil.fetchOneAlbum()
        .then( albums => dispatch(receiveOneAlbum(album)))
}

export const fetchAlbums = () => (dispatch) => {
    return APIUtil.fetchAlbums()
        .then( albums => dispatch(receiveAllAlbums(albums)) )
}

export const loadingAlbums = () => {
    return {
        type: LOADING_ALBUMS
    }
}