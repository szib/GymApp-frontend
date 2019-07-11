import React, { Component } from "react";
import ExerciseForm from "./ExerciseForm";
import { postWorkout } from "../services/api";
import moment from "moment";
import { Link } from "react-router-dom";
import { Form, Button } from "semantic-ui-react";
import Dashboard from './Dashboard'

const emptyLift = {
  reps: "",
  weight: ""
};

const emptyExercise = {
  name: "",
  lifts: [{ ...emptyLift }]
};

class TrackWorkout extends Component {
  state = {
    numbOfForms: [1],
    exercises: [{ ...emptyExercise }]
  };

  updateState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const exercises = this.state.exercises.map(exercise => {
      return {
        date: moment().format("LL"),
        exercise: exercise.name,
        reps: exercise.lifts.map(l => l.reps),
        weights: exercise.lifts.map(l => l.weight),
        username: this.props.username
      };
    })

    postWorkout(exercises);
    this.props.history.push("/");
    alert(`Amazing workout ${this.props.username} !`);
  };

  newExercise = e => {
    this.setState({
      exercises: [...this.state.exercises, { ...emptyExercise }]
    });
  };

  addLiftTo = exerciseIndex => {
    this.setState({
      exercises: this.state.exercises.map((exercise, i) => {
        if (i !== exerciseIndex) return exercise;

        exercise.lifts = [...exercise.lifts, {...emptyLift}];
        return exercise;
      })
    });
  };

  deleteLift = (exerciseIndex, liftIndex) => {
    this.setState({
      exercises: this.state.exercises.map((exercise, i) => {
        if (i !== exerciseIndex) return exercise;

        exercise.lifts = exercise.lifts.filter((lift, j) => j !== liftIndex);
        return exercise;
      })
    });
  };

  updateExerciseName = (exerciseIndex, newName) => {
    this.setState({
      exercises: this.state.exercises.map((exercise, i) => {
        if (i !== exerciseIndex) return exercise;

        exercise.name = newName;
        return exercise;
      })
    });
  };

  updateExerciseLift = (exerciseIndex, liftIndex, e) => {
    this.setState({
      exercises: this.state.exercises.map((exercise, i) => {
        if (i !== exerciseIndex) return exercise;

        if (e.target.name === "reps" && e.target.value > 50) {
          e.target.value = 50;
        }
        if (e.target.name === "weight" && e.target.value > 400) {
          e.target.value = 400;
        }

        exercise.lifts = exercise.lifts.map((lift, j) => {
          if (j !== liftIndex) return lift;

          lift = { 
            ...lift, 
            [e.target.name]:e.target.value
          };
          return lift;
        });

        return exercise;
      })
    });
  };

  render() {
    return (
      <div id="workoutForm">
        <h2> Track your workout </h2>
        <Dashboard />
        {this.props.username ? (
          <Form onSubmit={this.handleSubmit} autocomplete="off">
            {this.state.exercises.map((exercise, index) => {
              return (
                <ExerciseForm
                  showDoAnotherSetButton={
                    index === this.state.exercises.length - 1
                  }
                  updateName={newName =>
                    this.updateExerciseName(index, newName)
                  }
                  number={index + 1}
                  key={`${Math.random()}`}
                  updateExerciseLift={(liftIndex, e) =>
                    this.updateExerciseLift(index, liftIndex, e)
                  }
                  deleteLift={liftIndex => this.deleteLift(index, liftIndex)}
                  newLift={() => this.addLiftTo(index)}
                  exercise={exercise}
                />
              );
            })}
            <Button
              primary
              icon="plus"
              labelPosition="left"
              onClick={this.newExercise}
              content="Do another exercise"
            />
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <Button
              // style={{ marginLeft: this.butMargin }}
              
              type="submit"
              color="green"
              size="big"
              id="submitWorkout"
              content="Submit Workout"
            />
            </div>
          </Form>
        ) : (
          <p id="signOptions">
            {" "}
            <Link to="/signin">Sign in</Link> or{" "}
            <Link to="/signup">sign up</Link> to see graphs
          </p>
        )}
      </div>
    );
  }
}

export default TrackWorkout;
