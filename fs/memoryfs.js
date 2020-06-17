const path = require('path');
const MemoryFileSystem = require('memory-fs');
const fs = new MemoryFileSystem();

async function test() {
    const dir = path.resolve('trmp', 'to', 'fake', 'dir');
    //await fs.ensureDir(dir);
    const filePath = path.resolve(dir, 'hello.txt');
    fs.writeFile(filePath, 'Hello World', () => {});
    const data = await fs.readFile(filePath);
    console.log(data.toString('utf-8'));
  
    // real data
    const sampleFilePath = path.resolve(__dirname, '..', 'data', 'sample.txt');
    console.log(sampleFilePath);
    const sampleData = await fs.readFile(sampleFilePath);
    console.log(sampleData.toString('utf-8'));
  }
  
  
  test();