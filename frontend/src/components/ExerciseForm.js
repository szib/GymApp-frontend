import React, { Component } from 'react';
import LiftForm from "./LiftForm";

class ExerciseForm extends Component {
    state = {
        exercise: "",
        number: 0,
        numbOfForms: ['1'],
        btnDisable: false,
        reps: {},
        weight: {}
    }

    updateState = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    updateLiftForm = e => {
        const previousData = this.state[e.target.name]
        const newData = {[e.target.id]: e.target.value}
        this.setState({ [e.target.name]: {
            ...previousData, ...newData
        } });
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
                <input type="text" name="exercise" maxLength="15" value={exercise} onChange={this.updateState}/> 
                <br />
                <br />
                {
                    this.state.numbOfForms.map(function(str, index) {
                        return <LiftForm id={index+1} key={index+1} updateState={this.updateLiftForm}/>
                    }.bind(this))
                }
                {
                    this.state.btnDisable
                    ? null
                    : <button id="button" onClick={this.newSet}> Do another set </button> 
                }    
                <br />
                <br />
            </label>
        );
    }
}

export default ExerciseForm;