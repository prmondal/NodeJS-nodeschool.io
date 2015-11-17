var filterDir = require('./filterDirectory');

filterDir(process.argv[2], process.argv[3], function(err, list) {
	if(err) {
		return console.error('Error!');
	}

	list.forEach(function(f) {
		console.log(f);
	});
});