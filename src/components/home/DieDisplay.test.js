import expect from 'expect';
import React from 'react';
import {shallow} from 'enzyme';
import DieDisplay from './DieDisplay';

function setup(value, isRolling) {
  const props = {
    value: value,
    isRolling: isRolling
  };

  return shallow(<DieDisplay {...props} />);
}

describe('DieDisplay Tests', () => {
  it('Displays value when value is not null and isRolling is false', () => {
    const wrapper = setup(4, false);
    expect(wrapper.find('div').text()).toEqual('4');
  });

  it('Displays blank when value is not null and isRolling is true', () => {
    const wrapper = setup(4, true);
    expect(wrapper.find('div').text()).toEqual('');
  });

  it('Displays blank when value is null and isRolling is false', () => {
    const wrapper = setup(null, false);
    expect(wrapper.find('div').text()).toEqual('');
  });
});
