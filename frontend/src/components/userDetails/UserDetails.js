import React, { Component } from 'react';
import { getCurrentUser } from '../../services/api';
import { Link } from 'react-router-dom'

class UserDetails extends Component {
    state = {
        name: "",
        img: "",
        gender: "",
        height: "",
        goal: "hi",
        bodyType: "",
        weight: 0,
        bmi: 0,
    }

    componentDidMount = () => {
        if (this.props.username) {
            getCurrentUser()
            .then(data => {
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

    capitalize = (name) => {
        return name.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
    };

    bmiCalculation = () => {
        let weight = (this.state.weight / 2.2)
        let height = ((this.state.height/100)**2)
        let bmi = (weight / height).toFixed(2)
        this.setState({bmi: bmi}) 
    }

    bmiFeedback = (bmi) => {
        if (bmi < 9) return "Very low weight"
        if (bmi < 18.5) return "You're in the underweight range"
        if (bmi < 24.9) return "You're in the healthy weight range"
        if (bmi < 29.9) return "You're in the overweight range"
        if (bmi < 39.9) return "You're in the obese range"
        if (bmi > 39.9) return "God damn, you're fat"
    }

    render() {
        const { name, img, gender, height, goal, bodyType, weight, bmi } = this.state
        return (
            <div>
                <h1> {this.capitalize(name)} </h1>
                <img src={img} width="300" alt=""/>
                {height ? <p> Height (in cm's): {height}</p> : null }
                {weight ? <p> Weight (in pounds): {weight} </p> : <p>Submit your first weight in <Link to='/bodyWeight'>Body weights</Link> to see it here </p>}
                {height && weight ? <p> BMI: {bmi} </p> : null  }
                {height && weight ? <p> BMI feedback: {this.bmiFeedback(bmi)}</p> : null }
                {gender ? <p> Gender: {gender} </p> : null   }
                {goal ? <p> Main goal: {goal} </p> : null }
                {bodyType ? <p> Body type: {bodyType}</p> : null }
                <br />
            </div>
        );
    }
}

export default UserDetails;