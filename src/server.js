'use strict';

const express = require('express');
const cors = require('cors');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const notFound = require('./handlers/404');
const errorHandler = require('./handlers/500');

// instance of our server 
const app = express();

// middleware
app.use(cors());
// app.use(logger);

// basic endpoint
// here we've added the "logger" middleware we created
// specifically for this route as opposed to all routes
app.use(logger);

app.get('/', logger, (req, res, next) => {
  res.status(200).send('Hello world');
});

app.get('/person', validator, (req, res, next) => {
  res.status(200).send({
    name: req.query.name,
  });
});

// our custom error handlers
app.use(notFound);
app.use(errorHandler);

function start(port) {
  app.listen(port, () => console.log(`listening on ${port}`));
}

module.exports = { start, app };