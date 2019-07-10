import React, { Component } from 'react';
import moment from 'moment'
import { postWeight } from "../../services/api";
import { Form, Button } from "semantic-ui-react";


class BodyWeightForm extends Component {
    state = {
        weight: 0,
        date: moment().format("YYYY-MM-DD")
    }

    updateState = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        postWeight(this.state.weight, this.state.date)
        .then(data => {
            if (data.error) {
                alert(data.error) 
            } else 
                {this.props.weightUpdate(data)}
        })
    }

    render() {
        return (
            <div>
                <h4> Track your weight </h4>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Input type="tel" name="weight" onChange={this.updateState} min="30" label='Weight'/> 
                        <Form.Input type="date" name="date" onChange={this.updateState} value={this.state.date} max={moment().format("YYYY-MM-DD")} label='Date'/>
                    </Form.Group>
                    <Button type='submit'> Submit </Button>
                </Form>
            </div>
        );
    }
}

export default BodyWeightForm;