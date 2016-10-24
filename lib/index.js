require('../styles/style.scss');
const React = require('react');
const { render } = require('react-dom');
import { Router, Route, browserHistory } from 'react-router';

import Application from '../components/Application';


// render(<Application/>, document.getElementById('application'));

render ((
  <Router history={browserHistory}>
    <Route path="/" component={Application}/>
  </Router>
), document.getElementById('application'
));
