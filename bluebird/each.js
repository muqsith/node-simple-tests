const Promise = require('bluebird');


const getPromise = (function () {
    let i = 0;
    return function () {
        i += 1;
        let j = i;
        return (
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(j);
                    resolve(j);
                }, 100);
            })
        );
    };
})();

let promises = [getPromise()];
let count = 10;

Promise.each(promises, (item) => {
    if (count > 0) {
        promises.push(getPromise());
        count -= 1;
    }
    return item;
});
