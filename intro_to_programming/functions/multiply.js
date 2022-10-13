function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  let number = readlineSync.question(prompt);
  return number;
}

function multiply(num1, num2) {
  return num1 * num2;
}

let num1 = getNumber('Enter the first number: ');
let num2 = getNumber('Enter the second number: ');
let result = multiply(num1, num2);

console.log(`${num1} * ${num2} = ${result}`);