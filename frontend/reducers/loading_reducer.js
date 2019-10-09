import { RECEIVE_ALL_ALBUMS, LOADING_ALBUMS } from '../actions/albums_actions'
import { RECEIVE_ALL_PLAYLISTS, LOADING_PLAYLISTS } from '../actions/playlists_actions'


const initialState = {
    home: false
}

const loadingReducer = (state = initialState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_ALBUMS:
            return { home: false }
        case LOADING_ALBUMS:
            return { home: true }
        case RECEIVE_ALL_PLAYLISTS:
            return { home: false }
        case LOADING_PLAYLISTS:
            return { home: true }
        default:
            return state
    }
}

export default loadingReducer;