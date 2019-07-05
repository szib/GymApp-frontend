import React, { Component } from 'react';
import BodyWeightForm from "./BodyWeightForm";
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

    mapOverWeights = () => {
    }

    render() {
        return (
            <div>
                <BodyWeightForm username={this.props.username}/>
                <table>
                    <tbody>
                        <tr>
                            <th>Weight</th>
                            <th>Date</th> 
                        </tr>
                        {
                            this.state.weights.map(input => {
                                return (
                                <tr key={input.id}>
                                    <td>{input.weight}</td>
                                    <td>{input.date.slice(0,10)}</td>
                                </tr> 
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default BodyWeight;