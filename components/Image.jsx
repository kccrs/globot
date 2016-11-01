import React, { Component } from 'react';
import storyText from '../content/storyText';


export default class Image extends Component {
  render () {
    return (
      <section className="imageArea">
        <p>
          <img src={storyText[0].imageUrl} className={storyText[0].imageClassName} alt={storyText[0].imageAlt}/>
        </p>
      </section>
    );
  }
}
