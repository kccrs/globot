import React, { Component } from 'react';
import storyText from '../content/storyText';

// structure the route so that it looks like /page1

export default class StoryPage extends Component {

  getStoryText() {
    console.log('Here is some text');
    // var pageId = this.context.router.params.pagename
    // assuming pageId === 'page1'
    // return storyText.pageId
    // storyText.page1
  }

  goToStoryPage(e) {
    e.preventDefault();
    // this.context.router.transitionTo(/:pagenumber);
    return console.log("what is happening?");
  }

  render () {
    return (
      <div className="StoryPage">
        <h1>Page title</h1>
        <section className="pageText">
          {getStoryText()}
        </section>
        <Buttons className="first-choice" handleClick={(e) => this.gotToStoryPage(e)} text="Choose"/>
      </div>
    )
  }
}

StoryPage.contextTypes = {
  router: React.PropTypes.object
}
