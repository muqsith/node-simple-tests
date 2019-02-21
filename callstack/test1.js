const stackTrace = require('stack-trace');
const traces = stackTrace.get();


function c() {
    console.log('how are you?');
    console.trace();
}

function b() {
    c();
}

function a() {
    b();
}


a();


for (const traceObject of traces) {
    console.log(traceObject);
}
