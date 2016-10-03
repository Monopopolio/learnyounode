var fs = require('fs');
var path = require('path');
module.exports = function(directorio, extension, callback) {
	fs.readdir(directorio, function(error, files) {
		var ficherosfiltrados = Array();
		files.forEach(function(file) {
			if (path.extname(file) == ("." + extension)) {
				//console.log(file);
				ficherosfiltrados.push(file);

			}
		});
		callback(null, ficherosfiltrados);
	});
	
};