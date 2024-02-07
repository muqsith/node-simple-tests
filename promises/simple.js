const { delay } = require("../utils");

const execPromiseFn = () => {
  return Promise.resolve()
    .then(() => {
      return delay(100);
    })
    .then(() => {
      return "test 123";
    })
    .then(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("test 456");
        }, 100);
      });
    });
};

const run = () => {
  return execPromiseFn().then((result) => {
    console.log(result);
  });
};

run();
