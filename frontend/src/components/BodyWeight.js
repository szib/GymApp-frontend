import React, { Component } from 'react';
import BodyWeightForm from "./BodyWeightForm";
import WeightChart from "./WeightChart";
import { getWeights } from "../services/api";

class BodyWeight extends Component {
    state = {
        weights: [],
        weights2: [{date: 2, weight: 60}, {date: 3, weight: 70}, {date: 4, weight: 75}, {date: 5, weight: 70}]
    }

    getAllUsersWeights = () => {
        getWeights()
        .then(data => {
            if (data.error) {
              console.log(data.error)
            } else {
                data.map( info => 
                    this.setState({ 
                        weights: [...this.state.weights, info]
                    })
                ) 
            }
        })    
    }

    componentDidMount = () => {
        this.getAllUsersWeights()
    }

    updateWeightState = (data) => {
        this.setState({ weights: [...this.state.weights, data]
        })
    }

    render() {
        let lastWeight = 0
        return (
            <div>
                <BodyWeightForm username={this.props.username} weightUpdate={this.updateWeightState}/>
                <table>
                    <tbody>
                        <tr>
                            <th>Weight</th>
                            <th>Date</th> 
                            <th>Difference</th> 
                        </tr>
                        {
                            this.state.weights.map((input, index) => {
                                return (
                                    <tr key={input.id}>
                                        <td style={{textAlign: "center"}}>{input.weight}</td> 
                                        <td>{input.date.slice(0,10)}</td>
                                        <td style={{textAlign: "center"}}>{ index === 0 ? null : (input.weight - lastWeight) }</td> 
                                        <td style={{display: 'none'}}>{ lastWeight = input.weight}</td>
                                        {/* The above line is hacky, but works. */}
                                    </tr> 
                                )
                            })
                        }
                    </tbody>
                </table>
                <WeightChart userWeights={this.getAllUsersWeights} />
            </div>
        );
    }
}

export default BodyWeight;