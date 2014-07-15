var fs = require('fs')
var path = require('path')

module.exports = function (dir, ext, callback) {

	fs.readdir(dir, function(err, list) {
		if(err)
			return callback(err);
		var l = list.filter(function(element) {
			return path.extname(element) === '.' + ext;
		})
		callback(null, l)
	})

}
