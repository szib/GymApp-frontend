import React, { Component } from 'react';
import SingleExerciseHistory from './SingleExerciseHistory';

class SingleWorkoutHistory extends Component {

    generateExcercises = exercises => {
        return exercises.length 
        ? exercises.map((exercise, idx) => <SingleExerciseHistory exercise={exercise} key={'SWH' + idx} />) 
        : <p>hello</p>
    }

    render() {
        // const name = this.props.name.exercises[0].name
        // const reps = this.props.name.exercises[0].lifts.map(lift => 
        //     ( 'You did ' + lift.reps + ' reps with weight ' + lift.weight ))
        // console.log(this.props)
        // console.log(exercises)
        // debugger
        // console.log('exercises' + exercises)
        const { date, exercises } = this.props
        return (
            <>
                <h2> Workout done on {date ? date.slice(0,10) : null} </h2>
                {this.generateExcercises(exercises)}
            </>
        );
    }
}

export default SingleWorkoutHistory;