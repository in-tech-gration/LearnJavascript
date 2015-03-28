var url = require('url');
	url.parse('http://domain.com/page/file.html?query=string');

// PARSE QUERY STRING ALSO

var link = url.parse( 'http://domain.com/page/file.html?query=string', true );

console.log( link.query["query"] );