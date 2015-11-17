var getData = require('./getModule');

var l = process.argv.length - 2,
	queue = [];

var count = 0;

for(var i = 0; i < l; i ++) {
	getData(process.argv[i + 2], i, function(data, index) {
		queue.splice(index, 0, data);
		
		if(++count === 3) {
			for(var j = 0; j < l; j++) {
				console.log(queue[j]);
			}
		}
	});
}

/*
	
  var http = require('http')
  var bl = require('bl')
  var results = []
  var count = 0
  function printResults () {
    for (var i = 0; i < 3; i++)
      console.log(results[i])
  }
  function httpGet (index) {																																			
    http.get(process.argv[2 + index], function (response) {
      response.pipe(bl(function (err, data) {
        if (err)
          return console.error(err)

        results[index] = data.toString()
        count++

        if (count == 3)
          printResults()
      }))
    })
  }

  for (var i = 0; i < 3; i++)
    httpGet(i)
*/