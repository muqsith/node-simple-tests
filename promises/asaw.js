function test1() {
  return Promise.resolve(10);
}

async function test2() {
  return 20;
}

async function main() {
  const v1 = await test1();
  const v2 = await test2();
  console.log(v1, v2);
}

main();

function main2() {
  test1().then((v1) => console.log(v1));
  test2().then((v2) => console.log(v2));
}

main2();
