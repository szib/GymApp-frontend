import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react'

class LiftForm extends Component {

    render() {
        return (
            <Form.Group className="sets" widths='equal' id={`lift-form-${this.props.id}`}>
                <Form.Input fluid label='Reps' placeholder='10' onChange={this.props.updateState} id={this.props.id} name="reps"  required/>
                <Form.Input fluid label='x Weight' placeholder='20' onChange={this.props.updateState} id={this.props.id} name="weight" required/>
                <Button className="deleteButton" basic color='red' icon='x' id={this.props.id}  onClick={this.props.deleteSet}/>
            </Form.Group>
        );
    }
}

export default LiftForm;