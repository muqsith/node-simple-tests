const oconf = require('oconf');
const path = require('path');


function main(appConfig) {
  const appEnv = appConfig.env || 'production';
  let config = appConfig;
  let configFilePath = '';
  if (appEnv === 'next') {
    configFilePath = path.resolve(__dirname, '..', 'config', 'local.cjson');
  } else if (appEnv === 'production') {
    configFilePath = path.resolve(__dirname, '..', 'config', 'default.cjson');
  }
  config = oconf.load(configFilePath, {  });
  console.log(JSON.stringify(config));
}

main({
  planet: 'earth',
  logfile: '/tmp/abc.log',
  env: 'next'
})