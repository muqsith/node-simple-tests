const fs = require("fs-extra");

const fn1 = async () => {
  const data = { status: "success" };
  if (Date.now() % 2) {
    return data;
  } else {
    await fs.readFile("/tmp/certainly-a-non-existent-file");
  }
};

const fn2 = async () => {
  const result = await fn1();
  return result;
};

const fn3 = async () => {
  const result = await fn2();
  return result;
};

const fn4 = async () => {
  let result = null;
  try {
    result = await fn3();
  } catch (err) {
    console.log("Hey look there's some error -------> ", err);
  }
  return result;
};

const run = async () => {
  const data = await fn4();
  console.log("🚀 ~ file: errors.js ~ line 15 ~ run ~ data", data);
};

run();
