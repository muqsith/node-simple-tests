const path = require('path');
const fs = require('fs');
const uuidV4 = require('uuid/v4');

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('/Users/abdulmuqsith/Development/data/enwiktionary.db');


const outFile = path.resolve('/Users/abdulmuqsith/Development/data/enwiktionary.json');
const writeStream = fs.createWriteStream(outFile);


db.each('select * from enwiktionary', function (err, row) {
    const o = {id: uuidV4(), data: row.data};
    writeStream.write(JSON.stringify(o) + '\n');
});

db.each('select * from enwiktionary', function (err, row) {
    const o = {id: uuidV4(), data: row.data};
    writeStream.write(JSON.stringify(o) + '\n');
});

db.each('select * from enwiktionary', function (err, row) {
    const o = {id: uuidV4(), data: row.data};
    writeStream.write(JSON.stringify(o) + '\n');
});

db.each('select * from enwiktionary', function (err, row) {
    const o = {id: uuidV4(), data: row.data};
    writeStream.write(JSON.stringify(o) + '\n');
});