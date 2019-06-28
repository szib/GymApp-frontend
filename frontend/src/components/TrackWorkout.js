import React, { Component } from "react";
import  ExerciseForm from "./ExerciseForm";

class TrackWorkout extends Component {

  state = {
    numbOfForms: [1]
  }

  updateState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    //  This is going to post the entire workout to the database and save it
  }

  newExercise = (e) => {
    e.preventDefault()
    this.setState({ numbOfForms: [...this.state.numbOfForms, '1']})
  }


  render() {
    return (
      <div onSubmit={this.handleSubmit}>
        <h2> Track your workout </h2>
        <form>
          {
            this.state.numbOfForms.map(function() {
              return <ExerciseForm />
            })
          }
          <br /> <br />
          <button onClick={this.newExercise}> Add another exercise </button>
          <br />
          <button> I'm done with my workout </button>
        </form>
      </div>
    );
  }
}

export default TrackWorkout;
