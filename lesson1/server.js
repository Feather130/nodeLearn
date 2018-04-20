const http = require('http');
const url = require('url');
const start = (route) => {
    const server = http.createServer((req, res) => {
        const pathName = url.parse(req.url).pathname
        route(pathName)
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write("Hello World");
        res.end();
    })
    server.listen(8888);
}
exports.start = start;