function getSum(a, b) {
    return (
        new Promise(function(resolve, reject) {
            let sum = a+b;
            if (sum > 10) {
                reject({status:'error', message: 'Result cannot be greater than 10'});
            } else {
                resolve(sum);
            }
        })
    );
}

function getDiv(a, b) {
    return (
        new Promise(function(resolve, reject) {
            let div = a/b;
            if (div === Infinity) {
                throw new Error('Cannot divide by zero');
            } else if (div < 1) {
                reject({status:'error', message: 'Result cannot be less than 1'});
            } else {
                resolve(div);
            }
        })
    );
}




getDiv(+process.argv[2], +process.argv[3])
.then((result) => {
    console.log(result);
})
.catch((err) => {
    console.log('Exception occured', err);
});