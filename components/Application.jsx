import React, { Component } from 'react';

import Buttons from './Buttons';

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
        <section className="titles">
          <h1>Glowbot</h1>
          <h2>Adventures in Space</h2>
        </section>
        <Buttons className="start-button" text="Start"/>
      </div>
    );
  }
}
