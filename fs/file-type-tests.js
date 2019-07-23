const fs = require('fs');
const { PassThrough } = require('stream');

const fileType = require('file-type');

// const inFile = '/home/mui/Downloads/GIF_22-umavi.gif-for-web-normal.gif';
// const outFile = '/home/mui/Downloads/out.gif';

const inFile = '/home/mui/Downloads/10.png';
const outFile = '/home/mui/Downloads/out.png';
const outFile2 = '/home/mui/Downloads/out2.png';

const readStream = fs.createReadStream(inFile);
//const writeStream = fs.createWriteStream(outFile);


const p1 = new PassThrough();
const p2 = new PassThrough();

// console.log(fileType.minimumBytes);

// readStream.once('data', (d) => {

//     console.log(d, d.length);
// });

// readStream.on('data', (d) => {
//     console.log(d, d.length);
// });

//const chunk = readStream.read(fileType.minimumBytes);
// console.log(fileType(chunk));
// readStream.unshift(chunk);
// readStream.pipe(writeStream);


readStream.pipe(p1);
readStream.pipe(fs.createWriteStream(outFile2));
