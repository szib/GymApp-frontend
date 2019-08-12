import React, { Component } from "react";
import BestExercises from './BestExercises'
import Dialog from '@material-ui/core/Dialog';
import { Button } from "semantic-ui-react";

class Dashboard extends Component {

  state = { show: false };

  handleClick = () => {
    this.setState({show: !this.state.show})
  }

  render() {

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Dialog open={this.state.show} onClose={() => {this.setState({show: false})}}>
            <BestExercises />
          </Dialog>
          <Button id='bestExercises' onClick={this.handleClick}>
            A list of the Best Exercises for People getting into Gym
          </Button>
        </div>
    );
  }
}

const modalCont = document.createElement("div");
document.body.appendChild(modalCont);


export default Dashboard