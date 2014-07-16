var net = require('net')
function twoDigit (x) {
     return x = (x < 10 ? '0' : '') + x
}
var server = net.createServer(function (socket) {
  //socket.on('data', function() {
    var date = new Date()
    socket.end(date.getFullYear() + 
	'-' + twoDigit(date.getMonth() + 1) + 
	'-' + twoDigit(date.getDate()) +
	' ' + twoDigit(date.getHours()) +
	':' + twoDigit(date.getMinutes()) + '\n')
    //socket.end()
  //});
})
server.listen(process.argv[2])
//"YYYY-MM-DD hh:mm"
