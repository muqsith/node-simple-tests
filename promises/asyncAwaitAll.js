const printWithDelay = (timeout = 500) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

        }, timeout);
    })
};


async function test() {
    const p1 = getPromise();
}

test();
