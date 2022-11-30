'use strict';

require('dotenv').config();
const PORT = process.env.PORT || 3002;

const server = require('./src/server');

server.start(PORT);