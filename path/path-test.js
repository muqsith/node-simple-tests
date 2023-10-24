const pathModule = require("path");

console.log(__dirname);
console.log(process.cwd());

const pathArg = process.argv[2];

console.log(
  `path ${pathArg} is ${
    pathModule.isAbsolute(pathArg) ? "absolute path" : "relative path"
  }`,
);

if (!pathModule.isAbsolute(pathArg)) {
  const absolutePath = pathModule.resolve(process.cwd(), pathArg);
  console.log("absolutePath = ", absolutePath);
}
