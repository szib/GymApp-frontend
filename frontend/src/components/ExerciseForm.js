import React, { Component } from 'react';
import LiftForm from "./LiftForm";

class ExerciseForm extends Component {
    state = {
        exercise: "",
        number: 0,
        numbOfForms: [ 0 ],
        reps: {},
        weight: {},
        integer: 1
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
        this.setState({ numbOfForms: [...this.state.numbOfForms, this.state.integer]})
        this.setState({ integer: this.state.integer + 1 })
    }

    deleteSet = (lift) => {
        document.querySelector(`div#lift-form-${lift.target.id}`).remove()
    }

    render() {
        const { exercise } = this.state
        return (
            <label>
                <br />
                Exercise {this.props.number}:
                <input type="text" className={`exercise ${this.props.number}`} name="exercise" maxLength="20" value={exercise} onChange={this.updateState} required/> 
                <br />
                <br />
                {
                    this.state.numbOfForms.map(function(str, index) {
                        return <LiftForm id={index} key={index} deleteSet={this.deleteSet} updateState={this.updateLiftForm} exerciseId={`exercise-${this.props.number}`}/>
                    }.bind(this))
                }
                <button id="button" onClick={this.newSet}> Do another set </button> 
                <br />
            </label>
        );
    }
}

export default ExerciseForm;