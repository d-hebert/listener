import React from 'react';
import { Link } from 'react-router-dom';

class SiteNav extends React.Component { 
    constructor (props) {
        super(props)
    }

    render () {
        return (
        <div className="site-nav">
            <Link to="/" className="site-nav-link" >Home</Link>
        </div>
        )
    }
}

export default SiteNav;
