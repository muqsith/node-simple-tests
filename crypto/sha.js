const crypto = require("crypto");

const listOfNames = [
  "myexoticfruit.com",
  "muqsith",
  "irfan",
  "google.com",
  "example.com",
];

const run = () => {
  for (const name of listOfNames) {
    const hash = crypto.createHash("sha224");
    hash.update(name);
    const hashedValue = hash.digest("hex");
    console.log(hashedValue);
    if (name === "myexoticfruit.com") {
      const isValid =
        "7d60d3419e46b9b43ff30ad22c218fa5a4611eec83bf6d3e07a9ee2c" ===
        hashedValue;
      if (isValid) {
        console.log(`the hash of ${name} is valid`);
      }
    }
  }
};

run();
