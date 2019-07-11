import React, { Component } from 'react';

class Exercise extends Component {

    render() {

        const date = this.props["date"]

        const name = this.props.name.exercises[0].name
        const reps = this.props.name.exercises[0].lifts.map(lift => 
            ( 'You did ' + lift.reps + ' reps with weight ' + lift.weight ))
        return (
            <div>
                <p> Workout was done on { date.slice(0, 10) }</p>
                <p> You performed the exercise: {name} </p>
                {   reps.map(arr => (
                        <p> {arr} </p>
                    ))
                }
                <br />
            </div>
        );
    }
}

export default Exercise;