// https://www.hackerrank.com/challenges/crush/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=arrays&isFullScreen=true

function arrayManipulation(n, queries) {
    let max = 0;

    const m = queries.reduce((acc, query) => {
        const a = query[0];
        const b = query[1];
        const k = query[2];
        if (typeof acc[a] === 'undefined') {
            acc[a] = 0;
        }

        if (typeof acc[b+1] === 'undefined') {
            acc[b+1] = 0;
        }
        acc[a] += k;
        acc[b+1] += -k;
        return acc;
    }, {});

    const array = Array(n).fill(0);
    let s = 0;
    for (let i = 0; i <= n; i += 1) {
        if (typeof m[i] !== 'undefined') {
            s += m[i]
        }
        array[i] = s;
        if (max < array[i]) {
            max = array[i];
        }
    }

    return max;

}