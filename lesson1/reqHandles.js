const querystring = require('querystring');
const fs = require('fs');

const start = (res, postData) => {
	console.log('这是start');
	var body = '<html>' +
		'<head>' +
		'<meta http-equiv="Content-Type" content="text/html; ' +
		'charset=UTF-8" />' +
		'</head>' +
		'<body>' +
		'<form action="/upload" method="post">' +
		'<textarea name="text" rows="20" cols="60"></textarea>' +
		'<input type="submit" value="Submit text" />' +
		'</form>' +
		'</body>' +
		'</html>';

	res.writeHead(200, {
		"Content-Type": "text/html"
	});
	res.write(body);
	res.end();
}
const upload = (res, postData) => {
	console.log('这是upload');
	res.writeHead(200, {
		"Content-Type": "text/plain"
	});
	//res.write(`You've sent: ${postData}`);
	res.write(`You've sent: ${querystring.parse(postData).text}`);
	res.end();
}
const show = (res, postData) => {
	console.log('这是show');
	fs.readFile("/tmp/test.png", "binary", function(error, file) {
		if (error) {
			response.writeHead(500, {
				"Content-Type": "text/plain"
			});
			response.write(error + "\n");
			response.end();
		} else {
			response.writeHead(200, {
				"Content-Type": "image/png"
			});
			response.write(file, "binary");
			response.end();
		}
	});
}
exports.start = start
exports.upload = upload