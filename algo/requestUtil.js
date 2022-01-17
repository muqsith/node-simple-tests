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
    console.log(`getting id ${num} ...`);
    setTimeout(() => {
      resolve({ id: num });
    }, 100);
  });
};

const performPut = (o) => {
  return new Promise((resolve, reject) => {
    console.log(`putting id ${o.id} ...`);
    setTimeout(() => {
      resolve(o);
    }, 100);
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
    while (ids.length > 0) {
      console.log("i am here");
      if (this.currentGetRequests < 10) {
        const id = ids.shift();
        this.currentGetRequests += 1;
        const result = await performGet(id);
        this.processFn(result);
        this.results.push(result);
        this.currentGetRequests -= 1;
      }
      if (this.results.length > 0 && this.currentPutRequests < 2) {
        const result = this.results.shift();
        this.currentPutRequests += 1;
        await performPut(result);
        this.currentPutRequests -= 1;
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
