const path = require("path");
const fs = require("fs");
const { Transform, PassThrough } = require("stream");
const getReadLineStream = require("streaming-line-reader");

const inputFile = path.resolve("/home/mui/Development/data/all-domains.json");
const outputFile = path.resolve(
  "/home/mui/Development/data/all-domains-out.json",
);

// PassThrough is a stream that does nothing to the data but just allows datat to pass though it

class PurifyJson extends Transform {
  constructor(options) {
    super(options);
  }

  _transform(chunk, encoding, callback) {
    const str = chunk.toString("utf8");
    const domainObject = JSON.parse(str);
    domainObject.domain = "xxxxxxx";
    callback(null, JSON.stringify(domainObject) + "\n");
  }
}

async function test() {
  const inputStream = await getReadLineStream(inputFile);
  const outputStream = fs.createWriteStream(outputFile);
  const purifyJsonStream = new PurifyJson();
  inputStream.pipe(purifyJsonStream).pipe(outputStream);
}

test();
