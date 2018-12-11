const readRecursive = require('fs-readdir-recursive');

const klaw = require('klaw');
const through2 = require('through2');


function useReadRecursive(dirPath) {
    return new Promise((resolve, reject) => {
        const files = readRecursive('/home/mui');
        resolve(files);
    })
}




// const excludeDirFilter = through2.obj(function (item, enc, next) {
//   if (!item.stats.isDirectory()) this.push(item)
//   next()
// })

// const items = [] // files, directories, symlinks, etc
// klaw('/home/mui')
//   //.on('error', err => excludeDirFilter.emit('error', err)) // forward the error on
//   //.pipe(excludeDirFilter)
//   .on('error', err => { console.log(err) })
//   .on('data', item => items.push(item.path))
//   .on('end', () => console.dir(items)) // => [ ... array of files without directories]



function _main() {
    useReadRecursive('/home/mui')
    .then((result) => {
        console.log(result);
    });
    console.log('do something else while promise is resolved');
}

_main();
