const punycode = require('punycode');

const domainName = 'økoøl.dk';
console.log(`${domainName} - ${punycode.toASCII(domainName)}`)
