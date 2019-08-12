import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react'

class LiftForm extends Component {

    render() {
        return (
            <Form.Group className="setsForm" widths='equal' id={`lift-form-${this.props.id}`}>
                <Form.Input value={this.props.lift.reps} fluid label='Reps' placeholder='10' onChange={this.props.updateState} id={this.props.id} name="reps"  required/>
                <Form.Input value={this.props.lift.weight} fluid label='x Weight' placeholder='20' onChange={this.props.updateState} id={this.props.id} name="weight" required/>
                <Button className="deleteButton" basic color='red' icon='x' id={this.props.id}  onClick={this.props.deleteLift}/>
            </Form.Group>
        );
    }
}

export default LiftForm;