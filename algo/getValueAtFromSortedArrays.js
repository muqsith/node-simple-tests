const sample = [
    [3, 4, 5, 6, 7],
    [1, 2, 3, 4, 5],
    [0, 1, 2, 9],
    [4, 5],
    [2, 3, 5, 7, 9, 11]
];


let col = 0;

let number = undefined;
let current = 0;

let n = 0;

const result = [];


do {
    for (let row = 0; row < sample.length; row += 1) {
        current = sample[row][col];
        if (current < number) {
            number = current;
        }
    }
    result.push(number);

    col += 1;
    n += 1;
//} while (typeof number !== 'undefined');
} while (n < 1000);
