import React, { Component } from 'react';
import { getCurrentUser } from '../../services/api';

class UserDetails extends Component {
    state = {
        name: "",
        img: "",
        gender: "",
        height: "",
        goal: "",
        bodyType: "",
        weight: 100,
        bmi: 0,
    }

    componentDidMount = () => {
        if (this.props.username) {
            getCurrentUser()
            .then(data => {
                debugger
                this.setState({
                    name: data.name,
                    img: data.img, 
                    gender: data.gender, 
                    height: data.height,
                    goal: data.goal,
                    bodyType: data.bodyType,
                    weight: data.weight,
                }, this.bmiCalculation)
            })
        }
    }

    bmiCalculation = () => {
        let weight = (this.state.weight / 2.2)
        let height = ((this.state.height/100)**2)
        let bmi = (weight / height).toFixed(2)
        this.setState({bmi: bmi}) 
    }

    bmiFeedback = (bmi) => {

        if (bmi < 9) return "Tiny spindly little legs, all bone"
        if (bmi < 18.5) return "You're in the underweight range"
        if (bmi < 24.9) return "You're in the heakthy weight range"
        if (bmi < 29.9) return "You're in the overweight range"
        if (bmi < 39.9) return "You're in the obese range"
        if (bmi > 39.9) return "God damn, you're fat"
    }

    render() {
        const { name, img, gender, height, goal, bodyType, weight, bmi } = this.state
        return (
            <div>
                <h1> {name} </h1>
                <img src={img} width="350" alt=""/>
                <p> Height (in cm's): {height}</p>
                <p> Weight (in pounds): {weight}</p>
                <p> {gender} </p>
                <p> BMI: {bmi} </p>
                <p> {this.bmiFeedback(bmi)}</p>
                <p> {bodyType}</p>
                <p> {goal} </p>
                <br />
            </div>
        );
    }
}

export default UserDetails;