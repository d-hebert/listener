import React from 'react'
import { Link } from 'react-router-dom'
import { openModal } from '../actions/modal_actions'
import { connect } from 'react-redux';

const Greeting = (props) => {

    const display = () => {
        debugger
        return (
            <div className="splash">
            <h1> Music for everyone.</h1>
            <h2> Dozens of songs.   No credit card needed.</h2>
            <Link to="/" className="launch-button launch" onClick={() => props.openModal('signup')}>SIGN UP FOR LISTENER</Link>
            </div>
        )
    }
  
    return (
        <div className="welcome-bg">
            <div className="modal-form" onClick={e => e.stopPropagation()}>
                { display() }
            </div>
        </div>
    )
}

const msp = state => {
    return {
    }
}

const mdp = dispatch => {
    return {
        openModal: (formType) => dispatch(openModal(formType)),
    }
}

export default connect(msp, mdp)(Greeting);



