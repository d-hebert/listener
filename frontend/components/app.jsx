import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute } from '../util/route_util'
import UserNavContainer from './top_nav/user_nav_container';
import LoginFormContainer from './forms/login_form_container';
import SignupFormContainer from './forms/signup_form_container';

const App = () => {
    return (
        <div>
            <header>
                <h3>hello from app.jsx</h3>
                <UserNavContainer />
            </header>

            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
        </div>
    )
}

export default App;