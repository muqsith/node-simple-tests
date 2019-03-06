//const mock = require('mock-fs-require-fix');
const mock = require('mock-fs');

mock({
  '/tmp/to/fake/dir': {
    'some-file.txt': 'file content here',
    'empty-dir': {/** empty directory */}
  },
  '/tmp/to/some.png': new Buffer([8, 6, 7, 5, 3, 0, 9]),
  '/tmp/to/other/path': {/** another empty directory */}
});
