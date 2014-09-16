/*
Did you ever have phantom console.log - or more specifically you've no idea where it was happening?

This tiny bit of code will help you identify where the logging is being called from. 
The nice thing is it works in the browser and in node.

Source: http://remysharp.com/2014/05/23/where-is-that-console-log
*/


['log', 'warn'].forEach(function(method) {
  var old = console[method];
  console[method] = function() {
    var stack = (new Error()).stack.split(/\n/);
    // Chrome includes a single "Error" line, FF doesn't.
    if (stack[0].indexOf('Error') === 0) {
      stack = stack.slice(1);
    }
    var args = [].slice.apply(arguments).concat([stack[1].trim()]);
    return old.apply(console, args);
  };
});