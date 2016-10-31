import React, { Component } from 'react';
import storyText from '../content/storyText';
import Buttons from './Buttons';

export default class StoryPage extends Component {
  constructor() {
    super();
    this.state = {
      // pageId: null,
      // choices: null
    };
  }

  getStoryText() {
    return storyText.pageNum().text;
    console.log('Here is some text');
    // var pageId = this.context.router.params.pageId
    // return storyText.pageId
    // storyText.page1
  }

  pageNum() {
    var pageId = this.context.router.params.pageId;
    return pageId;
  }

  goToStoryPage(e) {
    e.preventDefault();
    this.context.router.transitionTo(`/${pageId}`);
    return console.log("what is happening?");
  }

  render () {
    return (
      <div className="StoryPage">
        <h1>Hi</h1>
        <section className="pageText">
        </section>
        <section className="buttonArea">
          <Buttons className="first-choice" handleClick={(e) => this.gotToStoryPage(e)} text="Choose A"/>
          <Buttons className="second-choice" handleClick={(e) => this.goToSToryPage(e)} text="Choose B"/>
        </section>
      </div>
    )
  }
}

StoryPage.contextTypes = {
  router: React.PropTypes.object
}
