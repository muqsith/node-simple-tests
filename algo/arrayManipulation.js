// https://www.hackerrank.com/challenges/crush/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=arrays&isFullScreen=true

function arrayManipulation(n, queries) {
    let max = 0;
    const numbersMap = queries.reduce((acc, query) => {
        const a = query[0];
        const b = query[1];
        acc[a] = 0;
        acc[b] = 0;
        return acc;
    }, {});

    for (let i = 0; i < queries.length; i += 1) {
        const query = queries[i];
        const a = query[0];
        const b = query[1];

        const k = query[2];

         Object.keys(numbersMap).forEach((key) => {
            if (key >= a && key <= b) {
                numbersMap[key] += k;
            }
        });
    }

    Object.keys(numbersMap).forEach((key) => {
        if (max < numbersMap[key]) {
            max = numbersMap[key];
        }
    });

    return max;
}