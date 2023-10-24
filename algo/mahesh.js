function getResult(input, position) {
  const r = new Array(position);
  input.forEach((sa) => {
    for (let i = 0; i < r.length; i++) {
      if (sa[i] >= r[position - 1]) {
        break;
      }
      r.push(sa[i]);
      r.sort((a, b) => a - b).pop();
    }
  });
  return r.pop();
}

const sample2 = [
  [1, 5, 5, 8],
  [2, 6, 6, 9, 13],
  [3, 4, 4, 7, 20],
];

console.log(getResult(sample2, 4));
