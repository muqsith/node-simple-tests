const express = require("express");

const router = express.Router();

router
  .use((req, res, next) => {
    console.log("i am in middleware two");
    next();
  })
  .get("", (req, res, next) => {
    res.send("get 1 - from middleware 2");
  });

module.exports = router;
