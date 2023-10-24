const dashes = "___";
let s =
  "___t___ &nbsp;&nbsp;d___fdf___d dfdf df___d209~!@#$%^&*(_)+=;.,./<>123456789kf___df dfdf ___d___kjfd ___dl___ d dfdf ___dfdfd___&nbsp;&nbsp;";

let result = [];

let parts = s.split("___");

let previous = true;

for (let i = 0; i < parts.length; i += 1) {
  if (previous) {
    result.push(parts[i]);
    previous = false;
    continue;
  }
  result.push("___" + parts[i] + "___");
  previous = true;
}

console.log(parts);
console.log(result);
console.log(result.join("") === s);
