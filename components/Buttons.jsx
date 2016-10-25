import React, { Component } from 'react';


export default class Buttons extends Component {
  render() {
    return (
      <button
        className={this.props.className}
        onClick={this.props.handleClick}>
        {this.props.text}
      </button>
    );
  }
}
