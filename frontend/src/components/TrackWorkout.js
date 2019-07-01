import React, { Component } from "react";
import  ExerciseForm from "./ExerciseForm";

class TrackWorkout extends Component {

  state = {
    numbOfForms: [1]
  }

  updateState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    //  This is going to post the entire workout to the database and save it
    
    e.preventDefault()
    const exercisesNodeList = e.target.querySelectorAll('input.exercise')
    const repsNodeList = e.target.querySelectorAll('input.reps')
    const weightsNodeList = e.target.querySelectorAll('input.weight')
    // const repsArray = Array.from(repsNodeList)
    // const weightsArray = Array.from(weightsNodeList)
    const exercisesArray = Array.from(exercisesNodeList)
    // console.log(repsArray, weightsArray, exercisesArray)

    const exercises = exercisesArray.map( (inputEl, index) => {
      const exerciseName = inputEl.value
      return {
        exercise: exerciseName,
        reps: Array.from(document.querySelectorAll(`.reps.exercise-${index+1}`)).map(input => input.value),
        weights: Array.from(document.querySelectorAll(`.weight.exercise-${index+1}`)).map(input => input.value),
      }
    })

    // console.log(exercisesArray, exercises)
  } 

  newExercise = (e) => {
    e.preventDefault()
    const btn = document.getElementById('button')
    btn.remove()
    this.setState({ numbOfForms: [...this.state.numbOfForms, 1]})
  }


  render() {
    return (
      <div >
        <h2> Track your workout </h2>
        <form onSubmit={this.handleSubmit}>
          {
            this.state.numbOfForms.map(function(str, index) {
              return <ExerciseForm number={index+1} key={index+1} submitFormToBackend={() => console.log('submitting form')}/>
            })
          }
          <br /> <br />
          <button onClick={this.newExercise}> Add another exercise </button>
          <br />
          <button type='submit'> I'm done with my workout </button>
        </form>
      </div>
    );
  }
}

export default TrackWorkout;
