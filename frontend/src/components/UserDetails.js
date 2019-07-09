import React, { Component } from 'react';

class UserDetails extends Component {
    render() {
        return (
            <div>
                <h1> Name: Danny Wakeling</h1>
                <img src={require('../images/goodlooking.jpg')} width="350" alt=""/>
                <p> Height: 186cm </p>
                <p> Weight: 186cm </p>
                <p> BMI: 186cm </p>
                <p> Body Type: </p>
                <p> Main goal: </p>
                <br />
            </div>
        );
    }
}

export default UserDetails;