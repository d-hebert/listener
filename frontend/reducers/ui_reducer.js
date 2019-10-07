import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import currentTrackReducer from './current_track_reducer';

const uiReducer = combineReducers({
    modal: modalReducer,
    currentTrack: currentTrackReducer
});

export default uiReducer;