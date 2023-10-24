function ModuleA(ctime) {
  console.log("loadring module A ...", ctime);

  this.createdTime = ctime;

  this.printCreatedTime = function () {
    console.log(this.createdTime);
  };
}

module.exports = new ModuleA(new Date());
