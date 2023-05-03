const CryptoJs = require("crypto-js");

const getEncryptedDomainName = (domainName) => {
  const secret = "test123..."; // dummy one
  return CryptoJs.AES.encrypt(domainName, secret).toString();
};

const test = () => {
  const encryptedDomainName = getEncryptedDomainName("devdxb1.1prod.one");
  console.log("ecnrypted domain name: ", encryptedDomainName);
  // send encryptedDomainName in the x-api-key header
};

test();
