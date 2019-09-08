const sample = [
    [3, 4, 5, 6, 7],
    [1, 2, 3, 4, 51, 52, 53],
    [0, 1, 2, 9],
    [401, 501, 601, 701, 801],
    [2, 3, 5, 7, 9, 17],
    [0, 13]
];

const kwayMerge = (data) => {
    let its = 0;

    const result = []

    const ptrs = [];
    for (let i = 0; i < sample.length; i += 1) {
        ptrs.push(0);
    }

    while (its < 10000) {
        for (let i = 0; i < sample.length; i += 1) {
            let n = sample[i][ptrs[i]];

        }
        its += 1;
    }

    return result;
};


console.log(kwayMerge(sample));
