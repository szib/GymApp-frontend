import { Route, Switch, withRouter } from "react-router-dom";
import React, { Component } from "react";

import Nav from "./components/Nav";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import HomePage from "./components/HomePage";

import { validate } from "./services/api";

import "./App.css";
import TrackWorkout from "./components/TrackWorkout";
import WorkoutHistory from "./components/history/WorkoutHistory";
import BodyWeight from "./components/BodyWeight";

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
        <Nav username={username} signout={signout}/>
        <Switch>
          <Route exact path="/" render={props => <HomePage signout={signout} username={username} {...props}/>} />
          <Route
            path="/signin"
            render={props => <SignInForm signin={signin} {...props} />}
          />
          <Route
            path="/signup"
            render={props => <SignUpForm signin={signin} {...props} />}
          />
          <Route
            path="/newWorkout"
            render={props => <TrackWorkout {...props} username={username} />}
          />
          <Route
            path="/workoutHistory"
            render={props => <WorkoutHistory {...props} username={username} />}
          />
          <Route
            path="/bodyWeight"
            render={props => <BodyWeight {...props} username={username} />}
          />
          <Route render={() => <h1>Page not found.</h1>} 
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
