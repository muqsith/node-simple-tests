const fs = require("fs-extra");
const { Writable } = require("stream");
const getReadLineStream = require("streaming-line-reader");

const inputFile = "/home/mui/Development/data/categories.json";

const tmpOut = "/tmp/categories-out.json";

fs.readJSON(inputFile).then((data) => {
  console.log(data.length);
});

class SimpleWriteStream extends Writable {
  constructor(dataArray, options) {
    super(options);
    this.dataArray = dataArray;
  }

  _write(chunk, encoding, callback) {
    const data = chunk.toString("utf8");
    let obj = null;
    try {
      obj = JSON.parse(data);
      this.dataArray.push(obj);
    } catch (e) {
      /* no need to catch */
    }
    callback();
    // if (obj) {
    //     Promise.resolve()
    //     .then(() => {
    //         this.dataArray.push(obj);
    //     })
    //     .then(() => {
    //         callback();
    //     })
    //     .catch((err) => {
    //         callback(err);
    //     })
    // } else {
    //     callback();
    // }
  }
}

async function _main() {
  const readStream = await getReadLineStream(inputFile);
  const writeStream = fs.createWriteStream(tmpOut);

  const dataArray = [];
  //const writeStream = new SimpleWriteStream(dataArray);

  readStream.pipe(writeStream);

  writeStream.on("finish", async () => {
    const data = await fs.readJSON(tmpOut);
    console.log(data.length);
  });

  // readStream.pipe(writeStream);
  // writeStream.on('finish', () => {
  //     console.log(dataArray.length);
  // });
  // writeStream.on('err', (err) => {
  //     console.log(err);
  // });
}

_main();
