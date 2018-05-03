
const getRandom = (min, max) => {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
}

const getArrayOfRandomNumbers = (size) => {
    let arr = Array(size).fill(null).map(() => {
        return {key: getRandom(1, size), value: getRandom(1, size)};
    });
    return arr;
}


const getNewNode = (value) => {
    return { left: null, right: null, value };
}

const addNode = (node, element) => {
    if (element.key > node.value.key) {
        if (node.right === null) {
            node.right = getNewNode(element);
        } else {
            return addNode(node.right, element);
        }
    } else if (element.key < node.value.key) {
        if (node.left === null) {
            node.left = getNewNode(element);
        } else {
            return addNode(node.left, element);
        }
    }
}

const getBTree = (arr) => {
    let rootNode = null;
    return () => {
        for (let element of arr) {
            if (!rootNode) {
                rootNode = getNewNode(element);
            } else {
                addNode(rootNode, element);
            }
        }
        return rootNode;
    }
}

const arr = getArrayOfRandomNumbers(200000);

const bTree = getBTree(arr)();

const findMax = () => {
    let rootNode = bTree, previousNode = null, currentNode = rootNode;
    while (currentNode != null) {
        previousNode = currentNode;
        currentNode = currentNode.right;
    }
    return previousNode;
}

const findMaxButLessThan = (n) => {
    let previousNode = null;
    const _findMaxButLessThan = (node) => {
        if (node !== null) {
            if (node.value.key > n) {
                _findMaxButLessThan(node.left);
            } else if (node.value.key < n) {
                if (previousNode !== null && previousNode.value.key < node.value.key) {
                    return previousNode;
                } else {
                    _findMaxButLessThan(node.right);
                }
            }
        } else {
            return previousNode;
        }
    }
    return _findMaxButLessThan;
}

let sortedArray = arr.sort((a, b) => {
    return b.key - a.key;
});

//console.log(findMax().value.key, sortedArray[0].key);
const max = findMax().value.key;
console.log('Max: ', max);
const nMax = findMaxButLessThan(max)(bTree);
console.log(nMax, sortedArray[1].key);
