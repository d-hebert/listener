import { PREPARE_QUEUE } from '../actions/queue_actions';


const queueReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case PREPARE_QUEUE:
            return action.track_ids;
        default:
            return state;
    }
}

export default queueReducer;