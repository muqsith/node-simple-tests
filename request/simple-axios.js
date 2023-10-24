const axios = require("axios");
const https = require("https");

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

const config = {
  method: "get",
  url: "https://www.op-qaindia1.1stg.one/",
  headers: {
    "user-agent": "One.com internaltooling mui@one.com - axios/0.27.2",
  },
  httpsAgent,
};

const makeRequest = async () => {
  const response = await axios(config);
  console.log("response status: ", response.status);
};

const run = async () => {
  await makeRequest();
};

run();
