const path = require('path');
const fs = require('fs-extra');


const mock = require('mock-fs');

// mock({
//   '/tmp/to/fake/dir': {
//     'some-file.txt': 'file content here',
//     'empty-dir': {/** empty directory */}
//   },
//   '/tmp/to/some.png': Buffer.from([8, 6, 7, 5, 3, 0, 9]),
//   '/tmp/to/other/path': {/** another empty directory */}
// });

async function test() {
  mock();
  const dir = path.resolve('trmp', 'to', 'fake', 'dir');
  await fs.ensureDir(dir);
  const filePath = path.resolve(dir, 'hello.txt');
  await fs.writeFile(filePath, 'Hello World');
  const data = await fs.readFile(filePath);
  console.log(data.toString('utf-8'));
  mock.restore();

  // real data
  const sampleFilePath = path.resolve(__dirname, '..', 'data', 'sample.txt');
  console.log(sampleFilePath);
  const sampleData = await fs.readFile(sampleFilePath);
  console.log(sampleData.toString('utf-8'));
}


test();;
