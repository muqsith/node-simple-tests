const memoizeAsync = require('memoizeasync');

function myExpensiveComputation(cb) {
    setTimeout(() => {
        const value = parseInt((Math.random() * 100));
        cb(value);
    }, 100);
}

const memoized = memoizeAsync(myExpensiveComputation);

for (let i = 0; i < 100; i++) {
    memoized((value) => {
        console.log('value: ', value);
    });
}