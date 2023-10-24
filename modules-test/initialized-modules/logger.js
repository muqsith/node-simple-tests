const fs = require("fs-extra");
const config = require("./config").config;

module.exports = {
  log: function (text) {
    fs.appendFile(config.logfile, text, (err) => {
      if (err) {
        console.error(`Error occured while writing to logs ${err}`);
      }
    });
  },
};
