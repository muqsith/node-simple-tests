const client = require("webdav")("http://localhost/");
client.getDirectoryContents("/").then(function (contents) {
  console.log(JSON.stringify(contents, undefined, 4));
});
