const dns = require("dns");

dns.resolveCname("devdxb1.1prod.one", (err, result) => {
  if (err) {
    console.error("Error ==========>>>>>>>>>>>", err);
  } else {
    console.log(result);
  }
});
