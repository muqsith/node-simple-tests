const { exec } = require("child_process");
const { delay } = require("../utils");

const ac = new AbortController();

let shouldExit = false;

process.on("SIGINT", () => {
  console.log("Received SIGINT");
  ac.abort();
  shouldExit = true;
});

process.on("SIGTERM", () => {
  console.log("Received SIGTERM");
  ac.abort();
  shouldExit = true;
});

// Use either the onabort property...
ac.signal.onabort = () => {
  console.log("Child process received abort signal.");
  shouldExit = true;
};

// Or the EventTarget API...
ac.signal.addEventListener(
  "abort",
  (event) => {
    console.log("Event type: ", event.type); // Prints 'abort'
  },
  { once: true },
);

const executeCmd = () => {
  return new Promise((res, rej) => {
    exec(
      "sleep 60; ls -alh /usr",
      {
        signal: ac.signal,
      },
      (err, stdout, stderr) => {
        if (err) {
          rej(err);
        } else {
          console.log(stdout);
          res();
        }
      },
    );
  });
};

const run = async () => {
  for (let i = 0; i < 10; i += 1) {
    console.log("Executing command ...");
    try {
      await executeCmd();
    } catch (err) {
      console.log("err: ", err);
    }
    await delay(5 * 1000);

    if (shouldExit) {
      break;
    }
  }
};

run();
