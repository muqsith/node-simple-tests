function fn(arg) {
    console.log('arguments: ', arg);
    return this.name;
}

let _fn = fn.bind({name:'muqsith'});
_fn = _fn.bind(null, 'abc');

console.log(_fn());