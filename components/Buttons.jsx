import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Buttons extends Component {
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
// start
// nav button to next part of story
// start over button (in header and/or at end points in story)
// text to speech button
// color changer button
