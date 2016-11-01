import React, { Component } from 'react';
import storyText from '../content/storyText';


export default class Image extends Component {
  render () {
    let pageId = this.props.textKey;

    return (
      <section className="imageArea">
        <p>
          <img
            src={storyText[pageId].imageUrl} className={storyText[pageId].imageClassName} alt={storyText[pageId].imageAlt}
          />
        </p>
      </section>
    );
  }
}
