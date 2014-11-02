var util = require('util');

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function (text) {

  console.log('Received data:', util.inspect(text));
  if (text === 'exit\n') {
    exit();
  }

});

function exit() {
  console.log('Exiting.');
  process.exit();
}
