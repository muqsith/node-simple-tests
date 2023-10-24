let fs = require("fs");

function sort(...arr) {
  return arr.sort();
}

let a = [9, 7, 0, 1, 4];

console.log(`Input array: [${a.join(", ")}]`);
console.log(sort(...a));
console.log(sort("n", "x", "h"));
