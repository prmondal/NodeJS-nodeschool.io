var fs = require('fs'),
	path = require('path');

module.exports = function(dirname, ext, callback) {
	fs.readdir(dirname, function(err, list) {
		var extFilter = '.' + ext;

		if(err) {
			return callback(err);
		}

		var filteredList = [];

		list.forEach(function(f) {
			if(path.extname(f) === extFilter) {
				filteredList.push(f);
			}
		});

		callback(null, filteredList);
	});
}