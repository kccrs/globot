import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';

import Application from '../components/Application';

describe('Application', () => {

  context('shallow tests', () => {
    const wrapper = shallow(<Application />);

    it('renders as a <div>', () => {
      assert.equal(wrapper.type(), 'div');
    });

  });

  context('mount tests', () => {
    const wrapper = mount(<Application />);

    it('has an onStart Button component', () => {
      assert.lengthOf(wrapper.find('Buttons'), 1);
    });

    // it('should call the Start prop when clicked', () => {
    //   const onStartMock = jest.fn();
    //   const button = mount(
    //     <Buttons
    //       text="Start"
    //       onStart={onStartMock}
    //     />
    //   );
    // });
  });


});
