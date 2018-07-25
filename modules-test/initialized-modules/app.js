const path = require('path');
const fs = require('fs-extra');
const program = require('commander');
const cjson = require('cjson');

const configModule = require('./config');



program
    .option('-c, --config <config>', 'Configuration file location')
    .parse(process.argv);

if (!program.config) {
    console.error(`\nPlease provide the configuation file.\n`)
    return;
} else {
    if (!fs.existsSync(path.resolve(program.config))) {
        console.error(`\nInvalid file location\n`);
        return;
    }
}


let config = cjson.load(program.config);
configModule.init(config);

const initChatBot = require('./chatbot');

initChatBot();
