import React, { Component } from 'react';
import storyText from '../content/storyText';
import Button from './Button';

export default class Text extends Component {

  textToSpeech(e) {
    e.preventDefault();
    // let pageId = this.props.textKey;

    // var tellStory = window.speechSynthesis;

    var msg = new SpeechSynthesisUtterance('Hello World');
    // var voices = window.tellStory.getVoices();

    // msg.voice = voices[0];
    window.speechSynthesis.speak(msg);
    // tellStory.speak(msg);
    }

  render () {
    let pageId = this.props.textKey;

    return (
      <section className="story">
        <p>{storyText[pageId].pageText}</p>
        <div>
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
