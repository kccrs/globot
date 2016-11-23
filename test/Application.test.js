import React from 'react';
import { shallow, mount } from 'enzyme';
import { assert, expect } from 'chai';
import sinon from 'sinon';

import Application from '../components/Application';
import Button from '../components/Button';

describe('Application', () => {

  context('shallow tests', () => {
    const wrapper = shallow(<Application />);
    const onClickStub = sinon.spy();
    const startButton = shallow(<Button onClick={onClickStub}/>);

    it('renders as a <div>', () => {
      assert.equal(wrapper.type(), 'div');
    });

    it('has an onStart Button component', () => {
      assert.lengthOf(wrapper.find('Button'), 1);
    });

    it('should activate the onClick function on click', () => {
      assert.isFunction(onClickStub);
    });
  });
});
