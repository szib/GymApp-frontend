import React, { Component } from 'react';
import { patchUserDetails } from '../services/api';

class SignUpForm2 extends Component {
    state = {
        name: "",
        img: "",
        gender: "",
        height: "",
        goal: "",
        // bodyType: "",
    }

    updateState = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    
    handleSubmit = () => {
        const { name, img, gender, height, goal, bodyType } = this.state
        patchUserDetails(name, img, gender, height, goal, bodyType)
        this.props.history.push('/')
    }

    render() {
        return (
            <div >
                <form className="signup-form" onSubmit={this.handleSubmit}>
                <p> All of these are optional and can be updated later*</p>
                    <label> 
                    Name:
                    <br />
                    <input 
                        type="text"
                        name="name" 
                        onChange={this.updateState}
                    /> 
                    </label> 
                    <br />
                    <label> 
                    Profile Picture:
                    <br />
                    <input 
                        name="img" 
                        onChange={this.updateState}
                    /> 
                    </label> 
                    <br />
                    <label> 
                    Height (in cm's):
                    <br />
                    <input 
                        type="number"
                        name="height" 
                        onChange={this.updateState} 
                        max="220" 
                        min="90"
                    /> 
                    </label>
                    <br />
                    <label>
                    Gender:
                    <br/>
                        <select name="gender" onChange={this.updateState} > 
                            <option value="">Rather not say</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </label> 
                    <br />
                    <label> 
                    Main Goal:
                    <br />
                        <select name="goal" onChange={this.updateState} > 
                            <option value="">Rather not say</option>
                            <option value="Weight Loss">Weight Loss</option>
                            <option value="Weight Gain">Weight Gain</option>
                            <option value="Muscle Mass">Muscle Mass</option>
                            <option value="General Fitness">General Fitness</option>
                        </select>
                    </label>
                    <br />
                    {/* <label> 
                    Body Type
                    <br />
                        <select name="bodyType" onChange={this.updateState} > 
                            <option value="">Rather not say</option>
                            <option value="Ectomorph">Ectomorph</option>
                            <option value="Endomorph">Endomorph</option>
                            <option value="Mesomorph">Mesomorph</option>
                        </select>
                    </label>  */}
                    <br />
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <button> Signup </button>
                    </div>
                </form>
            </div>
        );
    }
}


export default SignUpForm2;