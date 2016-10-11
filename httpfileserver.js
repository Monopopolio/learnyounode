     var http = require('http');
     var fs = require('fs');

     var server = http.createServer(function(req, res) {

     	var fichero = fs.createReadStream(process.argv[3]).pipe(res);

     	res.writeHead(200, {
     		'Content-Type': 'text/plain'
     	});

     });

     server.listen(process.argv[2]);
     console.log('Estoy escuchando en el puerto: ' + process.argv[2]);