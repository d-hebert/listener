import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions'
import SignupForm from './signup_form';
import { openModal, closeModal } from '../../actions/modal_actions'

const msp = (state) => {
    const currentUser = state.entities.users[state.session.id];
    const errors = state.errors.session;
    const formType = 'signup'
    return {
        currentUser,
        errors,
        formType
    }
}

const mdp = (dispatch) => {
    return {
        login: (user) => { dispatch(login(user)) },
        signup: (user) => { dispatch(signup(user)) },
        openModal: (formType) => dispatch(openModal(formType)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(msp, mdp)(SignupForm)