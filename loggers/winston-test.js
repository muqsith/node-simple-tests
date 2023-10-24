const fs = require("fs-extra");
const path = require("path");

const winston = require("winston");

const filename = path.resolve(__dirname, "..", "logs", "winston-test.log");

const errorStackFormat = winston.format((info) => {
  if (info instanceof Error) {
    return Object.assign({}, info, {
      stack: info.stack,
      message: info.message,
    });
  }
  return info;
});

const logger = winston.createLogger({
  transports: [
    new winston.transports.File({ filename }),
    new winston.transports.Console(),
  ],
  // format: winston.format.combine(errorStackFormat(), winston.format.json()),
  format: winston.format.combine(winston.format.ms()),
});

logger.info("hello world");
logger.error(new Error("muqsith"));
