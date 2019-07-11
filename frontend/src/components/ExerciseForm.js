import React, { Component } from 'react';
import LiftForm from "./LiftForm";
import { Form, Button } from 'semantic-ui-react';

class ExerciseForm extends Component {
    render() {
        const newLabel = "Exercise " + this.props.number + ":"
        return (
            <Form.Field >
                <Form.Input type="text" name="exercise" label={newLabel} maxLength="20" value={this.props.exercise.name} onChange={(e, { value }) => this.props.updateName(value)} className="exercise" placeholder="Exercise name" required/> 
                {
                    this.props.exercise.lifts.map((lift, index) => {
                        return <LiftForm lift={lift} id={index} key={lift} deleteLift={() => this.props.deleteLift(index)} updateState={(e) => this.props.updateExerciseLift(index, e)} exerciseId={`exercise-${this.props.number}`}/>
                    })
                }
                {
                    this.props.showDoAnotherSetButton && 
                    <Button id="button" onClick={this.props.newLift} primary icon="plus" labelPosition="left" content="Do another set"/>
                }
            </Form.Field>
        );
    }
}

export default ExerciseForm;