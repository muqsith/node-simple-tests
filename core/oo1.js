const crypto = require('crypto'),
    util = require('util')
    ;


class DatabaseConnector {

    constructor(a, b, c) {
        console.log(a, b, c);
    }

    query0(str) {
        const hash = crypto.createHmac('sha256', 'secret')
                   .update(str)
                   .digest('hex');
        return hash;
    }

    query1(options, cb) {
        let result = ['a', 'b', 'c', 'd', 'e'];
        setTimeout(() => {
            cb(result);
        }, 200);
    }

    query2(opt1, opt2, cb) {
        let result = ['1', '2', '3', '4', '5', '6'];
        setTimeout(() => {
            cb(result);
        }, 100);
    }

    query3(opt1) {
        return (
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (((Math.random() * 100) | 0) % 2) {
                        resolve('heheheh ...');
                    } else {
                        reject(new Error('booo booo'));
                    }
                }, 1000);
            })
        )
    }
}


class Dummy extends DatabaseConnector {
    constructor(a, b, c) {
        super(a, b, c)
    }
}

// creation of dal
const _dal = new Dummy(1,2,3);

function logger(fName, args, t1, t2) {
    console.log(fName, util.inspect(args), t1, t2);
}

const getFunctionsNames = (obj) => {
    // courtesy: https://stackoverflow.com/a/31055217/2388706
    let fNames = [];
    do {
        fNames = fNames.concat(Object.getOwnPropertyNames(obj).filter((p) => (p !== 'constructor' && typeof obj[p] === 'function')));
    } while ((obj = Object.getPrototypeOf(obj)) && obj !== Object.prototype);

    return fNames;
}

const addTimeLogging = (obj) => {
    let fNames = getFunctionsNames(obj);
    for (let fName of fNames) {
        let originalFunction = obj[fName];
        let wrapperFunction = (...args) => {
            let callbackFnIndex = -1;
            let startTime = Date.now();
            let _callBack = args.filter((arg, i) => {
                    let _isFunction = (typeof arg === 'function');
                    if (_isFunction) {
                        callbackFnIndex = i;
                    }
                    return _isFunction;
                })[0];
            if (_callBack) {
                let callbackWrapper = (...callbackArgs) => {
                    let endTime = Date.now();
                    logger(fName, args, startTime, endTime);
                    _callBack.apply(null, callbackArgs);
                }
                args[callbackFnIndex] = callbackWrapper;
            }
            let originalReturnObject = originalFunction.apply(obj, args);
            let isPromiseType = originalReturnObject && typeof originalReturnObject.then === 'function';
            if (isPromiseType) {
                originalReturnObject
                .then((...resolveArgs) => {
                    let endTime = Date.now();
                    logger(fName, args, startTime, endTime);
                    return Promise.resolve(resolveArgs);
                })
                .catch((...rejectArgs) => {
                    let endTime = Date.now();
                    logger(fName, args, startTime, endTime);
                    return Promise.reject(rejectArgs);
                })
            }
            if (!_callBack && !isPromiseType) {
                let endTime = Date.now();
                logger(fName, args, startTime, endTime);
            }
            return originalReturnObject;
        }
        obj[fName] = wrapperFunction;
    }

    return obj;
}

const dal = addTimeLogging(_dal);

// users of dal
console.log(dal.query0('muqsith'));
dal.query1('select * from persons', console.log);
dal.query2(null, null, console.log);
dal.query3('promise')
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
});
