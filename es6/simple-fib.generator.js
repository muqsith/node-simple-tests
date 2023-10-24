const readline = require("readline");
function* Fibonacci() {
  let c = 0,
    n = 1;
  while (true) {
    yield c;
    [c, n] = [n, c + n];
  }
}

let series = Fibonacci();

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log(`
    Press the return (Enter) key to see the next number in Fibonacci series.
    Type quit to exit.
    `);
function printNext() {
  rl.question("", (answer) => {
    if (answer === "quit") {
      console.log("\nbye ...\n");
      rl.close();
    } else {
      console.log(series.next().value + "\n");
      printNext();
    }
  });
}

printNext();
