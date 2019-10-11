import { RECEIVE_ALL_PLAYLISTS, RECEIVE_ONE_PLAYLIST } from '../actions/playlists_actions';

const playlistsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_ALL_PLAYLISTS:
            return action.playlists;
        case RECEIVE_ONE_PLAYLIST:
            newState = Object.assign({}, state, action.playlist);
            return newState;
        default:
            return state;
    }
}

export default playlistsReducer