const operatorMap = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '−': (a, b) => a - b,
    '*': (a, b) => a * b,
    '×': (a, b) => a * b,
    '/': (a, b) => a / b,
    '÷': (a, b) => a / b
};

const isOperator = (op) => /[+,\-,*,\/,−,×,÷]{1}/.test(op);

function calculate(arr) {
    const e = arr.pop();
    if (isOperator(e)) {
        return operatorMap[e](calculate(arr), calculate(arr));
    } else {
        return +e;
    }
}

function rpn (input) {
    const arr = input.split(' ');
    return calculate(arr);
}

const result = rpn('3 4 5 × −');
console.log(result);
