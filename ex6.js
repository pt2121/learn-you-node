var ff = require('./filterFiles')
var dir = process.argv[2]
var ext = process.argv[3]
ff(dir, ext, function(err, data) {
	data.forEach(function (e) {console.log(e)});
})
