const { getCircularReplacer } = require("../../utils");
const express = require("express");

const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    allowedHeaders:
      "Origin,Content-Type,Content-Length,Authorization,Accept,X-Requested-With",
  })
);

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

app.get("/ping", (req, res) => {
  return res.status(200).send("ok");
});

app.get("/login", (req, res) => {
  console.log(">>>>>>>>>>>>>>>>>>>> req.cookies:", req.headers.cookie);
  return res.status(200).send("ok");
});

app.get("/login-check", (req, res) => {
  console.log(">>>>>>>>>>>>>>>>>>>> req.cookies:", req.headers.cookie);
  return res.status(200).send("ok");
});

app.get("/get-cookie", (req, res) => {
  res.cookie(
    "muqsith-test-cookie",
    `Muqsith's test cookie - set on - ${new Date()}`,
    {
      maxAge: 9000000000,
      domain: "11219b2f97d3.ngrok.io",
      httpOnly: true,
      sameSite: "none",
      secure: true,
    }
  );
  return res.status(200).send("ok");
});

app.listen(4545, (err) => {
  if (err) {
    console.error("Error occured: ", err);
  } else {
    console.log("Listening : http://localhost:4545/");
  }
});
