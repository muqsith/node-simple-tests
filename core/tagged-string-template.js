function myTag(literals, ...keys) {
  console.log(...keys);
  return literals.join(" ");
}
let name = "Muqsith";
let moment = "today";
let str = myTag`hello ${name}, how are you ${moment} ?`;

console.log(str);
