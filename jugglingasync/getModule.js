var http = require('http');

module.exports = function(url, index, endCallback) {
	http.get(url, function(response) {
		var completeData = '';

		response.on('data', function(data) {
			completeData += data.toString();
		});

		response.on('end', function() {
			endCallback(completeData, index);
		});
	});
}
