import React, { Component } from 'react';
import "./media.css";
export default class Media extends Component {
  render() {
    return <>
        <div className="media">
            <img src={this.props.image} alt="" />
            <div className="media-body">
                <h3>{this.props.h3}</h3>
                <p>{this.props.para}</p>
            </div>
        </div>
    </>;
  }
}
