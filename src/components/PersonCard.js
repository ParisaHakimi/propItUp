import React, { Component } from "react";

export class PersonCard extends Component {
  constructor(props) {
    super(props);
    this.state = { age: parseInt(this.props.initialAge) };
  }
  render() {
    const { namee, initialAge, hairColor } = this.props;
    return (
      <div className="container">
        <h2>{namee}</h2>
        <h3>Age: {this.state.age}</h3>
        <h4>Hair color: {hairColor}</h4>
        <button
          onClick={() => {
            this.setState({ age: this.state.age + 1 });
          }}
        >
          Brthday Button for {namee}
        </button>
      </div>
    );
  }
}

export default PersonCard;
