import React, { Component } from 'react';
import { getWorkouts } from '../services/api';
import Exercise from "./Exercise"

class WorkoutHistory extends Component {
    state = {
        workouts: []
    }

    getAllUsersWorkouts = () => {
        getWorkouts()
        .then(data => {
            if (data.error) {
              alert(data.error)
            } else {
              this.setState({ workouts: data })
            }
        })    
    }

    componentDidMount () {
        this.getAllUsersWorkouts()
    }

    render() {
        return (
            <div>
                {
                    this.state.workouts.map(  workout => (
                        <Exercise date={workout.date} key={workout.id} exercises={workout.exercises} name={workout}/>)
                    )
                        // console.log(workout)))
                }
            </div>
        );
    }
}

export default WorkoutHistory;