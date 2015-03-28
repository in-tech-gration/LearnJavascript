<input type="file" id="fileInput" multiple>

var fileInput = document.getElementById('fileInput');

fileInput.addEventListener('change', function(e) {
	var files = fileInput.files;

    [].slice.apply(files).forEach(function(file){
       	console.log(file);
    });

});
