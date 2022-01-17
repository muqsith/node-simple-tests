/*
Write a utility that will GET a record from a REST API endpoint, perform 
some operations to the data, then PUT the processed data to the same 
endpoint.
It should be possible to provide an array of record IDs that need to be
processed. There should be a way to specify the maximum number of concurrent
connections for both GET and PUT URLs.

Eg:

var utility = new Utility({
    url: '/api/records/',
    maxGet: 10,
    maxPut: 2,
    processFn: function (data) {
        data.processed = true;
        return data;
    }
});

utility.start([1, 2, 3, 4, ... , 499, 500]);

*/

const performGet = (num) => {
  return new Promise((resolve, reject) => {
    console.log(`getting <<<<<<<<<<<<<<<<<<<<< id ${num} ...`);
    setTimeout(() => {
      resolve({ id: num });
    }, 10);
  });
};

const performPut = (o) => {
  return new Promise((resolve, reject) => {
    console.log(`putting >>>>>>>>>>> id ${o.id} - ${o.processed} ...`);
    setTimeout(() => {
      resolve(o);
    }, 50);
  });
};

class Utility {
  constructor(options) {
    this.url = options.url;
    this.maxGet = options.maxGet;
    this.maxPut = options.maxPut;
    this.processFn = options.processFn;

    this.currentGetRequests = 0;
    this.currentPutRequests = 0;
    this.results = [];
  }

  async start(ids) {
    while (ids.length > 0 || this.results.length > 0) {
      if (ids.length > 0 && this.currentGetRequests < this.maxGet) {
        let idsToTake = this.maxGet - this.currentGetRequests;
        if (ids.length < idsToTake) {
          idsToTake = ids.length;
        }
        const getRequestPromises = [];
        for (let i = 0; i < idsToTake; i += 1) {
          const id = ids.shift();
          getRequestPromises.push(performGet(id));
        }
        this.currentGetRequests += idsToTake;
        const getRequestResults = await Promise.all(getRequestPromises);
        for (let i = 0; i < getRequestResults.length; i += 1) {
          const result = getRequestResults[i];
          this.processFn(result);
          this.results.push(result);
        }
        this.currentGetRequests -= idsToTake;
      }

      if (this.results.length > 0 && this.currentPutRequests < this.maxPut) {
        let resultsToTake = this.maxPut - this.currentPutRequests;
        if (this.results.length < resultsToTake) {
          resultsToTake = this.results.length;
        }
        const putRequestPromises = [];
        for (let i = 0; i < resultsToTake; i += 1) {
          const result = this.results.shift();
          putRequestPromises.push(performPut(result));
        }
        if (putRequestPromises.length > 0) {
          this.currentPutRequests += resultsToTake;
          await Promise.all(putRequestPromises);
          this.currentPutRequests -= resultsToTake;
        }
      }
    }
  }
}

const utility = new Utility({
  url: "/api/records/",
  maxGet: 10,
  maxPut: 2,
  processFn: function (data) {
    data.processed = true;
    return data;
  },
});

utility.start(
  Array(100)
    .fill(0)
    .map((n, i) => i)
);
