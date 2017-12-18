const EventEmitter = require('events');



function Observable(fn, ...args) {
    const _emitter = new EventEmitter();
    
    this.on = function(eventName, eventHandler) {
        _emitter.on(eventName, eventHandler);
    }
    process.nextTick(() => {
        fn.call(null, ...args, (err, data) => {
            if (err) {
                _emitter.emit('error', err);
            } else {
                _emitter.emit('data', data);
            }
        })
    })

}

function doSlowStringReverse(str, cb) {
    setTimeout(() => {
        if (!str) {
            cb(new Error('Empty string'), null);
        } else {
            cb(null, str.split('').reverse().join(''));
        }        
    }, 1000);
}

// doSlowStringReverse('muqsith', console.log);

let o = new Observable(doSlowStringReverse, 'a');
o.on('data', console.log);
o.on('error', console.error);



