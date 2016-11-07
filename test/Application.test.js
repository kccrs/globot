import React from 'react';
import { shallow, mount } from 'enzyme';
import { assert, expect } from 'chai';
import sinon from 'sinon';

import Application from '../components/Application';
import Button from '../components/Button';

describe('Application', () => {

  context('shallow tests', () => {
    const wrapper = shallow(<Application />);

    it('renders as a <div>', () => {
      assert.equal(wrapper.type(), 'div');
    });

    it('has an onStart Button component', () => {
      assert.lengthOf(wrapper.find('Button'), 1);
    });

  });

  context('mount tests', () => {
    const wrapper = mount(<Application />);
    const startButton = wrapper.find('button');
    const onStartStub = sinon.spy();

    // it('should activate the onClick function on click', () => {
    //   startButton.simulate('click');
    //   assert.isFunction(onStartStub);
    // });
  });
});
