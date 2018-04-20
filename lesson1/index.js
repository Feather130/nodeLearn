const server = require('./server');
const route = require('./route');
const reqHandles = require('./reqHandles');

server.start(route.route)