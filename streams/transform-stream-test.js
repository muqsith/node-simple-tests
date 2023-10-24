const path = require("path");
const fs = require("fs");
const { Transform, PassThrough } = require("stream");

const inputFile = path.resolve("/home/mui/Development/data/products.json");
const outputFile = path.resolve("/home/mui/Development/data/products-out.json");

// PassThrough is a stream that does nothing to the data but just allows datat to pass though it

class PurifyJson extends Transform {
  constructor(options) {
    super(options);
  }

  _transform(chunk, encoding, callback) {
    const str = chunk.toString("utf8");
    callback(null, JSON.stringify(str.length) + "\n");
  }

  _flush(callback) {
    callback();
  }
}

async function test() {
  const inputStream = fs.createReadStream(inputFile);
  const outputStream = fs.createWriteStream(outputFile);
  const purifyJsonStream = new PurifyJson();
  inputStream.pipe(purifyJsonStream).pipe(outputStream);
}

test();
