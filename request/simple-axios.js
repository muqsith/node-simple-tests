const axios = require("axios");

const config = {
  method: "get",
  url: "http://localhost:4545",
  headers: {
    'user-agent': 'One.com internaltooling mui@one.com - axios/0.27.2'
  }
};

const makeRequest = async () => {
  const response = await axios(config);
  console.log("response status: ", response.status);
};

const run = async () => {
  await makeRequest();
};

run();
