import React from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import HomeIndex from '../home/home_index_container'

class SiteNav extends React.Component { 
    constructor (props) {
        super(props)
    }

    render () {
        return (
        <div className="site-nav">
            <NavLink exact to="/browse" className="site-nav-link" >
                    <span className="nav-icons"><i className="material-icons nav-icons">home</i></span>
                    <span className="nav-text">Home</span>
            </NavLink>
            <NavLink exact to="/search" className="site-nav-link" >
                    <span className="nav-icons"><i className="material-icons nav-icons">search</i></span>
                    <span className="nav-text">Search</span>
            </NavLink>
            {/* <NavLink exact to="/new" className="site-nav-link create-pl-link">
                    <span className="nav-icons"><i className="material-icons nav-icons">playlist_add</i></span>
                    <span className="nav-text">Create Playlist</span> 
            </NavLink> */}
        </div>
        )
    }
}

export default SiteNav;
