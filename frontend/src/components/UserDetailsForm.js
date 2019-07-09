import React, { Component } from 'react';
// import { patchUserDetails } from "../services/api";

class UserDetailsForm extends Component {
    state = {
        name: "",
        picture: "",
        height: 0,
        goal: "",
        body: "",
    }

    updateState = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label> Name
                    <input name="name" onChange={this.updateState}
                    /> 
                </label> <br />
                <label> Profile Picture
                    <input name="picture" onChange={this.updateState}
                    /> 
                </label> <br />
                <label> Gender
                    <select name="goal" onChange={this.updateState} > 
                        <option value="">Rather not say</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </label> <br />
                <label> Height
                    <input type="number" name="height" onChange={this.updateState} max="220" min="90"
                    /> 
                </label> <br />
                <label> Main Goal
                    <select name="goal" onChange={this.updateState} > 
                        <option value="">Rather not say</option>
                        <option value="weightLoss">Weight Loss</option>
                        <option value="weightGain">Weight Gain</option>
                        <option value="muscleGain">Muscle Gain</option>
                        <option value="generalFitness">General Fittness</option>
                    </select>
                </label> <br />
                <label> Body Type
                    <select name="body" onChange={this.updateState} > 
                        <option value="">Rather not say</option>
                        <option value="Ectomorph">Ectomorph</option>
                        <option value="Endomorph">Endomorph</option>
                        <option value="Mesomorph">Mesomorph</option>
                    </select>
                </label> <br />
            </form>
        );
    }
}

export default UserDetailsForm;