var fs = require('fs')
var file = process.argv.slice(2)[0]
console.log(fs.readFileSync(file).toString().split('\n').length - 1)
