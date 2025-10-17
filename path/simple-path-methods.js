const path = require('path');
function test_resolve() {
  let p = path.resolve();
  console.log('Empty path.resolve(): ', p);
  console.log('__dirname: ', __dirname);
  let p2 = path.resolve('/etc', 'ssl');
  console.log('p2: ', p2);

  const currentFilePath = path.resolve(__dirname, 'simple-path-method.js');
  console.log('currentFilePath: ', currentFilePath);
  let ext = path.extname(currentFilePath);
  console.log('ext: ', ext);
  let basename = path.basename(currentFilePath);
  console.log('current file basename', basename);

  const filePath = path.join(__dirname, '..', 'tmp', 'abc', 'test.txt');
  console.log('filePath: ', filePath);
  console.log('file dir name: ', path.dirname(filePath));
}

test_resolve();
