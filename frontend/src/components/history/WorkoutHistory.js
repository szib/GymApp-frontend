import React, { Component } from 'react';
import { getWorkouts } from '../../services/api';
import SingleWorkoutHistory from './SingleWorkoutHistory';

class WorkoutHistory extends Component {
    state = {
        workouts: [
            {exercises: []}
        ]
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

    componentDidMount = () => {
        this.getAllUsersWorkouts()
    }

    displayWorkouts = () => {
        if (this.props.username) {
            console.log(this.state.workouts)
          if (this.state.workouts) {
            return this.state.workouts.map( workout => 
                <SingleWorkoutHistory exercises={workout.exercises} date={workout.date} key={'WO' + workout.id}/>
            )} else {
                return 'Submit your first workout to see it here'
            }
        } else {
            return 'Sign in to see your past workouts'
        }
    }

    render() {
        return (
            <div>
                {
                    this.displayWorkouts()
                }
            </div>
        );
    }
}

export default WorkoutHistory;

