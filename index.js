require('./styles/style.scss');
const React = require('react');
const { render } = require('react-dom');
import { BrowserRouter, Match, Miss, browserHistory } from 'react-router';

import Application from './components/Application';
// import Page from './components/Page';

render ((
  <BrowserRouter history={browserHistory}>
    <Match exactly pattern="/" component={Application} />
      
  </BrowserRouter>
  ), document.getElementById('application')
);

// <Match exactly pattern="/:page" component={Page}>

  // page1: {
  //   images: [
  //     { url: euhgaoreg, title: ueshrgousehg, top: 50px, left: 250px }
  //   ]
  // }
