import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { clearErrors } from '../../actions/session_actions'
import { connect } from 'react-redux';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';

export const Splash = () => {
  
    return (
        <div className="modal-bg" onClick={handleClick}>
            <div className="modal-form" onClick={e => e.stopPropagation()}>
                test
            </div>
        </div>
    )
}

