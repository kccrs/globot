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

// going to have the following buttons:

// start DONE
// nav button to next part of story DONE
// start over button (in header and/or at end points in story) DONE
// text to speech button
// color changer button
