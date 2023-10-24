const { getStore } = require("./store");
const { addAge, changeLocation } = require("./actions");

getStore()
  .then((store) => {
    console.log("Initial state: ", store.getState());

    const unsubscribe = store.subscribe(() => {
      console.log("state: ", store.getState());
    });

    store.dispatch(addAge(1));
    store.dispatch(changeLocation("Home"));
  })
  .catch((err) => {
    console.log(err);
  });
