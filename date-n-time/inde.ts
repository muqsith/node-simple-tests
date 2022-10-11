import {
  getTimestamp,
  getTimestampWithSecondsAdded,
  isTimestamp1LessthanTimestamp2,
} from "./util";

const run = async () => {
  const t1 = getTimestamp(Date.now());
  console.log("t1: ", t1);

  const secs = 30;
  const t2 = getTimestampWithSecondsAdded(t1, secs);
  console.log("t2: ", t2);

  console.log(
    "isTimestamp1LessthanTimestamp2(t1, t2): ",
    isTimestamp1LessthanTimestamp2(t1, t2)
  );

  console.log(
    "isTimestamp1LessthanTimestamp2(t2, t1): ",
    isTimestamp1LessthanTimestamp2(t2, t1)
  );
};

run();
