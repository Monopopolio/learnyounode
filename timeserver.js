var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function(socket) {

	socket.end(strftime('%F %H:%M') + ('\n'));
	console.log('Alguien llama ');
	console.log(strftime('%F %T'));

});
server.listen(process.argv[2]);
console.log('Estoy escuchando en el puerto: ' + process.argv[2]);