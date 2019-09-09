const sample = [
    [3, 4, 5, 6, 7],
    [1, 2, 3, 4, 51, 52, 53],
    [0, 1, 2, 9],
    [401, 501, 601, 701, 801],
    [2, 3, 5, 7, 9, 17],
    [0, 13, 701, 901]
];

const kwayMerge = (data) => {
    const result = []

    const ptrs = [];
    for (let i = 0; i < data.length; i += 1) {
        ptrs.push(0);
    }

    while (true) {
        let num, n;
        let position = 0;
        for (let i = position; i < data.length; i += 1) {
            n = data[i][ptrs[i]];
            if (!isNaN(n)) {
                if (typeof num === 'undefined') {
                    num = n;
                }
                if (n <= num) {
                    num = n;
                    position = i;
                }
            }
        }

        ptrs[position] += 1;
        if (typeof num === 'undefined') {
            break;
        }
        result.push(num);
    }

    return result;
};

console.log(kwayMerge(sample));
