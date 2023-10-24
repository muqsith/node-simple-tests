const getSslCert = require("get-ssl-certificate").get;

const f = async (domainName) => {
  let result = false;
  try {
    const timeout = 2000;
    const cert = await getSslCert(domainName, timeout);
    if (cert && cert.valid_to) {
      result = new Date(cert.valid_to) > new Date();
    }
  } catch (e) {
    console.log(e);
  }
  console.log(result);
};

f("qadxb11.1next.one");
