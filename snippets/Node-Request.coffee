# npm install request

request = require "request"

request 'http://www.google.com', (error, response, body)->

  if ( !error and response.statusCode is 200 ) then console.log body

# REQUEST WITH OPTIONS
options =
    url : "http://google.com"
    qs  : {}

request options, (error, response, body)->


# PIPING TO A FILE
destination = fs.createWriteStream './google.html' 
request( "http://google.com" ).pipe(destination)
