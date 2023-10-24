const express = require("express"),
  expressApp = express();

expressApp.use((req, res, next) => {
  console.log("====> Request ...");
  next();
  console.log("<==== Response ...");
});

expressApp.use("/api/person", require("./person-api"));

expressApp.listen(9193, (err) => {
  if (err) {
    console.error("Error occured: ", err);
  } else {
    console.log("Listening : http://localhost:9193/");
  }
});
