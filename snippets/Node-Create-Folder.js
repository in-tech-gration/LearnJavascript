var fs  = require('fs');
var dir = './tmp';

function dirExistsSync(d) {
  try { 
  	fs.statSync(d).isDirectory();
  	return true;
  } catch (e) { 
  	return false;
  }
}

if ( ! dirExistsSync(dir) ){
	console.log( "Creating directory " + dir );
	fs.mkdirSync( dir );
}

/* Deprecated: fs.exists, fs.existsSync

if ( ! fs.existsSync( dir ) ){

    fs.mkdirSync( dir );

}

*/
