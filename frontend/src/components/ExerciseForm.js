import React, { Component } from 'react';
import LiftForm from "./LiftForm";

class ExerciseForm extends Component {
    state = {
        exercise: "",
        number: 0,
        numbOfForms: ['1'],
        reps: {},
        weight: {}
    }

    updateState = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    updateLiftForm = e => {
        if (e.target.name === 'reps' && e.target.value > 50)
        { e.target.value = 50}
        if (e.target.name === 'weight' && e.target.value > 400)
        { e.target.value = 400}
        const previousData = this.state[e.target.name]
        const newData = {[e.target.id]: e.target.value}
        this.setState({ [e.target.name]: {
            ...previousData, ...newData
            }
        });
    }

    newSet = (e) => {
        e.preventDefault()
        this.setState({ numbOfForms: [...this.state.numbOfForms, '1']})
    }

    render() {
        const { exercise } = this.state
        return (
            <label>
                <br />
                Exercise {this.props.number}:
                <input type="text" className={`exercise ${this.props.number}`} name="exercise" maxLength="15" value={exercise} onChange={this.updateState}/> 
                <br />
                <br />
                {
                    this.state.numbOfForms.map(function(str, index) {
                        return <LiftForm id={index+1} key={index+1} updateState={this.updateLiftForm} exerciseId={`exercise-${this.props.number}`}/>
                    }.bind(this))
                }
                <button id="button" onClick={this.newSet}> Do another set </button> 
                <br />
            </label>
        );
    }
}

export default ExerciseForm;