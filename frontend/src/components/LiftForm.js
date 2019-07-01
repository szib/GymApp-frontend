import React, { Component } from 'react';

// type='tel' is used instead of number so that maxlength can be used
class LiftForm extends Component {

    render() {
        return (
            <div>
                <label>Reps
                    <input type="tel" name="reps" onChange={this.props.updateState} id={this.props.id}
                    maxLength = "3" /> 
                </label>
                <label> x Weight
                    <input type="tel" name="weight" onChange={this.props.updateState} id={this.props.id}
                    maxLength = "3" />
                </label>
            </div>
        );
    }
}

export default LiftForm;