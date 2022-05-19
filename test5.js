var events = require('events');
var eventEmitter = new events.EventEmitter();
 // Create an event handler:
 var myEventHandler = function () {
     console.log('Welcome to GeeksforGeeks');
 }
 var myEventHandler1 = function () {
     console.log('Welcome to Prelude');
 }
 // Assign the event handler to an event:
 eventEmitter.on('Prelude', myEventHandler);
 eventEmitter.on('Praveen', myEventHandler1);
 // Fire the 'geeks' event:
 eventEmitter.emit('Prelude');
eventEmitter.emit('Praveen');