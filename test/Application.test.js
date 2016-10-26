import React from 'react';
import { shallow, mount } from 'enzyme';
import { assert } from 'chai';
import { spy } from 'sinon';

import Application from '../components/Application';

describe('Application', () => {
  const buttonProps = {
    className: "hello",
    text: "send",
    handleClick: spy()
  };

  context('shallow tests', () => {
    const wrapper = shallow(<Application />);

    it('renders as a <div>', () => {
      assert.equal(wrapper.type(), 'div');
    });

    it('has an onStart Button component', () => {
      assert.lengthOf(wrapper.find('Buttons'), 1);
    });
    // it('should activate the onClick function on click', () => {
    //
    // });

  });

  context('mount tests', () => {
    // const wrapper = mount(<Application />);
    // const startButton = wrapper.find('button');
    //
    //   it('should activate the onClick function on click', () => {
    //     startButton.simulate('click');
    //     assert.ok(buttonProps.handleClick.calledOnce);
    //   });
    // });
    // it('should call the Start prop when clicked', () => {
    //   const button = mount(<Buttons />);
    //   );
    // });
  });


});
