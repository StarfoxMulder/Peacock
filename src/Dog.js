import React, { Component } from "react";
import {randomDog} from "./data.js";

class Dog extends Component {

  constructor(props) {
    super(props);
    this.state = randomDog();
  }

  render(){
    return(
      <div className="Dog">
        <h2>This dog is named {this.state.name}</h2>
        <h3>{this.state.pronoun} is a {this.state.age} year old {this.state.breed}</h3>
      </div>
    )
  }
}

export default Dog;