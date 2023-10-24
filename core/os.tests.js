const os = require("os");
console.log(Buffer.from(os.EOL).toString("base64"));
