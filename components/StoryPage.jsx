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

  render () {
    let currentPage = this.props.params.pageId;
    return (
      <div className="StoryPage">
        <h1>GloBot: Adventures in Space</h1>
        <section className="pageText">
          <Image textKey={currentPage} />
          <Text textKey={currentPage} />
        </section>
        <section className="buttonArea">
          <Buttons className="first-choice" handleClick={(e) => this.goToStoryPage(e, storyText[currentPage].resultA)} text="Choose A"/>
          <Buttons className="second-choice" handleClick={(e) => this.goToStoryPage(e, storyText[currentPage].resultB)} text="Choose B"/>
        </section>
      </div>
    );
  };
};

StoryPage.contextTypes = {
  router: React.PropTypes.object
}
