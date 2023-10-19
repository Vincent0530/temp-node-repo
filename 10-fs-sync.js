const { readFileSync, writeFileSync } = require("fs"); // Build in module
const path = require("path");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("content/second.txt", "utf8");

// console.log(path.join(__dirname, "content", "first.txt"));

// console.log(first, second);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "a" } //This will append
);
