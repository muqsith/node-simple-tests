const fs = require('fs');
const { Transform, PassThrough } = require('stream');

const fileType = require('file-type');

// const inFile = '/home/mui/Pictures/22-umavi.gif-for-web-normal.gif';
// const outFile = '/home/mui/Downloads/out.jpg';

const inFile = '/home/mui/Pictures/high-res-images/10.png';
const outFile = '/home/mui/Downloads/out.png';

const readStream = fs.createReadStream(inFile);


class CheckFileTypeInStream extends Transform {
    constructor(options) {
        super(options);
        this.chunksList = [];
        this.getChunksTotalSize = this.getChunksTotalSize.bind(this);
        this.getFullChunk = this.getFullChunk.bind(this);
        this.imageFileType = null;
    }

    getChunksTotalSize() {
        return this.chunksList.reduce((acc, buf) => {
            return acc + buf.length;
        }, 0);
    }

    getFullChunk() {
        return Buffer.concat(this.chunksList, this.getChunksTotalSize());
    }

    _transform(chunk, encoding, callback) {
        if (!this.imageFileType) {
            this.chunksList.push(chunk);
            if (this.getChunksTotalSize() >= fileType.minimumBytes) {
                const fullChunk = this.getFullChunk();
                this.imageFileType = fileType(fullChunk);
                this.chunksList = [];
            }
        }

        callback(null, chunk);
    }
}

const checkFileTypeInStream = new CheckFileTypeInStream();

const writeStream = fs.createWriteStream(outFile);
writeStream.on('close', () => {
    console.log('Image file type: ', checkFileTypeInStream.imageFileType);
});

readStream.pipe(checkFileTypeInStream).pipe(writeStream);
