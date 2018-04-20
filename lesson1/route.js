const route = (pathName, handle, res, postData) => {
	if (typeof handle[pathName] === 'function') {
		return handle[pathName](res, postData)
	} else {
		console.log("No request handler found for " + pathName);
		res.writeHead(404, {
			"Content-Type": "text/plain"
		});
		res.write("404 Not found");
		res.end();
	}
}
exports.route = route