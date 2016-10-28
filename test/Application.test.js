import React from 'react';
import { shallow, mount } from 'enzyme';
import { assert, expect } from 'chai';
import sinon from 'sinon';

import Application from '../components/Application';
import Buttons from '../components/Buttons';

describe('Application', () => {

  context('shallow tests', () => {
    const wrapper = shallow(<Application />);

    it('renders as a <div>', () => {
      assert.equal(wrapper.type(), 'div');
    });

    it('has an onStart Button component', () => {
      assert.lengthOf(wrapper.find('Buttons'), 1);
      // expect(wrapper.contains(<Buttons />)).to.equal(true);
    });

  });

  context('mount tests', () => {
    const wrapper = mount(<Application />);
    const startButton = wrapper.find('button');
    const onStartStub = sinon.spy();

      it('should activate the onClick function on click', () => {
        startButton.simulate('click');
      });
    });
    // it('should call the Start prop when clicked', () => {
    //   const button = mount(<Buttons />);
    //   );
    // });
  // });


});
