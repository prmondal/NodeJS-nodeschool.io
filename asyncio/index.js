var fs = require('fs'),

fs.readFile(process.argv[2], function(err, buff) {
	if(!err) console.log( buff.toString().split('\n').length - 1);
});

/*
var fs = require('fs'),
	buff = fs.readFile(process.argv[2], 'utf8', function(err, buff) {
		if(!err) console.log( buff.split('\n').length - 1);
	});
*/