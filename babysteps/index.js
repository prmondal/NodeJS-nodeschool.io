var l = process.argv.length;

var result = 0;

for(var i = 2; i < l; i++) {
	result += parseInt(process.argv[i]);
}

console.log(result);