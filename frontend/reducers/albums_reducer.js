import { RECEIVE_ALL_ALBUMS, RECEIVE_ONE_ALBUM } from '../actions/albums_actions';

// const _nullState = { id: null }

const albumsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_ALL_ALBUMS:
            // newState = Object.assign({}, state, action.albums)
            return action.albums;
        case RECEIVE_ONE_ALBUM:
            return action.album;
        default:
            return state;
    }
}

export default albumsReducer