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
    this.context.router.transitionTo('/');
  }

  render () {
    let currentPage = this.props.params.pageId;
    return (
      <div className="StoryPage">
        <section className="pageText">
          <Image textKey={currentPage} />
          <Text textKey={currentPage} />
        </section>
        <footer>
          <nav className="buttonContainer">
            <section className="first-choice">
              <Buttons className="first-choice-button" handleClick={(e) => this.goToStoryPage(e, storyText[currentPage].resultA)} text="Choose A"/>
            </section>
            <section className="second-choice">
              <Buttons className="second-choice-button" handleClick={(e) => this.goToStoryPage(e, storyText[currentPage].resultB)} text="Choose B"/>
            </section>
          </nav>
          <Buttons className="start-over" handleClick={(e) => this.startOver(e)} text="Start Over" />
          <h3>GloBot</h3>
        </footer>
      </div>
    );
  };
};

StoryPage.contextTypes = {
  router: React.PropTypes.object
}
