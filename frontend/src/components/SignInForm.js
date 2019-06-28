import React, { Component } from "react";
import { signin } from "../services/api";

class SignInForm extends Component {
  state = {
    name: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault()
    signin(this.state.name, this.state.password).then(data => {
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
    const { name, password } = this.state;
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
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
