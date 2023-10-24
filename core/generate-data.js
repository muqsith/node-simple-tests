const fs = require("fs");
out = fs.createWriteStream("../data/all-completed-jobs-huge.txt");

let lines = fs
  .readFileSync("../data/all-completed-jobs.txt")
  .toString()
  .split("\n");

let start_date = new Date(2017, 7, 1); // 1st August 2017

let now = new Date(Date.now());

let seconds = 0 | ((now.getTime() - start_date.getTime()) / 1000);

for (
  let i = 0, timestamp = start_date.getTime(), line_index = 0;
  i < seconds;
  i += 1, line_index += 1, timestamp += 1000
) {
  if (line_index === lines.length) {
    line_index = 0;
  }
  let line = lines[line_index];
  try {
    let record = JSON.parse(line);
    record["endTimestamp"] = timestamp;
    record["startTime"] = new Date(timestamp).toISOString();
    record["endTime"] = new Date(timestamp + 1000).toISOString();
    out.write(JSON.stringify(record) + "\n");
  } catch (e) {}
}
