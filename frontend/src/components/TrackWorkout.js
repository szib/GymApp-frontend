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
    console.log(this.state.numbOfForms.length)
    this.setState({ numbOfForms: [...this.state.numbOfForms, '1']})
  }


  render() {
    let number = 0
    return (
      <div >
        <h2> Track your workout </h2>
        <form>
          {
            this.state.numbOfForms.map(function() {
              number++
              return <ExerciseForm number={number} key={number}/>
            })
          }
          <br /> <br />
          <button onClick={this.newExercise}> Add another exercise </button>
          <br />
          <button onSubmit={this.handleSubmit}> I'm done with my workout </button>
        </form>
      </div>
    );
  }
}

export default TrackWorkout;
