'use strict';

module.exports = (req, res, next) => {
  req.timestamp = new Date();
  console.log('Method:', req.method);
  console.log('Path:', req.path);
  next();
};