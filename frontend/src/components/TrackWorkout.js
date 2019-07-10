import React, { Component } from "react";
import ExerciseForm from "./ExerciseForm";
import { postWorkout } from "../services/api";
import moment from 'moment'
import { Link } from 'react-router-dom'

class TrackWorkout extends Component {

  state = {
    numbOfForms: [1]
  }

  updateState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault()

    const exercises = Array.from(e.target.exercise).map( (inputEl, index) => {
      const exerciseName = inputEl.value

      return {
        date: moment().format('LL'),
        exercise: exerciseName,
        reps: Array.from(document.querySelectorAll(`.reps.exercise-${index+1}`)).map(input => input.value),
        weights: Array.from(document.querySelectorAll(`.weight.exercise-${index+1}`)).map(input => input.value),
        username: this.props.username
      }
    })

    postWorkout(exercises)
    this.props.history.push('/')
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
        { this.props.username ?
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
        : <p> <Link to='/signin'>Sign in</Link> or <Link to='/signup'>sign up</Link> to see graphs</p>
        }
      </div>
        
    );
  }
}

export default TrackWorkout;
