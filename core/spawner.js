const { exec, spawn } = require("child_process");
const ls = spawn("ls", ["-lh", "/usr"]);

ls.stdout.on("data", (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on("data", (data) => {
  console.log(`stderr: ${data}`);
});

ls.on("close", (code) => {
  console.log(`child process exited with code ${code}`);
});

exec("ls -alh /usr", (err, stdout, stderr) => {
  if (err) {
    console.log("Error occurred: ", err);
    console.log("stderr: ", stderr);
  } else {
    console.log("stdout: ", typeof stdout, stdout);
    const msg = stdout.substring(stdout.length - 100);
    console.log(">>>>>>>>>>>>>>>>>>>>>>> msg: ", msg);
    console.log("stderr: ", stderr);
  }
});
