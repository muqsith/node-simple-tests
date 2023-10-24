const express = require("express"),
  app = express(),
  multer = require("multer"),
  fs = require("fs-extra"),
  path = require("path");
app
  .use("/", (req, res, next) => {
    console.log("====> Request Middleware 1 ...");
    next();
    console.log("<==== Response Middleware 1 ...");
  })
  .get("/", (req, res, next) => {
    let quotient = ((Math.random() * 100) | 0) % 2;
    console.log("quotient: ", quotient, "\t", new Date());
    if (quotient === 0) {
      res.send({ name: "muqsith", email: "mui@one.com" });
    } else {
      next();
    }
  })
  .use("/", (req, res, next) => {
    console.log(
      "*************************************>>>>>>>>>>>>>>>>>>>>>> Request Middleware 2 ...",
    );
    res.send({ status: "ok" });
    //next();
    //console.log('<<<<<<<<<<<<<<<****************************************** Response Middleware 2...');
  });

app.listen(8789, (err) => {
  if (err) {
    console.error("Error occured: ", err);
  } else {
    console.log("Listening : http://localhost:8789/");
  }
});
