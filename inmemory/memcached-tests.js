const Memcached = require('memcached');

const memcached = new Memcached('127.0.0.1:11211');

memcached.set('a', 'apple', (err) => {
    if (err) {
        console.log(err);
    }
});


memcached.get('a', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});