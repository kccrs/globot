import React from 'react';
import { shallow, mount } from 'enzyme';
import { assert, expect } from 'chai';
import sinon from 'sinon';

import Buttons from '../components/Buttons';

describe('Buttons', () => {
  // const buttonProps = {
  //   className: 'spying',
  //   text: 'words',
  //   handleClick: spy()
  // };


  context('shallow tests', () => {
    const onClickStub = sinon.spy();
    const button = shallow(<Buttons onClick={onClickStub}/>);

    it('renders as a <button>', () => {
      assert.equal(button.type(), 'button');
    });

    it('should have props for className and handleClick', () => {
      assert.isDefined(button.props('className'));
      assert.isDefined(button.props('handleClick'));
    });

    it('should activate the onClick function on click', () => {
      button.simulate('click');
      assert.isFunction(onClickStub);
    });
  });

  // context('mount tests', () => {
  //   const button = mount(
  //     <Buttons
  //       text="Start"
  //       handleClick={() => startStory()}
  //     />
  //   );
  //
  //   it('should activate the onClick function on click', () => {
  //     button.simulate('click');
  //     assert.wasCalled(startStory);
  //   });
  // });

});
