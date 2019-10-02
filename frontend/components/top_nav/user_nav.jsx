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
                <>
                <Link to="/signup">Sign up</Link>
                <Link to="/login">Log in</Link>
                </>
            )
        }
        return content;
    }

    render () {
        return (
            <div>
            <h2>hello from top_nav/user_nav</h2>
            {this.format()}
            </div>

        )
    }
}

export default UserNav