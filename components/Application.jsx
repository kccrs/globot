import React, { Component } from 'react';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      storyText: [],
      images: [],
    };
  }

  render() {
    return (
      <div className="Application">
        <h1>Glowbot the Robot</h1>
        <h2>Adventures in Space</h2>
      </div>
    );
  }
}