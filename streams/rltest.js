const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let questionare = [
  "What is your name?",
  "How old are you?",
  "What do you do for living?",
  "Where do you live?",
  "I mean the country you live in?",
  "Is it a democratic country?",
];

function talk() {
  let question = questionare.shift();
  if (question) {
    rl.question(question + "\n", (answer) => {
      if ("fuck off" === answer) {
        console.log("It was nice talking to you. Thank you for your time.");
        rl.close();
      } else {
        console.log("Oh I see ...");
        talk();
      }
    });
  } else {
    console.log("It was nice talking to you. Thank you for your time.");
    rl.close();
  }
}

talk();
