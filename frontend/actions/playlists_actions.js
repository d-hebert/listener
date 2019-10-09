import * as APIUtil from '../util/playlists_api_util'

export const RECEIVE_ALL_PLAYLISTS = 'RECEIVE_ALL_PLAYLISTS';
export const LOADING_PLAYLISTS = 'LOADING_PLAYLISTS';
export const RECEIVE_ONE_PLAYLIST = 'RECEIVE_ONE_PLAYLIST';

export const receiveAllPlaylists = (playlists) => {
    dispatch(loadingPlaylists());
    return {
        type: RECEIVE_ALL_PLAYLISTS,
        playlists
    }
}

export const fetchPlaylists = () => (dispatch) => {
    return APIUtil.fetchPlaylists()
        .then(playlists => dispatch(receiveAllPlaylists(playlists)))
}

export const loadingPlaylists = () => {
    return {
        type: LOADING_PLAYLISTS
    }
}