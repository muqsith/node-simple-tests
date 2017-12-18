const EventEmitter = require('events'),
    testEvent = new EventEmitter()
    ;

testEvent.on('x-event', () => {
    setTimeout(() => {
        console.log('x-event emitted and received.');
    }, 5000);
});

testEvent.emit('x-event');