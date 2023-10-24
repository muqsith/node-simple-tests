const { StringDecoder } = require("string_decoder");

const decoder = new StringDecoder("base64");

let s = Buffer.from("Muqsith  Irfan");

console.log(decoder.end(s));

console.log(Buffer.from(decoder.end(s), "base64").toString());
