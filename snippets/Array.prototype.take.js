// Javascript implementation of Ruby Array::take | http://ruby-doc.org/core-2.2.0/Array.html#method-i-take

if ( ! Array.prototype.take ){
	Array.prototype.take = function( n ){
		return this.slice( 0, n );
	}	
}

// USAGE:
// [1,2,3,4,5,6,7,8,9,0].take(3);
// #=> [1,2,3]

