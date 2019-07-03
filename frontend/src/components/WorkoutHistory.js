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
                    // If no username show sign in. If no workout, display do a workout. Else show workouts.
                    this.props.username
                    ? !this.state.workouts 
                    ? <p> Submit your first workout to see it here </p> 
                    : this.state.workouts.map(  workout => (
                        <Exercise date={workout.date} key={workout.id} exercises={workout.exercises} name={workout}/>)
                    )
                    : <p> Sign in to see your past workouts</p>
                }
            </div>
        );
    }
}

export default WorkoutHistory;