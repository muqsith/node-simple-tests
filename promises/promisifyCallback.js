const delay = (waitTime = 10) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, waitTime);
  });
};

/* A function that only accepts callback cb */
const fnAcceptingCb = (cb) => {
  Promise.resolve()
    .then(() => {
      return delay(100);
    })
    .then(() => {
      console.log("doing something ...");
      const processingResult = "processed result";
      return processingResult;
    })
    .then((result) => {
      cb(result, null);
    });
};

/* Wrapper for the function that accepts cb */
const fnAcceptingCbWrapper = () => {
  return new Promise((resolve, reject) => {
    fnAcceptingCb((result, err) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(result);
      }
    });
  });
};

/* final user  */
const userFn = async () => {
  const result = await fnAcceptingCbWrapper();
  console.log(result);
};

userFn();
