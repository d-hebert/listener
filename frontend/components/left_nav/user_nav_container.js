import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions'
import UserNav from './user_nav';
import { openModal } from '../../actions/modal_actions'

const msp = (state) => {
    const currentUser = state.entities.users[state.session.id]
    return {
        currentUser
    }
}

const mdp = (dispatch) => {
    return {
        logout: () => { dispatch(logout()) },
        openModal: (formType) => dispatch(openModal(formType))
    }
}

export default connect(msp, mdp)(UserNav)