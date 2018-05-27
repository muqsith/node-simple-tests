function batchify(arr, batchSize) {
    if (!Array.isArray(arr)) {
        throw Error('First argument should be of type Array or []');
    }
    if (isNaN(batchSize)) {
        throw Error('Second argument is batch size, pass a number value');
    }
    const records = arr.slice(0);
    let lowerIndex = (-1 * batchSize);
    let higherIndex = 0;
    return function batch() {
        lowerIndex += batchSize;
        higherIndex += Math.min(records.length, batchSize);
        return records.slice(lowerIndex, higherIndex);
    };
};

/****** Test Batchify ****************/
let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
let batch = batchify(arr, 1);

let result = null;

while ((result = batch()).length > 0) {
    console.log(result);
}
