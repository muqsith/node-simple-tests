const sample = [
    [3, 4, 5, 6, 7],
    [1, 2, 3, 4, 51, 52, 53],
    [0, 1, 2, 9],
    [401, 501, 601, 701, 801, 901, 1001, 2001, 3001],
    [2, 3, 5, 7, 9, 17],
    [0, 13]
];

const result = [];

const positions = Array(sample.length).fill(0);

let min, number, __row;

do {
    number = undefined;
    for (let row = 0; row < sample.length; row += 1) {
        if (positions[row] < sample[row].length) {
            number = sample[row][positions[row]];
            __row = row;
            for (let r = 0; r < sample.length; r += 1) {
                if (positions[r] < sample[r].length) {
                    min = sample[r][positions[r]];
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

console.log(result);
