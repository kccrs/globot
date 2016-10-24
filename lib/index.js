require('../styles/style.scss');
const React = require('react');
const { render } = require('react-dom');

import Application from '../components/Application';


render(<Application/>, document.getElementById('application'));
