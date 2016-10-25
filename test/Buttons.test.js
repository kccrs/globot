import React from 'react';
import { shallow, mount } from 'enzyme';
import { assert, expect } from 'chai';
import sinon from 'sinon';

import Buttons from '../components/Buttons';

describe('Buttons', () => {
  context('shallow tests', () => {
    const button = shallow(<Buttons />);

    it('renders as a <button>', () => {
      assert.equal(button.type(), 'button');
    });

    it('should have props for className and handleClick', () => {
      assert.isDefined(button.props('className'));
      assert.isDefined(button.props('handleClick'));
    });
    //
    // it('should activate startStory on click', () => {
    //   button.simulate('click');
    //   expect(button.state('startStory')).to.be.true;
    // });
  });

  context('mount tests', () => {
    // it() {
    //   simulate.click(button);
    //   assert(handleClick).wasCalled();
    //   assert(window.location).equals('/page-2');
    // }
  });

});
