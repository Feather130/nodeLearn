const http = require('http');
const url = require('url');
const formidable = require('formidable');

const start = (route, handle) => {
	const server = http.createServer((req, res) => {
		// if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
		// 	const form = new formidable.IncomingForm();

		// 	form.parse(req, function(err, fields, files) {
		// 		res.writeHead(200, {
		// 			'content-type': 'text/plain'
		// 		});
		// 		res.write('received upload:\n\n');
		// 		res.end(util.inspect({
		// 			fields: fields,
		// 			files: files
		// 		}));
		// 	});

		// 	return;
		// }


		let postData = "";
		const pathName = url.parse(req.url).pathname
		req.setEncoding("utf8");
		req.addListener("data", function(postDataChunk) {
			postData += postDataChunk;
			console.log(`Received POST data chunk '${postDataChunk}' .`);
		});
		req.addListener("end", function() {
			route(pathName, handle, res, postData)
		});
	})
	server.listen(8888);
}
exports.start = start;