import React, { Component } from 'react';
import storyText from '../content/storyText';
import Button from './Button';

export default class Text extends Component {

  textToSpeech(e) {
    e.preventDefault();
    let pageId = this.props.textKey;

    let msg = new SpeechSynthesisUtterance(storyText[pageId].pageText);

    msg.rate = 0.9;
    speechSynthesis.speak(msg);
  }

  render () {
    let pageId = this.props.textKey;

    return (
      <section className="story">
        <p className="printed-text">
          {storyText[pageId].pageText}
        </p>
        <div className="read-aloud">
          <Button
            className="read-text"
            handleClick={(e) => this.textToSpeech(e)}
            text="Read Aloud"
          />
        </div>
      </section>
    );
  }
}
