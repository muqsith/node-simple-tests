const express = require("express");
const app = express();
const mw1 = require("./mw1");
const mw2 = require("./mw2");

const router = express.Router();

app
  .use((req, res, next) => {
    console.log("====> Request ...");
    next();
    console.log("<==== Response ...");
  })
  // .use('/abc', router.use((req, res, next) => {
  //     res.send('hello world');
  // }))
  .use("/abc", router.use(mw1).use(mw2))
  .listen(4545, (err) => {
    if (err) {
      console.error("Error occured: ", err);
    } else {
      console.log("Listening : http://localhost:4545/");
    }
  });
