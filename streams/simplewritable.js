const { Writable } = require("stream");
class SimpleWritable extends Writable {
  constructor(options) {
    super(options);
    if (options) {
      this.rl = options.rl;
    }
    this.line = "";
  }

  _write(chunk, encoding, callback) {
    if (this.rl) {
      if (["\r\n", "\n", "\r", "\n\r"].indexOf(chunk.toString()) === -1) {
        this.line += chunk.toString("utf8");
      } else {
        console.log(JSON.parse(this.line).endTime);
        this.line = "";
      }
    } else {
      console.log(chunk.toString());
    }
    callback();
  }

  _writev(chunks, encoding, callback) {
    console.log("CHUNKS OUT: ", chunks);
    callback();
  }
}

module.exports = SimpleWritable;
