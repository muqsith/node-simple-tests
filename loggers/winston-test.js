const fs = require('fs-extra');
const path = require('path');

const winston = require('winston');

const filename = path.resolve(__dirname, '..', 'logs', 'winston-test.log');


const logger = winston.createLogger({
    transports: [
        new winston.transports.File({ filename })
    ]
});

logger.info('your are really beautiful');
logger.error('shut the Fuck up');
