fs = require 'fs' 

fs.writeFile "/tmp/test", "Hey there!", (err)->

    if (err)
        console.log err
    else
        console.log "The file was saved!"
