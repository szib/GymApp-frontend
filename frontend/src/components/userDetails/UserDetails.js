import React, { Component } from 'react';
import { getCurrentUser } from '../../services/api';
import { Link } from 'react-router-dom'

class UserDetails extends Component {
    state = {
        name: "",
        img: "",
        gender: "",
        height: "",
        goal: "",
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
        else return "You're in the obese range"
    }

    render() {
        const { name, img, gender, height, goal, bodyType, weight, bmi } = this.state
        const anon = 'data:image/png;base64,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'
        return (
            <div>
                {name ? <h1> {this.capitalize(name)} </h1> : null }
                {img ? <img src={img} id='profilePic' width="250" alt=""/> : <img src={anon} id='profilePic' width="250" alt=""/> }
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