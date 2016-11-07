import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    return (
      <button
        className={this.props.className}
        onClick={this.props.handleClick}
        result={this.props.result}
      >
        {this.props.text}
      </button>
    );
  }
}
