import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signup(user);
    }

    update(field) {
        return ((e) => this.setState({
            [field]: e.currentTarget.value
        })
        )
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit} class="session-form">
                    <h3>Sign up with your email address</h3>
                    <label>
                        <input type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            placeholder="What should we call you?"
                            class="form-input"
                        />
                    </label>
                    <label>
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email address"
                            class="form-input"
                        />
                    </label>
                    <label>
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                            class="form-input"
                        />
                    </label>
                    <input type="submit" value="SIGN UP" className="session-submit" />
                <h3>Already have an account?</h3>
                <Link to="/login">Log in</Link>
                </form>
            </>
        )
    }
}

export default LoginForm