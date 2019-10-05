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
        this.handleSubmit = this.handleSubmit.bind(this);
        this.guestLogin = this.guestLogin.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signup(user);
        // this.props.closeModal();
    }

    guestLogin(e) {
        e.preventDefault();
        const guest = {
            username: 'guest_user',
            password: 'password'
        }
        this.props.login(guest);
        // this.props.closeModal();
    }

    update(field) {
        return ((e) => this.setState({
            [field]: e.currentTarget.value
        })
        )
    }

    handleErrors(num) {
        if (this.props.errors.length === 0) {
            return < div className="errors-blank" ></div >
        } else {
            return < div className="error-blank" > {this.props.errors[num]}</div >
        }
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit} className="session-form">
                    <div className="modal-logo">
                        <img src={window.logo} className="modal-logo-img" />
                    </div>
                    <button className="guest-button" onClick={this.guestLogin}>ENTER AS GUEST</button>
                    <div className="or-block"><hr></hr><span className="or">OR</span><hr></hr></div>
                    <label>
                        <input type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            placeholder="What should we call you?"
                            className="form-input"
                        />
                    </label>
                    <div className="errors-blank su">{this.props.errors[0]}</div>
                    <label>
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email address"
                            className="form-input"
                        />
                    </label>
                    <div className="errors-blank su">{this.props.errors[1]}</div>
                    <label>
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                            className="form-input"
                        />
                    </label>
                    <div className="errors-blank su">{this.props.errors[2]}</div>
                    <input type="submit" value="SIGN UP" className="session-submit" />
                    {/* <Link to="/login" className="session-flip">LOG IN</Link> */}
                    <Link to="/" className="session-flip" onClick={() => this.props.openModal('login')}>LOG IN</Link>
                </form>
            </>
        )
    }
}

export default LoginForm