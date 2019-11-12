import React from 'react';
import { connect } from 'react-redux'
import { Route, Redirect, withRouter } from 'react-router-dom';
import { openModal } from '../actions/modal_actions'


const Auth = ({ component: Component, path, loggedIn, openModal, exact }) => {
    debugger
    return (
        <>
            <Route 
                path={path} 
                exact={exact} 
                // render={props =>
                //     loggedIn ? <Component {...props} /> : <Redirect to="/" /> 
                // }
                render={props =>
                    <Component {...props} />
                }
            />
        </>
    )
}

const msp = state => {
    debugger
    return { loggedIn: Boolean(Object.keys(state.entities.users).length > 0) }
}

const mdp = dispatch => {
    return { openModal: (formType) => dispatch(openModal(formType)) }
}

export const AuthRoute = withRouter(
    connect(msp, mdp)(Auth)
)

export const loggedIn = () => {
    return { loggedIn: Boolean(Object.keys(state.entities.users).length > 0) }
}