import React, { Component } from 'react';

// type='tel' is used instead of number so that maxlength can be used
class LiftForm extends Component {

    render() {
        return (
            <div>
                <label>Reps
                    <input type="tel"  className={`reps ${this.props.exerciseId}`} name="reps" onChange={this.props.updateState} id={this.props.id}
                     /> 
                </label>
                <label> x Weight
                    <input type="tel"  className={`weight ${this.props.exerciseId}`} name="weight" onChange={this.props.updateState} id={this.props.id}
                     />
                </label>
            </div>
        );
    }
}

export default LiftForm;