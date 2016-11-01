import React, { Component } from 'react';
import Buttons from './Buttons';
import Text from './Text';
import Image from './Image';
import storyText from '../content/storyText';

export default class StoryPage extends Component {

  goToStoryPage(e, nextPage) {
    e.preventDefault();
    this.context.router.transitionTo(`/${nextPage}`);
  }

  startOver(e) {
    e.preventDefault();
    this.context.router.transitionTo('/page1');
  }

  render () {
    let currentPage = this.props.params.pageId;
    return (
      <div className="StoryPage">
        <h3>GloBot: Adventures in Space</h3>
        <section className="pageText">
          <Image textKey={currentPage} />
          <Text textKey={currentPage} />
        </section>
        <section className="buttonArea">
          <Buttons className="first-choice" handleClick={(e) => this.goToStoryPage(e, storyText[currentPage].resultA)} text="Choose A"/>
          <Buttons className="second-choice" handleClick={(e) => this.goToStoryPage(e, storyText[currentPage].resultB)} text="Choose B"/>
        </section>
      <footer>
          <Buttons className="start-over" handleClick={(e) => this.startOver(e)} text="Start Over" />
      </footer>
    </div>
    );
  };
};

StoryPage.contextTypes = {
  router: React.PropTypes.object
}
