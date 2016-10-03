var http = require('http');
var bl = require('bl');
var respuestas = Array();
var contador = 0;

function escribirResuestas() {
	respuestas.forEach(function(respuesta) {
		console.log(respuesta);
		//console.log('=================================');
	});
}

function peticion(index) {
	http.get(process.argv[2 + index], function(res) {
		res.pipe(bl(function(err, data) {
			var datos = data.toString();
			respuestas[index] = datos;
			contador++;

			if (contador === 3) {
				escribirResuestas();
			}

			//console.log('*_*====*_* ',data.length);
			//console.log(data.toString());

		}));
	}).on('error', function(e) {
		console.log("Got error: " + e.message);
	});
}

for (var i = 0; i < 3; i++) {
	peticion(i);
}