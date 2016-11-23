import React, { Component } from 'react';
import classnames from 'classnames';

import Button from './Button';
import Text from './Text';
import Image from './Image';
import Image2 from './Image2';
import Image3 from './Image3';

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

    let buttonClass = classnames('first-choice-button', storyText[currentPage].choiceButton.visible);

    let secondButtonClass = classnames('second-choice-button', storyText[currentPage].secondChoiceButton.visible);

    let pageClass = classnames('StoryPage', currentPage);

    return (
      <div className={pageClass}>
        <section className="pageImage">
          <Image textKey={currentPage} />
          <Image2 textKey={currentPage} />
          <Image3 textKey={currentPage} />
        </section>
        <section className="currentPageText">
          <Text textKey={currentPage} />
        </section>
          <footer>
              <Button
                className={buttonClass}
                handleClick={(e) => this.goToStoryPage(e, storyText[currentPage].choiceButton.result)}
                text={storyText[currentPage].choiceButton.text}
              />
              <Button
                className={secondButtonClass}
                handleClick={(e) => this.goToStoryPage(e, storyText[currentPage].secondChoiceButton.result)}
                text={storyText[currentPage].secondChoiceButton.text}
              />
            <Button
              className="start-over"
              handleClick={(e) => this.startOver(e)}
              text="Start Over"
            />
        </footer>
      </div>
    );
  };
};

StoryPage.contextTypes = {
  router: React.PropTypes.object
}
