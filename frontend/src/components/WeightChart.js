import React, { Component } from 'react';
import { Line } from 'react-chartjs-2'

class WeightChart extends Component {
    state = {
        chartData:{
            labels: [this.props.weights],
            datasets: [
                {
                    label:'Body Weight over Time',
                    data:[
                        this.props.weights
                    ]
                }
            ]
        }
    }

    componentDidMount = () => {
        console.log(this.props.weights)
    }
    
    render() {
        return (
            <>
                <Line 
                    data={this.state.chartData}
                    options={{}}
                />
                
            </>
        );
    }
}

export default WeightChart;