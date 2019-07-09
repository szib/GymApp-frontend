import React, { Component } from 'react';
import { signup } from "../services/api";

class SignUpForm extends Component {
    state = {
        username: "",
        password: "",
        passwordConfirm: "",
        email: ""
    };

    handleSubmit = event => {
        event.preventDefault()
        if (this.state.password === this.state.passwordConfirm) {
            signup(this.state.username, this.state.email, this.state.password)
            .then(data => {
                if (data.error) {
                    alert(data.error);
                } else {
                    this.props.signin(data);
                    this.props.history.push('/')
                }
            });
        } else {
            alert( "Your passwords do not match" )
        }
    };
    
    updateState = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const { username, email, password, passwordConfirm } = this.state;
        return (
            <div>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={this.updateState}
                    />
                    </label>
                    <br />
                    <label>
                    Email Adress:
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.updateState}
                    />
                    </label>
                    <br />
                    <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        pattern=".{7,}"   
                        required title="7 characters minimum"
                        value={password}
                        onChange={this.updateState}
                    />
                    </label>
                    <br />
                    <label>
                    Confirm Password:
                    <input
                        type="password"
                        name="passwordConfirm"
                        pattern=".{7,}"   
                        required title="7 characters minimum"
                        value={passwordConfirm}
                        onChange={this.updateState}
                    />
                    </label>
                    <br />
                    <button variant="contained" value="Submit">
                    {" "}
                    Sign Up{" "}
                    </button>
                </form>
            </div>
        );
    }
}

export default SignUpForm;