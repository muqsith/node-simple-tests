const { Readable } = require("stream");

let previous = Symbol("previous");
let next = Symbol("next");

class Fibonacci extends Readable {
  constructor(options) {
    super(options);
    this[previous] = 0;
    this[next] = 1;
  }

  _read(size) {
    [this[previous], this[next]] = [this[next], this[previous] + this[next]];
    setTimeout(() => {
      this.push(this[next].toString() + "\n");
    }, 1000);
  }
}

module.exports = Fibonacci;
