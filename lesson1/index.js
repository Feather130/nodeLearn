const server = require('./server');
const route = require('./route');
const reqHandles = require('./reqHandles');


const handle = {
	'/': reqHandles.start,
	'/start': reqHandles.start,
	'/upload': reqHandles.upload
}

server.start(route.route, handle)