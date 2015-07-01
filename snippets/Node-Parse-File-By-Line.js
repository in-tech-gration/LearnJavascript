var fs       = require('fs');
var readline = require('readline');
var filename = '/path/to/file';

var read = readline.createInterface({

    input    : fs.createReadStream( filename ),
    output   : process.stdout,
    terminal : false

});

read.on( 'line', function(line) {

    console.log( line );

});

read.on( 'close', function() {

    console.log( "Finished parsing " + filename );

});

/* http://stackoverflow.com/questions/6156501/read-a-file-one-line-at-a-time-in-node-js */
