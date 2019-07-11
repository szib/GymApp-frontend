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
                    this.props.history.push('/signup2')
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
        return (
            <div >
                <form className="signup-form" onSubmit={this.handleSubmit}>
                    <label>
                    Username:
                    <br />
                    <input
                        type="text"
                        name="username"
                        onChange={this.updateState}
                    />
                    </label>
                    <br />
                    <label>
                    Email Adress:
                    <br />
                    <input
                        type="email"
                        name="email"
                        onChange={this.updateState}
                    />
                    </label>
                    <br />
                    <label className="tooltip">
                    Password: (7 chars min)
                        <span className="tooltiptext"> Password must be 7 min</span>
                    <br />
                    <input
                        type="password"
                        name="password"
                        pattern=".{7,}"   
                        required title="7 characters minimum"
                        onChange={this.updateState}
                    />
                    </label>
                    <br />
                    <label className="tooltip">
                    Confirm Password:
                        <span className="tooltiptext"> Password must be 7 min</span>
                    <br />
                    <input
                        type="password"
                        name="passwordConfirm"
                        pattern=".{7,}"   
                        required title="7 characters minimum"
                        onChange={this.updateState}
                    />
                    </label>
                    <br />
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <button variant="contained" value="Submit">
                        {" "}
                        Continue Signup{" "}
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUpForm;