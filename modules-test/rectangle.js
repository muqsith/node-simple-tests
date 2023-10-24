module.exports = {
  area: (l, b) => l * b,
  perimeter: (l, b) => 2 * (l + b),
};

console.log(module.exports === exports);

console.log(`require.main of rectangle.js : ${require.main === module}`);
