import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
import Application from '../components/Application';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Application />, div);
});
