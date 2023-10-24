const Fibonacci = require("./simplereadable.js");

let fib = new Fibonacci();
fib.pipe(process.stdout);
