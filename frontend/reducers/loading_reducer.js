import { RECEIVE_ALL_ALBUMS, LOADING_ALBUMS } from '../actions/albums_actions'

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
        default:
            return state
    }
}

export default loadingReducer;