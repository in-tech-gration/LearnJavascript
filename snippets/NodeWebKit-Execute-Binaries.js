// EXECUTE BINARIES

var execFile = require('child_process').execFile;
var child;

child = execFile(filePath, function( error, stdout, stderr ) { 

  if (error) {
    console.log(error.stack); 
    console.log('Error code: '+ error.code); 
    console.log('Signal received: ' + error.signal);
  } 
  console.log('Child Process stdout: '+ stdout);
  console.log('Child Process stderr: '+ stderr);

}); 

child.on( 'exit', function ( code ) { 
    console.log( 'Child process exited with exit code ' + code );
});