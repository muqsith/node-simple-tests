function moody() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${new Date()} :: Hello`);
      resolve();
    }, 1000);
  });
}

async function runMoody() {
  await moody();
}

runMoody();
