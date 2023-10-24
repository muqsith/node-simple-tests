const readline = require("readline");

const logger = require("./logger");

function initChatBot() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "bot> ",
  });

  rl.prompt();

  rl.on("line", (line) => {
    switch (line.trim()) {
      case "exit":
        console.log("Have a great day!");
        process.exit(0);
        break;
      default:
        let saidText = line.trim();
        logger.log(`USER [${new Date()}] : ${saidText}\n`);
        console.log(`Say what? I might have heard '${saidText}'`);
        break;
    }
    rl.prompt();
  }).on("close", () => {
    console.log("Have a great day!");
    process.exit(0);
  });
}

module.exports = initChatBot;
