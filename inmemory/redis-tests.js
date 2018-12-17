const path = require('path');
const fs = require('fs-extra');
const { Writable, Transform } = require('stream');
const redis = require('redis');
const getReadLineStream = require('streaming-line-reader');



const inputFile = path.resolve('/home/mui/Development/data/enwiktionary.json');
const keyFile = path.resolve('/home/mui/Development/data/enwiktionary.keys');
const outFile = path.resolve('/home/mui/Development/data/enwiktionary-redis-out.json');

class RedisWriter extends Writable {
    constructor(redisClient, options) {
        super(options);
        this.redisClient = redisClient;
    }

    _write(chunk, encoding, callback) {
        const str = chunk.toString('utf8');
        try {
            const o = JSON.parse(str);
            const key = o.id;
            this.redisClient.set(key, o.data, (err) => {
                if (err) {
                    callback(err);
                } else {
                    fs.writeFile(keyFile, key.trim() + '\n', {flag: 'a'}, (err) => {
                        if (err) {
                            callback(err);
                        } else {
                            callback();
                        }
                    });
                }
            });
        } catch (e) {
            callback(e);
        }
    }
}

class RedisReader extends Transform {
    constructor(redisClient, options) {
        super(options);
        this.redisClient = redisClient;
    }

    _transform(chunk, encoding, callback) {
        const key = chunk.toString('utf8').trim();
        this.redisClient.get(key, (err, data) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, data.trim() + '\n');
            }
        });
    }
}

async function _main() {
    const lineStream = await getReadLineStream(inputFile);
    const redisClient = redis.createClient();
    await fs.remove(keyFile);
    const redisWriter = new RedisWriter(redisClient, keyFile);
    lineStream.pipe(redisWriter);
    redisWriter.on('finish', async () => {
        const keyLineStream = await getReadLineStream(keyFile);
        const outFileStream = fs.createWriteStream(outFile);
        const transformStream = new RedisReader(redisClient);
        keyLineStream.pipe(transformStream).pipe(outFileStream);
        outFileStream.on('finish', () => {
            redisClient.quit(() => {
                console.log('Redis flushed and connection closed');
            });
        });
    });
}

_main();
