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
                        <div className="user-pic"></div>
                    <h4 className="greeting-temp">{this.props.currentUser.username}</h4>
                    <Link to="/" className="session-button login" onClick={this.handleLogout}>LOG OUT</Link>
                    </div>
                </>
            ) 
        } else {
            content = (
                <div className="user-nav">
                <Link to="/" className="session-button signup" onClick={() => this.props.openModal('signup')}>SIGN UP</Link>
                <Link to="/" className="session-button login" onClick={() => this.props.openModal('login')}>LOG IN</Link>
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