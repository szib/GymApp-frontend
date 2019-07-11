import React, { Component } from 'react';
import { getWorkouts } from '../../services/api';
import SingleWorkoutHistory from './SingleWorkoutHistory';
import { Link } from 'react-router-dom'


class WorkoutHistory extends Component {
    state = {
        workouts: [
            {exercises: []}
        ]
    }

    getAllUsersWorkouts = () => {
        // if (this.props.username) {
            getWorkouts()
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    this.setState({ workouts: data })
                }
            })   
        // } 
    }

    componentWillMount = () => {
        this.getAllUsersWorkouts()
    }

    displayWorkouts = () => {
        if (this.props.username) {
          if (this.state.workouts.length > 0 ) {
            return this.state.workouts.map( workout => 
                <SingleWorkoutHistory exercises={workout.exercises} date={workout.date} key={'WO' + workout.id}/>
            )} else {
                return <p> Submit your first workout to see it here </p>
            }
        } else {
            return <p id='signOptions'> <Link to='/signin'>Sign in</Link> or <Link to='/signup'>sign up</Link> to see your past workouts</p>
        }
    }

    render() {
        return (
            <div>
                <h2> Workout history </h2>
                {
                    this.displayWorkouts()
                }
            </div>
        );
    }
}

export default WorkoutHistory;

