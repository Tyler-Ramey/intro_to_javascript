let rlSync = require("readline-sync");
let age = Number(rlSync.question('What is thy age?\n'));

for (let years = 10; years <= 40; years += 10) {
  console.log(`In ${years} years you will be ${age + years}`);
}