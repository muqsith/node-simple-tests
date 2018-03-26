function getJSON() {
    return (
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (((Math.random() * 10) | 0) % 2) {
                    resolve({'a': 1, 'b': 2, 'c': 3});
                } else {
                    reject(new Error('not a json'));
                }
            }, 1000);
        })
    );
}

function testPromise() {
    getJSON()
    .then((json) => {
        console.log(json);
    })
    .catch((err) => {
        console.log(err);
    });
}

async function printJSONAsync() {
    let json = await getJSON();
    console.log(json);
}

function testAsyncAwait() {
    printJSONAsync();
}


testPromise();
testAsyncAwait();
