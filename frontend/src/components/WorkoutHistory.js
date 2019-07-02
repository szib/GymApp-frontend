import React, { Component } from 'react';
import { getWorkouts } from '../services/api';

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
                
            </div>
        );
    }
}

export default WorkoutHistory;