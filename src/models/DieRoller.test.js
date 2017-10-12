import expect from 'expect';
import React from 'react';
import DieRoller from './DieRoller';

describe('DieRoller Tests', () => {
  it('Returns correct number of sides', () => {
    const roller = new DieRoller(5);
    expect(roller.numberOfSides).toBe(5);
  });

  it('Defaults to 6 sides if no number of sides is provided', () => {
    const roller = new DieRoller();
    expect(roller.numberOfSides).toBe(6);
  });

  it('Does not roll a value outside of its number of sides', () => {
    const roller = new DieRoller(1);
    expect(roller.rollAndGetValue()).toBe(1);
  });
});
