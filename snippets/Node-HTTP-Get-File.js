var http	= require('http');
var fs      = require('fs');
var file    = fs.createWriteStream("image.jpg");
var request = http.get("http://domain.com/custom.jpg", function(res) {
	res.pipe(file);
});
