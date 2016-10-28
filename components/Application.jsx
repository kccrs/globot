import React, { Component } from 'react';

import Buttons from './Buttons';

export default class Application extends Component {

  startStory(e) {
    e.preventDefault();
    console.log('HEYYYYYYYY!');
    this.context.router.transitionTo('/1');
  }

  render() {
    return (
      <div className="Application">
        <section className="titles">
          <h1>Glowbot</h1>
          <h2>Adventures in Space</h2>
        </section>
        <Buttons className="start-button" handleClick={(e) => this.startStory(e)} text="Start"/>
      </div>
    );
  }
}

Application.contextTypes = {
  router: React.PropTypes.object
}
