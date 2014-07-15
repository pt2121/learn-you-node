var fs = require('fs')
var path = require('path')
var dir = process.argv[2]
var ext = '.' +  process.argv[3]
fs.readdir(dir, function(err, list) {
	var l = list.filter(function(element) {
		return path.extname(element) === ext;
	})
	//console.log(l);
	l.forEach(function(e) { console.log(e)});
	//l.forEach(console.log.bind(console));
})
