const fs = require('fs');
const path = require('path');
const { Writable } = require('stream');
const Memcached = require('memcached');
const getReadLineStream = require('streaming-line-reader');



const inputFile = path.resolve('/home/mui/Development/data/enwiktionary.json');

const keysFile = path.resolve('/home/mui/Development/data/keys.txt');

class MemcachedWriter extends Writable {
    constructor(memcached, keyWriter, options) {
        super(options);
        this.cachedObjectLifeTime = 1200; // value in seconds (600 = 10 minutes)
        this.memcached = memcached;
        this.failed = 0;
        this.inserted = 0;
        this.keyWriter = keyWriter;
    }

    _write(chunk, encoding, callback) {
        const str = chunk.toString('utf8');
        try {
            const o = JSON.parse(str);
            this.keyWriter.write(o.id + '\n');
            this.memcached.set(o.id, o.data, this.cachedObjectLifeTime, (err) => {
                if (err) {
                    callback(err);
                } else {
                    this.inserted += 1;
                    callback();
                }
            });
        } catch (e) {
            this.failed += 1;
            callback();
        }
    }

    mGetInserted() {
        return this.inserted;
    }

    mGetFailed() {
        return this.failed;
    }
}

class MemcachedReader extends Writable {
    constructor(memcached, options) {
        super(options);
        this.memcached = memcached;
    }

    _write(chunk, encoding, callback) {
        const key = chunk.toString('utf8').split('\n')[0];
        this.memcached.get(key, (err, result) => {
            if (err) {
                callback(err);
            } else {
                console.log(result);
                callback();
            }
        });
    }
}

async function _main() {
    const lineStream = await getReadLineStream(inputFile);
    const memcached = new Memcached('localhost:11211');

    const keyWriter = fs.createWriteStream(keysFile);

    const memcachedWriter = new MemcachedWriter(memcached, keyWriter);
    lineStream.pipe(memcachedWriter);
    memcachedWriter.on('finish', async () => {
        keyWriter.end('');
        console.log('Inserted documents count: ', memcachedWriter.mGetInserted());
        const keyStream = await getReadLineStream(keysFile);
        const memcachedReader = new MemcachedReader(memcached);
        keyStream.pipe(memcachedReader);
        memcachedReader.on('finish', () => {
            memcached.end();
        });
    });
}

_main();
