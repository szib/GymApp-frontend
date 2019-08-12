import React, { Component } from 'react';

class SingleExerciseHistory extends Component {
   
    mapOverSets = (exercise) => {
        const setLength = exercise.lifts.length 
        return exercise.lifts 
    ? exercise.lifts.map((lift, idx) => 
        <p key={'SEH' + idx}>You did {lift.reps} reps with weight {lift.weight}{idx+1 === setLength ? '.' : ','}</p>)
        : <p> Still loading.. </p>
    }

    render() {
        const { exercise } = this.props
        return (
            <div style={{textAlign: 'center'}} id="Workoutcard">
                <h3> You performed the exercise: {(exercise.name).charAt(0).toUpperCase() + (exercise.name).slice(1)} </h3>
                {this.mapOverSets(exercise)}
                <br />
            </div>
        );
    }
}

export default SingleExerciseHistory;