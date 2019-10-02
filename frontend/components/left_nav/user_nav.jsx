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
                <h2>hi, {this.props.currentUser.username}</h2>
                <button onClick={this.props.logout}>logout</button>
                </>
            ) 
        } else {
            content = (
                <div className="user-nav">
                <Link to="/signup" className="session-button signup">SIGN UP</Link>
                <Link to="/login" className="session-button login">LOG IN</Link>
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