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
            <NavLink exact to="/browse" className="site-nav-link" >Home</NavLink>
        </div>
        )
    }
}

export default SiteNav;
