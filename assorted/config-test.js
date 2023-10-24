const oconf = require("oconf");
const path = require("path");

function main(appConfig) {
  // const configFilePath = path.resolve(__dirname, '..', 'config', 'production.cjson');
  // const configFilePath = path.resolve(__dirname, '..', 'config', 'development.cjson');
  const configFilePath = path.resolve(
    __dirname,
    "..",
    "config",
    "config.cjson",
  );
  const config = oconf.load(configFilePath);
  console.log(JSON.stringify(config, null, 2));
}

main();
