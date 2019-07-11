import React, { Component } from 'react';
import SingleExerciseHistory from './SingleExerciseHistory';

class SingleWorkoutHistory extends Component {
    state = {
        showWorkout: false
    }

    generateExcercises = exercises => {
        return exercises.length 
        ? exercises.map((exercise, idx) => <SingleExerciseHistory exercise={exercise} key={'SWH' + idx} />) 
        : null
    }

    toggleWorkout = () => {
        this.setState({ showWorkout: !this.state.showWorkout})
    }

    render() {
        const { date, exercises } = this.props
        return (
            <>
                <div className="container historyNames">
                    <h3 className="exerciseDates"> Workout done on {date ? date.slice(0,10) : null}</h3> 
                    {this.state.showWorkout ? <button onClick={this.toggleWorkout}> ↑ </button> :
                    <button onClick={this.toggleWorkout}> ↓ </button> }
                </div>
                <div>
                    {this.state.showWorkout && this.generateExcercises(exercises)}
                </div>
            </>
        );
    }
}

export default SingleWorkoutHistory;