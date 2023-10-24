const fs = require("fs"),
  loki = require("lokijs");

function createDatabase() {
  let db = new loki("thor");
  let users = db.addCollection("users", { autosave: true, indices: ["email"] });

  let odin = users.insert({
    name: "odin",
    email: "odin.soap@lokijs.org",
    age: 38,
  });
  let thor = users.insert({
    name: "thor",
    email: "thor.soap@lokijs.org",
    age: 25,
  });
  let stan = users.insert({
    name: "stan",
    email: "stan.soap@lokijs.org",
    age: 29,
  });
  let oliver = users.insert({
    name: "oliver",
    email: "oliver.soap@lokijs.org",
    age: 31,
  });
  let hector = users.insert({
    name: "hector",
    email: "hector.soap@lokijs.org",
    age: 15,
  });
  let achilles = users.insert({
    name: "achilles",
    email: "achilles.soap@lokijs.org",
    age: 31,
  });

  let data = users.chain().find({}).data();
  db.saveDatabase();

  console.log(data);
}

function loadDatabase() {
  console.log(fs.existsSync("thor"));
  let lfsa = loki.LokiFsAdapter("users");
  let db = new loki("./thor", { adapter: lfsa, autoload: true });
  db.loadDatabase({}, function (result) {
    console.log(result);
    // put your log call here.
    alert(db.getCollection("users"));
  });
  console.log(db);
  //let data = users.chain().find({}).data();

  //console.log(data);
}

loadDatabase();
