import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            errors: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.guestLogin = this.guestLogin.bind(this);
    }

    handleSubmit (e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user)
        this.setState({errors: this.props.errors})

        // this.props.closeModal();
    }

    guestLogin (e) {
        e.preventDefault();
        const guest = {
                username: 'guest_user',
                password: 'password'
            }
        this.props.login(guest);
        this.props.closeModal();
    }

    update (field) {
        return ( (e) => this.setState({
            [field]: e.currentTarget.value
            })
        )
    }

    renderErrors () {
        return (this.state.errors)
    }

    handleErrors () {
        if (this.props.errors.length === 0) {
            return < div className="errors-blank" > {this.props.errors}</div >
        } else {
            return < div className="errors" > {this.props.errors}</div >
        }
    }

    render () {
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
                        placeholder="Username"
                        className="form-input"
                    />
                </label>
                <label>
                    <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        placeholder="Password"
                        className="form-input"
                    />
                </label>   
                {this.handleErrors()}
                {/* <button type="submit" value="LOG IN" className="session-submit" >LOG IN</button> */}
                <input type="submit" value="LOG IN" className="session-submit" /> 
                {/* <Link to="/signup" className="session-flip">SIGN UP</Link> */}
                    <Link to="/" className="session-flip" onClick={() => this.props.openModal('signup')}>SIGN UP</Link>
            </form>
            </>
        )
    }
}

export default LoginForm