function PQueue() {
  const STATUS = {
    PENDING: "pending",
    REJECTED: "rejected",
    RESOLVED: "resolved",
  };

  let status = STATUS.PENDING;

  let q = [];

  let processQ = function () {
    console.log("processing item ....");
    let promiseItem = q.pop();
    status = STATUS.PENDING;
    return new Promise((resolve, reject) => {
      promiseItem
        .then((result) => {
          if (q.length > 0) {
            processQ();
          } else {
            status = STATUS.RESOLVED;
          }
          resolve(Promise.resolve(result));
        })
        .catch((err) => {
          status = STATUS.REJECTED;
          reject(Promise.reject(err));
        });
    });
  };

  this.getStatus = function () {
    return status;
  };

  this.getSize = function () {
    return q.length;
  };

  this.push = function (promiseItem) {
    q.push(promiseItem);
  };
}

// Test

const getPromiseItem = (function () {
  let i = 0;
  return function (timeout) {
    i += 1;
    let j = i;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(j);
        resolve();
      }, timeout || 200);
    });
  };
})();

let qu = new PQueue();

function addToQueue(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      qu.push(getPromiseItem());
      resolve();
    }, timeout);
  });
}

function createAddToQueueRecursively(len) {
  return function addToQueueRecursively(timeout) {
    let t = timeout || 100;
    return new Promise((resolve, reject) => {
      addToQueue(t)
        .then(() => {
          len -= 1;
          if (len < 5) {
            timeout = 600;
          }
          if (len > 0) {
            return addToQueueRecursively(timeout);
          } else {
            return Promise.resolve();
          }
        })
        .then(resolve)
        .catch(reject);
    });
  };
}

const addToQueueRecursively = createAddToQueueRecursively(15);
addToQueueRecursively();
