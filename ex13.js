var http = require('http')
var url = require('url')
var port = process.argv[2]

var server = http.createServer(function (req, res) {
    var parsedUrl = url.parse(req.url, true);
	var pathname = parsedUrl.pathname;
	var date = new Date(parsedUrl.query.iso)
	res.writeHead(200, { 'Content-Type': 'application/json' });
	if(pathname === '/api/parsetime') {				
		var d = {
			"hour": date.getHours(),
			"minute": date.getMinutes(),
			"second": date.getSeconds()
		}
		//
		res.write(JSON.stringify(d));
	} else if(pathname === '/api/unixtime') {
		res.write(JSON.stringify({ "unixtime": date.getTime() }));
	}	
    res.end();
})
server.listen(port)