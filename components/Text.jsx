import React, { Component } from 'react';
import storyText from '../content/storyText';

export default (props) => {
  let story = props.pageText.map((p) => {
    return
      <p key={p.split(' ').join('').slice(0,10)} >
        {p.slice(1)}
      </p>
  });

  return (
    <div>{story}</div>
  );
};


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
