var fs = require("fs");

fs.readFile( 'file.txt', function(err, data){
	if ( ! err ){
		console.log(data);
	}
});

/* READ FILE SYNCHRONOUSLY IN VARIABLE */

var file = fs.readFileSync( "file.html", "UTF-8");


