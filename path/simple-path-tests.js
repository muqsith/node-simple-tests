const path = require("path"),
  fs = require("fs");
//console.log(__dirname);
//console.log(path.resolve('any')); // for resolve __dirname is not required
//console.log(path.join(__dirname, 'muq')); // for join __dirname is required
//console.log(path.resolve(__dirname, 'tmp', 'dummy'));

let dirs = __dirname.split(path.sep);

let p1 = dirs.slice(0, dirs.length - 2);
console.log(
  `p1: ${__dirname
    .split(path.sep)
    .slice(0, dirs.length - 2)
    .join(path.sep)}`,
);
