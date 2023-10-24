const fs = require("fs-extra");

fs.remove("/tmp/delete-test/temp1", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("deleted sucessfully");
  }
});
