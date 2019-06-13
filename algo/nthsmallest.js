
function nthSmallest_1(n, arr) {
    let number = null, j = 0;
    const sorted = [];
    do {
        for (let i = 0; i < arr.length; i += 1) {
            const a = arr[i];
            number = a[j];
            if (typeof number === 'number') {

            }
        }
        j += 1;
    } while (typeof number === 'number');

    return null;
}

const getKey = (row, col) => `${row},${col}`;

function nthSmallest(n, arr) {
    let row = 0;
    let col = 0;
    let num = arr[row][col];
    const seen = {};
    let key = getKey(row, col);
    const result = [];
    while (true) {
        if (seen[key]) {
            col += 1;
        }
        if ()
    }
}

const sample = [
    [1, 5, 8, 36],
    [2, 9, 16, 25],
    [3, 4, 8, 12, 24],
    [0, 3, 9, 12, 15]
];

console.log(nthSmallest(6, sample)); // 8

// 1, 2, 3, 4, 5, 8, 8, 9, 12, 16, 24, 25, 36