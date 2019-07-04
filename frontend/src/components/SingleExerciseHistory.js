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
            <>
                <h3> You performed the exercise: {exercise.name} </h3>
                {this.mapOverSets(exercise)}
                <br />
            </>
        );
    }
}

export default SingleExerciseHistory;