# npm install adm-zip

AdmZip = require('adm-zip')

#=== READING ARCHIVES 

zip        = new AdmZip('./my_file.zip')
zipEntries = zip.getEntries()

# AN ARRAY OF ZIPENTRY RECORDS 

zipEntries.forEach (zipEntry) ->

  console.log zipEntry.toString()
  if zipEntry.entryName == 'my_file.txt'
    console.log zipEntry.data.toString('utf8')  # outputs zip entries information 
  return

# OUTPUTS THE CONTENT OF SOME_FOLDER/MY_FILE.TXT 
console.log zip.readAsText('some_folder/my_file.txt')

# EXTRACTS THE SPECIFIED FILE TO THE SPECIFIED LOCATION 
zip.extractEntryTo 'some_folder/my_file.txt', '/home/me/tempfolder', false, true

# EXTRACTS EVERYTHING 
zip.extractAllTo '/home/me/zipcontent/', true


#=== CREATING ARCHIVES 

zip = new AdmZip

# ADD FILE DIRECTLY 
zip.addFile 'test.txt', new Buffer('inner content of the file'), 'entry comment goes here'

# ADD LOCAL FILE 
zip.addLocalFile '/home/me/some_picture.png'

# GET EVERYTHING AS A BUFFER 
willSendthis = zip.toBuffer()
# OR WRITE EVERYTHING TO DISK 
zip.writeZip '/home/me/files.zip'
