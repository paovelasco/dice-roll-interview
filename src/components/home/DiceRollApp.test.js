import expect from 'expect';
import React from 'react';
import {mount} from 'enzyme';
import DiceRollApp from './DiceRollApp';

describe('DiceRollApp Tests', () => {
  it('Roll Dice button is disabled while rolling', () => {
    const wrapper = mount(<DiceRollApp />);
    const rollButton = wrapper.find('Button').first();
    expect(rollButton.text()).toEqual('ROLL DICE');
    rollButton.simulate('click');
    expect(rollButton.prop('disabled')).toBe(true);
  });
});
