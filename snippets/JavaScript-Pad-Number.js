var pad = function( number ) {
	var r = String( number );
	return ( r.length === 1 ) ? '0' + r : r;
};

// USAGE: pad(1); --> 01, pad(20) --> 20
