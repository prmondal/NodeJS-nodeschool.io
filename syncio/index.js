var fs = require('fs'),
	buff = fs.readFileSync(process.argv[2]);

console.log( buff.toString().split('\n').length - 1);