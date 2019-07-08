import React, { Component } from 'react';
import { Line } from 'react-chartjs-2'

class WeightChart extends Component {
    getChartData = () => {
        return {
            labels: this.props.weights.map(weight => (this.props.dateFormat(weight.date))),
            datasets: [
                {
                    label:'Body Weight over Time',
                    data:
                        this.props.weights.map(weight => weight.weight)
                }
            ]
        }
    }

    render() {
        return (
            <>
                <Line 
                    data={this.getChartData()}
                    options={{}}
                    redraw
                />
            </>
        );
    }
}

export default WeightChart;