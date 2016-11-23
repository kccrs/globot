import React, { Component } from 'react';
import storyText from '../content/storyText';

export default class Image4 extends Component {
  render () {
    let pageId = this.props.textKey;

    return (
      <img
        src={storyText[pageId].imageUrl4} className={storyText[pageId].imageClassName4} alt={storyText[pageId].imageAlt4}
      />
    );
  }
}
