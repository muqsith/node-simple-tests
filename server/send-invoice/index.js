const express = require("express");

const { sendInvoice } = require("./sendInvoice");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).send({ status: "ok" });
});

app.post("/confirmation-email-event-listener", async (req, res) => {
  const { orderId } = req?.body;
  console.log(`
    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    Received event CONFIRMATION_EMAIL with id: ${orderId} at ${new Date()}
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  `);
  await sendInvoice(orderId);
  return res.status(200).send({ status: "ok" });
});

app.post("/created-event-listener", async (req, res) => {
  const { orderId } = req?.body;
  console.log(`
    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    Received event CREATED with id: ${orderId} at ${new Date()}
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  `);
  return res.status(200).send({ status: "ok" });
});

app.post("/companion-app-event-listener", async (req, res) => {
  const { orderId } = req?.body;
  console.log(`
    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    Companion app event listener - received event at ${new Date()}
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  `);
  return res.status(201).send({ status: "ok" });
});

app.post("/disconnect-app", async (req, res) => {
  const { shopId } = req?.body;
  console.log(`
    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    Disconnect app listener - received request at ${new Date()}
    Request body: ${JSON.stringify(req.body)}
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  `);
  return res.status(200).send({ status: "ok" });
});

app.listen(4545, (err) => {
  if (err) {
    console.error("Error occured: ", err);
  } else {
    console.log("Listening : http://localhost:4545/");
  }
});
