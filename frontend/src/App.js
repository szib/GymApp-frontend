import { Route, Switch, withRouter } from "react-router-dom";
import React, { Component } from "react";

import Nav from "./components/Nav";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import HomePage from "./components/HomePage";

import { validate } from "./services/api";

import "./App.css";
import TrackWorkout from "./components/TrackWorkout";
import WorkoutHistory from "./components/WorkoutHistory";


class App extends Component {
  state = {
    username: ""
  };

  signin = user => {
    this.setState({ username: user.username });
    localStorage.setItem('token', user.token)
  };

  signout = () => {
    this.setState({ username: "" });
    localStorage.removeItem('token')
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
          <Route
            path="/newWorkout"
            component={props => <TrackWorkout {...props} username={username} />}
          />
          <Route
            path="/workoutHistory"
            component={props => <WorkoutHistory {...props} username={username} />}
          />
          <Route component={() => <h1>Page not found.</h1>} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
