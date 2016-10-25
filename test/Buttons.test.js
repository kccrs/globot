import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';

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
  });

  context('mount tests', () => {

  });

});
