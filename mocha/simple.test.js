describe("#Test mocha", function () {
  it("# check describe", function () {
    let d = describe("some title...", Function.prototype);
    console.log(typeof d);
  });
  it("# check it", function () {
    let i = it("some title ...", function () {
      return new Promise();
    });
    console.log(i instanceof Promise);
  });
});
