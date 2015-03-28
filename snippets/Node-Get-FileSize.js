var fs = require("fs");

function getFilesizeInBytes(filename) {

 var stats = fs.statSync(filename);
 var fileSizeInBytes = stats["size"];
 return fileSizeInBytes;

}