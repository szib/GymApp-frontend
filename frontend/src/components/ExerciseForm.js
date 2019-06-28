import React, { Component } from 'react';
import LiftForm from "./LiftForm";

class ExerciseForm extends Component {
    state = {
        exercise: "",
        number: null
    }

    updateState = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const { exercise } = this.state
        return (
            <label>
                <br />
                Exercise {this.state.number}:
                <input type="text" name="exercise" value={exercise} onChange={this.updateState}/> 
                <LiftForm />     
            </label>
        );
    }
}

export default ExerciseForm;