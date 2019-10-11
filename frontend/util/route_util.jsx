import React from 'react';
import { connect } from 'react-redux'
import { Route, Redirect, withRouter } from 'react-router-dom';


const Auth = ({ component: Component, path, loggedIn, exact }) => {
    return (
        <>
            <Route 
                path={path} 
                exact={exact} 
                render={props =>
                    !loggedIn ? <Component {...props} /> : <Redirect to="/" />
                }
            />
        </>
    )
}

const msp = state => {
    return { loggedIn: Boolean(state.entities.users.length > 0) }
}

export const AuthRoute = withRouter(
    connect(msp, null)(Auth)
)

export const loggedIn = () => {
    return { loggedIn: Boolean(state.entities.users.length > 0) }
}