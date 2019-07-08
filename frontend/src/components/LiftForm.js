import React, { Component } from 'react';

class LiftForm extends Component {

    render() {
        return (
            <div id={`lift-form-${this.props.id}`}>
                <label>Reps
                    <input type="tel"  className={`reps ${this.props.exerciseId}`} name="reps" onChange={this.props.updateState} id={this.props.id}
                    required
                    /> 
                </label>
                <label> x Weight
                    <input type="tel"  className={`weight ${this.props.exerciseId}`} name="weight" onChange={this.props.updateState} id={this.props.id}
                    required 
                    />
                </label>
                <button id={this.props.id} onClick={this.props.deleteSet}> X </button>
            </div>
        );
    }
}

export default LiftForm;