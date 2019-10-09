import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute } from '../util/route_util'
import UserNavContainer from './left_nav/user_nav_container';
import SiteNav from './left_nav/site_nav';
import LoginFormContainer from './forms/login_form_container';
import SignupFormContainer from './forms/signup_form_container';
import AudioPlayerContainer from './audio/audio_player_container';
import NowPlaying from './audio/now_playing_container';
import Modal from './modal';
import HomeIndex from './home/home_index_container'
import Search from './search/search_container'

const App = () => {
    return (
        <div className="app" >
            <nav className="nav-left">
                <h2 className="logo-text">
                    <span className="l1">L</span>
                    <span className="l2">i</span>
                    <span className="rest">stener</span>
                    <span className="l3">.</span>
                </h2>
                <SiteNav />
                <UserNavContainer />
            </nav>
            <AudioPlayerContainer />
            {/* <NowPlaying /> */}
            <img src={window.redbg} className="background" />
            <Route exact path="/browse" component={HomeIndex} />
            <Route exact path="/search" component={Search} />
            <Modal />
        </div>
    )
}

export default App;
