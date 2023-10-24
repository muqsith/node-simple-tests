const Fingerprint2 = require("fingerprintjs2");

setTimeout(function () {
  Fingerprint2.get(function (components) {
    console.log(components); // an array of components: {key: ..., value: ...}
  });
}, 500);
