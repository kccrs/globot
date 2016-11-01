import React, { Component } from 'react';
import Buttons from './Buttons';
import Text from './Text';
import Image from './Image';
import storyText from '../content/storyText';

export default class StoryPage extends Component {
  constructor() {
    super();
    this.state = {
      // pageId: this.pageId
      // choices: null
    };
  }

  pageNum() {
    let pageId = this.context.router.params.pageId;
    return pageId;
  }

  goToStoryPage(e) {
    e.preventDefault();
    let pageId = this.context.router.storyText.key;
    this.context.router.transitionTo(`/${pageId}`);
    return console.log("what is happening?");
  }

  render () {
    return (
      <div className="StoryPage">
        <h1>GloBot: Adventures in Space</h1>
        <section className="pageText">
          <Image />
          <Text />
        </section>
        <section className="buttonArea">
          <Buttons className="first-choice" handleClick={(e) => this.gotToStoryPage(e)} text="Choose A"/>
          <Buttons className="second-choice" handleClick={(e) => this.goToStoryPage(e)} text="Choose B"/>
        </section>
      </div>
    )
  }
}

StoryPage.contextTypes = {
  router: React.PropTypes.object
}
