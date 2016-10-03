var fs = require('fs');
fs.readFile(process.argv[2],
	function callback(error, data) {
		if (error) {
			console.log();
		} else {
			var string = data.toString();
			var arrayLineas = string.split('\n');
			console.log(arrayLineas.length - 1);
		}
	});