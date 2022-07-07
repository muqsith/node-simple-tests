// generate sample

let incr = 127;

const generateSample = (batchSize, batches) => {
  const sample = [];
  for (let i = 0; i < batches; i += 1) {
    const newBatch = [];
    for (let j = 0; j < batchSize; j += 1) {
      incr += 1;
      newBatch.push(incr);
    }
    sample.push(newBatch);
  }

  console.log("[");
  for (let i = 0; i < sample.length; i += 1) {
    console.log(`   ${sample[i].join(",")},`);
  }
  console.log("]");
};

generateSample(10, 10);
