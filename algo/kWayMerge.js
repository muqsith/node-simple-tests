// const sample = [
//     [3, 4, 5, 6, 7],
//     [1, 2, 3, 4, 51, 52, 53],
//     [0, 1, 2, 9],
//     [401, 501, 601, 701, 801],
//     [2, 3, 5, 7, 9, 17],
//     [0, 13, 701, 901]
// ];

const sample = [
  [1, 5, 5, 8],
  [2, 6, 6, 9, 13],
  [3, 4, 4, 7, 20],
];

const kwayMerge = (data) => {
  if (!Array.isArray(data) && data.length === 0) {
    return;
  }

  const result = [];

  const arrayIndexPointers = data.map(() => 0);

  while (true) {
    let smallestInRow, currentNumber;
    let arrayIndexPointerPosition = 0;
    for (let i = arrayIndexPointerPosition; i < data.length; i += 1) {
      currentNumber = data[i][arrayIndexPointers[i]];
      if (!isNaN(currentNumber)) {
        if (typeof smallestInRow === "undefined") {
          smallestInRow = currentNumber;
        }
        if (currentNumber <= smallestInRow) {
          smallestInRow = currentNumber;
          arrayIndexPointerPosition = i;
        }
      }
    }

    arrayIndexPointers[arrayIndexPointerPosition] += 1;
    if (typeof smallestInRow === "undefined") {
      break;
    }
    result.push(smallestInRow);
  }

  return result;
};

console.log(kwayMerge(sample));
