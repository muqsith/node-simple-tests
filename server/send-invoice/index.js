const express = require("express");

const { sendInvoice } = require("./sendInvoice");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).send({ status: "ok" });
});

app.post("/paid-event-listener", async (req, res) => {
  const { orderId } = req?.body;
  console.log(`
    >>>>>>>>>>>>>>>>>>>>>>>>>>> Received request ${orderId}
  `)
  await sendInvoice(orderId);
  return res.status(200).send({ status: "ok" });
});

app.listen(4545, (err) => {
  if (err) {
    console.error("Error occured: ", err);
  } else {
    console.log("Listening : http://localhost:4545/");
  }
});
