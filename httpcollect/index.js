var http = require('http');

http.get(process.argv[2], function(response) {
	var d = '';

	response.on('data', function(data) {
		d += data.toString();
	});

	response.on('end', function() {
		console.log(d.length);
		console.log(d);
	});

	response.on('error', console.error);
});

/*
	───────────────────────────────────────────────────────────

   var http = require('http')
   var bl = require('bl')
   http.get(process.argv[2], function (response) {
     response.pipe(bl(function (err, data) {
       if (err)
         return console.error(err)
       data = data.toString()
       console.log(data.length)
       console.log(data)
     }))
   })

*/