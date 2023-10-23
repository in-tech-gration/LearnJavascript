// JavaScript-Pad-Milliseconds

function padMs ( num ) { 

    return ( num  < 10 ) ? '00' + String( num ) : ( num  < 100 ) ? '0' + String( num ) : String( num ); 

}
