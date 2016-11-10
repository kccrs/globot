import React, { Component } from 'react';
import storyText from '../content/storyText';

export default class Image2 extends Component {
  render () {
    let pageId = this.props.textKey;

    return (
      <img
        src={storyText[pageId].imageUrl2} className={storyText[pageId].imageClassName2} alt={storyText[pageId].imageAlt2}
      />
    );
  }
}
