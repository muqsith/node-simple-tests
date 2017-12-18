const getRandomPair = (function () {
    let start = 3, end = 10;
    return function() {
        return ({
            key: Math.ceil(((Math.random() * start) + (Math.random() * (end - start)))),
            value : Math.ceil(((Math.random() * start) + (Math.random() * (end - start))))
        });
    }
})();

let connections = {};

function createConnections({key, value}) {
    if (key === value) {
        return;
    } else {
        if ((connections[key] === value) || (connections[value] === key)) {
            console.log(`${key} : ${value} - connection already exists`);
        } else {
            let connections_keys = Object.keys(connections);
            for (let i=0; i<connections_keys.length; i+=1) {
                let ck = connections_keys[i];
                if (connections.hasOwnProperty(ck)) {
                    if (connections[ck] === value) {
                        connections[value] = key;
                        return;
                    }
                }
            }
            connections[key] = value;
        }
    }
}

for (let i=0; i<4; i+=1) {
    let pair = getRandomPair();
    console.log(pair);
    createConnections(pair);
}

console.log(connections);