const pathModule = require("path");
const { exec } = require("child_process");

function createBz2file(inputFilePath, outputFilePath) {
  return new Promise((resolve, reject) => {
    const inputDirName = pathModule.dirname(inputFilePath);
    const inputFileName = pathModule.basename(inputFilePath);
    exec(
      `tar cvjf ${outputFilePath} -C ${inputDirName} ${inputFileName}`,
      (err, stdout, stderr) => {
        if (err) {
          reject(err);
        }
        resolve();
      }
    );
  });
}

const run = async () => {
  await createBz2file(
    "/home/mui/Downloads/summary-27.json",
    "/home/mui/Downloads/summary-27.json.tar.gz"
  );
};

run();
