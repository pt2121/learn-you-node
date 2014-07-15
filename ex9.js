var http = require('http')
var bl = require('bl')
var m = {};

var funcs 

for (var i = 2; i < 5; i++) {
  (function(x) {
	http.get(process.argv[x], function(res) {
		res.pipe(bl(function (err, data) { 
				m[x] =  data.toString();
				//console.log(m[x]);
				if(2 in m && 3 in m && 4 in m) {
					for (var j = 2; j < 5; j++) {
					  console.log(m[j]);
					}
				}
			}))
	})
  }) (i)
}

