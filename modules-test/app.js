const express = require("express");
const app = express();

const mod_a = require("./mod-a.js"),
  mod_b = require("./mod-b.js"),
  mod_c = require("./mod-c.js");
console.log(mod_b === mod_c);
mod_b.printCreatedTime();
mod_c.printCreatedTime();

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
