import React, { Component } from 'react';
import moment from 'moment'
import { postWeight } from "../services/api";

class BodyWeightForm extends Component {
    state = {
        weight: 0,
        date: moment().format("YYYY-MM-DD")
    }

    updateState = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault()
        postWeight(this.state.weight, this.state.date)
    }

    render() {
        return (
            <div>
                <h2> Track your weight </h2>
                <form onSubmit={this.handleSubmit}>
                <label> Weight
                    <input type="number" name="weight" onChange={this.updateState}  
                    /> 
                </label>
                <label> Date
                    <input type="date" name="date" onChange={this.updateState} value={this.state.date} max={moment().format("YYYY-MM-DD")} 
                    />
                </label>
                <br />
                <button type='submit'> Submit </button>
                </form>
            </div>
        );
    }
}

export default BodyWeightForm;