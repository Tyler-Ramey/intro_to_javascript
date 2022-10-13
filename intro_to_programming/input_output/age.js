let rlSync = require("readline-sync");
let age = Number(rlSync.question('What is thy age?\n'));

console.log(`In 10 years, you will be ${age} years oldl.`);
console.log(`In 20 years, you will be ${age + 10} years oldl.`);
console.log(`In 30 years, you will be ${age + 20} years oldl.`);
console.log(`In 40 years, you will be ${age + 30} years oldl.`);