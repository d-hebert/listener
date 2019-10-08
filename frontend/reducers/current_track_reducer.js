import { RECEIVE_CURRENT_TRACK } from '../actions/session_actions';

const initialState = { 
    album_id: 2,
    artist_id: 2,
    artist_name: "Alfa Mist",
    id: 7,
    title: "Kyoki",
    cover_art: "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--34c9b548e640ba89d2d42232392c5c339a599481/front.jpg",
    url: "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--dd117456f54d0413fdceb3f790d55a5a6d2480d7/kyoki.mp3"

}

const currentTrackReducer = (state = initialState, action) => {
    let newState;
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_TRACK:
            newState = action.track.currentTrack
            return newState;
        default:
            return state;
    }
}

export default currentTrackReducer;