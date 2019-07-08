import React, { Component } from 'react';
import BodyWeightForm from "./BodyWeightForm";
import WeightChart from "./WeightChart";
import { getWeights } from "../services/api";

class BodyWeight extends Component {
    state = {
        weights: [],
    }

    getAllUsersWeights = () => {
        getWeights()
        .then(data => {
            if (data.error) {
              console.log(data.error)
            } else {
                this.setState({weights: data})
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

    dateFormat = (date) => {
        let sliced = date.slice(2,10)
        let newDate = sliced.slice(6) + '-' + sliced.slice(3,5) + '-' + sliced.slice(0,2)
        return newDate
    }

    stateOrderedByDate = (weights) => {
        // debugger
        if (weights.length > 0){
                return weights.sort((a,b) => new Date(a.date) - new Date(b.date)
            )
        }else{
            return []
        }
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
                            <th>Diff per day</th>
                        </tr>
                        {
                            this.stateOrderedByDate(this.state.weights).map((input, index) => {
                                return (
                                    <tr key={input.id}>
                                        <td style={{textAlign: "center"}}>{input.weight}</td> 
                                        <td>{this.dateFormat(input.date)}</td>
                                        <td style={{textAlign: "center"}}>{ index === 0 ? null : (input.weight === lastWeight) ? null : (input.weight - lastWeight)  }</td> 
                                        <td style={{display: 'none'}}>{ lastWeight = input.weight} </td>
                                        {/* The above line is hacky, but works. */}
                                    </tr> 
                                )
                            })
                        }
                    </tbody>
                </table>
                <WeightChart dateFormat={this.dateFormat} weights={this.state.weights}/>
            </div>
        );
    }
}

export default BodyWeight;