import React, { Component } from "react";

export class PersonCard extends Component {
  render() {
    const {name,initialAge,hairColor}= this.props
    return (

      <div className="container">
        <h2>{name}</h2>
        <h3>Age: {initialAge}</h3>
        <h4>Hair color: {hairColor}</h4>
       
      </div>
    
    )
  }
}

export default PersonCard;
