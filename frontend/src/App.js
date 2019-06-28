import { Route, Switch, withRouter } from "react-router-dom";
import React, { Component } from "react";

import Nav from "./components/Nav";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import HomePage from "./components/HomePage";
// import TrackWorkout from './components/TrackWorkout';

import { validate } from "./services/api";

import "./App.css";

class App extends Component {
  state = {
    username: ""
  };

  signin = user => {
    this.setState({ username: user.name });
  };

  signout = () => {
    this.setState({ username: "" });
  };

  componentDidMount() {
    if (localStorage.token) {
      validate().then(data => {
        if (data.error) {
          alert(data.error);
        } else {
          this.signin(data);
        }
      });
    }
  }

  render() {
    const { signin, signout } = this;
    const { username } = this.state;
    return (
      <div>
        <Nav username={username}  />
        <Switch>
          <Route exact path="/" component={props => <HomePage signout={signout} username={username} {...props}/>} />
          <Route
            path="/signin"
            component={props => <SignInForm signin={signin} {...props} />}
          />
          <Route
            path="/signup"
            component={props => <SignUpForm {...props} signin={signin} />}
          />
          <Route component={() => <h1>Page not found.</h1>} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
