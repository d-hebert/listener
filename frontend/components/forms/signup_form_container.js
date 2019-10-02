import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions'
import SignupForm from './signup_form';

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
        signup: (user) => { dispatch(signup(user)) }
    }
}

export default connect(msp, mdp)(SignupForm)