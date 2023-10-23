// REMOVE ALL FALSY VALUES FROM AN ARRAY
// Source: http://jsforallof.us/2014/10/03/cool-es5-array-method-uses/

var arr = ["", 1, "foo", 0, "bar"];
console.log(arr.filter(Boolean)); // [1, "foo", "bar"]

