import React, { Component } from "react";

class TrackWorkout extends Component {
  state = {
    exercise: "",
    reps: 0,
    weight: 0

  };

  updateState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {

  }

  render() {
    const { exercise, reps, weight } = this.state;
    return (
      <div>
        <h2> Track your workout </h2>
        <form>
          <label>
            Exercise 1:
            <input type="text" name="exercise" value={exercise} onChange={this.updateState}/>
          </label>
          <br />
          <label>Reps
            <input type="text" name="reps" value={reps} onChange={this.updateState}/>
          </label>
          <label> x Weight
            <input type="text" name="weight" value={weight} onChange={this.updateState}/>
          </label><br />

          <br /> <br />
          <button> Add another exercise </button>
          <br />
          <input type="submit" value="Submit" onSubmit={this.handleSubmit}/>
        </form>
      </div>
    );
  }
}

export default TrackWorkout;
