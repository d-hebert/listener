import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import currentTrackReducer from './current_track_reducer';
import loadingReducer from './loading_reducer';
import queueReducer from './queue_reducer';

const uiReducer = combineReducers({
    modal: modalReducer,
    currentTrack: currentTrackReducer,
    queue: queueReducer,
    loading: loadingReducer
});

export default uiReducer;