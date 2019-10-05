import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from '../actions/session_actions';

const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState = []
            return newState;
        case RECEIVE_SESSION_ERRORS:
            newState = action.errors
            return newState;
        default:
            return state;
    }
}

export default sessionErrorsReducer;