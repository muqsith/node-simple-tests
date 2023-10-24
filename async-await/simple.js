const sum = async (a, b) => {
  setTimeout(() => {
    return a + b;
  }, 1000);
};

async function test() {
  console.log(await sum(4, 5));
}

test();
