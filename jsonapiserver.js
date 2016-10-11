var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
	var objUrl = url.parse(req.url, true);
	var fecha = new Date(objUrl.query.iso);
	var objJson;
	if (req.method === 'GET') {

		if (objUrl.pathname === '/api/parsetime') {
			objJson = {
				"hour": fecha.getHours(),
				"minute": fecha.getMinutes(),
				"second": fecha.getSeconds()
			};

		} else if (objUrl.pathname === '/api/unixtime') {
			objJson = {
				"unixtime": fecha.getTime()
			};

		} else {
			res.writeHead(404, {
				'Content-Type': 'application/json'
			});

			objJson = {
				'Error': 'No has elegido la opcion correcta'
			};
		}
		res.end(JSON.stringify(objJson));

	} else {
		res.writeHead(405, {
			'Content-Type': 'application/json'
		});
		res.end('Enviame un GET');
	}
});

server.listen(process.argv[2]);
console.log('Estoy escuchando en el puerto: ' + process.argv[2]);