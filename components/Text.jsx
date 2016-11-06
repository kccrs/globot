import React, { Component } from 'react';
import storyText from '../content/storyText';
import Button from './Button';

export default class Text extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //       allVoices: this.props.voices,
  //       selectedVoice: props.selectedVoice
  //     };
  //   }
  //
  // componentDidMount() {
  //   this.setState(
  //     { allVoices: speechSynthesis.getVoices() }
  //   );
  // }

  createVoiceList() {
    // this.allVoices.map(voice => {
    //   <option value={voice.name}>{voice.name}</option>
    // });
    // window.speechSynthesis.getVoices().forEach((voice) => {
    //   console.log(voice.name);
    //   // return (<option value={voice.name}>{voice.name}</option>);
    // });
    React.Children.map(window.speechSynthesis.getVoices(), (voice) => {

    console.log(voice.name);
    });
  }

  textToSpeech(e) {
    e.preventDefault();
    let pageId = this.props.textKey;

    var msg = new SpeechSynthesisUtterance(storyText[pageId].pageText);
    // var voices = window.speechSynthesis.getVoices();
    // msg.voice = voices[0];
    // msg.voice = speechSynthesis.getVoices().filter((voice) => {
    //   return voice.name = document.querySelector('voices').value;
    // });
    msg.voice = speechSynthesis.getVoices().filter((voice) => {
       return voice.name === 'Whisper';
     })[0];
    // debugger;
    speechSynthesis.speak(msg);

  //   <Speech
  // text="I have altered my voice"
  // voice="Google UK English Female" />
  }

//   speechSynthesis.getVoices().forEach(function(voice) {
//   console.log(voice.name, voice.default ? '(default)' :'');
// });
//
//
// m
// speechSynthesis.speak(msg);

//
//
  render () {
    let pageId = this.props.textKey;

    return (
      <section className="story">
        <p>{storyText[pageId].pageText}</p>
        <div className="read-aloud">
          <label>Choose a voice
            <select name="voices" className="voices">
              {this.createVoiceList()}
            </select>
          </label>
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
