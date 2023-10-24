const findPort = require("find-port");

const getFreePort = (range) => {
  return new Promise((resolve, reject) => {
    findPort("127.0.0.1", range.min, range.max, (ports) => {
      let port = ports[(Math.random() * ports.length) | 0];
      resolve(port);
    });
  });
};

getFreePort({ min: 35000, max: 45000 })
  .then((port) => {
    console.log(port);
  })
  .catch((err) => {
    console.log(err);
  });
