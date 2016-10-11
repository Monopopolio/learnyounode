 var map = require('through2-map');
 var http = require('http');

 var server = http.createServer(function(req, res) {

 	if (req.method != 'POST') {
 		return res.end('Enviame un POST\n');
 	} else {

 		req.pipe(map(function(chunk) {
 			return chunk.toString().toUpperCase();
 		})).pipe(res);
 	}

 });

 server.listen(process.argv[2]);
 console.log('Estoy escuchando en el puerto: ' + process.argv[2]);