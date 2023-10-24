const operatorMap = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "−": (a, b) => a - b,
  "*": (a, b) => a * b,
  "×": (a, b) => a * b,
  "/": (a, b) => a / b,
  "÷": (a, b) => a / b,
};

const isOperator = (op) => /[+,\-,*,\/,−,×,÷]{1}/.test(op);

function calculate(arr) {
  const e = arr.pop();
  return isOperator(e) ? operatorMap[e](calculate(arr), calculate(arr)) : +e;
}

function rpn(input) {
  const arr = input.split(" ");
  return calculate(arr);
}

let input = process.argv[2];
if (input) {
  console.log("Input: ", input);
} else {
  console.log("No input provided");
  console.log(`Processing default input: '3 4 5 × −'`);
  input = "3 4 5 × −";
}
const result = rpn(input);
console.log(result);
