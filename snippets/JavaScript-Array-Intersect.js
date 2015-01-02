/**
 * Array Intersection
 * @param  {array} array_1 
 * @param  {array} array_2 
 * @return {array}         
 */
function intersection( array_1, array_2 ) {

  var _array = [];

  for ( var i in array_1 ) {

    var element = array_1[i];

    if ( array_2.indexOf( element ) > -1 ) {

      _array.push( element );

    }

  }

  return _array;

}