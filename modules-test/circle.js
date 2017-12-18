const { PI } = Math;

console.log(exports === module.exports);

exports.area = r => PI * r * r;

exports.circumference = r => {
  if (r > 0) return 2 * PI * r;
  else return 0;
};
