const fs = require("fs-extra");
const axios = require("axios");
const { delay } = require("../utils/index");

const config = {
  method: "get",
  url: "https://webshop.one.com/api/v2/order",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiZVY2bVh0RWdUbFRDRldsTVZkK3RuMjNsZDdrM3dDK0dvalZSUGpHZSs3NDFqSXQ5TXFnUlhaenFlV05obXZxZ2pkMXVaSmtQSzBvTXJnOEUxT1FJUXlEVjVzZjZ1dGFwZGxmM3lSSldZNGtyQ3Y0QWJxcmRWRkluYzg5K1BGNkxyZWRPZ1c2T2tzd1h0OFhIandkWEI4NDVISXZUNWZieUNQZmZQTjRER3RsVjRzVHlGbWk4emhEYWl3SG5ManpvZUZYOEUxT3RqSzVIVmdob2h4dzVUNnI4aXN4cWFPUnd0dTFTamx0MVUwc01kRFVVa08rWTlGNXZ5V1NEaXVOcjVEbkpUMTB6V1lweG5lSzlZMXlLQjBBSGhQUFMyU3JUdXNKcjBZYUM2eUw3ZGhFZ3JwL01JRUZ1YzZDcXF6dVl4ZVZXeitnK0I1cS9PZzV0NlpmNzdiM2hTUzFKUEtoYTFQTm5SQzJPdjBHRHhienYwdmpPOHNZb3VoQWdRVTd5WFVvSG13TW8xekltQTFGaWV3Uk9oVmdiSTFSOEVSbUZSdEdmNHFtdWJpWW1zcFJFT0YyYWdWZmlvcmw4QzhHb3M2Wk9IWTkwU0VRMVl3T1hMckt1NnZzK2xjSDdoMnJuYldEcXRYL3htZFJBVXlpVjV2QlRrTXVXVWV6aVB6VHI0R1RTc2tDQjZ2ZCtPV3dWdWV5WGYwNklDMXhxM0ZmUXk2aHhyWTNNay9uaGJRMTJrOEhiRS9RNjZMbldSZ2F2TmF1c3FLM3VXUGZXMFd6TU0ybXlWM09OUEwyOU5peWxJcnFUU2pTaVNZRzk5WXBTL25WZUZraU5JdGx2dVAyRUo0OEg1S3VsdVQ1NG5HSW1RcTN1SDNtTW4wSk52N1piYi9MVHlTczhxbWM9IiwiaWF0IjoxNjU3MDkxMTAxLCJleHAiOjQ4MzQ4MDI0NTMsImF1ZCI6InRlc3RhcHAtMTIzNDU2LWlkIiwiaXNzIjoiaHR0cHM6Ly93ZWJzaG9wLm9uZS5jb20iLCJzdWIiOiIifQ.RiE0O1ikLiL9x13e-Bw8JoDfbt0exu9qUf0DrAMIH0S7DpKzFwQoqPx3LEqh-I2UXx3aMCYMAmt4LLbGpS79IyTP2-vhZqKHnx73jBXZ3jLu29OEtxQe35FYkcQjaVOq7A-ylUH-OmthS9_2gTCuOPv2aDH9R5TAHRVAgYReiCESejHu_XSRKYxEf_wD0DjSMtWlYgW1iIsGaFnNSf1Im8vbe8we9LEDR_5vqkCAUe03LZQqY4-ynwpbMeIYAWS5NqizNFEpAZ2NiYmPM4dTcvkqSMIsF5mPbwl5y8BSbUUyo4-ETgw7osrq2pzwYGACfS-7owvGp-hHj9qfg8ljylVjQlJ47LKL249xoJSHJO8qVG5bDdlL0BW7SZac98Hzz5lV8mKdoMfAkfeIhDNoBfo66wHiuf-Tit3Lka9Rg8RJnVslRaZLIaTug5u-ic4iTuU7hslHUq-duCIqEZhvuLU9IKIUZ8dfOpXtCmNbHwIFyePRQva6j-1UFsXr6VF5oNzchQMoJRdLybXEyGNdKb5dI3sAHUv5SVTzv6M1EJDd-5yhXQdw0TIaNRujLPg5JjtOxqa6xynCCJj9GEOcu3-OjOLqouiO8klyB1G7m65CVNaubDxj8-qDmI2feMMClRImOXUFFZnRtSLpFe9FZ0OaAfgip4FrtXNB-8m8l4s",
    Cookie:
      "BoneAuth=OWRhZTczYWI2MmExYmJlNDQxMzRiZjE3OGFlOTYwZTU2MmMyZjcxMHByb2RtZ210My4xcHJvZC5vbmU%3D",
  },
};

const logFilePath = "/tmp/test-api.log";

const makeRequest = async () => {
  try {
    const response = await axios(config);
    await fs.appendFile(
      logFilePath,
      `\n${new Date()} - Response code: ${response.status}`
    );
  } catch (err) {
    await fs.appendFile(
      logFilePath,
      `\n${new Date()} - Error Response code: ${err.response.status} ${err}`
    );
  }
};

const run = async () => {
  while (true) {
    await makeRequest();
    await delay(120 * 1000); // every 2 mins
  }
};

run();
