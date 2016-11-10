import React, { Component } from 'react';
import storyText from '../content/storyText';

export default class Image3 extends Component {
  render () {
    let pageId = this.props.textKey;

    return (
      <img
        src={storyText[pageId].imageUrl3} className={storyText[pageId].imageClassName3} alt={storyText[pageId].imageAlt3}
      />
    );
  }
}
