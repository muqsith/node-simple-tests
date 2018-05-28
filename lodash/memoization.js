const _ = require('lodash');
const uuidv4 = require('uuid/v4');

let ids = [];

for (let i = 0; i < 1000; i += 1) {
    ids.push(uuidv4());
}

const get
