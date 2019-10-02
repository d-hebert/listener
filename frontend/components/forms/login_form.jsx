import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit (e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user);
    }

    update (field) {
        return ( (e) => this.setState({
            [field]: e.currentTarget.value
            })
        )
    }

    render () {
        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <h3>To continue, log in to Listener.</h3>
                <label>username
                    <input type="text" 
                        value={this.state.username}
                        onChange={this.update('username')}
                    />
                </label>
                <label>password
                    <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                    />
                </label>   
                <input type="submit" value="LOG IN"/> 
            </form>
            <h3>Don't have an account?</h3>
            <Link to="/signup">SIGN UP FOR LISTENER</Link>
            </>
        )
    }
}

export default LoginForm