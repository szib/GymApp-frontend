import React, { Component } from 'react';
import { Line } from 'react-chartjs-2'

class WeightChart extends Component {
    state = {
        chartData:{
            labels: this.props.weights.map(weight => weight.date),
            datasets: [
                {
                    label:'Body Weight over Time',
                    data:
                        this.props.weights.map(weight => weight.weight)
                    
                }
            ]
        }
    }

    componentDidMount = () => {
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