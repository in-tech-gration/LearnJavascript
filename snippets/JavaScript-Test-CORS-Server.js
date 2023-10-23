function testCORS(url){             

    url = url || "https://some.url";

    var createCORSRequest = function(method, url) {                 
        var xhr = new XMLHttpRequest();                 
        if ("withCredentials" in xhr) {                     
            // Most browsers.                     
            xhr.open(method, url, true);                 
        } else if (typeof XDomainRequest != "undefined") {                     
            // IE8 & IE9                     
            xhr = new XDomainRequest();                     
            xhr.open(method, url);                 
        } else {                     
            // CORS not supported.                     
            xhr = null;                 
        }                 
        return xhr;             
    };              

    var method  = 'GET';             
    var xhr     = createCORSRequest( method, url );              
    xhr.onload  = function() { console.log( true, "yes" ); };              
    xhr.onerror = function() { console.log( false, "no" ); };              
    xhr.send();             
}          

testCORS();