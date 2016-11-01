import React, { Component } from 'react';
import storyText from '../content/storyText';

export default class Text extends Component {

  render () {
    let pageId = this.props.textKey;

    return (
      <section className="story">
        <p>{storyText[pageId].pageText}</p>
      </section>
    );
  }
}
