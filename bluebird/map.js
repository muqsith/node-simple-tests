const Promise = require("bluebird");

const promises = [
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(20);
    }, Math.random() * 10000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(30);
    }, Math.random() * 1000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(40);
    }, Math.random() * 1000);
  }),
];

Promise.map(promises, (p) => p).then((result) => {
  console.log(result);
});
