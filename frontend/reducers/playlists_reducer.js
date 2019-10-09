import { RECEIVE_ALL_PLAYLISTS } from '../actions/playlists_actions';

const playlistReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_ALL_PLAYLISTS:
            return action.playlists;
        default:
            return state;
    }
}

export default playlistReducer