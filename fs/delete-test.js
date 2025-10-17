const fs = require('fs-extra');

const run = async () => {
  await fs.remove('/tmp/delete-test/temp1');
  await fs.unlink('/tmp/delete-test/temp2');
  console.log('deleted sucessfully');
};

run();
