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
    
    handleSubmit = () => {
        const { name, img, gender, height, goal, bodyType } = this.state
        patchUserDetails(name, img, gender, height, goal, bodyType)
        this.props.closeForm()
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
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </label> <br />
                <label> Height
                    <input type="number" name="height" onChange={this.updateState} max="220" min="90"
                    /> 
                </label> <br />
                <label> Main Goal
                    <select name="goal" onChange={this.updateState} > 
                        <option value="">Rather not say</option>
                        <option value="Weight Loss">Weight Loss</option>
                        <option value="Weight Gain">Weight Gain</option>
                        <option value="Muscle Gain">Muscle Gain</option>
                        <option value="General Fitness">General Fitness</option>
                    </select>
                </label> <br />
                <label> Body Type
                    <select name="bodyType" onChange={this.updateState} > 
                        <option value="">Rather not say</option>
                        <option value="Ectomorph">Ectomorph</option>
                        <option value="Endomorph">Endomorph</option>
                        <option value="Mesomorph">Mesomorph</option>
                    </select>
                </label> <br />
                <button> Submit </button>
            </form>
        );
    }
}

export default UserDetailsForm;