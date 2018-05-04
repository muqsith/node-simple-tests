const store =  require('./store');
const { addAge } = require('./actions');

console.log('Initial state: ', store.getState());

const unsubscribe = store.subscribe(() => {
    console.log('state: ', store.getState());
});

store.dispatch(addAge(1));