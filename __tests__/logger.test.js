'use strict';

const logger = require('../src/middleware/logger');

describe('Logger', () => {
  it('adds a timestamp', () => {
    logger(req, res, next);
    expect((req.timestamp).toBeTruthy());
    expect((req.timestamp)).toBeInstanceOf(Date);
  });
    
    
  it('logs as expected', () => {
    logger(req, res, next);
    expect(consoleSpy).toHaveBeenCalledWith('logged at', req.timestamp);    
  });
    
  it('calls next as expected', () => {
    logger(req, res, next);
    expect(next).not.toHaveBeenCalledWith('this should fail');
  });
});