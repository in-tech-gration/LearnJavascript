function download_file_curl(file_url) {

    var file_name = url.parse(file_url).pathname.split('/').pop();  // EXTRACT FILENAME
    var file = fs.createWriteStream(DOWNLOAD_DIR + file_name);
    var curl = spawn('curl', [file_url]);
    curl.stdout.on('data', function(data) { file.write(data); });   // Add data event listener for spawned curl instance
    curl.stdout.on('end', function(data) {  // Close writable stream
        file.end();
        console.log(file_name + ' downloaded to ' + DOWNLOAD_DIR);
    });
    curl.on('exit', function(code) {
        if (code != 0) {
            console.log('Failed: ' + code);
        }
    });
};