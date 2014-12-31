var https   = require('https');
var fs      = require('fs');
var options = {
  hostname  : 'wordpress.org',
  port      : 443,
  path      : '/latest.zip',
  method    : 'GET'
};

var file = fs.createWriteStream("wp_latest.zip");

var req = https.request(options, function(res) {
  console.log("statusCode: ", res.statusCode);
  console.log("headers: ", res.headers);
  res.on('data', function(d) {
	  file.write(d);
  });
});
req.end();

req.on('error', function(e) {
  console.error(e);
});
