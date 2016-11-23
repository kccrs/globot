require('./styles/style.scss');
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import Application from './components/Application';
import StoryPage from './components/StoryPage';
import NotFound from './components/NotFound';

const Root = () =>  {
  return (
    <BrowserRouter>
      <div>
        <Miss component={NotFound} />
        <Match exactly pattern="/" component={Application} />
        <Match pattern="/:pageId" component={StoryPage} />
      </div>
    </BrowserRouter>
  )
};

render(<Root />, document.querySelector('#application'));
