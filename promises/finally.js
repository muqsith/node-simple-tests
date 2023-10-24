const test = () => {
  return new Promise((resolve, reject) => {
    if ((Math.random() * 10) % 2) {
      return reject(new Error("invalid test"));
    }
    return resolve("good");
  });
};

const run = () => {
  return test()
    .then((msg) => console.log(">>>>>>>>>>>>>> ", msg))
    .catch((err) => console.log("err: ", err))
    .finally(() => console.log("hey finally i am here"));
};

run();
