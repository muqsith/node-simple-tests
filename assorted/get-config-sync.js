const pathModule = require('path');
const { execSync } = require('child_process');

const run = () => {
    const configFilePath = pathModule.join(__dirname, '..', 'config', 'config.cjson');
    const nodeModulesPath = pathModule.join(__dirname, '..', 'node_modules');
    const loadConfigBin = pathModule.join(nodeModulesPath, '.bin', 'config-cjson');
    const resultBuf = execSync(`${loadConfigBin} ${configFilePath}`);
    const result = resultBuf.toString();
    console.log(result);
}


run();