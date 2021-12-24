const sample = [
  [1, 5, 5, 8],
  [2, 6, 6, 9, 13],
  [3, 4, 4, 7, 20]
];


const arrayPtrs = sample.map(() => 0);

let colIndex = 0;
let sorted = [];

let c = 0;

// first value
let n = sample[colIndex][arrayPtrs[colIndex]];


for (; colIndex < sample.length;) {


  c += 1;
  if (c === 100) {
    break;
  }

  if (colIndex === sample.length) {
    sorted.push(n);
    colIndex = 0;
    if (sample[colIndex][arrayPtrs[colIndex]]) {
      arrayPtrs[colIndex] += 1;
      if (arrayPtrs[colIndex] < sample[colIndex].length) {
        n = sample[colIndex][arrayPtrs[colIndex]];
      }
    }
  }

  let m = sample[colIndex][arrayPtrs[colIndex]];

  if (m < n) {
    sorted.push(m);
    arrayPtrs[colIndex] += 1;
    if (arrayPtrs[colIndex] < sample[colIndex].length) {
      n = sample[colIndex][arrayPtrs[colIndex]];
    } else {
      n = m;
    }
  } else {
    colIndex += 1;
  }


}

console.log(sorted);

