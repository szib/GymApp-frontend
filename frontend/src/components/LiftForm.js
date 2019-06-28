import React, { Component } from 'react';

class LiftForm extends Component {
    state = {
        reps: null,
        weight: null
    }

    updateState = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const { reps, weight } = this.state
        return (
            <div>
                <label>Reps
                    <input type="text" name="reps" value={reps} onChange={this.updateState}/>
                </label>
                <label> x Weight
                    <input type="text" name="weight" value={weight} onChange={this.updateState}/>
                </label>
            </div>
        );
    }
}

export default LiftForm;