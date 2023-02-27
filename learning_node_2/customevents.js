var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('my_event', () => {
    eventEmitter.emit('bhai');
  console.log('data received successfully.');
});

eventEmitter.on('bhai', () => {
    console.log('Bhaiya me bhaiya Akhil bahiya');
  });
  

eventEmitter.emit('my_event');