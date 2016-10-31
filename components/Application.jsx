import React, { Component } from 'react';
import { Link } from 'react-router';
import storyText from '../content/storyText';

import Buttons from './Buttons';

export default class Application extends Component {
  startStory(e) {
    e.preventDefault();
    console.log('HEYYYYYYYY!');
    // let pageId = this.context.router.params.id;
    // this.context.router.transitionTo(`/${pageId}`);
    this.context.router.transitionTo('/page1');
  }

  render() {
    return (
      <div className="Application">
        <section className="titles">
          <h1>GloBot</h1>
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
