import React, { Component } from 'react';
import { patchUserDetails } from '../../services/api';

class UserDetailsForm extends Component {
    state = {
        name: "",
        img: "",
        gender: "",
        height: "",
        goal: "",
        bodyType: "",
    }

    updateState = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    
    handleSubmit = e => {
        const { name, img, gender, height, goal, bodyType } = this.state
        e.preventDefault()
        patchUserDetails(name, img, gender, height, goal, bodyType)
        .then(data => {
            if (data.error) {
                alert(data.error) 
            } else {
                console.log(data)
            }
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label> Name
                    <input name="name" onChange={this.updateState}
                    /> 
                </label> <br />
                <label> Profile Picture
                    <input name="img" onChange={this.updateState}
                    /> 
                </label> <br />
                <label> Gender
                    <select name="gender" onChange={this.updateState} > 
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
                        <option value="generalFitness">General Fitness</option>
                    </select>
                </label> <br />
                <label> Body Type
                    <select name="bodyType" onChange={this.updateState} > 
                        <option value="">Rather not say</option>
                        <option value="ectomorph">Ectomorph</option>
                        <option value="endomorph">Endomorph</option>
                        <option value="mesomorph">Mesomorph</option>
                    </select>
                </label> <br />
                <button> Submit </button>
            </form>
        );
    }
}

export default UserDetailsForm;