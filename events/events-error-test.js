const EventEmitter = require("events");

const { delay } = require("../utils");

// const eventEmitter = new EventEmitter({ captureRejections: true });
const eventEmitter = new EventEmitter();

const handleStart = () => {
  process.nextTick(async () => {
    console.log("request started");
    await delay(100);
    const num = Math.floor(Math.random() * 10);
    // if (num % 2 === 0) {
    // simulate error
    throw new Error("error occurred in request");
    // }
  });
};

const handleEnd = () => {
  console.log("request ended");
};

const handleError = () => {
  console.log("error occurred in request");
};

const handleData = (data) => data;

eventEmitter.on("start", handleStart);
eventEmitter.on("data", handleData);
eventEmitter.on("end", handleEnd);
eventEmitter.on("error", handleError);

const makeRequest = async () => {
  eventEmitter.emit("start");
  await delay(500);
  eventEmitter.emit("data", { data: "some data" });
  eventEmitter.emit("end");
  await delay(3000);
};

const run = async () => {
  const data = await makeRequest();
};

run();
