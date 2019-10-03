import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

const close = null;

const modalReducer = (state = null, action) => {
    let newState;
    Object.freeze(state);
    switch (action.type) {
        case OPEN_MODAL:
            newState = action.modal
            return newState;
        case CLOSE_MODAL:
            return close;
        default:
            return state;
    }
}

export default modalReducer