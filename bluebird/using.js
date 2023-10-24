const Promise = require("bluebird");

Promise.using(Promise.resolve(10), function (result) {
  if (parseInt(Math.random() * 10) % 2) {
    return Promise.resolve(result + 10);
  } else {
    return Promise.reject(new Error("bye"));
  }
})
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
