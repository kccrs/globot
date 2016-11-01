import React, { Component } from 'react';
import storyText from '../content/storyText';

export default class Text extends Component {
  render () {
    // let currentPage = {storyText[0]};
    // let currentText = currentPage.pageText;
    return (
      <section>
        <p>Some stuff here!</p>
        <p>{storyText[0].pageText}</p>
      </section>
    );
  }
}

//   getStoryText() {
//     console.log('Here is some text');
//     return storyText.pageNum().text;
//     // var pageId = this.context.router.params.pagename
//     // assuming pageId === 'page1'
//     // return storyText.pageId
//     // storyText.page1
//   }
//
//   // pageNum() {
//   //   var pageId = this.context.router.params.pageId;
//   //   return 'page' + pageId;
//   // }
//
//   render() {
//     return (
//       <section className="pageText">
//         {this.getStoryText()}
//         {this.props.children}
//       </section>
//     );
//   }
// }
//
// Text.contextTypes = {
//   router: React.PropTypes.object
// }
