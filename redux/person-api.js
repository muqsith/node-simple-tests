const express = require("express"),
  router = express.Router(),
  { getStore } = require("./store"),
  { addAge, changeLocation } = require("./actions");
const subscribeResponseToStore = (store, res, processState) => {
  let unsubscribe = null;
  if (typeof processState === "function") {
    unsubscribe = store.subscribe(() => {
      processState(store.getState(), res);
    });
  } else {
    unsubscribe = store.subscribe(() => {
      res.send(store.getState());
    });
  }
  res.on("finish", () => {
    unsubscribe();
    console.log("Unsubscribed ...");
  });
};

router.get("/add-age/:age", (req, res, next) => {
  let age = +req.params.age;
  getStore()
    .then((store) => {
      subscribeResponseToStore(store, res);
      store.dispatch(addAge(age));
    })
    .catch((err) => {
      next(err);
    });
});

router.get("/change-location/:location", (req, res, next) => {
  let location = req.params.location;
  getStore()
    .then((store) => {
      subscribeResponseToStore(store, res, (state, res) => {
        res.send(state.location);
      });
      store.dispatch(changeLocation(location));
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
