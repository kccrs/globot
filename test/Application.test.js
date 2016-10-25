import React from 'react';
import { shallow, mount } from 'enzyme';
import { assert } from 'chai';

import Application from '../components/Application';

describe('Application', () => {

  context('shallow tests', () => {
    const wrapper = shallow(<Application />);

    it('renders as a <div>', () => {
      assert.equal(wrapper.type(), 'div');
    });

    it('has an onStart Button component', () => {
      assert.lengthOf(wrapper.find('Buttons'), 1);
    });
  });

  context('mount tests', () => {
    // const wrapper = mount(<Application />);


    // it('should call the Start prop when clicked', () => {
    //   const button = mount(
    //     <Buttons
    //       text="Start"
    //       handleClick={startStory}
    //     />
    //   );
    // });
  });


});
