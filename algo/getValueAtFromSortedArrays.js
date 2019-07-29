const sample = [
    [3, 4, 5, 6, 7],
    [1, 2, 3, 4, 5],
    [0, 1, 2, 9],
    [4, 5, 18],
    [2, 3, 5, 7, 9, 11]
];

const result = [];

const positions = Array(sample.length).fill(0);

let number, current, min;

let __row = 0;

let n = 0;

const numbers = [];


do {
    number = sample[__row][positions[__row]];
    __row = 0;
    for (let row = 0; row < sample.length; row += 1) {
        current = sample[row][positions[row]];
        if (typeof current !== 'undefined' && current < number) {
            number = current;
            __row = row;
        }
    }
    min = sample[__row][positions[__row]];
    if (typeof min !== 'undefined') {
        result.push(min);
    }
    if (__row < sample.length) {
        positions[__row] += 1;
    }
    n += 1;
} while(n < 1000); //while ((typeof min !== 'undefined'));

console.log(numbers);
console.log(result);
