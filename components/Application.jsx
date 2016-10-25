import React, { Component } from 'react';

import Buttons from './Buttons';

export default class Application extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     storyText: [],
  //     images: [],
  //   };
  // }
  // startStory() {
  //   e.preventDefault();
  //   this.context.router.transitionTo(/:page);
  // }

  render() {
    return (
      <div className="Application">
        <section className="titles">
          <h1>Glowbot</h1>
          <h2>Adventures in Space</h2>
        </section>
        <Buttons className="start-button" handleClick={() => this.startStory()} text="Start"/>
      </div>
    );
  }
}

Application.contextTypes = {
  router: React.PropTypes.object
}
