var fs = require('fs');
var path = require('path');
/*fs.readdir(process.argv[2], function callback(error, files) {
files.forEach(function (file){
		console.log(file);
	});*/

fs.readdir(process.argv[2],function (error, files){
	files.forEach(function (file){
		if(path.extname(file) == ("." + process.argv[3])){
			console.log(file);
			//console.log(file, 'Extension:',path.extname(file));
		}
	});
});		
//});