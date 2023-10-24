const fs = require("fs");
const getReadLineStream = require("streaming-line-reader");

process.on("uncaughtException", (err) => {
  console.log(err);
});

async function _main() {
  const dataFile = "/home/mui/Development/data/enwiktionary.json";
  const outFile = "/home/mui/Development/data/enwiktionary_out.json";
  const readLineStream = await getReadLineStream(dataFile);
  const writeStream = fs.createWriteStream(outFile);
  readLineStream.pipe(writeStream);
}

_main();
