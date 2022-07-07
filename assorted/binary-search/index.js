/*
    const data = [
   1,2,3,4,5,6,7,8,9,10,
   11,12,13,14,15,16,17,18,19,20,
   21,22,23,24,25,26,27,28,29,30,
   31,32,33,34,35,36,37,38,39,40,
   41,42,43,44,45,46,47,48,49,50,
   51,52,53,54,55,56,57,58,59,60,
   61,62,63,64,65,66,67,68,69,70,
   71,72,73,74,75,76,77,78,79,80,
   81,82,83,84,85,86,87,88,89,90,
   91,92,93,94,95,96,97,98,99,100,
];
*/

// ---------------------------------------- utility functions - start -------------------------------------
// DO NOT MODIFY BELOW CODE

let AVAILABLE_TESTS = 15;

function applyTest(actual, sample) {
  if (AVAILABLE_TESTS > 0) {
    AVAILABLE_TESTS -= 1;
    return actual === sample;
  } else {
    throw new Error("No more tests available");
  }
}

function verifyResult(data, expected, result) {
  if (data[result] === expected) {
    console.log("Correct result");
  } else {
    console.log("Incorrect result");
  }
}

// ----------------------------------------- end ----------------------------------------------------------

const data = [
  128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142,
  143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157,
  158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172,
  173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187,
  188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202,
  203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217,
  218, 219, 220, 221, 222, 223, 224, 225, 226, 227,
];

// your code here

function searchIndex_a(num, data) {
  let index = -1;
  for (let i = 0; i < data.length; i += 1) {
    const sample = data[i];
    const result = applyTest(num, sample);
    if (result) {
      index = i;
    }
  }
  return index;
}

// solution

let foundIndex = -1;
function searchBinary(startIndex, endIndex, num, data) {
  if (foundIndex === -1 && startIndex <= endIndex) {
    let sampleIndex = Math.floor((endIndex + startIndex) / 2);
    let sample = data[sampleIndex];
    console.log("applying test");
    if (applyTest(num, sample)) {
      foundIndex = sampleIndex;
    } else {
      if (num < sample) {
        searchBinary(startIndex, sampleIndex - 1, num, data);
      } else {
        searchBinary(sampleIndex + 1, endIndex, num, data);
      }
    }
  }
}

function searchIndex(num, data) {
  searchBinary(0, data.length - 1, num, data);
  return foundIndex;
}

const findNum = 227;
const result = searchIndex(findNum, data);
verifyResult(data, findNum, result);
