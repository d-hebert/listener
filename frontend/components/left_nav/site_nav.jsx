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
                <div className="icons-special">
                    <a href="https://d-hebert.github.io/me/" className="site-nav-link ico" target="_blank">
                        <span className="nav-icons"><i class="fas fa-user nav-icons"></i></span>
                    </a>
                    <a href="https://www.linkedin.com/in/david-hebert-6b7661179/" className="site-nav-link ico" target="_blank">
                        <span className="nav-icons"><i class="fab fa-linkedin nav-icons"></i></span>
                    </a>
                    <a href="https://github.com/d-hebert" className="site-nav-link ico" target="_blank">
                        <span className="nav-icons"><i class="fab fa-github nav-icons"></i></span>
                    </a>
                </div>

        </div>
        )
    }
}

export default SiteNav;
