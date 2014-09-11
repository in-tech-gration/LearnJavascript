function once( fn, context ) {
 
	var result;
	var run;

	return function() {
		if ( run ) return result;
		result = fn.apply( context || this, arguments );
		
		// Set to null to allow garbage collection
		run = 1;
		fn  = null;
		
		return result;
	};

}