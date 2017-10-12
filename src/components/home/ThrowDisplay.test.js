import expect from 'expect';
import React from 'react';
import {shallow} from 'enzyme';
import ThrowDisplay from './ThrowDisplay';

function setup(dice){
  const props = {
    dice: dice,
    isRolling: false
  };

  return shallow(<ThrowDisplay {...props} />);
}

describe('ThrowDisplay Tests', () => {
  it('Will render 4 DieDisplays if we are rolling 4 dice', () => {
    const wrapper = setup([2,6,6,4]);
    expect(wrapper.children().length).toBe(4);
  });
});
