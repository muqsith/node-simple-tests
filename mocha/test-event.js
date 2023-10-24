const EventEmitter = require("events"),
  testEvent = new EventEmitter();
testEvent.on("x-event", () => {
  setTimeout(() => {
    console.log("x-event emitted and received.");
  }, 2000);
});

describe("#EventTesting", function () {
  it("Check if the system returns before event handler is completed", function () {
    testEvent.emit("x-event");
  });
});
