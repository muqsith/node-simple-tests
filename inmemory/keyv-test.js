const Keyv = require("keyv");

const { delay } = require("../utils/index");

const run = async () => {
  const keyv = new Keyv();

  await keyv.set("name", "muqsith");
  await keyv.set("location", "Dubai", 50);

  await delay(40);

  const name = await keyv.get("name");
  const location = await keyv.get("location");
  console.log("name: ", name);
  console.log("location: ", location);
};

run();
