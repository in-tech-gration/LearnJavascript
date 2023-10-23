fs       = require('fs')
readline = require('readline')
filename = '/path/to/file'

read = readline.createInterface(
  input: fs.createReadStream(filename)
  output: process.stdout
  terminal: false)

read.on 'line', (line) ->
  console.log line

read.on 'close', ->
  console.log 'Finished parsing ' + filename

### http://stackoverflow.com/questions/6156501/read-a-file-one-line-at-a-time-in-node-js ###

