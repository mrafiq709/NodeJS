// readStream object fires events when opening and closing a file
var fs = require('fs');
var rs = fs.createReadStream('./mynewfile3.txt');
rs.on('open', function () {
  console.log('The file is open');
});

// Node.js has a built-in module, called "Events"
var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');