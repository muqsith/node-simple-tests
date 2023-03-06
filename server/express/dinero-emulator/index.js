const { getCircularReplacer } = require("../../../utils");

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

app.get("/dinero-orgs", (req, res) => {
  const orgs = {
    success: true,
    data: {
      dinero: {
        organizations: [
          { dineroCompanyId: "384079", name: "next.one.com", isPrimary: false },
          { dineroCompanyId: "390704", name: "RedroseTech", isPrimary: false },
        ],
      },
    },
  };
  return res.status(200).send(orgs);
});

app.listen(4545, (err) => {
  if (err) {
    console.error("Error occured: ", err);
  } else {
    console.log("Listening : http://localhost:4545/");
  }
});
