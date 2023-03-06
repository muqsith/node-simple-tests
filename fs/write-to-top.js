const pathModule = require("path");
const fs = require("fs-extra");

const copyFiledata = (srcFile, dstFile) => {
  return new Promise((resolve, reject) => {
    const readStream = fs.createReadStream(srcFile);
    const writeStream = fs.createWriteStream(dstFile, { flags: "a" });
    writeStream.on("finish", () => {
      resolve();
    });
    writeStream.on("error", (err) => {
      reject(err);
    });
    readStream.pipe(writeStream);
  });
};

const run = async () => {
  const filePath = pathModule.resolve(
    __dirname,
    "..",
    "tmp",
    "write-to-top-tests",
    "somefile.txt"
  );
  const dirPath = pathModule.dirname(filePath);
  await fs.ensureDir(dirPath);
  const doesFileExists = await fs.pathExists(filePath);
  if (!doesFileExists) {
    await fs.createFile(filePath);
  }

  const someText = `Wrote number ${parseInt(
    Math.random() * 1000
  )} at ${new Date().toISOString()}\n`;

  // write to tmp file and then replace it
  const tmpFilePath = filePath + "__tmp";
  const doesTmpFileExists = await fs.pathExists(tmpFilePath);
  if (doesTmpFileExists) {
    await fs.unlink(tmpFilePath);
  }
  await fs.writeFile(tmpFilePath, someText);

  // copy actual file data to tmp file
  await copyFiledata(filePath, tmpFilePath);
  // replace tmp file with actual one
  await fs.unlink(filePath);
  await fs.move(tmpFilePath, filePath);
};

run();
