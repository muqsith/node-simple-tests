const { createRequireFromPath } = require('module');

console.log(typeof createRequireFromPath);

const modules = createRequireFromPath('./modules');

const square = modules('./square');

console.log(square.area(10));
