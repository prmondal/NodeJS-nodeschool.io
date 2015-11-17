var http = require('http'),
	url = require('url'),
	bl = require('bl'),
	endpoints = ['/api/parsetime', '/api/unixtime'];

http.createServer(function(req, res) {
	var urlData = url.parse(req.url, true);

	var jsonResp = {};

	if(urlData.pathname === endpoints[0]) {
		var time = new Date(Date.parse(urlData.query.iso));

		jsonResp.hour = time.getHours();
		jsonResp.minute = time.getMinutes();
		jsonResp.second = time.getSeconds();
	} else if(urlData.pathname === endpoints[1]) {
		jsonResp.unixtime = Date.parse(urlData.query.iso);
	}

	res.writeHead(200, { 'Content-Type': 'application/json'});
	res.end(JSON.stringify(jsonResp));
}).listen(process.argv[2]);

/*
	────────────────────────────────────────────────────────────────────────────

   var http = require('http')
   var url = require('url')
   function parsetime (time) {
     return {
       hour: time.getHours(),
       minute: time.getMinutes(),
       second: time.getSeconds()
     }
   }
   function unixtime (time) {
     return { unixtime : time.getTime() }
   }

   var server = http.createServer(function (req, res) {
     var parsedUrl = url.parse(req.url, true)
     var time = new Date(parsedUrl.query.iso)
     var result

     if (/^\/api\/parsetime/.test(req.url))
       result = parsetime(time)
     else if (/^\/api\/unixtime/.test(req.url))
       result = unixtime(time)

     if (result) {
       res.writeHead(200, { 'Content-Type': 'application/json' })
       res.end(JSON.stringify(result))
     } else {
       res.writeHead(404)
       res.end()
     }
   })
   server.listen(Number(process.argv[2]))

*/


