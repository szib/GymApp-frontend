import React, { Component } from 'react';
import SingleExerciseHistory from './SingleExerciseHistory';

class SingleWorkoutHistory extends Component {

    generateExcercises = exercises => {
        return exercises.length 
        ? exercises.map((exercise, idx) => <SingleExerciseHistory exercise={exercise} key={'SWH' + idx} />) 
        : <p>hello</p>
    }

    render() {
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