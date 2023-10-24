const path = require("path");
function test_resolve() {
  let p = path.resolve();
  console.log("Empty path.resolve(): ", p);
  console.log("__dirname: ", __dirname);
  let p2 = path.resolve("/etc", "ssl");
  console.log("p2: ", p2);

  let basename = path.basename(
    path.resolve(__dirname, "simple-path-method.js"),
  );
  console.log("basename", basename);

  const filePath = path.resolve(__dirname, "..", "tmp", "abc", "test.txt");
  console.log(filePath);
  console.log(path.dirname(filePath));
}

test_resolve();
