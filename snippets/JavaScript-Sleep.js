!window.sleep && (window.sleep = function sleep(secs){

    for ( var end = Date.now() + secs * 1000; Date.now() < end; );    

});

// USAGE: console.log("start..."); sleep(3); console.log("...finish");
