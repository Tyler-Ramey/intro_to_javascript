let rlSync = require("readline-sync");
let firstName = rlSync.question("What is your first name good sir?\n");
let lastName = rlSync.question("What is your last name good sir?\n");
console.log(`Hello, ${firstName} ${lastName}`);