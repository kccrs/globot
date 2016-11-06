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
  componentDidMount() {
    this.createVoiceList();
  }

  createVoiceList() {
    console.log('is anything happening?');
    // return (
      // <select name="voices" className="voices">
      //   <option value="Whisper">Whisper</option>
      //   <option value="Sara">Sara</option>
      //   <option value="Zarvox">Zarvox</option>
      // </select>
    // )
    // this.allVoices.map(voice => {
    //   <option value={voice.name}>{voice.name}</option>
    // });
    // window.speechSynthesis.getVoices().forEach((voice) => {
    //   console.log(voice.name);
    //   // return (<option value={voice.name}>{voice.name}</option>);
    // });
    // debugger;
    let something = window.speechSynthesis.getVoices();

    React.Children.map(something, () => {
      console.log(voice.name);
    });
  }

  textToSpeech(e) {
    e.preventDefault();
    let pageId = this.props.textKey;

    var msg = new SpeechSynthesisUtterance(storyText[pageId].pageText);
    // msg.voice = speechSynthesis.getVoices().filter((voice) => {
    //   return voice.name = document.querySelector('voices').value;
    // });


    msg.voice = window.speechSynthesis.getVoices().filter((voice) => {
       return voice.name === 'Bahh';
      //  return voice.name === document.querySelector('.voices').val();
     })[0];

    speechSynthesis.speak(msg);

  //   <Speech
  // text="I have altered my voice"
  // voice="Google UK English Female" />
  }

//   speechSynthesis.getVoices().forEach(function(voice) {
//   console.log(voice.name, voice.default ? '(default)' :'');
// });

  render () {
    let pageId = this.props.textKey;

    return (
      <section className="story">
        <p className="printed-text">{storyText[pageId].pageText}</p>
        <div className="read-aloud">
          <label className="choices">Choose a voice:
            <select name="voices" className="voices">
              <option value="Whisper">Whisper</option>
              <option value="Bahh">Bahh</option>
              <option value="Boing">Boing</option>
              <option value="Bubbles">Bubbles</option>
              <option value="Good News">Good News</option>
              <option value="Pipe Organ">Pipe Organ</option>
              <option value="Princess">Princess</option>
              <option value="Tessa">Tessa</option>
              <option value="Ting-Ting">Ting-Ting</option>
              <option value="Trinoids">Trinoids</option>
              <option value="Google US English">Google US English</option>
              <option value="Google UK English Male">Google UK English Male</option>
              <option value="Google español">Google español</option>
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
