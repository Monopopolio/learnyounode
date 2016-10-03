var bl = require('bl');
var http = require('http');

http.get(process.argv[2], function(res) {
	res.pipe(bl(function(err, data) { 
	console.log(data.length);
	console.log(data.toString());

	/*res.on("error", function(error) {
		console.log('Error: ' + error.message);
	});*/	
	 
}));
}).on('error', function(e) {
	console.log("Got error: " + e.message);
});