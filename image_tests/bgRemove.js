const { Readable } = require("stream");
const fs = require("fs");
const fsExtra = require("fs-extra");
const { removeBackground } = require("@imgly/background-removal-node");

const input = "/home/mui/Downloads/pussinboots.jpg";
const output = "/home/mui/Downloads/pussinboots-nobg.jpg";

const getFileData = (path) => {
  return new Promise((res) => {
    const data = fs.readFileSync(path);
    return res(data);
  });
};

const run = async () => {
  const fileBuffer = await getFileData(input);
  const imageWithoutBg = await removeBackground(fileBuffer);
  const arrayBuffer = await imageWithoutBg.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const readStream = Readable.from(buffer);
  const writeStream = fs.createWriteStream(output);

  readStream.pipe(writeStream);

  // fsExtra.writeFile(output, buffer);
};

run();
