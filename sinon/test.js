function once(fn) {
  let returnValue,
    called = false;
  return function () {
    if (!called) {
      called = true;
      returnValue = fn.apply(this, arguments);
    }
    return returnValue;
  };
}

function sum(a, b) {
  console.log(`${new Date()} : Sum called`);
  return a + b;
}

const sumOnce = once(sum);

console.log(sumOnce(3, 4));
console.log(sumOnce(3, 4));
console.log(sumOnce(3, 4));
console.log(sumOnce(3, 4));
