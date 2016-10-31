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
        <Match exactly pattern="/" component={Application} />
        <Match pattern="/:pageId" component={StoryPage} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
};

render(<Root />, document.querySelector('#application'));


  // <Text />
  // <Buttons />
