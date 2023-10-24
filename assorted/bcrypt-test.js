const bcrypt = require("bcrypt"),
  saltRounds = 10,
  password = "muqsith";
function thunk(cb) {
  bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      console.log(hash);
      bcrypt.compare("muqsith", hash, (err, res) => {
        console.log(res);
        cb();
      });
    });
  });
}

let i = 0;

function _loop() {
  if (i < 5) {
    i += 1;
    console.log(i);
    thunk(_loop);
  }
}

//_loop();

function compare(hash) {
  bcrypt.compare("muqsith", hash, (err, res) => {
    console.log(res);
  });
}

compare("$2a$10$KLxoZg9dgtAlIx/NRbtMmeMpdQOLJ1xh/oi2HM1owWXHBkXxn5Iay");
compare("$2a$10$EyfG5gXiMYaGwnWNTpra2us5kpSTBuLbBuc1Lt4MnM4epsnfjcRBO");
