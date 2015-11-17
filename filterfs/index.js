var fs = require('fs'),
	path = require('path');

fs.readdir(process.argv[2], function(err, list) {
	var ext = '.' + process.argv[3];

	if(!err) {
		list.forEach(function(f) {
			if(path.extname(f) === ext) {
				console.log(f);	
			}
		});
	}
});