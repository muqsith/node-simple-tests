const circle = require('./circle');
const spacer = require('./spacer');

console.log('Diameter with raidus 5 : ', circle.diameter(5));

console.log('app.js (require.main === module) check', !!(require.main === module));


spacer('Hello');

setTimeout(() => {
    spacer('World')
}, 1500);
