import React, { Component } from 'react';
import "./Card.css"
export default class Card extends Component {
  render() {
    return <>
         <div className="card">
            <div className={this.props.cardname}>
              <img src={this.props.image} className='card-img-top' alt="My-Pic" />
              <div className="card-body">
                  <h3>{this.props.heading1}</h3>
                  <h5>{this.props.heading2}</h5>
              </div>
          </div>
         </div>
    </>;
  }
}
