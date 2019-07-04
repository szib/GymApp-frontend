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
        const { workouts } = this.state
        const { username } = this.props
        return (
            <div>
                {
                    // If no username show sign in. If no workout, display do a workout. Else show workouts.
                    username
                    ? workouts 
                    ? workouts.map(  workout => (
                        <Exercise date={workout.date} key={workout.id} exercises={workout.exercises} name={workout}/>)
                    )
                    : <p> Submit your first workout to see it here </p> 
                    : <p> Sign in to see your past workouts</p>
                }
            </div>
        );
    }
}

export default WorkoutHistory;

