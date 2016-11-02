import React, { Component } from 'react';
import Buttons from './Buttons';

export default class Application extends Component {

  startStory(e) {
    e.preventDefault();
    this.context.router.transitionTo('/page1');
  }

  render() {
    return (
      <div className="Application">
        <section className="titles">
          <h1>GloBot</h1>
          <h2>Adventures in Space</h2>
        </section>
        <section className="buttonContainer">
          <Buttons className="start-button" handleClick={(e) => this.startStory(e)} text="Start"/>
        </section>
      </div>
    );
  }
}

Application.contextTypes = {
  router: React.PropTypes.object
}
