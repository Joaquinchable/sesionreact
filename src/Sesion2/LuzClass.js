import React, { Component } from "react";
import './../Css/Luz.css';

class LuzClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "pink",
     
    };
  }

  render() {
    return <div style={{backgroundColor: this.state.color}} className = "luz" ></div>;
  }
}

export default LuzClass;

