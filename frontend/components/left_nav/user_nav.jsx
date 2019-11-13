import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import ReactDOM from 'react-dom'

class UserNav extends React.Component {
    constructor (props) {
        super(props)

        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogout () {
        this.props.logout();
    }

    format () {
        let content;
        if (this.props.currentUser) {
            content = (
                <>
                    <div className="user-nav">
                        <img className="user-pic" src="https://github.com/d-hebert/listener/blob/master/userbasic.png?raw=true" alt="profile picture"/>
                    <h4 className="greeting-temp">{this.props.currentUser.username}</h4>
                    <Link to="/browse" className="session-button login" onClick={this.handleLogout}>LOG OUT</Link>
                    </div>
                </>
            ) 
        } else {
            content = (
                <div className="user-nav">
                <Link to="/browse" className="session-button signup" onClick={() => this.props.openModal('signup')}>SIGN UP</Link>
                <Link to="/browse" className="session-button login" onClick={() => this.props.openModal('login')}>LOG IN</Link>
                </div>
            )
        }
        return content;
    }

    render () {
        return (
            <div>
            {this.format()}
            </div>

        )
    }
}

export default UserNav