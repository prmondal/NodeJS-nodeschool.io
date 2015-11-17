var http = require('http'),
	bl = require('bl');

var endpoints = ['/api/parsetime', ' /api/parsetime'];

for(var i = 0, l = endpoints.length; i < l; i++) {
	http.get('http://localhost:' + process.argv[2] + endpoints[i] + '?iso=2013-08-10T12:10:15.474Z', function(response) {
		response.pipe(bl(function(err, data) {
			if(err) return console.error(err);

			console.log(JSON.stringify(data));
		}));
	});
}