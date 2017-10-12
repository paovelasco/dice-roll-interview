import expect from 'expect';
import React from 'react';
import {shallow} from 'enzyme';
import HistoryDisplay from './HistoryDisplay';

function setup(rollHistory) {
  const props = {
    rollHistory: rollHistory,
    onClearHistor: () => {}
  };

  return shallow(<HistoryDisplay {...props} />);
}

describe('HistoryDisplay Tests', () => {
  it('Does not display history if history is empty', () => {
    const wrapper = setup([]);
    expect(wrapper.find('div').length).toBe(0);
  });

  it('Shows history if history is not empty', () => {
    const wrapper = setup([[3,2]]);
    expect(wrapper.find('div').length).toBe(2);
  });
});
