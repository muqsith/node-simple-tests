const getSomethingWithDelay = (something = "something", delay = 10) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(something);
    }, delay);
  });
};

const getSomething = async (cb) => {
  getSomethingWithDelay("hello world", 1000).then((result) => {
    cb(result);
  });
};

const run = () => {
  const cb = console.log;
  getSomething(cb);
};


run();