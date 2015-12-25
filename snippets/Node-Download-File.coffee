http = require('https')
fs   = require('fs')

download = (url, dest, cb) ->
  file = fs.createWriteStream(dest)
  request = http.get(url, (response) ->
    console.log "Downloading..."
    response.pipe file
    file.on 'finish', ->
      file.close cb
      console.log "Download finished."
      # close() is async, call cb after close completes.
      return
    return
  ).on('error', (err) ->
    # Handle errors
    fs.unlink dest
    # Delete the file async. (But we don't check the result)
    if cb
      cb err.message
    return
  )
  return

download "https://wordpress.org/latest.zip", "./latest.zip"