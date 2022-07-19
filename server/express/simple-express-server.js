const { getCircularReplacer } = require("../../utils");

const express = require("express");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log("request headers: ", req.headers);
  console.log("====> Request ...");
  next();
  console.log("<==== Response ...");
});

app.get("/", (req, res) => {
  const requestObject = JSON.parse(JSON.stringify(req, getCircularReplacer()));
  return res.status(200).send(requestObject);
});

app.post("/", (req, res) => {
  console.log("request payload", req.body);
  return res.status(200).send({ status: "ok" });
});

app.listen(4545, (err) => {
  if (err) {
    console.error("Error occured: ", err);
  } else {
    console.log("Listening : http://localhost:4545/");
  }
});
