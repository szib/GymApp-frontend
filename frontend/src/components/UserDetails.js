import React, { Component } from 'react';
import { getCurrentUser } from '../services/api';

class UserDetails extends Component {
    state = {
        name: "",
        img: "",
        gender: "",
        height: "",
        goal: "",
        bodyType: ""
    }

    componentDidMount = () => {
        if (this.props.username) {
            getCurrentUser()
            .then(data => this.setState({
                name: data.name,
                img: data.img, 
                gender: data.gender, 
                height: data.height,
                goal: data.goal,
                bodyType: data.bodyType
            }))
        }
    }

    render() {
        const { name, img, gender, height, goal, bodyType } = this.state
        return (
            <div>
                <h1> {name} </h1>
                <img src={img} width="350" alt=""/>
                <p> Height: {height}</p>
                <p> weight here </p>
                <p> {gender} </p>
                <p> bmi here </p>
                <p> {bodyType}</p>
                <p> {goal} </p>
                <br />
            </div>
        );
    }
}

export default UserDetails;