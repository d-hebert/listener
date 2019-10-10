import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

// const _nullState = { id: null }

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let currentUser = action.currentUser
    let newState;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState = Object.assign({}, state, { [currentUser.id]: currentUser })
            return newState;
        default:
            return state;
    }
}

export default usersReducer;