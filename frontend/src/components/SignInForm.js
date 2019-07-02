import React, { Component } from "react";
import { signin } from "../services/api";

class SignInForm extends Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault()
    signin(this.state.username, this.state.password).then(data => {
      if (data.error) {
        alert(data.error);
      } else {
        this.props.signin(data);
        this.props.history.push('/')
      }
    });
  };

  updateState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { username, password } = this.state;
    return (
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
          Password:
          <input
            type="text"
            name="password"
            value={password}
            onChange={this.updateState}
          />
        </label>
        <br />
        <button variant="contained" value="Submit">
          {" "}
          Sign In{" "}
        </button>
      </form>
    );
  }
}

export default SignInForm;
