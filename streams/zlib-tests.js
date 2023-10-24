const fs = require("fs");
const zlib = require("zlib");

const inJsonFile = "/tmp/41bda9f7-cc92-420f-be48-c334f9465165.json";
const outGzFile = "/tmp/out.gz";
const outJsonFile = "/tmp/out.json";

const outGzStream = fs.createWriteStream(outGzFile);
outGzStream.on("finish", () => {
  fs.createReadStream(outGzFile)
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream(outJsonFile));
});
fs.createReadStream(inJsonFile).pipe(zlib.createGzip()).pipe(outGzStream);
