import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, loggedIn } from '../util/route_util'
import UserNavContainer from './left_nav/user_nav_container';
import SiteNav from './left_nav/site_nav';
import LoginFormContainer from './forms/login_form_container';
import SignupFormContainer from './forms/signup_form_container';
import AudioPlayerContainer from './audio/audio_player_container';
import NowPlaying from './audio/now_playing_container';
import Modal from './modal';
import HomeIndex from './home/home_index_container';
import Search from './search/search_container';
import ArtistShow from './artist/artist_show_container';
import NewPlaylist from './left_nav/new_playlist_container';
import UserPlaylists from './left_nav/user_playlists_container';
import PlaylistShow from './playlist/playlist_show_container'
import AlbumShow from './album/album_show_container'
import Greeting from './greeting'

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
                <UserPlaylists />
                <UserNavContainer />
            </nav>
            <AudioPlayerContainer />
            {/* <NowPlaying /> */}
            <img src={window.redbg} className="background" />
            <Route exact path="/browse" component={HomeIndex} />
            <Redirect from="/" to="/browse" />
            <Redirect from="/#/" to="/browse" />
            <AuthRoute exact path="/search" component={Search} />
            <AuthRoute exact path="/artist/:id" component={ArtistShow}/>
            <AuthRoute exact path="/playlist/:id" component={PlaylistShow} />
            <AuthRoute exact path="/album/:id" component={AlbumShow} />
            <AuthRoute exact path="/new" component={NewPlaylist} />
            <Modal />
            <Route exact path="/greeting" component={Greeting} />
        </div>
    )
}

export default App;
