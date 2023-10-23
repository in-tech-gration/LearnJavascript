/* 
DESCRIPTION:    DETECT IF CODE IS RUN DIRECTLY VIA node OR VIA require() 
AUTHOR:         https://github.com/pbrandt1
*/

if ( ! module.parent ) {

    // ran with `node something.js`
    app.listen(8088, function() {
        console.log('app listening on port 8088');
    })

} else {

    // used with `require('/.something.js')`
    module.exports = app;

}