const createCombination = (arr1, arr2) => {
  let result = [];
  if (!arr1.length) {
    result = arr2;
  } else if (!arr2.length) {
    result = arr1;
  } else {
    for (let i = 0; i < arr1.length; i += 1) {
      for (let j = 0; j < arr2.length; j += 1) {
        result.push([].concat(arr1[i]).concat(arr2[j]));
      }
    }
  }
  return result;
};

const getCombinations = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i += 1) {
    result = createCombination(
      result,
      arr[i].map((e) => [e]),
    );
  }
  return result;
};

const optionTypes = [
  [9, 7, 2, 1],
  ["a", "c", "b", "d"],
  ["red", "yellow", "green"],
];
const result = getCombinations(optionTypes);
console.log(result);
console.log(result.length);
