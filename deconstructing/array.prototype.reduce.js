// Code accompanying the video "Deconstructing Array.prototype.reduce": https://youtu.be/s02LsdIKhVY

// Array.prototype.reduce = function(){ ... }
Array.prototype.myReduce = myReduce; // <= We should never do this!

const output = [10,20,30].reduce(function( acc, val, index ){
  // console.log( index, val );
  acc["index_"+index] = { value: val * 2 };
  return acc;
}, {});
console.log( "output", output );

function myReduce( transformFn, initialValue ){
  let accumulator = ( typeof initialValue === "undefined") ? this[0] : initialValue;
  for ( let index = 0; index < this.length; index++ ){
    if ( typeof initialValue === "undefined" && index === 0 ) {
      continue;
    }
    accumulator = transformFn( accumulator, this[index], index, this );
  }
  return accumulator;
}

function sum( acc, val, index, arr ){
  acc += val;
  return acc;
}
[1,2,3,4,10,100].reduce( sum, 0 );

const arr = [[1,2],[3,4],[5]];
const flatten = ( acc, val, index, arr )=>{
  for ( const el of val ){
    acc.push( el );
  }
  return acc;
}
arr.reduce( flatten, [] );

function averageNumbers( acc, val, index, arr ){
  console.log( acc, val, index );
  acc += val;
  if ( index === (arr.length - 1) ){
    acc = acc / arr.length;
  }
  return acc;
}
// const res = [10,20,30].myReduce( averageNumbers );
// console.log("avg", res);

// 8) ArrayOfArrays => FlatArray
// const arr = [[1,2],[3,4],[5]];
// const flatten = ( acc, val, index, arr )=>{
//   for ( const el of val ){
//     acc.push( el );
//   }
//   return acc;
// }
// const flatArray = reduce( arr, flatten, [] );
// console.log( flatArray ); //=> [1,2,3,4,5];

// 7) 
function reduce( array, transformFn, initialValue ){
  // If the initialValue is empty (undefined)
  // I am going to pick the first value from the array as the initialValue
  let accumulator = ( typeof initialValue === "undefined") ? array[0] : initialValue;
  for ( let index = 0; index < array.length; index++ ){
    if ( typeof initialValue === "undefined" && index === 0 ) {
      continue;
    }
    accumulator = transformFn( accumulator, array[index], index, array );
  }
  return accumulator;
}
// const nums = [ 10, 20, 30 ];
// function averageNumbers( acc, val, index, arr ){
//   console.log( acc, val, index );
//   acc += val;
//   if ( index === (arr.length - 1) ){
//     acc = acc / arr.length;
//   }
//   return acc;
// }
// const avg = reduce( nums, averageNumbers );
// console.log( avg ); //=> 20


// 6) Array => Transformation => SomeValue
// function reduce( array, transformFn, initialValue ){
//   let accumulator = initialValue;
//   for ( const val of array ){
//     accumulator = transformFn( accumulator, val );
//   }
//   return accumulator;
// }
// const nums = [ 10, 20, 30 ];
// function summingUpNumbers( acc, val ){
//   acc += val;
//   return acc;
// }
// const sum = reduce( nums, summingUpNumbers, 0 );
// console.log( sum );

// 5) Reduce:
// 1) Accept an Array as an input
// 2) Initialize an Accumulator with some value (or none)
// 3) Iterate over Array values
// 5) Modify Accumulator based on each value from the Array
// 6) Return the Accumulator

// 4) ArrayOfArrays => FlatArray
// const arr = [[1,2],[3,4],[5]]; // => [1,2,3,4,5]
// function reduce( array ){
//   let flatArray = []; 
//   for ( const innerArray of array ){
//     // console.log( innerArray );
//     for ( const innerVal of innerArray ){
//       // console.log( innerVal );
//       flatArray.push( innerVal );
//     }
//   }
//   return flatArray;
// }
// const result = reduce( arr );
// console.log( result );

// 3) ArrayOfNumbers => Average
// const nums = [ 10, 20, 30 ];
// function reduce( array ){
//   let avg;
//   let sum = 0;
//   // Iterate over the values of the input array
//   // Accumulate the values and operate on these values
//   for ( const val of array ){
//     sum += val;
//   }
//   avg = sum / array.length;
//   return avg;
// }
// const avg = reduce( nums );
// console.log( avg );

// 2) ArrayOfNumbers => SumOfNumbers
// const nums = [ 10, 20, 30 ];
// function reduce( array ){
//   let sum = 0;
//   // Accumulate the values from the input array
//   for ( const val of array ){
//     sum = sum + val;
//   }
//   return sum;
// }
// const result = reduce( nums );
// console.log( result ); //=> 60

// 1) Number => String
// function reduce( number ){
//   return String(number);
// }
// reduce(42);
