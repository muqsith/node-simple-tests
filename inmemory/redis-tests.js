const path = require('path');
const { Writable } = require('stream');
const redis = require('redis');
const getReadLineStream = require('streaming-line-reader');



const inputFile = path.resolve('/home/mui/Development/data/enwiktionary.json');

class RedisWriter extends Writable {
    constructor(redisClient, options) {
        super(options);
        this.cachedObjectLifeTime = 600; // value in seconds (600 = 10 minutes)
        this.redisClient = redisClient;
        this.failed = 0;
        this.insertedCount = 0;
    }

    _write(chunk, encoding, callback) {
        const str = chunk.toString('utf8');
        try {
            const o = JSON.parse(str);
            this.redisClient.set(o.id, o.data, (err) => {
                if (err) {
                    callback(err);
                } else {
                    this.insertedCount += 1;
                    callback();
                }
            });
        } catch (e) {
            this.failed += 1;
            console.log(`Failed ${this.failed}`);
            callback();
        }
    }
}

async function _main() {
    const lineStream = await getReadLineStream(inputFile);
    const redisClient = redis.createClient();
    const redisWriter = new RedisWriter(redisClient);
    lineStream.pipe(redisWriter);
    redisWriter.on('finish', () => {
        redisClient.end();
    });
}

_main();
