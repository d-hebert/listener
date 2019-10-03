import React from 'react';
import { Link } from 'react-router-dom';

class UserNav extends React.Component {
    constructor (props) {
        super(props)
    }

    format () {
        let content;
        if (this.props.currentUser) {
            content = (
                <>
                    <div className="user-nav">
                    <h4 className="greeting-temp">hi, {this.props.currentUser.username}</h4>
                    {/* <button className="session-button login" onClick={this.props.logout}>logout</button> */}
                    <Link to="/" className="session-button login" onClick={this.props.logout}>LOG OUT</Link>
                    </div>
                </>
            ) 
        } else {
            content = (
                <div className="user-nav">
                <Link to="/" className="session-button signup" onClick={() => this.props.openModal('signup')}>SIGN UP</Link>
                <Link to="/" className="session-button login" onClick={() => this.props.openModal('login')}>LOG IN</Link>
                    {/* <button className="session-button signup" onClick={() => this.props.openModal('signup')}>LOG IN</button>
                    <button className="session-button login" onClick={() => this.props.openModal('login')}>SIGN UP</button> */}
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