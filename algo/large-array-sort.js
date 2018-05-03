
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
    if (element.key >= node.value.key) {
        if (node.right === null) {
            node.right = getNewNode(element);
        } else {
            return addNode(node.right, element);
        }
    } else if (element.key <= node.value.key) {
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

const findKey = (key) => {
    let previousNode = null;
    const findNode = (node) => {
        if (node.value.key === key) {
            return node;
        } else if (node.value.key > key) {
            previousNode = node;
            if (node.left) {
                return findNode(node.left);
            } else {
                return node;
            }
        } else if (node.value.key < key) {
            previousNode = node;
            if (node.right) {
                return findNode(node.right);
            } else {
                return node;
            }
        }
    }
    return findNode;
}

const findPreviousKey = (key) => {
    let previousNode = null;
    const findPreviousNode = (node) => {
        if (!node) {
            return previousNode;
        } if (node.value.key === key) {
            return previousNode;
        } else if (node.value.key > key) {
            previousNode = node;
            return findPreviousNode(node.left);
        } else if (node.value.key < key) {
            previousNode = node;
            return findPreviousNode(node.right);
        }
    }
    return findPreviousNode;
}

const findMax = () => {
    let rootNode = bTree, previousNode = null, currentNode = rootNode;
    while (currentNode != null) {
        previousNode = currentNode;
        currentNode = currentNode.right;
    }
    return previousNode;
}



let sortedArray = arr.sort((a, b) => {
    return b.key - a.key;
});

const max = findMax().value.key;
console.log('Max: ', max, sortedArray[0].key);

console.log(findKey(sortedArray[0].key)(bTree).value.key, 
    findPreviousKey(sortedArray[0].key)(bTree).value.key);
