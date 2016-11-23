import React from 'react';
import { shallow, mount } from 'enzyme';
import { assert, expect } from 'chai';
import sinon from 'sinon';

import Button from '../components/Button';

describe('Button', () => {

  context('shallow tests', () => {
    const onClickStub = sinon.spy();
    const button = shallow(<Button onClick={onClickStub}/>);

    it('renders as a <button>', () => {
      assert.equal(button.type(), 'button');
    });

    it('should have props for className and handleClick', () => {
      assert.isDefined(button.props('className'));
      assert.isDefined(button.props('handleClick'));
      assert.isDefined(button.props('result'));
    });

    it('should activate the onClick function on click', () => {
      button.simulate('click');
      assert.isFunction(onClickStub);
    });

    it('should display props.text in button', () => {
      button.simulate('click');
      assert.isDefined(button.props('text'))
    })
  });
});
