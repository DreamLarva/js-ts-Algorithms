const {spawnSync, spawn, execFileSync} = require("child_process");

/*
const nude = spawn(
  "cargo",
  ["run", "--release", "--example", "scan", "/Users/yangjiaqi/Desktop/project/nude-rs/test_data/damita.jpg"],
  {
    cwd: "/Users/yangjiaqi/Desktop/project/nude-rs/",
  }
);

nude.stdout.on("data", (data) => {
  console.log(`stdout: ${data}`);
});

nude.stderr.on("data", (data) => {
  console.log(data.toString());
});

nude.on("close", (code) => {
  console.log(`子进程退出，退出码 ${code}`);
});
*/

const nude = spawnSync(
  "cargo",
  [
    "run",
    "--release",
    "--example",
    "scan",
    "/Users/yangjiaqi/Desktop/project/nude-rs/test_data/damita.jpg",
  ],
  {
    cwd: "/Users/yangjiaqi/Desktop/project/nude-rs/",
  }
);

console.log(nude);
// console.log(nude.output.toString());
console.log(nude.stdout.toString());
console.log(
  nude.stdout.toString()
    .match(/{.*}/)[0]
    .replace("{", "")
    .replace("}", "")
    .split(",")
    .map(str => str.split(":").map(v => v.trim()))
);
