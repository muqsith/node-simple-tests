const query = (txt) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(
        new Error("Something went wrong - while querying the database " + txt)
      );
    }, 100);
  });
};

const execQuery = (txt) => {
  try {
    return query(txt);
  } catch (err) {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>> execQuery: \n", err);
  }
};

const execQueryAsync = async (txt) => {
  try {
    const result = await query(txt);
    return result;
  } catch (err) {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>> execQuery: \n", err);
  }
};

const run = async () => {
  await execQuery("SELECT * FROM products");
  // await execQueryAsync("SELECT * FROM products");
};

run();
