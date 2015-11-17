var map = require('through2-map'),
	http = require('http');

http.createServer(function(req, res) {
	if(req.method === 'POST') {
		req.pipe(map(function (chunk) {
		  return chunk.toString().toUpperCase();
		})).pipe(res);
	}
}).listen(process.argv[2]);



