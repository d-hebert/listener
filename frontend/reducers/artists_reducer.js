import { RECEIVE_ONE_ARTIST } from '../actions/artist_actions'

const artistsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ONE_ARTIST:
            return action.artist;
        default:
            return state;
    }
}

export default artistsReducer;