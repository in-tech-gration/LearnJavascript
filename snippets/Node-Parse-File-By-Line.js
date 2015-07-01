var fs       = require('fs');
var readline = require('readline');
var filename = '/path/to/file';

var rd = readline.createInterface({

    input    : fs.createReadStream( filename ),
    output   : process.stdout,
    terminal : false

});

rd.on( 'line', function(line) {

    console.log( line );

});

/* http://stackoverflow.com/questions/6156501/read-a-file-one-line-at-a-time-in-node-js */
