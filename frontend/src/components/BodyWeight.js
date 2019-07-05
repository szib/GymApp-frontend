import React, { Component } from 'react';
import BodyWeightForm from "./BodyWeightForm";

class BodyWeight extends Component {
    render() {
        return (
            <div>
                <BodyWeightForm username={this.props.username}/>
                
            </div>
        );
    }
}

export default BodyWeight;