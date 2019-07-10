import React, { Component } from 'react';
import LiftForm from "./LiftForm";
import { Form, Button } from 'semantic-ui-react';

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
        this.setState({ numbOfForms: [...this.state.numbOfForms, this.state.integer], integer: this.state.integer + 1 })
    }

    deleteSet = (number) => {
        this.setState({
            numbOfForms: this.state.numbOfForms.filter(n => n !== number)
        })
    }

    render() {
        const { exercise } = this.state
        const newLabel = "Exercise " + this.props.number + ":"
        return (
            <Form.Field >
                <Form.Input type="text" name="exercise" label={newLabel} maxLength="20" value={exercise} onChange={this.updateState} className="exercise" placeholder="Exercise name" required/> 
                {
                    this.state.numbOfForms.map(function(number, index) {
                        return <LiftForm id={index} key={number} deleteSet={() => this.deleteSet(number)} updateState={this.updateLiftForm} exerciseId={`exercise-${this.props.number}`}/>
                    }.bind(this))
                }
                <Button id="button" onClick={this.newSet} primary icon="plus" labelPosition="left" content="Do another set"/>
            </Form.Field>
        );
    }
}

export default ExerciseForm;