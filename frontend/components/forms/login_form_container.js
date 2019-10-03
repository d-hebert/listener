import { connect } from 'react-redux';
import { login } from '../../actions/session_actions'
import LoginForm from './login_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = (state) => {
    const currentUser = state.entities.users[state.session.id];
    const errors = state.errors.session;
    const formType = 'login'
    return {
        currentUser,
        errors,
        formType
    }
}

const mdp = (dispatch) => {
    return {
        login: (user) => { dispatch(login(user)) },
        openModal: (formType) => dispatch(openModal(formType)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(msp, mdp)(LoginForm)