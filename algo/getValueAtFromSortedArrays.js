const sample = [
    [3, 4, 5, 6, 7],
    [1, 2, 3, 4, 51, 52, 53],
    [0, 1, 2, 9],
    [401, 501, 601, 701, 801, 901, 1001, 2001, 3001],
    [2, 3, 5, 7, 9, 17],
    [0, 13]
];

const sample2 = [
    [1, 5, 5, 8],
    [2, 6, 6, 9, 13],
    [3, 4, 4, 7, 20]
];

/**
sample from codinghire

let a = [1, 5, 5, 8];
let b = [2, 6, 6, 9, 13];
let c = [3, 4, 4, 7, 20];

fn(1, a, b, c); // result is 1
fn(4, a, b, c); // result is 4
 */

 function getSortedArray(arr) {
     const result = [];

     const positions = Array(arr.length).fill(0);

     let number, __row;

     do {
         number = undefined;
         for (let row = 0; row < arr.length; row += 1) {
             if (positions[row] < arr[row].length) {
                 number = arr[row][positions[row]];
                 __row = row;
                 for (let r = 0; r < arr.length; r += 1) {
                     if (positions[r] < arr[r].length) {
                         let min = arr[r][positions[r]];
                         if (min < number) {
                             number = min;
                             __row = r;
                         }
                     }
                 }
                 positions[__row] += 1;
                 result.push(number);
             }
         }
     } while (typeof number !== 'undefined');

     return result;
 }

 console.log(getSortedArray(sample2));
