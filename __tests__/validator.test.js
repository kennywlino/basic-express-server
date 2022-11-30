'use strict';

const validator = require('../src/middleware/validator.js');

describe('Validator middleware', () => {
  let req = {query: {name: 'JoJo'}};
  let res = {};
  let next = jest.fn();

  it('validates query as expected', () => {
    validator(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });

  it('fails if no query name property', () => {
    req = {query: {notName: 'JoJo'}};
    validator(req, res, next);
    expect(next).toHaveBeenCalledWith('No name given.');
  });
});