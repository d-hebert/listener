import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { clearErrors } from '../actions/session_actions'
import { connect } from 'react-redux';
import LoginFormContainer from './forms/login_form_container';
import SignupFormContainer from './forms/signup_form_container';

const Modal = ({modal, closeModal, clearErrors}) => {
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
        case 'splash':
            form = <Splash />;
        default:
            return null;
    }
    
    const handleClick = e => {
        closeModal();
        clearErrors();
    }
    
    return (
        <div className="modal-bg" onClick={handleClick}>
            <div className="modal-form" onClick={e => e.stopPropagation()}>
                { form }
            </div>
        </div>
    )
}

const msp = state => {
    return {
        modal: state.ui.modal,
        errors: state.errors.session
    }
}

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(msp, mdp)(Modal);