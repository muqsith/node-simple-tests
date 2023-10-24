const fs = require("fs-extra");

const run = async () => {
  const dirFiles = await fs.readdir("/home/mui/Downloads");
  console.log(dirFiles);
};

run();
