const express = require("express"),
  app = express(),
  multer = require("multer"),
  fs = require("fs-extra"),
  path = require("path");
const saveFile = (file) => {
  const filePath = path.resolve(
    __dirname,
    "..",
    "..",
    "data",
    `new-file-${new Date()}`,
  );
  return fs.writeFile(filePath, file.buffer);
};

app.use((req, res, next) => {
  console.log("====> Request ...");
  next();
  console.log("<==== Response ...");
});

app.get("/", (req, res) => {
  res.send({ name: "muqsith", email: "mui@one.com" });
});

app.put("/:productId", multer().single("file"), (req, res, next) => {
  let productId = req.params.productId;
  let file = req.file;

  return saveFile(file)
    .then(() => {
      res.json({ status: "ok" });
    })
    .catch((err) => {
      next(err);
    });
});

app.listen(4545, (err) => {
  if (err) {
    console.error("Error occured: ", err);
  } else {
    console.log("Listening : http://localhost:4545/");
  }
});
