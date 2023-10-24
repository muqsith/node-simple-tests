let _iterable = {
  items: ["a", "b", "c", "d", "e"],
  [Symbol.iterator]: function () {
    return {
      next: () => {
        return this.items.length && true
          ? {
              value: this.items.shift(),
              done: false,
            }
          : { done: true };
      },
    };
  },
};

for (let i of _iterable) {
  console.log(i);
}

let _iterator = {
  items: ["a", "b", "c", "d", "e"],
  next: function () {
    return this.items.length && true
      ? {
          value: this.items.shift(),
          done: false,
        }
      : { done: true };
  },
};

console.log(_iterator.next());
console.log(_iterator.next());
console.log(_iterator.next());
console.log(_iterator.next());
console.log(_iterator.next());
console.log(_iterator.next());
console.log(_iterator.next());
