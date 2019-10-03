import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute } from '../util/route_util'
import UserNavContainer from './left_nav/user_nav_container';
import LoginFormContainer from './forms/login_form_container';
import SignupFormContainer from './forms/signup_form_container';
import Modal from './modal';

const App = () => {
    return (
        <div className="app" >
            <header>
                <h2 className="logo-text">
                    <span className="l1">L</span>
                    <span className="l2">i</span>
                    <span className="rest">stener</span>
                    <span className="l3">.</span>
                </h2>
                <UserNavContainer />
            </header>
            <img src={window.redbg} className="background" />
            <Modal />
            {/* <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} /> */}
        </div>
    )
}

export default App;
