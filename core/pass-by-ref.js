const util = require('util');


function display(o) {
    setTimeout(() => {
        console.log(util.format('%j', o));
    }, 1000);
}

function test() {
    let person = {
        name: 'Muqsith',
        age: 32
    };

    display(person);
    person.name = 'Irfan';
}

test();
