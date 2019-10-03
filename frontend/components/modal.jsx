import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from './forms/login_form_container';
import SignupFormContainer from './forms/signup_form_container';

const Modal = ({modal, closeModal}) => {
    if (!modal) {
        return null;
    }

    let form;

    switch (modal) {
        case 'login':
            form = <LoginFormContainer />;
            break;
        case 'signup':
            form = <SignupFormContainer />;
            break;
        default:
            return null;
    }
    
    return (
        <div className="modal-bg" onClick={closeModal}>
            <div className="modal-form" onClick={e => e.stopPropagation()}>
                { form }
            </div>
        </div>
    )
}

const msp = state => {
    return {
        modal: state.ui.modal
    }
}

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(msp, mdp)(Modal);