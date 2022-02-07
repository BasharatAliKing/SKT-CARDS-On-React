import React, { Component } from 'react';
import "./Homecard.css";
export default class Home extends Component {
  render() {
    return <>
          <h4>{this.props.h4}</h4>
          <h1>{this.props.h1}</h1>
          <h1>{this.props.subh1}</h1>
          <button>Learn More</button>
    </>;
  }
}
