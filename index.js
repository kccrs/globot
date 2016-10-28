require('./styles/style.scss');
const React = require('react');
const { render } = require('react-dom');
import { BrowserRouter, Match, Miss, browserHistory } from 'react-router';

import Application from './components/Application';
import StoryPage from './components/StoryPage';
import NotFound from './components/NotFound';

render (
  <BrowserRouter history={browserHistory}>
    <div>
      <Match exactly pattern="/" component={Application} />
      <Match pattern="/:pageId" component={StoryPage} />
      <Miss component={NotFound} />
    </div>
  </BrowserRouter>, document.getElementById('application'));
