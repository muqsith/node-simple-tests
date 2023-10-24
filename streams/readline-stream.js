const path = require("path");
const fs = require("fs");

//const dataFile = '/Users/abdulmuqsith/Development/data/942312891_T_ONTIME_REPORTING.csv';
const dataFile = "/home/mui/Development/data/orders.json";

const outFile = "/home/mui/Development/data/orders_out.json";

const getFd = (filePath) => {
  const promiseHandler = (resolve, reject) => {
    fs.open(filePath, "r", (err, fd) => {
      if (err) {
        reject(err);
      } else {
        resolve(fd);
      }
    });
  };
  return new Promise(promiseHandler);
};

const getFstat = (fd) => {
  const promiseHandler = (resolve, reject) => {
    fs.fstat(fd, (err, stat) => {
      if (err) {
        reject(err);
      } else {
        resolve(stat);
      }
    });
  };
  return new Promise(promiseHandler);
};

const getFileReader = async (filePath) => {
  const fd = await getFd(dataFile);
  const stat = await getFstat(fd);
  const fileSize = stat.size;
  let chunkSize = 16 * 1024;
  let position = 0;

  return (reader = () => {
    return new Promise((resolve, reject) => {
      if (fileSize - position < chunkSize) {
        chunkSize = fileSize - position;
      }
      fs.read(
        fd,
        Buffer.alloc(chunkSize),
        0,
        chunkSize,
        position,
        (err, bytesRead, buffer) => {
          if (err) {
            reject(err);
          } else {
            if (position < fileSize) {
              resolve(buffer.toString("utf8"));
            } else {
              resolve(null);
            }
            position += bytesRead;
          }
        },
      );
    });
  });
};

async function _main() {
  const reader = await getFileReader(dataFile);
  let data = null;

  // data = await reader();
  // console.log(data);
  // data = await reader();
  // console.log(data);

  const writeStream = fs.createWriteStream(outFile);

  while ((data = await reader())) {
    writeStream.write(data);
  }
  writeStream.end();
}

_main();
