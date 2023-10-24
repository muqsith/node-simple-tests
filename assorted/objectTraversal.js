const traverse = require("traverse");

// const a = {
//     a: 1,
//     b: {
//         c: 'lskdf',
//         d: [1, {e: 'Elephant', 'f.12': 'Something very important'}]
//     }
// }

//const a = {"id":"119549e6-77c6-4ad7-a6f0-4836e97896c8","domain":"1e8953ec-ab1f-432e-9cbb-ee57c74d3759","productid":"2a8dacef-4b46-437e-9712-6cd5a2efde1b","values":[],"quantity":0,"unlimited":false,"optionsvalues":{"EF0109.010.14":"Chroom Blinkend"},"weight":0,"sku":"1","imageid":null,"price":"88.08","oldprice":null,"hash":"349291"};
const a = {
  unlimited: false,
  optionsvalues: { "EF0109.010.14": "Chroom Blinkend" },
};

console.log(JSON.stringify(a));

const b = traverse(a).map((o) => {
  for (const key in o) {
    const updatedKey = key.replace(/\./g, "_");
    o[updatedKey] = o[key];
    if (updatedKey !== key) {
      delete o[key];
    }
  }
  return o;
});

console.log("\n\n\nreturned object");
console.log(JSON.stringify(b));
